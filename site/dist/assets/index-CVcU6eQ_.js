var fx=Object.defineProperty;var px=(n,t,e)=>t in n?fx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var L=(n,t,e)=>px(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();var vf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},mx=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const r=n[e++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[e++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[e++],o=n[e++],a=n[e++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[e++],o=n[e++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(e[u],e[h],e[f],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ig(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):mx(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=e[n.charAt(r++)],a=r<n.length?e[n.charAt(r)]:0;++r;const l=r<n.length?e[n.charAt(r)]:64;++r;const h=r<n.length?e[n.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new gx;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _x=function(n){const t=Ig(n);return Ag.encodeByteArray(t,!0)},Ka=function(n){return _x(n).replace(/\./g,"")},kg=function(n){try{return Ag.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function yx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vx=()=>yx().__FIREBASE_DEFAULTS__,bx=()=>{if(typeof process>"u"||typeof vf>"u")return;const n=vf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&kg(n[1]);return t&&JSON.parse(t)},Ac=()=>{try{return vx()||bx()||xx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sg=n=>{var t,e;return(e=(t=Ac())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Cg=n=>{const t=Sg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Pg=()=>{var n;return(n=Ac())===null||n===void 0?void 0:n.config},Rg=n=>{var t;return(t=Ac())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function Dg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ka(JSON.stringify(e)),Ka(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ex(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Tx(){var n;const t=(n=Ac())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ix(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ax(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sx(){const n=De();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cx(){return!Tx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Px(){try{return typeof indexedDB=="object"}catch{return!1}}function Rx(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="FirebaseError";class An extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Dx,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Mx(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new An(r,a,s)}}function Mx(n,t){return n.replace(Ox,(e,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Ox=/\{\$([^}]+)}/g;function Nx(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Qa(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const r of e){if(!s.includes(r))return!1;const i=n[r],o=t[r];if(bf(i)&&bf(o)){if(!Qa(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!e.includes(r))return!1;return!0}function bf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Di(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");t[decodeURIComponent(r)]=decodeURIComponent(i)}}),t}function Mi(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Lx(n,t){const e=new Vx(n,t);return e.subscribe.bind(e)}class Vx{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let r;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Fx(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:s},r.next===void 0&&(r.next=Sl),r.error===void 0&&(r.error=Sl),r.complete===void 0&&(r.complete=Sl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fx(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Sl(){}/**
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
 */function Jt(n){return n&&n._delegate?n._delegate:n}class ys{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const $s="[DEFAULT]";/**
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
 */class $x{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new wx;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ux(t))try{this.getOrInitializeService({instanceIdentifier:$s})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=$s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$s){return this.instances.has(t)}getOptions(t=$s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,e){var s;const r=this.normalizeInstanceIdentifier(e),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const r of s)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bx(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=$s){return this.component?this.component.multipleInstances?t:$s:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bx(n){return n===$s?void 0:n}function Ux(n){return n.instantiationMode==="EAGER"}/**
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
 */class jx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new $x(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ht||(ht={}));const zx={debug:ht.DEBUG,verbose:ht.VERBOSE,info:ht.INFO,warn:ht.WARN,error:ht.ERROR,silent:ht.SILENT},Hx=ht.INFO,qx={[ht.DEBUG]:"log",[ht.VERBOSE]:"log",[ht.INFO]:"info",[ht.WARN]:"warn",[ht.ERROR]:"error"},Wx=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),r=qx[t];if(r)console[r](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ru{constructor(t){this.name=t,this._logLevel=Hx,this._logHandler=Wx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ht))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zx[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ht.DEBUG,...t),this._logHandler(this,ht.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ht.VERBOSE,...t),this._logHandler(this,ht.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ht.INFO,...t),this._logHandler(this,ht.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ht.WARN,...t),this._logHandler(this,ht.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ht.ERROR,...t),this._logHandler(this,ht.ERROR,...t)}}const Gx=(n,t)=>t.some(e=>n instanceof e);let xf,wf;function Yx(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kx(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mg=new WeakMap,ld=new WeakMap,Og=new WeakMap,Cl=new WeakMap,iu=new WeakMap;function Qx(n){const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(ps(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Mg.set(e,n)}).catch(()=>{}),iu.set(t,n),t}function Xx(n){if(ld.has(n))return;const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ld.set(n,t)}let dd={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ld.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Og.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ps(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jx(n){dd=n(dd)}function Zx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(Pl(this),t,...e);return Og.set(s,t.sort?t.sort():[t]),ps(s)}:Kx().includes(n)?function(...t){return n.apply(Pl(this),t),ps(Mg.get(this))}:function(...t){return ps(n.apply(Pl(this),t))}}function t0(n){return typeof n=="function"?Zx(n):(n instanceof IDBTransaction&&Xx(n),Gx(n,Yx())?new Proxy(n,dd):n)}function ps(n){if(n instanceof IDBRequest)return Qx(n);if(Cl.has(n))return Cl.get(n);const t=t0(n);return t!==n&&(Cl.set(n,t),iu.set(t,n)),t}const Pl=n=>iu.get(n);function e0(n,t,{blocked:e,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,t),a=ps(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ps(o.result),c.oldVersion,c.newVersion,ps(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const n0=["get","getKey","getAll","getAllKeys","count"],s0=["put","add","delete","clear"],Rl=new Map;function Ef(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Rl.get(t))return Rl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,r=s0.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(r||n0.includes(e)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),r&&c.done]))[0]};return Rl.set(t,i),i}Jx(n=>({...n,get:(t,e,s)=>Ef(t,e)||n.get(t,e,s),has:(t,e)=>!!Ef(t,e)||n.has(t,e)}));/**
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
 */class r0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(i0(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function i0(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ud="@firebase/app",Tf="0.10.13";/**
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
 */const qn=new ru("@firebase/app"),o0="@firebase/app-compat",a0="@firebase/analytics-compat",c0="@firebase/analytics",l0="@firebase/app-check-compat",d0="@firebase/app-check",u0="@firebase/auth",h0="@firebase/auth-compat",f0="@firebase/database",p0="@firebase/data-connect",m0="@firebase/database-compat",g0="@firebase/functions",_0="@firebase/functions-compat",y0="@firebase/installations",v0="@firebase/installations-compat",b0="@firebase/messaging",x0="@firebase/messaging-compat",w0="@firebase/performance",E0="@firebase/performance-compat",T0="@firebase/remote-config",I0="@firebase/remote-config-compat",A0="@firebase/storage",k0="@firebase/storage-compat",S0="@firebase/firestore",C0="@firebase/vertexai-preview",P0="@firebase/firestore-compat",R0="firebase",D0="10.14.1";/**
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
 */const hd="[DEFAULT]",M0={[ud]:"fire-core",[o0]:"fire-core-compat",[c0]:"fire-analytics",[a0]:"fire-analytics-compat",[d0]:"fire-app-check",[l0]:"fire-app-check-compat",[u0]:"fire-auth",[h0]:"fire-auth-compat",[f0]:"fire-rtdb",[p0]:"fire-data-connect",[m0]:"fire-rtdb-compat",[g0]:"fire-fn",[_0]:"fire-fn-compat",[y0]:"fire-iid",[v0]:"fire-iid-compat",[b0]:"fire-fcm",[x0]:"fire-fcm-compat",[w0]:"fire-perf",[E0]:"fire-perf-compat",[T0]:"fire-rc",[I0]:"fire-rc-compat",[A0]:"fire-gcs",[k0]:"fire-gcs-compat",[S0]:"fire-fst",[P0]:"fire-fst-compat",[C0]:"fire-vertex","fire-js":"fire-js",[R0]:"fire-js-all"};/**
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
 */const Xa=new Map,O0=new Map,fd=new Map;function If(n,t){try{n.container.addComponent(t)}catch(e){qn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function tr(n){const t=n.name;if(fd.has(t))return qn.debug(`There were multiple attempts to register component ${t}.`),!1;fd.set(t,n);for(const e of Xa.values())If(e,n);for(const e of O0.values())If(e,n);return!0}function kc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Nn(n){return n.settings!==void 0}/**
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
 */const N0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ms=new Eo("app","Firebase",N0);/**
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
 */class L0{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const dr=D0;function Ng(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:hd,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw ms.create("bad-app-name",{appName:String(r)});if(e||(e=Pg()),!e)throw ms.create("no-options");const i=Xa.get(r);if(i){if(Qa(e,i.options)&&Qa(s,i.config))return i;throw ms.create("duplicate-app",{appName:r})}const o=new jx(r);for(const c of fd.values())o.addComponent(c);const a=new L0(e,s,o);return Xa.set(r,a),a}function ou(n=hd){const t=Xa.get(n);if(!t&&n===hd&&Pg())return Ng();if(!t)throw ms.create("no-app",{appName:n});return t}function yn(n,t,e){var s;let r=(s=M0[n])!==null&&s!==void 0?s:n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qn.warn(a.join(" "));return}tr(new ys(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const V0="firebase-heartbeat-database",F0=1,no="firebase-heartbeat-store";let Dl=null;function Lg(){return Dl||(Dl=e0(V0,F0,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(no)}catch(e){console.warn(e)}}}}).catch(n=>{throw ms.create("idb-open",{originalErrorMessage:n.message})})),Dl}async function $0(n){try{const e=(await Lg()).transaction(no),s=await e.objectStore(no).get(Vg(n));return await e.done,s}catch(t){if(t instanceof An)qn.warn(t.message);else{const e=ms.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qn.warn(e.message)}}}async function Af(n,t){try{const s=(await Lg()).transaction(no,"readwrite");await s.objectStore(no).put(t,Vg(n)),await s.done}catch(e){if(e instanceof An)qn.warn(e.message);else{const s=ms.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});qn.warn(s.message)}}}function Vg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const B0=1024,U0=30*24*60*60*1e3;class j0{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new H0(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=U0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){qn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kf(),{heartbeatsToSend:s,unsentEntries:r}=z0(this._heartbeatsCache.heartbeats),i=Ka(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return qn.warn(e),""}}}function kf(){return new Date().toISOString().substring(0,10)}function z0(n,t=B0){const e=[];let s=n.slice();for(const r of n){const i=e.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Sf(e)>t){i.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),Sf(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class H0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Px()?Rx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await $0(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Af(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Af(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Sf(n){return Ka(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function q0(n){tr(new ys("platform-logger",t=>new r0(t),"PRIVATE")),tr(new ys("heartbeat",t=>new j0(t),"PRIVATE")),yn(ud,Tf,n),yn(ud,Tf,"esm2017"),yn("fire-js","")}q0("");var W0="firebase",G0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(W0,G0,"app");var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ws,Fg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,b){function x(){}x.prototype=b.prototype,w.D=b.prototype,w.prototype=new x,w.prototype.constructor=w,w.C=function(S,I,D){for(var C=Array(arguments.length-2),J=2;J<arguments.length;J++)C[J-2]=arguments[J];return b.prototype[I].apply(S,C)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,b,x){x||(x=0);var S=Array(16);if(typeof b=="string")for(var I=0;16>I;++I)S[I]=b.charCodeAt(x++)|b.charCodeAt(x++)<<8|b.charCodeAt(x++)<<16|b.charCodeAt(x++)<<24;else for(I=0;16>I;++I)S[I]=b[x++]|b[x++]<<8|b[x++]<<16|b[x++]<<24;b=w.g[0],x=w.g[1],I=w.g[2];var D=w.g[3],C=b+(D^x&(I^D))+S[0]+3614090360&4294967295;b=x+(C<<7&4294967295|C>>>25),C=D+(I^b&(x^I))+S[1]+3905402710&4294967295,D=b+(C<<12&4294967295|C>>>20),C=I+(x^D&(b^x))+S[2]+606105819&4294967295,I=D+(C<<17&4294967295|C>>>15),C=x+(b^I&(D^b))+S[3]+3250441966&4294967295,x=I+(C<<22&4294967295|C>>>10),C=b+(D^x&(I^D))+S[4]+4118548399&4294967295,b=x+(C<<7&4294967295|C>>>25),C=D+(I^b&(x^I))+S[5]+1200080426&4294967295,D=b+(C<<12&4294967295|C>>>20),C=I+(x^D&(b^x))+S[6]+2821735955&4294967295,I=D+(C<<17&4294967295|C>>>15),C=x+(b^I&(D^b))+S[7]+4249261313&4294967295,x=I+(C<<22&4294967295|C>>>10),C=b+(D^x&(I^D))+S[8]+1770035416&4294967295,b=x+(C<<7&4294967295|C>>>25),C=D+(I^b&(x^I))+S[9]+2336552879&4294967295,D=b+(C<<12&4294967295|C>>>20),C=I+(x^D&(b^x))+S[10]+4294925233&4294967295,I=D+(C<<17&4294967295|C>>>15),C=x+(b^I&(D^b))+S[11]+2304563134&4294967295,x=I+(C<<22&4294967295|C>>>10),C=b+(D^x&(I^D))+S[12]+1804603682&4294967295,b=x+(C<<7&4294967295|C>>>25),C=D+(I^b&(x^I))+S[13]+4254626195&4294967295,D=b+(C<<12&4294967295|C>>>20),C=I+(x^D&(b^x))+S[14]+2792965006&4294967295,I=D+(C<<17&4294967295|C>>>15),C=x+(b^I&(D^b))+S[15]+1236535329&4294967295,x=I+(C<<22&4294967295|C>>>10),C=b+(I^D&(x^I))+S[1]+4129170786&4294967295,b=x+(C<<5&4294967295|C>>>27),C=D+(x^I&(b^x))+S[6]+3225465664&4294967295,D=b+(C<<9&4294967295|C>>>23),C=I+(b^x&(D^b))+S[11]+643717713&4294967295,I=D+(C<<14&4294967295|C>>>18),C=x+(D^b&(I^D))+S[0]+3921069994&4294967295,x=I+(C<<20&4294967295|C>>>12),C=b+(I^D&(x^I))+S[5]+3593408605&4294967295,b=x+(C<<5&4294967295|C>>>27),C=D+(x^I&(b^x))+S[10]+38016083&4294967295,D=b+(C<<9&4294967295|C>>>23),C=I+(b^x&(D^b))+S[15]+3634488961&4294967295,I=D+(C<<14&4294967295|C>>>18),C=x+(D^b&(I^D))+S[4]+3889429448&4294967295,x=I+(C<<20&4294967295|C>>>12),C=b+(I^D&(x^I))+S[9]+568446438&4294967295,b=x+(C<<5&4294967295|C>>>27),C=D+(x^I&(b^x))+S[14]+3275163606&4294967295,D=b+(C<<9&4294967295|C>>>23),C=I+(b^x&(D^b))+S[3]+4107603335&4294967295,I=D+(C<<14&4294967295|C>>>18),C=x+(D^b&(I^D))+S[8]+1163531501&4294967295,x=I+(C<<20&4294967295|C>>>12),C=b+(I^D&(x^I))+S[13]+2850285829&4294967295,b=x+(C<<5&4294967295|C>>>27),C=D+(x^I&(b^x))+S[2]+4243563512&4294967295,D=b+(C<<9&4294967295|C>>>23),C=I+(b^x&(D^b))+S[7]+1735328473&4294967295,I=D+(C<<14&4294967295|C>>>18),C=x+(D^b&(I^D))+S[12]+2368359562&4294967295,x=I+(C<<20&4294967295|C>>>12),C=b+(x^I^D)+S[5]+4294588738&4294967295,b=x+(C<<4&4294967295|C>>>28),C=D+(b^x^I)+S[8]+2272392833&4294967295,D=b+(C<<11&4294967295|C>>>21),C=I+(D^b^x)+S[11]+1839030562&4294967295,I=D+(C<<16&4294967295|C>>>16),C=x+(I^D^b)+S[14]+4259657740&4294967295,x=I+(C<<23&4294967295|C>>>9),C=b+(x^I^D)+S[1]+2763975236&4294967295,b=x+(C<<4&4294967295|C>>>28),C=D+(b^x^I)+S[4]+1272893353&4294967295,D=b+(C<<11&4294967295|C>>>21),C=I+(D^b^x)+S[7]+4139469664&4294967295,I=D+(C<<16&4294967295|C>>>16),C=x+(I^D^b)+S[10]+3200236656&4294967295,x=I+(C<<23&4294967295|C>>>9),C=b+(x^I^D)+S[13]+681279174&4294967295,b=x+(C<<4&4294967295|C>>>28),C=D+(b^x^I)+S[0]+3936430074&4294967295,D=b+(C<<11&4294967295|C>>>21),C=I+(D^b^x)+S[3]+3572445317&4294967295,I=D+(C<<16&4294967295|C>>>16),C=x+(I^D^b)+S[6]+76029189&4294967295,x=I+(C<<23&4294967295|C>>>9),C=b+(x^I^D)+S[9]+3654602809&4294967295,b=x+(C<<4&4294967295|C>>>28),C=D+(b^x^I)+S[12]+3873151461&4294967295,D=b+(C<<11&4294967295|C>>>21),C=I+(D^b^x)+S[15]+530742520&4294967295,I=D+(C<<16&4294967295|C>>>16),C=x+(I^D^b)+S[2]+3299628645&4294967295,x=I+(C<<23&4294967295|C>>>9),C=b+(I^(x|~D))+S[0]+4096336452&4294967295,b=x+(C<<6&4294967295|C>>>26),C=D+(x^(b|~I))+S[7]+1126891415&4294967295,D=b+(C<<10&4294967295|C>>>22),C=I+(b^(D|~x))+S[14]+2878612391&4294967295,I=D+(C<<15&4294967295|C>>>17),C=x+(D^(I|~b))+S[5]+4237533241&4294967295,x=I+(C<<21&4294967295|C>>>11),C=b+(I^(x|~D))+S[12]+1700485571&4294967295,b=x+(C<<6&4294967295|C>>>26),C=D+(x^(b|~I))+S[3]+2399980690&4294967295,D=b+(C<<10&4294967295|C>>>22),C=I+(b^(D|~x))+S[10]+4293915773&4294967295,I=D+(C<<15&4294967295|C>>>17),C=x+(D^(I|~b))+S[1]+2240044497&4294967295,x=I+(C<<21&4294967295|C>>>11),C=b+(I^(x|~D))+S[8]+1873313359&4294967295,b=x+(C<<6&4294967295|C>>>26),C=D+(x^(b|~I))+S[15]+4264355552&4294967295,D=b+(C<<10&4294967295|C>>>22),C=I+(b^(D|~x))+S[6]+2734768916&4294967295,I=D+(C<<15&4294967295|C>>>17),C=x+(D^(I|~b))+S[13]+1309151649&4294967295,x=I+(C<<21&4294967295|C>>>11),C=b+(I^(x|~D))+S[4]+4149444226&4294967295,b=x+(C<<6&4294967295|C>>>26),C=D+(x^(b|~I))+S[11]+3174756917&4294967295,D=b+(C<<10&4294967295|C>>>22),C=I+(b^(D|~x))+S[2]+718787259&4294967295,I=D+(C<<15&4294967295|C>>>17),C=x+(D^(I|~b))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+b&4294967295,w.g[1]=w.g[1]+(I+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+D&4294967295}s.prototype.u=function(w,b){b===void 0&&(b=w.length);for(var x=b-this.blockSize,S=this.B,I=this.h,D=0;D<b;){if(I==0)for(;D<=x;)r(this,w,D),D+=this.blockSize;if(typeof w=="string"){for(;D<b;)if(S[I++]=w.charCodeAt(D++),I==this.blockSize){r(this,S),I=0;break}}else for(;D<b;)if(S[I++]=w[D++],I==this.blockSize){r(this,S),I=0;break}}this.h=I,this.o+=b},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var b=1;b<w.length-8;++b)w[b]=0;var x=8*this.o;for(b=w.length-8;b<w.length;++b)w[b]=x&255,x/=256;for(this.u(w),w=Array(16),b=x=0;4>b;++b)for(var S=0;32>S;S+=8)w[x++]=this.g[b]>>>S&255;return w};function i(w,b){var x=a;return Object.prototype.hasOwnProperty.call(x,w)?x[w]:x[w]=b(w)}function o(w,b){this.h=b;for(var x=[],S=!0,I=w.length-1;0<=I;I--){var D=w[I]|0;S&&D==b||(x[I]=D,S=!1)}this.g=x}var a={};function c(w){return-128<=w&&128>w?i(w,function(b){return new o([b|0],0>b?-1:0)}):new o([w|0],0>w?-1:0)}function l(w){if(isNaN(w)||!isFinite(w))return h;if(0>w)return y(l(-w));for(var b=[],x=1,S=0;w>=x;S++)b[S]=w/x|0,x*=4294967296;return new o(b,0)}function u(w,b){if(w.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(w.charAt(0)=="-")return y(u(w.substring(1),b));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=l(Math.pow(b,8)),S=h,I=0;I<w.length;I+=8){var D=Math.min(8,w.length-I),C=parseInt(w.substring(I,I+D),b);8>D?(D=l(Math.pow(b,D)),S=S.j(D).add(l(C))):(S=S.j(x),S=S.add(l(C)))}return S}var h=c(0),f=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(v(this))return-y(this).m();for(var w=0,b=1,x=0;x<this.g.length;x++){var S=this.i(x);w+=(0<=S?S:4294967296+S)*b,b*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(g(this))return"0";if(v(this))return"-"+y(this).toString(w);for(var b=l(Math.pow(w,6)),x=this,S="";;){var I=P(x,b).g;x=k(x,I.j(b));var D=((0<x.g.length?x.g[0]:x.h)>>>0).toString(w);if(x=I,g(x))return D+S;for(;6>D.length;)D="0"+D;S=D+S}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function g(w){if(w.h!=0)return!1;for(var b=0;b<w.g.length;b++)if(w.g[b]!=0)return!1;return!0}function v(w){return w.h==-1}n.l=function(w){return w=k(this,w),v(w)?-1:g(w)?0:1};function y(w){for(var b=w.g.length,x=[],S=0;S<b;S++)x[S]=~w.g[S];return new o(x,~w.h).add(f)}n.abs=function(){return v(this)?y(this):this},n.add=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],S=0,I=0;I<=b;I++){var D=S+(this.i(I)&65535)+(w.i(I)&65535),C=(D>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);S=C>>>16,D&=65535,C&=65535,x[I]=C<<16|D}return new o(x,x[x.length-1]&-2147483648?-1:0)};function k(w,b){return w.add(y(b))}n.j=function(w){if(g(this)||g(w))return h;if(v(this))return v(w)?y(this).j(y(w)):y(y(this).j(w));if(v(w))return y(this.j(y(w)));if(0>this.l(m)&&0>w.l(m))return l(this.m()*w.m());for(var b=this.g.length+w.g.length,x=[],S=0;S<2*b;S++)x[S]=0;for(S=0;S<this.g.length;S++)for(var I=0;I<w.g.length;I++){var D=this.i(S)>>>16,C=this.i(S)&65535,J=w.i(I)>>>16,j=w.i(I)&65535;x[2*S+2*I]+=C*j,T(x,2*S+2*I),x[2*S+2*I+1]+=D*j,T(x,2*S+2*I+1),x[2*S+2*I+1]+=C*J,T(x,2*S+2*I+1),x[2*S+2*I+2]+=D*J,T(x,2*S+2*I+2)}for(S=0;S<b;S++)x[S]=x[2*S+1]<<16|x[2*S];for(S=b;S<2*b;S++)x[S]=0;return new o(x,0)};function T(w,b){for(;(w[b]&65535)!=w[b];)w[b+1]+=w[b]>>>16,w[b]&=65535,b++}function A(w,b){this.g=w,this.h=b}function P(w,b){if(g(b))throw Error("division by zero");if(g(w))return new A(h,h);if(v(w))return b=P(y(w),b),new A(y(b.g),y(b.h));if(v(b))return b=P(w,y(b)),new A(y(b.g),b.h);if(30<w.g.length){if(v(w)||v(b))throw Error("slowDivide_ only works with positive integers.");for(var x=f,S=b;0>=S.l(w);)x=R(x),S=R(S);var I=M(x,1),D=M(S,1);for(S=M(S,2),x=M(x,2);!g(S);){var C=D.add(S);0>=C.l(w)&&(I=I.add(x),D=C),S=M(S,1),x=M(x,1)}return b=k(w,I.j(b)),new A(I,b)}for(I=h;0<=w.l(b);){for(x=Math.max(1,Math.floor(w.m()/b.m())),S=Math.ceil(Math.log(x)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),D=l(x),C=D.j(b);v(C)||0<C.l(w);)x-=S,D=l(x),C=D.j(b);g(D)&&(D=f),I=I.add(D),w=k(w,C)}return new A(I,w)}n.A=function(w){return P(this,w).h},n.and=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],S=0;S<b;S++)x[S]=this.i(S)&w.i(S);return new o(x,this.h&w.h)},n.or=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],S=0;S<b;S++)x[S]=this.i(S)|w.i(S);return new o(x,this.h|w.h)},n.xor=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],S=0;S<b;S++)x[S]=this.i(S)^w.i(S);return new o(x,this.h^w.h)};function R(w){for(var b=w.g.length+1,x=[],S=0;S<b;S++)x[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(x,w.h)}function M(w,b){var x=b>>5;b%=32;for(var S=w.g.length-x,I=[],D=0;D<S;D++)I[D]=0<b?w.i(D+x)>>>b|w.i(D+x+1)<<32-b:w.i(D+x);return new o(I,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Fg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=u,Ws=o}).apply(typeof Cf<"u"?Cf:typeof self<"u"?self:typeof window<"u"?window:{});var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $g,Oi,Bg,Da,pd,Ug,jg,zg;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,p,_){return d==Array.prototype||d==Object.prototype||(d[p]=_.value),d};function e(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof ca=="object"&&ca];for(var p=0;p<d.length;++p){var _=d[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=e(this);function r(d,p){if(p)t:{var _=s;d=d.split(".");for(var E=0;E<d.length-1;E++){var O=d[E];if(!(O in _))break t;_=_[O]}d=d[d.length-1],E=_[d],p=p(E),p!=E&&p!=null&&t(_,d,{configurable:!0,writable:!0,value:p})}}function i(d,p){d instanceof String&&(d+="");var _=0,E=!1,O={next:function(){if(!E&&_<d.length){var V=_++;return{value:p(V,d[V]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}r("Array.prototype.values",function(d){return d||function(){return i(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(d){var p=typeof d;return p=p!="object"?p:d?Array.isArray(d)?"array":p:"null",p=="array"||p=="object"&&typeof d.length=="number"}function l(d){var p=typeof d;return p=="object"&&d!=null||p=="function"}function u(d,p,_){return d.call.apply(d.bind,arguments)}function h(d,p,_){if(!d)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),d.apply(p,O)}}return function(){return d.apply(p,arguments)}}function f(d,p,_){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:h,f.apply(null,arguments)}function m(d,p){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),d.apply(this,E)}}function g(d,p){function _(){}_.prototype=p.prototype,d.aa=p.prototype,d.prototype=new _,d.prototype.constructor=d,d.Qb=function(E,O,V){for(var H=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)H[Dt-2]=arguments[Dt];return p.prototype[O].apply(E,H)}}function v(d){const p=d.length;if(0<p){const _=Array(p);for(let E=0;E<p;E++)_[E]=d[E];return _}return[]}function y(d,p){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(c(E)){const O=d.length||0,V=E.length||0;d.length=O+V;for(let H=0;H<V;H++)d[O+H]=E[H]}else d.push(E)}}class k{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function T(d){return/^[\s\xa0]*$/.test(d)}function A(){var d=a.navigator;return d&&(d=d.userAgent)?d:""}function P(d){return P[" "](d),d}P[" "]=function(){};var R=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function M(d,p,_){for(const E in d)p.call(_,d[E],E,d)}function w(d,p){for(const _ in d)p.call(void 0,d[_],_,d)}function b(d){const p={};for(const _ in d)p[_]=d[_];return p}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(d,p){let _,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(_ in E)d[_]=E[_];for(let V=0;V<x.length;V++)_=x[V],Object.prototype.hasOwnProperty.call(E,_)&&(d[_]=E[_])}}function I(d){var p=1;d=d.split(":");const _=[];for(;0<p&&d.length;)_.push(d.shift()),p--;return d.length&&_.push(d.join(":")),_}function D(d){a.setTimeout(()=>{throw d},0)}function C(){var d=q;let p=null;return d.g&&(p=d.g,d.g=d.g.next,d.g||(d.h=null),p.next=null),p}class J{constructor(){this.h=this.g=null}add(p,_){const E=j.get();E.set(p,_),this.h?this.h.next=E:this.g=E,this.h=E}}var j=new k(()=>new W,d=>d.reset());class W{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let N,U=!1,q=new J,nt=()=>{const d=a.Promise.resolve(void 0);N=()=>{d.then(lt)}};var lt=()=>{for(var d;d=C();){try{d.h.call(d.g)}catch(_){D(_)}var p=j;p.j(d),100>p.h&&(p.h++,d.next=p.g,p.g=d)}U=!1};function at(){this.s=this.s,this.C=this.C}at.prototype.s=!1,at.prototype.ma=function(){this.s||(this.s=!0,this.N())},at.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(d,p){this.type=d,this.g=this.target=p,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var d=!1,p=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const _=()=>{};a.addEventListener("test",_,p),a.removeEventListener("test",_,p)}catch{}return d}();function Tt(d,p){if(Z.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var _=this.type=d.type,E=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=p,p=d.relatedTarget){if(R){t:{try{P(p.nodeName);var O=!0;break t}catch{}O=!1}O||(p=null)}}else _=="mouseover"?p=d.fromElement:_=="mouseout"&&(p=d.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:Ot[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&Tt.aa.h.call(this)}}g(Tt,Z);var Ot={2:"touch",3:"pen",4:"mouse"};Tt.prototype.h=function(){Tt.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Bt=0;function Nt(d,p,_,E,O){this.listener=d,this.proxy=null,this.src=p,this.type=_,this.capture=!!E,this.ha=O,this.key=++Bt,this.da=this.fa=!1}function xe(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function He(d){this.src=d,this.g={},this.h=0}He.prototype.add=function(d,p,_,E,O){var V=d.toString();d=this.g[V],d||(d=this.g[V]=[],this.h++);var H=Xn(d,p,E,O);return-1<H?(p=d[H],_||(p.fa=!1)):(p=new Nt(p,this.src,V,!!E,O),p.fa=_,d.push(p)),p};function kn(d,p){var _=p.type;if(_ in d.g){var E=d.g[_],O=Array.prototype.indexOf.call(E,p,void 0),V;(V=0<=O)&&Array.prototype.splice.call(E,O,1),V&&(xe(p),d.g[_].length==0&&(delete d.g[_],d.h--))}}function Xn(d,p,_,E){for(var O=0;O<d.length;++O){var V=d[O];if(!V.da&&V.listener==p&&V.capture==!!_&&V.ha==E)return O}return-1}var Fe="closure_lm_"+(1e6*Math.random()|0),ce={};function le(d,p,_,E,O){if(Array.isArray(p)){for(var V=0;V<p.length;V++)le(d,p[V],_,E,O);return null}return _=wh(_),d&&d[ze]?d.K(p,_,l(E)?!!E.capture:!1,O):It(d,p,_,!1,E,O)}function It(d,p,_,E,O,V){if(!p)throw Error("Invalid event type");var H=l(O)?!!O.capture:!!O,Dt=dl(d);if(Dt||(d[Fe]=Dt=new He(d)),_=Dt.add(p,_,E,H,V),_.proxy)return _;if(E=Ut(),_.proxy=E,E.src=d,E.listener=_,d.addEventListener)ft||(O=H),O===void 0&&(O=!1),d.addEventListener(p.toString(),E,O);else if(d.attachEvent)d.attachEvent(Ss(p.toString()),E);else if(d.addListener&&d.removeListener)d.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ut(){function d(_){return p.call(d.src,d.listener,_)}const p=qo;return d}function _e(d,p,_,E,O){if(Array.isArray(p))for(var V=0;V<p.length;V++)_e(d,p[V],_,E,O);else E=l(E)?!!E.capture:!!E,_=wh(_),d&&d[ze]?(d=d.i,p=String(p).toString(),p in d.g&&(V=d.g[p],_=Xn(V,_,E,O),-1<_&&(xe(V[_]),Array.prototype.splice.call(V,_,1),V.length==0&&(delete d.g[p],d.h--)))):d&&(d=dl(d))&&(p=d.g[p.toString()],d=-1,p&&(d=Xn(p,_,E,O)),(_=-1<d?p[d]:null)&&Oe(_))}function Oe(d){if(typeof d!="number"&&d&&!d.da){var p=d.src;if(p&&p[ze])kn(p.i,d);else{var _=d.type,E=d.proxy;p.removeEventListener?p.removeEventListener(_,E,d.capture):p.detachEvent?p.detachEvent(Ss(_),E):p.addListener&&p.removeListener&&p.removeListener(E),(_=dl(p))?(kn(_,d),_.h==0&&(_.src=null,p[Fe]=null)):xe(d)}}}function Ss(d){return d in ce?ce[d]:ce[d]="on"+d}function qo(d,p){if(d.da)d=!0;else{p=new Tt(p,this);var _=d.listener,E=d.ha||d.src;d.fa&&Oe(d),d=_.call(E,p)}return d}function dl(d){return d=d[Fe],d instanceof He?d:null}var ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function wh(d){return typeof d=="function"?d:(d[ul]||(d[ul]=function(p){return d.handleEvent(p)}),d[ul])}function we(){at.call(this),this.i=new He(this),this.M=this,this.F=null}g(we,at),we.prototype[ze]=!0,we.prototype.removeEventListener=function(d,p,_,E){_e(this,d,p,_,E)};function Ne(d,p){var _,E=d.F;if(E)for(_=[];E;E=E.F)_.push(E);if(d=d.M,E=p.type||p,typeof p=="string")p=new Z(p,d);else if(p instanceof Z)p.target=p.target||d;else{var O=p;p=new Z(E,d),S(p,O)}if(O=!0,_)for(var V=_.length-1;0<=V;V--){var H=p.g=_[V];O=Wo(H,E,!0,p)&&O}if(H=p.g=d,O=Wo(H,E,!0,p)&&O,O=Wo(H,E,!1,p)&&O,_)for(V=0;V<_.length;V++)H=p.g=_[V],O=Wo(H,E,!1,p)&&O}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var d=this.i,p;for(p in d.g){for(var _=d.g[p],E=0;E<_.length;E++)xe(_[E]);delete d.g[p],d.h--}}this.F=null},we.prototype.K=function(d,p,_,E){return this.i.add(String(d),p,!1,_,E)},we.prototype.L=function(d,p,_,E){return this.i.add(String(d),p,!0,_,E)};function Wo(d,p,_,E){if(p=d.i.g[String(p)],!p)return!0;p=p.concat();for(var O=!0,V=0;V<p.length;++V){var H=p[V];if(H&&!H.da&&H.capture==_){var Dt=H.listener,ye=H.ha||H.src;H.fa&&kn(d.i,H),O=Dt.call(ye,E)!==!1&&O}}return O&&!E.defaultPrevented}function Eh(d,p,_){if(typeof d=="function")_&&(d=f(d,_));else if(d&&typeof d.handleEvent=="function")d=f(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(d,p||0)}function Th(d){d.g=Eh(()=>{d.g=null,d.i&&(d.i=!1,Th(d))},d.l);const p=d.h;d.h=null,d.m.apply(null,p)}class Ub extends at{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Th(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(d){at.call(this),this.h=d,this.g={}}g(oi,at);var Ih=[];function Ah(d){M(d.g,function(p,_){this.g.hasOwnProperty(_)&&Oe(p)},d),d.g={}}oi.prototype.N=function(){oi.aa.N.call(this),Ah(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hl=a.JSON.stringify,jb=a.JSON.parse,zb=class{stringify(d){return a.JSON.stringify(d,void 0)}parse(d){return a.JSON.parse(d,void 0)}};function fl(){}fl.prototype.h=null;function kh(d){return d.h||(d.h=d.i())}function Sh(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pl(){Z.call(this,"d")}g(pl,Z);function ml(){Z.call(this,"c")}g(ml,Z);var Cs={},Ch=null;function Go(){return Ch=Ch||new we}Cs.La="serverreachability";function Ph(d){Z.call(this,Cs.La,d)}g(Ph,Z);function ci(d){const p=Go();Ne(p,new Ph(p))}Cs.STAT_EVENT="statevent";function Rh(d,p){Z.call(this,Cs.STAT_EVENT,d),this.stat=p}g(Rh,Z);function Le(d){const p=Go();Ne(p,new Rh(p,d))}Cs.Ma="timingevent";function Dh(d,p){Z.call(this,Cs.Ma,d),this.size=p}g(Dh,Z);function li(d,p){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){d()},p)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function Hb(d,p,_,E,O,V){d.info(function(){if(d.g)if(V)for(var H="",Dt=V.split("&"),ye=0;ye<Dt.length;ye++){var _t=Dt[ye].split("=");if(1<_t.length){var Ee=_t[0];_t=_t[1];var Te=Ee.split("_");H=2<=Te.length&&Te[1]=="type"?H+(Ee+"="+_t+"&"):H+(Ee+"=redacted&")}}else H=null;else H=V;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+p+`
`+_+`
`+H})}function qb(d,p,_,E,O,V,H){d.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+p+`
`+_+`
`+V+" "+H})}function yr(d,p,_,E){d.info(function(){return"XMLHTTP TEXT ("+p+"): "+Gb(d,_)+(E?" "+E:"")})}function Wb(d,p){d.info(function(){return"TIMEOUT: "+p})}di.prototype.info=function(){};function Gb(d,p){if(!d.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(d=0;d<_.length;d++)if(Array.isArray(_[d])){var E=_[d];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var H=1;H<O.length;H++)O[H]=""}}}}return hl(_)}catch{return p}}var Yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gl;function Ko(){}g(Ko,fl),Ko.prototype.g=function(){return new XMLHttpRequest},Ko.prototype.i=function(){return{}},gl=new Ko;function Jn(d,p,_,E){this.j=d,this.i=p,this.l=_,this.R=E||1,this.U=new oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oh}function Oh(){this.i=null,this.g="",this.h=!1}var Nh={},_l={};function yl(d,p,_){d.L=1,d.v=Zo(Sn(p)),d.m=_,d.P=!0,Lh(d,null)}function Lh(d,p){d.F=Date.now(),Qo(d),d.A=Sn(d.v);var _=d.A,E=d.R;Array.isArray(E)||(E=[String(E)]),Qh(_.i,"t",E),d.C=0,_=d.j.J,d.h=new Oh,d.g=mf(d.j,_?p:null,!d.m),0<d.O&&(d.M=new Ub(f(d.Y,d,d.g),d.O)),p=d.U,_=d.g,E=d.ca;var O="readystatechange";Array.isArray(O)||(O&&(Ih[0]=O.toString()),O=Ih);for(var V=0;V<O.length;V++){var H=le(_,O[V],E||p.handleEvent,!1,p.h||p);if(!H)break;p.g[H.key]=H}p=d.H?b(d.H):{},d.m?(d.u||(d.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,p)):(d.u="GET",d.g.ea(d.A,d.u,null,p)),ci(),Hb(d.i,d.u,d.A,d.l,d.R,d.m)}Jn.prototype.ca=function(d){d=d.target;const p=this.M;p&&Cn(d)==3?p.j():this.Y(d)},Jn.prototype.Y=function(d){try{if(d==this.g)t:{const Te=Cn(this.g);var p=this.g.Ba();const xr=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||sf(this.g)))){this.J||Te!=4||p==7||(p==8||0>=xr?ci(3):ci(2)),vl(this);var _=this.g.Z();this.X=_;e:if(Vh(this)){var E=sf(this.g);d="";var O=E.length,V=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),ui(this);var H="";break e}this.h.i=new a.TextDecoder}for(p=0;p<O;p++)this.h.h=!0,d+=this.h.i.decode(E[p],{stream:!(V&&p==O-1)});E.length=0,this.h.g+=d,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=_==200,qb(this.i,this.u,this.A,this.l,this.R,Te,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Dt,ye=this.g;if((Dt=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Dt)){var _t=Dt;break e}}_t=null}if(_=_t)yr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bl(this,_);else{this.o=!1,this.s=3,Le(12),Ps(this),ui(this);break t}}if(this.P){_=!0;let en;for(;!this.J&&this.C<H.length;)if(en=Yb(this,H),en==_l){Te==4&&(this.s=4,Le(14),_=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Nh){this.s=4,Le(15),yr(this.i,this.l,H,"[Invalid Chunk]"),_=!1;break}else yr(this.i,this.l,en,null),bl(this,en);if(Vh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||H.length!=0||this.h.h||(this.s=1,Le(16),_=!1),this.o=this.o&&_,!_)yr(this.i,this.l,H,"[Invalid Chunked Response]"),Ps(this),ui(this);else if(0<H.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Al(Ee),Ee.M=!0,Le(11))}}else yr(this.i,this.l,H,null),bl(this,H);Te==4&&Ps(this),this.o&&!this.J&&(Te==4?uf(this.j,this):(this.o=!1,Qo(this)))}else ux(this.g),_==400&&0<H.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),Ps(this),ui(this)}}}catch{}finally{}};function Vh(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function Yb(d,p){var _=d.C,E=p.indexOf(`
`,_);return E==-1?_l:(_=Number(p.substring(_,E)),isNaN(_)?Nh:(E+=1,E+_>p.length?_l:(p=p.slice(E,E+_),d.C=E+_,p)))}Jn.prototype.cancel=function(){this.J=!0,Ps(this)};function Qo(d){d.S=Date.now()+d.I,Fh(d,d.I)}function Fh(d,p){if(d.B!=null)throw Error("WatchDog timer not null");d.B=li(f(d.ba,d),p)}function vl(d){d.B&&(a.clearTimeout(d.B),d.B=null)}Jn.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(Wb(this.i,this.A),this.L!=2&&(ci(),Le(17)),Ps(this),this.s=2,ui(this)):Fh(this,this.S-d)};function ui(d){d.j.G==0||d.J||uf(d.j,d)}function Ps(d){vl(d);var p=d.M;p&&typeof p.ma=="function"&&p.ma(),d.M=null,Ah(d.U),d.g&&(p=d.g,d.g=null,p.abort(),p.ma())}function bl(d,p){try{var _=d.j;if(_.G!=0&&(_.g==d||xl(_.h,d))){if(!d.K&&xl(_.h,d)&&_.G==3){try{var E=_.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<d.F)ia(_),sa(_);else break t;Il(_),Le(18)}}else _.za=O[1],0<_.za-_.T&&37500>O[2]&&_.F&&_.v==0&&!_.C&&(_.C=li(f(_.Za,_),6e3));if(1>=Uh(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ds(_,11)}else if((d.K||_.g==d)&&ia(_),!T(p))for(O=_.Da.g.parse(p),p=0;p<O.length;p++){let _t=O[p];if(_.T=_t[0],_t=_t[1],_.G==2)if(_t[0]=="c"){_.K=_t[1],_.ia=_t[2];const Ee=_t[3];Ee!=null&&(_.la=Ee,_.j.info("VER="+_.la));const Te=_t[4];Te!=null&&(_.Aa=Te,_.j.info("SVER="+_.Aa));const xr=_t[5];xr!=null&&typeof xr=="number"&&0<xr&&(E=1.5*xr,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const en=d.g;if(en){const aa=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(aa){var V=E.h;V.g||aa.indexOf("spdy")==-1&&aa.indexOf("quic")==-1&&aa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(wl(V,V.h),V.h=null))}if(E.D){const kl=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;kl&&(E.ya=kl,Lt(E.I,E.D,kl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-d.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var H=d;if(E.qa=pf(E,E.J?E.ia:null,E.W),H.K){jh(E.h,H);var Dt=H,ye=E.L;ye&&(Dt.I=ye),Dt.B&&(vl(Dt),Qo(Dt)),E.g=H}else lf(E);0<_.i.length&&ra(_)}else _t[0]!="stop"&&_t[0]!="close"||Ds(_,7);else _.G==3&&(_t[0]=="stop"||_t[0]=="close"?_t[0]=="stop"?Ds(_,7):Tl(_):_t[0]!="noop"&&_.l&&_.l.ta(_t),_.v=0)}}ci(4)}catch{}}var Kb=class{constructor(d,p){this.g=d,this.map=p}};function $h(d){this.l=d||10,a.PerformanceNavigationTiming?(d=a.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bh(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function Uh(d){return d.h?1:d.g?d.g.size:0}function xl(d,p){return d.h?d.h==p:d.g?d.g.has(p):!1}function wl(d,p){d.g?d.g.add(p):d.h=p}function jh(d,p){d.h&&d.h==p?d.h=null:d.g&&d.g.has(p)&&d.g.delete(p)}$h.prototype.cancel=function(){if(this.i=zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function zh(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let p=d.i;for(const _ of d.g.values())p=p.concat(_.D);return p}return v(d.i)}function Qb(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(c(d)){for(var p=[],_=d.length,E=0;E<_;E++)p.push(d[E]);return p}p=[],_=0;for(E in d)p[_++]=d[E];return p}function Xb(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(c(d)||typeof d=="string"){var p=[];d=d.length;for(var _=0;_<d;_++)p.push(_);return p}p=[],_=0;for(const E in d)p[_++]=E;return p}}}function Hh(d,p){if(d.forEach&&typeof d.forEach=="function")d.forEach(p,void 0);else if(c(d)||typeof d=="string")Array.prototype.forEach.call(d,p,void 0);else for(var _=Xb(d),E=Qb(d),O=E.length,V=0;V<O;V++)p.call(void 0,E[V],_&&_[V],d)}var qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jb(d,p){if(d){d=d.split("&");for(var _=0;_<d.length;_++){var E=d[_].indexOf("="),O=null;if(0<=E){var V=d[_].substring(0,E);O=d[_].substring(E+1)}else V=d[_];p(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Rs(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof Rs){this.h=d.h,Xo(this,d.j),this.o=d.o,this.g=d.g,Jo(this,d.s),this.l=d.l;var p=d.i,_=new pi;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Wh(this,_),this.m=d.m}else d&&(p=String(d).match(qh))?(this.h=!1,Xo(this,p[1]||"",!0),this.o=hi(p[2]||""),this.g=hi(p[3]||"",!0),Jo(this,p[4]),this.l=hi(p[5]||"",!0),Wh(this,p[6]||"",!0),this.m=hi(p[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}Rs.prototype.toString=function(){var d=[],p=this.j;p&&d.push(fi(p,Gh,!0),":");var _=this.g;return(_||p=="file")&&(d.push("//"),(p=this.o)&&d.push(fi(p,Gh,!0),"@"),d.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&d.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&d.push("/"),d.push(fi(_,_.charAt(0)=="/"?ex:tx,!0))),(_=this.i.toString())&&d.push("?",_),(_=this.m)&&d.push("#",fi(_,sx)),d.join("")};function Sn(d){return new Rs(d)}function Xo(d,p,_){d.j=_?hi(p,!0):p,d.j&&(d.j=d.j.replace(/:$/,""))}function Jo(d,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);d.s=p}else d.s=null}function Wh(d,p,_){p instanceof pi?(d.i=p,rx(d.i,d.h)):(_||(p=fi(p,nx)),d.i=new pi(p,d.h))}function Lt(d,p,_){d.i.set(p,_)}function Zo(d){return Lt(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function hi(d,p){return d?p?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function fi(d,p,_){return typeof d=="string"?(d=encodeURI(d).replace(p,Zb),_&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function Zb(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var Gh=/[#\/\?@]/g,tx=/[#\?:]/g,ex=/[#\?]/g,nx=/[#\?@]/g,sx=/#/g;function pi(d,p){this.h=this.g=null,this.i=d||null,this.j=!!p}function Zn(d){d.g||(d.g=new Map,d.h=0,d.i&&Jb(d.i,function(p,_){d.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=pi.prototype,n.add=function(d,p){Zn(this),this.i=null,d=vr(this,d);var _=this.g.get(d);return _||this.g.set(d,_=[]),_.push(p),this.h+=1,this};function Yh(d,p){Zn(d),p=vr(d,p),d.g.has(p)&&(d.i=null,d.h-=d.g.get(p).length,d.g.delete(p))}function Kh(d,p){return Zn(d),p=vr(d,p),d.g.has(p)}n.forEach=function(d,p){Zn(this),this.g.forEach(function(_,E){_.forEach(function(O){d.call(p,O,E,this)},this)},this)},n.na=function(){Zn(this);const d=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let E=0;E<p.length;E++){const O=d[E];for(let V=0;V<O.length;V++)_.push(p[E])}return _},n.V=function(d){Zn(this);let p=[];if(typeof d=="string")Kh(this,d)&&(p=p.concat(this.g.get(vr(this,d))));else{d=Array.from(this.g.values());for(let _=0;_<d.length;_++)p=p.concat(d[_])}return p},n.set=function(d,p){return Zn(this),this.i=null,d=vr(this,d),Kh(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[p]),this.h+=1,this},n.get=function(d,p){return d?(d=this.V(d),0<d.length?String(d[0]):p):p};function Qh(d,p,_){Yh(d,p),0<_.length&&(d.i=null,d.g.set(vr(d,p),v(_)),d.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var E=p[_];const V=encodeURIComponent(String(E)),H=this.V(E);for(E=0;E<H.length;E++){var O=V;H[E]!==""&&(O+="="+encodeURIComponent(String(H[E]))),d.push(O)}}return this.i=d.join("&")};function vr(d,p){return p=String(p),d.j&&(p=p.toLowerCase()),p}function rx(d,p){p&&!d.j&&(Zn(d),d.i=null,d.g.forEach(function(_,E){var O=E.toLowerCase();E!=O&&(Yh(this,E),Qh(this,O,_))},d)),d.j=p}function ix(d,p){const _=new di;if(a.Image){const E=new Image;E.onload=m(ts,_,"TestLoadImage: loaded",!0,p,E),E.onerror=m(ts,_,"TestLoadImage: error",!1,p,E),E.onabort=m(ts,_,"TestLoadImage: abort",!1,p,E),E.ontimeout=m(ts,_,"TestLoadImage: timeout",!1,p,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=d}else p(!1)}function ox(d,p){const _=new di,E=new AbortController,O=setTimeout(()=>{E.abort(),ts(_,"TestPingServer: timeout",!1,p)},1e4);fetch(d,{signal:E.signal}).then(V=>{clearTimeout(O),V.ok?ts(_,"TestPingServer: ok",!0,p):ts(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(O),ts(_,"TestPingServer: error",!1,p)})}function ts(d,p,_,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(_)}catch{}}function ax(){this.g=new zb}function cx(d,p,_){const E=_||"";try{Hh(d,function(O,V){let H=O;l(O)&&(H=hl(O)),p.push(E+V+"="+encodeURIComponent(H))})}catch(O){throw p.push(E+"type="+encodeURIComponent("_badmap")),O}}function ta(d){this.l=d.Ub||null,this.j=d.eb||!1}g(ta,fl),ta.prototype.g=function(){return new ea(this.l,this.j)},ta.prototype.i=function(d){return function(){return d}}({});function ea(d,p){we.call(this),this.D=d,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(ea,we),n=ea.prototype,n.open=function(d,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=p,this.readyState=1,gi(this)},n.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(p.body=d),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},n.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xh(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xh(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}n.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var p=d.value?d.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!d.done}))&&(this.response=this.responseText+=p)}d.done?mi(this):gi(this),this.readyState==3&&Xh(this)}},n.Ra=function(d){this.g&&(this.response=this.responseText=d,mi(this))},n.Qa=function(d){this.g&&(this.response=d,mi(this))},n.ga=function(){this.g&&mi(this)};function mi(d){d.readyState=4,d.l=null,d.j=null,d.v=null,gi(d)}n.setRequestHeader=function(d,p){this.u.append(d,p)},n.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,d.push(_[0]+": "+_[1]),_=p.next();return d.join(`\r
`)};function gi(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty(ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function Jh(d){let p="";return M(d,function(_,E){p+=E,p+=":",p+=_,p+=`\r
`}),p}function El(d,p,_){t:{for(E in _){var E=!1;break t}E=!0}E||(_=Jh(_),typeof d=="string"?_!=null&&encodeURIComponent(String(_)):Lt(d,p,_))}function Kt(d){we.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Kt,we);var lx=/^https?$/i,dx=["POST","PUT"];n=Kt.prototype,n.Ha=function(d){this.J=d},n.ea=function(d,p,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);p=p?p.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gl.g(),this.v=this.o?kh(this.o):kh(gl),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(d),!0),this.B=!1}catch(V){Zh(this,V);return}if(d=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)_.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const V of E.keys())_.set(V,E.get(V));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(V=>V.toLowerCase()=="content-type"),O=a.FormData&&d instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dx,p,void 0))||E||O||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,H]of _)this.g.setRequestHeader(V,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nf(this),this.u=!0,this.g.send(d),this.u=!1}catch(V){Zh(this,V)}};function Zh(d,p){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=p,d.m=5,tf(d),na(d)}function tf(d){d.A||(d.A=!0,Ne(d,"complete"),Ne(d,"error"))}n.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,Ne(this,"complete"),Ne(this,"abort"),na(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),na(this,!0)),Kt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ef(this):this.bb())},n.bb=function(){ef(this)};function ef(d){if(d.h&&typeof o<"u"&&(!d.v[1]||Cn(d)!=4||d.Z()!=2)){if(d.u&&Cn(d)==4)Eh(d.Ea,0,d);else if(Ne(d,"readystatechange"),Cn(d)==4){d.h=!1;try{const H=d.Z();t:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var _;if(!(_=p)){var E;if(E=H===0){var O=String(d.D).match(qh)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),E=!lx.test(O?O.toLowerCase():"")}_=E}if(_)Ne(d,"complete"),Ne(d,"success");else{d.m=6;try{var V=2<Cn(d)?d.g.statusText:""}catch{V=""}d.l=V+" ["+d.Z()+"]",tf(d)}}finally{na(d)}}}}function na(d,p){if(d.g){nf(d);const _=d.g,E=d.v[0]?()=>{}:null;d.g=null,d.v=null,p||Ne(d,"ready");try{_.onreadystatechange=E}catch{}}}function nf(d){d.I&&(a.clearTimeout(d.I),d.I=null)}n.isActive=function(){return!!this.g};function Cn(d){return d.g?d.g.readyState:0}n.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(d){if(this.g){var p=this.g.responseText;return d&&p.indexOf(d)==0&&(p=p.substring(d.length)),jb(p)}};function sf(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function ux(d){const p={};d=(d.g&&2<=Cn(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<d.length;E++){if(T(d[E]))continue;var _=I(d[E]);const O=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const V=p[O]||[];p[O]=V,V.push(_)}w(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _i(d,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[d]||p}function rf(d){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_i("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_i("baseRetryDelayMs",5e3,d),this.cb=_i("retryDelaySeedMs",1e4,d),this.Wa=_i("forwardChannelMaxRetries",2,d),this.wa=_i("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new $h(d&&d.concurrentRequestLimit),this.Da=new ax,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rf.prototype,n.la=8,n.G=1,n.connect=function(d,p,_,E){Le(0),this.W=d,this.H=p||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=pf(this,null,this.W),ra(this)};function Tl(d){if(of(d),d.G==3){var p=d.U++,_=Sn(d.I);if(Lt(_,"SID",d.K),Lt(_,"RID",p),Lt(_,"TYPE","terminate"),yi(d,_),p=new Jn(d,d.j,p),p.L=2,p.v=Zo(Sn(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=p.v,_=!0),_||(p.g=mf(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Qo(p)}ff(d)}function sa(d){d.g&&(Al(d),d.g.cancel(),d.g=null)}function of(d){sa(d),d.u&&(a.clearTimeout(d.u),d.u=null),ia(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&a.clearTimeout(d.s),d.s=null)}function ra(d){if(!Bh(d.h)&&!d.s){d.s=!0;var p=d.Ga;N||nt(),U||(N(),U=!0),q.add(p,d),d.B=0}}function hx(d,p){return Uh(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=p.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=li(f(d.Ga,d,p),hf(d,d.B)),d.B++,!0)}n.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const O=new Jn(this,this.j,d);let V=this.o;if(this.S&&(V?(V=b(V),S(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)t:{for(var p=0,_=0;_<this.i.length;_++){e:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=_;break t}if(p===4096||_===this.i.length-1){p=_+1;break t}}p=1e3}else p=1e3;p=cf(this,O,p),_=Sn(this.I),Lt(_,"RID",d),Lt(_,"CVER",22),this.D&&Lt(_,"X-HTTP-Session-Id",this.D),yi(this,_),V&&(this.O?p="headers="+encodeURIComponent(String(Jh(V)))+"&"+p:this.m&&El(_,this.m,V)),wl(this.h,O),this.Ua&&Lt(_,"TYPE","init"),this.P?(Lt(_,"$req",p),Lt(_,"SID","null"),O.T=!0,yl(O,_,null)):yl(O,_,p),this.G=2}}else this.G==3&&(d?af(this,d):this.i.length==0||Bh(this.h)||af(this))};function af(d,p){var _;p?_=p.l:_=d.U++;const E=Sn(d.I);Lt(E,"SID",d.K),Lt(E,"RID",_),Lt(E,"AID",d.T),yi(d,E),d.m&&d.o&&El(E,d.m,d.o),_=new Jn(d,d.j,_,d.B+1),d.m===null&&(_.H=d.o),p&&(d.i=p.D.concat(d.i)),p=cf(d,_,1e3),_.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),wl(d.h,_),yl(_,E,p)}function yi(d,p){d.H&&M(d.H,function(_,E){Lt(p,E,_)}),d.l&&Hh({},function(_,E){Lt(p,E,_)})}function cf(d,p,_){_=Math.min(d.i.length,_);var E=d.l?f(d.l.Na,d.l,d):null;t:{var O=d.i;let V=-1;for(;;){const H=["count="+_];V==-1?0<_?(V=O[0].g,H.push("ofs="+V)):V=0:H.push("ofs="+V);let Dt=!0;for(let ye=0;ye<_;ye++){let _t=O[ye].g;const Ee=O[ye].map;if(_t-=V,0>_t)V=Math.max(0,O[ye].g-100),Dt=!1;else try{cx(Ee,H,"req"+_t+"_")}catch{E&&E(Ee)}}if(Dt){E=H.join("&");break t}}}return d=d.i.splice(0,_),p.D=d,E}function lf(d){if(!d.g&&!d.u){d.Y=1;var p=d.Fa;N||nt(),U||(N(),U=!0),q.add(p,d),d.v=0}}function Il(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=li(f(d.Fa,d),hf(d,d.v)),d.v++,!0)}n.Fa=function(){if(this.u=null,df(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=li(f(this.ab,this),d)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),sa(this),df(this))};function Al(d){d.A!=null&&(a.clearTimeout(d.A),d.A=null)}function df(d){d.g=new Jn(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var p=Sn(d.qa);Lt(p,"RID","rpc"),Lt(p,"SID",d.K),Lt(p,"AID",d.T),Lt(p,"CI",d.F?"0":"1"),!d.F&&d.ja&&Lt(p,"TO",d.ja),Lt(p,"TYPE","xmlhttp"),yi(d,p),d.m&&d.o&&El(p,d.m,d.o),d.L&&(d.g.I=d.L);var _=d.g;d=d.ia,_.L=1,_.v=Zo(Sn(p)),_.m=null,_.P=!0,Lh(_,d)}n.Za=function(){this.C!=null&&(this.C=null,sa(this),Il(this),Le(19))};function ia(d){d.C!=null&&(a.clearTimeout(d.C),d.C=null)}function uf(d,p){var _=null;if(d.g==p){ia(d),Al(d),d.g=null;var E=2}else if(xl(d.h,p))_=p.D,jh(d.h,p),E=1;else return;if(d.G!=0){if(p.o)if(E==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var O=d.B;E=Go(),Ne(E,new Dh(E,_)),ra(d)}else lf(d);else if(O=p.s,O==3||O==0&&0<p.X||!(E==1&&hx(d,p)||E==2&&Il(d)))switch(_&&0<_.length&&(p=d.h,p.i=p.i.concat(_)),O){case 1:Ds(d,5);break;case 4:Ds(d,10);break;case 3:Ds(d,6);break;default:Ds(d,2)}}}function hf(d,p){let _=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(_*=2),_*p}function Ds(d,p){if(d.j.info("Error code "+p),p==2){var _=f(d.fb,d),E=d.Xa;const O=!E;E=new Rs(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xo(E,"https"),Zo(E),O?ix(E.toString(),_):ox(E.toString(),_)}else Le(2);d.G=0,d.l&&d.l.sa(p),ff(d),of(d)}n.fb=function(d){d?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function ff(d){if(d.G=0,d.ka=[],d.l){const p=zh(d.h);(p.length!=0||d.i.length!=0)&&(y(d.ka,p),y(d.ka,d.i),d.h.i.length=0,v(d.i),d.i.length=0),d.l.ra()}}function pf(d,p,_){var E=_ instanceof Rs?Sn(_):new Rs(_);if(E.g!="")p&&(E.g=p+"."+E.g),Jo(E,E.s);else{var O=a.location;E=O.protocol,p=p?p+"."+O.hostname:O.hostname,O=+O.port;var V=new Rs(null);E&&Xo(V,E),p&&(V.g=p),O&&Jo(V,O),_&&(V.l=_),E=V}return _=d.D,p=d.ya,_&&p&&Lt(E,_,p),Lt(E,"VER",d.la),yi(d,E),E}function mf(d,p,_){if(p&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=d.Ca&&!d.pa?new Kt(new ta({eb:_})):new Kt(d.pa),p.Ha(d.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gf(){}n=gf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oa(){}oa.prototype.g=function(d,p){return new qe(d,p)};function qe(d,p){we.call(this),this.g=new rf(p),this.l=d,this.h=p&&p.messageUrlParams||null,d=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(d?d["X-WebChannel-Content-Type"]=p.messageContentType:d={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(d?d["X-WebChannel-Client-Profile"]=p.va:d={"X-WebChannel-Client-Profile":p.va}),this.g.S=d,(d=p&&p.Sb)&&!T(d)&&(this.g.m=d),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!T(p)&&(this.g.D=p,d=this.h,d!==null&&p in d&&(d=this.h,p in d&&delete d[p])),this.j=new br(this)}g(qe,we),qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){Tl(this.g)},qe.prototype.o=function(d){var p=this.g;if(typeof d=="string"){var _={};_.__data__=d,d=_}else this.u&&(_={},_.__data__=hl(d),d=_);p.i.push(new Kb(p.Ya++,d)),p.G==3&&ra(p)},qe.prototype.N=function(){this.g.l=null,delete this.j,Tl(this.g),delete this.g,qe.aa.N.call(this)};function _f(d){pl.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var p=d.__sm__;if(p){t:{for(const _ in p){d=_;break t}d=void 0}(this.i=d)&&(d=this.i,p=p!==null&&d in p?p[d]:void 0),this.data=p}else this.data=d}g(_f,pl);function yf(){ml.call(this),this.status=1}g(yf,ml);function br(d){this.g=d}g(br,gf),br.prototype.ua=function(){Ne(this.g,"a")},br.prototype.ta=function(d){Ne(this.g,new _f(d))},br.prototype.sa=function(d){Ne(this.g,new yf)},br.prototype.ra=function(){Ne(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,zg=function(){return new oa},jg=function(){return Go()},Ug=Cs,pd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yo.NO_ERROR=0,Yo.TIMEOUT=8,Yo.HTTP_ERROR=6,Da=Yo,Mh.COMPLETE="complete",Bg=Mh,Sh.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",we.prototype.listen=we.prototype.K,Oi=Sh,Kt.prototype.listenOnce=Kt.prototype.L,Kt.prototype.getLastError=Kt.prototype.Ka,Kt.prototype.getLastErrorCode=Kt.prototype.Ba,Kt.prototype.getStatus=Kt.prototype.Z,Kt.prototype.getResponseJson=Kt.prototype.Oa,Kt.prototype.getResponseText=Kt.prototype.oa,Kt.prototype.send=Kt.prototype.ea,Kt.prototype.setWithCredentials=Kt.prototype.Ha,$g=Kt}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});const Pf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new ru("@firebase/firestore");function vi(){return er.logLevel}function Y(n,...t){if(er.logLevel<=ht.DEBUG){const e=t.map(au);er.debug(`Firestore (${ti}): ${n}`,...e)}}function Wn(n,...t){if(er.logLevel<=ht.ERROR){const e=t.map(au);er.error(`Firestore (${ti}): ${n}`,...e)}}function nr(n,...t){if(er.logLevel<=ht.WARN){const e=t.map(au);er.warn(`Firestore (${ti}): ${n}`,...e)}}function au(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function et(n="Unexpected state"){const t=`FIRESTORE (${ti}) INTERNAL ASSERTION FAILED: `+n;throw Wn(t),new Error(t)}function Ct(n,t){n||et()}function it(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends An{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ke.UNAUTHENTICATED))}shutdown(){}}class Y0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class K0{constructor(t){this.t=t,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Ct(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let i=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ct(typeof s.accessToken=="string"),new Hg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ct(t===null||typeof t=="string"),new ke(t)}}class Q0{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class X0{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new Q0(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Ct(this.o===void 0);const s=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Ct(typeof e.token=="string"),this.R=e.token,new J0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=tw(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<e&&(s+=t.charAt(r[i]%t.length))}return s}}function vt(n,t){return n<t?-1:n>t?1:0}function zr(n,t,e){return n.length===t.length&&n.every((s,r)=>e(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new G($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new G($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new G($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new G($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ht.fromMillis(Date.now())}static fromDate(t){return Ht.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new Ht(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?vt(this.nanoseconds,t.nanoseconds):vt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.timestamp=t}static fromTimestamp(t){return new st(t)}static min(){return new st(new Ht(0,0))}static max(){return new st(new Ht(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,e,s){e===void 0?e=0:e>t.length&&et(),s===void 0?s=t.length-e:s>t.length-e&&et(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return so.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof so?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let r=0;r<s;r++){const i=t.get(r),o=e.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Vt extends so{construct(t,e,s){return new Vt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new G($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(r=>r.length>0))}return new Vt(e)}static emptyPath(){return new Vt([])}}const ew=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends so{construct(t,e,s){return new pe(t,e,s)}static isValidIdentifier(t){return ew.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(t){const e=[];let s="",r=0;const i=()=>{if(s.length===0)throw new G($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new G($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new G($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pe(e)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.path=t}static fromPath(t){return new K(Vt.fromString(t))}static fromName(t){return new K(Vt.fromString(t).popFirst(5))}static empty(){return new K(Vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Vt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Vt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new K(new Vt(t.slice()))}}function nw(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=st.fromTimestamp(s===1e9?new Ht(e+1,0):new Ht(e,s));return new vs(r,K.empty(),t)}function sw(n){return new vs(n.readTime,n.key,-1)}class vs{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new vs(st.min(),K.empty(),-1)}static max(){return new vs(st.max(),K.empty(),-1)}}function rw(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=K.comparator(n.documentKey,t.documentKey),e!==0?e:vt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ow{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==iw)throw n;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&et(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(e,i).next(s,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):B.reject(e)}static resolve(t){return new B((e,s)=>{e(t)})}static reject(t){return new B((e,s)=>{s(t)})}static waitFor(t){return new B((e,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&e()},c=>s(c))}),o=!0,i===r&&e()})}static or(t){let e=B.resolve(!1);for(const s of t)e=e.next(r=>r?B.resolve(r):s());return e}static forEach(t,e){const s=[];return t.forEach((r,i)=>{s.push(e.call(this,r,i))}),this.waitFor(s)}static mapArray(t,e){return new B((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;e(t[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,e){return new B((s,r)=>{const i=()=>{t()===!0?e().next(()=>{i()},r):s()};i()})}}function aw(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ao(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class lu{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}lu.oe=-1;function Sc(n){return n==null}function Ja(n){return n===0&&1/n==-1/0}function cw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ja(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ur(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Wg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e){this.comparator=t,this.root=e||ve.EMPTY}insert(t,e){return new Gt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(t){return new Gt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ve.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return e+s.left.size;r<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new la(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new la(this.root,t,this.comparator,!1)}getReverseIterator(){return new la(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new la(this.root,t,this.comparator,!0)}}class la{constructor(t,e,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?s(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ve{constructor(t,e,s,r,i){this.key=t,this.value=e,this.color=s??ve.RED,this.left=r??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,r,i){return new ve(t??this.key,e??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,s),null):i===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return ve.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw et();const t=this.left.check();if(t!==this.right.check())throw et();return t+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw et()}get value(){throw et()}get color(){throw et()}get left(){throw et()}get right(){throw et()}copy(t,e,s,r,i){return this}insert(t,e,s){return new ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.comparator=t,this.data=new Gt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Df(this.data.getIterator())}getIteratorFrom(t){return new Df(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new be(this.comparator);return e.data=t,e}}class Df{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.fields=t,t.sort(pe.comparator)}static empty(){return new Ye([])}unionWith(t){let e=new be(pe.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Ye(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return zr(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Gg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gg("Invalid base64 string: "+i):i}}(t);return new ge(e)}static fromUint8Array(t){const e=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new ge(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return vt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const lw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(n){if(Ct(!!n),typeof n=="string"){let t=0;const e=lw.exec(n);if(Ct(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sr(n){return typeof n=="string"?ge.fromBase64String(n):ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function uu(n){const t=n.mapValue.fields.__previous_value__;return du(t)?uu(t):t}function ro(n){const t=bs(n.mapValue.fields.__local_write_time__.timestampValue);return new Ht(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(t,e,s,r,i,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Hr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Hr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da={mapValue:{}};function rr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?du(n)?4:hw(n)?9007199254740991:uw(n)?10:11:et()}function Tn(n,t){if(n===t)return!0;const e=rr(n);if(e!==rr(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ro(n).isEqual(ro(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=bs(r.timestampValue),a=bs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,i){return sr(r.bytesValue).isEqual(sr(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,i){return ee(r.geoPointValue.latitude)===ee(i.geoPointValue.latitude)&&ee(r.geoPointValue.longitude)===ee(i.geoPointValue.longitude)}(n,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ee(r.integerValue)===ee(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=ee(r.doubleValue),a=ee(i.doubleValue);return o===a?Ja(o)===Ja(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return zr(n.arrayValue.values||[],t.arrayValue.values||[],Tn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Rf(o)!==Rf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Tn(o[c],a[c])))return!1;return!0}(n,t);default:return et()}}function io(n,t){return(n.values||[]).find(e=>Tn(e,t))!==void 0}function qr(n,t){if(n===t)return 0;const e=rr(n),s=rr(t);if(e!==s)return vt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return vt(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=ee(i.integerValue||i.doubleValue),c=ee(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return Mf(n.timestampValue,t.timestampValue);case 4:return Mf(ro(n),ro(t));case 5:return vt(n.stringValue,t.stringValue);case 6:return function(i,o){const a=sr(i),c=sr(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=vt(a[l],c[l]);if(u!==0)return u}return vt(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=vt(ee(i.latitude),ee(o.latitude));return a!==0?a:vt(ee(i.longitude),ee(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Of(n.arrayValue,t.arrayValue);case 10:return function(i,o){var a,c,l,u;const h=i.fields||{},f=o.fields||{},m=(a=h.value)===null||a===void 0?void 0:a.arrayValue,g=(c=f.value)===null||c===void 0?void 0:c.arrayValue,v=vt(((l=m==null?void 0:m.values)===null||l===void 0?void 0:l.length)||0,((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0);return v!==0?v:Of(m,g)}(n.mapValue,t.mapValue);case 11:return function(i,o){if(i===da.mapValue&&o===da.mapValue)return 0;if(i===da.mapValue)return 1;if(o===da.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=vt(c[h],u[h]);if(f!==0)return f;const m=qr(a[c[h]],l[u[h]]);if(m!==0)return m}return vt(c.length,u.length)}(n.mapValue,t.mapValue);default:throw et()}}function Mf(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return vt(n,t);const e=bs(n),s=bs(t),r=vt(e.seconds,s.seconds);return r!==0?r:vt(e.nanos,s.nanos)}function Of(n,t){const e=n.values||[],s=t.values||[];for(let r=0;r<e.length&&r<s.length;++r){const i=qr(e[r],s[r]);if(i)return i}return vt(e.length,s.length)}function Wr(n){return md(n)}function md(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=bs(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return sr(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return K.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",r=!0;for(const i of e.values||[])r?r=!1:s+=",",s+=md(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${md(e.fields[o])}`;return r+"}"}(n.mapValue):et()}function Nf(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function gd(n){return!!n&&"integerValue"in n}function hu(n){return!!n&&"arrayValue"in n}function Lf(n){return!!n&&"nullValue"in n}function Vf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ma(n){return!!n&&"mapValue"in n}function uw(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function zi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ur(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=zi(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=zi(n.arrayValue.values[e]);return t}return Object.assign({},n)}function hw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.value=t}static empty(){return new Ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Ma(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zi(e)}setAll(t){let e=pe.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,r),s={},r=[],e=a.popLast()}o?s[a.lastSegment()]=zi(o):r.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,s,r)}delete(t){const e=this.field(t.popLast());Ma(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Tn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=e.mapValue.fields[t.get(s)];Ma(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,s){ur(e,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Ue(zi(this.value))}}function Yg(n){const t=[];return ur(n.fields,(e,s)=>{const r=new pe([e]);if(Ma(s)){const i=Yg(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Ye(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,e,s,r,i,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ce(t,0,st.min(),st.min(),st.min(),Ue.empty(),0)}static newFoundDocument(t,e,s,r){return new Ce(t,1,e,st.min(),s,r,0)}static newNoDocument(t,e){return new Ce(t,2,e,st.min(),st.min(),Ue.empty(),0)}static newUnknownDocument(t,e){return new Ce(t,3,e,st.min(),st.min(),Ue.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(st.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=st.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ce&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Za{constructor(t,e){this.position=t,this.inclusive=e}}function Ff(n,t,e){let s=0;for(let r=0;r<n.position.length;r++){const i=t[r],o=n.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),e.key):s=qr(o,e.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function $f(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Tn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class oo{constructor(t,e="asc"){this.field=t,this.dir=e}}function fw(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Kg{}class oe extends Kg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new mw(t,e,s):e==="array-contains"?new yw(t,s):e==="in"?new vw(t,s):e==="not-in"?new bw(t,s):e==="array-contains-any"?new xw(t,s):new oe(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new gw(t,s):new _w(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(qr(e,this.value)):e!==null&&rr(this.value)===rr(e)&&this.matchesComparison(qr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return et()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends Kg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new cn(t,e)}matches(t){return Qg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Qg(n){return n.op==="and"}function Xg(n){return pw(n)&&Qg(n)}function pw(n){for(const t of n.filters)if(t instanceof cn)return!1;return!0}function _d(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+Wr(n.value);if(Xg(n))return n.filters.map(t=>_d(t)).join(",");{const t=n.filters.map(e=>_d(e)).join(",");return`${n.op}(${t})`}}function Jg(n,t){return n instanceof oe?function(s,r){return r instanceof oe&&s.op===r.op&&s.field.isEqual(r.field)&&Tn(s.value,r.value)}(n,t):n instanceof cn?function(s,r){return r instanceof cn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&Jg(o,r.filters[a]),!0):!1}(n,t):void et()}function Zg(n){return n instanceof oe?function(e){return`${e.field.canonicalString()} ${e.op} ${Wr(e.value)}`}(n):n instanceof cn?function(e){return e.op.toString()+" {"+e.getFilters().map(Zg).join(" ,")+"}"}(n):"Filter"}class mw extends oe{constructor(t,e,s){super(t,e,s),this.key=K.fromName(s.referenceValue)}matches(t){const e=K.comparator(t.key,this.key);return this.matchesComparison(e)}}class gw extends oe{constructor(t,e){super(t,"in",e),this.keys=t_("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class _w extends oe{constructor(t,e){super(t,"not-in",e),this.keys=t_("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function t_(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>K.fromName(s.referenceValue))}class yw extends oe{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hu(e)&&io(e.arrayValue,this.value)}}class vw extends oe{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&io(this.value.arrayValue,e)}}class bw extends oe{constructor(t,e){super(t,"not-in",e)}matches(t){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!io(this.value.arrayValue,e)}}class xw extends oe{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hu(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>io(this.value.arrayValue,s))}}/**
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
 */class ww{constructor(t,e=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Bf(n,t=null,e=[],s=[],r=null,i=null,o=null){return new ww(n,t,e,s,r,i,o)}function fu(n){const t=it(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>_d(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Sc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Wr(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Wr(s)).join(",")),t.ue=e}return t.ue}function pu(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!fw(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Jg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$f(n.startAt,t.startAt)&&$f(n.endAt,t.endAt)}function yd(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ew(n,t,e,s,r,i,o,a){return new ei(n,t,e,s,r,i,o,a)}function mu(n){return new ei(n)}function Uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function e_(n){return n.collectionGroup!==null}function Hi(n){const t=it(n);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new be(pe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new oo(i,s))}),e.has(pe.keyField().canonicalString())||t.ce.push(new oo(pe.keyField(),s))}return t.ce}function vn(n){const t=it(n);return t.le||(t.le=Tw(t,Hi(n))),t.le}function Tw(n,t){if(n.limitType==="F")return Bf(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new oo(r.field,i)});const e=n.endAt?new Za(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Za(n.startAt.position,n.startAt.inclusive):null;return Bf(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function vd(n,t){const e=n.filters.concat([t]);return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function tc(n,t,e){return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Cc(n,t){return pu(vn(n),vn(t))&&n.limitType===t.limitType}function n_(n){return`${fu(vn(n))}|lt:${n.limitType}`}function Sr(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(r=>Zg(r)).join(", ")}]`),Sc(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(r=>Wr(r)).join(",")),`Target(${s})`}(vn(n))}; limitType=${n.limitType})`}function Pc(n,t){return t.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):K.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,t)&&function(s,r){for(const i of Hi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,t)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,t)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=Ff(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,Hi(s),r)||s.endAt&&!function(o,a,c){const l=Ff(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,Hi(s),r))}(n,t)}function Iw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function s_(n){return(t,e)=>{let s=!1;for(const r of Hi(n)){const i=Aw(r,t,e);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Aw(n,t,e){const s=n.field.isKeyField()?K.comparator(t.key,e.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?qr(c,l):et()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return et()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[e]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ur(this.inner,(e,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Wg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new Gt(K.comparator);function Gn(){return kw}const r_=new Gt(K.comparator);function Ni(...n){let t=r_;for(const e of n)t=t.insert(e.key,e);return t}function i_(n){let t=r_;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Hs(){return qi()}function o_(){return qi()}function qi(){return new ni(n=>n.toString(),(n,t)=>n.isEqual(t))}const Sw=new Gt(K.comparator),Cw=new be(K.comparator);function dt(...n){let t=Cw;for(const e of n)t=t.add(e);return t}const Pw=new be(vt);function Rw(){return Pw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ja(t)?"-0":t}}function a_(n){return{integerValue:""+n}}function Dw(n,t){return cw(t)?a_(t):gu(n,t)}/**
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
 */class Rc{constructor(){this._=void 0}}function Mw(n,t,e){return n instanceof ec?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&du(i)&&(i=uu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof ao?l_(n,t):n instanceof co?d_(n,t):function(r,i){const o=c_(r,i),a=jf(o)+jf(r.Pe);return gd(o)&&gd(r.Pe)?a_(a):gu(r.serializer,a)}(n,t)}function Ow(n,t,e){return n instanceof ao?l_(n,t):n instanceof co?d_(n,t):e}function c_(n,t){return n instanceof nc?function(s){return gd(s)||function(i){return!!i&&"doubleValue"in i}(s)}(t)?t:{integerValue:0}:null}class ec extends Rc{}class ao extends Rc{constructor(t){super(),this.elements=t}}function l_(n,t){const e=u_(t);for(const s of n.elements)e.some(r=>Tn(r,s))||e.push(s);return{arrayValue:{values:e}}}class co extends Rc{constructor(t){super(),this.elements=t}}function d_(n,t){let e=u_(t);for(const s of n.elements)e=e.filter(r=>!Tn(r,s));return{arrayValue:{values:e}}}class nc extends Rc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function jf(n){return ee(n.integerValue||n.doubleValue)}function u_(n){return hu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Nw(n,t){return n.field.isEqual(t.field)&&function(s,r){return s instanceof ao&&r instanceof ao||s instanceof co&&r instanceof co?zr(s.elements,r.elements,Tn):s instanceof nc&&r instanceof nc?Tn(s.Pe,r.Pe):s instanceof ec&&r instanceof ec}(n.transform,t.transform)}class Lw{constructor(t,e){this.version=t,this.transformResults=e}}class Je{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Je}static exists(t){return new Je(void 0,t)}static updateTime(t){return new Je(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oa(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Dc{}function h_(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new _u(n.key,Je.none()):new ko(n.key,n.data,Je.none());{const e=n.data,s=Ue.empty();let r=new be(pe.comparator);for(let i of t.fields)if(!r.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ts(n.key,s,new Ye(r.toArray()),Je.none())}}function Vw(n,t,e){n instanceof ko?function(r,i,o){const a=r.value.clone(),c=Hf(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ts?function(r,i,o){if(!Oa(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Hf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(f_(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Wi(n,t,e,s){return n instanceof ko?function(i,o,a,c){if(!Oa(i.precondition,o))return a;const l=i.value.clone(),u=qf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,s):n instanceof Ts?function(i,o,a,c){if(!Oa(i.precondition,o))return a;const l=qf(i.fieldTransforms,c,o),u=o.data;return u.setAll(f_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(i,o,a){return Oa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Fw(n,t){let e=null;for(const s of n.fieldTransforms){const r=t.data.field(s.field),i=c_(s.transform,r||null);i!=null&&(e===null&&(e=Ue.empty()),e.set(s.field,i))}return e||null}function zf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&zr(s,r,(i,o)=>Nw(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ko extends Dc{constructor(t,e,s,r=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ts extends Dc{constructor(t,e,s,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function f_(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Hf(n,t,e){const s=new Map;Ct(n.length===e.length);for(let r=0;r<e.length;r++){const i=n[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Ow(o,a,e[r]))}return s}function qf(n,t,e){const s=new Map;for(const r of n){const i=r.transform,o=e.data.field(r.field);s.set(r.field,Mw(i,o,t))}return s}class _u extends Dc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $w extends Dc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(t,e,s,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Vw(i,t,s[r])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Wi(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Wi(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=o_();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(r.key)?null:a;const c=h_(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(st.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),dt())}isEqual(t){return this.batchId===t.batchId&&zr(this.mutations,t.mutations,(e,s)=>zf(e,s))&&zr(this.baseMutations,t.baseMutations,(e,s)=>zf(e,s))}}class yu{constructor(t,e,s,r){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=r}static from(t,e,s){Ct(t.mutations.length===s.length);let r=function(){return Sw}();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new yu(t,e,s,r)}}/**
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
 */class Uw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class jw{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,pt;function zw(n){switch(n){default:return et();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function p_(n){if(n===void 0)return Wn("GRPC error has no .code"),$.UNKNOWN;switch(n){case ie.OK:return $.OK;case ie.CANCELLED:return $.CANCELLED;case ie.UNKNOWN:return $.UNKNOWN;case ie.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ie.INTERNAL:return $.INTERNAL;case ie.UNAVAILABLE:return $.UNAVAILABLE;case ie.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ie.NOT_FOUND:return $.NOT_FOUND;case ie.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ie.ABORTED:return $.ABORTED;case ie.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ie.DATA_LOSS:return $.DATA_LOSS;default:return et()}}(pt=ie||(ie={}))[pt.OK=0]="OK",pt[pt.CANCELLED=1]="CANCELLED",pt[pt.UNKNOWN=2]="UNKNOWN",pt[pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pt[pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pt[pt.NOT_FOUND=5]="NOT_FOUND",pt[pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",pt[pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",pt[pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",pt[pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pt[pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pt[pt.ABORTED=10]="ABORTED",pt[pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",pt[pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",pt[pt.INTERNAL=13]="INTERNAL",pt[pt.UNAVAILABLE=14]="UNAVAILABLE",pt[pt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Hw(){return new TextEncoder}/**
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
 */const qw=new Ws([4294967295,4294967295],0);function Wf(n){const t=Hw().encode(n),e=new Fg;return e.update(t),new Uint8Array(e.digest())}function Gf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ws([e,s],0),new Ws([r,i],0)]}class vu{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Li(`Invalid padding: ${e}`);if(s<0)throw new Li(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Li(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Li(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ws.fromNumber(this.Ie)}Ee(t,e,s){let r=t.add(e.multiply(Ws.fromNumber(s)));return r.compare(qw)===1&&(r=new Ws([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Wf(t),[s,r]=Gf(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(t,e,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new vu(i,r,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Wf(t),[s,r]=Gf(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e,s,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const r=new Map;return r.set(t,So.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Mc(st.min(),r,new Gt(vt),Gn(),dt())}}class So{constructor(t,e,s,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new So(s,e,dt(),dt(),dt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,s,r){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=r}}class m_{constructor(t,e){this.targetId=t,this.me=e}}class g_{constructor(t,e,s=ge.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=r}}class Yf{constructor(){this.fe=0,this.ge=Qf(),this.pe=ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=dt(),e=dt(),s=dt();return this.ge.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:s=s.add(r);break;default:et()}}),new So(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Qf()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Ct(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ww{constructor(t){this.Le=t,this.Be=new Map,this.ke=Gn(),this.qe=Kf(),this.Qe=new Gt(vt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:et()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,s=t.me.count,r=this.Je(e);if(r){const i=r.target;if(yd(i))if(s===0){const o=new K(i.path);this.Ue(e,o,Ce.newNoDocument(o,st.min()))}else Ct(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,l)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=e;let o,a;try{o=sr(s).toUint8Array()}catch(c){if(c instanceof Gg)return nr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new vu(o,r,i)}catch(c){return nr(c instanceof Li?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,i,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&yd(a.target)){const c=new K(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Ce.newNoDocument(c,t))}i.be&&(e.set(o,i.ve()),i.Ce())}});let s=dt();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(t));const r=new Mc(t,e,this.Qe,this.ke,s);return this.ke=Gn(),this.qe=Kf(),this.Qe=new Gt(vt),r}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Yf,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new be(vt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||Y("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Yf),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Kf(){return new Gt(K.comparator)}function Qf(){return new Gt(K.comparator)}const Gw={asc:"ASCENDING",desc:"DESCENDING"},Yw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Kw={and:"AND",or:"OR"};class Qw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function bd(n,t){return n.useProto3Json||Sc(t)?t:{value:t}}function sc(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function __(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Xw(n,t){return sc(n,t.toTimestamp())}function bn(n){return Ct(!!n),st.fromTimestamp(function(e){const s=bs(e);return new Ht(s.seconds,s.nanos)}(n))}function bu(n,t){return xd(n,t).canonicalString()}function xd(n,t){const e=function(r){return new Vt(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function y_(n){const t=Vt.fromString(n);return Ct(E_(t)),t}function wd(n,t){return bu(n.databaseId,t.path)}function Ml(n,t){const e=y_(t);if(e.get(1)!==n.databaseId.projectId)throw new G($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new G($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new K(b_(e))}function v_(n,t){return bu(n.databaseId,t)}function Jw(n){const t=y_(n);return t.length===4?Vt.emptyPath():b_(t)}function Ed(n){return new Vt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function b_(n){return Ct(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xf(n,t,e){return{name:wd(n,t),fields:e.value.mapValue.fields}}function Zw(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:et()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ct(u===void 0||typeof u=="string"),ge.fromBase64String(u||"")):(Ct(u===void 0||u instanceof Buffer||u instanceof Uint8Array),ge.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?$.UNKNOWN:p_(l.code);return new G(u,l.message||"")}(o);e=new g_(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ml(n,s.document.name),i=bn(s.document.updateTime),o=s.document.createTime?bn(s.document.createTime):st.min(),a=new Ue({mapValue:{fields:s.document.fields}}),c=Ce.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];e=new Na(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Ml(n,s.document),i=s.readTime?bn(s.readTime):st.min(),o=Ce.newNoDocument(r,i),a=s.removedTargetIds||[];e=new Na([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Ml(n,s.document),i=s.removedTargetIds||[];e=new Na([],i,r,null)}else{if(!("filter"in t))return et();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new jw(r,i),a=s.targetId;e=new m_(a,o)}}return e}function tE(n,t){let e;if(t instanceof ko)e={update:Xf(n,t.key,t.value)};else if(t instanceof _u)e={delete:wd(n,t.key)};else if(t instanceof Ts)e={update:Xf(n,t.key,t.data),updateMask:lE(t.fieldMask)};else{if(!(t instanceof $w))return et();e={verify:wd(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof ec)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof co)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw et()}(0,s))),t.precondition.isNone||(e.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Xw(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:et()}(n,t.precondition)),e}function eE(n,t){return n&&n.length>0?(Ct(t!==void 0),n.map(e=>function(r,i){let o=r.updateTime?bn(r.updateTime):bn(i);return o.isEqual(st.min())&&(o=bn(i)),new Lw(o,r.transformResults||[])}(e,t))):[]}function nE(n,t){return{documents:[v_(n,t.path)]}}function sE(n,t){const e={structuredQuery:{}},s=t.path;let r;t.collectionGroup!==null?(r=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=v_(n,r);const i=function(l){if(l.length!==0)return w_(cn.create(l,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Cr(f.field),direction:oE(f.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=bd(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{_t:e,parent:r}}function rE(n){let t=Jw(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let r=null;if(s>0){Ct(s===1);const u=e.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];e.where&&(i=function(h){const f=x_(h);return f instanceof cn&&Xg(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(g){return new oo(Pr(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Sc(f)?null:f}(e.limit));let c=null;e.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Za(m,f)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Za(m,f)}(e.endAt)),Ew(t,r,o,i,a,"F",c,l)}function iE(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return et()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function x_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=Pr(e.unaryFilter.field);return oe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Pr(e.unaryFilter.field);return oe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pr(e.unaryFilter.field);return oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pr(e.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return et()}}(n):n.fieldFilter!==void 0?function(e){return oe.create(Pr(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return et()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return cn.create(e.compositeFilter.filters.map(s=>x_(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return et()}}(e.compositeFilter.op))}(n):et()}function oE(n){return Gw[n]}function aE(n){return Yw[n]}function cE(n){return Kw[n]}function Cr(n){return{fieldPath:n.canonicalString()}}function Pr(n){return pe.fromServerFormat(n.fieldPath)}function w_(n){return n instanceof oe?function(e){if(e.op==="=="){if(Vf(e.value))return{unaryFilter:{field:Cr(e.field),op:"IS_NAN"}};if(Lf(e.value))return{unaryFilter:{field:Cr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vf(e.value))return{unaryFilter:{field:Cr(e.field),op:"IS_NOT_NAN"}};if(Lf(e.value))return{unaryFilter:{field:Cr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cr(e.field),op:aE(e.op),value:e.value}}}(n):n instanceof cn?function(e){const s=e.getFilters().map(r=>w_(r));return s.length===1?s[0]:{compositeFilter:{op:cE(e.op),filters:s}}}(n):et()}function lE(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function E_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,s,r,i=st.min(),o=st.min(),a=ge.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new cs(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t){this.ct=t}}function uE(n){const t=rE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?tc(t,t.limit,"L"):t}/**
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
 */class hE{constructor(){this.un=new fE}addToCollectionParentIndex(t,e){return this.un.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(vs.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(vs.min())}updateCollectionGroup(t,e,s){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class fE{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e]||new be(Vt.comparator),i=!r.has(s);return this.index[e]=r.add(s),i}has(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e];return r&&r.has(s)}getEntries(t){return(this.index[t]||new be(Vt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gr(0)}static kn(){return new Gr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.changes=new ni(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ce.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?B.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mE{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t,e,s,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(s!==null&&Wi(s.mutation,r,Ye.empty(),Ht.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,dt()).next(()=>s))}getLocalViewOfDocuments(t,e,s=dt()){const r=Hs();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,s).next(i=>{let o=Ni();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=Hs();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,dt()))}populateOverlays(t,e,s){const r=[];return s.forEach(i=>{e.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,r){let i=Gn();const o=qi(),a=function(){return qi()}();return e.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Ts)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Wi(u.mutation,l,u.mutation.getFieldMask(),Ht.now())):o.set(l.key,Ye.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),e.forEach((l,u)=>{var h;return a.set(l,new mE(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const s=qi();let r=new Gt((o,a)=>o-a),i=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let u=s.get(c)||Ye.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||dt()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=o_();u.forEach(f=>{if(!i.has(f)){const m=h_(e.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return B.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,r){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):e_(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,r):this.getDocumentsMatchingCollectionQuery(t,e,s,r)}getNextDocuments(t,e,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,r-i.size):B.resolve(Hs());let a=-1,c=i;return o.next(l=>B.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?B.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,dt())).next(u=>({batchId:a,changes:i_(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new K(e)).next(s=>{let r=Ni();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,s,r){const i=e.collectionGroup;let o=Ni();return this.indexManager.getCollectionParents(t,i).next(a=>B.forEach(a,c=>{const l=function(h,f){return new ei(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,s,r).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,i,r))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Ce.newInvalidDocument(u)))});let a=Ni();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Wi(u.mutation,l,Ye.empty(),Ht.now()),Pc(e,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return B.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:bn(r.createTime)}}(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:uE(r.bundledQuery),readTime:bn(r.readTime)}}(e)),B.resolve()}}/**
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
 */class yE{constructor(){this.overlays=new Gt(K.comparator),this.Ir=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Hs();return B.forEach(e,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((r,i)=>{this.ht(t,e,i)}),B.resolve()}removeOverlaysForBatchId(t,e,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),B.resolve()}getOverlaysForCollection(t,e,s){const r=Hs(),i=e.length+1,o=new K(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return B.resolve(r)}getOverlaysForCollectionGroup(t,e,s,r){let i=new Gt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Hs(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Hs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return B.resolve(a)}ht(t,e,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Uw(e,s));let i=this.Ir.get(e);i===void 0&&(i=dt(),this.Ir.set(e,i)),this.Ir.set(e,i.add(s.key))}}/**
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
 */class vE{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.Tr=new be(fe.Er),this.dr=new be(fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new fe(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new fe(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new K(new Vt([])),s=new fe(e,t),r=new fe(e,t+1),i=[];return this.dr.forEachInRange([s,r],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new K(new Vt([])),s=new fe(e,t),r=new fe(e,t+1);let i=dt();return this.dr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new fe(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class fe{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return K.comparator(t.key,e.key)||vt(t.wr,e.wr)}static Ar(t,e){return vt(t.wr,e.wr)||K.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new be(fe.Er)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bw(i,e,s,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new fe(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(t,e){return B.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,r=this.vr(s),i=r<0?0:r;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new fe(e,0),r=new fe(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],o=>{const a=this.Dr(o.wr);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new be(vt);return e.forEach(r=>{const i=new fe(r,0),o=new fe(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{s=s.add(a.wr)})}),B.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new fe(new K(i),0);let a=new be(vt);return this.br.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.wr)),!0)},o),B.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const r=this.Dr(s);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){Ct(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return B.forEach(e.mutations,r=>{const i=new fe(r.key,e.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new fe(e,0),r=this.br.firstAfterOrEqual(s);return B.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(t){this.Mr=t,this.docs=function(){return new Gt(K.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return B.resolve(s?s.document.mutableCopy():Ce.newInvalidDocument(e))}getEntries(t,e){let s=Gn();return e.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ce.newInvalidDocument(r))}),B.resolve(s)}getDocumentsMatchingQuery(t,e,s,r){let i=Gn();const o=e.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||rw(sw(u),s)<=0||(r.has(u.key)||Pc(e,u))&&(i=i.insert(u.key,u.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(t,e,s,r){et()}Or(t,e){return B.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new wE(this)}getSize(t){return B.resolve(this.size)}}class wE extends pE{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(s)}),B.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(t){this.persistence=t,this.Nr=new ni(e=>fu(e),pu),this.lastRemoteSnapshotVersion=st.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xu,this.targetCount=0,this.kr=Gr.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,r)=>e(r)),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),B.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Gr(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.Kn(e),B.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,s){let r=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),B.waitFor(i).next(()=>r)}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return B.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),B.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return B.resolve(s)}containsKey(t,e){return B.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(t,e){this.qr={},this.overlays={},this.Qr=new lu(0),this.Kr=!1,this.Kr=!0,this.$r=new vE,this.referenceDelegate=t(this),this.Ur=new EE(this),this.indexManager=new hE,this.remoteDocumentCache=function(r){return new xE(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new dE(e),this.Gr=new _E(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new yE,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new bE(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){Y("MemoryPersistence","Starting transaction:",t);const r=new IE(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(t,e){return B.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class IE extends ow{constructor(t){super(),this.currentSequenceNumber=t}}class wu{constructor(t){this.persistence=t,this.Jr=new xu,this.Yr=null}static Zr(t){return new wu(t)}get Xr(){if(this.Yr)return this.Yr;throw et()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),B.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),B.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,s=>{const r=K.fromPath(s);return this.ei(t,r).next(i=>{i||e.removeEntry(r,st.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return B.or([()=>B.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,e,s,r){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=r}static Wi(t,e){let s=dt(),r=dt();for(const i of e.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Eu(t,e.fromCache,s,r)}}/**
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
 */class AE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class kE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Cx()?8:aw(De())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,r){const i={result:null};return this.Yi(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(t,e,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AE;return this.Xi(t,e,o).next(a=>{if(i.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>i.result)}es(t,e,s,r){return s.documentReadCount<this.ji?(vi()<=ht.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Sr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(vi()<=ht.DEBUG&&Y("QueryEngine","Query:",Sr(e),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(vi()<=ht.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Sr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,vn(e))):B.resolve())}Yi(t,e){if(Uf(e))return B.resolve(null);let s=vn(e);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=tc(e,null,"F"),s=vn(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=dt(...i);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ts(e,a);return this.ns(e,l,o,c.readTime)?this.Yi(t,tc(e,null,"F")):this.rs(t,l,e,c)}))})))}Zi(t,e,s,r){return Uf(e)||r.isEqual(st.min())?B.resolve(null):this.Ji.getDocuments(t,s).next(i=>{const o=this.ts(e,i);return this.ns(e,o,s,r)?B.resolve(null):(vi()<=ht.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Sr(e)),this.rs(t,o,e,nw(r,-1)).next(a=>a))})}ts(t,e){let s=new be(s_(t));return e.forEach((r,i)=>{Pc(t,i)&&(s=s.add(i))}),s}ns(t,e,s,r){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(t,e,s){return vi()<=ht.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Sr(e)),this.Ji.getDocumentsMatchingQuery(t,e,vs.min(),s)}rs(t,e,s,r){return this.Ji.getDocumentsMatchingQuery(t,s,r).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(t,e,s,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new Gt(vt),this._s=new ni(i=>fu(i),pu),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new gE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function CE(n,t,e,s){return new SE(n,t,e,s)}async function T_(n,t){const e=it(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let r;return e.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=dt();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return e.localDocuments.getDocuments(s,c).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function PE(n,t){const e=it(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let m=B.resolve();return f.forEach(g=>{m=m.next(()=>u.getEntry(c,g)).next(v=>{const y=l.docVersions.get(g);Ct(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,s,t,i).next(()=>i.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=dt();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,r))})}function I_(n){const t=it(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function RE(n,t){const e=it(n),s=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const a=[];t.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(e.Ur.removeMatchingKeys(i,u.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(i,u.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(ge.EMPTY_BYTE_STRING,st.min()).withLastLimboFreeSnapshotVersion(st.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(v,y,k){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(f,m,u)&&a.push(e.Ur.updateTargetData(i,m))});let c=Gn(),l=dt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(DE(i,o,t.documentUpdates).next(u=>{c=u.Ps,l=u.Is})),!s.isEqual(st.min())){const u=e.Ur.getLastRemoteSnapshotVersion(i).next(h=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(e.os=r,i))}function DE(n,t,e){let s=dt(),r=dt();return e.forEach(i=>s=s.add(i)),t.getEntries(n,s).next(i=>{let o=Gn();return e.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(st.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function ME(n,t){const e=it(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function OE(n,t){const e=it(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return e.Ur.getTargetData(s,t).next(i=>i?(r=i,B.resolve(r)):e.Ur.allocateTargetId(s).next(o=>(r=new cs(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=e.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function Td(n,t,e){const s=it(n),r=s.os.get(t),i=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ao(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(r.target)}function Jf(n,t,e){const s=it(n);let r=st.min(),i=dt();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=it(c),f=h._s.get(u);return f!==void 0?B.resolve(h.os.get(f)):h.Ur.getTargetData(l,u)}(s,o,vn(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?r:st.min(),e?i:dt())).next(a=>(NE(s,Iw(t),a),{documents:a,Ts:i})))}function NE(n,t,e){let s=n.us.get(t)||st.min();e.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.us.set(t,s)}class Zf{constructor(){this.activeTargetIds=Rw()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class LE{constructor(){this.so=new Zf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Zf,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class VE{_o(t){}shutdown(){}}/**
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
 */let ua=null;function Ol(){return ua===null?ua=function(){return 268435456+Math.round(2147483648*Math.random())}():ua++,"0x"+ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class BE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(e,s,r,i,o){const a=Ol(),c=this.xo(e,s.toUriEncodedString());Y("RestConnection",`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,i,o),this.No(e,c,l,r).then(u=>(Y("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw nr("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",c,"request:",r),u})}Lo(e,s,r,i,o,a){return this.Mo(e,s,r,i,o)}Oo(e,s,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ti}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}xo(e,s){const r=FE[e];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,r){const i=Ol();return new Promise((o,a)=>{const c=new $g;c.setWithCredentials(!0),c.listenOnce(Bg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Da.NO_ERROR:const u=c.getResponseJson();Y(Ie,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Da.TIMEOUT:Y(Ie,`RPC '${t}' ${i} timed out`),a(new G($.DEADLINE_EXCEEDED,"Request time out"));break;case Da.HTTP_ERROR:const h=c.getStatus();if(Y(Ie,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const g=function(y){const k=y.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(k)>=0?k:$.UNKNOWN}(m.status);a(new G(g,m.message))}else a(new G($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new G($.UNAVAILABLE,"Connection failed."));break;default:et()}}finally{Y(Ie,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(r);Y(Ie,`RPC '${t}' ${i} sending request:`,r),c.send(e,"POST",l,s,15)})}Bo(t,e,s){const r=Ol(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=zg(),a=jg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const u=i.join("");Y(Ie,`Creating RPC '${t}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,m=!1;const g=new $E({Io:y=>{m?Y(Ie,`Not sending because RPC '${t}' stream ${r} is closed:`,y):(f||(Y(Ie,`Opening RPC '${t}' stream ${r} transport.`),h.open(),f=!0),Y(Ie,`RPC '${t}' stream ${r} sending:`,y),h.send(y))},To:()=>h.close()}),v=(y,k,T)=>{y.listen(k,A=>{try{T(A)}catch(P){setTimeout(()=>{throw P},0)}})};return v(h,Oi.EventType.OPEN,()=>{m||(Y(Ie,`RPC '${t}' stream ${r} transport opened.`),g.yo())}),v(h,Oi.EventType.CLOSE,()=>{m||(m=!0,Y(Ie,`RPC '${t}' stream ${r} transport closed`),g.So())}),v(h,Oi.EventType.ERROR,y=>{m||(m=!0,nr(Ie,`RPC '${t}' stream ${r} transport errored:`,y),g.So(new G($.UNAVAILABLE,"The operation could not be completed")))}),v(h,Oi.EventType.MESSAGE,y=>{var k;if(!m){const T=y.data[0];Ct(!!T);const A=T,P=A.error||((k=A[0])===null||k===void 0?void 0:k.error);if(P){Y(Ie,`RPC '${t}' stream ${r} received error:`,P);const R=P.status;let M=function(x){const S=ie[x];if(S!==void 0)return p_(S)}(R),w=P.message;M===void 0&&(M=$.INTERNAL,w="Unknown error status: "+R+" with message "+P.message),m=!0,g.So(new G(M,w)),h.close()}else Y(Ie,`RPC '${t}' stream ${r} received:`,T),g.bo(T)}}),v(a,Ug.STAT_EVENT,y=>{y.stat===pd.PROXY?Y(Ie,`RPC '${t}' stream ${r} detected buffering proxy`):y.stat===pd.NOPROXY&&Y(Ie,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function Nl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){return new Qw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,e,s=1e3,r=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-s);r>0&&Y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(t,e,s,r,i,o,a,c){this.ui=t,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new A_(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===$.RESOURCE_EXHAUSTED?(Wn(e.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===e&&this.P_(s,r)},s=>{t(()=>{const r=new G($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return Y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UE extends k_{constructor(t,e,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Zw(this.serializer,t),s=function(i){if(!("targetChange"in i))return st.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?st.min():o.readTime?bn(o.readTime):st.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=Ed(this.serializer),e.addTarget=function(i,o){let a;const c=o.target;if(a=yd(c)?{documents:nE(i,c)}:{query:sE(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=__(i,o.resumeToken);const l=bd(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(st.min())>0){a.readTime=sc(i,o.snapshotVersion.toTimestamp());const l=bd(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const s=iE(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=Ed(this.serializer),e.removeTarget=t,this.a_(e)}}class jE extends k_{constructor(t,e,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Ct(!!t.streamToken),this.lastStreamToken=t.streamToken,Ct(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Ct(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=eE(t.writeResults,t.commitTime),s=bn(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=Ed(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>tE(this.serializer,s))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE extends class{}{constructor(t,e,s,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new G($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(t,xd(e,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G($.UNKNOWN,i.toString())})}Lo(t,e,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,xd(e,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class HE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wn(e),this.D_=!1):Y("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(t,e,s,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{s.enqueueAndForget(async()=>{hr(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=it(c);l.L_.add(4),await Co(l),l.q_.set("Unknown"),l.L_.delete(4),await Nc(l)}(this))})}),this.q_=new HE(s,r)}}async function Nc(n){if(hr(n))for(const t of n.B_)await t(!0)}async function Co(n){for(const t of n.B_)await t(!1)}function S_(n,t){const e=it(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ku(e)?Au(e):si(e).r_()&&Iu(e,t))}function Tu(n,t){const e=it(n),s=si(e);e.N_.delete(t),s.r_()&&C_(e,t),e.N_.size===0&&(s.r_()?s.o_():hr(e)&&e.q_.set("Unknown"))}function Iu(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(st.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}si(n).A_(t)}function C_(n,t){n.Q_.xe(t),si(n).R_(t)}function Au(n){n.Q_=new Ww({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),si(n).start(),n.q_.v_()}function ku(n){return hr(n)&&!si(n).n_()&&n.N_.size>0}function hr(n){return it(n).L_.size===0}function P_(n){n.Q_=void 0}async function WE(n){n.q_.set("Online")}async function GE(n){n.N_.forEach((t,e)=>{Iu(n,t)})}async function YE(n,t){P_(n),ku(n)?(n.q_.M_(t),Au(n)):n.q_.set("Unknown")}async function KE(n,t,e){if(n.q_.set("Online"),t instanceof g_&&t.state===2&&t.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(n,t)}catch(s){Y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await rc(n,s)}else if(t instanceof Na?n.Q_.Ke(t):t instanceof m_?n.Q_.He(t):n.Q_.We(t),!e.isEqual(st.min()))try{const s=await I_(n.localStore);e.compareTo(s)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.N_.get(l);u&&i.N_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.N_.get(c);if(!u)return;i.N_.set(c,u.withResumeToken(ge.EMPTY_BYTE_STRING,u.snapshotVersion)),C_(i,c);const h=new cs(u.target,c,l,u.sequenceNumber);Iu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){Y("RemoteStore","Failed to raise snapshot:",s),await rc(n,s)}}async function rc(n,t,e){if(!Ao(t))throw t;n.L_.add(1),await Co(n),n.q_.set("Offline"),e||(e=()=>I_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Nc(n)})}function R_(n,t){return t().catch(e=>rc(n,e,t))}async function Lc(n){const t=it(n),e=xs(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;QE(t);)try{const r=await ME(t.localStore,s);if(r===null){t.O_.length===0&&e.o_();break}s=r.batchId,XE(t,r)}catch(r){await rc(t,r)}D_(t)&&M_(t)}function QE(n){return hr(n)&&n.O_.length<10}function XE(n,t){n.O_.push(t);const e=xs(n);e.r_()&&e.V_&&e.m_(t.mutations)}function D_(n){return hr(n)&&!xs(n).n_()&&n.O_.length>0}function M_(n){xs(n).start()}async function JE(n){xs(n).p_()}async function ZE(n){const t=xs(n);for(const e of n.O_)t.m_(e.mutations)}async function tT(n,t,e){const s=n.O_.shift(),r=yu.from(s,t,e);await R_(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Lc(n)}async function eT(n,t){t&&xs(n).V_&&await async function(s,r){if(function(o){return zw(o)&&o!==$.ABORTED}(r.code)){const i=s.O_.shift();xs(s).s_(),await R_(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Lc(s)}}(n,t),D_(n)&&M_(n)}async function ep(n,t){const e=it(n);e.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const s=hr(e);e.L_.add(3),await Co(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Nc(e)}async function nT(n,t){const e=it(n);t?(e.L_.delete(2),await Nc(e)):t||(e.L_.add(2),await Co(e),e.q_.set("Unknown"))}function si(n){return n.K_||(n.K_=function(e,s,r){const i=it(e);return i.w_(),new UE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Eo:WE.bind(null,n),Ro:GE.bind(null,n),mo:YE.bind(null,n),d_:KE.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),ku(n)?Au(n):n.q_.set("Unknown")):(await n.K_.stop(),P_(n))})),n.K_}function xs(n){return n.U_||(n.U_=function(e,s,r){const i=it(e);return i.w_(),new jE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:JE.bind(null,n),mo:eT.bind(null,n),f_:ZE.bind(null,n),g_:tT.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Lc(n)):(await n.U_.stop(),n.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e,s,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,r,i){const o=Date.now()+s,a=new Su(t,e,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cu(n,t){if(Wn("AsyncQueue",`${t}: ${n}`),Ao(n))return new G($.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t){this.comparator=t?(e,s)=>t(e,s)||K.comparator(e.key,s.key):(e,s)=>K.comparator(e.key,s.key),this.keyedMap=Ni(),this.sortedSet=new Gt(this.comparator)}static emptySet(t){return new Fr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Fr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new Fr;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.W_=new Gt(K.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):et():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Yr{constructor(t,e,s,r,i,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,s,r,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Yr(t,e,Fr.emptySet(e),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==s[r].type||!e[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class rT{constructor(){this.queries=sp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const r=it(e),i=r.queries;r.queries=sp(),i.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new G($.ABORTED,"Firestore shutting down"))}}function sp(){return new ni(n=>n_(n),Cc)}async function O_(n,t){const e=it(n);let s=3;const r=t.query;let i=e.queries.get(r);i?!i.H_()&&t.J_()&&(s=2):(i=new sT,s=t.J_()?0:1);try{switch(s){case 0:i.z_=await e.onListen(r,!0);break;case 1:i.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const a=Cu(o,`Initialization of query '${Sr(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&Pu(e)}async function N_(n,t){const e=it(n),s=t.query;let r=3;const i=e.queries.get(s);if(i){const o=i.j_.indexOf(t);o>=0&&(i.j_.splice(o,1),i.j_.length===0?r=t.J_()?0:1:!i.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function iT(n,t){const e=it(n);let s=!1;for(const r of t){const i=r.query,o=e.queries.get(i);if(o){for(const a of o.j_)a.X_(r)&&(s=!0);o.z_=r}}s&&Pu(e)}function oT(n,t,e){const s=it(n),r=s.queries.get(t);if(r)for(const i of r.j_)i.onError(e);s.queries.delete(t)}function Pu(n){n.Y_.forEach(t=>{t.next()})}var Id,rp;(rp=Id||(Id={})).ea="default",rp.Cache="cache";class L_{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Yr(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Yr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Id.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t){this.key=t}}class F_{constructor(t){this.key=t}}class aT{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=dt(),this.mutatedKeys=dt(),this.Aa=s_(t),this.Ra=new Fr(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new np,r=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,h)=>{const f=r.get(u),m=Pc(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;f&&m?f.data.isEqual(m.data)?g!==v&&(s.track({type:3,doc:m}),y=!0):this.ga(f,m)||(s.track({type:2,doc:m}),y=!0,(c&&this.Aa(m,c)>0||l&&this.Aa(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),y=!0):f&&!m&&(s.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(m?(o=o.add(m),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Ra:o,fa:s,ns:a,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,r){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((u,h)=>function(m,g){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return et()}};return v(m)-v(g)}(u.type,h.type)||this.Aa(u.doc,h.doc)),this.pa(s),r=r!=null&&r;const a=e&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,l=c!==this.Ea;return this.Ea=c,o.length!==0||l?{snapshot:new Yr(this.query,t.Ra,i,o,t.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new np,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=dt(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new F_(s))}),this.da.forEach(s=>{t.has(s)||e.push(new V_(s))}),e}ba(t){this.Ta=t.Ts,this.da=dt();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Yr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class cT{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class lT{constructor(t){this.key=t,this.va=!1}}class dT{constructor(t,e,s,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ni(a=>n_(a),Cc),this.Ma=new Map,this.xa=new Set,this.Oa=new Gt(K.comparator),this.Na=new Map,this.La=new xu,this.Ba={},this.ka=new Map,this.qa=Gr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function uT(n,t,e=!0){const s=H_(n);let r;const i=s.Fa.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await $_(s,t,e,!0),r}async function hT(n,t){const e=H_(n);await $_(e,t,!0,!1)}async function $_(n,t,e,s){const r=await OE(n.localStore,vn(t)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,e);let a;return s&&(a=await fT(n,t,i,o==="current",r.resumeToken)),n.isPrimaryClient&&e&&S_(n.remoteStore,r),a}async function fT(n,t,e,s,r){n.Ka=(h,f,m)=>async function(v,y,k,T){let A=y.view.ma(k);A.ns&&(A=await Jf(v.localStore,y.query,!1).then(({documents:w})=>y.view.ma(w,A)));const P=T&&T.targetChanges.get(y.targetId),R=T&&T.targetMismatches.get(y.targetId)!=null,M=y.view.applyChanges(A,v.isPrimaryClient,P,R);return op(v,y.targetId,M.wa),M.snapshot}(n,h,f,m);const i=await Jf(n.localStore,t,!0),o=new aT(t,i.Ts),a=o.ma(i.documents),c=So.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",r),l=o.applyChanges(a,n.isPrimaryClient,c);op(n,e,l.wa);const u=new cT(t,e,o);return n.Fa.set(t,u),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),l.snapshot}async function pT(n,t,e){const s=it(n),r=s.Fa.get(t),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(o=>!Cc(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Td(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),e&&Tu(s.remoteStore,r.targetId),Ad(s,r.targetId)}).catch(Io)):(Ad(s,r.targetId),await Td(s.localStore,r.targetId,!0))}async function mT(n,t){const e=it(n),s=e.Fa.get(t),r=e.Ma.get(s.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),Tu(e.remoteStore,s.targetId))}async function gT(n,t,e){const s=ET(n);try{const r=await function(o,a){const c=it(o),l=Ht.now(),u=a.reduce((m,g)=>m.add(g.key),dt());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=Gn(),v=dt();return c.cs.getEntries(m,u).next(y=>{g=y,g.forEach((k,T)=>{T.isValidDocument()||(v=v.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,g)).next(y=>{h=y;const k=[];for(const T of a){const A=Fw(T,h.get(T.key).overlayedDocument);A!=null&&k.push(new Ts(T.key,A,Yg(A.value.mapValue),Je.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,k,a)}).next(y=>{f=y;const k=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,y.batchId,k)})}).then(()=>({batchId:f.batchId,changes:i_(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.Ba[o.currentUser.toKey()];l||(l=new Gt(vt)),l=l.insert(a,c),o.Ba[o.currentUser.toKey()]=l}(s,r.batchId,e),await Po(s,r.changes),await Lc(s.remoteStore)}catch(r){const i=Cu(r,"Failed to persist write");e.reject(i)}}async function B_(n,t){const e=it(n);try{const s=await RE(e.localStore,t);t.targetChanges.forEach((r,i)=>{const o=e.Na.get(i);o&&(Ct(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?Ct(o.va):r.removedDocuments.size>0&&(Ct(o.va),o.va=!1))}),await Po(e,s,t)}catch(s){await Io(s)}}function ip(n,t,e){const s=it(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const r=[];s.Fa.forEach((i,o)=>{const a=o.view.Z_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=it(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.j_)f.Z_(a)&&(l=!0)}),l&&Pu(c)}(s.eventManager,t),r.length&&s.Ca.d_(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function _T(n,t,e){const s=it(n);s.sharedClientState.updateQueryState(t,"rejected",e);const r=s.Na.get(t),i=r&&r.key;if(i){let o=new Gt(K.comparator);o=o.insert(i,Ce.newNoDocument(i,st.min()));const a=dt().add(i),c=new Mc(st.min(),new Map,new Gt(vt),o,a);await B_(s,c),s.Oa=s.Oa.remove(i),s.Na.delete(t),Ru(s)}else await Td(s.localStore,t,!1).then(()=>Ad(s,t,e)).catch(Io)}async function yT(n,t){const e=it(n),s=t.batch.batchId;try{const r=await PE(e.localStore,t);j_(e,s,null),U_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Po(e,r)}catch(r){await Io(r)}}async function vT(n,t,e){const s=it(n);try{const r=await function(o,a){const c=it(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ct(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(s.localStore,t);j_(s,t,e),U_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Po(s,r)}catch(r){await Io(r)}}function U_(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function j_(n,t,e){const s=it(n);let r=s.Ba[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(e?i.reject(e):i.resolve(),r=r.remove(t)),s.Ba[s.currentUser.toKey()]=r}}function Ad(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||z_(n,s)})}function z_(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Tu(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Ru(n))}function op(n,t,e){for(const s of e)s instanceof V_?(n.La.addReference(s.key,t),bT(n,s)):s instanceof F_?(Y("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||z_(n,s.key)):et()}function bT(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(Y("SyncEngine","New document in limbo: "+e),n.xa.add(s),Ru(n))}function Ru(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new K(Vt.fromString(t)),s=n.qa.next();n.Na.set(s,new lT(e)),n.Oa=n.Oa.insert(e,s),S_(n.remoteStore,new cs(vn(mu(e.path)),s,"TargetPurposeLimboResolution",lu.oe))}}async function Po(n,t,e){const s=it(n),r=[],i=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(l=>{var u;if((l||e)&&s.isPrimaryClient){const h=l?!l.fromCache:(u=e==null?void 0:e.targetChanges.get(c.targetId))===null||u===void 0?void 0:u.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){r.push(l);const h=Eu.Wi(c.targetId,l);i.push(h)}}))}),await Promise.all(o),s.Ca.d_(r),await async function(c,l){const u=it(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(l,f=>B.forEach(f.$i,m=>u.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>B.forEach(f.Ui,m=>u.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Ao(h))throw h;Y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=u.os.get(f),g=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(g);u.os=u.os.insert(f,v)}}}(s.localStore,i))}async function xT(n,t){const e=it(n);if(!e.currentUser.isEqual(t)){Y("SyncEngine","User change. New user:",t.toKey());const s=await T_(e.localStore,t);e.currentUser=t,function(i,o){i.ka.forEach(a=>{a.forEach(c=>{c.reject(new G($.CANCELLED,o))})}),i.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Po(e,s.hs)}}function wT(n,t){const e=it(n),s=e.Na.get(t);if(s&&s.va)return dt().add(s.key);{let r=dt();const i=e.Ma.get(t);if(!i)return r;for(const o of i){const a=e.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function H_(n){const t=it(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=B_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=wT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_T.bind(null,t),t.Ca.d_=iT.bind(null,t.eventManager),t.Ca.$a=oT.bind(null,t.eventManager),t}function ET(n){const t=it(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vT.bind(null,t),t}class ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Oc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return CE(this.persistence,new kE,t.initialUser,this.serializer)}Ga(t){return new TE(wu.Zr,this.serializer)}Wa(t){return new LE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ic.provider={build:()=>new ic};class kd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ip(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xT.bind(null,this.syncEngine),await nT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new rT}()}createDatastore(t){const e=Oc(t.databaseInfo.databaseId),s=function(i){return new BE(i)}(t.databaseInfo);return function(i,o,a,c){return new zE(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,r,i,o,a){return new qE(s,r,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>ip(this.syncEngine,e,0),function(){return tp.D()?new tp:new VE}())}createSyncEngine(t,e){return function(r,i,o,a,c,l,u){const h=new dT(r,i,o,a,c,l);return u&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const i=it(r);Y("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Co(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}kd.provider={build:()=>new kd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class q_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Wn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(t,e,s,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=r,this.user=ke.UNAUTHENTICATED,this.clientId=cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Cu(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ll(n,t){n.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await T_(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ap(n,t){n.asyncQueue.verifyOperationInProgress();const e=await IT(n);Y("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>ep(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>ep(t.remoteStore,r)),n._onlineComponents=t}async function IT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ll(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;nr("Error using user provided cache. Falling back to memory cache: "+e),await Ll(n,new ic)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Ll(n,new ic);return n._offlineComponents}async function W_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await ap(n,n._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await ap(n,new kd))),n._onlineComponents}function AT(n){return W_(n).then(t=>t.syncEngine)}async function G_(n){const t=await W_(n),e=t.eventManager;return e.onListen=uT.bind(null,t.syncEngine),e.onUnlisten=pT.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=hT.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=mT.bind(null,t.syncEngine),e}function kT(n,t,e={}){const s=new jn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new q_({next:f=>{u.Za(),o.enqueueAndForget(()=>N_(i,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new G($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new G($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new L_(mu(a.path),u,{includeMetadataChanges:!0,_a:!0});return O_(i,h)}(await G_(n),n.asyncQueue,t,e,s)),s.promise}function ST(n,t,e={}){const s=new jn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new q_({next:f=>{u.Za(),o.enqueueAndForget(()=>N_(i,h)),f.fromCache&&c.source==="server"?l.reject(new G($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new L_(a,u,{includeMetadataChanges:!0,_a:!0});return O_(i,h)}(await G_(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function Y_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function K_(n,t,e){if(!e)throw new G($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Q_(n,t,e,s){if(t===!0&&s===!0)throw new G($.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function lp(n){if(!K.isDocumentKey(n))throw new G($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function dp(n){if(K.isDocumentKey(n))throw new G($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":et()}function tn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new G($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Vc(n);throw new G($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function CT(n,t){if(t<=0)throw new G($.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new G($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new G($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Q_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Y_((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fc{constructor(t,e,s,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new up({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new G($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new up(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new qg;switch(s.type){case"firstParty":return new X0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new G($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=cp.get(e);s&&(Y("ComponentProvider","Removing Datastore"),cp.delete(e),s.terminate())}(this),Promise.resolve()}}function X_(n,t,e,s={}){var r;const i=(n=tn(n,Fc))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ke.MOCK_USER;else{a=Dg(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new G($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ke(l)}n._authCredentials=new Y0(new Hg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Kn(this.firestore,t,this._query)}}class Re{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Re(this.firestore,t,this._key)}}class zn extends Kn{constructor(t,e,s){super(t,e,mu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Re(this.firestore,null,new K(t))}withConverter(t){return new zn(this.firestore,t,this._path)}}function mt(n,t,...e){if(n=Jt(n),K_("collection","path",t),n instanceof Fc){const s=Vt.fromString(t,...e);return dp(s),new zn(n,null,s)}{if(!(n instanceof Re||n instanceof zn))throw new G($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Vt.fromString(t,...e));return dp(s),new zn(n.firestore,null,s)}}function ae(n,t,...e){if(n=Jt(n),arguments.length===1&&(t=cu.newId()),K_("doc","path",t),n instanceof Fc){const s=Vt.fromString(t,...e);return lp(s),new Re(n,null,new K(s))}{if(!(n instanceof Re||n instanceof zn))throw new G($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Vt.fromString(t,...e));return lp(s),new Re(n.firestore,n instanceof zn?n.converter:null,new K(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new A_(this,"async_queue_retry"),this.Vu=()=>{const s=Nl();s&&Y("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=Nl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Nl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new jn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Ao(t))throw t;Y("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Wn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=Su.createAndSchedule(this,t,e,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&et()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Is extends Fc{constructor(t,e,s,r){super(t,e,s,r),this.type="firestore",this._queue=new hp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hp(t),this._firestoreClient=void 0,await t}}}function J_(n,t){const e=typeof n=="object"?n:ou(),s=typeof n=="string"?n:"(default)",r=kc(e,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Cg("firestore");i&&X_(r,...i)}return r}function $c(n){if(n._terminated)throw new G($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PT(n),n._firestoreClient}function PT(n){var t,e,s;const r=n._freezeSettings(),i=function(a,c,l,u){return new dw(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Y_(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new TT(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ir(ge.fromBase64String(t))}catch(e){throw new G($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ir(ge.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new G($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new G($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new G($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return vt(this._lat,t._lat)||vt(this._long,t._long)}}/**
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
 */class jc{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=/^__.*__$/;class DT{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new Ts(t,this.data,this.fieldMask,e,this.fieldTransforms):new ko(t,this.data,e,this.fieldTransforms)}}class Z_{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new Ts(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ty(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw et()}}class Du{constructor(t,e,s,r,i,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Du(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:s,xu:!1});return r.Ou(t),r}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:s,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return oc(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(ty(this.Cu)&&RT.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class MT{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||Oc(t)}Qu(t,e,s,r=!1){return new Du({Cu:t,methodName:e,qu:s,path:pe.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zc(n){const t=n._freezeSettings(),e=Oc(n._databaseId);return new MT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ey(n,t,e,s,r,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,t,e,r);Mu("Data must be an object, but it was:",o,s);const a=ny(s,o);let c,l;if(i.merge)c=new Ye(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Sd(t,h,e);if(!o.contains(f))throw new G($.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ry(u,f)||u.push(f)}c=new Ye(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new DT(new Ue(a),c,l)}class Hc extends Bc{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Hc}}function OT(n,t,e,s){const r=n.Qu(1,t,e);Mu("Data must be an object, but it was:",r,s);const i=[],o=Ue.empty();ur(s,(c,l)=>{const u=Ou(t,c,e);l=Jt(l);const h=r.Nu(u);if(l instanceof Hc)i.push(u);else{const f=Do(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Ye(i);return new Z_(o,a,r.fieldTransforms)}function NT(n,t,e,s,r,i){const o=n.Qu(1,t,e),a=[Sd(t,s,e)],c=[r];if(i.length%2!=0)throw new G($.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Sd(t,i[f])),c.push(i[f+1]);const l=[],u=Ue.empty();for(let f=a.length-1;f>=0;--f)if(!ry(l,a[f])){const m=a[f];let g=c[f];g=Jt(g);const v=o.Nu(m);if(g instanceof Hc)l.push(m);else{const y=Do(g,v);y!=null&&(l.push(m),u.set(m,y))}}const h=new Ye(l);return new Z_(u,h,o.fieldTransforms)}function LT(n,t,e,s=!1){return Do(e,n.Qu(s?4:3,t))}function Do(n,t){if(sy(n=Jt(n)))return Mu("Unsupported field value:",t,n),ny(n,t);if(n instanceof Bc)return function(s,r){if(!ty(r.Cu))throw r.Bu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Do(a,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,t)}return function(s,r){if((s=Jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Dw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ht.fromDate(s);return{timestampValue:sc(r.serializer,i)}}if(s instanceof Ht){const i=new Ht(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sc(r.serializer,i)}}if(s instanceof Uc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ir)return{bytesValue:__(r.serializer,s._byteString)};if(s instanceof Re){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bu(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof jc)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return gu(a.serializer,c)})}}}}}}(s,r);throw r.Bu(`Unsupported field value: ${Vc(s)}`)}(n,t)}function ny(n,t){const e={};return Wg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ur(n,(s,r)=>{const i=Do(r,t.Mu(s));i!=null&&(e[s]=i)}),{mapValue:{fields:e}}}function sy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ht||n instanceof Uc||n instanceof ir||n instanceof Re||n instanceof Bc||n instanceof jc)}function Mu(n,t,e){if(!sy(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const s=Vc(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function Sd(n,t,e){if((t=Jt(t))instanceof Ro)return t._internalPath;if(typeof t=="string")return Ou(n,t);throw oc("Field path arguments must be of type string or ",n,!1,void 0,e)}const VT=new RegExp("[~\\*/\\[\\]]");function Ou(n,t,e){if(t.search(VT)>=0)throw oc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ro(...t.split("."))._internalPath}catch{throw oc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function oc(n,t,e,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new G($.INVALID_ARGUMENT,a+n+c)}function ry(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t,e,s,r,i){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new FT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class FT extends iy{data(){return super.data()}}function qc(n,t){return typeof t=="string"?Ou(n,t):t instanceof Ro?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nu{}class Wc extends Nu{}function Qt(n,t,...e){let s=[];t instanceof Nu&&s.push(t),s=s.concat(e),function(i){const o=i.filter(c=>c instanceof Gc).length,a=i.filter(c=>c instanceof Mo).length;if(o>1||o>0&&a>0)throw new G($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Mo extends Wc{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Mo(t,e,s)}_apply(t){const e=this._parse(t);return oy(t._query,e),new Kn(t.firestore,t.converter,vd(t._query,e))}_parse(t){const e=zc(t.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new G($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){pp(h,u);const m=[];for(const g of h)m.push(fp(c,i,g));f={arrayValue:{values:m}}}else f=fp(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||pp(h,u),f=LT(a,o,h,u==="in"||u==="not-in");return oe.create(l,u,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Pt(n,t,e){const s=t,r=qc("where",n);return Mo._create(r,s,e)}class Gc extends Nu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Gc(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:cn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)oy(o,c),o=vd(o,c)}(t._query,e),new Kn(t.firestore,t.converter,vd(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yc extends Wc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Yc(t,e)}_apply(t){const e=function(r,i,o){if(r.startAt!==null)throw new G($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new G($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oo(i,o)}(t._query,this._field,this._direction);return new Kn(t.firestore,t.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new ei(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function Lu(n,t="asc"){const e=t,s=qc("orderBy",n);return Yc._create(s,e)}class Kc extends Wc{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new Kc(t,e,s)}_apply(t){return new Kn(t.firestore,t.converter,tc(t._query,this._limit,this._limitType))}}function ac(n){return CT("limit",n),Kc._create("limit",n,"F")}function fp(n,t,e){if(typeof(e=Jt(e))=="string"){if(e==="")throw new G($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e_(t)&&e.indexOf("/")!==-1)throw new G($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(Vt.fromString(e));if(!K.isDocumentKey(s))throw new G($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Nf(n,new K(s))}if(e instanceof Re)return Nf(n,e._key);throw new G($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(e)}.`)}function pp(n,t){if(!Array.isArray(n)||n.length===0)throw new G($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function oy(n,t){const e=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new G($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new G($.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ay{convertValue(t,e="none"){switch(rr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ee(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(sr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw et()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return ur(t,(r,i)=>{s[r]=this.convertValue(i,e)}),s}convertVectorValue(t){var e,s,r;const i=(r=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>ee(o.doubleValue));return new jc(i)}convertGeoPoint(t){return new Uc(ee(t.latitude),ee(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=uu(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(ro(t));default:return null}}convertTimestamp(t){const e=bs(t);return new Ht(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Vt.fromString(t);Ct(E_(s));const r=new Hr(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(e)||Wn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vu extends iy{constructor(t,e,s,r,i,o){super(t,e,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(qc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class Gi extends Vu{data(t={}){return super.data(t)}}class ly{constructor(t,e,s,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Or(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new Gi(this._firestore,this._userDataWriter,s.key,s,new Or(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new G($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new Gi(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Or(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Gi(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Or(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:BT(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function BT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return et()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n){n=tn(n,Re);const t=tn(n.firestore,Is);return kT($c(t),n._key).then(e=>UT(t,n,e))}class dy extends ay{constructor(t){super(),this.firestore=t}convertBytes(t){return new ir(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Re(this.firestore,null,e)}}function yt(n){n=tn(n,Kn);const t=tn(n.firestore,Is),e=$c(t),s=new dy(t);return $T(n._query),ST(e,n._query).then(r=>new ly(t,s,n,r))}function uy(n,t,e){n=tn(n,Re);const s=tn(n.firestore,Is),r=cy(n.converter,t);return Oo(s,[ey(zc(s),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,Je.none())])}function Ze(n,t,e,...s){n=tn(n,Re);const r=tn(n.firestore,Is),i=zc(r);let o;return o=typeof(t=Jt(t))=="string"||t instanceof Ro?NT(i,"updateDoc",n._key,t,e,s):OT(i,"updateDoc",n._key,t),Oo(r,[o.toMutation(n._key,Je.exists(!0))])}function Fu(n){return Oo(tn(n.firestore,Is),[new _u(n._key,Je.none())])}function fr(n,t){const e=tn(n.firestore,Is),s=ae(n),r=cy(n.converter,t);return Oo(e,[ey(zc(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,Je.exists(!1))]).then(()=>s)}function Oo(n,t){return function(s,r){const i=new jn;return s.asyncQueue.enqueueAndForget(async()=>gT(await AT(s),r,i)),i.promise}($c(n),t)}function UT(n,t,e){const s=e.docs.get(t._key),r=new dy(n);return new Vu(n,r,t._key,s,new Or(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(r){ti=r})(dr),tr(new ys("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Is(new K0(s.getProvider("auth-internal")),new Z0(s.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new G($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hr(l.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),yn(Pf,"4.7.3",t),yn(Pf,"4.7.3","esm2017")})();const jT=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:ay,Bytes:ir,CollectionReference:zn,DocumentReference:Re,DocumentSnapshot:Vu,FieldPath:Ro,FieldValue:Bc,Firestore:Is,FirestoreError:G,GeoPoint:Uc,Query:Kn,QueryCompositeFilterConstraint:Gc,QueryConstraint:Wc,QueryDocumentSnapshot:Gi,QueryFieldFilterConstraint:Mo,QueryLimitConstraint:Kc,QueryOrderByConstraint:Yc,QuerySnapshot:ly,SnapshotMetadata:Or,Timestamp:Ht,VectorValue:jc,_AutoId:cu,_ByteString:ge,_DatabaseId:Hr,_DocumentKey:K,_EmptyAuthCredentialsProvider:qg,_FieldPath:pe,_cast:tn,_logWarn:nr,_validateIsNotUsedTogether:Q_,addDoc:fr,collection:mt,connectFirestoreEmulator:X_,deleteDoc:Fu,doc:ae,ensureFirestoreConfigured:$c,executeWrite:Oo,getDoc:lo,getDocs:yt,getFirestore:J_,limit:ac,orderBy:Lu,query:Qt,setDoc:uy,updateDoc:Ze,where:Pt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="firebasestorage.googleapis.com",fy="storageBucket",zT=2*60*1e3,HT=10*60*1e3,qT=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends An{constructor(t,e,s=0){super(Vl(t),`Firebase Storage: ${e} (${Vl(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Yt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Vl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $t;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($t||($t={}));function Vl(n){return"storage/"+n}function $u(){const n="An unknown error occurred, please check the error payload for server response.";return new Yt($t.UNKNOWN,n)}function WT(n){return new Yt($t.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function GT(n){return new Yt($t.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function YT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Yt($t.UNAUTHENTICATED,n)}function KT(){return new Yt($t.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function QT(n){return new Yt($t.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function py(){return new Yt($t.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function my(){return new Yt($t.CANCELED,"User canceled the upload/download.")}function XT(n){return new Yt($t.INVALID_URL,"Invalid URL '"+n+"'.")}function JT(n){return new Yt($t.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ZT(){return new Yt($t.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fy+"' property when initializing the app?")}function gy(){return new Yt($t.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tI(){return new Yt($t.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function eI(){return new Yt($t.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nI(n){return new Yt($t.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cd(n){return new Yt($t.INVALID_ARGUMENT,n)}function _y(){return new Yt($t.APP_DELETED,"The Firebase app was deleted.")}function sI(n){return new Yt($t.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Yi(n,t){return new Yt($t.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function bi(n){throw new Yt($t.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Ke.makeFromUrl(t,e)}catch{return new Ke(t,"")}if(s.path==="")return s;throw JT(t)}static makeFromUrl(t,e){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),g={bucket:1,path:3},v=e===hy?"(?:storage.googleapis.com|storage.cloud.google.com)":e,y="([^?#]*)",k=new RegExp(`^https?://${v}/${r}/${y}`,"i"),A=[{regex:a,indices:c,postModify:i},{regex:m,indices:g,postModify:l},{regex:k,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<A.length;P++){const R=A[P],M=R.regex.exec(t);if(M){const w=M[R.indices.bucket];let b=M[R.indices.path];b||(b=""),s=new Ke(w,b),R.postModify(s);break}}if(s==null)throw XT(t);return s}}class rI{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(n,t,e){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...y){l||(l=!0,t.apply(null,y))}function h(y){r=setTimeout(()=>{r=null,n(m,c())},y)}function f(){i&&clearTimeout(i)}function m(y,...k){if(l){f();return}if(y){f(),u.call(null,y,...k);return}if(c()||o){f(),u.call(null,y,...k);return}s<64&&(s*=2);let A;a===1?(a=2,A=0):A=(s+Math.random())*1e3,h(A)}let g=!1;function v(y){g||(g=!0,f(),!l&&(r!==null?(y||(a=2),clearTimeout(r),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},e),v}function oI(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n){return n!==void 0}function cI(n){return typeof n=="function"}function lI(n){return typeof n=="object"&&!Array.isArray(n)}function Qc(n){return typeof n=="string"||n instanceof String}function mp(n){return Bu()&&n instanceof Blob}function Bu(){return typeof Blob<"u"}function gp(n,t,e,s){if(s<t)throw Cd(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw Cd(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function yy(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const r=t(s)+"="+t(n[s]);e=e+r+"&"}return e=e.slice(0,-1),e}var Gs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Gs||(Gs={}));/**
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
 */function vy(n,t){const e=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=t.indexOf(n)!==-1;return e||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(t,e,s,r,i,o,a,c,l,u,h,f=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new ha(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Gs.NO_ERROR,c=i.getStatus();if(!a||vy(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Gs.ABORT;s(!1,new ha(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ha(l,i))})},e=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());aI(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=$u();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?_y():my();o(c)}else{const c=py();o(c)}};this.canceled_?e(!1,new ha(!1,null,!0)):this.backoffId_=iI(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&oI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ha{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function uI(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function hI(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function fI(n,t){t&&(n["X-Firebase-GMPID"]=t)}function pI(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function mI(n,t,e,s,r,i,o=!0){const a=yy(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return fI(l,t),uI(l,e),hI(l,i),pI(l,s),new dI(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _I(...n){const t=gI();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(Bu())return new Blob(n);throw new Yt($t.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yI(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function vI(n){if(typeof atob>"u")throw nI("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fl{constructor(t,e){this.data=t,this.contentType=e||null}}function bI(n,t){switch(n){case _n.RAW:return new Fl(by(t));case _n.BASE64:case _n.BASE64URL:return new Fl(xy(n,t));case _n.DATA_URL:return new Fl(wI(t),EI(t))}throw $u()}function by(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const i=s,o=n.charCodeAt(++e);s=65536|(i&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function xI(n){let t;try{t=decodeURIComponent(n)}catch{throw Yi(_n.DATA_URL,"Malformed data URL.")}return by(t)}function xy(n,t){switch(n){case _n.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw Yi(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case _n.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw Yi(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=vI(t)}catch(r){throw r.message.includes("polyfill")?r:Yi(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}class wy{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Yi(_n.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=TI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function wI(n){const t=new wy(n);return t.base64?xy(_n.BASE64,t.rest):xI(t.rest)}function EI(n){return new wy(n).contentType}function TI(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,e){let s=0,r="";mp(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(mp(this.data_)){const s=this.data_,r=yI(s,t,e);return r===null?null:new ss(r)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new ss(s,!0)}}static getBlob(...t){if(Bu()){const e=t.map(s=>s instanceof ss?s.data_:s);return new ss(_I.apply(null,e))}else{const e=t.map(o=>Qc(o)?bI(_n.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new ss(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(n){let t;try{t=JSON.parse(n)}catch{return null}return lI(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function AI(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function Ty(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n,t){return t}class Ve{constructor(t,e,s,r){this.server=t,this.local=e||t,this.writable=!!s,this.xform=r||kI}}let fa=null;function SI(n){return!Qc(n)||n.length<2?n:Ty(n)}function Iy(){if(fa)return fa;const n=[];n.push(new Ve("bucket")),n.push(new Ve("generation")),n.push(new Ve("metageneration")),n.push(new Ve("name","fullPath",!0));function t(i,o){return SI(o)}const e=new Ve("name");e.xform=t,n.push(e);function s(i,o){return o!==void 0?Number(o):o}const r=new Ve("size");return r.xform=s,n.push(r),n.push(new Ve("timeCreated")),n.push(new Ve("updated")),n.push(new Ve("md5Hash",null,!0)),n.push(new Ve("cacheControl",null,!0)),n.push(new Ve("contentDisposition",null,!0)),n.push(new Ve("contentEncoding",null,!0)),n.push(new Ve("contentLanguage",null,!0)),n.push(new Ve("contentType",null,!0)),n.push(new Ve("metadata","customMetadata",!0)),fa=n,fa}function CI(n,t){function e(){const s=n.bucket,r=n.fullPath,i=new Ke(s,r);return t._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:e})}function PI(n,t,e){const s={};s.type="file";const r=e.length;for(let i=0;i<r;i++){const o=e[i];s[o.local]=o.xform(s,t[o.server])}return CI(s,n),s}function Ay(n,t,e){const s=Ey(t);return s===null?null:PI(n,s,e)}function RI(n,t,e,s){const r=Ey(t);if(r===null||!Qc(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=n.bucket,h=n.fullPath,f="/b/"+o(u)+"/o/"+o(h),m=No(f,e,s),g=yy({alt:"media",token:l});return m+g})[0]}function ky(n,t){const e={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(e[i.server]=n[i.local])}return JSON.stringify(e)}class ri{constructor(t,e,s,r){this.url=t,this.method=e,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){if(!n)throw $u()}function Uu(n,t){function e(s,r){const i=Ay(n,r,t);return Hn(i!==null),i}return e}function DI(n,t){function e(s,r){const i=Ay(n,r,t);return Hn(i!==null),RI(i,r,n.host,n._protocol)}return e}function Lo(n){function t(e,s){let r;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?r=KT():r=YT():e.getStatus()===402?r=GT(n.bucket):e.getStatus()===403?r=QT(n.path):r=s,r.status=e.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Sy(n){const t=Lo(n);function e(s,r){let i=t(s,r);return s.getStatus()===404&&(i=WT(n.path)),i.serverResponse=r.serverResponse,i}return e}function MI(n,t,e){const s=t.fullServerUrl(),r=No(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new ri(r,i,Uu(n,e),o);return a.errorHandler=Sy(t),a}function OI(n,t,e){const s=t.fullServerUrl(),r=No(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new ri(r,i,DI(n,e),o);return a.errorHandler=Sy(t),a}function NI(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function Cy(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=NI(null,t)),s}function LI(n,t,e,s,r){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let P=0;P<2;P++)A=A+Math.random().toString().slice(2);return A}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Cy(t,s,r),u=ky(l,e),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=ss.getBlob(h,s,f);if(m===null)throw gy();const g={name:l.fullPath},v=No(i,n.host,n._protocol),y="POST",k=n.maxUploadRetryTime,T=new ri(v,y,Uu(n,e),k);return T.urlParams=g,T.headers=o,T.body=m.uploadData(),T.errorHandler=Lo(t),T}class cc{constructor(t,e,s,r){this.current=t,this.total=e,this.finalized=!!s,this.metadata=r||null}}function ju(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{Hn(!1)}return Hn(!!e&&(t||["active"]).indexOf(e)!==-1),e}function VI(n,t,e,s,r){const i=t.bucketOnlyServerUrl(),o=Cy(t,s,r),a={name:o.fullPath},c=No(i,n.host,n._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ky(o,e),f=n.maxUploadRetryTime;function m(v){ju(v);let y;try{y=v.getResponseHeader("X-Goog-Upload-URL")}catch{Hn(!1)}return Hn(Qc(y)),y}const g=new ri(c,l,m,f);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=Lo(t),g}function FI(n,t,e,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const u=ju(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Hn(!1)}h||Hn(!1);const f=Number(h);return Hn(!isNaN(f)),new cc(f,s.size(),u==="final")}const o="POST",a=n.maxUploadRetryTime,c=new ri(e,o,i,a);return c.headers=r,c.errorHandler=Lo(t),c}const _p=256*1024;function $I(n,t,e,s,r,i,o,a){const c=new cc(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw tI();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,f=h+u;let m="";u===0?m="finalize":l===u?m="upload, finalize":m="upload";const g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,f);if(v===null)throw gy();function y(P,R){const M=ju(P,["active","final"]),w=c.current+u,b=s.size();let x;return M==="final"?x=Uu(t,i)(P,R):x=null,new cc(w,b,M==="final",x)}const k="POST",T=t.maxUploadRetryTime,A=new ri(e,k,y,T);return A.headers=g,A.body=v.uploadData(),A.progressCallback=a||null,A.errorHandler=Lo(n),A}const Be={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function $l(n){switch(n){case"running":case"pausing":case"canceling":return Be.RUNNING;case"paused":return Be.PAUSED;case"success":return Be.SUCCESS;case"canceled":return Be.CANCELED;case"error":return Be.ERROR;default:return Be.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(t,e,s){if(cI(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class UI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gs.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gs.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gs.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,r){if(this.sent_)throw bi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class jI extends UI{initXhr(){this.xhr_.responseType="text"}}function Rr(){return new jI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=Iy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals($t.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(vy(r.status,[]))if(i)r=py();else{this.sleepTime=Math.max(this.sleepTime*2,qT),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals($t.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=VI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Rr,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const r=FI(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,Rr,e,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=_p*this._chunkMultiplier,e=new cc(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=$I(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Rr,r,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){_p*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=MI(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,Rr,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=LI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Rr,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=my(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=$l(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,r){const i=new BI(e||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch($l(this._state)){case Be.SUCCESS:wr(this._resolve.bind(null,this.snapshot))();break;case Be.CANCELED:case Be.ERROR:const e=this._reject;wr(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch($l(this._state)){case Be.RUNNING:case Be.PAUSED:t.next&&wr(t.next.bind(t,this.snapshot))();break;case Be.SUCCESS:t.complete&&wr(t.complete.bind(t))();break;case Be.CANCELED:case Be.ERROR:t.error&&wr(t.error.bind(t,this._error))();break;default:t.error&&wr(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class or{constructor(t,e){this._service=t,e instanceof Ke?this._location=e:this._location=Ke.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new or(t,e)}get root(){const t=new Ke(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ty(this._location.path)}get storage(){return this._service}get parent(){const t=II(this._location.path);if(t===null)return null;const e=new Ke(this._location.bucket,t);return new or(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw sI(t)}}function HI(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new zI(n,new ss(t),e)}function qI(n){n._throwIfRoot("getDownloadURL");const t=OI(n.storage,n._location,Iy());return n.storage.makeRequestWithTokens(t,Rr).then(e=>{if(e===null)throw eI();return e})}function WI(n,t){const e=AI(n._location.path,t),s=new Ke(n._location.bucket,e);return new or(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n){return/^[A-Za-z]+:\/\//.test(n)}function YI(n,t){return new or(n,t)}function Py(n,t){if(n instanceof zu){const e=n;if(e._bucket==null)throw ZT();const s=new or(e,e._bucket);return t!=null?Py(s,t):s}else return t!==void 0?WI(n,t):n}function KI(n,t){if(t&&GI(t)){if(n instanceof zu)return YI(n,t);throw Cd("To use ref(service, url), the first argument must be a Storage instance.")}else return Py(n,t)}function yp(n,t){const e=t==null?void 0:t[fy];return e==null?null:Ke.makeFromBucketSpec(e,n)}function QI(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:Dg(r,n.app.options.projectId))}class zu{constructor(t,e,s,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=hy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zT,this._maxUploadRetryTime=HT,this._requests=new Set,r!=null?this._bucket=Ke.makeFromBucketSpec(r,this._host):this._bucket=yp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ke.makeFromBucketSpec(this._url,t):this._bucket=yp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){gp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){gp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new or(this,t)}_makeRequest(t,e,s,r,i=!0){if(this._deleted)return new rI(_y());{const o=mI(t,this._appId,s,r,e,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,r).getPromise()}}const vp="@firebase/storage",bp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="storage";function XI(n,t,e){return n=Jt(n),HI(n,t,e)}function JI(n){return n=Jt(n),qI(n)}function ZI(n,t){return n=Jt(n),KI(n,t)}function tA(n=ou(),t){n=Jt(n);const s=kc(n,Ry).getImmediate({identifier:t}),r=Cg("storage");return r&&eA(s,...r),s}function eA(n,t,e,s={}){QI(n,t,e,s)}function nA(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new zu(e,s,r,t,dr)}function sA(){tr(new ys(Ry,nA,"PUBLIC").setMultipleInstances(!0)),yn(vp,bp,""),yn(vp,bp,"esm2017")}sA();function Hu(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e}function Dy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rA=Dy,My=new Eo("auth","Firebase",Dy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new ru("@firebase/auth");function iA(n,...t){lc.logLevel<=ht.WARN&&lc.warn(`Auth (${dr}): ${n}`,...t)}function La(n,...t){lc.logLevel<=ht.ERROR&&lc.error(`Auth (${dr}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(n,...t){throw qu(n,...t)}function xn(n,...t){return qu(n,...t)}function Oy(n,t,e){const s=Object.assign(Object.assign({},rA()),{[t]:e});return new Eo("auth","Firebase",s).create(t,{appName:n.name})}function gs(n){return Oy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qu(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return My.create(n,...t)}function tt(n,t,...e){if(!n)throw qu(t,...e)}function Ln(n){const t="INTERNAL ASSERTION FAILED: "+n;throw La(t),new Error(t)}function Yn(n,t){n||Ln(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function oA(){return xp()==="http:"||xp()==="https:"}function xp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oA()||Ax()||"connection"in navigator)?navigator.onLine:!0}function cA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e){this.shortDelay=t,this.longDelay=e,Yn(e>t,"Short delay should be less than long delay!"),this.isMobile=Ex()||kx()}get(){return aA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(n,t){Yn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=new Vo(3e4,6e4);function As(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Qn(n,t,e,s,r={}){return Ly(n,r,async()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const a=To(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},i);return Ix()||(l.referrerPolicy="no-referrer"),Ny.fetch()(Vy(n,n.config.apiHost,e,a),l)})}async function Ly(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},lA),t);try{const r=new hA(n),i=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pa(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw pa(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Oy(n,u,l);ln(n,u)}}catch(r){if(r instanceof An)throw r;ln(n,"network-request-failed",{message:String(r)})}}async function Xc(n,t,e,s,r={}){const i=await Qn(n,t,e,s,r);return"mfaPendingCredential"in i&&ln(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Vy(n,t,e,s){const r=`${t}${e}?${s}`;return n.config.emulator?Wu(n.config,r):`${n.config.apiScheme}://${r}`}function uA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hA{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(xn(this.auth,"network-request-failed")),dA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const r=xn(n,t,s);return r.customData._tokenResponse=e,r}function wp(n){return n!==void 0&&n.enterprise!==void 0}class fA{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return uA(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function pA(n,t){return Qn(n,"GET","/v2/recaptchaConfig",As(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(n,t){return Qn(n,"POST","/v1/accounts:delete",t)}async function Fy(n,t){return Qn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gA(n,t=!1){const e=Jt(n),s=await e.getIdToken(t),r=Gu(s);tt(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ki(Bl(r.auth_time)),issuedAtTime:Ki(Bl(r.iat)),expirationTime:Ki(Bl(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bl(n){return Number(n)*1e3}function Gu(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return La("JWT malformed, contained fewer than 3 sections"),null;try{const r=kg(e);return r?JSON.parse(r):(La("Failed to decode base64 JWT payload"),null)}catch(r){return La("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ep(n){const t=Gu(n);return tt(t,"internal-error"),tt(typeof t.exp<"u","internal-error"),tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof An&&_A(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function _A({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dc(n){var t;const e=n.auth,s=await n.getIdToken(),r=await uo(n,Fy(e,{idToken:s}));tt(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?$y(i.providerUserInfo):[],a=bA(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Rd(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function vA(n){const t=Jt(n);await dc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function bA(n,t){return[...n.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function $y(n){return n.map(t=>{var{providerId:e}=t,s=Hu(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(n,t){const e=await Ly(n,{},async()=>{const s=To({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=Vy(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ny.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function wA(n,t){return Qn(n,"POST","/v2/accounts:revokeToken",As(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){tt(t.idToken,"internal-error"),tt(typeof t.idToken<"u","internal-error"),tt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ep(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){tt(t.length!==0,"internal-error");const e=Ep(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:r,expiresIn:i}=await xA(t,e);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:r,expirationTime:i}=e,o=new $r;return s&&(tt(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),r&&(tt(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),i&&(tt(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n,t){tt(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Vn{constructor(t){var{uid:e,auth:s,stsTokenManager:r}=t,i=Hu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await uo(this,this.stsTokenManager.getToken(this.auth,t));return tt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return gA(this,t)}reload(){return vA(this)}_assign(t){this!==t&&(tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Vn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await dc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(gs(this.auth));const t=await this.getIdToken();return await uo(this,mA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,r,i,o,a,c,l,u;const h=(s=e.displayName)!==null&&s!==void 0?s:void 0,f=(r=e.email)!==null&&r!==void 0?r:void 0,m=(i=e.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=e.photoURL)!==null&&o!==void 0?o:void 0,v=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=e.createdAt)!==null&&l!==void 0?l:void 0,T=(u=e.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:P,isAnonymous:R,providerData:M,stsTokenManager:w}=e;tt(A&&w,t,"internal-error");const b=$r.fromJSON(this.name,w);tt(typeof A=="string",t,"internal-error"),es(h,t.name),es(f,t.name),tt(typeof P=="boolean",t,"internal-error"),tt(typeof R=="boolean",t,"internal-error"),es(m,t.name),es(g,t.name),es(v,t.name),es(y,t.name),es(k,t.name),es(T,t.name);const x=new Vn({uid:A,auth:t,email:f,emailVerified:P,displayName:h,isAnonymous:R,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:b,createdAt:k,lastLoginAt:T});return M&&Array.isArray(M)&&(x.providerData=M.map(S=>Object.assign({},S))),y&&(x._redirectEventId=y),x}static async _fromIdTokenResponse(t,e,s=!1){const r=new $r;r.updateFromServerResponse(e);const i=new Vn({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await dc(i),i}static async _fromGetAccountInfoResponse(t,e,s){const r=e.users[0];tt(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?$y(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new $r;a.updateFromIdToken(s);const c=new Vn({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Rd(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new Map;function Fn(n){Yn(n instanceof Function,"Expected a class definition");let t=Tp.get(n);return t?(Yn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Tp.set(n,t),t)}/**
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
 */class By{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}By.type="NONE";const Ip=By;/**
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
 */function Va(n,t,e){return`firebase:${n}:${t}:${e}`}class Br{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Va(this.userKey,r.apiKey,i),this.fullPersistenceKey=Va("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Vn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new Br(Fn(Ip),t,s);const r=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Fn(Ip);const o=Va(s,t.config.apiKey,t.name);let a=null;for(const l of e)try{const u=await l._get(o);if(u){const h=Vn._fromJSON(t,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Br(i,t,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Br(i,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Hy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wy(t))return"Blackberry";if(Gy(t))return"Webos";if(jy(t))return"Safari";if((t.includes("chrome/")||zy(t))&&!t.includes("edge/"))return"Chrome";if(qy(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Uy(n=De()){return/firefox\//i.test(n)}function jy(n=De()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zy(n=De()){return/crios\//i.test(n)}function Hy(n=De()){return/iemobile/i.test(n)}function qy(n=De()){return/android/i.test(n)}function Wy(n=De()){return/blackberry/i.test(n)}function Gy(n=De()){return/webos/i.test(n)}function Yu(n=De()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function EA(n=De()){var t;return Yu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function TA(){return Sx()&&document.documentMode===10}function Yy(n=De()){return Yu(n)||qy(n)||Gy(n)||Wy(n)||/windows phone/i.test(n)||Hy(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n,t=[]){let e;switch(n){case"Browser":e=Ap(De());break;case"Worker":e=`${Ap(De())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${dr}/${s}`}/**
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
 */class IA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});s.onAbort=e,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function AA(n,t={}){return Qn(n,"GET","/v2/passwordPolicy",As(n,t))}/**
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
 */const kA=6;class SA{constructor(t){var e,s,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:kA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let r=0;r<t.length;r++)s=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(t,e,s,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kp(this),this.idTokenSubscription=new kp(this),this.beforeStateQueue=new IA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=My,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Fn(e)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Br.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Fy(this,{idToken:t}),s=await Vn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await dc(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=cA()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(gs(this));const e=t?Jt(t):null;return e&&tt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(gs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(gs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await AA(this),e=new SA(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Eo("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await wA(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Fn(t)||this._popupRedirectResolver;tt(e,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[Fn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,r){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(tt(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,r);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&iA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function pr(n){return Jt(n)}class kp{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lx(e=>this.observer=e)}get next(){return tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PA(n){Jc=n}function Qy(n){return Jc.loadJS(n)}function RA(){return Jc.recaptchaEnterpriseScript}function DA(){return Jc.gapiScript}function MA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const OA="recaptcha-enterprise",NA="NO_RECAPTCHA";class LA{constructor(t){this.type=OA,this.auth=pr(t)}async verify(t="verify",e=!1){async function s(i){if(!e){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{pA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new fA(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;wp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(NA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!e&&wp(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=RA();c.length!==0&&(c+=a),Qy(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Sp(n,t,e,s=!1){const r=new LA(n);let i;try{i=await r.verify(e)}catch{i=await r.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Dd(n,t,e,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sp(n,t,e,e==="getOobCode");return s(n,i)}else return s(n,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sp(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n,t){const e=kc(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),i=e.getOptions();if(Qa(i,t??{}))return r;ln(r,"already-initialized")}return e.initialize({options:t})}function FA(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(Fn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function $A(n,t,e){const s=pr(n);tt(s._canInitEmulator,s,"emulator-config-failed"),tt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!1,i=Xy(t),{host:o,port:a}=BA(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),UA()}function Xy(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function BA(n){const t=Xy(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Cp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Cp(o)}}}function Cp(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function UA(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ln("not implemented")}_getIdTokenResponse(t){return Ln("not implemented")}_linkToIdToken(t,e){return Ln("not implemented")}_getReauthenticationResolver(t){return Ln("not implemented")}}async function jA(n,t){return Qn(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(n,t){return Xc(n,"POST","/v1/accounts:signInWithPassword",As(n,t))}async function HA(n,t){return Qn(n,"POST","/v1/accounts:sendOobCode",As(n,t))}async function qA(n,t){return HA(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,t){return Xc(n,"POST","/v1/accounts:signInWithEmailLink",As(n,t))}async function GA(n,t){return Xc(n,"POST","/v1/accounts:signInWithEmailLink",As(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends Ku{constructor(t,e,s,r=null){super("password",s),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ho(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new ho(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(t,e,"signInWithPassword",zA);case"emailLink":return WA(t,{email:this._email,oobCode:this._password});default:ln(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(t,s,"signUpPassword",jA);case"emailLink":return GA(t,{idToken:e,email:this._email,oobCode:this._password});default:ln(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(n,t){return Xc(n,"POST","/v1/accounts:signInWithIdp",As(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="http://localhost";class ar extends Ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ar(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ln("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r}=e,i=Hu(e,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ar(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Ur(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,Ur(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ur(t,e)}buildRequest(){const t={requestUri:YA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=To(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QA(n){const t=Di(Mi(n)).link,e=t?Di(Mi(t)).deep_link_id:null,s=Di(Mi(n)).deep_link_id;return(s?Di(Mi(s)).link:null)||s||e||t||n}class Qu{constructor(t){var e,s,r,i,o,a;const c=Di(Mi(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=KA((r=c.mode)!==null&&r!==void 0?r:null);tt(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=QA(t);try{return new Qu(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(t,e){return ho._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Qu.parseLink(e);return tt(s,"argument-error"),ho._fromEmailAndCode(t,s.code,s.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fo extends Jy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Fo{constructor(){super("facebook.com")}static credential(t){return ar._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rs.credentialFromTaggedObject(t)}static credentialFromError(t){return rs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rs.credential(t.oauthAccessToken)}catch{return null}}}rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";rs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ar._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return is.credentialFromTaggedObject(t)}static credentialFromError(t){return is.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return is.credential(e,s)}catch{return null}}}is.GOOGLE_SIGN_IN_METHOD="google.com";is.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Fo{constructor(){super("github.com")}static credential(t){return ar._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return os.credentialFromTaggedObject(t)}static credentialFromError(t){return os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return os.credential(t.oauthAccessToken)}catch{return null}}}os.GITHUB_SIGN_IN_METHOD="github.com";os.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Fo{constructor(){super("twitter.com")}static credential(t,e){return ar._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return as.credentialFromTaggedObject(t)}static credentialFromError(t){return as.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return as.credential(e,s)}catch{return null}}}as.TWITTER_SIGN_IN_METHOD="twitter.com";as.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,r=!1){const i=await Vn._fromIdTokenResponse(t,s,r),o=Pp(s);return new Kr({user:i,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const r=Pp(s);return new Kr({user:t,providerId:r,_tokenResponse:s,operationType:e})}}function Pp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends An{constructor(t,e,s,r){var i;super(e.code,e.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,r){return new uc(t,e,s,r)}}function Zy(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(n,i,t,s):i})}async function XA(n,t,e=!1){const s=await uo(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Kr._forOperation(n,"link",s)}/**
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
 */async function JA(n,t,e=!1){const{auth:s}=n;if(Nn(s.app))return Promise.reject(gs(s));const r="reauthenticate";try{const i=await uo(n,Zy(s,r,t,n),e);tt(i.idToken,s,"internal-error");const o=Gu(i.idToken);tt(o,s,"internal-error");const{sub:a}=o;return tt(n.uid===a,s,"user-mismatch"),Kr._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ln(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(n,t,e=!1){if(Nn(n.app))return Promise.reject(gs(n));const s="signIn",r=await Zy(n,s,t),i=await Kr._fromIdTokenResponse(n,s,r);return e||await n._updateCurrentUser(i.user),i}async function ZA(n,t){return tv(pr(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(n){const t=pr(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ek(n,t,e){const s=pr(n);await Dd(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",qA)}function nk(n,t,e){return Nn(n.app)?Promise.reject(gs(n)):ZA(Jt(n),ii.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&tk(n),s})}function sk(n,t,e,s){return Jt(n).onIdTokenChanged(t,e,s)}function rk(n,t,e){return Jt(n).beforeAuthStateChanged(t,e)}function ik(n,t,e,s){return Jt(n).onAuthStateChanged(t,e,s)}function ok(n){return Jt(n).signOut()}const hc="__sak";/**
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
 */class ev{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=1e3,ck=10;class nv extends ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),r=this.localCache[e];s!==r&&t(e,r,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);TA()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ck):r()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}nv.type="LOCAL";const lk=nv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}sv.type="SESSION";const rv=sv;/**
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
 */function dk(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Zc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(r=>r.isListeningto(t));if(e)return e;const s=new Zc(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(e.origin,i)),c=await dk(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class uk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Xu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function hk(n){wn().location.href=n}/**
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
 */function iv(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function fk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function mk(){return iv()?self:null}/**
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
 */const ov="firebaseLocalStorageDb",gk=1,fc="firebaseLocalStorage",av="fbase_key";class $o{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function tl(n,t){return n.transaction([fc],t?"readwrite":"readonly").objectStore(fc)}function _k(){const n=indexedDB.deleteDatabase(ov);return new $o(n).toPromise()}function Md(){const n=indexedDB.open(ov,gk);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(fc,{keyPath:av})}catch(r){e(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(fc)?t(s):(s.close(),await _k(),t(await Md()))})})}async function Rp(n,t,e){const s=tl(n,!0).put({[av]:t,value:e});return new $o(s).toPromise()}async function yk(n,t){const e=tl(n,!1).get(t),s=await new $o(e).toPromise();return s===void 0?null:s.value}function Dp(n,t){const e=tl(n,!0).delete(t);return new $o(e).toPromise()}const vk=800,bk=3;class cv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Md(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>bk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zc._getInstance(mk()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await fk(),!this.activeServiceWorker)return;this.sender=new uk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||pk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Md();return await Rp(t,hc,"1"),await Dp(t,hc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rp(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>yk(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Dp(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const i=tl(r,!1).getAll();return new $o(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:r,value:i}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cv.type="LOCAL";const xk=cv;new Vo(3e4,6e4);/**
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
 */function wk(n,t){return t?Fn(t):(tt(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ju extends Ku{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ur(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ur(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ur(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ek(n){return tv(n.auth,new Ju(n),n.bypassAuthState)}function Tk(n){const{auth:t,user:e}=n;return tt(e,t,"internal-error"),JA(e,new Ju(n),n.bypassAuthState)}async function Ik(n){const{auth:t,user:e}=n;return tt(e,t,"internal-error"),XA(e,new Ju(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(t,e,s,r,i=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ek;case"linkViaPopup":case"linkViaRedirect":return Ik;case"reauthViaPopup":case"reauthViaRedirect":return Tk;default:ln(this.auth,"internal-error")}}resolve(t){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=new Vo(2e3,1e4);class Nr extends lv{constructor(t,e,s,r,i){super(t,e,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return tt(t,this.auth,"internal-error"),t}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const t=Xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ak.get())};t()}}Nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="pendingRedirect",Fa=new Map;class Sk extends lv{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Fa.get(this.auth._key());if(!t){try{const s=await Ck(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Fa.set(this.auth._key(),t)}return this.bypassAuthState||Fa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ck(n,t){const e=Dk(t),s=Rk(n);if(!await s._isAvailable())return!1;const r=await s._get(e)==="true";return await s._remove(e),r}function Pk(n,t){Fa.set(n._key(),t)}function Rk(n){return Fn(n._redirectPersistence)}function Dk(n){return Va(kk,n.config.apiKey,n.name)}async function Mk(n,t,e=!1){if(Nn(n.app))return Promise.reject(gs(n));const s=pr(n),r=wk(s,t),o=await new Sk(s,r,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=10*60*1e3;class Nk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Lk(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!dv(t)){const r=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(xn(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Ok&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mp(t))}saveEventToCache(t){this.cachedEventUids.add(Mp(t)),this.lastProcessedEventTime=Date.now()}}function Mp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function dv({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Lk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(n,t={}){return Qn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$k=/^https?/;async function Bk(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Vk(n);for(const e of t)try{if(Uk(e))return}catch{}ln(n,"unauthorized-domain")}function Uk(n){const t=Pd(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!$k.test(e))return!1;if(Fk.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const jk=new Vo(3e4,6e4);function Op(){const n=wn().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function zk(n){return new Promise((t,e)=>{var s,r,i;function o(){Op(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Op(),e(xn(n,"network-request-failed"))},timeout:jk.get()})}if(!((r=(s=wn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((i=wn().gapi)===null||i===void 0)&&i.load)o();else{const a=MA("iframefcb");return wn()[a]=()=>{gapi.load?o():e(xn(n,"network-request-failed"))},Qy(`${DA()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw $a=null,t})}let $a=null;function Hk(n){return $a=$a||zk(n),$a}/**
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
 */const qk=new Vo(5e3,15e3),Wk="__/auth/iframe",Gk="emulator/auth/iframe",Yk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qk(n){const t=n.config;tt(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Wu(t,Gk):`https://${n.config.authDomain}/${Wk}`,s={apiKey:t.apiKey,appName:n.name,v:dr},r=Kk.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${e}?${To(s).slice(1)}`}async function Xk(n){const t=await Hk(n),e=wn().gapi;return tt(e,n,"internal-error"),t.open({where:document.body,url:Qk(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=xn(n,"network-request-failed"),a=wn().setTimeout(()=>{i(o)},qk.get());function c(){wn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Jk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zk=500,tS=600,eS="_blank",nS="http://localhost";class Np{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sS(n,t,e,s=Zk,r=tS){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jk),{width:s.toString(),height:r.toString(),top:i,left:o}),l=De().toLowerCase();e&&(a=zy(l)?eS:e),Uy(l)&&(t=t||nS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(EA(l)&&a!=="_self")return rS(t||"",a),new Np(null);const h=window.open(t||"",a,u);tt(h,n,"popup-blocked");try{h.focus()}catch{}return new Np(h)}function rS(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const iS="__/auth/handler",oS="emulator/auth/handler",aS=encodeURIComponent("fac");async function Lp(n,t,e,s,r,i){tt(n.config.authDomain,n,"auth-domain-config-required"),tt(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:dr,eventId:r};if(t instanceof Jy){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Nx(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(t instanceof Fo){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${aS}=${encodeURIComponent(c)}`:"";return`${cS(n)}?${To(a).slice(1)}${l}`}function cS({config:n}){return n.emulator?Wu(n,oS):`https://${n.authDomain}/${iS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="webStorageSupport";class lS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rv,this._completeRedirectFn=Mk,this._overrideRedirectResult=Pk}async _openPopup(t,e,s,r){var i;Yn((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lp(t,e,s,Pd(),r);return sS(t,o,Xu())}async _openRedirect(t,e,s,r){await this._originValidation(t);const i=await Lp(t,e,s,Pd(),r);return hk(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:r,promise:i}=this.eventManagers[e];return r?Promise.resolve(r):(Yn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await Xk(t),s=new Nk(t);return e.register("authEvent",r=>(tt(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ul,{type:Ul},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ul];o!==void 0&&e(!!o),ln(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Bk(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Yy()||jy()||Yu()}}const dS=lS;var Vp="@firebase/auth",Fp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fS(n){tr(new ys("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;tt(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ky(n)},l=new CA(s,r,i,c);return FA(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),tr(new ys("auth-internal",t=>{const e=pr(t.getProvider("auth").getImmediate());return(s=>new uS(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Vp,Fp,hS(n)),yn(Vp,Fp,"esm2017")}/**
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
 */const pS=5*60,mS=Rg("authIdTokenMaxAge")||pS;let $p=null;const gS=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>mS)return;const r=e==null?void 0:e.token;$p!==r&&($p=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _S(n=ou()){const t=kc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=VA(n,{popupRedirectResolver:dS,persistence:[xk,lk,rv]}),s=Rg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=gS(i.toString());rk(e,o,()=>o(e.currentUser)),sk(e,a=>o(a))}}const r=Sg("auth");return r&&$A(e,`http://${r}`),e}function yS(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}PA({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=r=>{const i=xn("internal-error");i.customData=r,e(i)},s.type="text/javascript",s.charset="UTF-8",yS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fS("Browser");const uv={VITE_FIREBASE_API_KEY:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",VITE_FIREBASE_APP_ID:"1:438724917414:web:cb9674cdc557bdf2a7dc67",VITE_FIREBASE_AUTH_DOMAIN:"controle-de-obras-axel.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"438724917414",VITE_FIREBASE_PROJECT_ID:"controle-de-obras-axel",VITE_FIREBASE_STORAGE_BUCKET:"controle-de-obras-axel.firebasestorage.app",VITE_RDO_API_TOKEN:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NjMzOTkzMDAsImp0aSI6IjJjZjAxOTY3ZDU4NGMxNTBiNTgzN2I2NzRiMTg0YzYzM2Y5ZjM3NWYzM2Y3YzlkMGZmODc0ZWQ3NjNjODcxYzM2YjMwNGJjOCIsImNvZCI6IjdiMGM5YjJlYzBhN2JmMmYyZjJlMWI1ZjVmYmFiMmViYzY2OTA1NjAiLCJlbXByZXNhSWQiOiI2NGQyNTE2OWQ4YzljMDIyNmYwOWNmNzIiLCJpc3MiOiJhcHAtYXBpIn0.hhw14MZeQ7M13IbOsRG04w_4ZvmHt2JPYctbY3W2OAI",VITE_RDO_HOLIDAYS:"2025-01-01,2025-03-27,2025-04-18,2025-04-21,2025-05-01,2025-06-19,2025-09-07,2025-10-12,2025-11-02,2025-11-15,2025-12-19,2025-12-25"},hv=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,vS={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"},bS=()=>{const n=hv("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&uv||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};return Object.values(e).every(Boolean)?e:(console.warn("[Config] Firebase config nÃ£o encontrada em globals/ENV; usando fallback padrÃ£o legado."),vS)},xS=()=>{const n=hv("__RDO_API_CONFIG");if(n)return{TOKEN:n.TOKEN,BASE_URL:n.BASE_URL,HOLIDAYS:Array.isArray(n.HOLIDAYS)?n.HOLIDAYS:[]};const t=import.meta&&uv||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN,s=t.VITE_RDO_API_BASE||"https://rdo.axelindustrial.com.br/api",r=(t.VITE_RDO_HOLIDAYS||"").split(",").map(i=>i.trim()).filter(Boolean);return e?{TOKEN:e,BASE_URL:s,HOLIDAYS:r}:{TOKEN:"",BASE_URL:s,HOLIDAYS:r}},wS=bS(),el=Ng(wS),X=J_(el),ES=tA(el),ma=_S(el),TS=async()=>(console.log("[Firebase] ConfiguraÃ§Ã£o carregada com sucesso"),el),Et={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},pc={init:()=>new Promise(n=>{ik(ma,async t=>{if(t)try{const e=await lo(ae(X,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};Et.setUser(s)}else Et.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),Et.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else Et.setUser(null);n(Et.state.currentUser)})}),login:async(n,t)=>{try{const s=(await nk(ma,n,t)).user,r=await lo(ae(X,"usuarios",s.uid));if(r.exists()){const i={uid:s.uid,email:s.email,...r.data()};return Et.setUser(i),i}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await ok(ma),Et.setUser(null)},recoverPassword:async n=>{await ek(ma,n)}},At={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const r=e.split("/").filter(Boolean);if(r.length!==t.length)continue;const i={};let o=!0;for(let a=0;a<r.length;a++){const c=r[a],l=t[a];if(c.startsWith(":"))i[c.slice(1)]=decodeURIComponent(l);else if(c!==l){o=!1;break}}if(o)return{handler:s,params:i}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!Et.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(Et.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},F={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:r="",required:i=!1,className:o=""})=>`
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
        `},Up={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Bp.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,r=document.getElementById("password").value,i=document.getElementById("btn-login");try{i.disabled=!0,i.innerHTML=F.createLoader(),await pc.login(s,r),F.createToast("Login realizado com sucesso!"),At.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),F.createToast(a,"error"),i.disabled=!1,i.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Bp.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,r=document.getElementById("btn-recover");try{r.disabled=!0,r.innerHTML=F.createLoader(),await pc.recoverPassword(s),F.createToast("Email de recuperação enviado!"),setTimeout(()=>At.navigate("/login"),2e3)}catch(i){F.createToast("Erro ao enviar email: "+i.message,"error"),r.disabled=!1,r.innerHTML="<span>Enviar</span>"}})}},IS="modulepreload",AS=function(n){return"/"+n},jp={},fo=function(t,e,s){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(e.map(c=>{if(c=AS(c),c in jp)return;jp[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":IS,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},kS=async n=>{if(!n)return null;const t=await yt(Qt(mt(X,"obras"),Pt("__name__","==",n)));if(t.empty)return null;const e=t.docs[0].data(),s=Number(e.orcamento||e.valor_orcado||0),r=Number(e.tolerancia_percentual||0),i=s+s*r,a=(await yt(Qt(mt(X,"compras"),Pt("obraId","==",n)))).docs.map(l=>l.data());let c=0;return a.forEach(l=>{const u=(l.status_compra||"").toLowerCase(),h=!l.estouro_orcamento||l.status_aprovacao==="Aprovado";(u==="comprado"||u==="recebido"||u==="entregue")&&h&&(c+=Number(l.valor_total||l.valor_estimado||0))}),{limite_real:i,comprometido:c,orcado:s}},SS=async n=>{var t,e,s;try{const{ObrasService:r}=await fo(async()=>{const{ObrasService:l}=await Promise.resolve().then(()=>UD);return{ObrasService:l}},void 0),i=await((t=r.getObraById)==null?void 0:t.call(r,n)),o=(i==null?void 0:i.numero_os)||(i==null?void 0:i.numeroOS)||n;if(!o)return null;const{RDOService:a}=await fo(async()=>{const{RDOService:l}=await Promise.resolve().then(()=>Bb);return{RDOService:l}},void 0),c=await a.getIntegratedDataForObra(o);if((e=c==null?void 0:c.reports)!=null&&e.length){const l=a.processRDOData(c.reports);return{...l,quantidadeRelatorios:c.quantidadeRelatorios||((s=l.reports)==null?void 0:s.length)||0}}return c?{quantidadeRelatorios:c.quantidadeRelatorios||0,totalHoras:Number(c.totalHoras||0)}:null}catch(r){return console.warn("[Dashboard] RDO fetch fail",(r==null?void 0:r.message)||r),null}},CS=n=>{const t=new Date,e=new Date(t.getTime()-7*24*60*60*1e3),s=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getTime()-14*24*60*60*1e3),i=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=e&&g<=t}),o=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=s&&g<=t}),a=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=r&&g<e}),c=i.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),l=o.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),u=a.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),h=u>0?(c-u)/u*100:0,f=o.length>0?l/o.length:0;return{semana:{quantidade:i.length,valor:c},mes:{quantidade:o.length,valor:l},variacaoSemanal:h,ticketMedio:f}},PS=n=>{const t=new Date,e=n.previsao_entrega?new Date(n.previsao_entrega):null,s=n.ultima_atualizacao?new Date(n.ultima_atualizacao):n.data_emissao?new Date(n.data_emissao):null;let r=0,i="baixa",o="";const a=(n.status_compra||"").toLowerCase();if(["entregue","recebido","cancelado"].includes(a))return{score:0,criticidade:"baixa",motivo:""};if(e&&e<t){const c=Math.floor((t-e)/864e5);r=100+c,i="alta",o=`Atrasado há ${c} dias`}else if(e){const c=Math.floor((e-t)/864e5);c<=3&&c>=0&&(r=80+(3-c)*5,i="media",o=`Vence em ${c} dias`)}else if(s&&a==="comprado"){const c=Math.floor((t-s)/864e5);c>=5&&(r=60+c,i="media",o=`Sem atualização há ${c} dias`)}else if(a==="pendente"&&n.data_solicitacao){const c=Math.floor((t-new Date(n.data_solicitacao))/864e5);c>=7&&(r=50+c,i="media",o=`Pendente há ${c} dias`)}else!e&&a==="comprado"&&(r=40,i="baixa",o="Sem previsão de entrega");return{score:r,criticidade:i,motivo:o}},Qe={getCompradorStats:async(n={})=>{const t=mt(X,"compras");let e=Qt(t);n.obraId&&(e=Qt(t,Pt("obraId","==",n.obraId)));let r=(await yt(e)).docs.map(N=>({id:N.id,...N.data()}));if(n.periodo){const{start:N,end:U}=n.periodo,q=N?new Date(N):null,nt=U?new Date(U):null;(q||nt)&&(r=r.filter(lt=>{const at=lt.data_emissao||lt.data_solicitacao;if(!at)return!1;const Z=new Date(at);return!(q&&Z<q||nt&&Z>nt)}))}const i=r.filter(N=>N.status_compra==="Pendente"),o=r.filter(N=>N.status_compra==="Em Cotação"),a=r.sort((N,U)=>new Date(U.data_solicitacao||0)-new Date(N.data_solicitacao||0)).slice(0,5);let c=0,l=0,u=0,h=0,f=0,m=0;const g={},v={},y={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},k=await yt(mt(X,"centrosCusto")),T=new Map(k.docs.map(N=>[N.id,N.data().nome||N.data().codigo||N.id])),A=await yt(mt(X,"obras")),P=new Map(A.docs.map(N=>[N.id,N.data().nome_obra||N.data().apelido_obra||N.id])),M=r.map(N=>{const{score:U,criticidade:q,motivo:nt}=PS(N);return{...N,obraNome:P.get(N.obraId)||N.obra||N.obraId||"N/D",score:U,criticidade:q,motivo:nt}}).filter(N=>N.score>0).sort((N,U)=>U.score-N.score).slice(0,10);r.forEach(N=>{const U=Number(N.valor_estimado||N.valor_total||0);m+=U;const q=N.previsao_entrega?new Date(N.previsao_entrega):null,nt=N.data_recebimento?new Date(N.data_recebimento):null;if(q&&N.status_compra!=="Entregue"&&N.status_compra!=="Recebido"&&q<new Date&&c++,nt&&q&&(l++,nt<=q&&u++),N.data_emissao&&(nt||q)){const Ot=nt||q,ze=Math.max(0,(new Date(Ot)-new Date(N.data_emissao))/(1e3*60*60*24));h+=ze,f++}const lt=(N.status_compra||"").toLowerCase();lt.includes("cot")&&y.cotacao++,!q&&lt!=="recebido"&&lt!=="entregue"&&y.sem_previsao++,q&&q<new Date&&lt!=="recebido"&&lt!=="entregue"&&y.atrasados++;const Z=(N.status_aprovacao||"").toLowerCase();(N.estouro_orcamento||Z==="pendente")&&y.pendente_aprovacao++;const ft=(N.natureza_compra||"Outros").trim();g[ft]=(g[ft]||0)+U;const Tt=T.get(N.centroCustoId)||N.centroCustoNome||N.centro_custo||N.centroCustoId||"N/D";v[Tt]=(v[Tt]||0)+U});const w=l?u/l*100:0,b=f?h/f:0,x=CS(r),S=new Date,I=new Date(S.getTime()+3*24*60*60*1e3);let D=c;r.forEach(N=>{const U=N.previsao_entrega?new Date(N.previsao_entrega):null,q=(N.status_compra||"").toLowerCase();U&&U>=S&&U<=I&&q!=="recebido"&&q!=="entregue"&&D++});const C=i.length+o.length,J=3;let j=0;r.forEach(N=>{const U=(N.status_compra||"").toLowerCase();if(U==="comprado"||U==="aprovado"){const q=N.ultima_atualizacao||N.data_emissao||N.data_solicitacao;q&&Math.floor((S-new Date(q))/864e5)>=J&&j++}});const W=y.sem_previsao;return{pendentes:i.length,emCotacao:o.length,recentes:a,atrasos:c,sla:w,lead:b,totalValor:m,naturezaTotais:g,ccTotais:v,alerts:y,atividade:x,urgentes:D,aguardandoAcao:C,precisamAtualizacao:j,semPrevisao:W,comprasCriticas:M}},getTimelineData:async(n=null)=>{const t=mt(X,"compras");let e=Qt(t);n&&(e=Qt(t,Pt("obraId","==",n)));const s=await yt(e),r=new Date;r.setHours(0,0,0,0);const i=new Date(r);i.setDate(r.getDate()+7);const o=[];return s.docs.forEach(a=>{const c=a.data();if(!c.previsao_entrega)return;const l=new Date(c.previsao_entrega);l.setHours(0,0,0,0),l>=r&&l<=i&&o.push({id:a.id,...c,date:l})}),o.sort((a,c)=>a.date-c.date)},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=mt(X,"compras"),e=Qt(t,Pt("obraId","==",n),Pt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await yt(e),r=Qt(t,Pt("obraId","==",n),Pt("status_compra","==","Comprado")),i=await yt(r),o=Qt(t,Pt("obraId","==",n),Pt("status_compra","in",["Entregue","Recebido"])),a=await yt(o),c=Qt(t,Pt("obraId","==",n),Lu("data_solicitacao","desc"),ac(5)),l=await yt(c),u=await yt(Qt(t,Pt("obraId","==",n)));let h=0,f=0,m=0,g=0,v=0;const y=await kS(n),k=(y==null?void 0:y.comprometido)||0,T=(y==null?void 0:y.limite_real)||(y==null?void 0:y.orcado)||0,A=T>0?k/T*100:0,P=Math.max(0,T-k),R={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0};u.docs.forEach(w=>{const b=w.data(),x=b.previsao_entrega?new Date(b.previsao_entrega):null,S=b.data_recebimento?new Date(b.data_recebimento):null,I=(b.status_compra||"").toLowerCase();if(x&&I!=="entregue"&&I!=="recebido"&&x<new Date&&(h++,R.atrasados++),S&&x&&(f++,S<=x&&m++),b.data_emissao&&(S||x)){const C=S||x,J=Math.max(0,(new Date(C)-new Date(b.data_emissao))/(1e3*60*60*24));g+=J,v++}!x&&I!=="recebido"&&I!=="entregue"&&R.sem_previsao++;const D=(b.status_aprovacao||"").toLowerCase();(b.estouro_orcamento||D==="pendente")&&R.pendente_aprovacao++,I.includes("cot")&&R.cotacao++});const M=await SS(n);return{pendentes:s.size,transito:i.size,entregues:a.size,recentes:l.docs.map(w=>({id:w.id,...w.data()})),atrasos:h,sla:f?m/f*100:0,lead:v?g/v:0,economia:P,curvaPercent:A,comprometido:k,limiteReal:T,rdoData:M,alerts:R}},getObras:async()=>(await yt(mt(X,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=mt(X,"compras"),t=Qt(n,ac(500)),e=await yt(t);let s=0,r={},i={},o=0,a=0,c=0,l=0,u=0,h=0,f=0;const m={},g={},v={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},y=[];e.forEach(R=>{const M=R.data(),w=Number(M.valor_estimado||M.valor_total||0);y.push({id:R.id,...M}),s+=w,r[M.status_compra]=(r[M.status_compra]||0)+1,M.status_compra!=="Entregue"&&M.status_compra!=="Recebido"&&M.previsao_entrega&&new Date(M.previsao_entrega)<new Date&&(c++,v.atrasados++);const b=M.previsao_entrega?new Date(M.previsao_entrega):null,x=M.data_recebimento?new Date(M.data_recebimento):null;if(x&&b&&(l++,x<=b&&u++),M.data_emissao&&(x||b)){const J=x||b,j=Math.max(0,(new Date(J)-new Date(M.data_emissao))/(1e3*60*60*24));h+=j,f++}if(M.limite_real&&(o+=Number(M.limite_real)),M.comprometido&&(a+=Number(M.comprometido)),M.data_solicitacao){const J=new Date(M.data_solicitacao),j=`${J.getFullYear()}-${String(J.getMonth()+1).padStart(2,"0")}`;i[j]=(i[j]||0)+w}const S=(M.natureza_compra||"Outros").trim();m[S]=(m[S]||0)+w;const I=M.centroCustoNome||M.centro_custo||M.centroCustoId||"N/D";g[I]=(g[I]||0)+w,!M.previsao_entrega&&M.status_compra!=="Recebido"&&M.status_compra!=="Entregue"&&v.sem_previsao++,(M.status_aprovacao||"").toLowerCase()==="pendente"&&v.pendente_aprovacao++,(M.status_compra||"").toLowerCase().includes("cot")&&v.cotacao++});const k=o>0?a/o*100:0,T=l?u/l*100:0,A=f?h/f:0,P=Math.max(0,o-a);return{totalGasto:s,porStatus:r,totalPedidos:e.size,gastosPorMes:i,limiteReal:o,comprometido:a,curvaPercent:k,atrasos:c,sla:T,lead:A,economia:P,naturezaTotais:m,ccTotais:g,alerts:v,_allCompras:y}},markAsDelivered:async n=>{const{doc:t,updateDoc:e}=await fo(async()=>{const{doc:r,updateDoc:i}=await Promise.resolve().then(()=>jT);return{doc:r,updateDoc:i}},void 0),s=t(X,"compras",n);await e(s,{status_compra:"Entregue",data_recebimento:new Date().toISOString(),ultima_atualizacao:new Date().toISOString()})}},Q={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>{if(!n)return"-";const t=new Date(n);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("pt-BR")},formatCurrencyInput:(n,t=!1)=>{let s=(typeof n=="number"?n.toFixed(2):String(n??"")).replace(/\D/g,"");return s=(s/100).toFixed(2)+"",s=s.replace(".",","),s=s.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),t?`R$ ${s}`:s},parseCurrency:n=>{if(typeof n=="number")return n;if(!n)return 0;const t=String(n).replace("R$ ","").replace(/\./g,"").replace(",","."),e=parseFloat(t);return Number.isNaN(e)?0:e},formatCnpjInput:n=>{if(!n)return"";let t=n.replace(/\D/g,"");return t=t.substring(0,14),t=t.replace(/^(\d{2})(\d)/,"$1.$2"),t=t.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"),t=t.replace(/\.(\d{3})(\d)/,".$1/$2"),t=t.replace(/(\d{4})(\d)/,"$1-$2"),t},validateCNPJ:n=>{if(!n)return!0;const t=n.replace(/\D/g,"");if(t.length!==14||/^(\d)\1{13}$/.test(t))return!1;let e=0,s=5;for(let a=0;a<8;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;let r=e%11,i=r<2?0:11-r;if(parseInt(t[8],10)!==i)return!1;e=0,s=6;for(let a=0;a<9;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;r=e%11;let o=r<2?0:11-r;return parseInt(t[9],10)===o},renderStatusBadge:(n,t)=>{const e=new Date;e.setHours(0,0,0,0);let s=null;if(t){const o=new Date(t);Number.isNaN(o.getTime())||(s=o)}const r=(n||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return r!=="recebido"&&s&&s<e?'<span class="px-2 py-1 text-xs font-display rounded bg-alert text-canvas uppercase">Atrasado</span>':r.includes("recebido")||r.includes("entregue")?`<span class="px-2 py-1 text-xs font-display rounded bg-primary text-canvas uppercase">${n}</span>`:r.includes("comprado")?`<span class="px-2 py-1 text-xs font-display rounded bg-indigo-500 text-canvas uppercase">${n}</span>`:r.includes("aprov")?`<span class="px-2 py-1 text-xs font-display rounded bg-emerald-500 text-canvas uppercase">${n}</span>`:r.includes("cot")||r.includes("cota")?`<span class="px-2 py-1 text-xs font-display rounded bg-amber-400 text-gray-900 uppercase">${n}</span>`:`<span class="px-2 py-1 text-xs font-display rounded bg-border text-text uppercase">${n||"N/D"}</span>`},debounce:(n,t)=>{let e;return(...s)=>{clearTimeout(e),e=setTimeout(()=>n(...s),t)}},getGreeting:()=>{const n=new Date().getHours();return n<12?"Bom dia":n<18?"Boa tarde":"Boa noite"},getContextualMessage:n=>{const t=[];return n.urgentes>0?t.push(`Você tem <strong>${n.urgentes} compras urgentes</strong> que precisam de atenção`):n.aguardandoAcao>0?t.push(`Há <strong>${n.aguardandoAcao} compras aguardando</strong> sua ação`):n.pendentes===0&&n.emCotacao===0?t.push("Tudo em dia! Continue o ótimo trabalho 🎉"):t.push("Aqui está o resumo das suas compras"),n.sla>=90&&t.push(`Seu SLA está excelente: <strong>${n.sla.toFixed(1)}%</strong> ✨`),t.join(" • ")},formatRelativeTime:n=>{if(!n)return"";const t=new Date(n),s=new Date-t,r=Math.floor(s/6e4),i=Math.floor(s/36e5),o=Math.floor(s/864e5);return r<1?"agora mesmo":r<60?`há ${r} minuto${r>1?"s":""}`:i<24?`há ${i} hora${i>1?"s":""}`:o===1?"ontem":o<7?`há ${o} dias`:o<30?`há ${Math.floor(o/7)} semana${Math.floor(o/7)>1?"s":""}`:Q.formatDate(n)},daysBetween:(n,t)=>{const e=new Date(n),s=new Date(t),r=Math.abs(s-e);return Math.floor(r/(1e3*60*60*24))}},Rt={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>',pencil:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.75 19.901l-4.5.75.75-4.5L16.862 4.487z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.6l2.651 2.651" /></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5h10.5M9.75 7.5v-1.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5m-9 0v12a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-12" /></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',alert:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>'},RS=n=>{const t=[];return n.semPrevisao>5&&t.push(`Você tem ${n.semPrevisao} compras sem previsão de entrega. Que tal entrar em contato com os fornecedores?`),n.precisamAtualizacao>10&&t.push(`${n.precisamAtualizacao} compras estão há dias sem atualização. Mantenha o status sempre atualizado!`),n.sla<80&&t.push(`Seu SLA está em ${n.sla.toFixed(1)}%. Foque em acompanhar as previsões de entrega para melhorar!`),n.lead>15&&t.push(`Seu lead time médio é ${n.lead.toFixed(1)} dias. Negocie prazos menores com fornecedores!`),n.urgentes>5&&t.push(`Atenção! ${n.urgentes} compras urgentes precisam de ação imediata.`),t.length===0&&t.push("Excelente trabalho! Seus indicadores estão ótimos. Continue assim! 🎉"),t[Math.floor(Math.random()*t.length)]},ga={renderTimeline:n=>{if(!n||n.length===0)return`
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
                            ${Q.getGreeting()}, ${(t==null?void 0:t.nome)||(t==null?void 0:t.email)||"Comprador"}! 👋
                        </h1>
                        <p class="text-text-muted">
                            ${Q.getContextualMessage(n)}
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
                        ${Rt.plus} Nova Compra
                    </a>
                    <a href="#/relatorios?status=Pendente" class="btn btn-secondary flex items-center gap-2 whitespace-nowrap">
                        ${Rt.clock} Ver Pendentes
                    </a>
                    <a href="#/relatorios?urgente=true" class="btn btn-secondary text-alert border-alert/30 hover:bg-alert/5 flex items-center gap-2 whitespace-nowrap">
                        ${Rt.alert} Ver Urgentes
                    </a>
                    <a href="#/relatorios" class="btn btn-ghost flex items-center gap-2 whitespace-nowrap">
                        ${Rt.chart} Todos Relatórios
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
                                <p class="text-lg font-display text-text mt-2">${Q.formatCurrency(s.semana.valor)}</p>
                            </div>
                            
                            <!-- Este Mês -->
                            <div class="bg-canvas p-4 rounded border border-border">
                                <p class="text-xs text-text-muted uppercase tracking-wide mb-2">Este Mês</p>
                                <p class="text-2xl font-display text-primary">${s.mes.quantidade}</p>
                                <p class="text-sm text-text-muted">compras</p>
                                <p class="text-lg font-display text-text mt-2">${Q.formatCurrency(s.mes.valor)}</p>
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
                                <span class="font-display text-text">${Q.formatCurrency(s.ticketMedio)}</span>
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
                            <p class="text-sm text-text-muted">${RS(n)}</p>
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
                                        <span>${Q.formatCurrency(r.valor_total||r.valor_estimado)}</span>
                                    </p>
                                </div>

                                <!-- Status e Motivo -->
                                <div class="flex-shrink-0 text-right hidden sm:block">
                                    ${Q.renderStatusBadge(r.status_compra,r.previsao_entrega)}
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
                                        ${Rt.pencil}
                                    </button>
                                </div>
                            </div>
                        `).join("")||'<div class="p-8 text-center text-text-muted">Nenhuma compra crítica no momento! 🎉</div>'}
                    </div>
                </div>
            </div>
        `},renderObra:n=>{var t,e,s,r,i,o,a,c,l,u,h,f,m,g;return`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Minha Obra</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${F.createCard({title:"Solicitados",content:`<p class="text-4xl font-display text-text uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`})}
                    ${F.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-display text-primary uppercase">${n.transito}</p><p class="text-sm heading-muted">A caminho</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${n.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(n.economia||0)<0?"alert":"primary"} uppercase">${Q.formatCurrency(n.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(n.curvaPercent||0).toFixed(1)}%</p>`})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    ${F.createCard({title:"RDO - Total Horas",content:`<p class="text-3xl font-display text-primary uppercase">${((s=(e=((t=n.rdoData)==null?void 0:t.totalHoras)||0).toFixed)==null?void 0:s.call(e,1))||0}</p><p class="text-sm heading-muted">Relatórios: ${((r=n.rdoData)==null?void 0:r.quantidadeRelatorios)||0}</p>`})}
                    ${F.createCard({title:"RDO - Horas Extras",content:`<p class="text-3xl font-display text-text uppercase">${((a=(o=((i=n.rdoData)==null?void 0:i.totalExtras)||0).toFixed)==null?void 0:a.call(o,1))||0}</p><p class="text-sm heading-muted">Acima do padrão</p>`})}
                    ${F.createCard({title:"RDO - Média Horas/Dia",content:`<p class="text-3xl font-display text-text uppercase">${((u=(l=((c=n.rdoData)==null?void 0:c.mediaHorasDia)||0).toFixed)==null?void 0:u.call(l,1))||0}</p>`})}
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
                    ${F.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${Q.formatCurrency(n.totalGasto)}</p>`})}
                    ${F.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${F.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${Q.formatCurrency(n.limiteReal||0)} • Comprometido: ${Q.formatCurrency(n.comprometido||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${Q.formatCurrency(n.economia||0)}</p>`})}
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
                                            <td class="px-4 py-2 text-sm text-text text-right">${Q.formatCurrency(i.limite)}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${Q.formatCurrency(i.comprometido)}</td>
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
 */function Bo(n){return n+.5|0}const ls=(n,t,e)=>Math.max(Math.min(n,e),t);function Vi(n){return ls(Bo(n*2.55),0,255)}function _s(n){return ls(Bo(n*255),0,255)}function On(n){return ls(Bo(n/2.55)/100,0,1)}function zp(n){return ls(Bo(n*100),0,100)}const Xe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Od=[..."0123456789ABCDEF"],DS=n=>Od[n&15],MS=n=>Od[(n&240)>>4]+Od[n&15],_a=n=>(n&240)>>4===(n&15),OS=n=>_a(n.r)&&_a(n.g)&&_a(n.b)&&_a(n.a);function NS(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Xe[n[1]]*17,g:255&Xe[n[2]]*17,b:255&Xe[n[3]]*17,a:t===5?Xe[n[4]]*17:255}:(t===7||t===9)&&(e={r:Xe[n[1]]<<4|Xe[n[2]],g:Xe[n[3]]<<4|Xe[n[4]],b:Xe[n[5]]<<4|Xe[n[6]],a:t===9?Xe[n[7]]<<4|Xe[n[8]]:255})),e}const LS=(n,t)=>n<255?t(n):"";function VS(n){var t=OS(n)?DS:MS;return n?"#"+t(n.r)+t(n.g)+t(n.b)+LS(n.a,t):void 0}const FS=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function fv(n,t,e){const s=t*Math.min(e,1-e),r=(i,o=(i+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[r(0),r(8),r(4)]}function $S(n,t,e){const s=(r,i=(r+n/60)%6)=>e-e*t*Math.max(Math.min(i,4-i,1),0);return[s(5),s(3),s(1)]}function BS(n,t,e){const s=fv(n,1,.5);let r;for(t+e>1&&(r=1/(t+e),t*=r,e*=r),r=0;r<3;r++)s[r]*=1-t-e,s[r]+=t;return s}function US(n,t,e,s,r){return n===r?(t-e)/s+(t<e?6:0):t===r?(e-n)/s+2:(n-t)/s+4}function Zu(n){const e=n.r/255,s=n.g/255,r=n.b/255,i=Math.max(e,s,r),o=Math.min(e,s,r),a=(i+o)/2;let c,l,u;return i!==o&&(u=i-o,l=a>.5?u/(2-i-o):u/(i+o),c=US(e,s,r,u,i),c=c*60+.5),[c|0,l||0,a]}function th(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(_s)}function eh(n,t,e){return th(fv,n,t,e)}function jS(n,t,e){return th(BS,n,t,e)}function zS(n,t,e){return th($S,n,t,e)}function pv(n){return(n%360+360)%360}function HS(n){const t=FS.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Vi(+t[5]):_s(+t[5]));const r=pv(+t[2]),i=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=jS(r,i,o):t[1]==="hsv"?s=zS(r,i,o):s=eh(r,i,o),{r:s[0],g:s[1],b:s[2],a:e}}function qS(n,t){var e=Zu(n);e[0]=pv(e[0]+t),e=eh(e),n.r=e[0],n.g=e[1],n.b=e[2]}function WS(n){if(!n)return;const t=Zu(n),e=t[0],s=zp(t[1]),r=zp(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${r}%, ${On(n.a)})`:`hsl(${e}, ${s}%, ${r}%)`}const Hp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},qp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function GS(){const n={},t=Object.keys(qp),e=Object.keys(Hp);let s,r,i,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],r=0;r<e.length;r++)i=e[r],a=a.replace(i,Hp[i]);i=parseInt(qp[o],16),n[a]=[i>>16&255,i>>8&255,i&255]}return n}let ya;function YS(n){ya||(ya=GS(),ya.transparent=[0,0,0,0]);const t=ya[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const KS=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function QS(n){const t=KS.exec(n);let e=255,s,r,i;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?Vi(o):ls(o*255,0,255)}return s=+t[1],r=+t[3],i=+t[5],s=255&(t[2]?Vi(s):ls(s,0,255)),r=255&(t[4]?Vi(r):ls(r,0,255)),i=255&(t[6]?Vi(i):ls(i,0,255)),{r:s,g:r,b:i,a:e}}}function XS(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${On(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const jl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Er=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function JS(n,t,e){const s=Er(On(n.r)),r=Er(On(n.g)),i=Er(On(n.b));return{r:_s(jl(s+e*(Er(On(t.r))-s))),g:_s(jl(r+e*(Er(On(t.g))-r))),b:_s(jl(i+e*(Er(On(t.b))-i))),a:n.a+e*(t.a-n.a)}}function va(n,t,e){if(n){let s=Zu(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=eh(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function mv(n,t){return n&&Object.assign(t||{},n)}function Wp(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=_s(n[3]))):(t=mv(n,{r:0,g:0,b:0,a:1}),t.a=_s(t.a)),t}function ZS(n){return n.charAt(0)==="r"?QS(n):HS(n)}class po{constructor(t){if(t instanceof po)return t;const e=typeof t;let s;e==="object"?s=Wp(t):e==="string"&&(s=NS(t)||YS(t)||ZS(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=mv(this._rgb);return t&&(t.a=On(t.a)),t}set rgb(t){this._rgb=Wp(t)}rgbString(){return this._valid?XS(this._rgb):void 0}hexString(){return this._valid?VS(this._rgb):void 0}hslString(){return this._valid?WS(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,r=t.rgb;let i;const o=e===i?.5:e,a=2*o-1,c=s.a-r.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;i=1-l,s.r=255&l*s.r+i*r.r+.5,s.g=255&l*s.g+i*r.g+.5,s.b=255&l*s.b+i*r.b+.5,s.a=o*s.a+(1-o)*r.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=JS(this._rgb,t._rgb,e)),this}clone(){return new po(this.rgb)}alpha(t){return this._rgb.a=_s(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Bo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return va(this._rgb,2,t),this}darken(t){return va(this._rgb,2,-t),this}saturate(t){return va(this._rgb,1,t),this}desaturate(t){return va(this._rgb,1,-t),this}rotate(t){return qS(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Pn(){}const t1=(()=>{let n=0;return()=>n++})();function ct(n){return n==null}function zt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ut(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Xt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function We(n,t){return Xt(n)?n:t}function rt(n,t){return typeof n>"u"?t:n}const e1=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,gv=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function Mt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function St(n,t,e,s){let r,i,o;if(zt(n))for(i=n.length,r=0;r<i;r++)t.call(e,n[r],r);else if(ut(n))for(o=Object.keys(n),i=o.length,r=0;r<i;r++)t.call(e,n[o[r]],o[r])}function mc(n,t){let e,s,r,i;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(r=n[e],i=t[e],r.datasetIndex!==i.datasetIndex||r.index!==i.index)return!1;return!0}function gc(n){if(zt(n))return n.map(gc);if(ut(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let r=0;for(;r<s;++r)t[e[r]]=gc(n[e[r]]);return t}return n}function _v(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function n1(n,t,e,s){if(!_v(n))return;const r=t[n],i=e[n];ut(r)&&ut(i)?mo(r,i,s):t[n]=gc(i)}function mo(n,t,e){const s=zt(t)?t:[t],r=s.length;if(!ut(n))return n;e=e||{};const i=e.merger||n1;let o;for(let a=0;a<r;++a){if(o=s[a],!ut(o))continue;const c=Object.keys(o);for(let l=0,u=c.length;l<u;++l)i(c[l],n,o,e)}return n}function Qi(n,t){return mo(n,t,{merger:s1})}function s1(n,t,e){if(!_v(n))return;const s=t[n],r=e[n];ut(s)&&ut(r)?Qi(s,r):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=gc(r))}const Gp={"":n=>n,x:n=>n.x,y:n=>n.y};function r1(n){const t=n.split("."),e=[];let s="";for(const r of t)s+=r,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function i1(n){const t=r1(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function ws(n,t){return(Gp[t]||(Gp[t]=i1(t)))(n)}function nh(n){return n.charAt(0).toUpperCase()+n.slice(1)}const go=n=>typeof n<"u",Es=n=>typeof n=="function",Yp=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function o1(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const xt=Math.PI,Ft=2*xt,a1=Ft+xt,_c=Number.POSITIVE_INFINITY,c1=xt/180,ne=xt/2,Ms=xt/4,Kp=xt*2/3,ds=Math.log10,En=Math.sign;function Xi(n,t,e){return Math.abs(n-t)<e}function Qp(n){const t=Math.round(n);n=Xi(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(ds(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function l1(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((r,i)=>r-i).pop(),t}function d1(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Qr(n){return!d1(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function u1(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function yv(n,t,e){let s,r,i;for(s=0,r=n.length;s<r;s++)i=n[s][e],isNaN(i)||(t.min=Math.min(t.min,i),t.max=Math.max(t.max,i))}function on(n){return n*(xt/180)}function sh(n){return n*(180/xt)}function Xp(n){if(!Xt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function vv(n,t){const e=t.x-n.x,s=t.y-n.y,r=Math.sqrt(e*e+s*s);let i=Math.atan2(s,e);return i<-.5*xt&&(i+=Ft),{angle:i,distance:r}}function Nd(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function h1(n,t){return(n-t+a1)%Ft-xt}function Se(n){return(n%Ft+Ft)%Ft}function _o(n,t,e,s){const r=Se(n),i=Se(t),o=Se(e),a=Se(i-r),c=Se(o-r),l=Se(r-i),u=Se(r-o);return r===i||r===o||s&&i===o||a>c&&l<u}function me(n,t,e){return Math.max(t,Math.min(e,n))}function f1(n){return me(n,-32768,32767)}function $n(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function rh(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,r=0,i;for(;s-r>1;)i=r+s>>1,e(i)?r=i:s=i;return{lo:r,hi:s}}const Bn=(n,t,e,s)=>rh(n,e,s?r=>{const i=n[r][t];return i<e||i===e&&n[r+1][t]===e}:r=>n[r][t]<e),p1=(n,t,e)=>rh(n,e,s=>n[s][t]>=e);function m1(n,t,e){let s=0,r=n.length;for(;s<r&&n[s]<t;)s++;for(;r>s&&n[r-1]>e;)r--;return s>0||r<n.length?n.slice(s,r):n}const bv=["push","pop","shift","splice","unshift"];function g1(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),bv.forEach(e=>{const s="_onData"+nh(e),r=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...i){const o=r.apply(this,i);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...i)}),o}})})}function Jp(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,r=s.indexOf(t);r!==-1&&s.splice(r,1),!(s.length>0)&&(bv.forEach(i=>{delete n[i]}),delete n._chartjs)}function xv(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const wv=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function Ev(n,t){let e=[],s=!1;return function(...r){e=r,s||(s=!0,wv.call(window,()=>{s=!1,n.apply(t,e)}))}}function _1(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const ih=n=>n==="start"?"left":n==="end"?"right":"center",Ae=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,y1=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function Tv(n,t,e){const s=t.length;let r=0,i=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,u=o.axis,{min:h,max:f,minDefined:m,maxDefined:g}=o.getUserBounds();if(m){if(r=Math.min(Bn(c,u,h).lo,e?s:Bn(t,u,o.getPixelForValue(h)).lo),l){const v=c.slice(0,r+1).reverse().findIndex(y=>!ct(y[a.axis]));r-=Math.max(0,v)}r=me(r,0,s-1)}if(g){let v=Math.max(Bn(c,o.axis,f,!0).hi+1,e?0:Bn(t,u,o.getPixelForValue(f),!0).hi+1);if(l){const y=c.slice(v-1).findIndex(k=>!ct(k[a.axis]));v+=Math.max(0,y)}i=me(v,r,s)-r}else i=s-r}return{start:r,count:i}}function Iv(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,r={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=r,!0;const i=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,r),i}const ba=n=>n===0||n===1,Zp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Ft/e)),tm=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Ft/e)+1,Ji={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*ne)+1,easeOutSine:n=>Math.sin(n*ne),easeInOutSine:n=>-.5*(Math.cos(xt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>ba(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>ba(n)?n:Zp(n,.075,.3),easeOutElastic:n=>ba(n)?n:tm(n,.075,.3),easeInOutElastic(n){return ba(n)?n:n<.5?.5*Zp(n*2,.1125,.45):.5+.5*tm(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Ji.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Ji.easeInBounce(n*2)*.5:Ji.easeOutBounce(n*2-1)*.5+.5};function oh(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function em(n){return oh(n)?n:new po(n)}function zl(n){return oh(n)?n:new po(n).saturate(.5).darken(.1).hexString()}const v1=["x","y","borderWidth","radius","tension"],b1=["color","borderColor","backgroundColor"];function x1(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:b1},numbers:{type:"number",properties:v1}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function w1(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const nm=new Map;function E1(n,t){t=t||{};const e=n+JSON.stringify(t);let s=nm.get(e);return s||(s=new Intl.NumberFormat(n,t),nm.set(e,s)),s}function Uo(n,t,e){return E1(t,e).format(n)}const Av={values(n){return zt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let r,i=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(r="scientific"),i=T1(n,e)}const o=ds(Math.abs(i)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),Uo(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(ds(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?Av.numeric.call(this,n,t,e):""}};function T1(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var nl={formatters:Av};function I1(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:nl.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const cr=Object.create(null),Ld=Object.create(null);function Zi(n,t){if(!t)return n;const e=t.split(".");for(let s=0,r=e.length;s<r;++s){const i=e[s];n=n[i]||(n[i]=Object.create(null))}return n}function Hl(n,t,e){return typeof t=="string"?mo(Zi(n,t),e):mo(Zi(n,""),t)}class A1{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,r)=>zl(r.backgroundColor),this.hoverBorderColor=(s,r)=>zl(r.borderColor),this.hoverColor=(s,r)=>zl(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Hl(this,t,e)}get(t){return Zi(this,t)}describe(t,e){return Hl(Ld,t,e)}override(t,e){return Hl(cr,t,e)}route(t,e,s,r){const i=Zi(this,t),o=Zi(this,s),a="_"+e;Object.defineProperties(i,{[a]:{value:i[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[r];return ut(c)?Object.assign({},l,c):rt(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var qt=new A1({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[x1,w1,I1]);function k1(n){return!n||ct(n.size)||ct(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function yc(n,t,e,s,r){let i=t[r];return i||(i=t[r]=n.measureText(r).width,e.push(r)),i>s&&(s=i),s}function S1(n,t,e,s){s=s||{};let r=s.data=s.data||{},i=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(r=s.data={},i=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,u,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!zt(h))o=yc(n,r,i,o,h);else if(zt(h))for(l=0,u=h.length;l<u;l++)f=h[l],f!=null&&!zt(f)&&(o=yc(n,r,i,o,f));n.restore();const m=i.length/2;if(m>e.length){for(c=0;c<m;c++)delete r[i[c]];i.splice(0,m)}return o}function Os(n,t,e){const s=n.currentDevicePixelRatio,r=e!==0?Math.max(e/2,.5):0;return Math.round((t-r)*s)/s+r}function sm(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Vd(n,t,e,s){kv(n,t,e,s,null)}function kv(n,t,e,s,r){let i,o,a,c,l,u,h,f;const m=t.pointStyle,g=t.rotation,v=t.radius;let y=(g||0)*c1;if(m&&typeof m=="object"&&(i=m.toString(),i==="[object HTMLImageElement]"||i==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(y),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(v)||v<=0)){switch(n.beginPath(),m){default:r?n.ellipse(e,s,r/2,v,0,0,Ft):n.arc(e,s,v,0,Ft),n.closePath();break;case"triangle":u=r?r/2:v,n.moveTo(e+Math.sin(y)*u,s-Math.cos(y)*v),y+=Kp,n.lineTo(e+Math.sin(y)*u,s-Math.cos(y)*v),y+=Kp,n.lineTo(e+Math.sin(y)*u,s-Math.cos(y)*v),n.closePath();break;case"rectRounded":l=v*.516,c=v-l,o=Math.cos(y+Ms)*c,h=Math.cos(y+Ms)*(r?r/2-l:c),a=Math.sin(y+Ms)*c,f=Math.sin(y+Ms)*(r?r/2-l:c),n.arc(e-h,s-a,l,y-xt,y-ne),n.arc(e+f,s-o,l,y-ne,y),n.arc(e+h,s+a,l,y,y+ne),n.arc(e-f,s+o,l,y+ne,y+xt),n.closePath();break;case"rect":if(!g){c=Math.SQRT1_2*v,u=r?r/2:c,n.rect(e-u,s-c,2*u,2*c);break}y+=Ms;case"rectRot":h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+f,s-o),n.lineTo(e+h,s+a),n.lineTo(e-f,s+o),n.closePath();break;case"crossRot":y+=Ms;case"cross":h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"star":h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o),y+=Ms,h=Math.cos(y)*(r?r/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"line":o=r?r/2:Math.cos(y)*v,a=Math.sin(y)*v,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(y)*(r?r/2:v),s+Math.sin(y)*v);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Un(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function sl(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function rl(n){n.restore()}function C1(n,t,e,s,r){if(!t)return n.lineTo(e.x,e.y);if(r==="middle"){const i=(t.x+e.x)/2;n.lineTo(i,t.y),n.lineTo(i,e.y)}else r==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function P1(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function R1(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),ct(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function D1(n,t,e,s,r){if(r.strikethrough||r.underline){const i=n.measureText(s),o=t-i.actualBoundingBoxLeft,a=t+i.actualBoundingBoxRight,c=e-i.actualBoundingBoxAscent,l=e+i.actualBoundingBoxDescent,u=r.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=r.decorationWidth||2,n.moveTo(o,u),n.lineTo(a,u),n.stroke()}}function M1(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function lr(n,t,e,s,r,i={}){const o=zt(t)?t:[t],a=i.strokeWidth>0&&i.strokeColor!=="";let c,l;for(n.save(),n.font=r.string,R1(n,i),c=0;c<o.length;++c)l=o[c],i.backdrop&&M1(n,i.backdrop),a&&(i.strokeColor&&(n.strokeStyle=i.strokeColor),ct(i.strokeWidth)||(n.lineWidth=i.strokeWidth),n.strokeText(l,e,s,i.maxWidth)),n.fillText(l,e,s,i.maxWidth),D1(n,e,s,l,i),s+=Number(r.lineHeight);n.restore()}function yo(n,t){const{x:e,y:s,w:r,h:i,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*xt,xt,!0),n.lineTo(e,s+i-o.bottomLeft),n.arc(e+o.bottomLeft,s+i-o.bottomLeft,o.bottomLeft,xt,ne,!0),n.lineTo(e+r-o.bottomRight,s+i),n.arc(e+r-o.bottomRight,s+i-o.bottomRight,o.bottomRight,ne,0,!0),n.lineTo(e+r,s+o.topRight),n.arc(e+r-o.topRight,s+o.topRight,o.topRight,0,-ne,!0),n.lineTo(e+o.topLeft,s)}const O1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,N1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function L1(n,t){const e=(""+n).match(O1);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const V1=n=>+n||0;function ah(n,t){const e={},s=ut(t),r=s?Object.keys(t):t,i=ut(n)?s?o=>rt(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of r)e[o]=V1(i(o));return e}function Sv(n){return ah(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Ys(n){return ah(n,["topLeft","topRight","bottomLeft","bottomRight"])}function Me(n){const t=Sv(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ue(n,t){n=n||{},t=t||qt.font;let e=rt(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=rt(n.style,t.style);s&&!(""+s).match(N1)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const r={family:rt(n.family,t.family),lineHeight:L1(rt(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:rt(n.weight,t.weight),string:""};return r.string=k1(r),r}function Fi(n,t,e,s){let r,i,o;for(r=0,i=n.length;r<i;++r)if(o=n[r],o!==void 0&&o!==void 0)return o}function F1(n,t,e){const{min:s,max:r}=n,i=gv(t,(r-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(i)),max:o(r,i)}}function ks(n,t){return Object.assign(Object.create(n),t)}function ch(n,t=[""],e,s,r=()=>n[0]){const i=e||n;typeof s>"u"&&(s=Dv("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:i,_fallback:s,_getTarget:r,override:a=>ch([a,...n],t,i,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return Pv(a,c,()=>W1(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return im(a).includes(c)},ownKeys(a){return im(a)},set(a,c,l){const u=a._storage||(a._storage=r());return a[c]=u[c]=l,delete a._keys,!0}})}function Xr(n,t,e,s){const r={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:Cv(n,s),setContext:i=>Xr(n,i,e,s),override:i=>Xr(n.override(i),t,e,s)};return new Proxy(r,{deleteProperty(i,o){return delete i[o],delete n[o],!0},get(i,o,a){return Pv(i,o,()=>B1(i,o,a))},getOwnPropertyDescriptor(i,o){return i._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(i,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(i,o,a){return n[o]=a,delete i[o],!0}})}function Cv(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:r=t.allKeys}=n;return{allKeys:r,scriptable:e,indexable:s,isScriptable:Es(e)?e:()=>e,isIndexable:Es(s)?s:()=>s}}const $1=(n,t)=>n?n+nh(t):t,lh=(n,t)=>ut(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Pv(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function B1(n,t,e){const{_proxy:s,_context:r,_subProxy:i,_descriptors:o}=n;let a=s[t];return Es(a)&&o.isScriptable(t)&&(a=U1(t,a,n,e)),zt(a)&&a.length&&(a=j1(t,a,n,o.isIndexable)),lh(t,a)&&(a=Xr(a,r,i&&i[t],o)),a}function U1(n,t,e,s){const{_proxy:r,_context:i,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(i,o||s);return a.delete(n),lh(n,c)&&(c=dh(r._scopes,r,n,c)),c}function j1(n,t,e,s){const{_proxy:r,_context:i,_subProxy:o,_descriptors:a}=e;if(typeof i.index<"u"&&s(n))return t[i.index%t.length];if(ut(t[0])){const c=t,l=r._scopes.filter(u=>u!==c);t=[];for(const u of c){const h=dh(l,r,n,u);t.push(Xr(h,i,o&&o[n],a))}}return t}function Rv(n,t,e){return Es(n)?n(t,e):n}const z1=(n,t)=>n===!0?t:typeof n=="string"?ws(t,n):void 0;function H1(n,t,e,s,r){for(const i of t){const o=z1(e,i);if(o){n.add(o);const a=Rv(o._fallback,e,r);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function dh(n,t,e,s){const r=t._rootScopes,i=Rv(t._fallback,e,s),o=[...n,...r],a=new Set;a.add(s);let c=rm(a,o,e,i||e,s);return c===null||typeof i<"u"&&i!==e&&(c=rm(a,o,i,c,s),c===null)?!1:ch(Array.from(a),[""],r,i,()=>q1(t,e,s))}function rm(n,t,e,s,r){for(;e;)e=H1(n,t,e,s,r);return e}function q1(n,t,e){const s=n._getTarget();t in s||(s[t]={});const r=s[t];return zt(r)&&ut(e)?e:r||{}}function W1(n,t,e,s){let r;for(const i of t)if(r=Dv($1(i,n),e),typeof r<"u")return lh(n,r)?dh(e,s,n,r):r}function Dv(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function im(n){let t=n._keys;return t||(t=n._keys=G1(n._scopes)),t}function G1(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(r=>!r.startsWith("_")))t.add(s);return Array.from(t)}function Mv(n,t,e,s){const{iScale:r}=n,{key:i="r"}=this._parsing,o=new Array(s);let a,c,l,u;for(a=0,c=s;a<c;++a)l=a+e,u=t[l],o[a]={r:r.parse(ws(u,i),l)};return o}const Y1=Number.EPSILON||1e-14,Jr=(n,t)=>t<n.length&&!n[t].skip&&n[t],Ov=n=>n==="x"?"y":"x";function K1(n,t,e,s){const r=n.skip?t:n,i=t,o=e.skip?t:e,a=Nd(i,r),c=Nd(o,i);let l=a/(a+c),u=c/(a+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;const h=s*l,f=s*u;return{previous:{x:i.x-h*(o.x-r.x),y:i.y-h*(o.y-r.y)},next:{x:i.x+f*(o.x-r.x),y:i.y+f*(o.y-r.y)}}}function Q1(n,t,e){const s=n.length;let r,i,o,a,c,l=Jr(n,0);for(let u=0;u<s-1;++u)if(c=l,l=Jr(n,u+1),!(!c||!l)){if(Xi(t[u],0,Y1)){e[u]=e[u+1]=0;continue}r=e[u]/t[u],i=e[u+1]/t[u],a=Math.pow(r,2)+Math.pow(i,2),!(a<=9)&&(o=3/Math.sqrt(a),e[u]=r*o*t[u],e[u+1]=i*o*t[u])}}function X1(n,t,e="x"){const s=Ov(e),r=n.length;let i,o,a,c=Jr(n,0);for(let l=0;l<r;++l){if(o=a,a=c,c=Jr(n,l+1),!a)continue;const u=a[e],h=a[s];o&&(i=(u-o[e])/3,a[`cp1${e}`]=u-i,a[`cp1${s}`]=h-i*t[l]),c&&(i=(c[e]-u)/3,a[`cp2${e}`]=u+i,a[`cp2${s}`]=h+i*t[l])}}function J1(n,t="x"){const e=Ov(t),s=n.length,r=Array(s).fill(0),i=Array(s);let o,a,c,l=Jr(n,0);for(o=0;o<s;++o)if(a=c,c=l,l=Jr(n,o+1),!!c){if(l){const u=l[t]-c[t];r[o]=u!==0?(l[e]-c[e])/u:0}i[o]=a?l?En(r[o-1])!==En(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}Q1(n,r,i),X1(n,i,t)}function xa(n,t,e){return Math.max(Math.min(n,e),t)}function Z1(n,t){let e,s,r,i,o,a=Un(n[0],t);for(e=0,s=n.length;e<s;++e)o=i,i=a,a=e<s-1&&Un(n[e+1],t),i&&(r=n[e],o&&(r.cp1x=xa(r.cp1x,t.left,t.right),r.cp1y=xa(r.cp1y,t.top,t.bottom)),a&&(r.cp2x=xa(r.cp2x,t.left,t.right),r.cp2y=xa(r.cp2y,t.top,t.bottom)))}function tC(n,t,e,s,r){let i,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")J1(n,r);else{let l=s?n[n.length-1]:n[0];for(i=0,o=n.length;i<o;++i)a=n[i],c=K1(l,a,n[Math.min(i+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&Z1(n,e)}function uh(){return typeof window<"u"&&typeof document<"u"}function hh(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function vc(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const il=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function eC(n,t){return il(n).getPropertyValue(t)}const nC=["top","right","bottom","left"];function Ks(n,t,e){const s={};e=e?"-"+e:"";for(let r=0;r<4;r++){const i=nC[r];s[i]=parseFloat(n[t+"-"+i+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const sC=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function rC(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:r,offsetY:i}=s;let o=!1,a,c;if(sC(r,i,n.target))a=r,c=i;else{const l=t.getBoundingClientRect();a=s.clientX-l.left,c=s.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Bs(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,r=il(e),i=r.boxSizing==="border-box",o=Ks(r,"padding"),a=Ks(r,"border","width"),{x:c,y:l,box:u}=rC(n,e),h=o.left+(u&&a.left),f=o.top+(u&&a.top);let{width:m,height:g}=t;return i&&(m-=o.width+a.width,g-=o.height+a.height),{x:Math.round((c-h)/m*e.width/s),y:Math.round((l-f)/g*e.height/s)}}function iC(n,t,e){let s,r;if(t===void 0||e===void 0){const i=n&&hh(n);if(!i)t=n.clientWidth,e=n.clientHeight;else{const o=i.getBoundingClientRect(),a=il(i),c=Ks(a,"border","width"),l=Ks(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,s=vc(a.maxWidth,i,"clientWidth"),r=vc(a.maxHeight,i,"clientHeight")}}return{width:t,height:e,maxWidth:s||_c,maxHeight:r||_c}}const us=n=>Math.round(n*10)/10;function oC(n,t,e,s){const r=il(n),i=Ks(r,"margin"),o=vc(r.maxWidth,n,"clientWidth")||_c,a=vc(r.maxHeight,n,"clientHeight")||_c,c=iC(n,t,e);let{width:l,height:u}=c;if(r.boxSizing==="content-box"){const f=Ks(r,"border","width"),m=Ks(r,"padding");l-=m.width+f.width,u-=m.height+f.height}return l=Math.max(0,l-i.width),u=Math.max(0,s?l/s:u-i.height),l=us(Math.min(l,o,c.maxWidth)),u=us(Math.min(u,a,c.maxHeight)),l&&!u&&(u=us(l/2)),(t!==void 0||e!==void 0)&&s&&c.height&&u>c.height&&(u=c.height,l=us(Math.floor(u*s))),{width:l,height:u}}function om(n,t,e){const s=t||1,r=us(n.height*s),i=us(n.width*s);n.height=us(n.height),n.width=us(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==r||o.width!==i?(n.currentDevicePixelRatio=s,o.height=r,o.width=i,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const aC=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};uh()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function am(n,t){const e=eC(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Us(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function cC(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function lC(n,t,e,s){const r={x:n.cp2x,y:n.cp2y},i={x:t.cp1x,y:t.cp1y},o=Us(n,r,e),a=Us(r,i,e),c=Us(i,t,e),l=Us(o,a,e),u=Us(a,c,e);return Us(l,u,e)}const dC=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},uC=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function jr(n,t,e){return n?dC(t,e):uC()}function Nv(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function Lv(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function Vv(n){return n==="angle"?{between:_o,compare:h1,normalize:Se}:{between:$n,compare:(t,e)=>t-e,normalize:t=>t}}function cm({start:n,end:t,count:e,loop:s,style:r}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:r}}function hC(n,t,e){const{property:s,start:r,end:i}=e,{between:o,normalize:a}=Vv(s),c=t.length;let{start:l,end:u,loop:h}=n,f,m;if(h){for(l+=c,u+=c,f=0,m=c;f<m&&o(a(t[l%c][s]),r,i);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:h,style:n.style}}function Fv(n,t,e){if(!e)return[n];const{property:s,start:r,end:i}=e,o=t.length,{compare:a,between:c,normalize:l}=Vv(s),{start:u,end:h,loop:f,style:m}=hC(n,t,e),g=[];let v=!1,y=null,k,T,A;const P=()=>c(r,A,k)&&a(r,A)!==0,R=()=>a(i,k)===0||c(i,A,k),M=()=>v||P(),w=()=>!v||R();for(let b=u,x=u;b<=h;++b)T=t[b%o],!T.skip&&(k=l(T[s]),k!==A&&(v=c(k,r,i),y===null&&M()&&(y=a(k,r)===0?b:x),y!==null&&w()&&(g.push(cm({start:y,end:b,loop:f,count:o,style:m})),y=null),x=b,A=k));return y!==null&&g.push(cm({start:y,end:h,loop:f,count:o,style:m})),g}function $v(n,t){const e=[],s=n.segments;for(let r=0;r<s.length;r++){const i=Fv(s[r],n.points,t);i.length&&e.push(...i)}return e}function fC(n,t,e,s){let r=0,i=t-1;if(e&&!s)for(;r<t&&!n[r].skip;)r++;for(;r<t&&n[r].skip;)r++;for(r%=t,e&&(i+=r);i>r&&n[i%t].skip;)i--;return i%=t,{start:r,end:i}}function pC(n,t,e,s){const r=n.length,i=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%r];l.skip||l.stop?a.skip||(s=!1,i.push({start:t%r,end:(c-1)%r,loop:s}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&i.push({start:t%r,end:o%r,loop:s}),i}function mC(n,t){const e=n.points,s=n.options.spanGaps,r=e.length;if(!r)return[];const i=!!n._loop,{start:o,end:a}=fC(e,r,i,s);if(s===!0)return lm(n,[{start:o,end:a,loop:i}],e,t);const c=a<o?a+r:a,l=!!n._fullLoop&&o===0&&a===r-1;return lm(n,pC(e,o,c,l),e,t)}function lm(n,t,e,s){return!s||!s.setContext||!e?t:gC(n,t,e,s)}function gC(n,t,e,s){const r=n._chart.getContext(),i=dm(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let u=i,h=t[0].start,f=h;function m(g,v,y,k){const T=a?-1:1;if(g!==v){for(g+=c;e[g%c].skip;)g-=T;for(;e[v%c].skip;)v+=T;g%c!==v%c&&(l.push({start:g%c,end:v%c,loop:y,style:k}),u=k,h=v%c)}}for(const g of t){h=a?h:g.start;let v=e[h%c],y;for(f=h+1;f<=g.end;f++){const k=e[f%c];y=dm(s.setContext(ks(r,{type:"segment",p0:v,p1:k,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),_C(y,u)&&m(h,f-1,g.loop,u),v=k,u=y}h<f-1&&m(h,f-1,g.loop,u)}return l}function dm(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function _C(n,t){if(!t)return!1;const e=[],s=function(r,i){return oh(i)?(e.includes(i)||e.push(i),e.indexOf(i)):i};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function wa(n,t,e){return n.options.clip?n[e]:t[e]}function yC(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:wa(e,t,"left"),right:wa(e,t,"right"),top:wa(s,t,"top"),bottom:wa(s,t,"bottom")}:t}function Bv(n,t){const e=t._clip;if(e.disabled)return!1;const s=yC(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class vC{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,r){const i=e.listeners[r],o=e.duration;i.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=wv.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,r)=>{if(!s.running||!s.items.length)return;const i=s.items;let o=i.length-1,a=!1,c;for(;o>=0;--o)c=i[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(i[o]=i[i.length-1],i.pop());a&&(r.draw(),this._notify(r,s,t,"progress")),i.length||(s.running=!1,this._notify(r,s,t,"complete"),s.initial=!1),e+=i.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,r)=>Math.max(s,r._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let r=s.length-1;for(;r>=0;--r)s[r].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Rn=new vC;const um="transparent",bC={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=em(n||um),r=s.valid&&em(t||um);return r&&r.valid?r.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class xC{constructor(t,e,s,r){const i=e[s];r=Fi([t.to,r,i,t.from]);const o=Fi([t.from,i,r]);this._active=!0,this._fn=t.fn||bC[t.type||typeof o],this._easing=Ji[t.easing]||Ji.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const r=this._target[this._prop],i=s-this._start,o=this._duration-i;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=i,this._loop=!!t.loop,this._to=Fi([t.to,e,r,t.from]),this._from=Fi([t.from,r,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,r=this._prop,i=this._from,o=this._loop,a=this._to;let c;if(this._active=i!==a&&(o||e<s),!this._active){this._target[r]=a,this._notify(!0);return}if(e<0){this._target[r]=i;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[r]=this._fn(i,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let r=0;r<s.length;r++)s[r][e]()}}class Uv{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ut(t))return;const e=Object.keys(qt.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(r=>{const i=t[r];if(!ut(i))return;const o={};for(const a of e)o[a]=i[a];(zt(i.properties)&&i.properties||[r]).forEach(a=>{(a===r||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,r=EC(t,s);if(!r)return[];const i=this._createAnimations(r,s);return s.$shared&&wC(t.options.$animations,s).then(()=>{t.options=s},()=>{}),i}_createAnimations(t,e){const s=this._properties,r=[],i=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){r.push(...this._animateOptions(t,e));continue}const u=e[l];let h=i[l];const f=s.get(l);if(h)if(f&&h.active()){h.update(f,u,a);continue}else h.cancel();if(!f||!f.duration){t[l]=u;continue}i[l]=h=new xC(f,t,l,u),r.push(h)}return r}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return Rn.add(this._chart,s),!0}}function wC(n,t){const e=[],s=Object.keys(t);for(let r=0;r<s.length;r++){const i=n[s[r]];i&&i.active()&&e.push(i.wait())}return Promise.all(e)}function EC(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function hm(n,t){const e=n&&n.options||{},s=e.reverse,r=e.min===void 0?t:0,i=e.max===void 0?t:0;return{start:s?i:r,end:s?r:i}}function TC(n,t,e){if(e===!1)return!1;const s=hm(n,e),r=hm(t,e);return{top:r.end,right:s.end,bottom:r.start,left:s.start}}function IC(n){let t,e,s,r;return ut(n)?(t=n.top,e=n.right,s=n.bottom,r=n.left):t=e=s=r=n,{top:t,right:e,bottom:s,left:r,disabled:n===!1}}function jv(n,t){const e=[],s=n._getSortedDatasetMetas(t);let r,i;for(r=0,i=s.length;r<i;++r)e.push(s[r].index);return e}function fm(n,t,e,s={}){const r=n.keys,i=s.mode==="single";let o,a,c,l;if(t===null)return;let u=!1;for(o=0,a=r.length;o<a;++o){if(c=+r[o],c===e){if(u=!0,s.all)continue;break}l=n.values[c],Xt(l)&&(i||t===0||En(t)===En(l))&&(t+=l)}return!u&&!s.all?0:t}function AC(n,t){const{iScale:e,vScale:s}=t,r=e.axis==="x"?"x":"y",i=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],a[c]={[r]:u,[i]:n[u]};return a}function ql(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function kC(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function SC(n){const{min:t,max:e,minDefined:s,maxDefined:r}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:r?e:Number.POSITIVE_INFINITY}}function CC(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function pm(n,t,e,s){for(const r of t.getMatchingVisibleMetas(s).reverse()){const i=n[r.index];if(e&&i>0||!e&&i<0)return r.index}return null}function mm(n,t){const{chart:e,_cachedMeta:s}=n,r=e._stacks||(e._stacks={}),{iScale:i,vScale:o,index:a}=s,c=i.axis,l=o.axis,u=kC(i,o,s),h=t.length;let f;for(let m=0;m<h;++m){const g=t[m],{[c]:v,[l]:y}=g,k=g._stacks||(g._stacks={});f=k[l]=CC(r,u,v),f[a]=y,f._top=pm(f,o,!0,s.type),f._bottom=pm(f,o,!1,s.type);const T=f._visualValues||(f._visualValues={});T[a]=y}}function Wl(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function PC(n,t){return ks(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function RC(n,t,e){return ks(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function xi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const r of t){const i=r._stacks;if(!i||i[s]===void 0||i[s][e]===void 0)return;delete i[s][e],i[s]._visualValues!==void 0&&i[s]._visualValues[e]!==void 0&&delete i[s]._visualValues[e]}}}const Gl=n=>n==="reset"||n==="none",gm=(n,t)=>t?n:Object.assign({},n),DC=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:jv(e,!0),values:null};class an{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ql(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&xi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),r=(h,f,m,g)=>h==="x"?f:h==="r"?g:m,i=e.xAxisID=rt(s.xAxisID,Wl(t,"x")),o=e.yAxisID=rt(s.yAxisID,Wl(t,"y")),a=e.rAxisID=rt(s.rAxisID,Wl(t,"r")),c=e.indexAxis,l=e.iAxisID=r(c,i,o,a),u=e.vAxisID=r(c,o,i,a);e.xScale=this.getScaleForId(i),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Jp(this._data,this),t._stacked&&xi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(ut(e)){const r=this._cachedMeta;this._data=AC(e,r)}else if(s!==e){if(s){Jp(s,this);const r=this._cachedMeta;xi(r),r._parsed=[]}e&&Object.isExtensible(e)&&g1(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let r=!1;this._dataCheck();const i=e._stacked;e._stacked=ql(e.vScale,e),e.stack!==s.stack&&(r=!0,xi(e),e.stack=s.stack),this._resyncElements(t),(r||i!==e._stacked)&&(mm(this,e._parsed),e._stacked=ql(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:r}=this,{iScale:i,_stacked:o}=s,a=i.axis;let c=t===0&&e===r.length?!0:s._sorted,l=t>0&&s._parsed[t-1],u,h,f;if(this._parsing===!1)s._parsed=r,s._sorted=!0,f=r;else{zt(r[t])?f=this.parseArrayData(s,r,t,e):ut(r[t])?f=this.parseObjectData(s,r,t,e):f=this.parsePrimitiveData(s,r,t,e);const m=()=>h[a]===null||l&&h[a]<l[a];for(u=0;u<e;++u)s._parsed[u+t]=h=f[u],c&&(m()&&(c=!1),l=h);s._sorted=c}o&&mm(this,f)}parsePrimitiveData(t,e,s,r){const{iScale:i,vScale:o}=t,a=i.axis,c=o.axis,l=i.getLabels(),u=i===o,h=new Array(r);let f,m,g;for(f=0,m=r;f<m;++f)g=f+s,h[f]={[a]:u||i.parse(l[g],g),[c]:o.parse(e[g],g)};return h}parseArrayData(t,e,s,r){const{xScale:i,yScale:o}=t,a=new Array(r);let c,l,u,h;for(c=0,l=r;c<l;++c)u=c+s,h=e[u],a[c]={x:i.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(t,e,s,r){const{xScale:i,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(r);let u,h,f,m;for(u=0,h=r;u<h;++u)f=u+s,m=e[f],l[u]={x:i.parse(ws(m,a),f),y:o.parse(ws(m,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const r=this.chart,i=this._cachedMeta,o=e[t.axis],a={keys:jv(r,!0),values:e._stacks[t.axis]._visualValues};return fm(a,o,i.index,{mode:s})}updateRangeFromParsed(t,e,s,r){const i=s[e.axis];let o=i===null?NaN:i;const a=r&&s._stacks[e.axis];r&&a&&(r.values=a,o=fm(r,i,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,r=s._parsed,i=s._sorted&&t===s.iScale,o=r.length,a=this._getOtherScale(t),c=DC(e,s,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=SC(a);let f,m;function g(){m=r[f];const v=m[a.axis];return!Xt(m[t.axis])||u>v||h<v}for(f=0;f<o&&!(!g()&&(this.updateRangeFromParsed(l,t,m,c),i));++f);if(i){for(f=o-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(l,t,m,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let r,i,o;for(r=0,i=e.length;r<i;++r)o=e[r][t.axis],Xt(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,r=e.vScale,i=this.getParsed(t);return{label:s?""+s.getLabelForValue(i[s.axis]):"",value:r?""+r.getLabelForValue(i[r.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=IC(rt(this.options.clip,TC(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,r=s.data||[],i=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||r.length-a,l=this.options.drawActiveElementsOnTop;let u;for(s.dataset&&s.dataset.draw(t,i,a,c),u=a;u<a+c;++u){const h=r[u];h.hidden||(h.active&&l?o.push(h):h.draw(t,i))}for(u=0;u<o.length;++u)o[u].draw(t,i)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const r=this.getDataset();let i;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];i=o.$context||(o.$context=RC(this.getContext(),t,o)),i.parsed=this.getParsed(t),i.raw=r.data[t],i.index=i.dataIndex=t}else i=this.$context||(this.$context=PC(this.chart.getContext(),this.index)),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!e,i.mode=s,i}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const r=e==="active",i=this._cachedDataOpts,o=t+"-"+e,a=i[o],c=this.enableOptionSharing&&go(s);if(a)return gm(a,c);const l=this.chart.config,u=l.datasetElementScopeKeys(this._type,t),h=r?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),u),m=Object.keys(qt.elements[t]),g=()=>this.getContext(s,r,e),v=l.resolveNamedOptions(f,m,g,h);return v.$shared&&(v.$shared=c,i[o]=Object.freeze(gm(v,c))),v}_resolveAnimations(t,e,s){const r=this.chart,i=this._cachedDataOpts,o=`animation-${e}`,a=i[o];if(a)return a;let c;if(r.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,e),f=u.getOptionScopes(this.getDataset(),h);c=u.createResolver(f,this.getContext(t,s,e))}const l=new Uv(r,c&&c.animations);return c&&c._cacheable&&(i[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Gl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),r=this._sharedOptions,i=this.getSharedOptions(s),o=this.includeOptions(e,i)||i!==r;return this.updateSharedOptions(i,e,s),{sharedOptions:i,includeOptions:o}}updateElement(t,e,s,r){Gl(r)?Object.assign(t,s):this._resolveAnimations(e,r).update(t,s)}updateSharedOptions(t,e,s){t&&!Gl(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,r){t.active=r;const i=this.getStyle(e,r);this._resolveAnimations(e,s,r).update(t,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const r=s.length,i=e.length,o=Math.min(i,r);o&&this.parse(0,o),i>r?this._insertElements(r,i-r,t):i<r&&this._removeElements(i,r-i)}_insertElements(t,e,s=!0){const r=this._cachedMeta,i=r.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(i),a=t;a<o;++a)i[a]=new this.dataElementType;this._parsing&&c(r._parsed),this.parse(t,e),s&&this.updateElements(i,t,e,"reset")}updateElements(t,e,s,r){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const r=s._parsed.splice(t,e);s._stacked&&xi(s,r)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,r]=t;this[e](s,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}L(an,"defaults",{}),L(an,"datasetElementType",null),L(an,"dataElementType",null);function MC(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let r=0,i=e.length;r<i;r++)s=s.concat(e[r].controller.getAllParsedValues(n));n._cache.$bar=xv(s.sort((r,i)=>r-i))}return n._cache.$bar}function OC(n){const t=n.iScale,e=MC(t,n.type);let s=t._length,r,i,o,a;const c=()=>{o===32767||o===-32768||(go(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(r=0,i=e.length;r<i;++r)o=t.getPixelForValue(e[r]),c();for(a=void 0,r=0,i=t.ticks.length;r<i;++r)o=t.getPixelForTick(r),c();return s}function NC(n,t,e,s){const r=e.barThickness;let i,o;return ct(r)?(i=t.min*e.categoryPercentage,o=e.barPercentage):(i=r*s,o=1),{chunk:i/s,ratio:o,start:t.pixels[n]-i/2}}function LC(n,t,e,s){const r=t.pixels,i=r[n];let o=n>0?r[n-1]:null,a=n<r.length-1?r[n+1]:null;const c=e.categoryPercentage;o===null&&(o=i-(a===null?t.end-t.start:a-i)),a===null&&(a=i+i-o);const l=i-(i-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:l}}function VC(n,t,e,s){const r=e.parse(n[0],s),i=e.parse(n[1],s),o=Math.min(r,i),a=Math.max(r,i);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:r,end:i,min:o,max:a}}function zv(n,t,e,s){return zt(n)?VC(n,t,e,s):t[e.axis]=e.parse(n,s),t}function _m(n,t,e,s){const r=n.iScale,i=n.vScale,o=r.getLabels(),a=r===i,c=[];let l,u,h,f;for(l=e,u=e+s;l<u;++l)f=t[l],h={},h[r.axis]=a||r.parse(o[l],l),c.push(zv(f,h,i,l));return c}function Yl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function FC(n,t,e){return n!==0?En(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function $C(n){let t,e,s,r,i;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(r="end",i="start"):(r="start",i="end"),{start:e,end:s,reverse:t,top:r,bottom:i}}function BC(n,t,e,s){let r=t.borderSkipped;const i={};if(!r){n.borderSkipped=i;return}if(r===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:u}=$C(n);r==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?r=l:(e._bottom||0)===s?r=u:(i[ym(u,o,a,c)]=!0,r=l)),i[ym(r,o,a,c)]=!0,n.borderSkipped=i}function ym(n,t,e,s){return s?(n=UC(n,t,e),n=vm(n,e,t)):n=vm(n,t,e),n}function UC(n,t,e){return n===t?e:n===e?t:n}function vm(n,t,e){return n==="start"?t:n==="end"?e:n}function jC(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Ba extends an{parsePrimitiveData(t,e,s,r){return _m(t,e,s,r)}parseArrayData(t,e,s,r){return _m(t,e,s,r)}parseObjectData(t,e,s,r){const{iScale:i,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=i.axis==="x"?a:c,u=o.axis==="x"?a:c,h=[];let f,m,g,v;for(f=s,m=s+r;f<m;++f)v=e[f],g={},g[i.axis]=i.parse(ws(v,l),f),h.push(zv(ws(v,u),g,o,f));return h}updateRangeFromParsed(t,e,s,r){super.updateRangeFromParsed(t,e,s,r);const i=s._custom;i&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:r}=e,i=this.getParsed(t),o=i._custom,a=Yl(o)?"["+o.start+", "+o.end+"]":""+r.getLabelForValue(i[r.axis]);return{label:""+s.getLabelForValue(i[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,r){const i=r==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),u=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,r);for(let m=e;m<e+s;m++){const g=this.getParsed(m),v=i||ct(g[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),y=this._calculateBarIndexPixels(m,u),k=(g._stacks||{})[a.axis],T={horizontal:l,base:v.base,enableBorderRadius:!k||Yl(g._custom)||o===k._top||o===k._bottom,x:l?v.head:y.center,y:l?y.center:v.head,height:l?y.size:Math.abs(v.size),width:l?Math.abs(v.size):y.size};f&&(T.options=h||this.resolveDataElementOptions(m,t[m].active?"active":r));const A=T.options||t[m].options;BC(T,A,k,o),jC(T,A,u.ratio),this.updateElement(t[m],m,T,r)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,r=s.getMatchingVisibleMetas(this._type).filter(u=>u.controller.options.grouped),i=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],l=u=>{const h=u._parsed.find(m=>m[s.axis]===c),f=h&&h[u.vScale.axis];if(ct(f)||isNaN(f))return!0};for(const u of r)if(!(e!==void 0&&l(u))&&((i===!1||o.indexOf(u.stack)===-1||i===void 0&&u.stack===void 0)&&o.push(u.stack),u.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[rt(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const r=this._getStacks(t,s),i=e!==void 0?r.indexOf(e):-1;return i===-1?r.length-1:i}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,r=[];let i,o;for(i=0,o=e.data.length;i<o;++i)r.push(s.getPixelForValue(this.getParsed(i)[s.axis],i));const a=t.barThickness;return{min:a||OC(e),pixels:r,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:r},options:{base:i,minBarLength:o}}=this,a=i||0,c=this.getParsed(t),l=c._custom,u=Yl(l);let h=c[e.axis],f=0,m=s?this.applyStack(e,c,s):h,g,v;m!==h&&(f=m-h,m=h),u&&(h=l.barStart,m=l.barEnd-l.barStart,h!==0&&En(h)!==En(l.barEnd)&&(f=0),f+=h);const y=!ct(i)&&!u?i:f;let k=e.getPixelForValue(y);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(f+m):g=k,v=g-k,Math.abs(v)<o){v=FC(v,e,a)*o,h===a&&(k-=v/2);const T=e.getPixelForDecimal(0),A=e.getPixelForDecimal(1),P=Math.min(T,A),R=Math.max(T,A);k=Math.max(Math.min(k,R),P),g=k+v,s&&!u&&(c._stacks[e.axis]._visualValues[r]=e.getValueForPixel(g)-e.getValueForPixel(k))}if(k===e.getPixelForValue(a)){const T=En(v)*e.getLineWidthForValue(a)/2;k+=T,v-=T}return{size:v,base:k,head:g,center:g+v/2}}_calculateBarIndexPixels(t,e){const s=e.scale,r=this.options,i=r.skipNull,o=rt(r.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const u=i?this._getStackCount(t):e.stackCount,h=r.barThickness==="flex"?LC(t,e,r,u*l):NC(t,e,r,u*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(rt(f,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,i?t:void 0)+m;a=h.start+h.chunk*g+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,r=s.length;let i=0;for(;i<r;++i)this.getParsed(i)[e.axis]!==null&&!s[i].hidden&&s[i].draw(this._ctx)}}L(Ba,"id","bar"),L(Ba,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),L(Ba,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Ua extends an{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,r){const i=super.parsePrimitiveData(t,e,s,r);for(let o=0;o<i.length;o++)i[o]._custom=this.resolveDataElementOptions(o+s).radius;return i}parseArrayData(t,e,s,r){const i=super.parseArrayData(t,e,s,r);for(let o=0;o<i.length;o++){const a=e[s+o];i[o]._custom=rt(a[2],this.resolveDataElementOptions(o+s).radius)}return i}parseObjectData(t,e,s,r){const i=super.parseObjectData(t,e,s,r);for(let o=0;o<i.length;o++){const a=e[s+o];i[o]._custom=rt(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return i}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:i}=e,o=this.getParsed(t),a=r.getLabelForValue(o.x),c=i.getLabelForValue(o.y),l=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,r),u=o.axis,h=a.axis;for(let f=e;f<e+s;f++){const m=t[f],g=!i&&this.getParsed(f),v={},y=v[u]=i?o.getPixelForDecimal(.5):o.getPixelForValue(g[u]),k=v[h]=i?a.getBasePixel():a.getPixelForValue(g[h]);v.skip=isNaN(y)||isNaN(k),l&&(v.options=c||this.resolveDataElementOptions(f,m.active?"active":r),i&&(v.options.radius=0)),this.updateElement(m,f,v,r)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let r=super.resolveDataElementOptions(t,e);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const i=r.radius;return e!=="active"&&(r.radius=0),r.radius+=rt(s&&s._custom,i),r}}L(Ua,"id","bubble"),L(Ua,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),L(Ua,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function zC(n,t,e){let s=1,r=1,i=0,o=0;if(t<Ft){const a=n,c=a+t,l=Math.cos(a),u=Math.sin(a),h=Math.cos(c),f=Math.sin(c),m=(A,P,R)=>_o(A,a,c,!0)?1:Math.max(P,P*e,R,R*e),g=(A,P,R)=>_o(A,a,c,!0)?-1:Math.min(P,P*e,R,R*e),v=m(0,l,h),y=m(ne,u,f),k=g(xt,l,h),T=g(xt+ne,u,f);s=(v-k)/2,r=(y-T)/2,i=-(v+k)/2,o=-(y+T)/2}return{ratioX:s,ratioY:r,offsetX:i,offsetY:o}}class qs extends an{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=s;else{let i=c=>+s[c];if(ut(s[t])){const{key:c="value"}=this._parsing;i=l=>+ws(s[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)r._parsed[o]=i(o)}}_getRotation(){return on(this.options.rotation-90)}_getCircumference(){return on(this.options.circumference)}_getRotationExtents(){let t=Ft,e=-Ft;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const r=this.chart.getDatasetMeta(s).controller,i=r._getRotation(),o=r._getCircumference();t=Math.min(t,i),e=Math.max(e,i+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,r=this._cachedMeta,i=r.data,o=this.getMaxBorderWidth()+this.getMaxOffset(i)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(e1(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:u,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:m,offsetX:g,offsetY:v}=zC(h,u,c),y=(s.width-o)/f,k=(s.height-o)/m,T=Math.max(Math.min(y,k)/2,0),A=gv(this.options.radius,T),P=Math.max(A*c,0),R=(A-P)/this._getVisibleDatasetWeightTotal();this.offsetX=g*A,this.offsetY=v*A,r.total=this.calculateTotal(),this.outerRadius=A-R*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-R*l,0),this.updateElements(i,0,i.length,t)}_circumference(t,e){const s=this.options,r=this._cachedMeta,i=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||r._parsed[t]===null||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*i/Ft)}updateElements(t,e,s,r){const i=r==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,u=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=i&&l.animateScale,m=f?0:this.innerRadius,g=f?0:this.outerRadius,{sharedOptions:v,includeOptions:y}=this._getSharedOptions(e,r);let k=this._getRotation(),T;for(T=0;T<e;++T)k+=this._circumference(T,i);for(T=e;T<e+s;++T){const A=this._circumference(T,i),P=t[T],R={x:u+this.offsetX,y:h+this.offsetY,startAngle:k,endAngle:k+A,circumference:A,outerRadius:g,innerRadius:m};y&&(R.options=v||this.resolveDataElementOptions(T,P.active?"active":r)),k+=A,this.updateElement(P,T,R,r)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,r;for(r=0;r<e.length;r++){const i=t._parsed[r];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(r)&&!e[r].hidden&&(s+=Math.abs(i))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Ft*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,r=s.data.labels||[],i=Uo(e._parsed[t],s.options.locale);return{label:r[t]||"",value:i}}getMaxBorderWidth(t){let e=0;const s=this.chart;let r,i,o,a,c;if(!t){for(r=0,i=s.data.datasets.length;r<i;++r)if(s.isDatasetVisible(r)){o=s.getDatasetMeta(r),t=o.data,a=o.controller;break}}if(!t)return 0;for(r=0,i=t.length;r<i;++r)c=a.resolveDataElementOptions(r),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,r=t.length;s<r;++s){const i=this.resolveDataElementOptions(s);e=Math.max(e,i.offset||0,i.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(rt(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}L(qs,"id","doughnut"),L(qs,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),L(qs,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),L(qs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:r,color:i,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:i,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:r,pointStyle:s,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class ja extends an{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:r=[],_dataset:i}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=Tv(e,r,o);this._drawStart=a,this._drawCount=c,Iv(e)&&(a=0,c=r.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!i._decimated,s.points=r;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:l},t),this.updateElements(r,a,c,t)}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(e,r),f=o.axis,m=a.axis,{spanGaps:g,segment:v}=this.options,y=Qr(g)?g:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||i||r==="none",T=e+s,A=t.length;let P=e>0&&this.getParsed(e-1);for(let R=0;R<A;++R){const M=t[R],w=k?M:{};if(R<e||R>=T){w.skip=!0;continue}const b=this.getParsed(R),x=ct(b[m]),S=w[f]=o.getPixelForValue(b[f],R),I=w[m]=i||x?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[m],R);w.skip=isNaN(S)||isNaN(I)||x,w.stop=R>0&&Math.abs(b[f]-P[f])>y,v&&(w.parsed=b,w.raw=l.data[R]),h&&(w.options=u||this.resolveDataElementOptions(R,M.active?"active":r)),k||this.updateElement(M,R,w,r),P=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,r=t.data||[];if(!r.length)return s;const i=r[0].size(this.resolveDataElementOptions(0)),o=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(s,i,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}L(ja,"id","line"),L(ja,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),L(ja,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class to extends an{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,r=s.data.labels||[],i=Uo(e._parsed[t].r,s.options.locale);return{label:r[t]||"",value:i}}parseObjectData(t,e,s,r){return Mv.bind(this)(t,e,s,r)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,r)=>{const i=this.getParsed(r).r;!isNaN(i)&&this.chart.getDataVisibility(r)&&(i<e.min&&(e.min=i),i>e.max&&(e.max=i))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,r=Math.min(e.right-e.left,e.bottom-e.top),i=Math.max(r/2,0),o=Math.max(s.cutoutPercentage?i/100*s.cutoutPercentage:1,0),a=(i-o)/t.getVisibleDatasetCount();this.outerRadius=i-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,r){const i=r==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,u=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*xt;let m=f,g;const v=360/this.countVisibleElements();for(g=0;g<e;++g)m+=this._computeAngle(g,r,v);for(g=e;g<e+s;g++){const y=t[g];let k=m,T=m+this._computeAngle(g,r,v),A=o.getDataVisibility(g)?l.getDistanceFromCenterForValue(this.getParsed(g).r):0;m=T,i&&(c.animateScale&&(A=0),c.animateRotate&&(k=T=f));const P={x:u,y:h,innerRadius:0,outerRadius:A,startAngle:k,endAngle:T,options:this.resolveDataElementOptions(g,y.active?"active":r)};this.updateElement(y,g,P,r)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?on(this.resolveDataElementOptions(t,e).angle||s):0}}L(to,"id","polarArea"),L(to,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),L(to,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:r}}=t.legend.options;return e.labels.map((i,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:i,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:r,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Fd extends qs{}L(Fd,"id","pie"),L(Fd,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class za extends an{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,r){return Mv.bind(this)(t,e,s,r)}update(t){const e=this._cachedMeta,s=e.dataset,r=e.data||[],i=e.iScale.getLabels();if(s.points=r,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:i.length===r.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(r,0,r.length,t)}updateElements(t,e,s,r){const i=this._cachedMeta.rScale,o=r==="reset";for(let a=e;a<e+s;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":r),u=i.getPointPositionForValue(a,this.getParsed(a).r),h=o?i.xCenter:u.x,f=o?i.yCenter:u.y,m={x:h,y:f,angle:u.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,m,r)}}}L(za,"id","radar"),L(za,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),L(za,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ha extends an{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:i}=e,o=this.getParsed(t),a=r.getLabelForValue(o.x),c=i.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,r=this.chart._animationsDisabled;let{start:i,count:o}=Tv(e,s,r);if(this._drawStart=i,this._drawCount=o,Iv(e)&&(i=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!r,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,i,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,u=this.resolveDataElementOptions(e,r),h=this.getSharedOptions(u),f=this.includeOptions(r,h),m=o.axis,g=a.axis,{spanGaps:v,segment:y}=this.options,k=Qr(v)?v:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||i||r==="none";let A=e>0&&this.getParsed(e-1);for(let P=e;P<e+s;++P){const R=t[P],M=this.getParsed(P),w=T?R:{},b=ct(M[g]),x=w[m]=o.getPixelForValue(M[m],P),S=w[g]=i||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,M,c):M[g],P);w.skip=isNaN(x)||isNaN(S)||b,w.stop=P>0&&Math.abs(M[m]-A[m])>k,y&&(w.parsed=M,w.raw=l.data[P]),f&&(w.options=h||this.resolveDataElementOptions(P,R.active?"active":r)),T||this.updateElement(R,P,w,r),A=M}this.updateSharedOptions(h,r,u)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,r=s.options&&s.options.borderWidth||0;if(!e.length)return r;const i=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(r,i,o)/2}}L(Ha,"id","scatter"),L(Ha,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),L(Ha,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var HC=Object.freeze({__proto__:null,BarController:Ba,BubbleController:Ua,DoughnutController:qs,LineController:ja,PieController:Fd,PolarAreaController:to,RadarController:za,ScatterController:Ha});function Ns(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class fh{constructor(t){L(this,"options");this.options=t||{}}static override(t){Object.assign(fh.prototype,t)}init(){}formats(){return Ns()}parse(){return Ns()}format(){return Ns()}add(){return Ns()}diff(){return Ns()}startOf(){return Ns()}endOf(){return Ns()}}var Hv={_date:fh};function qC(n,t,e,s){const{controller:r,data:i,_sorted:o}=n,a=r._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&i.length){const l=a._reversePixels?p1:Bn;if(s){if(r._sharedOptions){const u=i[0],h=typeof u.getRange=="function"&&u.getRange(t);if(h){const f=l(i,t,e-h),m=l(i,t,e+h);return{lo:f.lo,hi:m.hi}}}}else{const u=l(i,t,e);if(c){const{vScale:h}=r._cachedMeta,{_parsed:f}=n,m=f.slice(0,u.lo+1).reverse().findIndex(v=>!ct(v[h.axis]));u.lo-=Math.max(0,m);const g=f.slice(u.hi).findIndex(v=>!ct(v[h.axis]));u.hi+=Math.max(0,g)}return u}}return{lo:0,hi:i.length-1}}function ol(n,t,e,s,r){const i=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=i.length;a<c;++a){const{index:l,data:u}=i[a],{lo:h,hi:f}=qC(i[a],t,o,r);for(let m=h;m<=f;++m){const g=u[m];g.skip||s(g,l,m)}}}function WC(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,r){const i=t?Math.abs(s.x-r.x):0,o=e?Math.abs(s.y-r.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))}}function Kl(n,t,e,s,r){const i=[];return!r&&!n.isPointInArea(t)||ol(n,e,t,function(a,c,l){!r&&!Un(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&i.push({element:a,datasetIndex:c,index:l})},!0),i}function GC(n,t,e,s){let r=[];function i(o,a,c){const{startAngle:l,endAngle:u}=o.getProps(["startAngle","endAngle"],s),{angle:h}=vv(o,{x:t.x,y:t.y});_o(h,l,u)&&r.push({element:o,datasetIndex:a,index:c})}return ol(n,e,t,i),r}function YC(n,t,e,s,r,i){let o=[];const a=WC(e);let c=Number.POSITIVE_INFINITY;function l(u,h,f){const m=u.inRange(t.x,t.y,r);if(s&&!m)return;const g=u.getCenterPoint(r);if(!(!!i||n.isPointInArea(g))&&!m)return;const y=a(t,g);y<c?(o=[{element:u,datasetIndex:h,index:f}],c=y):y===c&&o.push({element:u,datasetIndex:h,index:f})}return ol(n,e,t,l),o}function Ql(n,t,e,s,r,i){return!i&&!n.isPointInArea(t)?[]:e==="r"&&!s?GC(n,t,e,r):YC(n,t,e,s,r,i)}function bm(n,t,e,s,r){const i=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return ol(n,e,t,(c,l,u)=>{c[o]&&c[o](t[e],r)&&(i.push({element:c,datasetIndex:l,index:u}),a=a||c.inRange(t.x,t.y,r))}),s&&!a?[]:i}var KC={modes:{index(n,t,e,s){const r=Bs(t,n),i=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Kl(n,r,i,s,o):Ql(n,r,i,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const u=a[0].index,h=l.data[u];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:u})}),c):[]},dataset(n,t,e,s){const r=Bs(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Kl(n,r,i,s,o):Ql(n,r,i,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let u=0;u<l.length;++u)a.push({element:l[u],datasetIndex:c,index:u})}return a},point(n,t,e,s){const r=Bs(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;return Kl(n,r,i,s,o)},nearest(n,t,e,s){const r=Bs(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;return Ql(n,r,i,e.intersect,s,o)},x(n,t,e,s){const r=Bs(t,n);return bm(n,r,"x",e.intersect,s)},y(n,t,e,s){const r=Bs(t,n);return bm(n,r,"y",e.intersect,s)}}};const qv=["left","top","right","bottom"];function wi(n,t){return n.filter(e=>e.pos===t)}function xm(n,t){return n.filter(e=>qv.indexOf(e.pos)===-1&&e.box.axis===t)}function Ei(n,t){return n.sort((e,s)=>{const r=t?s:e,i=t?e:s;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function QC(n){const t=[];let e,s,r,i,o,a;for(e=0,s=(n||[]).length;e<s;++e)r=n[e],{position:i,options:{stack:o,stackWeight:a=1}}=r,t.push({index:e,box:r,pos:i,horizontal:r.isHorizontal(),weight:r.weight,stack:o&&i+o,stackWeight:a});return t}function XC(n){const t={};for(const e of n){const{stack:s,pos:r,stackWeight:i}=e;if(!s||!qv.includes(r))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=i}return t}function JC(n,t){const e=XC(n),{vBoxMaxWidth:s,hBoxMaxHeight:r}=t;let i,o,a;for(i=0,o=n.length;i<o;++i){a=n[i];const{fullSize:c}=a.box,l=e[a.stack],u=l&&a.stackWeight/l.weight;a.horizontal?(a.width=u?u*s:c&&t.availableWidth,a.height=r):(a.width=s,a.height=u?u*r:c&&t.availableHeight)}return e}function ZC(n){const t=QC(n),e=Ei(t.filter(l=>l.box.fullSize),!0),s=Ei(wi(t,"left"),!0),r=Ei(wi(t,"right")),i=Ei(wi(t,"top"),!0),o=Ei(wi(t,"bottom")),a=xm(t,"x"),c=xm(t,"y");return{fullSize:e,leftAndTop:s.concat(i),rightAndBottom:r.concat(c).concat(o).concat(a),chartArea:wi(t,"chartArea"),vertical:s.concat(r).concat(c),horizontal:i.concat(o).concat(a)}}function wm(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function Wv(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function tP(n,t,e,s){const{pos:r,box:i}=e,o=n.maxPadding;if(!ut(r)){e.size&&(n[r]-=e.size);const h=s[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?i.height:i.width),e.size=h.size/h.count,n[r]+=e.size}i.getPadding&&Wv(o,i.getPadding());const a=Math.max(0,t.outerWidth-wm(o,n,"left","right")),c=Math.max(0,t.outerHeight-wm(o,n,"top","bottom")),l=a!==n.w,u=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:u}:{same:u,other:l}}function eP(n){const t=n.maxPadding;function e(s){const r=Math.max(t[s]-n[s],0);return n[s]+=r,r}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function nP(n,t){const e=t.maxPadding;function s(r){const i={left:0,top:0,right:0,bottom:0};return r.forEach(o=>{i[o]=Math.max(t[o],e[o])}),i}return s(n?["left","right"]:["top","bottom"])}function $i(n,t,e,s){const r=[];let i,o,a,c,l,u;for(i=0,o=n.length,l=0;i<o;++i){a=n[i],c=a.box,c.update(a.width||t.w,a.height||t.h,nP(a.horizontal,t));const{same:h,other:f}=tP(t,e,a,s);l|=h&&r.length,u=u||f,c.fullSize||r.push(a)}return l&&$i(r,t,e,s)||u}function Ea(n,t,e,s,r){n.top=e,n.left=t,n.right=t+s,n.bottom=e+r,n.width=s,n.height=r}function Em(n,t,e,s){const r=e.padding;let{x:i,y:o}=t;for(const a of n){const c=a.box,l=s[a.stack]||{placed:0,weight:1},u=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*u,f=l.size||c.height;go(l.start)&&(o=l.start),c.fullSize?Ea(c,r.left,o,e.outerWidth-r.right-r.left,f):Ea(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*u,f=l.size||c.width;go(l.start)&&(i=l.start),c.fullSize?Ea(c,i,r.top,f,e.outerHeight-r.bottom-r.top):Ea(c,i,t.top+l.placed,f,h),l.start=i,l.placed+=h,i=c.right}}t.x=i,t.y=o}var Pe={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const r=Me(n.options.layout.padding),i=Math.max(t-r.width,0),o=Math.max(e-r.height,0),a=ZC(n.boxes),c=a.vertical,l=a.horizontal;St(n.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const u=c.reduce((v,y)=>y.box.options&&y.box.options.display===!1?v:v+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:r,availableWidth:i,availableHeight:o,vBoxMaxWidth:i/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},r);Wv(f,Me(s));const m=Object.assign({maxPadding:f,w:i,h:o,x:r.left,y:r.top},r),g=JC(c.concat(l),h);$i(a.fullSize,m,h,g),$i(c,m,h,g),$i(l,m,h,g)&&$i(c,m,h,g),eP(m),Em(a.leftAndTop,m,h,g),m.x+=m.w,m.y+=m.h,Em(a.rightAndBottom,m,h,g),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},St(a.chartArea,v=>{const y=v.box;Object.assign(y,n.chartArea),y.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class Gv{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,r){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,r?Math.floor(e/r):s)}}isAttached(t){return!0}updateConfig(t){}}class sP extends Gv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const qa="$chartjs",rP={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Tm=n=>n===null||n==="";function iP(n,t){const e=n.style,s=n.getAttribute("height"),r=n.getAttribute("width");if(n[qa]={initial:{height:s,width:r,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Tm(r)){const i=am(n,"width");i!==void 0&&(n.width=i)}if(Tm(s))if(n.style.height==="")n.height=n.width/(t||2);else{const i=am(n,"height");i!==void 0&&(n.height=i)}return n}const Yv=aC?{passive:!0}:!1;function oP(n,t,e){n&&n.addEventListener(t,e,Yv)}function aP(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Yv)}function cP(n,t){const e=rP[n.type]||n.type,{x:s,y:r}=Bs(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:r!==void 0?r:null}}function bc(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function lP(n,t,e){const s=n.canvas,r=new MutationObserver(i=>{let o=!1;for(const a of i)o=o||bc(a.addedNodes,s),o=o&&!bc(a.removedNodes,s);o&&e()});return r.observe(document,{childList:!0,subtree:!0}),r}function dP(n,t,e){const s=n.canvas,r=new MutationObserver(i=>{let o=!1;for(const a of i)o=o||bc(a.removedNodes,s),o=o&&!bc(a.addedNodes,s);o&&e()});return r.observe(document,{childList:!0,subtree:!0}),r}const vo=new Map;let Im=0;function Kv(){const n=window.devicePixelRatio;n!==Im&&(Im=n,vo.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function uP(n,t){vo.size||window.addEventListener("resize",Kv),vo.set(n,t)}function hP(n){vo.delete(n),vo.size||window.removeEventListener("resize",Kv)}function fP(n,t,e){const s=n.canvas,r=s&&hh(s);if(!r)return;const i=Ev((a,c)=>{const l=r.clientWidth;e(a,c),l<r.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,u=c.contentRect.height;l===0&&u===0||i(l,u)});return o.observe(r),uP(n,i),o}function Xl(n,t,e){e&&e.disconnect(),t==="resize"&&hP(n)}function pP(n,t,e){const s=n.canvas,r=Ev(i=>{n.ctx!==null&&e(cP(i,n))},n);return oP(s,t,r),r}class mP extends Gv{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(iP(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[qa])return!1;const s=e[qa].initial;["height","width"].forEach(i=>{const o=s[i];ct(o)?e.removeAttribute(i):e.setAttribute(i,o)});const r=s.style||{};return Object.keys(r).forEach(i=>{e.style[i]=r[i]}),e.width=e.width,delete e[qa],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const r=t.$proxies||(t.$proxies={}),o={attach:lP,detach:dP,resize:fP}[e]||pP;r[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),r=s[e];if(!r)return;({attach:Xl,detach:Xl,resize:Xl}[e]||aP)(t,e,r),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,r){return oC(t,e,s,r)}isAttached(t){const e=t&&hh(t);return!!(e&&e.isConnected)}}function gP(n){return!uh()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?sP:mP}class dn{constructor(){L(this,"x");L(this,"y");L(this,"active",!1);L(this,"options");L(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Qr(this.x)&&Qr(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const r={};return t.forEach(i=>{r[i]=s[i]&&s[i].active()?s[i]._to:this[i]}),r}}L(dn,"defaults",{}),L(dn,"defaultRoutes");function _P(n,t){const e=n.options.ticks,s=yP(n),r=Math.min(e.maxTicksLimit||s,s),i=e.major.enabled?bP(t):[],o=i.length,a=i[0],c=i[o-1],l=[];if(o>r)return xP(t,l,i,o/r),l;const u=vP(i,t,r);if(o>0){let h,f;const m=o>1?Math.round((c-a)/(o-1)):null;for(Ta(t,l,u,ct(m)?0:a-m,a),h=0,f=o-1;h<f;h++)Ta(t,l,u,i[h],i[h+1]);return Ta(t,l,u,c,ct(m)?t.length:c+m),l}return Ta(t,l,u),l}function yP(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),r=n._maxLength/e;return Math.floor(Math.min(s,r))}function vP(n,t,e){const s=wP(n),r=t.length/e;if(!s)return Math.max(r,1);const i=l1(s);for(let o=0,a=i.length-1;o<a;o++){const c=i[o];if(c>r)return c}return Math.max(r,1)}function bP(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function xP(n,t,e,s){let r=0,i=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===i&&(t.push(n[o]),r++,i=e[r*s])}function Ta(n,t,e,s,r){const i=rt(s,0),o=Math.min(rt(r,n.length),n.length);let a=0,c,l,u;for(e=Math.ceil(e),r&&(c=r-s,e=c/Math.floor(c/e)),u=i;u<0;)a++,u=Math.round(i+a*e);for(l=Math.max(i,0);l<o;l++)l===u&&(t.push(n[l]),a++,u=Math.round(i+a*e))}function wP(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const EP=n=>n==="left"?"right":n==="right"?"left":n,Am=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,km=(n,t)=>Math.min(t||n,n);function Sm(n,t){const e=[],s=n.length/t,r=n.length;let i=0;for(;i<r;i+=s)e.push(n[Math.floor(i)]);return e}function TP(n,t,e){const s=n.ticks.length,r=Math.min(t,s-1),i=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(r),l;if(!(e&&(s===1?l=Math.max(c-i,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(r-1))/2,c+=r<t?l:-l,c<i-a||c>o+a)))return c}function IP(n,t){St(n,e=>{const s=e.gc,r=s.length/2;let i;if(r>t){for(i=0;i<r;++i)delete e.data[s[i]];s.splice(0,r)}})}function Ti(n){return n.drawTicks?n.tickLength:0}function Cm(n,t){if(!n.display)return 0;const e=ue(n.font,t),s=Me(n.padding);return(zt(n.text)?n.text.length:1)*e.lineHeight+s.height}function AP(n,t){return ks(n,{scale:t,type:"scale"})}function kP(n,t,e){return ks(n,{tick:e,index:t,type:"tick"})}function SP(n,t,e){let s=ih(n);return(e&&t!=="right"||!e&&t==="right")&&(s=EP(s)),s}function CP(n,t,e,s){const{top:r,left:i,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:u}=c;let h=0,f,m,g;const v=o-r,y=a-i;if(n.isHorizontal()){if(m=Ae(s,i,a),ut(e)){const k=Object.keys(e)[0],T=e[k];g=u[k].getPixelForValue(T)+v-t}else e==="center"?g=(l.bottom+l.top)/2+v-t:g=Am(n,e,t);f=a-i}else{if(ut(e)){const k=Object.keys(e)[0],T=e[k];m=u[k].getPixelForValue(T)-y+t}else e==="center"?m=(l.left+l.right)/2-y+t:m=Am(n,e,t);g=Ae(s,o,r),h=e==="left"?-ne:ne}return{titleX:m,titleY:g,maxWidth:f,rotation:h}}class mr extends dn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:r}=this;return t=We(t,Number.POSITIVE_INFINITY),e=We(e,Number.NEGATIVE_INFINITY),s=We(s,Number.POSITIVE_INFINITY),r=We(r,Number.NEGATIVE_INFINITY),{min:We(t,s),max:We(e,r),minDefined:Xt(t),maxDefined:Xt(e)}}getMinMax(t){let{min:e,max:s,minDefined:r,maxDefined:i}=this.getUserBounds(),o;if(r&&i)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),r||(e=Math.min(e,o.min)),i||(s=Math.max(s,o.max));return e=i&&e>s?s:e,s=r&&e>s?e:s,{min:We(e,We(s,e)),max:We(s,We(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Mt(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:r,grace:i,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=F1(this,i,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?Sm(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=_P(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Mt(this.options.afterUpdate,[this])}beforeSetDimensions(){Mt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Mt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Mt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Mt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,r,i;for(s=0,r=t.length;s<r;s++)i=t[s],i.label=Mt(e.callback,[i.value,s,t],this)}afterTickToLabelConversion(){Mt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Mt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=km(this.ticks.length,t.ticks.maxTicksLimit),r=e.minRotation||0,i=e.maxRotation;let o=r,a,c,l;if(!this._isVisible()||!e.display||r>=i||s<=1||!this.isHorizontal()){this.labelRotation=r;return}const u=this._getLabelSizes(),h=u.widest.width,f=u.highest.height,m=me(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),h+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-Ti(t.grid)-e.padding-Cm(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=sh(Math.min(Math.asin(me((u.highest.height+6)/a,-1,1)),Math.asin(me(c/l,-1,1))-Math.asin(me(f/l,-1,1)))),o=Math.max(r,Math.min(i,o))),this.labelRotation=o}afterCalculateLabelRotation(){Mt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Mt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:r,grid:i}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=Cm(r,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ti(i)+c):(t.height=this.maxHeight,t.width=Ti(i)+c),s.display&&this.ticks.length){const{first:l,last:u,widest:h,highest:f}=this._getLabelSizes(),m=s.padding*2,g=on(this.labelRotation),v=Math.cos(g),y=Math.sin(g);if(a){const k=s.mirror?0:y*h.width+v*f.height;t.height=Math.min(this.maxHeight,t.height+k+m)}else{const k=s.mirror?0:v*h.width+y*f.height;t.width=Math.min(this.maxWidth,t.width+k+m)}this._calculatePadding(l,u,y,v)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,r){const{ticks:{align:i,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,m=0;c?l?(f=r*t.width,m=s*e.height):(f=s*t.height,m=r*e.width):i==="start"?m=e.width:i==="end"?f=t.width:i!=="inner"&&(f=t.width/2,m=e.width/2),this.paddingLeft=Math.max((f-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((m-h+o)*this.width/(this.width-h),0)}else{let u=e.height/2,h=t.height/2;i==="start"?(u=0,h=t.height):i==="end"&&(u=e.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Mt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)ct(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=Sm(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:r,_longestTextCache:i}=this,o=[],a=[],c=Math.floor(e/km(e,s));let l=0,u=0,h,f,m,g,v,y,k,T,A,P,R;for(h=0;h<e;h+=c){if(g=t[h].label,v=this._resolveTickFontOptions(h),r.font=y=v.string,k=i[y]=i[y]||{data:{},gc:[]},T=v.lineHeight,A=P=0,!ct(g)&&!zt(g))A=yc(r,k.data,k.gc,A,g),P=T;else if(zt(g))for(f=0,m=g.length;f<m;++f)R=g[f],!ct(R)&&!zt(R)&&(A=yc(r,k.data,k.gc,A,R),P+=T);o.push(A),a.push(P),l=Math.max(A,l),u=Math.max(P,u)}IP(i,e);const M=o.indexOf(l),w=a.indexOf(u),b=x=>({width:o[x]||0,height:a[x]||0});return{first:b(0),last:b(e-1),widest:b(M),highest:b(w),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return f1(this._alignToPixels?Os(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=kP(this.getContext(),t,s))}return this.$context||(this.$context=AP(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=on(this.labelRotation),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e)),i=this._getLabelSizes(),o=t.autoSkipPadding||0,a=i?i.widest.width+o:0,c=i?i.highest.height+o:0;return this.isHorizontal()?c*s>a*r?a/s:c/r:c*r<a*s?c/s:a/r}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,r=this.options,{grid:i,position:o,border:a}=r,c=i.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=Ti(i),m=[],g=a.setContext(this.getContext()),v=g.display?g.width:0,y=v/2,k=function(W){return Os(s,W,v)};let T,A,P,R,M,w,b,x,S,I,D,C;if(o==="top")T=k(this.bottom),w=this.bottom-f,x=T-y,I=k(t.top)+y,C=t.bottom;else if(o==="bottom")T=k(this.top),I=t.top,C=k(t.bottom)-y,w=T+y,x=this.top+f;else if(o==="left")T=k(this.right),M=this.right-f,b=T-y,S=k(t.left)+y,D=t.right;else if(o==="right")T=k(this.left),S=t.left,D=k(t.right)-y,M=T+y,b=this.left+f;else if(e==="x"){if(o==="center")T=k((t.top+t.bottom)/2+.5);else if(ut(o)){const W=Object.keys(o)[0],N=o[W];T=k(this.chart.scales[W].getPixelForValue(N))}I=t.top,C=t.bottom,w=T+y,x=w+f}else if(e==="y"){if(o==="center")T=k((t.left+t.right)/2);else if(ut(o)){const W=Object.keys(o)[0],N=o[W];T=k(this.chart.scales[W].getPixelForValue(N))}M=T-y,b=M-f,S=t.left,D=t.right}const J=rt(r.ticks.maxTicksLimit,h),j=Math.max(1,Math.ceil(h/J));for(A=0;A<h;A+=j){const W=this.getContext(A),N=i.setContext(W),U=a.setContext(W),q=N.lineWidth,nt=N.color,lt=U.dash||[],at=U.dashOffset,Z=N.tickWidth,ft=N.tickColor,Tt=N.tickBorderDash||[],Ot=N.tickBorderDashOffset;P=TP(this,A,c),P!==void 0&&(R=Os(s,P,q),l?M=b=S=D=R:w=x=I=C=R,m.push({tx1:M,ty1:w,tx2:b,ty2:x,x1:S,y1:I,x2:D,y2:C,width:q,color:nt,borderDash:lt,borderDashOffset:at,tickWidth:Z,tickColor:ft,tickBorderDash:Tt,tickBorderDashOffset:Ot}))}return this._ticksLength=h,this._borderValue=T,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:r,ticks:i}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:u,mirror:h}=i,f=Ti(s.grid),m=f+u,g=h?-u:m,v=-on(this.labelRotation),y=[];let k,T,A,P,R,M,w,b,x,S,I,D,C="middle";if(r==="top")M=this.bottom-g,w=this._getXAxisLabelAlignment();else if(r==="bottom")M=this.top+g,w=this._getXAxisLabelAlignment();else if(r==="left"){const j=this._getYAxisLabelAlignment(f);w=j.textAlign,R=j.x}else if(r==="right"){const j=this._getYAxisLabelAlignment(f);w=j.textAlign,R=j.x}else if(e==="x"){if(r==="center")M=(t.top+t.bottom)/2+m;else if(ut(r)){const j=Object.keys(r)[0],W=r[j];M=this.chart.scales[j].getPixelForValue(W)+m}w=this._getXAxisLabelAlignment()}else if(e==="y"){if(r==="center")R=(t.left+t.right)/2-m;else if(ut(r)){const j=Object.keys(r)[0],W=r[j];R=this.chart.scales[j].getPixelForValue(W)}w=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?C="top":c==="end"&&(C="bottom"));const J=this._getLabelSizes();for(k=0,T=a.length;k<T;++k){A=a[k],P=A.label;const j=i.setContext(this.getContext(k));b=this.getPixelForTick(k)+i.labelOffset,x=this._resolveTickFontOptions(k),S=x.lineHeight,I=zt(P)?P.length:1;const W=I/2,N=j.color,U=j.textStrokeColor,q=j.textStrokeWidth;let nt=w;o?(R=b,w==="inner"&&(k===T-1?nt=this.options.reverse?"left":"right":k===0?nt=this.options.reverse?"right":"left":nt="center"),r==="top"?l==="near"||v!==0?D=-I*S+S/2:l==="center"?D=-J.highest.height/2-W*S+S:D=-J.highest.height+S/2:l==="near"||v!==0?D=S/2:l==="center"?D=J.highest.height/2-W*S:D=J.highest.height-I*S,h&&(D*=-1),v!==0&&!j.showLabelBackdrop&&(R+=S/2*Math.sin(v))):(M=b,D=(1-I)*S/2);let lt;if(j.showLabelBackdrop){const at=Me(j.backdropPadding),Z=J.heights[k],ft=J.widths[k];let Tt=D-at.top,Ot=0-at.left;switch(C){case"middle":Tt-=Z/2;break;case"bottom":Tt-=Z;break}switch(w){case"center":Ot-=ft/2;break;case"right":Ot-=ft;break;case"inner":k===T-1?Ot-=ft:k>0&&(Ot-=ft/2);break}lt={left:Ot,top:Tt,width:ft+at.width,height:Z+at.height,color:j.backdropColor}}y.push({label:P,font:x,textOffset:D,options:{rotation:v,color:N,strokeColor:U,strokeWidth:q,textAlign:nt,textBaseline:C,translation:[R,M],backdrop:lt}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-on(this.labelRotation))return t==="top"?"left":"right";let r="center";return e.align==="start"?r="left":e.align==="end"?r="right":e.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:r,padding:i}}=this.options,o=this._getLabelSizes(),a=t+i,c=o.widest.width;let l,u;return e==="left"?r?(u=this.right+i,s==="near"?l="left":s==="center"?(l="center",u+=c/2):(l="right",u+=c)):(u=this.right-a,s==="near"?l="right":s==="center"?(l="center",u-=c/2):(l="left",u=this.left)):e==="right"?r?(u=this.left+i,s==="near"?l="right":s==="center"?(l="center",u-=c/2):(l="left",u-=c)):(u=this.left+a,s==="near"?l="left":s==="center"?(l="center",u+=c/2):(l="right",u=this.right)):l="right",{textAlign:l,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:r,width:i,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,r,i,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const r=this.ticks.findIndex(i=>i.value===t);return r>=0?e.setContext(this.getContext(r)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let i,o;const a=(c,l,u)=>{!u.width||!u.color||(s.save(),s.lineWidth=u.width,s.strokeStyle=u.color,s.setLineDash(u.borderDash||[]),s.lineDashOffset=u.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(l.x,l.y),s.stroke(),s.restore())};if(e.display)for(i=0,o=r.length;i<o;++i){const c=r[i];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:r}}=this,i=s.setContext(this.getContext()),o=s.display?i.width:0;if(!o)return;const a=r.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,u,h,f;this.isHorizontal()?(l=Os(t,this.left,o)-o/2,u=Os(t,this.right,a)+a/2,h=f=c):(h=Os(t,this.top,o)-o/2,f=Os(t,this.bottom,a)+a/2,l=u=c),e.save(),e.lineWidth=i.width,e.strokeStyle=i.color,e.beginPath(),e.moveTo(l,h),e.lineTo(u,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,r=this._computeLabelArea();r&&sl(s,r);const i=this.getLabelItems(t);for(const o of i){const a=o.options,c=o.font,l=o.label,u=o.textOffset;lr(s,l,0,u,c,a)}r&&rl(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:r}}=this;if(!s.display)return;const i=ue(s.font),o=Me(s.padding),a=s.align;let c=i.lineHeight/2;e==="bottom"||e==="center"||ut(e)?(c+=o.bottom,zt(s.text)&&(c+=i.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:l,titleY:u,maxWidth:h,rotation:f}=CP(this,c,e,a);lr(t,s.text,0,0,i,{color:s.color,maxWidth:h,rotation:f,textAlign:SP(a,e,r),textBaseline:"middle",translation:[l,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=rt(t.grid&&t.grid.z,-1),r=rt(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==mr.prototype.draw?[{z:e,draw:i=>{this.draw(i)}}]:[{z:s,draw:i=>{this.drawBackground(),this.drawGrid(i),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:e,draw:i=>{this.drawLabels(i)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",r=[];let i,o;for(i=0,o=e.length;i<o;++i){const a=e[i];a[s]===this.id&&(!t||a.type===t)&&r.push(a)}return r}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return ue(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Ia{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;DP(e)&&(s=this.register(e));const r=this.items,i=t.id,o=this.scope+"."+i;if(!i)throw new Error("class does not have id: "+t);return i in r||(r[i]=t,PP(t,o,s),this.override&&qt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,r=this.scope;s in e&&delete e[s],r&&s in qt[r]&&(delete qt[r][s],this.override&&delete cr[s])}}function PP(n,t,e){const s=mo(Object.create(null),[e?qt.get(e):{},qt.get(t),n.defaults]);qt.set(t,s),n.defaultRoutes&&RP(t,n.defaultRoutes),n.descriptors&&qt.describe(t,n.descriptors)}function RP(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),r=s.pop(),i=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");qt.route(i,r,c,a)})}function DP(n){return"id"in n&&"defaults"in n}class MP{constructor(){this.controllers=new Ia(an,"datasets",!0),this.elements=new Ia(dn,"elements"),this.plugins=new Ia(Object,"plugins"),this.scales=new Ia(mr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(r=>{const i=s||this._getRegistryForType(r);s||i.isForType(r)||i===this.plugins&&r.id?this._exec(t,i,r):St(r,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const r=nh(t);Mt(s["before"+r],[],s),e[t](s),Mt(s["after"+r],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const r=e.get(t);if(r===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return r}}var pn=new MP;class OP{constructor(){this._init=void 0}notify(t,e,s,r){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const i=r?this._descriptors(t).filter(r):this._descriptors(t),o=this._notify(i,t,e,s);return e==="afterDestroy"&&(this._notify(i,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,r){r=r||{};for(const i of t){const o=i.plugin,a=o[s],c=[e,r,i.options];if(Mt(a,c,o)===!1&&r.cancelable)return!1}return!0}invalidate(){ct(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,r=rt(s.options&&s.options.plugins,{}),i=NP(s);return r===!1&&!e?[]:VP(t,i,r,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,r=(i,o)=>i.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(r(e,s),t,"stop"),this._notify(r(s,e),t,"start")}}function NP(n){const t={},e=[],s=Object.keys(pn.plugins.items);for(let i=0;i<s.length;i++)e.push(pn.getPlugin(s[i]));const r=n.plugins||[];for(let i=0;i<r.length;i++){const o=r[i];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function LP(n,t){return!t&&n===!1?null:n===!0?{}:n}function VP(n,{plugins:t,localIds:e},s,r){const i=[],o=n.getContext();for(const a of t){const c=a.id,l=LP(s[c],r);l!==null&&i.push({plugin:a,options:FP(n.config,{plugin:a,local:e[c]},l,o)})}return i}function FP(n,{plugin:t,local:e},s,r){const i=n.pluginScopeKeys(t),o=n.getOptionScopes(s,i);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function $d(n,t){const e=qt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function $P(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function BP(n,t){return n===t?"_index_":"_value_"}function Pm(n){if(n==="x"||n==="y"||n==="r")return n}function UP(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Bd(n,...t){if(Pm(n))return n;for(const e of t){const s=e.axis||UP(e.position)||n.length>1&&Pm(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function Rm(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function jP(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return Rm(n,"x",e[0])||Rm(n,"y",e[0])}return{}}function zP(n,t){const e=cr[n.type]||{scales:{}},s=t.scales||{},r=$d(n.type,t),i=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!ut(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Bd(o,a,jP(o,n),qt.scales[a.type]),l=BP(c,r),u=e.scales||{};i[o]=Qi(Object.create(null),[{axis:c},a,u[c],u[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||$d(a,t),u=(cr[a]||{}).scales||{};Object.keys(u).forEach(h=>{const f=$P(h,c),m=o[f+"AxisID"]||f;i[m]=i[m]||Object.create(null),Qi(i[m],[{axis:f},s[m],u[h]])})}),Object.keys(i).forEach(o=>{const a=i[o];Qi(a,[qt.scales[a.type],qt.scale])}),i}function Qv(n){const t=n.options||(n.options={});t.plugins=rt(t.plugins,{}),t.scales=zP(n,t)}function Xv(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function HP(n){return n=n||{},n.data=Xv(n.data),Qv(n),n}const Dm=new Map,Jv=new Set;function Aa(n,t){let e=Dm.get(n);return e||(e=t(),Dm.set(n,e),Jv.add(e)),e}const Ii=(n,t,e)=>{const s=ws(t,e);s!==void 0&&n.add(s)};class qP{constructor(t){this._config=HP(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Xv(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Qv(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Aa(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Aa(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Aa(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return Aa(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let r=s.get(t);return(!r||e)&&(r=new Map,s.set(t,r)),r}getOptionScopes(t,e,s){const{options:r,type:i}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(u=>{t&&(c.add(t),u.forEach(h=>Ii(c,t,h))),u.forEach(h=>Ii(c,r,h)),u.forEach(h=>Ii(c,cr[i]||{},h)),u.forEach(h=>Ii(c,qt,h)),u.forEach(h=>Ii(c,Ld,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),Jv.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,cr[e]||{},qt.datasets[e]||{},{type:e},qt,Ld]}resolveNamedOptions(t,e,s,r=[""]){const i={$shared:!0},{resolver:o,subPrefixes:a}=Mm(this._resolverCache,t,r);let c=o;if(GP(o,e)){i.$shared=!1,s=Es(s)?s():s;const l=this.createResolver(t,s,a);c=Xr(o,s,l)}for(const l of e)i[l]=c[l];return i}createResolver(t,e,s=[""],r){const{resolver:i}=Mm(this._resolverCache,t,s);return ut(e)?Xr(i,e,void 0,r):i}}function Mm(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const r=e.join();let i=s.get(r);return i||(i={resolver:ch(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(r,i)),i}const WP=n=>ut(n)&&Object.getOwnPropertyNames(n).some(t=>Es(n[t]));function GP(n,t){const{isScriptable:e,isIndexable:s}=Cv(n);for(const r of t){const i=e(r),o=s(r),a=(o||i)&&n[r];if(i&&(Es(a)||WP(a))||o&&zt(a))return!0}return!1}var YP="4.5.1";const KP=["top","bottom","left","right","chartArea"];function Om(n,t){return n==="top"||n==="bottom"||KP.indexOf(n)===-1&&t==="x"}function Nm(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function Lm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),Mt(e&&e.onComplete,[n],t)}function QP(n){const t=n.chart,e=t.options.animation;Mt(e&&e.onProgress,[n],t)}function Zv(n){return uh()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Wa={},Vm=n=>{const t=Zv(n);return Object.values(Wa).filter(e=>e.canvas===t).pop()};function XP(n,t,e){const s=Object.keys(n);for(const r of s){const i=+r;if(i>=t){const o=n[r];delete n[r],(e>0||i>t)&&(n[i+e]=o)}}}function JP(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class gt{static register(...t){pn.add(...t),Fm()}static unregister(...t){pn.remove(...t),Fm()}constructor(t,e){const s=this.config=new qP(e),r=Zv(t),i=Vm(r);if(i)throw new Error("Canvas is already in use. Chart with ID '"+i.id+"' must be destroyed before the canvas with ID '"+i.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||gP(r)),this.platform.updateConfig(s);const a=this.platform.acquireContext(r,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,u=c&&c.width;if(this.id=t1(),this.ctx=a,this.canvas=c,this.width=u,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new OP,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=_1(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Wa[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}Rn.listen(this,"complete",Lm),Rn.listen(this,"progress",QP),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:r,_aspectRatio:i}=this;return ct(t)?e&&i?i:r?s/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return pn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():om(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return sm(this.canvas,this.ctx),this}stop(){return Rn.stop(this),this}resize(t,e){Rn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,r=this.canvas,i=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(r,t,e,i),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,om(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Mt(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};St(e,(s,r)=>{s.id=r})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,r=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let i=[];e&&(i=i.concat(Object.keys(e).map(o=>{const a=e[o],c=Bd(o,a),l=c==="r",u=c==="x";return{options:a,dposition:l?"chartArea":u?"bottom":"left",dtype:l?"radialLinear":u?"category":"linear"}}))),St(i,o=>{const a=o.options,c=a.id,l=Bd(c,a),u=rt(a.type,o.dtype);(a.position===void 0||Om(a.position,l)!==Om(o.dposition))&&(a.position=o.dposition),r[c]=!0;let h=null;if(c in s&&s[c].type===u)h=s[c];else{const f=pn.getScale(u);h=new f({id:c,type:u,ctx:this.ctx,chart:this}),s[h.id]=h}h.init(a,t)}),St(r,(o,a)=>{o||delete s[a]}),St(s,o=>{Pe.configure(this,o,o.options),Pe.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((r,i)=>r.index-i.index),s>e){for(let r=e;r<s;++r)this._destroyDatasetMeta(r);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Nm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,r)=>{e.filter(i=>i===s._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,r;for(this._removeUnreferencedMetasets(),s=0,r=e.length;s<r;s++){const i=e[s];let o=this.getDatasetMeta(s);const a=i.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=i.indexAxis||$d(a,this.options),o.order=i.order||0,o.index=s,o.label=""+i.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=pn.getController(a),{datasetElementType:l,dataElementType:u}=qt.datasets[a];Object.assign(c,{dataElementType:pn.getElement(u),datasetElementType:l&&pn.getElement(l)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){St(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const i=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,u=this.data.datasets.length;l<u;l++){const{controller:h}=this.getDatasetMeta(l),f=!r&&i.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),r||St(i,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Nm("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){St(this.scales,t=>{Pe.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Yp(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:r,count:i}of e){const o=s==="_removeElements"?-i:i;XP(t,r,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=i=>new Set(t.filter(o=>o[0]===i).map((o,a)=>a+","+o.splice(1).join(","))),r=s(0);for(let i=1;i<e;i++)if(!Yp(r,s(i)))return;return Array.from(r).map(i=>i.split(",")).map(i=>({method:i[1],start:+i[2],count:+i[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Pe.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],St(this.boxes,r=>{s&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,i)=>{r._idx=i}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,Es(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),r={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(s.controller._update(e),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Rn.has(this)?this.attached&&!Rn.running(this)&&Rn.start(this):(this.draw(),Lm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let r,i;for(r=0,i=e.length;r<i;++r){const o=e[r];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},r=Bv(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(r&&sl(e,r),t.controller.draw(),r&&rl(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Un(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,r){const i=KC.modes[e];return typeof i=="function"?i(this,t,s,r):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let r=s.filter(i=>i&&i._dataset===e).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(r)),r}getContext(){return this.$context||(this.$context=ks(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const r=s?"show":"hide",i=this.getDatasetMeta(t),o=i.controller._resolveAnimations(void 0,r);go(e)?(i.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(i,{visible:s}),this.update(a=>a.datasetIndex===t?r:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Rn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),sm(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Wa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},r=(i,o,a)=>{i.offsetX=o,i.offsetY=a,this._eventHandler(i)};St(this.options.events,i=>s(i,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},r=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},i=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{r("attach",a),this.attached=!0,this.resize(),s("resize",i),s("detach",o)};o=()=>{this.attached=!1,r("resize",i),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){St(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},St(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const r=s?"set":"remove";let i,o,a,c;for(e==="dataset"&&(i=this.getDatasetMeta(t[0].datasetIndex),i.controller["_"+r+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[r+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:i,index:o})=>{const a=this.getDatasetMeta(i);if(!a)throw new Error("No dataset found at index "+i);return{datasetIndex:i,element:a.data[o],index:o}});!mc(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const r=this.options.hover,i=(c,l)=>c.filter(u=>!l.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=i(e,t),a=s?t:i(t,e);o.length&&this.updateHoverStyle(o,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},r=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,r)===!1)return;const i=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,r),(i||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:r=[],options:i}=this,o=e,a=this._getActiveElements(t,r,s,o),c=o1(t),l=JP(t,this._lastEvent,s,c);s&&(this._lastEvent=null,Mt(i.onHover,[t,a,this],this),c&&Mt(i.onClick,[t,a,this],this));const u=!mc(a,r);return(u||e)&&(this._active=a,this._updateHoverStyles(a,r,e)),this._lastEvent=l,u}_getActiveElements(t,e,s,r){if(t.type==="mouseout")return[];if(!s)return e;const i=this.options.hover;return this.getElementsAtEventForMode(t,i.mode,i,r)}}L(gt,"defaults",qt),L(gt,"instances",Wa),L(gt,"overrides",cr),L(gt,"registry",pn),L(gt,"version",YP),L(gt,"getChart",Vm);function Fm(){return St(gt.instances,n=>n._plugins.invalidate())}function ZP(n,t,e){const{startAngle:s,x:r,y:i,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:u}=c,h=Math.min(l/o,Se(s-e));if(n.beginPath(),n.arc(r,i,o-l/2,s+h/2,e-h/2),a>0){const f=Math.min(l/a,Se(s-e));n.arc(r,i,a+l/2,e-f/2,s+f/2,!0)}else{const f=Math.min(l/2,o*Se(s-e));if(u==="round")n.arc(r,i,f,e-xt/2,s+xt/2,!0);else if(u==="bevel"){const m=2*f*f,g=-m*Math.cos(e+xt/2)+r,v=-m*Math.sin(e+xt/2)+i,y=m*Math.cos(s+xt/2)+r,k=m*Math.sin(s+xt/2)+i;n.lineTo(g,v),n.lineTo(y,k)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function tR(n,t,e){const{startAngle:s,pixelMargin:r,x:i,y:o,outerRadius:a,innerRadius:c}=t;let l=r/a;n.beginPath(),n.arc(i,o,a,s-l,e+l),c>r?(l=r/c,n.arc(i,o,c,e+l,s-l,!0)):n.arc(i,o,r,e+ne,s-ne),n.closePath(),n.clip()}function eR(n){return ah(n,["outerStart","outerEnd","innerStart","innerEnd"])}function nR(n,t,e,s){const r=eR(n.options.borderRadius),i=(e-t)/2,o=Math.min(i,s*t/2),a=c=>{const l=(e-Math.min(i,c))*s/2;return me(c,0,Math.min(i,l))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:me(r.innerStart,0,o),innerEnd:me(r.innerEnd,0,o)}}function Tr(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function xc(n,t,e,s,r,i){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:u}=t,h=Math.max(t.outerRadius+s+e-l,0),f=u>0?u+s+e+l:0;let m=0;const g=r-c;if(s){const j=u>0?u-s:0,W=h>0?h-s:0,N=(j+W)/2,U=N!==0?g*N/(N+s):g;m=(g-U)/2}const v=Math.max(.001,g*h-e/xt)/h,y=(g-v)/2,k=c+y+m,T=r-y-m,{outerStart:A,outerEnd:P,innerStart:R,innerEnd:M}=nR(t,f,h,T-k),w=h-A,b=h-P,x=k+A/w,S=T-P/b,I=f+R,D=f+M,C=k+R/I,J=T-M/D;if(n.beginPath(),i){const j=(x+S)/2;if(n.arc(o,a,h,x,j),n.arc(o,a,h,j,S),P>0){const q=Tr(b,S,o,a);n.arc(q.x,q.y,P,S,T+ne)}const W=Tr(D,T,o,a);if(n.lineTo(W.x,W.y),M>0){const q=Tr(D,J,o,a);n.arc(q.x,q.y,M,T+ne,J+Math.PI)}const N=(T-M/f+(k+R/f))/2;if(n.arc(o,a,f,T-M/f,N,!0),n.arc(o,a,f,N,k+R/f,!0),R>0){const q=Tr(I,C,o,a);n.arc(q.x,q.y,R,C+Math.PI,k-ne)}const U=Tr(w,k,o,a);if(n.lineTo(U.x,U.y),A>0){const q=Tr(w,x,o,a);n.arc(q.x,q.y,A,k-ne,x)}}else{n.moveTo(o,a);const j=Math.cos(x)*h+o,W=Math.sin(x)*h+a;n.lineTo(j,W);const N=Math.cos(S)*h+o,U=Math.sin(S)*h+a;n.lineTo(N,U)}n.closePath()}function sR(n,t,e,s,r){const{fullCircles:i,startAngle:o,circumference:a}=t;let c=t.endAngle;if(i){xc(n,t,e,s,c,r);for(let l=0;l<i;++l)n.fill();isNaN(a)||(c=o+(a%Ft||Ft))}return xc(n,t,e,s,c,r),n.fill(),c}function rR(n,t,e,s,r){const{fullCircles:i,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:u,borderDash:h,borderDashOffset:f,borderRadius:m}=c,g=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,g?(n.lineWidth=l*2,n.lineJoin=u||"round"):(n.lineWidth=l,n.lineJoin=u||"bevel");let v=t.endAngle;if(i){xc(n,t,e,s,v,r);for(let y=0;y<i;++y)n.stroke();isNaN(a)||(v=o+(a%Ft||Ft))}g&&tR(n,t,v),c.selfJoin&&v-o>=xt&&m===0&&u!=="miter"&&ZP(n,t,v),i||(xc(n,t,e,s,v,r),n.stroke())}class Bi extends dn{constructor(e){super();L(this,"circumference");L(this,"endAngle");L(this,"fullCircles");L(this,"innerRadius");L(this,"outerRadius");L(this,"pixelMargin");L(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,r){const i=this.getProps(["x","y"],r),{angle:o,distance:a}=vv(i,{x:e,y:s}),{startAngle:c,endAngle:l,innerRadius:u,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),m=(this.options.spacing+this.options.borderWidth)/2,g=rt(f,l-c),v=_o(o,c,l)&&c!==l,y=g>=Ft||v,k=$n(a,u+m,h+m);return y&&k}getCenterPoint(e){const{x:s,y:r,startAngle:i,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:u}=this.options,h=(i+o)/2,f=(a+c+u+l)/2;return{x:s+Math.cos(h)*f,y:r+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:r}=this,i=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=r>Ft?Math.floor(r/Ft):0,r===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*i,Math.sin(c)*i);const l=1-Math.sin(Math.min(xt,r||0)),u=i*l;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,sR(e,this,u,o,a),rR(e,this,u,o,a),e.restore()}}L(Bi,"id","arc"),L(Bi,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),L(Bi,"defaultRoutes",{backgroundColor:"backgroundColor"}),L(Bi,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function tb(n,t,e=t){n.lineCap=rt(e.borderCapStyle,t.borderCapStyle),n.setLineDash(rt(e.borderDash,t.borderDash)),n.lineDashOffset=rt(e.borderDashOffset,t.borderDashOffset),n.lineJoin=rt(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=rt(e.borderWidth,t.borderWidth),n.strokeStyle=rt(e.borderColor,t.borderColor)}function iR(n,t,e){n.lineTo(e.x,e.y)}function oR(n){return n.stepped?C1:n.tension||n.cubicInterpolationMode==="monotone"?P1:iR}function eb(n,t,e={}){const s=n.length,{start:r=0,end:i=s-1}=e,{start:o,end:a}=t,c=Math.max(r,o),l=Math.min(i,a),u=r<o&&i<o||r>a&&i>a;return{count:s,start:c,loop:t.loop,ilen:l<c&&!u?s+l-c:l-c}}function aR(n,t,e,s){const{points:r,options:i}=t,{count:o,start:a,loop:c,ilen:l}=eb(r,e,s),u=oR(i);let{move:h=!0,reverse:f}=s||{},m,g,v;for(m=0;m<=l;++m)g=r[(a+(f?l-m:m))%o],!g.skip&&(h?(n.moveTo(g.x,g.y),h=!1):u(n,v,g,f,i.stepped),v=g);return c&&(g=r[(a+(f?l:0))%o],u(n,v,g,f,i.stepped)),!!c}function cR(n,t,e,s){const r=t.points,{count:i,start:o,ilen:a}=eb(r,e,s),{move:c=!0,reverse:l}=s||{};let u=0,h=0,f,m,g,v,y,k;const T=P=>(o+(l?a-P:P))%i,A=()=>{v!==y&&(n.lineTo(u,y),n.lineTo(u,v),n.lineTo(u,k))};for(c&&(m=r[T(0)],n.moveTo(m.x,m.y)),f=0;f<=a;++f){if(m=r[T(f)],m.skip)continue;const P=m.x,R=m.y,M=P|0;M===g?(R<v?v=R:R>y&&(y=R),u=(h*u+P)/++h):(A(),n.lineTo(P,R),g=M,h=0,v=y=R),k=R}A()}function Ud(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?cR:aR}function lR(n){return n.stepped?cC:n.tension||n.cubicInterpolationMode==="monotone"?lC:Us}function dR(n,t,e,s){let r=t._path;r||(r=t._path=new Path2D,t.path(r,e,s)&&r.closePath()),tb(n,t.options),n.stroke(r)}function uR(n,t,e,s){const{segments:r,options:i}=t,o=Ud(t);for(const a of r)tb(n,i,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const hR=typeof Path2D=="function";function fR(n,t,e,s){hR&&!t.options.segment?dR(n,t,e,s):uR(n,t,e,s)}class hs extends dn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const r=s.spanGaps?this._loop:this._fullLoop;tC(this._points,s,t,r,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=mC(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,r=t[e],i=this.points,o=$v(this,{property:e,start:r,end:r});if(!o.length)return;const a=[],c=lR(s);let l,u;for(l=0,u=o.length;l<u;++l){const{start:h,end:f}=o[l],m=i[h],g=i[f];if(m===g){a.push(m);continue}const v=Math.abs((r-m[e])/(g[e]-m[e])),y=c(m,g,v,s.stepped);y[e]=t[e],a.push(y)}return a.length===1?a[0]:a}pathSegment(t,e,s){return Ud(this)(t,this,e,s)}path(t,e,s){const r=this.segments,i=Ud(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of r)o&=i(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,r){const i=this.options||{};(this.points||[]).length&&i.borderWidth&&(t.save(),fR(t,this,s,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}L(hs,"id","line"),L(hs,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),L(hs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),L(hs,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function $m(n,t,e,s){const r=n.options,{[e]:i}=n.getProps([e],s);return Math.abs(t-i)<r.radius+r.hitRadius}class Ga extends dn{constructor(e){super();L(this,"parsed");L(this,"skip");L(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,r){const i=this.options,{x:o,y:a}=this.getProps(["x","y"],r);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(e,s){return $m(this,e,"x",s)}inYRange(e,s){return $m(this,e,"y",s)}getCenterPoint(e){const{x:s,y:r}=this.getProps(["x","y"],e);return{x:s,y:r}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const r=s&&e.borderWidth||0;return(s+r)*2}draw(e,s){const r=this.options;this.skip||r.radius<.1||!Un(this,s,this.size(r)/2)||(e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.fillStyle=r.backgroundColor,Vd(e,r,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}L(Ga,"id","point"),L(Ga,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),L(Ga,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function nb(n,t){const{x:e,y:s,base:r,width:i,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,u,h;return n.horizontal?(h=o/2,a=Math.min(e,r),c=Math.max(e,r),l=s-h,u=s+h):(h=i/2,a=e-h,c=e+h,l=Math.min(s,r),u=Math.max(s,r)),{left:a,top:l,right:c,bottom:u}}function fs(n,t,e,s){return n?0:me(t,e,s)}function pR(n,t,e){const s=n.options.borderWidth,r=n.borderSkipped,i=Sv(s);return{t:fs(r.top,i.top,0,e),r:fs(r.right,i.right,0,t),b:fs(r.bottom,i.bottom,0,e),l:fs(r.left,i.left,0,t)}}function mR(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),r=n.options.borderRadius,i=Ys(r),o=Math.min(t,e),a=n.borderSkipped,c=s||ut(r);return{topLeft:fs(!c||a.top||a.left,i.topLeft,0,o),topRight:fs(!c||a.top||a.right,i.topRight,0,o),bottomLeft:fs(!c||a.bottom||a.left,i.bottomLeft,0,o),bottomRight:fs(!c||a.bottom||a.right,i.bottomRight,0,o)}}function gR(n){const t=nb(n),e=t.right-t.left,s=t.bottom-t.top,r=pR(n,e/2,s/2),i=mR(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:i},inner:{x:t.left+r.l,y:t.top+r.t,w:e-r.l-r.r,h:s-r.t-r.b,radius:{topLeft:Math.max(0,i.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,i.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,i.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,i.bottomRight-Math.max(r.b,r.r))}}}}function Jl(n,t,e,s){const r=t===null,i=e===null,a=n&&!(r&&i)&&nb(n,s);return a&&(r||$n(t,a.left,a.right))&&(i||$n(e,a.top,a.bottom))}function _R(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function yR(n,t){n.rect(t.x,t.y,t.w,t.h)}function Zl(n,t,e={}){const s=n.x!==e.x?-t:0,r=n.y!==e.y?-t:0,i=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-r;return{x:n.x+s,y:n.y+r,w:n.w+i,h:n.h+o,radius:n.radius}}class Ya extends dn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:r}}=this,{inner:i,outer:o}=gR(this),a=_R(o.radius)?yo:yR;t.save(),(o.w!==i.w||o.h!==i.h)&&(t.beginPath(),a(t,Zl(o,e,i)),t.clip(),a(t,Zl(i,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Zl(i,e)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,e,s){return Jl(this,t,e,s)}inXRange(t,e){return Jl(this,t,null,e)}inYRange(t,e){return Jl(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:r,horizontal:i}=this.getProps(["x","y","base","horizontal"],t);return{x:i?(e+r)/2:e,y:i?s:(s+r)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}L(Ya,"id","bar"),L(Ya,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),L(Ya,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var vR=Object.freeze({__proto__:null,ArcElement:Bi,BarElement:Ya,LineElement:hs,PointElement:Ga});const jd=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Bm=jd.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function sb(n){return jd[n%jd.length]}function rb(n){return Bm[n%Bm.length]}function bR(n,t){return n.borderColor=sb(t),n.backgroundColor=rb(t),++t}function xR(n,t){return n.backgroundColor=n.data.map(()=>sb(t++)),t}function wR(n,t){return n.backgroundColor=n.data.map(()=>rb(t++)),t}function ER(n){let t=0;return(e,s)=>{const r=n.getDatasetMeta(s).controller;r instanceof qs?t=xR(e,t):r instanceof to?t=wR(e,t):r&&(t=bR(e,t))}}function Um(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function TR(n){return n&&(n.borderColor||n.backgroundColor)}function IR(){return qt.borderColor!=="rgba(0,0,0,0.1)"||qt.backgroundColor!=="rgba(0,0,0,0.1)"}var AR={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:r}=n.config,{elements:i}=r,o=Um(s)||TR(r)||i&&Um(i)||IR();if(!e.forceOverride&&o)return;const a=ER(n);s.forEach(a)}};function kR(n,t,e,s,r){const i=r.samples||s;if(i>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(i-2);let c=0;const l=t+e-1;let u=t,h,f,m,g,v;for(o[c++]=n[u],h=0;h<i-2;h++){let y=0,k=0,T;const A=Math.floor((h+1)*a)+1+t,P=Math.min(Math.floor((h+2)*a)+1,e)+t,R=P-A;for(T=A;T<P;T++)y+=n[T].x,k+=n[T].y;y/=R,k/=R;const M=Math.floor(h*a)+1+t,w=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:x}=n[u];for(m=g=-1,T=M;T<w;T++)g=.5*Math.abs((b-y)*(n[T].y-x)-(b-n[T].x)*(k-x)),g>m&&(m=g,f=n[T],v=T);o[c++]=f,u=v}return o[c++]=n[l],o}function SR(n,t,e,s){let r=0,i=0,o,a,c,l,u,h,f,m,g,v;const y=[],k=t+e-1,T=n[t].x,P=n[k].x-T;for(o=t;o<t+e;++o){a=n[o],c=(a.x-T)/P*s,l=a.y;const R=c|0;if(R===u)l<g?(g=l,h=o):l>v&&(v=l,f=o),r=(i*r+a.x)/++i;else{const M=o-1;if(!ct(h)&&!ct(f)){const w=Math.min(h,f),b=Math.max(h,f);w!==m&&w!==M&&y.push({...n[w],x:r}),b!==m&&b!==M&&y.push({...n[b],x:r})}o>0&&M!==m&&y.push(n[M]),y.push(a),u=R,i=0,g=v=l,h=f=m=o}}return y}function ib(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function jm(n){n.data.datasets.forEach(t=>{ib(t)})}function CR(n,t){const e=t.length;let s=0,r;const{iScale:i}=n,{min:o,max:a,minDefined:c,maxDefined:l}=i.getUserBounds();return c&&(s=me(Bn(t,i.axis,o).lo,0,e-1)),l?r=me(Bn(t,i.axis,a).hi+1,s,e)-s:r=e-s,{start:s,count:r}}var PR={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){jm(n);return}const s=n.width;n.data.datasets.forEach((r,i)=>{const{_data:o,indexAxis:a}=r,c=n.getDatasetMeta(i),l=o||r.data;if(Fi([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const u=n.scales[c.xAxisID];if(u.type!=="linear"&&u.type!=="time"||n.options.parsing)return;let{start:h,count:f}=CR(c,l);const m=e.threshold||4*s;if(f<=m){ib(r);return}ct(o)&&(r._data=l,delete r.data,Object.defineProperty(r,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let g;switch(e.algorithm){case"lttb":g=kR(l,h,f,s,e);break;case"min-max":g=SR(l,h,f,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}r._decimated=g})},destroy(n){jm(n)}};function RR(n,t,e){const s=n.segments,r=n.points,i=t.points,o=[];for(const a of s){let{start:c,end:l}=a;l=al(c,l,r);const u=zd(e,r[c],r[l],a.loop);if(!t.segments){o.push({source:a,target:u,start:r[c],end:r[l]});continue}const h=$v(t,u);for(const f of h){const m=zd(e,i[f.start],i[f.end],f.loop),g=Fv(a,r,m);for(const v of g)o.push({source:v,target:f,start:{[e]:zm(u,m,"start",Math.max)},end:{[e]:zm(u,m,"end",Math.min)}})}}return o}function zd(n,t,e,s){if(s)return;let r=t[n],i=e[n];return n==="angle"&&(r=Se(r),i=Se(i)),{property:n,start:r,end:i}}function DR(n,t){const{x:e=null,y:s=null}=n||{},r=t.points,i=[];return t.segments.forEach(({start:o,end:a})=>{a=al(o,a,r);const c=r[o],l=r[a];s!==null?(i.push({x:c.x,y:s}),i.push({x:l.x,y:s})):e!==null&&(i.push({x:e,y:c.y}),i.push({x:e,y:l.y}))}),i}function al(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function zm(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function ob(n,t){let e=[],s=!1;return zt(n)?(s=!0,e=n):e=DR(n,t),e.length?new hs({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Hm(n){return n&&n.fill!==!1}function MR(n,t,e){let r=n[t].fill;const i=[t];let o;if(!e)return r;for(;r!==!1&&i.indexOf(r)===-1;){if(!Xt(r))return r;if(o=n[r],!o)return!1;if(o.visible)return r;i.push(r),r=o.fill}return!1}function OR(n,t,e){const s=FR(n);if(ut(s))return isNaN(s.value)?!1:s;let r=parseFloat(s);return Xt(r)&&Math.floor(r)===r?NR(s[0],t,r,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function NR(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function LR(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:ut(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function VR(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:ut(n)?s=n.value:s=t.getBaseValue(),s}function FR(n){const t=n.options,e=t.fill;let s=rt(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function $R(n){const{scale:t,index:e,line:s}=n,r=[],i=s.segments,o=s.points,a=BR(t,e);a.push(ob({x:null,y:t.bottom},s));for(let c=0;c<i.length;c++){const l=i[c];for(let u=l.start;u<=l.end;u++)UR(r,o[u],a)}return new hs({points:r,options:{}})}function BR(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let r=0;r<s.length;r++){const i=s[r];if(i.index===t)break;i.hidden||e.unshift(i.dataset)}return e}function UR(n,t,e){const s=[];for(let r=0;r<e.length;r++){const i=e[r],{first:o,last:a,point:c}=jR(i,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function jR(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const r=s[e],i=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<i.length;l++){const u=i[l],h=o[u.start][e],f=o[u.end][e];if($n(r,h,f)){a=r===h,c=r===f;break}}return{first:a,last:c,point:s}}class ab{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:r,y:i,radius:o}=this;return e=e||{start:0,end:Ft},t.arc(r,i,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:r}=this,i=t.angle;return{x:e+Math.cos(i)*r,y:s+Math.sin(i)*r,angle:i}}}function zR(n){const{chart:t,fill:e,line:s}=n;if(Xt(e))return HR(t,e);if(e==="stack")return $R(n);if(e==="shape")return!0;const r=qR(n);return r instanceof ab?r:ob(r,s)}function HR(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function qR(n){return(n.scale||{}).getPointPositionForValue?GR(n):WR(n)}function WR(n){const{scale:t={},fill:e}=n,s=LR(e,t);if(Xt(s)){const r=t.isHorizontal();return{x:r?s:null,y:r?null:s}}return null}function GR(n){const{scale:t,fill:e}=n,s=t.options,r=t.getLabels().length,i=s.reverse?t.max:t.min,o=VR(e,t,i),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,i);return new ab({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<r;++c)a.push(t.getPointPositionForValue(c,o));return a}function td(n,t,e){const s=zR(t),{chart:r,index:i,line:o,scale:a,axis:c}=t,l=o.options,u=l.fill,h=l.backgroundColor,{above:f=h,below:m=h}=u||{},g=r.getDatasetMeta(i),v=Bv(r,g);s&&o.points.length&&(sl(n,e),YR(n,{line:o,target:s,above:f,below:m,area:e,scale:a,axis:c,clip:v}),rl(n))}function YR(n,t){const{line:e,target:s,above:r,below:i,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let u=i;i!==r&&(l==="x"?(qm(n,s,o.top),ed(n,{line:e,target:s,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),qm(n,s,o.bottom)):l==="y"&&(Wm(n,s,o.left),ed(n,{line:e,target:s,color:i,scale:a,property:l,clip:c}),n.restore(),n.save(),Wm(n,s,o.right),u=r)),ed(n,{line:e,target:s,color:u,scale:a,property:l,clip:c}),n.restore()}function qm(n,t,e){const{segments:s,points:r}=t;let i=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,u=r[c],h=r[al(c,l,r)];i?(n.moveTo(u.x,u.y),i=!1):(n.lineTo(u.x,e),n.lineTo(u.x,u.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Wm(n,t,e){const{segments:s,points:r}=t;let i=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,u=r[c],h=r[al(c,l,r)];i?(n.moveTo(u.x,u.y),i=!1):(n.lineTo(e,u.y),n.lineTo(u.x,u.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function ed(n,t){const{line:e,target:s,property:r,color:i,scale:o,clip:a}=t,c=RR(e,s,r);for(const{source:l,target:u,start:h,end:f}of c){const{style:{backgroundColor:m=i}={}}=l,g=s!==!0;n.save(),n.fillStyle=m,KR(n,o,a,g&&zd(r,h,f)),n.beginPath();const v=!!e.pathSegment(n,l);let y;if(g){v?n.closePath():Gm(n,s,f,r);const k=!!s.pathSegment(n,u,{move:v,reverse:!0});y=v&&k,y||Gm(n,s,h,r)}n.closePath(),n.fill(y?"evenodd":"nonzero"),n.restore()}}function KR(n,t,e,s){const r=t.chart.chartArea,{property:i,start:o,end:a}=s||{};if(i==="x"||i==="y"){let c,l,u,h;i==="x"?(c=o,l=r.top,u=a,h=r.bottom):(c=r.left,l=o,u=r.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),u=Math.min(u,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,u-c,h-l),n.clip()}}function Gm(n,t,e,s){const r=t.interpolate(e,s);r&&n.lineTo(r.x,r.y)}var QR={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,r=[];let i,o,a,c;for(o=0;o<s;++o)i=n.getDatasetMeta(o),a=i.dataset,c=null,a&&a.options&&a instanceof hs&&(c={visible:n.isDatasetVisible(o),index:o,fill:OR(a,o,s),chart:n,axis:i.controller.options.indexAxis,scale:i.vScale,line:a}),i.$filler=c,r.push(c);for(o=0;o<s;++o)c=r[o],!(!c||c.fill===!1)&&(c.fill=MR(r,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",r=n.getSortedVisibleDatasetMetas(),i=n.chartArea;for(let o=r.length-1;o>=0;--o){const a=r[o].$filler;a&&(a.line.updateControlPoints(i,a.axis),s&&a.fill&&td(n.ctx,a,i))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let r=s.length-1;r>=0;--r){const i=s[r].$filler;Hm(i)&&td(n.ctx,i,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Hm(s)||e.drawTime!=="beforeDatasetDraw"||td(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Ym=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},XR=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Km extends dn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Mt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,r)=>t.sort(s,r,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,r=ue(s.font),i=r.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Ym(s,i);let l,u;e.font=r.string,this.isHorizontal()?(l=this.maxWidth,u=this._fitRows(o,i,a,c)+10):(u=this.maxHeight,l=this._fitCols(o,r,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,r){const{ctx:i,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],u=r+a;let h=t;i.textAlign="left",i.textBaseline="middle";let f=-1,m=-u;return this.legendItems.forEach((g,v)=>{const y=s+e/2+i.measureText(g.text).width;(v===0||l[l.length-1]+y+2*a>o)&&(h+=u,l[l.length-(v>0?0:1)]=0,m+=u,f++),c[v]={left:0,top:m,row:f,width:y,height:r},l[l.length-1]+=y+a}),h}_fitCols(t,e,s,r){const{ctx:i,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],u=o-t;let h=a,f=0,m=0,g=0,v=0;return this.legendItems.forEach((y,k)=>{const{itemWidth:T,itemHeight:A}=JR(s,e,i,y,r);k>0&&m+A+2*a>u&&(h+=f+a,l.push({width:f,height:m}),g+=f+a,v++,f=m=0),c[k]={left:g,top:m,col:v,width:T,height:A},f=Math.max(f,T),m+=A+a}),h+=f,l.push({width:f,height:m}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:r},rtl:i}}=this,o=jr(i,this.left,this.width);if(this.isHorizontal()){let a=0,c=Ae(s,this.left+r,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=Ae(s,this.left+r,this.right-this.lineWidths[a])),l.top+=this.top+t+r,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+r}else{let a=0,c=Ae(s,this.top+t+r,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=Ae(s,this.top+t+r,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+r,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;sl(t,this),this._draw(),rl(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:r}=this,{align:i,labels:o}=t,a=qt.color,c=jr(t.rtl,this.left,this.width),l=ue(o.font),{padding:u}=o,h=l.size,f=h/2;let m;this.drawTitle(),r.textAlign=c.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=l.string;const{boxWidth:g,boxHeight:v,itemHeight:y}=Ym(o,h),k=function(M,w,b){if(isNaN(g)||g<=0||isNaN(v)||v<0)return;r.save();const x=rt(b.lineWidth,1);if(r.fillStyle=rt(b.fillStyle,a),r.lineCap=rt(b.lineCap,"butt"),r.lineDashOffset=rt(b.lineDashOffset,0),r.lineJoin=rt(b.lineJoin,"miter"),r.lineWidth=x,r.strokeStyle=rt(b.strokeStyle,a),r.setLineDash(rt(b.lineDash,[])),o.usePointStyle){const S={radius:v*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:x},I=c.xPlus(M,g/2),D=w+f;kv(r,S,I,D,o.pointStyleWidth&&g)}else{const S=w+Math.max((h-v)/2,0),I=c.leftForLtr(M,g),D=Ys(b.borderRadius);r.beginPath(),Object.values(D).some(C=>C!==0)?yo(r,{x:I,y:S,w:g,h:v,radius:D}):r.rect(I,S,g,v),r.fill(),x!==0&&r.stroke()}r.restore()},T=function(M,w,b){lr(r,b.text,M,w+y/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},A=this.isHorizontal(),P=this._computeTitleHeight();A?m={x:Ae(i,this.left+u,this.right-s[0]),y:this.top+u+P,line:0}:m={x:this.left+u,y:Ae(i,this.top+P+u,this.bottom-e[0].height),line:0},Nv(this.ctx,t.textDirection);const R=y+u;this.legendItems.forEach((M,w)=>{r.strokeStyle=M.fontColor,r.fillStyle=M.fontColor;const b=r.measureText(M.text).width,x=c.textAlign(M.textAlign||(M.textAlign=o.textAlign)),S=g+f+b;let I=m.x,D=m.y;c.setWidth(this.width),A?w>0&&I+S+u>this.right&&(D=m.y+=R,m.line++,I=m.x=Ae(i,this.left+u,this.right-s[m.line])):w>0&&D+R>this.bottom&&(I=m.x=I+e[m.line].width+u,m.line++,D=m.y=Ae(i,this.top+P+u,this.bottom-e[m.line].height));const C=c.x(I);if(k(C,D,M),I=y1(x,I+g+f,A?I+S:this.right,t.rtl),T(c.x(I),D,M),A)m.x+=S+u;else if(typeof M.text!="string"){const J=l.lineHeight;m.y+=cb(M,J)+u}else m.y+=R}),Lv(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=ue(e.font),r=Me(e.padding);if(!e.display)return;const i=jr(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,l=r.top+c;let u,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+l,h=Ae(t.align,h,this.right-f);else{const g=this.columnSizes.reduce((v,y)=>Math.max(v,y.height),0);u=l+Ae(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const m=Ae(a,h,h+f);o.textAlign=i.textAlign(ih(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,lr(o,e.text,m,u,s)}_computeTitleHeight(){const t=this.options.title,e=ue(t.font),s=Me(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,r,i;if($n(t,this.left,this.right)&&$n(e,this.top,this.bottom)){for(i=this.legendHitBoxes,s=0;s<i.length;++s)if(r=i[s],$n(t,r.left,r.left+r.width)&&$n(e,r.top,r.top+r.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!eD(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const r=this._hoveredItem,i=XR(r,s);r&&!i&&Mt(e.onLeave,[t,r,this],this),this._hoveredItem=s,s&&!i&&Mt(e.onHover,[t,s,this],this)}else s&&Mt(e.onClick,[t,s,this],this)}}function JR(n,t,e,s,r){const i=ZR(s,n,t,e),o=tD(r,s,t.lineHeight);return{itemWidth:i,itemHeight:o}}function ZR(n,t,e,s){let r=n.text;return r&&typeof r!="string"&&(r=r.reduce((i,o)=>i.length>o.length?i:o)),t+e.size/2+s.measureText(r).width}function tD(n,t,e){let s=n;return typeof t.text!="string"&&(s=cb(t,e)),s}function cb(n,t){const e=n.text?n.text.length:0;return t*e}function eD(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var nD={id:"legend",_element:Km,start(n,t,e){const s=n.legend=new Km({ctx:n.ctx,options:e,chart:n});Pe.configure(n,s,e),Pe.addBox(n,s)},stop(n){Pe.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;Pe.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,r=e.chart;r.isDatasetVisible(s)?(r.hide(s),t.hidden=!0):(r.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:r,color:i,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),u=Me(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:i,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:r||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class ph extends dn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const r=zt(s.text)?s.text.length:1;this._padding=Me(s.padding);const i=r*ue(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:r,right:i,options:o}=this,a=o.align;let c=0,l,u,h;return this.isHorizontal()?(u=Ae(a,s,i),h=e+t,l=i-s):(o.position==="left"?(u=s+t,h=Ae(a,r,e),c=xt*-.5):(u=i-t,h=Ae(a,e,r),c=xt*.5),l=r-e),{titleX:u,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=ue(e.font),i=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(i);lr(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:l,textAlign:ih(e.align),textBaseline:"middle",translation:[o,a]})}}function sD(n,t){const e=new ph({ctx:n.ctx,options:t,chart:n});Pe.configure(n,e,t),Pe.addBox(n,e),n.titleBlock=e}var rD={id:"title",_element:ph,start(n,t,e){sD(n,e)},stop(n){const t=n.titleBlock;Pe.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;Pe.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ka=new WeakMap;var iD={id:"subtitle",start(n,t,e){const s=new ph({ctx:n.ctx,options:e,chart:n});Pe.configure(n,s,e),Pe.addBox(n,s),ka.set(n,s)},stop(n){Pe.removeBox(n,ka.get(n)),ka.delete(n)},beforeUpdate(n,t,e){const s=ka.get(n);Pe.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ui={average(n){if(!n.length)return!1;let t,e,s=new Set,r=0,i=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),r+=c.y,++i}}return i===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:r/i}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,r=Number.POSITIVE_INFINITY,i,o,a;for(i=0,o=n.length;i<o;++i){const c=n[i].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),u=Nd(t,l);u<r&&(r=u,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function hn(n,t){return t&&(zt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function Dn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function oD(n,t){const{element:e,datasetIndex:s,index:r}=t,i=n.getDatasetMeta(s).controller,{label:o,value:a}=i.getLabelAndValue(r);return{chart:n,label:o,parsed:i.getParsed(r),raw:n.data.datasets[s].data[r],formattedValue:a,dataset:i.getDataset(),dataIndex:r,datasetIndex:s,element:e}}function Qm(n,t){const e=n.chart.ctx,{body:s,footer:r,title:i}=n,{boxWidth:o,boxHeight:a}=t,c=ue(t.bodyFont),l=ue(t.titleFont),u=ue(t.footerFont),h=i.length,f=r.length,m=s.length,g=Me(t.padding);let v=g.height,y=0,k=s.reduce((P,R)=>P+R.before.length+R.lines.length+R.after.length,0);if(k+=n.beforeBody.length+n.afterBody.length,h&&(v+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),k){const P=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;v+=m*P+(k-m)*c.lineHeight+(k-1)*t.bodySpacing}f&&(v+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let T=0;const A=function(P){y=Math.max(y,e.measureText(P).width+T)};return e.save(),e.font=l.string,St(n.title,A),e.font=c.string,St(n.beforeBody.concat(n.afterBody),A),T=t.displayColors?o+2+t.boxPadding:0,St(s,P=>{St(P.before,A),St(P.lines,A),St(P.after,A)}),T=0,e.font=u.string,St(n.footer,A),e.restore(),y+=g.width,{width:y,height:v}}function aD(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function cD(n,t,e,s){const{x:r,width:i}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&r+i+o>t.width||n==="right"&&r-i-o<0)return!0}function lD(n,t,e,s){const{x:r,width:i}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return s==="center"?l=r<=(a+c)/2?"left":"right":r<=i/2?l="left":r>=o-i/2&&(l="right"),cD(l,n,t,e)&&(l="center"),l}function Xm(n,t,e){const s=e.yAlign||t.yAlign||aD(n,e);return{xAlign:e.xAlign||t.xAlign||lD(n,t,e,s),yAlign:s}}function dD(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function uD(n,t,e){let{y:s,height:r}=n;return t==="top"?s+=e:t==="bottom"?s-=r+e:s-=r/2,s}function Jm(n,t,e,s){const{caretSize:r,caretPadding:i,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=r+i,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:m}=Ys(o);let g=dD(t,a);const v=uD(t,c,l);return c==="center"?a==="left"?g+=l:a==="right"&&(g-=l):a==="left"?g-=Math.max(u,f)+r:a==="right"&&(g+=Math.max(h,m)+r),{x:me(g,0,s.width-t.width),y:me(v,0,s.height-t.height)}}function Sa(n,t,e){const s=Me(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Zm(n){return hn([],Dn(n))}function hD(n,t,e){return ks(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function tg(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const lb={beforeTitle:Pn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:Pn,beforeBody:Pn,beforeLabel:Pn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return ct(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Pn,afterBody:Pn,beforeFooter:Pn,footer:Pn,afterFooter:Pn};function $e(n,t,e,s){const r=n[t].call(e,s);return typeof r>"u"?lb[t].call(e,s):r}class Hd extends dn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),r=s.enabled&&e.options.animation&&s.animations,i=new Uv(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||(this.$context=hD(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,r=$e(s,"beforeTitle",this,t),i=$e(s,"title",this,t),o=$e(s,"afterTitle",this,t);let a=[];return a=hn(a,Dn(r)),a=hn(a,Dn(i)),a=hn(a,Dn(o)),a}getBeforeBody(t,e){return Zm($e(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,r=[];return St(t,i=>{const o={before:[],lines:[],after:[]},a=tg(s,i);hn(o.before,Dn($e(a,"beforeLabel",this,i))),hn(o.lines,$e(a,"label",this,i)),hn(o.after,Dn($e(a,"afterLabel",this,i))),r.push(o)}),r}getAfterBody(t,e){return Zm($e(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,r=$e(s,"beforeFooter",this,t),i=$e(s,"footer",this,t),o=$e(s,"afterFooter",this,t);let a=[];return a=hn(a,Dn(r)),a=hn(a,Dn(i)),a=hn(a,Dn(o)),a}_createItems(t){const e=this._active,s=this.chart.data,r=[],i=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(oD(this.chart,e[c]));return t.filter&&(a=a.filter((u,h,f)=>t.filter(u,h,f,s))),t.itemSort&&(a=a.sort((u,h)=>t.itemSort(u,h,s))),St(a,u=>{const h=tg(t.callbacks,u);r.push($e(h,"labelColor",this,u)),i.push($e(h,"labelPointStyle",this,u)),o.push($e(h,"labelTextColor",this,u))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),r=this._active;let i,o=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{const a=Ui[s.position].call(this,r,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Qm(this,s),l=Object.assign({},a,c),u=Xm(this.chart,s,l),h=Jm(s,l,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,i={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,r){const i=this.getCaretPosition(t,s,r);e.lineTo(i.x1,i.y1),e.lineTo(i.x2,i.y2),e.lineTo(i.x3,i.y3)}getCaretPosition(t,e,s){const{xAlign:r,yAlign:i}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:l,bottomLeft:u,bottomRight:h}=Ys(a),{x:f,y:m}=t,{width:g,height:v}=e;let y,k,T,A,P,R;return i==="center"?(P=m+v/2,r==="left"?(y=f,k=y-o,A=P+o,R=P-o):(y=f+g,k=y+o,A=P-o,R=P+o),T=y):(r==="left"?k=f+Math.max(c,u)+o:r==="right"?k=f+g-Math.max(l,h)-o:k=this.caretX,i==="top"?(A=m,P=A-o,y=k-o,T=k+o):(A=m+v,P=A+o,y=k+o,T=k-o),R=A),{x1:y,x2:k,x3:T,y1:A,y2:P,y3:R}}drawTitle(t,e,s){const r=this.title,i=r.length;let o,a,c;if(i){const l=jr(s.rtl,this.x,this.width);for(t.x=Sa(this,s.titleAlign,s),e.textAlign=l.textAlign(s.titleAlign),e.textBaseline="middle",o=ue(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<i;++c)e.fillText(r[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===i&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,r,i){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:l}=i,u=ue(i.bodyFont),h=Sa(this,"left",i),f=r.x(h),m=c<u.lineHeight?(u.lineHeight-c)/2:0,g=e.y+m;if(i.usePointStyle){const v={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},y=r.leftForLtr(f,l)+l/2,k=g+c/2;t.strokeStyle=i.multiKeyBackground,t.fillStyle=i.multiKeyBackground,Vd(t,v,y,k),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Vd(t,v,y,k)}else{t.lineWidth=ut(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=r.leftForLtr(f,l),y=r.leftForLtr(r.xPlus(f,1),l-2),k=Ys(o.borderRadius);Object.values(k).some(T=>T!==0)?(t.beginPath(),t.fillStyle=i.multiKeyBackground,yo(t,{x:v,y:g,w:l,h:c,radius:k}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),yo(t,{x:y,y:g+1,w:l-2,h:c-2,radius:k}),t.fill()):(t.fillStyle=i.multiKeyBackground,t.fillRect(v,g,l,c),t.strokeRect(v,g,l,c),t.fillStyle=o.backgroundColor,t.fillRect(y,g+1,l-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:r}=this,{bodySpacing:i,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:u}=s,h=ue(s.bodyFont);let f=h.lineHeight,m=0;const g=jr(s.rtl,this.x,this.width),v=function(b){e.fillText(b,g.x(t.x+m),t.y+f/2),t.y+=f+i},y=g.textAlign(o);let k,T,A,P,R,M,w;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=Sa(this,y,s),e.fillStyle=s.bodyColor,St(this.beforeBody,v),m=a&&y!=="right"?o==="center"?l/2+u:l+2+u:0,P=0,M=r.length;P<M;++P){for(k=r[P],T=this.labelTextColors[P],e.fillStyle=T,St(k.before,v),A=k.lines,a&&A.length&&(this._drawColorBox(e,t,P,g,s),f=Math.max(h.lineHeight,c)),R=0,w=A.length;R<w;++R)v(A[R]),f=h.lineHeight;St(k.after,v)}m=0,f=h.lineHeight,St(this.afterBody,v),t.y-=i}drawFooter(t,e,s){const r=this.footer,i=r.length;let o,a;if(i){const c=jr(s.rtl,this.x,this.width);for(t.x=Sa(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=ue(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<i;++a)e.fillText(r[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,r){const{xAlign:i,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:u}=s,{topLeft:h,topRight:f,bottomLeft:m,bottomRight:g}=Ys(r.cornerRadius);e.fillStyle=r.backgroundColor,e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,s,r),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&i==="right"&&this.drawCaret(t,e,s,r),e.lineTo(a+l,c+u-g),e.quadraticCurveTo(a+l,c+u,a+l-g,c+u),o==="bottom"&&this.drawCaret(t,e,s,r),e.lineTo(a+m,c+u),e.quadraticCurveTo(a,c+u,a,c+u-m),o==="center"&&i==="left"&&this.drawCaret(t,e,s,r),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),r.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,r=s&&s.x,i=s&&s.y;if(r||i){const o=Ui[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Qm(this,t),c=Object.assign({},o,this._size),l=Xm(e,t,c),u=Jm(t,c,l,e);(r._to!==u.x||i._to!==u.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const r={width:this.width,height:this.height},i={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=Me(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(i,t,r,e),Nv(t,e.textDirection),i.y+=o.top,this.drawTitle(i,t,e),this.drawBody(i,t,e),this.drawFooter(i,t,e),Lv(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,r=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),i=!mc(s,r),o=this._positionChanged(r,e);(i||o)&&(this._active=r,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,i=this._active||[],o=this._getActiveElements(t,i,e,s),a=this._positionChanged(o,t),c=e||!mc(o,i)||a;return c&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,r){const i=this.options;if(t.type==="mouseout")return[];if(!r)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,i.mode,i,s);return i.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:r,options:i}=this,o=Ui[i.position].call(this,t,e);return o!==!1&&(s!==o.x||r!==o.y)}}L(Hd,"positioners",Ui);var fD={id:"tooltip",_element:Hd,positioners:Ui,afterInit(n,t,e){e&&(n.tooltip=new Hd({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:lb},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},pD=Object.freeze({__proto__:null,Colors:AR,Decimation:PR,Filler:QR,Legend:nD,SubTitle:iD,Title:rD,Tooltip:fD});const mD=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function gD(n,t,e,s){const r=n.indexOf(t);if(r===-1)return mD(n,t,e,s);const i=n.lastIndexOf(t);return r!==i?e:r}const _D=(n,t)=>n===null?null:me(Math.round(n),0,t);function eg(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class qd extends mr{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:r,label:i}of e)s[r]===i&&s.splice(r,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(ct(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:gD(s,t,rt(e,t),this._addedLabels),_D(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(r=this.getLabels().length-1)),this.min=s,this.max=r}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,r=[];let i=this.getLabels();i=t===0&&e===i.length-1?i:i.slice(t,e+1),this._valueRange=Math.max(i.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)r.push({value:o});return r}getLabelForValue(t){return eg.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}L(qd,"id","category"),L(qd,"defaults",{ticks:{callback:eg}});function yD(n,t){const e=[],{bounds:r,step:i,min:o,max:a,precision:c,count:l,maxTicks:u,maxDigits:h,includeBounds:f}=n,m=i||1,g=u-1,{min:v,max:y}=t,k=!ct(o),T=!ct(a),A=!ct(l),P=(y-v)/(h+1);let R=Qp((y-v)/g/m)*m,M,w,b,x;if(R<1e-14&&!k&&!T)return[{value:v},{value:y}];x=Math.ceil(y/R)-Math.floor(v/R),x>g&&(R=Qp(x*R/g/m)*m),ct(c)||(M=Math.pow(10,c),R=Math.ceil(R*M)/M),r==="ticks"?(w=Math.floor(v/R)*R,b=Math.ceil(y/R)*R):(w=v,b=y),k&&T&&i&&u1((a-o)/i,R/1e3)?(x=Math.round(Math.min((a-o)/R,u)),R=(a-o)/x,w=o,b=a):A?(w=k?o:w,b=T?a:b,x=l-1,R=(b-w)/x):(x=(b-w)/R,Xi(x,Math.round(x),R/1e3)?x=Math.round(x):x=Math.ceil(x));const S=Math.max(Xp(R),Xp(w));M=Math.pow(10,ct(c)?S:c),w=Math.round(w*M)/M,b=Math.round(b*M)/M;let I=0;for(k&&(f&&w!==o?(e.push({value:o}),w<o&&I++,Xi(Math.round((w+I*R)*M)/M,o,ng(o,P,n))&&I++):w<o&&I++);I<x;++I){const D=Math.round((w+I*R)*M)/M;if(T&&D>a)break;e.push({value:D})}return T&&f&&b!==a?e.length&&Xi(e[e.length-1].value,a,ng(a,P,n))?e[e.length-1].value=a:e.push({value:a}):(!T||b===a)&&e.push({value:b}),e}function ng(n,t,{horizontal:e,minRotation:s}){const r=on(s),i=(e?Math.sin(r):Math.cos(r))||.001,o=.75*t*(""+n).length;return Math.min(t/i,o)}class wc extends mr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return ct(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:r,max:i}=this;const o=c=>r=e?r:c,a=c=>i=s?i:c;if(t){const c=En(r),l=En(i);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(r===i){let c=i===0?1:Math.abs(i*.05);a(i+c),t||o(r-c)}this.min=r,this.max=i}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,r;return s?(r=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),e=e||11),e&&(r=Math.min(e,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const r={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},i=this._range||this,o=yD(r,i);return t.bounds==="ticks"&&yv(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const r=(s-e)/Math.max(t.length-1,1)/2;e-=r,s+=r}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Uo(t,this.chart.options.locale,this.options.ticks.format)}}class Wd extends wc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Xt(t)?t:0,this.max=Xt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=on(this.options.ticks.minRotation),r=(t?Math.sin(s):Math.cos(s))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,i.lineHeight/r))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}L(Wd,"id","linear"),L(Wd,"defaults",{ticks:{callback:nl.formatters.numeric}});const bo=n=>Math.floor(ds(n)),Ls=(n,t)=>Math.pow(10,bo(n)+t);function sg(n){return n/Math.pow(10,bo(n))===1}function rg(n,t,e){const s=Math.pow(10,e),r=Math.floor(n/s);return Math.ceil(t/s)-r}function vD(n,t){const e=t-n;let s=bo(e);for(;rg(n,t,s)>10;)s++;for(;rg(n,t,s)<10;)s--;return Math.min(s,bo(n))}function bD(n,{min:t,max:e}){t=We(n.min,t);const s=[],r=bo(t);let i=vD(t,e),o=i<0?Math.pow(10,Math.abs(i)):1;const a=Math.pow(10,i),c=r>i?Math.pow(10,r):0,l=Math.round((t-c)*o)/o,u=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-u)/Math.pow(10,i)),f=We(n.min,Math.round((c+u+h*Math.pow(10,i))*o)/o);for(;f<e;)s.push({value:f,major:sg(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(i++,h=2,o=i>=0?1:o),f=Math.round((c+u+h*Math.pow(10,i))*o)/o;const m=We(n.max,f);return s.push({value:m,major:sg(m),significand:h}),s}class Gd extends mr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=wc.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return Xt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Xt(t)?Math.max(0,t):null,this.max=Xt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Xt(this._userMin)&&(this.min=t===Ls(this.min,0)?Ls(this.min,-1):Ls(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,r=this.max;const i=a=>s=t?s:a,o=a=>r=e?r:a;s===r&&(s<=0?(i(1),o(10)):(i(Ls(s,-1)),o(Ls(r,1)))),s<=0&&i(Ls(r,-1)),r<=0&&o(Ls(s,1)),this.min=s,this.max=r}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=bD(e,this);return t.bounds==="ticks"&&yv(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Uo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=ds(t),this._valueRange=ds(this.max)-ds(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(ds(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}L(Gd,"id","logarithmic"),L(Gd,"defaults",{ticks:{callback:nl.formatters.logarithmic,major:{enabled:!0}}});function Yd(n){const t=n.ticks;if(t.display&&n.display){const e=Me(t.backdropPadding);return rt(t.font&&t.font.size,qt.font.size)+e.height}return 0}function xD(n,t,e){return e=zt(e)?e:[e],{w:S1(n,t.string,e),h:e.length*t.lineHeight}}function ig(n,t,e,s,r){return n===s||n===r?{start:t-e/2,end:t+e/2}:n<s||n>r?{start:t-e,end:t}:{start:t,end:t+e}}function wD(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],r=[],i=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?xt/i:0;for(let c=0;c<i;c++){const l=o.setContext(n.getPointLabelContext(c));r[c]=l.padding;const u=n.getPointPosition(c,n.drawingArea+r[c],a),h=ue(l.font),f=xD(n.ctx,h,n._pointLabels[c]);s[c]=f;const m=Se(n.getIndexAngle(c)+a),g=Math.round(sh(m)),v=ig(g,u.x,f.w,0,180),y=ig(g,u.y,f.h,90,270);ED(e,t,m,v,y)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=AD(n,s,r)}function ED(n,t,e,s,r){const i=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/i,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/i,n.r=Math.max(n.r,t.r+a)),r.start<t.t?(c=(t.t-r.start)/o,n.t=Math.min(n.t,t.t-c)):r.end>t.b&&(c=(r.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function TD(n,t,e){const s=n.drawingArea,{extra:r,additionalAngle:i,padding:o,size:a}=e,c=n.getPointPosition(t,s+r+o,i),l=Math.round(sh(Se(c.angle+ne))),u=CD(c.y,a.h,l),h=kD(l),f=SD(c.x,a.w,h);return{visible:!0,x:c.x,y:u,textAlign:h,left:f,top:u,right:f+a.w,bottom:u+a.h}}function ID(n,t){if(!t)return!0;const{left:e,top:s,right:r,bottom:i}=n;return!(Un({x:e,y:s},t)||Un({x:e,y:i},t)||Un({x:r,y:s},t)||Un({x:r,y:i},t))}function AD(n,t,e){const s=[],r=n._pointLabels.length,i=n.options,{centerPointLabels:o,display:a}=i.pointLabels,c={extra:Yd(i)/2,additionalAngle:o?xt/r:0};let l;for(let u=0;u<r;u++){c.padding=e[u],c.size=t[u];const h=TD(n,u,c);s.push(h),a==="auto"&&(h.visible=ID(h,l),h.visible&&(l=h))}return s}function kD(n){return n===0||n===180?"center":n<180?"left":"right"}function SD(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function CD(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function PD(n,t,e){const{left:s,top:r,right:i,bottom:o}=e,{backdropColor:a}=t;if(!ct(a)){const c=Ys(t.borderRadius),l=Me(t.backdropPadding);n.fillStyle=a;const u=s-l.left,h=r-l.top,f=i-s+l.width,m=o-r+l.height;Object.values(c).some(g=>g!==0)?(n.beginPath(),yo(n,{x:u,y:h,w:f,h:m,radius:c}),n.fill()):n.fillRect(u,h,f,m)}}function RD(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let r=t-1;r>=0;r--){const i=n._pointLabelItems[r];if(!i.visible)continue;const o=s.setContext(n.getPointLabelContext(r));PD(e,o,i);const a=ue(o.font),{x:c,y:l,textAlign:u}=i;lr(e,n._pointLabels[r],c,l+a.lineHeight/2,a,{color:o.color,textAlign:u,textBaseline:"middle"})}}function db(n,t,e,s){const{ctx:r}=n;if(e)r.arc(n.xCenter,n.yCenter,t,0,Ft);else{let i=n.getPointPosition(0,t);r.moveTo(i.x,i.y);for(let o=1;o<s;o++)i=n.getPointPosition(o,t),r.lineTo(i.x,i.y)}}function DD(n,t,e,s,r){const i=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(i.save(),i.strokeStyle=a,i.lineWidth=c,i.setLineDash(r.dash||[]),i.lineDashOffset=r.dashOffset,i.beginPath(),db(n,e,o,s),i.closePath(),i.stroke(),i.restore())}function MD(n,t,e){return ks(n,{label:e,index:t,type:"pointLabel"})}class ji extends wc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Me(Yd(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Xt(t)&&!isNaN(t)?t:0,this.max=Xt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Yd(this.options))}generateTickLabels(t){wc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const r=Mt(this.options.pointLabels.callback,[e,s],this);return r||r===0?r:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?wD(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,r){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,r))}getIndexAngle(t){const e=Ft/(this._pointLabels.length||1),s=this.options.startAngle||0;return Se(t*e+on(s))}getDistanceFromCenterForValue(t){if(ct(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(ct(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return MD(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const r=this.getIndexAngle(t)-ne+s;return{x:Math.cos(r)*e+this.xCenter,y:Math.sin(r)*e+this.yCenter,angle:r}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:r,bottom:i}=this._pointLabelItems[t];return{left:e,top:s,right:r,bottom:i}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),db(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:r,border:i}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&RD(this,o),r.display&&this.ticks.forEach((u,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(h),m=r.setContext(f),g=i.setContext(f);DD(this,m,c,o,g)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const u=s.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=u;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const r=this.getIndexAngle(0);let i,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=s.setContext(this.getContext(c)),u=ue(l.font);if(i=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=u.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=Me(l.backdropPadding);t.fillRect(-o/2-h.left,-i-u.size/2-h.top,o+h.width,u.size+h.height)}lr(t,a.label,0,-i,u,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}L(ji,"id","radialLinear"),L(ji,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:nl.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),L(ji,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),L(ji,"descriptors",{angleLines:{_fallback:"grid"}});const cl={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},je=Object.keys(cl);function og(n,t){return n-t}function ag(n,t){if(ct(t))return null;const e=n._adapter,{parser:s,round:r,isoWeekday:i}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),Xt(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(r&&(o=r==="week"&&(Qr(i)||i===!0)?e.startOf(o,"isoWeek",i):e.startOf(o,r)),+o)}function cg(n,t,e,s){const r=je.length;for(let i=je.indexOf(n);i<r-1;++i){const o=cl[je[i]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return je[i]}return je[r-1]}function OD(n,t,e,s,r){for(let i=je.length-1;i>=je.indexOf(e);i--){const o=je[i];if(cl[o].common&&n._adapter.diff(r,s,o)>=t-1)return o}return je[e?je.indexOf(e):0]}function ND(n){for(let t=je.indexOf(n)+1,e=je.length;t<e;++t)if(cl[je[t]].common)return je[t]}function lg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:r}=rh(e,t),i=e[s]>=t?e[s]:e[r];n[i]=!0}}function LD(n,t,e,s){const r=n._adapter,i=+r.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=i;a<=o;a=+r.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function dg(n,t,e){const s=[],r={},i=t.length;let o,a;for(o=0;o<i;++o)a=t[o],r[a]=o,s.push({value:a,major:!1});return i===0||!e?s:LD(n,s,r,e)}class xo extends mr{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),r=this._adapter=new Hv._date(t.adapters.date);r.init(e),Qi(s.displayFormats,r.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:ag(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:r,max:i,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(r=Math.min(r,l.min)),!a&&!isNaN(l.max)&&(i=Math.max(i,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),r=Xt(r)&&!isNaN(r)?r:+e.startOf(Date.now(),s),i=Xt(i)&&!isNaN(i)?i:+e.endOf(Date.now(),s)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,r=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const i=this.min,o=this.max,a=m1(r,i,o);return this._unit=e.unit||(s.autoSkip?cg(e.minUnit,this.min,this.max,this._getLabelCapacity(i)):OD(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:ND(this._unit),this.initOffsets(r),t.reverse&&a.reverse(),dg(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,r,i;this.options.offset&&t.length&&(r=this.getDecimalForValue(t[0]),t.length===1?e=1-r:e=(this.getDecimalForValue(t[1])-r)/2,i=this.getDecimalForValue(t[t.length-1]),t.length===1?s=i:s=(i-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=me(e,0,o),s=me(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,r=this.options,i=r.time,o=i.unit||cg(i.minUnit,e,s,this._getLabelCapacity(e)),a=rt(r.ticks.stepSize,1),c=o==="week"?i.isoWeekday:!1,l=Qr(c)||c===!0,u={};let h=e,f,m;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const g=r.ticks.source==="data"&&this.getDataTimestamps();for(f=h,m=0;f<s;f=+t.add(f,a,o),m++)lg(u,f,g);return(f===s||r.bounds==="ticks"||m===1)&&lg(u,f,g),Object.keys(u).sort(og).map(v=>+v)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const r=this.options.time.displayFormats,i=this._unit,o=e||r[i];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,r){const i=this.options,o=i.ticks.callback;if(o)return Mt(o,[t,e,s],this);const a=i.time.displayFormats,c=this._unit,l=this._majorUnit,u=c&&a[c],h=l&&a[l],f=s[e],m=l&&h&&f&&f.major;return this._adapter.format(t,r||(m?h:u))}generateTickLabels(t){let e,s,r;for(e=0,s=t.length;e<s;++e)r=t[e],r.label=this._tickFormatFunction(r.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,r=on(this.isHorizontal()?e.maxRotation:e.minRotation),i=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:s*i+a*o,h:s*o+a*i}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,r=s[e.unit]||s.millisecond,i=this._tickFormatFunction(t,0,dg(this,[t],this._majorUnit),r),o=this._getLabelSize(i),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(e=0,s=r.length;e<s;++e)t=t.concat(r[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const r=this.getLabels();for(e=0,s=r.length;e<s;++e)t.push(ag(this,r[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return xv(t.sort(og))}}L(xo,"id","time"),L(xo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ca(n,t,e){let s=0,r=n.length-1,i,o,a,c;e?(t>=n[s].pos&&t<=n[r].pos&&({lo:s,hi:r}=Bn(n,"pos",t)),{pos:i,time:a}=n[s],{pos:o,time:c}=n[r]):(t>=n[s].time&&t<=n[r].time&&({lo:s,hi:r}=Bn(n,"time",t)),{time:i,pos:a}=n[s],{time:o,pos:c}=n[r]);const l=o-i;return l?a+(c-a)*(t-i)/l:a}class Kd extends xo{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Ca(e,this.min),this._tableRange=Ca(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,r=[],i=[];let o,a,c,l,u;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=s&&r.push(l);if(r.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=r.length;o<a;++o)u=r[o+1],c=r[o-1],l=r[o],Math.round((u+c)/2)!==l&&i.push({time:l,pos:o/(a-1)});return i}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((r,i)=>r-i)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(Ca(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return Ca(this._table,s*this._tableRange+this._minPos,!0)}}L(Kd,"id","timeseries"),L(Kd,"defaults",xo.defaults);var VD=Object.freeze({__proto__:null,CategoryScale:qd,LinearScale:Wd,LogarithmicScale:Gd,RadialLinearScale:ji,TimeScale:xo,TimeSeriesScale:Kd});const FD=[HC,vR,pD,VD];gt.register(...FD);const Ai="rgba(255,255,255,0.08)",Ir="#a1a1aa",sn={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};gt.defaults.color="#e5e5e5";gt.defaults.font.family=sn.family;gt.defaults.font.weight=sn.weight;const ki={renderCurvaS:(n,t=[],e=[],s=[])=>{const r=document.getElementById(n);if(!r)return;r.chart&&r.chart.destroy();const i=s.length?s:t.map((o,a)=>`M${a+1}`);r.chart=new gt(r,{type:"line",data:{labels:i,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:sn,usePointStyle:!0}}},scales:{x:{grid:{color:Ai},ticks:{color:Ir,font:sn}},y:{grid:{color:Ai},ticks:{color:Ir,font:sn}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),r=s.map(i=>t[i]);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:r,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Ai},ticks:{color:Ir,font:sn}},y:{grid:{color:Ai},ticks:{color:Ir,font:sn}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:sn,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:r,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Ir,font:sn}},y:{grid:{color:Ai},ticks:{color:Ir,font:sn,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new gt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:sn,padding:12,usePointStyle:!0}}}}})}},$D=[{label:"ANÁLISE",items:[{route:"/",label:"Visão Geral",icon:Rt.dashboard},{route:"/obras",label:"Por Obra",icon:Rt.chart}]},{label:"OPERACIONAL",items:[{route:"/compras/nova",label:"Registrar Compra",icon:Rt.shoppingCart},{route:"/compras",label:"Lista de Compras",icon:Rt.list||Rt.clipboard}]},{label:"CADASTROS",items:[{route:"/obras",label:"Obras",icon:Rt.chart},{route:"/cadastros/compradores",label:"Compradores",icon:Rt.user||Rt.userGroup}]},{label:"SISTEMA",items:[{route:"/configuracoes",label:"Configurações",icon:Rt.settings}]}],bt={render:n=>{const t=document.getElementById("app"),e=Et.state.currentUser;if(!e){t.innerHTML=n;return}const s=Et.state.sidebarCollapsed,r=Et.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="fixed inset-y-0 left-0 z-30 bg-surface border-r border-border flex flex-col transition-all duration-300 md:static md:h-screen shadow-heavy hidden md:flex ${s?"w-20":"w-64"}">
                    <div class="h-16 flex items-center justify-center border-b border-border shrink-0">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span id="sidebar-logo-text" class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-3 px-3">
                        ${$D.map(i=>bt.renderNavSection(i.label,i.items,s)).join("")}
                    </nav>

                    <div class="p-4 border-t border-border shrink-0">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display justify-center md:justify-start">
                            ${Rt.logout}
                            <span class="sidebar-text ${s?"hidden":""}">Sair</span>
                        </button>
                    </div>
                </aside>

                <!-- Mobile Sidebar Backdrop -->
                <div id="sidebar-backdrop" class="fixed inset-0 bg-black/50 z-20 hidden backdrop-blur-sm transition-opacity"></div>

                <!-- Main Content -->
                <div class="flex-1 flex flex-col overflow-hidden w-full">
                    <!-- Header -->
                    <header class="h-16 bg-surface border-b border-border flex items-center justify-between px-4 md:px-6 z-10 shadow-heavy shrink-0">
                        <div class="flex items-center gap-4">
                            <button id="btn-toggle-sidebar" class="text-text-muted hover:text-primary focus:outline-none p-1 rounded hover:bg-canvas transition-colors">
                                ${Rt.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${Rt.search}
                                </span>
                                <input 
                                    type="text" 
                                    id="global-search"
                                    placeholder="Buscar (Ctrl+K)..." 
                                    class="w-full pl-10 pr-4 py-2 bg-canvas border border-border rounded text-text text-sm focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted transition-all"
                                >
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <!-- Notifications -->
                            <div id="notifications-container" class="relative"></div>
                            
                            <button id="btn-theme-toggle" class="text-text-muted hover:text-primary transition-colors p-1 rounded hover:bg-canvas">
                                ${r==="dark"?Rt.sun:Rt.moon}
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
                    <main class="flex-1 overflow-auto p-4 md:p-6 relative bg-canvas w-full">
                        ${n}
                    </main>
                </div>
            </div>
        `,bt.bindEvents(),window.dispatchEvent(new CustomEvent("layout:rendered"))},renderNavSection:(n,t,e)=>`
            <div class="space-y-1">
                <p class="sidebar-section-title px-3 text-xs font-display tracking-wide text-text-muted uppercase ${e?"hidden":""}">${n}</p>
                ${t.map(s=>bt.createNavItem(s.route,s.label,s.icon,e)).join("")}
            </div>
        `,createNavItem:(n,t,e,s)=>{var o;const i=At.currentRoute===n||((o=At.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary bg-primary/10 border-l-2 border-primary shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${i} justify-center md:justify-start" title="${t}">
                ${e}
                <span class="sidebar-text ${s?"hidden":"font-display tracking-wide"}">${t}</span>
            </a>
        `},bindEvents:()=>{var s,r;const n=document.getElementById("sidebar"),t=document.getElementById("sidebar-backdrop"),e=document.getElementById("btn-toggle-sidebar");e==null||e.addEventListener("click",()=>{if(window.innerWidth<768)n.classList.toggle("hidden"),n.classList.toggle("flex"),t.classList.toggle("hidden");else{Et.toggleSidebar();const o=Et.state.sidebarCollapsed;o?(n.classList.remove("w-64"),n.classList.add("w-20")):(n.classList.remove("w-20"),n.classList.add("w-64")),n.querySelectorAll(".sidebar-text, .sidebar-section-title, #sidebar-logo-text").forEach(c=>{o?c.classList.add("hidden"):c.classList.remove("hidden")})}}),t==null||t.addEventListener("click",()=>{n.classList.add("hidden"),n.classList.remove("flex"),t.classList.add("hidden")}),(s=document.getElementById("btn-theme-toggle"))==null||s.addEventListener("click",()=>{const o=Et.state.currentTheme==="dark"?"light":"dark";Et.setTheme(o);const a=document.getElementById("btn-theme-toggle");a.innerHTML=o==="dark"?Rt.sun:Rt.moon}),(r=document.getElementById("btn-logout"))==null||r.addEventListener("click",async()=>{try{await pc.logout(),At.navigate("/login")}catch(i){console.error(i)}}),document.addEventListener("keydown",i=>{var o;(i.ctrlKey||i.metaKey)&&i.key==="k"&&(i.preventDefault(),(o=document.getElementById("global-search"))==null||o.focus())})}},ub=70,hb=105,fb=1.5,BD=Object.freeze(Object.defineProperty({__proto__:null,COST_PER_HOUR:ub,COST_PER_OVERTIME_HOUR:hb,EXTRA_FACTOR:fb},Symbol.toStringTag,{value:"Module"})),Ge={getObras:async()=>(await yt(mt(X,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await yt(mt(X,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await fr(mt(X,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await Ze(ae(X,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await Fu(ae(X,"obras",n))},getObraStats:async(n,t=!1)=>{const e=await Ge.getObraById(n),s=mt(X,"compras"),r=Qt(s,Pt("obraId","==",n)),o=(await yt(r)).docs.map(j=>({id:j.id,...j.data()}));let a=0,c=Number((e==null?void 0:e.valor_orcado)||0);const l={},u={},h={},f={},m={};let g=null,v=null,y=0,k=0,T=0,A=0,P=0;const R={},M={},w=(j="")=>{const W=(j||"").toLowerCase();return W.includes("desperd")?"Desperdício":W.includes("lista")||W.includes("inicial")?"Lista inicial":"Material adicional"},b=j=>{const W=new Date(j.getTime()),N=(W.getDay()+6)%7;W.setDate(W.getDate()-N+3);const U=W.getTime();W.setMonth(0,1),W.getDay()!==4&&W.setMonth(0,1+(4-W.getDay()+7)%7);const q=1+Math.ceil((U-W)/6048e5);return`${W.getFullYear()}-W${String(q).padStart(2,"0")}`};o.forEach(j=>{const W=Number(j.valor_total??j.valor_estimado??0);a+=W,l[j.status_compra]=(l[j.status_compra]||0)+1;const N=j.previsao_entrega?new Date(j.previsao_entrega):null,U=j.data_recebimento?new Date(j.data_recebimento):null;if(j.status_compra!=="Entregue"&&N&&N<new Date&&y++,U&&N&&(k++,U<=N&&T++),j.data_emissao&&(U||N)){const Z=U||N,ft=Math.max(0,(new Date(Z)-new Date(j.data_emissao))/(1e3*60*60*24));A+=ft,P++}const q=w(j.natureza_compra||j.categoria||"Outros");u[q]=(u[q]||0)+W;const nt=(j.natureza_compra||"Outros").trim();R[nt]=(R[nt]||0)+W;const lt=j.centroCustoNome||j.centro_custo||j.centroCustoId||"N/D";M[lt]=(M[lt]||0)+W;const at=j.data_recebimento||j.data_emissao||j.previsao_entrega||j.data_solicitacao;if(at){const Z=new Date(at);if(!Number.isNaN(Z.getTime())){(!g||Z<g)&&(g=Z),(!v||Z>v)&&(v=Z);const ft=`${Z.getFullYear()}-${String(Z.getMonth()+1).padStart(2,"0")}`;h[ft]=(h[ft]||0)+W;const Tt=Z.toISOString().split("T")[0];f[Tt]=(f[Tt]||0)+W;const Ot=b(Z);m[Ot]=(m[Ot]||0)+W}}});const x=Number(c||0)||a,S=Ge.calculateCurvaS(x,m,{start:(e==null?void 0:e.data_prevista_inicio)||(e==null?void 0:e.data_inicio)||g,end:(e==null?void 0:e.data_prevista_fim)||(e==null?void 0:e.data_fim)||v}),I=k?T/k*100:0,D=P?A/P:0,C=[...o].sort((j,W)=>{const N=j.data_solicitacao||j.data_emissao||"";return(W.data_solicitacao||W.data_emissao||"").localeCompare(N)}),J={totalCompras:o.length,totalGasto:a,porStatus:l,gastosPorCategoria:u,gastosMensais:h,gastosDiarios:f,curvaS:S,comprasRecentes:C.slice(0,10),comprasCalendar:C,atrasos:y,sla:I,lead:D,naturezaTotais:R,ccTotais:M};if(t)try{const{RDOService:j}=await fo(async()=>{const{RDOService:W}=await Promise.resolve().then(()=>Bb);return{RDOService:W}},void 0);if(e!=null&&e.numero_os){const W=new Date().toISOString().split("T")[0],N=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],U=await j.getByObra(e.numero_os,N,W);U&&U.length>0&&(J.rdoData=j.processRDOData(U))}}catch(j){console.warn("Erro ao buscar dados RDO:",j)}return J},calculateCurvaS:(n,t,{start:e,end:s}={})=>{const r=[],i=[],o=[];let a=0;const c=24*60*60*1e3,l=[],u=e?new Date(e):null,h=s?new Date(s):null;if(u&&!Number.isNaN(u)&&h&&!Number.isNaN(h)&&u<=h){const m=new Date(u);m.setHours(12,0,0,0);const g=m.getDay(),v=g===0?-6:1-g;for(m.setDate(m.getDate()+v);m<=h;){const y=m.getFullYear(),k=new Date(y,0,1),T=Math.floor((m-k)/c),A=Math.ceil((T+k.getDay()+1)/7);l.push(`${y}-W${String(A).padStart(2,"0")}`),m.setDate(m.getDate()+7)}}else l.push(...Object.keys(t).sort());const f=l.length||1;return l.forEach((m,g)=>{const v=(g+1)/f,y=1/(1+Math.exp(-10*(v-.5)));r.push(n*y),t[m]&&(a+=t[m]),i.push(a),o.push(m)}),{planejado:r,realizado:i,labels:o}},calculateFinancialSummary:async(n,t=[],e=null,s={})=>{const r=await Ge.getObraById(n);if(!r)return null;const i=Number(s.costHour||ub),o=Number(s.costOvertime||hb),a=Number(s.extraFactor||fb),c=Number(r.valor_orcado)||0,l=t.reduce((b,x)=>b+(Number(x.valor_total||x.valor_estimado||0)||0),0),u=c-l,h=c>0?l/c*100:0,f=Number(r.horas_previstas)||0,m=Number(r.horas_extras_previstas)||0,g=f*i+m*o*a;let v=0,y=0;if(e){const b=Number(e.totalExtras)||0,x=Number(e.totalHoras)||0;v=b,y=Math.max(0,x-b)}const k=y*i+v*o*a,T=g-k,A=g>0?k/g*100:0,P=c+g,R=l+k,M=P-R,w=P>0?R/P*100:0;return{materials:{planned:c,spent:l,balance:u,percent:h},labor:{planned:g,spent:k,balance:T,percent:A,horasNormaisExec:y,horasExtrasExec:v},total:{planned:P,spent:R,balance:M,percent:w}}}},UD=Object.freeze(Object.defineProperty({__proto__:null,ObrasService:Ge},Symbol.toStringTag,{value:"Module"})),pb=6048e5,jD=864e5,jo=6e4,zo=36e5,zD=1e3,ug=Symbol.for("constructDateFrom");function Zt(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&ug in n?n[ug](t):n instanceof Date?new n.constructor(t):new Date(t)}function ot(n,t){return Zt(t||n,n)}function ll(n,t,e){const s=ot(n,e==null?void 0:e.in);return isNaN(t)?Zt((e==null?void 0:e.in)||n,NaN):(t&&s.setDate(s.getDate()+t),s)}function mh(n,t,e){const s=ot(n,e==null?void 0:e.in);if(isNaN(t))return Zt(n,NaN);if(!t)return s;const r=s.getDate(),i=Zt(n,s.getTime());i.setMonth(s.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(s.setFullYear(i.getFullYear(),i.getMonth(),r),s)}function gh(n,t,e){return Zt(n,+ot(n)+t)}function HD(n,t,e){return gh(n,t*zo)}let qD={};function gr(){return qD}function In(n,t){var a,c,l,u;const e=gr(),s=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((u=(l=e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??0,r=ot(n,t==null?void 0:t.in),i=r.getDay(),o=(i<s?7:0)+i-s;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function Zr(n,t){return In(n,{...t,weekStartsOn:1})}function mb(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getFullYear(),r=Zt(e,0);r.setFullYear(s+1,0,4),r.setHours(0,0,0,0);const i=Zr(r),o=Zt(e,0);o.setFullYear(s,0,4),o.setHours(0,0,0,0);const a=Zr(o);return e.getTime()>=i.getTime()?s+1:e.getTime()>=a.getTime()?s:s-1}function Ec(n){const t=ot(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function _r(n,...t){const e=Zt.bind(null,t.find(s=>typeof s=="object"));return t.map(e)}function Qd(n,t){const e=ot(n,t==null?void 0:t.in);return e.setHours(0,0,0,0),e}function gb(n,t,e){const[s,r]=_r(e==null?void 0:e.in,n,t),i=Qd(s),o=Qd(r),a=+i-Ec(i),c=+o-Ec(o);return Math.round((a-c)/jD)}function WD(n,t){const e=mb(n,t),s=Zt(n,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),Zr(s)}function GD(n,t,e){const s=ot(n,e==null?void 0:e.in);return s.setTime(s.getTime()+t*jo),s}function YD(n,t,e){return mh(n,t*3,e)}function KD(n,t,e){return gh(n,t*1e3)}function QD(n,t,e){return ll(n,t*7,e)}function XD(n,t,e){return mh(n,t*12,e)}function eo(n,t){const e=+ot(n)-+ot(t);return e<0?-1:e>0?1:e}function JD(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function _b(n){return!(!JD(n)&&typeof n!="number"||isNaN(+ot(n)))}function ZD(n,t,e){const[s,r]=_r(e==null?void 0:e.in,n,t),i=s.getFullYear()-r.getFullYear(),o=s.getMonth()-r.getMonth();return i*12+o}function t2(n,t,e){const[s,r]=_r(e==null?void 0:e.in,n,t);return s.getFullYear()-r.getFullYear()}function yb(n,t,e){const[s,r]=_r(e==null?void 0:e.in,n,t),i=hg(s,r),o=Math.abs(gb(s,r));s.setDate(s.getDate()-i*o);const a=+(hg(s,r)===-i),c=i*(o-a);return c===0?0:c}function hg(n,t){const e=n.getFullYear()-t.getFullYear()||n.getMonth()-t.getMonth()||n.getDate()-t.getDate()||n.getHours()-t.getHours()||n.getMinutes()-t.getMinutes()||n.getSeconds()-t.getSeconds()||n.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function Ho(n){return t=>{const s=(n?Math[n]:Math.trunc)(t);return s===0?0:s}}function e2(n,t,e){const[s,r]=_r(e==null?void 0:e.in,n,t),i=(+s-+r)/zo;return Ho(e==null?void 0:e.roundingMethod)(i)}function _h(n,t){return+ot(n)-+ot(t)}function n2(n,t,e){const s=_h(n,t)/jo;return Ho(e==null?void 0:e.roundingMethod)(s)}function vb(n,t){const e=ot(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function bb(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function s2(n,t){const e=ot(n,t==null?void 0:t.in);return+vb(e,t)==+bb(e,t)}function xb(n,t,e){const[s,r,i]=_r(e==null?void 0:e.in,n,n,t),o=eo(r,i),a=Math.abs(ZD(r,i));if(a<1)return 0;r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*a);let c=eo(r,i)===-o;s2(s)&&a===1&&eo(s,i)===1&&(c=!1);const l=o*(a-+c);return l===0?0:l}function r2(n,t,e){const s=xb(n,t,e)/3;return Ho(e==null?void 0:e.roundingMethod)(s)}function i2(n,t,e){const s=_h(n,t)/1e3;return Ho(e==null?void 0:e.roundingMethod)(s)}function o2(n,t,e){const s=yb(n,t,e)/7;return Ho(e==null?void 0:e.roundingMethod)(s)}function a2(n,t,e){const[s,r]=_r(e==null?void 0:e.in,n,t),i=eo(s,r),o=Math.abs(t2(s,r));s.setFullYear(1584),r.setFullYear(1584);const a=eo(s,r)===-i,c=i*(o-+a);return c===0?0:c}function c2(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getMonth(),r=s-s%3;return e.setMonth(r,1),e.setHours(0,0,0,0),e}function l2(n,t){const e=ot(n,t==null?void 0:t.in);return e.setDate(1),e.setHours(0,0,0,0),e}function d2(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getFullYear();return e.setFullYear(s+1,0,0),e.setHours(23,59,59,999),e}function wb(n,t){const e=ot(n,t==null?void 0:t.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}function u2(n,t){const e=ot(n,t==null?void 0:t.in);return e.setMinutes(59,59,999),e}function h2(n,t){var a,c;const e=gr(),s=e.weekStartsOn??((c=(a=e.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??0,r=ot(n,t==null?void 0:t.in),i=r.getDay(),o=(i<s?-7:0)+6-(i-s);return r.setDate(r.getDate()+o),r.setHours(23,59,59,999),r}function f2(n,t){const e=ot(n,t==null?void 0:t.in);return e.setSeconds(59,999),e}function p2(n,t){const e=ot(n,t==null?void 0:t.in),s=e.getMonth(),r=s-s%3+3;return e.setMonth(r,0),e.setHours(23,59,59,999),e}function m2(n,t){const e=ot(n,t==null?void 0:t.in);return e.setMilliseconds(999),e}const g2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},_2=(n,t,e)=>{let s;const r=g2[n];return typeof r=="string"?s=r:t===1?s=r.one:s=r.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+s:s+" ago":s};function nd(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const y2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},v2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},b2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},x2={date:nd({formats:y2,defaultWidth:"full"}),time:nd({formats:v2,defaultWidth:"full"}),dateTime:nd({formats:b2,defaultWidth:"full"})},w2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},E2=(n,t,e,s)=>w2[n];function Si(n){return(t,e)=>{const s=e!=null&&e.context?String(e.context):"standalone";let r;if(s==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,a=e!=null&&e.width?String(e.width):o;r=n.formattingValues[a]||n.formattingValues[o]}else{const o=n.defaultWidth,a=e!=null&&e.width?String(e.width):n.defaultWidth;r=n.values[a]||n.values[o]}const i=n.argumentCallback?n.argumentCallback(t):t;return r[i]}}const T2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},I2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},A2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},k2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},S2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},C2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},P2=(n,t)=>{const e=Number(n),s=e%100;if(s>20||s<10)switch(s%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},R2={ordinalNumber:P2,era:Si({values:T2,defaultWidth:"wide"}),quarter:Si({values:I2,defaultWidth:"wide",argumentCallback:n=>n-1}),month:Si({values:A2,defaultWidth:"wide"}),day:Si({values:k2,defaultWidth:"wide"}),dayPeriod:Si({values:S2,defaultWidth:"wide",formattingValues:C2,defaultFormattingWidth:"wide"})};function Ci(n){return(t,e={})=>{const s=e.width,r=s&&n.matchPatterns[s]||n.matchPatterns[n.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],a=s&&n.parsePatterns[s]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(a)?M2(a,h=>h.test(o)):D2(a,h=>h.test(o));let l;l=n.valueCallback?n.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;const u=t.slice(o.length);return{value:l,rest:u}}}function D2(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function M2(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function O2(n){return(t,e={})=>{const s=t.match(n.matchPattern);if(!s)return null;const r=s[0],i=t.match(n.parsePattern);if(!i)return null;let o=n.valueCallback?n.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;const a=t.slice(r.length);return{value:o,rest:a}}}const N2=/^(\d+)(th|st|nd|rd)?/i,L2=/\d+/i,V2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},F2={any:[/^b/i,/^(a|c)/i]},$2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},B2={any:[/1/i,/2/i,/3/i,/4/i]},U2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},j2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},z2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},H2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},q2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},W2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},G2={ordinalNumber:O2({matchPattern:N2,parsePattern:L2,valueCallback:n=>parseInt(n,10)}),era:Ci({matchPatterns:V2,defaultMatchWidth:"wide",parsePatterns:F2,defaultParseWidth:"any"}),quarter:Ci({matchPatterns:$2,defaultMatchWidth:"wide",parsePatterns:B2,defaultParseWidth:"any",valueCallback:n=>n+1}),month:Ci({matchPatterns:U2,defaultMatchWidth:"wide",parsePatterns:j2,defaultParseWidth:"any"}),day:Ci({matchPatterns:z2,defaultMatchWidth:"wide",parsePatterns:H2,defaultParseWidth:"any"}),dayPeriod:Ci({matchPatterns:q2,defaultMatchWidth:"any",parsePatterns:W2,defaultParseWidth:"any"})},Eb={code:"en-US",formatDistance:_2,formatLong:x2,formatRelative:E2,localize:R2,match:G2,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Y2(n,t){const e=ot(n,t==null?void 0:t.in);return gb(e,wb(e))+1}function Tb(n,t){const e=ot(n,t==null?void 0:t.in),s=+Zr(e)-+WD(e);return Math.round(s/pb)+1}function yh(n,t){var u,h,f,m;const e=ot(n,t==null?void 0:t.in),s=e.getFullYear(),r=gr(),i=(t==null?void 0:t.firstWeekContainsDate)??((h=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(f=r.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=Zt((t==null?void 0:t.in)||n,0);o.setFullYear(s+1,0,i),o.setHours(0,0,0,0);const a=In(o,t),c=Zt((t==null?void 0:t.in)||n,0);c.setFullYear(s,0,i),c.setHours(0,0,0,0);const l=In(c,t);return+e>=+a?s+1:+e>=+l?s:s-1}function K2(n,t){var a,c,l,u;const e=gr(),s=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((u=(l=e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??1,r=yh(n,t),i=Zt((t==null?void 0:t.in)||n,0);return i.setFullYear(r,0,s),i.setHours(0,0,0,0),In(i,t)}function Ib(n,t){const e=ot(n,t==null?void 0:t.in),s=+In(e,t)-+K2(e,t);return Math.round(s/pb)+1}function kt(n,t){const e=n<0?"-":"",s=Math.abs(n).toString().padStart(t,"0");return e+s}const ns={y(n,t){const e=n.getFullYear(),s=e>0?e:1-e;return kt(t==="yy"?s%100:s,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):kt(e+1,2)},d(n,t){return kt(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return kt(n.getHours()%12||12,t.length)},H(n,t){return kt(n.getHours(),t.length)},m(n,t){return kt(n.getMinutes(),t.length)},s(n,t){return kt(n.getSeconds(),t.length)},S(n,t){const e=t.length,s=n.getMilliseconds(),r=Math.trunc(s*Math.pow(10,e-3));return kt(r,t.length)}},Ar={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fg={G:function(n,t,e){const s=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(s,{width:"abbreviated"});case"GGGGG":return e.era(s,{width:"narrow"});case"GGGG":default:return e.era(s,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const s=n.getFullYear(),r=s>0?s:1-s;return e.ordinalNumber(r,{unit:"year"})}return ns.y(n,t)},Y:function(n,t,e,s){const r=yh(n,s),i=r>0?r:1-r;if(t==="YY"){const o=i%100;return kt(o,2)}return t==="Yo"?e.ordinalNumber(i,{unit:"year"}):kt(i,t.length)},R:function(n,t){const e=mb(n);return kt(e,t.length)},u:function(n,t){const e=n.getFullYear();return kt(e,t.length)},Q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return kt(s,2);case"Qo":return e.ordinalNumber(s,{unit:"quarter"});case"QQQ":return e.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(s,{width:"wide",context:"formatting"})}},q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return kt(s,2);case"qo":return e.ordinalNumber(s,{unit:"quarter"});case"qqq":return e.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(s,{width:"wide",context:"standalone"})}},M:function(n,t,e){const s=n.getMonth();switch(t){case"M":case"MM":return ns.M(n,t);case"Mo":return e.ordinalNumber(s+1,{unit:"month"});case"MMM":return e.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(s,{width:"wide",context:"formatting"})}},L:function(n,t,e){const s=n.getMonth();switch(t){case"L":return String(s+1);case"LL":return kt(s+1,2);case"Lo":return e.ordinalNumber(s+1,{unit:"month"});case"LLL":return e.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(s,{width:"wide",context:"standalone"})}},w:function(n,t,e,s){const r=Ib(n,s);return t==="wo"?e.ordinalNumber(r,{unit:"week"}):kt(r,t.length)},I:function(n,t,e){const s=Tb(n);return t==="Io"?e.ordinalNumber(s,{unit:"week"}):kt(s,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):ns.d(n,t)},D:function(n,t,e){const s=Y2(n);return t==="Do"?e.ordinalNumber(s,{unit:"dayOfYear"}):kt(s,t.length)},E:function(n,t,e){const s=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(s,{width:"short",context:"formatting"});case"EEEE":default:return e.day(s,{width:"wide",context:"formatting"})}},e:function(n,t,e,s){const r=n.getDay(),i=(r-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return kt(i,2);case"eo":return e.ordinalNumber(i,{unit:"day"});case"eee":return e.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(r,{width:"short",context:"formatting"});case"eeee":default:return e.day(r,{width:"wide",context:"formatting"})}},c:function(n,t,e,s){const r=n.getDay(),i=(r-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return kt(i,t.length);case"co":return e.ordinalNumber(i,{unit:"day"});case"ccc":return e.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(r,{width:"narrow",context:"standalone"});case"cccccc":return e.day(r,{width:"short",context:"standalone"});case"cccc":default:return e.day(r,{width:"wide",context:"standalone"})}},i:function(n,t,e){const s=n.getDay(),r=s===0?7:s;switch(t){case"i":return String(r);case"ii":return kt(r,t.length);case"io":return e.ordinalNumber(r,{unit:"day"});case"iii":return e.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(s,{width:"short",context:"formatting"});case"iiii":default:return e.day(s,{width:"wide",context:"formatting"})}},a:function(n,t,e){const r=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,t,e){const s=n.getHours();let r;switch(s===12?r=Ar.noon:s===0?r=Ar.midnight:r=s/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(n,t,e){const s=n.getHours();let r;switch(s>=17?r=Ar.evening:s>=12?r=Ar.afternoon:s>=4?r=Ar.morning:r=Ar.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let s=n.getHours()%12;return s===0&&(s=12),e.ordinalNumber(s,{unit:"hour"})}return ns.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):ns.H(n,t)},K:function(n,t,e){const s=n.getHours()%12;return t==="Ko"?e.ordinalNumber(s,{unit:"hour"}):kt(s,t.length)},k:function(n,t,e){let s=n.getHours();return s===0&&(s=24),t==="ko"?e.ordinalNumber(s,{unit:"hour"}):kt(s,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):ns.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):ns.s(n,t)},S:function(n,t){return ns.S(n,t)},X:function(n,t,e){const s=n.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return mg(s);case"XXXX":case"XX":return js(s);case"XXXXX":case"XXX":default:return js(s,":")}},x:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"x":return mg(s);case"xxxx":case"xx":return js(s);case"xxxxx":case"xxx":default:return js(s,":")}},O:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+pg(s,":");case"OOOO":default:return"GMT"+js(s,":")}},z:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+pg(s,":");case"zzzz":default:return"GMT"+js(s,":")}},t:function(n,t,e){const s=Math.trunc(+n/1e3);return kt(s,t.length)},T:function(n,t,e){return kt(+n,t.length)}};function pg(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),r=Math.trunc(s/60),i=s%60;return i===0?e+String(r):e+String(r)+t+kt(i,2)}function mg(n,t){return n%60===0?(n>0?"-":"+")+kt(Math.abs(n)/60,2):js(n,t)}function js(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),r=kt(Math.trunc(s/60),2),i=kt(s%60,2);return e+r+t+i}const gg=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Ab=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Q2=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],s=e[1],r=e[2];if(!r)return gg(n,t);let i;switch(s){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",gg(s,t)).replace("{{time}}",Ab(r,t))},Xd={p:Ab,P:Q2},X2=/^D+$/,J2=/^Y+$/,Z2=["D","DD","YY","YYYY"];function kb(n){return X2.test(n)}function Sb(n){return J2.test(n)}function Jd(n,t,e){const s=tM(n,t,e);if(console.warn(s),Z2.includes(n))throw new RangeError(s)}function tM(n,t,e){const s=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const eM=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nM=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sM=/^'([^]*?)'?$/,rM=/''/g,iM=/[a-zA-Z]/;function oM(n,t,e){var u,h,f,m,g,v,y,k;const s=gr(),r=(e==null?void 0:e.locale)??s.locale??Eb,i=(e==null?void 0:e.firstWeekContainsDate)??((h=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(f=s.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((v=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??s.weekStartsOn??((k=(y=s.locale)==null?void 0:y.options)==null?void 0:k.weekStartsOn)??0,a=ot(n,e==null?void 0:e.in);if(!_b(a))throw new RangeError("Invalid time value");let c=t.match(nM).map(T=>{const A=T[0];if(A==="p"||A==="P"){const P=Xd[A];return P(T,r.formatLong)}return T}).join("").match(eM).map(T=>{if(T==="''")return{isToken:!1,value:"'"};const A=T[0];if(A==="'")return{isToken:!1,value:aM(T)};if(fg[A])return{isToken:!0,value:T};if(A.match(iM))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return{isToken:!1,value:T}});r.localize.preprocessor&&(c=r.localize.preprocessor(a,c));const l={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return c.map(T=>{if(!T.isToken)return T.value;const A=T.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&Sb(A)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&kb(A))&&Jd(A,t,String(n));const P=fg[A[0]];return P(a,A,r.localize,l)}).join("")}function aM(n){const t=n.match(sM);return t?t[1].replace(rM,"'"):n}function cM(){return Object.assign({},gr())}function lM(n,t){const e=ot(n,t==null?void 0:t.in).getDay();return e===0?7:e}function dM(n,t){const e=uM(t)?new t(0):Zt(t,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function uM(n){var t;return typeof n=="function"&&((t=n.prototype)==null?void 0:t.constructor)===n}const hM=10;class Cb{constructor(){L(this,"subPriority",0)}validate(t,e){return!0}}class fM extends Cb{constructor(t,e,s,r,i){super(),this.value=t,this.validateValue=e,this.setValue=s,this.priority=r,i&&(this.subPriority=i)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,s){return this.setValue(t,e,this.value,s)}}class pM extends Cb{constructor(e,s){super();L(this,"priority",hM);L(this,"subPriority",-1);this.context=e||(r=>Zt(s,r))}set(e,s){return s.timestampIsSet?e:Zt(e,dM(e,this.context))}}class wt{run(t,e,s,r){const i=this.parse(t,e,s,r);return i?{setter:new fM(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,e,s){return!0}}class mM extends wt{constructor(){super(...arguments);L(this,"priority",140);L(this,"incompatibleTokens",["R","u","t","T"])}parse(e,s,r){switch(s){case"G":case"GG":case"GGG":return r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"});case"GGGGG":return r.era(e,{width:"narrow"});case"GGGG":default:return r.era(e,{width:"wide"})||r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"})}}set(e,s,r){return s.era=r,e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}const se={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},mn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function re(n,t){return n&&{value:t(n.value),rest:n.rest}}function Wt(n,t){const e=t.match(n);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function gn(n,t){const e=t.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};const s=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,i=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:s*(r*zo+i*jo+o*zD),rest:t.slice(e[0].length)}}function Pb(n){return Wt(se.anyDigitsSigned,n)}function te(n,t){switch(n){case 1:return Wt(se.singleDigit,t);case 2:return Wt(se.twoDigits,t);case 3:return Wt(se.threeDigits,t);case 4:return Wt(se.fourDigits,t);default:return Wt(new RegExp("^\\d{1,"+n+"}"),t)}}function Tc(n,t){switch(n){case 1:return Wt(se.singleDigitSigned,t);case 2:return Wt(se.twoDigitsSigned,t);case 3:return Wt(se.threeDigitsSigned,t);case 4:return Wt(se.fourDigitsSigned,t);default:return Wt(new RegExp("^-?\\d{1,"+n+"}"),t)}}function vh(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Rb(n,t){const e=t>0,s=e?t:1-t;let r;if(s<=50)r=n||100;else{const i=s+50,o=Math.trunc(i/100)*100,a=n>=i%100;r=n+o-(a?100:0)}return e?r:1-r}function Db(n){return n%400===0||n%4===0&&n%100!==0}class gM extends wt{constructor(){super(...arguments);L(this,"priority",130);L(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,s,r){const i=o=>({year:o,isTwoDigitYear:s==="yy"});switch(s){case"y":return re(te(4,e),i);case"yo":return re(r.ordinalNumber(e,{unit:"year"}),i);default:return re(te(s.length,e),i)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,r){const i=e.getFullYear();if(r.isTwoDigitYear){const a=Rb(r.year,i);return e.setFullYear(a,0,1),e.setHours(0,0,0,0),e}const o=!("era"in s)||s.era===1?r.year:1-r.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class _M extends wt{constructor(){super(...arguments);L(this,"priority",130);L(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,s,r){const i=o=>({year:o,isTwoDigitYear:s==="YY"});switch(s){case"Y":return re(te(4,e),i);case"Yo":return re(r.ordinalNumber(e,{unit:"year"}),i);default:return re(te(s.length,e),i)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,r,i){const o=yh(e,i);if(r.isTwoDigitYear){const c=Rb(r.year,o);return e.setFullYear(c,0,i.firstWeekContainsDate),e.setHours(0,0,0,0),In(e,i)}const a=!("era"in s)||s.era===1?r.year:1-r.year;return e.setFullYear(a,0,i.firstWeekContainsDate),e.setHours(0,0,0,0),In(e,i)}}class yM extends wt{constructor(){super(...arguments);L(this,"priority",130);L(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,s){return Tc(s==="R"?4:s.length,e)}set(e,s,r){const i=Zt(e,0);return i.setFullYear(r,0,4),i.setHours(0,0,0,0),Zr(i)}}class vM extends wt{constructor(){super(...arguments);L(this,"priority",130);L(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,s){return Tc(s==="u"?4:s.length,e)}set(e,s,r){return e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}class bM extends wt{constructor(){super(...arguments);L(this,"priority",120);L(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"Q":case"QQ":return te(s.length,e);case"Qo":return r.ordinalNumber(e,{unit:"quarter"});case"QQQ":return r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(e,{width:"wide",context:"formatting"})||r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=1&&s<=4}set(e,s,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class xM extends wt{constructor(){super(...arguments);L(this,"priority",120);L(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"q":case"qq":return te(s.length,e);case"qo":return r.ordinalNumber(e,{unit:"quarter"});case"qqq":return r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(e,{width:"wide",context:"standalone"})||r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=1&&s<=4}set(e,s,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class wM extends wt{constructor(){super(...arguments);L(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);L(this,"priority",110)}parse(e,s,r){const i=o=>o-1;switch(s){case"M":return re(Wt(se.month,e),i);case"MM":return re(te(2,e),i);case"Mo":return re(r.ordinalNumber(e,{unit:"month"}),i);case"MMM":return r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(e,{width:"wide",context:"formatting"})||r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}class EM extends wt{constructor(){super(...arguments);L(this,"priority",110);L(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,s,r){const i=o=>o-1;switch(s){case"L":return re(Wt(se.month,e),i);case"LL":return re(te(2,e),i);case"Lo":return re(r.ordinalNumber(e,{unit:"month"}),i);case"LLL":return r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(e,{width:"wide",context:"standalone"})||r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}function TM(n,t,e){const s=ot(n,e==null?void 0:e.in),r=Ib(s,e)-t;return s.setDate(s.getDate()-r*7),ot(s,e==null?void 0:e.in)}class IM extends wt{constructor(){super(...arguments);L(this,"priority",100);L(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,s,r){switch(s){case"w":return Wt(se.week,e);case"wo":return r.ordinalNumber(e,{unit:"week"});default:return te(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,r,i){return In(TM(e,r,i),i)}}function AM(n,t,e){const s=ot(n,e==null?void 0:e.in),r=Tb(s,e)-t;return s.setDate(s.getDate()-r*7),s}class kM extends wt{constructor(){super(...arguments);L(this,"priority",100);L(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,s,r){switch(s){case"I":return Wt(se.week,e);case"Io":return r.ordinalNumber(e,{unit:"week"});default:return te(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,r){return Zr(AM(e,r))}}const SM=[31,28,31,30,31,30,31,31,30,31,30,31],CM=[31,29,31,30,31,30,31,31,30,31,30,31];class PM extends wt{constructor(){super(...arguments);L(this,"priority",90);L(this,"subPriority",1);L(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"d":return Wt(se.date,e);case"do":return r.ordinalNumber(e,{unit:"date"});default:return te(s.length,e)}}validate(e,s){const r=e.getFullYear(),i=Db(r),o=e.getMonth();return i?s>=1&&s<=CM[o]:s>=1&&s<=SM[o]}set(e,s,r){return e.setDate(r),e.setHours(0,0,0,0),e}}class RM extends wt{constructor(){super(...arguments);L(this,"priority",90);L(this,"subpriority",1);L(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,s,r){switch(s){case"D":case"DD":return Wt(se.dayOfYear,e);case"Do":return r.ordinalNumber(e,{unit:"date"});default:return te(s.length,e)}}validate(e,s){const r=e.getFullYear();return Db(r)?s>=1&&s<=366:s>=1&&s<=365}set(e,s,r){return e.setMonth(0,r),e.setHours(0,0,0,0),e}}function bh(n,t,e){var h,f,m,g;const s=gr(),r=(e==null?void 0:e.weekStartsOn)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??s.weekStartsOn??((g=(m=s.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,i=ot(n,e==null?void 0:e.in),o=i.getDay(),c=(t%7+7)%7,l=7-r,u=t<0||t>6?t-(o+l)%7:(c+l)%7-(o+l)%7;return ll(i,u,e)}class DM extends wt{constructor(){super(...arguments);L(this,"priority",90);L(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"E":case"EE":case"EEE":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=bh(e,r,i),e.setHours(0,0,0,0),e}}class MM extends wt{constructor(){super(...arguments);L(this,"priority",90);L(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,s,r,i){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+c};switch(s){case"e":case"ee":return re(te(s.length,e),o);case"eo":return re(r.ordinalNumber(e,{unit:"day"}),o);case"eee":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeeee":return r.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=bh(e,r,i),e.setHours(0,0,0,0),e}}class OM extends wt{constructor(){super(...arguments);L(this,"priority",90);L(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,s,r,i){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+c};switch(s){case"c":case"cc":return re(te(s.length,e),o);case"co":return re(r.ordinalNumber(e,{unit:"day"}),o);case"ccc":return r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"ccccc":return r.day(e,{width:"narrow",context:"standalone"});case"cccccc":return r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(e,{width:"wide",context:"standalone"})||r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=bh(e,r,i),e.setHours(0,0,0,0),e}}function NM(n,t,e){const s=ot(n,e==null?void 0:e.in),r=lM(s,e),i=t-r;return ll(s,i,e)}class LM extends wt{constructor(){super(...arguments);L(this,"priority",90);L(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,s,r){const i=o=>o===0?7:o;switch(s){case"i":case"ii":return te(s.length,e);case"io":return r.ordinalNumber(e,{unit:"day"});case"iii":return re(r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i);case"iiiii":return re(r.day(e,{width:"narrow",context:"formatting"}),i);case"iiiiii":return re(r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i);case"iiii":default:return re(r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i)}}validate(e,s){return s>=1&&s<=7}set(e,s,r){return e=NM(e,r),e.setHours(0,0,0,0),e}}class VM extends wt{constructor(){super(...arguments);L(this,"priority",80);L(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,s,r){switch(s){case"a":case"aa":case"aaa":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(vh(r),0,0,0),e}}class FM extends wt{constructor(){super(...arguments);L(this,"priority",80);L(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,s,r){switch(s){case"b":case"bb":case"bbb":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(vh(r),0,0,0),e}}class $M extends wt{constructor(){super(...arguments);L(this,"priority",80);L(this,"incompatibleTokens",["a","b","t","T"])}parse(e,s,r){switch(s){case"B":case"BB":case"BBB":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(vh(r),0,0,0),e}}class BM extends wt{constructor(){super(...arguments);L(this,"priority",70);L(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,s,r){switch(s){case"h":return Wt(se.hour12h,e);case"ho":return r.ordinalNumber(e,{unit:"hour"});default:return te(s.length,e)}}validate(e,s){return s>=1&&s<=12}set(e,s,r){const i=e.getHours()>=12;return i&&r<12?e.setHours(r+12,0,0,0):!i&&r===12?e.setHours(0,0,0,0):e.setHours(r,0,0,0),e}}class UM extends wt{constructor(){super(...arguments);L(this,"priority",70);L(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,s,r){switch(s){case"H":return Wt(se.hour23h,e);case"Ho":return r.ordinalNumber(e,{unit:"hour"});default:return te(s.length,e)}}validate(e,s){return s>=0&&s<=23}set(e,s,r){return e.setHours(r,0,0,0),e}}class jM extends wt{constructor(){super(...arguments);L(this,"priority",70);L(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,s,r){switch(s){case"K":return Wt(se.hour11h,e);case"Ko":return r.ordinalNumber(e,{unit:"hour"});default:return te(s.length,e)}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.getHours()>=12&&r<12?e.setHours(r+12,0,0,0):e.setHours(r,0,0,0),e}}class zM extends wt{constructor(){super(...arguments);L(this,"priority",70);L(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,s,r){switch(s){case"k":return Wt(se.hour24h,e);case"ko":return r.ordinalNumber(e,{unit:"hour"});default:return te(s.length,e)}}validate(e,s){return s>=1&&s<=24}set(e,s,r){const i=r<=24?r%24:r;return e.setHours(i,0,0,0),e}}class HM extends wt{constructor(){super(...arguments);L(this,"priority",60);L(this,"incompatibleTokens",["t","T"])}parse(e,s,r){switch(s){case"m":return Wt(se.minute,e);case"mo":return r.ordinalNumber(e,{unit:"minute"});default:return te(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,r){return e.setMinutes(r,0,0),e}}class qM extends wt{constructor(){super(...arguments);L(this,"priority",50);L(this,"incompatibleTokens",["t","T"])}parse(e,s,r){switch(s){case"s":return Wt(se.second,e);case"so":return r.ordinalNumber(e,{unit:"second"});default:return te(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,r){return e.setSeconds(r,0),e}}class WM extends wt{constructor(){super(...arguments);L(this,"priority",30);L(this,"incompatibleTokens",["t","T"])}parse(e,s){const r=i=>Math.trunc(i*Math.pow(10,-s.length+3));return re(te(s.length,e),r)}set(e,s,r){return e.setMilliseconds(r),e}}class GM extends wt{constructor(){super(...arguments);L(this,"priority",10);L(this,"incompatibleTokens",["t","T","x"])}parse(e,s){switch(s){case"X":return gn(mn.basicOptionalMinutes,e);case"XX":return gn(mn.basic,e);case"XXXX":return gn(mn.basicOptionalSeconds,e);case"XXXXX":return gn(mn.extendedOptionalSeconds,e);case"XXX":default:return gn(mn.extended,e)}}set(e,s,r){return s.timestampIsSet?e:Zt(e,e.getTime()-Ec(e)-r)}}class YM extends wt{constructor(){super(...arguments);L(this,"priority",10);L(this,"incompatibleTokens",["t","T","X"])}parse(e,s){switch(s){case"x":return gn(mn.basicOptionalMinutes,e);case"xx":return gn(mn.basic,e);case"xxxx":return gn(mn.basicOptionalSeconds,e);case"xxxxx":return gn(mn.extendedOptionalSeconds,e);case"xxx":default:return gn(mn.extended,e)}}set(e,s,r){return s.timestampIsSet?e:Zt(e,e.getTime()-Ec(e)-r)}}class KM extends wt{constructor(){super(...arguments);L(this,"priority",40);L(this,"incompatibleTokens","*")}parse(e){return Pb(e)}set(e,s,r){return[Zt(e,r*1e3),{timestampIsSet:!0}]}}class QM extends wt{constructor(){super(...arguments);L(this,"priority",20);L(this,"incompatibleTokens","*")}parse(e){return Pb(e)}set(e,s,r){return[Zt(e,r),{timestampIsSet:!0}]}}const XM={G:new mM,y:new gM,Y:new _M,R:new yM,u:new vM,Q:new bM,q:new xM,M:new wM,L:new EM,w:new IM,I:new kM,d:new PM,D:new RM,E:new DM,e:new MM,c:new OM,i:new LM,a:new VM,b:new FM,B:new $M,h:new BM,H:new UM,K:new jM,k:new zM,m:new HM,s:new qM,S:new WM,X:new GM,x:new YM,t:new KM,T:new QM},JM=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ZM=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tO=/^'([^]*?)'?$/,eO=/''/g,nO=/\S/,sO=/[a-zA-Z]/;function rO(n,t,e,s){var y,k,T,A,P,R,M,w;const r=()=>Zt((s==null?void 0:s.in)||e,NaN),i=cM(),o=(s==null?void 0:s.locale)??i.locale??Eb,a=(s==null?void 0:s.firstWeekContainsDate)??((k=(y=s==null?void 0:s.locale)==null?void 0:y.options)==null?void 0:k.firstWeekContainsDate)??i.firstWeekContainsDate??((A=(T=i.locale)==null?void 0:T.options)==null?void 0:A.firstWeekContainsDate)??1,c=(s==null?void 0:s.weekStartsOn)??((R=(P=s==null?void 0:s.locale)==null?void 0:P.options)==null?void 0:R.weekStartsOn)??i.weekStartsOn??((w=(M=i.locale)==null?void 0:M.options)==null?void 0:w.weekStartsOn)??0;if(!t)return n?r():ot(e,s==null?void 0:s.in);const l={firstWeekContainsDate:a,weekStartsOn:c,locale:o},u=[new pM(s==null?void 0:s.in,e)],h=t.match(ZM).map(b=>{const x=b[0];if(x in Xd){const S=Xd[x];return S(b,o.formatLong)}return b}).join("").match(JM),f=[];for(let b of h){!(s!=null&&s.useAdditionalWeekYearTokens)&&Sb(b)&&Jd(b,t,n),!(s!=null&&s.useAdditionalDayOfYearTokens)&&kb(b)&&Jd(b,t,n);const x=b[0],S=XM[x];if(S){const{incompatibleTokens:I}=S;if(Array.isArray(I)){const C=f.find(J=>I.includes(J.token)||J.token===x);if(C)throw new RangeError(`The format string mustn't contain \`${C.fullToken}\` and \`${b}\` at the same time`)}else if(S.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${b}\` and any other token at the same time`);f.push({token:x,fullToken:b});const D=S.run(n,b,o.match,l);if(!D)return r();u.push(D.setter),n=D.rest}else{if(x.match(sO))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");if(b==="''"?b="'":x==="'"&&(b=iO(b)),n.indexOf(b)===0)n=n.slice(b.length);else return r()}}if(n.length>0&&nO.test(n))return r();const m=u.map(b=>b.priority).sort((b,x)=>x-b).filter((b,x,S)=>S.indexOf(b)===x).map(b=>u.filter(x=>x.priority===b).sort((x,S)=>S.subPriority-x.subPriority)).map(b=>b[0]);let g=ot(e,s==null?void 0:s.in);if(isNaN(+g))return r();const v={};for(const b of m){if(!b.validate(g,l))return r();const x=b.set(g,v,l);Array.isArray(x)?(g=x[0],Object.assign(v,x[1])):g=x}return g}function iO(n){return n.match(tO)[1].replace(eO,"'")}function oO(n,t){const e=ot(n,t==null?void 0:t.in);return e.setMinutes(0,0,0),e}function aO(n,t){const e=ot(n,t==null?void 0:t.in);return e.setSeconds(0,0),e}function cO(n,t){const e=ot(n,t==null?void 0:t.in);return e.setMilliseconds(0),e}function lO(n,t){const e=()=>Zt(t==null?void 0:t.in,NaN),s=(t==null?void 0:t.additionalDigits)??2,r=fO(n);let i;if(r.date){const l=pO(r.date,s);i=mO(l.restDateString,l.year)}if(!i||isNaN(+i))return e();const o=+i;let a=0,c;if(r.time&&(a=gO(r.time),isNaN(a)))return e();if(r.timezone){if(c=_O(r.timezone),isNaN(c))return e()}else{const l=new Date(o+a),u=ot(0,t==null?void 0:t.in);return u.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),u.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),u}return ot(o+a+c,t==null?void 0:t.in)}const Pa={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},dO=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,uO=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,hO=/^([+-])(\d{2})(?::?(\d{2}))?$/;function fO(n){const t={},e=n.split(Pa.dateTimeDelimiter);let s;if(e.length>2)return t;if(/:/.test(e[0])?s=e[0]:(t.date=e[0],s=e[1],Pa.timeZoneDelimiter.test(t.date)&&(t.date=n.split(Pa.timeZoneDelimiter)[0],s=n.substr(t.date.length,n.length))),s){const r=Pa.timezone.exec(s);r?(t.time=s.replace(r[1],""),t.timezone=r[1]):t.time=s}return t}function pO(n,t){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),s=n.match(e);if(!s)return{year:NaN,restDateString:""};const r=s[1]?parseInt(s[1]):null,i=s[2]?parseInt(s[2]):null;return{year:i===null?r:i*100,restDateString:n.slice((s[1]||s[2]).length)}}function mO(n,t){if(t===null)return new Date(NaN);const e=n.match(dO);if(!e)return new Date(NaN);const s=!!e[4],r=Pi(e[1]),i=Pi(e[2])-1,o=Pi(e[3]),a=Pi(e[4]),c=Pi(e[5])-1;if(s)return wO(t,a,c)?yO(t,a,c):new Date(NaN);{const l=new Date(0);return!bO(t,i,o)||!xO(t,r)?new Date(NaN):(l.setUTCFullYear(t,i,Math.max(r,o)),l)}}function Pi(n){return n?parseInt(n):1}function gO(n){const t=n.match(uO);if(!t)return NaN;const e=sd(t[1]),s=sd(t[2]),r=sd(t[3]);return EO(e,s,r)?e*zo+s*jo+r*1e3:NaN}function sd(n){return n&&parseFloat(n.replace(",","."))||0}function _O(n){if(n==="Z")return 0;const t=n.match(hO);if(!t)return 0;const e=t[1]==="+"?-1:1,s=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return TO(s,r)?e*(s*zo+r*jo):NaN}function yO(n,t,e){const s=new Date(0);s.setUTCFullYear(n,0,4);const r=s.getUTCDay()||7,i=(t-1)*7+e+1-r;return s.setUTCDate(s.getUTCDate()+i),s}const vO=[31,null,31,30,31,30,31,31,30,31,30,31];function Mb(n){return n%400===0||n%4===0&&n%100!==0}function bO(n,t,e){return t>=0&&t<=11&&e>=1&&e<=(vO[t]||(Mb(n)?29:28))}function xO(n,t){return t>=1&&t<=(Mb(n)?366:365)}function wO(n,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function EO(n,t,e){return n===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25}function TO(n,t){return t>=0&&t<=59}/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */const IO={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};Hv._date.override({_id:"date-fns",formats:function(){return IO},parse:function(n,t){if(n===null||typeof n>"u")return null;const e=typeof n;return e==="number"||n instanceof Date?n=ot(n):e==="string"&&(typeof t=="string"?n=rO(n,t,new Date,this.options):n=lO(n,this.options)),_b(n)?n.getTime():null},format:function(n,t){return oM(n,t,this.options)},add:function(n,t,e){switch(e){case"millisecond":return gh(n,t);case"second":return KD(n,t);case"minute":return GD(n,t);case"hour":return HD(n,t);case"day":return ll(n,t);case"week":return QD(n,t);case"month":return mh(n,t);case"quarter":return YD(n,t);case"year":return XD(n,t);default:return n}},diff:function(n,t,e){switch(e){case"millisecond":return _h(n,t);case"second":return i2(n,t);case"minute":return n2(n,t);case"hour":return e2(n,t);case"day":return yb(n,t);case"week":return o2(n,t);case"month":return xb(n,t);case"quarter":return r2(n,t);case"year":return a2(n,t);default:return 0}},startOf:function(n,t,e){switch(t){case"second":return cO(n);case"minute":return aO(n);case"hour":return oO(n);case"day":return Qd(n);case"week":return In(n);case"isoWeek":return In(n,{weekStartsOn:+e});case"month":return l2(n);case"quarter":return c2(n);case"year":return wb(n);default:return n}},endOf:function(n,t){switch(t){case"second":return m2(n);case"minute":return f2(n);case"hour":return u2(n);case"day":return vb(n);case"week":return h2(n);case"month":return bb(n);case"quarter":return p2(n);case"year":return d2(n);default:return n}}});const un={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},Ra=()=>{var i,o;const n=typeof window<"u"?getComputedStyle(document.documentElement):null,t=(o=(i=document.documentElement)==null?void 0:i.classList)==null?void 0:o.contains("theme-light"),e=(a,c)=>(n?(n.getPropertyValue(a)||"").trim():"")||c,s=t?"#0b0b0b":"#e5e5e5",r=t?"#111827":"#a1a1aa";return{isLight:t,text:e("--color-text",s),muted:e("--color-text-muted",r),primary:e("--color-primary","#22c55e"),danger:e("--color-alert","#ef4444"),grid:t?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",weekendShade:t?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.03)",holidayShade:t?"rgba(255,206,86,0.18)":"rgba(255,206,86,0.08)"}},jt={renderEmpty:n=>{const t=document.getElementById(n);if(!t)return;const e=t.parentElement;if(!e)return;t.style.display="none";let s=e.querySelector(".chart-placeholder");s||(s=document.createElement("div"),s.className="chart-placeholder text-center text-sm text-text-muted py-6",e.appendChild(s)),s.textContent="Sem dados"},renderHorasNormaisExtras:(n,t={},e={})=>{const s=Ra(),r=document.getElementById(n);if(!r)return;const i=Array.from(new Set([...Object.keys(t),...Object.keys(e)])).sort(),o=i.map(c=>t[c]||0),a=i.map(c=>e[c]||0);r.chart&&r.chart.destroy(),r.chart=new gt(r,{type:"bar",data:{labels:i.map(c=>{const l=new Date(c);return l.setHours(12,0,0,0),l.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Horas Normais",data:o,backgroundColor:s.primary},{label:"Horas Extras",data:a,backgroundColor:s.danger}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:s.text,font:un}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{color:s.muted,font:un,maxRotation:45,autoSkip:!0}},y:{stacked:!0,grid:{color:s.grid},ticks:{color:s.muted,font:un},beginAtZero:!0}}}})},renderCurvaHoras:(n,t=[],e=[],s=[])=>{const r=Ra(),i=document.getElementById(n);if(!i)return;i.chart&&i.chart.destroy();const o=[...t||[]].sort((m,g)=>new Date(m.x)-new Date(g.x)),a=[...e||[]].sort((m,g)=>new Date(m.x)-new Date(g.x)),c=[...o,...a].map(m=>new Date(m.x)).filter(m=>!Number.isNaN(m)),l=c.length?new Date(Math.min(...c)):null,u=c.length?new Date(Math.max(...c)):null,h={id:"weekendShade",beforeDraw(m){const g=m.scales.x,v=m.ctx,y=g.min,k=g.max;if(!y||!k)return;const T=24*60*60*1e3;let A=y-(new Date(y).getDay()+7)%7*T;for(;A<=k+T*7;){const P=new Date(A),R=P.getDay();if(R===0||R===6){const M=g.getPixelForValue(P),w=g.getPixelForValue(new Date(A+T));v.save(),v.fillStyle=r.weekendShade,v.fillRect(M,m.chartArea.top,w-M,m.chartArea.bottom-m.chartArea.top),v.restore()}A+=T}}},f={id:"holidayShade",beforeDraw(m){if(!s||!s.length)return;const g=m.scales.x,v=m.ctx;s.forEach(y=>{const k=new Date(y);if(Number.isNaN(k))return;const T=g.getPixelForValue(k),A=g.getPixelForValue(new Date(k.getTime()+24*60*60*1e3));v.save(),v.fillStyle=r.holidayShade,v.fillRect(T,m.chartArea.top,A-T,m.chartArea.bottom-m.chartArea.top),v.restore()})}};i.chart=new gt(i,{type:"line",data:{datasets:[{label:"Horas Planejadas",data:o,borderColor:r.primary,backgroundColor:r.isLight?"rgba(34,197,94,0.15)":"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:2,pointRadius:0,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Horas Executadas",data:a,borderColor:r.danger,backgroundColor:r.isLight?"rgba(239,68,68,0.12)":"rgba(239,68,68,0.1)",fill:!0,tension:.3,borderWidth:3,pointRadius:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:r.grid},offset:!1,bounds:"ticks",min:l||void 0,max:u||void 0,ticks:{source:"data",color:r.muted,font:un,autoSkip:!0,maxRotation:0,callback:m=>{const g=new Date(m),v=g.toLocaleDateString("en-US",{month:"short",day:"numeric"}),y=g.getDay();return y===1?`${v} (Mon)`:y===5?`${v} (Fri)`:v}}},y:{grid:{color:r.grid},ticks:{color:r.muted,font:un},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:r.text,font:un,usePointStyle:!0}},weekendShade:!0}},plugins:[h,f]})},renderHorasStacked:(n,t={})=>{const e=Ra(),s=document.getElementById(n);if(!s)return;s.chart&&s.chart.destroy();const{plannedNormal:r=0,plannedExtra:i=0,execNormal:o=0,execExtra:a=0}=t;s.chart=new gt(s,{type:"bar",data:{labels:["Planejado","Gasto"],datasets:[{label:"Normais (Planejado)",data:[r,0],backgroundColor:e.primary,stack:"planejado"},{label:"Extras conv. (Planejado)",data:[i,0],backgroundColor:e.isLight?"#f97316cc":"#f97316",stack:"planejado"},{label:"Normais (Gasto)",data:[0,o],backgroundColor:e.muted,stack:"executado"},{label:"Extras conv. (Gasto)",data:[0,a],backgroundColor:e.danger,stack:"executado"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text,font:un}},tooltip:{callbacks:{label:c=>`${c.dataset.label}: ${c.parsed.y.toFixed(1)}h`}}},scales:{x:{stacked:!0,ticks:{color:e.muted,font:un},grid:{display:!1}},y:{stacked:!0,beginAtZero:!0,ticks:{color:e.muted,font:un},grid:{color:e.grid}}}}})},renderHorasPorFuncao:(n,t={})=>{const e=Ra(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new gt(s,{type:"doughnut",data:{labels:r,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#0ea5e9","#f59e0b","#ef4444","#a855f7","#6366f1"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:e.text,font:un,usePointStyle:!0}}}}})}},wo=n=>n instanceof Date&&!isNaN(n),AO=(n,t)=>{const e=new Date(n),s=new Date(t);if(!wo(e)||!wo(s)||e>s)return[];const r=[];for(let i=new Date(e);i<=s;i.setDate(i.getDate()+1))r.push(new Date(i));return r},Ob=n=>wo(n)?n.toISOString().split("T")[0]:null,Nb=n=>{if(!(n!=null&&n.data_inicio)||!(n!=null&&n.data_prevista_fim))return[];const t=new Date(n.data_inicio),e=new Date(n.data_prevista_fim);if(!wo(t)||!wo(e)||t>e)return[];const s=AO(t,e),r=s.length?(n.orcamento||0)/s.length:0;let i=0;return s.map(o=>{i+=r;const a=Ob(o);return a?{x:a,y:i}:null}).filter(Boolean)},Lb=(n=[],t={},e=0,s=0,r={})=>{const i={};n.forEach(c=>{const l=c.data_recebimento||c.data_emissao||c.previsao_entrega||c.data_solicitacao;if(!l)return;const u=Ob(new Date(l));if(!u)return;const h=Number(c.valor_total||c.valor_estimado||0);i[u]=(i[u]||0)+h}),Object.entries(t||{}).forEach(([c,l])=>{const u=Number(l)||0,h=Number(r==null?void 0:r[c])||0,m=Math.max(0,u-h)*e+(h*s||e);i[c]=(i[c]||0)+m});const o=Object.keys(i).sort();let a=0;return o.map(c=>(a+=i[c],{x:c,y:a}))},Qs={create:async n=>(await fr(mt(X,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=Qt(mt(X,"notificacoes"),Pt("userId","==",n),Lu("created_at","desc"),ac(t));return(await yt(e)).docs.map(r=>({id:r.id,...r.data()}))},markAsRead:async n=>{await Ze(ae(X,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=Qt(mt(X,"notificacoes"),Pt("userId","==",n),Pt("lida","==",!1)),s=(await yt(t)).docs.map(r=>Ze(ae(X,"notificacoes",r.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},markByType:async(n,t,e=null)=>{if(!n||!t)return;const s=[Pt("userId","==",n),Pt("tipo","==",t),Pt("lida","==",!1)];e&&s.push(Pt("obraId","==",e));const r=Qt(mt(X,"notificacoes"),...s),o=(await yt(r)).docs.map(a=>Ze(ae(X,"notificacoes",a.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(o)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=Qt(mt(X,"compras"),Pt("status_compra","in",["Comprado","Em Trânsito"]),Pt("data_entrega_prevista","<=",n.toISOString())),e=await yt(t),s=[];for(const r of e.docs){const i=r.data(),o=Math.ceil((new Date(i.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:i.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${i.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${r.id}`,prioridade:o===0?"alta":"normal"})}for(const r of s)await Qs.create(r);return s.length}},Dr={getCompras:async(n={})=>{let e=(await yt(mt(X,"compras"))).docs.map(R=>({id:R.id,...R.data()}));const{search:s="",status:r="",obra:i="",prioridade:o="",natureza:a="",cc:c="",dateStart:l="",dateEnd:u="",onlyDelayed:h=!1,fornecedor:f="",comprador:m="",statusAprov:g="",nfConferida:v=!1,nf:y=""}=n,k=s.toLowerCase(),T=l?new Date(l):null,A=u?new Date(u):null,P=new Date;return P.setHours(0,0,0,0),e=e.filter(R=>{if(k&&!(R.descricao_compra||R.descricao||"").toLowerCase().includes(k)||r&&R.status_compra!==r||i&&R.obraId!==i||o&&R.prioridade!==o||a&&(R.natureza_compra||"").trim()!==a||c&&R.centroCustoId!==c||f&&R.fornecedorId!==f||m&&R.compradorId!==m||g&&(R.status_aprovacao||"")!==g||v&&!R.nf_conferida||y&&!(R.numero_nf||"").toLowerCase().includes(y.toLowerCase()))return!1;const M=R.data_solicitacao?new Date(R.data_solicitacao):null;if(T&&M&&M<T||A&&M&&M>A)return!1;if(h){const w=R.previsao_entrega?new Date(R.previsao_entrega):R.data_entrega_prevista?new Date(R.data_entrega_prevista):null;if(!w||w>=P||R.status_compra==="Entregue"||R.status_compra==="Recebido")return!1}return!0}),e.sort((R,M)=>{const w=R.data_solicitacao||R.data_emissao||"";return(M.data_solicitacao||M.data_emissao||"").localeCompare(w)}),e},updateStatus:async(n,t)=>{const e=ae(X,"compras",n);await Ze(e,{status_compra:t})},updateCompra:async(n,t)=>{const e=ae(X,"compras",n);await Ze(e,t)},deleteCompra:async n=>{const t=ae(X,"compras",n);await Fu(t)}},Zd=(n="")=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),kO=(n="")=>{const t=Zd(n);return t.includes("receb")||t.includes("entreg")},rd={getAlertSummary:async({obraId:n=null}={})=>{const t=mt(X,"compras"),e=n?Qt(t,Pt("obraId","==",n)):t,s=await yt(e),r=new Date;r.setHours(0,0,0,0);const i={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0,estoque:0};return s.docs.forEach(o=>{const a=o.data(),c=Zd(a.status_compra||""),l=kO(c),u=a.previsao_entrega||a.data_entrega_prevista,h=u?new Date(u):null;!l&&h&&h<r&&i.atrasados++,!l&&!h&&i.sem_previsao++,(a.estouro_orcamento||Zd(a.status_aprovacao||"")==="pendente")&&i.pendente_aprovacao++,c.includes("cot")&&i.cotacao++,a.retirada_estoque&&!l&&i.estoque++}),i},notifySummary:async(n={},t,{scope:e="global",obraId:s=null}={})=>{if(!t||!n)return;const r=new Date().toISOString().slice(0,10),i=async(a,c,l,u="normal")=>{const h=`notif_${a}_${e}_${s||"all"}_${r}_${t}`;localStorage.getItem(h)||(await Qs.create({userId:t,tipo:a,titulo:c,mensagem:l,link:s?`#/obras/${s}`:"#/relatorios",prioridade:u,obraId:s}),localStorage.setItem(h,"1"))},o=[{key:"atrasados",title:"Pedidos atrasados",msg:`${n.atrasados} pedido(s) com previsão vencida.`,prio:"alta"},{key:"sem_previsao",title:"Pedidos sem previsão",msg:`${n.sem_previsao} pedido(s) sem data de entrega.`,prio:"normal"},{key:"pendente_aprovacao",title:"Aprovação pendente",msg:`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`,prio:"normal"},{key:"cotacao",title:"Pedidos em cotação",msg:`${n.cotacao} pedido(s) em cotação.`,prio:"normal"},{key:"estoque",title:"Retiradas de estoque",msg:`${n.estoque} pedido(s) aguardando baixa de estoque.`,prio:"normal"}];for(const a of o)(n[a.key]||0)>0?await i(a.key,a.title,a.msg,a.prio):await Qs.markByType(t,a.key,s)}},Vb=[];let id=!1;const Fb=()=>{if(id)return;const n=Vb.shift();n&&(id=!0,F.createToast(n.message,n.type),setTimeout(()=>{id=!1,Fb()},3500))},SO=({title:n="Confirmação",message:t="",confirmText:e="Confirmar",cancelText:s="Cancelar"})=>{const r=document.createElement("div");return r.className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",r.innerHTML=`
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
    `,r},Ic={toast:(n,t="success")=>{Vb.push({message:n,type:t}),Fb()},confirm:({title:n="Confirmação",message:t="Deseja prosseguir?",confirmText:e="Confirmar",cancelText:s="Cancelar"}={})=>new Promise(r=>{var a,c,l;const i=SO({title:n,message:t,confirmText:e,cancelText:s}),o=u=>{i.remove(),r(u)};(a=i.querySelector("#notif-modal-close"))==null||a.addEventListener("click",()=>o(!1)),(c=i.querySelector("#notif-modal-cancel"))==null||c.addEventListener("click",()=>o(!1)),(l=i.querySelector("#notif-modal-confirm"))==null||l.addEventListener("click",()=>o(!0)),document.body.appendChild(i)}),badge:(n=0)=>{const t=document.querySelector("#notifications-container");t&&(t.dataset.badge=n)}},CO="bbb1b9bda22e7d16e1ea3ed3f8455530",PO=30*60*1e3,Ri="weather_cache",_g={async getWeather(n,t){const e=this.getFromCache();if(e)return console.log("[Weather] Usando dados em cache"),e;try{const s=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${t}&units=metric&lang=pt_br&appid=${CO}`);if(!s.ok)throw new Error(`API Error: ${s.status}`);const r=await s.json(),i={temp:Math.round(r.main.temp),feelsLike:Math.round(r.main.feels_like),description:r.weather[0].description,icon:this.getWeatherIcon(r.weather[0].id),location:r.name,humidity:r.main.humidity,windSpeed:r.wind.speed,timestamp:Date.now()};return this.saveToCache(i),console.log("[Weather] Dados atualizados:",i.location,i.temp+"°C"),i}catch(s){return console.error("[Weather] Erro ao buscar clima:",s),null}},async getLocation(){return new Promise(n=>{const t=this.getSavedLocation();if(t){console.log("[Weather] Usando localização salva:",t.city),n(t);return}if(!navigator.geolocation){console.warn("[Weather] Geolocalização não disponível, usando padrão"),n(this.getDefaultLocation());return}navigator.geolocation.getCurrentPosition(e=>{const s={lat:e.coords.latitude,lon:e.coords.longitude};console.log("[Weather] Geolocalização obtida:",s),n(s)},e=>{console.warn("[Weather] Geolocalização negada:",e.message),n(this.getDefaultLocation())},{timeout:5e3,maximumAge:6e5})})},getDefaultLocation(){return{lat:-23.5505,lon:-46.6333,city:"São Paulo"}},getSavedLocation(){const n=localStorage.getItem("user_location");return n?JSON.parse(n):null},saveLocation(n,t,e){localStorage.setItem("user_location",JSON.stringify({lat:n,lon:t,city:e}))},getWeatherIcon(n){return n>=200&&n<300?"⛈️":n>=300&&n<400||n>=500&&n<600?"🌧️":n>=600&&n<700?"❄️":n>=700&&n<800?"🌫️":n===800?"☀️":n===801?"🌤️":n===802?"⛅":n>=803?"☁️":"🌤️"},getFromCache(){const n=localStorage.getItem(Ri);if(!n)return null;try{const t=JSON.parse(n);return Date.now()-t.timestamp>PO?(console.log("[Weather] Cache expirado"),localStorage.removeItem(Ri),null):t}catch(t){return console.error("[Weather] Erro ao ler cache:",t),localStorage.removeItem(Ri),null}},saveToCache(n){try{localStorage.setItem(Ri,JSON.stringify(n))}catch(t){console.error("[Weather] Erro ao salvar cache:",t)}},clearCache(){localStorage.removeItem(Ri)}},fn={currentFilters:{obraId:"",periodo:{start:null,end:null}},init:async()=>{var t,e,s,r;const n=Et.state.currentUser;if(n){bt.render(F.createLoader());try{let i="";if(n.role==="comprador"){const o=await Qe.getObras(),a=await Qe.getCompradorStats(fn.currentFilters);i=ga.renderComprador(a,n,o),bt.render(i),fn.initWeatherWidget(),fn.loadTimeline(),fn.bindRecentActions(),fn.bindFilters(),a.atrasos>0&&F.createToast(`Existem ${a.atrasos} pedidos em atraso.`,"warning"),await rd.notifySummary(a.alerts,n.uid,{scope:"comprador"})}else if(n.role==="obra"||n.role==="engenheiro"){let o=n.obraPadrao||null;if(!o){const c=await((t=Qe.getObras)==null?void 0:t.call(Qe));c&&c.length&&(o=c[0].id)}const a=await Qe.getObraStats(o);i=ga.renderObra(a),bt.render(i),a.atrasos>0&&F.createToast(`Esta obra tem ${a.atrasos} pedido(s) em atraso.`,"warning"),await rd.notifySummary(a.alerts,n.uid,{scope:"obra",obraId:o}),setTimeout(()=>{a.rdoData?(a.rdoData.horasPorDia?jt.renderHorasPorDia("chart-rdo-horas",a.rdoData.horasPorDia):jt.renderEmpty("chart-rdo-horas"),a.rdoData.horasPorFuncao?jt.renderHorasPorFuncao("chart-rdo-funcao",a.rdoData.horasPorFuncao):jt.renderEmpty("chart-rdo-funcao"),a.rdoData.funcionariosPorDia?jt.renderFuncionariosPorDia("chart-rdo-funcionarios",a.rdoData.funcionariosPorDia):jt.renderEmpty("chart-rdo-funcionarios")):(jt.renderEmpty("chart-rdo-horas"),jt.renderEmpty("chart-rdo-funcao"),jt.renderEmpty("chart-rdo-funcionarios"))},100)}else{const o=await Qe.getDiretorStats(),a=await((e=Qe.getObras)==null?void 0:e.call(Qe))||await Ge.getObras(),c=o._allCompras||[],l=a.map(T=>{const A=Number(T.orcamento||T.valor_orcado||0),P=Number(T.tolerancia_percentual||0),R=A+A*P,w=c.filter(x=>x.obraId===T.id).reduce((x,S)=>{const I=(S.status_compra||"").toLowerCase(),D=!S.estouro_orcamento||S.status_aprovacao==="Aprovado";return(I.includes("compr")||I.includes("receb")||I.includes("entreg")||I.includes("aprov"))&&D?x+Number(S.valor_total||S.valor_estimado||0):x},0),b=R>0?w/R*100:0;return{id:T.id,nome:T.nome_obra||T.apelido_obra||T.id,limite:R,comprometido:w,percent:b}}).filter(T=>T.limite>0||T.comprometido>0).sort((T,A)=>A.percent-T.percent).slice(0,8),u=[],h=[];a.forEach(T=>{Nb({data_inicio:T.data_inicio||T.data_prevista_inicio,data_prevista_fim:T.data_prevista_fim||T.data_fim,orcamento:T.orcamento||T.valor_orcado||0}).forEach(M=>u.push(M));const P=c.filter(M=>M.obraId===T.id);Lb(P,{},0,0).forEach(M=>h.push(M))});const f=Array.from(new Set([...u.map(T=>T.x),...h.map(T=>T.x)])).sort();let m=0,g=0;const v=[],y=[],k=[];f.forEach(T=>{const A=u.filter(R=>R.x===T).map(R=>R.y).pop(),P=h.filter(R=>R.x===T).map(R=>R.y).pop();A!==void 0&&(m=A),P!==void 0&&(g=P),k.push(T),v.push(m),y.push(g)}),i=ga.renderDiretor({...o,curvaS:{planejado:v,realizado:y,labels:k},obras:a,budgetByObra:l}),bt.render(i),setTimeout(()=>{(v.length||y.length)&&ki.renderCurvaS("chart-curva",v,y,k),ki.renderStatusPie("chart-status",o.porStatus),o.naturezaTotais&&ki.renderNatureza("chart-natureza-dir",o.naturezaTotais),o.ccTotais&&ki.renderCentrosCusto("chart-cc-dir",o.ccTotais),o.gastosPorMes&&ki.renderGastosPorMes("chart-gastos-mes",o.gastosPorMes)},100),o.atrasos>0&&F.createToast(`Há ${o.atrasos} compras com previsão vencida.`,"warning"),((s=o.alerts)==null?void 0:s.sem_previsao)>0&&F.createToast(`${o.alerts.sem_previsao} pedidos sem previsão de entrega.`,"warning"),((r=o.alerts)==null?void 0:r.pendente_aprovacao)>0&&F.createToast(`${o.alerts.pendente_aprovacao} pedidos com aprovação pendente.`,"warning"),await rd.notifySummary(o.alerts,n.uid,{scope:"diretor"})}}catch(i){console.error(i),bt.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${i.message}</div>`)}}},loadTimeline:async()=>{const n=document.getElementById("timeline-container");if(n)try{const t=await Qe.getTimelineData(fn.currentFilters.obraId);n.innerHTML=ga.renderTimeline(t)}catch(t){console.error("[Dashboard] Erro timeline:",t),n.innerHTML='<p class="text-xs text-alert p-2">Erro ao carregar timeline</p>'}},bindFilters:()=>{const n=document.getElementById("dashboard-filter-obra"),t=document.getElementById("dashboard-filter-periodo"),e=document.getElementById("btn-apply-filters");e&&e.addEventListener("click",async()=>{const s=(n==null?void 0:n.value)||"",r=(t==null?void 0:t.value)||"30";let i=null,o=new Date;r==="7"?(i=new Date,i.setDate(o.getDate()-7)):r==="30"?(i=new Date,i.setDate(o.getDate()-30)):r==="thisMonth"?i=new Date(o.getFullYear(),o.getMonth(),1):r==="lastMonth"&&(i=new Date(o.getFullYear(),o.getMonth()-1,1),o=new Date(o.getFullYear(),o.getMonth(),0)),fn.currentFilters={obraId:s,periodo:i?{start:i,end:o}:null},fn.init()})},bindRecentActions:()=>{document.querySelectorAll('[data-action="view"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}`)})}),document.querySelectorAll('[data-action="edit"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}/editar`)})}),document.querySelectorAll('[data-action="cobrar"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.fornecedor,e=n.dataset.id,s=`Olá ${t}, gostaria de uma posição sobre o pedido #${e.slice(0,6)}.`,r=`https://wa.me/?text=${encodeURIComponent(s)}`;window.open(r,"_blank")})}),document.querySelectorAll('[data-action="receber"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(!t)return;if(await Ic.confirm({message:"Confirmar recebimento deste pedido? O status será alterado para Entregue."}))try{await Qe.markAsDelivered(t),F.createToast("Pedido marcado como Entregue! 🎉"),fn.init()}catch(s){F.createToast("Erro ao atualizar: "+s.message,"error")}})}),document.querySelectorAll('[data-action="delete"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(!(!t||!await Ic.confirm({message:"Confirma exclusão desta compra?"})))try{await Dr.deleteCompra(t),F.createToast("Compra excluída.");const s=n.closest("tr");s==null||s.remove()}catch(s){F.createToast("Erro ao excluir: "+s.message,"error")}})})},initWeatherWidget:async()=>{const n=document.getElementById("weather-widget");if(n)try{const t=await _g.getLocation(),e=await _g.getWeather(t.lat,t.lon);if(e){const s=document.getElementById("weather-icon"),r=document.getElementById("weather-temp"),i=document.getElementById("weather-location");s&&(s.textContent=e.icon),r&&(r.textContent=`${e.temp}°C`),i&&(i.textContent=e.location),n.title=e.description.charAt(0).toUpperCase()+e.description.slice(1),n.classList.remove("hidden"),n.classList.add("flex")}}catch(t){console.error("[Dashboard] Erro ao carregar clima:",t),n.style.display="none"}},_maybeNotify:async(n={})=>{const t=Et.state.currentUser;if(!t)return;const e=new Date().toISOString().slice(0,10),s=async(r,i,o)=>{const a=`notif_${r}_${e}_${t.uid}`;localStorage.getItem(a)||(await Qs.create({userId:t.uid,tipo:r,titulo:i,mensagem:o,link:"#/relatorios",prioridade:"normal"}),localStorage.setItem(a,"1"))};(n==null?void 0:n.atrasados)>0&&await s("atrasados","Pedidos atrasados",`${n.atrasados} pedido(s) com previsão vencida.`),(n==null?void 0:n.sem_previsao)>0&&await s("sem_previsao","Pedidos sem previsão",`${n.sem_previsao} pedido(s) sem data de entrega.`),(n==null?void 0:n.pendente_aprovacao)>0&&await s("pendente_aprovacao","Aprovação pendente",`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`)}},RO=async n=>{if(!n)return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const t=await lo(ae(X,"obras",n));if(!t.exists())return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const e=t.data(),s=Number(e.valor_orcado||e.orcamento||0),r=Number(e.tolerancia_percentual||0);return{limiteReal:s+s*r,toleranciaPercentual:r,orcamento:s}},yg=async(n,t,e)=>{const{limiteReal:s}=await RO(n),r=s>0&&t>s;if(r&&!e){const i=new Error("JUSTIFICATIVA_NECESSARIA");throw i.code="JUSTIFICATIVA_NECESSARIA",i}return{estouro_orcamento:r,status_aprovacao:r?"Pendente":"Aprovado"}},kr={checkDuplicidade:async(n,t)=>{const e=Qt(mt(X,"compras"),Pt("obraId","==",n),Pt("status_compra","in",["Pendente","Em Cotação"])),s=await yt(e),r=t.toLowerCase();return s.docs.some(i=>{const o=i.data(),a=(o.descricao_compra||o.descricao||"").toLowerCase(),c=o.itens||[];return a.includes(r)||c.some(l=>(l.nome||"").toLowerCase().includes(r))})},uploadArquivo:(n,t,e)=>new Promise((s,r)=>{const i=ZI(ES,t),o=XI(i,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>r(a),async()=>{const a=await JI(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t=Number(n.valor_total||0),e=n.justificativa_estouro_orcamento||n.justificativa||"",s=await yg(n.obraId,t,e),r={...n,descricao_compra:n.descricao_compra||n.descricao||"",valor_total:t,justificativa_estouro_orcamento:e||null,estouro_orcamento:s.estouro_orcamento,status_aprovacao:n.status_aprovacao||s.status_aprovacao,data_solicitacao:Ht.now().toDate().toISOString(),status_compra:n.status_compra||"Pendente",criado_em:Ht.now(),criado_por:n.criado_por||null,ultima_atualizacao:new Date().toISOString(),atualizado_por:n.criado_por||null};return r.nf_conferida&&(r.nf_conferida_em=r.nf_conferida_em||Ht.now(),r.nf_conferida_por=r.nf_conferida_por||r.criado_por||null),(await fr(mt(X,"compras"),r)).id},atualizarCompra:async(n,t)=>{const e=Number(t.valor_total||0),s=t.justificativa_estouro_orcamento||t.justificativa||"";let r={estouro_orcamento:!1,status_aprovacao:t.status_aprovacao};(t.valor_total||t.obraId)&&(r=await yg(t.obraId,e,s));const i=ae(X,"compras",n);await Ze(i,{...t,descricao_compra:t.descricao_compra||t.descricao||"",valor_total:e,justificativa_estouro_orcamento:s||null,estouro_orcamento:r.estouro_orcamento,status_aprovacao:t.status_aprovacao||r.status_aprovacao,nf_conferida_em:t.nf_conferida?t.nf_conferida_em||Ht.now():null,nf_conferida_por:t.nf_conferida&&(t.nf_conferida_por||t.criado_por)||null,ultima_atualizacao:new Date().toISOString(),atualizado_por:t.atualizado_por||t.criado_por||null})},getCompra:async n=>{const t=await lo(ae(X,"compras",n));return t.exists()?{id:t.id,...t.data()}:null}},vg={renderForm:({obras:n=[],fornecedores:t=[],centros:e=[],compradores:s=[],compra:r=null}={})=>{const i=!!r,o=["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"],a=["Aprovado","Pendente","Reprovado"],c=["Lista de Material inicial","Compra emergencial","Serviço","Transporte","Outros"],l=["Normal","Alta","Crítica"],u=y=>{if(!y)return"";const k=y!=null&&y.toDate?y.toDate():new Date(y);return Number.isNaN(k.getTime())?"":k.toISOString().split("T")[0]},h=y=>String(y??"").replace(/"/g,"&quot;"),f=(y,k)=>k?y.includes(k)?y:[k,...y]:y,m=f(c,r==null?void 0:r.natureza_compra),g=f(a,r==null?void 0:r.status_aprovacao),v=f(o,r==null?void 0:r.status_compra);return`
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
                                    <input id="data_emissao" name="data_emissao" type="date" class="input" value="${u(r==null?void 0:r.data_emissao)}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Previsão de Entrega</label>
                                    <input id="previsao_entrega" name="previsao_entrega" type="date" class="input" value="${u((r==null?void 0:r.previsao_entrega)||(r==null?void 0:r.data_entrega_prevista))}" />
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Data de Recebimento</label>
                                    <input id="data_recebimento" name="data_recebimento" type="date" class="input" value="${u(r==null?void 0:r.data_recebimento)}" />
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
        `}},Xs={list:async()=>(await yt(mt(X,"centrosCusto"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await fr(mt(X,"centrosCusto"),n)},update:async(n,t)=>{await Ze(ae(X,"centrosCusto",n),t)}},Js={list:async()=>(await yt(mt(X,"compradores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await fr(mt(X,"compradores"),n)},update:async(n,t)=>{await Ze(ae(X,"compradores",n),t)}},Zs={list:async()=>(await yt(mt(X,"fornecedores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await fr(mt(X,"fornecedores"),n)},update:async(n,t)=>{await Ze(ae(X,"fornecedores",n),t)}},Lr={init:async()=>{bt.render(F.createLoader());try{const[n,t,e,s]=await Promise.all([yt(mt(X,"obras")),Zs.list(),Xs.list(),Js.list()]),r=n.docs.map(i=>({id:i.id,...i.data()}));bt.render(vg.renderForm({obras:r,fornecedores:t,centros:e,compradores:s})),Lr.bindEvents()}catch(n){console.error(n),bt.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},initEdit:async n=>{bt.render(F.createLoader());try{const[t,e,s,r,i]=await Promise.all([yt(mt(X,"obras")),Zs.list(),Xs.list(),Js.list(),kr.getCompra(n)]),o=t.docs.map(a=>({id:a.id,...a.data()}));bt.render(vg.renderForm({obras:o,fornecedores:e,centros:s,compradores:r,compra:i})),Lr.bindEvents(n,i,e)}catch(t){console.error(t),bt.render(`<div class="text-red-500">Erro ao carregar compra: ${t.message}</div>`)}},bindEvents:(n=null,t=null,e=[])=>{const s=document.getElementById("form-compra"),r=document.getElementById("file-upload"),i=document.getElementById("nf-upload"),o=document.getElementById("cte-upload"),a=document.getElementById("rc-upload"),c=document.getElementById("drop-zone"),l=document.getElementById("descricao_compra"),u=document.getElementById("obraId"),h=document.getElementById("status_compra"),f=document.getElementById("previsao_entrega"),m=document.getElementById("data_recebimento"),g=document.getElementById("data_emissao"),v=document.getElementById("retirada_estoque"),y=document.getElementById("fornecedorId");let k=[],T=null;const A=document.getElementById("valor_total"),P=document.getElementById("cnpj_fornecedor");let R=1;const M=document.querySelectorAll(".wizard-step"),w=document.querySelectorAll(".step-indicator"),b=document.getElementById("btn-prev"),x=document.getElementById("btn-next"),S=document.getElementById("btn-submit"),I=N=>{R=N,M.forEach(U=>U.classList.toggle("hidden",Number(U.dataset.step)!==N)),w.forEach(U=>{const q=Number(U.dataset.step)===N;U.classList.toggle("text-text",q),U.classList.toggle("text-text-muted",!q),U.classList.toggle("font-semibold",q)}),b&&b.classList.toggle("hidden",N===1),x&&x.classList.toggle("hidden",N===3),S&&S.classList.toggle("hidden",N!==3)};b==null||b.addEventListener("click",()=>I(Math.max(1,R-1))),x==null||x.addEventListener("click",()=>I(Math.min(3,R+1))),I(R),c==null||c.addEventListener("click",()=>r==null?void 0:r.click()),r==null||r.addEventListener("change",N=>D(N.target.files));const D=N=>{k=[...k,...Array.from(N)],C()},C=()=>{var U;const N=document.getElementById("file-list");N&&(N.innerHTML=k.map((q,nt)=>`
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${q.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80 px-2 py-1 text-xs font-semibold border border-transparent rounded" data-remove-file="${nt}">X</button>
                </div>
            `).join(""),(U=N.querySelectorAll("[data-remove-file]"))==null||U.forEach(q=>{q.addEventListener("click",nt=>{const lt=Number(nt.currentTarget.dataset.removeFile);Number.isNaN(lt)||(k.splice(lt,1),C())})}))};s.addEventListener("remove-file",N=>{k.splice(N.detail,1),C()}),l==null||l.addEventListener("blur",async()=>{const N=u.value,U=l.value;N&&U.length>3&&await kr.checkDuplicidade(N,U)&&F.createToast("Atenção: Já existe um pedido similar para esta obra!","warning")}),A==null||A.addEventListener("input",N=>{N.target.value=Q.formatCurrencyInput(N.target.value)}),P==null||P.addEventListener("input",N=>{N.target.value=Q.formatCnpjInput(N.target.value)}),P==null||P.addEventListener("blur",N=>{const U=N.target.value;U&&!Q.validateCNPJ(U)&&F.createToast("CNPJ inválido.","warning")}),A==null||A.addEventListener("blur",async()=>{const N=u==null?void 0:u.value,U=A.value,q=Q.parseCurrency(U),nt=document.getElementById("justificativa-container"),lt=document.getElementById("justificativa");if(N&&q>0)try{const at=await yt(Qt(mt(X,"obras"),Pt("__name__","==",N)));if(!at.empty){const Z=at.docs[0].data(),ft=Number(Z.valor_orcado||Z.orcamento||0),Tt=Number(Z.tolerancia_percentual||0),Ot=ft+ft*Tt;Ot>0&&q>Ot?(nt.classList.remove("hidden"),lt.required=!0,F.createToast("Valor ultrapassa o orçamento da obra! Justificativa necessária.","warning")):(nt.classList.add("hidden"),lt.required=!1)}}catch(at){console.error("Erro ao validar orçamento:",at)}});const J=()=>{if(!(v!=null&&v.checked))return;const N=g==null?void 0:g.value;N&&(f&&(f.value=N),m&&(m.value=N))},j=N=>{const U=new Date().toISOString().split("T")[0];if(N){if(h&&(h.value="Recebido"),g&&!g.value&&(g.value=U),f&&!f.value&&(f.value=(g==null?void 0:g.value)||U),m&&!m.value&&(m.value=(g==null?void 0:g.value)||U),y){T||(T=y.value);const q=Array.from(y.options).find(nt=>{var at;return(((at=nt.dataset)==null?void 0:at.name)||nt.textContent||"").toLowerCase().includes("estoque axel")});q&&(y.value=q.value),y.disabled=!0}}else h&&h.value==="Recebido"&&!t&&(h.value="Pendente"),y&&(y.disabled=!1,T&&(y.value=T))},W=(N,U)=>{var nt;const q=document.getElementById(U);!q||!((nt=N==null?void 0:N.files)!=null&&nt.length)||(q.textContent=N.files[0].name)};if(i==null||i.addEventListener("change",()=>W(i,"nf-upload-label")),o==null||o.addEventListener("change",()=>W(o,"cte-upload-label")),a==null||a.addEventListener("change",()=>W(a,"rc-upload-label")),t){s.obraId.value=t.obraId||"",s.prioridade&&(s.prioridade.value=t.prioridade||"Normal"),s.descricao_compra.value=t.descricao_compra||t.descricao||"",s.valor_total.value=Q.formatCurrencyInput(t.valor_total||0),s.fornecedorId&&(s.fornecedorId.value=t.fornecedorId||"");const N=U=>{if(!U)return"";if(U.toDate){const q=U.toDate();return Number.isNaN(q)?"":q.toISOString().split("T")[0]}if(typeof U=="string"&&U.includes("/")){const[q,nt,lt]=U.split("/");return`${lt&&lt.length===2?`20${lt}`:lt}-${nt}-${q}`}try{const q=new Date(U);if(!Number.isNaN(q.getTime()))return q.toISOString().split("T")[0]}catch{}return""};if(s.data_emissao.value=N(t.data_emissao),s.previsao_entrega.value=N(t.previsao_entrega||t.data_entrega_prevista),s.data_recebimento.value=N(t.data_recebimento),s.status_compra.value=t.status_compra||"Pendente",s.centroCustoId&&(s.centroCustoId.value=t.centroCustoId||""),s.natureza_compra&&(s.natureza_compra.value=t.natureza_compra||""),s.compradorId&&(s.compradorId.value=t.compradorId||""),s.numero_nf&&(s.numero_nf.value=t.numero_nf||""),s.status_aprovacao&&(s.status_aprovacao.value=t.status_aprovacao||"Aprovado"),s.nf_conferida&&(s.nf_conferida.checked=!!t.nf_conferida),t.justificativa_estouro_orcamento){const U=document.getElementById("justificativa-container"),q=document.getElementById("justificativa");U.classList.remove("hidden"),q.value=t.justificativa_estouro_orcamento}t.solicitante&&s.solicitante&&(s.solicitante.value=t.solicitante),s.retirada_estoque.checked=t.retirada_estoque===!0||t.retirada_estoque==="on"}v&&(j(v.checked),v.addEventListener("change",N=>j(N.target.checked)),g==null||g.addEventListener("change",J)),A&&!A.value&&(A.value=Q.formatCurrencyInput(0)),s.addEventListener("submit",async N=>{var q,nt,lt,at,Z;N.preventDefault();const U=document.getElementById("btn-submit");try{if(P&&P.value&&!Q.validateCNPJ(P.value)){F.createToast("CNPJ inválido.","warning"),P.focus();return}const ft=g!=null&&g.value?new Date(g.value):null,Tt=f!=null&&f.value?new Date(f.value):null,Ot=m!=null&&m.value?new Date(m.value):null;if(ft&&Tt&&ft>Tt){F.createToast("Data de emissão não pode ser após a previsão de entrega.","warning"),f==null||f.focus();return}if(ft&&Ot&&ft>Ot){F.createToast("Data de emissão não pode ser após o recebimento.","warning"),m==null||m.focus();return}if(Ot&&Tt&&Ot<Tt){F.createToast("Data de recebimento não pode ser anterior à previsão.","warning"),m==null||m.focus();return}U.disabled=!0,U.innerHTML=F.createLoader();const ze=u==null?void 0:u.value,Bt=[];let Nt=(t==null?void 0:t.pdf_nf_path)||null,xe=(t==null?void 0:t.pdf_cte_path)||null,He=(t==null?void 0:t.comprovante_rc_path)||null;const kn=async(Ut,_e)=>{var Ss;const Oe=(Ss=Ut==null?void 0:Ut.files)==null?void 0:Ss[0];return Oe?kr.uploadArquivo(Oe,`${_e}/${Date.now()}_${Oe.name}`):null};Nt=await kn(i,"compras/nf")||Nt,xe=await kn(o,"compras/cte")||xe,He=await kn(a,"compras/rc")||He;for(const Ut of k){const _e=await kr.uploadArquivo(Ut,`compras/${Date.now()}_${Ut.name}`);Bt.push({nome:Ut.name,url:_e})}const Xn=new FormData(s),Fe=Object.fromEntries(Xn.entries()),ce=Q.parseCurrency(Fe.valor_total||0),le=(Fe.justificativa||Fe.justificativa_estouro_orcamento||"").trim(),It={...Fe,pdf_nf_path:Nt,pdf_cte_path:xe,comprovante_rc_path:He,descricao_compra:Fe.descricao_compra,solicitante:Fe.solicitante||((q=Et.state.currentUser)==null?void 0:q.nome)||((nt=Et.state.currentUser)==null?void 0:nt.email),anexos:Bt,valor_total:ce,justificativa_estouro_orcamento:le||null,criado_por:((lt=Et.state.currentUser)==null?void 0:lt.email)||null,cnpj_fornecedor:Fe.cnpj_fornecedor||null};if(It.retirada_estoque=s.retirada_estoque.checked,It.nf_conferida=((at=s.nf_conferida)==null?void 0:at.checked)||!1,It.nf_conferida&&(It.nf_conferida_por=((Z=Et.state.currentUser)==null?void 0:Z.email)||It.criado_por||null,It.nf_conferida_em=It.nf_conferida_em||new Date().toISOString()),It.status_compra||(It.status_compra="Pendente"),It.status_aprovacao||(It.status_aprovacao="Aprovado"),["data_emissao","previsao_entrega","data_recebimento"].forEach(Ut=>{It[Ut]===""&&delete It[Ut]}),ze&&ce>0)try{const Ut=await yt(Qt(mt(X,"obras"),Pt("__name__","==",ze)));if(!Ut.empty){const _e=Ut.docs[0].data(),Oe=Number(_e.valor_orcado||_e.orcamento||0),Ss=Number(_e.tolerancia_percentual||0),qo=Oe+Oe*Ss;if(qo>0&&ce>qo&&!It.justificativa_estouro_orcamento){F.createToast("Justificativa obrigatória: valor excede orçamento da obra.","warning"),U.disabled=!1,U.innerHTML="<span>Registrar Solicitação</span>";return}}}catch(Ut){console.warn("Erro ao validar orçamento na submissão",Ut)}((It.status_compra||"").toLowerCase()==="recebido"||(It.status_compra||"").toLowerCase()==="entregue")&&(It.data_recebimento||(It.data_recebimento=new Date().toISOString().split("T")[0])),n?(await kr.atualizarCompra(n,It),F.createToast("Compra atualizada com sucesso!")):(await kr.salvarCompra(It),F.createToast("Compra registrada com sucesso!")),At.navigate("/compras")}catch(ft){console.error(ft);const Tt=(ft==null?void 0:ft.code)==="JUSTIFICATIVA_NECESSARIA"?"Justificativa é obrigatória quando ultrapassa o orçamento da obra.":"Erro ao registrar: "+ft.message;F.createToast(Tt,"error"),U.disabled=!1,U.innerHTML="<span>Registrar Solicitação</span>"}})}},od={renderControls:(n="table",t=[])=>`
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Q.formatDate(e.data_solicitacao||e.data_emissao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.get(e.obraId)||e.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${e.descricao_compra||e.descricao||""}">${e.descricao_compra||e.descricao||"-"}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Q.formatCurrency(e.valor_total??e.valor_estimado??0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${Q.renderStatusBadge(e.status_compra,e.previsao_entrega||e.data_entrega_prevista)}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">
                                        ${e.pdf_nf_path?`<a href="${e.pdf_nf_path}" target="_blank" class="text-primary underline text-xs">NF</a>`:"-"}
                                        ${e.pdf_cte_path?`<a href="${e.pdf_cte_path}" target="_blank" class="text-primary underline text-xs ml-2">CTE</a>`:""}
                                        ${e.comprovante_rc_path?`<a href="${e.comprovante_rc_path}" target="_blank" class="text-primary underline text-xs ml-2">RC</a>`:""}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div class="inline-flex items-center justify-end gap-2">
                                            <button class="text-text-muted hover:text-text inline-flex items-center" data-action="view" data-id="${e.id}" title="Ver">${Rt.eye}</button>
                                            <button class="text-primary hover:text-primary-strong inline-flex items-center" data-action="edit" data-id="${e.id}" title="Editar">${Rt.pencil}</button>
                                            <button class="text-alert hover:text-alert/80 inline-flex items-center" data-action="delete" data-id="${e.id}" title="Excluir">${Rt.trash}</button>
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
                                            <span class="text-xs text-text-muted">${Q.formatDate(i.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${i.descricao_compra||i.descricao||"-"}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${Q.formatCurrency(i.valor_total??i.valor_estimado??0)}</span>
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
        `},z={currentView:"table",compras:[],filters:{},obras:[],fornecedores:[],compradores:[],centros:[],obraMap:new Map,fornecedorMap:new Map,compradorMap:new Map,centroMap:new Map,init:async()=>{await z.load(),await z.render()},decorateCompras:()=>{z.obraMap=new Map(z.obras.map(n=>[n.id,n.nome_obra||n.apelido_obra||n.id])),z.fornecedorMap=new Map(z.fornecedores.map(n=>[n.id,n.nome||n.empresa||n.id])),z.compradorMap=new Map(z.compradores.map(n=>[n.id,n.nome||n.email||n.id])),z.centroMap=new Map(z.centros.map(n=>[n.id,n.nome||n.codigo||n.id])),z.compras=z.compras.map(n=>{const t=Q.parseCurrency(n.valor_total??n.valor_estimado??0);return{...n,valor_total:t,obraNome:z.obraMap.get(n.obraId)||n.obraId||"-",fornecedorNome:z.fornecedorMap.get(n.fornecedorId)||n.fornecedor||"",compradorNome:z.compradorMap.get(n.compradorId)||n.comprador||"",centroCustoNome:z.centroMap.get(n.centroCustoId)||n.centro_custo||n.centroCustoId||"",pdf_nf_path:n.pdf_nf_path||null,pdf_cte_path:n.pdf_cte_path||null,comprovante_rc_path:n.comprovante_rc_path||null,anexos:n.anexos||[]}})},load:async()=>{const[n,t,e,s,r]=await Promise.all([Dr.getCompras(),Ge.getObras(),Zs.list(),Js.list(),Xs.list()]);z.compras=n,z.obras=t,z.fornecedores=e,z.compradores=s,z.centros=r,z.decorateCompras()},render:async()=>{const n=document.createElement("div");n.innerHTML=od.renderControls(z.currentView,z.obras);const t=document.createElement("div");t.id="reports-content",t.innerHTML=z.currentView==="table"?od.renderTable(z.compras,z.obraMap):od.renderKanban(z.compras,z.obraMap),n.appendChild(t),bt.render(n.innerHTML),z.bindEvents()},applyFilters:async()=>{var g,v,y,k,T,A,P,R,M,w,b,x,S,I;const n=((g=document.getElementById("filter-search"))==null?void 0:g.value.toLowerCase())||"",t=((v=document.getElementById("filter-status"))==null?void 0:v.value)||"",e=((y=document.getElementById("filter-obra"))==null?void 0:y.value)||"",s=((k=document.getElementById("filter-prioridade"))==null?void 0:k.value)||"",r=((T=document.getElementById("filter-natureza"))==null?void 0:T.value)||"",i=((A=document.getElementById("filter-cc"))==null?void 0:A.value)||"",o=((P=document.getElementById("filter-fornecedor"))==null?void 0:P.value)||"",a=((R=document.getElementById("filter-comprador"))==null?void 0:R.value)||"",c=((M=document.getElementById("filter-status-aprov"))==null?void 0:M.value)||"",l=((w=document.getElementById("filter-nf-conferida"))==null?void 0:w.checked)||!1,u=((b=document.getElementById("filter-nf"))==null?void 0:b.value)||"",h=((x=document.getElementById("filter-date-start"))==null?void 0:x.value)||"",f=((S=document.getElementById("filter-date-end"))==null?void 0:S.value)||"",m=((I=document.getElementById("filter-only-delayed"))==null?void 0:I.checked)||!1;z.filters={search:n,status:t,obra:e,prioridade:s,natureza:r,cc:i,fornecedor:o,comprador:a,statusAprov:c,nfConferida:l,nf:u,dateStart:h,dateEnd:f,onlyDelayed:m},z.compras=await Dr.getCompras(z.filters),z.decorateCompras(),z.render()},bindEvents:()=>{var a,c,l,u,h,f,m;const n=(g,v)=>{const y=document.getElementById(g);y&&(y.value=v??"")};n("filter-search",z.filters.search||""),n("filter-status",z.filters.status||""),n("filter-obra",z.filters.obra||""),n("filter-prioridade",z.filters.prioridade||""),n("filter-natureza",z.filters.natureza||""),n("filter-cc",z.filters.cc||""),n("filter-fornecedor",z.filters.fornecedor||""),n("filter-comprador",z.filters.comprador||""),n("filter-status-aprov",z.filters.statusAprov||""),n("filter-nf",z.filters.nf||""),n("filter-date-start",z.filters.dateStart||""),n("filter-date-end",z.filters.dateEnd||"");const t=document.getElementById("filter-only-delayed");t&&(t.checked=!!z.filters.onlyDelayed);const e=document.getElementById("filter-nf-conferida");e&&(e.checked=!!z.filters.nfConferida),(a=document.getElementById("view-table"))==null||a.addEventListener("click",()=>{z.currentView="table",z.render()}),(c=document.getElementById("view-kanban"))==null||c.addEventListener("click",()=>{z.currentView="kanban",z.render()});const s=document.getElementById("filter-natureza"),r=document.getElementById("filter-cc"),i=document.getElementById("filter-fornecedor"),o=document.getElementById("filter-comprador");if(s){const g=Array.from(new Set(z.compras.map(v=>(v.natureza_compra||"Outros").trim())));s.innerHTML='<option value="">Todas Naturezas</option>'+g.map(v=>`<option value="${v}">${v}</option>`).join("")}r&&(r.innerHTML='<option value="">Todos Centros de Custo</option>'+z.centros.map(g=>`<option value="${g.id}">${g.nome||g.codigo||g.id}</option>`).join("")),i&&(i.innerHTML='<option value="">Todos Fornecedores</option>'+z.fornecedores.map(g=>`<option value="${g.id}">${g.nome||g.empresa||g.id}</option>`).join("")),o&&(o.innerHTML='<option value="">Todos Compradores</option>'+z.compradores.map(g=>`<option value="${g.id}">${g.nome||g.id}</option>`).join("")),n("filter-natureza",z.filters.natureza||""),n("filter-cc",z.filters.cc||""),n("filter-fornecedor",z.filters.fornecedor||""),n("filter-comprador",z.filters.comprador||""),n("filter-status-aprov",z.filters.statusAprov||""),(l=document.getElementById("btn-apply-filters"))==null||l.addEventListener("click",()=>{z.applyFilters()}),(u=document.getElementById("btn-clear-filters"))==null||u.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-natureza").value="",document.getElementById("filter-cc").value="";const g=document.getElementById("filter-fornecedor"),v=document.getElementById("filter-comprador"),y=document.getElementById("filter-nf"),k=document.getElementById("filter-status-aprov");g&&(g.value=""),v&&(v.value=""),y&&(y.value=""),k&&(k.value=""),document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1;const T=document.getElementById("filter-nf-conferida");T&&(T.checked=!1),z.applyFilters()}),(h=document.getElementById("btn-export-csv"))==null||h.addEventListener("click",()=>{try{z.exportCsv()}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(f=document.getElementById("btn-export-obra"))==null||f.addEventListener("click",()=>{try{z.exportGrouped("obra")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(m=document.getElementById("btn-export-fornecedor"))==null||m.addEventListener("click",()=>{try{z.exportGrouped("fornecedor")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),document.querySelectorAll('[data-action="view"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,y=z.compras.find(k=>k.id===v);if(!y)return alert("Compra não encontrada.");z.showModal(y,!1)})}),document.querySelectorAll('[data-action="edit"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,y=z.compras.find(k=>k.id===v);if(!y)return alert("Compra não encontrada.");z.showModal(y,!0)})}),document.querySelectorAll('[data-action="delete"]').forEach(g=>{g.addEventListener("click",async()=>{const v=g.dataset.id;if(await Ic.confirm({message:"Confirmar exclusão da compra?"}))try{await Dr.deleteCompra(v),F.createToast("Compra excluída."),await z.load(),z.render()}catch(k){F.createToast("Erro ao excluir: "+k.message,"error")}})}),document.addEventListener("kanban-move-next",async g=>{const{id:v,current:y}=g.detail,k=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],T=k.indexOf(y)+1;if(T<k.length){const A=k[T];try{await Dr.updateStatus(v,A),F.createToast(`Movido para ${A}`),await z.load(),z.render()}catch(P){F.createToast("Erro ao mover: "+P.message,"error")}}})},showModal:(n,t=!1)=>{var o,a,c,l;const e=document.createElement("div");e.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4";const s=(u=[],h,f=m=>m.label)=>u.map(m=>{const g=m.value??m.id,v=f(m);return`<option value="${g}" ${h===g?"selected":""}>${v}</option>`}).join(""),r=(u,h)=>`
            <div>
                <label class="text-xs heading-muted uppercase">${u}</label>
                ${h}
            </div>
        `;e.innerHTML=`
            <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-4xl">
                <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                    <h3 class="text-lg font-display text-text">${t?"Editar Compra":"Detalhes da Compra"}</h3>
                    <button id="modal-close" class="text-text-muted hover:text-text">${Rt.close}</button>
                </div>
                <div class="p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${r("Obra",t?`<select id="modal-obra" class="input">
                                    ${s(z.obras,n.obraId,u=>u.nome_obra||u.apelido_obra||u.id)}
                                </select>`:`<p class="text-text">${n.obraNome||n.obraId||"-"}</p>`)}
                        ${r("Status",t?`<select id="modal-status" class="input">${["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"].map(u=>`<option value="${u}" ${n.status_compra===u?"selected":""}>${u}</option>`).join("")}</select>`:`<p class="text-text">${n.status_compra||"-"}</p>`)}
                        ${r("Descrição",t?`<input id="modal-desc" class="input" value="${(n.descricao_compra||n.descricao||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.descricao_compra||n.descricao||"-"}</p>`)}
                        ${r("Valor",t?`<input id="modal-valor" type="number" step="0.01" class="input" value="${n.valor_total??n.valor_estimado??0}">`:`<p class="text-text">${Q.formatCurrency(n.valor_total??n.valor_estimado??0)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${r("Fornecedor",t?`<select id="modal-fornecedor" class="input"><option value="">Selecione...</option>${s(z.fornecedores,n.fornecedorId,u=>u.nome||u.empresa||u.id)}</select>`:`<p class="text-text">${n.fornecedorNome||n.fornecedor||"-"}</p>`)}
                        ${r("Comprador",t?`<select id="modal-comprador" class="input"><option value="">Selecione...</option>${s(z.compradores,n.compradorId,u=>u.nome||u.email||u.id)}</select>`:`<p class="text-text">${n.compradorNome||n.comprador||"-"}</p>`)}
                        ${r("Centro de Custo",t?`<select id="modal-cc" class="input"><option value="">Selecione...</option>${s(z.centros,n.centroCustoId,u=>u.nome||u.codigo||u.id)}</select>`:`<p class="text-text">${n.centroCustoNome||"-"}</p>`)}
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
                                ${n.anexos.map(u=>`<li><a class="text-primary underline break-all" target="_blank" href="${u.url}">${u.nome||"Arquivo"}</a></li>`).join("")}
                            </ul>
                        </div>
                    `:""}

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        ${r("Data Emissão",t?`<input id="modal-emissao" type="date" class="input" value="${(n.data_emissao||"").split("T")[0]}">`:`<p class="text-text">${Q.formatDate(n.data_emissao)}</p>`)}
                        ${r("Prev. Entrega",t?`<input id="modal-prev" type="date" class="input" value="${(n.previsao_entrega||n.data_entrega_prevista||"").split("T")[0]}">`:`<p class="text-text">${Q.formatDate(n.previsao_entrega||n.data_entrega_prevista)}</p>`)}
                        ${r("Recebimento",t?`<input id="modal-receb" type="date" class="input" value="${(n.data_recebimento||"").split("T")[0]}">`:`<p class="text-text">${Q.formatDate(n.data_recebimento)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${r("Número NF-e",t?`<input id="modal-nf" class="input" value="${(n.numero_nf||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.numero_nf||"-"}</p>`)}
                        ${r("CNPJ Fornecedor",t?`<input id="modal-cnpj" class="input" value="${(n.cnpj_fornecedor||"").replace(/"/g,"&quot;")}" />`:`<p class="text-text">${n.cnpj_fornecedor||"-"}</p>`)}
                        ${r("Status Aprovação",t?`<select id="modal-aprov" class="input">${["Aprovado","Pendente","Reprovado"].map(u=>`<option value="${u}" ${n.status_aprovacao===u?"selected":""}>${u}</option>`).join("")}</select>`:`<p class="text-text">${n.status_aprovacao||"-"}</p>`)}
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
        `,document.body.appendChild(e);const i=()=>e.remove();(a=e.querySelector("#modal-close"))==null||a.addEventListener("click",i),(c=e.querySelector("#modal-close-2"))==null||c.addEventListener("click",i),t&&((l=e.querySelector("#modal-save"))==null||l.addEventListener("click",async()=>{var h,f,m,g,v,y,k,T,A,P,R,M,w,b,x;const u={obraId:((h=e.querySelector("#modal-obra"))==null?void 0:h.value)||n.obraId,status_compra:((f=e.querySelector("#modal-status"))==null?void 0:f.value)||n.status_compra,descricao_compra:((m=e.querySelector("#modal-desc"))==null?void 0:m.value)||"",valor_total:Number(((g=e.querySelector("#modal-valor"))==null?void 0:g.value)||0),fornecedorId:((v=e.querySelector("#modal-fornecedor"))==null?void 0:v.value)||"",compradorId:((y=e.querySelector("#modal-comprador"))==null?void 0:y.value)||"",centroCustoId:((k=e.querySelector("#modal-cc"))==null?void 0:k.value)||"",natureza_compra:((T=e.querySelector("#modal-natureza"))==null?void 0:T.value)||"",numero_nf:((A=e.querySelector("#modal-nf"))==null?void 0:A.value)||"",cnpj_fornecedor:((P=e.querySelector("#modal-cnpj"))==null?void 0:P.value)||"",status_aprovacao:((R=e.querySelector("#modal-aprov"))==null?void 0:R.value)||n.status_aprovacao,data_emissao:((M=e.querySelector("#modal-emissao"))==null?void 0:M.value)||"",previsao_entrega:((w=e.querySelector("#modal-prev"))==null?void 0:w.value)||"",data_recebimento:((b=e.querySelector("#modal-receb"))==null?void 0:b.value)||"",nf_conferida:((x=e.querySelector("#modal-nf-conferida"))==null?void 0:x.checked)||!1};["data_emissao","previsao_entrega","data_recebimento"].forEach(S=>{u[S]===""&&delete u[S]});try{if(u.cnpj_fornecedor&&!Q.validateCNPJ(u.cnpj_fornecedor)){alert("CNPJ inválido.");return}await Dr.updateCompra(n.id,u),i(),await z.load(),z.render(),F.createToast("Compra atualizada.")}catch(S){alert("Erro ao salvar: "+S.message)}}))},exportCsv:()=>{if(!z.compras.length){F.createToast("Sem dados para exportar.","warning");return}const n=new Map(z.obras.map(u=>[u.id,u.nome_obra||u.apelido_obra||u.id])),t=new Map(z.fornecedores.map(u=>[u.id,u.nome||u.empresa||u.id])),e=new Map(z.compradores.map(u=>[u.id,u.nome||u.id])),s=new Map(z.centros.map(u=>[u.id,u.nome||u.codigo||u.id])),r=["Obra","NF-e","Valor","Data Emissao","Status","Data Recebimento","Prev. Entrega","Natureza","Centro Custo","Comprador","Fornecedor","CNPJ Fornecedor","Justificativa Estouro","Status Aprovacao"],i=z.compras.map(u=>[`"${n.get(u.obraId)||u.obraId||""}"`,`"${u.numero_nf||""}"`,String(u.valor_total||u.valor_estimado||0).replace(".",","),u.data_emissao||"",u.status_compra||"",u.data_recebimento||"",u.previsao_entrega||u.data_entrega_prevista||"",u.natureza_compra||"",s.get(u.centroCustoId)||u.centroCustoNome||u.centro_custo||u.centroCustoId||"",e.get(u.compradorId)||u.comprador||"",t.get(u.fornecedorId)||u.fornecedor||"",u.cnpj_fornecedor||"",(u.justificativa_estouro_orcamento||"").replace(/"/g,"'"),u.status_aprovacao||""]);let o="\uFEFF"+r.join(";")+`
`;o+=i.map(u=>u.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)},exportGrouped:(n="obra")=>{const t=z.compras||[];if(!t.length){F.createToast("Sem dados para exportar.","warning");return}const e=n==="obra",s=e?["Obra","Qtd","Total (R$)"]:["Fornecedor","Qtd","Total (R$)"],r=new Map;t.forEach(u=>{const h=e?z.obraMap.get(u.obraId)||u.obraId||"N/D":z.fornecedorMap.get(u.fornecedorId)||u.fornecedor||"N/D",f=r.get(h)||{qtd:0,total:0};f.qtd+=1,f.total+=Number(u.valor_total??u.valor_estimado??0),r.set(h,f)});const i=Array.from(r.entries()).map(([u,h])=>[`"${u}"`,h.qtd,h.total.toFixed(2).replace(".",",")]);let o="\uFEFF"+s.join(";")+`
`;o+=i.map(u=>u.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${n}_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)}},bg={getUsers:async()=>(await yt(mt(X,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await Ze(ae(X,"usuarios",n),t)},createUserProfile:async(n,t)=>{await uy(ae(X,"usuarios",n),t)}},DO={render:n=>`
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
        `},MO=n=>(Array.isArray(n)?n:[n]).filter(Boolean),zs={hasRole:(n,t=Et.state.currentUser)=>{const e=MO(n);return!t||!e.length?!1:t.role==="administrador"?!0:e.includes(t.role)},guard:(n,t)=>{if(!zs.hasRole(n)){const e=new Error("Acesso negado para esta aÃ§Ã£o.");throw e.code="PERMISSION_DENIED",e}return t()},canEditObra:n=>zs.hasRole(["diretor","comprador","obra"],n),canDeleteObra:n=>zs.hasRole(["diretor"],n),canEditCompra:n=>zs.hasRole(["diretor","comprador"],n),canApproveCompra:n=>zs.hasRole(["diretor","financeiro"],n),canEditCadastros:n=>zs.hasRole(["diretor"],n)},tu={init:async()=>{bt.render(F.createLoader());try{zs.guard(["administrador","diretor"],async()=>{const n=await bg.getUsers();bt.render(DO.render(n)),tu.bindEvents()})}catch(n){bt.render(`<div class="text-red-500">Erro: ${n.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&bg.updateUser(t,{role:e}).then(()=>{F.createToast("Usuário atualizado!"),tu.init()}).catch(s=>F.createToast("Erro: "+s.message,"error"))})}};let nn=new Date().getMonth(),Vs=new Date().getFullYear();const Vr={setMonth:(n,t)=>{nn=n,Vs=t},changeMonth:n=>{nn+=n,nn<0&&(nn=11,Vs-=1),nn>11&&(nn=0,Vs+=1)},render:(n=[])=>{const t=new Date,e={};(n||[]).forEach(u=>{const h=u.date||u.previsao_entrega||u.data_entrega_prevista;if(!h)return;const f=new Date(h);if(Number.isNaN(f.getTime()))return;const m=f.toISOString().split("T")[0];e[m]||(e[m]=[]),e[m].push(u)});const s=new Date(Vs,nn,1),i=new Date(Vs,nn+1,0).getDate(),o=s.getDay();let l=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <button id="cal-prev" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&larr;</button>
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][nn]} ${Vs}</h3>
                    <button id="cal-next" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&rarr;</button>
                </div>
                
            <div class="flex items-center gap-3 text-xs text-text-muted mb-2">
                <span class="inline-flex items-center gap-1"><span class="w-3 h-3 inline-block bg-primary/30 border border-primary rounded"></span> Compras</span>
                <span class="inline-flex items-center gap-1"><span class="w-3 h-3 inline-block bg-blue-500/30 border border-blue-500 rounded"></span> RDO</span>
            </div>
        
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(u=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${u}</div>`).join("")}
        `;for(let u=0;u<o;u++)l+='<div class="aspect-square"></div>';for(let u=1;u<=i;u++){const h=new Date(Vs,nn,u),f=h.toISOString().split("T")[0],m=e[f]||[],g=u===t.getDate()&&nn===t.getMonth(),v=h<t&&!g;l+=`
                <div class="aspect-square border border-border rounded p-1 ${g?"bg-primary/10 border-primary":"bg-surface"} ${v?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${g?"text-primary font-bold":"text-text"}">${u}</div>
                    ${m.length>0?`
                        <div class="mt-1 space-y-1">
                            ${m.slice(0,2).map(y=>{const k=y.type==="rdo";return`
                                <div class="text-[10px] ${k?"bg-blue-500/20 border border-blue-500":"bg-primary/20 border border-primary"} rounded px-1 truncate" title="${y.descricao_compra||y.descricao||y.label||(k?"RDO":"Compra")}">
                                    ${(y.descricao_compra||y.descricao||y.label||(k?"RDO":"Compra")).substring(0,15)}
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
                                    ${i?`<p class="text-xs text-alert mt-1 font-display uppercase">Entrega em ${r} dia(s)</p>`:""}
                                </div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `}},ad={renderList:n=>`
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
                                ${t.valor_orcado?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${Q.formatCurrency(t.valor_orcado)}</p>`:""}
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
                            ${F.createInput({id:"data_prevista_Fim",label:"Data Prevista de Fim",type:"date",value:(n==null?void 0:n.data_prevista_Fim)||""})}
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
        `},renderDashboard:(n,t)=>{var i,o,a,c,l,u,h,f,m,g,v,y,k,T,A,P,R,M;const e=Number(n.horas_previstas||0),s=Number(n.horas_extras_previstas||0),r=e+s*1.5;return`
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

                <h3 class="text-xl font-display text-text tracking-wide">Análise Geral da Obra</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${F.createCard({title:"Total Orçado (Mat + M.O.)",content:`<p id="kpi-total-orcado" class="text-3xl font-display text-text">${Q.formatCurrency(((o=(i=t.financialSummary)==null?void 0:i.total)==null?void 0:o.planned)||0)}</p>`})}
                    ${F.createCard({title:"Total Gasto (Mat + M.O.)",content:`<p id="kpi-total-gasto" class="text-3xl font-display text-text">${Q.formatCurrency(((c=(a=t.financialSummary)==null?void 0:a.total)==null?void 0:c.spent)||t.totalGasto||0)}</p><p class="text-xs heading-muted mt-1" id="kpi-total-saldo-label">Saldo: ${Q.formatCurrency(((u=(l=t.financialSummary)==null?void 0:l.total)==null?void 0:u.balance)||0)}</p>`})}
                    ${F.createCard({title:"% Gasto Total",content:`<p id="kpi-total-percent" class="text-3xl font-display text-${(((f=(h=t.financialSummary)==null?void 0:h.total)==null?void 0:f.percent)||0)>100?"alert":"primary"}">${(((g=(m=t.financialSummary)==null?void 0:m.total)==null?void 0:g.percent)||0).toFixed(1)}%</p>`})}
                    ${F.createCard({title:"Pedidos que chegaram em atraso",content:`<p class="text-4xl font-display text-alert uppercase">${t.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(t.sla||0)<80?"alert":"primary"} uppercase">${(t.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(t.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(t.economia||0)<0?"alert":"primary"} uppercase">${Q.formatCurrency(t.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(t.curvaPercent||0).toFixed(1)}%</p>`})}
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

                <div class="card h-96">
                    <h3 class="text-lg font-display text-text mb-4">Comparativo Orçado vs Executado (Mat + M.O.)</h3>
                    <div class="h-80 relative">
                        <canvas id="chart-finance-compare"></canvas>
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
                                    ${(()=>{const w=(t.ccTable||[]).reduce((S,I)=>S+I.valor,0),b=(t.ccTable||[]).sort((S,I)=>I.valor-S.valor).map(S=>`
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${S.nome}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${Q.formatCurrency(S.valor)}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${w?(S.valor/w*100).toFixed(1):"0.0"}%</td>
                                                </tr>
                                            `).join(""),x=`
                                            <tr class="bg-canvas">
                                                <td class="px-4 py-2 text-sm font-display text-text">Total</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">${Q.formatCurrency(w)}</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">100%</td>
                                            </tr>`;return!b||b.trim().length===0?'<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>':b+x})()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div id="calendar-wrapper" class="lg:col-span-2">
                        ${Vr.render(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                    <div id="timeline-wrapper">
                        ${Vr.renderTimeline(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-xl font-display text-text tracking-wide">Análise de Mão de Obra (RDO)</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                        ${F.createCard({title:"Horas Normais",content:`<p id="kpi-rdo-total" class="text-4xl font-display text-primary uppercase">${(((v=t.rdoData)==null?void 0:v.totalHoras)||0).toFixed(1)}</p><p id="kpi-rdo-total-sub" class="text-xs heading-muted mt-1">${(((y=t.rdoData)==null?void 0:y.ultimos7Normais)||0).toFixed(1)}h gastas na última semana</p>`,className:"accent-left"})}
                        ${F.createCard({title:"Horas Extras",content:`<p id="kpi-rdo-extras" class="text-4xl font-display text-alert uppercase">${(((k=t.rdoData)==null?void 0:k.totalExtras)||0).toFixed(1)}</p><p id="kpi-rdo-extras-sub" class="text-xs heading-muted mt-1">Orçado: ${(s*1.5).toFixed(1)}h</p>`})}
                        ${F.createCard({title:"Saldo de Horas",content:`<p id="kpi-rdo-saldo" class="text-4xl font-display text-text uppercase">${(r-(Number(((T=t.rdoData)==null?void 0:T.totalHoras)||0)+.5*Number(((A=t.rdoData)==null?void 0:A.totalExtras)||0))).toFixed(1)}</p><p id="kpi-rdo-saldo-sub" class="text-xs heading-muted mt-1">~0.0 dias</p>`})}
                        ${F.createCard({title:"Média Horas/Dia",content:`<p id="kpi-rdo-media-dia" class="text-4xl font-display text-text uppercase">${(((P=t.rdoData)==null?void 0:P.mediaHorasDia)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Total Funcionários",content:`<p id="kpi-rdo-func" class="text-4xl font-display text-text uppercase">${((R=t.rdoData)==null?void 0:R.totalFuncionarios)||0}</p>`})}
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

                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Consumo de Horas (Normais + Extras conv.)</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-rdo-bateria"></canvas>
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
                                            <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas Extra</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-border">
                                        <tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>
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
                                    ${(((M=t.rdoData)==null?void 0:M.diarios)||[]).map(w=>`
                                        <tr>
                                            <td class="px-4 py-2 text-sm text-text">${new Date(w.data).toLocaleDateString("pt-BR")}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${w.horasNormais.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${w.horasExtras.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right font-display">${w.total.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${w.funcionarios}</td>
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
                                ${t.comprasRecentes.map(w=>`
                                    <tr class="hover:bg-canvas">
                                        <td class="px-6 py-4 text-sm text-text-muted">${Q.formatDate(w.data_solicitacao||w.data_emissao)}</td>
                                        <td class="px-6 py-4 text-sm text-text" title="${w.descricao_compra||w.descricao||"-"}">${w.descricao_compra||w.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Q.formatCurrency(w.valor_total??w.valor_estimado??0)}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Q.formatDate(w.previsao_entrega||w.data_entrega_prevista)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${w.compradorNome||w.comprador||w.compradorId||"-"}</td>
                                        <td class="px-6 py-4 text-sm">
                                            ${Q.renderStatusBadge(w.status_compra,w.previsao_entrega||w.data_entrega_prevista)}
                                        </td>
                                        <td class="px-6 py-4 text-sm text-right">
                                            ${w.id?`
                                                <div class="flex items-center justify-end gap-2">
                                                    <button class="text-text-muted hover:text-text" data-action="view-compra" data-id="${w.id}" title="Ver compra">${Rt.eye}</button>
                                                    <button class="text-primary hover:text-primary-strong" data-action="edit-compra" data-id="${w.id}" title="Editar compra">${Rt.pencil}</button>
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
        `}},de={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},Mn=()=>{var s,r;const n=typeof window<"u"?getComputedStyle(document.documentElement):null,t=(i,o)=>(n?(n.getPropertyValue(i)||"").trim():"")||o,e=(r=(s=document.documentElement)==null?void 0:s.classList)==null?void 0:r.contains("theme-light");return{isLight:e,text:t("--color-text","#e5e5e5"),muted:t("--color-text-muted","#a1a1aa"),primary:t("--color-primary","#22c55e"),primaryStrong:t("--color-primary-strong","#16a34a"),danger:t("--color-alert","#ef4444"),grid:e?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)"}},$b=()=>{const n=Mn();gt.defaults.color=n.text,gt.defaults.font.family=de.family,gt.defaults.font.weight=de.weight,gt.defaults.plugins.legend.labels.color=n.text,gt.defaults.scales=gt.defaults.scales||{}};$b();const xg=()=>{$b()},OO={id:"percentLabels",afterDraw(n){if(n.config.type!=="doughnut")return;const t=Mn(),{ctx:e}=n;n.data.datasets.forEach(s=>{const r=n.getDatasetMeta(0),i=s.data.reduce((o,a)=>o+a,0);r.data.forEach((o,a)=>{const c=s.data[a];if(!c||!i)return;const l=`${(c/i*100).toFixed(1)}%`;e.save(),e.fillStyle=t.text,e.font="600 11px "+de.family,e.textAlign="center",e.textBaseline="middle";const u=o.tooltipPosition();e.fillText(l,u.x,u.y),e.restore()})})}};gt.register(OO);const Fs={renderCategorias:(n,t)=>{const e=Mn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new gt(s,{type:"bar",data:{labels:r,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:e.primary,borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:e.grid},ticks:{color:e.muted,font:de}},y:{grid:{color:e.grid},ticks:{color:e.muted,font:de}}}}})},renderStatusObra:(n,t)=>{const e=Mn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new gt(s,{type:"doughnut",data:{labels:r,datasets:[{data:i,backgroundColor:[e.primary,e.primaryStrong,e.muted,e.danger,"#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:10},plugins:{legend:{position:"bottom",labels:{color:e.text,font:de,padding:12,usePointStyle:!0}},tooltip:{callbacks:{label:o=>{const a=o.dataset.data.reduce((l,u)=>l+u,0),c=a?(o.parsed/a*100).toFixed(1):0;return`${o.label}: ${c}% (${o.parsed})`}}}},cutout:"65%",pluginsCustom:!0}})},renderCentrosCusto:(n,t)=>{const e=Mn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new gt(s,{type:"bar",data:{labels:r,datasets:[{data:i,backgroundColor:e.primary,borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:e.grid},ticks:{color:e.muted,font:de,callback:o=>`R$ ${(o/1e3).toFixed(0)}k`},beginAtZero:!0},y:{grid:{display:!1},ticks:{color:e.muted,font:de,autoSkip:!1}}},indexAxis:"y"}})},renderFinancePVAV:(n,t=[],e=[])=>{const s=Mn(),r=document.getElementById(n);r&&(r.chart&&r.chart.destroy(),r.chart=new gt(r,{type:"line",data:{datasets:[{label:"Planejado (PV)",data:t,borderColor:s.primaryStrong,backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Real (AV)",data:e,borderColor:s.danger,backgroundColor:"rgba(239,68,68,0.08)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:s.grid},ticks:{color:s.muted}},y:{grid:{color:s.grid},ticks:{color:s.muted,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:s.text,font:de,usePointStyle:!0}}}}}))},renderFinanceComparison:(n,t)=>{var a,c,l,u,h,f;const e=Mn(),s=document.getElementById(n);if(!s||!t)return;s.chart&&s.chart.destroy();const r=["Materiais","Mão de Obra","Total"],i=[((a=t.materials)==null?void 0:a.planned)||0,((c=t.labor)==null?void 0:c.planned)||0,((l=t.total)==null?void 0:l.planned)||0],o=[((u=t.materials)==null?void 0:u.spent)||0,((h=t.labor)==null?void 0:h.spent)||0,((f=t.total)==null?void 0:f.spent)||0];s.chart=new gt(s,{type:"bar",data:{labels:r,datasets:[{label:"Planejado",data:i,backgroundColor:e.muted,borderRadius:6},{label:"Executado",data:o,backgroundColor:e.primary,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:e.text,font:de,usePointStyle:!0}},tooltip:{callbacks:{label:m=>`${m.dataset.label}: R$ ${Number(m.parsed.y||0).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}`}}},scales:{x:{grid:{display:!1},ticks:{color:e.muted,font:de}},y:{grid:{color:e.grid},ticks:{color:e.muted,font:de,callback:m=>`R$ ${(m/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCurvaS:(n,t=[],e=[],s=[])=>{const r=Mn(),i=document.getElementById(n);i&&(i.chart&&i.chart.destroy(),i.chart=new gt(i,{type:"line",data:{labels:t.length?t:e.map((o,a)=>`Semana ${a+1}`),datasets:[{label:"Planejado",data:e,borderColor:r.muted,backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:s,borderColor:r.primary,backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:r.primary,pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:r.text,font:de,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:r.text,bodyColor:r.muted,borderColor:"#333333",borderWidth:1,titleFont:de,bodyFont:de}},scales:{x:{grid:{color:r.grid},ticks:{color:r.muted,font:de}},y:{grid:{color:r.grid},ticks:{color:r.muted,font:de,callback:o=>`R$ ${(o/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=Mn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t).sort(),i=r.map(o=>t[o]);s.chart&&s.chart.destroy(),s.chart=new gt(s,{type:"line",data:{labels:r.map(o=>{const a=new Date(o);return Number.isNaN(a.getTime())?o:a.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Gastos Diários",data:i,borderColor:e.primary,backgroundColor:"rgba(34,197,94,0.1)",borderWidth:2,tension:.3,fill:!0,pointRadius:3,pointBackgroundColor:e.primary}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{type:"category",grid:{display:!1},ticks:{color:e.muted,font:de,maxRotation:45,autoSkip:!0,maxTicksLimit:10}},y:{grid:{color:e.grid},ticks:{color:e.muted,font:de,callback:o=>`R$ ${(o/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},xh=xS(),wg=xh.BASE_URL||"https://apiexterna.diariodeobra.app/v1",NO=()=>{const n=xh.TOKEN||(typeof window<"u"?window.__RDO_API_TOKEN:"");if(n)return n;try{const t=localStorage.getItem("axel_rdo_token");if(t)return t}catch{}return""};async function cd(n,t={}){const e=NO();if(!e)return console.warn("[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token"),null;const s={...t.headers,token:e,"Content-Type":"application/json"},r=await fetch(`${wg}${n}`,{...t,headers:s});if(console.info("[RDO] Request:",`${wg}${n}`,"status:",r.status),!r.ok)return console.warn(`Erro na API RDO ao acessar ${n}: ${r.status} ${r.statusText}`),null;const i=await r.json();return console.info("[RDO] Response data size:",Array.isArray(i)?i.length:Object.keys(i||{}).length),i}const rn={getByObra:async(n,t,e)=>{const s=await rn.getObraByOs(n);if(!s)return[];const r=await rn.getRelatoriosByObra(s._id);if(!r||!r.length)return[];const i=a=>{if(!a)return!0;const c=new Date(a);if(c.setHours(12,0,0,0),t){const l=new Date(t);if(l.setHours(12,0,0,0),c<l)return!1}if(e){const l=new Date(e);if(l.setHours(12,0,0,0),c>l)return!1}return!0},o=[];for(const a of r){const c=await rn.getRelatorioDetalhe(s._id,a._id);c&&i(c==null?void 0:c.data)&&o.push(c)}return o},getObraByOs:async n=>{const t=await cd("/obras");if(!Array.isArray(t))return null;const e=String(n||"").trim();if(!e)return null;const s=t.find(o=>String(o._id)===e);if(s)return s;const r=t.find(o=>{const a=(o.nome||"").match(/(\d+)$/);return a&&a[1]===e});if(r)return r;const i=t.find(o=>(o.nome||"").includes(e));return i||null},getRelatoriosByObra:async n=>{const t=await cd(`/obras/${n}/relatorios`);return Array.isArray(t)?t:[]},getRelatorioDetalhe:async(n,t)=>cd(`/obras/${n}/relatorios/${t}`),getIntegratedDataForObra:async n=>{const t=await rn.getObraByOs(n);if(!t)return console.warn("[RDO] Obra não localizada para OS:",n),null;console.info("[RDO] Obra encontrada para OS:",n,"->",t._id,t.nome);const e=await rn.getRelatoriosByObra(t._id);if(!e.length)return console.warn("[RDO] Nenhum relatório retornado para obra",t._id),{quantidadeRelatorios:0,totalHoras:"0.00",totalHorasExtras:"0.00",reports:[]};const s=(await Promise.all(e.map(c=>rn.getRelatorioDetalhe(t._id,c._id)))).filter(Boolean);let r=0,i=0;const o=9,a=c=>{if(!c||typeof c!="string")return 0;const[l,u]=c.split(":").map(Number);return(l||0)+(u||0)/60};return s.forEach(c=>{var h,f;(((h=c==null?void 0:c.maoDeObra)==null?void 0:h.padrao)||[]).forEach(m=>{const g=Number(m.quantidade)||0;r+=g,g>o&&(i+=g-o)}),(((f=c==null?void 0:c.maoDeObra)==null?void 0:f.personalizada)||[]).forEach(m=>{const g=a(m.horasTrabalhadas);r+=g,g>o&&(i+=g-o)})}),{quantidadeRelatorios:s.length,totalHoras:r.toFixed(2),totalHorasExtras:i.toFixed(2),reports:s,relatoriosRaw:s}},processRDOData:(n=[])=>{const t={},e={},s={},r={},i={};let o=0,a=0;const c=new Set,l=new Set,u=9,h={},f={},m=T=>{if(typeof T=="number")return T;if(typeof T=="string"){if(T.includes(":")){const[P,R]=T.split(":").map(Number);return(P||0)+(R||0)/60}const A=Number(T);return Number.isNaN(A)?0:A}return 0},g=T=>{if(!T)return null;let A=null;if(T instanceof Date?A=new Date(T.getTime()):typeof T=="number"&&(A=new Date(T)),typeof T=="string"){let P=T;if(P.includes("T")&&(P=P.split("T")[0]),P.includes("/")&&P.split("/").length===3){const[R,M,w]=P.split("/"),b=w.length===2?`20${w}`:w;A=new Date(`${b}-${M}-${R}`)}if(P.includes("-")){const[R,M,w]=P.split("-");A=new Date(Number(R),Number(M)-1,Number(w))}}return!A||Number.isNaN(A.getTime())?null:(A.setHours(12,0,0,0),A.setDate(A.getDate()+1),A)};n.forEach(T=>{var x,S;const A=T.data||T.data_inicio||T.dataInicio||T.createdAt||T.dataReferencia||T.dataServiço||T.dataServico||T.dataRelatorio||T.dataRel,P=g(A);if(!P||Number.isNaN(P.getTime()))return;const R=I=>String(I).padStart(2,"0"),M=`${P.getFullYear()}-${R(P.getMonth()+1)}-${R(P.getDate())}`;t[M]||(t[M]=0),e[M]||(e[M]=0),s[M]||(s[M]=0);const w=((x=T==null?void 0:T.maoDeObra)==null?void 0:x.padrao)||[],b=((S=T==null?void 0:T.maoDeObra)==null?void 0:S.personalizada)||[];w.forEach(I=>{const D=Number(I.quantidade)||0,C=Math.max(0,D-u),J=D-C;t[M]+=D,e[M]+=C,s[M]+=J;const j=I.funcao||"Outros";r[j]=(r[j]||0)+D;const W=I.funcionario_id||I.nome||I.funcionario||I.descricao;W&&(i[M]||(i[M]=new Set),i[M].add(W),c.add(I.funcionario_id||W),l.add(W));const N=I.nome||I.funcionario||I.descricao||"Técnico";h[N]=(h[N]||0)+D,f[N]=(f[N]||0)+C,o+=D,a+=C}),b.forEach(I=>{const D=m(I.horasTrabalhadas),C=Math.max(0,D-u),J=D-C;t[M]+=D,e[M]+=C,s[M]+=J;const j=I.funcao||"Outros";r[j]=(r[j]||0)+D;const W=I.funcionario_id||I.nome||I.funcionario||I.descricao;W&&(i[M]||(i[M]=new Set),i[M].add(W),c.add(I.funcionario_id||W),l.add(W));const N=I.nome||I.funcionario||I.descricao||"Técnico";h[N]=(h[N]||0)+D,f[N]=(f[N]||0)+C,o+=D,a+=C})});const v={};Object.keys(i).forEach(T=>{v[T]=i[T].size});const y=Object.keys(t).sort().map(T=>({data:T,horasNormais:s[T]||0,horasExtras:e[T]||0,total:t[T]||0,funcionarios:v[T]||0})),k=c.size||l.size;return{horasPorDia:t,horasNormaisPorDia:s,horasExtrasPorDia:e,horasPorFuncao:r,funcionariosPorDia:v,totalHoras:o,totalExtras:a,totalFuncionarios:k,mediaHorasDia:o/Math.max(1,Object.keys(t).length),mediaFuncionariosDia:Object.keys(v).length?Object.values(v).reduce((T,A)=>T+A,0)/Object.keys(v).length:0,techHours:h,techExtraHours:f,diarios:y}},getHolidays:()=>xh.HOLIDAYS||[]},Bb=Object.freeze(Object.defineProperty({__proto__:null,RDOService:rn},Symbol.toStringTag,{value:"Module"})),Eg=n=>{if(!n)return null;if(n instanceof Date)return n;if(n.toDate)return n.toDate();if(typeof n=="number")return new Date(n);if(typeof n=="string"){if(n.includes("/")&&n.split("/").length===3){const[e,s,r]=n.split("/"),i=r.length===2?`20${r}`:r,o=new Date(`${i}-${s}-${e}`);return o.setHours(12,0,0,0),o}const t=new Date(n);return t.setHours(12,0,0,0),t}return null},Mr={initList:async()=>{bt.render(F.createLoader());try{const n=await Ge.getObras();bt.render(ad.renderList(n))}catch(n){console.error(n),bt.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{bt.render(F.createLoader());try{let t=null;n&&(t=await Ge.getObraById(n)),bt.render(ad.renderForm(t)),Mr.bindFormEvents(n)}catch(t){console.error(t),bt.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{var t;bt.render(F.createLoader());try{xg(document.documentElement.classList.contains("theme-light"));const e=await Ge.getObraById(n);if(!e){bt.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const s=await Ge.getObraStats(n,!1),r=Number(e.valor_orcado||0);r>0?(s.economia=r-s.totalGasto,s.curvaPercent=s.totalGasto/r*100):(s.economia=0,s.curvaPercent=0);const i=[];!e.horas_previstas&&!e.horas_extras_previstas&&i.push("Horas da obra não informadas."),e.data_prevista_inicio||i.push("Data de início prevista não informada."),e.data_prevista_fim||i.push("Data de término prevista não informada."),r||i.push("Orçamento da obra não informado."),e.numero_os||i.push("Número da OS não informado; integração RDO pode falhar."),s.osNumber=e.numero_os||e.id,s.alerts=i;const[o,a,c]=await Promise.all([Js.list(),Zs.list(),Xs.list()]),l=new Map(o.map(A=>[A.id,A.nome||A.email||A.id])),u=new Map(a.map(A=>[A.id,A.nome||A.empresa||A.id])),h=new Map(c.map(A=>[A.id,A.nome||A.codigo||A.id]));s.comprasRecentes=(s.comprasRecentes||[]).map(A=>({...A,compradorNome:l.get(A.compradorId)||A.comprador||"",fornecedorNome:u.get(A.fornecedorId)||A.fornecedor||"",centroCustoNome:h.get(A.centroCustoId)||A.centroCustoNome||A.centro_custo||A.centroCustoId||""})),s.comprasCalendar=(s.comprasCalendar||[]).map(A=>({...A,compradorNome:l.get(A.compradorId)||A.comprador||"",fornecedorNome:u.get(A.fornecedorId)||A.fornecedor||"",centroCustoNome:h.get(A.centroCustoId)||A.centroCustoNome||A.centro_custo||A.centroCustoId||""}));let f=(((t=s.rdoData)==null?void 0:t.diarios)||[]).map(A=>({date:A.data,descricao_compra:"RDO",fornecedorNome:"Mão de obra",type:"rdo"})),m=[...s.comprasCalendar||[],...f];const g={};Object.entries(s.ccTotais||{}).forEach(([A,P])=>{const R=h.get(A)||A;g[R]=(g[R]||0)+P}),s.ccTotais=g,s.ccTable=Object.entries(g).map(([A,P])=>({nome:A,valor:P})),bt.render(ad.renderDashboard(e,s));const v=()=>{var b;const A=((b=s.financialSummary)==null?void 0:b.total)||{},P=document.getElementById("kpi-total-orcado"),R=document.getElementById("kpi-total-gasto"),M=document.getElementById("kpi-total-saldo-label"),w=document.getElementById("kpi-total-percent");P&&(P.textContent=Q.formatCurrency(A.planned||0)),R&&(R.textContent=Q.formatCurrency(A.spent||s.totalGasto||0)),M&&(M.textContent=`Saldo: ${Q.formatCurrency(A.balance||0)}`),w&&(w.textContent=`${(A.percent||0).toFixed(1)}%`)};v(),(()=>{const A=P=>{var w;const R=document.createElement("div");R.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",R.innerHTML=`
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
                                        <div class="mt-1">${Q.renderStatusBadge(P.status_compra,P.previsao_entrega||P.data_entrega_prevista)}</div>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Descrição</label>
                                        <p class="text-text">${P.descricao_compra||P.descricao||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Valor</label>
                                        <p class="text-text">${Q.formatCurrency(P.valor_total??P.valor_estimado??0)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Fornecedor</label>
                                        <p class="text-text">${P.fornecedorNome||P.fornecedor||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Comprador</label>
                                        <p class="text-text">${P.compradorNome||P.comprador||P.compradorId||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Prev. Entrega</label>
                                        <p class="text-text">${Q.formatDate(P.previsao_entrega||P.data_entrega_prevista)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Data Emissão</label>
                                        <p class="text-text">${Q.formatDate(P.data_emissao)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Número NF</label>
                                        <p class="text-text">${P.numero_nf||"-"}</p>
                                    </div>
                                </div>
                                <div class="flex justify-end gap-2">
                                    <button class="btn-secondary" data-close>Fechar</button>
                                    ${P.id?`<button class="btn" data-edit-id="${P.id}">Editar</button>`:""}
                                </div>
                            </div>
                        </div>
                    `,document.body.appendChild(R),(w=R.querySelectorAll("[data-close]"))==null||w.forEach(b=>b.addEventListener("click",()=>R.remove()));const M=R.querySelector("[data-edit-id]");M&&M.addEventListener("click",()=>{At.navigate(`/compras/${P.id}/editar`),R.remove()})};document.querySelectorAll('[data-action="edit-compra"]').forEach(P=>{P.addEventListener("click",()=>{const R=P.dataset.id;R&&At.navigate(`/compras/${R}/editar`)})}),document.querySelectorAll('[data-action="view-compra"]').forEach(P=>{P.addEventListener("click",()=>{const R=P.dataset.id,M=s.comprasRecentes.find(w=>w.id===R);M&&A(M)})})})();const k=()=>{const A=document.getElementById("calendar-wrapper"),P=document.getElementById("timeline-wrapper");A&&(A.innerHTML=Vr.render(m||s.comprasRecentes)),P&&(P.innerHTML=Vr.renderTimeline(s.comprasCalendar||s.comprasRecentes));const R=document.getElementById("cal-prev"),M=document.getElementById("cal-next");R==null||R.addEventListener("click",()=>{Vr.changeMonth(-1),k()}),M==null||M.addEventListener("click",()=>{Vr.changeMonth(1),k()})};k();const T=()=>{var P;const A=document.documentElement.classList.contains("theme-light");xg(A),Fs.renderCategorias("chart-categorias",s.gastosPorCategoria),Fs.renderStatusObra("chart-status-obra",s.porStatus),s.curvaS&&Fs.renderCurvaS("chart-curva-s",s.curvaS.labels||[],s.curvaS.planejado,s.curvaS.realizado),s.gastosDiarios&&Fs.renderGastosMensais("chart-gastos-diarios",s.gastosDiarios),s.ccTotais&&Fs.renderCentrosCusto("chart-cc",s.ccTotais),(s._pv||s._av)&&Fs.renderFinancePVAV("chart-finance-pvav",s._pv||[],s._av||[]),s.financialSummary&&Fs.renderFinanceComparison("chart-finance-compare",s.financialSummary),((P=s.rdoData)==null?void 0:P.totalHoras)>0?(jt.renderHorasNormaisExtras("chart-rdo-horas-normais-extras",s.rdoData.horasNormaisPorDia,s.rdoData.horasExtrasPorDia),s._plannedCurve&&s._executedCurve&&jt.renderCurvaHoras("chart-rdo-curva-horas",s._plannedCurve,s._executedCurve,s._feriados||[]),s.rdoData.horasPorFuncao&&jt.renderHorasPorFuncao("chart-rdo-funcao",s.rdoData.horasPorFuncao)):(jt.renderEmpty("chart-rdo-horas-normais-extras"),jt.renderEmpty("chart-rdo-curva-horas"))};setTimeout(async()=>{var w,b;const{COST_PER_HOUR:A,COST_PER_OVERTIME_HOUR:P}=await fo(async()=>{const{COST_PER_HOUR:x,COST_PER_OVERTIME_HOUR:S}=await Promise.resolve().then(()=>BD);return{COST_PER_HOUR:x,COST_PER_OVERTIME_HOUR:S}},void 0),R=Nb({data_inicio:e.data_prevista_inicio,data_prevista_fim:e.data_prevista_fim,orcamento:e.valor_orcado}),M=Lb(s.comprasCalendar||s.comprasRecentes||[],((w=s.rdoData)==null?void 0:w.horasPorDia)||{},A,P);s._pv=R,s._av=M;try{const x=e.numero_os||e.numeroOS||e.id;if(x){const S=await rn.getIntegratedDataForObra(x);if(S&&S.reports){const I=rn.processRDOData(S.reports);if(I){if(s.rdoData=I,s.rdoOk=!0,!I.totalFuncionarios||I.totalFuncionarios===0){const Bt=new Set;Object.entries(I.horasPorFuncao||{}).forEach(([Nt])=>{Bt.add(Nt)}),I.totalFuncionarios=Bt.size}const D=(Bt,Nt)=>{const xe=document.getElementById(Bt);xe&&(xe.textContent=Nt)},C=Number(e.horas_previstas||0),J=Number(e.horas_extras_previstas||0),j=C+1.5*J,W=Number(I.totalHoras||0)+.5*Number(I.totalExtras||0),N=j-W,U=Object.values(I.horasNormaisPorDia||{}).reduce((Bt,Nt)=>Bt+Nt,0),nt=Object.keys(I.horasNormaisPorDia||{}).sort((Bt,Nt)=>new Date(Nt)-new Date(Bt)).slice(0,7).reduce((Bt,Nt)=>Bt+(I.horasNormaisPorDia[Nt]||0),0),lt=((b=(I.diarios||[]).slice(-1)[0])==null?void 0:b.funcionarios)||0,at=lt>0?lt*9:I.mediaHorasDia||9,Z=at>0?N/at:0;I.ultimos7Normais=nt,D("kpi-rdo-total",U.toFixed(1)),D("kpi-rdo-media-dia",I.mediaHorasDia.toFixed(1)),D("kpi-rdo-func",String(I.totalFuncionarios||0)),D("kpi-rdo-extras",I.totalExtras.toFixed(1)),D("kpi-rdo-saldo",N.toFixed(1));const ft=document.getElementById("kpi-rdo-total-sub");ft&&(ft.textContent=`${nt.toFixed(1)}h gastas na última semana`);const Tt=document.getElementById("kpi-rdo-extras-sub");Tt&&(Tt.textContent=`Orçado: ${(J*1.5).toFixed(1)}h`);const Ot=document.getElementById("kpi-rdo-saldo-sub");if(Ot&&(Ot.textContent=`~${Z.toFixed(1)} dias`),f=(I.diarios||[]).map(Bt=>({date:Bt.data,descricao_compra:"RDO",fornecedorNome:"Mão de obra",type:"rdo"})),m=[...s.comprasCalendar||[],...f],k(),I.totalHoras>0){jt.renderHorasNormaisExtras("chart-rdo-horas-normais-extras",I.horasNormaisPorDia,I.horasExtrasPorDia);const Bt=[],Nt=[],xe=Eg(e.data_prevista_inicio),He=Eg(e.data_prevista_fim);if(xe&&He&&!Number.isNaN(xe)&&!Number.isNaN(He)&&xe<=He&&j>0){const ce=[],le=new Date(xe);le.setHours(12,0,0,0);const It=new Date(He);for(It.setDate(It.getDate()+1);le<=It;){const Oe=le.getDay();Oe!==0&&Oe!==6&&ce.push(new Date(le)),le.setDate(le.getDate()+1)}const Ut=ce.length?j/ce.length:0;let _e=0;ce.forEach(Oe=>{_e+=Ut,Bt.push({x:new Date(Oe),y:Number(_e.toFixed(2))})})}const kn=Object.keys(I.horasPorDia||{}).sort((ce,le)=>new Date(ce)-new Date(le));let Xn=0;kn.forEach(ce=>{const le=new Date(ce);le.setHours(12,0,0,0),!Number.isNaN(le.getTime())&&(Xn+=I.horasPorDia[ce],Nt.push({x:le,y:Number(Xn.toFixed(2))}))});const Fe=rn.getHolidays?rn.getHolidays():[];if(s._plannedCurve=Bt,s._executedCurve=Nt,s._feriados=Fe,jt.renderCurvaHoras("chart-rdo-curva-horas",Bt,Nt,Fe),I.horasPorFuncao&&jt.renderHorasPorFuncao("chart-rdo-funcao",I.horasPorFuncao),jt.renderHorasStacked("chart-rdo-bateria",{plannedNormal:C,plannedExtra:J*1.5,execNormal:U,execExtra:I.totalExtras*1.5}),I.techHours){const ce=Object.entries(I.techHours||{}).sort((Ut,_e)=>_e[1]-Ut[1]).slice(0,10),le=I.techExtraHours||{},It=document.querySelector("#table-rdo-tech tbody");It&&(It.innerHTML=ce.map(([Ut,_e])=>`
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${Ut}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right font-display">${_e.toFixed(1)}h</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${(le[Ut]||0).toFixed(1)}h</td>
                                                </tr>
                                            `).join("")||'<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>')}}else jt.renderEmpty("chart-rdo-horas-normais-extras"),jt.renderEmpty("chart-rdo-curva-horas");const ze=document.querySelector("#table-rdo tbody");if(ze){const Bt=I.diarios||[];Bt.length?ze.innerHTML=Bt.map(Nt=>`
                                            <tr>
                                                <td class="px-4 py-2 text-sm text-text">${new Date(Nt.data).toLocaleDateString("pt-BR")}</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${Nt.horasNormais.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${Nt.horasExtras.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right font-display">${Nt.total.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${Nt.funcionarios}</td>
                                            </tr>
                                        `).join(""):ze.innerHTML='<tr><td colspan="5" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}}}else s.rdoData=s.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},jt.renderEmpty("chart-rdo-horas-normais-extras"),jt.renderEmpty("chart-rdo-curva-horas")}}catch(x){console.warn("Erro ao carregar dados RDO (legacy):",(x==null?void 0:x.message)||x),s.rdoData=s.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},jt.renderEmpty("chart-rdo-horas-normais-extras"),jt.renderEmpty("chart-rdo-curva-horas")}try{const x=await Ge.calculateFinancialSummary(e.id,s.comprasCalendar||s.comprasRecentes||[],s.rdoData||null);s.financialSummary=x,x!=null&&x.total&&(s.totalGasto=x.total.spent||0,s.economia=(x.total.planned||0)-(x.total.spent||0),s.curvaPercent=x.total.planned>0?x.total.spent/x.total.planned*100:0)}catch(x){console.warn("Erro ao calcular resumo financeiro",x)}v(),T()},100),Et.subscribe(A=>{A!=null&&A.currentTheme&&requestAnimationFrame(()=>{setTimeout(T,0)})})}catch(e){console.error(e),bt.render(`<div class="text-red-500 p-4">Erro: ${e.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=F.createLoader();const r=new FormData(t),i=Object.fromEntries(r.entries());i.valor_orcado=i.valor_orcado?Number(i.valor_orcado):0,i.tolerancia_percentual=i.tolerancia_percentual?Number(i.tolerancia_percentual)/100:0,i.valor_deslocamento_km=i.valor_deslocamento_km?Number(i.valor_deslocamento_km):0,i.horas_previstas=i.horas_previstas?Number(i.horas_previstas):0,i.horas_extras_previstas=i.horas_extras_previstas?Number(i.horas_extras_previstas):0,i.qtd_refeicoes=i.qtd_refeicoes?Number(i.qtd_refeicoes):0,i.qtd_hospedagens=i.qtd_hospedagens?Number(i.qtd_hospedagens):0,i.is_obra_filha=t.is_obra_filha.checked,n?(await Ge.updateObra(n,i),F.createToast("Obra atualizada com sucesso!")):(await Ge.createObra(i),F.createToast("Obra criada com sucesso!")),At.navigate("/obras")}catch(r){console.error(r),F.createToast("Erro ao salvar obra: "+r.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},LO={renderMenu:()=>`
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
    `},VO={init:async()=>{bt.render(LO.renderMenu())}},FO={render:(n=[])=>`
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
    `},eu={init:async()=>{const n=await Zs.list();bt.render(FO.render(n)),eu.bind()},bind:()=>{const n=document.getElementById("fornecedor-form"),t=document.getElementById("btn-novo-fornecedor"),e=document.getElementById("btn-salvar-fornecedor"),s=document.getElementById("btn-cancelar-fornecedor"),r=document.querySelector("#fornecedor-table");t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden"));let i=null;r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("forn-nome").value=a.dataset.nome||"",document.getElementById("forn-email").value=a.dataset.email||"",document.getElementById("forn-telefone").value=a.dataset.telefone||"",document.getElementById("forn-cnpj").value=a.dataset.cnpj||"",n==null||n.classList.remove("hidden"))}),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("forn-nome").value,email:document.getElementById("forn-email").value,telefone:document.getElementById("forn-telefone").value,cnpj:document.getElementById("forn-cnpj").value};i?await Zs.update(i,o):await Zs.create(o),eu.init()})}},$O={render:(n=[])=>`
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
    `},nu={init:async()=>{const n=await Xs.list();bt.render($O.render(n)),nu.bind()},bind:()=>{const n=document.getElementById("cc-form"),t=document.getElementById("btn-novo-cc"),e=document.getElementById("btn-salvar-cc"),s=document.getElementById("btn-cancelar-cc"),r=document.getElementById("cc-table");let i=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("cc-nome").value,codigo:document.getElementById("cc-codigo").value};i?await Xs.update(i,o):await Xs.create(o),nu.init()}),r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("cc-nome").value=a.dataset.nome||"",document.getElementById("cc-codigo").value=a.dataset.codigo||"",n==null||n.classList.remove("hidden"))})}},BO={render:(n=[])=>`
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
    `},su={init:async()=>{const n=await Js.list();bt.render(BO.render(n)),su.bind()},bind:()=>{const n=document.getElementById("comprador-form"),t=document.getElementById("btn-novo-comprador"),e=document.getElementById("btn-salvar-comprador"),s=document.getElementById("btn-cancelar-comprador"),r=document.getElementById("compr-table");let i=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("compr-nome").value,email:document.getElementById("compr-email").value};i?await Js.update(i,o):await Js.create(o),su.init()}),r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("compr-nome").value=a.dataset.nome||"",document.getElementById("compr-email").value=a.dataset.email||"",n==null||n.classList.remove("hidden"))})}},Tg={renderBell:(n=0)=>`
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${Rt.bell}
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
        `},he={notifications:[],unreadCount:0,eventsBound:!1,init:async()=>{Et.state.currentUser&&(window.addEventListener("layout:rendered",()=>{he.render(),he.bindEvents()}),await he.load(),he.render(),he.bindEvents(),setInterval(()=>he.load(),12e4))},load:async()=>{const n=Et.state.currentUser;he.notifications=await Qs.getByUser(n.uid,20),he.unreadCount=he.notifications.filter(t=>!t.lida).length,he.render(),Ic.badge(he.unreadCount)},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=Tg.renderBell(he.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=Tg.renderDropdown(he.notifications),n.appendChild(t)},bindEvents:()=>{he.eventsBound||(he.eventsBound=!0,document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=Et.state.currentUser;await Qs.markAllAsRead(t.uid),await he.load()}}),document.addEventListener("click",async n=>{var r,i;const t=(i=(r=n.target).closest)==null?void 0:i.call(r,"[data-notification-id]");if(!t)return;const e=t.dataset.notificationId,s=t.dataset.link||"#";try{await Qs.markAsRead(e),await he.load()}finally{window.location.hash=s.startsWith("#")?s.slice(1):s}}))}};console.log("[Main] Inicializando aplicaÃ§Ã£o...");const UO=async()=>{try{await TS(),console.log("[Main] Firebase inicializado."),Et.applyTheme(Et.state.currentTheme||"dark"),await pc.init(),Et.state.currentUser&&await he.init(),At.init(),At.on("/",fn.init),At.on("/login",Up.initLogin),At.on("/forgot-password",Up.initForgotPassword),At.on("/compras",Lr.init),At.on("/compras/nova",Lr.init),At.on("/relatorios",z.init),At.on("/configuracoes",tu.init),At.on("/compras/:id",({id:t})=>Lr.initEdit(t)),At.on("/compras/:id/editar",({id:t})=>Lr.initEdit(t)),At.on("/cadastros",VO.init),At.on("/cadastros/fornecedores",eu.init),At.on("/cadastros/centros-custo",nu.init),At.on("/cadastros/compradores",su.init),At.on("/obras",Mr.initList),At.on("/obras/nova",()=>Mr.initForm()),At.on("/obras/:id",({id:t})=>Mr.initDashboard(t)),At.on("/obras/:id/dashboard",({id:t})=>Mr.initDashboard(t)),At.on("/obras/:id/editar",({id:t})=>Mr.initForm(t)),At.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};UO();
