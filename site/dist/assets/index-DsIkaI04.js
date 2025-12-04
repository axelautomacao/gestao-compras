var bv=Object.defineProperty;var xv=(n,t,e)=>t in n?bv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var U=(n,t,e)=>xv(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var ld={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},wv=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),s.push(e[h],e[d],e[p],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ag(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wv(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const d=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new Ev;const p=r<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),d!==64){const _=u<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ev extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tv=function(n){const t=ag(n);return cg.encodeByteArray(t,!0)},Go=function(n){return Tv(n).replace(/\./g,"")},lg=function(n){try{return cg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Iv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Av=()=>Iv().__FIREBASE_DEFAULTS__,Sv=()=>{if(typeof process>"u"||typeof ld>"u")return;const n=ld.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&lg(n[1]);return t&&JSON.parse(t)},xa=()=>{try{return Av()||Sv()||Rv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ug=n=>{var t,e;return(e=(t=xa())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},hg=n=>{const t=ug(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},dg=()=>{var n;return(n=xa())===null||n===void 0?void 0:n.config},fg=n=>{var t;return(t=xa())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function pg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Go(JSON.stringify(e)),Go(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function Pv(){var n;const t=(n=xa())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ov(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lv(){const n=ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Nv(){return!Pv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vv(){try{return typeof indexedDB=="object"}catch{return!1}}function Fv(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="FirebaseError";class Ge extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Bv,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Uv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ge(i,a,s)}}function Uv(n,t){return n.replace($v,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const $v=/\{\$([^}]+)}/g;function zv(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ko(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(ud(r)&&ud(o)){if(!Ko(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function ud(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Li(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function Ni(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function jv(n,t){const e=new Hv(n,t);return e.subscribe.bind(e)}class Hv{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Wv(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=wc),i.error===void 0&&(i.error=wc),i.complete===void 0&&(i.complete=wc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wv(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function wc(){}/**
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
 */function kt(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class qv{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new Cv;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Kv(t))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=is){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=is){return this.instances.has(t)}getOptions(t=is){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gv(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=is){return this.component?this.component.multipleInstances?t:is:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gv(n){return n===is?void 0:n}function Kv(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new qv(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Xv={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Qv=Z.INFO,Jv={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Zv=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Jv[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Kl{constructor(t){this.name=t,this._logLevel=Qv,this._logHandler=Zv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const tb=(n,t)=>t.some(e=>n instanceof e);let hd,dd;function eb(){return hd||(hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nb(){return dd||(dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gg=new WeakMap,nl=new WeakMap,mg=new WeakMap,Ec=new WeakMap,Yl=new WeakMap;function sb(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Mn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&gg.set(e,n)}).catch(()=>{}),Yl.set(t,n),t}function ib(n){if(nl.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});nl.set(n,t)}let sl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return nl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||mg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Mn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function rb(n){sl=n(sl)}function ob(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(Tc(this),t,...e);return mg.set(s,t.sort?t.sort():[t]),Mn(s)}:nb().includes(n)?function(...t){return n.apply(Tc(this),t),Mn(gg.get(this))}:function(...t){return Mn(n.apply(Tc(this),t))}}function ab(n){return typeof n=="function"?ob(n):(n instanceof IDBTransaction&&ib(n),tb(n,eb())?new Proxy(n,sl):n)}function Mn(n){if(n instanceof IDBRequest)return sb(n);if(Ec.has(n))return Ec.get(n);const t=ab(n);return t!==n&&(Ec.set(n,t),Yl.set(t,n)),t}const Tc=n=>Yl.get(n);function cb(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=Mn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const lb=["get","getKey","getAll","getAllKeys","count"],ub=["put","add","delete","clear"],Ic=new Map;function fd(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ic.get(t))return Ic.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=ub.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||lb.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&c.done]))[0]};return Ic.set(t,r),r}rb(n=>({...n,get:(t,e,s)=>fd(t,e)||n.get(t,e,s),has:(t,e)=>!!fd(t,e)||n.has(t,e)}));/**
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
 */class hb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(db(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function db(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const il="@firebase/app",pd="0.10.13";/**
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
 */const fn=new Kl("@firebase/app"),fb="@firebase/app-compat",pb="@firebase/analytics-compat",gb="@firebase/analytics",mb="@firebase/app-check-compat",_b="@firebase/app-check",yb="@firebase/auth",vb="@firebase/auth-compat",bb="@firebase/database",xb="@firebase/data-connect",wb="@firebase/database-compat",Eb="@firebase/functions",Tb="@firebase/functions-compat",Ib="@firebase/installations",Ab="@firebase/installations-compat",Sb="@firebase/messaging",Rb="@firebase/messaging-compat",Cb="@firebase/performance",kb="@firebase/performance-compat",Pb="@firebase/remote-config",Db="@firebase/remote-config-compat",Ob="@firebase/storage",Mb="@firebase/storage-compat",Lb="@firebase/firestore",Nb="@firebase/vertexai-preview",Vb="@firebase/firestore-compat",Fb="firebase",Bb="10.14.1";/**
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
 */const rl="[DEFAULT]",Ub={[il]:"fire-core",[fb]:"fire-core-compat",[gb]:"fire-analytics",[pb]:"fire-analytics-compat",[_b]:"fire-app-check",[mb]:"fire-app-check-compat",[yb]:"fire-auth",[vb]:"fire-auth-compat",[bb]:"fire-rtdb",[xb]:"fire-data-connect",[wb]:"fire-rtdb-compat",[Eb]:"fire-fn",[Tb]:"fire-fn-compat",[Ib]:"fire-iid",[Ab]:"fire-iid-compat",[Sb]:"fire-fcm",[Rb]:"fire-fcm-compat",[Cb]:"fire-perf",[kb]:"fire-perf-compat",[Pb]:"fire-rc",[Db]:"fire-rc-compat",[Ob]:"fire-gcs",[Mb]:"fire-gcs-compat",[Lb]:"fire-fst",[Vb]:"fire-fst-compat",[Nb]:"fire-vertex","fire-js":"fire-js",[Fb]:"fire-js-all"};/**
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
 */const Yo=new Map,$b=new Map,ol=new Map;function gd(n,t){try{n.container.addComponent(t)}catch(e){fn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function fs(n){const t=n.name;if(ol.has(t))return fn.debug(`There were multiple attempts to register component ${t}.`),!1;ol.set(t,n);for(const e of Yo.values())gd(e,n);for(const e of $b.values())gd(e,n);return!0}function wa(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function sn(n){return n.settings!==void 0}/**
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
 */const zb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new wr("app","Firebase",zb);/**
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
 */class jb{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=Bb;function _g(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:rl,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(e||(e=dg()),!e)throw Ln.create("no-options");const r=Yo.get(i);if(r){if(Ko(e,r.options)&&Ko(s,r.config))return r;throw Ln.create("duplicate-app",{appName:i})}const o=new Yv(i);for(const c of ol.values())o.addComponent(c);const a=new jb(e,s,o);return Yo.set(i,a),a}function Xl(n=rl){const t=Yo.get(n);if(!t&&n===rl&&dg())return _g();if(!t)throw Ln.create("no-app",{appName:n});return t}function Ue(n,t,e){var s;let i=(s=Ub[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}fs(new Bn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Hb="firebase-heartbeat-database",Wb=1,ir="firebase-heartbeat-store";let Ac=null;function yg(){return Ac||(Ac=cb(Hb,Wb,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ir)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ln.create("idb-open",{originalErrorMessage:n.message})})),Ac}async function qb(n){try{const e=(await yg()).transaction(ir),s=await e.objectStore(ir).get(vg(n));return await e.done,s}catch(t){if(t instanceof Ge)fn.warn(t.message);else{const e=Ln.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});fn.warn(e.message)}}}async function md(n,t){try{const s=(await yg()).transaction(ir,"readwrite");await s.objectStore(ir).put(t,vg(n)),await s.done}catch(e){if(e instanceof Ge)fn.warn(e.message);else{const s=Ln.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});fn.warn(s.message)}}}function vg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gb=1024,Kb=30*24*60*60*1e3;class Yb{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Qb(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_d();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Kb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){fn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_d(),{heartbeatsToSend:s,unsentEntries:i}=Xb(this._heartbeatsCache.heartbeats),r=Go(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return fn.warn(e),""}}}function _d(){return new Date().toISOString().substring(0,10)}function Xb(n,t=Gb){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),yd(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),yd(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Qb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vv()?Fv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await qb(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return md(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return md(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function yd(n){return Go(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Jb(n){fs(new Bn("platform-logger",t=>new hb(t),"PRIVATE")),fs(new Bn("heartbeat",t=>new Yb(t),"PRIVATE")),Ue(il,pd,n),Ue(il,pd,"esm2017"),Ue("fire-js","")}Jb("");var Zb="firebase",t0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(Zb,t0,"app");var vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls,bg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(A,R,C){for(var T=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)T[lt-2]=arguments[lt];return y.prototype[R].apply(A,T)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(R=0;16>R;++R)A[R]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],R=E.g[2];var C=E.g[3],T=y+(C^w&(R^C))+A[0]+3614090360&4294967295;y=w+(T<<7&4294967295|T>>>25),T=C+(R^y&(w^R))+A[1]+3905402710&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(w^C&(y^w))+A[2]+606105819&4294967295,R=C+(T<<17&4294967295|T>>>15),T=w+(y^R&(C^y))+A[3]+3250441966&4294967295,w=R+(T<<22&4294967295|T>>>10),T=y+(C^w&(R^C))+A[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=C+(R^y&(w^R))+A[5]+1200080426&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(w^C&(y^w))+A[6]+2821735955&4294967295,R=C+(T<<17&4294967295|T>>>15),T=w+(y^R&(C^y))+A[7]+4249261313&4294967295,w=R+(T<<22&4294967295|T>>>10),T=y+(C^w&(R^C))+A[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=C+(R^y&(w^R))+A[9]+2336552879&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(w^C&(y^w))+A[10]+4294925233&4294967295,R=C+(T<<17&4294967295|T>>>15),T=w+(y^R&(C^y))+A[11]+2304563134&4294967295,w=R+(T<<22&4294967295|T>>>10),T=y+(C^w&(R^C))+A[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=C+(R^y&(w^R))+A[13]+4254626195&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(w^C&(y^w))+A[14]+2792965006&4294967295,R=C+(T<<17&4294967295|T>>>15),T=w+(y^R&(C^y))+A[15]+1236535329&4294967295,w=R+(T<<22&4294967295|T>>>10),T=y+(R^C&(w^R))+A[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=C+(w^R&(y^w))+A[6]+3225465664&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^w&(C^y))+A[11]+643717713&4294967295,R=C+(T<<14&4294967295|T>>>18),T=w+(C^y&(R^C))+A[0]+3921069994&4294967295,w=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(w^R))+A[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=C+(w^R&(y^w))+A[10]+38016083&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^w&(C^y))+A[15]+3634488961&4294967295,R=C+(T<<14&4294967295|T>>>18),T=w+(C^y&(R^C))+A[4]+3889429448&4294967295,w=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(w^R))+A[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=C+(w^R&(y^w))+A[14]+3275163606&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^w&(C^y))+A[3]+4107603335&4294967295,R=C+(T<<14&4294967295|T>>>18),T=w+(C^y&(R^C))+A[8]+1163531501&4294967295,w=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(w^R))+A[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=C+(w^R&(y^w))+A[2]+4243563512&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^w&(C^y))+A[7]+1735328473&4294967295,R=C+(T<<14&4294967295|T>>>18),T=w+(C^y&(R^C))+A[12]+2368359562&4294967295,w=R+(T<<20&4294967295|T>>>12),T=y+(w^R^C)+A[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=C+(y^w^R)+A[8]+2272392833&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^w)+A[11]+1839030562&4294967295,R=C+(T<<16&4294967295|T>>>16),T=w+(R^C^y)+A[14]+4259657740&4294967295,w=R+(T<<23&4294967295|T>>>9),T=y+(w^R^C)+A[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=C+(y^w^R)+A[4]+1272893353&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^w)+A[7]+4139469664&4294967295,R=C+(T<<16&4294967295|T>>>16),T=w+(R^C^y)+A[10]+3200236656&4294967295,w=R+(T<<23&4294967295|T>>>9),T=y+(w^R^C)+A[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=C+(y^w^R)+A[0]+3936430074&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^w)+A[3]+3572445317&4294967295,R=C+(T<<16&4294967295|T>>>16),T=w+(R^C^y)+A[6]+76029189&4294967295,w=R+(T<<23&4294967295|T>>>9),T=y+(w^R^C)+A[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=C+(y^w^R)+A[12]+3873151461&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^w)+A[15]+530742520&4294967295,R=C+(T<<16&4294967295|T>>>16),T=w+(R^C^y)+A[2]+3299628645&4294967295,w=R+(T<<23&4294967295|T>>>9),T=y+(R^(w|~C))+A[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=C+(w^(y|~R))+A[7]+1126891415&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~w))+A[14]+2878612391&4294967295,R=C+(T<<15&4294967295|T>>>17),T=w+(C^(R|~y))+A[5]+4237533241&4294967295,w=R+(T<<21&4294967295|T>>>11),T=y+(R^(w|~C))+A[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=C+(w^(y|~R))+A[3]+2399980690&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~w))+A[10]+4293915773&4294967295,R=C+(T<<15&4294967295|T>>>17),T=w+(C^(R|~y))+A[1]+2240044497&4294967295,w=R+(T<<21&4294967295|T>>>11),T=y+(R^(w|~C))+A[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=C+(w^(y|~R))+A[15]+4264355552&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~w))+A[6]+2734768916&4294967295,R=C+(T<<15&4294967295|T>>>17),T=w+(C^(R|~y))+A[13]+1309151649&4294967295,w=R+(T<<21&4294967295|T>>>11),T=y+(R^(w|~C))+A[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=C+(w^(y|~R))+A[11]+3174756917&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~w))+A[2]+718787259&4294967295,R=C+(T<<15&4294967295|T>>>17),T=w+(C^(R|~y))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+C&4294967295}s.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,A=this.B,R=this.h,C=0;C<y;){if(R==0)for(;C<=w;)i(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<y;)if(A[R++]=E.charCodeAt(C++),R==this.blockSize){i(this,A),R=0;break}}else for(;C<y;)if(A[R++]=E[C++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=y},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var A=0;32>A;A+=8)E[w++]=this.g[y]>>>A&255;return E};function r(E,y){var w=a;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],A=!0,R=E.length-1;0<=R;R--){var C=E[R]|0;A&&C==y||(w[R]=C,A=!1)}this.g=w}var a={};function c(E){return-128<=E&&128>E?r(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return d;if(0>E)return b(u(-E));for(var y=[],w=1,A=0;E>=w;A++)y[A]=E/w|0,w*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return b(h(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),A=d,R=0;R<E.length;R+=8){var C=Math.min(8,E.length-R),T=parseInt(E.substring(R,R+C),y);8>C?(C=u(Math.pow(y,C)),A=A.j(C).add(u(T))):(A=A.j(w),A=A.add(u(T)))}return A}var d=c(0),p=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(v(this))return-b(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var A=this.i(w);E+=(0<=A?A:4294967296+A)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(_(this))return"0";if(v(this))return"-"+b(this).toString(E);for(var y=u(Math.pow(E,6)),w=this,A="";;){var R=k(w,y).g;w=I(w,R.j(y));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=R,_(w))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function _(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function v(E){return E.h==-1}n.l=function(E){return E=I(this,E),v(E)?-1:_(E)?0:1};function b(E){for(var y=E.g.length,w=[],A=0;A<y;A++)w[A]=~E.g[A];return new o(w,~E.h).add(p)}n.abs=function(){return v(this)?b(this):this},n.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],A=0,R=0;R<=y;R++){var C=A+(this.i(R)&65535)+(E.i(R)&65535),T=(C>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);A=T>>>16,C&=65535,T&=65535,w[R]=T<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(E,y){return E.add(b(y))}n.j=function(E){if(_(this)||_(E))return d;if(v(this))return v(E)?b(this).j(b(E)):b(b(this).j(E));if(v(E))return b(this.j(b(E)));if(0>this.l(m)&&0>E.l(m))return u(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<E.g.length;R++){var C=this.i(A)>>>16,T=this.i(A)&65535,lt=E.i(R)>>>16,tt=E.i(R)&65535;w[2*A+2*R]+=T*tt,S(w,2*A+2*R),w[2*A+2*R+1]+=C*tt,S(w,2*A+2*R+1),w[2*A+2*R+1]+=T*lt,S(w,2*A+2*R+1),w[2*A+2*R+2]+=C*lt,S(w,2*A+2*R+2)}for(A=0;A<y;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=y;A<2*y;A++)w[A]=0;return new o(w,0)};function S(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function D(E,y){this.g=E,this.h=y}function k(E,y){if(_(y))throw Error("division by zero");if(_(E))return new D(d,d);if(v(E))return y=k(b(E),y),new D(b(y.g),b(y.h));if(v(y))return y=k(E,b(y)),new D(b(y.g),y.h);if(30<E.g.length){if(v(E)||v(y))throw Error("slowDivide_ only works with positive integers.");for(var w=p,A=y;0>=A.l(E);)w=O(w),A=O(A);var R=M(w,1),C=M(A,1);for(A=M(A,2),w=M(w,2);!_(A);){var T=C.add(A);0>=T.l(E)&&(R=R.add(w),C=T),A=M(A,1),w=M(w,1)}return y=I(E,R.j(y)),new D(R,y)}for(R=d;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=u(w),T=C.j(y);v(T)||0<T.l(E);)w-=A,C=u(w),T=C.j(y);_(C)&&(C=p),R=R.add(C),E=I(E,T)}return new D(R,E)}n.A=function(E){return k(this,E).h},n.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)&E.i(A);return new o(w,this.h&E.h)},n.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)|E.i(A);return new o(w,this.h|E.h)},n.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)^E.i(A);return new o(w,this.h^E.h)};function O(E){for(var y=E.g.length+1,w=[],A=0;A<y;A++)w[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(w,E.h)}function M(E,y){var w=y>>5;y%=32;for(var A=E.g.length-w,R=[],C=0;C<A;C++)R[C]=0<y?E.i(C+w)>>>y|E.i(C+w+1)<<32-y:E.i(C+w);return new o(R,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,bg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ls=o}).apply(typeof vd<"u"?vd:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xg,Vi,wg,So,al,Eg,Tg,Ig;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function e(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=e(this);function i(l,f){if(f)t:{var g=s;l=l.split(".");for(var x=0;x<l.length-1;x++){var P=l[x];if(!(P in g))break t;g=g[P]}l=l[l.length-1],x=g[l],f=f(x),f!=x&&f!=null&&t(g,l,{configurable:!0,writable:!0,value:f})}}function r(l,f){l instanceof String&&(l+="");var g=0,x=!1,P={next:function(){if(!x&&g<l.length){var L=g++;return{value:f(L,l[L]),done:!1}}return x=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(l){return l||function(){return r(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,g){return l.call.apply(l.bind,arguments)}function d(l,f,g){if(!l)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,x),l.apply(f,P)}}return function(){return l.apply(f,arguments)}}function p(l,f,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function m(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var x=g.slice();return x.push.apply(x,arguments),l.apply(this,x)}}function _(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(x,P,L){for(var B=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)B[ht-2]=arguments[ht];return f.prototype[P].apply(x,B)}}function v(l){const f=l.length;if(0<f){const g=Array(f);for(let x=0;x<f;x++)g[x]=l[x];return g}return[]}function b(l,f){for(let g=1;g<arguments.length;g++){const x=arguments[g];if(c(x)){const P=l.length||0,L=x.length||0;l.length=P+L;for(let B=0;B<L;B++)l[P+B]=x[B]}else l.push(x)}}class I{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function S(l){return/^[\s\xa0]*$/.test(l)}function D(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function k(l){return k[" "](l),l}k[" "]=function(){};var O=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function M(l,f,g){for(const x in l)f.call(g,l[x],x,l)}function E(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function y(l){const f={};for(const g in l)f[g]=l[g];return f}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,f){let g,x;for(let P=1;P<arguments.length;P++){x=arguments[P];for(g in x)l[g]=x[g];for(let L=0;L<w.length;L++)g=w[L],Object.prototype.hasOwnProperty.call(x,g)&&(l[g]=x[g])}}function R(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function C(l){a.setTimeout(()=>{throw l},0)}function T(){var l=Mt;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class lt{constructor(){this.h=this.g=null}add(f,g){const x=tt.get();x.set(f,g),this.h?this.h.next=x:this.g=x,this.h=x}}var tt=new I(()=>new dt,l=>l.reset());class dt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,$t=!1,Mt=new lt,Ke=()=>{const l=a.Promise.resolve(void 0);ut=()=>{l.then(Ss)}};var Ss=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(g){C(g)}var f=tt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}$t=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function St(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var Ye=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch{}return l}();function Ae(l,f){if(St.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,x=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(O){t:{try{k(f.nodeName);var P=!0;break t}catch{}P=!1}P||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Xe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ae.aa.h.call(this)}}_(Ae,St);var Xe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Fr="closure_listenable_"+(1e6*Math.random()|0),jy=0;function Hy(l,f,g,x,P){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!x,this.ha=P,this.key=++jy,this.da=this.fa=!1}function Br(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ur(l){this.src=l,this.g={},this.h=0}Ur.prototype.add=function(l,f,g,x,P){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var B=tc(l,f,x,P);return-1<B?(f=l[B],g||(f.fa=!1)):(f=new Hy(f,this.src,L,!!x,P),f.fa=g,l.push(f)),f};function Za(l,f){var g=f.type;if(g in l.g){var x=l.g[g],P=Array.prototype.indexOf.call(x,f,void 0),L;(L=0<=P)&&Array.prototype.splice.call(x,P,1),L&&(Br(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function tc(l,f,g,x){for(var P=0;P<l.length;++P){var L=l[P];if(!L.da&&L.listener==f&&L.capture==!!g&&L.ha==x)return P}return-1}var ec="closure_lm_"+(1e6*Math.random()|0),nc={};function uh(l,f,g,x,P){if(Array.isArray(f)){for(var L=0;L<f.length;L++)uh(l,f[L],g,x,P);return null}return g=fh(g),l&&l[Fr]?l.K(f,g,u(x)?!!x.capture:!1,P):Wy(l,f,g,!1,x,P)}function Wy(l,f,g,x,P,L){if(!f)throw Error("Invalid event type");var B=u(P)?!!P.capture:!!P,ht=ic(l);if(ht||(l[ec]=ht=new Ur(l)),g=ht.add(f,g,x,B,L),g.proxy)return g;if(x=qy(),g.proxy=x,x.src=l,x.listener=g,l.addEventListener)Ye||(P=B),P===void 0&&(P=!1),l.addEventListener(f.toString(),x,P);else if(l.attachEvent)l.attachEvent(dh(f.toString()),x);else if(l.addListener&&l.removeListener)l.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return g}function qy(){function l(g){return f.call(l.src,l.listener,g)}const f=Gy;return l}function hh(l,f,g,x,P){if(Array.isArray(f))for(var L=0;L<f.length;L++)hh(l,f[L],g,x,P);else x=u(x)?!!x.capture:!!x,g=fh(g),l&&l[Fr]?(l=l.i,f=String(f).toString(),f in l.g&&(L=l.g[f],g=tc(L,g,x,P),-1<g&&(Br(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete l.g[f],l.h--)))):l&&(l=ic(l))&&(f=l.g[f.toString()],l=-1,f&&(l=tc(f,g,x,P)),(g=-1<l?f[l]:null)&&sc(g))}function sc(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Fr])Za(f.i,l);else{var g=l.type,x=l.proxy;f.removeEventListener?f.removeEventListener(g,x,l.capture):f.detachEvent?f.detachEvent(dh(g),x):f.addListener&&f.removeListener&&f.removeListener(x),(g=ic(f))?(Za(g,l),g.h==0&&(g.src=null,f[ec]=null)):Br(l)}}}function dh(l){return l in nc?nc[l]:nc[l]="on"+l}function Gy(l,f){if(l.da)l=!0;else{f=new Ae(f,this);var g=l.listener,x=l.ha||l.src;l.fa&&sc(l),l=g.call(x,f)}return l}function ic(l){return l=l[ec],l instanceof Ur?l:null}var rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function fh(l){return typeof l=="function"?l:(l[rc]||(l[rc]=function(f){return l.handleEvent(f)}),l[rc])}function Kt(){oe.call(this),this.i=new Ur(this),this.M=this,this.F=null}_(Kt,oe),Kt.prototype[Fr]=!0,Kt.prototype.removeEventListener=function(l,f,g,x){hh(this,l,f,g,x)};function ae(l,f){var g,x=l.F;if(x)for(g=[];x;x=x.F)g.push(x);if(l=l.M,x=f.type||f,typeof f=="string")f=new St(f,l);else if(f instanceof St)f.target=f.target||l;else{var P=f;f=new St(x,l),A(f,P)}if(P=!0,g)for(var L=g.length-1;0<=L;L--){var B=f.g=g[L];P=$r(B,x,!0,f)&&P}if(B=f.g=l,P=$r(B,x,!0,f)&&P,P=$r(B,x,!1,f)&&P,g)for(L=0;L<g.length;L++)B=f.g=g[L],P=$r(B,x,!1,f)&&P}Kt.prototype.N=function(){if(Kt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],x=0;x<g.length;x++)Br(g[x]);delete l.g[f],l.h--}}this.F=null},Kt.prototype.K=function(l,f,g,x){return this.i.add(String(l),f,!1,g,x)},Kt.prototype.L=function(l,f,g,x){return this.i.add(String(l),f,!0,g,x)};function $r(l,f,g,x){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var P=!0,L=0;L<f.length;++L){var B=f[L];if(B&&!B.da&&B.capture==g){var ht=B.listener,zt=B.ha||B.src;B.fa&&Za(l.i,B),P=ht.call(zt,x)!==!1&&P}}return P&&!x.defaultPrevented}function ph(l,f,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function gh(l){l.g=ph(()=>{l.g=null,l.i&&(l.i=!1,gh(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ky extends oe{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:gh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function di(l){oe.call(this),this.h=l,this.g={}}_(di,oe);var mh=[];function _h(l){M(l.g,function(f,g){this.g.hasOwnProperty(g)&&sc(f)},l),l.g={}}di.prototype.N=function(){di.aa.N.call(this),_h(this)},di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oc=a.JSON.stringify,Yy=a.JSON.parse,Xy=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ac(){}ac.prototype.h=null;function yh(l){return l.h||(l.h=l.i())}function vh(){}var fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cc(){St.call(this,"d")}_(cc,St);function lc(){St.call(this,"c")}_(lc,St);var Yn={},bh=null;function zr(){return bh=bh||new Kt}Yn.La="serverreachability";function xh(l){St.call(this,Yn.La,l)}_(xh,St);function pi(l){const f=zr();ae(f,new xh(f))}Yn.STAT_EVENT="statevent";function wh(l,f){St.call(this,Yn.STAT_EVENT,l),this.stat=f}_(wh,St);function ce(l){const f=zr();ae(f,new wh(f,l))}Yn.Ma="timingevent";function Eh(l,f){St.call(this,Yn.Ma,l),this.size=f}_(Eh,St);function gi(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function mi(){this.g=!0}mi.prototype.xa=function(){this.g=!1};function Qy(l,f,g,x,P,L){l.info(function(){if(l.g)if(L)for(var B="",ht=L.split("&"),zt=0;zt<ht.length;zt++){var st=ht[zt].split("=");if(1<st.length){var Yt=st[0];st=st[1];var Xt=Yt.split("_");B=2<=Xt.length&&Xt[1]=="type"?B+(Yt+"="+st+"&"):B+(Yt+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+x+") [attempt "+P+"]: "+f+`
`+g+`
`+B})}function Jy(l,f,g,x,P,L,B){l.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+P+"]: "+f+`
`+g+`
`+L+" "+B})}function Rs(l,f,g,x){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+tv(l,g)+(x?" "+x:"")})}function Zy(l,f){l.info(function(){return"TIMEOUT: "+f})}mi.prototype.info=function(){};function tv(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var x=g[l];if(!(2>x.length)){var P=x[1];if(Array.isArray(P)&&!(1>P.length)){var L=P[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<P.length;B++)P[B]=""}}}}return oc(g)}catch{return f}}var jr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Th={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},uc;function Hr(){}_(Hr,ac),Hr.prototype.g=function(){return new XMLHttpRequest},Hr.prototype.i=function(){return{}},uc=new Hr;function yn(l,f,g,x){this.j=l,this.i=f,this.l=g,this.R=x||1,this.U=new di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ih}function Ih(){this.i=null,this.g="",this.h=!1}var Ah={},hc={};function dc(l,f,g){l.L=1,l.v=Kr(Qe(f)),l.m=g,l.P=!0,Sh(l,null)}function Sh(l,f){l.F=Date.now(),Wr(l),l.A=Qe(l.v);var g=l.A,x=l.R;Array.isArray(x)||(x=[String(x)]),$h(g.i,"t",x),l.C=0,g=l.j.J,l.h=new Ih,l.g=rd(l.j,g?f:null,!l.m),0<l.O&&(l.M=new Ky(p(l.Y,l,l.g),l.O)),f=l.U,g=l.g,x=l.ca;var P="readystatechange";Array.isArray(P)||(P&&(mh[0]=P.toString()),P=mh);for(var L=0;L<P.length;L++){var B=uh(g,P[L],x||f.handleEvent,!1,f.h||f);if(!B)break;f.g[B.key]=B}f=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),pi(),Qy(l.i,l.u,l.A,l.l,l.R,l.m)}yn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Je(l)==3?f.j():this.Y(l)},yn.prototype.Y=function(l){try{if(l==this.g)t:{const Xt=Je(this.g);var f=this.g.Ba();const Ps=this.g.Z();if(!(3>Xt)&&(Xt!=3||this.g&&(this.h.h||this.g.oa()||Kh(this.g)))){this.J||Xt!=4||f==7||(f==8||0>=Ps?pi(3):pi(2)),fc(this);var g=this.g.Z();this.X=g;e:if(Rh(this)){var x=Kh(this.g);l="";var P=x.length,L=Je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),_i(this);var B="";break e}this.h.i=new a.TextDecoder}for(f=0;f<P;f++)this.h.h=!0,l+=this.h.i.decode(x[f],{stream:!(L&&f==P-1)});x.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=g==200,Jy(this.i,this.u,this.A,this.l,this.R,Xt,g),this.o){if(this.T&&!this.K){e:{if(this.g){var ht,zt=this.g;if((ht=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(ht)){var st=ht;break e}}st=null}if(g=st)Rs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pc(this,g);else{this.o=!1,this.s=3,ce(12),Xn(this),_i(this);break t}}if(this.P){g=!0;let Se;for(;!this.J&&this.C<B.length;)if(Se=ev(this,B),Se==hc){Xt==4&&(this.s=4,ce(14),g=!1),Rs(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==Ah){this.s=4,ce(15),Rs(this.i,this.l,B,"[Invalid Chunk]"),g=!1;break}else Rs(this.i,this.l,Se,null),pc(this,Se);if(Rh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xt!=4||B.length!=0||this.h.h||(this.s=1,ce(16),g=!1),this.o=this.o&&g,!g)Rs(this.i,this.l,B,"[Invalid Chunked Response]"),Xn(this),_i(this);else if(0<B.length&&!this.W){this.W=!0;var Yt=this.j;Yt.g==this&&Yt.ba&&!Yt.M&&(Yt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),bc(Yt),Yt.M=!0,ce(11))}}else Rs(this.i,this.l,B,null),pc(this,B);Xt==4&&Xn(this),this.o&&!this.J&&(Xt==4?ed(this.j,this):(this.o=!1,Wr(this)))}else yv(this.g),g==400&&0<B.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),Xn(this),_i(this)}}}catch{}finally{}};function Rh(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function ev(l,f){var g=l.C,x=f.indexOf(`
`,g);return x==-1?hc:(g=Number(f.substring(g,x)),isNaN(g)?Ah:(x+=1,x+g>f.length?hc:(f=f.slice(x,x+g),l.C=x+g,f)))}yn.prototype.cancel=function(){this.J=!0,Xn(this)};function Wr(l){l.S=Date.now()+l.I,Ch(l,l.I)}function Ch(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=gi(p(l.ba,l),f)}function fc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}yn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Zy(this.i,this.A),this.L!=2&&(pi(),ce(17)),Xn(this),this.s=2,_i(this)):Ch(this,this.S-l)};function _i(l){l.j.G==0||l.J||ed(l.j,l)}function Xn(l){fc(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,_h(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function pc(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||gc(g.h,l))){if(!l.K&&gc(g.h,l)&&g.G==3){try{var x=g.Da.g.parse(f)}catch{x=null}if(Array.isArray(x)&&x.length==3){var P=x;if(P[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)to(g),Jr(g);else break t;vc(g),ce(18)}}else g.za=P[1],0<g.za-g.T&&37500>P[2]&&g.F&&g.v==0&&!g.C&&(g.C=gi(p(g.Za,g),6e3));if(1>=Dh(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Jn(g,11)}else if((l.K||g.g==l)&&to(g),!S(f))for(P=g.Da.g.parse(f),f=0;f<P.length;f++){let st=P[f];if(g.T=st[0],st=st[1],g.G==2)if(st[0]=="c"){g.K=st[1],g.ia=st[2];const Yt=st[3];Yt!=null&&(g.la=Yt,g.j.info("VER="+g.la));const Xt=st[4];Xt!=null&&(g.Aa=Xt,g.j.info("SVER="+g.Aa));const Ps=st[5];Ps!=null&&typeof Ps=="number"&&0<Ps&&(x=1.5*Ps,g.L=x,g.j.info("backChannelRequestTimeoutMs_="+x)),x=g;const Se=l.g;if(Se){const no=Se.g?Se.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(no){var L=x.h;L.g||no.indexOf("spdy")==-1&&no.indexOf("quic")==-1&&no.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(mc(L,L.h),L.h=null))}if(x.D){const xc=Se.g?Se.g.getResponseHeader("X-HTTP-Session-Id"):null;xc&&(x.ya=xc,gt(x.I,x.D,xc))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),x=g;var B=l;if(x.qa=id(x,x.J?x.ia:null,x.W),B.K){Oh(x.h,B);var ht=B,zt=x.L;zt&&(ht.I=zt),ht.B&&(fc(ht),Wr(ht)),x.g=B}else Zh(x);0<g.i.length&&Zr(g)}else st[0]!="stop"&&st[0]!="close"||Jn(g,7);else g.G==3&&(st[0]=="stop"||st[0]=="close"?st[0]=="stop"?Jn(g,7):yc(g):st[0]!="noop"&&g.l&&g.l.ta(st),g.v=0)}}pi(4)}catch{}}var nv=class{constructor(l,f){this.g=l,this.map=f}};function kh(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ph(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Dh(l){return l.h?1:l.g?l.g.size:0}function gc(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function mc(l,f){l.g?l.g.add(f):l.h=f}function Oh(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}kh.prototype.cancel=function(){if(this.i=Mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Mh(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return v(l.i)}function sv(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],g=l.length,x=0;x<g;x++)f.push(l[x]);return f}f=[],g=0;for(x in l)f[g++]=l[x];return f}function iv(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const x in l)f[g++]=x;return f}}}function Lh(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=iv(l),x=sv(l),P=x.length,L=0;L<P;L++)f.call(void 0,x[L],g&&g[L],l)}var Nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rv(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var x=l[g].indexOf("="),P=null;if(0<=x){var L=l[g].substring(0,x);P=l[g].substring(x+1)}else L=l[g];f(L,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Qn(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Qn){this.h=l.h,qr(this,l.j),this.o=l.o,this.g=l.g,Gr(this,l.s),this.l=l.l;var f=l.i,g=new bi;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Vh(this,g),this.m=l.m}else l&&(f=String(l).match(Nh))?(this.h=!1,qr(this,f[1]||"",!0),this.o=yi(f[2]||""),this.g=yi(f[3]||"",!0),Gr(this,f[4]),this.l=yi(f[5]||"",!0),Vh(this,f[6]||"",!0),this.m=yi(f[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}Qn.prototype.toString=function(){var l=[],f=this.j;f&&l.push(vi(f,Fh,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(vi(f,Fh,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(vi(g,g.charAt(0)=="/"?cv:av,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",vi(g,uv)),l.join("")};function Qe(l){return new Qn(l)}function qr(l,f,g){l.j=g?yi(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Gr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Vh(l,f,g){f instanceof bi?(l.i=f,hv(l.i,l.h)):(g||(f=vi(f,lv)),l.i=new bi(f,l.h))}function gt(l,f,g){l.i.set(f,g)}function Kr(l){return gt(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function yi(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function vi(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,ov),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ov(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Fh=/[#\/\?@]/g,av=/[#\?:]/g,cv=/[#\?]/g,lv=/[#\?@]/g,uv=/#/g;function bi(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function vn(l){l.g||(l.g=new Map,l.h=0,l.i&&rv(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=bi.prototype,n.add=function(l,f){vn(this),this.i=null,l=Cs(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Bh(l,f){vn(l),f=Cs(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Uh(l,f){return vn(l),f=Cs(l,f),l.g.has(f)}n.forEach=function(l,f){vn(this),this.g.forEach(function(g,x){g.forEach(function(P){l.call(f,P,x,this)},this)},this)},n.na=function(){vn(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let x=0;x<f.length;x++){const P=l[x];for(let L=0;L<P.length;L++)g.push(f[x])}return g},n.V=function(l){vn(this);let f=[];if(typeof l=="string")Uh(this,l)&&(f=f.concat(this.g.get(Cs(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},n.set=function(l,f){return vn(this),this.i=null,l=Cs(this,l),Uh(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},n.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function $h(l,f,g){Bh(l,f),0<g.length&&(l.i=null,l.g.set(Cs(l,f),v(g)),l.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var x=f[g];const L=encodeURIComponent(String(x)),B=this.V(x);for(x=0;x<B.length;x++){var P=L;B[x]!==""&&(P+="="+encodeURIComponent(String(B[x]))),l.push(P)}}return this.i=l.join("&")};function Cs(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function hv(l,f){f&&!l.j&&(vn(l),l.i=null,l.g.forEach(function(g,x){var P=x.toLowerCase();x!=P&&(Bh(this,x),$h(this,P,g))},l)),l.j=f}function dv(l,f){const g=new mi;if(a.Image){const x=new Image;x.onload=m(bn,g,"TestLoadImage: loaded",!0,f,x),x.onerror=m(bn,g,"TestLoadImage: error",!1,f,x),x.onabort=m(bn,g,"TestLoadImage: abort",!1,f,x),x.ontimeout=m(bn,g,"TestLoadImage: timeout",!1,f,x),a.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=l}else f(!1)}function fv(l,f){const g=new mi,x=new AbortController,P=setTimeout(()=>{x.abort(),bn(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:x.signal}).then(L=>{clearTimeout(P),L.ok?bn(g,"TestPingServer: ok",!0,f):bn(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(P),bn(g,"TestPingServer: error",!1,f)})}function bn(l,f,g,x,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),x(g)}catch{}}function pv(){this.g=new Xy}function gv(l,f,g){const x=g||"";try{Lh(l,function(P,L){let B=P;u(P)&&(B=oc(P)),f.push(x+L+"="+encodeURIComponent(B))})}catch(P){throw f.push(x+"type="+encodeURIComponent("_badmap")),P}}function Yr(l){this.l=l.Ub||null,this.j=l.eb||!1}_(Yr,ac),Yr.prototype.g=function(){return new Xr(this.l,this.j)},Yr.prototype.i=function(l){return function(){return l}}({});function Xr(l,f){Kt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Xr,Kt),n=Xr.prototype,n.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,wi(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zh(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function zh(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?xi(this):wi(this),this.readyState==3&&zh(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,xi(this))},n.Qa=function(l){this.g&&(this.response=l,xi(this))},n.ga=function(){this.g&&xi(this)};function xi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,wi(l)}n.setRequestHeader=function(l,f){this.u.append(l,f)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function wi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function jh(l){let f="";return M(l,function(g,x){f+=x,f+=":",f+=g,f+=`\r
`}),f}function _c(l,f,g){t:{for(x in g){var x=!1;break t}x=!0}x||(g=jh(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):gt(l,f,g))}function Rt(l){Kt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Rt,Kt);var mv=/^https?$/i,_v=["POST","PUT"];n=Rt.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,f,g,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():uc.g(),this.v=this.o?yh(this.o):yh(uc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(L){Hh(this,L);return}if(l=g||"",g=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var P in x)g.set(P,x[P]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const L of x.keys())g.set(L,x.get(L));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),P=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(_v,f,void 0))||x||P||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of g)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gh(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Hh(this,L)}};function Hh(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Wh(l),Qr(l)}function Wh(l){l.A||(l.A=!0,ae(l,"complete"),ae(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ae(this,"complete"),ae(this,"abort"),Qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qr(this,!0)),Rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qh(this):this.bb())},n.bb=function(){qh(this)};function qh(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Je(l)!=4||l.Z()!=2)){if(l.u&&Je(l)==4)ph(l.Ea,0,l);else if(ae(l,"readystatechange"),Je(l)==4){l.h=!1;try{const B=l.Z();t:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var g;if(!(g=f)){var x;if(x=B===0){var P=String(l.D).match(Nh)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),x=!mv.test(P?P.toLowerCase():"")}g=x}if(g)ae(l,"complete"),ae(l,"success");else{l.m=6;try{var L=2<Je(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Wh(l)}}finally{Qr(l)}}}}function Qr(l,f){if(l.g){Gh(l);const g=l.g,x=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ae(l,"ready");try{g.onreadystatechange=x}catch{}}}function Gh(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Je(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Je(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Yy(f)}};function Kh(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function yv(l){const f={};l=(l.g&&2<=Je(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<l.length;x++){if(S(l[x]))continue;var g=R(l[x]);const P=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=f[P]||[];f[P]=L,L.push(g)}E(f,function(x){return x.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Yh(l){this.Aa=0,this.i=[],this.j=new mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ei("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ei("baseRetryDelayMs",5e3,l),this.cb=Ei("retryDelaySeedMs",1e4,l),this.Wa=Ei("forwardChannelMaxRetries",2,l),this.wa=Ei("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new kh(l&&l.concurrentRequestLimit),this.Da=new pv,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yh.prototype,n.la=8,n.G=1,n.connect=function(l,f,g,x){ce(0),this.W=l,this.H=f||{},g&&x!==void 0&&(this.H.OSID=g,this.H.OAID=x),this.F=this.X,this.I=id(this,null,this.W),Zr(this)};function yc(l){if(Xh(l),l.G==3){var f=l.U++,g=Qe(l.I);if(gt(g,"SID",l.K),gt(g,"RID",f),gt(g,"TYPE","terminate"),Ti(l,g),f=new yn(l,l.j,f),f.L=2,f.v=Kr(Qe(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=rd(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Wr(f)}sd(l)}function Jr(l){l.g&&(bc(l),l.g.cancel(),l.g=null)}function Xh(l){Jr(l),l.u&&(a.clearTimeout(l.u),l.u=null),to(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Zr(l){if(!Ph(l.h)&&!l.s){l.s=!0;var f=l.Ga;ut||Ke(),$t||(ut(),$t=!0),Mt.add(f,l),l.B=0}}function vv(l,f){return Dh(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=gi(p(l.Ga,l,f),nd(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const P=new yn(this,this.j,l);let L=this.o;if(this.S&&(L?(L=y(L),A(L,this.S)):L=this.S),this.m!==null||this.O||(P.H=L,L=null),this.P)t:{for(var f=0,g=0;g<this.i.length;g++){e:{var x=this.i[g];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break e}x=void 0}if(x===void 0)break;if(f+=x,4096<f){f=g;break t}if(f===4096||g===this.i.length-1){f=g+1;break t}}f=1e3}else f=1e3;f=Jh(this,P,f),g=Qe(this.I),gt(g,"RID",l),gt(g,"CVER",22),this.D&&gt(g,"X-HTTP-Session-Id",this.D),Ti(this,g),L&&(this.O?f="headers="+encodeURIComponent(String(jh(L)))+"&"+f:this.m&&_c(g,this.m,L)),mc(this.h,P),this.Ua&&gt(g,"TYPE","init"),this.P?(gt(g,"$req",f),gt(g,"SID","null"),P.T=!0,dc(P,g,null)):dc(P,g,f),this.G=2}}else this.G==3&&(l?Qh(this,l):this.i.length==0||Ph(this.h)||Qh(this))};function Qh(l,f){var g;f?g=f.l:g=l.U++;const x=Qe(l.I);gt(x,"SID",l.K),gt(x,"RID",g),gt(x,"AID",l.T),Ti(l,x),l.m&&l.o&&_c(x,l.m,l.o),g=new yn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Jh(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),mc(l.h,g),dc(g,x,f)}function Ti(l,f){l.H&&M(l.H,function(g,x){gt(f,x,g)}),l.l&&Lh({},function(g,x){gt(f,x,g)})}function Jh(l,f,g){g=Math.min(l.i.length,g);var x=l.l?p(l.l.Na,l.l,l):null;t:{var P=l.i;let L=-1;for(;;){const B=["count="+g];L==-1?0<g?(L=P[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let ht=!0;for(let zt=0;zt<g;zt++){let st=P[zt].g;const Yt=P[zt].map;if(st-=L,0>st)L=Math.max(0,P[zt].g-100),ht=!1;else try{gv(Yt,B,"req"+st+"_")}catch{x&&x(Yt)}}if(ht){x=B.join("&");break t}}}return l=l.i.splice(0,g),f.D=l,x}function Zh(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;ut||Ke(),$t||(ut(),$t=!0),Mt.add(f,l),l.v=0}}function vc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=gi(p(l.Fa,l),nd(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,td(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=gi(p(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ce(10),Jr(this),td(this))};function bc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function td(l){l.g=new yn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Qe(l.qa);gt(f,"RID","rpc"),gt(f,"SID",l.K),gt(f,"AID",l.T),gt(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&gt(f,"TO",l.ja),gt(f,"TYPE","xmlhttp"),Ti(l,f),l.m&&l.o&&_c(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Kr(Qe(f)),g.m=null,g.P=!0,Sh(g,l)}n.Za=function(){this.C!=null&&(this.C=null,Jr(this),vc(this),ce(19))};function to(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ed(l,f){var g=null;if(l.g==f){to(l),bc(l),l.g=null;var x=2}else if(gc(l.h,f))g=f.D,Oh(l.h,f),x=1;else return;if(l.G!=0){if(f.o)if(x==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var P=l.B;x=zr(),ae(x,new Eh(x,g)),Zr(l)}else Zh(l);else if(P=f.s,P==3||P==0&&0<f.X||!(x==1&&vv(l,f)||x==2&&vc(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),P){case 1:Jn(l,5);break;case 4:Jn(l,10);break;case 3:Jn(l,6);break;default:Jn(l,2)}}}function nd(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function Jn(l,f){if(l.j.info("Error code "+f),f==2){var g=p(l.fb,l),x=l.Xa;const P=!x;x=new Qn(x||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||qr(x,"https"),Kr(x),P?dv(x.toString(),g):fv(x.toString(),g)}else ce(2);l.G=0,l.l&&l.l.sa(f),sd(l),Xh(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))};function sd(l){if(l.G=0,l.ka=[],l.l){const f=Mh(l.h);(f.length!=0||l.i.length!=0)&&(b(l.ka,f),b(l.ka,l.i),l.h.i.length=0,v(l.i),l.i.length=0),l.l.ra()}}function id(l,f,g){var x=g instanceof Qn?Qe(g):new Qn(g);if(x.g!="")f&&(x.g=f+"."+x.g),Gr(x,x.s);else{var P=a.location;x=P.protocol,f=f?f+"."+P.hostname:P.hostname,P=+P.port;var L=new Qn(null);x&&qr(L,x),f&&(L.g=f),P&&Gr(L,P),g&&(L.l=g),x=L}return g=l.D,f=l.ya,g&&f&&gt(x,g,f),gt(x,"VER",l.la),Ti(l,x),x}function rd(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Rt(new Yr({eb:g})):new Rt(l.pa),f.Ha(l.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function od(){}n=od.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function eo(){}eo.prototype.g=function(l,f){return new _e(l,f)};function _e(l,f){Kt.call(this),this.g=new Yh(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!S(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!S(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new ks(this)}_(_e,Kt),_e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_e.prototype.close=function(){yc(this.g)},_e.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=oc(l),l=g);f.i.push(new nv(f.Ya++,l)),f.G==3&&Zr(f)},_e.prototype.N=function(){this.g.l=null,delete this.j,yc(this.g),delete this.g,_e.aa.N.call(this)};function ad(l){cc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){t:{for(const g in f){l=g;break t}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}_(ad,cc);function cd(){lc.call(this),this.status=1}_(cd,lc);function ks(l){this.g=l}_(ks,od),ks.prototype.ua=function(){ae(this.g,"a")},ks.prototype.ta=function(l){ae(this.g,new ad(l))},ks.prototype.sa=function(l){ae(this.g,new cd)},ks.prototype.ra=function(){ae(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,_e.prototype.send=_e.prototype.o,_e.prototype.open=_e.prototype.m,_e.prototype.close=_e.prototype.close,Ig=function(){return new eo},Tg=function(){return zr()},Eg=Yn,al={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jr.NO_ERROR=0,jr.TIMEOUT=8,jr.HTTP_ERROR=6,So=jr,Th.COMPLETE="complete",wg=Th,vh.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",Kt.prototype.listen=Kt.prototype.K,Vi=vh,Rt.prototype.listenOnce=Rt.prototype.L,Rt.prototype.getLastError=Rt.prototype.Ka,Rt.prototype.getLastErrorCode=Rt.prototype.Ba,Rt.prototype.getStatus=Rt.prototype.Z,Rt.prototype.getResponseJson=Rt.prototype.Oa,Rt.prototype.getResponseText=Rt.prototype.oa,Rt.prototype.send=Rt.prototype.ea,Rt.prototype.setWithCredentials=Rt.prototype.Ha,xg=Rt}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});const bd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Kl("@firebase/firestore");function Ii(){return ps.logLevel}function z(n,...t){if(ps.logLevel<=Z.DEBUG){const e=t.map(Ql);ps.debug(`Firestore (${oi}): ${n}`,...e)}}function pn(n,...t){if(ps.logLevel<=Z.ERROR){const e=t.map(Ql);ps.error(`Firestore (${oi}): ${n}`,...e)}}function Ks(n,...t){if(ps.logLevel<=Z.WARN){const e=t.map(Ql);ps.warn(`Firestore (${oi}): ${n}`,...e)}}function Ql(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(n="Unexpected state"){const t=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: `+n;throw pn(t),new Error(t)}function ct(n,t){n||W()}function K(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Ge{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class e0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(te.UNAUTHENTICATED))}shutdown(){}}class n0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class s0{constructor(t){this.t=t,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ct(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let r=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new hn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new hn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ct(typeof s.accessToken=="string"),new Ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ct(t===null||typeof t=="string"),new te(t)}}class i0{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=te.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class r0{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new i0(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ct(this.o===void 0);const s=r=>{r.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ct(typeof e.token=="string"),this.R=e.token,new o0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=c0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function it(n,t){return n<t?-1:n>t?1:0}function Ys(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ot.fromMillis(Date.now())}static fromDate(t){return Ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new Ot(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?it(this.nanoseconds,t.nanoseconds):it(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new Ot(0,0))}static max(){return new q(new Ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e,s){e===void 0?e=0:e>t.length&&W(),s===void 0?s=t.length-e:s>t.length-e&&W(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return rr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rr?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class yt extends rr{construct(t,e,s){return new yt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new $(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new yt(e)}static emptyPath(){return new yt([])}}const l0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends rr{construct(t,e,s){return new Wt(t,e,s)}static isValidIdentifier(t){return l0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Wt(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new $(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new $(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Wt(e)}static emptyPath(){return new Wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(yt.fromString(t))}static fromName(t){return new j(yt.fromString(t).popFirst(5))}static empty(){return new j(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&yt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return yt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new yt(t.slice()))}}function u0(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new Ot(e+1,0):new Ot(e,s));return new Un(i,j.empty(),t)}function h0(n){return new Un(n.readTime,n.key,-1)}class Un{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new Un(q.min(),j.empty(),-1)}static max(){return new Un(q.max(),j.empty(),-1)}}function d0(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:it(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class p0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==f0)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,s)=>{e(t)})}static reject(t){return new V((e,s)=>{s(t)})}static waitFor(t){return new V((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},c=>s(c))}),o=!0,r===i&&e()})}static or(t){let e=V.resolve(!1);for(const s of t)e=e.next(i=>i?V.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new V((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;e(t[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,e){return new V((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}function g0(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ir(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Jl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Jl.oe=-1;function Ea(n){return n==null}function Xo(n){return n===0&&1/n==-1/0}function m0(n){return typeof n=="number"&&Number.isInteger(n)&&!Xo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ws(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Rg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e){this.comparator=t,this.root=e||jt.EMPTY}insert(t,e){return new It(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(t){return new It(this.comparator,this.root.remove(t,this.comparator).copy(null,null,jt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new io(this.root,t,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new io(this.root,t,this.comparator,!0)}}class io{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class jt{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??jt.RED,this.left=i??jt.EMPTY,this.right=r??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new jt(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return jt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const t=this.left.check();if(t!==this.right.check())throw W();return t+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,s,i,r){return this}insert(t,e,s){return new jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.comparator=t,this.data=new It(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new wd(this.data.getIterator())}getIteratorFrom(t){return new wd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new qt(this.comparator);return e.data=t,e}}class wd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.fields=t,t.sort(Wt.comparator)}static empty(){return new ve([])}unionWith(t){let e=new qt(Wt.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new ve(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ys(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Cg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Cg("Invalid base64 string: "+r):r}}(t);return new Gt(e)}static fromUint8Array(t){const e=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(t);return new Gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return it(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const _0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(n){if(ct(!!n),typeof n=="string"){let t=0;const e=_0.exec(n);if(ct(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Pt(n.seconds),nanos:Pt(n.nanos)}}function Pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gs(n){return typeof n=="string"?Gt.fromBase64String(n):Gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function tu(n){const t=n.mapValue.fields.__previous_value__;return Zl(t)?tu(t):t}function or(n){const t=$n(n.mapValue.fields.__local_write_time__.timestampValue);return new Ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(t,e,s,i,r,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class ar{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ar&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={mapValue:{}};function ms(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zl(n)?4:b0(n)?9007199254740991:v0(n)?10:11:W()}function qe(n,t){if(n===t)return!0;const e=ms(n);if(e!==ms(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return or(n).isEqual(or(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=$n(i.timestampValue),a=$n(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,r){return gs(i.bytesValue).isEqual(gs(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,r){return Pt(i.geoPointValue.latitude)===Pt(r.geoPointValue.latitude)&&Pt(i.geoPointValue.longitude)===Pt(r.geoPointValue.longitude)}(n,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Pt(i.integerValue)===Pt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Pt(i.doubleValue),a=Pt(r.doubleValue);return o===a?Xo(o)===Xo(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Ys(n.arrayValue.values||[],t.arrayValue.values||[],qe);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(xd(o)!==xd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!qe(o[c],a[c])))return!1;return!0}(n,t);default:return W()}}function cr(n,t){return(n.values||[]).find(e=>qe(e,t))!==void 0}function Xs(n,t){if(n===t)return 0;const e=ms(n),s=ms(t);if(e!==s)return it(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return it(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=Pt(r.integerValue||r.doubleValue),c=Pt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return Ed(n.timestampValue,t.timestampValue);case 4:return Ed(or(n),or(t));case 5:return it(n.stringValue,t.stringValue);case 6:return function(r,o){const a=gs(r),c=gs(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=it(a[u],c[u]);if(h!==0)return h}return it(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=it(Pt(r.latitude),Pt(o.latitude));return a!==0?a:it(Pt(r.longitude),Pt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Td(n.arrayValue,t.arrayValue);case 10:return function(r,o){var a,c,u,h;const d=r.fields||{},p=o.fields||{},m=(a=d.value)===null||a===void 0?void 0:a.arrayValue,_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,v=it(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return v!==0?v:Td(m,_)}(n.mapValue,t.mapValue);case 11:return function(r,o){if(r===ro.mapValue&&o===ro.mapValue)return 0;if(r===ro.mapValue)return 1;if(o===ro.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=it(c[d],h[d]);if(p!==0)return p;const m=Xs(a[c[d]],u[h[d]]);if(m!==0)return m}return it(c.length,h.length)}(n.mapValue,t.mapValue);default:throw W()}}function Ed(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return it(n,t);const e=$n(n),s=$n(t),i=it(e.seconds,s.seconds);return i!==0?i:it(e.nanos,s.nanos)}function Td(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=Xs(e[i],s[i]);if(r)return r}return it(e.length,s.length)}function Qs(n){return cl(n)}function cl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=$n(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return gs(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=cl(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${cl(e.fields[o])}`;return i+"}"}(n.mapValue):W()}function Id(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ll(n){return!!n&&"integerValue"in n}function eu(n){return!!n&&"arrayValue"in n}function Ad(n){return!!n&&"nullValue"in n}function Sd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ro(n){return!!n&&"mapValue"in n}function v0(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Gi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ws(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Gi(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Gi(n.arrayValue.values[e]);return t}return Object.assign({},n)}function b0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.value=t}static empty(){return new ge({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Ro(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Gi(e)}setAll(t){let e=Wt.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=Gi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());Ro(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];Ro(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){ws(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new ge(Gi(this.value))}}function kg(n){const t=[];return ws(n.fields,(e,s)=>{const i=new Wt([e]);if(Ro(s)){const r=kg(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new ve(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ne(t,0,q.min(),q.min(),q.min(),ge.empty(),0)}static newFoundDocument(t,e,s,i){return new ne(t,1,e,q.min(),s,i,0)}static newNoDocument(t,e){return new ne(t,2,e,q.min(),q.min(),ge.empty(),0)}static newUnknownDocument(t,e){return new ne(t,3,e,q.min(),q.min(),ge.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ge.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ne&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qo{constructor(t,e){this.position=t,this.inclusive=e}}function Rd(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),e.key):s=Xs(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cd(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!qe(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class lr{constructor(t,e="asc"){this.field=t,this.dir=e}}function x0(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Pg{}class Nt extends Pg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new E0(t,e,s):e==="array-contains"?new A0(t,s):e==="in"?new S0(t,s):e==="not-in"?new R0(t,s):e==="array-contains-any"?new C0(t,s):new Nt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new T0(t,s):new I0(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Xs(e,this.value)):e!==null&&ms(this.value)===ms(e)&&this.matchesComparison(Xs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class De extends Pg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new De(t,e)}matches(t){return Dg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Dg(n){return n.op==="and"}function Og(n){return w0(n)&&Dg(n)}function w0(n){for(const t of n.filters)if(t instanceof De)return!1;return!0}function ul(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+Qs(n.value);if(Og(n))return n.filters.map(t=>ul(t)).join(",");{const t=n.filters.map(e=>ul(e)).join(",");return`${n.op}(${t})`}}function Mg(n,t){return n instanceof Nt?function(s,i){return i instanceof Nt&&s.op===i.op&&s.field.isEqual(i.field)&&qe(s.value,i.value)}(n,t):n instanceof De?function(s,i){return i instanceof De&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Mg(o,i.filters[a]),!0):!1}(n,t):void W()}function Lg(n){return n instanceof Nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Qs(e.value)}`}(n):n instanceof De?function(e){return e.op.toString()+" {"+e.getFilters().map(Lg).join(" ,")+"}"}(n):"Filter"}class E0 extends Nt{constructor(t,e,s){super(t,e,s),this.key=j.fromName(s.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class T0 extends Nt{constructor(t,e){super(t,"in",e),this.keys=Ng("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class I0 extends Nt{constructor(t,e){super(t,"not-in",e),this.keys=Ng("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ng(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>j.fromName(s.referenceValue))}class A0 extends Nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return eu(e)&&cr(e.arrayValue,this.value)}}class S0 extends Nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&cr(this.value.arrayValue,e)}}class R0 extends Nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!cr(this.value.arrayValue,e)}}class C0 extends Nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!eu(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>cr(this.value.arrayValue,s))}}/**
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
 */class k0{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function kd(n,t=null,e=[],s=[],i=null,r=null,o=null){return new k0(n,t,e,s,i,r,o)}function nu(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>ul(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ea(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Qs(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Qs(s)).join(",")),t.ue=e}return t.ue}function su(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!x0(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Mg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Cd(n.startAt,t.startAt)&&Cd(n.endAt,t.endAt)}function hl(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function P0(n,t,e,s,i,r,o,a){return new ai(n,t,e,s,i,r,o,a)}function iu(n){return new ai(n)}function Pd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vg(n){return n.collectionGroup!==null}function Ki(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new qt(Wt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new lr(r,s))}),e.has(Wt.keyField().canonicalString())||t.ce.push(new lr(Wt.keyField(),s))}return t.ce}function $e(n){const t=K(n);return t.le||(t.le=D0(t,Ki(n))),t.le}function D0(n,t){if(n.limitType==="F")return kd(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new lr(i.field,r)});const e=n.endAt?new Qo(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Qo(n.startAt.position,n.startAt.inclusive):null;return kd(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function dl(n,t){const e=n.filters.concat([t]);return new ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Jo(n,t,e){return new ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ta(n,t){return su($e(n),$e(t))&&n.limitType===t.limitType}function Fg(n){return`${nu($e(n))}|lt:${n.limitType}`}function Vs(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>Lg(i)).join(", ")}]`),Ea(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>Qs(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>Qs(i)).join(",")),`Target(${s})`}($e(n))}; limitType=${n.limitType})`}function Ia(n,t){return t.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):j.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,t)&&function(s,i){for(const r of Ki(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(o,a,c){const u=Rd(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,Ki(s),i)||s.endAt&&!function(o,a,c){const u=Rd(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,Ki(s),i))}(n,t)}function O0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Bg(n){return(t,e)=>{let s=!1;for(const i of Ki(n)){const r=M0(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function M0(n,t,e){const s=n.field.isKeyField()?j.comparator(t.key,e.key):function(r,o,a){const c=o.data.field(r),u=a.data.field(r);return c!==null&&u!==null?Xs(c,u):W()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ws(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Rg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=new It(j.comparator);function gn(){return L0}const Ug=new It(j.comparator);function Fi(...n){let t=Ug;for(const e of n)t=t.insert(e.key,e);return t}function $g(n){let t=Ug;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function as(){return Yi()}function zg(){return Yi()}function Yi(){return new ci(n=>n.toString(),(n,t)=>n.isEqual(t))}const N0=new It(j.comparator),V0=new qt(j.comparator);function Q(...n){let t=V0;for(const e of n)t=t.add(e);return t}const F0=new qt(it);function B0(){return F0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xo(t)?"-0":t}}function jg(n){return{integerValue:""+n}}function U0(n,t){return m0(t)?jg(t):ru(n,t)}/**
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
 */class Aa{constructor(){this._=void 0}}function $0(n,t,e){return n instanceof Zo?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Zl(r)&&(r=tu(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof ur?Wg(n,t):n instanceof hr?qg(n,t):function(i,r){const o=Hg(i,r),a=Dd(o)+Dd(i.Pe);return ll(o)&&ll(i.Pe)?jg(a):ru(i.serializer,a)}(n,t)}function z0(n,t,e){return n instanceof ur?Wg(n,t):n instanceof hr?qg(n,t):e}function Hg(n,t){return n instanceof ta?function(s){return ll(s)||function(r){return!!r&&"doubleValue"in r}(s)}(t)?t:{integerValue:0}:null}class Zo extends Aa{}class ur extends Aa{constructor(t){super(),this.elements=t}}function Wg(n,t){const e=Gg(t);for(const s of n.elements)e.some(i=>qe(i,s))||e.push(s);return{arrayValue:{values:e}}}class hr extends Aa{constructor(t){super(),this.elements=t}}function qg(n,t){let e=Gg(t);for(const s of n.elements)e=e.filter(i=>!qe(i,s));return{arrayValue:{values:e}}}class ta extends Aa{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Dd(n){return Pt(n.integerValue||n.doubleValue)}function Gg(n){return eu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function j0(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof ur&&i instanceof ur||s instanceof hr&&i instanceof hr?Ys(s.elements,i.elements,qe):s instanceof ta&&i instanceof ta?qe(s.Pe,i.Pe):s instanceof Zo&&i instanceof Zo}(n.transform,t.transform)}class H0{constructor(t,e){this.version=t,this.transformResults=e}}class Te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Te}static exists(t){return new Te(void 0,t)}static updateTime(t){return new Te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Co(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Sa{}function Kg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ou(n.key,Te.none()):new Ar(n.key,n.data,Te.none());{const e=n.data,s=ge.empty();let i=new qt(Wt.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Wn(n.key,s,new ve(i.toArray()),Te.none())}}function W0(n,t,e){n instanceof Ar?function(i,r,o){const a=i.value.clone(),c=Md(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Wn?function(i,r,o){if(!Co(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Md(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Yg(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Xi(n,t,e,s){return n instanceof Ar?function(r,o,a,c){if(!Co(r.precondition,o))return a;const u=r.value.clone(),h=Ld(r.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,s):n instanceof Wn?function(r,o,a,c){if(!Co(r.precondition,o))return a;const u=Ld(r.fieldTransforms,c,o),h=o.data;return h.setAll(Yg(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(d=>d.field))}(n,t,e,s):function(r,o,a){return Co(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function q0(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=Hg(s.transform,i||null);r!=null&&(e===null&&(e=ge.empty()),e.set(s.field,r))}return e||null}function Od(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ys(s,i,(r,o)=>j0(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ar extends Sa{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wn extends Sa{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Yg(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Md(n,t,e){const s=new Map;ct(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,z0(o,a,e[i]))}return s}function Ld(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,$0(r,o,t))}return s}class ou extends Sa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class G0 extends Sa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&W0(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Xi(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Xi(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=zg();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const c=Kg(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&Ys(this.mutations,t.mutations,(e,s)=>Od(e,s))&&Ys(this.baseMutations,t.baseMutations,(e,s)=>Od(e,s))}}class au{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){ct(t.mutations.length===s.length);let i=function(){return N0}();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new au(t,e,s,i)}}/**
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
 */class Y0{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class X0{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt,et;function Q0(n){switch(n){default:return W();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Xg(n){if(n===void 0)return pn("GRPC error has no .code"),N.UNKNOWN;switch(n){case Lt.OK:return N.OK;case Lt.CANCELLED:return N.CANCELLED;case Lt.UNKNOWN:return N.UNKNOWN;case Lt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Lt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Lt.INTERNAL:return N.INTERNAL;case Lt.UNAVAILABLE:return N.UNAVAILABLE;case Lt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Lt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Lt.NOT_FOUND:return N.NOT_FOUND;case Lt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Lt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Lt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Lt.ABORTED:return N.ABORTED;case Lt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Lt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Lt.DATA_LOSS:return N.DATA_LOSS;default:return W()}}(et=Lt||(Lt={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function J0(){return new TextEncoder}/**
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
 */const Z0=new ls([4294967295,4294967295],0);function Nd(n){const t=J0().encode(n),e=new bg;return e.update(t),new Uint8Array(e.digest())}function Vd(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new ls([e,s],0),new ls([i,r],0)]}class cu{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Bi(`Invalid padding: ${e}`);if(s<0)throw new Bi(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Bi(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Bi(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ls.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(ls.fromNumber(s)));return i.compare(Z0)===1&&(i=new ls([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Nd(t),[s,i]=Vd(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new cu(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Nd(t),[s,i]=Vd(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,Sr.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Ra(q.min(),i,new It(it),gn(),Q())}}class Sr{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new Sr(s,e,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class Qg{constructor(t,e){this.targetId=t,this.me=e}}class Jg{constructor(t,e,s=Gt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class Fd{constructor(){this.fe=0,this.ge=Ud(),this.pe=Gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Q(),e=Q(),s=Q();return this.ge.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:W()}}),new Sr(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Ud()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ct(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tx{constructor(t){this.Le=t,this.Be=new Map,this.ke=gn(),this.qe=Bd(),this.Qe=new It(it)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:W()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const r=i.target;if(hl(r))if(s===0){const o=new j(r.path);this.Ue(e,o,ne.newNoDocument(o,q.min()))}else ct(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,u)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=gs(s).toUint8Array()}catch(c){if(c instanceof Cg)return Ks("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new cu(o,i,r)}catch(c){return Ks(c instanceof Bi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,r,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&hl(a.target)){const c=new j(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ne.newNoDocument(c,t))}r.be&&(e.set(o,r.ve()),r.Ce())}});let s=Q();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(t));const i=new Ra(t,e,this.Qe,this.ke,s);return this.ke=gn(),this.qe=Bd(),this.Qe=new It(it),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Fd,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new qt(it),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Fd),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Bd(){return new It(j.comparator)}function Ud(){return new It(j.comparator)}const ex={asc:"ASCENDING",desc:"DESCENDING"},nx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sx={and:"AND",or:"OR"};class ix{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function fl(n,t){return n.useProto3Json||Ea(t)?t:{value:t}}function ea(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function rx(n,t){return ea(n,t.toTimestamp())}function ze(n){return ct(!!n),q.fromTimestamp(function(e){const s=$n(e);return new Ot(s.seconds,s.nanos)}(n))}function lu(n,t){return pl(n,t).canonicalString()}function pl(n,t){const e=function(i){return new yt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function tm(n){const t=yt.fromString(n);return ct(rm(t)),t}function gl(n,t){return lu(n.databaseId,t.path)}function Sc(n,t){const e=tm(t);if(e.get(1)!==n.databaseId.projectId)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(nm(e))}function em(n,t){return lu(n.databaseId,t)}function ox(n){const t=tm(n);return t.length===4?yt.emptyPath():nm(t)}function ml(n){return new yt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nm(n){return ct(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $d(n,t,e){return{name:gl(n,t),fields:e.value.mapValue.fields}}function ax(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:W()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(ct(h===void 0||typeof h=="string"),Gt.fromBase64String(h||"")):(ct(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Gt.fromUint8Array(h||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?N.UNKNOWN:Xg(u.code);return new $(h,u.message||"")}(o);e=new Jg(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Sc(n,s.document.name),r=ze(s.document.updateTime),o=s.document.createTime?ze(s.document.createTime):q.min(),a=new ge({mapValue:{fields:s.document.fields}}),c=ne.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];e=new ko(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Sc(n,s.document),r=s.readTime?ze(s.readTime):q.min(),o=ne.newNoDocument(i,r),a=s.removedTargetIds||[];e=new ko([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Sc(n,s.document),r=s.removedTargetIds||[];e=new ko([],r,i,null)}else{if(!("filter"in t))return W();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new X0(i,r),a=s.targetId;e=new Qg(a,o)}}return e}function cx(n,t){let e;if(t instanceof Ar)e={update:$d(n,t.key,t.value)};else if(t instanceof ou)e={delete:gl(n,t.key)};else if(t instanceof Wn)e={update:$d(n,t.key,t.data),updateMask:_x(t.fieldMask)};else{if(!(t instanceof G0))return W();e={verify:gl(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ur)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof hr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ta)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:rx(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(n,t.precondition)),e}function lx(n,t){return n&&n.length>0?(ct(t!==void 0),n.map(e=>function(i,r){let o=i.updateTime?ze(i.updateTime):ze(r);return o.isEqual(q.min())&&(o=ze(r)),new H0(o,i.transformResults||[])}(e,t))):[]}function ux(n,t){return{documents:[em(n,t.path)]}}function hx(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=em(n,i);const r=function(u){if(u.length!==0)return im(De.create(u,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Fs(p.field),direction:px(p.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=fl(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:e,parent:i}}function dx(n){let t=ox(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){ct(s===1);const h=e.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];e.where&&(r=function(d){const p=sm(d);return p instanceof De&&Og(p)?p.getFilters():[p]}(e.where));let o=[];e.orderBy&&(o=function(d){return d.map(p=>function(_){return new lr(Bs(_.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(e.orderBy));let a=null;e.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Ea(p)?null:p}(e.limit));let c=null;e.startAt&&(c=function(d){const p=!!d.before,m=d.values||[];return new Qo(m,p)}(e.startAt));let u=null;return e.endAt&&(u=function(d){const p=!d.before,m=d.values||[];return new Qo(m,p)}(e.endAt)),P0(t,i,o,r,a,"F",c,u)}function fx(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function sm(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=Bs(e.unaryFilter.field);return Nt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Bs(e.unaryFilter.field);return Nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bs(e.unaryFilter.field);return Nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(e.unaryFilter.field);return Nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return Nt.create(Bs(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return De.create(e.compositeFilter.filters.map(s=>sm(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function px(n){return ex[n]}function gx(n){return nx[n]}function mx(n){return sx[n]}function Fs(n){return{fieldPath:n.canonicalString()}}function Bs(n){return Wt.fromServerFormat(n.fieldPath)}function im(n){return n instanceof Nt?function(e){if(e.op==="=="){if(Sd(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NAN"}};if(Ad(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Sd(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NOT_NAN"}};if(Ad(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(e.field),op:gx(e.op),value:e.value}}}(n):n instanceof De?function(e){const s=e.getFilters().map(i=>im(i));return s.length===1?s[0]:{compositeFilter:{op:mx(e.op),filters:s}}}(n):W()}function _x(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function rm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,e,s,i,r=q.min(),o=q.min(),a=Gt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Rn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(t){this.ct=t}}function vx(n){const t=dx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jo(t,t.limit,"L"):t}/**
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
 */class bx{constructor(){this.un=new xx}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Un.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Un.min())}updateCollectionGroup(t,e,s){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class xx{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new qt(yt.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new qt(yt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Js(0)}static kn(){return new Js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this.changes=new ci(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ne.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?V.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ex{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&Xi(s.mutation,i,ve.empty(),Ot.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,Q()).next(()=>s))}getLocalViewOfDocuments(t,e,s=Q()){const i=as();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=Fi();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=as();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,Q()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=gn();const o=Yi(),a=function(){return Yi()}();return e.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Wn)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Xi(h.mutation,u,h.mutation.getFieldMask(),Ot.now())):o.set(u.key,ve.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),e.forEach((u,h)=>{var d;return a.set(u,new Ex(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Yi();let i=new It((o,a)=>o-a),r=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let h=s.get(c)||ve.empty();h=a.applyToLocalView(u,h),s.set(c,h);const d=(i.get(a.batchId)||Q()).add(c);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=zg();h.forEach(p=>{if(!r.has(p)){const m=Kg(e.get(p),s.get(p));m!==null&&d.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return V.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):V.resolve(as());let a=-1,c=r;return o.next(u=>V.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?V.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,Q())).next(h=>({batchId:a,changes:$g(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(s=>{let i=Fi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=Fi();return this.indexManager.getCollectionParents(t,r).next(a=>V.forEach(a,c=>{const u=function(d,p){return new ai(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i))).next(o=>{r.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,ne.newInvalidDocument(h)))});let a=Fi();return o.forEach((c,u)=>{const h=r.get(c);h!==void 0&&Xi(h.mutation,u,ve.empty(),Ot.now()),Ia(e,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:vx(i.bundledQuery),readTime:ze(i.readTime)}}(e)),V.resolve()}}/**
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
 */class Ax{constructor(){this.overlays=new It(j.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const s=as();return V.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.ht(t,e,r)}),V.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),V.resolve()}getOverlaysForCollection(t,e,s){const i=as(),r=e.length+1,o=new j(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new It((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=as(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=as(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return V.resolve(a)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Y0(e,s));let r=this.Ir.get(e);r===void 0&&(r=Q(),this.Ir.set(e,r)),this.Ir.set(e,r.add(s.key))}}/**
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
 */class Sx{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.Tr=new qt(Bt.Er),this.dr=new qt(Bt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new Bt(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new Bt(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new j(new yt([])),s=new Bt(e,t),i=new Bt(e,t+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new yt([])),s=new Bt(e,t),i=new Bt(e,t+1);let r=Q();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new Bt(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Bt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||it(t.wr,e.wr)}static Ar(t,e){return it(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new qt(Bt.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new K0(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Bt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),r=i<0?0:i;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Bt(e,0),i=new Bt(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new qt(it);return e.forEach(i=>{const r=new Bt(i,0),o=new Bt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),V.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;j.isDocumentKey(r)||(r=r.child(""));const o=new Bt(new j(r),0);let a=new qt(it);return this.br.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){ct(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return V.forEach(e.mutations,i=>{const r=new Bt(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new Bt(e,0),i=this.br.firstAfterOrEqual(s);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(t){this.Mr=t,this.docs=function(){return new It(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return V.resolve(s?s.document.mutableCopy():ne.newInvalidDocument(e))}getEntries(t,e){let s=gn();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ne.newInvalidDocument(i))}),V.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=gn();const o=e.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||d0(h0(h),s)<=0||(i.has(h.key)||Ia(e,h))&&(r=r.insert(h.key,h.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(t,e,s,i){W()}Or(t,e){return V.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new kx(this)}getSize(t){return V.resolve(this.size)}}class kx extends wx{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(t){this.persistence=t,this.Nr=new ci(e=>nu(e),su),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new uu,this.targetCount=0,this.kr=Js.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Js(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),V.waitFor(r).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return V.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),V.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),V.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return V.resolve(s)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Jl(0),this.Kr=!1,this.Kr=!0,this.$r=new Sx,this.referenceDelegate=t(this),this.Ur=new Px(this),this.indexManager=new bx,this.remoteDocumentCache=function(i){return new Cx(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new yx(e),this.Gr=new Ix(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ax,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new Rx(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){z("MemoryPersistence","Starting transaction:",t);const i=new Ox(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(t,e){return V.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class Ox extends p0{constructor(t){super(),this.currentSequenceNumber=t}}class hu{constructor(t){this.persistence=t,this.Jr=new uu,this.Yr=null}static Zr(t){return new hu(t)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),V.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,s=>{const i=j.fromPath(s);return this.ei(t,i).next(r=>{r||e.removeEntry(i,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=Q(),i=Q();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new du(t,e.fromCache,s,i)}}/**
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
 */class Mx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Lx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Nv()?8:g0(ie())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.Yi(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(t,e,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new Mx;return this.Xi(t,e,o).next(a=>{if(r.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>r.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(Ii()<=Z.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Vs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Ii()<=Z.DEBUG&&z("QueryEngine","Query:",Vs(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(Ii()<=Z.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Vs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$e(e))):V.resolve())}Yi(t,e){if(Pd(e))return V.resolve(null);let s=$e(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Jo(e,null,"F"),s=$e(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=Q(...r);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.ts(e,a);return this.ns(e,u,o,c.readTime)?this.Yi(t,Jo(e,null,"F")):this.rs(t,u,e,c)}))})))}Zi(t,e,s,i){return Pd(e)||i.isEqual(q.min())?V.resolve(null):this.Ji.getDocuments(t,s).next(r=>{const o=this.ts(e,r);return this.ns(e,o,s,i)?V.resolve(null):(Ii()<=Z.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vs(e)),this.rs(t,o,e,u0(i,-1)).next(a=>a))})}ts(t,e){let s=new qt(Bg(t));return e.forEach((i,r)=>{Ia(t,r)&&(s=s.add(r))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,s){return Ii()<=Z.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Vs(e)),this.Ji.getDocumentsMatchingQuery(t,e,Un.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new It(it),this._s=new ci(r=>nu(r),su),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Tx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Vx(n,t,e,s){return new Nx(n,t,e,s)}async function om(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=Q();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return e.localDocuments.getDocuments(s,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Fx(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const d=u.batch,p=d.keys();let m=V.resolve();return p.forEach(_=>{m=m.next(()=>h.getEntry(c,_)).next(v=>{const b=u.docVersions.get(_);ct(b!==null),v.version.compareTo(b)<0&&(d.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),h.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(e,s,t,r).next(()=>r.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=Q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function am(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Bx(n,t){const e=K(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const a=[];t.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(e.Ur.removeMatchingKeys(r,h.removedDocuments,d).next(()=>e.Ur.addMatchingKeys(r,h.addedDocuments,d)));let m=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(d)!==null?m=m.withResumeToken(Gt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(d,m),function(v,b,I){return v.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(p,m,h)&&a.push(e.Ur.updateTargetData(r,m))});let c=gn(),u=Q();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Ux(r,o,t.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!s.isEqual(q.min())){const h=e.Ur.getLastRemoteSnapshotVersion(r).next(d=>e.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return V.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(e.os=i,r))}function Ux(n,t,e){let s=Q(),i=Q();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=gn();return e.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(q.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function $x(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function zx(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(r=>r?(i=r,V.resolve(i)):e.Ur.allocateTargetId(s).next(o=>(i=new Rn(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function _l(n,t,e){const s=K(n),i=s.os.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ir(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function zd(n,t,e){const s=K(n);let i=q.min(),r=Q();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=K(c),p=d._s.get(h);return p!==void 0?V.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(s,o,$e(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?i:q.min(),e?r:Q())).next(a=>(jx(s,O0(t),a),{documents:a,Ts:r})))}function jx(n,t,e){let s=n.us.get(t)||q.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.us.set(t,s)}class jd{constructor(){this.activeTargetIds=B0()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hx{constructor(){this.so=new jd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new jd,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Wx{_o(t){}shutdown(){}}/**
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
 */class Hd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oo=null;function Rc(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class Kx extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(e,s,i,r,o){const a=Rc(),c=this.xo(e,s.toUriEncodedString());z("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,r,o),this.No(e,c,u,i).then(h=>(z("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw Ks("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}Lo(e,s,i,r,o,a){return this.Mo(e,s,i,r,o)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}xo(e,s){const i=qx[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const r=Rc();return new Promise((o,a)=>{const c=new xg;c.setWithCredentials(!0),c.listenOnce(wg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case So.NO_ERROR:const h=c.getResponseJson();z(Qt,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(h)),o(h);break;case So.TIMEOUT:z(Qt,`RPC '${t}' ${r} timed out`),a(new $(N.DEADLINE_EXCEEDED,"Request time out"));break;case So.HTTP_ERROR:const d=c.getStatus();if(z(Qt,`RPC '${t}' ${r} failed with status:`,d,"response text:",c.getResponseText()),d>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const _=function(b){const I=b.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(I)>=0?I:N.UNKNOWN}(m.status);a(new $(_,m.message))}else a(new $(N.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(N.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{z(Qt,`RPC '${t}' ${r} completed.`)}});const u=JSON.stringify(i);z(Qt,`RPC '${t}' ${r} sending request:`,i),c.send(e,"POST",u,s,15)})}Bo(t,e,s){const i=Rc(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ig(),a=Tg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const h=r.join("");z(Qt,`Creating RPC '${t}' stream ${i}: ${h}`,c);const d=o.createWebChannel(h,c);let p=!1,m=!1;const _=new Gx({Io:b=>{m?z(Qt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(p||(z(Qt,`Opening RPC '${t}' stream ${i} transport.`),d.open(),p=!0),z(Qt,`RPC '${t}' stream ${i} sending:`,b),d.send(b))},To:()=>d.close()}),v=(b,I,S)=>{b.listen(I,D=>{try{S(D)}catch(k){setTimeout(()=>{throw k},0)}})};return v(d,Vi.EventType.OPEN,()=>{m||(z(Qt,`RPC '${t}' stream ${i} transport opened.`),_.yo())}),v(d,Vi.EventType.CLOSE,()=>{m||(m=!0,z(Qt,`RPC '${t}' stream ${i} transport closed`),_.So())}),v(d,Vi.EventType.ERROR,b=>{m||(m=!0,Ks(Qt,`RPC '${t}' stream ${i} transport errored:`,b),_.So(new $(N.UNAVAILABLE,"The operation could not be completed")))}),v(d,Vi.EventType.MESSAGE,b=>{var I;if(!m){const S=b.data[0];ct(!!S);const D=S,k=D.error||((I=D[0])===null||I===void 0?void 0:I.error);if(k){z(Qt,`RPC '${t}' stream ${i} received error:`,k);const O=k.status;let M=function(w){const A=Lt[w];if(A!==void 0)return Xg(A)}(O),E=k.message;M===void 0&&(M=N.INTERNAL,E="Unknown error status: "+O+" with message "+k.message),m=!0,_.So(new $(M,E)),d.close()}else z(Qt,`RPC '${t}' stream ${i} received:`,S),_.bo(S)}}),v(a,Eg.STAT_EVENT,b=>{b.stat===al.PROXY?z(Qt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===al.NOPROXY&&z(Qt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function Cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n){return new ix(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,e,s=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,e,s,i,r,o,a,c){this.ui=t,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new cm(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(pn(e.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new $(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yx extends lm{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=ax(this.serializer,t),s=function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?ze(o.readTime):q.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=ml(this.serializer),e.addTarget=function(r,o){let a;const c=o.target;if(a=hl(c)?{documents:ux(r,c)}:{query:hx(r,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Zg(r,o.resumeToken);const u=fl(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=ea(r,o.snapshotVersion.toTimestamp());const u=fl(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const s=fx(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=ml(this.serializer),e.removeTarget=t,this.a_(e)}}class Xx extends lm{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return ct(!!t.streamToken),this.lastStreamToken=t.streamToken,ct(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){ct(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=lx(t.writeResults,t.commitTime),s=ze(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=ml(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>cx(this.serializer,s))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(t,pl(e,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(N.UNKNOWN,r.toString())})}Lo(t,e,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,pl(e,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(N.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Jx{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(pn(e),this.D_=!1):z("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{Es(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=K(c);u.L_.add(4),await Rr(u),u.q_.set("Unknown"),u.L_.delete(4),await ka(u)}(this))})}),this.q_=new Jx(s,i)}}async function ka(n){if(Es(n))for(const t of n.B_)await t(!0)}async function Rr(n){for(const t of n.B_)await t(!1)}function um(n,t){const e=K(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),mu(e)?gu(e):li(e).r_()&&pu(e,t))}function fu(n,t){const e=K(n),s=li(e);e.N_.delete(t),s.r_()&&hm(e,t),e.N_.size===0&&(s.r_()?s.o_():Es(e)&&e.q_.set("Unknown"))}function pu(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}li(n).A_(t)}function hm(n,t){n.Q_.xe(t),li(n).R_(t)}function gu(n){n.Q_=new tx({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),li(n).start(),n.q_.v_()}function mu(n){return Es(n)&&!li(n).n_()&&n.N_.size>0}function Es(n){return K(n).L_.size===0}function dm(n){n.Q_=void 0}async function tw(n){n.q_.set("Online")}async function ew(n){n.N_.forEach((t,e)=>{pu(n,t)})}async function nw(n,t){dm(n),mu(n)?(n.q_.M_(t),gu(n)):n.q_.set("Unknown")}async function sw(n,t,e){if(n.q_.set("Online"),t instanceof Jg&&t.state===2&&t.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,t)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await na(n,s)}else if(t instanceof ko?n.Q_.Ke(t):t instanceof Qg?n.Q_.He(t):n.Q_.We(t),!e.isEqual(q.min()))try{const s=await am(n.localStore);e.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.N_.get(u);h&&r.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=r.N_.get(c);if(!h)return;r.N_.set(c,h.withResumeToken(Gt.EMPTY_BYTE_STRING,h.snapshotVersion)),hm(r,c);const d=new Rn(h.target,c,u,h.sequenceNumber);pu(r,d)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await na(n,s)}}async function na(n,t,e){if(!Ir(t))throw t;n.L_.add(1),await Rr(n),n.q_.set("Offline"),e||(e=()=>am(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await ka(n)})}function fm(n,t){return t().catch(e=>na(n,e,t))}async function Pa(n){const t=K(n),e=zn(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;iw(t);)try{const i=await $x(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,rw(t,i)}catch(i){await na(t,i)}pm(t)&&gm(t)}function iw(n){return Es(n)&&n.O_.length<10}function rw(n,t){n.O_.push(t);const e=zn(n);e.r_()&&e.V_&&e.m_(t.mutations)}function pm(n){return Es(n)&&!zn(n).n_()&&n.O_.length>0}function gm(n){zn(n).start()}async function ow(n){zn(n).p_()}async function aw(n){const t=zn(n);for(const e of n.O_)t.m_(e.mutations)}async function cw(n,t,e){const s=n.O_.shift(),i=au.from(s,t,e);await fm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Pa(n)}async function lw(n,t){t&&zn(n).V_&&await async function(s,i){if(function(o){return Q0(o)&&o!==N.ABORTED}(i.code)){const r=s.O_.shift();zn(s).s_(),await fm(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Pa(s)}}(n,t),pm(n)&&gm(n)}async function Wd(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=Es(e);e.L_.add(3),await Rr(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ka(e)}async function uw(n,t){const e=K(n);t?(e.L_.delete(2),await ka(e)):t||(e.L_.add(2),await Rr(e),e.q_.set("Unknown"))}function li(n){return n.K_||(n.K_=function(e,s,i){const r=K(e);return r.w_(),new Yx(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:tw.bind(null,n),Ro:ew.bind(null,n),mo:nw.bind(null,n),d_:sw.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),mu(n)?gu(n):n.q_.set("Unknown")):(await n.K_.stop(),dm(n))})),n.K_}function zn(n){return n.U_||(n.U_=function(e,s,i){const r=K(e);return r.w_(),new Xx(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ow.bind(null,n),mo:lw.bind(null,n),f_:aw.bind(null,n),g_:cw.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Pa(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new _u(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yu(n,t){if(pn("AsyncQueue",`${t}: ${n}`),Ir(n))return new $(N.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this.comparator=t?(e,s)=>t(e,s)||j.comparator(e.key,s.key):(e,s)=>j.comparator(e.key,s.key),this.keyedMap=Fi(),this.sortedSet=new It(this.comparator)}static emptySet(t){return new js(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof js)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new js;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.W_=new It(j.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):W():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Zs{constructor(t,e,s,i,r,o,a,c,u){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Zs(t,e,js.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ta(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class dw{constructor(){this.queries=Gd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=K(e),r=i.queries;i.queries=Gd(),r.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new $(N.ABORTED,"Firestore shutting down"))}}function Gd(){return new ci(n=>Fg(n),Ta)}async function mm(n,t){const e=K(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.H_()&&t.J_()&&(s=2):(r=new hw,s=t.J_()?0:1);try{switch(s){case 0:r.z_=await e.onListen(i,!0);break;case 1:r.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=yu(o,`Initialization of query '${Vs(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.j_.push(t),t.Z_(e.onlineState),r.z_&&t.X_(r.z_)&&vu(e)}async function _m(n,t){const e=K(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.j_.indexOf(t);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=t.J_()?0:1:!r.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function fw(n,t){const e=K(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&vu(e)}function pw(n,t,e){const s=K(n),i=s.queries.get(t);if(i)for(const r of i.j_)r.onError(e);s.queries.delete(t)}function vu(n){n.Y_.forEach(t=>{t.next()})}var yl,Kd;(Kd=yl||(yl={})).ea="default",Kd.Cache="cache";class ym{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Zs(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Zs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==yl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(t){this.key=t}}class bm{constructor(t){this.key=t}}class gw{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Q(),this.mutatedKeys=Q(),this.Aa=Bg(t),this.Ra=new js(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new qd,i=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,d)=>{const p=i.get(h),m=Ia(this.query,d)?d:null,_=!!p&&this.mutatedKeys.has(p.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;p&&m?p.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),b=!0):this.ga(p,m)||(s.track({type:2,doc:m}),b=!0,(c&&this.Aa(m,c)>0||u&&this.Aa(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),b=!0):p&&!m&&(s.track({type:1,doc:p}),b=!0,(c||u)&&(a=!0)),b&&(m?(o=o.add(m),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((h,d)=>function(m,_){const v=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return v(m)-v(_)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(s),i=i!=null&&i;const a=e&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Zs(this.query,t.Ra,r,o,t.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Q(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new bm(s))}),this.da.forEach(s=>{t.has(s)||e.push(new vm(s))}),e}ba(t){this.Ta=t.Ts,this.da=Q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Zs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mw{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class _w{constructor(t){this.key=t,this.va=!1}}class yw{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ci(a=>Fg(a),Ta),this.Ma=new Map,this.xa=new Set,this.Oa=new It(j.comparator),this.Na=new Map,this.La=new uu,this.Ba={},this.ka=new Map,this.qa=Js.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vw(n,t,e=!0){const s=Am(n);let i;const r=s.Fa.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await xm(s,t,e,!0),i}async function bw(n,t){const e=Am(n);await xm(e,t,!0,!1)}async function xm(n,t,e,s){const i=await zx(n.localStore,$e(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await xw(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&um(n.remoteStore,i),a}async function xw(n,t,e,s,i){n.Ka=(d,p,m)=>async function(v,b,I,S){let D=b.view.ma(I);D.ns&&(D=await zd(v.localStore,b.query,!1).then(({documents:E})=>b.view.ma(E,D)));const k=S&&S.targetChanges.get(b.targetId),O=S&&S.targetMismatches.get(b.targetId)!=null,M=b.view.applyChanges(D,v.isPrimaryClient,k,O);return Xd(v,b.targetId,M.wa),M.snapshot}(n,d,p,m);const r=await zd(n.localStore,t,!0),o=new gw(t,r.Ts),a=o.ma(r.documents),c=Sr.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Xd(n,e,u.wa);const h=new mw(t,e,o);return n.Fa.set(t,h),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),u.snapshot}async function ww(n,t,e){const s=K(n),i=s.Fa.get(t),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!Ta(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await _l(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&fu(s.remoteStore,i.targetId),vl(s,i.targetId)}).catch(Tr)):(vl(s,i.targetId),await _l(s.localStore,i.targetId,!0))}async function Ew(n,t){const e=K(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),fu(e.remoteStore,s.targetId))}async function Tw(n,t,e){const s=Pw(n);try{const i=await function(o,a){const c=K(o),u=Ot.now(),h=a.reduce((m,_)=>m.add(_.key),Q());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=gn(),v=Q();return c.cs.getEntries(m,h).next(b=>{_=b,_.forEach((I,S)=>{S.isValidDocument()||(v=v.add(I))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,_)).next(b=>{d=b;const I=[];for(const S of a){const D=q0(S,d.get(S.key).overlayedDocument);D!=null&&I.push(new Wn(S.key,D,kg(D.value.mapValue),Te.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,I,a)}).next(b=>{p=b;const I=b.applyToLocalDocumentSet(d,v);return c.documentOverlayCache.saveOverlays(m,b.batchId,I)})}).then(()=>({batchId:p.batchId,changes:$g(d)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new It(it)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(s,i.batchId,e),await Cr(s,i.changes),await Pa(s.remoteStore)}catch(i){const r=yu(i,"Failed to persist write");e.reject(r)}}async function wm(n,t){const e=K(n);try{const s=await Bx(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.Na.get(r);o&&(ct(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ct(o.va):i.removedDocuments.size>0&&(ct(o.va),o.va=!1))}),await Cr(e,s,t)}catch(s){await Tr(s)}}function Yd(n,t,e){const s=K(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=K(o);c.onlineState=a;let u=!1;c.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&vu(c)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Iw(n,t,e){const s=K(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),r=i&&i.key;if(r){let o=new It(j.comparator);o=o.insert(r,ne.newNoDocument(r,q.min()));const a=Q().add(r),c=new Ra(q.min(),new Map,new It(it),o,a);await wm(s,c),s.Oa=s.Oa.remove(r),s.Na.delete(t),bu(s)}else await _l(s.localStore,t,!1).then(()=>vl(s,t,e)).catch(Tr)}async function Aw(n,t){const e=K(n),s=t.batch.batchId;try{const i=await Fx(e.localStore,t);Tm(e,s,null),Em(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Cr(e,i)}catch(i){await Tr(i)}}async function Sw(n,t,e){const s=K(n);try{const i=await function(o,a){const c=K(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(ct(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,t);Tm(s,t,e),Em(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Cr(s,i)}catch(i){await Tr(i)}}function Em(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Tm(n,t,e){const s=K(n);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function vl(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||Im(n,s)})}function Im(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(fu(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),bu(n))}function Xd(n,t,e){for(const s of e)s instanceof vm?(n.La.addReference(s.key,t),Rw(n,s)):s instanceof bm?(z("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||Im(n,s.key)):W()}function Rw(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(z("SyncEngine","New document in limbo: "+e),n.xa.add(s),bu(n))}function bu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(yt.fromString(t)),s=n.qa.next();n.Na.set(s,new _w(e)),n.Oa=n.Oa.insert(e,s),um(n.remoteStore,new Rn($e(iu(e.path)),s,"TargetPurposeLimboResolution",Jl.oe))}}async function Cr(n,t,e){const s=K(n),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(u=>{var h;if((u||e)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=e==null?void 0:e.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){i.push(u);const d=du.Wi(c.targetId,u);r.push(d)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(c,u){const h=K(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>V.forEach(u,p=>V.forEach(p.$i,m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>V.forEach(p.Ui,m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!Ir(d))throw d;z("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=h.os.get(p),_=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(_);h.os=h.os.insert(p,v)}}}(s.localStore,r))}async function Cw(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const s=await om(e.localStore,t);e.currentUser=t,function(r,o){r.ka.forEach(a=>{a.forEach(c=>{c.reject(new $(N.CANCELLED,o))})}),r.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Cr(e,s.hs)}}function kw(n,t){const e=K(n),s=e.Na.get(t);if(s&&s.va)return Q().add(s.key);{let i=Q();const r=e.Ma.get(t);if(!r)return i;for(const o of r){const a=e.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function Am(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=wm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=kw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Iw.bind(null,t),t.Ca.d_=fw.bind(null,t.eventManager),t.Ca.$a=pw.bind(null,t.eventManager),t}function Pw(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Aw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Sw.bind(null,t),t}class sa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ca(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Vx(this.persistence,new Lx,t.initialUser,this.serializer)}Ga(t){return new Dx(hu.Zr,this.serializer)}Wa(t){return new Hx}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sa.provider={build:()=>new sa};class bl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Yd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cw.bind(null,this.syncEngine),await uw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new dw}()}createDatastore(t){const e=Ca(t.databaseInfo.databaseId),s=function(r){return new Kx(r)}(t.databaseInfo);return function(r,o,a,c){return new Qx(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,r,o,a){return new Zx(s,i,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Yd(this.syncEngine,e,0),function(){return Hd.D()?new Hd:new Wx}())}createSyncEngine(t,e){return function(i,r,o,a,c,u,h){const d=new yw(i,r,o,a,c,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const r=K(i);z("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await Rr(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}bl.provider={build:()=>new bl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):pn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=te.UNAUTHENTICATED,this.clientId=Sg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=yu(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function kc(n,t){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await om(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Qd(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ow(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>Wd(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Wd(t.remoteStore,i)),n._onlineComponents=t}async function Ow(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await kc(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ks("Error using user provided cache. Falling back to memory cache: "+e),await kc(n,new sa)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await kc(n,new sa);return n._offlineComponents}async function Rm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Qd(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Qd(n,new bl))),n._onlineComponents}function Mw(n){return Rm(n).then(t=>t.syncEngine)}async function Cm(n){const t=await Rm(n),e=t.eventManager;return e.onListen=vw.bind(null,t.syncEngine),e.onUnlisten=ww.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=bw.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ew.bind(null,t.syncEngine),e}function Lw(n,t,e={}){const s=new hn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new Sm({next:p=>{h.Za(),o.enqueueAndForget(()=>_m(r,d));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new $(N.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?u.reject(new $(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new ym(iu(a.path),h,{includeMetadataChanges:!0,_a:!0});return mm(r,d)}(await Cm(n),n.asyncQueue,t,e,s)),s.promise}function Nw(n,t,e={}){const s=new hn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new Sm({next:p=>{h.Za(),o.enqueueAndForget(()=>_m(r,d)),p.fromCache&&c.source==="server"?u.reject(new $(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new ym(a,h,{includeMetadataChanges:!0,_a:!0});return mm(r,d)}(await Cm(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function km(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(n,t,e){if(!e)throw new $(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Vw(n,t,e,s){if(t===!0&&s===!0)throw new $(N.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Zd(n){if(!j.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tf(n){if(j.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Da(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W()}function Oe(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new $(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Da(n);throw new $(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Fw(n,t){if(t<=0)throw new $(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new $(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new $(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Vw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=km((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Oa{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ef({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new $(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ef(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new e0;switch(s.type){case"firstParty":return new r0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new $(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Jd.get(e);s&&(z("ComponentProvider","Removing Datastore"),Jd.delete(e),s.terminate())}(this),Promise.resolve()}}function Bw(n,t,e,s={}){var i;const r=(n=Oe(n,Oa))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=te.MOCK_USER;else{a=pg(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new $(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new te(u)}n._authCredentials=new n0(new Ag(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new qn(this.firestore,t,this._query)}}class ue{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ue(this.firestore,t,this._key)}}class Nn extends qn{constructor(t,e,s){super(t,e,iu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ue(this.firestore,null,new j(t))}withConverter(t){return new Nn(this.firestore,t,this._path)}}function Tt(n,t,...e){if(n=kt(n),Pm("collection","path",t),n instanceof Oa){const s=yt.fromString(t,...e);return tf(s),new Nn(n,null,s)}{if(!(n instanceof ue||n instanceof Nn))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(yt.fromString(t,...e));return tf(s),new Nn(n.firestore,null,s)}}function Ie(n,t,...e){if(n=kt(n),arguments.length===1&&(t=Sg.newId()),Pm("doc","path",t),n instanceof Oa){const s=yt.fromString(t,...e);return Zd(s),new ue(n,null,new j(s))}{if(!(n instanceof ue||n instanceof Nn))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(yt.fromString(t,...e));return Zd(s),new ue(n.firestore,n instanceof Nn?n.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new cm(this,"async_queue_retry"),this.Vu=()=>{const s=Cc();s&&z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=Cc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Cc();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new hn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Ir(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw pn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=_u.createAndSchedule(this,t,e,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ts extends Oa{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new nf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new nf(t),this._firestoreClient=void 0,await t}}}function Uw(n,t){const e=typeof n=="object"?n:Xl(),s=typeof n=="string"?n:"(default)",i=wa(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=hg("firestore");r&&Bw(i,...r)}return i}function xu(n){if(n._terminated)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$w(n),n._firestoreClient}function $w(n){var t,e,s;const i=n._freezeSettings(),r=function(a,c,u,h){return new y0(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,km(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Dw(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ti(Gt.fromBase64String(t))}catch(e){throw new $(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ti(Gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new $(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new $(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new $(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return it(this._lat,t._lat)||it(this._long,t._long)}}/**
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
 */class Tu{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=/^__.*__$/;class jw{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new Wn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ar(t,this.data,e,this.fieldTransforms)}}class Dm{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new Wn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Om(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Iu{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Iu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ia(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Om(this.Cu)&&zw.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Hw{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||Ca(t)}Qu(t,e,s,i=!1){return new Iu({Cu:t,methodName:e,qu:s,path:Wt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function La(n){const t=n._freezeSettings(),e=Ca(n._databaseId);return new Hw(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Mm(n,t,e,s,i,r={}){const o=n.Qu(r.merge||r.mergeFields?2:0,t,e,i);Au("Data must be an object, but it was:",o,s);const a=Lm(s,o);let c,u;if(r.merge)c=new ve(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=xl(t,d,e);if(!o.contains(p))throw new $(N.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Vm(h,p)||h.push(p)}c=new ve(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new jw(new ge(a),c,u)}class Na extends wu{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Na}}function Ww(n,t,e,s){const i=n.Qu(1,t,e);Au("Data must be an object, but it was:",i,s);const r=[],o=ge.empty();ws(s,(c,u)=>{const h=Su(t,c,e);u=kt(u);const d=i.Nu(h);if(u instanceof Na)r.push(h);else{const p=kr(u,d);p!=null&&(r.push(h),o.set(h,p))}});const a=new ve(r);return new Dm(o,a,i.fieldTransforms)}function qw(n,t,e,s,i,r){const o=n.Qu(1,t,e),a=[xl(t,s,e)],c=[i];if(r.length%2!=0)throw new $(N.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<r.length;p+=2)a.push(xl(t,r[p])),c.push(r[p+1]);const u=[],h=ge.empty();for(let p=a.length-1;p>=0;--p)if(!Vm(u,a[p])){const m=a[p];let _=c[p];_=kt(_);const v=o.Nu(m);if(_ instanceof Na)u.push(m);else{const b=kr(_,v);b!=null&&(u.push(m),h.set(m,b))}}const d=new ve(u);return new Dm(h,d,o.fieldTransforms)}function Gw(n,t,e,s=!1){return kr(e,n.Qu(s?4:3,t))}function kr(n,t){if(Nm(n=kt(n)))return Au("Unsupported field value:",t,n),Lm(n,t);if(n instanceof wu)return function(s,i){if(!Om(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=kr(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,t)}return function(s,i){if((s=kt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return U0(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ot.fromDate(s);return{timestampValue:ea(i.serializer,r)}}if(s instanceof Ot){const r=new Ot(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ea(i.serializer,r)}}if(s instanceof Eu)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ti)return{bytesValue:Zg(i.serializer,s._byteString)};if(s instanceof ue){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:lu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Tu)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return ru(a.serializer,c)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${Da(s)}`)}(n,t)}function Lm(n,t){const e={};return Rg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ws(n,(s,i)=>{const r=kr(i,t.Mu(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function Nm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ot||n instanceof Eu||n instanceof ti||n instanceof ue||n instanceof wu||n instanceof Tu)}function Au(n,t,e){if(!Nm(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=Da(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function xl(n,t,e){if((t=kt(t))instanceof Ma)return t._internalPath;if(typeof t=="string")return Su(n,t);throw ia("Field path arguments must be of type string or ",n,!1,void 0,e)}const Kw=new RegExp("[~\\*/\\[\\]]");function Su(n,t,e){if(t.search(Kw)>=0)throw ia(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ma(...t.split("."))._internalPath}catch{throw ia(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ia(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new $(N.INVALID_ARGUMENT,a+n+c)}function Vm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Yw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Va("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Yw extends Fm{data(){return super.data()}}function Va(n,t){return typeof t=="string"?Su(n,t):t instanceof Ma?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ru{}class Cu extends Ru{}function fe(n,t,...e){let s=[];t instanceof Ru&&s.push(t),s=s.concat(e),function(r){const o=r.filter(c=>c instanceof ku).length,a=r.filter(c=>c instanceof Fa).length;if(o>1||o>0&&a>0)throw new $(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Fa extends Cu{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Fa(t,e,s)}_apply(t){const e=this._parse(t);return Bm(t._query,e),new qn(t.firestore,t.converter,dl(t._query,e))}_parse(t){const e=La(t.firestore);return function(r,o,a,c,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){rf(d,h);const m=[];for(const _ of d)m.push(sf(c,r,_));p={arrayValue:{values:m}}}else p=sf(c,r,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||rf(d,h),p=Gw(a,o,d,h==="in"||h==="not-in");return Nt.create(u,h,p)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Vt(n,t,e){const s=t,i=Va("where",n);return Fa._create(i,s,e)}class ku extends Ru{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ku(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:De.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)Bm(o,c),o=dl(o,c)}(t._query,e),new qn(t.firestore,t.converter,dl(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pu extends Cu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Pu(t,e)}_apply(t){const e=function(i,r,o){if(i.startAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lr(r,o)}(t._query,this._field,this._direction);return new qn(t.firestore,t.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new ai(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function wl(n,t="asc"){const e=t,s=Va("orderBy",n);return Pu._create(s,e)}class Du extends Cu{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new Du(t,e,s)}_apply(t){return new qn(t.firestore,t.converter,Jo(t._query,this._limit,this._limitType))}}function Po(n){return Fw("limit",n),Du._create("limit",n,"F")}function sf(n,t,e){if(typeof(e=kt(e))=="string"){if(e==="")throw new $(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vg(t)&&e.indexOf("/")!==-1)throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(yt.fromString(e));if(!j.isDocumentKey(s))throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Id(n,new j(s))}if(e instanceof ue)return Id(n,e._key);throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Da(e)}.`)}function rf(n,t){if(!Array.isArray(n)||n.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Bm(n,t){const e=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Qw{convertValue(t,e="none"){switch(ms(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(gs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw W()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return ws(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertVectorValue(t){var e,s,i;const r=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Pt(o.doubleValue));return new Tu(r)}convertGeoPoint(t){return new Eu(Pt(t.latitude),Pt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=tu(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(or(t));default:return null}}convertTimestamp(t){const e=$n(t);return new Ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=yt.fromString(t);ct(rm(s));const i=new ar(s.get(1),s.get(3)),r=new j(s.popFirst(5));return i.isEqual(e)||pn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $m extends Fm{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Do(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Va("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class Do extends $m{data(t={}){return super.data(t)}}class Jw{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ui(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new Do(this._firestore,this._userDataWriter,s.key,s,new Ui(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new $(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Do(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ui(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new Do(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ui(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Zw(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n){n=Oe(n,ue);const t=Oe(n.firestore,Ts);return Lw(xu(t),n._key).then(e=>nE(t,n,e))}class zm extends Qw{constructor(t){super(),this.firestore=t}convertBytes(t){return new ti(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ue(this.firestore,null,e)}}function _t(n){n=Oe(n,qn);const t=Oe(n.firestore,Ts),e=xu(t),s=new zm(t);return Xw(n._query),Nw(e,n._query).then(i=>new Jw(t,s,n,i))}function tE(n,t,e){n=Oe(n,ue);const s=Oe(n.firestore,Ts),i=Um(n.converter,t);return Ba(s,[Mm(La(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Te.none())])}function ei(n,t,e,...s){n=Oe(n,ue);const i=Oe(n.firestore,Ts),r=La(i);let o;return o=typeof(t=kt(t))=="string"||t instanceof Ma?qw(r,"updateDoc",n._key,t,e,s):Ww(r,"updateDoc",n._key,t),Ba(i,[o.toMutation(n._key,Te.exists(!0))])}function eE(n){return Ba(Oe(n.firestore,Ts),[new ou(n._key,Te.none())])}function Ou(n,t){const e=Oe(n.firestore,Ts),s=Ie(n),i=Um(n.converter,t);return Ba(e,[Mm(La(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Te.exists(!1))]).then(()=>s)}function Ba(n,t){return function(s,i){const r=new hn;return s.asyncQueue.enqueueAndForget(async()=>Tw(await Mw(s),i,r)),r.promise}(xu(n),t)}function nE(n,t,e){const s=e.docs.get(t._key),i=new zm(n);return new $m(n,i,t._key,s,new Ui(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){oi=i})(xs),fs(new Bn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ts(new s0(s.getProvider("auth-internal")),new a0(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new $(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ue(bd,"4.7.3",t),Ue(bd,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="firebasestorage.googleapis.com",Hm="storageBucket",sE=2*60*1e3,iE=10*60*1e3,rE=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Ge{constructor(t,e,s=0){super(Pc(t),`Firebase Storage: ${e} (${Pc(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,At.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Pc(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var bt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(bt||(bt={}));function Pc(n){return"storage/"+n}function Mu(){const n="An unknown error occurred, please check the error payload for server response.";return new At(bt.UNKNOWN,n)}function oE(n){return new At(bt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function aE(n){return new At(bt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new At(bt.UNAUTHENTICATED,n)}function lE(){return new At(bt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uE(n){return new At(bt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Wm(){return new At(bt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qm(){return new At(bt.CANCELED,"User canceled the upload/download.")}function hE(n){return new At(bt.INVALID_URL,"Invalid URL '"+n+"'.")}function dE(n){return new At(bt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function fE(){return new At(bt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Hm+"' property when initializing the app?")}function Gm(){return new At(bt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function pE(){return new At(bt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function gE(){return new At(bt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mE(n){return new At(bt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Tl(n){return new At(bt.INVALID_ARGUMENT,n)}function Km(){return new At(bt.APP_DELETED,"The Firebase app was deleted.")}function _E(n){return new At(bt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Qi(n,t){return new At(bt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Ai(n){throw new At(bt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=be.makeFromUrl(t,e)}catch{return new be(t,"")}if(s.path==="")return s;throw dE(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(k){k.path_=decodeURIComponent(k.path)}const h="v[A-Za-z0-9_]+",d=e.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),_={bucket:1,path:3},v=e===jm?"(?:storage.googleapis.com|storage.cloud.google.com)":e,b="([^?#]*)",I=new RegExp(`^https?://${v}/${i}/${b}`,"i"),D=[{regex:a,indices:c,postModify:r},{regex:m,indices:_,postModify:u},{regex:I,indices:{bucket:1,path:2},postModify:u}];for(let k=0;k<D.length;k++){const O=D[k],M=O.regex.exec(t);if(M){const E=M[O.indices.bucket];let y=M[O.indices.path];y||(y=""),s=new be(E,y),O.postModify(s);break}}if(s==null)throw hE(t);return s}}class yE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...b){u||(u=!0,t.apply(null,b))}function d(b){i=setTimeout(()=>{i=null,n(m,c())},b)}function p(){r&&clearTimeout(r)}function m(b,...I){if(u){p();return}if(b){p(),h.call(null,b,...I);return}if(c()||o){p(),h.call(null,b,...I);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,d(D)}let _=!1;function v(b){_||(_=!0,p(),!u&&(i!==null?(b||(a=2),clearTimeout(i),d(0)):b||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,v(!0)},e),v}function bE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n){return n!==void 0}function wE(n){return typeof n=="function"}function EE(n){return typeof n=="object"&&!Array.isArray(n)}function Ua(n){return typeof n=="string"||n instanceof String}function of(n){return Lu()&&n instanceof Blob}function Lu(){return typeof Blob<"u"}function af(n,t,e,s){if(s<t)throw Tl(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw Tl(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function Ym(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var us;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(us||(us={}));/**
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
 */function Xm(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=t.indexOf(n)!==-1;return e||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(t,e,s,i,r,o,a,c,u,h,d,p=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new ao(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===us.NO_ERROR,c=r.getStatus();if(!a||Xm(c,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===us.ABORT;s(!1,new ao(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ao(u,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xE(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Mu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Km():qm();o(c)}else{const c=Wm();o(c)}};this.canceled_?e(!1,new ao(!1,null,!0)):this.backoffId_=vE(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&bE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ao{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function IE(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function AE(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function SE(n,t){t&&(n["X-Firebase-GMPID"]=t)}function RE(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function CE(n,t,e,s,i,r,o=!0){const a=Ym(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return SE(u,t),IE(u,e),AE(u,r),RE(u,s),new TE(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function PE(...n){const t=kE();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(Lu())return new Blob(n);throw new At(bt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function DE(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function OE(n){if(typeof atob>"u")throw mE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dc{constructor(t,e){this.data=t,this.contentType=e||null}}function ME(n,t){switch(n){case Be.RAW:return new Dc(Qm(t));case Be.BASE64:case Be.BASE64URL:return new Dc(Jm(n,t));case Be.DATA_URL:return new Dc(NE(t),VE(t))}throw Mu()}function Qm(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function LE(n){let t;try{t=decodeURIComponent(n)}catch{throw Qi(Be.DATA_URL,"Malformed data URL.")}return Qm(t)}function Jm(n,t){switch(n){case Be.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw Qi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Be.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw Qi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=OE(t)}catch(i){throw i.message.includes("polyfill")?i:Qi(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class Zm{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Qi(Be.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=FE(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function NE(n){const t=new Zm(n);return t.base64?Jm(Be.BASE64,t.rest):LE(t.rest)}function VE(n){return new Zm(n).contentType}function FE(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e){let s=0,i="";of(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(of(this.data_)){const s=this.data_,i=DE(s,t,e);return i===null?null:new En(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new En(s,!0)}}static getBlob(...t){if(Lu()){const e=t.map(s=>s instanceof En?s.data_:s);return new En(PE.apply(null,e))}else{const e=t.map(o=>Ua(o)?ME(Be.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new En(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n){let t;try{t=JSON.parse(n)}catch{return null}return EE(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function UE(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function e_(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(n,t){return t}class le{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||$E}}let co=null;function zE(n){return!Ua(n)||n.length<2?n:e_(n)}function n_(){if(co)return co;const n=[];n.push(new le("bucket")),n.push(new le("generation")),n.push(new le("metageneration")),n.push(new le("name","fullPath",!0));function t(r,o){return zE(o)}const e=new le("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new le("size");return i.xform=s,n.push(i),n.push(new le("timeCreated")),n.push(new le("updated")),n.push(new le("md5Hash",null,!0)),n.push(new le("cacheControl",null,!0)),n.push(new le("contentDisposition",null,!0)),n.push(new le("contentEncoding",null,!0)),n.push(new le("contentLanguage",null,!0)),n.push(new le("contentType",null,!0)),n.push(new le("metadata","customMetadata",!0)),co=n,co}function jE(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new be(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function HE(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return jE(s,n),s}function s_(n,t,e){const s=t_(t);return s===null?null:HE(n,s,e)}function WE(n,t,e,s){const i=t_(t);if(i===null||!Ua(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const h=n.bucket,d=n.fullPath,p="/b/"+o(h)+"/o/"+o(d),m=Pr(p,e,s),_=Ym({alt:"media",token:u});return m+_})[0]}function i_(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class ui{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n){if(!n)throw Mu()}function Nu(n,t){function e(s,i){const r=s_(n,i,t);return dn(r!==null),r}return e}function qE(n,t){function e(s,i){const r=s_(n,i,t);return dn(r!==null),WE(r,i,n.host,n._protocol)}return e}function Dr(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=lE():i=cE():e.getStatus()===402?i=aE(n.bucket):e.getStatus()===403?i=uE(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function r_(n){const t=Dr(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=oE(n.path)),r.serverResponse=i.serverResponse,r}return e}function GE(n,t,e){const s=t.fullServerUrl(),i=Pr(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new ui(i,r,Nu(n,e),o);return a.errorHandler=r_(t),a}function KE(n,t,e){const s=t.fullServerUrl(),i=Pr(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new ui(i,r,qE(n,e),o);return a.errorHandler=r_(t),a}function YE(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function o_(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=YE(null,t)),s}function XE(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let k=0;k<2;k++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=o_(t,s,i),h=i_(u,e),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",m=En.getBlob(d,s,p);if(m===null)throw Gm();const _={name:u.fullPath},v=Pr(r,n.host,n._protocol),b="POST",I=n.maxUploadRetryTime,S=new ui(v,b,Nu(n,e),I);return S.urlParams=_,S.headers=o,S.body=m.uploadData(),S.errorHandler=Dr(t),S}class ra{constructor(t,e,s,i){this.current=t,this.total=e,this.finalized=!!s,this.metadata=i||null}}function Vu(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{dn(!1)}return dn(!!e&&(t||["active"]).indexOf(e)!==-1),e}function QE(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o=o_(t,s,i),a={name:o.fullPath},c=Pr(r,n.host,n._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=i_(o,e),p=n.maxUploadRetryTime;function m(v){Vu(v);let b;try{b=v.getResponseHeader("X-Goog-Upload-URL")}catch{dn(!1)}return dn(Ua(b)),b}const _=new ui(c,u,m,p);return _.urlParams=a,_.headers=h,_.body=d,_.errorHandler=Dr(t),_}function JE(n,t,e,s){const i={"X-Goog-Upload-Command":"query"};function r(u){const h=Vu(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{dn(!1)}d||dn(!1);const p=Number(d);return dn(!isNaN(p)),new ra(p,s.size(),h==="final")}const o="POST",a=n.maxUploadRetryTime,c=new ui(e,o,r,a);return c.headers=i,c.errorHandler=Dr(t),c}const cf=256*1024;function ZE(n,t,e,s,i,r,o,a){const c=new ra(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw pE();const u=c.total-c.current;let h=u;i>0&&(h=Math.min(h,i));const d=c.current,p=d+h;let m="";h===0?m="finalize":u===h?m="upload, finalize":m="upload";const _={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(d,p);if(v===null)throw Gm();function b(k,O){const M=Vu(k,["active","final"]),E=c.current+h,y=s.size();let w;return M==="final"?w=Nu(t,r)(k,O):w=null,new ra(E,y,M==="final",w)}const I="POST",S=t.maxUploadRetryTime,D=new ui(e,I,b,S);return D.headers=_,D.body=v.uploadData(),D.progressCallback=a||null,D.errorHandler=Dr(n),D}const pe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Oc(n){switch(n){case"running":case"pausing":case"canceling":return pe.RUNNING;case"paused":return pe.PAUSED;case"success":return pe.SUCCESS;case"canceled":return pe.CANCELED;case"error":return pe.ERROR;default:return pe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(t,e,s){if(wE(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const r=t;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class eT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw Ai("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ai("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ai("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ai("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ai("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class nT extends eT{initXhr(){this.xhr_.responseType="text"}}function Us(){return new nT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=n_(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(bt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(Xm(i.status,[]))if(r)i=Wm();else{this.sleepTime=Math.max(this.sleepTime*2,rE),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(bt.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=QE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Us,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const i=JE(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,Us,e,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=cf*this._chunkMultiplier,e=new ra(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=ZE(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Us,i,r,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){cf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=GE(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Us,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=XE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Us,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=qm(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Oc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,i){const r=new tT(e||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Oc(this._state)){case pe.SUCCESS:Ds(this._resolve.bind(null,this.snapshot))();break;case pe.CANCELED:case pe.ERROR:const e=this._reject;Ds(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Oc(this._state)){case pe.RUNNING:case pe.PAUSED:t.next&&Ds(t.next.bind(t,this.snapshot))();break;case pe.SUCCESS:t.complete&&Ds(t.complete.bind(t))();break;case pe.CANCELED:case pe.ERROR:t.error&&Ds(t.error.bind(t,this._error))();break;default:t.error&&Ds(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class _s{constructor(t,e){this._service=t,e instanceof be?this._location=e:this._location=be.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new _s(t,e)}get root(){const t=new be(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return e_(this._location.path)}get storage(){return this._service}get parent(){const t=BE(this._location.path);if(t===null)return null;const e=new be(this._location.bucket,t);return new _s(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw _E(t)}}function iT(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new sT(n,new En(t),e)}function rT(n){n._throwIfRoot("getDownloadURL");const t=KE(n.storage,n._location,n_());return n.storage.makeRequestWithTokens(t,Us).then(e=>{if(e===null)throw gE();return e})}function oT(n,t){const e=UE(n._location.path,t),s=new be(n._location.bucket,e);return new _s(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n){return/^[A-Za-z]+:\/\//.test(n)}function cT(n,t){return new _s(n,t)}function a_(n,t){if(n instanceof Fu){const e=n;if(e._bucket==null)throw fE();const s=new _s(e,e._bucket);return t!=null?a_(s,t):s}else return t!==void 0?oT(n,t):n}function lT(n,t){if(t&&aT(t)){if(n instanceof Fu)return cT(n,t);throw Tl("To use ref(service, url), the first argument must be a Storage instance.")}else return a_(n,t)}function lf(n,t){const e=t==null?void 0:t[Hm];return e==null?null:be.makeFromBucketSpec(e,n)}function uT(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:pg(i,n.app.options.projectId))}class Fu{constructor(t,e,s,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=jm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sE,this._maxUploadRetryTime=iE,this._requests=new Set,i!=null?this._bucket=be.makeFromBucketSpec(i,this._host):this._bucket=lf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=be.makeFromBucketSpec(this._url,t):this._bucket=lf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){af("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){af("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new _s(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new yE(Km());{const o=CE(t,this._appId,s,i,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const uf="@firebase/storage",hf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="storage";function hT(n,t,e){return n=kt(n),iT(n,t,e)}function dT(n){return n=kt(n),rT(n)}function fT(n,t){return n=kt(n),lT(n,t)}function pT(n=Xl(),t){n=kt(n);const s=wa(n,c_).getImmediate({identifier:t}),i=hg("storage");return i&&gT(s,...i),s}function gT(n,t,e,s={}){uT(n,t,e,s)}function mT(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Fu(e,s,i,t,xs)}function _T(){fs(new Bn(c_,mT,"PUBLIC").setMultipleInstances(!0)),Ue(uf,hf,""),Ue(uf,hf,"esm2017")}_T();function Bu(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(e[s[i]]=n[s[i]]);return e}function l_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yT=l_,u_=new wr("auth","Firebase",l_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Kl("@firebase/auth");function vT(n,...t){oa.logLevel<=Z.WARN&&oa.warn(`Auth (${xs}): ${n}`,...t)}function Oo(n,...t){oa.logLevel<=Z.ERROR&&oa.error(`Auth (${xs}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n,...t){throw Uu(n,...t)}function je(n,...t){return Uu(n,...t)}function h_(n,t,e){const s=Object.assign(Object.assign({},yT()),{[t]:e});return new wr("auth","Firebase",s).create(t,{appName:n.name})}function Vn(n){return h_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uu(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return u_.create(n,...t)}function H(n,t,...e){if(!n)throw Uu(t,...e)}function rn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Oo(t),new Error(t)}function mn(n,t){n||rn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function bT(){return df()==="http:"||df()==="https:"}function df(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bT()||Ov()||"connection"in navigator)?navigator.onLine:!0}function wT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e){this.shortDelay=t,this.longDelay=e,mn(e>t,"Short delay should be less than long delay!"),this.isMobile=kv()||Mv()}get(){return xT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n,t){mn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new Or(3e4,6e4);function Gn(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function _n(n,t,e,s,i={}){return f_(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=Er(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:t,headers:c},r);return Dv()||(u.referrerPolicy="no-referrer"),d_.fetch()(p_(n,n.config.apiHost,e,a),u)})}async function f_(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},ET),t);try{const i=new AT(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw lo(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw lo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw lo(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw h_(n,h,u);Me(n,h)}}catch(i){if(i instanceof Ge)throw i;Me(n,"network-request-failed",{message:String(i)})}}async function $a(n,t,e,s,i={}){const r=await _n(n,t,e,s,i);return"mfaPendingCredential"in r&&Me(n,"multi-factor-auth-required",{_serverResponse:r}),r}function p_(n,t,e,s){const i=`${t}${e}?${s}`;return n.config.emulator?$u(n.config,i):`${n.config.apiScheme}://${i}`}function IT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AT{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(je(this.auth,"network-request-failed")),TT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lo(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=je(n,t,s);return i.customData._tokenResponse=e,i}function ff(n){return n!==void 0&&n.enterprise!==void 0}class ST{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return IT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function RT(n,t){return _n(n,"GET","/v2/recaptchaConfig",Gn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(n,t){return _n(n,"POST","/v1/accounts:delete",t)}async function g_(n,t){return _n(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function kT(n,t=!1){const e=kt(n),s=await e.getIdToken(t),i=zu(s);H(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ji(Mc(i.auth_time)),issuedAtTime:Ji(Mc(i.iat)),expirationTime:Ji(Mc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Mc(n){return Number(n)*1e3}function zu(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const i=lg(e);return i?JSON.parse(i):(Oo("Failed to decode base64 JWT payload"),null)}catch(i){return Oo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pf(n){const t=zu(n);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof Ge&&PT(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function PT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function aa(n){var t;const e=n.auth,s=await n.getIdToken(),i=await dr(n,g_(e,{idToken:s}));H(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?m_(r.providerUserInfo):[],a=MT(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Al(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function OT(n){const t=kt(n);await aa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function MT(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function m_(n){return n.map(t=>{var{providerId:e}=t,s=Bu(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(n,t){const e=await f_(n,{},async()=>{const s=Er({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=p_(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",d_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function NT(n,t){return _n(n,"POST","/v2/accounts:revokeToken",Gn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):pf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){H(t.length!==0,"internal-error");const e=pf(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await LT(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new Hs;return s&&(H(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n,t){H(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class on{constructor(t){var{uid:e,auth:s,stsTokenManager:i}=t,r=Bu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Al(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await dr(this,this.stsTokenManager.getToken(this.auth,t));return H(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return kT(this,t)}reload(){return OT(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new on(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await aa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Vn(this.auth));const t=await this.getIdToken();return await dr(this,CT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,i,r,o,a,c,u,h;const d=(s=e.displayName)!==null&&s!==void 0?s:void 0,p=(i=e.email)!==null&&i!==void 0?i:void 0,m=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=e.photoURL)!==null&&o!==void 0?o:void 0,v=(a=e.tenantId)!==null&&a!==void 0?a:void 0,b=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,I=(u=e.createdAt)!==null&&u!==void 0?u:void 0,S=(h=e.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:k,isAnonymous:O,providerData:M,stsTokenManager:E}=e;H(D&&E,t,"internal-error");const y=Hs.fromJSON(this.name,E);H(typeof D=="string",t,"internal-error"),xn(d,t.name),xn(p,t.name),H(typeof k=="boolean",t,"internal-error"),H(typeof O=="boolean",t,"internal-error"),xn(m,t.name),xn(_,t.name),xn(v,t.name),xn(b,t.name),xn(I,t.name),xn(S,t.name);const w=new on({uid:D,auth:t,email:p,emailVerified:k,displayName:d,isAnonymous:O,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:y,createdAt:I,lastLoginAt:S});return M&&Array.isArray(M)&&(w.providerData=M.map(A=>Object.assign({},A))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(t,e,s=!1){const i=new Hs;i.updateFromServerResponse(e);const r=new on({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await aa(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?m_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Hs;a.updateFromIdToken(s);const c=new on({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Al(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;function an(n){mn(n instanceof Function,"Expected a class definition");let t=gf.get(n);return t?(mn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,gf.set(n,t),t)}/**
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
 */class __{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}__.type="NONE";const mf=__;/**
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
 */function Mo(n,t,e){return`firebase:${n}:${t}:${e}`}class Ws{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Mo(this.userKey,i.apiKey,r),this.fullPersistenceKey=Mo("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?on._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new Ws(an(mf),t,s);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||an(mf);const o=Mo(s,t.config.apiKey,t.name);let a=null;for(const u of e)try{const h=await u._get(o);if(h){const d=on._fromJSON(t,h);u!==r&&(a=d),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ws(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ws(r,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(x_(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(y_(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(E_(t))return"Blackberry";if(T_(t))return"Webos";if(v_(t))return"Safari";if((t.includes("chrome/")||b_(t))&&!t.includes("edge/"))return"Chrome";if(w_(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function y_(n=ie()){return/firefox\//i.test(n)}function v_(n=ie()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function b_(n=ie()){return/crios\//i.test(n)}function x_(n=ie()){return/iemobile/i.test(n)}function w_(n=ie()){return/android/i.test(n)}function E_(n=ie()){return/blackberry/i.test(n)}function T_(n=ie()){return/webos/i.test(n)}function ju(n=ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function VT(n=ie()){var t;return ju(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function FT(){return Lv()&&document.documentMode===10}function I_(n=ie()){return ju(n)||w_(n)||T_(n)||E_(n)||/windows phone/i.test(n)||x_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n,t=[]){let e;switch(n){case"Browser":e=_f(ie());break;case"Worker":e=`${_f(ie())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${xs}/${s}`}/**
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
 */class BT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=e,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function UT(n,t={}){return _n(n,"GET","/v2/passwordPolicy",Gn(n,t))}/**
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
 */const $T=6;class zT{constructor(t){var e,s,i,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:$T,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yf(this),this.idTokenSubscription=new yf(this),this.beforeStateQueue=new BT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=an(e)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await g_(this,{idToken:t}),s=await on._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await aa(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=wT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(sn(this.app))return Promise.reject(Vn(this));const e=t?kt(t):null;return e&&H(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return sn(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await UT(this),e=new zT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new wr("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await NT(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&an(t)||this._popupRedirectResolver;H(e,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[an(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,i);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=A_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&vT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Is(n){return kt(n)}class yf{constructor(t){this.auth=t,this.observer=null,this.addObserver=jv(e=>this.observer=e)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HT(n){za=n}function S_(n){return za.loadJS(n)}function WT(){return za.recaptchaEnterpriseScript}function qT(){return za.gapiScript}function GT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const KT="recaptcha-enterprise",YT="NO_RECAPTCHA";class XT{constructor(t){this.type=KT,this.auth=Is(t)}async verify(t="verify",e=!1){async function s(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{RT(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ST(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;ff(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(u=>{o(u)}).catch(()=>{o(YT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!e&&ff(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=WT();c.length!==0&&(c+=a),S_(c).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function vf(n,t,e,s=!1){const i=new XT(n);let r;try{r=await i.verify(e)}catch{r=await i.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Sl(n,t,e,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await vf(n,t,e,e==="getOobCode");return s(n,r)}else return s(n,t).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vf(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n,t){const e=wa(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(Ko(r,t??{}))return i;Me(i,"already-initialized")}return e.initialize({options:t})}function JT(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(an);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function ZT(n,t,e){const s=Is(n);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=R_(t),{host:o,port:a}=tI(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),eI()}function R_(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function tI(n){const t=R_(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:bf(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:bf(o)}}}function bf(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function eI(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return rn("not implemented")}_getIdTokenResponse(t){return rn("not implemented")}_linkToIdToken(t,e){return rn("not implemented")}_getReauthenticationResolver(t){return rn("not implemented")}}async function nI(n,t){return _n(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(n,t){return $a(n,"POST","/v1/accounts:signInWithPassword",Gn(n,t))}async function iI(n,t){return _n(n,"POST","/v1/accounts:sendOobCode",Gn(n,t))}async function rI(n,t){return iI(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(n,t){return $a(n,"POST","/v1/accounts:signInWithEmailLink",Gn(n,t))}async function aI(n,t){return $a(n,"POST","/v1/accounts:signInWithEmailLink",Gn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Hu{constructor(t,e,s,i=null){super("password",s),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new fr(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new fr(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sl(t,e,"signInWithPassword",sI);case"emailLink":return oI(t,{email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sl(t,s,"signUpPassword",nI);case"emailLink":return aI(t,{idToken:e,email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(n,t){return $a(n,"POST","/v1/accounts:signInWithIdp",Gn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="http://localhost";class ys extends Hu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ys(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Me("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=e,r=Bu(e,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ys(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return qs(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,qs(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,qs(t,e)}buildRequest(){const t={requestUri:cI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Er(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uI(n){const t=Li(Ni(n)).link,e=t?Li(Ni(t)).deep_link_id:null,s=Li(Ni(n)).deep_link_id;return(s?Li(Ni(s)).link:null)||s||e||t||n}class Wu{constructor(t){var e,s,i,r,o,a;const c=Li(Ni(t)),u=(e=c.apiKey)!==null&&e!==void 0?e:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,d=lI((i=c.mode)!==null&&i!==void 0?i:null);H(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=uI(t);try{return new Wu(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.providerId=hi.PROVIDER_ID}static credential(t,e){return fr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Wu.parseLink(e);return H(s,"argument-error"),fr._fromEmailAndCode(t,s.code,s.tenantId)}}hi.PROVIDER_ID="password";hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mr extends C_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Mr{constructor(){super("facebook.com")}static credential(t){return ys._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tn.credential(t.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ys._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return In.credentialFromTaggedObject(t)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return In.credential(e,s)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Mr{constructor(){super("github.com")}static credential(t){return ys._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return An.credential(t.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Mr{constructor(){super("twitter.com")}static credential(t,e){return ys._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Sn.credentialFromTaggedObject(t)}static credentialFromError(t){return Sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return Sn.credential(e,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await on._fromIdTokenResponse(t,s,i),o=xf(s);return new ni({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=xf(s);return new ni({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function xf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Ge{constructor(t,e,s,i){var r;super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ca.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new ca(t,e,s,i)}}function k_(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ca._fromErrorAndOperation(n,r,t,s):r})}async function hI(n,t,e=!1){const s=await dr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return ni._forOperation(n,"link",s)}/**
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
 */async function dI(n,t,e=!1){const{auth:s}=n;if(sn(s.app))return Promise.reject(Vn(s));const i="reauthenticate";try{const r=await dr(n,k_(s,i,t,n),e);H(r.idToken,s,"internal-error");const o=zu(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(n.uid===a,s,"user-mismatch"),ni._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Me(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(n,t,e=!1){if(sn(n.app))return Promise.reject(Vn(n));const s="signIn",i=await k_(n,s,t),r=await ni._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}async function fI(n,t){return P_(Is(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(n){const t=Is(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function gI(n,t,e){const s=Is(n);await Sl(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",rI)}function mI(n,t,e){return sn(n.app)?Promise.reject(Vn(n)):fI(kt(n),hi.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&pI(n),s})}function _I(n,t,e,s){return kt(n).onIdTokenChanged(t,e,s)}function yI(n,t,e){return kt(n).beforeAuthStateChanged(t,e)}function vI(n,t,e,s){return kt(n).onAuthStateChanged(t,e,s)}function bI(n){return kt(n).signOut()}const la="__sak";/**
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
 */class D_{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(la,"1"),this.storage.removeItem(la),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=1e3,wI=10;class O_ extends D_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=I_(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);FT()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,wI):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}O_.type="LOCAL";const EI=O_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends D_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}M_.type="SESSION";const L_=M_;/**
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
 */function TI(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class ja{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new ja(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,r)),c=await TI(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ja.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class II{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=qu("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function AI(n){He().location.href=n}/**
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
 */function N_(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function SI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function CI(){return N_()?self:null}/**
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
 */const V_="firebaseLocalStorageDb",kI=1,ua="firebaseLocalStorage",F_="fbase_key";class Lr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ha(n,t){return n.transaction([ua],t?"readwrite":"readonly").objectStore(ua)}function PI(){const n=indexedDB.deleteDatabase(V_);return new Lr(n).toPromise()}function Rl(){const n=indexedDB.open(V_,kI);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ua,{keyPath:F_})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ua)?t(s):(s.close(),await PI(),t(await Rl()))})})}async function wf(n,t,e){const s=Ha(n,!0).put({[F_]:t,value:e});return new Lr(s).toPromise()}async function DI(n,t){const e=Ha(n,!1).get(t),s=await new Lr(e).toPromise();return s===void 0?null:s.value}function Ef(n,t){const e=Ha(n,!0).delete(t);return new Lr(e).toPromise()}const OI=800,MI=3;class B_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>MI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ja._getInstance(CI()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await SI(),!this.activeServiceWorker)return;this.sender=new II(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||RI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Rl();return await wf(t,la,"1"),await Ef(t,la),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>wf(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>DI(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Ef(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Ha(i,!1).getAll();return new Lr(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}B_.type="LOCAL";const LI=B_;new Or(3e4,6e4);/**
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
 */function NI(n,t){return t?an(t):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Gu extends Hu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return qs(t,this._buildIdpRequest())}_linkToIdToken(t,e){return qs(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return qs(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function VI(n){return P_(n.auth,new Gu(n),n.bypassAuthState)}function FI(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),dI(e,new Gu(n),n.bypassAuthState)}async function BI(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),hI(e,new Gu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return VI;case"linkViaPopup":case"linkViaRedirect":return BI;case"reauthViaPopup":case"reauthViaRedirect":return FI;default:Me(this.auth,"internal-error")}}resolve(t){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=new Or(2e3,1e4);class zs extends U_{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const t=qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,UI.get())};t()}}zs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="pendingRedirect",Lo=new Map;class zI extends U_{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Lo.get(this.auth._key());if(!t){try{const s=await jI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Lo.set(this.auth._key(),t)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jI(n,t){const e=qI(t),s=WI(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function HI(n,t){Lo.set(n._key(),t)}function WI(n){return an(n._redirectPersistence)}function qI(n){return Mo($I,n.config.apiKey,n.name)}async function GI(n,t,e=!1){if(sn(n.app))return Promise.reject(Vn(n));const s=Is(n),i=NI(s,t),o=await new zI(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=10*60*1e3;class YI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!XI(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!$_(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(je(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=KI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tf(t))}saveEventToCache(t){this.cachedEventUids.add(Tf(t)),this.lastProcessedEventTime=Date.now()}}function Tf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function $_({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function XI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(n,t={}){return _n(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZI=/^https?/;async function tA(n){if(n.config.emulator)return;const{authorizedDomains:t}=await QI(n);for(const e of t)try{if(eA(e))return}catch{}Me(n,"unauthorized-domain")}function eA(n){const t=Il(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!ZI.test(e))return!1;if(JI.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const nA=new Or(3e4,6e4);function If(){const n=He().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function sA(n){return new Promise((t,e)=>{var s,i,r;function o(){If(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{If(),e(je(n,"network-request-failed"))},timeout:nA.get()})}if(!((i=(s=He().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=He().gapi)===null||r===void 0)&&r.load)o();else{const a=GT("iframefcb");return He()[a]=()=>{gapi.load?o():e(je(n,"network-request-failed"))},S_(`${qT()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw No=null,t})}let No=null;function iA(n){return No=No||sA(n),No}/**
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
 */const rA=new Or(5e3,15e3),oA="__/auth/iframe",aA="emulator/auth/iframe",cA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uA(n){const t=n.config;H(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?$u(t,aA):`https://${n.config.authDomain}/${oA}`,s={apiKey:t.apiKey,appName:n.name,v:xs},i=lA.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${Er(s).slice(1)}`}async function hA(n){const t=await iA(n),e=He().gapi;return H(e,n,"internal-error"),t.open({where:document.body,url:uA(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cA,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=je(n,"network-request-failed"),a=He().setTimeout(()=>{r(o)},rA.get());function c(){He().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const dA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fA=500,pA=600,gA="_blank",mA="http://localhost";class Af{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _A(n,t,e,s=fA,i=pA){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dA),{width:s.toString(),height:i.toString(),top:r,left:o}),u=ie().toLowerCase();e&&(a=b_(u)?gA:e),y_(u)&&(t=t||mA,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[m,_])=>`${p}${m}=${_},`,"");if(VT(u)&&a!=="_self")return yA(t||"",a),new Af(null);const d=window.open(t||"",a,h);H(d,n,"popup-blocked");try{d.focus()}catch{}return new Af(d)}function yA(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const vA="__/auth/handler",bA="emulator/auth/handler",xA=encodeURIComponent("fac");async function Sf(n,t,e,s,i,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:xs,eventId:i};if(t instanceof C_){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",zv(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(t instanceof Mr){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${xA}=${encodeURIComponent(c)}`:"";return`${wA(n)}?${Er(a).slice(1)}${u}`}function wA({config:n}){return n.emulator?$u(n,bA):`https://${n.authDomain}/${vA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="webStorageSupport";class EA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L_,this._completeRedirectFn=GI,this._overrideRedirectResult=HI}async _openPopup(t,e,s,i){var r;mn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Sf(t,e,s,Il(),i);return _A(t,o,qu())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await Sf(t,e,s,Il(),i);return AI(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(mn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await hA(t),s=new YI(t);return e.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Lc,{type:Lc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Lc];o!==void 0&&e(!!o),Me(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=tA(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return I_()||v_()||ju()}}const TA=EA;var Rf="@firebase/auth",Cf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SA(n){fs(new Bn("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A_(n)},u=new jT(s,i,r,c);return JT(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),fs(new Bn("auth-internal",t=>{const e=Is(t.getProvider("auth").getImmediate());return(s=>new IA(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(Rf,Cf,AA(n)),Ue(Rf,Cf,"esm2017")}/**
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
 */const RA=5*60,CA=fg("authIdTokenMaxAge")||RA;let kf=null;const kA=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>CA)return;const i=e==null?void 0:e.token;kf!==i&&(kf=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PA(n=Xl()){const t=wa(n,"auth");if(t.isInitialized())return t.getImmediate();const e=QT(n,{popupRedirectResolver:TA,persistence:[LI,EI,L_]}),s=fg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=kA(r.toString());yI(e,o,()=>o(e.currentUser)),_I(e,a=>o(a))}}const i=ug("auth");return i&&ZT(e,`http://${i}`),e}function DA(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}HT({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=je("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",DA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SA("Browser");const z_={},j_=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,OA={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"},MA=()=>{const n=j_("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&z_||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};return Object.values(e).every(Boolean)?e:(console.warn("[Config] Firebase config não encontrada em globals/ENV; usando fallback padrão legado."),OA)},LA=()=>{const n=j_("__RDO_API_CONFIG");if(n)return n;const t=import.meta&&z_||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN,s=t.VITE_RDO_API_BASE||"https://rdo.axelindustrial.com.br/api";return e?{TOKEN:e,BASE_URL:s}:{TOKEN:"",BASE_URL:s}},NA=MA(),Wa=_g(NA),nt=Uw(Wa),VA=pT(Wa),uo=PA(Wa),FA=async()=>(console.log("[Firebase] Configuração carregada com sucesso"),Wa),pt={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},ha={init:()=>new Promise(n=>{vI(uo,async t=>{if(t)try{const e=await El(Ie(nt,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};pt.setUser(s)}else pt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),pt.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else pt.setUser(null);n(pt.state.currentUser)})}),login:async(n,t)=>{try{const s=(await mI(uo,n,t)).user,i=await El(Ie(nt,"usuarios",s.uid));if(i.exists()){const r={uid:s.uid,email:s.email,...i.data()};return pt.setUser(r),r}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await bI(uo),pt.setUser(null)},recoverPassword:async n=>{await gI(uo,n)}},mt={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const i=e.split("/").filter(Boolean);if(i.length!==t.length)continue;const r={};let o=!0;for(let a=0;a<i.length;a++){const c=i[a],u=t[a];if(c.startsWith(":"))r[c.slice(1)]=decodeURIComponent(u);else if(c!==u){o=!1;break}}if(o)return{handler:s,params:r}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!pt.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(pt.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},F={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:i="",required:r=!1,className:o=""})=>`
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
        `},Pf={renderLogin:()=>`
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
        `},Df={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Pf.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value,r=document.getElementById("btn-login");try{r.disabled=!0,r.innerHTML=F.createLoader(),await ha.login(s,i),F.createToast("Login realizado com sucesso!"),mt.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),F.createToast(a,"error"),r.disabled=!1,r.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Pf.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,i=document.getElementById("btn-recover");try{i.disabled=!0,i.innerHTML=F.createLoader(),await ha.recoverPassword(s),F.createToast("Email de recuperação enviado!"),setTimeout(()=>mt.navigate("/login"),2e3)}catch(r){F.createToast("Erro ao enviar email: "+r.message,"error"),i.disabled=!1,i.innerHTML="<span>Enviar</span>"}})}},Ht={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>n?new Date(n).toLocaleDateString("pt-BR"):"-"},Os={getCompradorStats:async()=>{const n=Tt(nt,"compras"),t=fe(n,Vt("status_compra","==","Pendente")),e=await _t(t),s=fe(n,Vt("status_compra","==","Em Cotação")),i=await _t(s),r=fe(n,wl("data_solicitacao","desc"),Po(5)),o=await _t(r);let a=0,c=0,u=0,h=0,d=0,p=0;const m={},_={};o.docs.forEach(I=>{const S=I.data(),D=Number(S.valor_estimado||S.valor_total||0);p+=D;const k=S.previsao_entrega?new Date(S.previsao_entrega):null,O=S.data_recebimento?new Date(S.data_recebimento):null;if(S.status_compra!=="Entregue"&&k&&k<new Date&&a++,O&&k&&(c++,O<=k&&u++),S.data_emissao&&(O||k)){const y=O||k,w=Math.max(0,(new Date(y)-new Date(S.data_emissao))/(1e3*60*60*24));h+=w,d++}const M=(S.natureza_compra||"Outros").trim();m[M]=(m[M]||0)+D;const E=S.centroCustoNome||S.centro_custo||S.centroCustoId||"N/D";_[E]=(_[E]||0)+D});const v=c?u/c*100:0,b=d?h/d:0;return{pendentes:e.size,emCotacao:i.size,recentes:o.docs.map(I=>({id:I.id,...I.data()})),atrasos:a,sla:v,lead:b,totalValor:p,naturezaTotais:m,ccTotais:_}},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=Tt(nt,"compras"),e=fe(t,Vt("obraId","==",n),Vt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await _t(e),i=fe(t,Vt("obraId","==",n),Vt("status_compra","==","Comprado")),r=await _t(i),o=fe(t,Vt("obraId","==",n),Vt("status_compra","==","Entregue")),a=await _t(o),c=fe(t,Vt("obraId","==",n),wl("data_solicitacao","desc"),Po(5)),u=await _t(c);return{pendentes:s.size,transito:r.size,entregues:a.size,recentes:u.docs.map(h=>({id:h.id,...h.data()}))}},getObras:async()=>(await _t(Tt(nt,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=Tt(nt,"compras"),t=fe(n,Po(500)),e=await _t(t);let s=0,i={},r={},o=0,a=0,c=0,u=0,h=0,d=0,p=0;e.forEach(I=>{const S=I.data(),D=Number(S.valor_estimado||S.valor_total||0);s+=D,i[S.status_compra]=(i[S.status_compra]||0)+1,S.status_compra!=="Entregue"&&S.previsao_entrega&&new Date(S.previsao_entrega)<new Date&&c++;const k=S.previsao_entrega?new Date(S.previsao_entrega):null,O=S.data_recebimento?new Date(S.data_recebimento):null;if(O&&k&&(u++,O<=k&&h++),S.data_emissao&&(O||k)){const M=O||k,E=Math.max(0,(new Date(M)-new Date(S.data_emissao))/(1e3*60*60*24));d+=E,p++}if(S.limite_real&&(o+=Number(S.limite_real)),S.comprometido&&(a+=Number(S.comprometido)),S.data_solicitacao){const M=new Date(S.data_solicitacao),E=`${M.getFullYear()}-${String(M.getMonth()+1).padStart(2,"0")}`;r[E]=(r[E]||0)+D}});const m=o>0?a/o*100:0,_=u?h/u*100:0,v=p?d/p:0,b=Math.max(0,o-a);return{totalGasto:s,porStatus:i,totalPedidos:e.size,gastosPorMes:r,limiteReal:o,comprometido:a,curvaPercent:m,atrasos:c,sla:_,lead:v,economia:b}}},Nc={renderComprador:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Geral - Compras</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                    ${F.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Aguardando ação</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Em Cotação",content:`<p class="text-4xl font-display text-primary uppercase">${n.emCotacao}</p><p class="text-sm heading-muted">Processando</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted">Previsão vencida</p>`,className:"accent-left"})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Total Estimado",content:`<p class="text-4xl font-display text-primary uppercase">${Ht.formatCurrency(n.totalValor||0)}</p><p class="text-sm heading-muted mt-1">Amostra 5 recentes</p>`})}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card">
                        <h3 class="text-lg font-display text-text mb-3">Top Naturezas (recentes)</h3>
                        <div class="space-y-2">
                            ${Object.entries(n.naturezaTotais||{}).sort((t,e)=>e[1]-t[1]).slice(0,5).map(([t,e])=>`
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-text">${t}</span>
                                    <span class="text-primary font-display">${Ht.formatCurrency(e)}</span>
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
                                    <span class="text-primary font-display">${Ht.formatCurrency(e)}</span>
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
        `,renderObra:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Minha Obra</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${F.createCard({title:"Solicitados",content:`<p class="text-4xl font-display text-text uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`})}
                    ${F.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-display text-primary uppercase">${n.transito}</p><p class="text-sm heading-muted">A caminho</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${n.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,className:"accent-left"})}
                </div>
            </div>
        `,renderDiretor:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Executiva</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${F.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${Ht.formatCurrency(n.totalGasto)}</p>`})}
                    ${F.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${F.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${Ht.formatCurrency(n.limiteReal||0)} • Comprometido: ${Ht.formatCurrency(n.comprometido||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${Ht.formatCurrency(n.economia||0)}</p>`})}
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
        `};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Nr(n){return n+.5|0}const Cn=(n,t,e)=>Math.max(Math.min(n,e),t);function $i(n){return Cn(Nr(n*2.55),0,255)}function Fn(n){return Cn(Nr(n*255),0,255)}function nn(n){return Cn(Nr(n/2.55)/100,0,1)}function Of(n){return Cn(Nr(n*100),0,100)}const xe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Cl=[..."0123456789ABCDEF"],BA=n=>Cl[n&15],UA=n=>Cl[(n&240)>>4]+Cl[n&15],ho=n=>(n&240)>>4===(n&15),$A=n=>ho(n.r)&&ho(n.g)&&ho(n.b)&&ho(n.a);function zA(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&xe[n[1]]*17,g:255&xe[n[2]]*17,b:255&xe[n[3]]*17,a:t===5?xe[n[4]]*17:255}:(t===7||t===9)&&(e={r:xe[n[1]]<<4|xe[n[2]],g:xe[n[3]]<<4|xe[n[4]],b:xe[n[5]]<<4|xe[n[6]],a:t===9?xe[n[7]]<<4|xe[n[8]]:255})),e}const jA=(n,t)=>n<255?t(n):"";function HA(n){var t=$A(n)?BA:UA;return n?"#"+t(n.r)+t(n.g)+t(n.b)+jA(n.a,t):void 0}const WA=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function H_(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function qA(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function GA(n,t,e){const s=H_(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function KA(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function Ku(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let c,u,h;return r!==o&&(h=r-o,u=a>.5?h/(2-r-o):h/(r+o),c=KA(e,s,i,h,r),c=c*60+.5),[c|0,u||0,a]}function Yu(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(Fn)}function Xu(n,t,e){return Yu(H_,n,t,e)}function YA(n,t,e){return Yu(GA,n,t,e)}function XA(n,t,e){return Yu(qA,n,t,e)}function W_(n){return(n%360+360)%360}function QA(n){const t=WA.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?$i(+t[5]):Fn(+t[5]));const i=W_(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=YA(i,r,o):t[1]==="hsv"?s=XA(i,r,o):s=Xu(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function JA(n,t){var e=Ku(n);e[0]=W_(e[0]+t),e=Xu(e),n.r=e[0],n.g=e[1],n.b=e[2]}function ZA(n){if(!n)return;const t=Ku(n),e=t[0],s=Of(t[1]),i=Of(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${nn(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const Mf={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Lf={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function tS(){const n={},t=Object.keys(Lf),e=Object.keys(Mf);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,Mf[r]);r=parseInt(Lf[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let fo;function eS(n){fo||(fo=tS(),fo.transparent=[0,0,0,0]);const t=fo[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const nS=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function sS(n){const t=nS.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?$i(o):Cn(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?$i(s):Cn(s,0,255)),i=255&(t[4]?$i(i):Cn(i,0,255)),r=255&(t[6]?$i(r):Cn(r,0,255)),{r:s,g:i,b:r,a:e}}}function iS(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${nn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Vc=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Ms=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function rS(n,t,e){const s=Ms(nn(n.r)),i=Ms(nn(n.g)),r=Ms(nn(n.b));return{r:Fn(Vc(s+e*(Ms(nn(t.r))-s))),g:Fn(Vc(i+e*(Ms(nn(t.g))-i))),b:Fn(Vc(r+e*(Ms(nn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function po(n,t,e){if(n){let s=Ku(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Xu(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function q_(n,t){return n&&Object.assign(t||{},n)}function Nf(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Fn(n[3]))):(t=q_(n,{r:0,g:0,b:0,a:1}),t.a=Fn(t.a)),t}function oS(n){return n.charAt(0)==="r"?sS(n):QA(n)}class pr{constructor(t){if(t instanceof pr)return t;const e=typeof t;let s;e==="object"?s=Nf(t):e==="string"&&(s=zA(t)||eS(t)||oS(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=q_(this._rgb);return t&&(t.a=nn(t.a)),t}set rgb(t){this._rgb=Nf(t)}rgbString(){return this._valid?iS(this._rgb):void 0}hexString(){return this._valid?HA(this._rgb):void 0}hslString(){return this._valid?ZA(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=s.a-i.a,u=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-u,s.r=255&u*s.r+r*i.r+.5,s.g=255&u*s.g+r*i.g+.5,s.b=255&u*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=rS(this._rgb,t._rgb,e)),this}clone(){return new pr(this.rgb)}alpha(t){return this._rgb.a=Fn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Nr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return po(this._rgb,2,t),this}darken(t){return po(this._rgb,2,-t),this}saturate(t){return po(this._rgb,1,t),this}desaturate(t){return po(this._rgb,1,-t),this}rotate(t){return JA(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Ze(){}const aS=(()=>{let n=0;return()=>n++})();function X(n){return n==null}function wt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function J(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Ct(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function ye(n,t){return Ct(n)?n:t}function G(n,t){return typeof n>"u"?t:n}const cS=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,G_=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function ft(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function ot(n,t,e,s){let i,r,o;if(wt(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(J(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function da(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function fa(n){if(wt(n))return n.map(fa);if(J(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=fa(n[e[i]]);return t}return n}function K_(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function lS(n,t,e,s){if(!K_(n))return;const i=t[n],r=e[n];J(i)&&J(r)?gr(i,r,s):t[n]=fa(r)}function gr(n,t,e){const s=wt(t)?t:[t],i=s.length;if(!J(n))return n;e=e||{};const r=e.merger||lS;let o;for(let a=0;a<i;++a){if(o=s[a],!J(o))continue;const c=Object.keys(o);for(let u=0,h=c.length;u<h;++u)r(c[u],n,o,e)}return n}function Zi(n,t){return gr(n,t,{merger:uS})}function uS(n,t,e){if(!K_(n))return;const s=t[n],i=e[n];J(s)&&J(i)?Zi(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=fa(i))}const Vf={"":n=>n,x:n=>n.x,y:n=>n.y};function hS(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function dS(n){const t=hS(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function jn(n,t){return(Vf[t]||(Vf[t]=dS(t)))(n)}function Qu(n){return n.charAt(0).toUpperCase()+n.slice(1)}const mr=n=>typeof n<"u",Hn=n=>typeof n=="function",Ff=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function fS(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const rt=Math.PI,vt=2*rt,pS=vt+rt,pa=Number.POSITIVE_INFINITY,gS=rt/180,Dt=rt/2,Zn=rt/4,Bf=rt*2/3,kn=Math.log10,We=Math.sign;function tr(n,t,e){return Math.abs(n-t)<e}function Uf(n){const t=Math.round(n);n=tr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(kn(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function mS(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function _S(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function si(n){return!_S(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function yS(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Y_(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function ke(n){return n*(rt/180)}function Ju(n){return n*(180/rt)}function $f(n){if(!Ct(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function X_(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*rt&&(r+=vt),{angle:r,distance:i}}function kl(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function vS(n,t){return(n-t+pS)%vt-rt}function ee(n){return(n%vt+vt)%vt}function _r(n,t,e,s){const i=ee(n),r=ee(t),o=ee(e),a=ee(r-i),c=ee(o-i),u=ee(i-r),h=ee(i-o);return i===r||i===o||s&&r===o||a>c&&u<h}function Ut(n,t,e){return Math.max(t,Math.min(e,n))}function bS(n){return Ut(n,-32768,32767)}function cn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function Zu(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const ln=(n,t,e,s)=>Zu(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),xS=(n,t,e)=>Zu(n,e,s=>n[s][t]>=e);function wS(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const Q_=["push","pop","shift","splice","unshift"];function ES(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Q_.forEach(e=>{const s="_onData"+Qu(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function zf(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(Q_.forEach(r=>{delete n[r]}),delete n._chartjs)}function J_(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const Z_=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function ty(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,Z_.call(window,()=>{s=!1,n.apply(t,e)}))}}function TS(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const th=n=>n==="start"?"left":n==="end"?"right":"center",Zt=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,IS=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function ey(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,u=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:d,max:p,minDefined:m,maxDefined:_}=o.getUserBounds();if(m){if(i=Math.min(ln(c,h,d).lo,e?s:ln(t,h,o.getPixelForValue(d)).lo),u){const v=c.slice(0,i+1).reverse().findIndex(b=>!X(b[a.axis]));i-=Math.max(0,v)}i=Ut(i,0,s-1)}if(_){let v=Math.max(ln(c,o.axis,p,!0).hi+1,e?0:ln(t,h,o.getPixelForValue(p),!0).hi+1);if(u){const b=c.slice(v-1).findIndex(I=>!X(I[a.axis]));v+=Math.max(0,b)}r=Ut(v,i,s)-i}else r=s-i}return{start:i,count:r}}function ny(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const go=n=>n===0||n===1,jf=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*vt/e)),Hf=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*vt/e)+1,er={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Dt)+1,easeOutSine:n=>Math.sin(n*Dt),easeInOutSine:n=>-.5*(Math.cos(rt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>go(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>go(n)?n:jf(n,.075,.3),easeOutElastic:n=>go(n)?n:Hf(n,.075,.3),easeInOutElastic(n){return go(n)?n:n<.5?.5*jf(n*2,.1125,.45):.5+.5*Hf(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-er.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?er.easeInBounce(n*2)*.5:er.easeOutBounce(n*2-1)*.5+.5};function eh(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Wf(n){return eh(n)?n:new pr(n)}function Fc(n){return eh(n)?n:new pr(n).saturate(.5).darken(.1).hexString()}const AS=["x","y","borderWidth","radius","tension"],SS=["color","borderColor","backgroundColor"];function RS(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:SS},numbers:{type:"number",properties:AS}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function CS(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const qf=new Map;function kS(n,t){t=t||{};const e=n+JSON.stringify(t);let s=qf.get(e);return s||(s=new Intl.NumberFormat(n,t),qf.set(e,s)),s}function Vr(n,t,e){return kS(t,e).format(n)}const sy={values(n){return wt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const u=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),r=PS(n,e)}const o=kn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),Vr(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(kn(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?sy.numeric.call(this,n,t,e):""}};function PS(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var qa={formatters:sy};function DS(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:qa.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const vs=Object.create(null),Pl=Object.create(null);function nr(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function Bc(n,t,e){return typeof t=="string"?gr(nr(n,t),e):gr(nr(n,""),t)}class OS{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>Fc(i.backgroundColor),this.hoverBorderColor=(s,i)=>Fc(i.borderColor),this.hoverColor=(s,i)=>Fc(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Bc(this,t,e)}get(t){return nr(this,t)}describe(t,e){return Bc(Pl,t,e)}override(t,e){return Bc(vs,t,e)}route(t,e,s,i){const r=nr(this,t),o=nr(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],u=o[i];return J(c)?Object.assign({},u,c):G(c,u)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Et=new OS({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[RS,CS,DS]);function MS(n){return!n||X(n.size)||X(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function ga(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function LS(n,t,e,s){s=s||{};let i=s.data=s.data||{},r=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},r=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,u,h,d,p;for(c=0;c<a;c++)if(d=e[c],d!=null&&!wt(d))o=ga(n,i,r,o,d);else if(wt(d))for(u=0,h=d.length;u<h;u++)p=d[u],p!=null&&!wt(p)&&(o=ga(n,i,r,o,p));n.restore();const m=r.length/2;if(m>e.length){for(c=0;c<m;c++)delete i[r[c]];r.splice(0,m)}return o}function ts(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function Gf(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Dl(n,t,e,s){iy(n,t,e,s,null)}function iy(n,t,e,s,i){let r,o,a,c,u,h,d,p;const m=t.pointStyle,_=t.rotation,v=t.radius;let b=(_||0)*gS;if(m&&typeof m=="object"&&(r=m.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(b),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(v)||v<=0)){switch(n.beginPath(),m){default:i?n.ellipse(e,s,i/2,v,0,0,vt):n.arc(e,s,v,0,vt),n.closePath();break;case"triangle":h=i?i/2:v,n.moveTo(e+Math.sin(b)*h,s-Math.cos(b)*v),b+=Bf,n.lineTo(e+Math.sin(b)*h,s-Math.cos(b)*v),b+=Bf,n.lineTo(e+Math.sin(b)*h,s-Math.cos(b)*v),n.closePath();break;case"rectRounded":u=v*.516,c=v-u,o=Math.cos(b+Zn)*c,d=Math.cos(b+Zn)*(i?i/2-u:c),a=Math.sin(b+Zn)*c,p=Math.sin(b+Zn)*(i?i/2-u:c),n.arc(e-d,s-a,u,b-rt,b-Dt),n.arc(e+p,s-o,u,b-Dt,b),n.arc(e+d,s+a,u,b,b+Dt),n.arc(e-p,s+o,u,b+Dt,b+rt),n.closePath();break;case"rect":if(!_){c=Math.SQRT1_2*v,h=i?i/2:c,n.rect(e-h,s-c,2*h,2*c);break}b+=Zn;case"rectRot":d=Math.cos(b)*(i?i/2:v),o=Math.cos(b)*v,a=Math.sin(b)*v,p=Math.sin(b)*(i?i/2:v),n.moveTo(e-d,s-a),n.lineTo(e+p,s-o),n.lineTo(e+d,s+a),n.lineTo(e-p,s+o),n.closePath();break;case"crossRot":b+=Zn;case"cross":d=Math.cos(b)*(i?i/2:v),o=Math.cos(b)*v,a=Math.sin(b)*v,p=Math.sin(b)*(i?i/2:v),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"star":d=Math.cos(b)*(i?i/2:v),o=Math.cos(b)*v,a=Math.sin(b)*v,p=Math.sin(b)*(i?i/2:v),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o),b+=Zn,d=Math.cos(b)*(i?i/2:v),o=Math.cos(b)*v,a=Math.sin(b)*v,p=Math.sin(b)*(i?i/2:v),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"line":o=i?i/2:Math.cos(b)*v,a=Math.sin(b)*v,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(b)*(i?i/2:v),s+Math.sin(b)*v);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function un(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Ga(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Ka(n){n.restore()}function NS(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function VS(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function FS(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),X(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function BS(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,u=e+r.actualBoundingBoxDescent,h=i.strikethrough?(c+u)/2:u;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function US(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function bs(n,t,e,s,i,r={}){const o=wt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,u;for(n.save(),n.font=i.string,FS(n,r),c=0;c<o.length;++c)u=o[c],r.backdrop&&US(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),X(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(u,e,s,r.maxWidth)),n.fillText(u,e,s,r.maxWidth),BS(n,e,s,u,r),s+=Number(i.lineHeight);n.restore()}function yr(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*rt,rt,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,rt,Dt,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,Dt,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-Dt,!0),n.lineTo(e+o.topLeft,s)}const $S=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,zS=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function jS(n,t){const e=(""+n).match($S);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const HS=n=>+n||0;function nh(n,t){const e={},s=J(t),i=s?Object.keys(t):t,r=J(n)?s?o=>G(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=HS(r(o));return e}function ry(n){return nh(n,{top:"y",right:"x",bottom:"y",left:"x"})}function hs(n){return nh(n,["topLeft","topRight","bottomLeft","bottomRight"])}function re(n){const t=ry(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ft(n,t){n=n||{},t=t||Et.font;let e=G(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=G(n.style,t.style);s&&!(""+s).match(zS)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:G(n.family,t.family),lineHeight:jS(G(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:G(n.weight,t.weight),string:""};return i.string=MS(i),i}function zi(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function WS(n,t,e){const{min:s,max:i}=n,r=G_(t,(i-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function Kn(n,t){return Object.assign(Object.create(n),t)}function sh(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=ly("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>sh([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return ay(a,c,()=>ZS(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return Yf(a).includes(c)},ownKeys(a){return Yf(a)},set(a,c,u){const h=a._storage||(a._storage=i());return a[c]=h[c]=u,delete a._keys,!0}})}function ii(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:oy(n,s),setContext:r=>ii(n,r,e,s),override:r=>ii(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return ay(r,o,()=>GS(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function oy(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:Hn(e)?e:()=>e,isIndexable:Hn(s)?s:()=>s}}const qS=(n,t)=>n?n+Qu(t):t,ih=(n,t)=>J(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function ay(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function GS(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return Hn(a)&&o.isScriptable(t)&&(a=KS(t,a,n,e)),wt(a)&&a.length&&(a=YS(t,a,n,o.isIndexable)),ih(t,a)&&(a=ii(a,i,r&&r[t],o)),a}function KS(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||s);return a.delete(n),ih(n,c)&&(c=rh(i._scopes,i,n,c)),c}function YS(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(J(t[0])){const c=t,u=i._scopes.filter(h=>h!==c);t=[];for(const h of c){const d=rh(u,i,n,h);t.push(ii(d,r,o&&o[n],a))}}return t}function cy(n,t,e){return Hn(n)?n(t,e):n}const XS=(n,t)=>n===!0?t:typeof n=="string"?jn(t,n):void 0;function QS(n,t,e,s,i){for(const r of t){const o=XS(e,r);if(o){n.add(o);const a=cy(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function rh(n,t,e,s){const i=t._rootScopes,r=cy(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let c=Kf(a,o,e,r||e,s);return c===null||typeof r<"u"&&r!==e&&(c=Kf(a,o,r,c,s),c===null)?!1:sh(Array.from(a),[""],i,r,()=>JS(t,e,s))}function Kf(n,t,e,s,i){for(;e;)e=QS(n,t,e,s,i);return e}function JS(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return wt(i)&&J(e)?e:i||{}}function ZS(n,t,e,s){let i;for(const r of t)if(i=ly(qS(r,n),e),typeof i<"u")return ih(n,i)?rh(e,s,n,i):i}function ly(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function Yf(n){let t=n._keys;return t||(t=n._keys=tR(n._scopes)),t}function tR(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function uy(n,t,e,s){const{iScale:i}=n,{key:r="r"}=this._parsing,o=new Array(s);let a,c,u,h;for(a=0,c=s;a<c;++a)u=a+e,h=t[u],o[a]={r:i.parse(jn(h,r),u)};return o}const eR=Number.EPSILON||1e-14,ri=(n,t)=>t<n.length&&!n[t].skip&&n[t],hy=n=>n==="x"?"y":"x";function nR(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=kl(r,i),c=kl(o,r);let u=a/(a+c),h=c/(a+c);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const d=s*u,p=s*h;return{previous:{x:r.x-d*(o.x-i.x),y:r.y-d*(o.y-i.y)},next:{x:r.x+p*(o.x-i.x),y:r.y+p*(o.y-i.y)}}}function sR(n,t,e){const s=n.length;let i,r,o,a,c,u=ri(n,0);for(let h=0;h<s-1;++h)if(c=u,u=ri(n,h+1),!(!c||!u)){if(tr(t[h],0,eR)){e[h]=e[h+1]=0;continue}i=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=i*o*t[h],e[h+1]=r*o*t[h])}}function iR(n,t,e="x"){const s=hy(e),i=n.length;let r,o,a,c=ri(n,0);for(let u=0;u<i;++u){if(o=a,a=c,c=ri(n,u+1),!a)continue;const h=a[e],d=a[s];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${s}`]=d-r*t[u]),c&&(r=(c[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${s}`]=d+r*t[u])}}function rR(n,t="x"){const e=hy(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,c,u=ri(n,0);for(o=0;o<s;++o)if(a=c,c=u,u=ri(n,o+1),!!c){if(u){const h=u[t]-c[t];i[o]=h!==0?(u[e]-c[e])/h:0}r[o]=a?u?We(i[o-1])!==We(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}sR(n,i,r),iR(n,r,t)}function mo(n,t,e){return Math.max(Math.min(n,e),t)}function oR(n,t){let e,s,i,r,o,a=un(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&un(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=mo(i.cp1x,t.left,t.right),i.cp1y=mo(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=mo(i.cp2x,t.left,t.right),i.cp2y=mo(i.cp2y,t.top,t.bottom)))}function aR(n,t,e,s,i){let r,o,a,c;if(t.spanGaps&&(n=n.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")rR(n,i);else{let u=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=nR(u,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,u=a}t.capBezierPoints&&oR(n,e)}function oh(){return typeof window<"u"&&typeof document<"u"}function ah(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function ma(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const Ya=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function cR(n,t){return Ya(n).getPropertyValue(t)}const lR=["top","right","bottom","left"];function ds(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=lR[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const uR=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function hR(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,c;if(uR(i,r,n.target))a=i,c=r;else{const u=t.getBoundingClientRect();a=s.clientX-u.left,c=s.clientY-u.top,o=!0}return{x:a,y:c,box:o}}function rs(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=Ya(e),r=i.boxSizing==="border-box",o=ds(i,"padding"),a=ds(i,"border","width"),{x:c,y:u,box:h}=hR(n,e),d=o.left+(h&&a.left),p=o.top+(h&&a.top);let{width:m,height:_}=t;return r&&(m-=o.width+a.width,_-=o.height+a.height),{x:Math.round((c-d)/m*e.width/s),y:Math.round((u-p)/_*e.height/s)}}function dR(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&ah(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Ya(r),c=ds(a,"border","width"),u=ds(a,"padding");t=o.width-u.width-c.width,e=o.height-u.height-c.height,s=ma(a.maxWidth,r,"clientWidth"),i=ma(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||pa,maxHeight:i||pa}}const Pn=n=>Math.round(n*10)/10;function fR(n,t,e,s){const i=Ya(n),r=ds(i,"margin"),o=ma(i.maxWidth,n,"clientWidth")||pa,a=ma(i.maxHeight,n,"clientHeight")||pa,c=dR(n,t,e);let{width:u,height:h}=c;if(i.boxSizing==="content-box"){const p=ds(i,"border","width"),m=ds(i,"padding");u-=m.width+p.width,h-=m.height+p.height}return u=Math.max(0,u-r.width),h=Math.max(0,s?u/s:h-r.height),u=Pn(Math.min(u,o,c.maxWidth)),h=Pn(Math.min(h,a,c.maxHeight)),u&&!h&&(h=Pn(u/2)),(t!==void 0||e!==void 0)&&s&&c.height&&h>c.height&&(h=c.height,u=Pn(Math.floor(h*s))),{width:u,height:h}}function Xf(n,t,e){const s=t||1,i=Pn(n.height*s),r=Pn(n.width*s);n.height=Pn(n.height),n.width=Pn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const pR=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};oh()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function Qf(n,t){const e=cR(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function os(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function gR(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function mR(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=os(n,i,e),a=os(i,r,e),c=os(r,t,e),u=os(o,a,e),h=os(a,c,e);return os(u,h,e)}const _R=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},yR=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Gs(n,t,e){return n?_R(t,e):yR()}function dy(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function fy(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function py(n){return n==="angle"?{between:_r,compare:vS,normalize:ee}:{between:cn,compare:(t,e)=>t-e,normalize:t=>t}}function Jf({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function vR(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=py(s),c=t.length;let{start:u,end:h,loop:d}=n,p,m;if(d){for(u+=c,h+=c,p=0,m=c;p<m&&o(a(t[u%c][s]),i,r);++p)u--,h--;u%=c,h%=c}return h<u&&(h+=c),{start:u,end:h,loop:d,style:n.style}}function gy(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:c,normalize:u}=py(s),{start:h,end:d,loop:p,style:m}=vR(n,t,e),_=[];let v=!1,b=null,I,S,D;const k=()=>c(i,D,I)&&a(i,D)!==0,O=()=>a(r,I)===0||c(r,D,I),M=()=>v||k(),E=()=>!v||O();for(let y=h,w=h;y<=d;++y)S=t[y%o],!S.skip&&(I=u(S[s]),I!==D&&(v=c(I,i,r),b===null&&M()&&(b=a(I,i)===0?y:w),b!==null&&E()&&(_.push(Jf({start:b,end:y,loop:p,count:o,style:m})),b=null),w=y,D=I));return b!==null&&_.push(Jf({start:b,end:d,loop:p,count:o,style:m})),_}function my(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=gy(s[i],n.points,t);r.length&&e.push(...r)}return e}function bR(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function xR(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const u=n[c%i];u.skip||u.stop?a.skip||(s=!1,r.push({start:t%i,end:(c-1)%i,loop:s}),t=o=u.stop?c:null):(o=c,a.skip&&(t=c)),a=u}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function wR(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=bR(e,i,r,s);if(s===!0)return Zf(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+i:a,u=!!n._fullLoop&&o===0&&a===i-1;return Zf(n,xR(e,o,c,u),e,t)}function Zf(n,t,e,s){return!s||!s.setContext||!e?t:ER(n,t,e,s)}function ER(n,t,e,s){const i=n._chart.getContext(),r=tp(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,u=[];let h=r,d=t[0].start,p=d;function m(_,v,b,I){const S=a?-1:1;if(_!==v){for(_+=c;e[_%c].skip;)_-=S;for(;e[v%c].skip;)v+=S;_%c!==v%c&&(u.push({start:_%c,end:v%c,loop:b,style:I}),h=I,d=v%c)}}for(const _ of t){d=a?d:_.start;let v=e[d%c],b;for(p=d+1;p<=_.end;p++){const I=e[p%c];b=tp(s.setContext(Kn(i,{type:"segment",p0:v,p1:I,p0DataIndex:(p-1)%c,p1DataIndex:p%c,datasetIndex:o}))),TR(b,h)&&m(d,p-1,_.loop,h),v=I,h=b}d<p-1&&m(d,p-1,_.loop,h)}return u}function tp(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function TR(n,t){if(!t)return!1;const e=[],s=function(i,r){return eh(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function _o(n,t,e){return n.options.clip?n[e]:t[e]}function IR(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:_o(e,t,"left"),right:_o(e,t,"right"),top:_o(s,t,"top"),bottom:_o(s,t,"bottom")}:t}function _y(n,t){const e=t._clip;if(e.disabled)return!1;const s=IR(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class AR{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Z_.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var tn=new AR;const ep="transparent",SR={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=Wf(n||ep),i=s.valid&&Wf(t||ep);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class RR{constructor(t,e,s,i){const r=e[s];i=zi([t.to,i,r,t.from]);const o=zi([t.from,r,i]);this._active=!0,this._fn=t.fn||SR[t.type||typeof o],this._easing=er[t.easing]||er.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=zi([t.to,e,i,t.from]),this._from=zi([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class yy{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!J(t))return;const e=Object.keys(Et.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!J(r))return;const o={};for(const a of e)o[a]=r[a];(wt(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=kR(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&CR(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const u=o[c];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(t,e));continue}const h=e[u];let d=r[u];const p=s.get(u);if(d)if(p&&d.active()){d.update(p,h,a);continue}else d.cancel();if(!p||!p.duration){t[u]=h;continue}r[u]=d=new RR(p,t,u,h),i.push(d)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return tn.add(this._chart,s),!0}}function CR(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function kR(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function np(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function PR(n,t,e){if(e===!1)return!1;const s=np(n,e),i=np(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function DR(n){let t,e,s,i;return J(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function vy(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function sp(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,c,u;if(t===null)return;let h=!1;for(o=0,a=i.length;o<a;++o){if(c=+i[o],c===e){if(h=!0,s.all)continue;break}u=n.values[c],Ct(u)&&(r||t===0||We(t)===We(u))&&(t+=u)}return!h&&!s.all?0:t}function OR(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,u,h;for(c=0,u=o.length;c<u;++c)h=o[c],a[c]={[i]:h,[r]:n[h]};return a}function Uc(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function MR(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function LR(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function NR(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function ip(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function rp(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,c=r.axis,u=o.axis,h=MR(r,o,s),d=t.length;let p;for(let m=0;m<d;++m){const _=t[m],{[c]:v,[u]:b}=_,I=_._stacks||(_._stacks={});p=I[u]=NR(i,h,v),p[a]=b,p._top=ip(p,o,!0,s.type),p._bottom=ip(p,o,!1,s.type);const S=p._visualValues||(p._visualValues={});S[a]=b}}function $c(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function VR(n,t){return Kn(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function FR(n,t,e){return Kn(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Si(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const zc=n=>n==="reset"||n==="none",op=(n,t)=>t?n:Object.assign({},n),BR=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:vy(e,!0),values:null};class Pe{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Uc(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Si(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(d,p,m,_)=>d==="x"?p:d==="r"?_:m,r=e.xAxisID=G(s.xAxisID,$c(t,"x")),o=e.yAxisID=G(s.yAxisID,$c(t,"y")),a=e.rAxisID=G(s.rAxisID,$c(t,"r")),c=e.indexAxis,u=e.iAxisID=i(c,r,o,a),h=e.vAxisID=i(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(u),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&zf(this._data,this),t._stacked&&Si(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(J(e)){const i=this._cachedMeta;this._data=OR(e,i)}else if(s!==e){if(s){zf(s,this);const i=this._cachedMeta;Si(i),i._parsed=[]}e&&Object.isExtensible(e)&&ES(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=Uc(e.vScale,e),e.stack!==s.stack&&(i=!0,Si(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(rp(this,e._parsed),e._stacked=Uc(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let c=t===0&&e===i.length?!0:s._sorted,u=t>0&&s._parsed[t-1],h,d,p;if(this._parsing===!1)s._parsed=i,s._sorted=!0,p=i;else{wt(i[t])?p=this.parseArrayData(s,i,t,e):J(i[t])?p=this.parseObjectData(s,i,t,e):p=this.parsePrimitiveData(s,i,t,e);const m=()=>d[a]===null||u&&d[a]<u[a];for(h=0;h<e;++h)s._parsed[h+t]=d=p[h],c&&(m()&&(c=!1),u=d);s._sorted=c}o&&rp(this,p)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,u=r.getLabels(),h=r===o,d=new Array(i);let p,m,_;for(p=0,m=i;p<m;++p)_=p+s,d[p]={[a]:h||r.parse(u[_],_),[c]:o.parse(e[_],_)};return d}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let c,u,h,d;for(c=0,u=i;c<u;++c)h=c+s,d=e[h],a[c]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,u=new Array(i);let h,d,p,m;for(h=0,d=i;h<d;++h)p=h+s,m=e[p],u[h]={x:r.parse(jn(m,a),p),y:o.parse(jn(m,c),p)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:vy(i,!0),values:e._stacks[t.axis]._visualValues};return sp(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=sp(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),c=BR(e,s,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=LR(a);let p,m;function _(){m=i[p];const v=m[a.axis];return!Ct(m[t.axis])||h>v||d<v}for(p=0;p<o&&!(!_()&&(this.updateRangeFromParsed(u,t,m,c),r));++p);if(r){for(p=o-1;p>=0;--p)if(!_()){this.updateRangeFromParsed(u,t,m,c);break}}return u}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],Ct(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=DR(G(this.options.clip,PR(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||i.length-a,u=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,r,a,c),h=a;h<a+c;++h){const d=i[h];d.hidden||(d.active&&u?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=FR(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=VR(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&mr(s);if(a)return op(a,c);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,t),d=i?[`${t}Hover`,"hover",t,""]:[t,""],p=u.getOptionScopes(this.getDataset(),h),m=Object.keys(Et.elements[t]),_=()=>this.getContext(s,i,e),v=u.resolveNamedOptions(p,m,_,d);return v.$shared&&(v.$shared=c,r[o]=Object.freeze(op(v,c))),v}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(i.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),p=h.getOptionScopes(this.getDataset(),d);c=h.createResolver(p,this.getContext(t,s,e))}const u=new yy(i,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||zc(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){zc(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!zc(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,u]of this._syncList)this[a](c,u);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const c=u=>{for(u.length+=e,a=u.length-1;a>=o;a--)u[a]=u[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&Si(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}U(Pe,"defaults",{}),U(Pe,"datasetElementType",null),U(Pe,"dataElementType",null);function UR(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=J_(s.sort((i,r)=>i-r))}return n._cache.$bar}function $R(n){const t=n.iScale,e=UR(t,n.type);let s=t._length,i,r,o,a;const c=()=>{o===32767||o===-32768||(mr(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),c();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),c();return s}function zR(n,t,e,s){const i=e.barThickness;let r,o;return X(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function jR(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const u=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:u}}function HR(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let c=o,u=a;Math.abs(o)>Math.abs(a)&&(c=a,u=o),t[e.axis]=u,t._custom={barStart:c,barEnd:u,start:i,end:r,min:o,max:a}}function by(n,t,e,s){return wt(n)?HR(n,t,e,s):t[e.axis]=e.parse(n,s),t}function ap(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,c=[];let u,h,d,p;for(u=e,h=e+s;u<h;++u)p=t[u],d={},d[i.axis]=a||i.parse(o[u],u),c.push(by(p,d,r,u));return c}function jc(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function WR(n,t,e){return n!==0?We(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function qR(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function GR(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:u,bottom:h}=qR(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=u:(e._bottom||0)===s?i=h:(r[cp(h,o,a,c)]=!0,i=u)),r[cp(i,o,a,c)]=!0,n.borderSkipped=r}function cp(n,t,e,s){return s?(n=KR(n,t,e),n=lp(n,e,t)):n=lp(n,t,e),n}function KR(n,t,e){return n===t?e:n===e?t:n}function lp(n,t,e){return n==="start"?t:n==="end"?e:n}function YR(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Vo extends Pe{parsePrimitiveData(t,e,s,i){return ap(t,e,s,i)}parseArrayData(t,e,s,i){return ap(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,u=r.axis==="x"?a:c,h=o.axis==="x"?a:c,d=[];let p,m,_,v;for(p=s,m=s+i;p<m;++p)v=e[p],_={},_[r.axis]=r.parse(jn(v,u),p),d.push(by(jn(v,h),_,o,p));return d}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=jc(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),u=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:p}=this._getSharedOptions(e,i);for(let m=e;m<e+s;m++){const _=this.getParsed(m),v=r||X(_[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),b=this._calculateBarIndexPixels(m,h),I=(_._stacks||{})[a.axis],S={horizontal:u,base:v.base,enableBorderRadius:!I||jc(_._custom)||o===I._top||o===I._bottom,x:u?v.head:b.center,y:u?b.center:v.head,height:u?b.size:Math.abs(v.size),width:u?Math.abs(v.size):b.size};p&&(S.options=d||this.resolveDataElementOptions(m,t[m].active?"active":i));const D=S.options||t[m].options;GR(S,D,I,o),YR(S,D,h.ratio),this.updateElement(t[m],m,S,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],u=h=>{const d=h._parsed.find(m=>m[s.axis]===c),p=d&&d[h.vScale.axis];if(X(p)||isNaN(p))return!0};for(const h of i)if(!(e!==void 0&&u(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[G(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||$R(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),u=c._custom,h=jc(u);let d=c[e.axis],p=0,m=s?this.applyStack(e,c,s):d,_,v;m!==d&&(p=m-d,m=d),h&&(d=u.barStart,m=u.barEnd-u.barStart,d!==0&&We(d)!==We(u.barEnd)&&(p=0),p+=d);const b=!X(r)&&!h?r:p;let I=e.getPixelForValue(b);if(this.chart.getDataVisibility(t)?_=e.getPixelForValue(p+m):_=I,v=_-I,Math.abs(v)<o){v=WR(v,e,a)*o,d===a&&(I-=v/2);const S=e.getPixelForDecimal(0),D=e.getPixelForDecimal(1),k=Math.min(S,D),O=Math.max(S,D);I=Math.max(Math.min(I,O),k),_=I+v,s&&!h&&(c._stacks[e.axis]._visualValues[i]=e.getValueForPixel(_)-e.getValueForPixel(I))}if(I===e.getPixelForValue(a)){const S=We(v)*e.getLineWidthForValue(a)/2;I+=S,v-=S}return{size:v,base:I,head:_,center:_+v/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=G(i.maxBarThickness,1/0);let a,c;const u=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,d=i.barThickness==="flex"?jR(t,e,i,h*u):zR(t,e,i,h*u),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(G(p,this.getFirstScaleIdForIndexAxis())),_=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+m;a=d.start+d.chunk*_+d.chunk/2,c=Math.min(o,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}U(Vo,"id","bar"),U(Vo,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),U(Vo,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Fo extends Pe{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const r=super.parsePrimitiveData(t,e,s,i);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+s).radius;return r}parseArrayData(t,e,s,i){const r=super.parseArrayData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a[2],this.resolveDataElementOptions(o+s).radius)}return r}parseObjectData(t,e,s,i){const r=super.parseObjectData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y),u=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(u?", "+u:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:u}=this._getSharedOptions(e,i),h=o.axis,d=a.axis;for(let p=e;p<e+s;p++){const m=t[p],_=!r&&this.getParsed(p),v={},b=v[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(_[h]),I=v[d]=r?a.getBasePixel():a.getPixelForValue(_[d]);v.skip=isNaN(b)||isNaN(I),u&&(v.options=c||this.resolveDataElementOptions(p,m.active?"active":i),r&&(v.options.radius=0)),this.updateElement(m,p,v,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return e!=="active"&&(i.radius=0),i.radius+=G(s&&s._custom,r),i}}U(Fo,"id","bubble"),U(Fo,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),U(Fo,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function XR(n,t,e){let s=1,i=1,r=0,o=0;if(t<vt){const a=n,c=a+t,u=Math.cos(a),h=Math.sin(a),d=Math.cos(c),p=Math.sin(c),m=(D,k,O)=>_r(D,a,c,!0)?1:Math.max(k,k*e,O,O*e),_=(D,k,O)=>_r(D,a,c,!0)?-1:Math.min(k,k*e,O,O*e),v=m(0,u,d),b=m(Dt,h,p),I=_(rt,u,d),S=_(rt+Dt,h,p);s=(v-I)/2,i=(b-S)/2,r=-(v+I)/2,o=-(b+S)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class cs extends Pe{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=c=>+s[c];if(J(s[t])){const{key:c="value"}=this._parsing;r=u=>+jn(s[u],c)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return ke(this.options.rotation-90)}_getCircumference(){return ke(this.options.circumference)}_getRotationExtents(){let t=vt,e=-vt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(cS(this.options.cutout,a),1),u=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:p,ratioY:m,offsetX:_,offsetY:v}=XR(d,h,c),b=(s.width-o)/p,I=(s.height-o)/m,S=Math.max(Math.min(b,I)/2,0),D=G_(this.options.radius,S),k=Math.max(D*c,0),O=(D-k)/this._getVisibleDatasetWeightTotal();this.offsetX=_*D,this.offsetY=v*D,i.total=this.calculateTotal(),this.outerRadius=D-O*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-O*u,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/vt)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,u=o.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,p=r&&u.animateScale,m=p?0:this.innerRadius,_=p?0:this.outerRadius,{sharedOptions:v,includeOptions:b}=this._getSharedOptions(e,i);let I=this._getRotation(),S;for(S=0;S<e;++S)I+=this._circumference(S,r);for(S=e;S<e+s;++S){const D=this._circumference(S,r),k=t[S],O={x:h+this.offsetX,y:d+this.offsetY,startAngle:I,endAngle:I+D,circumference:D,outerRadius:_,innerRadius:m};b&&(O.options=v||this.resolveDataElementOptions(S,k.active?"active":i)),I+=D,this.updateElement(k,S,O,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?vt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=Vr(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,c;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)c=a.resolveDataElementOptions(i),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(G(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}U(cs,"id","doughnut"),U(cs,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),U(cs,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),U(cs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,u)=>{const d=t.getDatasetMeta(0).controller.getStyle(u);return{text:c,fillStyle:d.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(u),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||d.borderRadius),index:u}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Bo extends Pe{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=ey(e,i,o);this._drawStart=a,this._drawCount=c,ny(e)&&(a=0,c=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:u},t),this.updateElements(i,a,c,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:u}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,i),p=o.axis,m=a.axis,{spanGaps:_,segment:v}=this.options,b=si(_)?_:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||r||i==="none",S=e+s,D=t.length;let k=e>0&&this.getParsed(e-1);for(let O=0;O<D;++O){const M=t[O],E=I?M:{};if(O<e||O>=S){E.skip=!0;continue}const y=this.getParsed(O),w=X(y[m]),A=E[p]=o.getPixelForValue(y[p],O),R=E[m]=r||w?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,y,c):y[m],O);E.skip=isNaN(A)||isNaN(R)||w,E.stop=O>0&&Math.abs(y[p]-k[p])>b,v&&(E.parsed=y,E.raw=u.data[O]),d&&(E.options=h||this.resolveDataElementOptions(O,M.active?"active":i)),I||this.updateElement(M,O,E,i),k=y}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}U(Bo,"id","line"),U(Bo,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),U(Bo,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class sr extends Pe{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=Vr(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:r}}parseObjectData(t,e,s,i){return uy.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const r=this.getParsed(i).r;!isNaN(r)&&this.chart.getDataVisibility(i)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(i/2,0),o=Math.max(s.cutoutPercentage?r/100*s.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,c=o.options.animation,u=this._cachedMeta.rScale,h=u.xCenter,d=u.yCenter,p=u.getIndexAngle(0)-.5*rt;let m=p,_;const v=360/this.countVisibleElements();for(_=0;_<e;++_)m+=this._computeAngle(_,i,v);for(_=e;_<e+s;_++){const b=t[_];let I=m,S=m+this._computeAngle(_,i,v),D=o.getDataVisibility(_)?u.getDistanceFromCenterForValue(this.getParsed(_).r):0;m=S,r&&(c.animateScale&&(D=0),c.animateRotate&&(I=S=p));const k={x:h,y:d,innerRadius:0,outerRadius:D,startAngle:I,endAngle:S,options:this.resolveDataElementOptions(_,b.active?"active":i)};this.updateElement(b,_,k,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?ke(this.resolveDataElementOptions(t,e).angle||s):0}}U(sr,"id","polarArea"),U(sr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),U(sr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:i,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Ol extends cs{}U(Ol,"id","pie"),U(Ol,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Uo extends Pe{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return uy.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],r=e.iScale.getLabels();if(s.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===i.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const r=this._cachedMeta.rScale,o=i==="reset";for(let a=e;a<e+s;a++){const c=t[a],u=this.resolveDataElementOptions(a,c.active?"active":i),h=r.getPointPositionForValue(a,this.getParsed(a).r),d=o?r.xCenter:h.x,p=o?r.yCenter:h.y,m={x:d,y:p,angle:h.angle,skip:isNaN(d)||isNaN(p),options:u};this.updateElement(c,a,m,i)}}}U(Uo,"id","radar"),U(Uo,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),U(Uo,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class $o extends Pe{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=ey(e,s,i);if(this._drawStart=r,this._drawCount=o,ny(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const u=this.resolveDatasetElementOptions(t);u.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:u},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:u}=this._cachedMeta,h=this.resolveDataElementOptions(e,i),d=this.getSharedOptions(h),p=this.includeOptions(i,d),m=o.axis,_=a.axis,{spanGaps:v,segment:b}=this.options,I=si(v)?v:Number.POSITIVE_INFINITY,S=this.chart._animationsDisabled||r||i==="none";let D=e>0&&this.getParsed(e-1);for(let k=e;k<e+s;++k){const O=t[k],M=this.getParsed(k),E=S?O:{},y=X(M[_]),w=E[m]=o.getPixelForValue(M[m],k),A=E[_]=r||y?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,M,c):M[_],k);E.skip=isNaN(w)||isNaN(A)||y,E.stop=k>0&&Math.abs(M[m]-D[m])>I,b&&(E.parsed=M,E.raw=u.data[k]),p&&(E.options=d||this.resolveDataElementOptions(k,O.active?"active":i)),S||this.updateElement(O,k,E,i),D=M}this.updateSharedOptions(d,i,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}U($o,"id","scatter"),U($o,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),U($o,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var QR=Object.freeze({__proto__:null,BarController:Vo,BubbleController:Fo,DoughnutController:cs,LineController:Bo,PieController:Ol,PolarAreaController:sr,RadarController:Uo,ScatterController:$o});function es(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class ch{constructor(t){U(this,"options");this.options=t||{}}static override(t){Object.assign(ch.prototype,t)}init(){}formats(){return es()}parse(){return es()}format(){return es()}add(){return es()}diff(){return es()}startOf(){return es()}endOf(){return es()}}var JR={_date:ch};function ZR(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const u=a._reversePixels?xS:ln;if(s){if(i._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const p=u(r,t,e-d),m=u(r,t,e+d);return{lo:p.lo,hi:m.hi}}}}else{const h=u(r,t,e);if(c){const{vScale:d}=i._cachedMeta,{_parsed:p}=n,m=p.slice(0,h.lo+1).reverse().findIndex(v=>!X(v[d.axis]));h.lo-=Math.max(0,m);const _=p.slice(h.hi).findIndex(v=>!X(v[d.axis]));h.hi+=Math.max(0,_)}return h}}return{lo:0,hi:r.length-1}}function Xa(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:u,data:h}=r[a],{lo:d,hi:p}=ZR(r[a],t,o,i);for(let m=d;m<=p;++m){const _=h[m];_.skip||s(_,u,m)}}}function tC(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Hc(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||Xa(n,e,t,function(a,c,u){!i&&!un(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:c,index:u})},!0),r}function eC(n,t,e,s){let i=[];function r(o,a,c){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],s),{angle:d}=X_(o,{x:t.x,y:t.y});_r(d,u,h)&&i.push({element:o,datasetIndex:a,index:c})}return Xa(n,e,t,r),i}function nC(n,t,e,s,i,r){let o=[];const a=tC(e);let c=Number.POSITIVE_INFINITY;function u(h,d,p){const m=h.inRange(t.x,t.y,i);if(s&&!m)return;const _=h.getCenterPoint(i);if(!(!!r||n.isPointInArea(_))&&!m)return;const b=a(t,_);b<c?(o=[{element:h,datasetIndex:d,index:p}],c=b):b===c&&o.push({element:h,datasetIndex:d,index:p})}return Xa(n,e,t,u),o}function Wc(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?eC(n,t,e,i):nC(n,t,e,s,i,r)}function up(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Xa(n,e,t,(c,u,h)=>{c[o]&&c[o](t[e],i)&&(r.push({element:c,datasetIndex:u,index:h}),a=a||c.inRange(t.x,t.y,i))}),s&&!a?[]:r}var sC={modes:{index(n,t,e,s){const i=rs(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Hc(n,i,r,s,o):Wc(n,i,r,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,d=u.data[h];d&&!d.skip&&c.push({element:d,datasetIndex:u.index,index:h})}),c):[]},dataset(n,t,e,s){const i=rs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Hc(n,i,r,s,o):Wc(n,i,r,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,u=n.getDatasetMeta(c).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:c,index:h})}return a},point(n,t,e,s){const i=rs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Hc(n,i,r,s,o)},nearest(n,t,e,s){const i=rs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Wc(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=rs(t,n);return up(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=rs(t,n);return up(n,i,"y",e.intersect,s)}}};const xy=["left","top","right","bottom"];function Ri(n,t){return n.filter(e=>e.pos===t)}function hp(n,t){return n.filter(e=>xy.indexOf(e.pos)===-1&&e.box.axis===t)}function Ci(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function iC(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function rC(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!xy.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function oC(n,t){const e=rC(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,u=e[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*s:c&&t.availableWidth,a.height=i):(a.width=s,a.height=h?h*i:c&&t.availableHeight)}return e}function aC(n){const t=iC(n),e=Ci(t.filter(u=>u.box.fullSize),!0),s=Ci(Ri(t,"left"),!0),i=Ci(Ri(t,"right")),r=Ci(Ri(t,"top"),!0),o=Ci(Ri(t,"bottom")),a=hp(t,"x"),c=hp(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(c).concat(o).concat(a),chartArea:Ri(t,"chartArea"),vertical:s.concat(i).concat(c),horizontal:r.concat(o).concat(a)}}function dp(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function wy(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function cC(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!J(i)){e.size&&(n[i]-=e.size);const d=s[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?r.height:r.width),e.size=d.size/d.count,n[i]+=e.size}r.getPadding&&wy(o,r.getPadding());const a=Math.max(0,t.outerWidth-dp(o,n,"left","right")),c=Math.max(0,t.outerHeight-dp(o,n,"top","bottom")),u=a!==n.w,h=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:u,other:h}:{same:h,other:u}}function lC(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function uC(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function ji(n,t,e,s){const i=[];let r,o,a,c,u,h;for(r=0,o=n.length,u=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,uC(a.horizontal,t));const{same:d,other:p}=cC(t,e,a,s);u|=d&&i.length,h=h||p,c.fullSize||i.push(a)}return u&&ji(i,t,e,s)||h}function yo(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function fp(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,u=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const d=t.w*h,p=u.size||c.height;mr(u.start)&&(o=u.start),c.fullSize?yo(c,i.left,o,e.outerWidth-i.right-i.left,p):yo(c,t.left+u.placed,o,d,p),u.start=o,u.placed+=d,o=c.bottom}else{const d=t.h*h,p=u.size||c.width;mr(u.start)&&(r=u.start),c.fullSize?yo(c,r,i.top,p,e.outerHeight-i.bottom-i.top):yo(c,r,t.top+u.placed,p,d),u.start=r,u.placed+=d,r=c.right}}t.x=r,t.y=o}var se={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=re(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=aC(n.boxes),c=a.vertical,u=a.horizontal;ot(n.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const h=c.reduce((v,b)=>b.box.options&&b.box.options.display===!1?v:v+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),p=Object.assign({},i);wy(p,re(s));const m=Object.assign({maxPadding:p,w:r,h:o,x:i.left,y:i.top},i),_=oC(c.concat(u),d);ji(a.fullSize,m,d,_),ji(c,m,d,_),ji(u,m,d,_)&&ji(c,m,d,_),lC(m),fp(a.leftAndTop,m,d,_),m.x+=m.w,m.y+=m.h,fp(a.rightAndBottom,m,d,_),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},ot(a.chartArea,v=>{const b=v.box;Object.assign(b,n.chartArea),b.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class Ey{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class hC extends Ey{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const zo="$chartjs",dC={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},pp=n=>n===null||n==="";function fC(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[zo]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",pp(i)){const r=Qf(n,"width");r!==void 0&&(n.width=r)}if(pp(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Qf(n,"height");r!==void 0&&(n.height=r)}return n}const Ty=pR?{passive:!0}:!1;function pC(n,t,e){n&&n.addEventListener(t,e,Ty)}function gC(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Ty)}function mC(n,t){const e=dC[n.type]||n.type,{x:s,y:i}=rs(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function _a(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function _C(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||_a(a.addedNodes,s),o=o&&!_a(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function yC(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||_a(a.removedNodes,s),o=o&&!_a(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const vr=new Map;let gp=0;function Iy(){const n=window.devicePixelRatio;n!==gp&&(gp=n,vr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function vC(n,t){vr.size||window.addEventListener("resize",Iy),vr.set(n,t)}function bC(n){vr.delete(n),vr.size||window.removeEventListener("resize",Iy)}function xC(n,t,e){const s=n.canvas,i=s&&ah(s);if(!i)return;const r=ty((a,c)=>{const u=i.clientWidth;e(a,c),u<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],u=c.contentRect.width,h=c.contentRect.height;u===0&&h===0||r(u,h)});return o.observe(i),vC(n,r),o}function qc(n,t,e){e&&e.disconnect(),t==="resize"&&bC(n)}function wC(n,t,e){const s=n.canvas,i=ty(r=>{n.ctx!==null&&e(mC(r,n))},n);return pC(s,t,i),i}class EC extends Ey{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(fC(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[zo])return!1;const s=e[zo].initial;["height","width"].forEach(r=>{const o=s[r];X(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[zo],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:_C,detach:yC,resize:xC}[e]||wC;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:qc,detach:qc,resize:qc}[e]||gC)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return fR(t,e,s,i)}isAttached(t){const e=t&&ah(t);return!!(e&&e.isConnected)}}function TC(n){return!oh()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?hC:EC}class Le{constructor(){U(this,"x");U(this,"y");U(this,"active",!1);U(this,"options");U(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return si(this.x)&&si(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}U(Le,"defaults",{}),U(Le,"defaultRoutes");function IC(n,t){const e=n.options.ticks,s=AC(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?RC(t):[],o=r.length,a=r[0],c=r[o-1],u=[];if(o>i)return CC(t,u,r,o/i),u;const h=SC(r,t,i);if(o>0){let d,p;const m=o>1?Math.round((c-a)/(o-1)):null;for(vo(t,u,h,X(m)?0:a-m,a),d=0,p=o-1;d<p;d++)vo(t,u,h,r[d],r[d+1]);return vo(t,u,h,c,X(m)?t.length:c+m),u}return vo(t,u,h),u}function AC(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function SC(n,t,e){const s=kC(n),i=t.length/e;if(!s)return Math.max(i,1);const r=mS(s);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>i)return c}return Math.max(i,1)}function RC(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function CC(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function vo(n,t,e,s,i){const r=G(s,0),o=Math.min(G(i,n.length),n.length);let a=0,c,u,h;for(e=Math.ceil(e),i&&(c=i-s,e=c/Math.floor(c/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(u=Math.max(r,0);u<o;u++)u===h&&(t.push(n[u]),a++,h=Math.round(r+a*e))}function kC(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const PC=n=>n==="left"?"right":n==="right"?"left":n,mp=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,_p=(n,t)=>Math.min(t||n,n);function yp(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function DC(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(i),u;if(!(e&&(s===1?u=Math.max(c-r,o-c):t===0?u=(n.getPixelForTick(1)-c)/2:u=(c-n.getPixelForTick(i-1))/2,c+=i<t?u:-u,c<r-a||c>o+a)))return c}function OC(n,t){ot(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function ki(n){return n.drawTicks?n.tickLength:0}function vp(n,t){if(!n.display)return 0;const e=Ft(n.font,t),s=re(n.padding);return(wt(n.text)?n.text.length:1)*e.lineHeight+s.height}function MC(n,t){return Kn(n,{scale:t,type:"scale"})}function LC(n,t,e){return Kn(n,{tick:e,index:t,type:"tick"})}function NC(n,t,e){let s=th(n);return(e&&t!=="right"||!e&&t==="right")&&(s=PC(s)),s}function VC(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:c}=n,{chartArea:u,scales:h}=c;let d=0,p,m,_;const v=o-i,b=a-r;if(n.isHorizontal()){if(m=Zt(s,r,a),J(e)){const I=Object.keys(e)[0],S=e[I];_=h[I].getPixelForValue(S)+v-t}else e==="center"?_=(u.bottom+u.top)/2+v-t:_=mp(n,e,t);p=a-r}else{if(J(e)){const I=Object.keys(e)[0],S=e[I];m=h[I].getPixelForValue(S)-b+t}else e==="center"?m=(u.left+u.right)/2-b+t:m=mp(n,e,t);_=Zt(s,o,i),d=e==="left"?-Dt:Dt}return{titleX:m,titleY:_,maxWidth:p,rotation:d}}class As extends Le{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=ye(t,Number.POSITIVE_INFINITY),e=ye(e,Number.NEGATIVE_INFINITY),s=ye(s,Number.POSITIVE_INFINITY),i=ye(i,Number.NEGATIVE_INFINITY),{min:ye(t,s),max:ye(e,i),minDefined:Ct(t),maxDefined:Ct(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,u=a.length;c<u;++c)o=a[c].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:ye(e,ye(s,e)),max:ye(s,ye(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ft(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=WS(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?yp(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=IC(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ft(this.options.afterUpdate,[this])}beforeSetDimensions(){ft(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ft(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ft(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ft(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=ft(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){ft(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ft(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=_p(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,c,u;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const h=this._getLabelSizes(),d=h.widest.width,p=h.highest.height,m=Ut(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),d+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-ki(t.grid)-e.padding-vp(t.title,this.chart.options.font),u=Math.sqrt(d*d+p*p),o=Ju(Math.min(Math.asin(Ut((h.highest.height+6)/a,-1,1)),Math.asin(Ut(c/u,-1,1))-Math.asin(Ut(p/u,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){ft(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ft(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=vp(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=ki(r)+c):(t.height=this.maxHeight,t.width=ki(r)+c),s.display&&this.ticks.length){const{first:u,last:h,widest:d,highest:p}=this._getLabelSizes(),m=s.padding*2,_=ke(this.labelRotation),v=Math.cos(_),b=Math.sin(_);if(a){const I=s.mirror?0:b*d.width+v*p.height;t.height=Math.min(this.maxHeight,t.height+I+m)}else{const I=s.mirror?0:v*d.width+b*p.height;t.width=Math.min(this.maxWidth,t.width+I+m)}this._calculatePadding(u,h,b,v)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,m=0;c?u?(p=i*t.width,m=s*e.height):(p=s*t.height,m=i*e.width):r==="start"?m=e.width:r==="end"?p=t.width:r!=="inner"&&(p=t.width/2,m=e.width/2),this.paddingLeft=Math.max((p-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((m-d+o)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=e.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ft(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)X(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=yp(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/_p(e,s));let u=0,h=0,d,p,m,_,v,b,I,S,D,k,O;for(d=0;d<e;d+=c){if(_=t[d].label,v=this._resolveTickFontOptions(d),i.font=b=v.string,I=r[b]=r[b]||{data:{},gc:[]},S=v.lineHeight,D=k=0,!X(_)&&!wt(_))D=ga(i,I.data,I.gc,D,_),k=S;else if(wt(_))for(p=0,m=_.length;p<m;++p)O=_[p],!X(O)&&!wt(O)&&(D=ga(i,I.data,I.gc,D,O),k+=S);o.push(D),a.push(k),u=Math.max(D,u),h=Math.max(k,h)}OC(r,e);const M=o.indexOf(u),E=a.indexOf(h),y=w=>({width:o[w]||0,height:a[w]||0});return{first:y(0),last:y(e-1),widest:y(M),highest:y(E),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return bS(this._alignToPixels?ts(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=LC(this.getContext(),t,s))}return this.$context||(this.$context=MC(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=ke(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*s>a*i?a/s:c/i:c*i<a*s?c/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,c=r.offset,u=this.isHorizontal(),d=this.ticks.length+(c?1:0),p=ki(r),m=[],_=a.setContext(this.getContext()),v=_.display?_.width:0,b=v/2,I=function(dt){return ts(s,dt,v)};let S,D,k,O,M,E,y,w,A,R,C,T;if(o==="top")S=I(this.bottom),E=this.bottom-p,w=S-b,R=I(t.top)+b,T=t.bottom;else if(o==="bottom")S=I(this.top),R=t.top,T=I(t.bottom)-b,E=S+b,w=this.top+p;else if(o==="left")S=I(this.right),M=this.right-p,y=S-b,A=I(t.left)+b,C=t.right;else if(o==="right")S=I(this.left),A=t.left,C=I(t.right)-b,M=S+b,y=this.left+p;else if(e==="x"){if(o==="center")S=I((t.top+t.bottom)/2+.5);else if(J(o)){const dt=Object.keys(o)[0],ut=o[dt];S=I(this.chart.scales[dt].getPixelForValue(ut))}R=t.top,T=t.bottom,E=S+b,w=E+p}else if(e==="y"){if(o==="center")S=I((t.left+t.right)/2);else if(J(o)){const dt=Object.keys(o)[0],ut=o[dt];S=I(this.chart.scales[dt].getPixelForValue(ut))}M=S-b,y=M-p,A=t.left,C=t.right}const lt=G(i.ticks.maxTicksLimit,d),tt=Math.max(1,Math.ceil(d/lt));for(D=0;D<d;D+=tt){const dt=this.getContext(D),ut=r.setContext(dt),$t=a.setContext(dt),Mt=ut.lineWidth,Ke=ut.color,Ss=$t.dash||[],oe=$t.dashOffset,St=ut.tickWidth,Ye=ut.tickColor,Ae=ut.tickBorderDash||[],Xe=ut.tickBorderDashOffset;k=DC(this,D,c),k!==void 0&&(O=ts(s,k,Mt),u?M=y=A=C=O:E=w=R=T=O,m.push({tx1:M,ty1:E,tx2:y,ty2:w,x1:A,y1:R,x2:C,y2:T,width:Mt,color:Ke,borderDash:Ss,borderDashOffset:oe,tickWidth:St,tickColor:Ye,tickBorderDash:Ae,tickBorderDashOffset:Xe}))}return this._ticksLength=d,this._borderValue=S,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:u,padding:h,mirror:d}=r,p=ki(s.grid),m=p+h,_=d?-h:m,v=-ke(this.labelRotation),b=[];let I,S,D,k,O,M,E,y,w,A,R,C,T="middle";if(i==="top")M=this.bottom-_,E=this._getXAxisLabelAlignment();else if(i==="bottom")M=this.top+_,E=this._getXAxisLabelAlignment();else if(i==="left"){const tt=this._getYAxisLabelAlignment(p);E=tt.textAlign,O=tt.x}else if(i==="right"){const tt=this._getYAxisLabelAlignment(p);E=tt.textAlign,O=tt.x}else if(e==="x"){if(i==="center")M=(t.top+t.bottom)/2+m;else if(J(i)){const tt=Object.keys(i)[0],dt=i[tt];M=this.chart.scales[tt].getPixelForValue(dt)+m}E=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")O=(t.left+t.right)/2-m;else if(J(i)){const tt=Object.keys(i)[0],dt=i[tt];O=this.chart.scales[tt].getPixelForValue(dt)}E=this._getYAxisLabelAlignment(p).textAlign}e==="y"&&(c==="start"?T="top":c==="end"&&(T="bottom"));const lt=this._getLabelSizes();for(I=0,S=a.length;I<S;++I){D=a[I],k=D.label;const tt=r.setContext(this.getContext(I));y=this.getPixelForTick(I)+r.labelOffset,w=this._resolveTickFontOptions(I),A=w.lineHeight,R=wt(k)?k.length:1;const dt=R/2,ut=tt.color,$t=tt.textStrokeColor,Mt=tt.textStrokeWidth;let Ke=E;o?(O=y,E==="inner"&&(I===S-1?Ke=this.options.reverse?"left":"right":I===0?Ke=this.options.reverse?"right":"left":Ke="center"),i==="top"?u==="near"||v!==0?C=-R*A+A/2:u==="center"?C=-lt.highest.height/2-dt*A+A:C=-lt.highest.height+A/2:u==="near"||v!==0?C=A/2:u==="center"?C=lt.highest.height/2-dt*A:C=lt.highest.height-R*A,d&&(C*=-1),v!==0&&!tt.showLabelBackdrop&&(O+=A/2*Math.sin(v))):(M=y,C=(1-R)*A/2);let Ss;if(tt.showLabelBackdrop){const oe=re(tt.backdropPadding),St=lt.heights[I],Ye=lt.widths[I];let Ae=C-oe.top,Xe=0-oe.left;switch(T){case"middle":Ae-=St/2;break;case"bottom":Ae-=St;break}switch(E){case"center":Xe-=Ye/2;break;case"right":Xe-=Ye;break;case"inner":I===S-1?Xe-=Ye:I>0&&(Xe-=Ye/2);break}Ss={left:Xe,top:Ae,width:Ye+oe.width,height:St+oe.height,color:tt.backdropColor}}b.push({label:k,font:w,textOffset:C,options:{rotation:v,color:ut,strokeColor:$t,strokeWidth:Mt,textAlign:Ke,textBaseline:T,translation:[O,M],backdrop:Ss}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-ke(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let u,h;return e==="left"?i?(h=this.right+r,s==="near"?u="left":s==="center"?(u="center",h+=c/2):(u="right",h+=c)):(h=this.right-a,s==="near"?u="right":s==="center"?(u="center",h-=c/2):(u="left",h=this.left)):e==="right"?i?(h=this.left+r,s==="near"?u="right":s==="center"?(u="center",h-=c/2):(u="left",h-=c)):(h=this.left+a,s==="near"?u="left":s==="center"?(u="center",h+=c/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,u,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(u.x,u.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const c=i[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let u,h,d,p;this.isHorizontal()?(u=ts(t,this.left,o)-o/2,h=ts(t,this.right,a)+a/2,d=p=c):(d=ts(t,this.top,o)-o/2,p=ts(t,this.bottom,a)+a/2,u=h=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(u,d),e.lineTo(h,p),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&Ga(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,u=o.label,h=o.textOffset;bs(s,u,0,h,c,a)}i&&Ka(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=Ft(s.font),o=re(s.padding),a=s.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||J(e)?(c+=o.bottom,wt(s.text)&&(c+=r.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:u,titleY:h,maxWidth:d,rotation:p}=VC(this,c,e,a);bs(t,s.text,0,0,r,{color:s.color,maxWidth:d,rotation:p,textAlign:NC(a,e,i),textBaseline:"middle",translation:[u,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=G(t.grid&&t.grid.z,-1),i=G(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==As.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Ft(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class bo{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;UC(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,FC(t,o,s),this.override&&Et.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in Et[i]&&(delete Et[i][s],this.override&&delete vs[s])}}function FC(n,t,e){const s=gr(Object.create(null),[e?Et.get(e):{},Et.get(t),n.defaults]);Et.set(t,s),n.defaultRoutes&&BC(t,n.defaultRoutes),n.descriptors&&Et.describe(t,n.descriptors)}function BC(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Et.route(r,i,c,a)})}function UC(n){return"id"in n&&"defaults"in n}class $C{constructor(){this.controllers=new bo(Pe,"datasets",!0),this.elements=new bo(Le,"elements"),this.plugins=new bo(Object,"plugins"),this.scales=new bo(As,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):ot(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=Qu(t);ft(s["before"+i],[],s),e[t](s),ft(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var Fe=new $C;class zC{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],c=[e,i,r.options];if(ft(a,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){X(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=G(s.options&&s.options.plugins,{}),r=jC(s);return i===!1&&!e?[]:WC(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function jC(n){const t={},e=[],s=Object.keys(Fe.plugins.items);for(let r=0;r<s.length;r++)e.push(Fe.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function HC(n,t){return!t&&n===!1?null:n===!0?{}:n}function WC(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const c=a.id,u=HC(s[c],i);u!==null&&r.push({plugin:a,options:qC(n.config,{plugin:a,local:e[c]},u,o)})}return r}function qC(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ml(n,t){const e=Et.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function GC(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function KC(n,t){return n===t?"_index_":"_value_"}function bp(n){if(n==="x"||n==="y"||n==="r")return n}function YC(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Ll(n,...t){if(bp(n))return n;for(const e of t){const s=e.axis||YC(e.position)||n.length>1&&bp(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function xp(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function XC(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return xp(n,"x",e[0])||xp(n,"y",e[0])}return{}}function QC(n,t){const e=vs[n.type]||{scales:{}},s=t.scales||{},i=Ml(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!J(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Ll(o,a,XC(o,n),Et.scales[a.type]),u=KC(c,i),h=e.scales||{};r[o]=Zi(Object.create(null),[{axis:c},a,h[c],h[u]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||Ml(a,t),h=(vs[a]||{}).scales||{};Object.keys(h).forEach(d=>{const p=GC(d,c),m=o[p+"AxisID"]||p;r[m]=r[m]||Object.create(null),Zi(r[m],[{axis:p},s[m],h[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];Zi(a,[Et.scales[a.type],Et.scale])}),r}function Ay(n){const t=n.options||(n.options={});t.plugins=G(t.plugins,{}),t.scales=QC(n,t)}function Sy(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function JC(n){return n=n||{},n.data=Sy(n.data),Ay(n),n}const wp=new Map,Ry=new Set;function xo(n,t){let e=wp.get(n);return e||(e=t(),wp.set(n,e),Ry.add(e)),e}const Pi=(n,t,e)=>{const s=jn(t,e);s!==void 0&&n.add(s)};class ZC{constructor(t){this._config=JC(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Sy(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Ay(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return xo(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return xo(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return xo(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return xo(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(h=>{t&&(c.add(t),h.forEach(d=>Pi(c,t,d))),h.forEach(d=>Pi(c,i,d)),h.forEach(d=>Pi(c,vs[r]||{},d)),h.forEach(d=>Pi(c,Et,d)),h.forEach(d=>Pi(c,Pl,d))});const u=Array.from(c);return u.length===0&&u.push(Object.create(null)),Ry.has(e)&&o.set(e,u),u}chartOptionScopes(){const{options:t,type:e}=this;return[t,vs[e]||{},Et.datasets[e]||{},{type:e},Et,Pl]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Ep(this._resolverCache,t,i);let c=o;if(ek(o,e)){r.$shared=!1,s=Hn(s)?s():s;const u=this.createResolver(t,s,a);c=ii(o,s,u)}for(const u of e)r[u]=c[u];return r}createResolver(t,e,s=[""],i){const{resolver:r}=Ep(this._resolverCache,t,s);return J(e)?ii(r,e,void 0,i):r}}function Ep(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:sh(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const tk=n=>J(n)&&Object.getOwnPropertyNames(n).some(t=>Hn(n[t]));function ek(n,t){const{isScriptable:e,isIndexable:s}=oy(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&(Hn(a)||tk(a))||o&&wt(a))return!0}return!1}var nk="4.5.1";const sk=["top","bottom","left","right","chartArea"];function Tp(n,t){return n==="top"||n==="bottom"||sk.indexOf(n)===-1&&t==="x"}function Ip(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function Ap(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),ft(e&&e.onComplete,[n],t)}function ik(n){const t=n.chart,e=t.options.animation;ft(e&&e.onProgress,[n],t)}function Cy(n){return oh()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const jo={},Sp=n=>{const t=Cy(n);return Object.values(jo).filter(e=>e.canvas===t).pop()};function rk(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function ok(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class at{static register(...t){Fe.add(...t),Rp()}static unregister(...t){Fe.remove(...t),Rp()}constructor(t,e){const s=this.config=new ZC(e),i=Cy(t),r=Sp(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||TC(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),c=a&&a.canvas,u=c&&c.height,h=c&&c.width;if(this.id=aS(),this.ctx=a,this.canvas=c,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new zC,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=TS(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],jo[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}tn.listen(this,"complete",Ap),tn.listen(this,"progress",ik),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return X(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Fe}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Xf(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Gf(this.canvas,this.ctx),this}stop(){return tn.stop(this),this}resize(t,e){tn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Xf(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ft(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};ot(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=Ll(o,a),u=c==="r",h=c==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),ot(r,o=>{const a=o.options,c=a.id,u=Ll(c,a),h=G(a.type,o.dtype);(a.position===void 0||Tp(a.position,u)!==Tp(o.dposition))&&(a.position=o.dposition),i[c]=!0;let d=null;if(c in s&&s[c].type===h)d=s[c];else{const p=Fe.getScale(h);d=new p({id:c,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,t)}),ot(i,(o,a)=>{o||delete s[a]}),ot(s,o=>{se.configure(this,o,o.options),se.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Ip("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||Ml(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=Fe.getController(a),{datasetElementType:u,dataElementType:h}=Et.datasets[a];Object.assign(c,{dataElementType:Fe.getElement(h),datasetElementType:u&&Fe.getElement(u)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){ot(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:d}=this.getDatasetMeta(u),p=!i&&r.indexOf(d)===-1;d.buildOrUpdateElements(p),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||ot(r,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Ip("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){ot(this.scales,t=>{se.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Ff(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;rk(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!Ff(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;se.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],ot(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,Hn(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(tn.has(this)?this.attached&&!tn.running(this)&&tn.start(this):(this.draw(),Ap({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=_y(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Ga(e,i),t.controller.draw(),i&&Ka(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return un(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=sC.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=Kn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);mr(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),tn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Gf(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete jo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};ot(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,u)=>{e.addEventListener(this,c,u),t[c]=u},i=(c,u)=>{t[c]&&(e.removeEventListener(this,c,u),delete t[c])},r=(c,u)=>{this.canvas&&this.resize(c,u)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){ot(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},ot(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!da(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(c,u)=>c.filter(h=>!u.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),c=fS(t),u=ok(t,this._lastEvent,s,c);s&&(this._lastEvent=null,ft(r.onHover,[t,a,this],this),c&&ft(r.onClick,[t,a,this],this));const h=!da(a,i);return(h||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=u,h}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}U(at,"defaults",Et),U(at,"instances",jo),U(at,"overrides",vs),U(at,"registry",Fe),U(at,"version",nk),U(at,"getChart",Sp);function Rp(){return ot(at.instances,n=>n._plugins.invalidate())}function ak(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:u,borderJoinStyle:h}=c,d=Math.min(u/o,ee(s-e));if(n.beginPath(),n.arc(i,r,o-u/2,s+d/2,e-d/2),a>0){const p=Math.min(u/a,ee(s-e));n.arc(i,r,a+u/2,e-p/2,s+p/2,!0)}else{const p=Math.min(u/2,o*ee(s-e));if(h==="round")n.arc(i,r,p,e-rt/2,s+rt/2,!0);else if(h==="bevel"){const m=2*p*p,_=-m*Math.cos(e+rt/2)+i,v=-m*Math.sin(e+rt/2)+r,b=m*Math.cos(s+rt/2)+i,I=m*Math.sin(s+rt/2)+r;n.lineTo(_,v),n.lineTo(b,I)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function ck(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:c}=t;let u=i/a;n.beginPath(),n.arc(r,o,a,s-u,e+u),c>i?(u=i/c,n.arc(r,o,c,e+u,s-u,!0)):n.arc(r,o,i,e+Dt,s-Dt),n.closePath(),n.clip()}function lk(n){return nh(n,["outerStart","outerEnd","innerStart","innerEnd"])}function uk(n,t,e,s){const i=lk(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=c=>{const u=(e-Math.min(r,c))*s/2;return Ut(c,0,Math.min(r,u))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Ut(i.innerStart,0,o),innerEnd:Ut(i.innerEnd,0,o)}}function Ls(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function ya(n,t,e,s,i,r){const{x:o,y:a,startAngle:c,pixelMargin:u,innerRadius:h}=t,d=Math.max(t.outerRadius+s+e-u,0),p=h>0?h+s+e+u:0;let m=0;const _=i-c;if(s){const tt=h>0?h-s:0,dt=d>0?d-s:0,ut=(tt+dt)/2,$t=ut!==0?_*ut/(ut+s):_;m=(_-$t)/2}const v=Math.max(.001,_*d-e/rt)/d,b=(_-v)/2,I=c+b+m,S=i-b-m,{outerStart:D,outerEnd:k,innerStart:O,innerEnd:M}=uk(t,p,d,S-I),E=d-D,y=d-k,w=I+D/E,A=S-k/y,R=p+O,C=p+M,T=I+O/R,lt=S-M/C;if(n.beginPath(),r){const tt=(w+A)/2;if(n.arc(o,a,d,w,tt),n.arc(o,a,d,tt,A),k>0){const Mt=Ls(y,A,o,a);n.arc(Mt.x,Mt.y,k,A,S+Dt)}const dt=Ls(C,S,o,a);if(n.lineTo(dt.x,dt.y),M>0){const Mt=Ls(C,lt,o,a);n.arc(Mt.x,Mt.y,M,S+Dt,lt+Math.PI)}const ut=(S-M/p+(I+O/p))/2;if(n.arc(o,a,p,S-M/p,ut,!0),n.arc(o,a,p,ut,I+O/p,!0),O>0){const Mt=Ls(R,T,o,a);n.arc(Mt.x,Mt.y,O,T+Math.PI,I-Dt)}const $t=Ls(E,I,o,a);if(n.lineTo($t.x,$t.y),D>0){const Mt=Ls(E,w,o,a);n.arc(Mt.x,Mt.y,D,I-Dt,w)}}else{n.moveTo(o,a);const tt=Math.cos(w)*d+o,dt=Math.sin(w)*d+a;n.lineTo(tt,dt);const ut=Math.cos(A)*d+o,$t=Math.sin(A)*d+a;n.lineTo(ut,$t)}n.closePath()}function hk(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){ya(n,t,e,s,c,i);for(let u=0;u<r;++u)n.fill();isNaN(a)||(c=o+(a%vt||vt))}return ya(n,t,e,s,c,i),n.fill(),c}function dk(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:u,borderJoinStyle:h,borderDash:d,borderDashOffset:p,borderRadius:m}=c,_=c.borderAlign==="inner";if(!u)return;n.setLineDash(d||[]),n.lineDashOffset=p,_?(n.lineWidth=u*2,n.lineJoin=h||"round"):(n.lineWidth=u,n.lineJoin=h||"bevel");let v=t.endAngle;if(r){ya(n,t,e,s,v,i);for(let b=0;b<r;++b)n.stroke();isNaN(a)||(v=o+(a%vt||vt))}_&&ck(n,t,v),c.selfJoin&&v-o>=rt&&m===0&&h!=="miter"&&ak(n,t,v),r||(ya(n,t,e,s,v,i),n.stroke())}class Hi extends Le{constructor(e){super();U(this,"circumference");U(this,"endAngle");U(this,"fullCircles");U(this,"innerRadius");U(this,"outerRadius");U(this,"pixelMargin");U(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=X_(r,{x:e,y:s}),{startAngle:c,endAngle:u,innerRadius:h,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,_=G(p,u-c),v=_r(o,c,u)&&c!==u,b=_>=vt||v,I=cn(a,h+m,d+m);return b&&I}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:u,spacing:h}=this.options,d=(r+o)/2,p=(a+c+h+u)/2;return{x:s+Math.cos(d)*p,y:i+Math.sin(d)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>vt?Math.floor(i/vt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const u=1-Math.sin(Math.min(rt,i||0)),h=r*u;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,hk(e,this,h,o,a),dk(e,this,h,o,a),e.restore()}}U(Hi,"id","arc"),U(Hi,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),U(Hi,"defaultRoutes",{backgroundColor:"backgroundColor"}),U(Hi,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function ky(n,t,e=t){n.lineCap=G(e.borderCapStyle,t.borderCapStyle),n.setLineDash(G(e.borderDash,t.borderDash)),n.lineDashOffset=G(e.borderDashOffset,t.borderDashOffset),n.lineJoin=G(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=G(e.borderWidth,t.borderWidth),n.strokeStyle=G(e.borderColor,t.borderColor)}function fk(n,t,e){n.lineTo(e.x,e.y)}function pk(n){return n.stepped?NS:n.tension||n.cubicInterpolationMode==="monotone"?VS:fk}function Py(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,c=Math.max(i,o),u=Math.min(r,a),h=i<o&&r<o||i>a&&r>a;return{count:s,start:c,loop:t.loop,ilen:u<c&&!h?s+u-c:u-c}}function gk(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:c,ilen:u}=Py(i,e,s),h=pk(r);let{move:d=!0,reverse:p}=s||{},m,_,v;for(m=0;m<=u;++m)_=i[(a+(p?u-m:m))%o],!_.skip&&(d?(n.moveTo(_.x,_.y),d=!1):h(n,v,_,p,r.stepped),v=_);return c&&(_=i[(a+(p?u:0))%o],h(n,v,_,p,r.stepped)),!!c}function mk(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=Py(i,e,s),{move:c=!0,reverse:u}=s||{};let h=0,d=0,p,m,_,v,b,I;const S=k=>(o+(u?a-k:k))%r,D=()=>{v!==b&&(n.lineTo(h,b),n.lineTo(h,v),n.lineTo(h,I))};for(c&&(m=i[S(0)],n.moveTo(m.x,m.y)),p=0;p<=a;++p){if(m=i[S(p)],m.skip)continue;const k=m.x,O=m.y,M=k|0;M===_?(O<v?v=O:O>b&&(b=O),h=(d*h+k)/++d):(D(),n.lineTo(k,O),_=M,d=0,v=b=O),I=O}D()}function Nl(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?mk:gk}function _k(n){return n.stepped?gR:n.tension||n.cubicInterpolationMode==="monotone"?mR:os}function yk(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),ky(n,t.options),n.stroke(i)}function vk(n,t,e,s){const{segments:i,options:r}=t,o=Nl(t);for(const a of i)ky(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const bk=typeof Path2D=="function";function xk(n,t,e,s){bk&&!t.options.segment?yk(n,t,e,s):vk(n,t,e,s)}class Dn extends Le{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;aR(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=wR(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=my(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],c=_k(s);let u,h;for(u=0,h=o.length;u<h;++u){const{start:d,end:p}=o[u],m=r[d],_=r[p];if(m===_){a.push(m);continue}const v=Math.abs((i-m[e])/(_[e]-m[e])),b=c(m,_,v,s.stepped);b[e]=t[e],a.push(b)}return a.length===1?a[0]:a}pathSegment(t,e,s){return Nl(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=Nl(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),xk(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}U(Dn,"id","line"),U(Dn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),U(Dn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),U(Dn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Cp(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class Ho extends Le{constructor(e){super();U(this,"parsed");U(this,"skip");U(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return Cp(this,e,"x",s)}inYRange(e,s){return Cp(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!un(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,Dl(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}U(Ho,"id","point"),U(Ho,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),U(Ho,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Dy(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,u,h,d;return n.horizontal?(d=o/2,a=Math.min(e,i),c=Math.max(e,i),u=s-d,h=s+d):(d=r/2,a=e-d,c=e+d,u=Math.min(s,i),h=Math.max(s,i)),{left:a,top:u,right:c,bottom:h}}function On(n,t,e,s){return n?0:Ut(t,e,s)}function wk(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=ry(s);return{t:On(i.top,r.top,0,e),r:On(i.right,r.right,0,t),b:On(i.bottom,r.bottom,0,e),l:On(i.left,r.left,0,t)}}function Ek(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=hs(i),o=Math.min(t,e),a=n.borderSkipped,c=s||J(i);return{topLeft:On(!c||a.top||a.left,r.topLeft,0,o),topRight:On(!c||a.top||a.right,r.topRight,0,o),bottomLeft:On(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:On(!c||a.bottom||a.right,r.bottomRight,0,o)}}function Tk(n){const t=Dy(n),e=t.right-t.left,s=t.bottom-t.top,i=wk(n,e/2,s/2),r=Ek(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function Gc(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&Dy(n,s);return a&&(i||cn(t,a.left,a.right))&&(r||cn(e,a.top,a.bottom))}function Ik(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function Ak(n,t){n.rect(t.x,t.y,t.w,t.h)}function Kc(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class Wo extends Le{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=Tk(this),a=Ik(o.radius)?yr:Ak;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Kc(o,e,r)),t.clip(),a(t,Kc(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Kc(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return Gc(this,t,e,s)}inXRange(t,e){return Gc(this,t,null,e)}inYRange(t,e){return Gc(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}U(Wo,"id","bar"),U(Wo,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),U(Wo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var Sk=Object.freeze({__proto__:null,ArcElement:Hi,BarElement:Wo,LineElement:Dn,PointElement:Ho});const Vl=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],kp=Vl.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Oy(n){return Vl[n%Vl.length]}function My(n){return kp[n%kp.length]}function Rk(n,t){return n.borderColor=Oy(t),n.backgroundColor=My(t),++t}function Ck(n,t){return n.backgroundColor=n.data.map(()=>Oy(t++)),t}function kk(n,t){return n.backgroundColor=n.data.map(()=>My(t++)),t}function Pk(n){let t=0;return(e,s)=>{const i=n.getDatasetMeta(s).controller;i instanceof cs?t=Ck(e,t):i instanceof sr?t=kk(e,t):i&&(t=Rk(e,t))}}function Pp(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function Dk(n){return n&&(n.borderColor||n.backgroundColor)}function Ok(){return Et.borderColor!=="rgba(0,0,0,0.1)"||Et.backgroundColor!=="rgba(0,0,0,0.1)"}var Mk={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=n.config,{elements:r}=i,o=Pp(s)||Dk(i)||r&&Pp(r)||Ok();if(!e.forceOverride&&o)return;const a=Pk(n);s.forEach(a)}};function Lk(n,t,e,s,i){const r=i.samples||s;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const u=t+e-1;let h=t,d,p,m,_,v;for(o[c++]=n[h],d=0;d<r-2;d++){let b=0,I=0,S;const D=Math.floor((d+1)*a)+1+t,k=Math.min(Math.floor((d+2)*a)+1,e)+t,O=k-D;for(S=D;S<k;S++)b+=n[S].x,I+=n[S].y;b/=O,I/=O;const M=Math.floor(d*a)+1+t,E=Math.min(Math.floor((d+1)*a)+1,e)+t,{x:y,y:w}=n[h];for(m=_=-1,S=M;S<E;S++)_=.5*Math.abs((y-b)*(n[S].y-w)-(y-n[S].x)*(I-w)),_>m&&(m=_,p=n[S],v=S);o[c++]=p,h=v}return o[c++]=n[u],o}function Nk(n,t,e,s){let i=0,r=0,o,a,c,u,h,d,p,m,_,v;const b=[],I=t+e-1,S=n[t].x,k=n[I].x-S;for(o=t;o<t+e;++o){a=n[o],c=(a.x-S)/k*s,u=a.y;const O=c|0;if(O===h)u<_?(_=u,d=o):u>v&&(v=u,p=o),i=(r*i+a.x)/++r;else{const M=o-1;if(!X(d)&&!X(p)){const E=Math.min(d,p),y=Math.max(d,p);E!==m&&E!==M&&b.push({...n[E],x:i}),y!==m&&y!==M&&b.push({...n[y],x:i})}o>0&&M!==m&&b.push(n[M]),b.push(a),h=O,r=0,_=v=u,d=p=m=o}}return b}function Ly(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Dp(n){n.data.datasets.forEach(t=>{Ly(t)})}function Vk(n,t){const e=t.length;let s=0,i;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:u}=r.getUserBounds();return c&&(s=Ut(ln(t,r.axis,o).lo,0,e-1)),u?i=Ut(ln(t,r.axis,a).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var Fk={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Dp(n);return}const s=n.width;n.data.datasets.forEach((i,r)=>{const{_data:o,indexAxis:a}=i,c=n.getDatasetMeta(r),u=o||i.data;if(zi([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const h=n.scales[c.xAxisID];if(h.type!=="linear"&&h.type!=="time"||n.options.parsing)return;let{start:d,count:p}=Vk(c,u);const m=e.threshold||4*s;if(p<=m){Ly(i);return}X(o)&&(i._data=u,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let _;switch(e.algorithm){case"lttb":_=Lk(u,d,p,s,e);break;case"min-max":_=Nk(u,d,p,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=_})},destroy(n){Dp(n)}};function Bk(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:c,end:u}=a;u=Qa(c,u,i);const h=Fl(e,i[c],i[u],a.loop);if(!t.segments){o.push({source:a,target:h,start:i[c],end:i[u]});continue}const d=my(t,h);for(const p of d){const m=Fl(e,r[p.start],r[p.end],p.loop),_=gy(a,i,m);for(const v of _)o.push({source:v,target:p,start:{[e]:Op(h,m,"start",Math.max)},end:{[e]:Op(h,m,"end",Math.min)}})}}return o}function Fl(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=ee(i),r=ee(r)),{property:n,start:i,end:r}}function Uk(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Qa(o,a,i);const c=i[o],u=i[a];s!==null?(r.push({x:c.x,y:s}),r.push({x:u.x,y:s})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:u.y}))}),r}function Qa(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Op(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function Ny(n,t){let e=[],s=!1;return wt(n)?(s=!0,e=n):e=Uk(n,t),e.length?new Dn({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Mp(n){return n&&n.fill!==!1}function $k(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!Ct(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function zk(n,t,e){const s=qk(n);if(J(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return Ct(i)&&Math.floor(i)===i?jk(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function jk(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function Hk(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:J(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function Wk(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:J(n)?s=n.value:s=t.getBaseValue(),s}function qk(n){const t=n.options,e=t.fill;let s=G(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function Gk(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=Kk(t,e);a.push(Ny({x:null,y:t.bottom},s));for(let c=0;c<r.length;c++){const u=r[c];for(let h=u.start;h<=u.end;h++)Yk(i,o[h],a)}return new Dn({points:i,options:{}})}function Kk(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function Yk(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:c}=Xk(r,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function Xk(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let u=0;u<r.length;u++){const h=r[u],d=o[h.start][e],p=o[h.end][e];if(cn(i,d,p)){a=i===d,c=i===p;break}}return{first:a,last:c,point:s}}class Vy{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:vt},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function Qk(n){const{chart:t,fill:e,line:s}=n;if(Ct(e))return Jk(t,e);if(e==="stack")return Gk(n);if(e==="shape")return!0;const i=Zk(n);return i instanceof Vy?i:Ny(i,s)}function Jk(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function Zk(n){return(n.scale||{}).getPointPositionForValue?eP(n):tP(n)}function tP(n){const{scale:t={},fill:e}=n,s=Hk(e,t);if(Ct(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function eP(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=Wk(e,t,r),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,r);return new Vy({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<i;++c)a.push(t.getPointPositionForValue(c,o));return a}function Yc(n,t,e){const s=Qk(t),{chart:i,index:r,line:o,scale:a,axis:c}=t,u=o.options,h=u.fill,d=u.backgroundColor,{above:p=d,below:m=d}=h||{},_=i.getDatasetMeta(r),v=_y(i,_);s&&o.points.length&&(Ga(n,e),nP(n,{line:o,target:s,above:p,below:m,area:e,scale:a,axis:c,clip:v}),Ka(n))}function nP(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:c}=t,u=e._loop?"angle":t.axis;n.save();let h=r;r!==i&&(u==="x"?(Lp(n,s,o.top),Xc(n,{line:e,target:s,color:i,scale:a,property:u,clip:c}),n.restore(),n.save(),Lp(n,s,o.bottom)):u==="y"&&(Np(n,s,o.left),Xc(n,{line:e,target:s,color:r,scale:a,property:u,clip:c}),n.restore(),n.save(),Np(n,s,o.right),h=i)),Xc(n,{line:e,target:s,color:h,scale:a,property:u,clip:c}),n.restore()}function Lp(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:u}=a,h=i[c],d=i[Qa(c,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(d.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Np(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:u}=a,h=i[c],d=i[Qa(c,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,d.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Xc(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,c=Bk(e,s,i);for(const{source:u,target:h,start:d,end:p}of c){const{style:{backgroundColor:m=r}={}}=u,_=s!==!0;n.save(),n.fillStyle=m,sP(n,o,a,_&&Fl(i,d,p)),n.beginPath();const v=!!e.pathSegment(n,u);let b;if(_){v?n.closePath():Vp(n,s,p,i);const I=!!s.pathSegment(n,h,{move:v,reverse:!0});b=v&&I,b||Vp(n,s,d,i)}n.closePath(),n.fill(b?"evenodd":"nonzero"),n.restore()}}function sP(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let c,u,h,d;r==="x"?(c=o,u=i.top,h=a,d=i.bottom):(c=i.left,u=o,h=i.right,d=a),n.beginPath(),e&&(c=Math.max(c,e.left),h=Math.min(h,e.right),u=Math.max(u,e.top),d=Math.min(d,e.bottom)),n.rect(c,u,h-c,d-u),n.clip()}}function Vp(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var iP={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,c;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof Dn&&(c={visible:n.isDatasetVisible(o),index:o,fill:zk(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,i.push(c);for(o=0;o<s;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=$k(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&Yc(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;Mp(r)&&Yc(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Mp(s)||e.drawTime!=="beforeDatasetDraw"||Yc(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Fp=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},rP=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Bp extends Le{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=ft(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=Ft(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Fp(s,r);let u,h;e.font=i.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,r,a,c)+10):(h=this.maxHeight,u=this._fitCols(o,i,a,c)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],u=this.lineWidths=[0],h=i+a;let d=t;r.textAlign="left",r.textBaseline="middle";let p=-1,m=-h;return this.legendItems.forEach((_,v)=>{const b=s+e/2+r.measureText(_.text).width;(v===0||u[u.length-1]+b+2*a>o)&&(d+=h,u[u.length-(v>0?0:1)]=0,m+=h,p++),c[v]={left:0,top:m,row:p,width:b,height:i},u[u.length-1]+=b+a}),d}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-t;let d=a,p=0,m=0,_=0,v=0;return this.legendItems.forEach((b,I)=>{const{itemWidth:S,itemHeight:D}=oP(s,e,r,b,i);I>0&&m+D+2*a>h&&(d+=p+a,u.push({width:p,height:m}),_+=p+a,v++,p=m=0),c[I]={left:_,top:m,col:v,width:S,height:D},p=Math.max(p,S),m+=D+a}),d+=p,u.push({width:p,height:m}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=Gs(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=Zt(s,this.left+i,this.right-this.lineWidths[a]);for(const u of e)a!==u.row&&(a=u.row,c=Zt(s,this.left+i,this.right-this.lineWidths[a])),u.top+=this.top+t+i,u.left=o.leftForLtr(o.x(c),u.width),c+=u.width+i}else{let a=0,c=Zt(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const u of e)u.col!==a&&(a=u.col,c=Zt(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),u.top=c,u.left+=this.left+i,u.left=o.leftForLtr(o.x(u.left),u.width),c+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Ga(t,this),this._draw(),Ka(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=Et.color,c=Gs(t.rtl,this.left,this.width),u=Ft(o.font),{padding:h}=o,d=u.size,p=d/2;let m;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:_,boxHeight:v,itemHeight:b}=Fp(o,d),I=function(M,E,y){if(isNaN(_)||_<=0||isNaN(v)||v<0)return;i.save();const w=G(y.lineWidth,1);if(i.fillStyle=G(y.fillStyle,a),i.lineCap=G(y.lineCap,"butt"),i.lineDashOffset=G(y.lineDashOffset,0),i.lineJoin=G(y.lineJoin,"miter"),i.lineWidth=w,i.strokeStyle=G(y.strokeStyle,a),i.setLineDash(G(y.lineDash,[])),o.usePointStyle){const A={radius:v*Math.SQRT2/2,pointStyle:y.pointStyle,rotation:y.rotation,borderWidth:w},R=c.xPlus(M,_/2),C=E+p;iy(i,A,R,C,o.pointStyleWidth&&_)}else{const A=E+Math.max((d-v)/2,0),R=c.leftForLtr(M,_),C=hs(y.borderRadius);i.beginPath(),Object.values(C).some(T=>T!==0)?yr(i,{x:R,y:A,w:_,h:v,radius:C}):i.rect(R,A,_,v),i.fill(),w!==0&&i.stroke()}i.restore()},S=function(M,E,y){bs(i,y.text,M,E+b/2,u,{strikethrough:y.hidden,textAlign:c.textAlign(y.textAlign)})},D=this.isHorizontal(),k=this._computeTitleHeight();D?m={x:Zt(r,this.left+h,this.right-s[0]),y:this.top+h+k,line:0}:m={x:this.left+h,y:Zt(r,this.top+k+h,this.bottom-e[0].height),line:0},dy(this.ctx,t.textDirection);const O=b+h;this.legendItems.forEach((M,E)=>{i.strokeStyle=M.fontColor,i.fillStyle=M.fontColor;const y=i.measureText(M.text).width,w=c.textAlign(M.textAlign||(M.textAlign=o.textAlign)),A=_+p+y;let R=m.x,C=m.y;c.setWidth(this.width),D?E>0&&R+A+h>this.right&&(C=m.y+=O,m.line++,R=m.x=Zt(r,this.left+h,this.right-s[m.line])):E>0&&C+O>this.bottom&&(R=m.x=R+e[m.line].width+h,m.line++,C=m.y=Zt(r,this.top+k+h,this.bottom-e[m.line].height));const T=c.x(R);if(I(T,C,M),R=IS(w,R+_+p,D?R+A:this.right,t.rtl),S(c.x(R),C,M),D)m.x+=A+h;else if(typeof M.text!="string"){const lt=u.lineHeight;m.y+=Fy(M,lt)+h}else m.y+=O}),fy(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=Ft(e.font),i=re(e.padding);if(!e.display)return;const r=Gs(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,u=i.top+c;let h,d=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),h=this.top+u,d=Zt(t.align,d,this.right-p);else{const _=this.columnSizes.reduce((v,b)=>Math.max(v,b.height),0);h=u+Zt(t.align,this.top,this.bottom-_-t.labels.padding-this._computeTitleHeight())}const m=Zt(a,d,d+p);o.textAlign=r.textAlign(th(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,bs(o,e.text,m,h,s)}_computeTitleHeight(){const t=this.options.title,e=Ft(t.font),s=re(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(cn(t,this.left,this.right)&&cn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],cn(t,i.left,i.left+i.width)&&cn(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!lP(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=rP(i,s);i&&!r&&ft(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&ft(e.onHover,[t,s,this],this)}else s&&ft(e.onClick,[t,s,this],this)}}function oP(n,t,e,s,i){const r=aP(s,n,t,e),o=cP(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function aP(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function cP(n,t,e){let s=n;return typeof t.text!="string"&&(s=Fy(t,e)),s}function Fy(n,t){const e=n.text?n.text.length:0;return t*e}function lP(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var uP={id:"legend",_element:Bp,start(n,t,e){const s=n.legend=new Bp({ctx:n.ctx,options:e,chart:n});se.configure(n,s,e),se.addBox(n,s)},stop(n){se.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;se.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const u=c.controller.getStyle(e?0:void 0),h=re(u.borderWidth);return{text:t[c.index].label,fillStyle:u.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:s||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class lh extends Le{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=wt(s.text)?s.text.length:1;this._padding=re(s.padding);const r=i*Ft(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:r,options:o}=this,a=o.align;let c=0,u,h,d;return this.isHorizontal()?(h=Zt(a,s,r),d=e+t,u=r-s):(o.position==="left"?(h=s+t,d=Zt(a,i,e),c=rt*-.5):(h=r-t,d=Zt(a,e,i),c=rt*.5),u=i-e),{titleX:h,titleY:d,maxWidth:u,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=Ft(e.font),r=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:u}=this._drawArgs(r);bs(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:u,textAlign:th(e.align),textBaseline:"middle",translation:[o,a]})}}function hP(n,t){const e=new lh({ctx:n.ctx,options:t,chart:n});se.configure(n,e,t),se.addBox(n,e),n.titleBlock=e}var dP={id:"title",_element:lh,start(n,t,e){hP(n,e)},stop(n){const t=n.titleBlock;se.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;se.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const wo=new WeakMap;var fP={id:"subtitle",start(n,t,e){const s=new lh({ctx:n.ctx,options:e,chart:n});se.configure(n,s,e),se.addBox(n,s),wo.set(n,s)},stop(n){se.removeBox(n,wo.get(n)),wo.delete(n)},beforeUpdate(n,t,e){const s=wo.get(n);se.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Wi={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),i+=c.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const u=c.getCenterPoint(),h=kl(t,u);h<i&&(i=h,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function Ve(n,t){return t&&(wt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function en(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function pP(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Up(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=Ft(t.bodyFont),u=Ft(t.titleFont),h=Ft(t.footerFont),d=r.length,p=i.length,m=s.length,_=re(t.padding);let v=_.height,b=0,I=s.reduce((k,O)=>k+O.before.length+O.lines.length+O.after.length,0);if(I+=n.beforeBody.length+n.afterBody.length,d&&(v+=d*u.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),I){const k=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;v+=m*k+(I-m)*c.lineHeight+(I-1)*t.bodySpacing}p&&(v+=t.footerMarginTop+p*h.lineHeight+(p-1)*t.footerSpacing);let S=0;const D=function(k){b=Math.max(b,e.measureText(k).width+S)};return e.save(),e.font=u.string,ot(n.title,D),e.font=c.string,ot(n.beforeBody.concat(n.afterBody),D),S=t.displayColors?o+2+t.boxPadding:0,ot(s,k=>{ot(k.before,D),ot(k.lines,D),ot(k.after,D)}),S=0,e.font=h.string,ot(n.footer,D),e.restore(),b+=_.width,{width:b,height:v}}function gP(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function mP(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function _P(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let u="center";return s==="center"?u=i<=(a+c)/2?"left":"right":i<=r/2?u="left":i>=o-r/2&&(u="right"),mP(u,n,t,e)&&(u="center"),u}function $p(n,t,e){const s=e.yAlign||t.yAlign||gP(n,e);return{xAlign:e.xAlign||t.xAlign||_P(n,t,e,s),yAlign:s}}function yP(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function vP(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function zp(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,u=i+r,{topLeft:h,topRight:d,bottomLeft:p,bottomRight:m}=hs(o);let _=yP(t,a);const v=vP(t,c,u);return c==="center"?a==="left"?_+=u:a==="right"&&(_-=u):a==="left"?_-=Math.max(h,p)+i:a==="right"&&(_+=Math.max(d,m)+i),{x:Ut(_,0,s.width-t.width),y:Ut(v,0,s.height-t.height)}}function Eo(n,t,e){const s=re(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function jp(n){return Ve([],en(n))}function bP(n,t,e){return Kn(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Hp(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const By={beforeTitle:Ze,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:Ze,beforeBody:Ze,beforeLabel:Ze,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return X(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Ze,afterBody:Ze,beforeFooter:Ze,footer:Ze,afterFooter:Ze};function he(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?By[t].call(e,s):i}class Bl extends Le{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new yy(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=bP(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=he(s,"beforeTitle",this,t),r=he(s,"title",this,t),o=he(s,"afterTitle",this,t);let a=[];return a=Ve(a,en(i)),a=Ve(a,en(r)),a=Ve(a,en(o)),a}getBeforeBody(t,e){return jp(he(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return ot(t,r=>{const o={before:[],lines:[],after:[]},a=Hp(s,r);Ve(o.before,en(he(a,"beforeLabel",this,r))),Ve(o.lines,he(a,"label",this,r)),Ve(o.after,en(he(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return jp(he(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=he(s,"beforeFooter",this,t),r=he(s,"footer",this,t),o=he(s,"afterFooter",this,t);let a=[];return a=Ve(a,en(i)),a=Ve(a,en(r)),a=Ve(a,en(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],c,u;for(c=0,u=e.length;c<u;++c)a.push(pP(this.chart,e[c]));return t.filter&&(a=a.filter((h,d,p)=>t.filter(h,d,p,s))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,s))),ot(a,h=>{const d=Hp(t.callbacks,h);i.push(he(d,"labelColor",this,h)),r.push(he(d,"labelPointStyle",this,h)),o.push(he(d,"labelTextColor",this,h))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=Wi[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Up(this,s),u=Object.assign({},a,c),h=$p(this.chart,s,u),d=zp(s,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:u,bottomLeft:h,bottomRight:d}=hs(a),{x:p,y:m}=t,{width:_,height:v}=e;let b,I,S,D,k,O;return r==="center"?(k=m+v/2,i==="left"?(b=p,I=b-o,D=k+o,O=k-o):(b=p+_,I=b+o,D=k-o,O=k+o),S=b):(i==="left"?I=p+Math.max(c,h)+o:i==="right"?I=p+_-Math.max(u,d)-o:I=this.caretX,r==="top"?(D=m,k=D-o,b=I-o,S=I+o):(D=m+v,k=D+o,b=I+o,S=I-o),O=D),{x1:b,x2:I,x3:S,y1:D,y2:k,y3:O}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,c;if(r){const u=Gs(s.rtl,this.x,this.width);for(t.x=Eo(this,s.titleAlign,s),e.textAlign=u.textAlign(s.titleAlign),e.textBaseline="middle",o=Ft(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(i[c],u.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:u}=r,h=Ft(r.bodyFont),d=Eo(this,"left",r),p=i.x(d),m=c<h.lineHeight?(h.lineHeight-c)/2:0,_=e.y+m;if(r.usePointStyle){const v={radius:Math.min(u,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},b=i.leftForLtr(p,u)+u/2,I=_+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Dl(t,v,b,I),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Dl(t,v,b,I)}else{t.lineWidth=J(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=i.leftForLtr(p,u),b=i.leftForLtr(i.xPlus(p,1),u-2),I=hs(o.borderRadius);Object.values(I).some(S=>S!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,yr(t,{x:v,y:_,w:u,h:c,radius:I}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),yr(t,{x:b,y:_+1,w:u-2,h:c-2,radius:I}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(v,_,u,c),t.strokeRect(v,_,u,c),t.fillStyle=o.backgroundColor,t.fillRect(b,_+1,u-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:u,boxPadding:h}=s,d=Ft(s.bodyFont);let p=d.lineHeight,m=0;const _=Gs(s.rtl,this.x,this.width),v=function(y){e.fillText(y,_.x(t.x+m),t.y+p/2),t.y+=p+r},b=_.textAlign(o);let I,S,D,k,O,M,E;for(e.textAlign=o,e.textBaseline="middle",e.font=d.string,t.x=Eo(this,b,s),e.fillStyle=s.bodyColor,ot(this.beforeBody,v),m=a&&b!=="right"?o==="center"?u/2+h:u+2+h:0,k=0,M=i.length;k<M;++k){for(I=i[k],S=this.labelTextColors[k],e.fillStyle=S,ot(I.before,v),D=I.lines,a&&D.length&&(this._drawColorBox(e,t,k,_,s),p=Math.max(d.lineHeight,c)),O=0,E=D.length;O<E;++O)v(D[O]),p=d.lineHeight;ot(I.after,v)}m=0,p=d.lineHeight,ot(this.afterBody,v),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const c=Gs(s.rtl,this.x,this.width);for(t.x=Eo(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=Ft(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:u,height:h}=s,{topLeft:d,topRight:p,bottomLeft:m,bottomRight:_}=hs(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+d,c),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+u-p,c),e.quadraticCurveTo(a+u,c,a+u,c+p),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+u,c+h-_),e.quadraticCurveTo(a+u,c+h,a+u-_,c+h),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+m,c+h),e.quadraticCurveTo(a,c+h,a,c+h-m),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,c+d),e.quadraticCurveTo(a,c,a+d,c),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=Wi[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Up(this,t),c=Object.assign({},o,this._size),u=$p(e,t,c),h=zp(t,c,u,e);(i._to!==h.x||r._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=re(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),dy(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),fy(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:c})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[c],index:c}}),r=!da(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),c=e||!da(o,r)||a;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=Wi[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}U(Bl,"positioners",Wi);var xP={id:"tooltip",_element:Bl,positioners:Wi,afterInit(n,t,e){e&&(n.tooltip=new Bl({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:By},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},wP=Object.freeze({__proto__:null,Colors:Mk,Decimation:Fk,Filler:iP,Legend:uP,SubTitle:fP,Title:dP,Tooltip:xP});const EP=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function TP(n,t,e,s){const i=n.indexOf(t);if(i===-1)return EP(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const IP=(n,t)=>n===null?null:Ut(Math.round(n),0,t);function Wp(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Ul extends As{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(X(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:TP(s,t,G(e,t),this._addedLabels),IP(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return Wp.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}U(Ul,"id","category"),U(Ul,"defaults",{ticks:{callback:Wp}});function AP(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:c,count:u,maxTicks:h,maxDigits:d,includeBounds:p}=n,m=r||1,_=h-1,{min:v,max:b}=t,I=!X(o),S=!X(a),D=!X(u),k=(b-v)/(d+1);let O=Uf((b-v)/_/m)*m,M,E,y,w;if(O<1e-14&&!I&&!S)return[{value:v},{value:b}];w=Math.ceil(b/O)-Math.floor(v/O),w>_&&(O=Uf(w*O/_/m)*m),X(c)||(M=Math.pow(10,c),O=Math.ceil(O*M)/M),i==="ticks"?(E=Math.floor(v/O)*O,y=Math.ceil(b/O)*O):(E=v,y=b),I&&S&&r&&yS((a-o)/r,O/1e3)?(w=Math.round(Math.min((a-o)/O,h)),O=(a-o)/w,E=o,y=a):D?(E=I?o:E,y=S?a:y,w=u-1,O=(y-E)/w):(w=(y-E)/O,tr(w,Math.round(w),O/1e3)?w=Math.round(w):w=Math.ceil(w));const A=Math.max($f(O),$f(E));M=Math.pow(10,X(c)?A:c),E=Math.round(E*M)/M,y=Math.round(y*M)/M;let R=0;for(I&&(p&&E!==o?(e.push({value:o}),E<o&&R++,tr(Math.round((E+R*O)*M)/M,o,qp(o,k,n))&&R++):E<o&&R++);R<w;++R){const C=Math.round((E+R*O)*M)/M;if(S&&C>a)break;e.push({value:C})}return S&&p&&y!==a?e.length&&tr(e[e.length-1].value,a,qp(a,k,n))?e[e.length-1].value=a:e.push({value:a}):(!S||y===a)&&e.push({value:y}),e}function qp(n,t,{horizontal:e,minRotation:s}){const i=ke(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class va extends As{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return X(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=c=>i=e?i:c,a=c=>r=s?r:c;if(t){const c=We(i),u=We(r);c<0&&u<0?a(0):c>0&&u>0&&o(0)}if(i===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(i-c)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=AP(i,r);return t.bounds==="ticks"&&Y_(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Vr(t,this.chart.options.locale,this.options.ticks.format)}}class $l extends va{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ct(t)?t:0,this.max=Ct(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=ke(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}U($l,"id","linear"),U($l,"defaults",{ticks:{callback:qa.formatters.numeric}});const br=n=>Math.floor(kn(n)),ns=(n,t)=>Math.pow(10,br(n)+t);function Gp(n){return n/Math.pow(10,br(n))===1}function Kp(n,t,e){const s=Math.pow(10,e),i=Math.floor(n/s);return Math.ceil(t/s)-i}function SP(n,t){const e=t-n;let s=br(e);for(;Kp(n,t,s)>10;)s++;for(;Kp(n,t,s)<10;)s--;return Math.min(s,br(n))}function RP(n,{min:t,max:e}){t=ye(n.min,t);const s=[],i=br(t);let r=SP(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=i>r?Math.pow(10,i):0,u=Math.round((t-c)*o)/o,h=Math.floor((t-c)/a/10)*a*10;let d=Math.floor((u-h)/Math.pow(10,r)),p=ye(n.min,Math.round((c+h+d*Math.pow(10,r))*o)/o);for(;p<e;)s.push({value:p,major:Gp(p),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(r++,d=2,o=r>=0?1:o),p=Math.round((c+h+d*Math.pow(10,r))*o)/o;const m=ye(n.max,p);return s.push({value:m,major:Gp(m),significand:d}),s}class zl extends As{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=va.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return Ct(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ct(t)?Math.max(0,t):null,this.max=Ct(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ct(this._userMin)&&(this.min=t===ns(this.min,0)?ns(this.min,-1):ns(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const r=a=>s=t?s:a,o=a=>i=e?i:a;s===i&&(s<=0?(r(1),o(10)):(r(ns(s,-1)),o(ns(i,1)))),s<=0&&r(ns(i,-1)),i<=0&&o(ns(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=RP(e,this);return t.bounds==="ticks"&&Y_(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Vr(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=kn(t),this._valueRange=kn(this.max)-kn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(kn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}U(zl,"id","logarithmic"),U(zl,"defaults",{ticks:{callback:qa.formatters.logarithmic,major:{enabled:!0}}});function jl(n){const t=n.ticks;if(t.display&&n.display){const e=re(t.backdropPadding);return G(t.font&&t.font.size,Et.font.size)+e.height}return 0}function CP(n,t,e){return e=wt(e)?e:[e],{w:LS(n,t.string,e),h:e.length*t.lineHeight}}function Yp(n,t,e,s,i){return n===s||n===i?{start:t-e/2,end:t+e/2}:n<s||n>i?{start:t-e,end:t}:{start:t,end:t+e}}function kP(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],i=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?rt/r:0;for(let c=0;c<r;c++){const u=o.setContext(n.getPointLabelContext(c));i[c]=u.padding;const h=n.getPointPosition(c,n.drawingArea+i[c],a),d=Ft(u.font),p=CP(n.ctx,d,n._pointLabels[c]);s[c]=p;const m=ee(n.getIndexAngle(c)+a),_=Math.round(Ju(m)),v=Yp(_,h.x,p.w,0,180),b=Yp(_,h.y,p.h,90,270);PP(e,t,m,v,b)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=MP(n,s,i)}function PP(n,t,e,s,i){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/r,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),i.start<t.t?(c=(t.t-i.start)/o,n.t=Math.min(n.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function DP(n,t,e){const s=n.drawingArea,{extra:i,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,s+i+o,r),u=Math.round(Ju(ee(c.angle+Dt))),h=VP(c.y,a.h,u),d=LP(u),p=NP(c.x,a.w,d);return{visible:!0,x:c.x,y:h,textAlign:d,left:p,top:h,right:p+a.w,bottom:h+a.h}}function OP(n,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:r}=n;return!(un({x:e,y:s},t)||un({x:e,y:r},t)||un({x:i,y:s},t)||un({x:i,y:r},t))}function MP(n,t,e){const s=[],i=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:jl(r)/2,additionalAngle:o?rt/i:0};let u;for(let h=0;h<i;h++){c.padding=e[h],c.size=t[h];const d=DP(n,h,c);s.push(d),a==="auto"&&(d.visible=OP(d,u),d.visible&&(u=d))}return s}function LP(n){return n===0||n===180?"center":n<180?"left":"right"}function NP(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function VP(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function FP(n,t,e){const{left:s,top:i,right:r,bottom:o}=e,{backdropColor:a}=t;if(!X(a)){const c=hs(t.borderRadius),u=re(t.backdropPadding);n.fillStyle=a;const h=s-u.left,d=i-u.top,p=r-s+u.width,m=o-i+u.height;Object.values(c).some(_=>_!==0)?(n.beginPath(),yr(n,{x:h,y:d,w:p,h:m,radius:c}),n.fill()):n.fillRect(h,d,p,m)}}function BP(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let i=t-1;i>=0;i--){const r=n._pointLabelItems[i];if(!r.visible)continue;const o=s.setContext(n.getPointLabelContext(i));FP(e,o,r);const a=Ft(o.font),{x:c,y:u,textAlign:h}=r;bs(e,n._pointLabels[i],c,u+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function Uy(n,t,e,s){const{ctx:i}=n;if(e)i.arc(n.xCenter,n.yCenter,t,0,vt);else{let r=n.getPointPosition(0,t);i.moveTo(r.x,r.y);for(let o=1;o<s;o++)r=n.getPointPosition(o,t),i.lineTo(r.x,r.y)}}function UP(n,t,e,s,i){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(i.dash||[]),r.lineDashOffset=i.dashOffset,r.beginPath(),Uy(n,e,o,s),r.closePath(),r.stroke(),r.restore())}function $P(n,t,e){return Kn(n,{label:e,index:t,type:"pointLabel"})}class qi extends va{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=re(jl(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Ct(t)&&!isNaN(t)?t:0,this.max=Ct(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/jl(this.options))}generateTickLabels(t){va.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=ft(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?kP(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=vt/(this._pointLabels.length||1),s=this.options.startAngle||0;return ee(t*e+ke(s))}getDistanceFromCenterForValue(t){if(X(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(X(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return $P(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-Dt+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Uy(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:r}=e,o=this._pointLabels.length;let a,c,u;if(e.pointLabels.display&&BP(this,o),i.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){c=this.getDistanceFromCenterForValue(h.value);const p=this.getContext(d),m=i.setContext(p),_=r.setContext(p);UP(this,m,c,o,_)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const h=s.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:p}=h;!p||!d||(t.lineWidth=p,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),u=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(u.x,u.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const u=s.setContext(this.getContext(c)),h=Ft(u.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),u.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=u.backdropColor;const d=re(u.backdropPadding);t.fillRect(-o/2-d.left,-r-h.size/2-d.top,o+d.width,h.size+d.height)}bs(t,a.label,0,-r,h,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),t.restore()}drawTitle(){}}U(qi,"id","radialLinear"),U(qi,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:qa.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),U(qi,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),U(qi,"descriptors",{angleLines:{_fallback:"grid"}});const Ja={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},me=Object.keys(Ja);function Xp(n,t){return n-t}function Qp(n,t){if(X(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),Ct(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(si(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function Jp(n,t,e,s){const i=me.length;for(let r=me.indexOf(n);r<i-1;++r){const o=Ja[me[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return me[r]}return me[i-1]}function zP(n,t,e,s,i){for(let r=me.length-1;r>=me.indexOf(e);r--){const o=me[r];if(Ja[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return me[e?me.indexOf(e):0]}function jP(n){for(let t=me.indexOf(n)+1,e=me.length;t<e;++t)if(Ja[me[t]].common)return me[t]}function Zp(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=Zu(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function HP(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+i.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function tg(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:HP(n,s,i,e)}class xr extends As{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new JR._date(t.adapters.date);i.init(e),Zi(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Qp(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(u){!o&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!a&&!isNaN(u.max)&&(r=Math.max(r,u.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=Ct(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=Ct(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=wS(i,r,o);return this._unit=e.unit||(s.autoSkip?Jp(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):zP(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:jP(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),tg(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Ut(e,0,o),s=Ut(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||Jp(r.minUnit,e,s,this._getLabelCapacity(e)),a=G(i.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,u=si(c)||c===!0,h={};let d=e,p,m;if(u&&(d=+t.startOf(d,"isoWeek",c)),d=+t.startOf(d,u?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const _=i.ticks.source==="data"&&this.getDataTimestamps();for(p=d,m=0;p<s;p=+t.add(p,a,o),m++)Zp(h,p,_);return(p===s||i.bounds==="ticks"||m===1)&&Zp(h,p,_),Object.keys(h).sort(Xp).map(v=>+v)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return ft(o,[t,e,s],this);const a=r.time.displayFormats,c=this._unit,u=this._majorUnit,h=c&&a[c],d=u&&a[u],p=s[e],m=u&&d&&p&&p.major;return this._adapter.format(t,i||(m?d:h))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=ke(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,tg(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(Qp(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return J_(t.sort(Xp))}}U(xr,"id","time"),U(xr,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function To(n,t,e){let s=0,i=n.length-1,r,o,a,c;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=ln(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:c}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=ln(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:c}=n[i]);const u=o-r;return u?a+(c-a)*(t-r)/u:a}class Hl extends xr{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=To(e,this.min),this._tableRange=To(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,c,u,h;for(o=0,a=t.length;o<a;++o)u=t[o],u>=e&&u<=s&&i.push(u);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)h=i[o+1],c=i[o-1],u=i[o],Math.round((h+c)/2)!==u&&r.push({time:u,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(To(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return To(this._table,s*this._tableRange+this._minPos,!0)}}U(Hl,"id","timeseries"),U(Hl,"defaults",xr.defaults);var WP=Object.freeze({__proto__:null,CategoryScale:Ul,LinearScale:$l,LogarithmicScale:zl,RadialLinearScale:qi,TimeScale:xr,TimeSeriesScale:Hl});const qP=[QR,Sk,wP,WP];at.register(...qP);const Di="rgba(255,255,255,0.08)",Ns="#a1a1aa",Re={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};at.defaults.color="#e5e5e5";at.defaults.font.family=Re.family;at.defaults.font.weight=Re.weight;const Io={renderCurvaS:(n,t=[],e=[])=>{const s=document.getElementById(n);if(!s)return;s.chart&&s.chart.destroy();const i=t.map((r,o)=>`M${o+1}`);s.chart=new at(s,{type:"line",data:{labels:i,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Re,usePointStyle:!0}}},scales:{x:{grid:{color:Di},ticks:{color:Ns,font:Re}},y:{grid:{color:Di},ticks:{color:Ns,font:Re}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Di},ticks:{color:Ns,font:Re}},y:{grid:{color:Di},ticks:{color:Ns,font:Re}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Re,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Ns,font:Re}},y:{grid:{color:Di},ticks:{color:Ns,font:Re,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Re,padding:12,usePointStyle:!0}}}}})}},de={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>'},Y={render:n=>{const t=document.getElementById("app"),e=pt.state.currentUser;if(!e){t.innerHTML=n;return}const s=pt.state.sidebarCollapsed,i=pt.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${Y.createNavItem("/","Dashboard",de.dashboard,s)}
                        ${Y.createNavItem("/compras","Compras",de.shoppingCart,s)}
                        ${Y.createNavItem("/relatorios","Relatórios",de.clipboard,s)}
                        ${Y.createNavItem("/obras","Obras",de.chart,s)}
                        ${Y.createNavItem("/cadastros","Cadastros",de.settings,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${Y.createNavItem("/configuracoes","Configurações",de.settings,s)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display">
                            ${de.logout}
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
                                ${de.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${de.search}
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
                                ${i==="dark"?de.sun:de.moon}
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
        `,Y.bindEvents()},createNavItem:(n,t,e,s)=>{var o;const r=mt.currentRoute===n||((o=mt.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${r}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{pt.toggleSidebar();const s=document.getElementById("sidebar"),i=s.querySelectorAll("span"),r=s.querySelector("[data-logo-text]");pt.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),i.forEach(o=>o.classList.add("hidden")),r&&r.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),i.forEach(o=>o.classList.remove("hidden")),r&&r.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const i=pt.state.currentTheme==="dark"?"light":"dark";pt.setTheme(i);const r=document.getElementById("btn-theme-toggle");r.innerHTML=i==="dark"?de.sun:de.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await ha.logout(),mt.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var i;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(i=document.getElementById("global-search"))==null||i.focus())})}},GP="modulepreload",KP=function(n){return"/"+n},eg={},Wl=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=KP(c),c in eg)return;eg[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":GP,u||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},Ce={getObras:async()=>(await _t(Tt(nt,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await _t(Tt(nt,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await Ou(Tt(nt,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await ei(Ie(nt,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await eE(Ie(nt,"obras",n))},getObraStats:async(n,t=!1)=>{const e=Tt(nt,"compras"),s=fe(e,Vt("obraId","==",n)),r=(await _t(s)).docs.map(M=>({id:M.id,...M.data()}));let o=0;const a={},c={},u={};let h=0,d=0,p=0,m=0,_=0;const v={},b={};r.forEach(M=>{const E=Number(M.valor_estimado||M.valor_total||0);o+=E,a[M.status_compra]=(a[M.status_compra]||0)+1;const y=M.previsao_entrega?new Date(M.previsao_entrega):null,w=M.data_recebimento?new Date(M.data_recebimento):null;if(M.status_compra!=="Entregue"&&y&&y<new Date&&h++,w&&y&&(d++,w<=y&&p++),M.data_emissao&&(w||y)){const T=w||y,lt=Math.max(0,(new Date(T)-new Date(M.data_emissao))/(1e3*60*60*24));m+=lt,_++}const A=M.categoria||"Outros";c[A]=(c[A]||0)+E;const R=(M.natureza_compra||"Outros").trim();v[R]=(v[R]||0)+E;const C=M.centroCustoNome||M.centro_custo||M.centroCustoId||"N/D";if(b[C]=(b[C]||0)+E,M.data_solicitacao){const T=new Date(M.data_solicitacao),lt=`${T.getFullYear()}-${String(T.getMonth()+1).padStart(2,"0")}`;u[lt]=(u[lt]||0)+E}});const I=Object.keys(u).length||1,S=Ce.calculateCurvaS(o,I,u),D=d?p/d*100:0,k=_?m/_:0,O={totalCompras:r.length,totalGasto:o,porStatus:a,gastosPorCategoria:c,gastosMensais:u,curvaS:S,comprasRecentes:r.slice(0,10),atrasos:h,sla:D,lead:k,naturezaTotais:v,ccTotais:b};if(t)try{const{RDOService:M}=await Wl(async()=>{const{RDOService:y}=await Promise.resolve().then(()=>zy);return{RDOService:y}},void 0),E=await Ce.getObraById(n);if(E!=null&&E.numero_os){const y=new Date().toISOString().split("T")[0],w=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],A=await M.getByObra(E.numero_os,w,y);A&&A.length>0&&(O.rdoData=M.processRDOData(A))}}catch(M){console.warn("Erro ao buscar dados RDO:",M)}return O},calculateCurvaS:(n,t,e)=>{const s=[],i=[];let r=0;const o=Object.keys(e).sort();for(let a=0;a<t;a++){const c=(a+1)/t,u=1/(1+Math.exp(-10*(c-.5)));s.push(n*u),o[a]&&(r+=e[o[a]]),i.push(r)}return{planejado:s,realizado:i}}},YP={init:async()=>{var t;const n=pt.state.currentUser;if(n){Y.render(F.createLoader());try{let e="";if(n.role==="comprador"){const s=await Os.getCompradorStats();e=Nc.renderComprador(s),Y.render(e)}else if(n.role==="obra"||n.role==="engenheiro"){const s=n.obraPadrao||null,i=await Os.getObraStats(s);e=Nc.renderObra(i),Y.render(e)}else{const s=await Os.getDiretorStats(),i=await((t=Os.getObras)==null?void 0:t.call(Os))||await Ce.getObras(),r=Ce.calculateCurvaS(s.totalGasto,Math.max(Object.keys(s.gastosPorMes||{}).length,3),s.gastosPorMes||{});e=Nc.renderDiretor({...s,curvaS:r,obras:i}),Y.render(e),setTimeout(()=>{r&&Io.renderCurvaS("chart-curva",r.planejado,r.realizado),Io.renderStatusPie("chart-status",s.porStatus),s.naturezaTotais&&Io.renderNatureza("chart-natureza-dir",s.naturezaTotais),s.ccTotais&&Io.renderCentrosCusto("chart-cc-dir",s.ccTotais)},100)}}catch(e){console.error(e),Y.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${e.message}</div>`)}}}},Oi={checkDuplicidade:async(n,t)=>{const e=fe(Tt(nt,"compras"),Vt("obraId","==",n),Vt("status_compra","in",["Pendente","Em Cotação"]));return(await _t(e)).docs.filter(r=>{const o=r.data(),a=(o.descricao||"").toLowerCase(),c=o.itens||[],u=t.toLowerCase();return a.includes(u)||c.some(h=>h.nome.toLowerCase().includes(u))}).length>0},uploadArquivo:(n,t,e)=>new Promise((s,i)=>{const r=fT(VA,t),o=hT(r,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>i(a),async()=>{const a=await dT(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t={...n,data_solicitacao:Ot.now().toDate().toISOString(),status_compra:"Pendente",created_at:Ot.now()};return(await Ou(Tt(nt,"compras"),t)).id},atualizarCompra:async(n,t)=>{const e=Ie(nt,"compras",n);await ei(e,t)},getCompra:async n=>{const t=await El(Ie(nt,"compras",n));return t.exists()?{id:t.id,...t.data()}:null}},ng={renderForm:(n=[],t=[],e=null)=>`
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
        `},ba={init:async()=>{Y.render(F.createLoader());try{const[n,t]=await Promise.all([_t(Tt(nt,"obras")),_t(Tt(nt,"fornecedores"))]),e=n.docs.map(i=>({id:i.id,...i.data()})),s=t.docs.map(i=>({id:i.id,...i.data()}));Y.render(ng.renderForm(e,s)),ba.bindEvents()}catch(n){console.error(n),Y.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},initEdit:async n=>{Y.render(F.createLoader());try{const[t,e,s]=await Promise.all([_t(Tt(nt,"obras")),_t(Tt(nt,"fornecedores")),Oi.getCompra(n)]),i=t.docs.map(o=>({id:o.id,...o.data()})),r=e.docs.map(o=>({id:o.id,...o.data()}));Y.render(ng.renderForm(i,r,s)),ba.bindEvents(n,s)}catch(t){console.error(t),Y.render(`<div class="text-red-500">Erro ao carregar compra: ${t.message}</div>`)}},bindEvents:(n=null,t=null)=>{const e=document.getElementById("form-compra"),s=document.getElementById("file-upload"),i=document.getElementById("drop-zone"),r=document.getElementById("descricao"),o=document.getElementById("obraId");let a=[];i.addEventListener("click",()=>s.click()),s.addEventListener("change",h=>c(h.target.files));const c=h=>{a=[...a,...Array.from(h)],u()},u=()=>{const h=document.getElementById("file-list");h.innerHTML=a.map((d,p)=>`
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${d.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${p}}))">
                        ${F.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join("")};if(e.addEventListener("remove-file",h=>{a.splice(h.detail,1),u()}),r.addEventListener("blur",async()=>{const h=o.value,d=r.value;h&&d.length>3&&await Oi.checkDuplicidade(h,d)&&F.createToast("⚠️ Atenção: Já existe um pedido similar para esta obra!","warning")}),document.getElementById("valor_estimado").addEventListener("input",h=>{const d=parseFloat(h.target.value),p=document.getElementById("justificativa-container"),m=document.getElementById("justificativa");d>5e3?(p.classList.remove("hidden"),m.required=!0):(p.classList.add("hidden"),m.required=!1)}),t&&(e.obraId.value=t.obraId||"",e.prioridade.value=t.prioridade||"Normal",e.descricao.value=t.descricao||"",e.valor_estimado.value=t.valor_estimado||t.valor_total||"",e.fornecedorId.value=t.fornecedorId||"",t.justificativa)){const h=document.getElementById("justificativa-container"),d=document.getElementById("justificativa");h.classList.remove("hidden"),d.value=t.justificativa}e.addEventListener("submit",async h=>{h.preventDefault();const d=document.getElementById("btn-submit");try{d.disabled=!0,d.innerHTML=F.createLoader();const p=[];for(const b of a){const I=await Oi.uploadArquivo(b,`compras/${Date.now()}_${b.name}`);p.push({nome:b.name,url:I})}const m=new FormData(e),v={...Object.fromEntries(m.entries()),anexos:p,solicitanteId:pt.state.currentUser.uid,solicitanteNome:pt.state.currentUser.nome};n?(await Oi.atualizarCompra(n,v),F.createToast("Compra atualizada com sucesso!")):(await Oi.salvarCompra(v),F.createToast("Compra registrada com sucesso!")),mt.navigate("/compras")}catch(p){console.error(p),F.createToast("Erro ao registrar: "+p.message,"error"),d.disabled=!1,d.innerHTML="<span>Registrar Solicitação</span>"}})}},Qc={getCompras:async(n={})=>{let t=Tt(nt,"compras");const e=[];n.obraId&&e.push(Vt("obraId","==",n.obraId)),n.status&&e.push(Vt("status_compra","==",n.status));const s=fe(t,...e);let r=(await _t(s)).docs.map(o=>({id:o.id,...o.data()}));if(n.search){const o=n.search.toLowerCase();r=r.filter(a=>(a.descricao||"").toLowerCase().includes(o)||(a.fornecedorNome||"").toLowerCase().includes(o)||(a.obraNome||"").toLowerCase().includes(o))}return r},updateStatus:async(n,t)=>{const e=Ie(nt,"compras",n);await ei(e,{status_compra:t})}},Jc={renderControls:(n="table",t=[])=>`
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
                        ${t.map(e=>`<option value="${e.id}">${e.nome_obra||e.apelido_obra||e.id}</option>`).join("")}
                    </select>
                    <select id="filter-prioridade" class="input text-sm">
                        <option value="">Todas Prioridades</option>
                        <option value="Normal">Normal</option>
                        <option value="Alta">Alta</option>
                        <option value="Critica">Crítica</option>
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Ht.formatDate(t.data_solicitacao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${t.descricao}">${t.descricao}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Ht.formatCurrency(t.valor_estimado||0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-display rounded border border-border text-text">
                                            ${t.status_compra}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#/compras/${t.id}/editar" class="text-primary hover:text-primary-strong mr-2 font-display uppercase tracking-wide">Editar</a>
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
                                            <span class="text-xs text-text-muted">${Ht.formatDate(i.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${i.descricao}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${Ht.formatCurrency(i.valor_estimado||0)}</span>
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
        `},xt={currentView:"table",compras:[],filters:{},obras:[],init:async()=>{await xt.load(),await xt.render()},load:async()=>{xt.compras=await Qc.getCompras(),xt.obras=await Ce.getObras()},render:async()=>{const n=document.createElement("div");n.innerHTML=Jc.renderControls(xt.currentView,xt.obras);const t=document.createElement("div");t.id="reports-content",t.innerHTML=xt.currentView==="table"?Jc.renderTable(xt.compras):Jc.renderKanban(xt.compras),n.appendChild(t),Y.render(n.innerHTML),xt.bindEvents()},applyFilters:async()=>{var d,p,m,_,v,b,I,S,D;const n=((d=document.getElementById("filter-search"))==null?void 0:d.value.toLowerCase())||"",t=((p=document.getElementById("filter-status"))==null?void 0:p.value)||"",e=((m=document.getElementById("filter-obra"))==null?void 0:m.value)||"",s=((_=document.getElementById("filter-prioridade"))==null?void 0:_.value)||"",i=((v=document.getElementById("filter-natureza"))==null?void 0:v.value)||"",r=((b=document.getElementById("filter-cc"))==null?void 0:b.value)||"",o=((I=document.getElementById("filter-date-start"))==null?void 0:I.value)||"",a=((S=document.getElementById("filter-date-end"))==null?void 0:S.value)||"",c=((D=document.getElementById("filter-only-delayed"))==null?void 0:D.checked)||!1;xt.filters={search:n,status:t,obra:e,prioridade:s,natureza:i,cc:r,dateStart:o,dateEnd:a,onlyDelayed:c};const u=await Qc.getCompras(),h=new Date;xt.compras=u.filter(k=>{var M;if(n&&!((M=k.descricao)!=null&&M.toLowerCase().includes(n))||t&&k.status_compra!==t||e&&k.obraId!==e||s&&k.prioridade!==s||i&&(k.natureza_compra||"").trim()!==i)return!1;const O=k.centroCustoNome||k.centro_custo||k.centroCustoId||"";if(r&&O!==r||o&&k.data_solicitacao&&new Date(k.data_solicitacao)<new Date(o)||a&&k.data_solicitacao&&new Date(k.data_solicitacao)>new Date(a))return!1;if(c){const E=k.previsao_entrega?new Date(k.previsao_entrega):k.data_entrega_prevista?new Date(k.data_entrega_prevista):null;if(!E||E>=h||k.status_compra==="Entregue")return!1}return!0}),xt.render()},bindEvents:()=>{var e,s,i,r;(e=document.getElementById("view-table"))==null||e.addEventListener("click",()=>{xt.currentView="table",xt.render()}),(s=document.getElementById("view-kanban"))==null||s.addEventListener("click",()=>{xt.currentView="kanban",xt.render()});const n=document.getElementById("filter-natureza"),t=document.getElementById("filter-cc");if(n){const o=Array.from(new Set(xt.compras.map(a=>(a.natureza_compra||"Outros").trim())));n.innerHTML='<option value="">Todas Naturezas</option>'+o.map(a=>`<option value="${a}">${a}</option>`).join("")}if(t){const o=Array.from(new Set(xt.compras.map(a=>a.centroCustoNome||a.centro_custo||a.centroCustoId||"N/D")));t.innerHTML='<option value="">Todos Centros de Custo</option>'+o.map(a=>`<option value="${a}">${a}</option>`).join("")}(i=document.getElementById("btn-apply-filters"))==null||i.addEventListener("click",()=>{xt.applyFilters()}),(r=document.getElementById("btn-clear-filters"))==null||r.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-natureza").value="",document.getElementById("filter-cc").value="",document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1,xt.applyFilters()}),document.addEventListener("kanban-move-next",async o=>{const{id:a,current:c}=o.detail,u=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],h=u.indexOf(c)+1;if(h<u.length){const d=u[h];try{await Qc.updateStatus(a,d),F.createToast(`Movido para ${d}`),await xt.load(),xt.render()}catch(p){F.createToast("Erro ao mover: "+p.message,"error")}}})}},sg={getUsers:async()=>(await _t(Tt(nt,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await ei(Ie(nt,"usuarios",n),t)},createUserProfile:async(n,t)=>{await tE(Ie(nt,"usuarios",n),t)}},XP={render:n=>`
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
        `},ql={init:async()=>{const n=pt.state.currentUser;if(n.role!=="administrador"&&n.role!=="diretor"){Y.render('<div class="p-6 text-red-500">Acesso negado. Apenas administradores.</div>');return}Y.render(F.createLoader());try{const t=await sg.getUsers();Y.render(XP.render(t)),ql.bindEvents()}catch(t){Y.render(`<div class="text-red-500">Erro: ${t.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&sg.updateUser(t,{role:e}).then(()=>{F.createToast("Usuário atualizado!"),ql.init()}).catch(s=>F.createToast("Erro: "+s.message,"error"))})}},ig={render:(n=[])=>{const t=new Date,e=t.getMonth(),s=t.getFullYear(),i={};n.forEach(d=>{if(d.data_entrega_prevista){const m=new Date(d.data_entrega_prevista).toISOString().split("T")[0];i[m]||(i[m]=[]),i[m].push(d)}});const r=new Date(s,e,1),a=new Date(s,e+1,0).getDate(),c=r.getDay();let h=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e]} ${s}</h3>
                </div>
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(d=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${d}</div>`).join("")}
        `;for(let d=0;d<c;d++)h+='<div class="aspect-square"></div>';for(let d=1;d<=a;d++){const p=new Date(s,e,d),m=p.toISOString().split("T")[0],_=i[m]||[],v=d===t.getDate()&&e===t.getMonth(),b=p<t&&!v;h+=`
                <div class="aspect-square border border-border rounded p-1 ${v?"bg-primary/10 border-primary":"bg-surface"} ${b?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${v?"text-primary font-bold":"text-text"}">${d}</div>
                    ${_.length>0?`
                        <div class="mt-1 space-y-1">
                            ${_.slice(0,2).map(I=>{var S;return`
                                <div class="text-[10px] bg-primary/20 border border-primary rounded px-1 truncate" title="${I.descricao}">
                                    ${((S=I.descricao)==null?void 0:S.substring(0,15))||"Compra"}
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
        `}},Zc={renderList:n=>`
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
                                ${t.orcamento?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${Ht.formatCurrency(t.orcamento)}</p>`:""}
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
                    ${F.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${Ht.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${Ht.formatCurrency(n.orcamento||0)}</p>`})}
                    ${F.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${t.porStatus.Pendente||0}</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${t.porStatus.Entregue||0}</p>`,className:"accent-left"})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${t.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(t.sla||0)<80?"alert":"primary"} uppercase">${(t.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(t.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(t.economia||0)<0?"alert":"primary"} uppercase">${Ht.formatCurrency(t.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(t.curvaPercent||0).toFixed(1)}%</p>`})}
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
                        ${ig.render(t.comprasRecentes)}
                    </div>
                    <div>
                        ${ig.renderTimeline(t.comprasRecentes)}
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
                                        <td class="px-6 py-4 text-sm text-text-muted">${Ht.formatDate(a.data_solicitacao)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${a.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Ht.formatCurrency(a.valor_estimado||0)}</td>
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
        `}},wn="rgba(255,255,255,0.08)",Ne="#a1a1aa",Jt={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};at.defaults.color="#e5e5e5";at.defaults.font.family=Jt.family;at.defaults.font.weight=Jt.weight;const ss={renderCategorias:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:wn},ticks:{color:Ne,font:Jt}},y:{grid:{color:wn},ticks:{color:Ne,font:Jt}}}}})},renderStatusObra:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Jt,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Ne,font:Jt}},y:{grid:{color:wn},ticks:{color:Ne,font:Jt,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Jt,padding:12,usePointStyle:!0}}}}})},renderFinancePVAV:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new at(s,{type:"line",data:{datasets:[{label:"Planejado (PV)",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Real (AV)",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34,197,94,0.05)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:wn},ticks:{color:Ne}},y:{grid:{color:wn},ticks:{color:Ne,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Jt,usePointStyle:!0}}}}}))},renderCurvaS:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new at(s,{type:"line",data:{labels:t.map((i,r)=>`Mês ${r+1}`),datasets:[{label:"Planejado",data:t,borderColor:"#a1a1aa",backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:Jt,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:"#e5e5e5",bodyColor:"#a1a1aa",borderColor:"#333333",borderWidth:1,titleFont:Jt,bodyFont:Jt}},scales:{x:{grid:{color:wn},ticks:{color:Ne,font:Jt}},y:{grid:{color:wn},ticks:{color:Ne,font:Jt,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"bar",data:{labels:s.map(r=>{const[o,a]=r.split("-");return`${a}/${o.slice(2)}`}),datasets:[{label:"Gastos Mensais",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Ne,font:Jt}},y:{grid:{color:wn},ticks:{color:Ne,font:Jt,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},$y=LA(),rg=$y.BASE_URL||"https://apiexterna.diariodeobra.app/v1",QP=()=>{const n=$y.TOKEN||(typeof window<"u"?window.__RDO_API_TOKEN:"");if(n)return n;try{const t=localStorage.getItem("axel_rdo_token");if(t)return t}catch{}return""};async function tl(n,t={}){const e=QP();if(!e)return console.warn("[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token"),null;const s={...t.headers,token:e,"Content-Type":"application/json"},i=await fetch(`${rg}${n}`,{...t,headers:s});if(console.info("[RDO] Request:",`${rg}${n}`,"status:",i.status),!i.ok)return console.warn(`Erro na API RDO ao acessar ${n}: ${i.status} ${i.statusText}`),null;const r=await i.json();return console.info("[RDO] Response data size:",Array.isArray(r)?r.length:Object.keys(r||{}).length),r}const qo={getObraByOs:async n=>{const t=await tl("/obras");if(!Array.isArray(t))return null;const e=String(n||"").trim();if(!e)return null;const s=t.find(o=>String(o._id)===e);if(s)return s;const i=t.find(o=>{const a=(o.nome||"").match(/(\d+)$/);return a&&a[1]===e});if(i)return i;const r=t.find(o=>(o.nome||"").includes(e));return r||null},getRelatoriosByObra:async n=>{const t=await tl(`/obras/${n}/relatorios`);return Array.isArray(t)?t:[]},getRelatorioDetalhe:async(n,t)=>tl(`/obras/${n}/relatorios/${t}`),getIntegratedDataForObra:async n=>{const t=await qo.getObraByOs(n);if(!t)return console.warn("[RDO] Obra não localizada para OS:",n),null;console.info("[RDO] Obra encontrada para OS:",n,"->",t._id,t.nome);const e=await qo.getRelatoriosByObra(t._id);if(!e.length)return console.warn("[RDO] Nenhum relatório retornado para obra",t._id),{quantidadeRelatorios:0,totalHoras:"0.00",totalHorasExtras:"0.00",reports:[]};const s=(await Promise.all(e.map(c=>qo.getRelatorioDetalhe(t._id,c._id)))).filter(Boolean);let i=0,r=0;const o=9,a=c=>{if(!c||typeof c!="string")return 0;const[u,h]=c.split(":").map(Number);return(u||0)+(h||0)/60};return s.forEach(c=>{var d,p;(((d=c==null?void 0:c.maoDeObra)==null?void 0:d.padrao)||[]).forEach(m=>{const _=Number(m.quantidade)||0;i+=_,_>o&&(r+=_-o)}),(((p=c==null?void 0:c.maoDeObra)==null?void 0:p.personalizada)||[]).forEach(m=>{const _=a(m.horasTrabalhadas);i+=_,_>o&&(r+=_-o)})}),{quantidadeRelatorios:s.length,totalHoras:i.toFixed(2),totalHorasExtras:r.toFixed(2),reports:s}},processRDOData:(n=[])=>{const t={},e={},s={};let i=0,r=0;const o=new Set,a=9,c={},u=d=>{if(typeof d=="number")return d;if(typeof d=="string"){const[p,m]=d.split(":").map(Number);return(p||0)+(m||0)/60}return 0};n.forEach(d=>{var v,b;const p=d.data||d.createdAt||d.data_inicio||d.dataInicio;if(!p)return;t[p]||(t[p]=0);const m=((v=d==null?void 0:d.maoDeObra)==null?void 0:v.padrao)||[],_=((b=d==null?void 0:d.maoDeObra)==null?void 0:b.personalizada)||[];m.forEach(I=>{const S=Number(I.quantidade)||0,D=Math.max(0,S-a);t[p]+=S;const k=I.funcao||"Outros";e[k]=(e[k]||0)+S,I.funcionario_id&&(s[p]||(s[p]=new Set),s[p].add(I.funcionario_id),o.add(I.funcionario_id));const O=I.nome||I.funcionario||I.descricao||"Técnico";c[O]=(c[O]||0)+S,i+=S,r+=D}),_.forEach(I=>{const S=u(I.horasTrabalhadas),D=Math.max(0,S-a);t[p]+=S;const k=I.funcao||"Outros";e[k]=(e[k]||0)+S,I.funcionario_id&&(s[p]||(s[p]=new Set),s[p].add(I.funcionario_id),o.add(I.funcionario_id));const O=I.nome||I.funcionario||I.descricao||"Técnico";c[O]=(c[O]||0)+S,i+=S,r+=D})});const h={};return Object.keys(s).forEach(d=>{h[d]=s[d].size}),{horasPorDia:t,horasPorFuncao:e,funcionariosPorDia:h,totalHoras:i,totalExtras:r,totalFuncionarios:o.size,mediaHorasDia:i/Math.max(1,Object.keys(t).length),mediaFuncionariosDia:Object.keys(h).length?Object.values(h).reduce((d,p)=>d+p,0)/Object.keys(h).length:0,techHours:c}}},zy=Object.freeze(Object.defineProperty({__proto__:null,RDOService:qo},Symbol.toStringTag,{value:"Module"})),el="rgba(255,255,255,0.08)",Ao="#a1a1aa",Mi={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},we={renderEmpty:n=>{const t=document.getElementById(n);if(!t)return;const e=t.parentElement;if(!e)return;t.style.display="none";let s=e.querySelector(".chart-placeholder");s||(s=document.createElement("div"),s.className="chart-placeholder text-center text-sm text-text-muted py-6",e.appendChild(s)),s.textContent="Sem dados"},renderHorasPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"line",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Horas Trabalhadas",data:i,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:2,fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:el},ticks:{color:Ao,font:Mi}},y:{grid:{color:el},ticks:{color:Ao,font:Mi},beginAtZero:!0}}}})},renderHorasPorFuncao:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Mi,padding:12,usePointStyle:!0}}}}})},renderFuncionariosPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new at(e,{type:"bar",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Funcionários",data:i,backgroundColor:"#0ea5e9",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Ao,font:Mi}},y:{grid:{color:el},ticks:{color:Ao,font:Mi,stepSize:1},beginAtZero:!0}}}})}},$s={initList:async()=>{Y.render(F.createLoader());try{const n=await Ce.getObras();Y.render(Zc.renderList(n))}catch(n){console.error(n),Y.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{Y.render(F.createLoader());try{let t=null;n&&(t=await Ce.getObraById(n)),Y.render(Zc.renderForm(t)),$s.bindFormEvents(n)}catch(t){console.error(t),Y.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{Y.render(F.createLoader());try{const t=await Ce.getObraById(n);if(!t){Y.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const e=await Ce.getObraStats(n,!1),s=Number(t.orcamento||0);s>0?(e.economia=s-e.totalGasto,e.curvaPercent=e.totalGasto/s*100):(e.economia=0,e.curvaPercent=0);const i=[];!t.horas_previstas&&!t.horas_extras_previstas&&i.push("Horas da obra não informadas."),!t.data_inicio&&!t.data_prevista_inicio&&i.push("Data de início não informada."),!t.data_fim&&!t.data_prevista_fim&&i.push("Data de término não informada."),s||i.push("Orçamento da obra não informado."),t.numero_os||i.push("Número da OS não informado; integração RDO pode falhar."),e.osNumber=t.numero_os||t.id,e.rdoData={totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},e.alerts=i,Y.render(Zc.renderDashboard(t,e)),setTimeout(async()=>{ss.renderCategorias("chart-categorias",e.gastosPorCategoria),ss.renderStatusObra("chart-status-obra",e.porStatus),e.curvaS&&ss.renderCurvaS("chart-curva-s",e.curvaS.planejado,e.curvaS.realizado),e.gastosMensais&&ss.renderGastosMensais("chart-gastos-mensais",e.gastosMensais),e.naturezaTotais&&ss.renderNatureza("chart-natureza",e.naturezaTotais),e.ccTotais&&ss.renderCentrosCusto("chart-cc",e.ccTotais);const{generatePlannedValue:r,generateActualValue:o}=await Wl(async()=>{const{generatePlannedValue:u,generateActualValue:h}=await import("./sCurve-C3gVLJJK.js");return{generatePlannedValue:u,generateActualValue:h}},[]),a=r({data_inicio:t.data_inicio,data_prevista_fim:t.data_prevista_fim,orcamento:t.orcamento}),c=o(e.comprasRecentes||[]);(a.length||c.length)&&ss.renderFinancePVAV("chart-finance-pvav",a,c);try{const u=t.numero_os||t.numeroOS||t.id;if(!u)e.alerts.push("Número da OS não informado; integração RDO pode falhar.");else{console.info("[RDO] Buscando dados para OS:",u);const h=(await Wl(async()=>{const{RDOService:p}=await Promise.resolve().then(()=>zy);return{RDOService:p}},void 0)).RDOService,d=await h.getIntegratedDataForObra(u);if(d&&d.reports){const p=h.processRDOData(d.reports);if(p){e.rdoData=p,e.rdoOk=!0,e.alerts=(e.alerts||[]).filter(_=>!_.toLowerCase().includes("rdo"));const m=(_,v)=>{const b=document.getElementById(_);b&&(b.textContent=v)};m("kpi-rdo-total",p.totalHoras.toFixed(1)),m("kpi-rdo-media-dia",p.mediaHorasDia.toFixed(1)),m("kpi-rdo-func",String(p.totalFuncionarios||0)),m("kpi-rdo-media-func-dia",p.mediaFuncionariosDia.toFixed(1)),p.totalHoras>0?(we.renderHorasPorDia("chart-rdo-horas",p.horasPorDia),we.renderHorasPorFuncao("chart-rdo-funcao",p.horasPorFuncao),we.renderFuncionariosPorDia("chart-rdo-funcionarios",p.funcionariosPorDia)):(e.alerts.push("RDO sem horas registradas para esta OS."),we.renderEmpty("chart-rdo-horas"),we.renderEmpty("chart-rdo-funcao"),we.renderEmpty("chart-rdo-funcionarios"))}}else e.alerts.push("Sem conexão com RDO ou OS não encontrada."),e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},we.renderEmpty("chart-rdo-horas"),we.renderEmpty("chart-rdo-funcao"),we.renderEmpty("chart-rdo-funcionarios")}}catch(u){console.warn("Erro ao carregar dados RDO (legacy):",(u==null?void 0:u.message)||u),e.alerts.push("Falha ao carregar dados RDO."),e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},we.renderEmpty("chart-rdo-horas"),we.renderEmpty("chart-rdo-funcao"),we.renderEmpty("chart-rdo-funcionarios")}},100)}catch(t){console.error(t),Y.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=F.createLoader();const i=new FormData(t),r=Object.fromEntries(i.entries());r.orcamento&&(r.orcamento=Number(r.orcamento)),r.horas_previstas&&(r.horas_previstas=Number(r.horas_previstas)),r.horas_extras_previstas&&(r.horas_extras_previstas=Number(r.horas_extras_previstas)),r.obra_filha=t.obra_filha.checked,n?(await Ce.updateObra(n,r),F.createToast("Obra atualizada com sucesso!")):(await Ce.createObra(r),F.createToast("Obra criada com sucesso!")),mt.navigate("/obras")}catch(i){console.error(i),F.createToast("Erro ao salvar: "+i.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},JP={renderMenu:()=>`
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
    `},ZP={init:async()=>{Y.render(JP.renderMenu())}},t1={render:(n=[])=>`
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-display text-text tracking-wide">Fornecedores</h2>
                <button class="btn">Novo Fornecedor</button>
            </div>
            <div class="card">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-border">
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
                                <tr>
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
    `},e1={list:async()=>(await _t(Tt(nt,"fornecedores"))).docs.map(t=>({id:t.id,...t.data()}))},n1={init:async()=>{const n=await e1.list();Y.render(t1.render(n))},bind:()=>{}},s1={render:(n=[])=>`
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-display text-text tracking-wide">Centros de Custo</h2>
                <button class="btn">Novo Centro de Custo</button>
            </div>
            <div class="card">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-border">
                        <thead class="bg-canvas">
                            <tr>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Nome</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Código</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${n.map(t=>`
                                <tr>
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
    `},i1={list:async()=>(await _t(Tt(nt,"centrosCusto"))).docs.map(t=>({id:t.id,...t.data()}))},r1={init:async()=>{const n=await i1.list();Y.render(s1.render(n))}},o1={render:(n=[])=>`
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-display text-text tracking-wide">Compradores</h2>
                <button class="btn">Novo Comprador</button>
            </div>
            <div class="card">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-border">
                        <thead class="bg-canvas">
                            <tr>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Nome</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Email</th>
                                <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            ${n.map(t=>`
                                <tr>
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
    `},a1={list:async()=>(await _t(Tt(nt,"compradores"))).docs.map(t=>({id:t.id,...t.data()}))},c1={init:async()=>{const n=await a1.list();Y.render(o1.render(n))}},Gl={create:async n=>(await Ou(Tt(nt,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=fe(Tt(nt,"notificacoes"),Vt("userId","==",n),wl("created_at","desc"),Po(t));return(await _t(e)).docs.map(i=>({id:i.id,...i.data()}))},markAsRead:async n=>{await ei(Ie(nt,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=fe(Tt(nt,"notificacoes"),Vt("userId","==",n),Vt("lida","==",!1)),s=(await _t(t)).docs.map(i=>ei(Ie(nt,"notificacoes",i.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=fe(Tt(nt,"compras"),Vt("status_compra","in",["Comprado","Em Trânsito"]),Vt("data_entrega_prevista","<=",n.toISOString())),e=await _t(t),s=[];for(const i of e.docs){const r=i.data(),o=Math.ceil((new Date(r.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:r.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${r.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${i.id}`,prioridade:o===0?"alta":"normal"})}for(const i of s)await Gl.create(i);return s.length}},og={renderBell:(n=0)=>`
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${de.bell}
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
        `},Ee={notifications:[],unreadCount:0,init:async()=>{pt.state.currentUser&&(await Ee.load(),Ee.render(),Ee.bindEvents(),setInterval(()=>Ee.load(),12e4))},load:async()=>{const n=pt.state.currentUser;Ee.notifications=await Gl.getByUser(n.uid,20),Ee.unreadCount=Ee.notifications.filter(t=>!t.lida).length,Ee.render()},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=og.renderBell(Ee.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=og.renderDropdown(Ee.notifications),n.appendChild(t)},bindEvents:()=>{document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=pt.state.currentUser;await Gl.markAllAsRead(t.uid),await Ee.load()}})}};console.log("[Main] Inicializando aplicação...");const l1=async()=>{try{await FA(),console.log("[Main] Firebase inicializado."),pt.applyTheme(pt.state.currentTheme||"dark"),await ha.init(),pt.state.currentUser&&await Ee.init(),mt.init(),mt.on("/",YP.init),mt.on("/login",Df.initLogin),mt.on("/forgot-password",Df.initForgotPassword),mt.on("/compras",ba.init),mt.on("/relatorios",xt.init),mt.on("/configuracoes",ql.init),mt.on("/compras/:id/editar",({id:t})=>ba.initEdit(t)),mt.on("/cadastros",ZP.init),mt.on("/cadastros/fornecedores",n1.init),mt.on("/cadastros/centros-custo",r1.init),mt.on("/cadastros/compradores",c1.init),mt.on("/obras",$s.initList),mt.on("/obras/nova",()=>$s.initForm()),mt.on("/obras/:id",({id:t})=>$s.initDashboard(t)),mt.on("/obras/:id/dashboard",({id:t})=>$s.initDashboard(t)),mt.on("/obras/:id/editar",({id:t})=>$s.initForm(t)),mt.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};l1();
