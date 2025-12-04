var sv=Object.defineProperty;var iv=(n,t,e)=>t in n?sv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var U=(n,t,e)=>iv(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var jh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},rv=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},qp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),s.push(e[h],e[d],e[p],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Wp(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):rv(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const d=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new ov;const p=r<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),d!==64){const _=u<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ov extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const av=function(n){const t=Wp(n);return qp.encodeByteArray(t,!0)},Mo=function(n){return av(n).replace(/\./g,"")},Gp=function(n){try{return qp.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function cv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lv=()=>cv().__FIREBASE_DEFAULTS__,uv=()=>{if(typeof process>"u"||typeof jh>"u")return;const n=jh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Gp(n[1]);return t&&JSON.parse(t)},oa=()=>{try{return lv()||uv()||hv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kp=n=>{var t,e;return(e=(t=oa())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Yp=n=>{const t=Kp(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Xp=()=>{var n;return(n=oa())===null||n===void 0?void 0:n.config},Qp=n=>{var t;return(t=oa())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function Jp(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Mo(JSON.stringify(e)),Mo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function pv(){var n;const t=(n=oa())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yv(){const n=te();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vv(){return!pv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bv(){try{return typeof indexedDB=="object"}catch{return!1}}function wv(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="FirebaseError";class Ue extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Ev,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?xv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ue(i,a,s)}}function xv(n,t){return n.replace(Tv,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Tv=/\{\$([^}]+)}/g;function Iv(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Oo(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(Hh(r)&&Hh(o)){if(!Oo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function Hh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function xi(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function Ti(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Av(n,t){const e=new Sv(n,t);return e.subscribe.bind(e)}class Sv{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Rv(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=ac),i.error===void 0&&(i.error=ac),i.complete===void 0&&(i.complete=ac);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rv(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ac(){}/**
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
 */function It(n){return n&&n._delegate?n._delegate:n}class Dn{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class Pv{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new dv;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Cv(t))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Xn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xn){return this.instances.has(t)}getOptions(t=Xn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kv(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Xn){return this.component?this.component.multipleInstances?t:Xn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kv(n){return n===Xn?void 0:n}function Cv(n){return n.instantiationMode==="EAGER"}/**
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
 */class Dv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Pv(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Mv={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Ov=J.INFO,Lv={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Nv=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Lv[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pl{constructor(t){this.name=t,this._logLevel=Ov,this._logHandler=Nv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Vv=(n,t)=>t.some(e=>n instanceof e);let Wh,qh;function Fv(){return Wh||(Wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uv(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zp=new WeakMap,zc=new WeakMap,tg=new WeakMap,cc=new WeakMap,kl=new WeakMap;function Bv(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Sn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Zp.set(e,n)}).catch(()=>{}),kl.set(t,n),t}function zv(n){if(zc.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});zc.set(n,t)}let $c={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zc.get(n);if(t==="objectStoreNames")return n.objectStoreNames||tg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Sn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function $v(n){$c=n($c)}function jv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(lc(this),t,...e);return tg.set(s,t.sort?t.sort():[t]),Sn(s)}:Uv().includes(n)?function(...t){return n.apply(lc(this),t),Sn(Zp.get(this))}:function(...t){return Sn(n.apply(lc(this),t))}}function Hv(n){return typeof n=="function"?jv(n):(n instanceof IDBTransaction&&zv(n),Vv(n,Fv())?new Proxy(n,$c):n)}function Sn(n){if(n instanceof IDBRequest)return Bv(n);if(cc.has(n))return cc.get(n);const t=Hv(n);return t!==n&&(cc.set(n,t),kl.set(t,n)),t}const lc=n=>kl.get(n);function Wv(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=Sn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Sn(o.result),c.oldVersion,c.newVersion,Sn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const qv=["get","getKey","getAll","getAllKeys","count"],Gv=["put","add","delete","clear"],uc=new Map;function Gh(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(uc.get(t))return uc.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=Gv.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qv.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&c.done]))[0]};return uc.set(t,r),r}$v(n=>({...n,get:(t,e,s)=>Gh(t,e)||n.get(t,e,s),has:(t,e)=>!!Gh(t,e)||n.has(t,e)}));/**
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
 */class Kv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Yv(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function Yv(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jc="@firebase/app",Kh="0.10.13";/**
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
 */const on=new Pl("@firebase/app"),Xv="@firebase/app-compat",Qv="@firebase/analytics-compat",Jv="@firebase/analytics",Zv="@firebase/app-check-compat",tb="@firebase/app-check",eb="@firebase/auth",nb="@firebase/auth-compat",sb="@firebase/database",ib="@firebase/data-connect",rb="@firebase/database-compat",ob="@firebase/functions",ab="@firebase/functions-compat",cb="@firebase/installations",lb="@firebase/installations-compat",ub="@firebase/messaging",hb="@firebase/messaging-compat",db="@firebase/performance",fb="@firebase/performance-compat",pb="@firebase/remote-config",gb="@firebase/remote-config-compat",mb="@firebase/storage",_b="@firebase/storage-compat",yb="@firebase/firestore",vb="@firebase/vertexai-preview",bb="@firebase/firestore-compat",wb="firebase",Eb="10.14.1";/**
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
 */const Hc="[DEFAULT]",xb={[jc]:"fire-core",[Xv]:"fire-core-compat",[Jv]:"fire-analytics",[Qv]:"fire-analytics-compat",[tb]:"fire-app-check",[Zv]:"fire-app-check-compat",[eb]:"fire-auth",[nb]:"fire-auth-compat",[sb]:"fire-rtdb",[ib]:"fire-data-connect",[rb]:"fire-rtdb-compat",[ob]:"fire-fn",[ab]:"fire-fn-compat",[cb]:"fire-iid",[lb]:"fire-iid-compat",[ub]:"fire-fcm",[hb]:"fire-fcm-compat",[db]:"fire-perf",[fb]:"fire-perf-compat",[pb]:"fire-rc",[gb]:"fire-rc-compat",[mb]:"fire-gcs",[_b]:"fire-gcs-compat",[yb]:"fire-fst",[bb]:"fire-fst-compat",[vb]:"fire-vertex","fire-js":"fire-js",[wb]:"fire-js-all"};/**
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
 */const Lo=new Map,Tb=new Map,Wc=new Map;function Yh(n,t){try{n.container.addComponent(t)}catch(e){on.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function rs(n){const t=n.name;if(Wc.has(t))return on.debug(`There were multiple attempts to register component ${t}.`),!1;Wc.set(t,n);for(const e of Lo.values())Yh(e,n);for(const e of Tb.values())Yh(e,n);return!0}function aa(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Xe(n){return n.settings!==void 0}/**
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
 */const Ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rn=new fr("app","Firebase",Ib);/**
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
 */class Ab{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=Eb;function eg(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Hc,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Rn.create("bad-app-name",{appName:String(i)});if(e||(e=Xp()),!e)throw Rn.create("no-options");const r=Lo.get(i);if(r){if(Oo(e,r.options)&&Oo(s,r.config))return r;throw Rn.create("duplicate-app",{appName:i})}const o=new Dv(i);for(const c of Wc.values())o.addComponent(c);const a=new Ab(e,s,o);return Lo.set(i,a),a}function Cl(n=Hc){const t=Lo.get(n);if(!t&&n===Hc&&Xp())return eg();if(!t)throw Rn.create("no-app",{appName:n});return t}function De(n,t,e){var s;let i=(s=xb[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),on.warn(a.join(" "));return}rs(new Dn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Sb="firebase-heartbeat-database",Rb=1,Yi="firebase-heartbeat-store";let hc=null;function ng(){return hc||(hc=Wv(Sb,Rb,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Yi)}catch(e){console.warn(e)}}}}).catch(n=>{throw Rn.create("idb-open",{originalErrorMessage:n.message})})),hc}async function Pb(n){try{const e=(await ng()).transaction(Yi),s=await e.objectStore(Yi).get(sg(n));return await e.done,s}catch(t){if(t instanceof Ue)on.warn(t.message);else{const e=Rn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});on.warn(e.message)}}}async function Xh(n,t){try{const s=(await ng()).transaction(Yi,"readwrite");await s.objectStore(Yi).put(t,sg(n)),await s.done}catch(e){if(e instanceof Ue)on.warn(e.message);else{const s=Rn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});on.warn(s.message)}}}function sg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kb=1024,Cb=30*24*60*60*1e3;class Db{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ob(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qh();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Cb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){on.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qh(),{heartbeatsToSend:s,unsentEntries:i}=Mb(this._heartbeatsCache.heartbeats),r=Mo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return on.warn(e),""}}}function Qh(){return new Date().toISOString().substring(0,10)}function Mb(n,t=kb){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Jh(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Jh(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Ob{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bv()?wv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Pb(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Jh(n){return Mo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Lb(n){rs(new Dn("platform-logger",t=>new Kv(t),"PRIVATE")),rs(new Dn("heartbeat",t=>new Db(t),"PRIVATE")),De(jc,Kh,n),De(jc,Kh,"esm2017"),De("fire-js","")}Lb("");var Nb="firebase",Vb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(Nb,Vb,"app");var Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,ig;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,v){function E(){}E.prototype=v.prototype,x.D=v.prototype,x.prototype=new E,x.prototype.constructor=x,x.C=function(I,A,R){for(var T=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)T[_t-2]=arguments[_t];return v.prototype[A].apply(I,T)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,v,E){E||(E=0);var I=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)I[A]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(A=0;16>A;++A)I[A]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=x.g[0],E=x.g[1],A=x.g[2];var R=x.g[3],T=v+(R^E&(A^R))+I[0]+3614090360&4294967295;v=E+(T<<7&4294967295|T>>>25),T=R+(A^v&(E^A))+I[1]+3905402710&4294967295,R=v+(T<<12&4294967295|T>>>20),T=A+(E^R&(v^E))+I[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=E+(v^A&(R^v))+I[3]+3250441966&4294967295,E=A+(T<<22&4294967295|T>>>10),T=v+(R^E&(A^R))+I[4]+4118548399&4294967295,v=E+(T<<7&4294967295|T>>>25),T=R+(A^v&(E^A))+I[5]+1200080426&4294967295,R=v+(T<<12&4294967295|T>>>20),T=A+(E^R&(v^E))+I[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=E+(v^A&(R^v))+I[7]+4249261313&4294967295,E=A+(T<<22&4294967295|T>>>10),T=v+(R^E&(A^R))+I[8]+1770035416&4294967295,v=E+(T<<7&4294967295|T>>>25),T=R+(A^v&(E^A))+I[9]+2336552879&4294967295,R=v+(T<<12&4294967295|T>>>20),T=A+(E^R&(v^E))+I[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=E+(v^A&(R^v))+I[11]+2304563134&4294967295,E=A+(T<<22&4294967295|T>>>10),T=v+(R^E&(A^R))+I[12]+1804603682&4294967295,v=E+(T<<7&4294967295|T>>>25),T=R+(A^v&(E^A))+I[13]+4254626195&4294967295,R=v+(T<<12&4294967295|T>>>20),T=A+(E^R&(v^E))+I[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=E+(v^A&(R^v))+I[15]+1236535329&4294967295,E=A+(T<<22&4294967295|T>>>10),T=v+(A^R&(E^A))+I[1]+4129170786&4294967295,v=E+(T<<5&4294967295|T>>>27),T=R+(E^A&(v^E))+I[6]+3225465664&4294967295,R=v+(T<<9&4294967295|T>>>23),T=A+(v^E&(R^v))+I[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=E+(R^v&(A^R))+I[0]+3921069994&4294967295,E=A+(T<<20&4294967295|T>>>12),T=v+(A^R&(E^A))+I[5]+3593408605&4294967295,v=E+(T<<5&4294967295|T>>>27),T=R+(E^A&(v^E))+I[10]+38016083&4294967295,R=v+(T<<9&4294967295|T>>>23),T=A+(v^E&(R^v))+I[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=E+(R^v&(A^R))+I[4]+3889429448&4294967295,E=A+(T<<20&4294967295|T>>>12),T=v+(A^R&(E^A))+I[9]+568446438&4294967295,v=E+(T<<5&4294967295|T>>>27),T=R+(E^A&(v^E))+I[14]+3275163606&4294967295,R=v+(T<<9&4294967295|T>>>23),T=A+(v^E&(R^v))+I[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=E+(R^v&(A^R))+I[8]+1163531501&4294967295,E=A+(T<<20&4294967295|T>>>12),T=v+(A^R&(E^A))+I[13]+2850285829&4294967295,v=E+(T<<5&4294967295|T>>>27),T=R+(E^A&(v^E))+I[2]+4243563512&4294967295,R=v+(T<<9&4294967295|T>>>23),T=A+(v^E&(R^v))+I[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=E+(R^v&(A^R))+I[12]+2368359562&4294967295,E=A+(T<<20&4294967295|T>>>12),T=v+(E^A^R)+I[5]+4294588738&4294967295,v=E+(T<<4&4294967295|T>>>28),T=R+(v^E^A)+I[8]+2272392833&4294967295,R=v+(T<<11&4294967295|T>>>21),T=A+(R^v^E)+I[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=E+(A^R^v)+I[14]+4259657740&4294967295,E=A+(T<<23&4294967295|T>>>9),T=v+(E^A^R)+I[1]+2763975236&4294967295,v=E+(T<<4&4294967295|T>>>28),T=R+(v^E^A)+I[4]+1272893353&4294967295,R=v+(T<<11&4294967295|T>>>21),T=A+(R^v^E)+I[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=E+(A^R^v)+I[10]+3200236656&4294967295,E=A+(T<<23&4294967295|T>>>9),T=v+(E^A^R)+I[13]+681279174&4294967295,v=E+(T<<4&4294967295|T>>>28),T=R+(v^E^A)+I[0]+3936430074&4294967295,R=v+(T<<11&4294967295|T>>>21),T=A+(R^v^E)+I[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=E+(A^R^v)+I[6]+76029189&4294967295,E=A+(T<<23&4294967295|T>>>9),T=v+(E^A^R)+I[9]+3654602809&4294967295,v=E+(T<<4&4294967295|T>>>28),T=R+(v^E^A)+I[12]+3873151461&4294967295,R=v+(T<<11&4294967295|T>>>21),T=A+(R^v^E)+I[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=E+(A^R^v)+I[2]+3299628645&4294967295,E=A+(T<<23&4294967295|T>>>9),T=v+(A^(E|~R))+I[0]+4096336452&4294967295,v=E+(T<<6&4294967295|T>>>26),T=R+(E^(v|~A))+I[7]+1126891415&4294967295,R=v+(T<<10&4294967295|T>>>22),T=A+(v^(R|~E))+I[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=E+(R^(A|~v))+I[5]+4237533241&4294967295,E=A+(T<<21&4294967295|T>>>11),T=v+(A^(E|~R))+I[12]+1700485571&4294967295,v=E+(T<<6&4294967295|T>>>26),T=R+(E^(v|~A))+I[3]+2399980690&4294967295,R=v+(T<<10&4294967295|T>>>22),T=A+(v^(R|~E))+I[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=E+(R^(A|~v))+I[1]+2240044497&4294967295,E=A+(T<<21&4294967295|T>>>11),T=v+(A^(E|~R))+I[8]+1873313359&4294967295,v=E+(T<<6&4294967295|T>>>26),T=R+(E^(v|~A))+I[15]+4264355552&4294967295,R=v+(T<<10&4294967295|T>>>22),T=A+(v^(R|~E))+I[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=E+(R^(A|~v))+I[13]+1309151649&4294967295,E=A+(T<<21&4294967295|T>>>11),T=v+(A^(E|~R))+I[4]+4149444226&4294967295,v=E+(T<<6&4294967295|T>>>26),T=R+(E^(v|~A))+I[11]+3174756917&4294967295,R=v+(T<<10&4294967295|T>>>22),T=A+(v^(R|~E))+I[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=E+(R^(A|~v))+I[9]+3951481745&4294967295,x.g[0]=x.g[0]+v&4294967295,x.g[1]=x.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,x.g[2]=x.g[2]+A&4294967295,x.g[3]=x.g[3]+R&4294967295}s.prototype.u=function(x,v){v===void 0&&(v=x.length);for(var E=v-this.blockSize,I=this.B,A=this.h,R=0;R<v;){if(A==0)for(;R<=E;)i(this,x,R),R+=this.blockSize;if(typeof x=="string"){for(;R<v;)if(I[A++]=x.charCodeAt(R++),A==this.blockSize){i(this,I),A=0;break}}else for(;R<v;)if(I[A++]=x[R++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=v},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var v=1;v<x.length-8;++v)x[v]=0;var E=8*this.o;for(v=x.length-8;v<x.length;++v)x[v]=E&255,E/=256;for(this.u(x),x=Array(16),v=E=0;4>v;++v)for(var I=0;32>I;I+=8)x[E++]=this.g[v]>>>I&255;return x};function r(x,v){var E=a;return Object.prototype.hasOwnProperty.call(E,x)?E[x]:E[x]=v(x)}function o(x,v){this.h=v;for(var E=[],I=!0,A=x.length-1;0<=A;A--){var R=x[A]|0;I&&R==v||(E[A]=R,I=!1)}this.g=E}var a={};function c(x){return-128<=x&&128>x?r(x,function(v){return new o([v|0],0>v?-1:0)}):new o([x|0],0>x?-1:0)}function u(x){if(isNaN(x)||!isFinite(x))return d;if(0>x)return w(u(-x));for(var v=[],E=1,I=0;x>=E;I++)v[I]=x/E|0,E*=4294967296;return new o(v,0)}function h(x,v){if(x.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x.charAt(0)=="-")return w(h(x.substring(1),v));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(v,8)),I=d,A=0;A<x.length;A+=8){var R=Math.min(8,x.length-A),T=parseInt(x.substring(A,A+R),v);8>R?(R=u(Math.pow(v,R)),I=I.j(R).add(u(T))):(I=I.j(E),I=I.add(u(T)))}return I}var d=c(0),p=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(b(this))return-w(this).m();for(var x=0,v=1,E=0;E<this.g.length;E++){var I=this.i(E);x+=(0<=I?I:4294967296+I)*v,v*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(_(this))return"0";if(b(this))return"-"+w(this).toString(x);for(var v=u(Math.pow(x,6)),E=this,I="";;){var A=D(E,v).g;E=S(E,A.j(v));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(x);if(E=A,_(E))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function _(x){if(x.h!=0)return!1;for(var v=0;v<x.g.length;v++)if(x.g[v]!=0)return!1;return!0}function b(x){return x.h==-1}n.l=function(x){return x=S(this,x),b(x)?-1:_(x)?0:1};function w(x){for(var v=x.g.length,E=[],I=0;I<v;I++)E[I]=~x.g[I];return new o(E,~x.h).add(p)}n.abs=function(){return b(this)?w(this):this},n.add=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0,A=0;A<=v;A++){var R=I+(this.i(A)&65535)+(x.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(x.i(A)>>>16);I=T>>>16,R&=65535,T&=65535,E[A]=T<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(x,v){return x.add(w(v))}n.j=function(x){if(_(this)||_(x))return d;if(b(this))return b(x)?w(this).j(w(x)):w(w(this).j(x));if(b(x))return w(this.j(w(x)));if(0>this.l(m)&&0>x.l(m))return u(this.m()*x.m());for(var v=this.g.length+x.g.length,E=[],I=0;I<2*v;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<x.g.length;A++){var R=this.i(I)>>>16,T=this.i(I)&65535,_t=x.i(A)>>>16,Z=x.i(A)&65535;E[2*I+2*A]+=T*Z,P(E,2*I+2*A),E[2*I+2*A+1]+=R*Z,P(E,2*I+2*A+1),E[2*I+2*A+1]+=T*_t,P(E,2*I+2*A+1),E[2*I+2*A+2]+=R*_t,P(E,2*I+2*A+2)}for(I=0;I<v;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=v;I<2*v;I++)E[I]=0;return new o(E,0)};function P(x,v){for(;(x[v]&65535)!=x[v];)x[v+1]+=x[v]>>>16,x[v]&=65535,v++}function C(x,v){this.g=x,this.h=v}function D(x,v){if(_(v))throw Error("division by zero");if(_(x))return new C(d,d);if(b(x))return v=D(w(x),v),new C(w(v.g),w(v.h));if(b(v))return v=D(x,w(v)),new C(w(v.g),v.h);if(30<x.g.length){if(b(x)||b(v))throw Error("slowDivide_ only works with positive integers.");for(var E=p,I=v;0>=I.l(x);)E=O(E),I=O(I);var A=N(E,1),R=N(I,1);for(I=N(I,2),E=N(E,2);!_(I);){var T=R.add(I);0>=T.l(x)&&(A=A.add(E),R=T),I=N(I,1),E=N(E,1)}return v=S(x,A.j(v)),new C(A,v)}for(A=d;0<=x.l(v);){for(E=Math.max(1,Math.floor(x.m()/v.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=u(E),T=R.j(v);b(T)||0<T.l(x);)E-=I,R=u(E),T=R.j(v);_(R)&&(R=p),A=A.add(R),x=S(x,T)}return new C(A,x)}n.A=function(x){return D(this,x).h},n.and=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)&x.i(I);return new o(E,this.h&x.h)},n.or=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)|x.i(I);return new o(E,this.h|x.h)},n.xor=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)^x.i(I);return new o(E,this.h^x.h)};function O(x){for(var v=x.g.length+1,E=[],I=0;I<v;I++)E[I]=x.i(I)<<1|x.i(I-1)>>>31;return new o(E,x.h)}function N(x,v){var E=v>>5;v%=32;for(var I=x.g.length-E,A=[],R=0;R<I;R++)A[R]=0<v?x.i(R+E)>>>v|x.i(R+E+1)<<32-v:x.i(R+E);return new o(A,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,ig=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,es=o}).apply(typeof Zh<"u"?Zh:typeof self<"u"?self:typeof window<"u"?window:{});var Kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rg,Ii,og,go,qc,ag,cg,lg;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function e(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kr=="object"&&Kr];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=e(this);function i(l,f){if(f)t:{var g=s;l=l.split(".");for(var y=0;y<l.length-1;y++){var k=l[y];if(!(k in g))break t;g=g[k]}l=l[l.length-1],y=g[l],f=f(y),f!=y&&f!=null&&t(g,l,{configurable:!0,writable:!0,value:f})}}function r(l,f){l instanceof String&&(l+="");var g=0,y=!1,k={next:function(){if(!y&&g<l.length){var M=g++;return{value:f(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(l){return l||function(){return r(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,g){return l.call.apply(l.bind,arguments)}function d(l,f,g){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,y),l.apply(f,k)}}return function(){return l.apply(f,arguments)}}function p(l,f,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function m(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function _(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(y,k,M){for(var F=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)F[ct-2]=arguments[ct];return f.prototype[k].apply(y,F)}}function b(l){const f=l.length;if(0<f){const g=Array(f);for(let y=0;y<f;y++)g[y]=l[y];return g}return[]}function w(l,f){for(let g=1;g<arguments.length;g++){const y=arguments[g];if(c(y)){const k=l.length||0,M=y.length||0;l.length=k+M;for(let F=0;F<M;F++)l[k+F]=y[F]}else l.push(y)}}class S{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function P(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var O=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function N(l,f,g){for(const y in l)f.call(g,l[y],y,l)}function x(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function v(l){const f={};for(const g in l)f[g]=l[g];return f}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(l,f){let g,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(g in y)l[g]=y[g];for(let M=0;M<E.length;M++)g=E[M],Object.prototype.hasOwnProperty.call(y,g)&&(l[g]=y[g])}}function A(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function R(l){a.setTimeout(()=>{throw l},0)}function T(){var l=Pt;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class _t{constructor(){this.h=this.g=null}add(f,g){const y=Z.get();y.set(f,g),this.h?this.h.next=y:this.g=y,this.h=y}}var Z=new S(()=>new lt,l=>l.reset());class lt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let at,Nt=!1,Pt=new _t,Be=()=>{const l=a.Promise.resolve(void 0);at=()=>{l.then(vs)}};var vs=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(g){R(g)}var f=Z;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Nt=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function wt(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var ze=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch{}return l}();function be(l,f){if(wt.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(O){t:{try{D(f.nodeName);var k=!0;break t}catch{}k=!1}k||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:$e[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&be.aa.h.call(this)}}_(be,wt);var $e={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Pr="closure_listenable_"+(1e6*Math.random()|0),Ay=0;function Sy(l,f,g,y,k){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!y,this.ha=k,this.key=++Ay,this.da=this.fa=!1}function kr(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Cr(l){this.src=l,this.g={},this.h=0}Cr.prototype.add=function(l,f,g,y,k){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var F=Ua(l,f,y,k);return-1<F?(f=l[F],g||(f.fa=!1)):(f=new Sy(f,this.src,M,!!y,k),f.fa=g,l.push(f)),f};function Fa(l,f){var g=f.type;if(g in l.g){var y=l.g[g],k=Array.prototype.indexOf.call(y,f,void 0),M;(M=0<=k)&&Array.prototype.splice.call(y,k,1),M&&(kr(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ua(l,f,g,y){for(var k=0;k<l.length;++k){var M=l[k];if(!M.da&&M.listener==f&&M.capture==!!g&&M.ha==y)return k}return-1}var Ba="closure_lm_"+(1e6*Math.random()|0),za={};function Hu(l,f,g,y,k){if(Array.isArray(f)){for(var M=0;M<f.length;M++)Hu(l,f[M],g,y,k);return null}return g=Gu(g),l&&l[Pr]?l.K(f,g,u(y)?!!y.capture:!1,k):Ry(l,f,g,!1,y,k)}function Ry(l,f,g,y,k,M){if(!f)throw Error("Invalid event type");var F=u(k)?!!k.capture:!!k,ct=ja(l);if(ct||(l[Ba]=ct=new Cr(l)),g=ct.add(f,g,y,F,M),g.proxy)return g;if(y=Py(),g.proxy=y,y.src=l,y.listener=g,l.addEventListener)ze||(k=F),k===void 0&&(k=!1),l.addEventListener(f.toString(),y,k);else if(l.attachEvent)l.attachEvent(qu(f.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Py(){function l(g){return f.call(l.src,l.listener,g)}const f=ky;return l}function Wu(l,f,g,y,k){if(Array.isArray(f))for(var M=0;M<f.length;M++)Wu(l,f[M],g,y,k);else y=u(y)?!!y.capture:!!y,g=Gu(g),l&&l[Pr]?(l=l.i,f=String(f).toString(),f in l.g&&(M=l.g[f],g=Ua(M,g,y,k),-1<g&&(kr(M[g]),Array.prototype.splice.call(M,g,1),M.length==0&&(delete l.g[f],l.h--)))):l&&(l=ja(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Ua(f,g,y,k)),(g=-1<l?f[l]:null)&&$a(g))}function $a(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Pr])Fa(f.i,l);else{var g=l.type,y=l.proxy;f.removeEventListener?f.removeEventListener(g,y,l.capture):f.detachEvent?f.detachEvent(qu(g),y):f.addListener&&f.removeListener&&f.removeListener(y),(g=ja(f))?(Fa(g,l),g.h==0&&(g.src=null,f[Ba]=null)):kr(l)}}}function qu(l){return l in za?za[l]:za[l]="on"+l}function ky(l,f){if(l.da)l=!0;else{f=new be(f,this);var g=l.listener,y=l.ha||l.src;l.fa&&$a(l),l=g.call(y,f)}return l}function ja(l){return l=l[Ba],l instanceof Cr?l:null}var Ha="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gu(l){return typeof l=="function"?l:(l[Ha]||(l[Ha]=function(f){return l.handleEvent(f)}),l[Ha])}function Ht(){ne.call(this),this.i=new Cr(this),this.M=this,this.F=null}_(Ht,ne),Ht.prototype[Pr]=!0,Ht.prototype.removeEventListener=function(l,f,g,y){Wu(this,l,f,g,y)};function se(l,f){var g,y=l.F;if(y)for(g=[];y;y=y.F)g.push(y);if(l=l.M,y=f.type||f,typeof f=="string")f=new wt(f,l);else if(f instanceof wt)f.target=f.target||l;else{var k=f;f=new wt(y,l),I(f,k)}if(k=!0,g)for(var M=g.length-1;0<=M;M--){var F=f.g=g[M];k=Dr(F,y,!0,f)&&k}if(F=f.g=l,k=Dr(F,y,!0,f)&&k,k=Dr(F,y,!1,f)&&k,g)for(M=0;M<g.length;M++)F=f.g=g[M],k=Dr(F,y,!1,f)&&k}Ht.prototype.N=function(){if(Ht.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],y=0;y<g.length;y++)kr(g[y]);delete l.g[f],l.h--}}this.F=null},Ht.prototype.K=function(l,f,g,y){return this.i.add(String(l),f,!1,g,y)},Ht.prototype.L=function(l,f,g,y){return this.i.add(String(l),f,!0,g,y)};function Dr(l,f,g,y){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var k=!0,M=0;M<f.length;++M){var F=f[M];if(F&&!F.da&&F.capture==g){var ct=F.listener,Vt=F.ha||F.src;F.fa&&Fa(l.i,F),k=ct.call(Vt,y)!==!1&&k}}return k&&!y.defaultPrevented}function Ku(l,f,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function Yu(l){l.g=Ku(()=>{l.g=null,l.i&&(l.i=!1,Yu(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Cy extends ne{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Yu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ni(l){ne.call(this),this.h=l,this.g={}}_(ni,ne);var Xu=[];function Qu(l){N(l.g,function(f,g){this.g.hasOwnProperty(g)&&$a(f)},l),l.g={}}ni.prototype.N=function(){ni.aa.N.call(this),Qu(this)},ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wa=a.JSON.stringify,Dy=a.JSON.parse,My=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function qa(){}qa.prototype.h=null;function Ju(l){return l.h||(l.h=l.i())}function Zu(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ga(){wt.call(this,"d")}_(Ga,wt);function Ka(){wt.call(this,"c")}_(Ka,wt);var $n={},th=null;function Mr(){return th=th||new Ht}$n.La="serverreachability";function eh(l){wt.call(this,$n.La,l)}_(eh,wt);function ii(l){const f=Mr();se(f,new eh(f))}$n.STAT_EVENT="statevent";function nh(l,f){wt.call(this,$n.STAT_EVENT,l),this.stat=f}_(nh,wt);function ie(l){const f=Mr();se(f,new nh(f,l))}$n.Ma="timingevent";function sh(l,f){wt.call(this,$n.Ma,l),this.size=f}_(sh,wt);function ri(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function oi(){this.g=!0}oi.prototype.xa=function(){this.g=!1};function Oy(l,f,g,y,k,M){l.info(function(){if(l.g)if(M)for(var F="",ct=M.split("&"),Vt=0;Vt<ct.length;Vt++){var et=ct[Vt].split("=");if(1<et.length){var Wt=et[0];et=et[1];var qt=Wt.split("_");F=2<=qt.length&&qt[1]=="type"?F+(Wt+"="+et+"&"):F+(Wt+"=redacted&")}}else F=null;else F=M;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+f+`
`+g+`
`+F})}function Ly(l,f,g,y,k,M,F){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+f+`
`+g+`
`+M+" "+F})}function bs(l,f,g,y){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Vy(l,g)+(y?" "+y:"")})}function Ny(l,f){l.info(function(){return"TIMEOUT: "+f})}oi.prototype.info=function(){};function Vy(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var y=g[l];if(!(2>y.length)){var k=y[1];if(Array.isArray(k)&&!(1>k.length)){var M=k[0];if(M!="noop"&&M!="stop"&&M!="close")for(var F=1;F<k.length;F++)k[F]=""}}}}return Wa(g)}catch{return f}}var Or={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ih={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ya;function Lr(){}_(Lr,qa),Lr.prototype.g=function(){return new XMLHttpRequest},Lr.prototype.i=function(){return{}},Ya=new Lr;function dn(l,f,g,y){this.j=l,this.i=f,this.l=g,this.R=y||1,this.U=new ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rh}function rh(){this.i=null,this.g="",this.h=!1}var oh={},Xa={};function Qa(l,f,g){l.L=1,l.v=Ur(je(f)),l.m=g,l.P=!0,ah(l,null)}function ah(l,f){l.F=Date.now(),Nr(l),l.A=je(l.v);var g=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),wh(g.i,"t",y),l.C=0,g=l.j.J,l.h=new rh,l.g=Uh(l.j,g?f:null,!l.m),0<l.O&&(l.M=new Cy(p(l.Y,l,l.g),l.O)),f=l.U,g=l.g,y=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(Xu[0]=k.toString()),k=Xu);for(var M=0;M<k.length;M++){var F=Hu(g,k[M],y||f.handleEvent,!1,f.h||f);if(!F)break;f.g[F.key]=F}f=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ii(),Oy(l.i,l.u,l.A,l.l,l.R,l.m)}dn.prototype.ca=function(l){l=l.target;const f=this.M;f&&He(l)==3?f.j():this.Y(l)},dn.prototype.Y=function(l){try{if(l==this.g)t:{const qt=He(this.g);var f=this.g.Ba();const xs=this.g.Z();if(!(3>qt)&&(qt!=3||this.g&&(this.h.h||this.g.oa()||Rh(this.g)))){this.J||qt!=4||f==7||(f==8||0>=xs?ii(3):ii(2)),Ja(this);var g=this.g.Z();this.X=g;e:if(ch(this)){var y=Rh(this.g);l="";var k=y.length,M=He(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),ai(this);var F="";break e}this.h.i=new a.TextDecoder}for(f=0;f<k;f++)this.h.h=!0,l+=this.h.i.decode(y[f],{stream:!(M&&f==k-1)});y.length=0,this.h.g+=l,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=g==200,Ly(this.i,this.u,this.A,this.l,this.R,qt,g),this.o){if(this.T&&!this.K){e:{if(this.g){var ct,Vt=this.g;if((ct=Vt.g?Vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(ct)){var et=ct;break e}}et=null}if(g=et)bs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Za(this,g);else{this.o=!1,this.s=3,ie(12),jn(this),ai(this);break t}}if(this.P){g=!0;let we;for(;!this.J&&this.C<F.length;)if(we=Fy(this,F),we==Xa){qt==4&&(this.s=4,ie(14),g=!1),bs(this.i,this.l,null,"[Incomplete Response]");break}else if(we==oh){this.s=4,ie(15),bs(this.i,this.l,F,"[Invalid Chunk]"),g=!1;break}else bs(this.i,this.l,we,null),Za(this,we);if(ch(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qt!=4||F.length!=0||this.h.h||(this.s=1,ie(16),g=!1),this.o=this.o&&g,!g)bs(this.i,this.l,F,"[Invalid Chunked Response]"),jn(this),ai(this);else if(0<F.length&&!this.W){this.W=!0;var Wt=this.j;Wt.g==this&&Wt.ba&&!Wt.M&&(Wt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),rc(Wt),Wt.M=!0,ie(11))}}else bs(this.i,this.l,F,null),Za(this,F);qt==4&&jn(this),this.o&&!this.J&&(qt==4?Lh(this.j,this):(this.o=!1,Nr(this)))}else ev(this.g),g==400&&0<F.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),jn(this),ai(this)}}}catch{}finally{}};function ch(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Fy(l,f){var g=l.C,y=f.indexOf(`
`,g);return y==-1?Xa:(g=Number(f.substring(g,y)),isNaN(g)?oh:(y+=1,y+g>f.length?Xa:(f=f.slice(y,y+g),l.C=y+g,f)))}dn.prototype.cancel=function(){this.J=!0,jn(this)};function Nr(l){l.S=Date.now()+l.I,lh(l,l.I)}function lh(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ri(p(l.ba,l),f)}function Ja(l){l.B&&(a.clearTimeout(l.B),l.B=null)}dn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Ny(this.i,this.A),this.L!=2&&(ii(),ie(17)),jn(this),this.s=2,ai(this)):lh(this,this.S-l)};function ai(l){l.j.G==0||l.J||Lh(l.j,l)}function jn(l){Ja(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Qu(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Za(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||tc(g.h,l))){if(!l.K&&tc(g.h,l)&&g.G==3){try{var y=g.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Wr(g),jr(g);else break t;ic(g),ie(18)}}else g.za=k[1],0<g.za-g.T&&37500>k[2]&&g.F&&g.v==0&&!g.C&&(g.C=ri(p(g.Za,g),6e3));if(1>=dh(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Wn(g,11)}else if((l.K||g.g==l)&&Wr(g),!P(f))for(k=g.Da.g.parse(f),f=0;f<k.length;f++){let et=k[f];if(g.T=et[0],et=et[1],g.G==2)if(et[0]=="c"){g.K=et[1],g.ia=et[2];const Wt=et[3];Wt!=null&&(g.la=Wt,g.j.info("VER="+g.la));const qt=et[4];qt!=null&&(g.Aa=qt,g.j.info("SVER="+g.Aa));const xs=et[5];xs!=null&&typeof xs=="number"&&0<xs&&(y=1.5*xs,g.L=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const we=l.g;if(we){const Gr=we.g?we.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var M=y.h;M.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ec(M,M.h),M.h=null))}if(y.D){const oc=we.g?we.g.getResponseHeader("X-HTTP-Session-Id"):null;oc&&(y.ya=oc,ht(y.I,y.D,oc))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),y=g;var F=l;if(y.qa=Fh(y,y.J?y.ia:null,y.W),F.K){fh(y.h,F);var ct=F,Vt=y.L;Vt&&(ct.I=Vt),ct.B&&(Ja(ct),Nr(ct)),y.g=F}else Mh(y);0<g.i.length&&Hr(g)}else et[0]!="stop"&&et[0]!="close"||Wn(g,7);else g.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Wn(g,7):sc(g):et[0]!="noop"&&g.l&&g.l.ta(et),g.v=0)}}ii(4)}catch{}}var Uy=class{constructor(l,f){this.g=l,this.map=f}};function uh(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hh(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function dh(l){return l.h?1:l.g?l.g.size:0}function tc(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function ec(l,f){l.g?l.g.add(f):l.h=f}function fh(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}uh.prototype.cancel=function(){if(this.i=ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ph(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return b(l.i)}function By(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],g=l.length,y=0;y<g;y++)f.push(l[y]);return f}f=[],g=0;for(y in l)f[g++]=l[y];return f}function zy(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const y in l)f[g++]=y;return f}}}function gh(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=zy(l),y=By(l),k=y.length,M=0;M<k;M++)f.call(void 0,y[M],g&&g[M],l)}var mh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $y(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var y=l[g].indexOf("="),k=null;if(0<=y){var M=l[g].substring(0,y);k=l[g].substring(y+1)}else M=l[g];f(M,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Hn(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Hn){this.h=l.h,Vr(this,l.j),this.o=l.o,this.g=l.g,Fr(this,l.s),this.l=l.l;var f=l.i,g=new ui;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),_h(this,g),this.m=l.m}else l&&(f=String(l).match(mh))?(this.h=!1,Vr(this,f[1]||"",!0),this.o=ci(f[2]||""),this.g=ci(f[3]||"",!0),Fr(this,f[4]),this.l=ci(f[5]||"",!0),_h(this,f[6]||"",!0),this.m=ci(f[7]||"")):(this.h=!1,this.i=new ui(null,this.h))}Hn.prototype.toString=function(){var l=[],f=this.j;f&&l.push(li(f,yh,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(li(f,yh,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(li(g,g.charAt(0)=="/"?Wy:Hy,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",li(g,Gy)),l.join("")};function je(l){return new Hn(l)}function Vr(l,f,g){l.j=g?ci(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Fr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function _h(l,f,g){f instanceof ui?(l.i=f,Ky(l.i,l.h)):(g||(f=li(f,qy)),l.i=new ui(f,l.h))}function ht(l,f,g){l.i.set(f,g)}function Ur(l){return ht(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ci(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function li(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,jy),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function jy(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var yh=/[#\/\?@]/g,Hy=/[#\?:]/g,Wy=/[#\?]/g,qy=/[#\?@]/g,Gy=/#/g;function ui(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function fn(l){l.g||(l.g=new Map,l.h=0,l.i&&$y(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=ui.prototype,n.add=function(l,f){fn(this),this.i=null,l=ws(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function vh(l,f){fn(l),f=ws(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function bh(l,f){return fn(l),f=ws(l,f),l.g.has(f)}n.forEach=function(l,f){fn(this),this.g.forEach(function(g,y){g.forEach(function(k){l.call(f,k,y,this)},this)},this)},n.na=function(){fn(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let y=0;y<f.length;y++){const k=l[y];for(let M=0;M<k.length;M++)g.push(f[y])}return g},n.V=function(l){fn(this);let f=[];if(typeof l=="string")bh(this,l)&&(f=f.concat(this.g.get(ws(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},n.set=function(l,f){return fn(this),this.i=null,l=ws(this,l),bh(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},n.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function wh(l,f,g){vh(l,f),0<g.length&&(l.i=null,l.g.set(ws(l,f),b(g)),l.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var y=f[g];const M=encodeURIComponent(String(y)),F=this.V(y);for(y=0;y<F.length;y++){var k=M;F[y]!==""&&(k+="="+encodeURIComponent(String(F[y]))),l.push(k)}}return this.i=l.join("&")};function ws(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Ky(l,f){f&&!l.j&&(fn(l),l.i=null,l.g.forEach(function(g,y){var k=y.toLowerCase();y!=k&&(vh(this,y),wh(this,k,g))},l)),l.j=f}function Yy(l,f){const g=new oi;if(a.Image){const y=new Image;y.onload=m(pn,g,"TestLoadImage: loaded",!0,f,y),y.onerror=m(pn,g,"TestLoadImage: error",!1,f,y),y.onabort=m(pn,g,"TestLoadImage: abort",!1,f,y),y.ontimeout=m(pn,g,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else f(!1)}function Xy(l,f){const g=new oi,y=new AbortController,k=setTimeout(()=>{y.abort(),pn(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(k),M.ok?pn(g,"TestPingServer: ok",!0,f):pn(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),pn(g,"TestPingServer: error",!1,f)})}function pn(l,f,g,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(g)}catch{}}function Qy(){this.g=new My}function Jy(l,f,g){const y=g||"";try{gh(l,function(k,M){let F=k;u(k)&&(F=Wa(k)),f.push(y+M+"="+encodeURIComponent(F))})}catch(k){throw f.push(y+"type="+encodeURIComponent("_badmap")),k}}function Br(l){this.l=l.Ub||null,this.j=l.eb||!1}_(Br,qa),Br.prototype.g=function(){return new zr(this.l,this.j)},Br.prototype.i=function(l){return function(){return l}}({});function zr(l,f){Ht.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(zr,Ht),n=zr.prototype,n.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,di(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eh(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eh(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?hi(this):di(this),this.readyState==3&&Eh(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,hi(this))},n.Qa=function(l){this.g&&(this.response=l,hi(this))},n.ga=function(){this.g&&hi(this)};function hi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,di(l)}n.setRequestHeader=function(l,f){this.u.append(l,f)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function di(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function xh(l){let f="";return N(l,function(g,y){f+=y,f+=":",f+=g,f+=`\r
`}),f}function nc(l,f,g){t:{for(y in g){var y=!1;break t}y=!0}y||(g=xh(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ht(l,f,g))}function Et(l){Ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Et,Ht);var Zy=/^https?$/i,tv=["POST","PUT"];n=Et.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,f,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ya.g(),this.v=this.o?Ju(this.o):Ju(Ya),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(M){Th(this,M);return}if(l=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)g.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())g.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(M=>M.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tv,f,void 0))||y||k||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,F]of g)this.g.setRequestHeader(M,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sh(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){Th(this,M)}};function Th(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ih(l),$r(l)}function Ih(l){l.A||(l.A=!0,se(l,"complete"),se(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,se(this,"complete"),se(this,"abort"),$r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$r(this,!0)),Et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ah(this):this.bb())},n.bb=function(){Ah(this)};function Ah(l){if(l.h&&typeof o<"u"&&(!l.v[1]||He(l)!=4||l.Z()!=2)){if(l.u&&He(l)==4)Ku(l.Ea,0,l);else if(se(l,"readystatechange"),He(l)==4){l.h=!1;try{const F=l.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var g;if(!(g=f)){var y;if(y=F===0){var k=String(l.D).match(mh)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),y=!Zy.test(k?k.toLowerCase():"")}g=y}if(g)se(l,"complete"),se(l,"success");else{l.m=6;try{var M=2<He(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Ih(l)}}finally{$r(l)}}}}function $r(l,f){if(l.g){Sh(l);const g=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||se(l,"ready");try{g.onreadystatechange=y}catch{}}}function Sh(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function He(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<He(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Dy(f)}};function Rh(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ev(l){const f={};l=(l.g&&2<=He(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(P(l[y]))continue;var g=A(l[y]);const k=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const M=f[k]||[];f[k]=M,M.push(g)}x(f,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fi(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Ph(l){this.Aa=0,this.i=[],this.j=new oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fi("baseRetryDelayMs",5e3,l),this.cb=fi("retryDelaySeedMs",1e4,l),this.Wa=fi("forwardChannelMaxRetries",2,l),this.wa=fi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new uh(l&&l.concurrentRequestLimit),this.Da=new Qy,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ph.prototype,n.la=8,n.G=1,n.connect=function(l,f,g,y){ie(0),this.W=l,this.H=f||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.I=Fh(this,null,this.W),Hr(this)};function sc(l){if(kh(l),l.G==3){var f=l.U++,g=je(l.I);if(ht(g,"SID",l.K),ht(g,"RID",f),ht(g,"TYPE","terminate"),pi(l,g),f=new dn(l,l.j,f),f.L=2,f.v=Ur(je(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=Uh(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Nr(f)}Vh(l)}function jr(l){l.g&&(rc(l),l.g.cancel(),l.g=null)}function kh(l){jr(l),l.u&&(a.clearTimeout(l.u),l.u=null),Wr(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Hr(l){if(!hh(l.h)&&!l.s){l.s=!0;var f=l.Ga;at||Be(),Nt||(at(),Nt=!0),Pt.add(f,l),l.B=0}}function nv(l,f){return dh(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ri(p(l.Ga,l,f),Nh(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new dn(this,this.j,l);let M=this.o;if(this.S&&(M?(M=v(M),I(M,this.S)):M=this.S),this.m!==null||this.O||(k.H=M,M=null),this.P)t:{for(var f=0,g=0;g<this.i.length;g++){e:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break e}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=g;break t}if(f===4096||g===this.i.length-1){f=g+1;break t}}f=1e3}else f=1e3;f=Dh(this,k,f),g=je(this.I),ht(g,"RID",l),ht(g,"CVER",22),this.D&&ht(g,"X-HTTP-Session-Id",this.D),pi(this,g),M&&(this.O?f="headers="+encodeURIComponent(String(xh(M)))+"&"+f:this.m&&nc(g,this.m,M)),ec(this.h,k),this.Ua&&ht(g,"TYPE","init"),this.P?(ht(g,"$req",f),ht(g,"SID","null"),k.T=!0,Qa(k,g,null)):Qa(k,g,f),this.G=2}}else this.G==3&&(l?Ch(this,l):this.i.length==0||hh(this.h)||Ch(this))};function Ch(l,f){var g;f?g=f.l:g=l.U++;const y=je(l.I);ht(y,"SID",l.K),ht(y,"RID",g),ht(y,"AID",l.T),pi(l,y),l.m&&l.o&&nc(y,l.m,l.o),g=new dn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Dh(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ec(l.h,g),Qa(g,y,f)}function pi(l,f){l.H&&N(l.H,function(g,y){ht(f,y,g)}),l.l&&gh({},function(g,y){ht(f,y,g)})}function Dh(l,f,g){g=Math.min(l.i.length,g);var y=l.l?p(l.l.Na,l.l,l):null;t:{var k=l.i;let M=-1;for(;;){const F=["count="+g];M==-1?0<g?(M=k[0].g,F.push("ofs="+M)):M=0:F.push("ofs="+M);let ct=!0;for(let Vt=0;Vt<g;Vt++){let et=k[Vt].g;const Wt=k[Vt].map;if(et-=M,0>et)M=Math.max(0,k[Vt].g-100),ct=!1;else try{Jy(Wt,F,"req"+et+"_")}catch{y&&y(Wt)}}if(ct){y=F.join("&");break t}}}return l=l.i.splice(0,g),f.D=l,y}function Mh(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;at||Be(),Nt||(at(),Nt=!0),Pt.add(f,l),l.v=0}}function ic(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ri(p(l.Fa,l),Nh(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,Oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ri(p(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ie(10),jr(this),Oh(this))};function rc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Oh(l){l.g=new dn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=je(l.qa);ht(f,"RID","rpc"),ht(f,"SID",l.K),ht(f,"AID",l.T),ht(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ht(f,"TO",l.ja),ht(f,"TYPE","xmlhttp"),pi(l,f),l.m&&l.o&&nc(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Ur(je(f)),g.m=null,g.P=!0,ah(g,l)}n.Za=function(){this.C!=null&&(this.C=null,jr(this),ic(this),ie(19))};function Wr(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Lh(l,f){var g=null;if(l.g==f){Wr(l),rc(l),l.g=null;var y=2}else if(tc(l.h,f))g=f.D,fh(l.h,f),y=1;else return;if(l.G!=0){if(f.o)if(y==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var k=l.B;y=Mr(),se(y,new sh(y,g)),Hr(l)}else Mh(l);else if(k=f.s,k==3||k==0&&0<f.X||!(y==1&&nv(l,f)||y==2&&ic(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),k){case 1:Wn(l,5);break;case 4:Wn(l,10);break;case 3:Wn(l,6);break;default:Wn(l,2)}}}function Nh(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function Wn(l,f){if(l.j.info("Error code "+f),f==2){var g=p(l.fb,l),y=l.Xa;const k=!y;y=new Hn(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vr(y,"https"),Ur(y),k?Yy(y.toString(),g):Xy(y.toString(),g)}else ie(2);l.G=0,l.l&&l.l.sa(f),Vh(l),kh(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function Vh(l){if(l.G=0,l.ka=[],l.l){const f=ph(l.h);(f.length!=0||l.i.length!=0)&&(w(l.ka,f),w(l.ka,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.ra()}}function Fh(l,f,g){var y=g instanceof Hn?je(g):new Hn(g);if(y.g!="")f&&(y.g=f+"."+y.g),Fr(y,y.s);else{var k=a.location;y=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;var M=new Hn(null);y&&Vr(M,y),f&&(M.g=f),k&&Fr(M,k),g&&(M.l=g),y=M}return g=l.D,f=l.ya,g&&f&&ht(y,g,f),ht(y,"VER",l.la),pi(l,y),y}function Uh(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Et(new Br({eb:g})):new Et(l.pa),f.Ha(l.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bh(){}n=Bh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function qr(){}qr.prototype.g=function(l,f){return new fe(l,f)};function fe(l,f){Ht.call(this),this.g=new Ph(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!P(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!P(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Es(this)}_(fe,Ht),fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fe.prototype.close=function(){sc(this.g)},fe.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Wa(l),l=g);f.i.push(new Uy(f.Ya++,l)),f.G==3&&Hr(f)},fe.prototype.N=function(){this.g.l=null,delete this.j,sc(this.g),delete this.g,fe.aa.N.call(this)};function zh(l){Ga.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){t:{for(const g in f){l=g;break t}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}_(zh,Ga);function $h(){Ka.call(this),this.status=1}_($h,Ka);function Es(l){this.g=l}_(Es,Bh),Es.prototype.ua=function(){se(this.g,"a")},Es.prototype.ta=function(l){se(this.g,new zh(l))},Es.prototype.sa=function(l){se(this.g,new $h)},Es.prototype.ra=function(){se(this.g,"b")},qr.prototype.createWebChannel=qr.prototype.g,fe.prototype.send=fe.prototype.o,fe.prototype.open=fe.prototype.m,fe.prototype.close=fe.prototype.close,lg=function(){return new qr},cg=function(){return Mr()},ag=$n,qc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,go=Or,ih.COMPLETE="complete",og=ih,Zu.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Ht.prototype.listen=Ht.prototype.K,Ii=Zu,Et.prototype.listenOnce=Et.prototype.L,Et.prototype.getLastError=Et.prototype.Ka,Et.prototype.getLastErrorCode=Et.prototype.Ba,Et.prototype.getStatus=Et.prototype.Z,Et.prototype.getResponseJson=Et.prototype.Oa,Et.prototype.getResponseText=Et.prototype.oa,Et.prototype.send=Et.prototype.ea,Et.prototype.setWithCredentials=Et.prototype.Ha,rg=Et}).apply(typeof Kr<"u"?Kr:typeof self<"u"?self:typeof window<"u"?window:{});const td="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Pl("@firebase/firestore");function gi(){return os.logLevel}function $(n,...t){if(os.logLevel<=J.DEBUG){const e=t.map(Dl);os.debug(`Firestore (${Xs}): ${n}`,...e)}}function an(n,...t){if(os.logLevel<=J.ERROR){const e=t.map(Dl);os.error(`Firestore (${Xs}): ${n}`,...e)}}function Us(n,...t){if(os.logLevel<=J.WARN){const e=t.map(Dl);os.warn(`Firestore (${Xs}): ${n}`,...e)}}function Dl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(n="Unexpected state"){const t=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+n;throw an(t),new Error(t)}function ot(n,t){n||W()}function K(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Ue{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Fb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Xt.UNAUTHENTICATED))}shutdown(){}}class Ub{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Bb{constructor(t){this.t=t,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ot(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let r=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new sn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new sn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ot(typeof s.accessToken=="string"),new ug(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ot(t===null||typeof t=="string"),new Xt(t)}}class zb{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $b{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new zb(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jb{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hb{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ot(this.o===void 0);const s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ot(typeof e.token=="string"),this.R=e.token,new jb(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Wb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function nt(n,t){return n<t?-1:n>t?1:0}function Bs(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Rt.fromMillis(Date.now())}static fromDate(t){return Rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new Rt(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new Rt(0,0))}static max(){return new q(new Rt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e,s){e===void 0?e=0:e>t.length&&W(),s===void 0?s=t.length-e:s>t.length-e&&W(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Xi.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xi?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class dt extends Xi{construct(t,e,s){return new dt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new dt(e)}static emptyPath(){return new dt([])}}const qb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends Xi{construct(t,e,s){return new zt(t,e,s)}static isValidIdentifier(t){return qb.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new zt(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new zt(e)}static emptyPath(){return new zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(dt.fromString(t))}static fromName(t){return new j(dt.fromString(t).popFirst(5))}static empty(){return new j(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&dt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return dt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new dt(t.slice()))}}function Gb(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new Rt(e+1,0):new Rt(e,s));return new Mn(i,j.empty(),t)}function Kb(n){return new Mn(n.readTime,n.key,-1)}class Mn{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new Mn(q.min(),j.empty(),-1)}static max(){return new Mn(q.max(),j.empty(),-1)}}function Yb(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==Xb)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,s)=>{e(t)})}static reject(t){return new V((e,s)=>{s(t)})}static waitFor(t){return new V((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},c=>s(c))}),o=!0,r===i&&e()})}static or(t){let e=V.resolve(!1);for(const s of t)e=e.next(i=>i?V.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new V((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;e(t[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,e){return new V((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}function Jb(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function mr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ml{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ml.oe=-1;function ca(n){return n==null}function No(n){return n===0&&1/n==-1/0}function Zb(n){return typeof n=="number"&&Number.isInteger(n)&&!No(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ps(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function dg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e){this.comparator=t,this.root=e||Bt.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yr(this.root,t,this.comparator,!0)}}class Yr{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??Bt.RED,this.left=i??Bt.EMPTY,this.right=r??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new Bt(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const t=this.left.check();if(t!==this.right.check())throw W();return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,s,i,r){return this}insert(t,e,s){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new nd(this.data.getIterator())}getIteratorFrom(t){return new nd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof $t)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new $t(this.comparator);return e.data=t,e}}class nd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.fields=t,t.sort(zt.comparator)}static empty(){return new ge([])}unionWith(t){let e=new $t(zt.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new ge(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Bs(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class fg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new fg("Invalid base64 string: "+r):r}}(t);return new jt(e)}static fromUint8Array(t){const e=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(t);return new jt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const tw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(n){if(ot(!!n),typeof n=="string"){let t=0;const e=tw.exec(n);if(ot(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function as(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Ll(n){const t=n.mapValue.fields.__previous_value__;return Ol(t)?Ll(t):t}function Qi(n){const t=On(n.mapValue.fields.__local_write_time__.timestampValue);return new Rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(t,e,s,i,r,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Ji{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ji&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={mapValue:{}};function cs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ol(n)?4:sw(n)?9007199254740991:nw(n)?10:11:W()}function Fe(n,t){if(n===t)return!0;const e=cs(n);if(e!==cs(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Qi(n).isEqual(Qi(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=On(i.timestampValue),a=On(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,r){return as(i.bytesValue).isEqual(as(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,r){return At(i.geoPointValue.latitude)===At(r.geoPointValue.latitude)&&At(i.geoPointValue.longitude)===At(r.geoPointValue.longitude)}(n,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return At(i.integerValue)===At(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=At(i.doubleValue),a=At(r.doubleValue);return o===a?No(o)===No(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Bs(n.arrayValue.values||[],t.arrayValue.values||[],Fe);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(ed(o)!==ed(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fe(o[c],a[c])))return!1;return!0}(n,t);default:return W()}}function Zi(n,t){return(n.values||[]).find(e=>Fe(e,t))!==void 0}function zs(n,t){if(n===t)return 0;const e=cs(n),s=cs(t);if(e!==s)return nt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=At(r.integerValue||r.doubleValue),c=At(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return sd(n.timestampValue,t.timestampValue);case 4:return sd(Qi(n),Qi(t));case 5:return nt(n.stringValue,t.stringValue);case 6:return function(r,o){const a=as(r),c=as(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=nt(a[u],c[u]);if(h!==0)return h}return nt(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=nt(At(r.latitude),At(o.latitude));return a!==0?a:nt(At(r.longitude),At(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return id(n.arrayValue,t.arrayValue);case 10:return function(r,o){var a,c,u,h;const d=r.fields||{},p=o.fields||{},m=(a=d.value)===null||a===void 0?void 0:a.arrayValue,_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,b=nt(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return b!==0?b:id(m,_)}(n.mapValue,t.mapValue);case 11:return function(r,o){if(r===Xr.mapValue&&o===Xr.mapValue)return 0;if(r===Xr.mapValue)return 1;if(o===Xr.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=nt(c[d],h[d]);if(p!==0)return p;const m=zs(a[c[d]],u[h[d]]);if(m!==0)return m}return nt(c.length,h.length)}(n.mapValue,t.mapValue);default:throw W()}}function sd(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=On(n),s=On(t),i=nt(e.seconds,s.seconds);return i!==0?i:nt(e.nanos,s.nanos)}function id(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=zs(e[i],s[i]);if(r)return r}return nt(e.length,s.length)}function $s(n){return Gc(n)}function Gc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=On(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return as(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=Gc(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Gc(e.fields[o])}`;return i+"}"}(n.mapValue):W()}function rd(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Kc(n){return!!n&&"integerValue"in n}function Nl(n){return!!n&&"arrayValue"in n}function od(n){return!!n&&"nullValue"in n}function ad(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mo(n){return!!n&&"mapValue"in n}function nw(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ni(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ps(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Ni(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ni(n.arrayValue.values[e]);return t}return Object.assign({},n)}function sw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.value=t}static empty(){return new ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!mo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ni(e)}setAll(t){let e=zt.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=Ni(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());mo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Fe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];mo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){ps(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new ue(Ni(this.value))}}function pg(n){const t=[];return ps(n.fields,(e,s)=>{const i=new zt([e]);if(mo(s)){const r=pg(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new ge(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Jt(t,0,q.min(),q.min(),q.min(),ue.empty(),0)}static newFoundDocument(t,e,s,i){return new Jt(t,1,e,q.min(),s,i,0)}static newNoDocument(t,e){return new Jt(t,2,e,q.min(),q.min(),ue.empty(),0)}static newUnknownDocument(t,e){return new Jt(t,3,e,q.min(),q.min(),ue.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vo{constructor(t,e){this.position=t,this.inclusive=e}}function cd(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),e.key):s=zs(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ld(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Fe(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function iw(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class gg{}class Ct extends gg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new ow(t,e,s):e==="array-contains"?new lw(t,s):e==="in"?new uw(t,s):e==="not-in"?new hw(t,s):e==="array-contains-any"?new dw(t,s):new Ct(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new aw(t,s):new cw(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(zs(e,this.value)):e!==null&&cs(this.value)===cs(e)&&this.matchesComparison(zs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ie extends gg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ie(t,e)}matches(t){return mg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mg(n){return n.op==="and"}function _g(n){return rw(n)&&mg(n)}function rw(n){for(const t of n.filters)if(t instanceof Ie)return!1;return!0}function Yc(n){if(n instanceof Ct)return n.field.canonicalString()+n.op.toString()+$s(n.value);if(_g(n))return n.filters.map(t=>Yc(t)).join(",");{const t=n.filters.map(e=>Yc(e)).join(",");return`${n.op}(${t})`}}function yg(n,t){return n instanceof Ct?function(s,i){return i instanceof Ct&&s.op===i.op&&s.field.isEqual(i.field)&&Fe(s.value,i.value)}(n,t):n instanceof Ie?function(s,i){return i instanceof Ie&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&yg(o,i.filters[a]),!0):!1}(n,t):void W()}function vg(n){return n instanceof Ct?function(e){return`${e.field.canonicalString()} ${e.op} ${$s(e.value)}`}(n):n instanceof Ie?function(e){return e.op.toString()+" {"+e.getFilters().map(vg).join(" ,")+"}"}(n):"Filter"}class ow extends Ct{constructor(t,e,s){super(t,e,s),this.key=j.fromName(s.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class aw extends Ct{constructor(t,e){super(t,"in",e),this.keys=bg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class cw extends Ct{constructor(t,e){super(t,"not-in",e),this.keys=bg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function bg(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>j.fromName(s.referenceValue))}class lw extends Ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Nl(e)&&Zi(e.arrayValue,this.value)}}class uw extends Ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Zi(this.value.arrayValue,e)}}class hw extends Ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Zi(this.value.arrayValue,e)}}class dw extends Ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Nl(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>Zi(this.value.arrayValue,s))}}/**
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
 */class fw{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function ud(n,t=null,e=[],s=[],i=null,r=null,o=null){return new fw(n,t,e,s,i,r,o)}function Vl(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>Yc(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ca(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>$s(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>$s(s)).join(",")),t.ue=e}return t.ue}function Fl(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!iw(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!yg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ld(n.startAt,t.startAt)&&ld(n.endAt,t.endAt)}function Xc(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pw(n,t,e,s,i,r,o,a){return new Qs(n,t,e,s,i,r,o,a)}function Ul(n){return new Qs(n)}function hd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wg(n){return n.collectionGroup!==null}function Vi(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $t(zt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new tr(r,s))}),e.has(zt.keyField().canonicalString())||t.ce.push(new tr(zt.keyField(),s))}return t.ce}function Me(n){const t=K(n);return t.le||(t.le=gw(t,Vi(n))),t.le}function gw(n,t){if(n.limitType==="F")return ud(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new tr(i.field,r)});const e=n.endAt?new Vo(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Vo(n.startAt.position,n.startAt.inclusive):null;return ud(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function Qc(n,t){const e=n.filters.concat([t]);return new Qs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Fo(n,t,e){return new Qs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function la(n,t){return Fl(Me(n),Me(t))&&n.limitType===t.limitType}function Eg(n){return`${Vl(Me(n))}|lt:${n.limitType}`}function Rs(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>vg(i)).join(", ")}]`),ca(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>$s(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>$s(i)).join(",")),`Target(${s})`}(Me(n))}; limitType=${n.limitType})`}function ua(n,t){return t.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):j.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,t)&&function(s,i){for(const r of Vi(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(o,a,c){const u=cd(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,Vi(s),i)||s.endAt&&!function(o,a,c){const u=cd(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,Vi(s),i))}(n,t)}function mw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xg(n){return(t,e)=>{let s=!1;for(const i of Vi(n)){const r=_w(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function _w(n,t,e){const s=n.field.isKeyField()?j.comparator(t.key,e.key):function(r,o,a){const c=o.data.field(r),u=a.data.field(r);return c!==null&&u!==null?zs(c,u):W()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ps(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return dg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new vt(j.comparator);function cn(){return yw}const Tg=new vt(j.comparator);function Ai(...n){let t=Tg;for(const e of n)t=t.insert(e.key,e);return t}function Ig(n){let t=Tg;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Zn(){return Fi()}function Ag(){return Fi()}function Fi(){return new Js(n=>n.toString(),(n,t)=>n.isEqual(t))}const vw=new vt(j.comparator),bw=new $t(j.comparator);function X(...n){let t=bw;for(const e of n)t=t.add(e);return t}const ww=new $t(nt);function Ew(){return ww}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(t)?"-0":t}}function Sg(n){return{integerValue:""+n}}function xw(n,t){return Zb(t)?Sg(t):Bl(n,t)}/**
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
 */class ha{constructor(){this._=void 0}}function Tw(n,t,e){return n instanceof Uo?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Ol(r)&&(r=Ll(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof er?Pg(n,t):n instanceof nr?kg(n,t):function(i,r){const o=Rg(i,r),a=dd(o)+dd(i.Pe);return Kc(o)&&Kc(i.Pe)?Sg(a):Bl(i.serializer,a)}(n,t)}function Iw(n,t,e){return n instanceof er?Pg(n,t):n instanceof nr?kg(n,t):e}function Rg(n,t){return n instanceof Bo?function(s){return Kc(s)||function(r){return!!r&&"doubleValue"in r}(s)}(t)?t:{integerValue:0}:null}class Uo extends ha{}class er extends ha{constructor(t){super(),this.elements=t}}function Pg(n,t){const e=Cg(t);for(const s of n.elements)e.some(i=>Fe(i,s))||e.push(s);return{arrayValue:{values:e}}}class nr extends ha{constructor(t){super(),this.elements=t}}function kg(n,t){let e=Cg(t);for(const s of n.elements)e=e.filter(i=>!Fe(i,s));return{arrayValue:{values:e}}}class Bo extends ha{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function dd(n){return At(n.integerValue||n.doubleValue)}function Cg(n){return Nl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Aw(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof er&&i instanceof er||s instanceof nr&&i instanceof nr?Bs(s.elements,i.elements,Fe):s instanceof Bo&&i instanceof Bo?Fe(s.Pe,i.Pe):s instanceof Uo&&i instanceof Uo}(n.transform,t.transform)}class Sw{constructor(t,e){this.version=t,this.transformResults=e}}class ve{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ve}static exists(t){return new ve(void 0,t)}static updateTime(t){return new ve(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _o(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class da{}function Dg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new zl(n.key,ve.none()):new _r(n.key,n.data,ve.none());{const e=n.data,s=ue.empty();let i=new $t(zt.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Fn(n.key,s,new ge(i.toArray()),ve.none())}}function Rw(n,t,e){n instanceof _r?function(i,r,o){const a=i.value.clone(),c=pd(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Fn?function(i,r,o){if(!_o(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=pd(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(Mg(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ui(n,t,e,s){return n instanceof _r?function(r,o,a,c){if(!_o(r.precondition,o))return a;const u=r.value.clone(),h=gd(r.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,s):n instanceof Fn?function(r,o,a,c){if(!_o(r.precondition,o))return a;const u=gd(r.fieldTransforms,c,o),h=o.data;return h.setAll(Mg(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(d=>d.field))}(n,t,e,s):function(r,o,a){return _o(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Pw(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=Rg(s.transform,i||null);r!=null&&(e===null&&(e=ue.empty()),e.set(s.field,r))}return e||null}function fd(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Bs(s,i,(r,o)=>Aw(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class _r extends da{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fn extends da{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mg(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function pd(n,t,e){const s=new Map;ot(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Iw(o,a,e[i]))}return s}function gd(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,Tw(r,o,t))}return s}class zl extends da{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kw extends da{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Rw(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Ui(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Ui(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=Ag();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const c=Dg(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&Bs(this.mutations,t.mutations,(e,s)=>fd(e,s))&&Bs(this.baseMutations,t.baseMutations,(e,s)=>fd(e,s))}}class $l{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){ot(t.mutations.length===s.length);let i=function(){return vw}();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new $l(t,e,s,i)}}/**
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
 */class Dw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Mw{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,tt;function Ow(n){switch(n){default:return W();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Og(n){if(n===void 0)return an("GRPC error has no .code"),L.UNKNOWN;switch(n){case kt.OK:return L.OK;case kt.CANCELLED:return L.CANCELLED;case kt.UNKNOWN:return L.UNKNOWN;case kt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case kt.INTERNAL:return L.INTERNAL;case kt.UNAVAILABLE:return L.UNAVAILABLE;case kt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case kt.NOT_FOUND:return L.NOT_FOUND;case kt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case kt.ABORTED:return L.ABORTED;case kt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case kt.DATA_LOSS:return L.DATA_LOSS;default:return W()}}(tt=kt||(kt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Lw(){return new TextEncoder}/**
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
 */const Nw=new es([4294967295,4294967295],0);function md(n){const t=Lw().encode(n),e=new ig;return e.update(t),new Uint8Array(e.digest())}function _d(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new es([e,s],0),new es([i,r],0)]}class jl{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Si(`Invalid padding: ${e}`);if(s<0)throw new Si(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Si(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Si(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=es.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(es.fromNumber(s)));return i.compare(Nw)===1&&(i=new es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=md(t),[s,i]=_d(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new jl(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=md(t),[s,i]=_d(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,yr.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new fa(q.min(),i,new vt(nt),cn(),X())}}class yr{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new yr(s,e,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class Lg{constructor(t,e){this.targetId=t,this.me=e}}class Ng{constructor(t,e,s=jt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class yd{constructor(){this.fe=0,this.ge=bd(),this.pe=jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=X(),e=X(),s=X();return this.ge.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:W()}}),new yr(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=bd()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ot(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Vw{constructor(t){this.Le=t,this.Be=new Map,this.ke=cn(),this.qe=vd(),this.Qe=new vt(nt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:W()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const r=i.target;if(Xc(r))if(s===0){const o=new j(r.path);this.Ue(e,o,Jt.newNoDocument(o,q.min()))}else ot(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,u)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=as(s).toUint8Array()}catch(c){if(c instanceof fg)return Us("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new jl(o,i,r)}catch(c){return Us(c instanceof Si?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,r,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&Xc(a.target)){const c=new j(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Jt.newNoDocument(c,t))}r.be&&(e.set(o,r.ve()),r.Ce())}});let s=X();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(t));const i=new fa(t,e,this.Qe,this.ke,s);return this.ke=cn(),this.qe=vd(),this.Qe=new vt(nt),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new yd,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new $t(nt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||$("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new yd),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function vd(){return new vt(j.comparator)}function bd(){return new vt(j.comparator)}const Fw={asc:"ASCENDING",desc:"DESCENDING"},Uw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bw={and:"AND",or:"OR"};class zw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Jc(n,t){return n.useProto3Json||ca(t)?t:{value:t}}function zo(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function $w(n,t){return zo(n,t.toTimestamp())}function Oe(n){return ot(!!n),q.fromTimestamp(function(e){const s=On(e);return new Rt(s.seconds,s.nanos)}(n))}function Hl(n,t){return Zc(n,t).canonicalString()}function Zc(n,t){const e=function(i){return new dt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Fg(n){const t=dt.fromString(n);return ot(jg(t)),t}function tl(n,t){return Hl(n.databaseId,t.path)}function dc(n,t){const e=Fg(t);if(e.get(1)!==n.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(Bg(e))}function Ug(n,t){return Hl(n.databaseId,t)}function jw(n){const t=Fg(n);return t.length===4?dt.emptyPath():Bg(t)}function el(n){return new dt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bg(n){return ot(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wd(n,t,e){return{name:tl(n,t),fields:e.value.mapValue.fields}}function Hw(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:W()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(ot(h===void 0||typeof h=="string"),jt.fromBase64String(h||"")):(ot(h===void 0||h instanceof Buffer||h instanceof Uint8Array),jt.fromUint8Array(h||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?L.UNKNOWN:Og(u.code);return new B(h,u.message||"")}(o);e=new Ng(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=dc(n,s.document.name),r=Oe(s.document.updateTime),o=s.document.createTime?Oe(s.document.createTime):q.min(),a=new ue({mapValue:{fields:s.document.fields}}),c=Jt.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];e=new yo(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=dc(n,s.document),r=s.readTime?Oe(s.readTime):q.min(),o=Jt.newNoDocument(i,r),a=s.removedTargetIds||[];e=new yo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=dc(n,s.document),r=s.removedTargetIds||[];e=new yo([],r,i,null)}else{if(!("filter"in t))return W();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Mw(i,r),a=s.targetId;e=new Lg(a,o)}}return e}function Ww(n,t){let e;if(t instanceof _r)e={update:wd(n,t.key,t.value)};else if(t instanceof zl)e={delete:tl(n,t.key)};else if(t instanceof Fn)e={update:wd(n,t.key,t.data),updateMask:t0(t.fieldMask)};else{if(!(t instanceof kw))return W();e={verify:tl(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Uo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof er)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof nr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Bo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:$w(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(n,t.precondition)),e}function qw(n,t){return n&&n.length>0?(ot(t!==void 0),n.map(e=>function(i,r){let o=i.updateTime?Oe(i.updateTime):Oe(r);return o.isEqual(q.min())&&(o=Oe(r)),new Sw(o,i.transformResults||[])}(e,t))):[]}function Gw(n,t){return{documents:[Ug(n,t.path)]}}function Kw(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=Ug(n,i);const r=function(u){if(u.length!==0)return $g(Ie.create(u,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ps(p.field),direction:Qw(p.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Jc(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:e,parent:i}}function Yw(n){let t=jw(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){ot(s===1);const h=e.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];e.where&&(r=function(d){const p=zg(d);return p instanceof Ie&&_g(p)?p.getFilters():[p]}(e.where));let o=[];e.orderBy&&(o=function(d){return d.map(p=>function(_){return new tr(ks(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(e.orderBy));let a=null;e.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,ca(p)?null:p}(e.limit));let c=null;e.startAt&&(c=function(d){const p=!!d.before,m=d.values||[];return new Vo(m,p)}(e.startAt));let u=null;return e.endAt&&(u=function(d){const p=!d.before,m=d.values||[];return new Vo(m,p)}(e.endAt)),pw(t,i,o,r,a,"F",c,u)}function Xw(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function zg(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=ks(e.unaryFilter.field);return Ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ks(e.unaryFilter.field);return Ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ks(e.unaryFilter.field);return Ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(e.unaryFilter.field);return Ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return Ct.create(ks(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ie.create(e.compositeFilter.filters.map(s=>zg(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function Qw(n){return Fw[n]}function Jw(n){return Uw[n]}function Zw(n){return Bw[n]}function Ps(n){return{fieldPath:n.canonicalString()}}function ks(n){return zt.fromServerFormat(n.fieldPath)}function $g(n){return n instanceof Ct?function(e){if(e.op==="=="){if(ad(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NAN"}};if(od(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ad(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NAN"}};if(od(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(e.field),op:Jw(e.op),value:e.value}}}(n):n instanceof Ie?function(e){const s=e.getFilters().map(i=>$g(i));return s.length===1?s[0]:{compositeFilter:{op:Zw(e.op),filters:s}}}(n):W()}function t0(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function jg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e,s,i,r=q.min(),o=q.min(),a=jt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new wn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(t){this.ct=t}}function n0(n){const t=Yw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fo(t,t.limit,"L"):t}/**
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
 */class s0{constructor(){this.un=new i0}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Mn.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Mn.min())}updateCollectionGroup(t,e,s){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class i0{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new $t(dt.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new $t(dt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new js(0)}static kn(){return new js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.changes=new Js(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Jt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?V.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class o0{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&Ui(s.mutation,i,ge.empty(),Rt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,X()).next(()=>s))}getLocalViewOfDocuments(t,e,s=X()){const i=Zn();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=Ai();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=Zn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,X()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=cn();const o=Fi(),a=function(){return Fi()}();return e.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Fn)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ui(h.mutation,u,h.mutation.getFieldMask(),Rt.now())):o.set(u.key,ge.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),e.forEach((u,h)=>{var d;return a.set(u,new o0(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Fi();let i=new vt((o,a)=>o-a),r=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let h=s.get(c)||ge.empty();h=a.applyToLocalView(u,h),s.set(c,h);const d=(i.get(a.batchId)||X()).add(c);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=Ag();h.forEach(p=>{if(!r.has(p)){const m=Dg(e.get(p),s.get(p));m!==null&&d.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return V.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):wg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):V.resolve(Zn());let a=-1,c=r;return o.next(u=>V.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?V.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,c,u,X())).next(h=>({batchId:a,changes:Ig(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(s=>{let i=Ai();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=Ai();return this.indexManager.getCollectionParents(t,r).next(a=>V.forEach(a,c=>{const u=function(d,p){return new Qs(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i))).next(o=>{r.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Jt.newInvalidDocument(h)))});let a=Ai();return o.forEach((c,u)=>{const h=r.get(c);h!==void 0&&Ui(h.mutation,u,ge.empty(),Rt.now()),ua(e,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Oe(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:n0(i.bundledQuery),readTime:Oe(i.readTime)}}(e)),V.resolve()}}/**
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
 */class l0{constructor(){this.overlays=new vt(j.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Zn();return V.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.ht(t,e,r)}),V.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),V.resolve()}getOverlaysForCollection(t,e,s){const i=Zn(),r=e.length+1,o=new j(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new vt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Zn(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Zn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return V.resolve(a)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Dw(e,s));let r=this.Ir.get(e);r===void 0&&(r=X(),this.Ir.set(e,r)),this.Ir.set(e,r.add(s.key))}}/**
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
 */class u0{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.Tr=new $t(Mt.Er),this.dr=new $t(Mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new Mt(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new Mt(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new j(new dt([])),s=new Mt(e,t),i=new Mt(e,t+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new dt([])),s=new Mt(e,t),i=new Mt(e,t+1);let r=X();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new Mt(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Mt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||nt(t.wr,e.wr)}static Ar(t,e){return nt(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new $t(Mt.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cw(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Mt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),r=i<0?0:i;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Mt(e,0),i=new Mt(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new $t(nt);return e.forEach(i=>{const r=new Mt(i,0),o=new Mt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),V.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;j.isDocumentKey(r)||(r=r.child(""));const o=new Mt(new j(r),0);let a=new $t(nt);return this.br.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){ot(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return V.forEach(e.mutations,i=>{const r=new Mt(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new Mt(e,0),i=this.br.firstAfterOrEqual(s);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(t){this.Mr=t,this.docs=function(){return new vt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return V.resolve(s?s.document.mutableCopy():Jt.newInvalidDocument(e))}getEntries(t,e){let s=cn();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Jt.newInvalidDocument(i))}),V.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=cn();const o=e.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Yb(Kb(h),s)<=0||(i.has(h.key)||ua(e,h))&&(r=r.insert(h.key,h.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(t,e,s,i){W()}Or(t,e){return V.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new f0(this)}getSize(t){return V.resolve(this.size)}}class f0 extends r0{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(t){this.persistence=t,this.Nr=new Js(e=>Vl(e),Fl),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wl,this.targetCount=0,this.kr=js.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new js(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),V.waitFor(r).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return V.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),V.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),V.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return V.resolve(s)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ml(0),this.Kr=!1,this.Kr=!0,this.$r=new u0,this.referenceDelegate=t(this),this.Ur=new p0(this),this.indexManager=new s0,this.remoteDocumentCache=function(i){return new d0(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new e0(e),this.Gr=new c0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new l0,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new h0(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){$("MemoryPersistence","Starting transaction:",t);const i=new m0(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(t,e){return V.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class m0 extends Qb{constructor(t){super(),this.currentSequenceNumber=t}}class ql{constructor(t){this.persistence=t,this.Jr=new Wl,this.Yr=null}static Zr(t){return new ql(t)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),V.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,s=>{const i=j.fromPath(s);return this.ei(t,i).next(r=>{r||e.removeEntry(i,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=X(),i=X();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Gl(t,e.fromCache,s,i)}}/**
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
 */class _0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class y0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return vv()?8:Jb(te())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.Yi(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(t,e,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new _0;return this.Xi(t,e,o).next(a=>{if(r.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>r.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(gi()<=J.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Rs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(gi()<=J.DEBUG&&$("QueryEngine","Query:",Rs(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(gi()<=J.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Rs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Me(e))):V.resolve())}Yi(t,e){if(hd(e))return V.resolve(null);let s=Me(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Fo(e,null,"F"),s=Me(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=X(...r);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.ts(e,a);return this.ns(e,u,o,c.readTime)?this.Yi(t,Fo(e,null,"F")):this.rs(t,u,e,c)}))})))}Zi(t,e,s,i){return hd(e)||i.isEqual(q.min())?V.resolve(null):this.Ji.getDocuments(t,s).next(r=>{const o=this.ts(e,r);return this.ns(e,o,s,i)?V.resolve(null):(gi()<=J.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rs(e)),this.rs(t,o,e,Gb(i,-1)).next(a=>a))})}ts(t,e){let s=new $t(xg(t));return e.forEach((i,r)=>{ua(t,r)&&(s=s.add(r))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,s){return gi()<=J.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Rs(e)),this.Ji.getDocumentsMatchingQuery(t,e,Mn.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new vt(nt),this._s=new Js(r=>Vl(r),Fl),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new a0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function b0(n,t,e,s){return new v0(n,t,e,s)}async function Hg(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=X();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return e.localDocuments.getDocuments(s,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function w0(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const d=u.batch,p=d.keys();let m=V.resolve();return p.forEach(_=>{m=m.next(()=>h.getEntry(c,_)).next(b=>{const w=u.docVersions.get(_);ot(w!==null),b.version.compareTo(w)<0&&(d.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),h.addEntry(b)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(e,s,t,r).next(()=>r.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=X();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function Wg(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function E0(n,t){const e=K(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const a=[];t.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(e.Ur.removeMatchingKeys(r,h.removedDocuments,d).next(()=>e.Ur.addMatchingKeys(r,h.addedDocuments,d)));let m=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(d)!==null?m=m.withResumeToken(jt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(d,m),function(b,w,S){return b.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,m,h)&&a.push(e.Ur.updateTargetData(r,m))});let c=cn(),u=X();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(x0(r,o,t.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!s.isEqual(q.min())){const h=e.Ur.getLastRemoteSnapshotVersion(r).next(d=>e.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return V.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(e.os=i,r))}function x0(n,t,e){let s=X(),i=X();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=cn();return e.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(q.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function T0(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function I0(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(r=>r?(i=r,V.resolve(i)):e.Ur.allocateTargetId(s).next(o=>(i=new wn(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function nl(n,t,e){const s=K(n),i=s.os.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!mr(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function Ed(n,t,e){const s=K(n);let i=q.min(),r=X();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=K(c),p=d._s.get(h);return p!==void 0?V.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(s,o,Me(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?i:q.min(),e?r:X())).next(a=>(A0(s,mw(t),a),{documents:a,Ts:r})))}function A0(n,t,e){let s=n.us.get(t)||q.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.us.set(t,s)}class xd{constructor(){this.activeTargetIds=Ew()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class S0{constructor(){this.so=new xd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new xd,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class R0{_o(t){}shutdown(){}}/**
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
 */class Td{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qr=null;function fc(){return Qr===null?Qr=function(){return 268435456+Math.round(2147483648*Math.random())}():Qr++,"0x"+Qr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="WebChannelConnection";class C0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(e,s,i,r,o){const a=fc(),c=this.xo(e,s.toUriEncodedString());$("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,r,o),this.No(e,c,u,i).then(h=>($("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw Us("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}Lo(e,s,i,r,o,a){return this.Mo(e,s,i,r,o)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}xo(e,s){const i=P0[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const r=fc();return new Promise((o,a)=>{const c=new rg;c.setWithCredentials(!0),c.listenOnce(og.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case go.NO_ERROR:const h=c.getResponseJson();$(Gt,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(h)),o(h);break;case go.TIMEOUT:$(Gt,`RPC '${t}' ${r} timed out`),a(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const d=c.getStatus();if($(Gt,`RPC '${t}' ${r} failed with status:`,d,"response text:",c.getResponseText()),d>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const _=function(w){const S=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(S)>=0?S:L.UNKNOWN}(m.status);a(new B(_,m.message))}else a(new B(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(L.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{$(Gt,`RPC '${t}' ${r} completed.`)}});const u=JSON.stringify(i);$(Gt,`RPC '${t}' ${r} sending request:`,i),c.send(e,"POST",u,s,15)})}Bo(t,e,s){const i=fc(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=lg(),a=cg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const h=r.join("");$(Gt,`Creating RPC '${t}' stream ${i}: ${h}`,c);const d=o.createWebChannel(h,c);let p=!1,m=!1;const _=new k0({Io:w=>{m?$(Gt,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(p||($(Gt,`Opening RPC '${t}' stream ${i} transport.`),d.open(),p=!0),$(Gt,`RPC '${t}' stream ${i} sending:`,w),d.send(w))},To:()=>d.close()}),b=(w,S,P)=>{w.listen(S,C=>{try{P(C)}catch(D){setTimeout(()=>{throw D},0)}})};return b(d,Ii.EventType.OPEN,()=>{m||($(Gt,`RPC '${t}' stream ${i} transport opened.`),_.yo())}),b(d,Ii.EventType.CLOSE,()=>{m||(m=!0,$(Gt,`RPC '${t}' stream ${i} transport closed`),_.So())}),b(d,Ii.EventType.ERROR,w=>{m||(m=!0,Us(Gt,`RPC '${t}' stream ${i} transport errored:`,w),_.So(new B(L.UNAVAILABLE,"The operation could not be completed")))}),b(d,Ii.EventType.MESSAGE,w=>{var S;if(!m){const P=w.data[0];ot(!!P);const C=P,D=C.error||((S=C[0])===null||S===void 0?void 0:S.error);if(D){$(Gt,`RPC '${t}' stream ${i} received error:`,D);const O=D.status;let N=function(E){const I=kt[E];if(I!==void 0)return Og(I)}(O),x=D.message;N===void 0&&(N=L.INTERNAL,x="Unknown error status: "+O+" with message "+D.message),m=!0,_.So(new B(N,x)),d.close()}else $(Gt,`RPC '${t}' stream ${i} received:`,P),_.bo(P)}}),b(a,ag.STAT_EVENT,w=>{w.stat===qc.PROXY?$(Gt,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===qc.NOPROXY&&$(Gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n){return new zw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,e,s=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(t,e,s,i,r,o,a,c){this.ui=t,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qg(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(an(e.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return $("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class D0 extends Gg{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Hw(this.serializer,t),s=function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Oe(o.readTime):q.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=el(this.serializer),e.addTarget=function(r,o){let a;const c=o.target;if(a=Xc(c)?{documents:Gw(r,c)}:{query:Kw(r,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Vg(r,o.resumeToken);const u=Jc(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=zo(r,o.snapshotVersion.toTimestamp());const u=Jc(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const s=Xw(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=el(this.serializer),e.removeTarget=t,this.a_(e)}}class M0 extends Gg{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return ot(!!t.streamToken),this.lastStreamToken=t.streamToken,ot(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){ot(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=qw(t.writeResults,t.commitTime),s=Oe(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=el(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Ww(this.serializer,s))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0 extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(t,Zc(e,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(L.UNKNOWN,r.toString())})}Lo(t,e,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,Zc(e,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class L0{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(an(e),this.D_=!1):$("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{gs(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=K(c);u.L_.add(4),await vr(u),u.q_.set("Unknown"),u.L_.delete(4),await ga(u)}(this))})}),this.q_=new L0(s,i)}}async function ga(n){if(gs(n))for(const t of n.B_)await t(!0)}async function vr(n){for(const t of n.B_)await t(!1)}function Kg(n,t){const e=K(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ql(e)?Xl(e):Zs(e).r_()&&Yl(e,t))}function Kl(n,t){const e=K(n),s=Zs(e);e.N_.delete(t),s.r_()&&Yg(e,t),e.N_.size===0&&(s.r_()?s.o_():gs(e)&&e.q_.set("Unknown"))}function Yl(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Zs(n).A_(t)}function Yg(n,t){n.Q_.xe(t),Zs(n).R_(t)}function Xl(n){n.Q_=new Vw({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Zs(n).start(),n.q_.v_()}function Ql(n){return gs(n)&&!Zs(n).n_()&&n.N_.size>0}function gs(n){return K(n).L_.size===0}function Xg(n){n.Q_=void 0}async function V0(n){n.q_.set("Online")}async function F0(n){n.N_.forEach((t,e)=>{Yl(n,t)})}async function U0(n,t){Xg(n),Ql(n)?(n.q_.M_(t),Xl(n)):n.q_.set("Unknown")}async function B0(n,t,e){if(n.q_.set("Online"),t instanceof Ng&&t.state===2&&t.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,t)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await $o(n,s)}else if(t instanceof yo?n.Q_.Ke(t):t instanceof Lg?n.Q_.He(t):n.Q_.We(t),!e.isEqual(q.min()))try{const s=await Wg(n.localStore);e.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.N_.get(u);h&&r.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=r.N_.get(c);if(!h)return;r.N_.set(c,h.withResumeToken(jt.EMPTY_BYTE_STRING,h.snapshotVersion)),Yg(r,c);const d=new wn(h.target,c,u,h.sequenceNumber);Yl(r,d)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await $o(n,s)}}async function $o(n,t,e){if(!mr(t))throw t;n.L_.add(1),await vr(n),n.q_.set("Offline"),e||(e=()=>Wg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await ga(n)})}function Qg(n,t){return t().catch(e=>$o(n,e,t))}async function ma(n){const t=K(n),e=Ln(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;z0(t);)try{const i=await T0(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,$0(t,i)}catch(i){await $o(t,i)}Jg(t)&&Zg(t)}function z0(n){return gs(n)&&n.O_.length<10}function $0(n,t){n.O_.push(t);const e=Ln(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Jg(n){return gs(n)&&!Ln(n).n_()&&n.O_.length>0}function Zg(n){Ln(n).start()}async function j0(n){Ln(n).p_()}async function H0(n){const t=Ln(n);for(const e of n.O_)t.m_(e.mutations)}async function W0(n,t,e){const s=n.O_.shift(),i=$l.from(s,t,e);await Qg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ma(n)}async function q0(n,t){t&&Ln(n).V_&&await async function(s,i){if(function(o){return Ow(o)&&o!==L.ABORTED}(i.code)){const r=s.O_.shift();Ln(s).s_(),await Qg(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await ma(s)}}(n,t),Jg(n)&&Zg(n)}async function Id(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=gs(e);e.L_.add(3),await vr(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ga(e)}async function G0(n,t){const e=K(n);t?(e.L_.delete(2),await ga(e)):t||(e.L_.add(2),await vr(e),e.q_.set("Unknown"))}function Zs(n){return n.K_||(n.K_=function(e,s,i){const r=K(e);return r.w_(),new D0(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:V0.bind(null,n),Ro:F0.bind(null,n),mo:U0.bind(null,n),d_:B0.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Ql(n)?Xl(n):n.q_.set("Unknown")):(await n.K_.stop(),Xg(n))})),n.K_}function Ln(n){return n.U_||(n.U_=function(e,s,i){const r=K(e);return r.w_(),new M0(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:j0.bind(null,n),mo:q0.bind(null,n),f_:H0.bind(null,n),g_:W0.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await ma(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new Jl(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zl(n,t){if(an("AsyncQueue",`${t}: ${n}`),mr(n))return new B(L.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t){this.comparator=t?(e,s)=>t(e,s)||j.comparator(e.key,s.key):(e,s)=>j.comparator(e.key,s.key),this.keyedMap=Ai(),this.sortedSet=new vt(this.comparator)}static emptySet(t){return new Os(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Os)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new Os;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.W_=new vt(j.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):W():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Hs{constructor(t,e,s,i,r,o,a,c,u){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Hs(t,e,Os.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&la(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Y0{constructor(){this.queries=Sd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=K(e),r=i.queries;i.queries=Sd(),r.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function Sd(){return new Js(n=>Eg(n),la)}async function tm(n,t){const e=K(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.H_()&&t.J_()&&(s=2):(r=new K0,s=t.J_()?0:1);try{switch(s){case 0:r.z_=await e.onListen(i,!0);break;case 1:r.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=Zl(o,`Initialization of query '${Rs(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.j_.push(t),t.Z_(e.onlineState),r.z_&&t.X_(r.z_)&&tu(e)}async function em(n,t){const e=K(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.j_.indexOf(t);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=t.J_()?0:1:!r.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function X0(n,t){const e=K(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&tu(e)}function Q0(n,t,e){const s=K(n),i=s.queries.get(t);if(i)for(const r of i.j_)r.onError(e);s.queries.delete(t)}function tu(n){n.Y_.forEach(t=>{t.next()})}var sl,Rd;(Rd=sl||(sl={})).ea="default",Rd.Cache="cache";class nm{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Hs(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Hs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==sl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t){this.key=t}}class im{constructor(t){this.key=t}}class J0{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=xg(t),this.Ra=new Os(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new Ad,i=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,d)=>{const p=i.get(h),m=ua(this.query,d)?d:null,_=!!p&&this.mutatedKeys.has(p.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;p&&m?p.data.isEqual(m.data)?_!==b&&(s.track({type:3,doc:m}),w=!0):this.ga(p,m)||(s.track({type:2,doc:m}),w=!0,(c&&this.Aa(m,c)>0||u&&this.Aa(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),w=!0):p&&!m&&(s.track({type:1,doc:p}),w=!0,(c||u)&&(a=!0)),w&&(m?(o=o.add(m),r=b?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((h,d)=>function(m,_){const b=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return b(m)-b(_)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(s),i=i!=null&&i;const a=e&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Hs(this.query,t.Ra,r,o,t.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ad,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=X(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new im(s))}),this.da.forEach(s=>{t.has(s)||e.push(new sm(s))}),e}ba(t){this.Ta=t.Ts,this.da=X();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Z0{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class tE{constructor(t){this.key=t,this.va=!1}}class eE{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Js(a=>Eg(a),la),this.Ma=new Map,this.xa=new Set,this.Oa=new vt(j.comparator),this.Na=new Map,this.La=new Wl,this.Ba={},this.ka=new Map,this.qa=js.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function nE(n,t,e=!0){const s=um(n);let i;const r=s.Fa.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await rm(s,t,e,!0),i}async function sE(n,t){const e=um(n);await rm(e,t,!0,!1)}async function rm(n,t,e,s){const i=await I0(n.localStore,Me(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await iE(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&Kg(n.remoteStore,i),a}async function iE(n,t,e,s,i){n.Ka=(d,p,m)=>async function(b,w,S,P){let C=w.view.ma(S);C.ns&&(C=await Ed(b.localStore,w.query,!1).then(({documents:x})=>w.view.ma(x,C)));const D=P&&P.targetChanges.get(w.targetId),O=P&&P.targetMismatches.get(w.targetId)!=null,N=w.view.applyChanges(C,b.isPrimaryClient,D,O);return kd(b,w.targetId,N.wa),N.snapshot}(n,d,p,m);const r=await Ed(n.localStore,t,!0),o=new J0(t,r.Ts),a=o.ma(r.documents),c=yr.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);kd(n,e,u.wa);const h=new Z0(t,e,o);return n.Fa.set(t,h),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),u.snapshot}async function rE(n,t,e){const s=K(n),i=s.Fa.get(t),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!la(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await nl(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&Kl(s.remoteStore,i.targetId),il(s,i.targetId)}).catch(gr)):(il(s,i.targetId),await nl(s.localStore,i.targetId,!0))}async function oE(n,t){const e=K(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),Kl(e.remoteStore,s.targetId))}async function aE(n,t,e){const s=pE(n);try{const i=await function(o,a){const c=K(o),u=Rt.now(),h=a.reduce((m,_)=>m.add(_.key),X());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=cn(),b=X();return c.cs.getEntries(m,h).next(w=>{_=w,_.forEach((S,P)=>{P.isValidDocument()||(b=b.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,_)).next(w=>{d=w;const S=[];for(const P of a){const C=Pw(P,d.get(P.key).overlayedDocument);C!=null&&S.push(new Fn(P.key,C,pg(C.value.mapValue),ve.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,S,a)}).next(w=>{p=w;const S=w.applyToLocalDocumentSet(d,b);return c.documentOverlayCache.saveOverlays(m,w.batchId,S)})}).then(()=>({batchId:p.batchId,changes:Ig(d)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new vt(nt)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(s,i.batchId,e),await br(s,i.changes),await ma(s.remoteStore)}catch(i){const r=Zl(i,"Failed to persist write");e.reject(r)}}async function om(n,t){const e=K(n);try{const s=await E0(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.Na.get(r);o&&(ot(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ot(o.va):i.removedDocuments.size>0&&(ot(o.va),o.va=!1))}),await br(e,s,t)}catch(s){await gr(s)}}function Pd(n,t,e){const s=K(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=K(o);c.onlineState=a;let u=!1;c.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&tu(c)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function cE(n,t,e){const s=K(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),r=i&&i.key;if(r){let o=new vt(j.comparator);o=o.insert(r,Jt.newNoDocument(r,q.min()));const a=X().add(r),c=new fa(q.min(),new Map,new vt(nt),o,a);await om(s,c),s.Oa=s.Oa.remove(r),s.Na.delete(t),eu(s)}else await nl(s.localStore,t,!1).then(()=>il(s,t,e)).catch(gr)}async function lE(n,t){const e=K(n),s=t.batch.batchId;try{const i=await w0(e.localStore,t);cm(e,s,null),am(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await br(e,i)}catch(i){await gr(i)}}async function uE(n,t,e){const s=K(n);try{const i=await function(o,a){const c=K(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(ot(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,t);cm(s,t,e),am(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await br(s,i)}catch(i){await gr(i)}}function am(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function cm(n,t,e){const s=K(n);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function il(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||lm(n,s)})}function lm(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Kl(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),eu(n))}function kd(n,t,e){for(const s of e)s instanceof sm?(n.La.addReference(s.key,t),hE(n,s)):s instanceof im?($("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||lm(n,s.key)):W()}function hE(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||($("SyncEngine","New document in limbo: "+e),n.xa.add(s),eu(n))}function eu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(dt.fromString(t)),s=n.qa.next();n.Na.set(s,new tE(e)),n.Oa=n.Oa.insert(e,s),Kg(n.remoteStore,new wn(Me(Ul(e.path)),s,"TargetPurposeLimboResolution",Ml.oe))}}async function br(n,t,e){const s=K(n),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(u=>{var h;if((u||e)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=e==null?void 0:e.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){i.push(u);const d=Gl.Wi(c.targetId,u);r.push(d)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(c,u){const h=K(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>V.forEach(u,p=>V.forEach(p.$i,m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>V.forEach(p.Ui,m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!mr(d))throw d;$("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=h.os.get(p),_=m.snapshotVersion,b=m.withLastLimboFreeSnapshotVersion(_);h.os=h.os.insert(p,b)}}}(s.localStore,r))}async function dE(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){$("SyncEngine","User change. New user:",t.toKey());const s=await Hg(e.localStore,t);e.currentUser=t,function(r,o){r.ka.forEach(a=>{a.forEach(c=>{c.reject(new B(L.CANCELLED,o))})}),r.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await br(e,s.hs)}}function fE(n,t){const e=K(n),s=e.Na.get(t);if(s&&s.va)return X().add(s.key);{let i=X();const r=e.Ma.get(t);if(!r)return i;for(const o of r){const a=e.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function um(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=om.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cE.bind(null,t),t.Ca.d_=X0.bind(null,t.eventManager),t.Ca.$a=Q0.bind(null,t.eventManager),t}function pE(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=lE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uE.bind(null,t),t}class jo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=pa(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return b0(this.persistence,new y0,t.initialUser,this.serializer)}Ga(t){return new g0(ql.Zr,this.serializer)}Wa(t){return new S0}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jo.provider={build:()=>new jo};class rl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dE.bind(null,this.syncEngine),await G0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Y0}()}createDatastore(t){const e=pa(t.databaseInfo.databaseId),s=function(r){return new C0(r)}(t.databaseInfo);return function(r,o,a,c){return new O0(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,r,o,a){return new N0(s,i,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Pd(this.syncEngine,e,0),function(){return Td.D()?new Td:new R0}())}createSyncEngine(t,e){return function(i,r,o,a,c,u,h){const d=new eE(i,r,o,a,c,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const r=K(i);$("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await vr(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}rl.provider={build:()=>new rl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):an("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=hg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Zl(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function gc(n,t){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Hg(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Cd(n,t){n.asyncQueue.verifyOperationInProgress();const e=await mE(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>Id(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Id(t.remoteStore,i)),n._onlineComponents=t}async function mE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await gc(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Us("Error using user provided cache. Falling back to memory cache: "+e),await gc(n,new jo)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await gc(n,new jo);return n._offlineComponents}async function dm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Cd(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Cd(n,new rl))),n._onlineComponents}function _E(n){return dm(n).then(t=>t.syncEngine)}async function fm(n){const t=await dm(n),e=t.eventManager;return e.onListen=nE.bind(null,t.syncEngine),e.onUnlisten=rE.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=sE.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=oE.bind(null,t.syncEngine),e}function yE(n,t,e={}){const s=new sn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new hm({next:p=>{h.Za(),o.enqueueAndForget(()=>em(r,d));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new nm(Ul(a.path),h,{includeMetadataChanges:!0,_a:!0});return tm(r,d)}(await fm(n),n.asyncQueue,t,e,s)),s.promise}function vE(n,t,e={}){const s=new sn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new hm({next:p=>{h.Za(),o.enqueueAndForget(()=>em(r,d)),p.fromCache&&c.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new nm(a,h,{includeMetadataChanges:!0,_a:!0});return tm(r,d)}(await fm(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function pm(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n,t,e){if(!e)throw new B(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function bE(n,t,e,s){if(t===!0&&s===!0)throw new B(L.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Md(n){if(!j.isDocumentKey(n))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Od(n){if(j.isDocumentKey(n))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _a(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W()}function Ae(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=_a(n);throw new B(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function wE(n,t){if(t<=0)throw new B(L.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pm((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ya{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ld({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ld(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Fb;switch(s.type){case"firstParty":return new $b(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Dd.get(e);s&&($("ComponentProvider","Removing Datastore"),Dd.delete(e),s.terminate())}(this),Promise.resolve()}}function EE(n,t,e,s={}){var i;const r=(n=Ae(n,ya))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Xt.MOCK_USER;else{a=Jp(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Xt(u)}n._authCredentials=new Ub(new ug(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Un(this.firestore,t,this._query)}}class oe{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new oe(this.firestore,t,this._key)}}class Pn extends Un{constructor(t,e,s){super(t,e,Ul(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new oe(this.firestore,null,new j(t))}withConverter(t){return new Pn(this.firestore,t,this._path)}}function de(n,t,...e){if(n=It(n),gm("collection","path",t),n instanceof ya){const s=dt.fromString(t,...e);return Od(s),new Pn(n,null,s)}{if(!(n instanceof oe||n instanceof Pn))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(dt.fromString(t,...e));return Od(s),new Pn(n.firestore,null,s)}}function ln(n,t,...e){if(n=It(n),arguments.length===1&&(t=hg.newId()),gm("doc","path",t),n instanceof ya){const s=dt.fromString(t,...e);return Md(s),new oe(n,null,new j(s))}{if(!(n instanceof oe||n instanceof Pn))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(dt.fromString(t,...e));return Md(s),new oe(n.firestore,n instanceof Pn?n.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qg(this,"async_queue_retry"),this.Vu=()=>{const s=pc();s&&$("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=pc();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new sn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!mr(t))throw t;$("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw an("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Jl.createAndSchedule(this,t,e,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class ms extends ya{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new Nd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Nd(t),this._firestoreClient=void 0,await t}}}function xE(n,t){const e=typeof n=="object"?n:Cl(),s=typeof n=="string"?n:"(default)",i=aa(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Yp("firestore");r&&EE(i,...r)}return i}function nu(n){if(n._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||TE(n),n._firestoreClient}function TE(n){var t,e,s;const i=n._freezeSettings(),r=function(a,c,u,h){return new ew(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,pm(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new gE(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ws(jt.fromBase64String(t))}catch(e){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ws(jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
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
 */class ru{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=/^__.*__$/;class AE{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new Fn(t,this.data,this.fieldMask,e,this.fieldTransforms):new _r(t,this.data,e,this.fieldTransforms)}}class mm{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new Fn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _m(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class ou{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ou(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ho(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(_m(this.Cu)&&IE.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class SE{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||pa(t)}Qu(t,e,s,i=!1){return new ou({Cu:t,methodName:e,qu:s,path:zt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ba(n){const t=n._freezeSettings(),e=pa(n._databaseId);return new SE(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ym(n,t,e,s,i,r={}){const o=n.Qu(r.merge||r.mergeFields?2:0,t,e,i);au("Data must be an object, but it was:",o,s);const a=vm(s,o);let c,u;if(r.merge)c=new ge(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=ol(t,d,e);if(!o.contains(p))throw new B(L.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);wm(h,p)||h.push(p)}c=new ge(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new AE(new ue(a),c,u)}class wa extends su{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof wa}}function RE(n,t,e,s){const i=n.Qu(1,t,e);au("Data must be an object, but it was:",i,s);const r=[],o=ue.empty();ps(s,(c,u)=>{const h=cu(t,c,e);u=It(u);const d=i.Nu(h);if(u instanceof wa)r.push(h);else{const p=wr(u,d);p!=null&&(r.push(h),o.set(h,p))}});const a=new ge(r);return new mm(o,a,i.fieldTransforms)}function PE(n,t,e,s,i,r){const o=n.Qu(1,t,e),a=[ol(t,s,e)],c=[i];if(r.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<r.length;p+=2)a.push(ol(t,r[p])),c.push(r[p+1]);const u=[],h=ue.empty();for(let p=a.length-1;p>=0;--p)if(!wm(u,a[p])){const m=a[p];let _=c[p];_=It(_);const b=o.Nu(m);if(_ instanceof wa)u.push(m);else{const w=wr(_,b);w!=null&&(u.push(m),h.set(m,w))}}const d=new ge(u);return new mm(h,d,o.fieldTransforms)}function kE(n,t,e,s=!1){return wr(e,n.Qu(s?4:3,t))}function wr(n,t){if(bm(n=It(n)))return au("Unsupported field value:",t,n),vm(n,t);if(n instanceof su)return function(s,i){if(!_m(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=wr(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,t)}return function(s,i){if((s=It(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return xw(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Rt.fromDate(s);return{timestampValue:zo(i.serializer,r)}}if(s instanceof Rt){const r=new Rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:zo(i.serializer,r)}}if(s instanceof iu)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ws)return{bytesValue:Vg(i.serializer,s._byteString)};if(s instanceof oe){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hl(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof ru)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Bl(a.serializer,c)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${_a(s)}`)}(n,t)}function vm(n,t){const e={};return dg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ps(n,(s,i)=>{const r=wr(i,t.Mu(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function bm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Rt||n instanceof iu||n instanceof Ws||n instanceof oe||n instanceof su||n instanceof ru)}function au(n,t,e){if(!bm(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=_a(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function ol(n,t,e){if((t=It(t))instanceof va)return t._internalPath;if(typeof t=="string")return cu(n,t);throw Ho("Field path arguments must be of type string or ",n,!1,void 0,e)}const CE=new RegExp("[~\\*/\\[\\]]");function cu(n,t,e){if(t.search(CE)>=0)throw Ho(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new va(...t.split("."))._internalPath}catch{throw Ho(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ho(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new B(L.INVALID_ARGUMENT,a+n+c)}function wm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new DE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ea("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class DE extends Em{data(){return super.data()}}function Ea(n,t){return typeof t=="string"?cu(n,t):t instanceof va?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lu{}class uu extends lu{}function Ee(n,t,...e){let s=[];t instanceof lu&&s.push(t),s=s.concat(e),function(r){const o=r.filter(c=>c instanceof hu).length,a=r.filter(c=>c instanceof xa).length;if(o>1||o>0&&a>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class xa extends uu{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new xa(t,e,s)}_apply(t){const e=this._parse(t);return xm(t._query,e),new Un(t.firestore,t.converter,Qc(t._query,e))}_parse(t){const e=ba(t.firestore);return function(r,o,a,c,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ud(d,h);const m=[];for(const _ of d)m.push(Fd(c,r,_));p={arrayValue:{values:m}}}else p=Fd(c,r,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ud(d,h),p=kE(a,o,d,h==="in"||h==="not-in");return Ct.create(u,h,p)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function ce(n,t,e){const s=t,i=Ea("where",n);return xa._create(i,s,e)}class hu extends lu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new hu(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:Ie.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)xm(o,c),o=Qc(o,c)}(t._query,e),new Un(t.firestore,t.converter,Qc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class du extends uu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new du(t,e)}_apply(t){const e=function(i,r,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tr(r,o)}(t._query,this._field,this._direction);return new Un(t.firestore,t.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new Qs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function Vd(n,t="asc"){const e=t,s=Ea("orderBy",n);return du._create(s,e)}class fu extends uu{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new fu(t,e,s)}_apply(t){return new Un(t.firestore,t.converter,Fo(t._query,this._limit,this._limitType))}}function mc(n){return wE("limit",n),fu._create("limit",n,"F")}function Fd(n,t,e){if(typeof(e=It(e))=="string"){if(e==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wg(t)&&e.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(dt.fromString(e));if(!j.isDocumentKey(s))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return rd(n,new j(s))}if(e instanceof oe)return rd(n,e._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_a(e)}.`)}function Ud(n,t){if(!Array.isArray(n)||n.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xm(n,t){const e=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class OE{convertValue(t,e="none"){switch(cs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return At(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(as(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw W()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return ps(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertVectorValue(t){var e,s,i;const r=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>At(o.doubleValue));return new ru(r)}convertGeoPoint(t){return new iu(At(t.latitude),At(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=Ll(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(Qi(t));default:return null}}convertTimestamp(t){const e=On(t);return new Rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=dt.fromString(t);ot(jg(s));const i=new Ji(s.get(1),s.get(3)),r=new j(s.popFirst(5));return i.isEqual(e)||an(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Im extends Em{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Ea("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class vo extends Im{data(t={}){return super.data(t)}}class LE{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ri(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new vo(this._firestore,this._userDataWriter,s.key,s,new Ri(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new vo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ri(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new vo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ri(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:NE(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function NE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(n){n=Ae(n,oe);const t=Ae(n.firestore,ms);return yE(nu(t),n._key).then(e=>UE(t,n,e))}class Am extends OE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ws(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new oe(this.firestore,null,e)}}function Ut(n){n=Ae(n,Un);const t=Ae(n.firestore,ms),e=nu(t),s=new Am(t);return ME(n._query),vE(e,n._query).then(i=>new LE(t,s,n,i))}function VE(n,t,e){n=Ae(n,oe);const s=Ae(n.firestore,ms),i=Tm(n.converter,t);return Ia(s,[ym(ba(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,ve.none())])}function Ta(n,t,e,...s){n=Ae(n,oe);const i=Ae(n.firestore,ms),r=ba(i);let o;return o=typeof(t=It(t))=="string"||t instanceof va?PE(r,"updateDoc",n._key,t,e,s):RE(r,"updateDoc",n._key,t),Ia(i,[o.toMutation(n._key,ve.exists(!0))])}function FE(n){return Ia(Ae(n.firestore,ms),[new zl(n._key,ve.none())])}function Sm(n,t){const e=Ae(n.firestore,ms),s=ln(n),i=Tm(n.converter,t);return Ia(e,[ym(ba(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,ve.exists(!1))]).then(()=>s)}function Ia(n,t){return function(s,i){const r=new sn;return s.asyncQueue.enqueueAndForget(async()=>aE(await _E(s),i,r)),r.promise}(nu(n),t)}function UE(n,t,e){const s=e.docs.get(t._key),i=new Am(n);return new Im(n,i,t._key,s,new Ri(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Xs=i})(fs),rs(new Dn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new ms(new Bb(s.getProvider("auth-internal")),new Hb(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),De(td,"4.7.3",t),De(td,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="firebasestorage.googleapis.com",Pm="storageBucket",BE=2*60*1e3,zE=10*60*1e3,$E=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Ue{constructor(t,e,s=0){super(_c(t),`Firebase Storage: ${e} (${_c(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return _c(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pt||(pt={}));function _c(n){return"storage/"+n}function pu(){const n="An unknown error occurred, please check the error payload for server response.";return new bt(pt.UNKNOWN,n)}function jE(n){return new bt(pt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function HE(n){return new bt(pt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new bt(pt.UNAUTHENTICATED,n)}function qE(){return new bt(pt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function GE(n){return new bt(pt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function km(){return new bt(pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Cm(){return new bt(pt.CANCELED,"User canceled the upload/download.")}function KE(n){return new bt(pt.INVALID_URL,"Invalid URL '"+n+"'.")}function YE(n){return new bt(pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function XE(){return new bt(pt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Pm+"' property when initializing the app?")}function Dm(){return new bt(pt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function QE(){return new bt(pt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function JE(){return new bt(pt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZE(n){return new bt(pt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function al(n){return new bt(pt.INVALID_ARGUMENT,n)}function Mm(){return new bt(pt.APP_DELETED,"The Firebase app was deleted.")}function tx(n){return new bt(pt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bi(n,t){return new bt(pt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function mi(n){throw new bt(pt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=me.makeFromUrl(t,e)}catch{return new me(t,"")}if(s.path==="")return s;throw YE(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",d=e.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),_={bucket:1,path:3},b=e===Rm?"(?:storage.googleapis.com|storage.cloud.google.com)":e,w="([^?#]*)",S=new RegExp(`^https?://${b}/${i}/${w}`,"i"),C=[{regex:a,indices:c,postModify:r},{regex:m,indices:_,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<C.length;D++){const O=C[D],N=O.regex.exec(t);if(N){const x=N[O.indices.bucket];let v=N[O.indices.path];v||(v=""),s=new me(x,v),O.postModify(s);break}}if(s==null)throw KE(t);return s}}class ex{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...w){u||(u=!0,t.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,n(m,c())},w)}function p(){r&&clearTimeout(r)}function m(w,...S){if(u){p();return}if(w){p(),h.call(null,w,...S);return}if(c()||o){p(),h.call(null,w,...S);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,d(C)}let _=!1;function b(w){_||(_=!0,p(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,b(!0)},e),b}function sx(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(n){return n!==void 0}function rx(n){return typeof n=="function"}function ox(n){return typeof n=="object"&&!Array.isArray(n)}function Aa(n){return typeof n=="string"||n instanceof String}function zd(n){return gu()&&n instanceof Blob}function gu(){return typeof Blob<"u"}function $d(n,t,e,s){if(s<t)throw al(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw al(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function Om(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var ns;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ns||(ns={}));/**
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
 */function Lm(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=t.indexOf(n)!==-1;return e||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(t,e,s,i,r,o,a,c,u,h,d,p=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new Jr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ns.NO_ERROR,c=r.getStatus();if(!a||Lm(c,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===ns.ABORT;s(!1,new Jr(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Jr(u,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());ix(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=pu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Mm():Cm();o(c)}else{const c=km();o(c)}};this.canceled_?e(!1,new Jr(!1,null,!0)):this.backoffId_=nx(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&sx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jr{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function cx(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function lx(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ux(n,t){t&&(n["X-Firebase-GMPID"]=t)}function hx(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function dx(n,t,e,s,i,r,o=!0){const a=Om(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return ux(u,t),cx(u,e),lx(u,r),hx(u,s),new ax(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function px(...n){const t=fx();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(gu())return new Blob(n);throw new bt(pt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function gx(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function mx(n){if(typeof atob>"u")throw ZE("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yc{constructor(t,e){this.data=t,this.contentType=e||null}}function _x(n,t){switch(n){case Ce.RAW:return new yc(Nm(t));case Ce.BASE64:case Ce.BASE64URL:return new yc(Vm(n,t));case Ce.DATA_URL:return new yc(vx(t),bx(t))}throw pu()}function Nm(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function yx(n){let t;try{t=decodeURIComponent(n)}catch{throw Bi(Ce.DATA_URL,"Malformed data URL.")}return Nm(t)}function Vm(n,t){switch(n){case Ce.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw Bi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ce.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw Bi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=mx(t)}catch(i){throw i.message.includes("polyfill")?i:Bi(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class Fm{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Bi(Ce.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=wx(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function vx(n){const t=new Fm(n);return t.base64?Vm(Ce.BASE64,t.rest):yx(t.rest)}function bx(n){return new Fm(n).contentType}function wx(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){let s=0,i="";zd(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(zd(this.data_)){const s=this.data_,i=gx(s,t,e);return i===null?null:new mn(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new mn(s,!0)}}static getBlob(...t){if(gu()){const e=t.map(s=>s instanceof mn?s.data_:s);return new mn(px.apply(null,e))}else{const e=t.map(o=>Aa(o)?_x(Ce.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new mn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(n){let t;try{t=JSON.parse(n)}catch{return null}return ox(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function xx(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function Bm(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(n,t){return t}class re{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||Tx}}let Zr=null;function Ix(n){return!Aa(n)||n.length<2?n:Bm(n)}function zm(){if(Zr)return Zr;const n=[];n.push(new re("bucket")),n.push(new re("generation")),n.push(new re("metageneration")),n.push(new re("name","fullPath",!0));function t(r,o){return Ix(o)}const e=new re("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new re("size");return i.xform=s,n.push(i),n.push(new re("timeCreated")),n.push(new re("updated")),n.push(new re("md5Hash",null,!0)),n.push(new re("cacheControl",null,!0)),n.push(new re("contentDisposition",null,!0)),n.push(new re("contentEncoding",null,!0)),n.push(new re("contentLanguage",null,!0)),n.push(new re("contentType",null,!0)),n.push(new re("metadata","customMetadata",!0)),Zr=n,Zr}function Ax(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new me(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function Sx(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return Ax(s,n),s}function $m(n,t,e){const s=Um(t);return s===null?null:Sx(n,s,e)}function Rx(n,t,e,s){const i=Um(t);if(i===null||!Aa(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const h=n.bucket,d=n.fullPath,p="/b/"+o(h)+"/o/"+o(d),m=Er(p,e,s),_=Om({alt:"media",token:u});return m+_})[0]}function jm(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class ti{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n){if(!n)throw pu()}function mu(n,t){function e(s,i){const r=$m(n,i,t);return rn(r!==null),r}return e}function Px(n,t){function e(s,i){const r=$m(n,i,t);return rn(r!==null),Rx(r,i,n.host,n._protocol)}return e}function xr(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=qE():i=WE():e.getStatus()===402?i=HE(n.bucket):e.getStatus()===403?i=GE(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function Hm(n){const t=xr(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=jE(n.path)),r.serverResponse=i.serverResponse,r}return e}function kx(n,t,e){const s=t.fullServerUrl(),i=Er(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new ti(i,r,mu(n,e),o);return a.errorHandler=Hm(t),a}function Cx(n,t,e){const s=t.fullServerUrl(),i=Er(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new ti(i,r,Px(n,e),o);return a.errorHandler=Hm(t),a}function Dx(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function Wm(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=Dx(null,t)),s}function Mx(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let D=0;D<2;D++)C=C+Math.random().toString().slice(2);return C}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Wm(t,s,i),h=jm(u,e),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",m=mn.getBlob(d,s,p);if(m===null)throw Dm();const _={name:u.fullPath},b=Er(r,n.host,n._protocol),w="POST",S=n.maxUploadRetryTime,P=new ti(b,w,mu(n,e),S);return P.urlParams=_,P.headers=o,P.body=m.uploadData(),P.errorHandler=xr(t),P}class Wo{constructor(t,e,s,i){this.current=t,this.total=e,this.finalized=!!s,this.metadata=i||null}}function _u(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{rn(!1)}return rn(!!e&&(t||["active"]).indexOf(e)!==-1),e}function Ox(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o=Wm(t,s,i),a={name:o.fullPath},c=Er(r,n.host,n._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=jm(o,e),p=n.maxUploadRetryTime;function m(b){_u(b);let w;try{w=b.getResponseHeader("X-Goog-Upload-URL")}catch{rn(!1)}return rn(Aa(w)),w}const _=new ti(c,u,m,p);return _.urlParams=a,_.headers=h,_.body=d,_.errorHandler=xr(t),_}function Lx(n,t,e,s){const i={"X-Goog-Upload-Command":"query"};function r(u){const h=_u(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{rn(!1)}d||rn(!1);const p=Number(d);return rn(!isNaN(p)),new Wo(p,s.size(),h==="final")}const o="POST",a=n.maxUploadRetryTime,c=new ti(e,o,r,a);return c.headers=i,c.errorHandler=xr(t),c}const jd=256*1024;function Nx(n,t,e,s,i,r,o,a){const c=new Wo(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw QE();const u=c.total-c.current;let h=u;i>0&&(h=Math.min(h,i));const d=c.current,p=d+h;let m="";h===0?m="finalize":u===h?m="upload, finalize":m="upload";const _={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},b=s.slice(d,p);if(b===null)throw Dm();function w(D,O){const N=_u(D,["active","final"]),x=c.current+h,v=s.size();let E;return N==="final"?E=mu(t,r)(D,O):E=null,new Wo(x,v,N==="final",E)}const S="POST",P=t.maxUploadRetryTime,C=new ti(e,S,w,P);return C.headers=_,C.body=b.uploadData(),C.progressCallback=a||null,C.errorHandler=xr(n),C}const le={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function vc(n){switch(n){case"running":case"pausing":case"canceling":return le.RUNNING;case"paused":return le.PAUSED;case"success":return le.SUCCESS;case"canceled":return le.CANCELED;case"error":return le.ERROR;default:return le.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(t,e,s){if(rx(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const r=t;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class Fx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ns.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ns.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ns.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw mi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw mi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw mi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw mi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw mi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ux extends Fx{initXhr(){this.xhr_.responseType="text"}}function Cs(){return new Ux}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=zm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(pt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(Lm(i.status,[]))if(r)i=km();else{this.sleepTime=Math.max(this.sleepTime*2,$E),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(pt.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=Ox(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Cs,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const i=Lx(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,Cs,e,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=jd*this._chunkMultiplier,e=new Wo(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=Nx(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Cs,i,r,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){jd*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=kx(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Cs,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=Mx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Cs,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Cm(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=vc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,i){const r=new Vx(e||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(vc(this._state)){case le.SUCCESS:Ts(this._resolve.bind(null,this.snapshot))();break;case le.CANCELED:case le.ERROR:const e=this._reject;Ts(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(vc(this._state)){case le.RUNNING:case le.PAUSED:t.next&&Ts(t.next.bind(t,this.snapshot))();break;case le.SUCCESS:t.complete&&Ts(t.complete.bind(t))();break;case le.CANCELED:case le.ERROR:t.error&&Ts(t.error.bind(t,this._error))();break;default:t.error&&Ts(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class ls{constructor(t,e){this._service=t,e instanceof me?this._location=e:this._location=me.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ls(t,e)}get root(){const t=new me(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bm(this._location.path)}get storage(){return this._service}get parent(){const t=Ex(this._location.path);if(t===null)return null;const e=new me(this._location.bucket,t);return new ls(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw tx(t)}}function zx(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new Bx(n,new mn(t),e)}function $x(n){n._throwIfRoot("getDownloadURL");const t=Cx(n.storage,n._location,zm());return n.storage.makeRequestWithTokens(t,Cs).then(e=>{if(e===null)throw JE();return e})}function jx(n,t){const e=xx(n._location.path,t),s=new me(n._location.bucket,e);return new ls(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(n){return/^[A-Za-z]+:\/\//.test(n)}function Wx(n,t){return new ls(n,t)}function qm(n,t){if(n instanceof yu){const e=n;if(e._bucket==null)throw XE();const s=new ls(e,e._bucket);return t!=null?qm(s,t):s}else return t!==void 0?jx(n,t):n}function qx(n,t){if(t&&Hx(t)){if(n instanceof yu)return Wx(n,t);throw al("To use ref(service, url), the first argument must be a Storage instance.")}else return qm(n,t)}function Hd(n,t){const e=t==null?void 0:t[Pm];return e==null?null:me.makeFromBucketSpec(e,n)}function Gx(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Jp(i,n.app.options.projectId))}class yu{constructor(t,e,s,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Rm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BE,this._maxUploadRetryTime=zE,this._requests=new Set,i!=null?this._bucket=me.makeFromBucketSpec(i,this._host):this._bucket=Hd(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=me.makeFromBucketSpec(this._url,t):this._bucket=Hd(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$d("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$d("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ls(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new ex(Mm());{const o=dx(t,this._appId,s,i,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const Wd="@firebase/storage",qd="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="storage";function Kx(n,t,e){return n=It(n),zx(n,t,e)}function Yx(n){return n=It(n),$x(n)}function Xx(n,t){return n=It(n),qx(n,t)}function Qx(n=Cl(),t){n=It(n);const s=aa(n,Gm).getImmediate({identifier:t}),i=Yp("storage");return i&&Jx(s,...i),s}function Jx(n,t,e,s={}){Gx(n,t,e,s)}function Zx(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new yu(e,s,i,t,fs)}function tT(){rs(new Dn(Gm,Zx,"PUBLIC").setMultipleInstances(!0)),De(Wd,qd,""),De(Wd,qd,"esm2017")}tT();function vu(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(e[s[i]]=n[s[i]]);return e}function Km(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eT=Km,Ym=new fr("auth","Firebase",Km());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new Pl("@firebase/auth");function nT(n,...t){qo.logLevel<=J.WARN&&qo.warn(`Auth (${fs}): ${n}`,...t)}function bo(n,...t){qo.logLevel<=J.ERROR&&qo.error(`Auth (${fs}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,...t){throw bu(n,...t)}function Le(n,...t){return bu(n,...t)}function Xm(n,t,e){const s=Object.assign(Object.assign({},eT()),{[t]:e});return new fr("auth","Firebase",s).create(t,{appName:n.name})}function kn(n){return Xm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bu(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return Ym.create(n,...t)}function H(n,t,...e){if(!n)throw bu(t,...e)}function Qe(n){const t="INTERNAL ASSERTION FAILED: "+n;throw bo(t),new Error(t)}function un(n,t){n||Qe(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function sT(){return Gd()==="http:"||Gd()==="https:"}function Gd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sT()||mv()||"connection"in navigator)?navigator.onLine:!0}function rT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e){this.shortDelay=t,this.longDelay=e,un(e>t,"Short delay should be less than long delay!"),this.isMobile=fv()||_v()}get(){return iT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n,t){un(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Tr(3e4,6e4);function Bn(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function hn(n,t,e,s,i={}){return Jm(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=pr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:t,headers:c},r);return gv()||(u.referrerPolicy="no-referrer"),Qm.fetch()(Zm(n,n.config.apiHost,e,a),u)})}async function Jm(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},oT),t);try{const i=new lT(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw to(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw to(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw to(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xm(n,h,u);Se(n,h)}}catch(i){if(i instanceof Ue)throw i;Se(n,"network-request-failed",{message:String(i)})}}async function Sa(n,t,e,s,i={}){const r=await hn(n,t,e,s,i);return"mfaPendingCredential"in r&&Se(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Zm(n,t,e,s){const i=`${t}${e}?${s}`;return n.config.emulator?wu(n.config,i):`${n.config.apiScheme}://${i}`}function cT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lT{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(Le(this.auth,"network-request-failed")),aT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=Le(n,t,s);return i.customData._tokenResponse=e,i}function Kd(n){return n!==void 0&&n.enterprise!==void 0}class uT{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return cT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function hT(n,t){return hn(n,"GET","/v2/recaptchaConfig",Bn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(n,t){return hn(n,"POST","/v1/accounts:delete",t)}async function t_(n,t){return hn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function fT(n,t=!1){const e=It(n),s=await e.getIdToken(t),i=Eu(s);H(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:zi(bc(i.auth_time)),issuedAtTime:zi(bc(i.iat)),expirationTime:zi(bc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function bc(n){return Number(n)*1e3}function Eu(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gp(e);return i?JSON.parse(i):(bo("Failed to decode base64 JWT payload"),null)}catch(i){return bo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yd(n){const t=Eu(n);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof Ue&&pT(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function pT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(n){var t;const e=n.auth,s=await n.getIdToken(),i=await sr(n,t_(e,{idToken:s}));H(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?e_(r.providerUserInfo):[],a=_T(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ll(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function mT(n){const t=It(n);await Go(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _T(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function e_(n){return n.map(t=>{var{providerId:e}=t,s=vu(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(n,t){const e=await Jm(n,{},async()=>{const s=pr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Zm(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function vT(n,t){return hn(n,"POST","/v2/accounts:revokeToken",Bn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Yd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){H(t.length!==0,"internal-error");const e=Yd(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await yT(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new Ls;return s&&(H(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,t){H(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Je{constructor(t){var{uid:e,auth:s,stsTokenManager:i}=t,r=vu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ll(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await sr(this,this.stsTokenManager.getToken(this.auth,t));return H(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return fT(this,t)}reload(){return mT(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Je(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await Go(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(kn(this.auth));const t=await this.getIdToken();return await sr(this,dT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,i,r,o,a,c,u,h;const d=(s=e.displayName)!==null&&s!==void 0?s:void 0,p=(i=e.email)!==null&&i!==void 0?i:void 0,m=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=e.photoURL)!==null&&o!==void 0?o:void 0,b=(a=e.tenantId)!==null&&a!==void 0?a:void 0,w=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=e.createdAt)!==null&&u!==void 0?u:void 0,P=(h=e.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:D,isAnonymous:O,providerData:N,stsTokenManager:x}=e;H(C&&x,t,"internal-error");const v=Ls.fromJSON(this.name,x);H(typeof C=="string",t,"internal-error"),gn(d,t.name),gn(p,t.name),H(typeof D=="boolean",t,"internal-error"),H(typeof O=="boolean",t,"internal-error"),gn(m,t.name),gn(_,t.name),gn(b,t.name),gn(w,t.name),gn(S,t.name),gn(P,t.name);const E=new Je({uid:C,auth:t,email:p,emailVerified:D,displayName:d,isAnonymous:O,photoURL:_,phoneNumber:m,tenantId:b,stsTokenManager:v,createdAt:S,lastLoginAt:P});return N&&Array.isArray(N)&&(E.providerData=N.map(I=>Object.assign({},I))),w&&(E._redirectEventId=w),E}static async _fromIdTokenResponse(t,e,s=!1){const i=new Ls;i.updateFromServerResponse(e);const r=new Je({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await Go(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?e_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Ls;a.updateFromIdToken(s);const c=new Je({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ll(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new Map;function Ze(n){un(n instanceof Function,"Expected a class definition");let t=Xd.get(n);return t?(un(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Xd.set(n,t),t)}/**
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
 */class n_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}n_.type="NONE";const Qd=n_;/**
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
 */function wo(n,t,e){return`firebase:${n}:${t}:${e}`}class Ns{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=wo(this.userKey,i.apiKey,r),this.fullPersistenceKey=wo("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Je._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new Ns(Ze(Qd),t,s);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ze(Qd);const o=wo(s,t.config.apiKey,t.name);let a=null;for(const u of e)try{const h=await u._get(o);if(h){const d=Je._fromJSON(t,h);u!==r&&(a=d),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ns(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ns(r,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(o_(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(s_(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(c_(t))return"Blackberry";if(l_(t))return"Webos";if(i_(t))return"Safari";if((t.includes("chrome/")||r_(t))&&!t.includes("edge/"))return"Chrome";if(a_(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function s_(n=te()){return/firefox\//i.test(n)}function i_(n=te()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function r_(n=te()){return/crios\//i.test(n)}function o_(n=te()){return/iemobile/i.test(n)}function a_(n=te()){return/android/i.test(n)}function c_(n=te()){return/blackberry/i.test(n)}function l_(n=te()){return/webos/i.test(n)}function xu(n=te()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bT(n=te()){var t;return xu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function wT(){return yv()&&document.documentMode===10}function u_(n=te()){return xu(n)||a_(n)||l_(n)||c_(n)||/windows phone/i.test(n)||o_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(n,t=[]){let e;switch(n){case"Browser":e=Jd(te());break;case"Worker":e=`${Jd(te())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${fs}/${s}`}/**
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
 */class ET{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=e,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function xT(n,t={}){return hn(n,"GET","/v2/passwordPolicy",Bn(n,t))}/**
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
 */const TT=6;class IT{constructor(t){var e,s,i,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:TT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zd(this),this.idTokenSubscription=new Zd(this),this.beforeStateQueue=new ET(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ym,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ze(e)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await t_(this,{idToken:t}),s=await Je._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Go(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=rT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Xe(this.app))return Promise.reject(kn(this));const e=t?It(t):null;return e&&H(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Xe(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await xT(this),e=new IT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new fr("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await vT(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ze(t)||this._popupRedirectResolver;H(e,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Ze(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,i);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=h_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&nT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _s(n){return It(n)}class Zd{constructor(t){this.auth=t,this.observer=null,this.addObserver=Av(e=>this.observer=e)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ST(n){Ra=n}function d_(n){return Ra.loadJS(n)}function RT(){return Ra.recaptchaEnterpriseScript}function PT(){return Ra.gapiScript}function kT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const CT="recaptcha-enterprise",DT="NO_RECAPTCHA";class MT{constructor(t){this.type=CT,this.auth=_s(t)}async verify(t="verify",e=!1){async function s(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{hT(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new uT(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Kd(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(u=>{o(u)}).catch(()=>{o(DT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!e&&Kd(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=RT();c.length!==0&&(c+=a),d_(c).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function tf(n,t,e,s=!1){const i=new MT(n);let r;try{r=await i.verify(e)}catch{r=await i.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ul(n,t,e,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await tf(n,t,e,e==="getOobCode");return s(n,r)}else return s(n,t).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await tf(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(n,t){const e=aa(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(Oo(r,t??{}))return i;Se(i,"already-initialized")}return e.initialize({options:t})}function LT(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(Ze);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function NT(n,t,e){const s=_s(n);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=f_(t),{host:o,port:a}=VT(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),FT()}function f_(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function VT(n){const t=f_(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ef(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ef(o)}}}function ef(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function FT(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Qe("not implemented")}_getIdTokenResponse(t){return Qe("not implemented")}_linkToIdToken(t,e){return Qe("not implemented")}_getReauthenticationResolver(t){return Qe("not implemented")}}async function UT(n,t){return hn(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(n,t){return Sa(n,"POST","/v1/accounts:signInWithPassword",Bn(n,t))}async function zT(n,t){return hn(n,"POST","/v1/accounts:sendOobCode",Bn(n,t))}async function $T(n,t){return zT(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(n,t){return Sa(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,t))}async function HT(n,t){return Sa(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Tu{constructor(t,e,s,i=null){super("password",s),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new ir(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new ir(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ul(t,e,"signInWithPassword",BT);case"emailLink":return jT(t,{email:this._email,oobCode:this._password});default:Se(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ul(t,s,"signUpPassword",UT);case"emailLink":return HT(t,{idToken:e,email:this._email,oobCode:this._password});default:Se(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(n,t){return Sa(n,"POST","/v1/accounts:signInWithIdp",Bn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="http://localhost";class us extends Tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new us(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Se("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=e,r=vu(e,["providerId","signInMethod"]);if(!s||!i)return null;const o=new us(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Vs(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,Vs(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Vs(t,e)}buildRequest(){const t={requestUri:WT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=pr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GT(n){const t=xi(Ti(n)).link,e=t?xi(Ti(t)).deep_link_id:null,s=xi(Ti(n)).deep_link_id;return(s?xi(Ti(s)).link:null)||s||e||t||n}class Iu{constructor(t){var e,s,i,r,o,a;const c=xi(Ti(t)),u=(e=c.apiKey)!==null&&e!==void 0?e:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,d=qT((i=c.mode)!==null&&i!==void 0?i:null);H(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=GT(t);try{return new Iu(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.providerId=ei.PROVIDER_ID}static credential(t,e){return ir._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Iu.parseLink(e);return H(s,"argument-error"),ir._fromEmailAndCode(t,s.code,s.tenantId)}}ei.PROVIDER_ID="password";ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ir extends p_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Ir{constructor(){super("facebook.com")}static credential(t){return us._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _n.credential(t.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return us._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return yn.credentialFromTaggedObject(t)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return yn.credential(e,s)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Ir{constructor(){super("github.com")}static credential(t){return us._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vn.credential(t.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ir{constructor(){super("twitter.com")}static credential(t,e){return us._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return bn.credential(e,s)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await Je._fromIdTokenResponse(t,s,i),o=nf(s);return new qs({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=nf(s);return new qs({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function nf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Ue{constructor(t,e,s,i){var r;super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new Ko(t,e,s,i)}}function g_(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(n,r,t,s):r})}async function KT(n,t,e=!1){const s=await sr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return qs._forOperation(n,"link",s)}/**
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
 */async function YT(n,t,e=!1){const{auth:s}=n;if(Xe(s.app))return Promise.reject(kn(s));const i="reauthenticate";try{const r=await sr(n,g_(s,i,t,n),e);H(r.idToken,s,"internal-error");const o=Eu(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(n.uid===a,s,"user-mismatch"),qs._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Se(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(n,t,e=!1){if(Xe(n.app))return Promise.reject(kn(n));const s="signIn",i=await g_(n,s,t),r=await qs._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}async function XT(n,t){return m_(_s(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(n){const t=_s(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function JT(n,t,e){const s=_s(n);await ul(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$T)}function ZT(n,t,e){return Xe(n.app)?Promise.reject(kn(n)):XT(It(n),ei.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&QT(n),s})}function tI(n,t,e,s){return It(n).onIdTokenChanged(t,e,s)}function eI(n,t,e){return It(n).beforeAuthStateChanged(t,e)}function nI(n,t,e,s){return It(n).onAuthStateChanged(t,e,s)}function sI(n){return It(n).signOut()}const Yo="__sak";/**
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
 */class __{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=1e3,rI=10;class y_ extends __{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=u_(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);wT()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,rI):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}y_.type="LOCAL";const oI=y_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_ extends __{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}v_.type="SESSION";const b_=v_;/**
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
 */function aI(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Pa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new Pa(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,r)),c=await aI(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class cI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=Au("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return window}function lI(n){Ne().location.href=n}/**
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
 */function w_(){return typeof Ne().WorkerGlobalScope<"u"&&typeof Ne().importScripts=="function"}async function uI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function dI(){return w_()?self:null}/**
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
 */const E_="firebaseLocalStorageDb",fI=1,Xo="firebaseLocalStorage",x_="fbase_key";class Ar{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ka(n,t){return n.transaction([Xo],t?"readwrite":"readonly").objectStore(Xo)}function pI(){const n=indexedDB.deleteDatabase(E_);return new Ar(n).toPromise()}function hl(){const n=indexedDB.open(E_,fI);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Xo,{keyPath:x_})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Xo)?t(s):(s.close(),await pI(),t(await hl()))})})}async function sf(n,t,e){const s=ka(n,!0).put({[x_]:t,value:e});return new Ar(s).toPromise()}async function gI(n,t){const e=ka(n,!1).get(t),s=await new Ar(e).toPromise();return s===void 0?null:s.value}function rf(n,t){const e=ka(n,!0).delete(t);return new Ar(e).toPromise()}const mI=800,_I=3;class T_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>_I)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(dI()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await uI(),!this.activeServiceWorker)return;this.sender=new cI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||hI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hl();return await sf(t,Yo,"1"),await rf(t,Yo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>sf(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>gI(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>rf(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=ka(i,!1).getAll();return new Ar(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T_.type="LOCAL";const yI=T_;new Tr(3e4,6e4);/**
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
 */function vI(n,t){return t?Ze(t):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Su extends Tu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vs(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Vs(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Vs(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function bI(n){return m_(n.auth,new Su(n),n.bypassAuthState)}function wI(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),YT(e,new Su(n),n.bypassAuthState)}async function EI(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),KT(e,new Su(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bI;case"linkViaPopup":case"linkViaRedirect":return EI;case"reauthViaPopup":case"reauthViaRedirect":return wI;default:Se(this.auth,"internal-error")}}resolve(t){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new Tr(2e3,1e4);class Ms extends I_{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const t=Au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,xI.get())};t()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="pendingRedirect",Eo=new Map;class II extends I_{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Eo.get(this.auth._key());if(!t){try{const s=await AI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Eo.set(this.auth._key(),t)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AI(n,t){const e=PI(t),s=RI(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function SI(n,t){Eo.set(n._key(),t)}function RI(n){return Ze(n._redirectPersistence)}function PI(n){return wo(TI,n.config.apiKey,n.name)}async function kI(n,t,e=!1){if(Xe(n.app))return Promise.reject(kn(n));const s=_s(n),i=vI(s,t),o=await new II(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=10*60*1e3;class DI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!MI(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!A_(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(Le(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(of(t))}saveEventToCache(t){this.cachedEventUids.add(of(t)),this.lastProcessedEventTime=Date.now()}}function of(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function A_({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function MI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(n,t={}){return hn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NI=/^https?/;async function VI(n){if(n.config.emulator)return;const{authorizedDomains:t}=await OI(n);for(const e of t)try{if(FI(e))return}catch{}Se(n,"unauthorized-domain")}function FI(n){const t=cl(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!NI.test(e))return!1;if(LI.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const UI=new Tr(3e4,6e4);function af(){const n=Ne().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function BI(n){return new Promise((t,e)=>{var s,i,r;function o(){af(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{af(),e(Le(n,"network-request-failed"))},timeout:UI.get()})}if(!((i=(s=Ne().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=Ne().gapi)===null||r===void 0)&&r.load)o();else{const a=kT("iframefcb");return Ne()[a]=()=>{gapi.load?o():e(Le(n,"network-request-failed"))},d_(`${PT()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw xo=null,t})}let xo=null;function zI(n){return xo=xo||BI(n),xo}/**
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
 */const $I=new Tr(5e3,15e3),jI="__/auth/iframe",HI="emulator/auth/iframe",WI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GI(n){const t=n.config;H(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?wu(t,HI):`https://${n.config.authDomain}/${jI}`,s={apiKey:t.apiKey,appName:n.name,v:fs},i=qI.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${pr(s).slice(1)}`}async function KI(n){const t=await zI(n),e=Ne().gapi;return H(e,n,"internal-error"),t.open({where:document.body,url:GI(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Le(n,"network-request-failed"),a=Ne().setTimeout(()=>{r(o)},$I.get());function c(){Ne().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const YI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XI=500,QI=600,JI="_blank",ZI="http://localhost";class cf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tA(n,t,e,s=XI,i=QI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},YI),{width:s.toString(),height:i.toString(),top:r,left:o}),u=te().toLowerCase();e&&(a=r_(u)?JI:e),s_(u)&&(t=t||ZI,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[m,_])=>`${p}${m}=${_},`,"");if(bT(u)&&a!=="_self")return eA(t||"",a),new cf(null);const d=window.open(t||"",a,h);H(d,n,"popup-blocked");try{d.focus()}catch{}return new cf(d)}function eA(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const nA="__/auth/handler",sA="emulator/auth/handler",iA=encodeURIComponent("fac");async function lf(n,t,e,s,i,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:fs,eventId:i};if(t instanceof p_){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Iv(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(t instanceof Ir){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${iA}=${encodeURIComponent(c)}`:"";return`${rA(n)}?${pr(a).slice(1)}${u}`}function rA({config:n}){return n.emulator?wu(n,sA):`https://${n.authDomain}/${nA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="webStorageSupport";class oA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b_,this._completeRedirectFn=kI,this._overrideRedirectResult=SI}async _openPopup(t,e,s,i){var r;un((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await lf(t,e,s,cl(),i);return tA(t,o,Au())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await lf(t,e,s,cl(),i);return lI(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(un(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await KI(t),s=new DI(t);return e.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(wc,{type:wc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[wc];o!==void 0&&e(!!o),Se(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=VI(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return u_()||i_()||xu()}}const aA=oA;var uf="@firebase/auth",hf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uA(n){rs(new Dn("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h_(n)},u=new AT(s,i,r,c);return LT(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),rs(new Dn("auth-internal",t=>{const e=_s(t.getProvider("auth").getImmediate());return(s=>new cA(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(uf,hf,lA(n)),De(uf,hf,"esm2017")}/**
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
 */const hA=5*60,dA=Qp("authIdTokenMaxAge")||hA;let df=null;const fA=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>dA)return;const i=e==null?void 0:e.token;df!==i&&(df=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pA(n=Cl()){const t=aa(n,"auth");if(t.isInitialized())return t.getImmediate();const e=OT(n,{popupRedirectResolver:aA,persistence:[yI,oI,b_]}),s=Qp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=fA(r.toString());eI(e,o,()=>o(e.currentUser)),tI(e,a=>o(a))}}const i=Kp("auth");return i&&NT(e,`http://${i}`),e}function gA(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}ST({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=Le("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",gA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uA("Browser");let _i,yt,S_,Pi;const mA=async()=>{const n={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"};if(!n.apiKey)throw new Error("Firebase configuration not found. Please check .env file.");return _i=eg(n),yt=xE(_i),S_=Qx(_i),Pi=pA(_i),_i},xt={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.setState({currentTheme:n});const t=document.documentElement;n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.classList.add("dark"):t.classList.remove("dark")},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},Qo={init:()=>new Promise(n=>{nI(Pi,async t=>{if(t)try{const e=await Bd(ln(yt,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};xt.setUser(s)}else xt.setUser({uid:t.uid,email:t.email,role:"obra",nome:"Usuário"})}catch(e){console.error("Erro ao buscar perfil:",e),xt.setUser(null)}else xt.setUser(null);n(xt.state.currentUser)})}),login:async(n,t)=>{try{const s=(await ZT(Pi,n,t)).user,i=await Bd(ln(yt,"usuarios",s.uid));if(i.exists()){const r={uid:s.uid,email:s.email,...i.data()};return xt.setUser(r),r}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await sI(Pi),xt.setUser(null)},recoverPassword:async n=>{await JT(Pi,n)}},Yt={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!xt.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(xt.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.routes[n]||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n));this.currentRoute=n,document.getElementById("app"),await t()}},z={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:i="",required:r=!1,className:o=""})=>`
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
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
        `},ff={renderLogin:()=>`
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
                            ${z.createInput({id:"email",type:"email",label:"Email",placeholder:"seu@email.com",required:!0,className:"mb-4"})}
                            ${z.createInput({id:"password",type:"password",label:"Senha",placeholder:"••••••••",required:!0})}
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <a href="#/forgot-password" class="font-display uppercase tracking-wide text-primary hover:text-primary-strong">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            ${z.createButton({id:"btn-login",text:"Entrar",type:"submit",className:"w-full justify-center"})}
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
                        ${z.createInput({id:"email-recovery",type:"email",label:"Email",required:!0})}

                        <div class="flex gap-4">
                            ${z.createButton({id:"btn-back",text:"Voltar",variant:"secondary",className:"w-full justify-center",onClick:"window.location.hash = '/login'"})}
                            ${z.createButton({id:"btn-recover",text:"Enviar",type:"submit",className:"w-full justify-center"})}
                        </div>
                    </form>
                </div>
            </div>
        `},pf={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=ff.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value,r=document.getElementById("btn-login");try{r.disabled=!0,r.innerHTML=z.createLoader(),await Qo.login(s,i),z.createToast("Login realizado com sucesso!"),Yt.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),z.createToast(a,"error"),r.disabled=!1,r.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=ff.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,i=document.getElementById("btn-recover");try{i.disabled=!0,i.innerHTML=z.createLoader(),await Qo.recoverPassword(s),z.createToast("Email de recuperação enviado!"),setTimeout(()=>Yt.navigate("/login"),2e3)}catch(r){z.createToast("Erro ao enviar email: "+r.message,"error"),i.disabled=!1,i.innerHTML="<span>Enviar</span>"}})}},Ec={getCompradorStats:async()=>{const n=de(yt,"compras"),t=Ee(n,ce("status_compra","==","Pendente")),e=await Ut(t),s=Ee(n,ce("status_compra","==","Em Cotação")),i=await Ut(s),r=Ee(n,Vd("data_solicitacao","desc"),mc(5)),o=await Ut(r);return{pendentes:e.size,emCotacao:i.size,recentes:o.docs.map(a=>({id:a.id,...a.data()}))}},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=de(yt,"compras"),e=Ee(t,ce("obraId","==",n),ce("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await Ut(e),i=Ee(t,ce("obraId","==",n),ce("status_compra","==","Comprado")),r=await Ut(i),o=Ee(t,ce("obraId","==",n),ce("status_compra","==","Entregue")),a=await Ut(o),c=Ee(t,ce("obraId","==",n),Vd("data_solicitacao","desc"),mc(5)),u=await Ut(c);return{pendentes:s.size,transito:r.size,entregues:a.size,recentes:u.docs.map(h=>({id:h.id,...h.data()}))}},getObras:async()=>(await Ut(de(yt,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=de(yt,"compras"),t=Ee(n,mc(200)),e=await Ut(t);let s=0,i={},r={};return e.forEach(o=>{const a=o.data(),c=Number(a.valor_estimado||a.valor_total||0);if(s+=c,i[a.status_compra]=(i[a.status_compra]||0)+1,a.data_solicitacao){const u=new Date(a.data_solicitacao),h=`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}`;r[h]=(r[h]||0)+c}}),{totalGasto:s,porStatus:i,totalPedidos:e.size,gastosPorMes:r}}},Ye={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>n?new Date(n).toLocaleDateString("pt-BR"):"-"},xc={renderComprador:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Geral - Compras</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${z.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Aguardando ação</p>`,className:"accent-left"})}
                    ${z.createCard({title:"Em Cotação",content:`<p class="text-4xl font-display text-primary uppercase">${n.emCotacao}</p><p class="text-sm heading-muted">Processando</p>`,className:"accent-left"})}
                    ${z.createCard({title:"Prioridade Alta",content:'<p class="text-4xl font-display text-alert uppercase">0</p><p class="text-sm heading-muted">SLA Estourado</p>',className:"accent-left"})}
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
                    ${z.createCard({title:"Solicitados",content:`<p class="text-4xl font-display text-text uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`})}
                    ${z.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-display text-primary uppercase">${n.transito}</p><p class="text-sm heading-muted">A caminho</p>`,className:"accent-left"})}
                    ${z.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${n.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,className:"accent-left"})}
                </div>
            </div>
        `,renderDiretor:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Executiva</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${z.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">R$ ${n.totalGasto.toFixed(2)}</p>`})}
                    ${z.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                </div>
                
                <!-- Gráficos -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="card h-80">
                        <h3 class="text-lg font-display text-text mb-4">Gastos por Mês</h3>
                        <div class="h-64 relative">
                            <canvas id="chart-gastos"></canvas>
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
 */function Sr(n){return n+.5|0}const En=(n,t,e)=>Math.max(Math.min(n,e),t);function ki(n){return En(Sr(n*2.55),0,255)}function Cn(n){return En(Sr(n*255),0,255)}function Ke(n){return En(Sr(n/2.55)/100,0,1)}function gf(n){return En(Sr(n*100),0,100)}const _e={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},dl=[..."0123456789ABCDEF"],_A=n=>dl[n&15],yA=n=>dl[(n&240)>>4]+dl[n&15],eo=n=>(n&240)>>4===(n&15),vA=n=>eo(n.r)&&eo(n.g)&&eo(n.b)&&eo(n.a);function bA(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&_e[n[1]]*17,g:255&_e[n[2]]*17,b:255&_e[n[3]]*17,a:t===5?_e[n[4]]*17:255}:(t===7||t===9)&&(e={r:_e[n[1]]<<4|_e[n[2]],g:_e[n[3]]<<4|_e[n[4]],b:_e[n[5]]<<4|_e[n[6]],a:t===9?_e[n[7]]<<4|_e[n[8]]:255})),e}const wA=(n,t)=>n<255?t(n):"";function EA(n){var t=vA(n)?_A:yA;return n?"#"+t(n.r)+t(n.g)+t(n.b)+wA(n.a,t):void 0}const xA=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function R_(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function TA(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function IA(n,t,e){const s=R_(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function AA(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function Ru(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let c,u,h;return r!==o&&(h=r-o,u=a>.5?h/(2-r-o):h/(r+o),c=AA(e,s,i,h,r),c=c*60+.5),[c|0,u||0,a]}function Pu(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(Cn)}function ku(n,t,e){return Pu(R_,n,t,e)}function SA(n,t,e){return Pu(IA,n,t,e)}function RA(n,t,e){return Pu(TA,n,t,e)}function P_(n){return(n%360+360)%360}function PA(n){const t=xA.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?ki(+t[5]):Cn(+t[5]));const i=P_(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=SA(i,r,o):t[1]==="hsv"?s=RA(i,r,o):s=ku(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function kA(n,t){var e=Ru(n);e[0]=P_(e[0]+t),e=ku(e),n.r=e[0],n.g=e[1],n.b=e[2]}function CA(n){if(!n)return;const t=Ru(n),e=t[0],s=gf(t[1]),i=gf(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${Ke(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const mf={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},_f={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function DA(){const n={},t=Object.keys(_f),e=Object.keys(mf);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,mf[r]);r=parseInt(_f[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let no;function MA(n){no||(no=DA(),no.transparent=[0,0,0,0]);const t=no[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const OA=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function LA(n){const t=OA.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?ki(o):En(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?ki(s):En(s,0,255)),i=255&(t[4]?ki(i):En(i,0,255)),r=255&(t[6]?ki(r):En(r,0,255)),{r:s,g:i,b:r,a:e}}}function NA(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${Ke(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Tc=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Is=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function VA(n,t,e){const s=Is(Ke(n.r)),i=Is(Ke(n.g)),r=Is(Ke(n.b));return{r:Cn(Tc(s+e*(Is(Ke(t.r))-s))),g:Cn(Tc(i+e*(Is(Ke(t.g))-i))),b:Cn(Tc(r+e*(Is(Ke(t.b))-r))),a:n.a+e*(t.a-n.a)}}function so(n,t,e){if(n){let s=Ru(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=ku(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function k_(n,t){return n&&Object.assign(t||{},n)}function yf(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Cn(n[3]))):(t=k_(n,{r:0,g:0,b:0,a:1}),t.a=Cn(t.a)),t}function FA(n){return n.charAt(0)==="r"?LA(n):PA(n)}class rr{constructor(t){if(t instanceof rr)return t;const e=typeof t;let s;e==="object"?s=yf(t):e==="string"&&(s=bA(t)||MA(t)||FA(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=k_(this._rgb);return t&&(t.a=Ke(t.a)),t}set rgb(t){this._rgb=yf(t)}rgbString(){return this._valid?NA(this._rgb):void 0}hexString(){return this._valid?EA(this._rgb):void 0}hslString(){return this._valid?CA(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=s.a-i.a,u=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-u,s.r=255&u*s.r+r*i.r+.5,s.g=255&u*s.g+r*i.g+.5,s.b=255&u*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=VA(this._rgb,t._rgb,e)),this}clone(){return new rr(this.rgb)}alpha(t){return this._rgb.a=Cn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Sr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return so(this._rgb,2,t),this}darken(t){return so(this._rgb,2,-t),this}saturate(t){return so(this._rgb,1,t),this}desaturate(t){return so(this._rgb,1,-t),this}rotate(t){return kA(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function We(){}const UA=(()=>{let n=0;return()=>n++})();function Y(n){return n==null}function gt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Q(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Tt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function pe(n,t){return Tt(n)?n:t}function G(n,t){return typeof n>"u"?t:n}const BA=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,C_=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function ut(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function rt(n,t,e,s){let i,r,o;if(gt(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(Q(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function Jo(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function Zo(n){if(gt(n))return n.map(Zo);if(Q(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=Zo(n[e[i]]);return t}return n}function D_(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function zA(n,t,e,s){if(!D_(n))return;const i=t[n],r=e[n];Q(i)&&Q(r)?or(i,r,s):t[n]=Zo(r)}function or(n,t,e){const s=gt(t)?t:[t],i=s.length;if(!Q(n))return n;e=e||{};const r=e.merger||zA;let o;for(let a=0;a<i;++a){if(o=s[a],!Q(o))continue;const c=Object.keys(o);for(let u=0,h=c.length;u<h;++u)r(c[u],n,o,e)}return n}function $i(n,t){return or(n,t,{merger:$A})}function $A(n,t,e){if(!D_(n))return;const s=t[n],i=e[n];Q(s)&&Q(i)?$i(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=Zo(i))}const vf={"":n=>n,x:n=>n.x,y:n=>n.y};function jA(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function HA(n){const t=jA(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function Nn(n,t){return(vf[t]||(vf[t]=HA(t)))(n)}function Cu(n){return n.charAt(0).toUpperCase()+n.slice(1)}const ar=n=>typeof n<"u",Vn=n=>typeof n=="function",bf=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function WA(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const st=Math.PI,ft=2*st,qA=ft+st,ta=Number.POSITIVE_INFINITY,GA=st/180,St=st/2,qn=st/4,wf=st*2/3,xn=Math.log10,Ve=Math.sign;function ji(n,t,e){return Math.abs(n-t)<e}function Ef(n){const t=Math.round(n);n=ji(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(xn(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function KA(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function YA(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Gs(n){return!YA(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function XA(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function M_(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function xe(n){return n*(st/180)}function Du(n){return n*(180/st)}function xf(n){if(!Tt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function O_(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*st&&(r+=ft),{angle:r,distance:i}}function fl(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function QA(n,t){return(n-t+qA)%ft-st}function Qt(n){return(n%ft+ft)%ft}function cr(n,t,e,s){const i=Qt(n),r=Qt(t),o=Qt(e),a=Qt(r-i),c=Qt(o-i),u=Qt(i-r),h=Qt(i-o);return i===r||i===o||s&&r===o||a>c&&u<h}function Lt(n,t,e){return Math.max(t,Math.min(e,n))}function JA(n){return Lt(n,-32768,32767)}function tn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function Mu(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const en=(n,t,e,s)=>Mu(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),ZA=(n,t,e)=>Mu(n,e,s=>n[s][t]>=e);function tS(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const L_=["push","pop","shift","splice","unshift"];function eS(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),L_.forEach(e=>{const s="_onData"+Cu(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function Tf(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(L_.forEach(r=>{delete n[r]}),delete n._chartjs)}function N_(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const V_=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function F_(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,V_.call(window,()=>{s=!1,n.apply(t,e)}))}}function nS(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const Ou=n=>n==="start"?"left":n==="end"?"right":"center",Kt=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,sS=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function U_(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,u=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:d,max:p,minDefined:m,maxDefined:_}=o.getUserBounds();if(m){if(i=Math.min(en(c,h,d).lo,e?s:en(t,h,o.getPixelForValue(d)).lo),u){const b=c.slice(0,i+1).reverse().findIndex(w=>!Y(w[a.axis]));i-=Math.max(0,b)}i=Lt(i,0,s-1)}if(_){let b=Math.max(en(c,o.axis,p,!0).hi+1,e?0:en(t,h,o.getPixelForValue(p),!0).hi+1);if(u){const w=c.slice(b-1).findIndex(S=>!Y(S[a.axis]));b+=Math.max(0,w)}r=Lt(b,i,s)-i}else r=s-i}return{start:i,count:r}}function B_(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const io=n=>n===0||n===1,If=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*ft/e)),Af=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*ft/e)+1,Hi={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*St)+1,easeOutSine:n=>Math.sin(n*St),easeInOutSine:n=>-.5*(Math.cos(st*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>io(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>io(n)?n:If(n,.075,.3),easeOutElastic:n=>io(n)?n:Af(n,.075,.3),easeInOutElastic(n){return io(n)?n:n<.5?.5*If(n*2,.1125,.45):.5+.5*Af(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Hi.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Hi.easeInBounce(n*2)*.5:Hi.easeOutBounce(n*2-1)*.5+.5};function Lu(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Sf(n){return Lu(n)?n:new rr(n)}function Ic(n){return Lu(n)?n:new rr(n).saturate(.5).darken(.1).hexString()}const iS=["x","y","borderWidth","radius","tension"],rS=["color","borderColor","backgroundColor"];function oS(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:rS},numbers:{type:"number",properties:iS}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function aS(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Rf=new Map;function cS(n,t){t=t||{};const e=n+JSON.stringify(t);let s=Rf.get(e);return s||(s=new Intl.NumberFormat(n,t),Rf.set(e,s)),s}function Rr(n,t,e){return cS(t,e).format(n)}const z_={values(n){return gt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const u=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),r=lS(n,e)}const o=xn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),Rr(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(xn(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?z_.numeric.call(this,n,t,e):""}};function lS(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Ca={formatters:z_};function uS(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ca.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const hs=Object.create(null),pl=Object.create(null);function Wi(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function Ac(n,t,e){return typeof t=="string"?or(Wi(n,t),e):or(Wi(n,""),t)}class hS{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>Ic(i.backgroundColor),this.hoverBorderColor=(s,i)=>Ic(i.borderColor),this.hoverColor=(s,i)=>Ic(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Ac(this,t,e)}get(t){return Wi(this,t)}describe(t,e){return Ac(pl,t,e)}override(t,e){return Ac(hs,t,e)}route(t,e,s,i){const r=Wi(this,t),o=Wi(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],u=o[i];return Q(c)?Object.assign({},u,c):G(c,u)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var mt=new hS({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[oS,aS,uS]);function dS(n){return!n||Y(n.size)||Y(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function ea(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function fS(n,t,e,s){s=s||{};let i=s.data=s.data||{},r=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},r=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,u,h,d,p;for(c=0;c<a;c++)if(d=e[c],d!=null&&!gt(d))o=ea(n,i,r,o,d);else if(gt(d))for(u=0,h=d.length;u<h;u++)p=d[u],p!=null&&!gt(p)&&(o=ea(n,i,r,o,p));n.restore();const m=r.length/2;if(m>e.length){for(c=0;c<m;c++)delete i[r[c]];r.splice(0,m)}return o}function Gn(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function Pf(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function gl(n,t,e,s){$_(n,t,e,s,null)}function $_(n,t,e,s,i){let r,o,a,c,u,h,d,p;const m=t.pointStyle,_=t.rotation,b=t.radius;let w=(_||0)*GA;if(m&&typeof m=="object"&&(r=m.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(w),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(b)||b<=0)){switch(n.beginPath(),m){default:i?n.ellipse(e,s,i/2,b,0,0,ft):n.arc(e,s,b,0,ft),n.closePath();break;case"triangle":h=i?i/2:b,n.moveTo(e+Math.sin(w)*h,s-Math.cos(w)*b),w+=wf,n.lineTo(e+Math.sin(w)*h,s-Math.cos(w)*b),w+=wf,n.lineTo(e+Math.sin(w)*h,s-Math.cos(w)*b),n.closePath();break;case"rectRounded":u=b*.516,c=b-u,o=Math.cos(w+qn)*c,d=Math.cos(w+qn)*(i?i/2-u:c),a=Math.sin(w+qn)*c,p=Math.sin(w+qn)*(i?i/2-u:c),n.arc(e-d,s-a,u,w-st,w-St),n.arc(e+p,s-o,u,w-St,w),n.arc(e+d,s+a,u,w,w+St),n.arc(e-p,s+o,u,w+St,w+st),n.closePath();break;case"rect":if(!_){c=Math.SQRT1_2*b,h=i?i/2:c,n.rect(e-h,s-c,2*h,2*c);break}w+=qn;case"rectRot":d=Math.cos(w)*(i?i/2:b),o=Math.cos(w)*b,a=Math.sin(w)*b,p=Math.sin(w)*(i?i/2:b),n.moveTo(e-d,s-a),n.lineTo(e+p,s-o),n.lineTo(e+d,s+a),n.lineTo(e-p,s+o),n.closePath();break;case"crossRot":w+=qn;case"cross":d=Math.cos(w)*(i?i/2:b),o=Math.cos(w)*b,a=Math.sin(w)*b,p=Math.sin(w)*(i?i/2:b),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"star":d=Math.cos(w)*(i?i/2:b),o=Math.cos(w)*b,a=Math.sin(w)*b,p=Math.sin(w)*(i?i/2:b),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o),w+=qn,d=Math.cos(w)*(i?i/2:b),o=Math.cos(w)*b,a=Math.sin(w)*b,p=Math.sin(w)*(i?i/2:b),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"line":o=i?i/2:Math.cos(w)*b,a=Math.sin(w)*b,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(w)*(i?i/2:b),s+Math.sin(w)*b);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function nn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Da(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Ma(n){n.restore()}function pS(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function gS(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function mS(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),Y(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function _S(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,u=e+r.actualBoundingBoxDescent,h=i.strikethrough?(c+u)/2:u;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function yS(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function ds(n,t,e,s,i,r={}){const o=gt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,u;for(n.save(),n.font=i.string,mS(n,r),c=0;c<o.length;++c)u=o[c],r.backdrop&&yS(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),Y(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(u,e,s,r.maxWidth)),n.fillText(u,e,s,r.maxWidth),_S(n,e,s,u,r),s+=Number(i.lineHeight);n.restore()}function lr(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*st,st,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,st,St,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,St,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-St,!0),n.lineTo(e+o.topLeft,s)}const vS=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,bS=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function wS(n,t){const e=(""+n).match(vS);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const ES=n=>+n||0;function Nu(n,t){const e={},s=Q(t),i=s?Object.keys(t):t,r=Q(n)?s?o=>G(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=ES(r(o));return e}function j_(n){return Nu(n,{top:"y",right:"x",bottom:"y",left:"x"})}function ss(n){return Nu(n,["topLeft","topRight","bottomLeft","bottomRight"])}function ee(n){const t=j_(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Dt(n,t){n=n||{},t=t||mt.font;let e=G(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=G(n.style,t.style);s&&!(""+s).match(bS)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:G(n.family,t.family),lineHeight:wS(G(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:G(n.weight,t.weight),string:""};return i.string=dS(i),i}function Ci(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function xS(n,t,e){const{min:s,max:i}=n,r=C_(t,(i-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function zn(n,t){return Object.assign(Object.create(n),t)}function Vu(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=G_("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>Vu([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return W_(a,c,()=>CS(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return Cf(a).includes(c)},ownKeys(a){return Cf(a)},set(a,c,u){const h=a._storage||(a._storage=i());return a[c]=h[c]=u,delete a._keys,!0}})}function Ks(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:H_(n,s),setContext:r=>Ks(n,r,e,s),override:r=>Ks(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return W_(r,o,()=>IS(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function H_(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:Vn(e)?e:()=>e,isIndexable:Vn(s)?s:()=>s}}const TS=(n,t)=>n?n+Cu(t):t,Fu=(n,t)=>Q(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function W_(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function IS(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return Vn(a)&&o.isScriptable(t)&&(a=AS(t,a,n,e)),gt(a)&&a.length&&(a=SS(t,a,n,o.isIndexable)),Fu(t,a)&&(a=Ks(a,i,r&&r[t],o)),a}function AS(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||s);return a.delete(n),Fu(n,c)&&(c=Uu(i._scopes,i,n,c)),c}function SS(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(Q(t[0])){const c=t,u=i._scopes.filter(h=>h!==c);t=[];for(const h of c){const d=Uu(u,i,n,h);t.push(Ks(d,r,o&&o[n],a))}}return t}function q_(n,t,e){return Vn(n)?n(t,e):n}const RS=(n,t)=>n===!0?t:typeof n=="string"?Nn(t,n):void 0;function PS(n,t,e,s,i){for(const r of t){const o=RS(e,r);if(o){n.add(o);const a=q_(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function Uu(n,t,e,s){const i=t._rootScopes,r=q_(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let c=kf(a,o,e,r||e,s);return c===null||typeof r<"u"&&r!==e&&(c=kf(a,o,r,c,s),c===null)?!1:Vu(Array.from(a),[""],i,r,()=>kS(t,e,s))}function kf(n,t,e,s,i){for(;e;)e=PS(n,t,e,s,i);return e}function kS(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return gt(i)&&Q(e)?e:i||{}}function CS(n,t,e,s){let i;for(const r of t)if(i=G_(TS(r,n),e),typeof i<"u")return Fu(n,i)?Uu(e,s,n,i):i}function G_(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function Cf(n){let t=n._keys;return t||(t=n._keys=DS(n._scopes)),t}function DS(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function K_(n,t,e,s){const{iScale:i}=n,{key:r="r"}=this._parsing,o=new Array(s);let a,c,u,h;for(a=0,c=s;a<c;++a)u=a+e,h=t[u],o[a]={r:i.parse(Nn(h,r),u)};return o}const MS=Number.EPSILON||1e-14,Ys=(n,t)=>t<n.length&&!n[t].skip&&n[t],Y_=n=>n==="x"?"y":"x";function OS(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=fl(r,i),c=fl(o,r);let u=a/(a+c),h=c/(a+c);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const d=s*u,p=s*h;return{previous:{x:r.x-d*(o.x-i.x),y:r.y-d*(o.y-i.y)},next:{x:r.x+p*(o.x-i.x),y:r.y+p*(o.y-i.y)}}}function LS(n,t,e){const s=n.length;let i,r,o,a,c,u=Ys(n,0);for(let h=0;h<s-1;++h)if(c=u,u=Ys(n,h+1),!(!c||!u)){if(ji(t[h],0,MS)){e[h]=e[h+1]=0;continue}i=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=i*o*t[h],e[h+1]=r*o*t[h])}}function NS(n,t,e="x"){const s=Y_(e),i=n.length;let r,o,a,c=Ys(n,0);for(let u=0;u<i;++u){if(o=a,a=c,c=Ys(n,u+1),!a)continue;const h=a[e],d=a[s];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${s}`]=d-r*t[u]),c&&(r=(c[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${s}`]=d+r*t[u])}}function VS(n,t="x"){const e=Y_(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,c,u=Ys(n,0);for(o=0;o<s;++o)if(a=c,c=u,u=Ys(n,o+1),!!c){if(u){const h=u[t]-c[t];i[o]=h!==0?(u[e]-c[e])/h:0}r[o]=a?u?Ve(i[o-1])!==Ve(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}LS(n,i,r),NS(n,r,t)}function ro(n,t,e){return Math.max(Math.min(n,e),t)}function FS(n,t){let e,s,i,r,o,a=nn(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&nn(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=ro(i.cp1x,t.left,t.right),i.cp1y=ro(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=ro(i.cp2x,t.left,t.right),i.cp2y=ro(i.cp2y,t.top,t.bottom)))}function US(n,t,e,s,i){let r,o,a,c;if(t.spanGaps&&(n=n.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")VS(n,i);else{let u=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=OS(u,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,u=a}t.capBezierPoints&&FS(n,e)}function Bu(){return typeof window<"u"&&typeof document<"u"}function zu(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function na(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const Oa=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function BS(n,t){return Oa(n).getPropertyValue(t)}const zS=["top","right","bottom","left"];function is(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=zS[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const $S=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function jS(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,c;if($S(i,r,n.target))a=i,c=r;else{const u=t.getBoundingClientRect();a=s.clientX-u.left,c=s.clientY-u.top,o=!0}return{x:a,y:c,box:o}}function Qn(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=Oa(e),r=i.boxSizing==="border-box",o=is(i,"padding"),a=is(i,"border","width"),{x:c,y:u,box:h}=jS(n,e),d=o.left+(h&&a.left),p=o.top+(h&&a.top);let{width:m,height:_}=t;return r&&(m-=o.width+a.width,_-=o.height+a.height),{x:Math.round((c-d)/m*e.width/s),y:Math.round((u-p)/_*e.height/s)}}function HS(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&zu(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Oa(r),c=is(a,"border","width"),u=is(a,"padding");t=o.width-u.width-c.width,e=o.height-u.height-c.height,s=na(a.maxWidth,r,"clientWidth"),i=na(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||ta,maxHeight:i||ta}}const Tn=n=>Math.round(n*10)/10;function WS(n,t,e,s){const i=Oa(n),r=is(i,"margin"),o=na(i.maxWidth,n,"clientWidth")||ta,a=na(i.maxHeight,n,"clientHeight")||ta,c=HS(n,t,e);let{width:u,height:h}=c;if(i.boxSizing==="content-box"){const p=is(i,"border","width"),m=is(i,"padding");u-=m.width+p.width,h-=m.height+p.height}return u=Math.max(0,u-r.width),h=Math.max(0,s?u/s:h-r.height),u=Tn(Math.min(u,o,c.maxWidth)),h=Tn(Math.min(h,a,c.maxHeight)),u&&!h&&(h=Tn(u/2)),(t!==void 0||e!==void 0)&&s&&c.height&&h>c.height&&(h=c.height,u=Tn(Math.floor(h*s))),{width:u,height:h}}function Df(n,t,e){const s=t||1,i=Tn(n.height*s),r=Tn(n.width*s);n.height=Tn(n.height),n.width=Tn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const qS=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Bu()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function Mf(n,t){const e=BS(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Jn(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function GS(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function KS(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=Jn(n,i,e),a=Jn(i,r,e),c=Jn(r,t,e),u=Jn(o,a,e),h=Jn(a,c,e);return Jn(u,h,e)}const YS=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},XS=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Fs(n,t,e){return n?YS(t,e):XS()}function X_(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function Q_(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function J_(n){return n==="angle"?{between:cr,compare:QA,normalize:Qt}:{between:tn,compare:(t,e)=>t-e,normalize:t=>t}}function Of({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function QS(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=J_(s),c=t.length;let{start:u,end:h,loop:d}=n,p,m;if(d){for(u+=c,h+=c,p=0,m=c;p<m&&o(a(t[u%c][s]),i,r);++p)u--,h--;u%=c,h%=c}return h<u&&(h+=c),{start:u,end:h,loop:d,style:n.style}}function Z_(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:c,normalize:u}=J_(s),{start:h,end:d,loop:p,style:m}=QS(n,t,e),_=[];let b=!1,w=null,S,P,C;const D=()=>c(i,C,S)&&a(i,C)!==0,O=()=>a(r,S)===0||c(r,C,S),N=()=>b||D(),x=()=>!b||O();for(let v=h,E=h;v<=d;++v)P=t[v%o],!P.skip&&(S=u(P[s]),S!==C&&(b=c(S,i,r),w===null&&N()&&(w=a(S,i)===0?v:E),w!==null&&x()&&(_.push(Of({start:w,end:v,loop:p,count:o,style:m})),w=null),E=v,C=S));return w!==null&&_.push(Of({start:w,end:d,loop:p,count:o,style:m})),_}function ty(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=Z_(s[i],n.points,t);r.length&&e.push(...r)}return e}function JS(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function ZS(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const u=n[c%i];u.skip||u.stop?a.skip||(s=!1,r.push({start:t%i,end:(c-1)%i,loop:s}),t=o=u.stop?c:null):(o=c,a.skip&&(t=c)),a=u}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function tR(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=JS(e,i,r,s);if(s===!0)return Lf(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+i:a,u=!!n._fullLoop&&o===0&&a===i-1;return Lf(n,ZS(e,o,c,u),e,t)}function Lf(n,t,e,s){return!s||!s.setContext||!e?t:eR(n,t,e,s)}function eR(n,t,e,s){const i=n._chart.getContext(),r=Nf(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,u=[];let h=r,d=t[0].start,p=d;function m(_,b,w,S){const P=a?-1:1;if(_!==b){for(_+=c;e[_%c].skip;)_-=P;for(;e[b%c].skip;)b+=P;_%c!==b%c&&(u.push({start:_%c,end:b%c,loop:w,style:S}),h=S,d=b%c)}}for(const _ of t){d=a?d:_.start;let b=e[d%c],w;for(p=d+1;p<=_.end;p++){const S=e[p%c];w=Nf(s.setContext(zn(i,{type:"segment",p0:b,p1:S,p0DataIndex:(p-1)%c,p1DataIndex:p%c,datasetIndex:o}))),nR(w,h)&&m(d,p-1,_.loop,h),b=S,h=w}d<p-1&&m(d,p-1,_.loop,h)}return u}function Nf(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function nR(n,t){if(!t)return!1;const e=[],s=function(i,r){return Lu(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function oo(n,t,e){return n.options.clip?n[e]:t[e]}function sR(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:oo(e,t,"left"),right:oo(e,t,"right"),top:oo(s,t,"top"),bottom:oo(s,t,"bottom")}:t}function ey(n,t){const e=t._clip;if(e.disabled)return!1;const s=sR(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class iR{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=V_.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var qe=new iR;const Vf="transparent",rR={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=Sf(n||Vf),i=s.valid&&Sf(t||Vf);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class oR{constructor(t,e,s,i){const r=e[s];i=Ci([t.to,i,r,t.from]);const o=Ci([t.from,r,i]);this._active=!0,this._fn=t.fn||rR[t.type||typeof o],this._easing=Hi[t.easing]||Hi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=Ci([t.to,e,i,t.from]),this._from=Ci([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class ny{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Q(t))return;const e=Object.keys(mt.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!Q(r))return;const o={};for(const a of e)o[a]=r[a];(gt(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=cR(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&aR(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const u=o[c];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(t,e));continue}const h=e[u];let d=r[u];const p=s.get(u);if(d)if(p&&d.active()){d.update(p,h,a);continue}else d.cancel();if(!p||!p.duration){t[u]=h;continue}r[u]=d=new oR(p,t,u,h),i.push(d)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return qe.add(this._chart,s),!0}}function aR(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function cR(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Ff(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function lR(n,t,e){if(e===!1)return!1;const s=Ff(n,e),i=Ff(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function uR(n){let t,e,s,i;return Q(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function sy(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function Uf(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,c,u;if(t===null)return;let h=!1;for(o=0,a=i.length;o<a;++o){if(c=+i[o],c===e){if(h=!0,s.all)continue;break}u=n.values[c],Tt(u)&&(r||t===0||Ve(t)===Ve(u))&&(t+=u)}return!h&&!s.all?0:t}function hR(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,u,h;for(c=0,u=o.length;c<u;++c)h=o[c],a[c]={[i]:h,[r]:n[h]};return a}function Sc(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function dR(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function fR(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function pR(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function Bf(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function zf(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,c=r.axis,u=o.axis,h=dR(r,o,s),d=t.length;let p;for(let m=0;m<d;++m){const _=t[m],{[c]:b,[u]:w}=_,S=_._stacks||(_._stacks={});p=S[u]=pR(i,h,b),p[a]=w,p._top=Bf(p,o,!0,s.type),p._bottom=Bf(p,o,!1,s.type);const P=p._visualValues||(p._visualValues={});P[a]=w}}function Rc(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function gR(n,t){return zn(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function mR(n,t,e){return zn(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function yi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const Pc=n=>n==="reset"||n==="none",$f=(n,t)=>t?n:Object.assign({},n),_R=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:sy(e,!0),values:null};class Te{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Sc(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&yi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(d,p,m,_)=>d==="x"?p:d==="r"?_:m,r=e.xAxisID=G(s.xAxisID,Rc(t,"x")),o=e.yAxisID=G(s.yAxisID,Rc(t,"y")),a=e.rAxisID=G(s.rAxisID,Rc(t,"r")),c=e.indexAxis,u=e.iAxisID=i(c,r,o,a),h=e.vAxisID=i(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(u),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Tf(this._data,this),t._stacked&&yi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(Q(e)){const i=this._cachedMeta;this._data=hR(e,i)}else if(s!==e){if(s){Tf(s,this);const i=this._cachedMeta;yi(i),i._parsed=[]}e&&Object.isExtensible(e)&&eS(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=Sc(e.vScale,e),e.stack!==s.stack&&(i=!0,yi(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(zf(this,e._parsed),e._stacked=Sc(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let c=t===0&&e===i.length?!0:s._sorted,u=t>0&&s._parsed[t-1],h,d,p;if(this._parsing===!1)s._parsed=i,s._sorted=!0,p=i;else{gt(i[t])?p=this.parseArrayData(s,i,t,e):Q(i[t])?p=this.parseObjectData(s,i,t,e):p=this.parsePrimitiveData(s,i,t,e);const m=()=>d[a]===null||u&&d[a]<u[a];for(h=0;h<e;++h)s._parsed[h+t]=d=p[h],c&&(m()&&(c=!1),u=d);s._sorted=c}o&&zf(this,p)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,u=r.getLabels(),h=r===o,d=new Array(i);let p,m,_;for(p=0,m=i;p<m;++p)_=p+s,d[p]={[a]:h||r.parse(u[_],_),[c]:o.parse(e[_],_)};return d}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let c,u,h,d;for(c=0,u=i;c<u;++c)h=c+s,d=e[h],a[c]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,u=new Array(i);let h,d,p,m;for(h=0,d=i;h<d;++h)p=h+s,m=e[p],u[h]={x:r.parse(Nn(m,a),p),y:o.parse(Nn(m,c),p)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:sy(i,!0),values:e._stacks[t.axis]._visualValues};return Uf(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=Uf(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),c=_R(e,s,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=fR(a);let p,m;function _(){m=i[p];const b=m[a.axis];return!Tt(m[t.axis])||h>b||d<b}for(p=0;p<o&&!(!_()&&(this.updateRangeFromParsed(u,t,m,c),r));++p);if(r){for(p=o-1;p>=0;--p)if(!_()){this.updateRangeFromParsed(u,t,m,c);break}}return u}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],Tt(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=uR(G(this.options.clip,lR(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||i.length-a,u=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,r,a,c),h=a;h<a+c;++h){const d=i[h];d.hidden||(d.active&&u?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=mR(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=gR(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&ar(s);if(a)return $f(a,c);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,t),d=i?[`${t}Hover`,"hover",t,""]:[t,""],p=u.getOptionScopes(this.getDataset(),h),m=Object.keys(mt.elements[t]),_=()=>this.getContext(s,i,e),b=u.resolveNamedOptions(p,m,_,d);return b.$shared&&(b.$shared=c,r[o]=Object.freeze($f(b,c))),b}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(i.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),p=h.getOptionScopes(this.getDataset(),d);c=h.createResolver(p,this.getContext(t,s,e))}const u=new ny(i,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Pc(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){Pc(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!Pc(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,u]of this._syncList)this[a](c,u);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const c=u=>{for(u.length+=e,a=u.length-1;a>=o;a--)u[a]=u[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&yi(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}U(Te,"defaults",{}),U(Te,"datasetElementType",null),U(Te,"dataElementType",null);function yR(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=N_(s.sort((i,r)=>i-r))}return n._cache.$bar}function vR(n){const t=n.iScale,e=yR(t,n.type);let s=t._length,i,r,o,a;const c=()=>{o===32767||o===-32768||(ar(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),c();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),c();return s}function bR(n,t,e,s){const i=e.barThickness;let r,o;return Y(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function wR(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const u=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:u}}function ER(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let c=o,u=a;Math.abs(o)>Math.abs(a)&&(c=a,u=o),t[e.axis]=u,t._custom={barStart:c,barEnd:u,start:i,end:r,min:o,max:a}}function iy(n,t,e,s){return gt(n)?ER(n,t,e,s):t[e.axis]=e.parse(n,s),t}function jf(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,c=[];let u,h,d,p;for(u=e,h=e+s;u<h;++u)p=t[u],d={},d[i.axis]=a||i.parse(o[u],u),c.push(iy(p,d,r,u));return c}function kc(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function xR(n,t,e){return n!==0?Ve(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function TR(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function IR(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:u,bottom:h}=TR(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=u:(e._bottom||0)===s?i=h:(r[Hf(h,o,a,c)]=!0,i=u)),r[Hf(i,o,a,c)]=!0,n.borderSkipped=r}function Hf(n,t,e,s){return s?(n=AR(n,t,e),n=Wf(n,e,t)):n=Wf(n,t,e),n}function AR(n,t,e){return n===t?e:n===e?t:n}function Wf(n,t,e){return n==="start"?t:n==="end"?e:n}function SR(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class To extends Te{parsePrimitiveData(t,e,s,i){return jf(t,e,s,i)}parseArrayData(t,e,s,i){return jf(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,u=r.axis==="x"?a:c,h=o.axis==="x"?a:c,d=[];let p,m,_,b;for(p=s,m=s+i;p<m;++p)b=e[p],_={},_[r.axis]=r.parse(Nn(b,u),p),d.push(iy(Nn(b,h),_,o,p));return d}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=kc(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),u=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:p}=this._getSharedOptions(e,i);for(let m=e;m<e+s;m++){const _=this.getParsed(m),b=r||Y(_[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),w=this._calculateBarIndexPixels(m,h),S=(_._stacks||{})[a.axis],P={horizontal:u,base:b.base,enableBorderRadius:!S||kc(_._custom)||o===S._top||o===S._bottom,x:u?b.head:w.center,y:u?w.center:b.head,height:u?w.size:Math.abs(b.size),width:u?Math.abs(b.size):w.size};p&&(P.options=d||this.resolveDataElementOptions(m,t[m].active?"active":i));const C=P.options||t[m].options;IR(P,C,S,o),SR(P,C,h.ratio),this.updateElement(t[m],m,P,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],u=h=>{const d=h._parsed.find(m=>m[s.axis]===c),p=d&&d[h.vScale.axis];if(Y(p)||isNaN(p))return!0};for(const h of i)if(!(e!==void 0&&u(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[G(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||vR(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),u=c._custom,h=kc(u);let d=c[e.axis],p=0,m=s?this.applyStack(e,c,s):d,_,b;m!==d&&(p=m-d,m=d),h&&(d=u.barStart,m=u.barEnd-u.barStart,d!==0&&Ve(d)!==Ve(u.barEnd)&&(p=0),p+=d);const w=!Y(r)&&!h?r:p;let S=e.getPixelForValue(w);if(this.chart.getDataVisibility(t)?_=e.getPixelForValue(p+m):_=S,b=_-S,Math.abs(b)<o){b=xR(b,e,a)*o,d===a&&(S-=b/2);const P=e.getPixelForDecimal(0),C=e.getPixelForDecimal(1),D=Math.min(P,C),O=Math.max(P,C);S=Math.max(Math.min(S,O),D),_=S+b,s&&!h&&(c._stacks[e.axis]._visualValues[i]=e.getValueForPixel(_)-e.getValueForPixel(S))}if(S===e.getPixelForValue(a)){const P=Ve(b)*e.getLineWidthForValue(a)/2;S+=P,b-=P}return{size:b,base:S,head:_,center:_+b/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=G(i.maxBarThickness,1/0);let a,c;const u=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,d=i.barThickness==="flex"?wR(t,e,i,h*u):bR(t,e,i,h*u),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(G(p,this.getFirstScaleIdForIndexAxis())),_=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+m;a=d.start+d.chunk*_+d.chunk/2,c=Math.min(o,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}U(To,"id","bar"),U(To,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),U(To,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Io extends Te{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const r=super.parsePrimitiveData(t,e,s,i);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+s).radius;return r}parseArrayData(t,e,s,i){const r=super.parseArrayData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a[2],this.resolveDataElementOptions(o+s).radius)}return r}parseObjectData(t,e,s,i){const r=super.parseObjectData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y),u=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(u?", "+u:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:u}=this._getSharedOptions(e,i),h=o.axis,d=a.axis;for(let p=e;p<e+s;p++){const m=t[p],_=!r&&this.getParsed(p),b={},w=b[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(_[h]),S=b[d]=r?a.getBasePixel():a.getPixelForValue(_[d]);b.skip=isNaN(w)||isNaN(S),u&&(b.options=c||this.resolveDataElementOptions(p,m.active?"active":i),r&&(b.options.radius=0)),this.updateElement(m,p,b,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return e!=="active"&&(i.radius=0),i.radius+=G(s&&s._custom,r),i}}U(Io,"id","bubble"),U(Io,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),U(Io,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function RR(n,t,e){let s=1,i=1,r=0,o=0;if(t<ft){const a=n,c=a+t,u=Math.cos(a),h=Math.sin(a),d=Math.cos(c),p=Math.sin(c),m=(C,D,O)=>cr(C,a,c,!0)?1:Math.max(D,D*e,O,O*e),_=(C,D,O)=>cr(C,a,c,!0)?-1:Math.min(D,D*e,O,O*e),b=m(0,u,d),w=m(St,h,p),S=_(st,u,d),P=_(st+St,h,p);s=(b-S)/2,i=(w-P)/2,r=-(b+S)/2,o=-(w+P)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class ts extends Te{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=c=>+s[c];if(Q(s[t])){const{key:c="value"}=this._parsing;r=u=>+Nn(s[u],c)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return xe(this.options.rotation-90)}_getCircumference(){return xe(this.options.circumference)}_getRotationExtents(){let t=ft,e=-ft;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(BA(this.options.cutout,a),1),u=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:p,ratioY:m,offsetX:_,offsetY:b}=RR(d,h,c),w=(s.width-o)/p,S=(s.height-o)/m,P=Math.max(Math.min(w,S)/2,0),C=C_(this.options.radius,P),D=Math.max(C*c,0),O=(C-D)/this._getVisibleDatasetWeightTotal();this.offsetX=_*C,this.offsetY=b*C,i.total=this.calculateTotal(),this.outerRadius=C-O*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-O*u,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/ft)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,u=o.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,p=r&&u.animateScale,m=p?0:this.innerRadius,_=p?0:this.outerRadius,{sharedOptions:b,includeOptions:w}=this._getSharedOptions(e,i);let S=this._getRotation(),P;for(P=0;P<e;++P)S+=this._circumference(P,r);for(P=e;P<e+s;++P){const C=this._circumference(P,r),D=t[P],O={x:h+this.offsetX,y:d+this.offsetY,startAngle:S,endAngle:S+C,circumference:C,outerRadius:_,innerRadius:m};w&&(O.options=b||this.resolveDataElementOptions(P,D.active?"active":i)),S+=C,this.updateElement(D,P,O,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?ft*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=Rr(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,c;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)c=a.resolveDataElementOptions(i),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(G(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}U(ts,"id","doughnut"),U(ts,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),U(ts,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),U(ts,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,u)=>{const d=t.getDatasetMeta(0).controller.getStyle(u);return{text:c,fillStyle:d.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(u),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||d.borderRadius),index:u}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Ao extends Te{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=U_(e,i,o);this._drawStart=a,this._drawCount=c,B_(e)&&(a=0,c=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:u},t),this.updateElements(i,a,c,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:u}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,i),p=o.axis,m=a.axis,{spanGaps:_,segment:b}=this.options,w=Gs(_)?_:Number.POSITIVE_INFINITY,S=this.chart._animationsDisabled||r||i==="none",P=e+s,C=t.length;let D=e>0&&this.getParsed(e-1);for(let O=0;O<C;++O){const N=t[O],x=S?N:{};if(O<e||O>=P){x.skip=!0;continue}const v=this.getParsed(O),E=Y(v[m]),I=x[p]=o.getPixelForValue(v[p],O),A=x[m]=r||E?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,v,c):v[m],O);x.skip=isNaN(I)||isNaN(A)||E,x.stop=O>0&&Math.abs(v[p]-D[p])>w,b&&(x.parsed=v,x.raw=u.data[O]),d&&(x.options=h||this.resolveDataElementOptions(O,N.active?"active":i)),S||this.updateElement(N,O,x,i),D=v}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}U(Ao,"id","line"),U(Ao,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),U(Ao,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class qi extends Te{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=Rr(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:r}}parseObjectData(t,e,s,i){return K_.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const r=this.getParsed(i).r;!isNaN(r)&&this.chart.getDataVisibility(i)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(i/2,0),o=Math.max(s.cutoutPercentage?r/100*s.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,c=o.options.animation,u=this._cachedMeta.rScale,h=u.xCenter,d=u.yCenter,p=u.getIndexAngle(0)-.5*st;let m=p,_;const b=360/this.countVisibleElements();for(_=0;_<e;++_)m+=this._computeAngle(_,i,b);for(_=e;_<e+s;_++){const w=t[_];let S=m,P=m+this._computeAngle(_,i,b),C=o.getDataVisibility(_)?u.getDistanceFromCenterForValue(this.getParsed(_).r):0;m=P,r&&(c.animateScale&&(C=0),c.animateRotate&&(S=P=p));const D={x:h,y:d,innerRadius:0,outerRadius:C,startAngle:S,endAngle:P,options:this.resolveDataElementOptions(_,w.active?"active":i)};this.updateElement(w,_,D,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?xe(this.resolveDataElementOptions(t,e).angle||s):0}}U(qi,"id","polarArea"),U(qi,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),U(qi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:i,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class ml extends ts{}U(ml,"id","pie"),U(ml,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class So extends Te{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return K_.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],r=e.iScale.getLabels();if(s.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===i.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const r=this._cachedMeta.rScale,o=i==="reset";for(let a=e;a<e+s;a++){const c=t[a],u=this.resolveDataElementOptions(a,c.active?"active":i),h=r.getPointPositionForValue(a,this.getParsed(a).r),d=o?r.xCenter:h.x,p=o?r.yCenter:h.y,m={x:d,y:p,angle:h.angle,skip:isNaN(d)||isNaN(p),options:u};this.updateElement(c,a,m,i)}}}U(So,"id","radar"),U(So,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),U(So,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ro extends Te{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=U_(e,s,i);if(this._drawStart=r,this._drawCount=o,B_(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const u=this.resolveDatasetElementOptions(t);u.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:u},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:u}=this._cachedMeta,h=this.resolveDataElementOptions(e,i),d=this.getSharedOptions(h),p=this.includeOptions(i,d),m=o.axis,_=a.axis,{spanGaps:b,segment:w}=this.options,S=Gs(b)?b:Number.POSITIVE_INFINITY,P=this.chart._animationsDisabled||r||i==="none";let C=e>0&&this.getParsed(e-1);for(let D=e;D<e+s;++D){const O=t[D],N=this.getParsed(D),x=P?O:{},v=Y(N[_]),E=x[m]=o.getPixelForValue(N[m],D),I=x[_]=r||v?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,N,c):N[_],D);x.skip=isNaN(E)||isNaN(I)||v,x.stop=D>0&&Math.abs(N[m]-C[m])>S,w&&(x.parsed=N,x.raw=u.data[D]),p&&(x.options=d||this.resolveDataElementOptions(D,O.active?"active":i)),P||this.updateElement(O,D,x,i),C=N}this.updateSharedOptions(d,i,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}U(Ro,"id","scatter"),U(Ro,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),U(Ro,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var PR=Object.freeze({__proto__:null,BarController:To,BubbleController:Io,DoughnutController:ts,LineController:Ao,PieController:ml,PolarAreaController:qi,RadarController:So,ScatterController:Ro});function Kn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class $u{constructor(t){U(this,"options");this.options=t||{}}static override(t){Object.assign($u.prototype,t)}init(){}formats(){return Kn()}parse(){return Kn()}format(){return Kn()}add(){return Kn()}diff(){return Kn()}startOf(){return Kn()}endOf(){return Kn()}}var kR={_date:$u};function CR(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const u=a._reversePixels?ZA:en;if(s){if(i._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const p=u(r,t,e-d),m=u(r,t,e+d);return{lo:p.lo,hi:m.hi}}}}else{const h=u(r,t,e);if(c){const{vScale:d}=i._cachedMeta,{_parsed:p}=n,m=p.slice(0,h.lo+1).reverse().findIndex(b=>!Y(b[d.axis]));h.lo-=Math.max(0,m);const _=p.slice(h.hi).findIndex(b=>!Y(b[d.axis]));h.hi+=Math.max(0,_)}return h}}return{lo:0,hi:r.length-1}}function La(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:u,data:h}=r[a],{lo:d,hi:p}=CR(r[a],t,o,i);for(let m=d;m<=p;++m){const _=h[m];_.skip||s(_,u,m)}}}function DR(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Cc(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||La(n,e,t,function(a,c,u){!i&&!nn(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:c,index:u})},!0),r}function MR(n,t,e,s){let i=[];function r(o,a,c){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],s),{angle:d}=O_(o,{x:t.x,y:t.y});cr(d,u,h)&&i.push({element:o,datasetIndex:a,index:c})}return La(n,e,t,r),i}function OR(n,t,e,s,i,r){let o=[];const a=DR(e);let c=Number.POSITIVE_INFINITY;function u(h,d,p){const m=h.inRange(t.x,t.y,i);if(s&&!m)return;const _=h.getCenterPoint(i);if(!(!!r||n.isPointInArea(_))&&!m)return;const w=a(t,_);w<c?(o=[{element:h,datasetIndex:d,index:p}],c=w):w===c&&o.push({element:h,datasetIndex:d,index:p})}return La(n,e,t,u),o}function Dc(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?MR(n,t,e,i):OR(n,t,e,s,i,r)}function qf(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return La(n,e,t,(c,u,h)=>{c[o]&&c[o](t[e],i)&&(r.push({element:c,datasetIndex:u,index:h}),a=a||c.inRange(t.x,t.y,i))}),s&&!a?[]:r}var LR={modes:{index(n,t,e,s){const i=Qn(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Cc(n,i,r,s,o):Dc(n,i,r,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,d=u.data[h];d&&!d.skip&&c.push({element:d,datasetIndex:u.index,index:h})}),c):[]},dataset(n,t,e,s){const i=Qn(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Cc(n,i,r,s,o):Dc(n,i,r,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,u=n.getDatasetMeta(c).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:c,index:h})}return a},point(n,t,e,s){const i=Qn(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Cc(n,i,r,s,o)},nearest(n,t,e,s){const i=Qn(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Dc(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=Qn(t,n);return qf(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=Qn(t,n);return qf(n,i,"y",e.intersect,s)}}};const ry=["left","top","right","bottom"];function vi(n,t){return n.filter(e=>e.pos===t)}function Gf(n,t){return n.filter(e=>ry.indexOf(e.pos)===-1&&e.box.axis===t)}function bi(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function NR(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function VR(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!ry.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function FR(n,t){const e=VR(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,u=e[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*s:c&&t.availableWidth,a.height=i):(a.width=s,a.height=h?h*i:c&&t.availableHeight)}return e}function UR(n){const t=NR(n),e=bi(t.filter(u=>u.box.fullSize),!0),s=bi(vi(t,"left"),!0),i=bi(vi(t,"right")),r=bi(vi(t,"top"),!0),o=bi(vi(t,"bottom")),a=Gf(t,"x"),c=Gf(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(c).concat(o).concat(a),chartArea:vi(t,"chartArea"),vertical:s.concat(i).concat(c),horizontal:r.concat(o).concat(a)}}function Kf(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function oy(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function BR(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!Q(i)){e.size&&(n[i]-=e.size);const d=s[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?r.height:r.width),e.size=d.size/d.count,n[i]+=e.size}r.getPadding&&oy(o,r.getPadding());const a=Math.max(0,t.outerWidth-Kf(o,n,"left","right")),c=Math.max(0,t.outerHeight-Kf(o,n,"top","bottom")),u=a!==n.w,h=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:u,other:h}:{same:h,other:u}}function zR(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function $R(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function Di(n,t,e,s){const i=[];let r,o,a,c,u,h;for(r=0,o=n.length,u=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,$R(a.horizontal,t));const{same:d,other:p}=BR(t,e,a,s);u|=d&&i.length,h=h||p,c.fullSize||i.push(a)}return u&&Di(i,t,e,s)||h}function ao(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function Yf(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,u=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const d=t.w*h,p=u.size||c.height;ar(u.start)&&(o=u.start),c.fullSize?ao(c,i.left,o,e.outerWidth-i.right-i.left,p):ao(c,t.left+u.placed,o,d,p),u.start=o,u.placed+=d,o=c.bottom}else{const d=t.h*h,p=u.size||c.width;ar(u.start)&&(r=u.start),c.fullSize?ao(c,r,i.top,p,e.outerHeight-i.bottom-i.top):ao(c,r,t.top+u.placed,p,d),u.start=r,u.placed+=d,r=c.right}}t.x=r,t.y=o}var Zt={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=ee(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=UR(n.boxes),c=a.vertical,u=a.horizontal;rt(n.boxes,b=>{typeof b.beforeLayout=="function"&&b.beforeLayout()});const h=c.reduce((b,w)=>w.box.options&&w.box.options.display===!1?b:b+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),p=Object.assign({},i);oy(p,ee(s));const m=Object.assign({maxPadding:p,w:r,h:o,x:i.left,y:i.top},i),_=FR(c.concat(u),d);Di(a.fullSize,m,d,_),Di(c,m,d,_),Di(u,m,d,_)&&Di(c,m,d,_),zR(m),Yf(a.leftAndTop,m,d,_),m.x+=m.w,m.y+=m.h,Yf(a.rightAndBottom,m,d,_),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},rt(a.chartArea,b=>{const w=b.box;Object.assign(w,n.chartArea),w.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class ay{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class jR extends ay{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Po="$chartjs",HR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Xf=n=>n===null||n==="";function WR(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[Po]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Xf(i)){const r=Mf(n,"width");r!==void 0&&(n.width=r)}if(Xf(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Mf(n,"height");r!==void 0&&(n.height=r)}return n}const cy=qS?{passive:!0}:!1;function qR(n,t,e){n&&n.addEventListener(t,e,cy)}function GR(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,cy)}function KR(n,t){const e=HR[n.type]||n.type,{x:s,y:i}=Qn(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function sa(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function YR(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||sa(a.addedNodes,s),o=o&&!sa(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function XR(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||sa(a.removedNodes,s),o=o&&!sa(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const ur=new Map;let Qf=0;function ly(){const n=window.devicePixelRatio;n!==Qf&&(Qf=n,ur.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function QR(n,t){ur.size||window.addEventListener("resize",ly),ur.set(n,t)}function JR(n){ur.delete(n),ur.size||window.removeEventListener("resize",ly)}function ZR(n,t,e){const s=n.canvas,i=s&&zu(s);if(!i)return;const r=F_((a,c)=>{const u=i.clientWidth;e(a,c),u<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],u=c.contentRect.width,h=c.contentRect.height;u===0&&h===0||r(u,h)});return o.observe(i),QR(n,r),o}function Mc(n,t,e){e&&e.disconnect(),t==="resize"&&JR(n)}function tP(n,t,e){const s=n.canvas,i=F_(r=>{n.ctx!==null&&e(KR(r,n))},n);return qR(s,t,i),i}class eP extends ay{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(WR(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Po])return!1;const s=e[Po].initial;["height","width"].forEach(r=>{const o=s[r];Y(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[Po],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:YR,detach:XR,resize:ZR}[e]||tP;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:Mc,detach:Mc,resize:Mc}[e]||GR)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return WS(t,e,s,i)}isAttached(t){const e=t&&zu(t);return!!(e&&e.isConnected)}}function nP(n){return!Bu()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?jR:eP}class Re{constructor(){U(this,"x");U(this,"y");U(this,"active",!1);U(this,"options");U(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Gs(this.x)&&Gs(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}U(Re,"defaults",{}),U(Re,"defaultRoutes");function sP(n,t){const e=n.options.ticks,s=iP(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?oP(t):[],o=r.length,a=r[0],c=r[o-1],u=[];if(o>i)return aP(t,u,r,o/i),u;const h=rP(r,t,i);if(o>0){let d,p;const m=o>1?Math.round((c-a)/(o-1)):null;for(co(t,u,h,Y(m)?0:a-m,a),d=0,p=o-1;d<p;d++)co(t,u,h,r[d],r[d+1]);return co(t,u,h,c,Y(m)?t.length:c+m),u}return co(t,u,h),u}function iP(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function rP(n,t,e){const s=cP(n),i=t.length/e;if(!s)return Math.max(i,1);const r=KA(s);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>i)return c}return Math.max(i,1)}function oP(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function aP(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function co(n,t,e,s,i){const r=G(s,0),o=Math.min(G(i,n.length),n.length);let a=0,c,u,h;for(e=Math.ceil(e),i&&(c=i-s,e=c/Math.floor(c/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(u=Math.max(r,0);u<o;u++)u===h&&(t.push(n[u]),a++,h=Math.round(r+a*e))}function cP(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const lP=n=>n==="left"?"right":n==="right"?"left":n,Jf=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,Zf=(n,t)=>Math.min(t||n,n);function tp(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function uP(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(i),u;if(!(e&&(s===1?u=Math.max(c-r,o-c):t===0?u=(n.getPixelForTick(1)-c)/2:u=(c-n.getPixelForTick(i-1))/2,c+=i<t?u:-u,c<r-a||c>o+a)))return c}function hP(n,t){rt(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function wi(n){return n.drawTicks?n.tickLength:0}function ep(n,t){if(!n.display)return 0;const e=Dt(n.font,t),s=ee(n.padding);return(gt(n.text)?n.text.length:1)*e.lineHeight+s.height}function dP(n,t){return zn(n,{scale:t,type:"scale"})}function fP(n,t,e){return zn(n,{tick:e,index:t,type:"tick"})}function pP(n,t,e){let s=Ou(n);return(e&&t!=="right"||!e&&t==="right")&&(s=lP(s)),s}function gP(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:c}=n,{chartArea:u,scales:h}=c;let d=0,p,m,_;const b=o-i,w=a-r;if(n.isHorizontal()){if(m=Kt(s,r,a),Q(e)){const S=Object.keys(e)[0],P=e[S];_=h[S].getPixelForValue(P)+b-t}else e==="center"?_=(u.bottom+u.top)/2+b-t:_=Jf(n,e,t);p=a-r}else{if(Q(e)){const S=Object.keys(e)[0],P=e[S];m=h[S].getPixelForValue(P)-w+t}else e==="center"?m=(u.left+u.right)/2-w+t:m=Jf(n,e,t);_=Kt(s,o,i),d=e==="left"?-St:St}return{titleX:m,titleY:_,maxWidth:p,rotation:d}}class ys extends Re{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=pe(t,Number.POSITIVE_INFINITY),e=pe(e,Number.NEGATIVE_INFINITY),s=pe(s,Number.POSITIVE_INFINITY),i=pe(i,Number.NEGATIVE_INFINITY),{min:pe(t,s),max:pe(e,i),minDefined:Tt(t),maxDefined:Tt(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,u=a.length;c<u;++c)o=a[c].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:pe(e,pe(s,e)),max:pe(s,pe(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ut(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=xS(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?tp(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=sP(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ut(this.options.afterUpdate,[this])}beforeSetDimensions(){ut(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ut(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ut(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ut(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=ut(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){ut(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ut(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=Zf(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,c,u;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const h=this._getLabelSizes(),d=h.widest.width,p=h.highest.height,m=Lt(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),d+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-wi(t.grid)-e.padding-ep(t.title,this.chart.options.font),u=Math.sqrt(d*d+p*p),o=Du(Math.min(Math.asin(Lt((h.highest.height+6)/a,-1,1)),Math.asin(Lt(c/u,-1,1))-Math.asin(Lt(p/u,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){ut(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ut(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=ep(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=wi(r)+c):(t.height=this.maxHeight,t.width=wi(r)+c),s.display&&this.ticks.length){const{first:u,last:h,widest:d,highest:p}=this._getLabelSizes(),m=s.padding*2,_=xe(this.labelRotation),b=Math.cos(_),w=Math.sin(_);if(a){const S=s.mirror?0:w*d.width+b*p.height;t.height=Math.min(this.maxHeight,t.height+S+m)}else{const S=s.mirror?0:b*d.width+w*p.height;t.width=Math.min(this.maxWidth,t.width+S+m)}this._calculatePadding(u,h,w,b)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,m=0;c?u?(p=i*t.width,m=s*e.height):(p=s*t.height,m=i*e.width):r==="start"?m=e.width:r==="end"?p=t.width:r!=="inner"&&(p=t.width/2,m=e.width/2),this.paddingLeft=Math.max((p-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((m-d+o)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=e.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ut(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)Y(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=tp(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/Zf(e,s));let u=0,h=0,d,p,m,_,b,w,S,P,C,D,O;for(d=0;d<e;d+=c){if(_=t[d].label,b=this._resolveTickFontOptions(d),i.font=w=b.string,S=r[w]=r[w]||{data:{},gc:[]},P=b.lineHeight,C=D=0,!Y(_)&&!gt(_))C=ea(i,S.data,S.gc,C,_),D=P;else if(gt(_))for(p=0,m=_.length;p<m;++p)O=_[p],!Y(O)&&!gt(O)&&(C=ea(i,S.data,S.gc,C,O),D+=P);o.push(C),a.push(D),u=Math.max(C,u),h=Math.max(D,h)}hP(r,e);const N=o.indexOf(u),x=a.indexOf(h),v=E=>({width:o[E]||0,height:a[E]||0});return{first:v(0),last:v(e-1),widest:v(N),highest:v(x),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return JA(this._alignToPixels?Gn(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=fP(this.getContext(),t,s))}return this.$context||(this.$context=dP(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=xe(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*s>a*i?a/s:c/i:c*i<a*s?c/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,c=r.offset,u=this.isHorizontal(),d=this.ticks.length+(c?1:0),p=wi(r),m=[],_=a.setContext(this.getContext()),b=_.display?_.width:0,w=b/2,S=function(lt){return Gn(s,lt,b)};let P,C,D,O,N,x,v,E,I,A,R,T;if(o==="top")P=S(this.bottom),x=this.bottom-p,E=P-w,A=S(t.top)+w,T=t.bottom;else if(o==="bottom")P=S(this.top),A=t.top,T=S(t.bottom)-w,x=P+w,E=this.top+p;else if(o==="left")P=S(this.right),N=this.right-p,v=P-w,I=S(t.left)+w,R=t.right;else if(o==="right")P=S(this.left),I=t.left,R=S(t.right)-w,N=P+w,v=this.left+p;else if(e==="x"){if(o==="center")P=S((t.top+t.bottom)/2+.5);else if(Q(o)){const lt=Object.keys(o)[0],at=o[lt];P=S(this.chart.scales[lt].getPixelForValue(at))}A=t.top,T=t.bottom,x=P+w,E=x+p}else if(e==="y"){if(o==="center")P=S((t.left+t.right)/2);else if(Q(o)){const lt=Object.keys(o)[0],at=o[lt];P=S(this.chart.scales[lt].getPixelForValue(at))}N=P-w,v=N-p,I=t.left,R=t.right}const _t=G(i.ticks.maxTicksLimit,d),Z=Math.max(1,Math.ceil(d/_t));for(C=0;C<d;C+=Z){const lt=this.getContext(C),at=r.setContext(lt),Nt=a.setContext(lt),Pt=at.lineWidth,Be=at.color,vs=Nt.dash||[],ne=Nt.dashOffset,wt=at.tickWidth,ze=at.tickColor,be=at.tickBorderDash||[],$e=at.tickBorderDashOffset;D=uP(this,C,c),D!==void 0&&(O=Gn(s,D,Pt),u?N=v=I=R=O:x=E=A=T=O,m.push({tx1:N,ty1:x,tx2:v,ty2:E,x1:I,y1:A,x2:R,y2:T,width:Pt,color:Be,borderDash:vs,borderDashOffset:ne,tickWidth:wt,tickColor:ze,tickBorderDash:be,tickBorderDashOffset:$e}))}return this._ticksLength=d,this._borderValue=P,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:u,padding:h,mirror:d}=r,p=wi(s.grid),m=p+h,_=d?-h:m,b=-xe(this.labelRotation),w=[];let S,P,C,D,O,N,x,v,E,I,A,R,T="middle";if(i==="top")N=this.bottom-_,x=this._getXAxisLabelAlignment();else if(i==="bottom")N=this.top+_,x=this._getXAxisLabelAlignment();else if(i==="left"){const Z=this._getYAxisLabelAlignment(p);x=Z.textAlign,O=Z.x}else if(i==="right"){const Z=this._getYAxisLabelAlignment(p);x=Z.textAlign,O=Z.x}else if(e==="x"){if(i==="center")N=(t.top+t.bottom)/2+m;else if(Q(i)){const Z=Object.keys(i)[0],lt=i[Z];N=this.chart.scales[Z].getPixelForValue(lt)+m}x=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")O=(t.left+t.right)/2-m;else if(Q(i)){const Z=Object.keys(i)[0],lt=i[Z];O=this.chart.scales[Z].getPixelForValue(lt)}x=this._getYAxisLabelAlignment(p).textAlign}e==="y"&&(c==="start"?T="top":c==="end"&&(T="bottom"));const _t=this._getLabelSizes();for(S=0,P=a.length;S<P;++S){C=a[S],D=C.label;const Z=r.setContext(this.getContext(S));v=this.getPixelForTick(S)+r.labelOffset,E=this._resolveTickFontOptions(S),I=E.lineHeight,A=gt(D)?D.length:1;const lt=A/2,at=Z.color,Nt=Z.textStrokeColor,Pt=Z.textStrokeWidth;let Be=x;o?(O=v,x==="inner"&&(S===P-1?Be=this.options.reverse?"left":"right":S===0?Be=this.options.reverse?"right":"left":Be="center"),i==="top"?u==="near"||b!==0?R=-A*I+I/2:u==="center"?R=-_t.highest.height/2-lt*I+I:R=-_t.highest.height+I/2:u==="near"||b!==0?R=I/2:u==="center"?R=_t.highest.height/2-lt*I:R=_t.highest.height-A*I,d&&(R*=-1),b!==0&&!Z.showLabelBackdrop&&(O+=I/2*Math.sin(b))):(N=v,R=(1-A)*I/2);let vs;if(Z.showLabelBackdrop){const ne=ee(Z.backdropPadding),wt=_t.heights[S],ze=_t.widths[S];let be=R-ne.top,$e=0-ne.left;switch(T){case"middle":be-=wt/2;break;case"bottom":be-=wt;break}switch(x){case"center":$e-=ze/2;break;case"right":$e-=ze;break;case"inner":S===P-1?$e-=ze:S>0&&($e-=ze/2);break}vs={left:$e,top:be,width:ze+ne.width,height:wt+ne.height,color:Z.backdropColor}}w.push({label:D,font:E,textOffset:R,options:{rotation:b,color:at,strokeColor:Nt,strokeWidth:Pt,textAlign:Be,textBaseline:T,translation:[O,N],backdrop:vs}})}return w}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-xe(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let u,h;return e==="left"?i?(h=this.right+r,s==="near"?u="left":s==="center"?(u="center",h+=c/2):(u="right",h+=c)):(h=this.right-a,s==="near"?u="right":s==="center"?(u="center",h-=c/2):(u="left",h=this.left)):e==="right"?i?(h=this.left+r,s==="near"?u="right":s==="center"?(u="center",h-=c/2):(u="left",h-=c)):(h=this.left+a,s==="near"?u="left":s==="center"?(u="center",h+=c/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,u,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(u.x,u.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const c=i[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let u,h,d,p;this.isHorizontal()?(u=Gn(t,this.left,o)-o/2,h=Gn(t,this.right,a)+a/2,d=p=c):(d=Gn(t,this.top,o)-o/2,p=Gn(t,this.bottom,a)+a/2,u=h=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(u,d),e.lineTo(h,p),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&Da(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,u=o.label,h=o.textOffset;ds(s,u,0,h,c,a)}i&&Ma(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=Dt(s.font),o=ee(s.padding),a=s.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||Q(e)?(c+=o.bottom,gt(s.text)&&(c+=r.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:u,titleY:h,maxWidth:d,rotation:p}=gP(this,c,e,a);ds(t,s.text,0,0,r,{color:s.color,maxWidth:d,rotation:p,textAlign:pP(a,e,i),textBaseline:"middle",translation:[u,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=G(t.grid&&t.grid.z,-1),i=G(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==ys.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Dt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class lo{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;yP(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,mP(t,o,s),this.override&&mt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in mt[i]&&(delete mt[i][s],this.override&&delete hs[s])}}function mP(n,t,e){const s=or(Object.create(null),[e?mt.get(e):{},mt.get(t),n.defaults]);mt.set(t,s),n.defaultRoutes&&_P(t,n.defaultRoutes),n.descriptors&&mt.describe(t,n.descriptors)}function _P(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");mt.route(r,i,c,a)})}function yP(n){return"id"in n&&"defaults"in n}class vP{constructor(){this.controllers=new lo(Te,"datasets",!0),this.elements=new lo(Re,"elements"),this.plugins=new lo(Object,"plugins"),this.scales=new lo(ys,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):rt(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=Cu(t);ut(s["before"+i],[],s),e[t](s),ut(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var ke=new vP;class bP{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],c=[e,i,r.options];if(ut(a,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){Y(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=G(s.options&&s.options.plugins,{}),r=wP(s);return i===!1&&!e?[]:xP(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function wP(n){const t={},e=[],s=Object.keys(ke.plugins.items);for(let r=0;r<s.length;r++)e.push(ke.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function EP(n,t){return!t&&n===!1?null:n===!0?{}:n}function xP(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const c=a.id,u=EP(s[c],i);u!==null&&r.push({plugin:a,options:TP(n.config,{plugin:a,local:e[c]},u,o)})}return r}function TP(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function _l(n,t){const e=mt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function IP(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function AP(n,t){return n===t?"_index_":"_value_"}function np(n){if(n==="x"||n==="y"||n==="r")return n}function SP(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function yl(n,...t){if(np(n))return n;for(const e of t){const s=e.axis||SP(e.position)||n.length>1&&np(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function sp(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function RP(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return sp(n,"x",e[0])||sp(n,"y",e[0])}return{}}function PP(n,t){const e=hs[n.type]||{scales:{}},s=t.scales||{},i=_l(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!Q(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=yl(o,a,RP(o,n),mt.scales[a.type]),u=AP(c,i),h=e.scales||{};r[o]=$i(Object.create(null),[{axis:c},a,h[c],h[u]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||_l(a,t),h=(hs[a]||{}).scales||{};Object.keys(h).forEach(d=>{const p=IP(d,c),m=o[p+"AxisID"]||p;r[m]=r[m]||Object.create(null),$i(r[m],[{axis:p},s[m],h[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];$i(a,[mt.scales[a.type],mt.scale])}),r}function uy(n){const t=n.options||(n.options={});t.plugins=G(t.plugins,{}),t.scales=PP(n,t)}function hy(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function kP(n){return n=n||{},n.data=hy(n.data),uy(n),n}const ip=new Map,dy=new Set;function uo(n,t){let e=ip.get(n);return e||(e=t(),ip.set(n,e),dy.add(e)),e}const Ei=(n,t,e)=>{const s=Nn(t,e);s!==void 0&&n.add(s)};class CP{constructor(t){this._config=kP(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=hy(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),uy(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return uo(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return uo(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return uo(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return uo(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(h=>{t&&(c.add(t),h.forEach(d=>Ei(c,t,d))),h.forEach(d=>Ei(c,i,d)),h.forEach(d=>Ei(c,hs[r]||{},d)),h.forEach(d=>Ei(c,mt,d)),h.forEach(d=>Ei(c,pl,d))});const u=Array.from(c);return u.length===0&&u.push(Object.create(null)),dy.has(e)&&o.set(e,u),u}chartOptionScopes(){const{options:t,type:e}=this;return[t,hs[e]||{},mt.datasets[e]||{},{type:e},mt,pl]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=rp(this._resolverCache,t,i);let c=o;if(MP(o,e)){r.$shared=!1,s=Vn(s)?s():s;const u=this.createResolver(t,s,a);c=Ks(o,s,u)}for(const u of e)r[u]=c[u];return r}createResolver(t,e,s=[""],i){const{resolver:r}=rp(this._resolverCache,t,s);return Q(e)?Ks(r,e,void 0,i):r}}function rp(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:Vu(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const DP=n=>Q(n)&&Object.getOwnPropertyNames(n).some(t=>Vn(n[t]));function MP(n,t){const{isScriptable:e,isIndexable:s}=H_(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&(Vn(a)||DP(a))||o&&gt(a))return!0}return!1}var OP="4.5.1";const LP=["top","bottom","left","right","chartArea"];function op(n,t){return n==="top"||n==="bottom"||LP.indexOf(n)===-1&&t==="x"}function ap(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function cp(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),ut(e&&e.onComplete,[n],t)}function NP(n){const t=n.chart,e=t.options.animation;ut(e&&e.onProgress,[n],t)}function fy(n){return Bu()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const ko={},lp=n=>{const t=fy(n);return Object.values(ko).filter(e=>e.canvas===t).pop()};function VP(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function FP(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class Ot{static register(...t){ke.add(...t),up()}static unregister(...t){ke.remove(...t),up()}constructor(t,e){const s=this.config=new CP(e),i=fy(t),r=lp(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||nP(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),c=a&&a.canvas,u=c&&c.height,h=c&&c.width;if(this.id=UA(),this.ctx=a,this.canvas=c,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new bP,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=nS(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],ko[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}qe.listen(this,"complete",cp),qe.listen(this,"progress",NP),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return Y(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return ke}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Df(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Pf(this.canvas,this.ctx),this}stop(){return qe.stop(this),this}resize(t,e){qe.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Df(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ut(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};rt(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=yl(o,a),u=c==="r",h=c==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),rt(r,o=>{const a=o.options,c=a.id,u=yl(c,a),h=G(a.type,o.dtype);(a.position===void 0||op(a.position,u)!==op(o.dposition))&&(a.position=o.dposition),i[c]=!0;let d=null;if(c in s&&s[c].type===h)d=s[c];else{const p=ke.getScale(h);d=new p({id:c,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,t)}),rt(i,(o,a)=>{o||delete s[a]}),rt(s,o=>{Zt.configure(this,o,o.options),Zt.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(ap("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||_l(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=ke.getController(a),{datasetElementType:u,dataElementType:h}=mt.datasets[a];Object.assign(c,{dataElementType:ke.getElement(h),datasetElementType:u&&ke.getElement(u)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){rt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:d}=this.getDatasetMeta(u),p=!i&&r.indexOf(d)===-1;d.buildOrUpdateElements(p),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||rt(r,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(ap("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){rt(this.scales,t=>{Zt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!bf(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;VP(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!bf(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Zt.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],rt(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,Vn(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(qe.has(this)?this.attached&&!qe.running(this)&&qe.start(this):(this.draw(),cp({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=ey(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Da(e,i),t.controller.draw(),i&&Ma(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return nn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=LR.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=zn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);ar(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),qe.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Pf(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete ko[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};rt(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,u)=>{e.addEventListener(this,c,u),t[c]=u},i=(c,u)=>{t[c]&&(e.removeEventListener(this,c,u),delete t[c])},r=(c,u)=>{this.canvas&&this.resize(c,u)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){rt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},rt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Jo(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(c,u)=>c.filter(h=>!u.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),c=WA(t),u=FP(t,this._lastEvent,s,c);s&&(this._lastEvent=null,ut(r.onHover,[t,a,this],this),c&&ut(r.onClick,[t,a,this],this));const h=!Jo(a,i);return(h||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=u,h}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}U(Ot,"defaults",mt),U(Ot,"instances",ko),U(Ot,"overrides",hs),U(Ot,"registry",ke),U(Ot,"version",OP),U(Ot,"getChart",lp);function up(){return rt(Ot.instances,n=>n._plugins.invalidate())}function UP(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:u,borderJoinStyle:h}=c,d=Math.min(u/o,Qt(s-e));if(n.beginPath(),n.arc(i,r,o-u/2,s+d/2,e-d/2),a>0){const p=Math.min(u/a,Qt(s-e));n.arc(i,r,a+u/2,e-p/2,s+p/2,!0)}else{const p=Math.min(u/2,o*Qt(s-e));if(h==="round")n.arc(i,r,p,e-st/2,s+st/2,!0);else if(h==="bevel"){const m=2*p*p,_=-m*Math.cos(e+st/2)+i,b=-m*Math.sin(e+st/2)+r,w=m*Math.cos(s+st/2)+i,S=m*Math.sin(s+st/2)+r;n.lineTo(_,b),n.lineTo(w,S)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function BP(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:c}=t;let u=i/a;n.beginPath(),n.arc(r,o,a,s-u,e+u),c>i?(u=i/c,n.arc(r,o,c,e+u,s-u,!0)):n.arc(r,o,i,e+St,s-St),n.closePath(),n.clip()}function zP(n){return Nu(n,["outerStart","outerEnd","innerStart","innerEnd"])}function $P(n,t,e,s){const i=zP(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=c=>{const u=(e-Math.min(r,c))*s/2;return Lt(c,0,Math.min(r,u))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Lt(i.innerStart,0,o),innerEnd:Lt(i.innerEnd,0,o)}}function As(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function ia(n,t,e,s,i,r){const{x:o,y:a,startAngle:c,pixelMargin:u,innerRadius:h}=t,d=Math.max(t.outerRadius+s+e-u,0),p=h>0?h+s+e+u:0;let m=0;const _=i-c;if(s){const Z=h>0?h-s:0,lt=d>0?d-s:0,at=(Z+lt)/2,Nt=at!==0?_*at/(at+s):_;m=(_-Nt)/2}const b=Math.max(.001,_*d-e/st)/d,w=(_-b)/2,S=c+w+m,P=i-w-m,{outerStart:C,outerEnd:D,innerStart:O,innerEnd:N}=$P(t,p,d,P-S),x=d-C,v=d-D,E=S+C/x,I=P-D/v,A=p+O,R=p+N,T=S+O/A,_t=P-N/R;if(n.beginPath(),r){const Z=(E+I)/2;if(n.arc(o,a,d,E,Z),n.arc(o,a,d,Z,I),D>0){const Pt=As(v,I,o,a);n.arc(Pt.x,Pt.y,D,I,P+St)}const lt=As(R,P,o,a);if(n.lineTo(lt.x,lt.y),N>0){const Pt=As(R,_t,o,a);n.arc(Pt.x,Pt.y,N,P+St,_t+Math.PI)}const at=(P-N/p+(S+O/p))/2;if(n.arc(o,a,p,P-N/p,at,!0),n.arc(o,a,p,at,S+O/p,!0),O>0){const Pt=As(A,T,o,a);n.arc(Pt.x,Pt.y,O,T+Math.PI,S-St)}const Nt=As(x,S,o,a);if(n.lineTo(Nt.x,Nt.y),C>0){const Pt=As(x,E,o,a);n.arc(Pt.x,Pt.y,C,S-St,E)}}else{n.moveTo(o,a);const Z=Math.cos(E)*d+o,lt=Math.sin(E)*d+a;n.lineTo(Z,lt);const at=Math.cos(I)*d+o,Nt=Math.sin(I)*d+a;n.lineTo(at,Nt)}n.closePath()}function jP(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){ia(n,t,e,s,c,i);for(let u=0;u<r;++u)n.fill();isNaN(a)||(c=o+(a%ft||ft))}return ia(n,t,e,s,c,i),n.fill(),c}function HP(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:u,borderJoinStyle:h,borderDash:d,borderDashOffset:p,borderRadius:m}=c,_=c.borderAlign==="inner";if(!u)return;n.setLineDash(d||[]),n.lineDashOffset=p,_?(n.lineWidth=u*2,n.lineJoin=h||"round"):(n.lineWidth=u,n.lineJoin=h||"bevel");let b=t.endAngle;if(r){ia(n,t,e,s,b,i);for(let w=0;w<r;++w)n.stroke();isNaN(a)||(b=o+(a%ft||ft))}_&&BP(n,t,b),c.selfJoin&&b-o>=st&&m===0&&h!=="miter"&&UP(n,t,b),r||(ia(n,t,e,s,b,i),n.stroke())}class Mi extends Re{constructor(e){super();U(this,"circumference");U(this,"endAngle");U(this,"fullCircles");U(this,"innerRadius");U(this,"outerRadius");U(this,"pixelMargin");U(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=O_(r,{x:e,y:s}),{startAngle:c,endAngle:u,innerRadius:h,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,_=G(p,u-c),b=cr(o,c,u)&&c!==u,w=_>=ft||b,S=tn(a,h+m,d+m);return w&&S}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:u,spacing:h}=this.options,d=(r+o)/2,p=(a+c+h+u)/2;return{x:s+Math.cos(d)*p,y:i+Math.sin(d)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>ft?Math.floor(i/ft):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const u=1-Math.sin(Math.min(st,i||0)),h=r*u;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,jP(e,this,h,o,a),HP(e,this,h,o,a),e.restore()}}U(Mi,"id","arc"),U(Mi,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),U(Mi,"defaultRoutes",{backgroundColor:"backgroundColor"}),U(Mi,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function py(n,t,e=t){n.lineCap=G(e.borderCapStyle,t.borderCapStyle),n.setLineDash(G(e.borderDash,t.borderDash)),n.lineDashOffset=G(e.borderDashOffset,t.borderDashOffset),n.lineJoin=G(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=G(e.borderWidth,t.borderWidth),n.strokeStyle=G(e.borderColor,t.borderColor)}function WP(n,t,e){n.lineTo(e.x,e.y)}function qP(n){return n.stepped?pS:n.tension||n.cubicInterpolationMode==="monotone"?gS:WP}function gy(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,c=Math.max(i,o),u=Math.min(r,a),h=i<o&&r<o||i>a&&r>a;return{count:s,start:c,loop:t.loop,ilen:u<c&&!h?s+u-c:u-c}}function GP(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:c,ilen:u}=gy(i,e,s),h=qP(r);let{move:d=!0,reverse:p}=s||{},m,_,b;for(m=0;m<=u;++m)_=i[(a+(p?u-m:m))%o],!_.skip&&(d?(n.moveTo(_.x,_.y),d=!1):h(n,b,_,p,r.stepped),b=_);return c&&(_=i[(a+(p?u:0))%o],h(n,b,_,p,r.stepped)),!!c}function KP(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=gy(i,e,s),{move:c=!0,reverse:u}=s||{};let h=0,d=0,p,m,_,b,w,S;const P=D=>(o+(u?a-D:D))%r,C=()=>{b!==w&&(n.lineTo(h,w),n.lineTo(h,b),n.lineTo(h,S))};for(c&&(m=i[P(0)],n.moveTo(m.x,m.y)),p=0;p<=a;++p){if(m=i[P(p)],m.skip)continue;const D=m.x,O=m.y,N=D|0;N===_?(O<b?b=O:O>w&&(w=O),h=(d*h+D)/++d):(C(),n.lineTo(D,O),_=N,d=0,b=w=O),S=O}C()}function vl(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?KP:GP}function YP(n){return n.stepped?GS:n.tension||n.cubicInterpolationMode==="monotone"?KS:Jn}function XP(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),py(n,t.options),n.stroke(i)}function QP(n,t,e,s){const{segments:i,options:r}=t,o=vl(t);for(const a of i)py(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const JP=typeof Path2D=="function";function ZP(n,t,e,s){JP&&!t.options.segment?XP(n,t,e,s):QP(n,t,e,s)}class In extends Re{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;US(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=tR(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=ty(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],c=YP(s);let u,h;for(u=0,h=o.length;u<h;++u){const{start:d,end:p}=o[u],m=r[d],_=r[p];if(m===_){a.push(m);continue}const b=Math.abs((i-m[e])/(_[e]-m[e])),w=c(m,_,b,s.stepped);w[e]=t[e],a.push(w)}return a.length===1?a[0]:a}pathSegment(t,e,s){return vl(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=vl(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),ZP(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}U(In,"id","line"),U(In,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),U(In,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),U(In,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function hp(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class Co extends Re{constructor(e){super();U(this,"parsed");U(this,"skip");U(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return hp(this,e,"x",s)}inYRange(e,s){return hp(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!nn(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,gl(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}U(Co,"id","point"),U(Co,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),U(Co,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function my(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,u,h,d;return n.horizontal?(d=o/2,a=Math.min(e,i),c=Math.max(e,i),u=s-d,h=s+d):(d=r/2,a=e-d,c=e+d,u=Math.min(s,i),h=Math.max(s,i)),{left:a,top:u,right:c,bottom:h}}function An(n,t,e,s){return n?0:Lt(t,e,s)}function tk(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=j_(s);return{t:An(i.top,r.top,0,e),r:An(i.right,r.right,0,t),b:An(i.bottom,r.bottom,0,e),l:An(i.left,r.left,0,t)}}function ek(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=ss(i),o=Math.min(t,e),a=n.borderSkipped,c=s||Q(i);return{topLeft:An(!c||a.top||a.left,r.topLeft,0,o),topRight:An(!c||a.top||a.right,r.topRight,0,o),bottomLeft:An(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:An(!c||a.bottom||a.right,r.bottomRight,0,o)}}function nk(n){const t=my(n),e=t.right-t.left,s=t.bottom-t.top,i=tk(n,e/2,s/2),r=ek(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function Oc(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&my(n,s);return a&&(i||tn(t,a.left,a.right))&&(r||tn(e,a.top,a.bottom))}function sk(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function ik(n,t){n.rect(t.x,t.y,t.w,t.h)}function Lc(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class Do extends Re{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=nk(this),a=sk(o.radius)?lr:ik;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Lc(o,e,r)),t.clip(),a(t,Lc(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Lc(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return Oc(this,t,e,s)}inXRange(t,e){return Oc(this,t,null,e)}inYRange(t,e){return Oc(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}U(Do,"id","bar"),U(Do,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),U(Do,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var rk=Object.freeze({__proto__:null,ArcElement:Mi,BarElement:Do,LineElement:In,PointElement:Co});const bl=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],dp=bl.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function _y(n){return bl[n%bl.length]}function yy(n){return dp[n%dp.length]}function ok(n,t){return n.borderColor=_y(t),n.backgroundColor=yy(t),++t}function ak(n,t){return n.backgroundColor=n.data.map(()=>_y(t++)),t}function ck(n,t){return n.backgroundColor=n.data.map(()=>yy(t++)),t}function lk(n){let t=0;return(e,s)=>{const i=n.getDatasetMeta(s).controller;i instanceof ts?t=ak(e,t):i instanceof qi?t=ck(e,t):i&&(t=ok(e,t))}}function fp(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function uk(n){return n&&(n.borderColor||n.backgroundColor)}function hk(){return mt.borderColor!=="rgba(0,0,0,0.1)"||mt.backgroundColor!=="rgba(0,0,0,0.1)"}var dk={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=n.config,{elements:r}=i,o=fp(s)||uk(i)||r&&fp(r)||hk();if(!e.forceOverride&&o)return;const a=lk(n);s.forEach(a)}};function fk(n,t,e,s,i){const r=i.samples||s;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const u=t+e-1;let h=t,d,p,m,_,b;for(o[c++]=n[h],d=0;d<r-2;d++){let w=0,S=0,P;const C=Math.floor((d+1)*a)+1+t,D=Math.min(Math.floor((d+2)*a)+1,e)+t,O=D-C;for(P=C;P<D;P++)w+=n[P].x,S+=n[P].y;w/=O,S/=O;const N=Math.floor(d*a)+1+t,x=Math.min(Math.floor((d+1)*a)+1,e)+t,{x:v,y:E}=n[h];for(m=_=-1,P=N;P<x;P++)_=.5*Math.abs((v-w)*(n[P].y-E)-(v-n[P].x)*(S-E)),_>m&&(m=_,p=n[P],b=P);o[c++]=p,h=b}return o[c++]=n[u],o}function pk(n,t,e,s){let i=0,r=0,o,a,c,u,h,d,p,m,_,b;const w=[],S=t+e-1,P=n[t].x,D=n[S].x-P;for(o=t;o<t+e;++o){a=n[o],c=(a.x-P)/D*s,u=a.y;const O=c|0;if(O===h)u<_?(_=u,d=o):u>b&&(b=u,p=o),i=(r*i+a.x)/++r;else{const N=o-1;if(!Y(d)&&!Y(p)){const x=Math.min(d,p),v=Math.max(d,p);x!==m&&x!==N&&w.push({...n[x],x:i}),v!==m&&v!==N&&w.push({...n[v],x:i})}o>0&&N!==m&&w.push(n[N]),w.push(a),h=O,r=0,_=b=u,d=p=m=o}}return w}function vy(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function pp(n){n.data.datasets.forEach(t=>{vy(t)})}function gk(n,t){const e=t.length;let s=0,i;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:u}=r.getUserBounds();return c&&(s=Lt(en(t,r.axis,o).lo,0,e-1)),u?i=Lt(en(t,r.axis,a).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var mk={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){pp(n);return}const s=n.width;n.data.datasets.forEach((i,r)=>{const{_data:o,indexAxis:a}=i,c=n.getDatasetMeta(r),u=o||i.data;if(Ci([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const h=n.scales[c.xAxisID];if(h.type!=="linear"&&h.type!=="time"||n.options.parsing)return;let{start:d,count:p}=gk(c,u);const m=e.threshold||4*s;if(p<=m){vy(i);return}Y(o)&&(i._data=u,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(b){this._data=b}}));let _;switch(e.algorithm){case"lttb":_=fk(u,d,p,s,e);break;case"min-max":_=pk(u,d,p,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=_})},destroy(n){pp(n)}};function _k(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:c,end:u}=a;u=Na(c,u,i);const h=wl(e,i[c],i[u],a.loop);if(!t.segments){o.push({source:a,target:h,start:i[c],end:i[u]});continue}const d=ty(t,h);for(const p of d){const m=wl(e,r[p.start],r[p.end],p.loop),_=Z_(a,i,m);for(const b of _)o.push({source:b,target:p,start:{[e]:gp(h,m,"start",Math.max)},end:{[e]:gp(h,m,"end",Math.min)}})}}return o}function wl(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=Qt(i),r=Qt(r)),{property:n,start:i,end:r}}function yk(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Na(o,a,i);const c=i[o],u=i[a];s!==null?(r.push({x:c.x,y:s}),r.push({x:u.x,y:s})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:u.y}))}),r}function Na(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function gp(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function by(n,t){let e=[],s=!1;return gt(n)?(s=!0,e=n):e=yk(n,t),e.length?new In({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function mp(n){return n&&n.fill!==!1}function vk(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!Tt(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function bk(n,t,e){const s=Tk(n);if(Q(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return Tt(i)&&Math.floor(i)===i?wk(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function wk(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function Ek(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:Q(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function xk(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:Q(n)?s=n.value:s=t.getBaseValue(),s}function Tk(n){const t=n.options,e=t.fill;let s=G(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function Ik(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=Ak(t,e);a.push(by({x:null,y:t.bottom},s));for(let c=0;c<r.length;c++){const u=r[c];for(let h=u.start;h<=u.end;h++)Sk(i,o[h],a)}return new In({points:i,options:{}})}function Ak(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function Sk(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:c}=Rk(r,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function Rk(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let u=0;u<r.length;u++){const h=r[u],d=o[h.start][e],p=o[h.end][e];if(tn(i,d,p)){a=i===d,c=i===p;break}}return{first:a,last:c,point:s}}class wy{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:ft},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function Pk(n){const{chart:t,fill:e,line:s}=n;if(Tt(e))return kk(t,e);if(e==="stack")return Ik(n);if(e==="shape")return!0;const i=Ck(n);return i instanceof wy?i:by(i,s)}function kk(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function Ck(n){return(n.scale||{}).getPointPositionForValue?Mk(n):Dk(n)}function Dk(n){const{scale:t={},fill:e}=n,s=Ek(e,t);if(Tt(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function Mk(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=xk(e,t,r),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,r);return new wy({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<i;++c)a.push(t.getPointPositionForValue(c,o));return a}function Nc(n,t,e){const s=Pk(t),{chart:i,index:r,line:o,scale:a,axis:c}=t,u=o.options,h=u.fill,d=u.backgroundColor,{above:p=d,below:m=d}=h||{},_=i.getDatasetMeta(r),b=ey(i,_);s&&o.points.length&&(Da(n,e),Ok(n,{line:o,target:s,above:p,below:m,area:e,scale:a,axis:c,clip:b}),Ma(n))}function Ok(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:c}=t,u=e._loop?"angle":t.axis;n.save();let h=r;r!==i&&(u==="x"?(_p(n,s,o.top),Vc(n,{line:e,target:s,color:i,scale:a,property:u,clip:c}),n.restore(),n.save(),_p(n,s,o.bottom)):u==="y"&&(yp(n,s,o.left),Vc(n,{line:e,target:s,color:r,scale:a,property:u,clip:c}),n.restore(),n.save(),yp(n,s,o.right),h=i)),Vc(n,{line:e,target:s,color:h,scale:a,property:u,clip:c}),n.restore()}function _p(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:u}=a,h=i[c],d=i[Na(c,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(d.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function yp(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:u}=a,h=i[c],d=i[Na(c,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,d.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Vc(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,c=_k(e,s,i);for(const{source:u,target:h,start:d,end:p}of c){const{style:{backgroundColor:m=r}={}}=u,_=s!==!0;n.save(),n.fillStyle=m,Lk(n,o,a,_&&wl(i,d,p)),n.beginPath();const b=!!e.pathSegment(n,u);let w;if(_){b?n.closePath():vp(n,s,p,i);const S=!!s.pathSegment(n,h,{move:b,reverse:!0});w=b&&S,w||vp(n,s,d,i)}n.closePath(),n.fill(w?"evenodd":"nonzero"),n.restore()}}function Lk(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let c,u,h,d;r==="x"?(c=o,u=i.top,h=a,d=i.bottom):(c=i.left,u=o,h=i.right,d=a),n.beginPath(),e&&(c=Math.max(c,e.left),h=Math.min(h,e.right),u=Math.max(u,e.top),d=Math.min(d,e.bottom)),n.rect(c,u,h-c,d-u),n.clip()}}function vp(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var Nk={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,c;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof In&&(c={visible:n.isDatasetVisible(o),index:o,fill:bk(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,i.push(c);for(o=0;o<s;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=vk(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&Nc(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;mp(r)&&Nc(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!mp(s)||e.drawTime!=="beforeDatasetDraw"||Nc(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const bp=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},Vk=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class wp extends Re{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=ut(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=Dt(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=bp(s,r);let u,h;e.font=i.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,r,a,c)+10):(h=this.maxHeight,u=this._fitCols(o,i,a,c)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],u=this.lineWidths=[0],h=i+a;let d=t;r.textAlign="left",r.textBaseline="middle";let p=-1,m=-h;return this.legendItems.forEach((_,b)=>{const w=s+e/2+r.measureText(_.text).width;(b===0||u[u.length-1]+w+2*a>o)&&(d+=h,u[u.length-(b>0?0:1)]=0,m+=h,p++),c[b]={left:0,top:m,row:p,width:w,height:i},u[u.length-1]+=w+a}),d}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-t;let d=a,p=0,m=0,_=0,b=0;return this.legendItems.forEach((w,S)=>{const{itemWidth:P,itemHeight:C}=Fk(s,e,r,w,i);S>0&&m+C+2*a>h&&(d+=p+a,u.push({width:p,height:m}),_+=p+a,b++,p=m=0),c[S]={left:_,top:m,col:b,width:P,height:C},p=Math.max(p,P),m+=C+a}),d+=p,u.push({width:p,height:m}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=Fs(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=Kt(s,this.left+i,this.right-this.lineWidths[a]);for(const u of e)a!==u.row&&(a=u.row,c=Kt(s,this.left+i,this.right-this.lineWidths[a])),u.top+=this.top+t+i,u.left=o.leftForLtr(o.x(c),u.width),c+=u.width+i}else{let a=0,c=Kt(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const u of e)u.col!==a&&(a=u.col,c=Kt(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),u.top=c,u.left+=this.left+i,u.left=o.leftForLtr(o.x(u.left),u.width),c+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Da(t,this),this._draw(),Ma(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=mt.color,c=Fs(t.rtl,this.left,this.width),u=Dt(o.font),{padding:h}=o,d=u.size,p=d/2;let m;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:_,boxHeight:b,itemHeight:w}=bp(o,d),S=function(N,x,v){if(isNaN(_)||_<=0||isNaN(b)||b<0)return;i.save();const E=G(v.lineWidth,1);if(i.fillStyle=G(v.fillStyle,a),i.lineCap=G(v.lineCap,"butt"),i.lineDashOffset=G(v.lineDashOffset,0),i.lineJoin=G(v.lineJoin,"miter"),i.lineWidth=E,i.strokeStyle=G(v.strokeStyle,a),i.setLineDash(G(v.lineDash,[])),o.usePointStyle){const I={radius:b*Math.SQRT2/2,pointStyle:v.pointStyle,rotation:v.rotation,borderWidth:E},A=c.xPlus(N,_/2),R=x+p;$_(i,I,A,R,o.pointStyleWidth&&_)}else{const I=x+Math.max((d-b)/2,0),A=c.leftForLtr(N,_),R=ss(v.borderRadius);i.beginPath(),Object.values(R).some(T=>T!==0)?lr(i,{x:A,y:I,w:_,h:b,radius:R}):i.rect(A,I,_,b),i.fill(),E!==0&&i.stroke()}i.restore()},P=function(N,x,v){ds(i,v.text,N,x+w/2,u,{strikethrough:v.hidden,textAlign:c.textAlign(v.textAlign)})},C=this.isHorizontal(),D=this._computeTitleHeight();C?m={x:Kt(r,this.left+h,this.right-s[0]),y:this.top+h+D,line:0}:m={x:this.left+h,y:Kt(r,this.top+D+h,this.bottom-e[0].height),line:0},X_(this.ctx,t.textDirection);const O=w+h;this.legendItems.forEach((N,x)=>{i.strokeStyle=N.fontColor,i.fillStyle=N.fontColor;const v=i.measureText(N.text).width,E=c.textAlign(N.textAlign||(N.textAlign=o.textAlign)),I=_+p+v;let A=m.x,R=m.y;c.setWidth(this.width),C?x>0&&A+I+h>this.right&&(R=m.y+=O,m.line++,A=m.x=Kt(r,this.left+h,this.right-s[m.line])):x>0&&R+O>this.bottom&&(A=m.x=A+e[m.line].width+h,m.line++,R=m.y=Kt(r,this.top+D+h,this.bottom-e[m.line].height));const T=c.x(A);if(S(T,R,N),A=sS(E,A+_+p,C?A+I:this.right,t.rtl),P(c.x(A),R,N),C)m.x+=I+h;else if(typeof N.text!="string"){const _t=u.lineHeight;m.y+=Ey(N,_t)+h}else m.y+=O}),Q_(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=Dt(e.font),i=ee(e.padding);if(!e.display)return;const r=Fs(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,u=i.top+c;let h,d=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),h=this.top+u,d=Kt(t.align,d,this.right-p);else{const _=this.columnSizes.reduce((b,w)=>Math.max(b,w.height),0);h=u+Kt(t.align,this.top,this.bottom-_-t.labels.padding-this._computeTitleHeight())}const m=Kt(a,d,d+p);o.textAlign=r.textAlign(Ou(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,ds(o,e.text,m,h,s)}_computeTitleHeight(){const t=this.options.title,e=Dt(t.font),s=ee(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(tn(t,this.left,this.right)&&tn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],tn(t,i.left,i.left+i.width)&&tn(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!zk(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=Vk(i,s);i&&!r&&ut(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&ut(e.onHover,[t,s,this],this)}else s&&ut(e.onClick,[t,s,this],this)}}function Fk(n,t,e,s,i){const r=Uk(s,n,t,e),o=Bk(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function Uk(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function Bk(n,t,e){let s=n;return typeof t.text!="string"&&(s=Ey(t,e)),s}function Ey(n,t){const e=n.text?n.text.length:0;return t*e}function zk(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var $k={id:"legend",_element:wp,start(n,t,e){const s=n.legend=new wp({ctx:n.ctx,options:e,chart:n});Zt.configure(n,s,e),Zt.addBox(n,s)},stop(n){Zt.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;Zt.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const u=c.controller.getStyle(e?0:void 0),h=ee(u.borderWidth);return{text:t[c.index].label,fillStyle:u.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:s||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class ju extends Re{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=gt(s.text)?s.text.length:1;this._padding=ee(s.padding);const r=i*Dt(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:r,options:o}=this,a=o.align;let c=0,u,h,d;return this.isHorizontal()?(h=Kt(a,s,r),d=e+t,u=r-s):(o.position==="left"?(h=s+t,d=Kt(a,i,e),c=st*-.5):(h=r-t,d=Kt(a,e,i),c=st*.5),u=i-e),{titleX:h,titleY:d,maxWidth:u,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=Dt(e.font),r=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:u}=this._drawArgs(r);ds(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:u,textAlign:Ou(e.align),textBaseline:"middle",translation:[o,a]})}}function jk(n,t){const e=new ju({ctx:n.ctx,options:t,chart:n});Zt.configure(n,e,t),Zt.addBox(n,e),n.titleBlock=e}var Hk={id:"title",_element:ju,start(n,t,e){jk(n,e)},stop(n){const t=n.titleBlock;Zt.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;Zt.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ho=new WeakMap;var Wk={id:"subtitle",start(n,t,e){const s=new ju({ctx:n.ctx,options:e,chart:n});Zt.configure(n,s,e),Zt.addBox(n,s),ho.set(n,s)},stop(n){Zt.removeBox(n,ho.get(n)),ho.delete(n)},beforeUpdate(n,t,e){const s=ho.get(n);Zt.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Oi={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),i+=c.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const u=c.getCenterPoint(),h=fl(t,u);h<i&&(i=h,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function Pe(n,t){return t&&(gt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function Ge(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function qk(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Ep(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=Dt(t.bodyFont),u=Dt(t.titleFont),h=Dt(t.footerFont),d=r.length,p=i.length,m=s.length,_=ee(t.padding);let b=_.height,w=0,S=s.reduce((D,O)=>D+O.before.length+O.lines.length+O.after.length,0);if(S+=n.beforeBody.length+n.afterBody.length,d&&(b+=d*u.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),S){const D=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;b+=m*D+(S-m)*c.lineHeight+(S-1)*t.bodySpacing}p&&(b+=t.footerMarginTop+p*h.lineHeight+(p-1)*t.footerSpacing);let P=0;const C=function(D){w=Math.max(w,e.measureText(D).width+P)};return e.save(),e.font=u.string,rt(n.title,C),e.font=c.string,rt(n.beforeBody.concat(n.afterBody),C),P=t.displayColors?o+2+t.boxPadding:0,rt(s,D=>{rt(D.before,C),rt(D.lines,C),rt(D.after,C)}),P=0,e.font=h.string,rt(n.footer,C),e.restore(),w+=_.width,{width:w,height:b}}function Gk(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function Kk(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function Yk(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let u="center";return s==="center"?u=i<=(a+c)/2?"left":"right":i<=r/2?u="left":i>=o-r/2&&(u="right"),Kk(u,n,t,e)&&(u="center"),u}function xp(n,t,e){const s=e.yAlign||t.yAlign||Gk(n,e);return{xAlign:e.xAlign||t.xAlign||Yk(n,t,e,s),yAlign:s}}function Xk(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function Qk(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Tp(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,u=i+r,{topLeft:h,topRight:d,bottomLeft:p,bottomRight:m}=ss(o);let _=Xk(t,a);const b=Qk(t,c,u);return c==="center"?a==="left"?_+=u:a==="right"&&(_-=u):a==="left"?_-=Math.max(h,p)+i:a==="right"&&(_+=Math.max(d,m)+i),{x:Lt(_,0,s.width-t.width),y:Lt(b,0,s.height-t.height)}}function fo(n,t,e){const s=ee(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Ip(n){return Pe([],Ge(n))}function Jk(n,t,e){return zn(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Ap(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const xy={beforeTitle:We,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:We,beforeBody:We,beforeLabel:We,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return Y(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:We,afterBody:We,beforeFooter:We,footer:We,afterFooter:We};function ae(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?xy[t].call(e,s):i}class El extends Re{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new ny(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=Jk(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=ae(s,"beforeTitle",this,t),r=ae(s,"title",this,t),o=ae(s,"afterTitle",this,t);let a=[];return a=Pe(a,Ge(i)),a=Pe(a,Ge(r)),a=Pe(a,Ge(o)),a}getBeforeBody(t,e){return Ip(ae(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return rt(t,r=>{const o={before:[],lines:[],after:[]},a=Ap(s,r);Pe(o.before,Ge(ae(a,"beforeLabel",this,r))),Pe(o.lines,ae(a,"label",this,r)),Pe(o.after,Ge(ae(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return Ip(ae(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=ae(s,"beforeFooter",this,t),r=ae(s,"footer",this,t),o=ae(s,"afterFooter",this,t);let a=[];return a=Pe(a,Ge(i)),a=Pe(a,Ge(r)),a=Pe(a,Ge(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],c,u;for(c=0,u=e.length;c<u;++c)a.push(qk(this.chart,e[c]));return t.filter&&(a=a.filter((h,d,p)=>t.filter(h,d,p,s))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,s))),rt(a,h=>{const d=Ap(t.callbacks,h);i.push(ae(d,"labelColor",this,h)),r.push(ae(d,"labelPointStyle",this,h)),o.push(ae(d,"labelTextColor",this,h))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=Oi[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Ep(this,s),u=Object.assign({},a,c),h=xp(this.chart,s,u),d=Tp(s,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:u,bottomLeft:h,bottomRight:d}=ss(a),{x:p,y:m}=t,{width:_,height:b}=e;let w,S,P,C,D,O;return r==="center"?(D=m+b/2,i==="left"?(w=p,S=w-o,C=D+o,O=D-o):(w=p+_,S=w+o,C=D-o,O=D+o),P=w):(i==="left"?S=p+Math.max(c,h)+o:i==="right"?S=p+_-Math.max(u,d)-o:S=this.caretX,r==="top"?(C=m,D=C-o,w=S-o,P=S+o):(C=m+b,D=C+o,w=S+o,P=S-o),O=C),{x1:w,x2:S,x3:P,y1:C,y2:D,y3:O}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,c;if(r){const u=Fs(s.rtl,this.x,this.width);for(t.x=fo(this,s.titleAlign,s),e.textAlign=u.textAlign(s.titleAlign),e.textBaseline="middle",o=Dt(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(i[c],u.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:u}=r,h=Dt(r.bodyFont),d=fo(this,"left",r),p=i.x(d),m=c<h.lineHeight?(h.lineHeight-c)/2:0,_=e.y+m;if(r.usePointStyle){const b={radius:Math.min(u,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},w=i.leftForLtr(p,u)+u/2,S=_+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,gl(t,b,w,S),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,gl(t,b,w,S)}else{t.lineWidth=Q(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const b=i.leftForLtr(p,u),w=i.leftForLtr(i.xPlus(p,1),u-2),S=ss(o.borderRadius);Object.values(S).some(P=>P!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,lr(t,{x:b,y:_,w:u,h:c,radius:S}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),lr(t,{x:w,y:_+1,w:u-2,h:c-2,radius:S}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(b,_,u,c),t.strokeRect(b,_,u,c),t.fillStyle=o.backgroundColor,t.fillRect(w,_+1,u-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:u,boxPadding:h}=s,d=Dt(s.bodyFont);let p=d.lineHeight,m=0;const _=Fs(s.rtl,this.x,this.width),b=function(v){e.fillText(v,_.x(t.x+m),t.y+p/2),t.y+=p+r},w=_.textAlign(o);let S,P,C,D,O,N,x;for(e.textAlign=o,e.textBaseline="middle",e.font=d.string,t.x=fo(this,w,s),e.fillStyle=s.bodyColor,rt(this.beforeBody,b),m=a&&w!=="right"?o==="center"?u/2+h:u+2+h:0,D=0,N=i.length;D<N;++D){for(S=i[D],P=this.labelTextColors[D],e.fillStyle=P,rt(S.before,b),C=S.lines,a&&C.length&&(this._drawColorBox(e,t,D,_,s),p=Math.max(d.lineHeight,c)),O=0,x=C.length;O<x;++O)b(C[O]),p=d.lineHeight;rt(S.after,b)}m=0,p=d.lineHeight,rt(this.afterBody,b),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const c=Fs(s.rtl,this.x,this.width);for(t.x=fo(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=Dt(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:u,height:h}=s,{topLeft:d,topRight:p,bottomLeft:m,bottomRight:_}=ss(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+d,c),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+u-p,c),e.quadraticCurveTo(a+u,c,a+u,c+p),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+u,c+h-_),e.quadraticCurveTo(a+u,c+h,a+u-_,c+h),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+m,c+h),e.quadraticCurveTo(a,c+h,a,c+h-m),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,c+d),e.quadraticCurveTo(a,c,a+d,c),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=Oi[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Ep(this,t),c=Object.assign({},o,this._size),u=xp(e,t,c),h=Tp(t,c,u,e);(i._to!==h.x||r._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=ee(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),X_(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),Q_(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:c})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[c],index:c}}),r=!Jo(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),c=e||!Jo(o,r)||a;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=Oi[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}U(El,"positioners",Oi);var Zk={id:"tooltip",_element:El,positioners:Oi,afterInit(n,t,e){e&&(n.tooltip=new El({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:xy},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},tC=Object.freeze({__proto__:null,Colors:dk,Decimation:mk,Filler:Nk,Legend:$k,SubTitle:Wk,Title:Hk,Tooltip:Zk});const eC=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function nC(n,t,e,s){const i=n.indexOf(t);if(i===-1)return eC(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const sC=(n,t)=>n===null?null:Lt(Math.round(n),0,t);function Sp(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class xl extends ys{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Y(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:nC(s,t,G(e,t),this._addedLabels),sC(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return Sp.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}U(xl,"id","category"),U(xl,"defaults",{ticks:{callback:Sp}});function iC(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:c,count:u,maxTicks:h,maxDigits:d,includeBounds:p}=n,m=r||1,_=h-1,{min:b,max:w}=t,S=!Y(o),P=!Y(a),C=!Y(u),D=(w-b)/(d+1);let O=Ef((w-b)/_/m)*m,N,x,v,E;if(O<1e-14&&!S&&!P)return[{value:b},{value:w}];E=Math.ceil(w/O)-Math.floor(b/O),E>_&&(O=Ef(E*O/_/m)*m),Y(c)||(N=Math.pow(10,c),O=Math.ceil(O*N)/N),i==="ticks"?(x=Math.floor(b/O)*O,v=Math.ceil(w/O)*O):(x=b,v=w),S&&P&&r&&XA((a-o)/r,O/1e3)?(E=Math.round(Math.min((a-o)/O,h)),O=(a-o)/E,x=o,v=a):C?(x=S?o:x,v=P?a:v,E=u-1,O=(v-x)/E):(E=(v-x)/O,ji(E,Math.round(E),O/1e3)?E=Math.round(E):E=Math.ceil(E));const I=Math.max(xf(O),xf(x));N=Math.pow(10,Y(c)?I:c),x=Math.round(x*N)/N,v=Math.round(v*N)/N;let A=0;for(S&&(p&&x!==o?(e.push({value:o}),x<o&&A++,ji(Math.round((x+A*O)*N)/N,o,Rp(o,D,n))&&A++):x<o&&A++);A<E;++A){const R=Math.round((x+A*O)*N)/N;if(P&&R>a)break;e.push({value:R})}return P&&p&&v!==a?e.length&&ji(e[e.length-1].value,a,Rp(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!P||v===a)&&e.push({value:v}),e}function Rp(n,t,{horizontal:e,minRotation:s}){const i=xe(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class ra extends ys{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Y(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=c=>i=e?i:c,a=c=>r=s?r:c;if(t){const c=Ve(i),u=Ve(r);c<0&&u<0?a(0):c>0&&u>0&&o(0)}if(i===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(i-c)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=iC(i,r);return t.bounds==="ticks"&&M_(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Rr(t,this.chart.options.locale,this.options.ticks.format)}}class Tl extends ra{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Tt(t)?t:0,this.max=Tt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=xe(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}U(Tl,"id","linear"),U(Tl,"defaults",{ticks:{callback:Ca.formatters.numeric}});const hr=n=>Math.floor(xn(n)),Yn=(n,t)=>Math.pow(10,hr(n)+t);function Pp(n){return n/Math.pow(10,hr(n))===1}function kp(n,t,e){const s=Math.pow(10,e),i=Math.floor(n/s);return Math.ceil(t/s)-i}function rC(n,t){const e=t-n;let s=hr(e);for(;kp(n,t,s)>10;)s++;for(;kp(n,t,s)<10;)s--;return Math.min(s,hr(n))}function oC(n,{min:t,max:e}){t=pe(n.min,t);const s=[],i=hr(t);let r=rC(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=i>r?Math.pow(10,i):0,u=Math.round((t-c)*o)/o,h=Math.floor((t-c)/a/10)*a*10;let d=Math.floor((u-h)/Math.pow(10,r)),p=pe(n.min,Math.round((c+h+d*Math.pow(10,r))*o)/o);for(;p<e;)s.push({value:p,major:Pp(p),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(r++,d=2,o=r>=0?1:o),p=Math.round((c+h+d*Math.pow(10,r))*o)/o;const m=pe(n.max,p);return s.push({value:m,major:Pp(m),significand:d}),s}class Il extends ys{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=ra.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return Tt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Tt(t)?Math.max(0,t):null,this.max=Tt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Tt(this._userMin)&&(this.min=t===Yn(this.min,0)?Yn(this.min,-1):Yn(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const r=a=>s=t?s:a,o=a=>i=e?i:a;s===i&&(s<=0?(r(1),o(10)):(r(Yn(s,-1)),o(Yn(i,1)))),s<=0&&r(Yn(i,-1)),i<=0&&o(Yn(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=oC(e,this);return t.bounds==="ticks"&&M_(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Rr(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=xn(t),this._valueRange=xn(this.max)-xn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(xn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}U(Il,"id","logarithmic"),U(Il,"defaults",{ticks:{callback:Ca.formatters.logarithmic,major:{enabled:!0}}});function Al(n){const t=n.ticks;if(t.display&&n.display){const e=ee(t.backdropPadding);return G(t.font&&t.font.size,mt.font.size)+e.height}return 0}function aC(n,t,e){return e=gt(e)?e:[e],{w:fS(n,t.string,e),h:e.length*t.lineHeight}}function Cp(n,t,e,s,i){return n===s||n===i?{start:t-e/2,end:t+e/2}:n<s||n>i?{start:t-e,end:t}:{start:t,end:t+e}}function cC(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],i=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?st/r:0;for(let c=0;c<r;c++){const u=o.setContext(n.getPointLabelContext(c));i[c]=u.padding;const h=n.getPointPosition(c,n.drawingArea+i[c],a),d=Dt(u.font),p=aC(n.ctx,d,n._pointLabels[c]);s[c]=p;const m=Qt(n.getIndexAngle(c)+a),_=Math.round(Du(m)),b=Cp(_,h.x,p.w,0,180),w=Cp(_,h.y,p.h,90,270);lC(e,t,m,b,w)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=dC(n,s,i)}function lC(n,t,e,s,i){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/r,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),i.start<t.t?(c=(t.t-i.start)/o,n.t=Math.min(n.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function uC(n,t,e){const s=n.drawingArea,{extra:i,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,s+i+o,r),u=Math.round(Du(Qt(c.angle+St))),h=gC(c.y,a.h,u),d=fC(u),p=pC(c.x,a.w,d);return{visible:!0,x:c.x,y:h,textAlign:d,left:p,top:h,right:p+a.w,bottom:h+a.h}}function hC(n,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:r}=n;return!(nn({x:e,y:s},t)||nn({x:e,y:r},t)||nn({x:i,y:s},t)||nn({x:i,y:r},t))}function dC(n,t,e){const s=[],i=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Al(r)/2,additionalAngle:o?st/i:0};let u;for(let h=0;h<i;h++){c.padding=e[h],c.size=t[h];const d=uC(n,h,c);s.push(d),a==="auto"&&(d.visible=hC(d,u),d.visible&&(u=d))}return s}function fC(n){return n===0||n===180?"center":n<180?"left":"right"}function pC(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function gC(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function mC(n,t,e){const{left:s,top:i,right:r,bottom:o}=e,{backdropColor:a}=t;if(!Y(a)){const c=ss(t.borderRadius),u=ee(t.backdropPadding);n.fillStyle=a;const h=s-u.left,d=i-u.top,p=r-s+u.width,m=o-i+u.height;Object.values(c).some(_=>_!==0)?(n.beginPath(),lr(n,{x:h,y:d,w:p,h:m,radius:c}),n.fill()):n.fillRect(h,d,p,m)}}function _C(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let i=t-1;i>=0;i--){const r=n._pointLabelItems[i];if(!r.visible)continue;const o=s.setContext(n.getPointLabelContext(i));mC(e,o,r);const a=Dt(o.font),{x:c,y:u,textAlign:h}=r;ds(e,n._pointLabels[i],c,u+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function Ty(n,t,e,s){const{ctx:i}=n;if(e)i.arc(n.xCenter,n.yCenter,t,0,ft);else{let r=n.getPointPosition(0,t);i.moveTo(r.x,r.y);for(let o=1;o<s;o++)r=n.getPointPosition(o,t),i.lineTo(r.x,r.y)}}function yC(n,t,e,s,i){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(i.dash||[]),r.lineDashOffset=i.dashOffset,r.beginPath(),Ty(n,e,o,s),r.closePath(),r.stroke(),r.restore())}function vC(n,t,e){return zn(n,{label:e,index:t,type:"pointLabel"})}class Li extends ra{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ee(Al(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Tt(t)&&!isNaN(t)?t:0,this.max=Tt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Al(this.options))}generateTickLabels(t){ra.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=ut(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?cC(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=ft/(this._pointLabels.length||1),s=this.options.startAngle||0;return Qt(t*e+xe(s))}getDistanceFromCenterForValue(t){if(Y(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Y(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return vC(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-St+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Ty(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:r}=e,o=this._pointLabels.length;let a,c,u;if(e.pointLabels.display&&_C(this,o),i.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){c=this.getDistanceFromCenterForValue(h.value);const p=this.getContext(d),m=i.setContext(p),_=r.setContext(p);yC(this,m,c,o,_)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const h=s.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:p}=h;!p||!d||(t.lineWidth=p,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),u=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(u.x,u.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const u=s.setContext(this.getContext(c)),h=Dt(u.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),u.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=u.backdropColor;const d=ee(u.backdropPadding);t.fillRect(-o/2-d.left,-r-h.size/2-d.top,o+d.width,h.size+d.height)}ds(t,a.label,0,-r,h,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),t.restore()}drawTitle(){}}U(Li,"id","radialLinear"),U(Li,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ca.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),U(Li,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),U(Li,"descriptors",{angleLines:{_fallback:"grid"}});const Va={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},he=Object.keys(Va);function Dp(n,t){return n-t}function Mp(n,t){if(Y(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),Tt(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(Gs(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function Op(n,t,e,s){const i=he.length;for(let r=he.indexOf(n);r<i-1;++r){const o=Va[he[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return he[r]}return he[i-1]}function bC(n,t,e,s,i){for(let r=he.length-1;r>=he.indexOf(e);r--){const o=he[r];if(Va[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return he[e?he.indexOf(e):0]}function wC(n){for(let t=he.indexOf(n)+1,e=he.length;t<e;++t)if(Va[he[t]].common)return he[t]}function Lp(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=Mu(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function EC(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+i.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function Np(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:EC(n,s,i,e)}class dr extends ys{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new kR._date(t.adapters.date);i.init(e),$i(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Mp(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(u){!o&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!a&&!isNaN(u.max)&&(r=Math.max(r,u.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=Tt(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=Tt(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=tS(i,r,o);return this._unit=e.unit||(s.autoSkip?Op(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):bC(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:wC(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Np(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Lt(e,0,o),s=Lt(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||Op(r.minUnit,e,s,this._getLabelCapacity(e)),a=G(i.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,u=Gs(c)||c===!0,h={};let d=e,p,m;if(u&&(d=+t.startOf(d,"isoWeek",c)),d=+t.startOf(d,u?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const _=i.ticks.source==="data"&&this.getDataTimestamps();for(p=d,m=0;p<s;p=+t.add(p,a,o),m++)Lp(h,p,_);return(p===s||i.bounds==="ticks"||m===1)&&Lp(h,p,_),Object.keys(h).sort(Dp).map(b=>+b)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return ut(o,[t,e,s],this);const a=r.time.displayFormats,c=this._unit,u=this._majorUnit,h=c&&a[c],d=u&&a[u],p=s[e],m=u&&d&&p&&p.major;return this._adapter.format(t,i||(m?d:h))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=xe(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,Np(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(Mp(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return N_(t.sort(Dp))}}U(dr,"id","time"),U(dr,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function po(n,t,e){let s=0,i=n.length-1,r,o,a,c;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=en(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:c}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=en(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:c}=n[i]);const u=o-r;return u?a+(c-a)*(t-r)/u:a}class Sl extends dr{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=po(e,this.min),this._tableRange=po(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,c,u,h;for(o=0,a=t.length;o<a;++o)u=t[o],u>=e&&u<=s&&i.push(u);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)h=i[o+1],c=i[o-1],u=i[o],Math.round((h+c)/2)!==u&&r.push({time:u,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(po(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return po(this._table,s*this._tableRange+this._minPos,!0)}}U(Sl,"id","timeseries"),U(Sl,"defaults",dr.defaults);var xC=Object.freeze({__proto__:null,CategoryScale:xl,LinearScale:Tl,LogarithmicScale:Il,RadialLinearScale:Li,TimeScale:dr,TimeSeriesScale:Sl});const TC=[PR,rk,tC,xC];Ot.register(...TC);const Vp="rgba(255,255,255,0.08)",Fp="#a1a1aa",Gi={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};Ot.defaults.color="#e5e5e5";Ot.defaults.font.family=Gi.family;Ot.defaults.font.weight=Gi.weight;const Up={renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new Ot(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Vp},ticks:{color:Fp,font:Gi}},y:{grid:{color:Vp},ticks:{color:Fp,font:Gi}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new Ot(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Gi,padding:12,usePointStyle:!0}}}}})}},ye={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>'},it={render:n=>{const t=document.getElementById("app"),e=xt.state.currentUser;if(!e){t.innerHTML=n;return}const s=xt.state.sidebarCollapsed,i=xt.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${it.createNavItem("/","Dashboard",ye.dashboard,s)}
                        ${it.createNavItem("/compras","Compras",ye.shoppingCart,s)}
                        ${it.createNavItem("/relatorios","Relatórios",ye.clipboard,s)}
                        ${it.createNavItem("/obras","Obras",ye.chart,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${it.createNavItem("/configuracoes","Configurações",ye.settings,s)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display">
                            ${ye.logout}
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
                                ${ye.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${ye.search}
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
                            <button id="btn-theme-toggle" class="text-text-muted hover:text-primary transition-colors">
                                ${i==="dark"?ye.sun:ye.moon}
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
        `,it.bindEvents()},createNavItem:(n,t,e,s)=>{const r=Yt.currentRoute===n?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${r}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{xt.toggleSidebar();const s=document.getElementById("sidebar"),i=s.querySelectorAll("span"),r=s.querySelector("[data-logo-text]");xt.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),i.forEach(o=>o.classList.add("hidden")),r&&r.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),i.forEach(o=>o.classList.remove("hidden")),r&&r.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const i=xt.state.currentTheme==="dark"?"light":"dark";xt.setTheme(i);const r=document.getElementById("btn-theme-toggle");r.innerHTML=i==="dark"?ye.sun:ye.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await Qo.logout(),Yt.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var i;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(i=document.getElementById("global-search"))==null||i.focus())})}},IC={init:async()=>{const n=xt.state.currentUser;if(n){it.render(z.createLoader());try{let t="";if(n.role==="comprador"){const e=await Ec.getCompradorStats();t=xc.renderComprador(e),it.render(t)}else if(n.role==="obra"||n.role==="engenheiro"){const e=n.obraPadrao||null,s=await Ec.getObraStats(e);t=xc.renderObra(s),it.render(t)}else{const e=await Ec.getDiretorStats();t=xc.renderDiretor(e),it.render(t),setTimeout(()=>{Up.renderGastosPorMes("chart-gastos",e.gastosPorMes),Up.renderStatusPie("chart-status",e.porStatus)},100)}}catch(t){console.error(t),it.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${t.message}</div>`)}}}},Fc={checkDuplicidade:async(n,t)=>{const e=Ee(de(yt,"compras"),ce("obraId","==",n),ce("status_compra","in",["Pendente","Em Cotação"]));return(await Ut(e)).docs.filter(r=>{const o=r.data(),a=(o.descricao||"").toLowerCase(),c=o.itens||[],u=t.toLowerCase();return a.includes(u)||c.some(h=>h.nome.toLowerCase().includes(u))}).length>0},uploadArquivo:(n,t,e)=>new Promise((s,i)=>{const r=Xx(S_,t),o=Kx(r,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>i(a),async()=>{const a=await Yx(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t={...n,data_solicitacao:Rt.now().toDate().toISOString(),status_compra:"Pendente",created_at:Rt.now()};return(await Sm(de(yt,"compras"),t)).id},atualizarCompra:async(n,t)=>{const e=ln(yt,"compras",n);await Ta(e,t)}},AC={renderForm:(n=[],t=[])=>`
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
                        
                        ${z.createInput({id:"descricao",label:"Descrição Resumida (ex: 50 sacos de cimento)",required:!0,className:"mb-4"})}

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Fornecedor Sugerido</label>
                                <select name="fornecedorId" class="input">
                                    <option value="">Sem preferência</option>
                                    ${t.map(e=>`<option value="${e.id}">${e.nome}</option>`).join("")}
                                </select>
                            </div>
                            ${z.createInput({id:"valor_estimado",type:"number",label:"Valor Estimado (R$)",placeholder:"0,00"})}
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
                        ${z.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.history.back()"})}
                        ${z.createButton({id:"btn-submit",text:"Registrar Solicitação",type:"submit"})}
                    </div>
                </form>
            </div>
        `},Iy={init:async()=>{it.render(z.createLoader());try{const[n,t]=await Promise.all([Ut(de(yt,"obras")),Ut(de(yt,"fornecedores"))]),e=n.docs.map(i=>({id:i.id,...i.data()})),s=t.docs.map(i=>({id:i.id,...i.data()}));it.render(AC.renderForm(e,s)),Iy.bindEvents()}catch(n){console.error(n),it.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},bindEvents:()=>{const n=document.getElementById("form-compra"),t=document.getElementById("file-upload"),e=document.getElementById("drop-zone"),s=document.getElementById("descricao"),i=document.getElementById("obraId");let r=[];e.addEventListener("click",()=>t.click()),t.addEventListener("change",c=>o(c.target.files));const o=c=>{r=[...r,...Array.from(c)],a()},a=()=>{const c=document.getElementById("file-list");c.innerHTML=r.map((u,h)=>`
                <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <span class="text-sm truncate">${u.name}</span>
                    <button type="button" class="text-red-500 hover:text-red-700" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${h}}))">
                        ${z.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join("")};n.addEventListener("remove-file",c=>{r.splice(c.detail,1),a()}),s.addEventListener("blur",async()=>{const c=i.value,u=s.value;c&&u.length>3&&await Fc.checkDuplicidade(c,u)&&z.createToast("⚠️ Atenção: Já existe um pedido similar para esta obra!","warning")}),document.getElementById("valor_estimado").addEventListener("input",c=>{const u=parseFloat(c.target.value),h=document.getElementById("justificativa-container"),d=document.getElementById("justificativa");u>5e3?(h.classList.remove("hidden"),d.required=!0):(h.classList.add("hidden"),d.required=!1)}),n.addEventListener("submit",async c=>{c.preventDefault();const u=document.getElementById("btn-submit");try{u.disabled=!0,u.innerHTML=z.createLoader();const h=[];for(const _ of r){const b=await Fc.uploadArquivo(_,`compras/${Date.now()}_${_.name}`);h.push({nome:_.name,url:b})}const d=new FormData(n),m={...Object.fromEntries(d.entries()),anexos:h,solicitanteId:xt.state.currentUser.uid,solicitanteNome:xt.state.currentUser.nome};await Fc.salvarCompra(m),z.createToast("Solicitação registrada com sucesso!"),Yt.navigate("/")}catch(h){console.error(h),z.createToast("Erro ao registrar: "+h.message,"error"),u.disabled=!1,u.innerHTML="<span>Registrar Solicitação</span>"}})}},Bp={getCompras:async(n={})=>{let t=de(yt,"compras");const e=[];n.obraId&&e.push(ce("obraId","==",n.obraId)),n.status&&e.push(ce("status_compra","==",n.status));const s=Ee(t,...e);let r=(await Ut(s)).docs.map(o=>({id:o.id,...o.data()}));if(n.search){const o=n.search.toLowerCase();r=r.filter(a=>(a.descricao||"").toLowerCase().includes(o)||(a.fornecedorNome||"").toLowerCase().includes(o)||(a.obraNome||"").toLowerCase().includes(o))}return r},updateStatus:async(n,t)=>{const e=ln(yt,"compras",n);await Ta(e,{status_compra:t})}},Uc={renderControls:(n="table")=>`
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
            <div class="card mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                ${z.createInput({id:"filter-search",placeholder:"Buscar...",className:""})}
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
                ${z.createButton({id:"btn-filter",text:"Filtrar",className:"w-full"})}
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Ye.formatDate(t.data_solicitacao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${t.descricao}">${t.descricao}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Ye.formatCurrency(t.valor_estimado||0)}</td>
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
                                            <span class="text-xs text-text-muted">${Ye.formatDate(i.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${i.descricao}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${Ye.formatCurrency(i.valor_estimado||0)}</span>
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
        `},Ft={currentView:"table",filters:{},init:async()=>{await Ft.render()},render:async()=>{it.render(z.createLoader());try{const n=await Bp.getCompras(Ft.filters),t=document.createElement("div");t.innerHTML=Uc.renderControls(Ft.currentView);const e=document.createElement("div");e.id="reports-content",e.innerHTML=Ft.currentView==="table"?Uc.renderTable(n):Uc.renderKanban(n),t.appendChild(e),it.render(t.innerHTML),Ft.bindEvents()}catch(n){console.error(n),it.render(`<div class="text-red-500">Erro ao carregar relatórios: ${n.message}</div>`)}},bindEvents:()=>{var n,t,e;(n=document.getElementById("view-table"))==null||n.addEventListener("click",()=>{Ft.currentView="table",Ft.render()}),(t=document.getElementById("view-kanban"))==null||t.addEventListener("click",()=>{Ft.currentView="kanban",Ft.render()}),(e=document.getElementById("btn-filter"))==null||e.addEventListener("click",()=>{Ft.filters={search:document.getElementById("filter-search").value,status:document.getElementById("filter-status").value,obraId:document.getElementById("filter-obra").value},Ft.render()}),document.addEventListener("kanban-move-next",async s=>{const{id:i,current:r}=s.detail,o=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],a=o.indexOf(r)+1;if(a<o.length){const c=o[a];try{await Bp.updateStatus(i,c),z.createToast(`Movido para ${c}`),Ft.render()}catch(u){z.createToast("Erro ao mover: "+u.message,"error")}}}),Ft.filters.search&&(document.getElementById("filter-search").value=Ft.filters.search),Ft.filters.status&&(document.getElementById("filter-status").value=Ft.filters.status)}},zp={getUsers:async()=>(await Ut(de(yt,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await Ta(ln(yt,"usuarios",n),t)},createUserProfile:async(n,t)=>{await VE(ln(yt,"usuarios",n),t)}},SC={render:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Configurações</h2>
                
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-display text-text">Usuários do Sistema</h3>
                        ${z.createButton({text:"Novo Usuário",onClick:"alert('Funcionalidade requer Admin SDK ou Cloud Functions')"})}
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
        `},Rl={init:async()=>{const n=xt.state.currentUser;if(n.role!=="administrador"&&n.role!=="diretor"){it.render('<div class="p-6 text-red-500">Acesso negado. Apenas administradores.</div>');return}it.render(z.createLoader());try{const t=await zp.getUsers();it.render(SC.render(t)),Rl.bindEvents()}catch(t){it.render(`<div class="text-red-500">Erro: ${t.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&zp.updateUser(t,{role:e}).then(()=>{z.createToast("Usuário atualizado!"),Rl.init()}).catch(s=>z.createToast("Erro: "+s.message,"error"))})}},Ss={getObras:async()=>(await Ut(de(yt,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await Ut(de(yt,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await Sm(de(yt,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await Ta(ln(yt,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await FE(ln(yt,"obras",n))},getObraStats:async n=>{const t=de(yt,"compras"),e=Ee(t,ce("obraId","==",n)),i=(await Ut(e)).docs.map(c=>({id:c.id,...c.data()}));let r=0;const o={},a={};return i.forEach(c=>{const u=Number(c.valor_estimado||c.valor_total||0);r+=u,o[c.status_compra]=(o[c.status_compra]||0)+1;const h=c.categoria||"Outros";a[h]=(a[h]||0)+u}),{totalCompras:i.length,totalGasto:r,porStatus:o,gastosPorCategoria:a,comprasRecentes:i.slice(0,10)}}},Bc={renderList:n=>`
            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-display text-text tracking-wide">Gestão de Obras</h2>
                    ${z.createButton({id:"btn-nova-obra",text:"Nova Obra",onClick:"window.location.hash = '/obras/nova'"})}
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
                                ${t.orcamento?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${Ye.formatCurrency(t.orcamento)}</p>`:""}
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
                            ${z.createInput({id:"nome_obra",label:"Nome da Obra *",value:(n==null?void 0:n.nome_obra)||"",required:!0})}
                            ${z.createInput({id:"apelido_obra",label:"Apelido/Nome Curto",value:(n==null?void 0:n.apelido_obra)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${z.createInput({id:"centro_custo",label:"Centro de Custo *",value:(n==null?void 0:n.centro_custo)||"",required:!0})}
                            ${z.createInput({id:"responsavel",label:"Responsável",value:(n==null?void 0:n.responsavel)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${z.createInput({id:"orcamento",label:"Orçamento Total (R$)",type:"number",value:(n==null?void 0:n.orcamento)||"",placeholder:"0.00"})}
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
                        
                        ${z.createInput({id:"endereco",label:"Endereço Completo",value:(n==null?void 0:n.endereco)||"",className:"mb-4"})}

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            ${z.createInput({id:"cidade",label:"Cidade",value:(n==null?void 0:n.cidade)||""})}
                            ${z.createInput({id:"estado",label:"Estado",value:(n==null?void 0:n.estado)||"",placeholder:"UF"})}
                            ${z.createInput({id:"cep",label:"CEP",value:(n==null?void 0:n.cep)||"",placeholder:"00000-000"})}
                        </div>
                    </div>

                    <div class="flex justify-end gap-4">
                        ${z.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.location.hash = '/obras'"})}
                        ${z.createButton({id:"btn-submit",text:t?"Salvar Alterações":"Criar Obra",type:"submit"})}
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
                    ${z.createCard({title:"Total de Compras",content:`<p class="text-4xl font-display text-primary uppercase">${t.totalCompras}</p>`,className:"accent-left"})}
                    ${z.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${Ye.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${Ye.formatCurrency(n.orcamento||0)}</p>`})}
                    ${z.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${t.porStatus.Pendente||0}</p>`,className:"accent-left"})}
                    ${z.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${t.porStatus.Entregue||0}</p>`,className:"accent-left"})}
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
                                        <td class="px-6 py-4 text-sm text-text-muted">${Ye.formatDate(e.data_solicitacao)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${e.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Ye.formatCurrency(e.valor_estimado||0)}</td>
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
        `},$p="rgba(255,255,255,0.08)",jp="#a1a1aa",Ki={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};Ot.defaults.color="#e5e5e5";Ot.defaults.font.family=Ki.family;Ot.defaults.font.weight=Ki.weight;const Hp={renderCategorias:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new Ot(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:$p},ticks:{color:jp,font:Ki}},y:{grid:{color:$p},ticks:{color:jp,font:Ki}}}}})},renderStatusObra:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new Ot(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Ki,padding:12,usePointStyle:!0}}}}})}},Ds={initList:async()=>{it.render(z.createLoader());try{const n=await Ss.getObras();it.render(Bc.renderList(n))}catch(n){console.error(n),it.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{it.render(z.createLoader());try{let t=null;n&&(t=await Ss.getObraById(n)),it.render(Bc.renderForm(t)),Ds.bindFormEvents(n)}catch(t){console.error(t),it.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{it.render(z.createLoader());try{const t=await Ss.getObraById(n);if(!t){it.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const e=await Ss.getObraStats(n);it.render(Bc.renderDashboard(t,e)),setTimeout(()=>{Hp.renderCategorias("chart-categorias",e.gastosPorCategoria),Hp.renderStatusObra("chart-status-obra",e.porStatus)},100)}catch(t){console.error(t),it.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=z.createLoader();const i=new FormData(t),r=Object.fromEntries(i.entries());r.orcamento&&(r.orcamento=Number(r.orcamento)),n?(await Ss.updateObra(n,r),z.createToast("Obra atualizada com sucesso!")):(await Ss.createObra(r),z.createToast("Obra criada com sucesso!")),Yt.navigate("/obras")}catch(i){console.error(i),z.createToast("Erro ao salvar: "+i.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}};console.log("[Main] Inicializando aplicação...");const RC=async()=>{try{await mA(),console.log("[Main] Firebase inicializado."),xt.setTheme(xt.state.currentTheme||"dark"),await Qo.init(),Yt.init(),Yt.on("/",IC.init),Yt.on("/login",pf.initLogin),Yt.on("/forgot-password",pf.initForgotPassword),Yt.on("/compras",Iy.init),Yt.on("/relatorios",Ft.init),Yt.on("/configuracoes",Rl.init),Yt.on("/obras",Ds.initList),Yt.on("/obras/nova",()=>Ds.initForm()),window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1),e=t.match(/^\/obras\/([^\/]+)$/),s=t.match(/^\/obras\/([^\/]+)\/dashboard$/),i=t.match(/^\/obras\/([^\/]+)\/editar$/);s?Ds.initDashboard(s[1]):i?Ds.initForm(i[1]):e&&Ds.initDashboard(e[1])}),Yt.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};RC();
