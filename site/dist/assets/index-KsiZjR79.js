var fv=Object.defineProperty;var pv=(n,t,e)=>t in n?fv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var B=(n,t,e)=>pv(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var sd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},gv=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(p=64)),s.push(e[h],e[d],e[p],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(eg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):gv(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const d=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new mv;const p=r<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),d!==64){const _=u<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _v=function(n){const t=eg(n);return ng.encodeByteArray(t,!0)},jo=function(n){return _v(n).replace(/\./g,"")},sg=function(n){try{return ng.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function yv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vv=()=>yv().__FIREBASE_DEFAULTS__,bv=()=>{if(typeof process>"u"||typeof sd>"u")return;const n=sd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&sg(n[1]);return t&&JSON.parse(t)},ma=()=>{try{return vv()||bv()||wv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ig=n=>{var t,e;return(e=(t=ma())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},rg=n=>{const t=ig(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},og=()=>{var n;return(n=ma())===null||n===void 0?void 0:n.config},ag=n=>{var t;return(t=ma())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function lg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jo(JSON.stringify(e)),jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ev(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Tv(){var n;const t=(n=ma())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Iv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Av(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rv(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kv(){return!Tv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pv(){try{return typeof indexedDB=="object"}catch{return!1}}function Cv(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="FirebaseError";class He extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Dv,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_r.prototype.create)}}class _r{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Ov(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new He(i,a,s)}}function Ov(n,t){return n.replace(Mv,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Mv=/\{\$([^}]+)}/g;function Lv(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ho(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(id(r)&&id(o)){if(!Ho(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function id(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Pi(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function Ci(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Nv(n,t){const e=new Vv(n,t);return e.subscribe.bind(e)}class Vv{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Fv(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=_l),i.error===void 0&&(i.error=_l),i.complete===void 0&&(i.complete=_l);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fv(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function _l(){}/**
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
 */function At(n){return n&&n._delegate?n._delegate:n}class Nn{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class Bv{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new xv;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($v(t))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=ts){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ts){return this.instances.has(t)}getOptions(t=ts){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Uv(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ts){return this.component?this.component.multipleInstances?t:ts:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uv(n){return n===ts?void 0:n}function $v(n){return n.instantiationMode==="EAGER"}/**
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
 */class zv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Bv(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const jv={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Hv=J.INFO,Wv={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},qv=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Wv[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zc{constructor(t){this.name=t,this._logLevel=Hv,this._logHandler=qv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Gv=(n,t)=>t.some(e=>n instanceof e);let rd,od;function Kv(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yv(){return od||(od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cg=new WeakMap,Jl=new WeakMap,ug=new WeakMap,yl=new WeakMap,jc=new WeakMap;function Xv(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Cn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&cg.set(e,n)}).catch(()=>{}),jc.set(t,n),t}function Qv(n){if(Jl.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Jl.set(n,t)}let Zl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Jl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ug.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Cn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jv(n){Zl=n(Zl)}function Zv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(vl(this),t,...e);return ug.set(s,t.sort?t.sort():[t]),Cn(s)}:Yv().includes(n)?function(...t){return n.apply(vl(this),t),Cn(cg.get(this))}:function(...t){return Cn(n.apply(vl(this),t))}}function tb(n){return typeof n=="function"?Zv(n):(n instanceof IDBTransaction&&Qv(n),Gv(n,Kv())?new Proxy(n,Zl):n)}function Cn(n){if(n instanceof IDBRequest)return Xv(n);if(yl.has(n))return yl.get(n);const t=tb(n);return t!==n&&(yl.set(n,t),jc.set(t,n)),t}const vl=n=>jc.get(n);function eb(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=Cn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Cn(o.result),l.oldVersion,l.newVersion,Cn(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const nb=["get","getKey","getAll","getAllKeys","count"],sb=["put","add","delete","clear"],bl=new Map;function ad(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(bl.get(t))return bl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=sb.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||nb.includes(e)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&l.done]))[0]};return bl.set(t,r),r}Jv(n=>({...n,get:(t,e,s)=>ad(t,e)||n.get(t,e,s),has:(t,e)=>!!ad(t,e)||n.has(t,e)}));/**
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
 */class ib{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(rb(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function rb(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const tc="@firebase/app",ld="0.10.13";/**
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
 */const un=new zc("@firebase/app"),ob="@firebase/app-compat",ab="@firebase/analytics-compat",lb="@firebase/analytics",cb="@firebase/app-check-compat",ub="@firebase/app-check",hb="@firebase/auth",db="@firebase/auth-compat",fb="@firebase/database",pb="@firebase/data-connect",gb="@firebase/database-compat",mb="@firebase/functions",_b="@firebase/functions-compat",yb="@firebase/installations",vb="@firebase/installations-compat",bb="@firebase/messaging",wb="@firebase/messaging-compat",xb="@firebase/performance",Eb="@firebase/performance-compat",Tb="@firebase/remote-config",Ib="@firebase/remote-config-compat",Ab="@firebase/storage",Sb="@firebase/storage-compat",Rb="@firebase/firestore",kb="@firebase/vertexai-preview",Pb="@firebase/firestore-compat",Cb="firebase",Db="10.14.1";/**
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
 */const ec="[DEFAULT]",Ob={[tc]:"fire-core",[ob]:"fire-core-compat",[lb]:"fire-analytics",[ab]:"fire-analytics-compat",[ub]:"fire-app-check",[cb]:"fire-app-check-compat",[hb]:"fire-auth",[db]:"fire-auth-compat",[fb]:"fire-rtdb",[pb]:"fire-data-connect",[gb]:"fire-rtdb-compat",[mb]:"fire-fn",[_b]:"fire-fn-compat",[yb]:"fire-iid",[vb]:"fire-iid-compat",[bb]:"fire-fcm",[wb]:"fire-fcm-compat",[xb]:"fire-perf",[Eb]:"fire-perf-compat",[Tb]:"fire-rc",[Ib]:"fire-rc-compat",[Ab]:"fire-gcs",[Sb]:"fire-gcs-compat",[Rb]:"fire-fst",[Pb]:"fire-fst-compat",[kb]:"fire-vertex","fire-js":"fire-js",[Cb]:"fire-js-all"};/**
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
 */const Wo=new Map,Mb=new Map,nc=new Map;function cd(n,t){try{n.container.addComponent(t)}catch(e){un.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function cs(n){const t=n.name;if(nc.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;nc.set(t,n);for(const e of Wo.values())cd(e,n);for(const e of Mb.values())cd(e,n);return!0}function _a(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function tn(n){return n.settings!==void 0}/**
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
 */const Lb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dn=new _r("app","Firebase",Lb);/**
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
 */class Nb{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const _s=Db;function hg(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ec,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Dn.create("bad-app-name",{appName:String(i)});if(e||(e=og()),!e)throw Dn.create("no-options");const r=Wo.get(i);if(r){if(Ho(e,r.options)&&Ho(s,r.config))return r;throw Dn.create("duplicate-app",{appName:i})}const o=new zv(i);for(const l of nc.values())o.addComponent(l);const a=new Nb(e,s,o);return Wo.set(i,a),a}function Hc(n=ec){const t=Wo.get(n);if(!t&&n===ec&&og())return hg();if(!t)throw Dn.create("no-app",{appName:n});return t}function Ve(n,t,e){var s;let i=(s=Ob[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),un.warn(a.join(" "));return}cs(new Nn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Vb="firebase-heartbeat-database",Fb=1,Zi="firebase-heartbeat-store";let wl=null;function dg(){return wl||(wl=eb(Vb,Fb,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Zi)}catch(e){console.warn(e)}}}}).catch(n=>{throw Dn.create("idb-open",{originalErrorMessage:n.message})})),wl}async function Bb(n){try{const e=(await dg()).transaction(Zi),s=await e.objectStore(Zi).get(fg(n));return await e.done,s}catch(t){if(t instanceof He)un.warn(t.message);else{const e=Dn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});un.warn(e.message)}}}async function ud(n,t){try{const s=(await dg()).transaction(Zi,"readwrite");await s.objectStore(Zi).put(t,fg(n)),await s.done}catch(e){if(e instanceof He)un.warn(e.message);else{const s=Dn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});un.warn(s.message)}}}function fg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ub=1024,$b=30*24*60*60*1e3;class zb{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Hb(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$b}),this._storage.overwrite(this._heartbeatsCache))}catch(s){un.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hd(),{heartbeatsToSend:s,unsentEntries:i}=jb(this._heartbeatsCache.heartbeats),r=jo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return un.warn(e),""}}}function hd(){return new Date().toISOString().substring(0,10)}function jb(n,t=Ub){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),dd(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),dd(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Hb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pv()?Cv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bb(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ud(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ud(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function dd(n){return jo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Wb(n){cs(new Nn("platform-logger",t=>new ib(t),"PRIVATE")),cs(new Nn("heartbeat",t=>new zb(t),"PRIVATE")),Ve(tc,ld,n),Ve(tc,ld,"esm2017"),Ve("fire-js","")}Wb("");var qb="firebase",Gb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve(qb,Gb,"app");var fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rs,pg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,w){function x(){}x.prototype=w.prototype,E.D=w.prototype,E.prototype=new x,E.prototype.constructor=E,E.C=function(I,S,k){for(var T=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)T[bt-2]=arguments[bt];return w.prototype[S].apply(I,T)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,w,x){x||(x=0);var I=Array(16);if(typeof w=="string")for(var S=0;16>S;++S)I[S]=w.charCodeAt(x++)|w.charCodeAt(x++)<<8|w.charCodeAt(x++)<<16|w.charCodeAt(x++)<<24;else for(S=0;16>S;++S)I[S]=w[x++]|w[x++]<<8|w[x++]<<16|w[x++]<<24;w=E.g[0],x=E.g[1],S=E.g[2];var k=E.g[3],T=w+(k^x&(S^k))+I[0]+3614090360&4294967295;w=x+(T<<7&4294967295|T>>>25),T=k+(S^w&(x^S))+I[1]+3905402710&4294967295,k=w+(T<<12&4294967295|T>>>20),T=S+(x^k&(w^x))+I[2]+606105819&4294967295,S=k+(T<<17&4294967295|T>>>15),T=x+(w^S&(k^w))+I[3]+3250441966&4294967295,x=S+(T<<22&4294967295|T>>>10),T=w+(k^x&(S^k))+I[4]+4118548399&4294967295,w=x+(T<<7&4294967295|T>>>25),T=k+(S^w&(x^S))+I[5]+1200080426&4294967295,k=w+(T<<12&4294967295|T>>>20),T=S+(x^k&(w^x))+I[6]+2821735955&4294967295,S=k+(T<<17&4294967295|T>>>15),T=x+(w^S&(k^w))+I[7]+4249261313&4294967295,x=S+(T<<22&4294967295|T>>>10),T=w+(k^x&(S^k))+I[8]+1770035416&4294967295,w=x+(T<<7&4294967295|T>>>25),T=k+(S^w&(x^S))+I[9]+2336552879&4294967295,k=w+(T<<12&4294967295|T>>>20),T=S+(x^k&(w^x))+I[10]+4294925233&4294967295,S=k+(T<<17&4294967295|T>>>15),T=x+(w^S&(k^w))+I[11]+2304563134&4294967295,x=S+(T<<22&4294967295|T>>>10),T=w+(k^x&(S^k))+I[12]+1804603682&4294967295,w=x+(T<<7&4294967295|T>>>25),T=k+(S^w&(x^S))+I[13]+4254626195&4294967295,k=w+(T<<12&4294967295|T>>>20),T=S+(x^k&(w^x))+I[14]+2792965006&4294967295,S=k+(T<<17&4294967295|T>>>15),T=x+(w^S&(k^w))+I[15]+1236535329&4294967295,x=S+(T<<22&4294967295|T>>>10),T=w+(S^k&(x^S))+I[1]+4129170786&4294967295,w=x+(T<<5&4294967295|T>>>27),T=k+(x^S&(w^x))+I[6]+3225465664&4294967295,k=w+(T<<9&4294967295|T>>>23),T=S+(w^x&(k^w))+I[11]+643717713&4294967295,S=k+(T<<14&4294967295|T>>>18),T=x+(k^w&(S^k))+I[0]+3921069994&4294967295,x=S+(T<<20&4294967295|T>>>12),T=w+(S^k&(x^S))+I[5]+3593408605&4294967295,w=x+(T<<5&4294967295|T>>>27),T=k+(x^S&(w^x))+I[10]+38016083&4294967295,k=w+(T<<9&4294967295|T>>>23),T=S+(w^x&(k^w))+I[15]+3634488961&4294967295,S=k+(T<<14&4294967295|T>>>18),T=x+(k^w&(S^k))+I[4]+3889429448&4294967295,x=S+(T<<20&4294967295|T>>>12),T=w+(S^k&(x^S))+I[9]+568446438&4294967295,w=x+(T<<5&4294967295|T>>>27),T=k+(x^S&(w^x))+I[14]+3275163606&4294967295,k=w+(T<<9&4294967295|T>>>23),T=S+(w^x&(k^w))+I[3]+4107603335&4294967295,S=k+(T<<14&4294967295|T>>>18),T=x+(k^w&(S^k))+I[8]+1163531501&4294967295,x=S+(T<<20&4294967295|T>>>12),T=w+(S^k&(x^S))+I[13]+2850285829&4294967295,w=x+(T<<5&4294967295|T>>>27),T=k+(x^S&(w^x))+I[2]+4243563512&4294967295,k=w+(T<<9&4294967295|T>>>23),T=S+(w^x&(k^w))+I[7]+1735328473&4294967295,S=k+(T<<14&4294967295|T>>>18),T=x+(k^w&(S^k))+I[12]+2368359562&4294967295,x=S+(T<<20&4294967295|T>>>12),T=w+(x^S^k)+I[5]+4294588738&4294967295,w=x+(T<<4&4294967295|T>>>28),T=k+(w^x^S)+I[8]+2272392833&4294967295,k=w+(T<<11&4294967295|T>>>21),T=S+(k^w^x)+I[11]+1839030562&4294967295,S=k+(T<<16&4294967295|T>>>16),T=x+(S^k^w)+I[14]+4259657740&4294967295,x=S+(T<<23&4294967295|T>>>9),T=w+(x^S^k)+I[1]+2763975236&4294967295,w=x+(T<<4&4294967295|T>>>28),T=k+(w^x^S)+I[4]+1272893353&4294967295,k=w+(T<<11&4294967295|T>>>21),T=S+(k^w^x)+I[7]+4139469664&4294967295,S=k+(T<<16&4294967295|T>>>16),T=x+(S^k^w)+I[10]+3200236656&4294967295,x=S+(T<<23&4294967295|T>>>9),T=w+(x^S^k)+I[13]+681279174&4294967295,w=x+(T<<4&4294967295|T>>>28),T=k+(w^x^S)+I[0]+3936430074&4294967295,k=w+(T<<11&4294967295|T>>>21),T=S+(k^w^x)+I[3]+3572445317&4294967295,S=k+(T<<16&4294967295|T>>>16),T=x+(S^k^w)+I[6]+76029189&4294967295,x=S+(T<<23&4294967295|T>>>9),T=w+(x^S^k)+I[9]+3654602809&4294967295,w=x+(T<<4&4294967295|T>>>28),T=k+(w^x^S)+I[12]+3873151461&4294967295,k=w+(T<<11&4294967295|T>>>21),T=S+(k^w^x)+I[15]+530742520&4294967295,S=k+(T<<16&4294967295|T>>>16),T=x+(S^k^w)+I[2]+3299628645&4294967295,x=S+(T<<23&4294967295|T>>>9),T=w+(S^(x|~k))+I[0]+4096336452&4294967295,w=x+(T<<6&4294967295|T>>>26),T=k+(x^(w|~S))+I[7]+1126891415&4294967295,k=w+(T<<10&4294967295|T>>>22),T=S+(w^(k|~x))+I[14]+2878612391&4294967295,S=k+(T<<15&4294967295|T>>>17),T=x+(k^(S|~w))+I[5]+4237533241&4294967295,x=S+(T<<21&4294967295|T>>>11),T=w+(S^(x|~k))+I[12]+1700485571&4294967295,w=x+(T<<6&4294967295|T>>>26),T=k+(x^(w|~S))+I[3]+2399980690&4294967295,k=w+(T<<10&4294967295|T>>>22),T=S+(w^(k|~x))+I[10]+4293915773&4294967295,S=k+(T<<15&4294967295|T>>>17),T=x+(k^(S|~w))+I[1]+2240044497&4294967295,x=S+(T<<21&4294967295|T>>>11),T=w+(S^(x|~k))+I[8]+1873313359&4294967295,w=x+(T<<6&4294967295|T>>>26),T=k+(x^(w|~S))+I[15]+4264355552&4294967295,k=w+(T<<10&4294967295|T>>>22),T=S+(w^(k|~x))+I[6]+2734768916&4294967295,S=k+(T<<15&4294967295|T>>>17),T=x+(k^(S|~w))+I[13]+1309151649&4294967295,x=S+(T<<21&4294967295|T>>>11),T=w+(S^(x|~k))+I[4]+4149444226&4294967295,w=x+(T<<6&4294967295|T>>>26),T=k+(x^(w|~S))+I[11]+3174756917&4294967295,k=w+(T<<10&4294967295|T>>>22),T=S+(w^(k|~x))+I[2]+718787259&4294967295,S=k+(T<<15&4294967295|T>>>17),T=x+(k^(S|~w))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+w&4294967295,E.g[1]=E.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+S&4294967295,E.g[3]=E.g[3]+k&4294967295}s.prototype.u=function(E,w){w===void 0&&(w=E.length);for(var x=w-this.blockSize,I=this.B,S=this.h,k=0;k<w;){if(S==0)for(;k<=x;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<w;)if(I[S++]=E.charCodeAt(k++),S==this.blockSize){i(this,I),S=0;break}}else for(;k<w;)if(I[S++]=E[k++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=w},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var w=1;w<E.length-8;++w)E[w]=0;var x=8*this.o;for(w=E.length-8;w<E.length;++w)E[w]=x&255,x/=256;for(this.u(E),E=Array(16),w=x=0;4>w;++w)for(var I=0;32>I;I+=8)E[x++]=this.g[w]>>>I&255;return E};function r(E,w){var x=a;return Object.prototype.hasOwnProperty.call(x,E)?x[E]:x[E]=w(E)}function o(E,w){this.h=w;for(var x=[],I=!0,S=E.length-1;0<=S;S--){var k=E[S]|0;I&&k==w||(x[S]=k,I=!1)}this.g=x}var a={};function l(E){return-128<=E&&128>E?r(E,function(w){return new o([w|0],0>w?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return d;if(0>E)return b(u(-E));for(var w=[],x=1,I=0;E>=x;I++)w[I]=E/x|0,x*=4294967296;return new o(w,0)}function h(E,w){if(E.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(E.charAt(0)=="-")return b(h(E.substring(1),w));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=u(Math.pow(w,8)),I=d,S=0;S<E.length;S+=8){var k=Math.min(8,E.length-S),T=parseInt(E.substring(S,S+k),w);8>k?(k=u(Math.pow(w,k)),I=I.j(k).add(u(T))):(I=I.j(x),I=I.add(u(T)))}return I}var d=l(0),p=l(1),m=l(16777216);n=o.prototype,n.m=function(){if(y(this))return-b(this).m();for(var E=0,w=1,x=0;x<this.g.length;x++){var I=this.i(x);E+=(0<=I?I:4294967296+I)*w,w*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(_(this))return"0";if(y(this))return"-"+b(this).toString(E);for(var w=u(Math.pow(E,6)),x=this,I="";;){var S=D(x,w).g;x=A(x,S.j(w));var k=((0<x.g.length?x.g[0]:x.h)>>>0).toString(E);if(x=S,_(x))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function _(E){if(E.h!=0)return!1;for(var w=0;w<E.g.length;w++)if(E.g[w]!=0)return!1;return!0}function y(E){return E.h==-1}n.l=function(E){return E=A(this,E),y(E)?-1:_(E)?0:1};function b(E){for(var w=E.g.length,x=[],I=0;I<w;I++)x[I]=~E.g[I];return new o(x,~E.h).add(p)}n.abs=function(){return y(this)?b(this):this},n.add=function(E){for(var w=Math.max(this.g.length,E.g.length),x=[],I=0,S=0;S<=w;S++){var k=I+(this.i(S)&65535)+(E.i(S)&65535),T=(k>>>16)+(this.i(S)>>>16)+(E.i(S)>>>16);I=T>>>16,k&=65535,T&=65535,x[S]=T<<16|k}return new o(x,x[x.length-1]&-2147483648?-1:0)};function A(E,w){return E.add(b(w))}n.j=function(E){if(_(this)||_(E))return d;if(y(this))return y(E)?b(this).j(b(E)):b(b(this).j(E));if(y(E))return b(this.j(b(E)));if(0>this.l(m)&&0>E.l(m))return u(this.m()*E.m());for(var w=this.g.length+E.g.length,x=[],I=0;I<2*w;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<E.g.length;S++){var k=this.i(I)>>>16,T=this.i(I)&65535,bt=E.i(S)>>>16,Z=E.i(S)&65535;x[2*I+2*S]+=T*Z,R(x,2*I+2*S),x[2*I+2*S+1]+=k*Z,R(x,2*I+2*S+1),x[2*I+2*S+1]+=T*bt,R(x,2*I+2*S+1),x[2*I+2*S+2]+=k*bt,R(x,2*I+2*S+2)}for(I=0;I<w;I++)x[I]=x[2*I+1]<<16|x[2*I];for(I=w;I<2*w;I++)x[I]=0;return new o(x,0)};function R(E,w){for(;(E[w]&65535)!=E[w];)E[w+1]+=E[w]>>>16,E[w]&=65535,w++}function C(E,w){this.g=E,this.h=w}function D(E,w){if(_(w))throw Error("division by zero");if(_(E))return new C(d,d);if(y(E))return w=D(b(E),w),new C(b(w.g),b(w.h));if(y(w))return w=D(E,b(w)),new C(b(w.g),w.h);if(30<E.g.length){if(y(E)||y(w))throw Error("slowDivide_ only works with positive integers.");for(var x=p,I=w;0>=I.l(E);)x=M(x),I=M(I);var S=L(x,1),k=L(I,1);for(I=L(I,2),x=L(x,2);!_(I);){var T=k.add(I);0>=T.l(E)&&(S=S.add(x),k=T),I=L(I,1),x=L(x,1)}return w=A(E,S.j(w)),new C(S,w)}for(S=d;0<=E.l(w);){for(x=Math.max(1,Math.floor(E.m()/w.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=u(x),T=k.j(w);y(T)||0<T.l(E);)x-=I,k=u(x),T=k.j(w);_(k)&&(k=p),S=S.add(k),E=A(E,T)}return new C(S,E)}n.A=function(E){return D(this,E).h},n.and=function(E){for(var w=Math.max(this.g.length,E.g.length),x=[],I=0;I<w;I++)x[I]=this.i(I)&E.i(I);return new o(x,this.h&E.h)},n.or=function(E){for(var w=Math.max(this.g.length,E.g.length),x=[],I=0;I<w;I++)x[I]=this.i(I)|E.i(I);return new o(x,this.h|E.h)},n.xor=function(E){for(var w=Math.max(this.g.length,E.g.length),x=[],I=0;I<w;I++)x[I]=this.i(I)^E.i(I);return new o(x,this.h^E.h)};function M(E){for(var w=E.g.length+1,x=[],I=0;I<w;I++)x[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(x,E.h)}function L(E,w){var x=w>>5;w%=32;for(var I=E.g.length-x,S=[],k=0;k<I;k++)S[k]=0<w?E.i(k+x)>>>w|E.i(k+x+1)<<32-w:E.i(k+x);return new o(S,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,pg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,rs=o}).apply(typeof fd<"u"?fd:typeof self<"u"?self:typeof window<"u"?window:{});var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gg,Di,mg,To,sc,_g,yg,vg;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,g){return c==Array.prototype||c==Object.prototype||(c[f]=g.value),c};function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jr=="object"&&Jr];for(var f=0;f<c.length;++f){var g=c[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=e(this);function i(c,f){if(f)t:{var g=s;c=c.split(".");for(var v=0;v<c.length-1;v++){var P=c[v];if(!(P in g))break t;g=g[P]}c=c[c.length-1],v=g[c],f=f(v),f!=v&&f!=null&&t(g,c,{configurable:!0,writable:!0,value:f})}}function r(c,f){c instanceof String&&(c+="");var g=0,v=!1,P={next:function(){if(!v&&g<c.length){var O=g++;return{value:f(O,c[O]),done:!1}}return v=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(c){return c||function(){return r(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,g){return c.call.apply(c.bind,arguments)}function d(c,f,g){if(!c)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,v),c.apply(f,P)}}return function(){return c.apply(f,arguments)}}function p(c,f,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function m(c,f){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function _(c,f){function g(){}g.prototype=f.prototype,c.aa=f.prototype,c.prototype=new g,c.prototype.constructor=c,c.Qb=function(v,P,O){for(var F=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)F[ct-2]=arguments[ct];return f.prototype[P].apply(v,F)}}function y(c){const f=c.length;if(0<f){const g=Array(f);for(let v=0;v<f;v++)g[v]=c[v];return g}return[]}function b(c,f){for(let g=1;g<arguments.length;g++){const v=arguments[g];if(l(v)){const P=c.length||0,O=v.length||0;c.length=P+O;for(let F=0;F<O;F++)c[P+F]=v[F]}else c.push(v)}}class A{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function R(c){return/^[\s\xa0]*$/.test(c)}function C(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function D(c){return D[" "](c),c}D[" "]=function(){};var M=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function L(c,f,g){for(const v in c)f.call(g,c[v],v,c)}function E(c,f){for(const g in c)f.call(void 0,c[g],g,c)}function w(c){const f={};for(const g in c)f[g]=c[g];return f}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,f){let g,v;for(let P=1;P<arguments.length;P++){v=arguments[P];for(g in v)c[g]=v[g];for(let O=0;O<x.length;O++)g=x[O],Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}}function S(c){var f=1;c=c.split(":");const g=[];for(;0<f&&c.length;)g.push(c.shift()),f--;return c.length&&g.push(c.join(":")),g}function k(c){a.setTimeout(()=>{throw c},0)}function T(){var c=Pt;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class bt{constructor(){this.h=this.g=null}add(f,g){const v=Z.get();v.set(f,g),this.h?this.h.next=v:this.g=v,this.h=v}}var Z=new A(()=>new ut,c=>c.reset());class ut{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let lt,$t=!1,Pt=new bt,We=()=>{const c=a.Promise.resolve(void 0);lt=()=>{c.then(Es)}};var Es=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(g){k(g)}var f=Z;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}$t=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Et(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var qe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch{}return c}();function Te(c,f){if(Et.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var g=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(M){t:{try{D(f.nodeName);var P=!0;break t}catch{}P=!1}P||(f=null)}}else g=="mouseover"?f=c.fromElement:g=="mouseout"&&(f=c.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ge[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Te.aa.h.call(this)}}_(Te,Et);var Ge={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Or="closure_listenable_"+(1e6*Math.random()|0),Ny=0;function Vy(c,f,g,v,P){this.listener=c,this.proxy=null,this.src=f,this.type=g,this.capture=!!v,this.ha=P,this.key=++Ny,this.da=this.fa=!1}function Mr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Lr(c){this.src=c,this.g={},this.h=0}Lr.prototype.add=function(c,f,g,v,P){var O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);var F=Ya(c,f,v,P);return-1<F?(f=c[F],g||(f.fa=!1)):(f=new Vy(f,this.src,O,!!v,P),f.fa=g,c.push(f)),f};function Ka(c,f){var g=f.type;if(g in c.g){var v=c.g[g],P=Array.prototype.indexOf.call(v,f,void 0),O;(O=0<=P)&&Array.prototype.splice.call(v,P,1),O&&(Mr(f),c.g[g].length==0&&(delete c.g[g],c.h--))}}function Ya(c,f,g,v){for(var P=0;P<c.length;++P){var O=c[P];if(!O.da&&O.listener==f&&O.capture==!!g&&O.ha==v)return P}return-1}var Xa="closure_lm_"+(1e6*Math.random()|0),Qa={};function ih(c,f,g,v,P){if(Array.isArray(f)){for(var O=0;O<f.length;O++)ih(c,f[O],g,v,P);return null}return g=ah(g),c&&c[Or]?c.K(f,g,u(v)?!!v.capture:!1,P):Fy(c,f,g,!1,v,P)}function Fy(c,f,g,v,P,O){if(!f)throw Error("Invalid event type");var F=u(P)?!!P.capture:!!P,ct=Za(c);if(ct||(c[Xa]=ct=new Lr(c)),g=ct.add(f,g,v,F,O),g.proxy)return g;if(v=By(),g.proxy=v,v.src=c,v.listener=g,c.addEventListener)qe||(P=F),P===void 0&&(P=!1),c.addEventListener(f.toString(),v,P);else if(c.attachEvent)c.attachEvent(oh(f.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function By(){function c(g){return f.call(c.src,c.listener,g)}const f=Uy;return c}function rh(c,f,g,v,P){if(Array.isArray(f))for(var O=0;O<f.length;O++)rh(c,f[O],g,v,P);else v=u(v)?!!v.capture:!!v,g=ah(g),c&&c[Or]?(c=c.i,f=String(f).toString(),f in c.g&&(O=c.g[f],g=Ya(O,g,v,P),-1<g&&(Mr(O[g]),Array.prototype.splice.call(O,g,1),O.length==0&&(delete c.g[f],c.h--)))):c&&(c=Za(c))&&(f=c.g[f.toString()],c=-1,f&&(c=Ya(f,g,v,P)),(g=-1<c?f[c]:null)&&Ja(g))}function Ja(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[Or])Ka(f.i,c);else{var g=c.type,v=c.proxy;f.removeEventListener?f.removeEventListener(g,v,c.capture):f.detachEvent?f.detachEvent(oh(g),v):f.addListener&&f.removeListener&&f.removeListener(v),(g=Za(f))?(Ka(g,c),g.h==0&&(g.src=null,f[Xa]=null)):Mr(c)}}}function oh(c){return c in Qa?Qa[c]:Qa[c]="on"+c}function Uy(c,f){if(c.da)c=!0;else{f=new Te(f,this);var g=c.listener,v=c.ha||c.src;c.fa&&Ja(c),c=g.call(v,f)}return c}function Za(c){return c=c[Xa],c instanceof Lr?c:null}var tl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ah(c){return typeof c=="function"?c:(c[tl]||(c[tl]=function(f){return c.handleEvent(f)}),c[tl])}function Gt(){ie.call(this),this.i=new Lr(this),this.M=this,this.F=null}_(Gt,ie),Gt.prototype[Or]=!0,Gt.prototype.removeEventListener=function(c,f,g,v){rh(this,c,f,g,v)};function re(c,f){var g,v=c.F;if(v)for(g=[];v;v=v.F)g.push(v);if(c=c.M,v=f.type||f,typeof f=="string")f=new Et(f,c);else if(f instanceof Et)f.target=f.target||c;else{var P=f;f=new Et(v,c),I(f,P)}if(P=!0,g)for(var O=g.length-1;0<=O;O--){var F=f.g=g[O];P=Nr(F,v,!0,f)&&P}if(F=f.g=c,P=Nr(F,v,!0,f)&&P,P=Nr(F,v,!1,f)&&P,g)for(O=0;O<g.length;O++)F=f.g=g[O],P=Nr(F,v,!1,f)&&P}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var g=c.g[f],v=0;v<g.length;v++)Mr(g[v]);delete c.g[f],c.h--}}this.F=null},Gt.prototype.K=function(c,f,g,v){return this.i.add(String(c),f,!1,g,v)},Gt.prototype.L=function(c,f,g,v){return this.i.add(String(c),f,!0,g,v)};function Nr(c,f,g,v){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var P=!0,O=0;O<f.length;++O){var F=f[O];if(F&&!F.da&&F.capture==g){var ct=F.listener,zt=F.ha||F.src;F.fa&&Ka(c.i,F),P=ct.call(zt,v)!==!1&&P}}return P&&!v.defaultPrevented}function lh(c,f,g){if(typeof c=="function")g&&(c=p(c,g));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function ch(c){c.g=lh(()=>{c.g=null,c.i&&(c.i=!1,ch(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class $y extends ie{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ch(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(c){ie.call(this),this.h=c,this.g={}}_(li,ie);var uh=[];function hh(c){L(c.g,function(f,g){this.g.hasOwnProperty(g)&&Ja(f)},c),c.g={}}li.prototype.N=function(){li.aa.N.call(this),hh(this)},li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var el=a.JSON.stringify,zy=a.JSON.parse,jy=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function nl(){}nl.prototype.h=null;function dh(c){return c.h||(c.h=c.i())}function fh(){}var ci={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sl(){Et.call(this,"d")}_(sl,Et);function il(){Et.call(this,"c")}_(il,Et);var qn={},ph=null;function Vr(){return ph=ph||new Gt}qn.La="serverreachability";function gh(c){Et.call(this,qn.La,c)}_(gh,Et);function ui(c){const f=Vr();re(f,new gh(f))}qn.STAT_EVENT="statevent";function mh(c,f){Et.call(this,qn.STAT_EVENT,c),this.stat=f}_(mh,Et);function oe(c){const f=Vr();re(f,new mh(f,c))}qn.Ma="timingevent";function _h(c,f){Et.call(this,qn.Ma,c),this.size=f}_(_h,Et);function hi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function Hy(c,f,g,v,P,O){c.info(function(){if(c.g)if(O)for(var F="",ct=O.split("&"),zt=0;zt<ct.length;zt++){var et=ct[zt].split("=");if(1<et.length){var Kt=et[0];et=et[1];var Yt=Kt.split("_");F=2<=Yt.length&&Yt[1]=="type"?F+(Kt+"="+et+"&"):F+(Kt+"=redacted&")}}else F=null;else F=O;return"XMLHTTP REQ ("+v+") [attempt "+P+"]: "+f+`
`+g+`
`+F})}function Wy(c,f,g,v,P,O,F){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+P+"]: "+f+`
`+g+`
`+O+" "+F})}function Ts(c,f,g,v){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+Gy(c,g)+(v?" "+v:"")})}function qy(c,f){c.info(function(){return"TIMEOUT: "+f})}di.prototype.info=function(){};function Gy(c,f){if(!c.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(c=0;c<g.length;c++)if(Array.isArray(g[c])){var v=g[c];if(!(2>v.length)){var P=v[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var F=1;F<P.length;F++)P[F]=""}}}}return el(g)}catch{return f}}var Fr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rl;function Br(){}_(Br,nl),Br.prototype.g=function(){return new XMLHttpRequest},Br.prototype.i=function(){return{}},rl=new Br;function gn(c,f,g,v){this.j=c,this.i=f,this.l=g,this.R=v||1,this.U=new li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vh}function vh(){this.i=null,this.g="",this.h=!1}var bh={},ol={};function al(c,f,g){c.L=1,c.v=jr(Ke(f)),c.m=g,c.P=!0,wh(c,null)}function wh(c,f){c.F=Date.now(),Ur(c),c.A=Ke(c.v);var g=c.A,v=c.R;Array.isArray(v)||(v=[String(v)]),Lh(g.i,"t",v),c.C=0,g=c.j.J,c.h=new vh,c.g=Zh(c.j,g?f:null,!c.m),0<c.O&&(c.M=new $y(p(c.Y,c,c.g),c.O)),f=c.U,g=c.g,v=c.ca;var P="readystatechange";Array.isArray(P)||(P&&(uh[0]=P.toString()),P=uh);for(var O=0;O<P.length;O++){var F=ih(g,P[O],v||f.handleEvent,!1,f.h||f);if(!F)break;f.g[F.key]=F}f=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),ui(),Hy(c.i,c.u,c.A,c.l,c.R,c.m)}gn.prototype.ca=function(c){c=c.target;const f=this.M;f&&Ye(c)==3?f.j():this.Y(c)},gn.prototype.Y=function(c){try{if(c==this.g)t:{const Yt=Ye(this.g);var f=this.g.Ba();const Ss=this.g.Z();if(!(3>Yt)&&(Yt!=3||this.g&&(this.h.h||this.g.oa()||zh(this.g)))){this.J||Yt!=4||f==7||(f==8||0>=Ss?ui(3):ui(2)),ll(this);var g=this.g.Z();this.X=g;e:if(xh(this)){var v=zh(this.g);c="";var P=v.length,O=Ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),fi(this);var F="";break e}this.h.i=new a.TextDecoder}for(f=0;f<P;f++)this.h.h=!0,c+=this.h.i.decode(v[f],{stream:!(O&&f==P-1)});v.length=0,this.h.g+=c,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=g==200,Wy(this.i,this.u,this.A,this.l,this.R,Yt,g),this.o){if(this.T&&!this.K){e:{if(this.g){var ct,zt=this.g;if((ct=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(ct)){var et=ct;break e}}et=null}if(g=et)Ts(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cl(this,g);else{this.o=!1,this.s=3,oe(12),Gn(this),fi(this);break t}}if(this.P){g=!0;let Ie;for(;!this.J&&this.C<F.length;)if(Ie=Ky(this,F),Ie==ol){Yt==4&&(this.s=4,oe(14),g=!1),Ts(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==bh){this.s=4,oe(15),Ts(this.i,this.l,F,"[Invalid Chunk]"),g=!1;break}else Ts(this.i,this.l,Ie,null),cl(this,Ie);if(xh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Yt!=4||F.length!=0||this.h.h||(this.s=1,oe(16),g=!1),this.o=this.o&&g,!g)Ts(this.i,this.l,F,"[Invalid Chunked Response]"),Gn(this),fi(this);else if(0<F.length&&!this.W){this.W=!0;var Kt=this.j;Kt.g==this&&Kt.ba&&!Kt.M&&(Kt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),gl(Kt),Kt.M=!0,oe(11))}}else Ts(this.i,this.l,F,null),cl(this,F);Yt==4&&Gn(this),this.o&&!this.J&&(Yt==4?Yh(this.j,this):(this.o=!1,Ur(this)))}else hv(this.g),g==400&&0<F.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),Gn(this),fi(this)}}}catch{}finally{}};function xh(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ky(c,f){var g=c.C,v=f.indexOf(`
`,g);return v==-1?ol:(g=Number(f.substring(g,v)),isNaN(g)?bh:(v+=1,v+g>f.length?ol:(f=f.slice(v,v+g),c.C=v+g,f)))}gn.prototype.cancel=function(){this.J=!0,Gn(this)};function Ur(c){c.S=Date.now()+c.I,Eh(c,c.I)}function Eh(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=hi(p(c.ba,c),f)}function ll(c){c.B&&(a.clearTimeout(c.B),c.B=null)}gn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(qy(this.i,this.A),this.L!=2&&(ui(),oe(17)),Gn(this),this.s=2,fi(this)):Eh(this,this.S-c)};function fi(c){c.j.G==0||c.J||Yh(c.j,c)}function Gn(c){ll(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,hh(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function cl(c,f){try{var g=c.j;if(g.G!=0&&(g.g==c||ul(g.h,c))){if(!c.K&&ul(g.h,c)&&g.G==3){try{var v=g.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var P=v;if(P[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<c.F)Yr(g),Gr(g);else break t;pl(g),oe(18)}}else g.za=P[1],0<g.za-g.T&&37500>P[2]&&g.F&&g.v==0&&!g.C&&(g.C=hi(p(g.Za,g),6e3));if(1>=Ah(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Yn(g,11)}else if((c.K||g.g==c)&&Yr(g),!R(f))for(P=g.Da.g.parse(f),f=0;f<P.length;f++){let et=P[f];if(g.T=et[0],et=et[1],g.G==2)if(et[0]=="c"){g.K=et[1],g.ia=et[2];const Kt=et[3];Kt!=null&&(g.la=Kt,g.j.info("VER="+g.la));const Yt=et[4];Yt!=null&&(g.Aa=Yt,g.j.info("SVER="+g.Aa));const Ss=et[5];Ss!=null&&typeof Ss=="number"&&0<Ss&&(v=1.5*Ss,g.L=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const Ie=c.g;if(Ie){const Qr=Ie.g?Ie.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qr){var O=v.h;O.g||Qr.indexOf("spdy")==-1&&Qr.indexOf("quic")==-1&&Qr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(hl(O,O.h),O.h=null))}if(v.D){const ml=Ie.g?Ie.g.getResponseHeader("X-HTTP-Session-Id"):null;ml&&(v.ya=ml,ft(v.I,v.D,ml))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-c.F,g.j.info("Handshake RTT: "+g.R+"ms")),v=g;var F=c;if(v.qa=Jh(v,v.J?v.ia:null,v.W),F.K){Sh(v.h,F);var ct=F,zt=v.L;zt&&(ct.I=zt),ct.B&&(ll(ct),Ur(ct)),v.g=F}else Gh(v);0<g.i.length&&Kr(g)}else et[0]!="stop"&&et[0]!="close"||Yn(g,7);else g.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Yn(g,7):fl(g):et[0]!="noop"&&g.l&&g.l.ta(et),g.v=0)}}ui(4)}catch{}}var Yy=class{constructor(c,f){this.g=c,this.map=f}};function Th(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ih(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ah(c){return c.h?1:c.g?c.g.size:0}function ul(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function hl(c,f){c.g?c.g.add(f):c.h=f}function Sh(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Th.prototype.cancel=function(){if(this.i=Rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Rh(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const g of c.g.values())f=f.concat(g.D);return f}return y(c.i)}function Xy(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],g=c.length,v=0;v<g;v++)f.push(c[v]);return f}f=[],g=0;for(v in c)f[g++]=c[v];return f}function Qy(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var g=0;g<c;g++)f.push(g);return f}f=[],g=0;for(const v in c)f[g++]=v;return f}}}function kh(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var g=Qy(c),v=Xy(c),P=v.length,O=0;O<P;O++)f.call(void 0,v[O],g&&g[O],c)}var Ph=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jy(c,f){if(c){c=c.split("&");for(var g=0;g<c.length;g++){var v=c[g].indexOf("="),P=null;if(0<=v){var O=c[g].substring(0,v);P=c[g].substring(v+1)}else O=c[g];f(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Kn(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Kn){this.h=c.h,$r(this,c.j),this.o=c.o,this.g=c.g,zr(this,c.s),this.l=c.l;var f=c.i,g=new mi;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Ch(this,g),this.m=c.m}else c&&(f=String(c).match(Ph))?(this.h=!1,$r(this,f[1]||"",!0),this.o=pi(f[2]||""),this.g=pi(f[3]||"",!0),zr(this,f[4]),this.l=pi(f[5]||"",!0),Ch(this,f[6]||"",!0),this.m=pi(f[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}Kn.prototype.toString=function(){var c=[],f=this.j;f&&c.push(gi(f,Dh,!0),":");var g=this.g;return(g||f=="file")&&(c.push("//"),(f=this.o)&&c.push(gi(f,Dh,!0),"@"),c.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&c.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(gi(g,g.charAt(0)=="/"?ev:tv,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",gi(g,sv)),c.join("")};function Ke(c){return new Kn(c)}function $r(c,f,g){c.j=g?pi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function zr(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Ch(c,f,g){f instanceof mi?(c.i=f,iv(c.i,c.h)):(g||(f=gi(f,nv)),c.i=new mi(f,c.h))}function ft(c,f,g){c.i.set(f,g)}function jr(c){return ft(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function pi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function gi(c,f,g){return typeof c=="string"?(c=encodeURI(c).replace(f,Zy),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Zy(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Dh=/[#\/\?@]/g,tv=/[#\?:]/g,ev=/[#\?]/g,nv=/[#\?@]/g,sv=/#/g;function mi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function mn(c){c.g||(c.g=new Map,c.h=0,c.i&&Jy(c.i,function(f,g){c.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=mi.prototype,n.add=function(c,f){mn(this),this.i=null,c=Is(this,c);var g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(f),this.h+=1,this};function Oh(c,f){mn(c),f=Is(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Mh(c,f){return mn(c),f=Is(c,f),c.g.has(f)}n.forEach=function(c,f){mn(this),this.g.forEach(function(g,v){g.forEach(function(P){c.call(f,P,v,this)},this)},this)},n.na=function(){mn(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let v=0;v<f.length;v++){const P=c[v];for(let O=0;O<P.length;O++)g.push(f[v])}return g},n.V=function(c){mn(this);let f=[];if(typeof c=="string")Mh(this,c)&&(f=f.concat(this.g.get(Is(this,c))));else{c=Array.from(this.g.values());for(let g=0;g<c.length;g++)f=f.concat(c[g])}return f},n.set=function(c,f){return mn(this),this.i=null,c=Is(this,c),Mh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},n.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Lh(c,f,g){Oh(c,f),0<g.length&&(c.i=null,c.g.set(Is(c,f),y(g)),c.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var v=f[g];const O=encodeURIComponent(String(v)),F=this.V(v);for(v=0;v<F.length;v++){var P=O;F[v]!==""&&(P+="="+encodeURIComponent(String(F[v]))),c.push(P)}}return this.i=c.join("&")};function Is(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function iv(c,f){f&&!c.j&&(mn(c),c.i=null,c.g.forEach(function(g,v){var P=v.toLowerCase();v!=P&&(Oh(this,v),Lh(this,P,g))},c)),c.j=f}function rv(c,f){const g=new di;if(a.Image){const v=new Image;v.onload=m(_n,g,"TestLoadImage: loaded",!0,f,v),v.onerror=m(_n,g,"TestLoadImage: error",!1,f,v),v.onabort=m(_n,g,"TestLoadImage: abort",!1,f,v),v.ontimeout=m(_n,g,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else f(!1)}function ov(c,f){const g=new di,v=new AbortController,P=setTimeout(()=>{v.abort(),_n(g,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:v.signal}).then(O=>{clearTimeout(P),O.ok?_n(g,"TestPingServer: ok",!0,f):_n(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(P),_n(g,"TestPingServer: error",!1,f)})}function _n(c,f,g,v,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),v(g)}catch{}}function av(){this.g=new jy}function lv(c,f,g){const v=g||"";try{kh(c,function(P,O){let F=P;u(P)&&(F=el(P)),f.push(v+O+"="+encodeURIComponent(F))})}catch(P){throw f.push(v+"type="+encodeURIComponent("_badmap")),P}}function Hr(c){this.l=c.Ub||null,this.j=c.eb||!1}_(Hr,nl),Hr.prototype.g=function(){return new Wr(this.l,this.j)},Hr.prototype.i=function(c){return function(){return c}}({});function Wr(c,f){Gt.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Wr,Gt),n=Wr.prototype,n.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,yi(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nh(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nh(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?_i(this):yi(this),this.readyState==3&&Nh(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,_i(this))},n.Qa=function(c){this.g&&(this.response=c,_i(this))},n.ga=function(){this.g&&_i(this)};function _i(c){c.readyState=4,c.l=null,c.j=null,c.v=null,yi(c)}n.setRequestHeader=function(c,f){this.u.append(c,f)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=f.next();return c.join(`\r
`)};function yi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Vh(c){let f="";return L(c,function(g,v){f+=v,f+=":",f+=g,f+=`\r
`}),f}function dl(c,f,g){t:{for(v in g){var v=!1;break t}v=!0}v||(g=Vh(g),typeof c=="string"?g!=null&&encodeURIComponent(String(g)):ft(c,f,g))}function Tt(c){Gt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Tt,Gt);var cv=/^https?$/i,uv=["POST","PUT"];n=Tt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,f,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rl.g(),this.v=this.o?dh(this.o):dh(rl),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(O){Fh(this,O);return}if(c=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var P in v)g.set(P,v[P]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const O of v.keys())g.set(O,v.get(O));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(O=>O.toLowerCase()=="content-type"),P=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(uv,f,void 0))||v||P||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,F]of g)this.g.setRequestHeader(O,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$h(this),this.u=!0,this.g.send(c),this.u=!1}catch(O){Fh(this,O)}};function Fh(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Bh(c),qr(c)}function Bh(c){c.A||(c.A=!0,re(c,"complete"),re(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,re(this,"complete"),re(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),Tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Uh(this):this.bb())},n.bb=function(){Uh(this)};function Uh(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Ye(c)!=4||c.Z()!=2)){if(c.u&&Ye(c)==4)lh(c.Ea,0,c);else if(re(c,"readystatechange"),Ye(c)==4){c.h=!1;try{const F=c.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var g;if(!(g=f)){var v;if(v=F===0){var P=String(c.D).match(Ph)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),v=!cv.test(P?P.toLowerCase():"")}g=v}if(g)re(c,"complete"),re(c,"success");else{c.m=6;try{var O=2<Ye(c)?c.g.statusText:""}catch{O=""}c.l=O+" ["+c.Z()+"]",Bh(c)}}finally{qr(c)}}}}function qr(c,f){if(c.g){$h(c);const g=c.g,v=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||re(c,"ready");try{g.onreadystatechange=v}catch{}}}function $h(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Ye(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Ye(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),zy(f)}};function zh(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function hv(c){const f={};c=(c.g&&2<=Ye(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(R(c[v]))continue;var g=S(c[v]);const P=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const O=f[P]||[];f[P]=O,O.push(g)}E(f,function(v){return v.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(c,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||f}function jh(c){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,c),this.cb=vi("retryDelaySeedMs",1e4,c),this.Wa=vi("forwardChannelMaxRetries",2,c),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Th(c&&c.concurrentRequestLimit),this.Da=new av,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=jh.prototype,n.la=8,n.G=1,n.connect=function(c,f,g,v){oe(0),this.W=c,this.H=f||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.I=Jh(this,null,this.W),Kr(this)};function fl(c){if(Hh(c),c.G==3){var f=c.U++,g=Ke(c.I);if(ft(g,"SID",c.K),ft(g,"RID",f),ft(g,"TYPE","terminate"),bi(c,g),f=new gn(c,c.j,f),f.L=2,f.v=jr(Ke(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=Zh(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ur(f)}Qh(c)}function Gr(c){c.g&&(gl(c),c.g.cancel(),c.g=null)}function Hh(c){Gr(c),c.u&&(a.clearTimeout(c.u),c.u=null),Yr(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Kr(c){if(!Ih(c.h)&&!c.s){c.s=!0;var f=c.Ga;lt||We(),$t||(lt(),$t=!0),Pt.add(f,c),c.B=0}}function dv(c,f){return Ah(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=hi(p(c.Ga,c,f),Xh(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const P=new gn(this,this.j,c);let O=this.o;if(this.S&&(O?(O=w(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)t:{for(var f=0,g=0;g<this.i.length;g++){e:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break e}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=g;break t}if(f===4096||g===this.i.length-1){f=g+1;break t}}f=1e3}else f=1e3;f=qh(this,P,f),g=Ke(this.I),ft(g,"RID",c),ft(g,"CVER",22),this.D&&ft(g,"X-HTTP-Session-Id",this.D),bi(this,g),O&&(this.O?f="headers="+encodeURIComponent(String(Vh(O)))+"&"+f:this.m&&dl(g,this.m,O)),hl(this.h,P),this.Ua&&ft(g,"TYPE","init"),this.P?(ft(g,"$req",f),ft(g,"SID","null"),P.T=!0,al(P,g,null)):al(P,g,f),this.G=2}}else this.G==3&&(c?Wh(this,c):this.i.length==0||Ih(this.h)||Wh(this))};function Wh(c,f){var g;f?g=f.l:g=c.U++;const v=Ke(c.I);ft(v,"SID",c.K),ft(v,"RID",g),ft(v,"AID",c.T),bi(c,v),c.m&&c.o&&dl(v,c.m,c.o),g=new gn(c,c.j,g,c.B+1),c.m===null&&(g.H=c.o),f&&(c.i=f.D.concat(c.i)),f=qh(c,g,1e3),g.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),hl(c.h,g),al(g,v,f)}function bi(c,f){c.H&&L(c.H,function(g,v){ft(f,v,g)}),c.l&&kh({},function(g,v){ft(f,v,g)})}function qh(c,f,g){g=Math.min(c.i.length,g);var v=c.l?p(c.l.Na,c.l,c):null;t:{var P=c.i;let O=-1;for(;;){const F=["count="+g];O==-1?0<g?(O=P[0].g,F.push("ofs="+O)):O=0:F.push("ofs="+O);let ct=!0;for(let zt=0;zt<g;zt++){let et=P[zt].g;const Kt=P[zt].map;if(et-=O,0>et)O=Math.max(0,P[zt].g-100),ct=!1;else try{lv(Kt,F,"req"+et+"_")}catch{v&&v(Kt)}}if(ct){v=F.join("&");break t}}}return c=c.i.splice(0,g),f.D=c,v}function Gh(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;lt||We(),$t||(lt(),$t=!0),Pt.add(f,c),c.v=0}}function pl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=hi(p(c.Fa,c),Xh(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Kh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=hi(p(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),Gr(this),Kh(this))};function gl(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Kh(c){c.g=new gn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=Ke(c.qa);ft(f,"RID","rpc"),ft(f,"SID",c.K),ft(f,"AID",c.T),ft(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&ft(f,"TO",c.ja),ft(f,"TYPE","xmlhttp"),bi(c,f),c.m&&c.o&&dl(f,c.m,c.o),c.L&&(c.g.I=c.L);var g=c.g;c=c.ia,g.L=1,g.v=jr(Ke(f)),g.m=null,g.P=!0,wh(g,c)}n.Za=function(){this.C!=null&&(this.C=null,Gr(this),pl(this),oe(19))};function Yr(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Yh(c,f){var g=null;if(c.g==f){Yr(c),gl(c),c.g=null;var v=2}else if(ul(c.h,f))g=f.D,Sh(c.h,f),v=1;else return;if(c.G!=0){if(f.o)if(v==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var P=c.B;v=Vr(),re(v,new _h(v,g)),Kr(c)}else Gh(c);else if(P=f.s,P==3||P==0&&0<f.X||!(v==1&&dv(c,f)||v==2&&pl(c)))switch(g&&0<g.length&&(f=c.h,f.i=f.i.concat(g)),P){case 1:Yn(c,5);break;case 4:Yn(c,10);break;case 3:Yn(c,6);break;default:Yn(c,2)}}}function Xh(c,f){let g=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(g*=2),g*f}function Yn(c,f){if(c.j.info("Error code "+f),f==2){var g=p(c.fb,c),v=c.Xa;const P=!v;v=new Kn(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||$r(v,"https"),jr(v),P?rv(v.toString(),g):ov(v.toString(),g)}else oe(2);c.G=0,c.l&&c.l.sa(f),Qh(c),Hh(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function Qh(c){if(c.G=0,c.ka=[],c.l){const f=Rh(c.h);(f.length!=0||c.i.length!=0)&&(b(c.ka,f),b(c.ka,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.ra()}}function Jh(c,f,g){var v=g instanceof Kn?Ke(g):new Kn(g);if(v.g!="")f&&(v.g=f+"."+v.g),zr(v,v.s);else{var P=a.location;v=P.protocol,f=f?f+"."+P.hostname:P.hostname,P=+P.port;var O=new Kn(null);v&&$r(O,v),f&&(O.g=f),P&&zr(O,P),g&&(O.l=g),v=O}return g=c.D,f=c.ya,g&&f&&ft(v,g,f),ft(v,"VER",c.la),bi(c,v),v}function Zh(c,f,g){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Tt(new Hr({eb:g})):new Tt(c.pa),f.Ha(c.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function td(){}n=td.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xr(){}Xr.prototype.g=function(c,f){return new pe(c,f)};function pe(c,f){Gt.call(this),this.g=new jh(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!R(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!R(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new As(this)}_(pe,Gt),pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pe.prototype.close=function(){fl(this.g)},pe.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.u&&(g={},g.__data__=el(c),c=g);f.i.push(new Yy(f.Ya++,c)),f.G==3&&Kr(f)},pe.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,pe.aa.N.call(this)};function ed(c){sl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){t:{for(const g in f){c=g;break t}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}_(ed,sl);function nd(){il.call(this),this.status=1}_(nd,il);function As(c){this.g=c}_(As,td),As.prototype.ua=function(){re(this.g,"a")},As.prototype.ta=function(c){re(this.g,new ed(c))},As.prototype.sa=function(c){re(this.g,new nd)},As.prototype.ra=function(){re(this.g,"b")},Xr.prototype.createWebChannel=Xr.prototype.g,pe.prototype.send=pe.prototype.o,pe.prototype.open=pe.prototype.m,pe.prototype.close=pe.prototype.close,vg=function(){return new Xr},yg=function(){return Vr()},_g=qn,sc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fr.NO_ERROR=0,Fr.TIMEOUT=8,Fr.HTTP_ERROR=6,To=Fr,yh.COMPLETE="complete",mg=yh,fh.EventType=ci,ci.OPEN="a",ci.CLOSE="b",ci.ERROR="c",ci.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,Di=fh,Tt.prototype.listenOnce=Tt.prototype.L,Tt.prototype.getLastError=Tt.prototype.Ka,Tt.prototype.getLastErrorCode=Tt.prototype.Ba,Tt.prototype.getStatus=Tt.prototype.Z,Tt.prototype.getResponseJson=Tt.prototype.Oa,Tt.prototype.getResponseText=Tt.prototype.oa,Tt.prototype.send=Tt.prototype.ea,Tt.prototype.setWithCredentials=Tt.prototype.Ha,gg=Tt}).apply(typeof Jr<"u"?Jr:typeof self<"u"?self:typeof window<"u"?window:{});const pd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new zc("@firebase/firestore");function wi(){return us.logLevel}function z(n,...t){if(us.logLevel<=J.DEBUG){const e=t.map(Wc);us.debug(`Firestore (${ni}): ${n}`,...e)}}function hn(n,...t){if(us.logLevel<=J.ERROR){const e=t.map(Wc);us.error(`Firestore (${ni}): ${n}`,...e)}}function Hs(n,...t){if(us.logLevel<=J.WARN){const e=t.map(Wc);us.warn(`Firestore (${ni}): ${n}`,...e)}}function Wc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(n="Unexpected state"){const t=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+n;throw hn(t),new Error(t)}function ot(n,t){n||W()}function K(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends He{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Jt.UNAUTHENTICATED))}shutdown(){}}class Yb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Xb{constructor(t){this.t=t,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ot(this.o===void 0);let s=this.i;const i=l=>this.i!==s?(s=this.i,e(l)):Promise.resolve();let r=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ln,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ln)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ot(typeof s.accessToken=="string"),new bg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ot(t===null||typeof t=="string"),new Jt(t)}}class Qb{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Jb{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new Qb(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zb{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ot(this.o===void 0);const s=r=>{r.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ot(typeof e.token=="string"),this.R=e.token,new Zb(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=e0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function nt(n,t){return n<t?-1:n>t?1:0}function Ws(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return kt.fromMillis(Date.now())}static fromDate(t){return kt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new kt(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new kt(0,0))}static max(){return new q(new kt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,s){e===void 0?e=0:e>t.length&&W(),s===void 0?s=t.length-e:s>t.length-e&&W(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return tr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tr?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pt extends tr{construct(t,e,s){return new pt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new $(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new pt(e)}static emptyPath(){return new pt([])}}const n0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends tr{construct(t,e,s){return new Ht(t,e,s)}static isValidIdentifier(t){return n0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ht(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new $(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new $(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ht(e)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(pt.fromString(t))}static fromName(t){return new j(pt.fromString(t).popFirst(5))}static empty(){return new j(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return pt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new pt(t.slice()))}}function s0(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new kt(e+1,0):new kt(e,s));return new Vn(i,j.empty(),t)}function i0(n){return new Vn(n.readTime,n.key,-1)}class Vn{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new Vn(q.min(),j.empty(),-1)}static max(){return new Vn(q.max(),j.empty(),-1)}}function r0(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class a0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==o0)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,s)=>{e(t)})}static reject(t){return new V((e,s)=>{s(t)})}static waitFor(t){return new V((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},l=>s(l))}),o=!0,r===i&&e()})}static or(t){let e=V.resolve(!1);for(const s of t)e=e.next(i=>i?V.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new V((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;e(t[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,e){return new V((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}function l0(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function br(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class qc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}qc.oe=-1;function ya(n){return n==null}function qo(n){return n===0&&1/n==-1/0}function c0(n){return typeof n=="number"&&Number.isInteger(n)&&!qo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ys(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function xg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){this.comparator=t,this.root=e||jt.EMPTY}insert(t,e){return new wt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(t){return new wt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,jt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zr(this.root,t,this.comparator,!0)}}class Zr{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class jt{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??jt.RED,this.left=i??jt.EMPTY,this.right=r??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new jt(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return jt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const t=this.left.check();if(t!==this.right.check())throw W();return t+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,s,i,r){return this}insert(t,e,s){return new jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.comparator=t,this.data=new wt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(t){return new md(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof Wt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Wt(this.comparator);return e.data=t,e}}class md{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.fields=t,t.sort(Ht.comparator)}static empty(){return new ye([])}unionWith(t){let e=new Wt(Ht.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new ye(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ws(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Eg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Eg("Invalid base64 string: "+r):r}}(t);return new qt(e)}static fromUint8Array(t){const e=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(t);return new qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const u0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(n){if(ot(!!n),typeof n=="string"){let t=0;const e=u0.exec(n);if(ot(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:St(n.seconds),nanos:St(n.nanos)}}function St(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hs(n){return typeof n=="string"?qt.fromBase64String(n):qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Kc(n){const t=n.mapValue.fields.__previous_value__;return Gc(t)?Kc(t):t}function er(n){const t=Fn(n.mapValue.fields.__local_write_time__.timestampValue);return new kt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(t,e,s,i,r,o,a,l,u){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class nr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof nr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={mapValue:{}};function ds(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gc(n)?4:f0(n)?9007199254740991:d0(n)?10:11:W()}function je(n,t){if(n===t)return!0;const e=ds(n);if(e!==ds(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return er(n).isEqual(er(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Fn(i.timestampValue),a=Fn(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,r){return hs(i.bytesValue).isEqual(hs(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,r){return St(i.geoPointValue.latitude)===St(r.geoPointValue.latitude)&&St(i.geoPointValue.longitude)===St(r.geoPointValue.longitude)}(n,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return St(i.integerValue)===St(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=St(i.doubleValue),a=St(r.doubleValue);return o===a?qo(o)===qo(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Ws(n.arrayValue.values||[],t.arrayValue.values||[],je);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(gd(o)!==gd(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!je(o[l],a[l])))return!1;return!0}(n,t);default:return W()}}function sr(n,t){return(n.values||[]).find(e=>je(e,t))!==void 0}function qs(n,t){if(n===t)return 0;const e=ds(n),s=ds(t);if(e!==s)return nt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=St(r.integerValue||r.doubleValue),l=St(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return _d(n.timestampValue,t.timestampValue);case 4:return _d(er(n),er(t));case 5:return nt(n.stringValue,t.stringValue);case 6:return function(r,o){const a=hs(r),l=hs(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=nt(a[u],l[u]);if(h!==0)return h}return nt(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=nt(St(r.latitude),St(o.latitude));return a!==0?a:nt(St(r.longitude),St(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return yd(n.arrayValue,t.arrayValue);case 10:return function(r,o){var a,l,u,h;const d=r.fields||{},p=o.fields||{},m=(a=d.value)===null||a===void 0?void 0:a.arrayValue,_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,y=nt(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return y!==0?y:yd(m,_)}(n.mapValue,t.mapValue);case 11:return function(r,o){if(r===to.mapValue&&o===to.mapValue)return 0;if(r===to.mapValue)return 1;if(o===to.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=nt(l[d],h[d]);if(p!==0)return p;const m=qs(a[l[d]],u[h[d]]);if(m!==0)return m}return nt(l.length,h.length)}(n.mapValue,t.mapValue);default:throw W()}}function _d(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=Fn(n),s=Fn(t),i=nt(e.seconds,s.seconds);return i!==0?i:nt(e.nanos,s.nanos)}function yd(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=qs(e[i],s[i]);if(r)return r}return nt(e.length,s.length)}function Gs(n){return ic(n)}function ic(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=Fn(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return hs(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=ic(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ic(e.fields[o])}`;return i+"}"}(n.mapValue):W()}function vd(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function rc(n){return!!n&&"integerValue"in n}function Yc(n){return!!n&&"arrayValue"in n}function bd(n){return!!n&&"nullValue"in n}function wd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Io(n){return!!n&&"mapValue"in n}function d0(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function zi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ys(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=zi(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=zi(n.arrayValue.values[e]);return t}return Object.assign({},n)}function f0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.value=t}static empty(){return new de({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Io(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zi(e)}setAll(t){let e=Ht.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=zi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());Io(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];Io(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){ys(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new de(zi(this.value))}}function Tg(n){const t=[];return ys(n.fields,(e,s)=>{const i=new Ht([e]);if(Io(s)){const r=Tg(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new ye(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new te(t,0,q.min(),q.min(),q.min(),de.empty(),0)}static newFoundDocument(t,e,s,i){return new te(t,1,e,q.min(),s,i,0)}static newNoDocument(t,e){return new te(t,2,e,q.min(),q.min(),de.empty(),0)}static newUnknownDocument(t,e){return new te(t,3,e,q.min(),q.min(),de.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=de.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=de.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof te&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Go{constructor(t,e){this.position=t,this.inclusive=e}}function xd(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),e.key):s=qs(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ed(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!je(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ir{constructor(t,e="asc"){this.field=t,this.dir=e}}function p0(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ig{}class Lt extends Ig{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new m0(t,e,s):e==="array-contains"?new v0(t,s):e==="in"?new b0(t,s):e==="not-in"?new w0(t,s):e==="array-contains-any"?new x0(t,s):new Lt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new _0(t,s):new y0(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(qs(e,this.value)):e!==null&&ds(this.value)===ds(e)&&this.matchesComparison(qs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Re extends Ig{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Re(t,e)}matches(t){return Ag(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ag(n){return n.op==="and"}function Sg(n){return g0(n)&&Ag(n)}function g0(n){for(const t of n.filters)if(t instanceof Re)return!1;return!0}function oc(n){if(n instanceof Lt)return n.field.canonicalString()+n.op.toString()+Gs(n.value);if(Sg(n))return n.filters.map(t=>oc(t)).join(",");{const t=n.filters.map(e=>oc(e)).join(",");return`${n.op}(${t})`}}function Rg(n,t){return n instanceof Lt?function(s,i){return i instanceof Lt&&s.op===i.op&&s.field.isEqual(i.field)&&je(s.value,i.value)}(n,t):n instanceof Re?function(s,i){return i instanceof Re&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Rg(o,i.filters[a]),!0):!1}(n,t):void W()}function kg(n){return n instanceof Lt?function(e){return`${e.field.canonicalString()} ${e.op} ${Gs(e.value)}`}(n):n instanceof Re?function(e){return e.op.toString()+" {"+e.getFilters().map(kg).join(" ,")+"}"}(n):"Filter"}class m0 extends Lt{constructor(t,e,s){super(t,e,s),this.key=j.fromName(s.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class _0 extends Lt{constructor(t,e){super(t,"in",e),this.keys=Pg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class y0 extends Lt{constructor(t,e){super(t,"not-in",e),this.keys=Pg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Pg(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>j.fromName(s.referenceValue))}class v0 extends Lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yc(e)&&sr(e.arrayValue,this.value)}}class b0 extends Lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&sr(this.value.arrayValue,e)}}class w0 extends Lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!sr(this.value.arrayValue,e)}}class x0 extends Lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yc(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>sr(this.value.arrayValue,s))}}/**
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
 */class E0{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function Td(n,t=null,e=[],s=[],i=null,r=null,o=null){return new E0(n,t,e,s,i,r,o)}function Xc(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>oc(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ya(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Gs(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Gs(s)).join(",")),t.ue=e}return t.ue}function Qc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!p0(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Rg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ed(n.startAt,t.startAt)&&Ed(n.endAt,t.endAt)}function ac(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function T0(n,t,e,s,i,r,o,a){return new si(n,t,e,s,i,r,o,a)}function Jc(n){return new si(n)}function Id(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Cg(n){return n.collectionGroup!==null}function ji(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Wt(Ht.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new ir(r,s))}),e.has(Ht.keyField().canonicalString())||t.ce.push(new ir(Ht.keyField(),s))}return t.ce}function Fe(n){const t=K(n);return t.le||(t.le=I0(t,ji(n))),t.le}function I0(n,t){if(n.limitType==="F")return Td(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new ir(i.field,r)});const e=n.endAt?new Go(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Go(n.startAt.position,n.startAt.inclusive):null;return Td(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function lc(n,t){const e=n.filters.concat([t]);return new si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ko(n,t,e){return new si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function va(n,t){return Qc(Fe(n),Fe(t))&&n.limitType===t.limitType}function Dg(n){return`${Xc(Fe(n))}|lt:${n.limitType}`}function Os(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>kg(i)).join(", ")}]`),ya(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>Gs(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>Gs(i)).join(",")),`Target(${s})`}(Fe(n))}; limitType=${n.limitType})`}function ba(n,t){return t.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):j.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,t)&&function(s,i){for(const r of ji(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(o,a,l){const u=xd(o,a,l);return o.inclusive?u<=0:u<0}(s.startAt,ji(s),i)||s.endAt&&!function(o,a,l){const u=xd(o,a,l);return o.inclusive?u>=0:u>0}(s.endAt,ji(s),i))}(n,t)}function A0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Og(n){return(t,e)=>{let s=!1;for(const i of ji(n)){const r=S0(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function S0(n,t,e){const s=n.field.isKeyField()?j.comparator(t.key,e.key):function(r,o,a){const l=o.data.field(r),u=a.data.field(r);return l!==null&&u!==null?qs(l,u):W()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ys(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return xg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new wt(j.comparator);function dn(){return R0}const Mg=new wt(j.comparator);function Oi(...n){let t=Mg;for(const e of n)t=t.insert(e.key,e);return t}function Lg(n){let t=Mg;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function ss(){return Hi()}function Ng(){return Hi()}function Hi(){return new ii(n=>n.toString(),(n,t)=>n.isEqual(t))}const k0=new wt(j.comparator),P0=new Wt(j.comparator);function X(...n){let t=P0;for(const e of n)t=t.add(e);return t}const C0=new Wt(nt);function D0(){return C0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qo(t)?"-0":t}}function Vg(n){return{integerValue:""+n}}function O0(n,t){return c0(t)?Vg(t):Zc(n,t)}/**
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
 */class wa{constructor(){this._=void 0}}function M0(n,t,e){return n instanceof Yo?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Gc(r)&&(r=Kc(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof rr?Bg(n,t):n instanceof or?Ug(n,t):function(i,r){const o=Fg(i,r),a=Ad(o)+Ad(i.Pe);return rc(o)&&rc(i.Pe)?Vg(a):Zc(i.serializer,a)}(n,t)}function L0(n,t,e){return n instanceof rr?Bg(n,t):n instanceof or?Ug(n,t):e}function Fg(n,t){return n instanceof Xo?function(s){return rc(s)||function(r){return!!r&&"doubleValue"in r}(s)}(t)?t:{integerValue:0}:null}class Yo extends wa{}class rr extends wa{constructor(t){super(),this.elements=t}}function Bg(n,t){const e=$g(t);for(const s of n.elements)e.some(i=>je(i,s))||e.push(s);return{arrayValue:{values:e}}}class or extends wa{constructor(t){super(),this.elements=t}}function Ug(n,t){let e=$g(t);for(const s of n.elements)e=e.filter(i=>!je(i,s));return{arrayValue:{values:e}}}class Xo extends wa{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ad(n){return St(n.integerValue||n.doubleValue)}function $g(n){return Yc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function N0(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof rr&&i instanceof rr||s instanceof or&&i instanceof or?Ws(s.elements,i.elements,je):s instanceof Xo&&i instanceof Xo?je(s.Pe,i.Pe):s instanceof Yo&&i instanceof Yo}(n.transform,t.transform)}class V0{constructor(t,e){this.version=t,this.transformResults=e}}class Ee{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ee}static exists(t){return new Ee(void 0,t)}static updateTime(t){return new Ee(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ao(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class xa{}function zg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new tu(n.key,Ee.none()):new wr(n.key,n.data,Ee.none());{const e=n.data,s=de.empty();let i=new Wt(Ht.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new zn(n.key,s,new ye(i.toArray()),Ee.none())}}function F0(n,t,e){n instanceof wr?function(i,r,o){const a=i.value.clone(),l=Rd(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof zn?function(i,r,o){if(!Ao(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Rd(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(jg(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Wi(n,t,e,s){return n instanceof wr?function(r,o,a,l){if(!Ao(r.precondition,o))return a;const u=r.value.clone(),h=kd(r.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,s):n instanceof zn?function(r,o,a,l){if(!Ao(r.precondition,o))return a;const u=kd(r.fieldTransforms,l,o),h=o.data;return h.setAll(jg(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(d=>d.field))}(n,t,e,s):function(r,o,a){return Ao(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function B0(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=Fg(s.transform,i||null);r!=null&&(e===null&&(e=de.empty()),e.set(s.field,r))}return e||null}function Sd(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ws(s,i,(r,o)=>N0(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wr extends xa{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zn extends xa{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function jg(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Rd(n,t,e){const s=new Map;ot(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,L0(o,a,e[i]))}return s}function kd(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,M0(r,o,t))}return s}class tu extends xa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class U0 extends xa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&F0(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Wi(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Wi(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=Ng();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const l=zg(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&Ws(this.mutations,t.mutations,(e,s)=>Sd(e,s))&&Ws(this.baseMutations,t.baseMutations,(e,s)=>Sd(e,s))}}class eu{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){ot(t.mutations.length===s.length);let i=function(){return k0}();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new eu(t,e,s,i)}}/**
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
 */class z0{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class j0{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,tt;function H0(n){switch(n){default:return W();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Hg(n){if(n===void 0)return hn("GRPC error has no .code"),N.UNKNOWN;switch(n){case Dt.OK:return N.OK;case Dt.CANCELLED:return N.CANCELLED;case Dt.UNKNOWN:return N.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return N.INTERNAL;case Dt.UNAVAILABLE:return N.UNAVAILABLE;case Dt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Dt.NOT_FOUND:return N.NOT_FOUND;case Dt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Dt.ABORTED:return N.ABORTED;case Dt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Dt.DATA_LOSS:return N.DATA_LOSS;default:return W()}}(tt=Dt||(Dt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function W0(){return new TextEncoder}/**
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
 */const q0=new rs([4294967295,4294967295],0);function Pd(n){const t=W0().encode(n),e=new pg;return e.update(t),new Uint8Array(e.digest())}function Cd(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new rs([e,s],0),new rs([i,r],0)]}class nu{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Mi(`Invalid padding: ${e}`);if(s<0)throw new Mi(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Mi(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Mi(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=rs.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(rs.fromNumber(s)));return i.compare(q0)===1&&(i=new rs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Pd(t),[s,i]=Cd(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new nu(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Pd(t),[s,i]=Cd(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,xr.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Ea(q.min(),i,new wt(nt),dn(),X())}}class xr{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new xr(s,e,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class Wg{constructor(t,e){this.targetId=t,this.me=e}}class qg{constructor(t,e,s=qt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class Dd{constructor(){this.fe=0,this.ge=Md(),this.pe=qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=X(),e=X(),s=X();return this.ge.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:W()}}),new xr(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Md()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ot(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class G0{constructor(t){this.Le=t,this.Be=new Map,this.ke=dn(),this.qe=Od(),this.Qe=new wt(nt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:W()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const r=i.target;if(ac(r))if(s===0){const o=new j(r.path);this.Ue(e,o,te.newNoDocument(o,q.min()))}else ot(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),l=a?this.Xe(a,t,o):1;if(l!==0){this.je(e);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,u)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=hs(s).toUint8Array()}catch(l){if(l instanceof Eg)return Hs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new nu(o,i,r)}catch(l){return Hs(l instanceof Mi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,r,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&ac(a.target)){const l=new j(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,te.newNoDocument(l,t))}r.be&&(e.set(o,r.ve()),r.Ce())}});let s=X();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(t));const i=new Ea(t,e,this.Qe,this.ke,s);return this.ke=dn(),this.qe=Od(),this.Qe=new wt(nt),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Dd,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Wt(nt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Dd),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Od(){return new wt(j.comparator)}function Md(){return new wt(j.comparator)}const K0={asc:"ASCENDING",desc:"DESCENDING"},Y0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},X0={and:"AND",or:"OR"};class Q0{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function cc(n,t){return n.useProto3Json||ya(t)?t:{value:t}}function Qo(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function J0(n,t){return Qo(n,t.toTimestamp())}function Be(n){return ot(!!n),q.fromTimestamp(function(e){const s=Fn(e);return new kt(s.seconds,s.nanos)}(n))}function su(n,t){return uc(n,t).canonicalString()}function uc(n,t){const e=function(i){return new pt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Kg(n){const t=pt.fromString(n);return ot(Zg(t)),t}function hc(n,t){return su(n.databaseId,t.path)}function xl(n,t){const e=Kg(t);if(e.get(1)!==n.databaseId.projectId)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(Xg(e))}function Yg(n,t){return su(n.databaseId,t)}function Z0(n){const t=Kg(n);return t.length===4?pt.emptyPath():Xg(t)}function dc(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xg(n){return ot(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ld(n,t,e){return{name:hc(n,t),fields:e.value.mapValue.fields}}function tw(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:W()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(ot(h===void 0||typeof h=="string"),qt.fromBase64String(h||"")):(ot(h===void 0||h instanceof Buffer||h instanceof Uint8Array),qt.fromUint8Array(h||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?N.UNKNOWN:Hg(u.code);return new $(h,u.message||"")}(o);e=new qg(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=xl(n,s.document.name),r=Be(s.document.updateTime),o=s.document.createTime?Be(s.document.createTime):q.min(),a=new de({mapValue:{fields:s.document.fields}}),l=te.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];e=new So(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=xl(n,s.document),r=s.readTime?Be(s.readTime):q.min(),o=te.newNoDocument(i,r),a=s.removedTargetIds||[];e=new So([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=xl(n,s.document),r=s.removedTargetIds||[];e=new So([],r,i,null)}else{if(!("filter"in t))return W();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new j0(i,r),a=s.targetId;e=new Wg(a,o)}}return e}function ew(n,t){let e;if(t instanceof wr)e={update:Ld(n,t.key,t.value)};else if(t instanceof tu)e={delete:hc(n,t.key)};else if(t instanceof zn)e={update:Ld(n,t.key,t.data),updateMask:uw(t.fieldMask)};else{if(!(t instanceof U0))return W();e={verify:hc(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof rr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof or)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:J0(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(n,t.precondition)),e}function nw(n,t){return n&&n.length>0?(ot(t!==void 0),n.map(e=>function(i,r){let o=i.updateTime?Be(i.updateTime):Be(r);return o.isEqual(q.min())&&(o=Be(r)),new V0(o,i.transformResults||[])}(e,t))):[]}function sw(n,t){return{documents:[Yg(n,t.path)]}}function iw(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=Yg(n,i);const r=function(u){if(u.length!==0)return Jg(Re.create(u,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ms(p.field),direction:aw(p.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=cc(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:e,parent:i}}function rw(n){let t=Z0(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){ot(s===1);const h=e.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];e.where&&(r=function(d){const p=Qg(d);return p instanceof Re&&Sg(p)?p.getFilters():[p]}(e.where));let o=[];e.orderBy&&(o=function(d){return d.map(p=>function(_){return new ir(Ls(_.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(e.orderBy));let a=null;e.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,ya(p)?null:p}(e.limit));let l=null;e.startAt&&(l=function(d){const p=!!d.before,m=d.values||[];return new Go(m,p)}(e.startAt));let u=null;return e.endAt&&(u=function(d){const p=!d.before,m=d.values||[];return new Go(m,p)}(e.endAt)),T0(t,i,o,r,a,"F",l,u)}function ow(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Qg(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=Ls(e.unaryFilter.field);return Lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Ls(e.unaryFilter.field);return Lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ls(e.unaryFilter.field);return Lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ls(e.unaryFilter.field);return Lt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return Lt.create(Ls(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Re.create(e.compositeFilter.filters.map(s=>Qg(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function aw(n){return K0[n]}function lw(n){return Y0[n]}function cw(n){return X0[n]}function Ms(n){return{fieldPath:n.canonicalString()}}function Ls(n){return Ht.fromServerFormat(n.fieldPath)}function Jg(n){return n instanceof Lt?function(e){if(e.op==="=="){if(wd(e.value))return{unaryFilter:{field:Ms(e.field),op:"IS_NAN"}};if(bd(e.value))return{unaryFilter:{field:Ms(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(wd(e.value))return{unaryFilter:{field:Ms(e.field),op:"IS_NOT_NAN"}};if(bd(e.value))return{unaryFilter:{field:Ms(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(e.field),op:lw(e.op),value:e.value}}}(n):n instanceof Re?function(e){const s=e.getFilters().map(i=>Jg(i));return s.length===1?s[0]:{compositeFilter:{op:cw(e.op),filters:s}}}(n):W()}function uw(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e,s,i,r=q.min(),o=q.min(),a=qt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new In(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t){this.ct=t}}function dw(n){const t=rw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ko(t,t.limit,"L"):t}/**
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
 */class fw{constructor(){this.un=new pw}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Vn.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Vn.min())}updateCollectionGroup(t,e,s){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class pw{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new Wt(pt.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new Wt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ks(0)}static kn(){return new Ks(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.changes=new ii(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,te.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?V.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mw{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&Wi(s.mutation,i,ye.empty(),kt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,X()).next(()=>s))}getLocalViewOfDocuments(t,e,s=X()){const i=ss();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=Oi();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=ss();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,X()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=dn();const o=Hi(),a=function(){return Hi()}();return e.forEach((l,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof zn)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Wi(h.mutation,u,h.mutation.getFieldMask(),kt.now())):o.set(u.key,ye.empty())}),this.recalculateAndSaveOverlays(t,r).next(l=>(l.forEach((u,h)=>o.set(u,h)),e.forEach((u,h)=>{var d;return a.set(u,new mw(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Hi();let i=new wt((o,a)=>o-a),r=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=e.get(l);if(u===null)return;let h=s.get(l)||ye.empty();h=a.applyToLocalView(u,h),s.set(l,h);const d=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=Ng();h.forEach(p=>{if(!r.has(p)){const m=zg(e.get(p),s.get(p));m!==null&&d.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return V.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Cg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):V.resolve(ss());let a=-1,l=r;return o.next(u=>V.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?V.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,l,u,X())).next(h=>({batchId:a,changes:Lg(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(s=>{let i=Oi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(t,r).next(a=>V.forEach(a,l=>{const u=function(d,p){return new si(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(e,l.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i))).next(o=>{r.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,te.newInvalidDocument(h)))});let a=Oi();return o.forEach((l,u)=>{const h=r.get(l);h!==void 0&&Wi(h.mutation,u,ye.empty(),kt.now()),ba(e,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Be(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:dw(i.bundledQuery),readTime:Be(i.readTime)}}(e)),V.resolve()}}/**
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
 */class vw{constructor(){this.overlays=new wt(j.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const s=ss();return V.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.ht(t,e,r)}),V.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),V.resolve()}getOverlaysForCollection(t,e,s){const i=ss(),r=e.length+1,o=new j(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new wt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=ss(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ss(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return V.resolve(a)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new z0(e,s));let r=this.Ir.get(e);r===void 0&&(r=X(),this.Ir.set(e,r)),this.Ir.set(e,r.add(s.key))}}/**
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
 */class bw{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.Tr=new Wt(Ft.Er),this.dr=new Wt(Ft.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new Ft(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new Ft(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new j(new pt([])),s=new Ft(e,t),i=new Ft(e,t+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new pt([])),s=new Ft(e,t),i=new Ft(e,t+1);let r=X();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new Ft(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Ft{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||nt(t.wr,e.wr)}static Ar(t,e){return nt(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Wt(Ft.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $0(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ft(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),r=i<0?0:i;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Ft(e,0),i=new Ft(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new Wt(nt);return e.forEach(i=>{const r=new Ft(i,0),o=new Ft(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),V.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;j.isDocumentKey(r)||(r=r.child(""));const o=new Ft(new j(r),0);let a=new Wt(nt);return this.br.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){ot(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return V.forEach(e.mutations,i=>{const r=new Ft(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new Ft(e,0),i=this.br.firstAfterOrEqual(s);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(t){this.Mr=t,this.docs=function(){return new wt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return V.resolve(s?s.document.mutableCopy():te.newInvalidDocument(e))}getEntries(t,e){let s=dn();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():te.newInvalidDocument(i))}),V.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=dn();const o=e.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||r0(i0(h),s)<=0||(i.has(h.key)||ba(e,h))&&(r=r.insert(h.key,h.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(t,e,s,i){W()}Or(t,e){return V.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new Ew(this)}getSize(t){return V.resolve(this.size)}}class Ew extends gw{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(t){this.persistence=t,this.Nr=new ii(e=>Xc(e),Qc),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new iu,this.targetCount=0,this.kr=Ks.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Ks(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),V.waitFor(r).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return V.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),V.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),V.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return V.resolve(s)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(t,e){this.qr={},this.overlays={},this.Qr=new qc(0),this.Kr=!1,this.Kr=!0,this.$r=new bw,this.referenceDelegate=t(this),this.Ur=new Tw(this),this.indexManager=new fw,this.remoteDocumentCache=function(i){return new xw(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new hw(e),this.Gr=new yw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vw,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new ww(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){z("MemoryPersistence","Starting transaction:",t);const i=new Aw(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(t,e){return V.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class Aw extends a0{constructor(t){super(),this.currentSequenceNumber=t}}class ru{constructor(t){this.persistence=t,this.Jr=new iu,this.Yr=null}static Zr(t){return new ru(t)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),V.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,s=>{const i=j.fromPath(s);return this.ei(t,i).next(r=>{r||e.removeEntry(i,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=X(),i=X();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ou(t,e.fromCache,s,i)}}/**
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
 */class Sw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Rw{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kv()?8:l0(ne())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.Yi(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(t,e,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new Sw;return this.Xi(t,e,o).next(a=>{if(r.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>r.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(wi()<=J.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Os(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(wi()<=J.DEBUG&&z("QueryEngine","Query:",Os(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(wi()<=J.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Os(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Fe(e))):V.resolve())}Yi(t,e){if(Id(e))return V.resolve(null);let s=Fe(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ko(e,null,"F"),s=Fe(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=X(...r);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(l=>{const u=this.ts(e,a);return this.ns(e,u,o,l.readTime)?this.Yi(t,Ko(e,null,"F")):this.rs(t,u,e,l)}))})))}Zi(t,e,s,i){return Id(e)||i.isEqual(q.min())?V.resolve(null):this.Ji.getDocuments(t,s).next(r=>{const o=this.ts(e,r);return this.ns(e,o,s,i)?V.resolve(null):(wi()<=J.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Os(e)),this.rs(t,o,e,s0(i,-1)).next(a=>a))})}ts(t,e){let s=new Wt(Og(t));return e.forEach((i,r)=>{ba(t,r)&&(s=s.add(r))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,s){return wi()<=J.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Os(e)),this.Ji.getDocumentsMatchingQuery(t,e,Vn.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new wt(nt),this._s=new ii(r=>Xc(r),Qc),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _w(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Pw(n,t,e,s){return new kw(n,t,e,s)}async function tm(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=X();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return e.localDocuments.getDocuments(s,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Cw(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let m=V.resolve();return p.forEach(_=>{m=m.next(()=>h.getEntry(l,_)).next(y=>{const b=u.docVersions.get(_);ot(b!==null),y.version.compareTo(b)<0&&(d.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),h.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(e,s,t,r).next(()=>r.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=X();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function em(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Dw(n,t){const e=K(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const a=[];t.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(e.Ur.removeMatchingKeys(r,h.removedDocuments,d).next(()=>e.Ur.addMatchingKeys(r,h.addedDocuments,d)));let m=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(d)!==null?m=m.withResumeToken(qt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(d,m),function(y,b,A){return y.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(p,m,h)&&a.push(e.Ur.updateTargetData(r,m))});let l=dn(),u=X();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Ow(r,o,t.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!s.isEqual(q.min())){const h=e.Ur.getLastRemoteSnapshotVersion(r).next(d=>e.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return V.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(e.os=i,r))}function Ow(n,t,e){let s=X(),i=X();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=dn();return e.forEach((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function Mw(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Lw(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(r=>r?(i=r,V.resolve(i)):e.Ur.allocateTargetId(s).next(o=>(i=new In(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function fc(n,t,e){const s=K(n),i=s.os.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!br(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function Nd(n,t,e){const s=K(n);let i=q.min(),r=X();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=K(l),p=d._s.get(h);return p!==void 0?V.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(s,o,Fe(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?i:q.min(),e?r:X())).next(a=>(Nw(s,A0(t),a),{documents:a,Ts:r})))}function Nw(n,t,e){let s=n.us.get(t)||q.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.us.set(t,s)}class Vd{constructor(){this.activeTargetIds=D0()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vw{constructor(){this.so=new Vd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Vd,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Fw{_o(t){}shutdown(){}}/**
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
 */class Fd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eo=null;function El(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class $w extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(e,s,i,r,o){const a=El(),l=this.xo(e,s.toUriEncodedString());z("RestConnection",`Sending RPC '${e}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,r,o),this.No(e,l,u,i).then(h=>(z("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw Hs("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(e,s,i,r,o,a){return this.Mo(e,s,i,r,o)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ni}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}xo(e,s){const i=Bw[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const r=El();return new Promise((o,a)=>{const l=new gg;l.setWithCredentials(!0),l.listenOnce(mg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case To.NO_ERROR:const h=l.getResponseJson();z(Xt,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(h)),o(h);break;case To.TIMEOUT:z(Xt,`RPC '${t}' ${r} timed out`),a(new $(N.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const d=l.getStatus();if(z(Xt,`RPC '${t}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const _=function(b){const A=b.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(A)>=0?A:N.UNKNOWN}(m.status);a(new $(_,m.message))}else a(new $(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(N.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{z(Xt,`RPC '${t}' ${r} completed.`)}});const u=JSON.stringify(i);z(Xt,`RPC '${t}' ${r} sending request:`,i),l.send(e,"POST",u,s,15)})}Bo(t,e,s){const i=El(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=vg(),a=yg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,e,s),l.encodeInitMessageHeaders=!0;const h=r.join("");z(Xt,`Creating RPC '${t}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,m=!1;const _=new Uw({Io:b=>{m?z(Xt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(p||(z(Xt,`Opening RPC '${t}' stream ${i} transport.`),d.open(),p=!0),z(Xt,`RPC '${t}' stream ${i} sending:`,b),d.send(b))},To:()=>d.close()}),y=(b,A,R)=>{b.listen(A,C=>{try{R(C)}catch(D){setTimeout(()=>{throw D},0)}})};return y(d,Di.EventType.OPEN,()=>{m||(z(Xt,`RPC '${t}' stream ${i} transport opened.`),_.yo())}),y(d,Di.EventType.CLOSE,()=>{m||(m=!0,z(Xt,`RPC '${t}' stream ${i} transport closed`),_.So())}),y(d,Di.EventType.ERROR,b=>{m||(m=!0,Hs(Xt,`RPC '${t}' stream ${i} transport errored:`,b),_.So(new $(N.UNAVAILABLE,"The operation could not be completed")))}),y(d,Di.EventType.MESSAGE,b=>{var A;if(!m){const R=b.data[0];ot(!!R);const C=R,D=C.error||((A=C[0])===null||A===void 0?void 0:A.error);if(D){z(Xt,`RPC '${t}' stream ${i} received error:`,D);const M=D.status;let L=function(x){const I=Dt[x];if(I!==void 0)return Hg(I)}(M),E=D.message;L===void 0&&(L=N.INTERNAL,E="Unknown error status: "+M+" with message "+D.message),m=!0,_.So(new $(L,E)),d.close()}else z(Xt,`RPC '${t}' stream ${i} received:`,R),_.bo(R)}}),y(a,_g.STAT_EVENT,b=>{b.stat===sc.PROXY?z(Xt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===sc.NOPROXY&&z(Xt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function Tl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){return new Q0(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,e,s=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,e,s,i,r,o,a,l){this.ui=t,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new nm(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(hn(e.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new $(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zw extends sm{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=tw(this.serializer,t),s=function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Be(o.readTime):q.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=dc(this.serializer),e.addTarget=function(r,o){let a;const l=o.target;if(a=ac(l)?{documents:sw(r,l)}:{query:iw(r,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Gg(r,o.resumeToken);const u=cc(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=Qo(r,o.snapshotVersion.toTimestamp());const u=cc(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const s=ow(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=dc(this.serializer),e.removeTarget=t,this.a_(e)}}class jw extends sm{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return ot(!!t.streamToken),this.lastStreamToken=t.streamToken,ot(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){ot(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=nw(t.writeResults,t.commitTime),s=Be(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=dc(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>ew(this.serializer,s))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(t,uc(e,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(N.UNKNOWN,r.toString())})}Lo(t,e,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,uc(e,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(N.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ww{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(hn(e),this.D_=!1):z("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{vs(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=K(l);u.L_.add(4),await Er(u),u.q_.set("Unknown"),u.L_.delete(4),await Ia(u)}(this))})}),this.q_=new Ww(s,i)}}async function Ia(n){if(vs(n))for(const t of n.B_)await t(!0)}async function Er(n){for(const t of n.B_)await t(!1)}function im(n,t){const e=K(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),uu(e)?cu(e):ri(e).r_()&&lu(e,t))}function au(n,t){const e=K(n),s=ri(e);e.N_.delete(t),s.r_()&&rm(e,t),e.N_.size===0&&(s.r_()?s.o_():vs(e)&&e.q_.set("Unknown"))}function lu(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ri(n).A_(t)}function rm(n,t){n.Q_.xe(t),ri(n).R_(t)}function cu(n){n.Q_=new G0({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),ri(n).start(),n.q_.v_()}function uu(n){return vs(n)&&!ri(n).n_()&&n.N_.size>0}function vs(n){return K(n).L_.size===0}function om(n){n.Q_=void 0}async function Gw(n){n.q_.set("Online")}async function Kw(n){n.N_.forEach((t,e)=>{lu(n,t)})}async function Yw(n,t){om(n),uu(n)?(n.q_.M_(t),cu(n)):n.q_.set("Unknown")}async function Xw(n,t,e){if(n.q_.set("Online"),t instanceof qg&&t.state===2&&t.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,t)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Jo(n,s)}else if(t instanceof So?n.Q_.Ke(t):t instanceof Wg?n.Q_.He(t):n.Q_.We(t),!e.isEqual(q.min()))try{const s=await em(n.localStore);e.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=r.N_.get(u);h&&r.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=r.N_.get(l);if(!h)return;r.N_.set(l,h.withResumeToken(qt.EMPTY_BYTE_STRING,h.snapshotVersion)),rm(r,l);const d=new In(h.target,l,u,h.sequenceNumber);lu(r,d)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await Jo(n,s)}}async function Jo(n,t,e){if(!br(t))throw t;n.L_.add(1),await Er(n),n.q_.set("Offline"),e||(e=()=>em(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Ia(n)})}function am(n,t){return t().catch(e=>Jo(n,e,t))}async function Aa(n){const t=K(n),e=Bn(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Qw(t);)try{const i=await Mw(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,Jw(t,i)}catch(i){await Jo(t,i)}lm(t)&&cm(t)}function Qw(n){return vs(n)&&n.O_.length<10}function Jw(n,t){n.O_.push(t);const e=Bn(n);e.r_()&&e.V_&&e.m_(t.mutations)}function lm(n){return vs(n)&&!Bn(n).n_()&&n.O_.length>0}function cm(n){Bn(n).start()}async function Zw(n){Bn(n).p_()}async function tx(n){const t=Bn(n);for(const e of n.O_)t.m_(e.mutations)}async function ex(n,t,e){const s=n.O_.shift(),i=eu.from(s,t,e);await am(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Aa(n)}async function nx(n,t){t&&Bn(n).V_&&await async function(s,i){if(function(o){return H0(o)&&o!==N.ABORTED}(i.code)){const r=s.O_.shift();Bn(s).s_(),await am(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Aa(s)}}(n,t),lm(n)&&cm(n)}async function Bd(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=vs(e);e.L_.add(3),await Er(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Ia(e)}async function sx(n,t){const e=K(n);t?(e.L_.delete(2),await Ia(e)):t||(e.L_.add(2),await Er(e),e.q_.set("Unknown"))}function ri(n){return n.K_||(n.K_=function(e,s,i){const r=K(e);return r.w_(),new zw(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Gw.bind(null,n),Ro:Kw.bind(null,n),mo:Yw.bind(null,n),d_:Xw.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),uu(n)?cu(n):n.q_.set("Unknown")):(await n.K_.stop(),om(n))})),n.K_}function Bn(n){return n.U_||(n.U_=function(e,s,i){const r=K(e);return r.w_(),new jw(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zw.bind(null,n),mo:nx.bind(null,n),f_:tx.bind(null,n),g_:ex.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Aa(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new hu(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(n,t){if(hn("AsyncQueue",`${t}: ${n}`),br(n))return new $(N.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t){this.comparator=t?(e,s)=>t(e,s)||j.comparator(e.key,s.key):(e,s)=>j.comparator(e.key,s.key),this.keyedMap=Oi(),this.sortedSet=new wt(this.comparator)}static emptySet(t){return new Bs(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Bs)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new Bs;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.W_=new wt(j.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):W():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Ys{constructor(t,e,s,i,r,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Ys(t,e,Bs.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&va(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class rx{constructor(){this.queries=$d(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=K(e),r=i.queries;i.queries=$d(),r.forEach((o,a)=>{for(const l of a.j_)l.onError(s)})})(this,new $(N.ABORTED,"Firestore shutting down"))}}function $d(){return new ii(n=>Dg(n),va)}async function um(n,t){const e=K(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.H_()&&t.J_()&&(s=2):(r=new ix,s=t.J_()?0:1);try{switch(s){case 0:r.z_=await e.onListen(i,!0);break;case 1:r.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=du(o,`Initialization of query '${Os(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.j_.push(t),t.Z_(e.onlineState),r.z_&&t.X_(r.z_)&&fu(e)}async function hm(n,t){const e=K(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.j_.indexOf(t);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=t.J_()?0:1:!r.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function ox(n,t){const e=K(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&fu(e)}function ax(n,t,e){const s=K(n),i=s.queries.get(t);if(i)for(const r of i.j_)r.onError(e);s.queries.delete(t)}function fu(n){n.Y_.forEach(t=>{t.next()})}var pc,zd;(zd=pc||(pc={})).ea="default",zd.Cache="cache";class dm{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Ys(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ys.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==pc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t){this.key=t}}class pm{constructor(t){this.key=t}}class lx{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=Og(t),this.Ra=new Bs(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new Ud,i=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,d)=>{const p=i.get(h),m=ba(this.query,d)?d:null,_=!!p&&this.mutatedKeys.has(p.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;p&&m?p.data.isEqual(m.data)?_!==y&&(s.track({type:3,doc:m}),b=!0):this.ga(p,m)||(s.track({type:2,doc:m}),b=!0,(l&&this.Aa(m,l)>0||u&&this.Aa(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),b=!0):p&&!m&&(s.track({type:1,doc:p}),b=!0,(l||u)&&(a=!0)),b&&(m?(o=o.add(m),r=y?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((h,d)=>function(m,_){const y=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return y(m)-y(_)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(s),i=i!=null&&i;const a=e&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Ys(this.query,t.Ra,r,o,t.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ud,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=X(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new pm(s))}),this.da.forEach(s=>{t.has(s)||e.push(new fm(s))}),e}ba(t){this.Ta=t.Ts,this.da=X();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ys.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class cx{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class ux{constructor(t){this.key=t,this.va=!1}}class hx{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ii(a=>Dg(a),va),this.Ma=new Map,this.xa=new Set,this.Oa=new wt(j.comparator),this.Na=new Map,this.La=new iu,this.Ba={},this.ka=new Map,this.qa=Ks.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dx(n,t,e=!0){const s=bm(n);let i;const r=s.Fa.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await gm(s,t,e,!0),i}async function fx(n,t){const e=bm(n);await gm(e,t,!0,!1)}async function gm(n,t,e,s){const i=await Lw(n.localStore,Fe(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await px(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&im(n.remoteStore,i),a}async function px(n,t,e,s,i){n.Ka=(d,p,m)=>async function(y,b,A,R){let C=b.view.ma(A);C.ns&&(C=await Nd(y.localStore,b.query,!1).then(({documents:E})=>b.view.ma(E,C)));const D=R&&R.targetChanges.get(b.targetId),M=R&&R.targetMismatches.get(b.targetId)!=null,L=b.view.applyChanges(C,y.isPrimaryClient,D,M);return Hd(y,b.targetId,L.wa),L.snapshot}(n,d,p,m);const r=await Nd(n.localStore,t,!0),o=new lx(t,r.Ts),a=o.ma(r.documents),l=xr.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);Hd(n,e,u.wa);const h=new cx(t,e,o);return n.Fa.set(t,h),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),u.snapshot}async function gx(n,t,e){const s=K(n),i=s.Fa.get(t),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!va(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await fc(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&au(s.remoteStore,i.targetId),gc(s,i.targetId)}).catch(vr)):(gc(s,i.targetId),await fc(s.localStore,i.targetId,!0))}async function mx(n,t){const e=K(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),au(e.remoteStore,s.targetId))}async function _x(n,t,e){const s=Tx(n);try{const i=await function(o,a){const l=K(o),u=kt.now(),h=a.reduce((m,_)=>m.add(_.key),X());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=dn(),y=X();return l.cs.getEntries(m,h).next(b=>{_=b,_.forEach((A,R)=>{R.isValidDocument()||(y=y.add(A))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(b=>{d=b;const A=[];for(const R of a){const C=B0(R,d.get(R.key).overlayedDocument);C!=null&&A.push(new zn(R.key,C,Tg(C.value.mapValue),Ee.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,A,a)}).next(b=>{p=b;const A=b.applyToLocalDocumentSet(d,y);return l.documentOverlayCache.saveOverlays(m,b.batchId,A)})}).then(()=>({batchId:p.batchId,changes:Lg(d)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new wt(nt)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(s,i.batchId,e),await Tr(s,i.changes),await Aa(s.remoteStore)}catch(i){const r=du(i,"Failed to persist write");e.reject(r)}}async function mm(n,t){const e=K(n);try{const s=await Dw(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.Na.get(r);o&&(ot(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ot(o.va):i.removedDocuments.size>0&&(ot(o.va),o.va=!1))}),await Tr(e,s,t)}catch(s){await vr(s)}}function jd(n,t,e){const s=K(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&fu(l)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function yx(n,t,e){const s=K(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),r=i&&i.key;if(r){let o=new wt(j.comparator);o=o.insert(r,te.newNoDocument(r,q.min()));const a=X().add(r),l=new Ea(q.min(),new Map,new wt(nt),o,a);await mm(s,l),s.Oa=s.Oa.remove(r),s.Na.delete(t),pu(s)}else await fc(s.localStore,t,!1).then(()=>gc(s,t,e)).catch(vr)}async function vx(n,t){const e=K(n),s=t.batch.batchId;try{const i=await Cw(e.localStore,t);ym(e,s,null),_m(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Tr(e,i)}catch(i){await vr(i)}}async function bx(n,t,e){const s=K(n);try{const i=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(ot(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(s.localStore,t);ym(s,t,e),_m(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Tr(s,i)}catch(i){await vr(i)}}function _m(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function ym(n,t,e){const s=K(n);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function gc(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||vm(n,s)})}function vm(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(au(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),pu(n))}function Hd(n,t,e){for(const s of e)s instanceof fm?(n.La.addReference(s.key,t),wx(n,s)):s instanceof pm?(z("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||vm(n,s.key)):W()}function wx(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(z("SyncEngine","New document in limbo: "+e),n.xa.add(s),pu(n))}function pu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(pt.fromString(t)),s=n.qa.next();n.Na.set(s,new ux(e)),n.Oa=n.Oa.insert(e,s),im(n.remoteStore,new In(Fe(Jc(e.path)),s,"TargetPurposeLimboResolution",qc.oe))}}async function Tr(n,t,e){const s=K(n),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,l)=>{o.push(s.Ka(l,t,e).then(u=>{var h;if((u||e)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=e==null?void 0:e.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){i.push(u);const d=ou.Wi(l.targetId,u);r.push(d)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(l,u){const h=K(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>V.forEach(u,p=>V.forEach(p.$i,m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>V.forEach(p.Ui,m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!br(d))throw d;z("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=h.os.get(p),_=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(_);h.os=h.os.insert(p,y)}}}(s.localStore,r))}async function xx(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const s=await tm(e.localStore,t);e.currentUser=t,function(r,o){r.ka.forEach(a=>{a.forEach(l=>{l.reject(new $(N.CANCELLED,o))})}),r.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Tr(e,s.hs)}}function Ex(n,t){const e=K(n),s=e.Na.get(t);if(s&&s.va)return X().add(s.key);{let i=X();const r=e.Ma.get(t);if(!r)return i;for(const o of r){const a=e.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function bm(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=mm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ex.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yx.bind(null,t),t.Ca.d_=ox.bind(null,t.eventManager),t.Ca.$a=ax.bind(null,t.eventManager),t}function Tx(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vx.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bx.bind(null,t),t}class Zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ta(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Pw(this.persistence,new Rw,t.initialUser,this.serializer)}Ga(t){return new Iw(ru.Zr,this.serializer)}Wa(t){return new Vw}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zo.provider={build:()=>new Zo};class mc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xx.bind(null,this.syncEngine),await sx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new rx}()}createDatastore(t){const e=Ta(t.databaseInfo.databaseId),s=function(r){return new $w(r)}(t.databaseInfo);return function(r,o,a,l){return new Hw(r,o,a,l)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,r,o,a){return new qw(s,i,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>jd(this.syncEngine,e,0),function(){return Fd.D()?new Fd:new Fw}())}createSyncEngine(t,e){return function(i,r,o,a,l,u,h){const d=new hx(i,r,o,a,l,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const r=K(i);z("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await Er(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}mc.provider={build:()=>new mc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):hn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=Jt.UNAUTHENTICATED,this.clientId=wg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=du(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Il(n,t){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await tm(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Wd(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ax(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>Bd(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Bd(t.remoteStore,i)),n._onlineComponents=t}async function Ax(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Il(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Hs("Error using user provided cache. Falling back to memory cache: "+e),await Il(n,new Zo)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Il(n,new Zo);return n._offlineComponents}async function xm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Wd(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Wd(n,new mc))),n._onlineComponents}function Sx(n){return xm(n).then(t=>t.syncEngine)}async function Em(n){const t=await xm(n),e=t.eventManager;return e.onListen=dx.bind(null,t.syncEngine),e.onUnlisten=gx.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=fx.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=mx.bind(null,t.syncEngine),e}function Rx(n,t,e={}){const s=new ln;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const h=new wm({next:p=>{h.Za(),o.enqueueAndForget(()=>hm(r,d));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new $(N.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new $(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new dm(Jc(a.path),h,{includeMetadataChanges:!0,_a:!0});return um(r,d)}(await Em(n),n.asyncQueue,t,e,s)),s.promise}function kx(n,t,e={}){const s=new ln;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const h=new wm({next:p=>{h.Za(),o.enqueueAndForget(()=>hm(r,d)),p.fromCache&&l.source==="server"?u.reject(new $(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new dm(a,h,{includeMetadataChanges:!0,_a:!0});return um(r,d)}(await Em(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function Tm(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,t,e){if(!e)throw new $(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Px(n,t,e,s){if(t===!0&&s===!0)throw new $(N.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Gd(n){if(!j.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Kd(n){if(j.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W()}function ke(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new $(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Sa(n);throw new $(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Cx(n,t){if(t<=0)throw new $(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new $(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new $(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Px("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tm((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ra{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new $(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Kb;switch(s.type){case"firstParty":return new Jb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new $(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=qd.get(e);s&&(z("ComponentProvider","Removing Datastore"),qd.delete(e),s.terminate())}(this),Promise.resolve()}}function Dx(n,t,e,s={}){var i;const r=(n=ke(n,Ra))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Jt.MOCK_USER;else{a=lg(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new $(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Jt(u)}n._authCredentials=new Yb(new bg(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new jn(this.firestore,t,this._query)}}class le{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new le(this.firestore,t,this._key)}}class On extends jn{constructor(t,e,s){super(t,e,Jc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new le(this.firestore,null,new j(t))}withConverter(t){return new On(this.firestore,t,this._path)}}function Bt(n,t,...e){if(n=At(n),Im("collection","path",t),n instanceof Ra){const s=pt.fromString(t,...e);return Kd(s),new On(n,null,s)}{if(!(n instanceof le||n instanceof On))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(t,...e));return Kd(s),new On(n.firestore,null,s)}}function Pe(n,t,...e){if(n=At(n),arguments.length===1&&(t=wg.newId()),Im("doc","path",t),n instanceof Ra){const s=pt.fromString(t,...e);return Gd(s),new le(n,null,new j(s))}{if(!(n instanceof le||n instanceof On))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(t,...e));return Gd(s),new le(n.firestore,n instanceof On?n.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new nm(this,"async_queue_retry"),this.Vu=()=>{const s=Tl();s&&z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=Tl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Tl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ln;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!br(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw hn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=hu.createAndSchedule(this,t,e,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class bs extends Ra{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new Xd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Xd(t),this._firestoreClient=void 0,await t}}}function Ox(n,t){const e=typeof n=="object"?n:Hc(),s=typeof n=="string"?n:"(default)",i=_a(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=rg("firestore");r&&Dx(i,...r)}return i}function gu(n){if(n._terminated)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Mx(n),n._firestoreClient}function Mx(n){var t,e,s;const i=n._freezeSettings(),r=function(a,l,u,h){return new h0(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Tm(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Ix(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xs(qt.fromBase64String(t))}catch(e){throw new $(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Xs(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new $(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new $(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new $(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
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
 */class yu{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=/^__.*__$/;class Nx{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new zn(t,this.data,this.fieldMask,e,this.fieldTransforms):new wr(t,this.data,e,this.fieldTransforms)}}class Am{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new zn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Sm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class vu{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new vu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ta(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Sm(this.Cu)&&Lx.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Vx{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||Ta(t)}Qu(t,e,s,i=!1){return new vu({Cu:t,methodName:e,qu:s,path:Ht.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pa(n){const t=n._freezeSettings(),e=Ta(n._databaseId);return new Vx(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Rm(n,t,e,s,i,r={}){const o=n.Qu(r.merge||r.mergeFields?2:0,t,e,i);bu("Data must be an object, but it was:",o,s);const a=km(s,o);let l,u;if(r.merge)l=new ye(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=_c(t,d,e);if(!o.contains(p))throw new $(N.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Cm(h,p)||h.push(p)}l=new ye(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new Nx(new de(a),l,u)}class Ca extends mu{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ca}}function Fx(n,t,e,s){const i=n.Qu(1,t,e);bu("Data must be an object, but it was:",i,s);const r=[],o=de.empty();ys(s,(l,u)=>{const h=wu(t,l,e);u=At(u);const d=i.Nu(h);if(u instanceof Ca)r.push(h);else{const p=Ir(u,d);p!=null&&(r.push(h),o.set(h,p))}});const a=new ye(r);return new Am(o,a,i.fieldTransforms)}function Bx(n,t,e,s,i,r){const o=n.Qu(1,t,e),a=[_c(t,s,e)],l=[i];if(r.length%2!=0)throw new $(N.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<r.length;p+=2)a.push(_c(t,r[p])),l.push(r[p+1]);const u=[],h=de.empty();for(let p=a.length-1;p>=0;--p)if(!Cm(u,a[p])){const m=a[p];let _=l[p];_=At(_);const y=o.Nu(m);if(_ instanceof Ca)u.push(m);else{const b=Ir(_,y);b!=null&&(u.push(m),h.set(m,b))}}const d=new ye(u);return new Am(h,d,o.fieldTransforms)}function Ux(n,t,e,s=!1){return Ir(e,n.Qu(s?4:3,t))}function Ir(n,t){if(Pm(n=At(n)))return bu("Unsupported field value:",t,n),km(n,t);if(n instanceof mu)return function(s,i){if(!Sm(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=Ir(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(n,t)}return function(s,i){if((s=At(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return O0(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=kt.fromDate(s);return{timestampValue:Qo(i.serializer,r)}}if(s instanceof kt){const r=new kt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Qo(i.serializer,r)}}if(s instanceof _u)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xs)return{bytesValue:Gg(i.serializer,s._byteString)};if(s instanceof le){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:su(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof yu)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Zc(a.serializer,l)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${Sa(s)}`)}(n,t)}function km(n,t){const e={};return xg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ys(n,(s,i)=>{const r=Ir(i,t.Mu(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function Pm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof kt||n instanceof _u||n instanceof Xs||n instanceof le||n instanceof mu||n instanceof yu)}function bu(n,t,e){if(!Pm(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=Sa(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function _c(n,t,e){if((t=At(t))instanceof ka)return t._internalPath;if(typeof t=="string")return wu(n,t);throw ta("Field path arguments must be of type string or ",n,!1,void 0,e)}const $x=new RegExp("[~\\*/\\[\\]]");function wu(n,t,e){if(t.search($x)>=0)throw ta(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ka(...t.split("."))._internalPath}catch{throw ta(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ta(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new $(N.INVALID_ARGUMENT,a+n+l)}function Cm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new zx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Da("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class zx extends Dm{data(){return super.data()}}function Da(n,t){return typeof t=="string"?wu(n,t):t instanceof ka?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xu{}class Eu extends xu{}function ue(n,t,...e){let s=[];t instanceof xu&&s.push(t),s=s.concat(e),function(r){const o=r.filter(l=>l instanceof Tu).length,a=r.filter(l=>l instanceof Oa).length;if(o>1||o>0&&a>0)throw new $(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Oa extends Eu{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Oa(t,e,s)}_apply(t){const e=this._parse(t);return Om(t._query,e),new jn(t.firestore,t.converter,lc(t._query,e))}_parse(t){const e=Pa(t.firestore);return function(r,o,a,l,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Jd(d,h);const m=[];for(const _ of d)m.push(Qd(l,r,_));p={arrayValue:{values:m}}}else p=Qd(l,r,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Jd(d,h),p=Ux(a,o,d,h==="in"||h==="not-in");return Lt.create(u,h,p)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Nt(n,t,e){const s=t,i=Da("where",n);return Oa._create(i,s,e)}class Tu extends xu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Tu(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:Re.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const l of a)Om(o,l),o=lc(o,l)}(t._query,e),new jn(t.firestore,t.converter,lc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Iu extends Eu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Iu(t,e)}_apply(t){const e=function(i,r,o){if(i.startAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ir(r,o)}(t._query,this._field,this._direction);return new jn(t.firestore,t.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new si(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function yc(n,t="asc"){const e=t,s=Da("orderBy",n);return Iu._create(s,e)}class Au extends Eu{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new Au(t,e,s)}_apply(t){return new jn(t.firestore,t.converter,Ko(t._query,this._limit,this._limitType))}}function Ro(n){return Cx("limit",n),Au._create("limit",n,"F")}function Qd(n,t,e){if(typeof(e=At(e))=="string"){if(e==="")throw new $(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cg(t)&&e.indexOf("/")!==-1)throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(pt.fromString(e));if(!j.isDocumentKey(s))throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return vd(n,new j(s))}if(e instanceof le)return vd(n,e._key);throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sa(e)}.`)}function Jd(n,t){if(!Array.isArray(n)||n.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Om(n,t){const e=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Hx{convertValue(t,e="none"){switch(ds(t)){case 0:return null;case 1:return t.booleanValue;case 2:return St(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(hs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw W()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return ys(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertVectorValue(t){var e,s,i;const r=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>St(o.doubleValue));return new yu(r)}convertGeoPoint(t){return new _u(St(t.latitude),St(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=Kc(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(er(t));default:return null}}convertTimestamp(t){const e=Fn(t);return new kt(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=pt.fromString(t);ot(Zg(s));const i=new nr(s.get(1),s.get(3)),r=new j(s.popFirst(5));return i.isEqual(e)||hn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Lm extends Dm{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Da("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class ko extends Lm{data(t={}){return super.data(t)}}class Wx{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Li(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new ko(this._firestore,this._userDataWriter,s.key,s,new Li(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new $(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ko(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Li(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new ko(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Li(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:qx(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function qx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n){n=ke(n,le);const t=ke(n.firestore,bs);return Rx(gu(t),n._key).then(e=>Yx(t,n,e))}class Nm extends Hx{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xs(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new le(this.firestore,null,e)}}function Mt(n){n=ke(n,jn);const t=ke(n.firestore,bs),e=gu(t),s=new Nm(t);return jx(n._query),kx(e,n._query).then(i=>new Wx(t,s,n,i))}function Gx(n,t,e){n=ke(n,le);const s=ke(n.firestore,bs),i=Mm(n.converter,t);return Ma(s,[Rm(Pa(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Ee.none())])}function Qs(n,t,e,...s){n=ke(n,le);const i=ke(n.firestore,bs),r=Pa(i);let o;return o=typeof(t=At(t))=="string"||t instanceof ka?Bx(r,"updateDoc",n._key,t,e,s):Fx(r,"updateDoc",n._key,t),Ma(i,[o.toMutation(n._key,Ee.exists(!0))])}function Kx(n){return Ma(ke(n.firestore,bs),[new tu(n._key,Ee.none())])}function Su(n,t){const e=ke(n.firestore,bs),s=Pe(n),i=Mm(n.converter,t);return Ma(e,[Rm(Pa(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Ee.exists(!1))]).then(()=>s)}function Ma(n,t){return function(s,i){const r=new ln;return s.asyncQueue.enqueueAndForget(async()=>_x(await Sx(s),i,r)),r.promise}(gu(n),t)}function Yx(n,t,e){const s=e.docs.get(t._key),i=new Nm(n);return new Lm(n,i,t._key,s,new Li(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){ni=i})(_s),cs(new Nn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new bs(new Xb(s.getProvider("auth-internal")),new t0(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new $(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nr(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ve(pd,"4.7.3",t),Ve(pd,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="firebasestorage.googleapis.com",Fm="storageBucket",Xx=2*60*1e3,Qx=10*60*1e3,Jx=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends He{constructor(t,e,s=0){super(Al(t),`Firebase Storage: ${e} (${Al(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Al(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mt||(mt={}));function Al(n){return"storage/"+n}function Ru(){const n="An unknown error occurred, please check the error payload for server response.";return new xt(mt.UNKNOWN,n)}function Zx(n){return new xt(mt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function tE(n){return new xt(mt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xt(mt.UNAUTHENTICATED,n)}function nE(){return new xt(mt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sE(n){return new xt(mt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Bm(){return new xt(mt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Um(){return new xt(mt.CANCELED,"User canceled the upload/download.")}function iE(n){return new xt(mt.INVALID_URL,"Invalid URL '"+n+"'.")}function rE(n){return new xt(mt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function oE(){return new xt(mt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Fm+"' property when initializing the app?")}function $m(){return new xt(mt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aE(){return new xt(mt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function lE(){return new xt(mt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cE(n){return new xt(mt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vc(n){return new xt(mt.INVALID_ARGUMENT,n)}function zm(){return new xt(mt.APP_DELETED,"The Firebase app was deleted.")}function uE(n){return new xt(mt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qi(n,t){return new xt(mt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function xi(n){throw new xt(mt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=ve.makeFromUrl(t,e)}catch{return new ve(t,"")}if(s.path==="")return s;throw rE(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",d=e.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),_={bucket:1,path:3},y=e===Vm?"(?:storage.googleapis.com|storage.cloud.google.com)":e,b="([^?#]*)",A=new RegExp(`^https?://${y}/${i}/${b}`,"i"),C=[{regex:a,indices:l,postModify:r},{regex:m,indices:_,postModify:u},{regex:A,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<C.length;D++){const M=C[D],L=M.regex.exec(t);if(L){const E=L[M.indices.bucket];let w=L[M.indices.path];w||(w=""),s=new ve(E,w),M.postModify(s);break}}if(s==null)throw iE(t);return s}}class hE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...b){u||(u=!0,t.apply(null,b))}function d(b){i=setTimeout(()=>{i=null,n(m,l())},b)}function p(){r&&clearTimeout(r)}function m(b,...A){if(u){p();return}if(b){p(),h.call(null,b,...A);return}if(l()||o){p(),h.call(null,b,...A);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,d(C)}let _=!1;function y(b){_||(_=!0,p(),!u&&(i!==null?(b||(a=2),clearTimeout(i),d(0)):b||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,y(!0)},e),y}function fE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){return n!==void 0}function gE(n){return typeof n=="function"}function mE(n){return typeof n=="object"&&!Array.isArray(n)}function La(n){return typeof n=="string"||n instanceof String}function tf(n){return ku()&&n instanceof Blob}function ku(){return typeof Blob<"u"}function ef(n,t,e,s){if(s<t)throw vc(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw vc(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function jm(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var os;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(os||(os={}));/**
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
 */function Hm(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=t.indexOf(n)!==-1;return e||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t,e,s,i,r,o,a,l,u,h,d,p=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new no(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===os.NO_ERROR,l=r.getStatus();if(!a||Hm(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===os.ABORT;s(!1,new no(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new no(u,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());pE(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Ru();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?zm():Um();o(l)}else{const l=Bm();o(l)}};this.canceled_?e(!1,new no(!1,null,!0)):this.backoffId_=dE(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&fE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class no{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function yE(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function vE(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function bE(n,t){t&&(n["X-Firebase-GMPID"]=t)}function wE(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function xE(n,t,e,s,i,r,o=!0){const a=jm(n.urlParams),l=n.url+a,u=Object.assign({},n.headers);return bE(u,t),yE(u,e),vE(u,r),wE(u,s),new _E(l,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TE(...n){const t=EE();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(ku())return new Blob(n);throw new xt(mt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function IE(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function AE(n){if(typeof atob>"u")throw cE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sl{constructor(t,e){this.data=t,this.contentType=e||null}}function SE(n,t){switch(n){case Ne.RAW:return new Sl(Wm(t));case Ne.BASE64:case Ne.BASE64URL:return new Sl(qm(n,t));case Ne.DATA_URL:return new Sl(kE(t),PE(t))}throw Ru()}function Wm(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function RE(n){let t;try{t=decodeURIComponent(n)}catch{throw qi(Ne.DATA_URL,"Malformed data URL.")}return Wm(t)}function qm(n,t){switch(n){case Ne.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw qi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ne.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw qi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=AE(t)}catch(i){throw i.message.includes("polyfill")?i:qi(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class Gm{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw qi(Ne.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=CE(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function kE(n){const t=new Gm(n);return t.base64?qm(Ne.BASE64,t.rest):RE(t.rest)}function PE(n){return new Gm(n).contentType}function CE(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e){let s=0,i="";tf(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(tf(this.data_)){const s=this.data_,i=IE(s,t,e);return i===null?null:new bn(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new bn(s,!0)}}static getBlob(...t){if(ku()){const e=t.map(s=>s instanceof bn?s.data_:s);return new bn(TE.apply(null,e))}else{const e=t.map(o=>La(o)?SE(Ne.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new bn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n){let t;try{t=JSON.parse(n)}catch{return null}return mE(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function OE(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function Ym(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n,t){return t}class ae{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||ME}}let so=null;function LE(n){return!La(n)||n.length<2?n:Ym(n)}function Xm(){if(so)return so;const n=[];n.push(new ae("bucket")),n.push(new ae("generation")),n.push(new ae("metageneration")),n.push(new ae("name","fullPath",!0));function t(r,o){return LE(o)}const e=new ae("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new ae("size");return i.xform=s,n.push(i),n.push(new ae("timeCreated")),n.push(new ae("updated")),n.push(new ae("md5Hash",null,!0)),n.push(new ae("cacheControl",null,!0)),n.push(new ae("contentDisposition",null,!0)),n.push(new ae("contentEncoding",null,!0)),n.push(new ae("contentLanguage",null,!0)),n.push(new ae("contentType",null,!0)),n.push(new ae("metadata","customMetadata",!0)),so=n,so}function NE(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new ve(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function VE(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return NE(s,n),s}function Qm(n,t,e){const s=Km(t);return s===null?null:VE(n,s,e)}function FE(n,t,e,s){const i=Km(t);if(i===null||!La(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const h=n.bucket,d=n.fullPath,p="/b/"+o(h)+"/o/"+o(d),m=Ar(p,e,s),_=jm({alt:"media",token:u});return m+_})[0]}function Jm(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class oi{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n){if(!n)throw Ru()}function Pu(n,t){function e(s,i){const r=Qm(n,i,t);return cn(r!==null),r}return e}function BE(n,t){function e(s,i){const r=Qm(n,i,t);return cn(r!==null),FE(r,i,n.host,n._protocol)}return e}function Sr(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=nE():i=eE():e.getStatus()===402?i=tE(n.bucket):e.getStatus()===403?i=sE(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function Zm(n){const t=Sr(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=Zx(n.path)),r.serverResponse=i.serverResponse,r}return e}function UE(n,t,e){const s=t.fullServerUrl(),i=Ar(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new oi(i,r,Pu(n,e),o);return a.errorHandler=Zm(t),a}function $E(n,t,e){const s=t.fullServerUrl(),i=Ar(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new oi(i,r,BE(n,e),o);return a.errorHandler=Zm(t),a}function zE(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function t_(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=zE(null,t)),s}function jE(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let D=0;D<2;D++)C=C+Math.random().toString().slice(2);return C}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=t_(t,s,i),h=Jm(u,e),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",m=bn.getBlob(d,s,p);if(m===null)throw $m();const _={name:u.fullPath},y=Ar(r,n.host,n._protocol),b="POST",A=n.maxUploadRetryTime,R=new oi(y,b,Pu(n,e),A);return R.urlParams=_,R.headers=o,R.body=m.uploadData(),R.errorHandler=Sr(t),R}class ea{constructor(t,e,s,i){this.current=t,this.total=e,this.finalized=!!s,this.metadata=i||null}}function Cu(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{cn(!1)}return cn(!!e&&(t||["active"]).indexOf(e)!==-1),e}function HE(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o=t_(t,s,i),a={name:o.fullPath},l=Ar(r,n.host,n._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=Jm(o,e),p=n.maxUploadRetryTime;function m(y){Cu(y);let b;try{b=y.getResponseHeader("X-Goog-Upload-URL")}catch{cn(!1)}return cn(La(b)),b}const _=new oi(l,u,m,p);return _.urlParams=a,_.headers=h,_.body=d,_.errorHandler=Sr(t),_}function WE(n,t,e,s){const i={"X-Goog-Upload-Command":"query"};function r(u){const h=Cu(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{cn(!1)}d||cn(!1);const p=Number(d);return cn(!isNaN(p)),new ea(p,s.size(),h==="final")}const o="POST",a=n.maxUploadRetryTime,l=new oi(e,o,r,a);return l.headers=i,l.errorHandler=Sr(t),l}const nf=256*1024;function qE(n,t,e,s,i,r,o,a){const l=new ea(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw aE();const u=l.total-l.current;let h=u;i>0&&(h=Math.min(h,i));const d=l.current,p=d+h;let m="";h===0?m="finalize":u===h?m="upload, finalize":m="upload";const _={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},y=s.slice(d,p);if(y===null)throw $m();function b(D,M){const L=Cu(D,["active","final"]),E=l.current+h,w=s.size();let x;return L==="final"?x=Pu(t,r)(D,M):x=null,new ea(E,w,L==="final",x)}const A="POST",R=t.maxUploadRetryTime,C=new oi(e,A,b,R);return C.headers=_,C.body=y.uploadData(),C.progressCallback=a||null,C.errorHandler=Sr(n),C}const he={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Rl(n){switch(n){case"running":case"pausing":case"canceling":return he.RUNNING;case"paused":return he.PAUSED;case"success":return he.SUCCESS;case"canceled":return he.CANCELED;case"error":return he.ERROR;default:return he.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(t,e,s){if(gE(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const r=t;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class KE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=os.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=os.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=os.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw xi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class YE extends KE{initXhr(){this.xhr_.responseType="text"}}function Ns(){return new YE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=Xm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(mt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(Hm(i.status,[]))if(r)i=Bm();else{this.sleepTime=Math.max(this.sleepTime*2,Jx),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(mt.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=HE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Ns,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const i=WE(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,Ns,e,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=nf*this._chunkMultiplier,e=new ea(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=qE(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ns,i,r,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){nf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=UE(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Ns,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=jE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Ns,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Um(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Rl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,i){const r=new GE(e||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Rl(this._state)){case he.SUCCESS:Rs(this._resolve.bind(null,this.snapshot))();break;case he.CANCELED:case he.ERROR:const e=this._reject;Rs(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Rl(this._state)){case he.RUNNING:case he.PAUSED:t.next&&Rs(t.next.bind(t,this.snapshot))();break;case he.SUCCESS:t.complete&&Rs(t.complete.bind(t))();break;case he.CANCELED:case he.ERROR:t.error&&Rs(t.error.bind(t,this._error))();break;default:t.error&&Rs(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class fs{constructor(t,e){this._service=t,e instanceof ve?this._location=e:this._location=ve.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new fs(t,e)}get root(){const t=new ve(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ym(this._location.path)}get storage(){return this._service}get parent(){const t=DE(this._location.path);if(t===null)return null;const e=new ve(this._location.bucket,t);return new fs(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw uE(t)}}function QE(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new XE(n,new bn(t),e)}function JE(n){n._throwIfRoot("getDownloadURL");const t=$E(n.storage,n._location,Xm());return n.storage.makeRequestWithTokens(t,Ns).then(e=>{if(e===null)throw lE();return e})}function ZE(n,t){const e=OE(n._location.path,t),s=new ve(n._location.bucket,e);return new fs(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(n){return/^[A-Za-z]+:\/\//.test(n)}function eT(n,t){return new fs(n,t)}function e_(n,t){if(n instanceof Du){const e=n;if(e._bucket==null)throw oE();const s=new fs(e,e._bucket);return t!=null?e_(s,t):s}else return t!==void 0?ZE(n,t):n}function nT(n,t){if(t&&tT(t)){if(n instanceof Du)return eT(n,t);throw vc("To use ref(service, url), the first argument must be a Storage instance.")}else return e_(n,t)}function sf(n,t){const e=t==null?void 0:t[Fm];return e==null?null:ve.makeFromBucketSpec(e,n)}function sT(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:lg(i,n.app.options.projectId))}class Du{constructor(t,e,s,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Vm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xx,this._maxUploadRetryTime=Qx,this._requests=new Set,i!=null?this._bucket=ve.makeFromBucketSpec(i,this._host):this._bucket=sf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ve.makeFromBucketSpec(this._url,t):this._bucket=sf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ef("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ef("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new fs(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new hE(zm());{const o=xE(t,this._appId,s,i,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const rf="@firebase/storage",of="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="storage";function iT(n,t,e){return n=At(n),QE(n,t,e)}function rT(n){return n=At(n),JE(n)}function oT(n,t){return n=At(n),nT(n,t)}function aT(n=Hc(),t){n=At(n);const s=_a(n,n_).getImmediate({identifier:t}),i=rg("storage");return i&&lT(s,...i),s}function lT(n,t,e,s={}){sT(n,t,e,s)}function cT(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Du(e,s,i,t,_s)}function uT(){cs(new Nn(n_,cT,"PUBLIC").setMultipleInstances(!0)),Ve(rf,of,""),Ve(rf,of,"esm2017")}uT();function Ou(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(e[s[i]]=n[s[i]]);return e}function s_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hT=s_,i_=new _r("auth","Firebase",s_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new zc("@firebase/auth");function dT(n,...t){na.logLevel<=J.WARN&&na.warn(`Auth (${_s}): ${n}`,...t)}function Po(n,...t){na.logLevel<=J.ERROR&&na.error(`Auth (${_s}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n,...t){throw Mu(n,...t)}function Ue(n,...t){return Mu(n,...t)}function r_(n,t,e){const s=Object.assign(Object.assign({},hT()),{[t]:e});return new _r("auth","Firebase",s).create(t,{appName:n.name})}function Mn(n){return r_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mu(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return i_.create(n,...t)}function H(n,t,...e){if(!n)throw Mu(t,...e)}function en(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Po(t),new Error(t)}function fn(n,t){n||en(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fT(){return af()==="http:"||af()==="https:"}function af(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fT()||Av()||"connection"in navigator)?navigator.onLine:!0}function gT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e){this.shortDelay=t,this.longDelay=e,fn(e>t,"Short delay should be less than long delay!"),this.isMobile=Ev()||Sv()}get(){return pT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n,t){fn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new Rr(3e4,6e4);function Hn(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function pn(n,t,e,s,i={}){return a_(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=yr(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:t,headers:l},r);return Iv()||(u.referrerPolicy="no-referrer"),o_.fetch()(l_(n,n.config.apiHost,e,a),u)})}async function a_(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},mT),t);try{const i=new vT(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw io(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw io(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw io(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw r_(n,h,u);Ce(n,h)}}catch(i){if(i instanceof He)throw i;Ce(n,"network-request-failed",{message:String(i)})}}async function Na(n,t,e,s,i={}){const r=await pn(n,t,e,s,i);return"mfaPendingCredential"in r&&Ce(n,"multi-factor-auth-required",{_serverResponse:r}),r}function l_(n,t,e,s){const i=`${t}${e}?${s}`;return n.config.emulator?Lu(n.config,i):`${n.config.apiScheme}://${i}`}function yT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vT{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(Ue(this.auth,"network-request-failed")),_T.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=Ue(n,t,s);return i.customData._tokenResponse=e,i}function lf(n){return n!==void 0&&n.enterprise!==void 0}class bT{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return yT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function wT(n,t){return pn(n,"GET","/v2/recaptchaConfig",Hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(n,t){return pn(n,"POST","/v1/accounts:delete",t)}async function c_(n,t){return pn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ET(n,t=!1){const e=At(n),s=await e.getIdToken(t),i=Nu(s);H(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Gi(kl(i.auth_time)),issuedAtTime:Gi(kl(i.iat)),expirationTime:Gi(kl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function kl(n){return Number(n)*1e3}function Nu(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const i=sg(e);return i?JSON.parse(i):(Po("Failed to decode base64 JWT payload"),null)}catch(i){return Po("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cf(n){const t=Nu(n);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof He&&TT(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function TT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sa(n){var t;const e=n.auth,s=await n.getIdToken(),i=await ar(n,c_(e,{idToken:s}));H(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?u_(r.providerUserInfo):[],a=ST(n.providerData,o),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new wc(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function AT(n){const t=At(n);await sa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ST(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function u_(n){return n.map(t=>{var{providerId:e}=t,s=Ou(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(n,t){const e=await a_(n,{},async()=>{const s=yr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=l_(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",o_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function kT(n,t){return pn(n,"POST","/v2/accounts:revokeToken",Hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):cf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){H(t.length!==0,"internal-error");const e=cf(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await RT(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new Us;return s&&(H(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n,t){H(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class nn{constructor(t){var{uid:e,auth:s,stsTokenManager:i}=t,r=Ou(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new wc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await ar(this,this.stsTokenManager.getToken(this.auth,t));return H(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return ET(this,t)}reload(){return AT(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await sa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Mn(this.auth));const t=await this.getIdToken();return await ar(this,xT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,i,r,o,a,l,u,h;const d=(s=e.displayName)!==null&&s!==void 0?s:void 0,p=(i=e.email)!==null&&i!==void 0?i:void 0,m=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=e.photoURL)!==null&&o!==void 0?o:void 0,y=(a=e.tenantId)!==null&&a!==void 0?a:void 0,b=(l=e._redirectEventId)!==null&&l!==void 0?l:void 0,A=(u=e.createdAt)!==null&&u!==void 0?u:void 0,R=(h=e.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:D,isAnonymous:M,providerData:L,stsTokenManager:E}=e;H(C&&E,t,"internal-error");const w=Us.fromJSON(this.name,E);H(typeof C=="string",t,"internal-error"),yn(d,t.name),yn(p,t.name),H(typeof D=="boolean",t,"internal-error"),H(typeof M=="boolean",t,"internal-error"),yn(m,t.name),yn(_,t.name),yn(y,t.name),yn(b,t.name),yn(A,t.name),yn(R,t.name);const x=new nn({uid:C,auth:t,email:p,emailVerified:D,displayName:d,isAnonymous:M,photoURL:_,phoneNumber:m,tenantId:y,stsTokenManager:w,createdAt:A,lastLoginAt:R});return L&&Array.isArray(L)&&(x.providerData=L.map(I=>Object.assign({},I))),b&&(x._redirectEventId=b),x}static async _fromIdTokenResponse(t,e,s=!1){const i=new Us;i.updateFromServerResponse(e);const r=new nn({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await sa(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?u_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Us;a.updateFromIdToken(s);const l=new nn({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new wc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map;function sn(n){fn(n instanceof Function,"Expected a class definition");let t=uf.get(n);return t?(fn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,uf.set(n,t),t)}/**
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
 */class h_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}h_.type="NONE";const hf=h_;/**
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
 */function Co(n,t,e){return`firebase:${n}:${t}:${e}`}class $s{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,r),this.fullPersistenceKey=Co("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new $s(sn(hf),t,s);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||sn(hf);const o=Co(s,t.config.apiKey,t.name);let a=null;for(const u of e)try{const h=await u._get(o);if(h){const d=nn._fromJSON(t,h);u!==r&&(a=d),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new $s(r,t,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new $s(r,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(g_(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(d_(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(__(t))return"Blackberry";if(y_(t))return"Webos";if(f_(t))return"Safari";if((t.includes("chrome/")||p_(t))&&!t.includes("edge/"))return"Chrome";if(m_(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function d_(n=ne()){return/firefox\//i.test(n)}function f_(n=ne()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function p_(n=ne()){return/crios\//i.test(n)}function g_(n=ne()){return/iemobile/i.test(n)}function m_(n=ne()){return/android/i.test(n)}function __(n=ne()){return/blackberry/i.test(n)}function y_(n=ne()){return/webos/i.test(n)}function Vu(n=ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function PT(n=ne()){var t;return Vu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function CT(){return Rv()&&document.documentMode===10}function v_(n=ne()){return Vu(n)||m_(n)||y_(n)||__(n)||/windows phone/i.test(n)||g_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n,t=[]){let e;switch(n){case"Browser":e=df(ne());break;case"Worker":e=`${df(ne())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${_s}/${s}`}/**
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
 */class DT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});s.onAbort=e,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function OT(n,t={}){return pn(n,"GET","/v2/passwordPolicy",Hn(n,t))}/**
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
 */const MT=6;class LT{constructor(t){var e,s,i,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:MT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(e=l.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ff(this),this.idTokenSubscription=new ff(this),this.beforeStateQueue=new DT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=sn(e)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await $s.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await c_(this,{idToken:t}),s=await nn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await sa(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=gT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(tn(this.app))return Promise.reject(Mn(this));const e=t?At(t):null;return e&&H(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return tn(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await OT(this),e=new LT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new _r("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await kT(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&sn(t)||this._popupRedirectResolver;H(e,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[sn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,s,i);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=b_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&dT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ws(n){return At(n)}class ff{constructor(t){this.auth=t,this.observer=null,this.addObserver=Nv(e=>this.observer=e)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VT(n){Va=n}function w_(n){return Va.loadJS(n)}function FT(){return Va.recaptchaEnterpriseScript}function BT(){return Va.gapiScript}function UT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const $T="recaptcha-enterprise",zT="NO_RECAPTCHA";class jT{constructor(t){this.type=$T,this.auth=ws(t)}async verify(t="verify",e=!1){async function s(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{wT(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new bT(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;lf(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:t}).then(u=>{o(u)}).catch(()=>{o(zT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!e&&lf(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FT();l.length!==0&&(l+=a),w_(l).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function pf(n,t,e,s=!1){const i=new jT(n);let r;try{r=await i.verify(e)}catch{r=await i.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xc(n,t,e,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await pf(n,t,e,e==="getOobCode");return s(n,r)}else return s(n,t).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await pf(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n,t){const e=_a(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(Ho(r,t??{}))return i;Ce(i,"already-initialized")}return e.initialize({options:t})}function WT(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(sn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function qT(n,t,e){const s=ws(n);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=x_(t),{host:o,port:a}=GT(t),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),KT()}function x_(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function GT(n){const t=x_(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:gf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:gf(o)}}}function gf(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function KT(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return en("not implemented")}_getIdTokenResponse(t){return en("not implemented")}_linkToIdToken(t,e){return en("not implemented")}_getReauthenticationResolver(t){return en("not implemented")}}async function YT(n,t){return pn(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(n,t){return Na(n,"POST","/v1/accounts:signInWithPassword",Hn(n,t))}async function QT(n,t){return pn(n,"POST","/v1/accounts:sendOobCode",Hn(n,t))}async function JT(n,t){return QT(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(n,t){return Na(n,"POST","/v1/accounts:signInWithEmailLink",Hn(n,t))}async function tI(n,t){return Na(n,"POST","/v1/accounts:signInWithEmailLink",Hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Fu{constructor(t,e,s,i=null){super("password",s),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new lr(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new lr(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(t,e,"signInWithPassword",XT);case"emailLink":return ZT(t,{email:this._email,oobCode:this._password});default:Ce(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(t,s,"signUpPassword",YT);case"emailLink":return tI(t,{idToken:e,email:this._email,oobCode:this._password});default:Ce(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(n,t){return Na(n,"POST","/v1/accounts:signInWithIdp",Hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="http://localhost";class ps extends Fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ps(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ce("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=e,r=Ou(e,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ps(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return zs(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,zs(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,zs(t,e)}buildRequest(){const t={requestUri:eI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=yr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sI(n){const t=Pi(Ci(n)).link,e=t?Pi(Ci(t)).deep_link_id:null,s=Pi(Ci(n)).deep_link_id;return(s?Pi(Ci(s)).link:null)||s||e||t||n}class Bu{constructor(t){var e,s,i,r,o,a;const l=Pi(Ci(t)),u=(e=l.apiKey)!==null&&e!==void 0?e:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,d=nI((i=l.mode)!==null&&i!==void 0?i:null);H(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=sI(t);try{return new Bu(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(t,e){return lr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Bu.parseLink(e);return H(s,"argument-error"),lr._fromEmailAndCode(t,s.code,s.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kr extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends kr{constructor(){super("facebook.com")}static credential(t){return ps._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ps._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return xn.credentialFromTaggedObject(t)}static credentialFromError(t){return xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return xn.credential(e,s)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends kr{constructor(){super("github.com")}static credential(t){return ps._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return En.credentialFromTaggedObject(t)}static credentialFromError(t){return En.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return En.credential(t.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends kr{constructor(){super("twitter.com")}static credential(t,e){return ps._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return Tn.credential(e,s)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await nn._fromIdTokenResponse(t,s,i),o=mf(s);return new Js({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=mf(s);return new Js({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function mf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends He{constructor(t,e,s,i){var r;super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ia.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new ia(t,e,s,i)}}function T_(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ia._fromErrorAndOperation(n,r,t,s):r})}async function iI(n,t,e=!1){const s=await ar(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Js._forOperation(n,"link",s)}/**
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
 */async function rI(n,t,e=!1){const{auth:s}=n;if(tn(s.app))return Promise.reject(Mn(s));const i="reauthenticate";try{const r=await ar(n,T_(s,i,t,n),e);H(r.idToken,s,"internal-error");const o=Nu(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(n.uid===a,s,"user-mismatch"),Js._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ce(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(n,t,e=!1){if(tn(n.app))return Promise.reject(Mn(n));const s="signIn",i=await T_(n,s,t),r=await Js._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}async function oI(n,t){return I_(ws(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(n){const t=ws(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function lI(n,t,e){const s=ws(n);await xc(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",JT)}function cI(n,t,e){return tn(n.app)?Promise.reject(Mn(n)):oI(At(n),ai.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&aI(n),s})}function uI(n,t,e,s){return At(n).onIdTokenChanged(t,e,s)}function hI(n,t,e){return At(n).beforeAuthStateChanged(t,e)}function dI(n,t,e,s){return At(n).onAuthStateChanged(t,e,s)}function fI(n){return At(n).signOut()}const ra="__sak";/**
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
 */class A_{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=1e3,gI=10;class S_ extends A_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=v_(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);CT()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,gI):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},pI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}S_.type="LOCAL";const mI=S_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends A_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}R_.type="SESSION";const k_=R_;/**
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
 */function _I(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Fa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new Fa(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,r)),l=await _I(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class yI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Uu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return window}function vI(n){$e().location.href=n}/**
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
 */function P_(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function bI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xI(){return P_()?self:null}/**
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
 */const C_="firebaseLocalStorageDb",EI=1,oa="firebaseLocalStorage",D_="fbase_key";class Pr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ba(n,t){return n.transaction([oa],t?"readwrite":"readonly").objectStore(oa)}function TI(){const n=indexedDB.deleteDatabase(C_);return new Pr(n).toPromise()}function Ec(){const n=indexedDB.open(C_,EI);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(oa,{keyPath:D_})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(oa)?t(s):(s.close(),await TI(),t(await Ec()))})})}async function _f(n,t,e){const s=Ba(n,!0).put({[D_]:t,value:e});return new Pr(s).toPromise()}async function II(n,t){const e=Ba(n,!1).get(t),s=await new Pr(e).toPromise();return s===void 0?null:s.value}function yf(n,t){const e=Ba(n,!0).delete(t);return new Pr(e).toPromise()}const AI=800,SI=3;class O_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ec(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>SI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(xI()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await bI(),!this.activeServiceWorker)return;this.sender=new yI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||wI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ec();return await _f(t,ra,"1"),await yf(t,ra),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>_f(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>II(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>yf(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Ba(i,!1).getAll();return new Pr(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O_.type="LOCAL";const RI=O_;new Rr(3e4,6e4);/**
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
 */function kI(n,t){return t?sn(t):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class $u extends Fu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zs(t,this._buildIdpRequest())}_linkToIdToken(t,e){return zs(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return zs(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function PI(n){return I_(n.auth,new $u(n),n.bypassAuthState)}function CI(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),rI(e,new $u(n),n.bypassAuthState)}async function DI(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),iI(e,new $u(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return PI;case"linkViaPopup":case"linkViaRedirect":return DI;case"reauthViaPopup":case"reauthViaRedirect":return CI;default:Ce(this.auth,"internal-error")}}resolve(t){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new Rr(2e3,1e4);class Fs extends M_{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const t=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,OI.get())};t()}}Fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="pendingRedirect",Do=new Map;class LI extends M_{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Do.get(this.auth._key());if(!t){try{const s=await NI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Do.set(this.auth._key(),t)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NI(n,t){const e=BI(t),s=FI(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function VI(n,t){Do.set(n._key(),t)}function FI(n){return sn(n._redirectPersistence)}function BI(n){return Co(MI,n.config.apiKey,n.name)}async function UI(n,t,e=!1){if(tn(n.app))return Promise.reject(Mn(n));const s=ws(n),i=kI(s,t),o=await new LI(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=10*60*1e3;class zI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!jI(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!L_(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(Ue(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$I&&this.cachedEventUids.clear(),this.cachedEventUids.has(vf(t))}saveEventToCache(t){this.cachedEventUids.add(vf(t)),this.lastProcessedEventTime=Date.now()}}function vf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function L_({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function jI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(n,t={}){return pn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qI=/^https?/;async function GI(n){if(n.config.emulator)return;const{authorizedDomains:t}=await HI(n);for(const e of t)try{if(KI(e))return}catch{}Ce(n,"unauthorized-domain")}function KI(n){const t=bc(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!qI.test(e))return!1;if(WI.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const YI=new Rr(3e4,6e4);function bf(){const n=$e().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function XI(n){return new Promise((t,e)=>{var s,i,r;function o(){bf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bf(),e(Ue(n,"network-request-failed"))},timeout:YI.get()})}if(!((i=(s=$e().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=$e().gapi)===null||r===void 0)&&r.load)o();else{const a=UT("iframefcb");return $e()[a]=()=>{gapi.load?o():e(Ue(n,"network-request-failed"))},w_(`${BT()}?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw Oo=null,t})}let Oo=null;function QI(n){return Oo=Oo||XI(n),Oo}/**
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
 */const JI=new Rr(5e3,15e3),ZI="__/auth/iframe",tA="emulator/auth/iframe",eA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sA(n){const t=n.config;H(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Lu(t,tA):`https://${n.config.authDomain}/${ZI}`,s={apiKey:t.apiKey,appName:n.name,v:_s},i=nA.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${yr(s).slice(1)}`}async function iA(n){const t=await QI(n),e=$e().gapi;return H(e,n,"internal-error"),t.open({where:document.body,url:sA(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eA,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ue(n,"network-request-failed"),a=$e().setTimeout(()=>{r(o)},JI.get());function l(){$e().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const rA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oA=500,aA=600,lA="_blank",cA="http://localhost";class wf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uA(n,t,e,s=oA,i=aA){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rA),{width:s.toString(),height:i.toString(),top:r,left:o}),u=ne().toLowerCase();e&&(a=p_(u)?lA:e),d_(u)&&(t=t||cA,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[m,_])=>`${p}${m}=${_},`,"");if(PT(u)&&a!=="_self")return hA(t||"",a),new wf(null);const d=window.open(t||"",a,h);H(d,n,"popup-blocked");try{d.focus()}catch{}return new wf(d)}function hA(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const dA="__/auth/handler",fA="emulator/auth/handler",pA=encodeURIComponent("fac");async function xf(n,t,e,s,i,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:_s,eventId:i};if(t instanceof E_){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Lv(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(t instanceof kr){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${pA}=${encodeURIComponent(l)}`:"";return`${gA(n)}?${yr(a).slice(1)}${u}`}function gA({config:n}){return n.emulator?Lu(n,fA):`https://${n.authDomain}/${dA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="webStorageSupport";class mA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k_,this._completeRedirectFn=UI,this._overrideRedirectResult=VI}async _openPopup(t,e,s,i){var r;fn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await xf(t,e,s,bc(),i);return uA(t,o,Uu())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await xf(t,e,s,bc(),i);return vI(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(fn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await iA(t),s=new zI(t);return e.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Pl,{type:Pl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Pl];o!==void 0&&e(!!o),Ce(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=GI(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return v_()||f_()||Vu()}}const _A=mA;var Ef="@firebase/auth",Tf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bA(n){cs(new Nn("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b_(n)},u=new NT(s,i,r,l);return WT(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),cs(new Nn("auth-internal",t=>{const e=ws(t.getProvider("auth").getImmediate());return(s=>new yA(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(Ef,Tf,vA(n)),Ve(Ef,Tf,"esm2017")}/**
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
 */const wA=5*60,xA=ag("authIdTokenMaxAge")||wA;let If=null;const EA=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>xA)return;const i=e==null?void 0:e.token;If!==i&&(If=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TA(n=Hc()){const t=_a(n,"auth");if(t.isInitialized())return t.getImmediate();const e=HT(n,{popupRedirectResolver:_A,persistence:[RI,mI,k_]}),s=ag("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=EA(r.toString());hI(e,o,()=>o(e.currentUser)),uI(e,a=>o(a))}}const i=ig("auth");return i&&qT(e,`http://${i}`),e}function IA(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}VT({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=Ue("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",IA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bA("Browser");const N_={},V_=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,AA=()=>{const n=V_("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&N_||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};if(Object.values(e).every(Boolean))return e;throw new Error("Config Firebase não encontrada. Defina window.__FIREBASE_CONFIG ou variáveis VITE_FIREBASE_*")},SA=()=>{const n=V_("__RDO_API_CONFIG");if(n)return n;const t=import.meta&&N_||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN;return e?{TOKEN:e}:{TOKEN:""}},RA=AA(),Ua=hg(RA),at=Ox(Ua),kA=aT(Ua),ro=TA(Ua),PA=async()=>(console.log("[Firebase] Configuração carregada com sucesso"),Ua),dt={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},aa={init:()=>new Promise(n=>{dI(ro,async t=>{if(t)try{const e=await Zd(Pe(at,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};dt.setUser(s)}else dt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),dt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else dt.setUser(null);n(dt.state.currentUser)})}),login:async(n,t)=>{try{const s=(await cI(ro,n,t)).user,i=await Zd(Pe(at,"usuarios",s.uid));if(i.exists()){const r={uid:s.uid,email:s.email,...i.data()};return dt.setUser(r),r}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await fI(ro),dt.setUser(null)},recoverPassword:async n=>{await lI(ro,n)}},Ot={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const i=e.split("/").filter(Boolean);if(i.length!==t.length)continue;const r={};let o=!0;for(let a=0;a<i.length;a++){const l=i[a],u=t[a];if(l.startsWith(":"))r[l.slice(1)]=decodeURIComponent(u);else if(l!==u){o=!1;break}}if(o)return{handler:s,params:r}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!dt.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(dt.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},U={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:i="",required:r=!1,className:o=""})=>`
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
        `},Af={renderLogin:()=>`
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
                            ${U.createInput({id:"email",type:"email",label:"Email",placeholder:"seu@email.com",required:!0,className:"mb-4"})}
                            ${U.createInput({id:"password",type:"password",label:"Senha",placeholder:"••••••••",required:!0})}
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <a href="#/forgot-password" class="font-display uppercase tracking-wide text-primary hover:text-primary-strong">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            ${U.createButton({id:"btn-login",text:"Entrar",type:"submit",className:"w-full justify-center"})}
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
                        ${U.createInput({id:"email-recovery",type:"email",label:"Email",required:!0})}

                        <div class="flex gap-4">
                            ${U.createButton({id:"btn-back",text:"Voltar",variant:"secondary",className:"w-full justify-center",onClick:"window.location.hash = '/login'"})}
                            ${U.createButton({id:"btn-recover",text:"Enviar",type:"submit",className:"w-full justify-center"})}
                        </div>
                    </form>
                </div>
            </div>
        `},Sf={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Af.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value,r=document.getElementById("btn-login");try{r.disabled=!0,r.innerHTML=U.createLoader(),await aa.login(s,i),U.createToast("Login realizado com sucesso!"),Ot.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),U.createToast(a,"error"),r.disabled=!1,r.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Af.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,i=document.getElementById("btn-recover");try{i.disabled=!0,i.innerHTML=U.createLoader(),await aa.recoverPassword(s),U.createToast("Email de recuperação enviado!"),setTimeout(()=>Ot.navigate("/login"),2e3)}catch(r){U.createToast("Erro ao enviar email: "+r.message,"error"),i.disabled=!1,i.innerHTML="<span>Enviar</span>"}})}},_e={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>n?new Date(n).toLocaleDateString("pt-BR"):"-"},ks={getCompradorStats:async()=>{const n=Bt(at,"compras"),t=ue(n,Nt("status_compra","==","Pendente")),e=await Mt(t),s=ue(n,Nt("status_compra","==","Em Cotação")),i=await Mt(s),r=ue(n,yc("data_solicitacao","desc"),Ro(5)),o=await Mt(r);return{pendentes:e.size,emCotacao:i.size,recentes:o.docs.map(a=>({id:a.id,...a.data()}))}},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=Bt(at,"compras"),e=ue(t,Nt("obraId","==",n),Nt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await Mt(e),i=ue(t,Nt("obraId","==",n),Nt("status_compra","==","Comprado")),r=await Mt(i),o=ue(t,Nt("obraId","==",n),Nt("status_compra","==","Entregue")),a=await Mt(o),l=ue(t,Nt("obraId","==",n),yc("data_solicitacao","desc"),Ro(5)),u=await Mt(l);return{pendentes:s.size,transito:r.size,entregues:a.size,recentes:u.docs.map(h=>({id:h.id,...h.data()}))}},getObras:async()=>(await Mt(Bt(at,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=Bt(at,"compras"),t=ue(n,Ro(200)),e=await Mt(t);let s=0,i={},r={},o=0,a=0,l=0,u=0,h=0,d=0,p=0;e.forEach(A=>{const R=A.data(),C=Number(R.valor_estimado||R.valor_total||0);s+=C,i[R.status_compra]=(i[R.status_compra]||0)+1,R.status_compra!=="Entregue"&&R.previsao_entrega&&new Date(R.previsao_entrega)<new Date&&l++;const D=R.previsao_entrega?new Date(R.previsao_entrega):null,M=R.data_recebimento?new Date(R.data_recebimento):null;if(M&&D&&(u++,M<=D&&h++),R.data_emissao&&(M||D)){const L=M||D,E=Math.max(0,(new Date(L)-new Date(R.data_emissao))/(1e3*60*60*24));d+=E,p++}if(R.limite_real&&(o+=Number(R.limite_real)),R.comprometido&&(a+=Number(R.comprometido)),R.data_solicitacao){const L=new Date(R.data_solicitacao),E=`${L.getFullYear()}-${String(L.getMonth()+1).padStart(2,"0")}`;r[E]=(r[E]||0)+C}});const m=o>0?a/o*100:0,_=u?h/u*100:0,y=p?d/p:0,b=Math.max(0,o-a);return{totalGasto:s,porStatus:i,totalPedidos:e.size,gastosPorMes:r,limiteReal:o,comprometido:a,curvaPercent:m,atrasos:l,sla:_,lead:y,economia:b}}},Cl={renderComprador:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Geral - Compras</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${U.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Aguardando ação</p>`,className:"accent-left"})}
                    ${U.createCard({title:"Em Cotação",content:`<p class="text-4xl font-display text-primary uppercase">${n.emCotacao}</p><p class="text-sm heading-muted">Processando</p>`,className:"accent-left"})}
                    ${U.createCard({title:"Prioridade Alta",content:'<p class="text-4xl font-display text-alert uppercase">0</p><p class="text-sm heading-muted">SLA Estourado</p>',className:"accent-left"})}
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
        `,renderObra:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Minha Obra</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${U.createCard({title:"Solicitados",content:`<p class="text-4xl font-display text-text uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`})}
                    ${U.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-display text-primary uppercase">${n.transito}</p><p class="text-sm heading-muted">A caminho</p>`,className:"accent-left"})}
                    ${U.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${n.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,className:"accent-left"})}
                </div>
            </div>
        `,renderDiretor:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Executiva</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${U.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${_e.formatCurrency(n.totalGasto)}</p>`})}
                    ${U.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${U.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${_e.formatCurrency(n.limiteReal||0)} • Comprometido: ${_e.formatCurrency(n.comprometido||0)}</p>`})}
                    ${U.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${U.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${U.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${U.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${_e.formatCurrency(n.economia||0)}</p>`})}
                </div>
                
                <!-- Gráficos -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="card h-80 lg:col-span-2">
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
                </div>
            </div>
        `};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Cr(n){return n+.5|0}const An=(n,t,e)=>Math.max(Math.min(n,e),t);function Ni(n){return An(Cr(n*2.55),0,255)}function Ln(n){return An(Cr(n*255),0,255)}function Ze(n){return An(Cr(n/2.55)/100,0,1)}function Rf(n){return An(Cr(n*100),0,100)}const be={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Tc=[..."0123456789ABCDEF"],CA=n=>Tc[n&15],DA=n=>Tc[(n&240)>>4]+Tc[n&15],oo=n=>(n&240)>>4===(n&15),OA=n=>oo(n.r)&&oo(n.g)&&oo(n.b)&&oo(n.a);function MA(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&be[n[1]]*17,g:255&be[n[2]]*17,b:255&be[n[3]]*17,a:t===5?be[n[4]]*17:255}:(t===7||t===9)&&(e={r:be[n[1]]<<4|be[n[2]],g:be[n[3]]<<4|be[n[4]],b:be[n[5]]<<4|be[n[6]],a:t===9?be[n[7]]<<4|be[n[8]]:255})),e}const LA=(n,t)=>n<255?t(n):"";function NA(n){var t=OA(n)?CA:DA;return n?"#"+t(n.r)+t(n.g)+t(n.b)+LA(n.a,t):void 0}const VA=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function F_(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function FA(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function BA(n,t,e){const s=F_(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function UA(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function zu(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let l,u,h;return r!==o&&(h=r-o,u=a>.5?h/(2-r-o):h/(r+o),l=UA(e,s,i,h,r),l=l*60+.5),[l|0,u||0,a]}function ju(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(Ln)}function Hu(n,t,e){return ju(F_,n,t,e)}function $A(n,t,e){return ju(BA,n,t,e)}function zA(n,t,e){return ju(FA,n,t,e)}function B_(n){return(n%360+360)%360}function jA(n){const t=VA.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Ni(+t[5]):Ln(+t[5]));const i=B_(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=$A(i,r,o):t[1]==="hsv"?s=zA(i,r,o):s=Hu(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function HA(n,t){var e=zu(n);e[0]=B_(e[0]+t),e=Hu(e),n.r=e[0],n.g=e[1],n.b=e[2]}function WA(n){if(!n)return;const t=zu(n),e=t[0],s=Rf(t[1]),i=Rf(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${Ze(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const kf={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Pf={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function qA(){const n={},t=Object.keys(Pf),e=Object.keys(kf);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,kf[r]);r=parseInt(Pf[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let ao;function GA(n){ao||(ao=qA(),ao.transparent=[0,0,0,0]);const t=ao[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const KA=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function YA(n){const t=KA.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?Ni(o):An(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?Ni(s):An(s,0,255)),i=255&(t[4]?Ni(i):An(i,0,255)),r=255&(t[6]?Ni(r):An(r,0,255)),{r:s,g:i,b:r,a:e}}}function XA(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${Ze(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Dl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Ps=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function QA(n,t,e){const s=Ps(Ze(n.r)),i=Ps(Ze(n.g)),r=Ps(Ze(n.b));return{r:Ln(Dl(s+e*(Ps(Ze(t.r))-s))),g:Ln(Dl(i+e*(Ps(Ze(t.g))-i))),b:Ln(Dl(r+e*(Ps(Ze(t.b))-r))),a:n.a+e*(t.a-n.a)}}function lo(n,t,e){if(n){let s=zu(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Hu(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function U_(n,t){return n&&Object.assign(t||{},n)}function Cf(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Ln(n[3]))):(t=U_(n,{r:0,g:0,b:0,a:1}),t.a=Ln(t.a)),t}function JA(n){return n.charAt(0)==="r"?YA(n):jA(n)}class cr{constructor(t){if(t instanceof cr)return t;const e=typeof t;let s;e==="object"?s=Cf(t):e==="string"&&(s=MA(t)||GA(t)||JA(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=U_(this._rgb);return t&&(t.a=Ze(t.a)),t}set rgb(t){this._rgb=Cf(t)}rgbString(){return this._valid?XA(this._rgb):void 0}hexString(){return this._valid?NA(this._rgb):void 0}hslString(){return this._valid?WA(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=s.a-i.a,u=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-u,s.r=255&u*s.r+r*i.r+.5,s.g=255&u*s.g+r*i.g+.5,s.b=255&u*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=QA(this._rgb,t._rgb,e)),this}clone(){return new cr(this.rgb)}alpha(t){return this._rgb.a=Ln(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Cr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return lo(this._rgb,2,t),this}darken(t){return lo(this._rgb,2,-t),this}saturate(t){return lo(this._rgb,1,t),this}desaturate(t){return lo(this._rgb,1,-t),this}rotate(t){return HA(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Xe(){}const ZA=(()=>{let n=0;return()=>n++})();function Y(n){return n==null}function yt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Q(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function It(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function me(n,t){return It(n)?n:t}function G(n,t){return typeof n>"u"?t:n}const tS=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,$_=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function ht(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function it(n,t,e,s){let i,r,o;if(yt(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(Q(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function la(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function ca(n){if(yt(n))return n.map(ca);if(Q(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=ca(n[e[i]]);return t}return n}function z_(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function eS(n,t,e,s){if(!z_(n))return;const i=t[n],r=e[n];Q(i)&&Q(r)?ur(i,r,s):t[n]=ca(r)}function ur(n,t,e){const s=yt(t)?t:[t],i=s.length;if(!Q(n))return n;e=e||{};const r=e.merger||eS;let o;for(let a=0;a<i;++a){if(o=s[a],!Q(o))continue;const l=Object.keys(o);for(let u=0,h=l.length;u<h;++u)r(l[u],n,o,e)}return n}function Ki(n,t){return ur(n,t,{merger:nS})}function nS(n,t,e){if(!z_(n))return;const s=t[n],i=e[n];Q(s)&&Q(i)?Ki(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=ca(i))}const Df={"":n=>n,x:n=>n.x,y:n=>n.y};function sS(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function iS(n){const t=sS(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function Un(n,t){return(Df[t]||(Df[t]=iS(t)))(n)}function Wu(n){return n.charAt(0).toUpperCase()+n.slice(1)}const hr=n=>typeof n<"u",$n=n=>typeof n=="function",Of=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function rS(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const st=Math.PI,gt=2*st,oS=gt+st,ua=Number.POSITIVE_INFINITY,aS=st/180,Rt=st/2,Xn=st/4,Mf=st*2/3,Sn=Math.log10,ze=Math.sign;function Yi(n,t,e){return Math.abs(n-t)<e}function Lf(n){const t=Math.round(n);n=Yi(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Sn(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function lS(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function cS(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Zs(n){return!cS(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function uS(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function j_(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Ae(n){return n*(st/180)}function qu(n){return n*(180/st)}function Nf(n){if(!It(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function H_(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*st&&(r+=gt),{angle:r,distance:i}}function Ic(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function hS(n,t){return(n-t+oS)%gt-st}function Zt(n){return(n%gt+gt)%gt}function dr(n,t,e,s){const i=Zt(n),r=Zt(t),o=Zt(e),a=Zt(r-i),l=Zt(o-i),u=Zt(i-r),h=Zt(i-o);return i===r||i===o||s&&r===o||a>l&&u<h}function Ut(n,t,e){return Math.max(t,Math.min(e,n))}function dS(n){return Ut(n,-32768,32767)}function rn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function Gu(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const on=(n,t,e,s)=>Gu(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),fS=(n,t,e)=>Gu(n,e,s=>n[s][t]>=e);function pS(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const W_=["push","pop","shift","splice","unshift"];function gS(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),W_.forEach(e=>{const s="_onData"+Wu(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function Vf(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(W_.forEach(r=>{delete n[r]}),delete n._chartjs)}function q_(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const G_=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function K_(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,G_.call(window,()=>{s=!1,n.apply(t,e)}))}}function mS(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const Ku=n=>n==="start"?"left":n==="end"?"right":"center",Qt=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,_S=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function Y_(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:l}=n,u=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:d,max:p,minDefined:m,maxDefined:_}=o.getUserBounds();if(m){if(i=Math.min(on(l,h,d).lo,e?s:on(t,h,o.getPixelForValue(d)).lo),u){const y=l.slice(0,i+1).reverse().findIndex(b=>!Y(b[a.axis]));i-=Math.max(0,y)}i=Ut(i,0,s-1)}if(_){let y=Math.max(on(l,o.axis,p,!0).hi+1,e?0:on(t,h,o.getPixelForValue(p),!0).hi+1);if(u){const b=l.slice(y-1).findIndex(A=>!Y(A[a.axis]));y+=Math.max(0,b)}r=Ut(y,i,s)-i}else r=s-i}return{start:i,count:r}}function X_(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const co=n=>n===0||n===1,Ff=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*gt/e)),Bf=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*gt/e)+1,Xi={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Rt)+1,easeOutSine:n=>Math.sin(n*Rt),easeInOutSine:n=>-.5*(Math.cos(st*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>co(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>co(n)?n:Ff(n,.075,.3),easeOutElastic:n=>co(n)?n:Bf(n,.075,.3),easeInOutElastic(n){return co(n)?n:n<.5?.5*Ff(n*2,.1125,.45):.5+.5*Bf(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Xi.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Xi.easeInBounce(n*2)*.5:Xi.easeOutBounce(n*2-1)*.5+.5};function Yu(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Uf(n){return Yu(n)?n:new cr(n)}function Ol(n){return Yu(n)?n:new cr(n).saturate(.5).darken(.1).hexString()}const yS=["x","y","borderWidth","radius","tension"],vS=["color","borderColor","backgroundColor"];function bS(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:vS},numbers:{type:"number",properties:yS}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function wS(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const $f=new Map;function xS(n,t){t=t||{};const e=n+JSON.stringify(t);let s=$f.get(e);return s||(s=new Intl.NumberFormat(n,t),$f.set(e,s)),s}function Dr(n,t,e){return xS(t,e).format(n)}const Q_={values(n){return yt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const u=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),r=ES(n,e)}const o=Sn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Dr(n,s,l)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(Sn(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?Q_.numeric.call(this,n,t,e):""}};function ES(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var $a={formatters:Q_};function TS(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:$a.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const gs=Object.create(null),Ac=Object.create(null);function Qi(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function Ml(n,t,e){return typeof t=="string"?ur(Qi(n,t),e):ur(Qi(n,""),t)}class IS{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>Ol(i.backgroundColor),this.hoverBorderColor=(s,i)=>Ol(i.borderColor),this.hoverColor=(s,i)=>Ol(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Ml(this,t,e)}get(t){return Qi(this,t)}describe(t,e){return Ml(Ac,t,e)}override(t,e){return Ml(gs,t,e)}route(t,e,s,i){const r=Qi(this,t),o=Qi(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],u=o[i];return Q(l)?Object.assign({},u,l):G(l,u)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var vt=new IS({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[bS,wS,TS]);function AS(n){return!n||Y(n.size)||Y(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function ha(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function SS(n,t,e,s){s=s||{};let i=s.data=s.data||{},r=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},r=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let l,u,h,d,p;for(l=0;l<a;l++)if(d=e[l],d!=null&&!yt(d))o=ha(n,i,r,o,d);else if(yt(d))for(u=0,h=d.length;u<h;u++)p=d[u],p!=null&&!yt(p)&&(o=ha(n,i,r,o,p));n.restore();const m=r.length/2;if(m>e.length){for(l=0;l<m;l++)delete i[r[l]];r.splice(0,m)}return o}function Qn(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function zf(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Sc(n,t,e,s){J_(n,t,e,s,null)}function J_(n,t,e,s,i){let r,o,a,l,u,h,d,p;const m=t.pointStyle,_=t.rotation,y=t.radius;let b=(_||0)*aS;if(m&&typeof m=="object"&&(r=m.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(b),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(y)||y<=0)){switch(n.beginPath(),m){default:i?n.ellipse(e,s,i/2,y,0,0,gt):n.arc(e,s,y,0,gt),n.closePath();break;case"triangle":h=i?i/2:y,n.moveTo(e+Math.sin(b)*h,s-Math.cos(b)*y),b+=Mf,n.lineTo(e+Math.sin(b)*h,s-Math.cos(b)*y),b+=Mf,n.lineTo(e+Math.sin(b)*h,s-Math.cos(b)*y),n.closePath();break;case"rectRounded":u=y*.516,l=y-u,o=Math.cos(b+Xn)*l,d=Math.cos(b+Xn)*(i?i/2-u:l),a=Math.sin(b+Xn)*l,p=Math.sin(b+Xn)*(i?i/2-u:l),n.arc(e-d,s-a,u,b-st,b-Rt),n.arc(e+p,s-o,u,b-Rt,b),n.arc(e+d,s+a,u,b,b+Rt),n.arc(e-p,s+o,u,b+Rt,b+st),n.closePath();break;case"rect":if(!_){l=Math.SQRT1_2*y,h=i?i/2:l,n.rect(e-h,s-l,2*h,2*l);break}b+=Xn;case"rectRot":d=Math.cos(b)*(i?i/2:y),o=Math.cos(b)*y,a=Math.sin(b)*y,p=Math.sin(b)*(i?i/2:y),n.moveTo(e-d,s-a),n.lineTo(e+p,s-o),n.lineTo(e+d,s+a),n.lineTo(e-p,s+o),n.closePath();break;case"crossRot":b+=Xn;case"cross":d=Math.cos(b)*(i?i/2:y),o=Math.cos(b)*y,a=Math.sin(b)*y,p=Math.sin(b)*(i?i/2:y),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"star":d=Math.cos(b)*(i?i/2:y),o=Math.cos(b)*y,a=Math.sin(b)*y,p=Math.sin(b)*(i?i/2:y),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o),b+=Xn,d=Math.cos(b)*(i?i/2:y),o=Math.cos(b)*y,a=Math.sin(b)*y,p=Math.sin(b)*(i?i/2:y),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"line":o=i?i/2:Math.cos(b)*y,a=Math.sin(b)*y,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(b)*(i?i/2:y),s+Math.sin(b)*y);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function an(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function za(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function ja(n){n.restore()}function RS(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function kS(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function PS(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),Y(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function CS(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,u=e+r.actualBoundingBoxDescent,h=i.strikethrough?(l+u)/2:u;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function DS(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function ms(n,t,e,s,i,r={}){const o=yt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,u;for(n.save(),n.font=i.string,PS(n,r),l=0;l<o.length;++l)u=o[l],r.backdrop&&DS(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),Y(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(u,e,s,r.maxWidth)),n.fillText(u,e,s,r.maxWidth),CS(n,e,s,u,r),s+=Number(i.lineHeight);n.restore()}function fr(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*st,st,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,st,Rt,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,Rt,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-Rt,!0),n.lineTo(e+o.topLeft,s)}const OS=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,MS=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function LS(n,t){const e=(""+n).match(OS);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const NS=n=>+n||0;function Xu(n,t){const e={},s=Q(t),i=s?Object.keys(t):t,r=Q(n)?s?o=>G(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=NS(r(o));return e}function Z_(n){return Xu(n,{top:"y",right:"x",bottom:"y",left:"x"})}function as(n){return Xu(n,["topLeft","topRight","bottomLeft","bottomRight"])}function se(n){const t=Z_(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Vt(n,t){n=n||{},t=t||vt.font;let e=G(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=G(n.style,t.style);s&&!(""+s).match(MS)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:G(n.family,t.family),lineHeight:LS(G(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:G(n.weight,t.weight),string:""};return i.string=AS(i),i}function Vi(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function VS(n,t,e){const{min:s,max:i}=n,r=$_(t,(i-s)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function Wn(n,t){return Object.assign(Object.create(n),t)}function Qu(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=sy("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>Qu([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete n[0][l],!0},get(a,l){return ey(a,l,()=>WS(l,t,n,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,l){return Hf(a).includes(l)},ownKeys(a){return Hf(a)},set(a,l,u){const h=a._storage||(a._storage=i());return a[l]=h[l]=u,delete a._keys,!0}})}function ti(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:ty(n,s),setContext:r=>ti(n,r,e,s),override:r=>ti(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return ey(r,o,()=>BS(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function ty(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:$n(e)?e:()=>e,isIndexable:$n(s)?s:()=>s}}const FS=(n,t)=>n?n+Wu(t):t,Ju=(n,t)=>Q(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function ey(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function BS(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return $n(a)&&o.isScriptable(t)&&(a=US(t,a,n,e)),yt(a)&&a.length&&(a=$S(t,a,n,o.isIndexable)),Ju(t,a)&&(a=ti(a,i,r&&r[t],o)),a}function US(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let l=t(r,o||s);return a.delete(n),Ju(n,l)&&(l=Zu(i._scopes,i,n,l)),l}function $S(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(Q(t[0])){const l=t,u=i._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=Zu(u,i,n,h);t.push(ti(d,r,o&&o[n],a))}}return t}function ny(n,t,e){return $n(n)?n(t,e):n}const zS=(n,t)=>n===!0?t:typeof n=="string"?Un(t,n):void 0;function jS(n,t,e,s,i){for(const r of t){const o=zS(e,r);if(o){n.add(o);const a=ny(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function Zu(n,t,e,s){const i=t._rootScopes,r=ny(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let l=jf(a,o,e,r||e,s);return l===null||typeof r<"u"&&r!==e&&(l=jf(a,o,r,l,s),l===null)?!1:Qu(Array.from(a),[""],i,r,()=>HS(t,e,s))}function jf(n,t,e,s,i){for(;e;)e=jS(n,t,e,s,i);return e}function HS(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return yt(i)&&Q(e)?e:i||{}}function WS(n,t,e,s){let i;for(const r of t)if(i=sy(FS(r,n),e),typeof i<"u")return Ju(n,i)?Zu(e,s,n,i):i}function sy(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function Hf(n){let t=n._keys;return t||(t=n._keys=qS(n._scopes)),t}function qS(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function iy(n,t,e,s){const{iScale:i}=n,{key:r="r"}=this._parsing,o=new Array(s);let a,l,u,h;for(a=0,l=s;a<l;++a)u=a+e,h=t[u],o[a]={r:i.parse(Un(h,r),u)};return o}const GS=Number.EPSILON||1e-14,ei=(n,t)=>t<n.length&&!n[t].skip&&n[t],ry=n=>n==="x"?"y":"x";function KS(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=Ic(r,i),l=Ic(o,r);let u=a/(a+l),h=l/(a+l);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const d=s*u,p=s*h;return{previous:{x:r.x-d*(o.x-i.x),y:r.y-d*(o.y-i.y)},next:{x:r.x+p*(o.x-i.x),y:r.y+p*(o.y-i.y)}}}function YS(n,t,e){const s=n.length;let i,r,o,a,l,u=ei(n,0);for(let h=0;h<s-1;++h)if(l=u,u=ei(n,h+1),!(!l||!u)){if(Yi(t[h],0,GS)){e[h]=e[h+1]=0;continue}i=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=i*o*t[h],e[h+1]=r*o*t[h])}}function XS(n,t,e="x"){const s=ry(e),i=n.length;let r,o,a,l=ei(n,0);for(let u=0;u<i;++u){if(o=a,a=l,l=ei(n,u+1),!a)continue;const h=a[e],d=a[s];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${s}`]=d-r*t[u]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${s}`]=d+r*t[u])}}function QS(n,t="x"){const e=ry(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,l,u=ei(n,0);for(o=0;o<s;++o)if(a=l,l=u,u=ei(n,o+1),!!l){if(u){const h=u[t]-l[t];i[o]=h!==0?(u[e]-l[e])/h:0}r[o]=a?u?ze(i[o-1])!==ze(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}YS(n,i,r),XS(n,r,t)}function uo(n,t,e){return Math.max(Math.min(n,e),t)}function JS(n,t){let e,s,i,r,o,a=an(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&an(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=uo(i.cp1x,t.left,t.right),i.cp1y=uo(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=uo(i.cp2x,t.left,t.right),i.cp2y=uo(i.cp2y,t.top,t.bottom)))}function ZS(n,t,e,s,i){let r,o,a,l;if(t.spanGaps&&(n=n.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")QS(n,i);else{let u=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],l=KS(u,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,u=a}t.capBezierPoints&&JS(n,e)}function th(){return typeof window<"u"&&typeof document<"u"}function eh(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function da(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const Ha=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function tR(n,t){return Ha(n).getPropertyValue(t)}const eR=["top","right","bottom","left"];function ls(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=eR[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const nR=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function sR(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,l;if(nR(i,r,n.target))a=i,l=r;else{const u=t.getBoundingClientRect();a=s.clientX-u.left,l=s.clientY-u.top,o=!0}return{x:a,y:l,box:o}}function es(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=Ha(e),r=i.boxSizing==="border-box",o=ls(i,"padding"),a=ls(i,"border","width"),{x:l,y:u,box:h}=sR(n,e),d=o.left+(h&&a.left),p=o.top+(h&&a.top);let{width:m,height:_}=t;return r&&(m-=o.width+a.width,_-=o.height+a.height),{x:Math.round((l-d)/m*e.width/s),y:Math.round((u-p)/_*e.height/s)}}function iR(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&eh(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Ha(r),l=ls(a,"border","width"),u=ls(a,"padding");t=o.width-u.width-l.width,e=o.height-u.height-l.height,s=da(a.maxWidth,r,"clientWidth"),i=da(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||ua,maxHeight:i||ua}}const Rn=n=>Math.round(n*10)/10;function rR(n,t,e,s){const i=Ha(n),r=ls(i,"margin"),o=da(i.maxWidth,n,"clientWidth")||ua,a=da(i.maxHeight,n,"clientHeight")||ua,l=iR(n,t,e);let{width:u,height:h}=l;if(i.boxSizing==="content-box"){const p=ls(i,"border","width"),m=ls(i,"padding");u-=m.width+p.width,h-=m.height+p.height}return u=Math.max(0,u-r.width),h=Math.max(0,s?u/s:h-r.height),u=Rn(Math.min(u,o,l.maxWidth)),h=Rn(Math.min(h,a,l.maxHeight)),u&&!h&&(h=Rn(u/2)),(t!==void 0||e!==void 0)&&s&&l.height&&h>l.height&&(h=l.height,u=Rn(Math.floor(h*s))),{width:u,height:h}}function Wf(n,t,e){const s=t||1,i=Rn(n.height*s),r=Rn(n.width*s);n.height=Rn(n.height),n.width=Rn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const oR=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};th()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function qf(n,t){const e=tR(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function ns(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function aR(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function lR(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=ns(n,i,e),a=ns(i,r,e),l=ns(r,t,e),u=ns(o,a,e),h=ns(a,l,e);return ns(u,h,e)}const cR=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},uR=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function js(n,t,e){return n?cR(t,e):uR()}function oy(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function ay(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function ly(n){return n==="angle"?{between:dr,compare:hS,normalize:Zt}:{between:rn,compare:(t,e)=>t-e,normalize:t=>t}}function Gf({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function hR(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=ly(s),l=t.length;let{start:u,end:h,loop:d}=n,p,m;if(d){for(u+=l,h+=l,p=0,m=l;p<m&&o(a(t[u%l][s]),i,r);++p)u--,h--;u%=l,h%=l}return h<u&&(h+=l),{start:u,end:h,loop:d,style:n.style}}function cy(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:l,normalize:u}=ly(s),{start:h,end:d,loop:p,style:m}=hR(n,t,e),_=[];let y=!1,b=null,A,R,C;const D=()=>l(i,C,A)&&a(i,C)!==0,M=()=>a(r,A)===0||l(r,C,A),L=()=>y||D(),E=()=>!y||M();for(let w=h,x=h;w<=d;++w)R=t[w%o],!R.skip&&(A=u(R[s]),A!==C&&(y=l(A,i,r),b===null&&L()&&(b=a(A,i)===0?w:x),b!==null&&E()&&(_.push(Gf({start:b,end:w,loop:p,count:o,style:m})),b=null),x=w,C=A));return b!==null&&_.push(Gf({start:b,end:d,loop:p,count:o,style:m})),_}function uy(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=cy(s[i],n.points,t);r.length&&e.push(...r)}return e}function dR(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function fR(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],l;for(l=t+1;l<=e;++l){const u=n[l%i];u.skip||u.stop?a.skip||(s=!1,r.push({start:t%i,end:(l-1)%i,loop:s}),t=o=u.stop?l:null):(o=l,a.skip&&(t=l)),a=u}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function pR(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=dR(e,i,r,s);if(s===!0)return Kf(n,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+i:a,u=!!n._fullLoop&&o===0&&a===i-1;return Kf(n,fR(e,o,l,u),e,t)}function Kf(n,t,e,s){return!s||!s.setContext||!e?t:gR(n,t,e,s)}function gR(n,t,e,s){const i=n._chart.getContext(),r=Yf(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,l=e.length,u=[];let h=r,d=t[0].start,p=d;function m(_,y,b,A){const R=a?-1:1;if(_!==y){for(_+=l;e[_%l].skip;)_-=R;for(;e[y%l].skip;)y+=R;_%l!==y%l&&(u.push({start:_%l,end:y%l,loop:b,style:A}),h=A,d=y%l)}}for(const _ of t){d=a?d:_.start;let y=e[d%l],b;for(p=d+1;p<=_.end;p++){const A=e[p%l];b=Yf(s.setContext(Wn(i,{type:"segment",p0:y,p1:A,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:o}))),mR(b,h)&&m(d,p-1,_.loop,h),y=A,h=b}d<p-1&&m(d,p-1,_.loop,h)}return u}function Yf(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function mR(n,t){if(!t)return!1;const e=[],s=function(i,r){return Yu(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function ho(n,t,e){return n.options.clip?n[e]:t[e]}function _R(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:ho(e,t,"left"),right:ho(e,t,"right"),top:ho(s,t,"top"),bottom:ho(s,t,"bottom")}:t}function hy(n,t){const e=t._clip;if(e.disabled)return!1;const s=_R(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class yR{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=G_.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Qe=new yR;const Xf="transparent",vR={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=Uf(n||Xf),i=s.valid&&Uf(t||Xf);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class bR{constructor(t,e,s,i){const r=e[s];i=Vi([t.to,i,r,t.from]);const o=Vi([t.from,r,i]);this._active=!0,this._fn=t.fn||vR[t.type||typeof o],this._easing=Xi[t.easing]||Xi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=Vi([t.to,e,i,t.from]),this._from=Vi([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}l=e/s%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class dy{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Q(t))return;const e=Object.keys(vt.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!Q(r))return;const o={};for(const a of e)o[a]=r[a];(yt(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=xR(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&wR(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const u=o[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(t,e));continue}const h=e[u];let d=r[u];const p=s.get(u);if(d)if(p&&d.active()){d.update(p,h,a);continue}else d.cancel();if(!p||!p.duration){t[u]=h;continue}r[u]=d=new bR(p,t,u,h),i.push(d)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return Qe.add(this._chart,s),!0}}function wR(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function xR(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Qf(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function ER(n,t,e){if(e===!1)return!1;const s=Qf(n,e),i=Qf(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function TR(n){let t,e,s,i;return Q(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function fy(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function Jf(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,l,u;if(t===null)return;let h=!1;for(o=0,a=i.length;o<a;++o){if(l=+i[o],l===e){if(h=!0,s.all)continue;break}u=n.values[l],It(u)&&(r||t===0||ze(t)===ze(u))&&(t+=u)}return!h&&!s.all?0:t}function IR(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let l,u,h;for(l=0,u=o.length;l<u;++l)h=o[l],a[l]={[i]:h,[r]:n[h]};return a}function Ll(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function AR(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function SR(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function RR(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function Zf(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function tp(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,l=r.axis,u=o.axis,h=AR(r,o,s),d=t.length;let p;for(let m=0;m<d;++m){const _=t[m],{[l]:y,[u]:b}=_,A=_._stacks||(_._stacks={});p=A[u]=RR(i,h,y),p[a]=b,p._top=Zf(p,o,!0,s.type),p._bottom=Zf(p,o,!1,s.type);const R=p._visualValues||(p._visualValues={});R[a]=b}}function Nl(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function kR(n,t){return Wn(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function PR(n,t,e){return Wn(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Ei(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const Vl=n=>n==="reset"||n==="none",ep=(n,t)=>t?n:Object.assign({},n),CR=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:fy(e,!0),values:null};class Se{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Ll(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Ei(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(d,p,m,_)=>d==="x"?p:d==="r"?_:m,r=e.xAxisID=G(s.xAxisID,Nl(t,"x")),o=e.yAxisID=G(s.yAxisID,Nl(t,"y")),a=e.rAxisID=G(s.rAxisID,Nl(t,"r")),l=e.indexAxis,u=e.iAxisID=i(l,r,o,a),h=e.vAxisID=i(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(u),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Vf(this._data,this),t._stacked&&Ei(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(Q(e)){const i=this._cachedMeta;this._data=IR(e,i)}else if(s!==e){if(s){Vf(s,this);const i=this._cachedMeta;Ei(i),i._parsed=[]}e&&Object.isExtensible(e)&&gS(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=Ll(e.vScale,e),e.stack!==s.stack&&(i=!0,Ei(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(tp(this,e._parsed),e._stacked=Ll(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let l=t===0&&e===i.length?!0:s._sorted,u=t>0&&s._parsed[t-1],h,d,p;if(this._parsing===!1)s._parsed=i,s._sorted=!0,p=i;else{yt(i[t])?p=this.parseArrayData(s,i,t,e):Q(i[t])?p=this.parseObjectData(s,i,t,e):p=this.parsePrimitiveData(s,i,t,e);const m=()=>d[a]===null||u&&d[a]<u[a];for(h=0;h<e;++h)s._parsed[h+t]=d=p[h],l&&(m()&&(l=!1),u=d);s._sorted=l}o&&tp(this,p)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,u=r.getLabels(),h=r===o,d=new Array(i);let p,m,_;for(p=0,m=i;p<m;++p)_=p+s,d[p]={[a]:h||r.parse(u[_],_),[l]:o.parse(e[_],_)};return d}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let l,u,h,d;for(l=0,u=i;l<u;++l)h=l+s,d=e[h],a[l]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let h,d,p,m;for(h=0,d=i;h<d;++h)p=h+s,m=e[p],u[h]={x:r.parse(Un(m,a),p),y:o.parse(Un(m,l),p)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:fy(i,!0),values:e._stacks[t.axis]._visualValues};return Jf(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=Jf(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),l=CR(e,s,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=SR(a);let p,m;function _(){m=i[p];const y=m[a.axis];return!It(m[t.axis])||h>y||d<y}for(p=0;p<o&&!(!_()&&(this.updateRangeFromParsed(u,t,m,l),r));++p);if(r){for(p=o-1;p>=0;--p)if(!_()){this.updateRangeFromParsed(u,t,m,l);break}}return u}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],It(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=TR(G(this.options.clip,ER(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||i.length-a,u=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const d=i[h];d.hidden||(d.active&&u?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=PR(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=kR(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&hr(s);if(a)return ep(a,l);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,t),d=i?[`${t}Hover`,"hover",t,""]:[t,""],p=u.getOptionScopes(this.getDataset(),h),m=Object.keys(vt.elements[t]),_=()=>this.getContext(s,i,e),y=u.resolveNamedOptions(p,m,_,d);return y.$shared&&(y.$shared=l,r[o]=Object.freeze(ep(y,l))),y}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(i.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),p=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(p,this.getContext(t,s,e))}const u=new dy(i,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Vl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){Vl(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!Vl(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,l,u]of this._syncList)this[a](l,u);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const l=u=>{for(u.length+=e,a=u.length-1;a>=o;a--)u[a]=u[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&Ei(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}B(Se,"defaults",{}),B(Se,"datasetElementType",null),B(Se,"dataElementType",null);function DR(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=q_(s.sort((i,r)=>i-r))}return n._cache.$bar}function OR(n){const t=n.iScale,e=DR(t,n.type);let s=t._length,i,r,o,a;const l=()=>{o===32767||o===-32768||(hr(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),l();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),l();return s}function MR(n,t,e,s){const i=e.barThickness;let r,o;return Y(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function LR(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const u=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/s,ratio:e.barPercentage,start:u}}function NR(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let l=o,u=a;Math.abs(o)>Math.abs(a)&&(l=a,u=o),t[e.axis]=u,t._custom={barStart:l,barEnd:u,start:i,end:r,min:o,max:a}}function py(n,t,e,s){return yt(n)?NR(n,t,e,s):t[e.axis]=e.parse(n,s),t}function np(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,l=[];let u,h,d,p;for(u=e,h=e+s;u<h;++u)p=t[u],d={},d[i.axis]=a||i.parse(o[u],u),l.push(py(p,d,r,u));return l}function Fl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function VR(n,t,e){return n!==0?ze(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function FR(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function BR(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:u,bottom:h}=FR(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=u:(e._bottom||0)===s?i=h:(r[sp(h,o,a,l)]=!0,i=u)),r[sp(i,o,a,l)]=!0,n.borderSkipped=r}function sp(n,t,e,s){return s?(n=UR(n,t,e),n=ip(n,e,t)):n=ip(n,t,e),n}function UR(n,t,e){return n===t?e:n===e?t:n}function ip(n,t,e){return n==="start"?t:n==="end"?e:n}function $R(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Mo extends Se{parsePrimitiveData(t,e,s,i){return np(t,e,s,i)}parseArrayData(t,e,s,i){return np(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=r.axis==="x"?a:l,h=o.axis==="x"?a:l,d=[];let p,m,_,y;for(p=s,m=s+i;p<m;++p)y=e[p],_={},_[r.axis]=r.parse(Un(y,u),p),d.push(py(Un(y,h),_,o,p));return d}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=Fl(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),u=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:p}=this._getSharedOptions(e,i);for(let m=e;m<e+s;m++){const _=this.getParsed(m),y=r||Y(_[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(m),b=this._calculateBarIndexPixels(m,h),A=(_._stacks||{})[a.axis],R={horizontal:u,base:y.base,enableBorderRadius:!A||Fl(_._custom)||o===A._top||o===A._bottom,x:u?y.head:b.center,y:u?b.center:y.head,height:u?b.size:Math.abs(y.size),width:u?Math.abs(y.size):b.size};p&&(R.options=d||this.resolveDataElementOptions(m,t[m].active?"active":i));const C=R.options||t[m].options;BR(R,C,A,o),$R(R,C,h.ratio),this.updateElement(t[m],m,R,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[s.axis],u=h=>{const d=h._parsed.find(m=>m[s.axis]===l),p=d&&d[h.vScale.axis];if(Y(p)||isNaN(p))return!0};for(const h of i)if(!(e!==void 0&&u(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[G(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||OR(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),u=l._custom,h=Fl(u);let d=l[e.axis],p=0,m=s?this.applyStack(e,l,s):d,_,y;m!==d&&(p=m-d,m=d),h&&(d=u.barStart,m=u.barEnd-u.barStart,d!==0&&ze(d)!==ze(u.barEnd)&&(p=0),p+=d);const b=!Y(r)&&!h?r:p;let A=e.getPixelForValue(b);if(this.chart.getDataVisibility(t)?_=e.getPixelForValue(p+m):_=A,y=_-A,Math.abs(y)<o){y=VR(y,e,a)*o,d===a&&(A-=y/2);const R=e.getPixelForDecimal(0),C=e.getPixelForDecimal(1),D=Math.min(R,C),M=Math.max(R,C);A=Math.max(Math.min(A,M),D),_=A+y,s&&!h&&(l._stacks[e.axis]._visualValues[i]=e.getValueForPixel(_)-e.getValueForPixel(A))}if(A===e.getPixelForValue(a)){const R=ze(y)*e.getLineWidthForValue(a)/2;A+=R,y-=R}return{size:y,base:A,head:_,center:_+y/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=G(i.maxBarThickness,1/0);let a,l;const u=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,d=i.barThickness==="flex"?LR(t,e,i,h*u):MR(t,e,i,h*u),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(G(p,this.getFirstScaleIdForIndexAxis())),_=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+m;a=d.start+d.chunk*_+d.chunk/2,l=Math.min(o,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}B(Mo,"id","bar"),B(Mo,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),B(Mo,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Lo extends Se{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const r=super.parsePrimitiveData(t,e,s,i);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+s).radius;return r}parseArrayData(t,e,s,i){const r=super.parseArrayData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a[2],this.resolveDataElementOptions(o+s).radius)}return r}parseObjectData(t,e,s,i){const r=super.parseObjectData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),l=r.getLabelForValue(o.y),u=o._custom;return{label:s[t]||"",value:"("+a+", "+l+(u?", "+u:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(e,i),h=o.axis,d=a.axis;for(let p=e;p<e+s;p++){const m=t[p],_=!r&&this.getParsed(p),y={},b=y[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(_[h]),A=y[d]=r?a.getBasePixel():a.getPixelForValue(_[d]);y.skip=isNaN(b)||isNaN(A),u&&(y.options=l||this.resolveDataElementOptions(p,m.active?"active":i),r&&(y.options.radius=0)),this.updateElement(m,p,y,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return e!=="active"&&(i.radius=0),i.radius+=G(s&&s._custom,r),i}}B(Lo,"id","bubble"),B(Lo,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),B(Lo,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function zR(n,t,e){let s=1,i=1,r=0,o=0;if(t<gt){const a=n,l=a+t,u=Math.cos(a),h=Math.sin(a),d=Math.cos(l),p=Math.sin(l),m=(C,D,M)=>dr(C,a,l,!0)?1:Math.max(D,D*e,M,M*e),_=(C,D,M)=>dr(C,a,l,!0)?-1:Math.min(D,D*e,M,M*e),y=m(0,u,d),b=m(Rt,h,p),A=_(st,u,d),R=_(st+Rt,h,p);s=(y-A)/2,i=(b-R)/2,r=-(y+A)/2,o=-(b+R)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class is extends Se{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=l=>+s[l];if(Q(s[t])){const{key:l="value"}=this._parsing;r=u=>+Un(s[u],l)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return Ae(this.options.rotation-90)}_getCircumference(){return Ae(this.options.circumference)}_getRotationExtents(){let t=gt,e=-gt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),l=Math.min(tS(this.options.cutout,a),1),u=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:p,ratioY:m,offsetX:_,offsetY:y}=zR(d,h,l),b=(s.width-o)/p,A=(s.height-o)/m,R=Math.max(Math.min(b,A)/2,0),C=$_(this.options.radius,R),D=Math.max(C*l,0),M=(C-D)/this._getVisibleDatasetWeightTotal();this.offsetX=_*C,this.offsetY=y*C,i.total=this.calculateTotal(),this.outerRadius=C-M*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-M*u,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/gt)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,u=o.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,p=r&&u.animateScale,m=p?0:this.innerRadius,_=p?0:this.outerRadius,{sharedOptions:y,includeOptions:b}=this._getSharedOptions(e,i);let A=this._getRotation(),R;for(R=0;R<e;++R)A+=this._circumference(R,r);for(R=e;R<e+s;++R){const C=this._circumference(R,r),D=t[R],M={x:h+this.offsetX,y:d+this.offsetY,startAngle:A,endAngle:A+C,circumference:C,outerRadius:_,innerRadius:m};b&&(M.options=y||this.resolveDataElementOptions(R,D.active?"active":i)),A+=C,this.updateElement(D,R,M,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?gt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=Dr(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,l;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)l=a.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(G(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}B(is,"id","doughnut"),B(is,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),B(is,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),B(is,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,u)=>{const d=t.getDatasetMeta(0).controller.getStyle(u);return{text:l,fillStyle:d.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(u),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||d.borderRadius),index:u}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class No extends Se{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=Y_(e,i,o);this._drawStart=a,this._drawCount=l,X_(e)&&(a=0,l=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:u},t),this.updateElements(i,a,l,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,i),p=o.axis,m=a.axis,{spanGaps:_,segment:y}=this.options,b=Zs(_)?_:Number.POSITIVE_INFINITY,A=this.chart._animationsDisabled||r||i==="none",R=e+s,C=t.length;let D=e>0&&this.getParsed(e-1);for(let M=0;M<C;++M){const L=t[M],E=A?L:{};if(M<e||M>=R){E.skip=!0;continue}const w=this.getParsed(M),x=Y(w[m]),I=E[p]=o.getPixelForValue(w[p],M),S=E[m]=r||x?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,w,l):w[m],M);E.skip=isNaN(I)||isNaN(S)||x,E.stop=M>0&&Math.abs(w[p]-D[p])>b,y&&(E.parsed=w,E.raw=u.data[M]),d&&(E.options=h||this.resolveDataElementOptions(M,L.active?"active":i)),A||this.updateElement(L,M,E,i),D=w}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}B(No,"id","line"),B(No,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),B(No,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Ji extends Se{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=Dr(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:r}}parseObjectData(t,e,s,i){return iy.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const r=this.getParsed(i).r;!isNaN(r)&&this.chart.getDataVisibility(i)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(i/2,0),o=Math.max(s.cutoutPercentage?r/100*s.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,l=o.options.animation,u=this._cachedMeta.rScale,h=u.xCenter,d=u.yCenter,p=u.getIndexAngle(0)-.5*st;let m=p,_;const y=360/this.countVisibleElements();for(_=0;_<e;++_)m+=this._computeAngle(_,i,y);for(_=e;_<e+s;_++){const b=t[_];let A=m,R=m+this._computeAngle(_,i,y),C=o.getDataVisibility(_)?u.getDistanceFromCenterForValue(this.getParsed(_).r):0;m=R,r&&(l.animateScale&&(C=0),l.animateRotate&&(A=R=p));const D={x:h,y:d,innerRadius:0,outerRadius:C,startAngle:A,endAngle:R,options:this.resolveDataElementOptions(_,b.active?"active":i)};this.updateElement(b,_,D,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?Ae(this.resolveDataElementOptions(t,e).angle||s):0}}B(Ji,"id","polarArea"),B(Ji,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),B(Ji,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const l=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Rc extends is{}B(Rc,"id","pie"),B(Rc,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Vo extends Se{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return iy.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],r=e.iScale.getLabels();if(s.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===i.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const r=this._cachedMeta.rScale,o=i==="reset";for(let a=e;a<e+s;a++){const l=t[a],u=this.resolveDataElementOptions(a,l.active?"active":i),h=r.getPointPositionForValue(a,this.getParsed(a).r),d=o?r.xCenter:h.x,p=o?r.yCenter:h.y,m={x:d,y:p,angle:h.angle,skip:isNaN(d)||isNaN(p),options:u};this.updateElement(l,a,m,i)}}}B(Vo,"id","radar"),B(Vo,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),B(Vo,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Fo extends Se{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=Y_(e,s,i);if(this._drawStart=r,this._drawCount=o,X_(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=s;const u=this.resolveDatasetElementOptions(t);u.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:u},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,h=this.resolveDataElementOptions(e,i),d=this.getSharedOptions(h),p=this.includeOptions(i,d),m=o.axis,_=a.axis,{spanGaps:y,segment:b}=this.options,A=Zs(y)?y:Number.POSITIVE_INFINITY,R=this.chart._animationsDisabled||r||i==="none";let C=e>0&&this.getParsed(e-1);for(let D=e;D<e+s;++D){const M=t[D],L=this.getParsed(D),E=R?M:{},w=Y(L[_]),x=E[m]=o.getPixelForValue(L[m],D),I=E[_]=r||w?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,L,l):L[_],D);E.skip=isNaN(x)||isNaN(I)||w,E.stop=D>0&&Math.abs(L[m]-C[m])>A,b&&(E.parsed=L,E.raw=u.data[D]),p&&(E.options=d||this.resolveDataElementOptions(D,M.active?"active":i)),R||this.updateElement(M,D,E,i),C=L}this.updateSharedOptions(d,i,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}B(Fo,"id","scatter"),B(Fo,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),B(Fo,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var jR=Object.freeze({__proto__:null,BarController:Mo,BubbleController:Lo,DoughnutController:is,LineController:No,PieController:Rc,PolarAreaController:Ji,RadarController:Vo,ScatterController:Fo});function Jn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class nh{constructor(t){B(this,"options");this.options=t||{}}static override(t){Object.assign(nh.prototype,t)}init(){}formats(){return Jn()}parse(){return Jn()}format(){return Jn()}add(){return Jn()}diff(){return Jn()}startOf(){return Jn()}endOf(){return Jn()}}var HR={_date:nh};function WR(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const u=a._reversePixels?fS:on;if(s){if(i._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const p=u(r,t,e-d),m=u(r,t,e+d);return{lo:p.lo,hi:m.hi}}}}else{const h=u(r,t,e);if(l){const{vScale:d}=i._cachedMeta,{_parsed:p}=n,m=p.slice(0,h.lo+1).reverse().findIndex(y=>!Y(y[d.axis]));h.lo-=Math.max(0,m);const _=p.slice(h.hi).findIndex(y=>!Y(y[d.axis]));h.hi+=Math.max(0,_)}return h}}return{lo:0,hi:r.length-1}}function Wa(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:u,data:h}=r[a],{lo:d,hi:p}=WR(r[a],t,o,i);for(let m=d;m<=p;++m){const _=h[m];_.skip||s(_,u,m)}}}function qR(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Bl(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||Wa(n,e,t,function(a,l,u){!i&&!an(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:l,index:u})},!0),r}function GR(n,t,e,s){let i=[];function r(o,a,l){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],s),{angle:d}=H_(o,{x:t.x,y:t.y});dr(d,u,h)&&i.push({element:o,datasetIndex:a,index:l})}return Wa(n,e,t,r),i}function KR(n,t,e,s,i,r){let o=[];const a=qR(e);let l=Number.POSITIVE_INFINITY;function u(h,d,p){const m=h.inRange(t.x,t.y,i);if(s&&!m)return;const _=h.getCenterPoint(i);if(!(!!r||n.isPointInArea(_))&&!m)return;const b=a(t,_);b<l?(o=[{element:h,datasetIndex:d,index:p}],l=b):b===l&&o.push({element:h,datasetIndex:d,index:p})}return Wa(n,e,t,u),o}function Ul(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?GR(n,t,e,i):KR(n,t,e,s,i,r)}function rp(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Wa(n,e,t,(l,u,h)=>{l[o]&&l[o](t[e],i)&&(r.push({element:l,datasetIndex:u,index:h}),a=a||l.inRange(t.x,t.y,i))}),s&&!a?[]:r}var YR={modes:{index(n,t,e,s){const i=es(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Bl(n,i,r,s,o):Ul(n,i,r,!1,s,o),l=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,d=u.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:u.index,index:h})}),l):[]},dataset(n,t,e,s){const i=es(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Bl(n,i,r,s,o):Ul(n,i,r,!1,s,o);if(a.length>0){const l=a[0].datasetIndex,u=n.getDatasetMeta(l).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:l,index:h})}return a},point(n,t,e,s){const i=es(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Bl(n,i,r,s,o)},nearest(n,t,e,s){const i=es(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Ul(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=es(t,n);return rp(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=es(t,n);return rp(n,i,"y",e.intersect,s)}}};const gy=["left","top","right","bottom"];function Ti(n,t){return n.filter(e=>e.pos===t)}function op(n,t){return n.filter(e=>gy.indexOf(e.pos)===-1&&e.box.axis===t)}function Ii(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function XR(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function QR(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!gy.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function JR(n,t){const e=QR(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:l}=a.box,u=e[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*s:l&&t.availableWidth,a.height=i):(a.width=s,a.height=h?h*i:l&&t.availableHeight)}return e}function ZR(n){const t=XR(n),e=Ii(t.filter(u=>u.box.fullSize),!0),s=Ii(Ti(t,"left"),!0),i=Ii(Ti(t,"right")),r=Ii(Ti(t,"top"),!0),o=Ii(Ti(t,"bottom")),a=op(t,"x"),l=op(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(l).concat(o).concat(a),chartArea:Ti(t,"chartArea"),vertical:s.concat(i).concat(l),horizontal:r.concat(o).concat(a)}}function ap(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function my(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function tk(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!Q(i)){e.size&&(n[i]-=e.size);const d=s[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?r.height:r.width),e.size=d.size/d.count,n[i]+=e.size}r.getPadding&&my(o,r.getPadding());const a=Math.max(0,t.outerWidth-ap(o,n,"left","right")),l=Math.max(0,t.outerHeight-ap(o,n,"top","bottom")),u=a!==n.w,h=l!==n.h;return n.w=a,n.h=l,e.horizontal?{same:u,other:h}:{same:h,other:u}}function ek(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function nk(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function Fi(n,t,e,s){const i=[];let r,o,a,l,u,h;for(r=0,o=n.length,u=0;r<o;++r){a=n[r],l=a.box,l.update(a.width||t.w,a.height||t.h,nk(a.horizontal,t));const{same:d,other:p}=tk(t,e,a,s);u|=d&&i.length,h=h||p,l.fullSize||i.push(a)}return u&&Fi(i,t,e,s)||h}function fo(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function lp(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const l=a.box,u=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const d=t.w*h,p=u.size||l.height;hr(u.start)&&(o=u.start),l.fullSize?fo(l,i.left,o,e.outerWidth-i.right-i.left,p):fo(l,t.left+u.placed,o,d,p),u.start=o,u.placed+=d,o=l.bottom}else{const d=t.h*h,p=u.size||l.width;hr(u.start)&&(r=u.start),l.fullSize?fo(l,r,i.top,p,e.outerHeight-i.bottom-i.top):fo(l,r,t.top+u.placed,p,d),u.start=r,u.placed+=d,r=l.right}}t.x=r,t.y=o}var ee={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=se(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=ZR(n.boxes),l=a.vertical,u=a.horizontal;it(n.boxes,y=>{typeof y.beforeLayout=="function"&&y.beforeLayout()});const h=l.reduce((y,b)=>b.box.options&&b.box.options.display===!1?y:y+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),p=Object.assign({},i);my(p,se(s));const m=Object.assign({maxPadding:p,w:r,h:o,x:i.left,y:i.top},i),_=JR(l.concat(u),d);Fi(a.fullSize,m,d,_),Fi(l,m,d,_),Fi(u,m,d,_)&&Fi(l,m,d,_),ek(m),lp(a.leftAndTop,m,d,_),m.x+=m.w,m.y+=m.h,lp(a.rightAndBottom,m,d,_),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},it(a.chartArea,y=>{const b=y.box;Object.assign(b,n.chartArea),b.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class _y{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class sk extends _y{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Bo="$chartjs",ik={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},cp=n=>n===null||n==="";function rk(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[Bo]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",cp(i)){const r=qf(n,"width");r!==void 0&&(n.width=r)}if(cp(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=qf(n,"height");r!==void 0&&(n.height=r)}return n}const yy=oR?{passive:!0}:!1;function ok(n,t,e){n&&n.addEventListener(t,e,yy)}function ak(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,yy)}function lk(n,t){const e=ik[n.type]||n.type,{x:s,y:i}=es(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function fa(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function ck(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||fa(a.addedNodes,s),o=o&&!fa(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function uk(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||fa(a.removedNodes,s),o=o&&!fa(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const pr=new Map;let up=0;function vy(){const n=window.devicePixelRatio;n!==up&&(up=n,pr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function hk(n,t){pr.size||window.addEventListener("resize",vy),pr.set(n,t)}function dk(n){pr.delete(n),pr.size||window.removeEventListener("resize",vy)}function fk(n,t,e){const s=n.canvas,i=s&&eh(s);if(!i)return;const r=K_((a,l)=>{const u=i.clientWidth;e(a,l),u<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],u=l.contentRect.width,h=l.contentRect.height;u===0&&h===0||r(u,h)});return o.observe(i),hk(n,r),o}function $l(n,t,e){e&&e.disconnect(),t==="resize"&&dk(n)}function pk(n,t,e){const s=n.canvas,i=K_(r=>{n.ctx!==null&&e(lk(r,n))},n);return ok(s,t,i),i}class gk extends _y{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(rk(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Bo])return!1;const s=e[Bo].initial;["height","width"].forEach(r=>{const o=s[r];Y(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[Bo],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:ck,detach:uk,resize:fk}[e]||pk;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:$l,detach:$l,resize:$l}[e]||ak)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return rR(t,e,s,i)}isAttached(t){const e=t&&eh(t);return!!(e&&e.isConnected)}}function mk(n){return!th()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?sk:gk}class De{constructor(){B(this,"x");B(this,"y");B(this,"active",!1);B(this,"options");B(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Zs(this.x)&&Zs(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}B(De,"defaults",{}),B(De,"defaultRoutes");function _k(n,t){const e=n.options.ticks,s=yk(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?bk(t):[],o=r.length,a=r[0],l=r[o-1],u=[];if(o>i)return wk(t,u,r,o/i),u;const h=vk(r,t,i);if(o>0){let d,p;const m=o>1?Math.round((l-a)/(o-1)):null;for(po(t,u,h,Y(m)?0:a-m,a),d=0,p=o-1;d<p;d++)po(t,u,h,r[d],r[d+1]);return po(t,u,h,l,Y(m)?t.length:l+m),u}return po(t,u,h),u}function yk(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function vk(n,t,e){const s=xk(n),i=t.length/e;if(!s)return Math.max(i,1);const r=lS(s);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>i)return l}return Math.max(i,1)}function bk(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function wk(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function po(n,t,e,s,i){const r=G(s,0),o=Math.min(G(i,n.length),n.length);let a=0,l,u,h;for(e=Math.ceil(e),i&&(l=i-s,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(u=Math.max(r,0);u<o;u++)u===h&&(t.push(n[u]),a++,h=Math.round(r+a*e))}function xk(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const Ek=n=>n==="left"?"right":n==="right"?"left":n,hp=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,dp=(n,t)=>Math.min(t||n,n);function fp(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function Tk(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let l=n.getPixelForTick(i),u;if(!(e&&(s===1?u=Math.max(l-r,o-l):t===0?u=(n.getPixelForTick(1)-l)/2:u=(l-n.getPixelForTick(i-1))/2,l+=i<t?u:-u,l<r-a||l>o+a)))return l}function Ik(n,t){it(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function Ai(n){return n.drawTicks?n.tickLength:0}function pp(n,t){if(!n.display)return 0;const e=Vt(n.font,t),s=se(n.padding);return(yt(n.text)?n.text.length:1)*e.lineHeight+s.height}function Ak(n,t){return Wn(n,{scale:t,type:"scale"})}function Sk(n,t,e){return Wn(n,{tick:e,index:t,type:"tick"})}function Rk(n,t,e){let s=Ku(n);return(e&&t!=="right"||!e&&t==="right")&&(s=Ek(s)),s}function kk(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:l}=n,{chartArea:u,scales:h}=l;let d=0,p,m,_;const y=o-i,b=a-r;if(n.isHorizontal()){if(m=Qt(s,r,a),Q(e)){const A=Object.keys(e)[0],R=e[A];_=h[A].getPixelForValue(R)+y-t}else e==="center"?_=(u.bottom+u.top)/2+y-t:_=hp(n,e,t);p=a-r}else{if(Q(e)){const A=Object.keys(e)[0],R=e[A];m=h[A].getPixelForValue(R)-b+t}else e==="center"?m=(u.left+u.right)/2-b+t:m=hp(n,e,t);_=Qt(s,o,i),d=e==="left"?-Rt:Rt}return{titleX:m,titleY:_,maxWidth:p,rotation:d}}class xs extends De{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=me(t,Number.POSITIVE_INFINITY),e=me(e,Number.NEGATIVE_INFINITY),s=me(s,Number.POSITIVE_INFINITY),i=me(i,Number.NEGATIVE_INFINITY),{min:me(t,s),max:me(e,i),minDefined:It(t),maxDefined:It(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let l=0,u=a.length;l<u;++l)o=a[l].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:me(e,me(s,e)),max:me(s,me(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ht(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=VS(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?fp(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=_k(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ht(this.options.afterUpdate,[this])}beforeSetDimensions(){ht(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ht(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ht(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ht(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=ht(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){ht(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ht(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=dp(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,l,u;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const h=this._getLabelSizes(),d=h.widest.width,p=h.highest.height,m=Ut(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),d+6>a&&(a=m/(s-(t.offset?.5:1)),l=this.maxHeight-Ai(t.grid)-e.padding-pp(t.title,this.chart.options.font),u=Math.sqrt(d*d+p*p),o=qu(Math.min(Math.asin(Ut((h.highest.height+6)/a,-1,1)),Math.asin(Ut(l/u,-1,1))-Math.asin(Ut(p/u,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){ht(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ht(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=pp(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ai(r)+l):(t.height=this.maxHeight,t.width=Ai(r)+l),s.display&&this.ticks.length){const{first:u,last:h,widest:d,highest:p}=this._getLabelSizes(),m=s.padding*2,_=Ae(this.labelRotation),y=Math.cos(_),b=Math.sin(_);if(a){const A=s.mirror?0:b*d.width+y*p.height;t.height=Math.min(this.maxHeight,t.height+A+m)}else{const A=s.mirror?0:y*d.width+b*p.height;t.width=Math.min(this.maxWidth,t.width+A+m)}this._calculatePadding(u,h,b,y)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,m=0;l?u?(p=i*t.width,m=s*e.height):(p=s*t.height,m=i*e.width):r==="start"?m=e.width:r==="end"?p=t.width:r!=="inner"&&(p=t.width/2,m=e.width/2),this.paddingLeft=Math.max((p-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((m-d+o)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=e.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ht(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)Y(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=fp(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/dp(e,s));let u=0,h=0,d,p,m,_,y,b,A,R,C,D,M;for(d=0;d<e;d+=l){if(_=t[d].label,y=this._resolveTickFontOptions(d),i.font=b=y.string,A=r[b]=r[b]||{data:{},gc:[]},R=y.lineHeight,C=D=0,!Y(_)&&!yt(_))C=ha(i,A.data,A.gc,C,_),D=R;else if(yt(_))for(p=0,m=_.length;p<m;++p)M=_[p],!Y(M)&&!yt(M)&&(C=ha(i,A.data,A.gc,C,M),D+=R);o.push(C),a.push(D),u=Math.max(C,u),h=Math.max(D,h)}Ik(r,e);const L=o.indexOf(u),E=a.indexOf(h),w=x=>({width:o[x]||0,height:a[x]||0});return{first:w(0),last:w(e-1),widest:w(L),highest:w(E),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return dS(this._alignToPixels?Qn(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=Sk(this.getContext(),t,s))}return this.$context||(this.$context=Ak(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Ae(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*s>a*i?a/s:l/i:l*i<a*s?l/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,l=r.offset,u=this.isHorizontal(),d=this.ticks.length+(l?1:0),p=Ai(r),m=[],_=a.setContext(this.getContext()),y=_.display?_.width:0,b=y/2,A=function(ut){return Qn(s,ut,y)};let R,C,D,M,L,E,w,x,I,S,k,T;if(o==="top")R=A(this.bottom),E=this.bottom-p,x=R-b,S=A(t.top)+b,T=t.bottom;else if(o==="bottom")R=A(this.top),S=t.top,T=A(t.bottom)-b,E=R+b,x=this.top+p;else if(o==="left")R=A(this.right),L=this.right-p,w=R-b,I=A(t.left)+b,k=t.right;else if(o==="right")R=A(this.left),I=t.left,k=A(t.right)-b,L=R+b,w=this.left+p;else if(e==="x"){if(o==="center")R=A((t.top+t.bottom)/2+.5);else if(Q(o)){const ut=Object.keys(o)[0],lt=o[ut];R=A(this.chart.scales[ut].getPixelForValue(lt))}S=t.top,T=t.bottom,E=R+b,x=E+p}else if(e==="y"){if(o==="center")R=A((t.left+t.right)/2);else if(Q(o)){const ut=Object.keys(o)[0],lt=o[ut];R=A(this.chart.scales[ut].getPixelForValue(lt))}L=R-b,w=L-p,I=t.left,k=t.right}const bt=G(i.ticks.maxTicksLimit,d),Z=Math.max(1,Math.ceil(d/bt));for(C=0;C<d;C+=Z){const ut=this.getContext(C),lt=r.setContext(ut),$t=a.setContext(ut),Pt=lt.lineWidth,We=lt.color,Es=$t.dash||[],ie=$t.dashOffset,Et=lt.tickWidth,qe=lt.tickColor,Te=lt.tickBorderDash||[],Ge=lt.tickBorderDashOffset;D=Tk(this,C,l),D!==void 0&&(M=Qn(s,D,Pt),u?L=w=I=k=M:E=x=S=T=M,m.push({tx1:L,ty1:E,tx2:w,ty2:x,x1:I,y1:S,x2:k,y2:T,width:Pt,color:We,borderDash:Es,borderDashOffset:ie,tickWidth:Et,tickColor:qe,tickBorderDash:Te,tickBorderDashOffset:Ge}))}return this._ticksLength=d,this._borderValue=R,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:u,padding:h,mirror:d}=r,p=Ai(s.grid),m=p+h,_=d?-h:m,y=-Ae(this.labelRotation),b=[];let A,R,C,D,M,L,E,w,x,I,S,k,T="middle";if(i==="top")L=this.bottom-_,E=this._getXAxisLabelAlignment();else if(i==="bottom")L=this.top+_,E=this._getXAxisLabelAlignment();else if(i==="left"){const Z=this._getYAxisLabelAlignment(p);E=Z.textAlign,M=Z.x}else if(i==="right"){const Z=this._getYAxisLabelAlignment(p);E=Z.textAlign,M=Z.x}else if(e==="x"){if(i==="center")L=(t.top+t.bottom)/2+m;else if(Q(i)){const Z=Object.keys(i)[0],ut=i[Z];L=this.chart.scales[Z].getPixelForValue(ut)+m}E=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")M=(t.left+t.right)/2-m;else if(Q(i)){const Z=Object.keys(i)[0],ut=i[Z];M=this.chart.scales[Z].getPixelForValue(ut)}E=this._getYAxisLabelAlignment(p).textAlign}e==="y"&&(l==="start"?T="top":l==="end"&&(T="bottom"));const bt=this._getLabelSizes();for(A=0,R=a.length;A<R;++A){C=a[A],D=C.label;const Z=r.setContext(this.getContext(A));w=this.getPixelForTick(A)+r.labelOffset,x=this._resolveTickFontOptions(A),I=x.lineHeight,S=yt(D)?D.length:1;const ut=S/2,lt=Z.color,$t=Z.textStrokeColor,Pt=Z.textStrokeWidth;let We=E;o?(M=w,E==="inner"&&(A===R-1?We=this.options.reverse?"left":"right":A===0?We=this.options.reverse?"right":"left":We="center"),i==="top"?u==="near"||y!==0?k=-S*I+I/2:u==="center"?k=-bt.highest.height/2-ut*I+I:k=-bt.highest.height+I/2:u==="near"||y!==0?k=I/2:u==="center"?k=bt.highest.height/2-ut*I:k=bt.highest.height-S*I,d&&(k*=-1),y!==0&&!Z.showLabelBackdrop&&(M+=I/2*Math.sin(y))):(L=w,k=(1-S)*I/2);let Es;if(Z.showLabelBackdrop){const ie=se(Z.backdropPadding),Et=bt.heights[A],qe=bt.widths[A];let Te=k-ie.top,Ge=0-ie.left;switch(T){case"middle":Te-=Et/2;break;case"bottom":Te-=Et;break}switch(E){case"center":Ge-=qe/2;break;case"right":Ge-=qe;break;case"inner":A===R-1?Ge-=qe:A>0&&(Ge-=qe/2);break}Es={left:Ge,top:Te,width:qe+ie.width,height:Et+ie.height,color:Z.backdropColor}}b.push({label:D,font:x,textOffset:k,options:{rotation:y,color:lt,strokeColor:$t,strokeWidth:Pt,textAlign:We,textBaseline:T,translation:[M,L],backdrop:Es}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Ae(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let u,h;return e==="left"?i?(h=this.right+r,s==="near"?u="left":s==="center"?(u="center",h+=l/2):(u="right",h+=l)):(h=this.right-a,s==="near"?u="right":s==="center"?(u="center",h-=l/2):(u="left",h=this.left)):e==="right"?i?(h=this.left+r,s==="near"?u="right":s==="center"?(u="center",h-=l/2):(u="left",h-=l)):(h=this.left+a,s==="near"?u="left":s==="center"?(u="center",h+=l/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,u,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(u.x,u.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const l=i[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,h,d,p;this.isHorizontal()?(u=Qn(t,this.left,o)-o/2,h=Qn(t,this.right,a)+a/2,d=p=l):(d=Qn(t,this.top,o)-o/2,p=Qn(t,this.bottom,a)+a/2,u=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(u,d),e.lineTo(h,p),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&za(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,u=o.label,h=o.textOffset;ms(s,u,0,h,l,a)}i&&ja(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=Vt(s.font),o=se(s.padding),a=s.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||Q(e)?(l+=o.bottom,yt(s.text)&&(l+=r.lineHeight*(s.text.length-1))):l+=o.top;const{titleX:u,titleY:h,maxWidth:d,rotation:p}=kk(this,l,e,a);ms(t,s.text,0,0,r,{color:s.color,maxWidth:d,rotation:p,textAlign:Rk(a,e,i),textBaseline:"middle",translation:[u,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=G(t.grid&&t.grid.z,-1),i=G(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==xs.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Vt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class go{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;Dk(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,Pk(t,o,s),this.override&&vt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in vt[i]&&(delete vt[i][s],this.override&&delete gs[s])}}function Pk(n,t,e){const s=ur(Object.create(null),[e?vt.get(e):{},vt.get(t),n.defaults]);vt.set(t,s),n.defaultRoutes&&Ck(t,n.defaultRoutes),n.descriptors&&vt.describe(t,n.descriptors)}function Ck(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");vt.route(r,i,l,a)})}function Dk(n){return"id"in n&&"defaults"in n}class Ok{constructor(){this.controllers=new go(Se,"datasets",!0),this.elements=new go(De,"elements"),this.plugins=new go(Object,"plugins"),this.scales=new go(xs,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):it(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=Wu(t);ht(s["before"+i],[],s),e[t](s),ht(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var Me=new Ok;class Mk{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],l=[e,i,r.options];if(ht(a,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){Y(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=G(s.options&&s.options.plugins,{}),r=Lk(s);return i===!1&&!e?[]:Vk(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function Lk(n){const t={},e=[],s=Object.keys(Me.plugins.items);for(let r=0;r<s.length;r++)e.push(Me.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function Nk(n,t){return!t&&n===!1?null:n===!0?{}:n}function Vk(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const l=a.id,u=Nk(s[l],i);u!==null&&r.push({plugin:a,options:Fk(n.config,{plugin:a,local:e[l]},u,o)})}return r}function Fk(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function kc(n,t){const e=vt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Bk(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function Uk(n,t){return n===t?"_index_":"_value_"}function gp(n){if(n==="x"||n==="y"||n==="r")return n}function $k(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Pc(n,...t){if(gp(n))return n;for(const e of t){const s=e.axis||$k(e.position)||n.length>1&&gp(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function mp(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function zk(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return mp(n,"x",e[0])||mp(n,"y",e[0])}return{}}function jk(n,t){const e=gs[n.type]||{scales:{}},s=t.scales||{},i=kc(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!Q(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Pc(o,a,zk(o,n),vt.scales[a.type]),u=Uk(l,i),h=e.scales||{};r[o]=Ki(Object.create(null),[{axis:l},a,h[l],h[u]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,l=o.indexAxis||kc(a,t),h=(gs[a]||{}).scales||{};Object.keys(h).forEach(d=>{const p=Bk(d,l),m=o[p+"AxisID"]||p;r[m]=r[m]||Object.create(null),Ki(r[m],[{axis:p},s[m],h[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];Ki(a,[vt.scales[a.type],vt.scale])}),r}function by(n){const t=n.options||(n.options={});t.plugins=G(t.plugins,{}),t.scales=jk(n,t)}function wy(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function Hk(n){return n=n||{},n.data=wy(n.data),by(n),n}const _p=new Map,xy=new Set;function mo(n,t){let e=_p.get(n);return e||(e=t(),_p.set(n,e),xy.add(e)),e}const Si=(n,t,e)=>{const s=Un(t,e);s!==void 0&&n.add(s)};class Wk{constructor(t){this._config=Hk(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=wy(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),by(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return mo(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return mo(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return mo(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return mo(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(d=>Si(l,t,d))),h.forEach(d=>Si(l,i,d)),h.forEach(d=>Si(l,gs[r]||{},d)),h.forEach(d=>Si(l,vt,d)),h.forEach(d=>Si(l,Ac,d))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),xy.has(e)&&o.set(e,u),u}chartOptionScopes(){const{options:t,type:e}=this;return[t,gs[e]||{},vt.datasets[e]||{},{type:e},vt,Ac]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=yp(this._resolverCache,t,i);let l=o;if(Gk(o,e)){r.$shared=!1,s=$n(s)?s():s;const u=this.createResolver(t,s,a);l=ti(o,s,u)}for(const u of e)r[u]=l[u];return r}createResolver(t,e,s=[""],i){const{resolver:r}=yp(this._resolverCache,t,s);return Q(e)?ti(r,e,void 0,i):r}}function yp(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:Qu(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const qk=n=>Q(n)&&Object.getOwnPropertyNames(n).some(t=>$n(n[t]));function Gk(n,t){const{isScriptable:e,isIndexable:s}=ty(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&($n(a)||qk(a))||o&&yt(a))return!0}return!1}var Kk="4.5.1";const Yk=["top","bottom","left","right","chartArea"];function vp(n,t){return n==="top"||n==="bottom"||Yk.indexOf(n)===-1&&t==="x"}function bp(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function wp(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),ht(e&&e.onComplete,[n],t)}function Xk(n){const t=n.chart,e=t.options.animation;ht(e&&e.onProgress,[n],t)}function Ey(n){return th()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Uo={},xp=n=>{const t=Ey(n);return Object.values(Uo).filter(e=>e.canvas===t).pop()};function Qk(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function Jk(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class _t{static register(...t){Me.add(...t),Ep()}static unregister(...t){Me.remove(...t),Ep()}constructor(t,e){const s=this.config=new Wk(e),i=Ey(t),r=xp(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||mk(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),l=a&&a.canvas,u=l&&l.height,h=l&&l.width;if(this.id=ZA(),this.ctx=a,this.canvas=l,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Mk,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=mS(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],Uo[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Qe.listen(this,"complete",wp),Qe.listen(this,"progress",Xk),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return Y(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Me}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Wf(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return zf(this.canvas,this.ctx),this}stop(){return Qe.stop(this),this}resize(t,e){Qe.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Wf(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ht(s.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};it(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=Pc(o,a),u=l==="r",h=l==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),it(r,o=>{const a=o.options,l=a.id,u=Pc(l,a),h=G(a.type,o.dtype);(a.position===void 0||vp(a.position,u)!==vp(o.dposition))&&(a.position=o.dposition),i[l]=!0;let d=null;if(l in s&&s[l].type===h)d=s[l];else{const p=Me.getScale(h);d=new p({id:l,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,t)}),it(i,(o,a)=>{o||delete s[a]}),it(s,o=>{ee.configure(this,o,o.options),ee.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(bp("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||kc(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const l=Me.getController(a),{datasetElementType:u,dataElementType:h}=vt.datasets[a];Object.assign(l,{dataElementType:Me.getElement(h),datasetElementType:u&&Me.getElement(u)}),o.controller=new l(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){it(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:d}=this.getDatasetMeta(u),p=!i&&r.indexOf(d)===-1;d.buildOrUpdateElements(p),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||it(r,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(bp("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){it(this.scales,t=>{ee.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Of(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;Qk(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!Of(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ee.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],it(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,$n(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Qe.has(this)?this.attached&&!Qe.running(this)&&Qe.start(this):(this.draw(),wp({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=hy(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&za(e,i),t.controller.draw(),i&&ja(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return an(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=YR.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=Wn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);hr(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Qe.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),zf(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Uo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};it(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(l,u)=>{e.addEventListener(this,l,u),t[l]=u},i=(l,u)=>{t[l]&&(e.removeEventListener(this,l,u),delete t[l])},r=(l,u)=>{this.canvas&&this.resize(l,u)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){it(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},it(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!la(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(l,u)=>l.filter(h=>!u.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),l=rS(t),u=Jk(t,this._lastEvent,s,l);s&&(this._lastEvent=null,ht(r.onHover,[t,a,this],this),l&&ht(r.onClick,[t,a,this],this));const h=!la(a,i);return(h||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=u,h}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}B(_t,"defaults",vt),B(_t,"instances",Uo),B(_t,"overrides",gs),B(_t,"registry",Me),B(_t,"version",Kk),B(_t,"getChart",xp);function Ep(){return it(_t.instances,n=>n._plugins.invalidate())}function Zk(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:u,borderJoinStyle:h}=l,d=Math.min(u/o,Zt(s-e));if(n.beginPath(),n.arc(i,r,o-u/2,s+d/2,e-d/2),a>0){const p=Math.min(u/a,Zt(s-e));n.arc(i,r,a+u/2,e-p/2,s+p/2,!0)}else{const p=Math.min(u/2,o*Zt(s-e));if(h==="round")n.arc(i,r,p,e-st/2,s+st/2,!0);else if(h==="bevel"){const m=2*p*p,_=-m*Math.cos(e+st/2)+i,y=-m*Math.sin(e+st/2)+r,b=m*Math.cos(s+st/2)+i,A=m*Math.sin(s+st/2)+r;n.lineTo(_,y),n.lineTo(b,A)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function tP(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:l}=t;let u=i/a;n.beginPath(),n.arc(r,o,a,s-u,e+u),l>i?(u=i/l,n.arc(r,o,l,e+u,s-u,!0)):n.arc(r,o,i,e+Rt,s-Rt),n.closePath(),n.clip()}function eP(n){return Xu(n,["outerStart","outerEnd","innerStart","innerEnd"])}function nP(n,t,e,s){const i=eP(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=l=>{const u=(e-Math.min(r,l))*s/2;return Ut(l,0,Math.min(r,u))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Ut(i.innerStart,0,o),innerEnd:Ut(i.innerEnd,0,o)}}function Cs(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function pa(n,t,e,s,i,r){const{x:o,y:a,startAngle:l,pixelMargin:u,innerRadius:h}=t,d=Math.max(t.outerRadius+s+e-u,0),p=h>0?h+s+e+u:0;let m=0;const _=i-l;if(s){const Z=h>0?h-s:0,ut=d>0?d-s:0,lt=(Z+ut)/2,$t=lt!==0?_*lt/(lt+s):_;m=(_-$t)/2}const y=Math.max(.001,_*d-e/st)/d,b=(_-y)/2,A=l+b+m,R=i-b-m,{outerStart:C,outerEnd:D,innerStart:M,innerEnd:L}=nP(t,p,d,R-A),E=d-C,w=d-D,x=A+C/E,I=R-D/w,S=p+M,k=p+L,T=A+M/S,bt=R-L/k;if(n.beginPath(),r){const Z=(x+I)/2;if(n.arc(o,a,d,x,Z),n.arc(o,a,d,Z,I),D>0){const Pt=Cs(w,I,o,a);n.arc(Pt.x,Pt.y,D,I,R+Rt)}const ut=Cs(k,R,o,a);if(n.lineTo(ut.x,ut.y),L>0){const Pt=Cs(k,bt,o,a);n.arc(Pt.x,Pt.y,L,R+Rt,bt+Math.PI)}const lt=(R-L/p+(A+M/p))/2;if(n.arc(o,a,p,R-L/p,lt,!0),n.arc(o,a,p,lt,A+M/p,!0),M>0){const Pt=Cs(S,T,o,a);n.arc(Pt.x,Pt.y,M,T+Math.PI,A-Rt)}const $t=Cs(E,A,o,a);if(n.lineTo($t.x,$t.y),C>0){const Pt=Cs(E,x,o,a);n.arc(Pt.x,Pt.y,C,A-Rt,x)}}else{n.moveTo(o,a);const Z=Math.cos(x)*d+o,ut=Math.sin(x)*d+a;n.lineTo(Z,ut);const lt=Math.cos(I)*d+o,$t=Math.sin(I)*d+a;n.lineTo(lt,$t)}n.closePath()}function sP(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){pa(n,t,e,s,l,i);for(let u=0;u<r;++u)n.fill();isNaN(a)||(l=o+(a%gt||gt))}return pa(n,t,e,s,l,i),n.fill(),l}function iP(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:u,borderJoinStyle:h,borderDash:d,borderDashOffset:p,borderRadius:m}=l,_=l.borderAlign==="inner";if(!u)return;n.setLineDash(d||[]),n.lineDashOffset=p,_?(n.lineWidth=u*2,n.lineJoin=h||"round"):(n.lineWidth=u,n.lineJoin=h||"bevel");let y=t.endAngle;if(r){pa(n,t,e,s,y,i);for(let b=0;b<r;++b)n.stroke();isNaN(a)||(y=o+(a%gt||gt))}_&&tP(n,t,y),l.selfJoin&&y-o>=st&&m===0&&h!=="miter"&&Zk(n,t,y),r||(pa(n,t,e,s,y,i),n.stroke())}class Bi extends De{constructor(e){super();B(this,"circumference");B(this,"endAngle");B(this,"fullCircles");B(this,"innerRadius");B(this,"outerRadius");B(this,"pixelMargin");B(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=H_(r,{x:e,y:s}),{startAngle:l,endAngle:u,innerRadius:h,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,_=G(p,u-l),y=dr(o,l,u)&&l!==u,b=_>=gt||y,A=rn(a,h+m,d+m);return b&&A}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:u,spacing:h}=this.options,d=(r+o)/2,p=(a+l+h+u)/2;return{x:s+Math.cos(d)*p,y:i+Math.sin(d)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>gt?Math.floor(i/gt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*r,Math.sin(l)*r);const u=1-Math.sin(Math.min(st,i||0)),h=r*u;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,sP(e,this,h,o,a),iP(e,this,h,o,a),e.restore()}}B(Bi,"id","arc"),B(Bi,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),B(Bi,"defaultRoutes",{backgroundColor:"backgroundColor"}),B(Bi,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Ty(n,t,e=t){n.lineCap=G(e.borderCapStyle,t.borderCapStyle),n.setLineDash(G(e.borderDash,t.borderDash)),n.lineDashOffset=G(e.borderDashOffset,t.borderDashOffset),n.lineJoin=G(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=G(e.borderWidth,t.borderWidth),n.strokeStyle=G(e.borderColor,t.borderColor)}function rP(n,t,e){n.lineTo(e.x,e.y)}function oP(n){return n.stepped?RS:n.tension||n.cubicInterpolationMode==="monotone"?kS:rP}function Iy(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,l=Math.max(i,o),u=Math.min(r,a),h=i<o&&r<o||i>a&&r>a;return{count:s,start:l,loop:t.loop,ilen:u<l&&!h?s+u-l:u-l}}function aP(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:l,ilen:u}=Iy(i,e,s),h=oP(r);let{move:d=!0,reverse:p}=s||{},m,_,y;for(m=0;m<=u;++m)_=i[(a+(p?u-m:m))%o],!_.skip&&(d?(n.moveTo(_.x,_.y),d=!1):h(n,y,_,p,r.stepped),y=_);return l&&(_=i[(a+(p?u:0))%o],h(n,y,_,p,r.stepped)),!!l}function lP(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=Iy(i,e,s),{move:l=!0,reverse:u}=s||{};let h=0,d=0,p,m,_,y,b,A;const R=D=>(o+(u?a-D:D))%r,C=()=>{y!==b&&(n.lineTo(h,b),n.lineTo(h,y),n.lineTo(h,A))};for(l&&(m=i[R(0)],n.moveTo(m.x,m.y)),p=0;p<=a;++p){if(m=i[R(p)],m.skip)continue;const D=m.x,M=m.y,L=D|0;L===_?(M<y?y=M:M>b&&(b=M),h=(d*h+D)/++d):(C(),n.lineTo(D,M),_=L,d=0,y=b=M),A=M}C()}function Cc(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?lP:aP}function cP(n){return n.stepped?aR:n.tension||n.cubicInterpolationMode==="monotone"?lR:ns}function uP(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),Ty(n,t.options),n.stroke(i)}function hP(n,t,e,s){const{segments:i,options:r}=t,o=Cc(t);for(const a of i)Ty(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const dP=typeof Path2D=="function";function fP(n,t,e,s){dP&&!t.options.segment?uP(n,t,e,s):hP(n,t,e,s)}class kn extends De{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;ZS(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=pR(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=uy(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],l=cP(s);let u,h;for(u=0,h=o.length;u<h;++u){const{start:d,end:p}=o[u],m=r[d],_=r[p];if(m===_){a.push(m);continue}const y=Math.abs((i-m[e])/(_[e]-m[e])),b=l(m,_,y,s.stepped);b[e]=t[e],a.push(b)}return a.length===1?a[0]:a}pathSegment(t,e,s){return Cc(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=Cc(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),fP(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}B(kn,"id","line"),B(kn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),B(kn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),B(kn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Tp(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class $o extends De{constructor(e){super();B(this,"parsed");B(this,"skip");B(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return Tp(this,e,"x",s)}inYRange(e,s){return Tp(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!an(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,Sc(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}B($o,"id","point"),B($o,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),B($o,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Ay(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,l,u,h,d;return n.horizontal?(d=o/2,a=Math.min(e,i),l=Math.max(e,i),u=s-d,h=s+d):(d=r/2,a=e-d,l=e+d,u=Math.min(s,i),h=Math.max(s,i)),{left:a,top:u,right:l,bottom:h}}function Pn(n,t,e,s){return n?0:Ut(t,e,s)}function pP(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=Z_(s);return{t:Pn(i.top,r.top,0,e),r:Pn(i.right,r.right,0,t),b:Pn(i.bottom,r.bottom,0,e),l:Pn(i.left,r.left,0,t)}}function gP(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=as(i),o=Math.min(t,e),a=n.borderSkipped,l=s||Q(i);return{topLeft:Pn(!l||a.top||a.left,r.topLeft,0,o),topRight:Pn(!l||a.top||a.right,r.topRight,0,o),bottomLeft:Pn(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Pn(!l||a.bottom||a.right,r.bottomRight,0,o)}}function mP(n){const t=Ay(n),e=t.right-t.left,s=t.bottom-t.top,i=pP(n,e/2,s/2),r=gP(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function zl(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&Ay(n,s);return a&&(i||rn(t,a.left,a.right))&&(r||rn(e,a.top,a.bottom))}function _P(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function yP(n,t){n.rect(t.x,t.y,t.w,t.h)}function jl(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class zo extends De{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=mP(this),a=_P(o.radius)?fr:yP;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,jl(o,e,r)),t.clip(),a(t,jl(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,jl(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return zl(this,t,e,s)}inXRange(t,e){return zl(this,t,null,e)}inYRange(t,e){return zl(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}B(zo,"id","bar"),B(zo,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),B(zo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var vP=Object.freeze({__proto__:null,ArcElement:Bi,BarElement:zo,LineElement:kn,PointElement:$o});const Dc=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Ip=Dc.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Sy(n){return Dc[n%Dc.length]}function Ry(n){return Ip[n%Ip.length]}function bP(n,t){return n.borderColor=Sy(t),n.backgroundColor=Ry(t),++t}function wP(n,t){return n.backgroundColor=n.data.map(()=>Sy(t++)),t}function xP(n,t){return n.backgroundColor=n.data.map(()=>Ry(t++)),t}function EP(n){let t=0;return(e,s)=>{const i=n.getDatasetMeta(s).controller;i instanceof is?t=wP(e,t):i instanceof Ji?t=xP(e,t):i&&(t=bP(e,t))}}function Ap(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function TP(n){return n&&(n.borderColor||n.backgroundColor)}function IP(){return vt.borderColor!=="rgba(0,0,0,0.1)"||vt.backgroundColor!=="rgba(0,0,0,0.1)"}var AP={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=n.config,{elements:r}=i,o=Ap(s)||TP(i)||r&&Ap(r)||IP();if(!e.forceOverride&&o)return;const a=EP(n);s.forEach(a)}};function SP(n,t,e,s,i){const r=i.samples||s;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let l=0;const u=t+e-1;let h=t,d,p,m,_,y;for(o[l++]=n[h],d=0;d<r-2;d++){let b=0,A=0,R;const C=Math.floor((d+1)*a)+1+t,D=Math.min(Math.floor((d+2)*a)+1,e)+t,M=D-C;for(R=C;R<D;R++)b+=n[R].x,A+=n[R].y;b/=M,A/=M;const L=Math.floor(d*a)+1+t,E=Math.min(Math.floor((d+1)*a)+1,e)+t,{x:w,y:x}=n[h];for(m=_=-1,R=L;R<E;R++)_=.5*Math.abs((w-b)*(n[R].y-x)-(w-n[R].x)*(A-x)),_>m&&(m=_,p=n[R],y=R);o[l++]=p,h=y}return o[l++]=n[u],o}function RP(n,t,e,s){let i=0,r=0,o,a,l,u,h,d,p,m,_,y;const b=[],A=t+e-1,R=n[t].x,D=n[A].x-R;for(o=t;o<t+e;++o){a=n[o],l=(a.x-R)/D*s,u=a.y;const M=l|0;if(M===h)u<_?(_=u,d=o):u>y&&(y=u,p=o),i=(r*i+a.x)/++r;else{const L=o-1;if(!Y(d)&&!Y(p)){const E=Math.min(d,p),w=Math.max(d,p);E!==m&&E!==L&&b.push({...n[E],x:i}),w!==m&&w!==L&&b.push({...n[w],x:i})}o>0&&L!==m&&b.push(n[L]),b.push(a),h=M,r=0,_=y=u,d=p=m=o}}return b}function ky(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Sp(n){n.data.datasets.forEach(t=>{ky(t)})}function kP(n,t){const e=t.length;let s=0,i;const{iScale:r}=n,{min:o,max:a,minDefined:l,maxDefined:u}=r.getUserBounds();return l&&(s=Ut(on(t,r.axis,o).lo,0,e-1)),u?i=Ut(on(t,r.axis,a).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var PP={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Sp(n);return}const s=n.width;n.data.datasets.forEach((i,r)=>{const{_data:o,indexAxis:a}=i,l=n.getDatasetMeta(r),u=o||i.data;if(Vi([a,n.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=n.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||n.options.parsing)return;let{start:d,count:p}=kP(l,u);const m=e.threshold||4*s;if(p<=m){ky(i);return}Y(o)&&(i._data=u,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(y){this._data=y}}));let _;switch(e.algorithm){case"lttb":_=SP(u,d,p,s,e);break;case"min-max":_=RP(u,d,p,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=_})},destroy(n){Sp(n)}};function CP(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:l,end:u}=a;u=qa(l,u,i);const h=Oc(e,i[l],i[u],a.loop);if(!t.segments){o.push({source:a,target:h,start:i[l],end:i[u]});continue}const d=uy(t,h);for(const p of d){const m=Oc(e,r[p.start],r[p.end],p.loop),_=cy(a,i,m);for(const y of _)o.push({source:y,target:p,start:{[e]:Rp(h,m,"start",Math.max)},end:{[e]:Rp(h,m,"end",Math.min)}})}}return o}function Oc(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=Zt(i),r=Zt(r)),{property:n,start:i,end:r}}function DP(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=qa(o,a,i);const l=i[o],u=i[a];s!==null?(r.push({x:l.x,y:s}),r.push({x:u.x,y:s})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:u.y}))}),r}function qa(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Rp(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function Py(n,t){let e=[],s=!1;return yt(n)?(s=!0,e=n):e=DP(n,t),e.length?new kn({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function kp(n){return n&&n.fill!==!1}function OP(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!It(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function MP(n,t,e){const s=FP(n);if(Q(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return It(i)&&Math.floor(i)===i?LP(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function LP(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function NP(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:Q(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function VP(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:Q(n)?s=n.value:s=t.getBaseValue(),s}function FP(n){const t=n.options,e=t.fill;let s=G(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function BP(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=UP(t,e);a.push(Py({x:null,y:t.bottom},s));for(let l=0;l<r.length;l++){const u=r[l];for(let h=u.start;h<=u.end;h++)$P(i,o[h],a)}return new kn({points:i,options:{}})}function UP(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function $P(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:l}=zP(r,t,"x");if(!(!l||o&&a)){if(o)s.unshift(l);else if(n.push(l),!a)break}}n.push(...s)}function zP(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,l=!1;for(let u=0;u<r.length;u++){const h=r[u],d=o[h.start][e],p=o[h.end][e];if(rn(i,d,p)){a=i===d,l=i===p;break}}return{first:a,last:l,point:s}}class Cy{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:gt},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function jP(n){const{chart:t,fill:e,line:s}=n;if(It(e))return HP(t,e);if(e==="stack")return BP(n);if(e==="shape")return!0;const i=WP(n);return i instanceof Cy?i:Py(i,s)}function HP(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function WP(n){return(n.scale||{}).getPointPositionForValue?GP(n):qP(n)}function qP(n){const{scale:t={},fill:e}=n,s=NP(e,t);if(It(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function GP(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=VP(e,t,r),a=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,r);return new Cy({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<i;++l)a.push(t.getPointPositionForValue(l,o));return a}function Hl(n,t,e){const s=jP(t),{chart:i,index:r,line:o,scale:a,axis:l}=t,u=o.options,h=u.fill,d=u.backgroundColor,{above:p=d,below:m=d}=h||{},_=i.getDatasetMeta(r),y=hy(i,_);s&&o.points.length&&(za(n,e),KP(n,{line:o,target:s,above:p,below:m,area:e,scale:a,axis:l,clip:y}),ja(n))}function KP(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:l}=t,u=e._loop?"angle":t.axis;n.save();let h=r;r!==i&&(u==="x"?(Pp(n,s,o.top),Wl(n,{line:e,target:s,color:i,scale:a,property:u,clip:l}),n.restore(),n.save(),Pp(n,s,o.bottom)):u==="y"&&(Cp(n,s,o.left),Wl(n,{line:e,target:s,color:r,scale:a,property:u,clip:l}),n.restore(),n.save(),Cp(n,s,o.right),h=i)),Wl(n,{line:e,target:s,color:h,scale:a,property:u,clip:l}),n.restore()}function Pp(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:l,end:u}=a,h=i[l],d=i[qa(l,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(d.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Cp(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:l,end:u}=a,h=i[l],d=i[qa(l,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,d.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Wl(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,l=CP(e,s,i);for(const{source:u,target:h,start:d,end:p}of l){const{style:{backgroundColor:m=r}={}}=u,_=s!==!0;n.save(),n.fillStyle=m,YP(n,o,a,_&&Oc(i,d,p)),n.beginPath();const y=!!e.pathSegment(n,u);let b;if(_){y?n.closePath():Dp(n,s,p,i);const A=!!s.pathSegment(n,h,{move:y,reverse:!0});b=y&&A,b||Dp(n,s,d,i)}n.closePath(),n.fill(b?"evenodd":"nonzero"),n.restore()}}function YP(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let l,u,h,d;r==="x"?(l=o,u=i.top,h=a,d=i.bottom):(l=i.left,u=o,h=i.right,d=a),n.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),u=Math.max(u,e.top),d=Math.min(d,e.bottom)),n.rect(l,u,h-l,d-u),n.clip()}}function Dp(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var XP={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,l;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof kn&&(l={visible:n.isDatasetVisible(o),index:o,fill:MP(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,i.push(l);for(o=0;o<s;++o)l=i[o],!(!l||l.fill===!1)&&(l.fill=OP(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&Hl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;kp(r)&&Hl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!kp(s)||e.drawTime!=="beforeDatasetDraw"||Hl(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Op=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},QP=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Mp extends De{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=ht(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=Vt(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Op(s,r);let u,h;e.font=i.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,u=this._fitCols(o,i,a,l)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],h=i+a;let d=t;r.textAlign="left",r.textBaseline="middle";let p=-1,m=-h;return this.legendItems.forEach((_,y)=>{const b=s+e/2+r.measureText(_.text).width;(y===0||u[u.length-1]+b+2*a>o)&&(d+=h,u[u.length-(y>0?0:1)]=0,m+=h,p++),l[y]={left:0,top:m,row:p,width:b,height:i},u[u.length-1]+=b+a}),d}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-t;let d=a,p=0,m=0,_=0,y=0;return this.legendItems.forEach((b,A)=>{const{itemWidth:R,itemHeight:C}=JP(s,e,r,b,i);A>0&&m+C+2*a>h&&(d+=p+a,u.push({width:p,height:m}),_+=p+a,y++,p=m=0),l[A]={left:_,top:m,col:y,width:R,height:C},p=Math.max(p,R),m+=C+a}),d+=p,u.push({width:p,height:m}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=js(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Qt(s,this.left+i,this.right-this.lineWidths[a]);for(const u of e)a!==u.row&&(a=u.row,l=Qt(s,this.left+i,this.right-this.lineWidths[a])),u.top+=this.top+t+i,u.left=o.leftForLtr(o.x(l),u.width),l+=u.width+i}else{let a=0,l=Qt(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const u of e)u.col!==a&&(a=u.col,l=Qt(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),u.top=l,u.left+=this.left+i,u.left=o.leftForLtr(o.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;za(t,this),this._draw(),ja(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=vt.color,l=js(t.rtl,this.left,this.width),u=Vt(o.font),{padding:h}=o,d=u.size,p=d/2;let m;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:_,boxHeight:y,itemHeight:b}=Op(o,d),A=function(L,E,w){if(isNaN(_)||_<=0||isNaN(y)||y<0)return;i.save();const x=G(w.lineWidth,1);if(i.fillStyle=G(w.fillStyle,a),i.lineCap=G(w.lineCap,"butt"),i.lineDashOffset=G(w.lineDashOffset,0),i.lineJoin=G(w.lineJoin,"miter"),i.lineWidth=x,i.strokeStyle=G(w.strokeStyle,a),i.setLineDash(G(w.lineDash,[])),o.usePointStyle){const I={radius:y*Math.SQRT2/2,pointStyle:w.pointStyle,rotation:w.rotation,borderWidth:x},S=l.xPlus(L,_/2),k=E+p;J_(i,I,S,k,o.pointStyleWidth&&_)}else{const I=E+Math.max((d-y)/2,0),S=l.leftForLtr(L,_),k=as(w.borderRadius);i.beginPath(),Object.values(k).some(T=>T!==0)?fr(i,{x:S,y:I,w:_,h:y,radius:k}):i.rect(S,I,_,y),i.fill(),x!==0&&i.stroke()}i.restore()},R=function(L,E,w){ms(i,w.text,L,E+b/2,u,{strikethrough:w.hidden,textAlign:l.textAlign(w.textAlign)})},C=this.isHorizontal(),D=this._computeTitleHeight();C?m={x:Qt(r,this.left+h,this.right-s[0]),y:this.top+h+D,line:0}:m={x:this.left+h,y:Qt(r,this.top+D+h,this.bottom-e[0].height),line:0},oy(this.ctx,t.textDirection);const M=b+h;this.legendItems.forEach((L,E)=>{i.strokeStyle=L.fontColor,i.fillStyle=L.fontColor;const w=i.measureText(L.text).width,x=l.textAlign(L.textAlign||(L.textAlign=o.textAlign)),I=_+p+w;let S=m.x,k=m.y;l.setWidth(this.width),C?E>0&&S+I+h>this.right&&(k=m.y+=M,m.line++,S=m.x=Qt(r,this.left+h,this.right-s[m.line])):E>0&&k+M>this.bottom&&(S=m.x=S+e[m.line].width+h,m.line++,k=m.y=Qt(r,this.top+D+h,this.bottom-e[m.line].height));const T=l.x(S);if(A(T,k,L),S=_S(x,S+_+p,C?S+I:this.right,t.rtl),R(l.x(S),k,L),C)m.x+=I+h;else if(typeof L.text!="string"){const bt=u.lineHeight;m.y+=Dy(L,bt)+h}else m.y+=M}),ay(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=Vt(e.font),i=se(e.padding);if(!e.display)return;const r=js(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=s.size/2,u=i.top+l;let h,d=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),h=this.top+u,d=Qt(t.align,d,this.right-p);else{const _=this.columnSizes.reduce((y,b)=>Math.max(y,b.height),0);h=u+Qt(t.align,this.top,this.bottom-_-t.labels.padding-this._computeTitleHeight())}const m=Qt(a,d,d+p);o.textAlign=r.textAlign(Ku(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,ms(o,e.text,m,h,s)}_computeTitleHeight(){const t=this.options.title,e=Vt(t.font),s=se(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(rn(t,this.left,this.right)&&rn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],rn(t,i.left,i.left+i.width)&&rn(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!eC(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=QP(i,s);i&&!r&&ht(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&ht(e.onHover,[t,s,this],this)}else s&&ht(e.onClick,[t,s,this],this)}}function JP(n,t,e,s,i){const r=ZP(s,n,t,e),o=tC(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function ZP(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function tC(n,t,e){let s=n;return typeof t.text!="string"&&(s=Dy(t,e)),s}function Dy(n,t){const e=n.text?n.text.length:0;return t*e}function eC(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var nC={id:"legend",_element:Mp,start(n,t,e){const s=n.legend=new Mp({ctx:n.ctx,options:e,chart:n});ee.configure(n,s,e),ee.addBox(n,s)},stop(n){ee.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;ee.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(e?0:void 0),h=se(u.borderWidth);return{text:t[l.index].label,fillStyle:u.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:s||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class sh extends De{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=yt(s.text)?s.text.length:1;this._padding=se(s.padding);const r=i*Vt(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:r,options:o}=this,a=o.align;let l=0,u,h,d;return this.isHorizontal()?(h=Qt(a,s,r),d=e+t,u=r-s):(o.position==="left"?(h=s+t,d=Qt(a,i,e),l=st*-.5):(h=r-t,d=Qt(a,e,i),l=st*.5),u=i-e),{titleX:h,titleY:d,maxWidth:u,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=Vt(e.font),r=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:u}=this._drawArgs(r);ms(t,e.text,0,0,s,{color:e.color,maxWidth:l,rotation:u,textAlign:Ku(e.align),textBaseline:"middle",translation:[o,a]})}}function sC(n,t){const e=new sh({ctx:n.ctx,options:t,chart:n});ee.configure(n,e,t),ee.addBox(n,e),n.titleBlock=e}var iC={id:"title",_element:sh,start(n,t,e){sC(n,e)},stop(n){const t=n.titleBlock;ee.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;ee.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const _o=new WeakMap;var rC={id:"subtitle",start(n,t,e){const s=new sh({ctx:n.ctx,options:e,chart:n});ee.configure(n,s,e),ee.addBox(n,s),_o.set(n,s)},stop(n){ee.removeBox(n,_o.get(n)),_o.delete(n)},beforeUpdate(n,t,e){const s=_o.get(n);ee.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ui={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();s.add(l.x),i+=l.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,l)=>a+l)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const l=n[r].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),h=Ic(t,u);h<i&&(i=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function Oe(n,t){return t&&(yt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function Je(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function oC(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Lp(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,l=Vt(t.bodyFont),u=Vt(t.titleFont),h=Vt(t.footerFont),d=r.length,p=i.length,m=s.length,_=se(t.padding);let y=_.height,b=0,A=s.reduce((D,M)=>D+M.before.length+M.lines.length+M.after.length,0);if(A+=n.beforeBody.length+n.afterBody.length,d&&(y+=d*u.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),A){const D=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;y+=m*D+(A-m)*l.lineHeight+(A-1)*t.bodySpacing}p&&(y+=t.footerMarginTop+p*h.lineHeight+(p-1)*t.footerSpacing);let R=0;const C=function(D){b=Math.max(b,e.measureText(D).width+R)};return e.save(),e.font=u.string,it(n.title,C),e.font=l.string,it(n.beforeBody.concat(n.afterBody),C),R=t.displayColors?o+2+t.boxPadding:0,it(s,D=>{it(D.before,C),it(D.lines,C),it(D.after,C)}),R=0,e.font=h.string,it(n.footer,C),e.restore(),b+=_.width,{width:b,height:y}}function aC(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function lC(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function cC(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:l}}=n;let u="center";return s==="center"?u=i<=(a+l)/2?"left":"right":i<=r/2?u="left":i>=o-r/2&&(u="right"),lC(u,n,t,e)&&(u="center"),u}function Np(n,t,e){const s=e.yAlign||t.yAlign||aC(n,e);return{xAlign:e.xAlign||t.xAlign||cC(n,t,e,s),yAlign:s}}function uC(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function hC(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Vp(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:l}=e,u=i+r,{topLeft:h,topRight:d,bottomLeft:p,bottomRight:m}=as(o);let _=uC(t,a);const y=hC(t,l,u);return l==="center"?a==="left"?_+=u:a==="right"&&(_-=u):a==="left"?_-=Math.max(h,p)+i:a==="right"&&(_+=Math.max(d,m)+i),{x:Ut(_,0,s.width-t.width),y:Ut(y,0,s.height-t.height)}}function yo(n,t,e){const s=se(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Fp(n){return Oe([],Je(n))}function dC(n,t,e){return Wn(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Bp(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const Oy={beforeTitle:Xe,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:Xe,beforeBody:Xe,beforeLabel:Xe,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return Y(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Xe,afterBody:Xe,beforeFooter:Xe,footer:Xe,afterFooter:Xe};function ce(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?Oy[t].call(e,s):i}class Mc extends De{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new dy(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=dC(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=ce(s,"beforeTitle",this,t),r=ce(s,"title",this,t),o=ce(s,"afterTitle",this,t);let a=[];return a=Oe(a,Je(i)),a=Oe(a,Je(r)),a=Oe(a,Je(o)),a}getBeforeBody(t,e){return Fp(ce(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return it(t,r=>{const o={before:[],lines:[],after:[]},a=Bp(s,r);Oe(o.before,Je(ce(a,"beforeLabel",this,r))),Oe(o.lines,ce(a,"label",this,r)),Oe(o.after,Je(ce(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return Fp(ce(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=ce(s,"beforeFooter",this,t),r=ce(s,"footer",this,t),o=ce(s,"afterFooter",this,t);let a=[];return a=Oe(a,Je(i)),a=Oe(a,Je(r)),a=Oe(a,Je(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],l,u;for(l=0,u=e.length;l<u;++l)a.push(oC(this.chart,e[l]));return t.filter&&(a=a.filter((h,d,p)=>t.filter(h,d,p,s))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,s))),it(a,h=>{const d=Bp(t.callbacks,h);i.push(ce(d,"labelColor",this,h)),r.push(ce(d,"labelPointStyle",this,h)),o.push(ce(d,"labelTextColor",this,h))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=Ui[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const l=this._size=Lp(this,s),u=Object.assign({},a,l),h=Np(this.chart,s,u),d=Vp(s,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:l,topRight:u,bottomLeft:h,bottomRight:d}=as(a),{x:p,y:m}=t,{width:_,height:y}=e;let b,A,R,C,D,M;return r==="center"?(D=m+y/2,i==="left"?(b=p,A=b-o,C=D+o,M=D-o):(b=p+_,A=b+o,C=D-o,M=D+o),R=b):(i==="left"?A=p+Math.max(l,h)+o:i==="right"?A=p+_-Math.max(u,d)-o:A=this.caretX,r==="top"?(C=m,D=C-o,b=A-o,R=A+o):(C=m+y,D=C+o,b=A+o,R=A-o),M=C),{x1:b,x2:A,x3:R,y1:C,y2:D,y3:M}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,l;if(r){const u=js(s.rtl,this.x,this.width);for(t.x=yo(this,s.titleAlign,s),e.textAlign=u.textAlign(s.titleAlign),e.textBaseline="middle",o=Vt(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(i[l],u.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:l,boxWidth:u}=r,h=Vt(r.bodyFont),d=yo(this,"left",r),p=i.x(d),m=l<h.lineHeight?(h.lineHeight-l)/2:0,_=e.y+m;if(r.usePointStyle){const y={radius:Math.min(u,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},b=i.leftForLtr(p,u)+u/2,A=_+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Sc(t,y,b,A),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Sc(t,y,b,A)}else{t.lineWidth=Q(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const y=i.leftForLtr(p,u),b=i.leftForLtr(i.xPlus(p,1),u-2),A=as(o.borderRadius);Object.values(A).some(R=>R!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,fr(t,{x:y,y:_,w:u,h:l,radius:A}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),fr(t,{x:b,y:_+1,w:u-2,h:l-2,radius:A}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(y,_,u,l),t.strokeRect(y,_,u,l),t.fillStyle=o.backgroundColor,t.fillRect(b,_+1,u-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:u,boxPadding:h}=s,d=Vt(s.bodyFont);let p=d.lineHeight,m=0;const _=js(s.rtl,this.x,this.width),y=function(w){e.fillText(w,_.x(t.x+m),t.y+p/2),t.y+=p+r},b=_.textAlign(o);let A,R,C,D,M,L,E;for(e.textAlign=o,e.textBaseline="middle",e.font=d.string,t.x=yo(this,b,s),e.fillStyle=s.bodyColor,it(this.beforeBody,y),m=a&&b!=="right"?o==="center"?u/2+h:u+2+h:0,D=0,L=i.length;D<L;++D){for(A=i[D],R=this.labelTextColors[D],e.fillStyle=R,it(A.before,y),C=A.lines,a&&C.length&&(this._drawColorBox(e,t,D,_,s),p=Math.max(d.lineHeight,l)),M=0,E=C.length;M<E;++M)y(C[M]),p=d.lineHeight;it(A.after,y)}m=0,p=d.lineHeight,it(this.afterBody,y),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const l=js(s.rtl,this.x,this.width);for(t.x=yo(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",o=Vt(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:u,height:h}=s,{topLeft:d,topRight:p,bottomLeft:m,bottomRight:_}=as(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+d,l),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+u-p,l),e.quadraticCurveTo(a+u,l,a+u,l+p),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+u,l+h-_),e.quadraticCurveTo(a+u,l+h,a+u-_,l+h),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+m,l+h),e.quadraticCurveTo(a,l+h,a,l+h-m),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,l+d),e.quadraticCurveTo(a,l,a+d,l),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=Ui[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Lp(this,t),l=Object.assign({},o,this._size),u=Np(e,t,l),h=Vp(t,l,u,e);(i._to!==h.x||r._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=se(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),oy(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),ay(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:l})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[l],index:l}}),r=!la(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),l=e||!la(o,r)||a;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=Ui[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}B(Mc,"positioners",Ui);var fC={id:"tooltip",_element:Mc,positioners:Ui,afterInit(n,t,e){e&&(n.tooltip=new Mc({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Oy},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},pC=Object.freeze({__proto__:null,Colors:AP,Decimation:PP,Filler:XP,Legend:nC,SubTitle:rC,Title:iC,Tooltip:fC});const gC=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function mC(n,t,e,s){const i=n.indexOf(t);if(i===-1)return gC(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const _C=(n,t)=>n===null?null:Ut(Math.round(n),0,t);function Up(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Lc extends xs{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Y(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:mC(s,t,G(e,t),this._addedLabels),_C(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return Up.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}B(Lc,"id","category"),B(Lc,"defaults",{ticks:{callback:Up}});function yC(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:l,count:u,maxTicks:h,maxDigits:d,includeBounds:p}=n,m=r||1,_=h-1,{min:y,max:b}=t,A=!Y(o),R=!Y(a),C=!Y(u),D=(b-y)/(d+1);let M=Lf((b-y)/_/m)*m,L,E,w,x;if(M<1e-14&&!A&&!R)return[{value:y},{value:b}];x=Math.ceil(b/M)-Math.floor(y/M),x>_&&(M=Lf(x*M/_/m)*m),Y(l)||(L=Math.pow(10,l),M=Math.ceil(M*L)/L),i==="ticks"?(E=Math.floor(y/M)*M,w=Math.ceil(b/M)*M):(E=y,w=b),A&&R&&r&&uS((a-o)/r,M/1e3)?(x=Math.round(Math.min((a-o)/M,h)),M=(a-o)/x,E=o,w=a):C?(E=A?o:E,w=R?a:w,x=u-1,M=(w-E)/x):(x=(w-E)/M,Yi(x,Math.round(x),M/1e3)?x=Math.round(x):x=Math.ceil(x));const I=Math.max(Nf(M),Nf(E));L=Math.pow(10,Y(l)?I:l),E=Math.round(E*L)/L,w=Math.round(w*L)/L;let S=0;for(A&&(p&&E!==o?(e.push({value:o}),E<o&&S++,Yi(Math.round((E+S*M)*L)/L,o,$p(o,D,n))&&S++):E<o&&S++);S<x;++S){const k=Math.round((E+S*M)*L)/L;if(R&&k>a)break;e.push({value:k})}return R&&p&&w!==a?e.length&&Yi(e[e.length-1].value,a,$p(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!R||w===a)&&e.push({value:w}),e}function $p(n,t,{horizontal:e,minRotation:s}){const i=Ae(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class ga extends xs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Y(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=l=>i=e?i:l,a=l=>r=s?r:l;if(t){const l=ze(i),u=ze(r);l<0&&u<0?a(0):l>0&&u>0&&o(0)}if(i===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(i-l)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=yC(i,r);return t.bounds==="ticks"&&j_(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Dr(t,this.chart.options.locale,this.options.ticks.format)}}class Nc extends ga{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=It(t)?t:0,this.max=It(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=Ae(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}B(Nc,"id","linear"),B(Nc,"defaults",{ticks:{callback:$a.formatters.numeric}});const gr=n=>Math.floor(Sn(n)),Zn=(n,t)=>Math.pow(10,gr(n)+t);function zp(n){return n/Math.pow(10,gr(n))===1}function jp(n,t,e){const s=Math.pow(10,e),i=Math.floor(n/s);return Math.ceil(t/s)-i}function vC(n,t){const e=t-n;let s=gr(e);for(;jp(n,t,s)>10;)s++;for(;jp(n,t,s)<10;)s--;return Math.min(s,gr(n))}function bC(n,{min:t,max:e}){t=me(n.min,t);const s=[],i=gr(t);let r=vC(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=i>r?Math.pow(10,i):0,u=Math.round((t-l)*o)/o,h=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((u-h)/Math.pow(10,r)),p=me(n.min,Math.round((l+h+d*Math.pow(10,r))*o)/o);for(;p<e;)s.push({value:p,major:zp(p),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(r++,d=2,o=r>=0?1:o),p=Math.round((l+h+d*Math.pow(10,r))*o)/o;const m=me(n.max,p);return s.push({value:m,major:zp(m),significand:d}),s}class Vc extends xs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=ga.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return It(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=It(t)?Math.max(0,t):null,this.max=It(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!It(this._userMin)&&(this.min=t===Zn(this.min,0)?Zn(this.min,-1):Zn(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const r=a=>s=t?s:a,o=a=>i=e?i:a;s===i&&(s<=0?(r(1),o(10)):(r(Zn(s,-1)),o(Zn(i,1)))),s<=0&&r(Zn(i,-1)),i<=0&&o(Zn(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=bC(e,this);return t.bounds==="ticks"&&j_(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Dr(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Sn(t),this._valueRange=Sn(this.max)-Sn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Sn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}B(Vc,"id","logarithmic"),B(Vc,"defaults",{ticks:{callback:$a.formatters.logarithmic,major:{enabled:!0}}});function Fc(n){const t=n.ticks;if(t.display&&n.display){const e=se(t.backdropPadding);return G(t.font&&t.font.size,vt.font.size)+e.height}return 0}function wC(n,t,e){return e=yt(e)?e:[e],{w:SS(n,t.string,e),h:e.length*t.lineHeight}}function Hp(n,t,e,s,i){return n===s||n===i?{start:t-e/2,end:t+e/2}:n<s||n>i?{start:t-e,end:t}:{start:t,end:t+e}}function xC(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],i=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?st/r:0;for(let l=0;l<r;l++){const u=o.setContext(n.getPointLabelContext(l));i[l]=u.padding;const h=n.getPointPosition(l,n.drawingArea+i[l],a),d=Vt(u.font),p=wC(n.ctx,d,n._pointLabels[l]);s[l]=p;const m=Zt(n.getIndexAngle(l)+a),_=Math.round(qu(m)),y=Hp(_,h.x,p.w,0,180),b=Hp(_,h.y,p.h,90,270);EC(e,t,m,y,b)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=AC(n,s,i)}function EC(n,t,e,s,i){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,l=0;s.start<t.l?(a=(t.l-s.start)/r,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),i.start<t.t?(l=(t.t-i.start)/o,n.t=Math.min(n.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/o,n.b=Math.max(n.b,t.b+l))}function TC(n,t,e){const s=n.drawingArea,{extra:i,additionalAngle:r,padding:o,size:a}=e,l=n.getPointPosition(t,s+i+o,r),u=Math.round(qu(Zt(l.angle+Rt))),h=kC(l.y,a.h,u),d=SC(u),p=RC(l.x,a.w,d);return{visible:!0,x:l.x,y:h,textAlign:d,left:p,top:h,right:p+a.w,bottom:h+a.h}}function IC(n,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:r}=n;return!(an({x:e,y:s},t)||an({x:e,y:r},t)||an({x:i,y:s},t)||an({x:i,y:r},t))}function AC(n,t,e){const s=[],i=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Fc(r)/2,additionalAngle:o?st/i:0};let u;for(let h=0;h<i;h++){l.padding=e[h],l.size=t[h];const d=TC(n,h,l);s.push(d),a==="auto"&&(d.visible=IC(d,u),d.visible&&(u=d))}return s}function SC(n){return n===0||n===180?"center":n<180?"left":"right"}function RC(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function kC(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function PC(n,t,e){const{left:s,top:i,right:r,bottom:o}=e,{backdropColor:a}=t;if(!Y(a)){const l=as(t.borderRadius),u=se(t.backdropPadding);n.fillStyle=a;const h=s-u.left,d=i-u.top,p=r-s+u.width,m=o-i+u.height;Object.values(l).some(_=>_!==0)?(n.beginPath(),fr(n,{x:h,y:d,w:p,h:m,radius:l}),n.fill()):n.fillRect(h,d,p,m)}}function CC(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let i=t-1;i>=0;i--){const r=n._pointLabelItems[i];if(!r.visible)continue;const o=s.setContext(n.getPointLabelContext(i));PC(e,o,r);const a=Vt(o.font),{x:l,y:u,textAlign:h}=r;ms(e,n._pointLabels[i],l,u+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function My(n,t,e,s){const{ctx:i}=n;if(e)i.arc(n.xCenter,n.yCenter,t,0,gt);else{let r=n.getPointPosition(0,t);i.moveTo(r.x,r.y);for(let o=1;o<s;o++)r=n.getPointPosition(o,t),i.lineTo(r.x,r.y)}}function DC(n,t,e,s,i){const r=n.ctx,o=t.circular,{color:a,lineWidth:l}=t;!o&&!s||!a||!l||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(i.dash||[]),r.lineDashOffset=i.dashOffset,r.beginPath(),My(n,e,o,s),r.closePath(),r.stroke(),r.restore())}function OC(n,t,e){return Wn(n,{label:e,index:t,type:"pointLabel"})}class $i extends ga{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=se(Fc(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=It(t)&&!isNaN(t)?t:0,this.max=It(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Fc(this.options))}generateTickLabels(t){ga.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=ht(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?xC(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=gt/(this._pointLabels.length||1),s=this.options.startAngle||0;return Zt(t*e+Ae(s))}getDistanceFromCenterForValue(t){if(Y(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Y(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return OC(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-Rt+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),My(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:r}=e,o=this._pointLabels.length;let a,l,u;if(e.pointLabels.display&&CC(this,o),i.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const p=this.getContext(d),m=i.setContext(p),_=r.setContext(p);DC(this,m,l,o,_)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const h=s.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:p}=h;!p||!d||(t.lineWidth=p,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),u=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(u.x,u.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const u=s.setContext(this.getContext(l)),h=Vt(u.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),u.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=u.backdropColor;const d=se(u.backdropPadding);t.fillRect(-o/2-d.left,-r-h.size/2-d.top,o+d.width,h.size+d.height)}ms(t,a.label,0,-r,h,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),t.restore()}drawTitle(){}}B($i,"id","radialLinear"),B($i,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:$a.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),B($i,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),B($i,"descriptors",{angleLines:{_fallback:"grid"}});const Ga={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},fe=Object.keys(Ga);function Wp(n,t){return n-t}function qp(n,t){if(Y(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),It(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(Zs(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function Gp(n,t,e,s){const i=fe.length;for(let r=fe.indexOf(n);r<i-1;++r){const o=Ga[fe[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return fe[r]}return fe[i-1]}function MC(n,t,e,s,i){for(let r=fe.length-1;r>=fe.indexOf(e);r--){const o=fe[r];if(Ga[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return fe[e?fe.indexOf(e):0]}function LC(n){for(let t=fe.indexOf(n)+1,e=fe.length;t<e;++t)if(Ga[fe[t]].common)return fe[t]}function Kp(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=Gu(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function NC(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+i.add(a,1,s))l=e[a],l>=0&&(t[l].major=!0);return t}function Yp(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:NC(n,s,i,e)}class mr extends xs{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new HR._date(t.adapters.date);i.init(e),Ki(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:qp(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(u){!o&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!a&&!isNaN(u.max)&&(r=Math.max(r,u.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=It(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=It(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=pS(i,r,o);return this._unit=e.unit||(s.autoSkip?Gp(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):MC(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:LC(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Yp(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Ut(e,0,o),s=Ut(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||Gp(r.minUnit,e,s,this._getLabelCapacity(e)),a=G(i.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,u=Zs(l)||l===!0,h={};let d=e,p,m;if(u&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,u?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const _=i.ticks.source==="data"&&this.getDataTimestamps();for(p=d,m=0;p<s;p=+t.add(p,a,o),m++)Kp(h,p,_);return(p===s||i.bounds==="ticks"||m===1)&&Kp(h,p,_),Object.keys(h).sort(Wp).map(y=>+y)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return ht(o,[t,e,s],this);const a=r.time.displayFormats,l=this._unit,u=this._majorUnit,h=l&&a[l],d=u&&a[u],p=s[e],m=u&&d&&p&&p.major;return this._adapter.format(t,i||(m?d:h))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=Ae(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,Yp(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(qp(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return q_(t.sort(Wp))}}B(mr,"id","time"),B(mr,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function vo(n,t,e){let s=0,i=n.length-1,r,o,a,l;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=on(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:l}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=on(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:l}=n[i]);const u=o-r;return u?a+(l-a)*(t-r)/u:a}class Bc extends mr{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=vo(e,this.min),this._tableRange=vo(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,l,u,h;for(o=0,a=t.length;o<a;++o)u=t[o],u>=e&&u<=s&&i.push(u);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)h=i[o+1],l=i[o-1],u=i[o],Math.round((h+l)/2)!==u&&r.push({time:u,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(vo(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return vo(this._table,s*this._tableRange+this._minPos,!0)}}B(Bc,"id","timeseries"),B(Bc,"defaults",mr.defaults);var VC=Object.freeze({__proto__:null,CategoryScale:Lc,LinearScale:Nc,LogarithmicScale:Vc,RadialLinearScale:$i,TimeScale:mr,TimeSeriesScale:Bc});const FC=[jR,vP,pC,VC];_t.register(...FC);const bo="rgba(255,255,255,0.08)",wo="#a1a1aa",vn={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};_t.defaults.color="#e5e5e5";_t.defaults.font.family=vn.family;_t.defaults.font.weight=vn.weight;const Xp={renderCurvaS:(n,t=[],e=[])=>{const s=document.getElementById(n);if(!s)return;s.chart&&s.chart.destroy();const i=t.map((r,o)=>`M${o+1}`);s.chart=new _t(s,{type:"line",data:{labels:i,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:vn,usePointStyle:!0}}},scales:{x:{grid:{color:bo},ticks:{color:wo,font:vn}},y:{grid:{color:bo},ticks:{color:wo,font:vn}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new _t(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:bo},ticks:{color:wo,font:vn}},y:{grid:{color:bo},ticks:{color:wo,font:vn}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new _t(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:vn,padding:12,usePointStyle:!0}}}}})}},ge={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>'},rt={render:n=>{const t=document.getElementById("app"),e=dt.state.currentUser;if(!e){t.innerHTML=n;return}const s=dt.state.sidebarCollapsed,i=dt.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${rt.createNavItem("/","Dashboard",ge.dashboard,s)}
                        ${rt.createNavItem("/compras","Compras",ge.shoppingCart,s)}
                        ${rt.createNavItem("/relatorios","Relatórios",ge.clipboard,s)}
                        ${rt.createNavItem("/obras","Obras",ge.chart,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${rt.createNavItem("/configuracoes","Configurações",ge.settings,s)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display">
                            ${ge.logout}
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
                                ${ge.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${ge.search}
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
                                ${i==="dark"?ge.sun:ge.moon}
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
        `,rt.bindEvents()},createNavItem:(n,t,e,s)=>{var o;const r=Ot.currentRoute===n||((o=Ot.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${r}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{dt.toggleSidebar();const s=document.getElementById("sidebar"),i=s.querySelectorAll("span"),r=s.querySelector("[data-logo-text]");dt.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),i.forEach(o=>o.classList.add("hidden")),r&&r.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),i.forEach(o=>o.classList.remove("hidden")),r&&r.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const i=dt.state.currentTheme==="dark"?"light":"dark";dt.setTheme(i);const r=document.getElementById("btn-theme-toggle");r.innerHTML=i==="dark"?ge.sun:ge.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await aa.logout(),Ot.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var i;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(i=document.getElementById("global-search"))==null||i.focus())})}},BC="modulepreload",UC=function(n){return"/"+n},Qp={},$C=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(l=>{if(l=UC(l),l in Qp)return;Qp[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":BC,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Le={getObras:async()=>(await Mt(Bt(at,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await Mt(Bt(at,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await Su(Bt(at,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await Qs(Pe(at,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await Kx(Pe(at,"obras",n))},getObraStats:async(n,t=!1)=>{const e=Bt(at,"compras"),s=ue(e,Nt("obraId","==",n)),r=(await Mt(s)).docs.map(m=>({id:m.id,...m.data()}));let o=0;const a={},l={},u={};r.forEach(m=>{const _=Number(m.valor_estimado||m.valor_total||0);o+=_,a[m.status_compra]=(a[m.status_compra]||0)+1;const y=m.categoria||"Outros";if(l[y]=(l[y]||0)+_,m.data_solicitacao){const b=new Date(m.data_solicitacao),A=`${b.getFullYear()}-${String(b.getMonth()+1).padStart(2,"0")}`;u[A]=(u[A]||0)+_}});const h=Object.keys(u).length||1,d=Le.calculateCurvaS(o,h,u),p={totalCompras:r.length,totalGasto:o,porStatus:a,gastosPorCategoria:l,gastosMensais:u,curvaS:d,comprasRecentes:r.slice(0,10)};if(t)try{const{RDOService:m}=await $C(async()=>{const{RDOService:y}=await Promise.resolve().then(()=>KC);return{RDOService:y}},void 0),_=await Le.getObraById(n);if(_!=null&&_.numero_os){const y=new Date().toISOString().split("T")[0],b=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],A=await m.getByObra(_.numero_os,b,y);A&&A.length>0&&(p.rdoData=m.processRDOData(A))}}catch(m){console.warn("Erro ao buscar dados RDO:",m)}return p},calculateCurvaS:(n,t,e)=>{const s=[],i=[];let r=0;const o=Object.keys(e).sort();for(let a=0;a<t;a++){const l=(a+1)/t,u=1/(1+Math.exp(-10*(l-.5)));s.push(n*u),o[a]&&(r+=e[o[a]]),i.push(r)}return{planejado:s,realizado:i}}},zC={init:async()=>{var t;const n=dt.state.currentUser;if(n){rt.render(U.createLoader());try{let e="";if(n.role==="comprador"){const s=await ks.getCompradorStats();e=Cl.renderComprador(s),rt.render(e)}else if(n.role==="obra"||n.role==="engenheiro"){const s=n.obraPadrao||null,i=await ks.getObraStats(s);e=Cl.renderObra(i),rt.render(e)}else{const s=await ks.getDiretorStats(),i=await((t=ks.getObras)==null?void 0:t.call(ks))||await Le.getObras(),r=Le.calculateCurvaS(s.totalGasto,Math.max(Object.keys(s.gastosPorMes||{}).length,3),s.gastosPorMes||{});e=Cl.renderDiretor({...s,curvaS:r,obras:i}),rt.render(e),setTimeout(()=>{r&&Xp.renderCurvaS("chart-curva",r.planejado,r.realizado),Xp.renderStatusPie("chart-status",s.porStatus)},100)}}catch(e){console.error(e),rt.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${e.message}</div>`)}}}},ql={checkDuplicidade:async(n,t)=>{const e=ue(Bt(at,"compras"),Nt("obraId","==",n),Nt("status_compra","in",["Pendente","Em Cotação"]));return(await Mt(e)).docs.filter(r=>{const o=r.data(),a=(o.descricao||"").toLowerCase(),l=o.itens||[],u=t.toLowerCase();return a.includes(u)||l.some(h=>h.nome.toLowerCase().includes(u))}).length>0},uploadArquivo:(n,t,e)=>new Promise((s,i)=>{const r=oT(kA,t),o=iT(r,n);o.on("state_changed",a=>{const l=a.bytesTransferred/a.totalBytes*100;e&&e(l)},a=>i(a),async()=>{const a=await rT(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t={...n,data_solicitacao:kt.now().toDate().toISOString(),status_compra:"Pendente",created_at:kt.now()};return(await Su(Bt(at,"compras"),t)).id},atualizarCompra:async(n,t)=>{const e=Pe(at,"compras",n);await Qs(e,t)}},jC={renderForm:(n=[],t=[])=>`
            <div class="max-w-4xl mx-auto">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-display text-text tracking-wide">Nova Solicitação de Compra</h2>
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
                                    ${n.map(e=>`<option value="${e.id}">${e.nome_obra}</option>`).join("")}
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
                        
                        ${U.createInput({id:"descricao",label:"Descrição Resumida (ex: 50 sacos de cimento)",required:!0,className:"mb-4"})}

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Fornecedor Sugerido</label>
                                <select name="fornecedorId" class="input">
                                    <option value="">Sem preferência</option>
                                    ${t.map(e=>`<option value="${e.id}">${e.nome}</option>`).join("")}
                                </select>
                            </div>
                            ${U.createInput({id:"valor_estimado",type:"number",label:"Valor Estimado (R$)",placeholder:"0,00"})}
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
                        ${U.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.history.back()"})}
                        ${U.createButton({id:"btn-submit",text:"Registrar Solicitação",type:"submit"})}
                    </div>
                </form>
            </div>
        `},Ly={init:async()=>{rt.render(U.createLoader());try{const[n,t]=await Promise.all([Mt(Bt(at,"obras")),Mt(Bt(at,"fornecedores"))]),e=n.docs.map(i=>({id:i.id,...i.data()})),s=t.docs.map(i=>({id:i.id,...i.data()}));rt.render(jC.renderForm(e,s)),Ly.bindEvents()}catch(n){console.error(n),rt.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},bindEvents:()=>{const n=document.getElementById("form-compra"),t=document.getElementById("file-upload"),e=document.getElementById("drop-zone"),s=document.getElementById("descricao"),i=document.getElementById("obraId");let r=[];e.addEventListener("click",()=>t.click()),t.addEventListener("change",l=>o(l.target.files));const o=l=>{r=[...r,...Array.from(l)],a()},a=()=>{const l=document.getElementById("file-list");l.innerHTML=r.map((u,h)=>`
                <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <span class="text-sm truncate">${u.name}</span>
                    <button type="button" class="text-red-500 hover:text-red-700" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${h}}))">
                        ${U.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join("")};n.addEventListener("remove-file",l=>{r.splice(l.detail,1),a()}),s.addEventListener("blur",async()=>{const l=i.value,u=s.value;l&&u.length>3&&await ql.checkDuplicidade(l,u)&&U.createToast("⚠️ Atenção: Já existe um pedido similar para esta obra!","warning")}),document.getElementById("valor_estimado").addEventListener("input",l=>{const u=parseFloat(l.target.value),h=document.getElementById("justificativa-container"),d=document.getElementById("justificativa");u>5e3?(h.classList.remove("hidden"),d.required=!0):(h.classList.add("hidden"),d.required=!1)}),n.addEventListener("submit",async l=>{l.preventDefault();const u=document.getElementById("btn-submit");try{u.disabled=!0,u.innerHTML=U.createLoader();const h=[];for(const _ of r){const y=await ql.uploadArquivo(_,`compras/${Date.now()}_${_.name}`);h.push({nome:_.name,url:y})}const d=new FormData(n),m={...Object.fromEntries(d.entries()),anexos:h,solicitanteId:dt.state.currentUser.uid,solicitanteNome:dt.state.currentUser.nome};await ql.salvarCompra(m),U.createToast("Solicitação registrada com sucesso!"),Ot.navigate("/")}catch(h){console.error(h),U.createToast("Erro ao registrar: "+h.message,"error"),u.disabled=!1,u.innerHTML="<span>Registrar Solicitação</span>"}})}},Gl={getCompras:async(n={})=>{let t=Bt(at,"compras");const e=[];n.obraId&&e.push(Nt("obraId","==",n.obraId)),n.status&&e.push(Nt("status_compra","==",n.status));const s=ue(t,...e);let r=(await Mt(s)).docs.map(o=>({id:o.id,...o.data()}));if(n.search){const o=n.search.toLowerCase();r=r.filter(a=>(a.descricao||"").toLowerCase().includes(o)||(a.fornecedorNome||"").toLowerCase().includes(o)||(a.obraNome||"").toLowerCase().includes(o))}return r},updateStatus:async(n,t)=>{const e=Pe(at,"compras",n);await Qs(e,{status_compra:t})}},Kl={renderControls:(n="table")=>`
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 class="text-2xl font-display text-text tracking-wide">Relatório de Compras</h2>
                
                <div class="flex gap-2 bg-surface border border-border p-1 rounded shadow-heavy">
                    <button id="view-table" class="px-4 py-2 rounded text-sm font-display uppercase tracking-wide transition-colors ${n==="table"?"bg-primary text-canvas":"text-text-muted hover:text-text"}">
                        Tabela
                    </button>
                    <button id="view-kanban" class="px-4 py-2 rounded text-sm font-display uppercase tracking-wide transition-colors ${n==="kanban"?"bg-primary text-canvas":"text-text-muted hover:text-text"}">
                        Kanban
                    </button>
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
                        <!-- Populated dynamically -->
                    </select>
                    <select id="filter-prioridade" class="input text-sm">
                        <option value="">Todas Prioridades</option>
                        <option value="Normal">Normal</option>
                        <option value="Alta">Alta</option>
                        <option value="Critica">Crítica</option>
                    </select>
                    <div class="flex gap-2">
                        <button id="btn-apply-filters" class="btn-primary text-sm flex-1">Aplicar</button>
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
        `,renderTable:n=>n.length?`
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
                            ${n.map(t=>`
                                <tr class="hover:bg-canvas transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${_e.formatDate(t.data_solicitacao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${t.descricao}">${t.descricao}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${_e.formatCurrency(t.valor_estimado||0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-display rounded border border-border text-text">
                                            ${t.status_compra}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button class="text-primary hover:text-primary-strong mr-2 font-display uppercase tracking-wide">Editar</button>
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        `:'<div class="text-center py-10 heading-muted">Nenhum registro encontrado.</div>',renderKanban:n=>`
            <div class="flex overflow-x-auto gap-4 pb-4 h-[calc(100vh-250px)]">
                ${["Pendente","Em Cotação","Aprovado","Comprado","Entregue"].map(e=>{const s=n.filter(i=>i.status_compra===e);return`
                        <div class="min-w-[300px] w-[300px] flex flex-col bg-surface border border-border rounded p-3 shadow-heavy">
                            <div class="flex justify-between items-center mb-3 px-1">
                                <h3 class="font-display text-text">${e}</h3>
                                <span class="bg-canvas text-text-muted text-xs px-2 py-1 rounded border border-border font-display">${s.length}</span>
                            </div>
                            <div class="flex-1 overflow-y-auto space-y-3 custom-scrollbar" ondragover="event.preventDefault()" ondrop="document.dispatchEvent(new CustomEvent('kanban-drop', {detail: {status: '${e}'}}))">
                                ${s.map(i=>`
                                    <div class="bg-surface p-4 rounded shadow-heavy border border-border cursor-move hover:border-primary transition-colors" draggable="true" data-id="${i.id}">
                                        <div class="flex justify-between items-start mb-2">
                                            <span class="text-xs font-display text-primary bg-canvas px-2 py-0.5 rounded border border-primary">${i.obraId}</span>
                                            <span class="text-xs text-text-muted">${_e.formatDate(i.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${i.descricao}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${_e.formatCurrency(i.valor_estimado||0)}</span>
                                            <button class="text-text-muted hover:text-primary" title="Mover Próximo" onclick="document.dispatchEvent(new CustomEvent('kanban-move-next', {detail: {id: '${i.id}', current: '${e}'}}))">
                                                ➡️
                                            </button>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `},Ct={currentView:"table",compras:[],filters:{},init:async()=>{await Ct.load(),await Ct.render()},load:async()=>{Ct.compras=await Gl.getCompras()},render:async()=>{const n=document.createElement("div");n.innerHTML=Kl.renderControls(Ct.currentView);const t=document.createElement("div");t.id="reports-content",t.innerHTML=Ct.currentView==="table"?Kl.renderTable(Ct.compras):Kl.renderKanban(Ct.compras),n.appendChild(t),rt.render(n.innerHTML),Ct.bindEvents()},applyFilters:async()=>{var u,h,d,p,m,_,y;const n=((u=document.getElementById("filter-search"))==null?void 0:u.value.toLowerCase())||"",t=((h=document.getElementById("filter-status"))==null?void 0:h.value)||"",e=((d=document.getElementById("filter-obra"))==null?void 0:d.value)||"",s=((p=document.getElementById("filter-prioridade"))==null?void 0:p.value)||"",i=((m=document.getElementById("filter-date-start"))==null?void 0:m.value)||"",r=((_=document.getElementById("filter-date-end"))==null?void 0:_.value)||"",o=((y=document.getElementById("filter-only-delayed"))==null?void 0:y.checked)||!1;Ct.filters={search:n,status:t,obra:e,prioridade:s,dateStart:i,dateEnd:r,onlyDelayed:o};const a=await Gl.getCompras(),l=new Date;Ct.compras=a.filter(b=>{var A;if(n&&!((A=b.descricao)!=null&&A.toLowerCase().includes(n))||t&&b.status_compra!==t||e&&b.obraId!==e||s&&b.prioridade!==s||i&&b.data_solicitacao<i||r&&b.data_solicitacao>r)return!1;if(o){const R=b.data_entrega_prevista?new Date(b.data_entrega_prevista):null;if(!R||R>=l||b.status_compra==="Entregue")return!1}return!0}),Ct.render()},bindEvents:()=>{var n,t,e,s;(n=document.getElementById("view-table"))==null||n.addEventListener("click",()=>{Ct.currentView="table",Ct.render()}),(t=document.getElementById("view-kanban"))==null||t.addEventListener("click",()=>{Ct.currentView="kanban",Ct.render()}),(e=document.getElementById("btn-apply-filters"))==null||e.addEventListener("click",()=>{Ct.applyFilters()}),(s=document.getElementById("btn-clear-filters"))==null||s.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1,Ct.applyFilters()}),document.addEventListener("kanban-move-next",async i=>{const{id:r,current:o}=i.detail,a=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],l=a.indexOf(o)+1;if(l<a.length){const u=a[l];try{await Gl.updateStatus(r,u),U.createToast(`Movido para ${u}`),await Ct.load(),Ct.render()}catch(h){U.createToast("Erro ao mover: "+h.message,"error")}}})}},Jp={getUsers:async()=>(await Mt(Bt(at,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await Qs(Pe(at,"usuarios",n),t)},createUserProfile:async(n,t)=>{await Gx(Pe(at,"usuarios",n),t)}},HC={render:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Configurações</h2>
                
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-display text-text">Usuários do Sistema</h3>
                        ${U.createButton({text:"Novo Usuário",onClick:"alert('Funcionalidade requer Admin SDK ou Cloud Functions')"})}
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
        `},Uc={init:async()=>{const n=dt.state.currentUser;if(n.role!=="administrador"&&n.role!=="diretor"){rt.render('<div class="p-6 text-red-500">Acesso negado. Apenas administradores.</div>');return}rt.render(U.createLoader());try{const t=await Jp.getUsers();rt.render(HC.render(t)),Uc.bindEvents()}catch(t){rt.render(`<div class="text-red-500">Erro: ${t.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&Jp.updateUser(t,{role:e}).then(()=>{U.createToast("Usuário atualizado!"),Uc.init()}).catch(s=>U.createToast("Erro: "+s.message,"error"))})}},Zp={render:(n=[])=>{const t=new Date,e=t.getMonth(),s=t.getFullYear(),i={};n.forEach(d=>{if(d.data_entrega_prevista){const m=new Date(d.data_entrega_prevista).toISOString().split("T")[0];i[m]||(i[m]=[]),i[m].push(d)}});const r=new Date(s,e,1),a=new Date(s,e+1,0).getDate(),l=r.getDay();let h=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e]} ${s}</h3>
                </div>
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(d=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${d}</div>`).join("")}
        `;for(let d=0;d<l;d++)h+='<div class="aspect-square"></div>';for(let d=1;d<=a;d++){const p=new Date(s,e,d),m=p.toISOString().split("T")[0],_=i[m]||[],y=d===t.getDate()&&e===t.getMonth(),b=p<t&&!y;h+=`
                <div class="aspect-square border border-border rounded p-1 ${y?"bg-primary/10 border-primary":"bg-surface"} ${b?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${y?"text-primary font-bold":"text-text"}">${d}</div>
                    ${_.length>0?`
                        <div class="mt-1 space-y-1">
                            ${_.slice(0,2).map(A=>{var R;return`
                                <div class="text-[10px] bg-primary/20 border border-primary rounded px-1 truncate" title="${A.descricao}">
                                    ${((R=A.descricao)==null?void 0:R.substring(0,15))||"Compra"}
                                </div>
                            `}).join("")}
                            ${_.length>2?`<div class="text-[9px] text-text-muted">+${_.length-2}</div>`:""}
                        </div>
                    `:""}
                </div>
            `}return h+=`
                </div>
            </div>
        `,h},renderTimeline:(n=[])=>{const t=n.filter(e=>e.data_entrega_prevista&&new Date(e.data_entrega_prevista)>=new Date).sort((e,s)=>new Date(e.data_entrega_prevista)-new Date(s.data_entrega_prevista)).slice(0,10);return`
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
        `}},Yl={renderList:n=>`
            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-display text-text tracking-wide">Gestão de Obras</h2>
                    ${U.createButton({id:"btn-nova-obra",text:"Nova Obra",onClick:"window.location.hash = '/obras/nova'"})}
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
                                ${t.orcamento?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${_e.formatCurrency(t.orcamento)}</p>`:""}
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
                            ${U.createInput({id:"nome_obra",label:"Nome da Obra *",value:(n==null?void 0:n.nome_obra)||"",required:!0})}
                            ${U.createInput({id:"apelido_obra",label:"Apelido/Nome Curto",value:(n==null?void 0:n.apelido_obra)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${U.createInput({id:"centro_custo",label:"Centro de Custo *",value:(n==null?void 0:n.centro_custo)||"",required:!0})}
                            ${U.createInput({id:"responsavel",label:"Responsável",value:(n==null?void 0:n.responsavel)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${U.createInput({id:"orcamento",label:"Orçamento Total (R$)",type:"number",value:(n==null?void 0:n.orcamento)||"",placeholder:"0.00"})}
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Status</label>
                                <select id="status" name="status" class="input">
                                    <option value="Ativa" ${(n==null?void 0:n.status)==="Ativa"?"selected":""}>Ativa</option>
                                    <option value="Pausada" ${(n==null?void 0:n.status)==="Pausada"?"selected":""}>Pausada</option>
                                    <option value="Concluída" ${(n==null?void 0:n.status)==="Concluída"?"selected":""}>Concluída</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="text-lg font-display mb-4 text-text">Localização</h3>
                        
                        ${U.createInput({id:"endereco",label:"Endereço Completo",value:(n==null?void 0:n.endereco)||"",className:"mb-4"})}

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            ${U.createInput({id:"cidade",label:"Cidade",value:(n==null?void 0:n.cidade)||""})}
                            ${U.createInput({id:"estado",label:"Estado",value:(n==null?void 0:n.estado)||"",placeholder:"UF"})}
                            ${U.createInput({id:"cep",label:"CEP",value:(n==null?void 0:n.cep)||"",placeholder:"00000-000"})}
                        </div>
                    </div>

                    <div class="flex justify-end gap-4">
                        ${U.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.location.hash = '/obras'"})}
                        ${U.createButton({id:"btn-submit",text:t?"Salvar Alterações":"Criar Obra",type:"submit"})}
                    </div>
                </form>
            </div>
        `},renderDashboard:(n,t)=>`
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-display text-text tracking-wide">${n.nome_obra}</h2>
                        <p class="heading-muted">${n.apelido_obra||""} • ${n.centro_custo}</p>
                    </div>
                    <button onclick="window.location.hash = '/obras/${n.id}/editar'" 
                            class="btn-secondary">
                        Editar Obra
                    </button>
                </div>

                <!-- KPIs -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    ${U.createCard({title:"Total de Compras",content:`<p class="text-4xl font-display text-primary uppercase">${t.totalCompras}</p>`,className:"accent-left"})}
                    ${U.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${_e.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${_e.formatCurrency(n.orcamento||0)}</p>`})}
                    ${U.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${t.porStatus.Pendente||0}</p>`,className:"accent-left"})}
                    ${U.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${t.porStatus.Entregue||0}</p>`,className:"accent-left"})}
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

                <!-- Calendário e Timeline -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2">
                        ${Zp.render(t.comprasRecentes)}
                    </div>
                    <div>
                        ${Zp.renderTimeline(t.comprasRecentes)}
                    </div>
                </div>

                <!-- Análise de RDO (Diário de Obra) -->
                ${t.rdoData?`
                    <div class="space-y-6">
                        <h3 class="text-xl font-display text-text tracking-wide">Análise de Mão de Obra (RDO)</h3>
                        
                        <!-- KPIs RDO -->
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                            ${U.createCard({title:"Total de Horas",content:`<p class="text-4xl font-display text-primary uppercase">${t.rdoData.totalHoras.toFixed(0)}</p>`,className:"accent-left"})}
                            ${U.createCard({title:"Média Horas/Dia",content:`<p class="text-4xl font-display text-text uppercase">${t.rdoData.mediaHorasDia.toFixed(1)}</p>`})}
                            ${U.createCard({title:"Total Funcionários",content:`<p class="text-4xl font-display text-text uppercase">${t.rdoData.totalFuncionarios}</p>`})}
                            ${U.createCard({title:"Média Func./Dia",content:`<p class="text-4xl font-display text-text uppercase">${t.rdoData.mediaFuncionariosDia.toFixed(1)}</p>`})}
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
                    </div>
                `:""}

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
                                ${t.comprasRecentes.map(e=>`
                                    <tr class="hover:bg-canvas">
                                        <td class="px-6 py-4 text-sm text-text-muted">${_e.formatDate(e.data_solicitacao)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${e.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${_e.formatCurrency(e.valor_estimado||0)}</td>
                                        <td class="px-6 py-4 text-sm">
                                            <span class="px-2 py-1 text-xs rounded border border-border text-text font-display uppercase tracking-wide">
                                                ${e.status_compra}
                                            </span>
                                        </td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `},Ri="rgba(255,255,255,0.08)",Ds="#a1a1aa",xe={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};_t.defaults.color="#e5e5e5";_t.defaults.font.family=xe.family;_t.defaults.font.weight=xe.weight;const xo={renderCategorias:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new _t(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Ri},ticks:{color:Ds,font:xe}},y:{grid:{color:Ri},ticks:{color:Ds,font:xe}}}}})},renderStatusObra:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new _t(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:xe,padding:12,usePointStyle:!0}}}}})},renderCurvaS:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new _t(s,{type:"line",data:{labels:t.map((i,r)=>`Mês ${r+1}`),datasets:[{label:"Planejado",data:t,borderColor:"#a1a1aa",backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:xe,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:"#e5e5e5",bodyColor:"#a1a1aa",borderColor:"#333333",borderWidth:1,titleFont:xe,bodyFont:xe}},scales:{x:{grid:{color:Ri},ticks:{color:Ds,font:xe}},y:{grid:{color:Ri},ticks:{color:Ds,font:xe,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new _t(e,{type:"bar",data:{labels:s.map(r=>{const[o,a]=r.split("-");return`${a}/${o.slice(2)}`}),datasets:[{label:"Gastos Mensais",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Ds,font:xe}},y:{grid:{color:Ri},ticks:{color:Ds,font:xe,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},WC="https://rdo.axelindustrial.com.br/api",{TOKEN:qC}=SA(),GC={getByObra:async(n,t,e)=>{try{const s=await fetch(`${WC}/rdos`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${qC}`},body:JSON.stringify({obra_id:n,data_inicio:t,data_fim:e})});if(!s.ok)throw new Error("Erro ao buscar RDOs");return await s.json()}catch(s){return console.error("RDO API Error:",s),[]}},processRDOData:n=>{const t={},e={},s={};let i=0,r=new Set;n.forEach(a=>{const l=a.data;t[l]||(t[l]=0),t[l]+=Number(a.horas_trabalhadas||0);const u=a.funcao||"Outros";e[u]||(e[u]=0),e[u]+=Number(a.horas_trabalhadas||0),s[l]||(s[l]=new Set),a.funcionario_id&&s[l].add(a.funcionario_id),i+=Number(a.horas_trabalhadas||0),a.funcionario_id&&r.add(a.funcionario_id)});const o={};return Object.keys(s).forEach(a=>{o[a]=s[a].size}),{horasPorDia:t,horasPorFuncao:e,funcionariosPorDia:o,totalHoras:i,totalFuncionarios:r.size,mediaHorasDia:i/Object.keys(t).length||0,mediaFuncionariosDia:r.size/Object.keys(s).length||0}},calculateProductivity:(n,t)=>!t||t===0?0:(n/t).toFixed(2)},KC=Object.freeze(Object.defineProperty({__proto__:null,RDOService:GC},Symbol.toStringTag,{value:"Module"})),Xl="rgba(255,255,255,0.08)",Eo="#a1a1aa",ki={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},Ql={renderHorasPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new _t(e,{type:"line",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Horas Trabalhadas",data:i,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:2,fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Xl},ticks:{color:Eo,font:ki}},y:{grid:{color:Xl},ticks:{color:Eo,font:ki},beginAtZero:!0}}}})},renderHorasPorFuncao:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new _t(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:ki,padding:12,usePointStyle:!0}}}}})},renderFuncionariosPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new _t(e,{type:"bar",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Funcionários",data:i,backgroundColor:"#0ea5e9",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Eo,font:ki}},y:{grid:{color:Xl},ticks:{color:Eo,font:ki,stepSize:1},beginAtZero:!0}}}})}},Vs={initList:async()=>{rt.render(U.createLoader());try{const n=await Le.getObras();rt.render(Yl.renderList(n))}catch(n){console.error(n),rt.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{rt.render(U.createLoader());try{let t=null;n&&(t=await Le.getObraById(n)),rt.render(Yl.renderForm(t)),Vs.bindFormEvents(n)}catch(t){console.error(t),rt.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{rt.render(U.createLoader());try{const t=await Le.getObraById(n);if(!t){rt.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const e=await Le.getObraStats(n,!0);rt.render(Yl.renderDashboard(t,e)),setTimeout(()=>{xo.renderCategorias("chart-categorias",e.gastosPorCategoria),xo.renderStatusObra("chart-status-obra",e.porStatus),e.curvaS&&xo.renderCurvaS("chart-curva-s",e.curvaS.planejado,e.curvaS.realizado),e.gastosMensais&&xo.renderGastosMensais("chart-gastos-mensais",e.gastosMensais),e.rdoData&&(Ql.renderHorasPorDia("chart-rdo-horas",e.rdoData.horasPorDia),Ql.renderHorasPorFuncao("chart-rdo-funcao",e.rdoData.horasPorFuncao),Ql.renderFuncionariosPorDia("chart-rdo-funcionarios",e.rdoData.funcionariosPorDia))},100)}catch(t){console.error(t),rt.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=U.createLoader();const i=new FormData(t),r=Object.fromEntries(i.entries());r.orcamento&&(r.orcamento=Number(r.orcamento)),n?(await Le.updateObra(n,r),U.createToast("Obra atualizada com sucesso!")):(await Le.createObra(r),U.createToast("Obra criada com sucesso!")),Ot.navigate("/obras")}catch(i){console.error(i),U.createToast("Erro ao salvar: "+i.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},$c={create:async n=>(await Su(Bt(at,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=ue(Bt(at,"notificacoes"),Nt("userId","==",n),yc("created_at","desc"),Ro(t));return(await Mt(e)).docs.map(i=>({id:i.id,...i.data()}))},markAsRead:async n=>{await Qs(Pe(at,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=ue(Bt(at,"notificacoes"),Nt("userId","==",n),Nt("lida","==",!1)),s=(await Mt(t)).docs.map(i=>Qs(Pe(at,"notificacoes",i.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=ue(Bt(at,"compras"),Nt("status_compra","in",["Comprado","Em Trânsito"]),Nt("data_entrega_prevista","<=",n.toISOString())),e=await Mt(t),s=[];for(const i of e.docs){const r=i.data(),o=Math.ceil((new Date(r.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:r.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${r.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${i.id}`,prioridade:o===0?"alta":"normal"})}for(const i of s)await $c.create(i);return s.length}},tg={renderBell:(n=0)=>`
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${ge.bell}
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
        `},we={notifications:[],unreadCount:0,init:async()=>{dt.state.currentUser&&(await we.load(),we.render(),we.bindEvents(),setInterval(()=>we.load(),12e4))},load:async()=>{const n=dt.state.currentUser;we.notifications=await $c.getByUser(n.uid,20),we.unreadCount=we.notifications.filter(t=>!t.lida).length,we.render()},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=tg.renderBell(we.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=tg.renderDropdown(we.notifications),n.appendChild(t)},bindEvents:()=>{document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=dt.state.currentUser;await $c.markAllAsRead(t.uid),await we.load()}})}};console.log("[Main] Inicializando aplicação...");const YC=async()=>{try{await PA(),console.log("[Main] Firebase inicializado."),dt.applyTheme(dt.state.currentTheme||"dark"),await aa.init(),dt.state.currentUser&&await we.init(),Ot.init(),Ot.on("/",zC.init),Ot.on("/login",Sf.initLogin),Ot.on("/forgot-password",Sf.initForgotPassword),Ot.on("/compras",Ly.init),Ot.on("/relatorios",Ct.init),Ot.on("/configuracoes",Uc.init),Ot.on("/obras",Vs.initList),Ot.on("/obras/nova",()=>Vs.initForm()),Ot.on("/obras/:id",({id:t})=>Vs.initDashboard(t)),Ot.on("/obras/:id/dashboard",({id:t})=>Vs.initDashboard(t)),Ot.on("/obras/:id/editar",({id:t})=>Vs.initForm(t)),Ot.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};YC();
