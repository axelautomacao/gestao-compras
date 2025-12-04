var ex=Object.defineProperty;var nx=(n,t,e)=>t in n?ex(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var N=(n,t,e)=>nx(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var uf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},sx=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},mg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(e[d],e[h],e[f],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(pg(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):sx(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const l=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new ix;const f=r<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ix extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rx=function(n){const t=pg(n);return mg.encodeByteArray(t,!0)},Ca=function(n){return rx(n).replace(/\./g,"")},gg=function(n){try{return mg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ox(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ax=()=>ox().__FIREBASE_DEFAULTS__,cx=()=>{if(typeof process>"u"||typeof uf>"u")return;const n=uf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&gg(n[1]);return t&&JSON.parse(t)},ac=()=>{try{return ax()||cx()||lx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_g=n=>{var t,e;return(e=(t=ac())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},yg=n=>{const t=_g(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},vg=()=>{var n;return(n=ac())===null||n===void 0?void 0:n.config},bg=n=>{var t;return(t=ac())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function xg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ca(JSON.stringify(e)),Ca(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function hx(){var n;const t=(n=ac())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function px(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gx(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _x(){return!hx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yx(){try{return typeof indexedDB=="object"}catch{return!1}}function vx(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx="FirebaseError";class dn extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=bx,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?xx(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,s)}}function xx(n,t){return n.replace(wx,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const wx=/\{\$([^}]+)}/g;function Ex(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ra(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(df(r)&&df(o)){if(!Ra(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function df(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function pr(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function mr(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Tx(n,t){const e=new Ix(n,t);return e.subscribe.bind(e)}class Ix{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Ax(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=ll),i.error===void 0&&(i.error=ll),i.complete===void 0&&(i.complete=ll);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ax(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ll(){}/**
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
 */function Ht(n){return n&&n._delegate?n._delegate:n}class ns{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new ux;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Cx(t))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Es){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Es){return this.instances.has(t)}getOptions(t=Es){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sx(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Es){return this.component?this.component.multipleInstances?t:Es:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sx(n){return n===Es?void 0:n}function Cx(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new kx(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(dt||(dt={}));const Px={debug:dt.DEBUG,verbose:dt.VERBOSE,info:dt.INFO,warn:dt.WARN,error:dt.ERROR,silent:dt.SILENT},Dx=dt.INFO,Ox={[dt.DEBUG]:"log",[dt.VERBOSE]:"log",[dt.INFO]:"info",[dt.WARN]:"warn",[dt.ERROR]:"error"},Mx=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Ox[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ju{constructor(t){this.name=t,this._logLevel=Dx,this._logHandler=Mx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Px[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,dt.DEBUG,...t),this._logHandler(this,dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,dt.VERBOSE,...t),this._logHandler(this,dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,dt.INFO,...t),this._logHandler(this,dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,dt.WARN,...t),this._logHandler(this,dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,dt.ERROR,...t),this._logHandler(this,dt.ERROR,...t)}}const Nx=(n,t)=>t.some(e=>n instanceof e);let hf,ff;function Lx(){return hf||(hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vx(){return ff||(ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wg=new WeakMap,Wl=new WeakMap,Eg=new WeakMap,ul=new WeakMap,zu=new WeakMap;function Fx(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Xn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&wg.set(e,n)}).catch(()=>{}),zu.set(t,n),t}function $x(n){if(Wl.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Wl.set(n,t)}let Gl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Wl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Eg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Xn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Bx(n){Gl=n(Gl)}function Ux(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(dl(this),t,...e);return Eg.set(s,t.sort?t.sort():[t]),Xn(s)}:Vx().includes(n)?function(...t){return n.apply(dl(this),t),Xn(wg.get(this))}:function(...t){return Xn(n.apply(dl(this),t))}}function jx(n){return typeof n=="function"?Ux(n):(n instanceof IDBTransaction&&$x(n),Nx(n,Lx())?new Proxy(n,Gl):n)}function Xn(n){if(n instanceof IDBRequest)return Fx(n);if(ul.has(n))return ul.get(n);const t=jx(n);return t!==n&&(ul.set(n,t),zu.set(t,n)),t}const dl=n=>zu.get(n);function zx(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=Xn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Xn(o.result),c.oldVersion,c.newVersion,Xn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Hx=["get","getKey","getAll","getAllKeys","count"],qx=["put","add","delete","clear"],hl=new Map;function pf(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(hl.get(t))return hl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=qx.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Hx.includes(e)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),i&&c.done]))[0]};return hl.set(t,r),r}Bx(n=>({...n,get:(t,e,s)=>pf(t,e)||n.get(t,e,s),has:(t,e)=>!!pf(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Gx(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function Gx(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Yl="@firebase/app",mf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new ju("@firebase/app"),Yx="@firebase/app-compat",Kx="@firebase/analytics-compat",Qx="@firebase/analytics",Xx="@firebase/app-check-compat",Jx="@firebase/app-check",Zx="@firebase/auth",t0="@firebase/auth-compat",e0="@firebase/database",n0="@firebase/data-connect",s0="@firebase/database-compat",i0="@firebase/functions",r0="@firebase/functions-compat",o0="@firebase/installations",a0="@firebase/installations-compat",c0="@firebase/messaging",l0="@firebase/messaging-compat",u0="@firebase/performance",d0="@firebase/performance-compat",h0="@firebase/remote-config",f0="@firebase/remote-config-compat",p0="@firebase/storage",m0="@firebase/storage-compat",g0="@firebase/firestore",_0="@firebase/vertexai-preview",y0="@firebase/firestore-compat",v0="firebase",b0="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="[DEFAULT]",x0={[Yl]:"fire-core",[Yx]:"fire-core-compat",[Qx]:"fire-analytics",[Kx]:"fire-analytics-compat",[Jx]:"fire-app-check",[Xx]:"fire-app-check-compat",[Zx]:"fire-auth",[t0]:"fire-auth-compat",[e0]:"fire-rtdb",[n0]:"fire-data-connect",[s0]:"fire-rtdb-compat",[i0]:"fire-fn",[r0]:"fire-fn-compat",[o0]:"fire-iid",[a0]:"fire-iid-compat",[c0]:"fire-fcm",[l0]:"fire-fcm-compat",[u0]:"fire-perf",[d0]:"fire-perf-compat",[h0]:"fire-rc",[f0]:"fire-rc-compat",[p0]:"fire-gcs",[m0]:"fire-gcs-compat",[g0]:"fire-fst",[y0]:"fire-fst-compat",[_0]:"fire-vertex","fire-js":"fire-js",[v0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Map,w0=new Map,Ql=new Map;function gf(n,t){try{n.container.addComponent(t)}catch(e){Cn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fs(n){const t=n.name;if(Ql.has(t))return Cn.debug(`There were multiple attempts to register component ${t}.`),!1;Ql.set(t,n);for(const e of Pa.values())gf(e,n);for(const e of w0.values())gf(e,n);return!0}function cc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function bn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new so("app","Firebase",E0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=b0;function Tg(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Kl,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});if(e||(e=vg()),!e)throw Jn.create("no-options");const r=Pa.get(i);if(r){if(Ra(e,r.options)&&Ra(s,r.config))return r;throw Jn.create("duplicate-app",{appName:i})}const o=new Rx(i);for(const c of Ql.values())o.addComponent(c);const a=new T0(e,s,o);return Pa.set(i,a),a}function Hu(n=Kl){const t=Pa.get(n);if(!t&&n===Kl&&vg())return Tg();if(!t)throw Jn.create("no-app",{appName:n});return t}function nn(n,t,e){var s;let i=(s=x0[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Cn.warn(a.join(" "));return}Fs(new ns(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const I0="firebase-heartbeat-database",A0=1,Fr="firebase-heartbeat-store";let fl=null;function Ig(){return fl||(fl=zx(I0,A0,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Fr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Jn.create("idb-open",{originalErrorMessage:n.message})})),fl}async function k0(n){try{const e=(await Ig()).transaction(Fr),s=await e.objectStore(Fr).get(Ag(n));return await e.done,s}catch(t){if(t instanceof dn)Cn.warn(t.message);else{const e=Jn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(e.message)}}}async function _f(n,t){try{const s=(await Ig()).transaction(Fr,"readwrite");await s.objectStore(Fr).put(t,Ag(n)),await s.done}catch(e){if(e instanceof dn)Cn.warn(e.message);else{const s=Jn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(s.message)}}}function Ag(n){return`${n.name}!${n.options.appId}`}/**
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
 */const S0=1024,C0=30*24*60*60*1e3;class R0{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new D0(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=C0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Cn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yf(),{heartbeatsToSend:s,unsentEntries:i}=P0(this._heartbeatsCache.heartbeats),r=Ca(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Cn.warn(e),""}}}function yf(){return new Date().toISOString().substring(0,10)}function P0(n,t=S0){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vf(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),vf(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class D0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yx()?vx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await k0(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return _f(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return _f(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function vf(n){return Ca(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(n){Fs(new ns("platform-logger",t=>new Wx(t),"PRIVATE")),Fs(new ns("heartbeat",t=>new R0(t),"PRIVATE")),nn(Yl,mf,n),nn(Yl,mf,"esm2017"),nn("fire-js","")}O0("");var M0="firebase",N0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(M0,N0,"app");var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rs,kg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,b){function x(){}x.prototype=b.prototype,w.D=b.prototype,w.prototype=new x,w.prototype.constructor=w,w.C=function(I,S,R){for(var k=Array(arguments.length-2),q=2;q<arguments.length;q++)k[q-2]=arguments[q];return b.prototype[S].apply(I,k)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,b,x){x||(x=0);var I=Array(16);if(typeof b=="string")for(var S=0;16>S;++S)I[S]=b.charCodeAt(x++)|b.charCodeAt(x++)<<8|b.charCodeAt(x++)<<16|b.charCodeAt(x++)<<24;else for(S=0;16>S;++S)I[S]=b[x++]|b[x++]<<8|b[x++]<<16|b[x++]<<24;b=w.g[0],x=w.g[1],S=w.g[2];var R=w.g[3],k=b+(R^x&(S^R))+I[0]+3614090360&4294967295;b=x+(k<<7&4294967295|k>>>25),k=R+(S^b&(x^S))+I[1]+3905402710&4294967295,R=b+(k<<12&4294967295|k>>>20),k=S+(x^R&(b^x))+I[2]+606105819&4294967295,S=R+(k<<17&4294967295|k>>>15),k=x+(b^S&(R^b))+I[3]+3250441966&4294967295,x=S+(k<<22&4294967295|k>>>10),k=b+(R^x&(S^R))+I[4]+4118548399&4294967295,b=x+(k<<7&4294967295|k>>>25),k=R+(S^b&(x^S))+I[5]+1200080426&4294967295,R=b+(k<<12&4294967295|k>>>20),k=S+(x^R&(b^x))+I[6]+2821735955&4294967295,S=R+(k<<17&4294967295|k>>>15),k=x+(b^S&(R^b))+I[7]+4249261313&4294967295,x=S+(k<<22&4294967295|k>>>10),k=b+(R^x&(S^R))+I[8]+1770035416&4294967295,b=x+(k<<7&4294967295|k>>>25),k=R+(S^b&(x^S))+I[9]+2336552879&4294967295,R=b+(k<<12&4294967295|k>>>20),k=S+(x^R&(b^x))+I[10]+4294925233&4294967295,S=R+(k<<17&4294967295|k>>>15),k=x+(b^S&(R^b))+I[11]+2304563134&4294967295,x=S+(k<<22&4294967295|k>>>10),k=b+(R^x&(S^R))+I[12]+1804603682&4294967295,b=x+(k<<7&4294967295|k>>>25),k=R+(S^b&(x^S))+I[13]+4254626195&4294967295,R=b+(k<<12&4294967295|k>>>20),k=S+(x^R&(b^x))+I[14]+2792965006&4294967295,S=R+(k<<17&4294967295|k>>>15),k=x+(b^S&(R^b))+I[15]+1236535329&4294967295,x=S+(k<<22&4294967295|k>>>10),k=b+(S^R&(x^S))+I[1]+4129170786&4294967295,b=x+(k<<5&4294967295|k>>>27),k=R+(x^S&(b^x))+I[6]+3225465664&4294967295,R=b+(k<<9&4294967295|k>>>23),k=S+(b^x&(R^b))+I[11]+643717713&4294967295,S=R+(k<<14&4294967295|k>>>18),k=x+(R^b&(S^R))+I[0]+3921069994&4294967295,x=S+(k<<20&4294967295|k>>>12),k=b+(S^R&(x^S))+I[5]+3593408605&4294967295,b=x+(k<<5&4294967295|k>>>27),k=R+(x^S&(b^x))+I[10]+38016083&4294967295,R=b+(k<<9&4294967295|k>>>23),k=S+(b^x&(R^b))+I[15]+3634488961&4294967295,S=R+(k<<14&4294967295|k>>>18),k=x+(R^b&(S^R))+I[4]+3889429448&4294967295,x=S+(k<<20&4294967295|k>>>12),k=b+(S^R&(x^S))+I[9]+568446438&4294967295,b=x+(k<<5&4294967295|k>>>27),k=R+(x^S&(b^x))+I[14]+3275163606&4294967295,R=b+(k<<9&4294967295|k>>>23),k=S+(b^x&(R^b))+I[3]+4107603335&4294967295,S=R+(k<<14&4294967295|k>>>18),k=x+(R^b&(S^R))+I[8]+1163531501&4294967295,x=S+(k<<20&4294967295|k>>>12),k=b+(S^R&(x^S))+I[13]+2850285829&4294967295,b=x+(k<<5&4294967295|k>>>27),k=R+(x^S&(b^x))+I[2]+4243563512&4294967295,R=b+(k<<9&4294967295|k>>>23),k=S+(b^x&(R^b))+I[7]+1735328473&4294967295,S=R+(k<<14&4294967295|k>>>18),k=x+(R^b&(S^R))+I[12]+2368359562&4294967295,x=S+(k<<20&4294967295|k>>>12),k=b+(x^S^R)+I[5]+4294588738&4294967295,b=x+(k<<4&4294967295|k>>>28),k=R+(b^x^S)+I[8]+2272392833&4294967295,R=b+(k<<11&4294967295|k>>>21),k=S+(R^b^x)+I[11]+1839030562&4294967295,S=R+(k<<16&4294967295|k>>>16),k=x+(S^R^b)+I[14]+4259657740&4294967295,x=S+(k<<23&4294967295|k>>>9),k=b+(x^S^R)+I[1]+2763975236&4294967295,b=x+(k<<4&4294967295|k>>>28),k=R+(b^x^S)+I[4]+1272893353&4294967295,R=b+(k<<11&4294967295|k>>>21),k=S+(R^b^x)+I[7]+4139469664&4294967295,S=R+(k<<16&4294967295|k>>>16),k=x+(S^R^b)+I[10]+3200236656&4294967295,x=S+(k<<23&4294967295|k>>>9),k=b+(x^S^R)+I[13]+681279174&4294967295,b=x+(k<<4&4294967295|k>>>28),k=R+(b^x^S)+I[0]+3936430074&4294967295,R=b+(k<<11&4294967295|k>>>21),k=S+(R^b^x)+I[3]+3572445317&4294967295,S=R+(k<<16&4294967295|k>>>16),k=x+(S^R^b)+I[6]+76029189&4294967295,x=S+(k<<23&4294967295|k>>>9),k=b+(x^S^R)+I[9]+3654602809&4294967295,b=x+(k<<4&4294967295|k>>>28),k=R+(b^x^S)+I[12]+3873151461&4294967295,R=b+(k<<11&4294967295|k>>>21),k=S+(R^b^x)+I[15]+530742520&4294967295,S=R+(k<<16&4294967295|k>>>16),k=x+(S^R^b)+I[2]+3299628645&4294967295,x=S+(k<<23&4294967295|k>>>9),k=b+(S^(x|~R))+I[0]+4096336452&4294967295,b=x+(k<<6&4294967295|k>>>26),k=R+(x^(b|~S))+I[7]+1126891415&4294967295,R=b+(k<<10&4294967295|k>>>22),k=S+(b^(R|~x))+I[14]+2878612391&4294967295,S=R+(k<<15&4294967295|k>>>17),k=x+(R^(S|~b))+I[5]+4237533241&4294967295,x=S+(k<<21&4294967295|k>>>11),k=b+(S^(x|~R))+I[12]+1700485571&4294967295,b=x+(k<<6&4294967295|k>>>26),k=R+(x^(b|~S))+I[3]+2399980690&4294967295,R=b+(k<<10&4294967295|k>>>22),k=S+(b^(R|~x))+I[10]+4293915773&4294967295,S=R+(k<<15&4294967295|k>>>17),k=x+(R^(S|~b))+I[1]+2240044497&4294967295,x=S+(k<<21&4294967295|k>>>11),k=b+(S^(x|~R))+I[8]+1873313359&4294967295,b=x+(k<<6&4294967295|k>>>26),k=R+(x^(b|~S))+I[15]+4264355552&4294967295,R=b+(k<<10&4294967295|k>>>22),k=S+(b^(R|~x))+I[6]+2734768916&4294967295,S=R+(k<<15&4294967295|k>>>17),k=x+(R^(S|~b))+I[13]+1309151649&4294967295,x=S+(k<<21&4294967295|k>>>11),k=b+(S^(x|~R))+I[4]+4149444226&4294967295,b=x+(k<<6&4294967295|k>>>26),k=R+(x^(b|~S))+I[11]+3174756917&4294967295,R=b+(k<<10&4294967295|k>>>22),k=S+(b^(R|~x))+I[2]+718787259&4294967295,S=R+(k<<15&4294967295|k>>>17),k=x+(R^(S|~b))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+b&4294967295,w.g[1]=w.g[1]+(S+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+R&4294967295}s.prototype.u=function(w,b){b===void 0&&(b=w.length);for(var x=b-this.blockSize,I=this.B,S=this.h,R=0;R<b;){if(S==0)for(;R<=x;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<b;)if(I[S++]=w.charCodeAt(R++),S==this.blockSize){i(this,I),S=0;break}}else for(;R<b;)if(I[S++]=w[R++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=b},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var b=1;b<w.length-8;++b)w[b]=0;var x=8*this.o;for(b=w.length-8;b<w.length;++b)w[b]=x&255,x/=256;for(this.u(w),w=Array(16),b=x=0;4>b;++b)for(var I=0;32>I;I+=8)w[x++]=this.g[b]>>>I&255;return w};function r(w,b){var x=a;return Object.prototype.hasOwnProperty.call(x,w)?x[w]:x[w]=b(w)}function o(w,b){this.h=b;for(var x=[],I=!0,S=w.length-1;0<=S;S--){var R=w[S]|0;I&&R==b||(x[S]=R,I=!1)}this.g=x}var a={};function c(w){return-128<=w&&128>w?r(w,function(b){return new o([b|0],0>b?-1:0)}):new o([w|0],0>w?-1:0)}function l(w){if(isNaN(w)||!isFinite(w))return h;if(0>w)return y(l(-w));for(var b=[],x=1,I=0;w>=x;I++)b[I]=w/x|0,x*=4294967296;return new o(b,0)}function d(w,b){if(w.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(w.charAt(0)=="-")return y(d(w.substring(1),b));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=l(Math.pow(b,8)),I=h,S=0;S<w.length;S+=8){var R=Math.min(8,w.length-S),k=parseInt(w.substring(S,S+R),b);8>R?(R=l(Math.pow(b,R)),I=I.j(R).add(l(k))):(I=I.j(x),I=I.add(l(k)))}return I}var h=c(0),f=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(v(this))return-y(this).m();for(var w=0,b=1,x=0;x<this.g.length;x++){var I=this.i(x);w+=(0<=I?I:4294967296+I)*b,b*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(g(this))return"0";if(v(this))return"-"+y(this).toString(w);for(var b=l(Math.pow(w,6)),x=this,I="";;){var S=D(x,b).g;x=T(x,S.j(b));var R=((0<x.g.length?x.g[0]:x.h)>>>0).toString(w);if(x=S,g(x))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function g(w){if(w.h!=0)return!1;for(var b=0;b<w.g.length;b++)if(w.g[b]!=0)return!1;return!0}function v(w){return w.h==-1}n.l=function(w){return w=T(this,w),v(w)?-1:g(w)?0:1};function y(w){for(var b=w.g.length,x=[],I=0;I<b;I++)x[I]=~w.g[I];return new o(x,~w.h).add(f)}n.abs=function(){return v(this)?y(this):this},n.add=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],I=0,S=0;S<=b;S++){var R=I+(this.i(S)&65535)+(w.i(S)&65535),k=(R>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);I=k>>>16,R&=65535,k&=65535,x[S]=k<<16|R}return new o(x,x[x.length-1]&-2147483648?-1:0)};function T(w,b){return w.add(y(b))}n.j=function(w){if(g(this)||g(w))return h;if(v(this))return v(w)?y(this).j(y(w)):y(y(this).j(w));if(v(w))return y(this.j(y(w)));if(0>this.l(m)&&0>w.l(m))return l(this.m()*w.m());for(var b=this.g.length+w.g.length,x=[],I=0;I<2*b;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<w.g.length;S++){var R=this.i(I)>>>16,k=this.i(I)&65535,q=w.i(S)>>>16,B=w.i(S)&65535;x[2*I+2*S]+=k*B,A(x,2*I+2*S),x[2*I+2*S+1]+=R*B,A(x,2*I+2*S+1),x[2*I+2*S+1]+=k*q,A(x,2*I+2*S+1),x[2*I+2*S+2]+=R*q,A(x,2*I+2*S+2)}for(I=0;I<b;I++)x[I]=x[2*I+1]<<16|x[2*I];for(I=b;I<2*b;I++)x[I]=0;return new o(x,0)};function A(w,b){for(;(w[b]&65535)!=w[b];)w[b+1]+=w[b]>>>16,w[b]&=65535,b++}function C(w,b){this.g=w,this.h=b}function D(w,b){if(g(b))throw Error("division by zero");if(g(w))return new C(h,h);if(v(w))return b=D(y(w),b),new C(y(b.g),y(b.h));if(v(b))return b=D(w,y(b)),new C(y(b.g),b.h);if(30<w.g.length){if(v(w)||v(b))throw Error("slowDivide_ only works with positive integers.");for(var x=f,I=b;0>=I.l(w);)x=P(x),I=P(I);var S=O(x,1),R=O(I,1);for(I=O(I,2),x=O(x,2);!g(I);){var k=R.add(I);0>=k.l(w)&&(S=S.add(x),R=k),I=O(I,1),x=O(x,1)}return b=T(w,S.j(b)),new C(S,b)}for(S=h;0<=w.l(b);){for(x=Math.max(1,Math.floor(w.m()/b.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=l(x),k=R.j(b);v(k)||0<k.l(w);)x-=I,R=l(x),k=R.j(b);g(R)&&(R=f),S=S.add(R),w=T(w,k)}return new C(S,w)}n.A=function(w){return D(this,w).h},n.and=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],I=0;I<b;I++)x[I]=this.i(I)&w.i(I);return new o(x,this.h&w.h)},n.or=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],I=0;I<b;I++)x[I]=this.i(I)|w.i(I);return new o(x,this.h|w.h)},n.xor=function(w){for(var b=Math.max(this.g.length,w.g.length),x=[],I=0;I<b;I++)x[I]=this.i(I)^w.i(I);return new o(x,this.h^w.h)};function P(w){for(var b=w.g.length+1,x=[],I=0;I<b;I++)x[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(x,w.h)}function O(w,b){var x=b>>5;b%=32;for(var I=w.g.length-x,S=[],R=0;R<I;R++)S[R]=0<b?w.i(R+x)>>>b|w.i(R+x+1)<<32-b:w.i(R+x);return new o(S,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,kg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Rs=o}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sg,gr,Cg,ua,Xl,Rg,Pg,Dg;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uo=="object"&&Uo];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=e(this);function i(u,p){if(p)t:{var _=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in _))break t;_=_[M]}u=u[u.length-1],E=_[u],p=p(E),p!=E&&p!=null&&t(_,u,{configurable:!0,writable:!0,value:p})}}function r(u,p){u instanceof String&&(u+="");var _=0,E=!1,M={next:function(){if(!E&&_<u.length){var L=_++;return{value:p(L,u[L]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(u){return u||function(){return r(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,_){return u.call.apply(u.bind,arguments)}function h(u,p,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function f(u,p,_){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function m(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function g(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,M,L){for(var j=Array(arguments.length-2),It=2;It<arguments.length;It++)j[It-2]=arguments[It];return p.prototype[M].apply(E,j)}}function v(u){const p=u.length;if(0<p){const _=Array(p);for(let E=0;E<p;E++)_[E]=u[E];return _}return[]}function y(u,p){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(c(E)){const M=u.length||0,L=E.length||0;u.length=M+L;for(let j=0;j<L;j++)u[M+j]=E[j]}else u.push(E)}}class T{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function A(u){return/^[\s\xa0]*$/.test(u)}function C(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var P=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function O(u,p,_){for(const E in u)p.call(_,u[E],E,u)}function w(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function b(u){const p={};for(const _ in u)p[_]=u[_];return p}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(u,p){let _,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(_ in E)u[_]=E[_];for(let L=0;L<x.length;L++)_=x[L],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function S(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function R(u){a.setTimeout(()=>{throw u},0)}function k(){var u=st;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class q{constructor(){this.h=this.g=null}add(p,_){const E=B.get();E.set(p,_),this.h?this.h.next=E:this.g=E,this.h=E}}var B=new T(()=>new z,u=>u.reset());class z{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,rt=!1,st=new q,ut=()=>{const u=a.Promise.resolve(void 0);Q=()=>{u.then(Zt)}};var Zt=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(_){R(_)}var p=B;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}rt=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Y(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var bt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};a.addEventListener("test",_,p),a.removeEventListener("test",_,p)}catch{}return u}();function Ut(u,p){if(Y.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(P){t:{try{D(p.nodeName);var M=!0;break t}catch{}M=!1}M||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:he[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ut.aa.h.call(this)}}g(Ut,Y);var he={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var hs="closure_listenable_"+(1e6*Math.random()|0),Tb=0;function Ib(u,p,_,E,M){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!E,this.ha=M,this.key=++Tb,this.da=this.fa=!1}function Eo(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function To(u){this.src=u,this.g={},this.h=0}To.prototype.add=function(u,p,_,E,M){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var j=Uc(u,p,E,M);return-1<j?(p=u[j],_||(p.fa=!1)):(p=new Ib(p,this.src,L,!!E,M),p.fa=_,u.push(p)),p};function Bc(u,p){var _=p.type;if(_ in u.g){var E=u.g[_],M=Array.prototype.indexOf.call(E,p,void 0),L;(L=0<=M)&&Array.prototype.splice.call(E,M,1),L&&(Eo(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Uc(u,p,_,E){for(var M=0;M<u.length;++M){var L=u[M];if(!L.da&&L.listener==p&&L.capture==!!_&&L.ha==E)return M}return-1}var jc="closure_lm_"+(1e6*Math.random()|0),zc={};function uh(u,p,_,E,M){if(Array.isArray(p)){for(var L=0;L<p.length;L++)uh(u,p[L],_,E,M);return null}return _=fh(_),u&&u[hs]?u.K(p,_,l(E)?!!E.capture:!1,M):Ab(u,p,_,!1,E,M)}function Ab(u,p,_,E,M,L){if(!p)throw Error("Invalid event type");var j=l(M)?!!M.capture:!!M,It=qc(u);if(It||(u[jc]=It=new To(u)),_=It.add(p,_,E,j,L),_.proxy)return _;if(E=kb(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)bt||(M=j),M===void 0&&(M=!1),u.addEventListener(p.toString(),E,M);else if(u.attachEvent)u.attachEvent(hh(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function kb(){function u(_){return p.call(u.src,u.listener,_)}const p=Sb;return u}function dh(u,p,_,E,M){if(Array.isArray(p))for(var L=0;L<p.length;L++)dh(u,p[L],_,E,M);else E=l(E)?!!E.capture:!!E,_=fh(_),u&&u[hs]?(u=u.i,p=String(p).toString(),p in u.g&&(L=u.g[p],_=Uc(L,_,E,M),-1<_&&(Eo(L[_]),Array.prototype.splice.call(L,_,1),L.length==0&&(delete u.g[p],u.h--)))):u&&(u=qc(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Uc(p,_,E,M)),(_=-1<u?p[u]:null)&&Hc(_))}function Hc(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[hs])Bc(p.i,u);else{var _=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(_,E,u.capture):p.detachEvent?p.detachEvent(hh(_),E):p.addListener&&p.removeListener&&p.removeListener(E),(_=qc(p))?(Bc(_,u),_.h==0&&(_.src=null,p[jc]=null)):Eo(u)}}}function hh(u){return u in zc?zc[u]:zc[u]="on"+u}function Sb(u,p){if(u.da)u=!0;else{p=new Ut(p,this);var _=u.listener,E=u.ha||u.src;u.fa&&Hc(u),u=_.call(E,p)}return u}function qc(u){return u=u[jc],u instanceof To?u:null}var Wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function fh(u){return typeof u=="function"?u:(u[Wc]||(u[Wc]=function(p){return u.handleEvent(p)}),u[Wc])}function fe(){kt.call(this),this.i=new To(this),this.M=this,this.F=null}g(fe,kt),fe.prototype[hs]=!0,fe.prototype.removeEventListener=function(u,p,_,E){dh(this,u,p,_,E)};function Ie(u,p){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new Y(p,u);else if(p instanceof Y)p.target=p.target||u;else{var M=p;p=new Y(E,u),I(p,M)}if(M=!0,_)for(var L=_.length-1;0<=L;L--){var j=p.g=_[L];M=Io(j,E,!0,p)&&M}if(j=p.g=u,M=Io(j,E,!0,p)&&M,M=Io(j,E,!1,p)&&M,_)for(L=0;L<_.length;L++)j=p.g=_[L],M=Io(j,E,!1,p)&&M}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],E=0;E<_.length;E++)Eo(_[E]);delete u.g[p],u.h--}}this.F=null},fe.prototype.K=function(u,p,_,E){return this.i.add(String(u),p,!1,_,E)},fe.prototype.L=function(u,p,_,E){return this.i.add(String(u),p,!0,_,E)};function Io(u,p,_,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,L=0;L<p.length;++L){var j=p[L];if(j&&!j.da&&j.capture==_){var It=j.listener,ae=j.ha||j.src;j.fa&&Bc(u.i,j),M=It.call(ae,E)!==!1&&M}}return M&&!E.defaultPrevented}function ph(u,p,_){if(typeof u=="function")_&&(u=f(u,_));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function mh(u){u.g=ph(()=>{u.g=null,u.i&&(u.i=!1,mh(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Cb extends kt{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:mh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(u){kt.call(this),this.h=u,this.g={}}g(zi,kt);var gh=[];function _h(u){O(u.g,function(p,_){this.g.hasOwnProperty(_)&&Hc(p)},u),u.g={}}zi.prototype.N=function(){zi.aa.N.call(this),_h(this)},zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gc=a.JSON.stringify,Rb=a.JSON.parse,Pb=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Yc(){}Yc.prototype.h=null;function yh(u){return u.h||(u.h=u.i())}function vh(){}var Hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kc(){Y.call(this,"d")}g(Kc,Y);function Qc(){Y.call(this,"c")}g(Qc,Y);var fs={},bh=null;function Ao(){return bh=bh||new fe}fs.La="serverreachability";function xh(u){Y.call(this,fs.La,u)}g(xh,Y);function qi(u){const p=Ao();Ie(p,new xh(p))}fs.STAT_EVENT="statevent";function wh(u,p){Y.call(this,fs.STAT_EVENT,u),this.stat=p}g(wh,Y);function Ae(u){const p=Ao();Ie(p,new wh(p,u))}fs.Ma="timingevent";function Eh(u,p){Y.call(this,fs.Ma,u),this.size=p}g(Eh,Y);function Wi(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Gi(){this.g=!0}Gi.prototype.xa=function(){this.g=!1};function Db(u,p,_,E,M,L){u.info(function(){if(u.g)if(L)for(var j="",It=L.split("&"),ae=0;ae<It.length;ae++){var pt=It[ae].split("=");if(1<pt.length){var pe=pt[0];pt=pt[1];var me=pe.split("_");j=2<=me.length&&me[1]=="type"?j+(pe+"="+pt+"&"):j+(pe+"=redacted&")}}else j=null;else j=L;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+_+`
`+j})}function Ob(u,p,_,E,M,L,j){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+_+`
`+L+" "+j})}function ti(u,p,_,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Nb(u,_)+(E?" "+E:"")})}function Mb(u,p){u.info(function(){return"TIMEOUT: "+p})}Gi.prototype.info=function(){};function Nb(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var L=M[0];if(L!="noop"&&L!="stop"&&L!="close")for(var j=1;j<M.length;j++)M[j]=""}}}}return Gc(_)}catch{return p}}var ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Th={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xc;function So(){}g(So,Yc),So.prototype.g=function(){return new XMLHttpRequest},So.prototype.i=function(){return{}},Xc=new So;function Mn(u,p,_,E){this.j=u,this.i=p,this.l=_,this.R=E||1,this.U=new zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ih}function Ih(){this.i=null,this.g="",this.h=!1}var Ah={},Jc={};function Zc(u,p,_){u.L=1,u.v=Do(hn(p)),u.m=_,u.P=!0,kh(u,null)}function kh(u,p){u.F=Date.now(),Co(u),u.A=hn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Uh(_.i,"t",E),u.C=0,_=u.j.J,u.h=new Ih,u.g=of(u.j,_?p:null,!u.m),0<u.O&&(u.M=new Cb(f(u.Y,u,u.g),u.O)),p=u.U,_=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(gh[0]=M.toString()),M=gh);for(var L=0;L<M.length;L++){var j=uh(_,M[L],E||p.handleEvent,!1,p.h||p);if(!j)break;p.g[j.key]=j}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),qi(),Db(u.i,u.u,u.A,u.l,u.R,u.m)}Mn.prototype.ca=function(u){u=u.target;const p=this.M;p&&fn(u)==3?p.j():this.Y(u)},Mn.prototype.Y=function(u){try{if(u==this.g)t:{const me=fn(this.g);var p=this.g.Ba();const si=this.g.Z();if(!(3>me)&&(me!=3||this.g&&(this.h.h||this.g.oa()||Yh(this.g)))){this.J||me!=4||p==7||(p==8||0>=si?qi(3):qi(2)),tl(this);var _=this.g.Z();this.X=_;e:if(Sh(this)){var E=Yh(this.g);u="";var M=E.length,L=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ps(this),Yi(this);var j="";break e}this.h.i=new a.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(L&&p==M-1)});E.length=0,this.h.g+=u,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=_==200,Ob(this.i,this.u,this.A,this.l,this.R,me,_),this.o){if(this.T&&!this.K){e:{if(this.g){var It,ae=this.g;if((It=ae.g?ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(It)){var pt=It;break e}}pt=null}if(_=pt)ti(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,el(this,_);else{this.o=!1,this.s=3,Ae(12),ps(this),Yi(this);break t}}if(this.P){_=!0;let $e;for(;!this.J&&this.C<j.length;)if($e=Lb(this,j),$e==Jc){me==4&&(this.s=4,Ae(14),_=!1),ti(this.i,this.l,null,"[Incomplete Response]");break}else if($e==Ah){this.s=4,Ae(15),ti(this.i,this.l,j,"[Invalid Chunk]"),_=!1;break}else ti(this.i,this.l,$e,null),el(this,$e);if(Sh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||j.length!=0||this.h.h||(this.s=1,Ae(16),_=!1),this.o=this.o&&_,!_)ti(this.i,this.l,j,"[Invalid Chunked Response]"),ps(this),Yi(this);else if(0<j.length&&!this.W){this.W=!0;var pe=this.j;pe.g==this&&pe.ba&&!pe.M&&(pe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),al(pe),pe.M=!0,Ae(11))}}else ti(this.i,this.l,j,null),el(this,j);me==4&&ps(this),this.o&&!this.J&&(me==4?ef(this.j,this):(this.o=!1,Co(this)))}else Zb(this.g),_==400&&0<j.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),ps(this),Yi(this)}}}catch{}finally{}};function Sh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Lb(u,p){var _=u.C,E=p.indexOf(`
`,_);return E==-1?Jc:(_=Number(p.substring(_,E)),isNaN(_)?Ah:(E+=1,E+_>p.length?Jc:(p=p.slice(E,E+_),u.C=E+_,p)))}Mn.prototype.cancel=function(){this.J=!0,ps(this)};function Co(u){u.S=Date.now()+u.I,Ch(u,u.I)}function Ch(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Wi(f(u.ba,u),p)}function tl(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Mn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Mb(this.i,this.A),this.L!=2&&(qi(),Ae(17)),ps(this),this.s=2,Yi(this)):Ch(this,this.S-u)};function Yi(u){u.j.G==0||u.J||ef(u.j,u)}function ps(u){tl(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,_h(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function el(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||nl(_.h,u))){if(!u.K&&nl(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Fo(_),Lo(_);else break t;ol(_),Ae(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Wi(f(_.Za,_),6e3));if(1>=Dh(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else gs(_,11)}else if((u.K||_.g==u)&&Fo(_),!A(p))for(M=_.Da.g.parse(p),p=0;p<M.length;p++){let pt=M[p];if(_.T=pt[0],pt=pt[1],_.G==2)if(pt[0]=="c"){_.K=pt[1],_.ia=pt[2];const pe=pt[3];pe!=null&&(_.la=pe,_.j.info("VER="+_.la));const me=pt[4];me!=null&&(_.Aa=me,_.j.info("SVER="+_.Aa));const si=pt[5];si!=null&&typeof si=="number"&&0<si&&(E=1.5*si,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const $e=u.g;if($e){const Bo=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bo){var L=E.h;L.g||Bo.indexOf("spdy")==-1&&Bo.indexOf("quic")==-1&&Bo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(sl(L,L.h),L.h=null))}if(E.D){const cl=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;cl&&(E.ya=cl,Rt(E.I,E.D,cl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var j=u;if(E.qa=rf(E,E.J?E.ia:null,E.W),j.K){Oh(E.h,j);var It=j,ae=E.L;ae&&(It.I=ae),It.B&&(tl(It),Co(It)),E.g=j}else Zh(E);0<_.i.length&&Vo(_)}else pt[0]!="stop"&&pt[0]!="close"||gs(_,7);else _.G==3&&(pt[0]=="stop"||pt[0]=="close"?pt[0]=="stop"?gs(_,7):rl(_):pt[0]!="noop"&&_.l&&_.l.ta(pt),_.v=0)}}qi(4)}catch{}}var Vb=class{constructor(u,p){this.g=u,this.map=p}};function Rh(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ph(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Dh(u){return u.h?1:u.g?u.g.size:0}function nl(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function sl(u,p){u.g?u.g.add(p):u.h=p}function Oh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Rh.prototype.cancel=function(){if(this.i=Mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Mh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return v(u.i)}function Fb(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],_=u.length,E=0;E<_;E++)p.push(u[E]);return p}p=[],_=0;for(E in u)p[_++]=u[E];return p}function $b(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const E in u)p[_++]=E;return p}}}function Nh(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=$b(u),E=Fb(u),M=E.length,L=0;L<M;L++)p.call(void 0,E[L],_&&_[L],u)}var Lh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bb(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),M=null;if(0<=E){var L=u[_].substring(0,E);M=u[_].substring(E+1)}else L=u[_];p(L,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ms(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ms){this.h=u.h,Ro(this,u.j),this.o=u.o,this.g=u.g,Po(this,u.s),this.l=u.l;var p=u.i,_=new Xi;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Vh(this,_),this.m=u.m}else u&&(p=String(u).match(Lh))?(this.h=!1,Ro(this,p[1]||"",!0),this.o=Ki(p[2]||""),this.g=Ki(p[3]||"",!0),Po(this,p[4]),this.l=Ki(p[5]||"",!0),Vh(this,p[6]||"",!0),this.m=Ki(p[7]||"")):(this.h=!1,this.i=new Xi(null,this.h))}ms.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Qi(p,Fh,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Qi(p,Fh,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Qi(_,_.charAt(0)=="/"?zb:jb,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Qi(_,qb)),u.join("")};function hn(u){return new ms(u)}function Ro(u,p,_){u.j=_?Ki(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Po(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Vh(u,p,_){p instanceof Xi?(u.i=p,Wb(u.i,u.h)):(_||(p=Qi(p,Hb)),u.i=new Xi(p,u.h))}function Rt(u,p,_){u.i.set(p,_)}function Do(u){return Rt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ki(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qi(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,Ub),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Ub(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Fh=/[#\/\?@]/g,jb=/[#\?:]/g,zb=/[#\?]/g,Hb=/[#\?@]/g,qb=/#/g;function Xi(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Nn(u){u.g||(u.g=new Map,u.h=0,u.i&&Bb(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=Xi.prototype,n.add=function(u,p){Nn(this),this.i=null,u=ei(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function $h(u,p){Nn(u),p=ei(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Bh(u,p){return Nn(u),p=ei(u,p),u.g.has(p)}n.forEach=function(u,p){Nn(this),this.g.forEach(function(_,E){_.forEach(function(M){u.call(p,M,E,this)},this)},this)},n.na=function(){Nn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let E=0;E<p.length;E++){const M=u[E];for(let L=0;L<M.length;L++)_.push(p[E])}return _},n.V=function(u){Nn(this);let p=[];if(typeof u=="string")Bh(this,u)&&(p=p.concat(this.g.get(ei(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return Nn(this),this.i=null,u=ei(this,u),Bh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Uh(u,p,_){$h(u,p),0<_.length&&(u.i=null,u.g.set(ei(u,p),v(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var E=p[_];const L=encodeURIComponent(String(E)),j=this.V(E);for(E=0;E<j.length;E++){var M=L;j[E]!==""&&(M+="="+encodeURIComponent(String(j[E]))),u.push(M)}}return this.i=u.join("&")};function ei(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Wb(u,p){p&&!u.j&&(Nn(u),u.i=null,u.g.forEach(function(_,E){var M=E.toLowerCase();E!=M&&($h(this,E),Uh(this,M,_))},u)),u.j=p}function Gb(u,p){const _=new Gi;if(a.Image){const E=new Image;E.onload=m(Ln,_,"TestLoadImage: loaded",!0,p,E),E.onerror=m(Ln,_,"TestLoadImage: error",!1,p,E),E.onabort=m(Ln,_,"TestLoadImage: abort",!1,p,E),E.ontimeout=m(Ln,_,"TestLoadImage: timeout",!1,p,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Yb(u,p){const _=new Gi,E=new AbortController,M=setTimeout(()=>{E.abort(),Ln(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(L=>{clearTimeout(M),L.ok?Ln(_,"TestPingServer: ok",!0,p):Ln(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Ln(_,"TestPingServer: error",!1,p)})}function Ln(u,p,_,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(_)}catch{}}function Kb(){this.g=new Pb}function Qb(u,p,_){const E=_||"";try{Nh(u,function(M,L){let j=M;l(M)&&(j=Gc(M)),p.push(E+L+"="+encodeURIComponent(j))})}catch(M){throw p.push(E+"type="+encodeURIComponent("_badmap")),M}}function Oo(u){this.l=u.Ub||null,this.j=u.eb||!1}g(Oo,Yc),Oo.prototype.g=function(){return new Mo(this.l,this.j)},Oo.prototype.i=function(u){return function(){return u}}({});function Mo(u,p){fe.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(Mo,fe),n=Mo.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Zi(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Zi(this)),this.g&&(this.readyState=3,Zi(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jh(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function jh(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Ji(this):Zi(this),this.readyState==3&&jh(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Ji(this))},n.Qa=function(u){this.g&&(this.response=u,Ji(this))},n.ga=function(){this.g&&Ji(this)};function Ji(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Zi(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Zi(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function zh(u){let p="";return O(u,function(_,E){p+=E,p+=":",p+=_,p+=`\r
`}),p}function il(u,p,_){t:{for(E in _){var E=!1;break t}E=!0}E||(_=zh(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Rt(u,p,_))}function jt(u){fe.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(jt,fe);var Xb=/^https?$/i,Jb=["POST","PUT"];n=jt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xc.g(),this.v=this.o?yh(this.o):yh(Xc),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(L){Hh(this,L);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)_.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const L of E.keys())_.set(L,E.get(L));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(L=>L.toLowerCase()=="content-type"),M=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Jb,p,void 0))||E||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,j]of _)this.g.setRequestHeader(L,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gh(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Hh(this,L)}};function Hh(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,qh(u),No(u)}function qh(u){u.A||(u.A=!0,Ie(u,"complete"),Ie(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ie(this,"complete"),Ie(this,"abort"),No(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),No(this,!0)),jt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Wh(this):this.bb())},n.bb=function(){Wh(this)};function Wh(u){if(u.h&&typeof o<"u"&&(!u.v[1]||fn(u)!=4||u.Z()!=2)){if(u.u&&fn(u)==4)ph(u.Ea,0,u);else if(Ie(u,"readystatechange"),fn(u)==4){u.h=!1;try{const j=u.Z();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var _;if(!(_=p)){var E;if(E=j===0){var M=String(u.D).match(Lh)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),E=!Xb.test(M?M.toLowerCase():"")}_=E}if(_)Ie(u,"complete"),Ie(u,"success");else{u.m=6;try{var L=2<fn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",qh(u)}}finally{No(u)}}}}function No(u,p){if(u.g){Gh(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||Ie(u,"ready");try{_.onreadystatechange=E}catch{}}}function Gh(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function fn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Rb(p)}};function Yh(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Zb(u){const p={};u=(u.g&&2<=fn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(A(u[E]))continue;var _=S(u[E]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const L=p[M]||[];p[M]=L,L.push(_)}w(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tr(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function Kh(u){this.Aa=0,this.i=[],this.j=new Gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tr("baseRetryDelayMs",5e3,u),this.cb=tr("retryDelaySeedMs",1e4,u),this.Wa=tr("forwardChannelMaxRetries",2,u),this.wa=tr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Rh(u&&u.concurrentRequestLimit),this.Da=new Kb,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Kh.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,E){Ae(0),this.W=u,this.H=p||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=rf(this,null,this.W),Vo(this)};function rl(u){if(Qh(u),u.G==3){var p=u.U++,_=hn(u.I);if(Rt(_,"SID",u.K),Rt(_,"RID",p),Rt(_,"TYPE","terminate"),er(u,_),p=new Mn(u,u.j,p),p.L=2,p.v=Do(hn(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=p.v,_=!0),_||(p.g=of(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Co(p)}sf(u)}function Lo(u){u.g&&(al(u),u.g.cancel(),u.g=null)}function Qh(u){Lo(u),u.u&&(a.clearTimeout(u.u),u.u=null),Fo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Vo(u){if(!Ph(u.h)&&!u.s){u.s=!0;var p=u.Ga;Q||ut(),rt||(Q(),rt=!0),st.add(p,u),u.B=0}}function tx(u,p){return Dh(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Wi(f(u.Ga,u,p),nf(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Mn(this,this.j,u);let L=this.o;if(this.S&&(L?(L=b(L),I(L,this.S)):L=this.S),this.m!==null||this.O||(M.H=L,L=null),this.P)t:{for(var p=0,_=0;_<this.i.length;_++){e:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=_;break t}if(p===4096||_===this.i.length-1){p=_+1;break t}}p=1e3}else p=1e3;p=Jh(this,M,p),_=hn(this.I),Rt(_,"RID",u),Rt(_,"CVER",22),this.D&&Rt(_,"X-HTTP-Session-Id",this.D),er(this,_),L&&(this.O?p="headers="+encodeURIComponent(String(zh(L)))+"&"+p:this.m&&il(_,this.m,L)),sl(this.h,M),this.Ua&&Rt(_,"TYPE","init"),this.P?(Rt(_,"$req",p),Rt(_,"SID","null"),M.T=!0,Zc(M,_,null)):Zc(M,_,p),this.G=2}}else this.G==3&&(u?Xh(this,u):this.i.length==0||Ph(this.h)||Xh(this))};function Xh(u,p){var _;p?_=p.l:_=u.U++;const E=hn(u.I);Rt(E,"SID",u.K),Rt(E,"RID",_),Rt(E,"AID",u.T),er(u,E),u.m&&u.o&&il(E,u.m,u.o),_=new Mn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Jh(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sl(u.h,_),Zc(_,E,p)}function er(u,p){u.H&&O(u.H,function(_,E){Rt(p,E,_)}),u.l&&Nh({},function(_,E){Rt(p,E,_)})}function Jh(u,p,_){_=Math.min(u.i.length,_);var E=u.l?f(u.l.Na,u.l,u):null;t:{var M=u.i;let L=-1;for(;;){const j=["count="+_];L==-1?0<_?(L=M[0].g,j.push("ofs="+L)):L=0:j.push("ofs="+L);let It=!0;for(let ae=0;ae<_;ae++){let pt=M[ae].g;const pe=M[ae].map;if(pt-=L,0>pt)L=Math.max(0,M[ae].g-100),It=!1;else try{Qb(pe,j,"req"+pt+"_")}catch{E&&E(pe)}}if(It){E=j.join("&");break t}}}return u=u.i.splice(0,_),p.D=u,E}function Zh(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Q||ut(),rt||(Q(),rt=!0),st.add(p,u),u.v=0}}function ol(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Wi(f(u.Fa,u),nf(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,tf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Wi(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),Lo(this),tf(this))};function al(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function tf(u){u.g=new Mn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=hn(u.qa);Rt(p,"RID","rpc"),Rt(p,"SID",u.K),Rt(p,"AID",u.T),Rt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Rt(p,"TO",u.ja),Rt(p,"TYPE","xmlhttp"),er(u,p),u.m&&u.o&&il(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Do(hn(p)),_.m=null,_.P=!0,kh(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Lo(this),ol(this),Ae(19))};function Fo(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function ef(u,p){var _=null;if(u.g==p){Fo(u),al(u),u.g=null;var E=2}else if(nl(u.h,p))_=p.D,Oh(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;E=Ao(),Ie(E,new Eh(E,_)),Vo(u)}else Zh(u);else if(M=p.s,M==3||M==0&&0<p.X||!(E==1&&tx(u,p)||E==2&&ol(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),M){case 1:gs(u,5);break;case 4:gs(u,10);break;case 3:gs(u,6);break;default:gs(u,2)}}}function nf(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function gs(u,p){if(u.j.info("Error code "+p),p==2){var _=f(u.fb,u),E=u.Xa;const M=!E;E=new ms(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ro(E,"https"),Do(E),M?Gb(E.toString(),_):Yb(E.toString(),_)}else Ae(2);u.G=0,u.l&&u.l.sa(p),sf(u),Qh(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function sf(u){if(u.G=0,u.ka=[],u.l){const p=Mh(u.h);(p.length!=0||u.i.length!=0)&&(y(u.ka,p),y(u.ka,u.i),u.h.i.length=0,v(u.i),u.i.length=0),u.l.ra()}}function rf(u,p,_){var E=_ instanceof ms?hn(_):new ms(_);if(E.g!="")p&&(E.g=p+"."+E.g),Po(E,E.s);else{var M=a.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var L=new ms(null);E&&Ro(L,E),p&&(L.g=p),M&&Po(L,M),_&&(L.l=_),E=L}return _=u.D,p=u.ya,_&&p&&Rt(E,_,p),Rt(E,"VER",u.la),er(u,E),E}function of(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new jt(new Oo({eb:_})):new jt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function af(){}n=af.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $o(){}$o.prototype.g=function(u,p){return new Oe(u,p)};function Oe(u,p){fe.call(this),this.g=new Kh(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!A(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ni(this)}g(Oe,fe),Oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){rl(this.g)},Oe.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Gc(u),u=_);p.i.push(new Vb(p.Ya++,u)),p.G==3&&Vo(p)},Oe.prototype.N=function(){this.g.l=null,delete this.j,rl(this.g),delete this.g,Oe.aa.N.call(this)};function cf(u){Kc.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const _ in p){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}g(cf,Kc);function lf(){Qc.call(this),this.status=1}g(lf,Qc);function ni(u){this.g=u}g(ni,af),ni.prototype.ua=function(){Ie(this.g,"a")},ni.prototype.ta=function(u){Ie(this.g,new cf(u))},ni.prototype.sa=function(u){Ie(this.g,new lf)},ni.prototype.ra=function(){Ie(this.g,"b")},$o.prototype.createWebChannel=$o.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,Dg=function(){return new $o},Pg=function(){return Ao()},Rg=fs,Xl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ko.NO_ERROR=0,ko.TIMEOUT=8,ko.HTTP_ERROR=6,ua=ko,Th.COMPLETE="complete",Cg=Th,vh.EventType=Hi,Hi.OPEN="a",Hi.CLOSE="b",Hi.ERROR="c",Hi.MESSAGE="d",fe.prototype.listen=fe.prototype.K,gr=vh,jt.prototype.listenOnce=jt.prototype.L,jt.prototype.getLastError=jt.prototype.Ka,jt.prototype.getLastErrorCode=jt.prototype.Ba,jt.prototype.getStatus=jt.prototype.Z,jt.prototype.getResponseJson=jt.prototype.Oa,jt.prototype.getResponseText=jt.prototype.oa,jt.prototype.send=jt.prototype.ea,jt.prototype.setWithCredentials=jt.prototype.Ha,Sg=jt}).apply(typeof Uo<"u"?Uo:typeof self<"u"?self:typeof window<"u"?window:{});const xf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new ju("@firebase/firestore");function nr(){return $s.logLevel}function W(n,...t){if($s.logLevel<=dt.DEBUG){const e=t.map(qu);$s.debug(`Firestore (${Li}): ${n}`,...e)}}function Rn(n,...t){if($s.logLevel<=dt.ERROR){const e=t.map(qu);$s.error(`Firestore (${Li}): ${n}`,...e)}}function Ti(n,...t){if($s.logLevel<=dt.WARN){const e=t.map(qu);$s.warn(`Firestore (${Li}): ${n}`,...e)}}function qu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function J(n="Unexpected state"){const t=`FIRESTORE (${Li}) INTERNAL ASSERTION FAILED: `+n;throw Rn(t),new Error(t)}function Tt(n,t){n||J()}function et(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends dn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class L0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ve.UNAUTHENTICATED))}shutdown(){}}class V0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class F0{constructor(t){this.t=t,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Tt(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let r=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new kn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new kn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Tt(typeof s.accessToken=="string"),new Og(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Tt(t===null||typeof t=="string"),new ve(t)}}class $0{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class B0{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new $0(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class U0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Tt(this.o===void 0);const s=r=>{r.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Tt(typeof e.token=="string"),this.R=e.token,new U0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=z0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function gt(n,t){return n<t?-1:n>t?1:0}function Ii(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ft.fromMillis(Date.now())}static fromDate(t){return Ft.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new Ft(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?gt(this.nanoseconds,t.nanoseconds):gt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Z(t)}static min(){return new Z(new Ft(0,0))}static max(){return new Z(new Ft(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,s){e===void 0?e=0:e>t.length&&J(),s===void 0?s=t.length-e:s>t.length-e&&J(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return $r.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof $r?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Pt extends $r{construct(t,e,s){return new Pt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new H(F.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new Pt(e)}static emptyPath(){return new Pt([])}}const H0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends $r{construct(t,e,s){return new le(t,e,s)}static isValidIdentifier(t){return H0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new le(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new H(F.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new H(F.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new le(e)}static emptyPath(){return new le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(Pt.fromString(t))}static fromName(t){return new G(Pt.fromString(t).popFirst(5))}static empty(){return new G(Pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Pt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new Pt(t.slice()))}}function q0(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(s===1e9?new Ft(e+1,0):new Ft(e,s));return new ss(i,G.empty(),t)}function W0(n){return new ss(n.readTime,n.key,-1)}class ss{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new ss(Z.min(),G.empty(),-1)}static max(){return new ss(Z.max(),G.empty(),-1)}}function G0(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=G.comparator(n.documentKey,t.documentKey),e!==0?e:gt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==Y0)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new $((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof $?e:$.resolve(e)}catch(e){return $.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):$.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):$.reject(e)}static resolve(t){return new $((e,s)=>{e(t)})}static reject(t){return new $((e,s)=>{s(t)})}static waitFor(t){return new $((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},c=>s(c))}),o=!0,r===i&&e()})}static or(t){let e=$.resolve(!1);for(const s of t)e=e.next(i=>i?$.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new $((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;e(t[l]).next(d=>{o[l]=d,++a,a===r&&s(o)},d=>i(d))}})}static doWhile(t,e){return new $((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}function Q0(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function oo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Wu{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Wu.oe=-1;function lc(n){return n==null}function Da(n){return n===0&&1/n==-1/0}function X0(n){return typeof n=="number"&&Number.isInteger(n)&&!Da(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Gs(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ng(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e){this.comparator=t,this.root=e||ce.EMPTY}insert(t,e){return new $t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(t){return new $t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ce.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new jo(this.root,t,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new jo(this.root,t,this.comparator,!0)}}class jo{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ce{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??ce.RED,this.left=i??ce.EMPTY,this.right=r??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new ce(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ce.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const t=this.left.check();if(t!==this.right.check())throw J();return t+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,s,i,r){return this}insert(t,e,s){return new ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.comparator=t,this.data=new $t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ef(this.data.getIterator())}getIteratorFrom(t){return new Ef(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof ue)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ue(this.comparator);return e.data=t,e}}class Ef{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.fields=t,t.sort(le.comparator)}static empty(){return new Ne([])}unionWith(t){let e=new ue(le.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ii(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Lg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Lg("Invalid base64 string: "+r):r}}(t);return new de(e)}static fromUint8Array(t){const e=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(t);return new de(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return gt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}de.EMPTY_BYTE_STRING=new de("");const J0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(n){if(Tt(!!n),typeof n=="string"){let t=0;const e=J0.exec(n);if(Tt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Gt(n.seconds),nanos:Gt(n.nanos)}}function Gt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bs(n){return typeof n=="string"?de.fromBase64String(n):de.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Yu(n){const t=n.mapValue.fields.__previous_value__;return Gu(t)?Yu(t):t}function Br(n){const t=is(n.mapValue.fields.__local_write_time__.timestampValue);return new Ft(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(t,e,s,i,r,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ur{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ur&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo={mapValue:{}};function Us(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gu(n)?4:ew(n)?9007199254740991:tw(n)?10:11:J()}function ln(n,t){if(n===t)return!0;const e=Us(n);if(e!==Us(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Br(n).isEqual(Br(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=is(i.timestampValue),a=is(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,r){return Bs(i.bytesValue).isEqual(Bs(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,r){return Gt(i.geoPointValue.latitude)===Gt(r.geoPointValue.latitude)&&Gt(i.geoPointValue.longitude)===Gt(r.geoPointValue.longitude)}(n,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Gt(i.integerValue)===Gt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Gt(i.doubleValue),a=Gt(r.doubleValue);return o===a?Da(o)===Da(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Ii(n.arrayValue.values||[],t.arrayValue.values||[],ln);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(wf(o)!==wf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ln(o[c],a[c])))return!1;return!0}(n,t);default:return J()}}function jr(n,t){return(n.values||[]).find(e=>ln(e,t))!==void 0}function Ai(n,t){if(n===t)return 0;const e=Us(n),s=Us(t);if(e!==s)return gt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return gt(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=Gt(r.integerValue||r.doubleValue),c=Gt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return Tf(n.timestampValue,t.timestampValue);case 4:return Tf(Br(n),Br(t));case 5:return gt(n.stringValue,t.stringValue);case 6:return function(r,o){const a=Bs(r),c=Bs(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=gt(a[l],c[l]);if(d!==0)return d}return gt(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=gt(Gt(r.latitude),Gt(o.latitude));return a!==0?a:gt(Gt(r.longitude),Gt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return If(n.arrayValue,t.arrayValue);case 10:return function(r,o){var a,c,l,d;const h=r.fields||{},f=o.fields||{},m=(a=h.value)===null||a===void 0?void 0:a.arrayValue,g=(c=f.value)===null||c===void 0?void 0:c.arrayValue,v=gt(((l=m==null?void 0:m.values)===null||l===void 0?void 0:l.length)||0,((d=g==null?void 0:g.values)===null||d===void 0?void 0:d.length)||0);return v!==0?v:If(m,g)}(n.mapValue,t.mapValue);case 11:return function(r,o){if(r===zo.mapValue&&o===zo.mapValue)return 0;if(r===zo.mapValue)return 1;if(o===zo.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=gt(c[h],d[h]);if(f!==0)return f;const m=Ai(a[c[h]],l[d[h]]);if(m!==0)return m}return gt(c.length,d.length)}(n.mapValue,t.mapValue);default:throw J()}}function Tf(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return gt(n,t);const e=is(n),s=is(t),i=gt(e.seconds,s.seconds);return i!==0?i:gt(e.nanos,s.nanos)}function If(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=Ai(e[i],s[i]);if(r)return r}return gt(e.length,s.length)}function ki(n){return Jl(n)}function Jl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=is(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Bs(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return G.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=Jl(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Jl(e.fields[o])}`;return i+"}"}(n.mapValue):J()}function Af(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Zl(n){return!!n&&"integerValue"in n}function Ku(n){return!!n&&"arrayValue"in n}function kf(n){return!!n&&"nullValue"in n}function Sf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function da(n){return!!n&&"mapValue"in n}function tw(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ar(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Gs(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Ar(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ar(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ew(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.value=t}static empty(){return new Pe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!da(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ar(e)}setAll(t){let e=le.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=Ar(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());da(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ln(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];da(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){Gs(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new Pe(Ar(this.value))}}function Vg(n){const t=[];return Gs(n.fields,(e,s)=>{const i=new le([e]);if(da(s)){const r=Vg(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Ne(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new xe(t,0,Z.min(),Z.min(),Z.min(),Pe.empty(),0)}static newFoundDocument(t,e,s,i){return new xe(t,1,e,Z.min(),s,i,0)}static newNoDocument(t,e){return new xe(t,2,e,Z.min(),Z.min(),Pe.empty(),0)}static newUnknownDocument(t,e){return new xe(t,3,e,Z.min(),Z.min(),Pe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oa{constructor(t,e){this.position=t,this.inclusive=e}}function Cf(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),e.key):s=Ai(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Rf(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ln(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class zr{constructor(t,e="asc"){this.field=t,this.dir=e}}function nw(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Fg{}class Jt extends Fg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new iw(t,e,s):e==="array-contains"?new aw(t,s):e==="in"?new cw(t,s):e==="not-in"?new lw(t,s):e==="array-contains-any"?new uw(t,s):new Jt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new rw(t,s):new ow(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ai(e,this.value)):e!==null&&Us(this.value)===Us(e)&&this.matchesComparison(Ai(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends Fg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new We(t,e)}matches(t){return $g(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $g(n){return n.op==="and"}function Bg(n){return sw(n)&&$g(n)}function sw(n){for(const t of n.filters)if(t instanceof We)return!1;return!0}function tu(n){if(n instanceof Jt)return n.field.canonicalString()+n.op.toString()+ki(n.value);if(Bg(n))return n.filters.map(t=>tu(t)).join(",");{const t=n.filters.map(e=>tu(e)).join(",");return`${n.op}(${t})`}}function Ug(n,t){return n instanceof Jt?function(s,i){return i instanceof Jt&&s.op===i.op&&s.field.isEqual(i.field)&&ln(s.value,i.value)}(n,t):n instanceof We?function(s,i){return i instanceof We&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&Ug(o,i.filters[a]),!0):!1}(n,t):void J()}function jg(n){return n instanceof Jt?function(e){return`${e.field.canonicalString()} ${e.op} ${ki(e.value)}`}(n):n instanceof We?function(e){return e.op.toString()+" {"+e.getFilters().map(jg).join(" ,")+"}"}(n):"Filter"}class iw extends Jt{constructor(t,e,s){super(t,e,s),this.key=G.fromName(s.referenceValue)}matches(t){const e=G.comparator(t.key,this.key);return this.matchesComparison(e)}}class rw extends Jt{constructor(t,e){super(t,"in",e),this.keys=zg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ow extends Jt{constructor(t,e){super(t,"not-in",e),this.keys=zg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function zg(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>G.fromName(s.referenceValue))}class aw extends Jt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ku(e)&&jr(e.arrayValue,this.value)}}class cw extends Jt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&jr(this.value.arrayValue,e)}}class lw extends Jt{constructor(t,e){super(t,"not-in",e)}matches(t){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!jr(this.value.arrayValue,e)}}class uw extends Jt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ku(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>jr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function Pf(n,t=null,e=[],s=[],i=null,r=null,o=null){return new dw(n,t,e,s,i,r,o)}function Qu(n){const t=et(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>tu(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),lc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>ki(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>ki(s)).join(",")),t.ue=e}return t.ue}function Xu(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!nw(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ug(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Rf(n.startAt,t.startAt)&&Rf(n.endAt,t.endAt)}function eu(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hw(n,t,e,s,i,r,o,a){return new Vi(n,t,e,s,i,r,o,a)}function Ju(n){return new Vi(n)}function Df(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hg(n){return n.collectionGroup!==null}function kr(n){const t=et(n);if(t.ce===null){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ue(le.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new zr(r,s))}),e.has(le.keyField().canonicalString())||t.ce.push(new zr(le.keyField(),s))}return t.ce}function sn(n){const t=et(n);return t.le||(t.le=fw(t,kr(n))),t.le}function fw(n,t){if(n.limitType==="F")return Pf(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new zr(i.field,r)});const e=n.endAt?new Oa(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Oa(n.startAt.position,n.startAt.inclusive):null;return Pf(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function nu(n,t){const e=n.filters.concat([t]);return new Vi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ma(n,t,e){return new Vi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function uc(n,t){return Xu(sn(n),sn(t))&&n.limitType===t.limitType}function qg(n){return`${Qu(sn(n))}|lt:${n.limitType}`}function di(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>jg(i)).join(", ")}]`),lc(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>ki(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>ki(i)).join(",")),`Target(${s})`}(sn(n))}; limitType=${n.limitType})`}function dc(n,t){return t.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):G.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,t)&&function(s,i){for(const r of kr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(o,a,c){const l=Cf(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,kr(s),i)||s.endAt&&!function(o,a,c){const l=Cf(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,kr(s),i))}(n,t)}function pw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wg(n){return(t,e)=>{let s=!1;for(const i of kr(n)){const r=mw(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function mw(n,t,e){const s=n.field.isKeyField()?G.comparator(t.key,e.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?Ai(c,l):J()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Gs(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Ng(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new $t(G.comparator);function Pn(){return gw}const Gg=new $t(G.comparator);function _r(...n){let t=Gg;for(const e of n)t=t.insert(e.key,e);return t}function Yg(n){let t=Gg;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Ss(){return Sr()}function Kg(){return Sr()}function Sr(){return new Fi(n=>n.toString(),(n,t)=>n.isEqual(t))}const _w=new $t(G.comparator),yw=new ue(G.comparator);function ct(...n){let t=yw;for(const e of n)t=t.add(e);return t}const vw=new ue(gt);function bw(){return vw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(t)?"-0":t}}function Qg(n){return{integerValue:""+n}}function xw(n,t){return X0(t)?Qg(t):Zu(n,t)}/**
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
 */class hc{constructor(){this._=void 0}}function ww(n,t,e){return n instanceof Na?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Gu(r)&&(r=Yu(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof Hr?Jg(n,t):n instanceof qr?Zg(n,t):function(i,r){const o=Xg(i,r),a=Of(o)+Of(i.Pe);return Zl(o)&&Zl(i.Pe)?Qg(a):Zu(i.serializer,a)}(n,t)}function Ew(n,t,e){return n instanceof Hr?Jg(n,t):n instanceof qr?Zg(n,t):e}function Xg(n,t){return n instanceof La?function(s){return Zl(s)||function(r){return!!r&&"doubleValue"in r}(s)}(t)?t:{integerValue:0}:null}class Na extends hc{}class Hr extends hc{constructor(t){super(),this.elements=t}}function Jg(n,t){const e=t_(t);for(const s of n.elements)e.some(i=>ln(i,s))||e.push(s);return{arrayValue:{values:e}}}class qr extends hc{constructor(t){super(),this.elements=t}}function Zg(n,t){let e=t_(t);for(const s of n.elements)e=e.filter(i=>!ln(i,s));return{arrayValue:{values:e}}}class La extends hc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Of(n){return Gt(n.integerValue||n.doubleValue)}function t_(n){return Ku(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Tw(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof Hr&&i instanceof Hr||s instanceof qr&&i instanceof qr?Ii(s.elements,i.elements,ln):s instanceof La&&i instanceof La?ln(s.Pe,i.Pe):s instanceof Na&&i instanceof Na}(n.transform,t.transform)}class Iw{constructor(t,e){this.version=t,this.transformResults=e}}class Fe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Fe}static exists(t){return new Fe(void 0,t)}static updateTime(t){return new Fe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ha(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class fc{}function e_(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new td(n.key,Fe.none()):new ao(n.key,n.data,Fe.none());{const e=n.data,s=Pe.empty();let i=new ue(le.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new cs(n.key,s,new Ne(i.toArray()),Fe.none())}}function Aw(n,t,e){n instanceof ao?function(i,r,o){const a=i.value.clone(),c=Nf(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof cs?function(i,r,o){if(!ha(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Nf(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(n_(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Cr(n,t,e,s){return n instanceof ao?function(r,o,a,c){if(!ha(r.precondition,o))return a;const l=r.value.clone(),d=Lf(r.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,s):n instanceof cs?function(r,o,a,c){if(!ha(r.precondition,o))return a;const l=Lf(r.fieldTransforms,c,o),d=o.data;return d.setAll(n_(r)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(r,o,a){return ha(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function kw(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=Xg(s.transform,i||null);r!=null&&(e===null&&(e=Pe.empty()),e.set(s.field,r))}return e||null}function Mf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Ii(s,i,(r,o)=>Tw(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ao extends fc{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cs extends fc{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function n_(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Nf(n,t,e){const s=new Map;Tt(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Ew(o,a,e[i]))}return s}function Lf(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,ww(r,o,t))}return s}class td extends fc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sw extends fc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Aw(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Cr(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Cr(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=Kg();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const c=e_(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ct())}isEqual(t){return this.batchId===t.batchId&&Ii(this.mutations,t.mutations,(e,s)=>Mf(e,s))&&Ii(this.baseMutations,t.baseMutations,(e,s)=>Mf(e,s))}}class ed{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){Tt(t.mutations.length===s.length);let i=function(){return _w}();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ed(t,e,s,i)}}/**
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
 */class Rw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Pw{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt,ht;function Dw(n){switch(n){default:return J();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function s_(n){if(n===void 0)return Rn("GRPC error has no .code"),F.UNKNOWN;switch(n){case Xt.OK:return F.OK;case Xt.CANCELLED:return F.CANCELLED;case Xt.UNKNOWN:return F.UNKNOWN;case Xt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Xt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Xt.INTERNAL:return F.INTERNAL;case Xt.UNAVAILABLE:return F.UNAVAILABLE;case Xt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Xt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Xt.NOT_FOUND:return F.NOT_FOUND;case Xt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Xt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Xt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Xt.ABORTED:return F.ABORTED;case Xt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Xt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Xt.DATA_LOSS:return F.DATA_LOSS;default:return J()}}(ht=Xt||(Xt={}))[ht.OK=0]="OK",ht[ht.CANCELLED=1]="CANCELLED",ht[ht.UNKNOWN=2]="UNKNOWN",ht[ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ht[ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ht[ht.NOT_FOUND=5]="NOT_FOUND",ht[ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",ht[ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",ht[ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",ht[ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ht[ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ht[ht.ABORTED=10]="ABORTED",ht[ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",ht[ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",ht[ht.INTERNAL=13]="INTERNAL",ht[ht.UNAVAILABLE=14]="UNAVAILABLE",ht[ht.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ow(){return new TextEncoder}/**
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
 */const Mw=new Rs([4294967295,4294967295],0);function Vf(n){const t=Ow().encode(n),e=new kg;return e.update(t),new Uint8Array(e.digest())}function Ff(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Rs([e,s],0),new Rs([i,r],0)]}class nd{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new yr(`Invalid padding: ${e}`);if(s<0)throw new yr(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new yr(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new yr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Rs.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(Rs.fromNumber(s)));return i.compare(Mw)===1&&(i=new Rs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Vf(t),[s,i]=Ff(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new nd(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Vf(t),[s,i]=Ff(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class yr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,co.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new pc(Z.min(),i,new $t(gt),Pn(),ct())}}class co{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new co(s,e,ct(),ct(),ct())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class i_{constructor(t,e){this.targetId=t,this.me=e}}class r_{constructor(t,e,s=de.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class $f{constructor(){this.fe=0,this.ge=Uf(),this.pe=de.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=ct(),e=ct(),s=ct();return this.ge.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:J()}}),new co(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Uf()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Nw{constructor(t){this.Le=t,this.Be=new Map,this.ke=Pn(),this.qe=Bf(),this.Qe=new $t(gt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:J()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const r=i.target;if(eu(r))if(s===0){const o=new G(r.path);this.Ue(e,o,xe.newNoDocument(o,Z.min()))}else Tt(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,l)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=Bs(s).toUint8Array()}catch(c){if(c instanceof Lg)return Ti("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new nd(o,i,r)}catch(c){return Ti(c instanceof yr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,r,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&eu(a.target)){const c=new G(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,xe.newNoDocument(c,t))}r.be&&(e.set(o,r.ve()),r.Ce())}});let s=ct();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(t));const i=new pc(t,e,this.Qe,this.ke,s);return this.ke=Pn(),this.qe=Bf(),this.Qe=new $t(gt),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new $f,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ue(gt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||W("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new $f),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Bf(){return new $t(G.comparator)}function Uf(){return new $t(G.comparator)}const Lw={asc:"ASCENDING",desc:"DESCENDING"},Vw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fw={and:"AND",or:"OR"};class $w{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function su(n,t){return n.useProto3Json||lc(t)?t:{value:t}}function Va(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function o_(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Bw(n,t){return Va(n,t.toTimestamp())}function rn(n){return Tt(!!n),Z.fromTimestamp(function(e){const s=is(e);return new Ft(s.seconds,s.nanos)}(n))}function sd(n,t){return iu(n,t).canonicalString()}function iu(n,t){const e=function(i){return new Pt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function a_(n){const t=Pt.fromString(n);return Tt(h_(t)),t}function ru(n,t){return sd(n.databaseId,t.path)}function pl(n,t){const e=a_(t);if(e.get(1)!==n.databaseId.projectId)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new G(l_(e))}function c_(n,t){return sd(n.databaseId,t)}function Uw(n){const t=a_(n);return t.length===4?Pt.emptyPath():l_(t)}function ou(n){return new Pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function l_(n){return Tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function jf(n,t,e){return{name:ru(n,t),fields:e.value.mapValue.fields}}function jw(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:J()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(l,d){return l.useProto3Json?(Tt(d===void 0||typeof d=="string"),de.fromBase64String(d||"")):(Tt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),de.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const d=l.code===void 0?F.UNKNOWN:s_(l.code);return new H(d,l.message||"")}(o);e=new r_(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=pl(n,s.document.name),r=rn(s.document.updateTime),o=s.document.createTime?rn(s.document.createTime):Z.min(),a=new Pe({mapValue:{fields:s.document.fields}}),c=xe.newFoundDocument(i,r,o,a),l=s.targetIds||[],d=s.removedTargetIds||[];e=new fa(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=pl(n,s.document),r=s.readTime?rn(s.readTime):Z.min(),o=xe.newNoDocument(i,r),a=s.removedTargetIds||[];e=new fa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=pl(n,s.document),r=s.removedTargetIds||[];e=new fa([],r,i,null)}else{if(!("filter"in t))return J();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Pw(i,r),a=s.targetId;e=new i_(a,o)}}return e}function zw(n,t){let e;if(t instanceof ao)e={update:jf(n,t.key,t.value)};else if(t instanceof td)e={delete:ru(n,t.key)};else if(t instanceof cs)e={update:jf(n,t.key,t.data),updateMask:Jw(t.fieldMask)};else{if(!(t instanceof Sw))return J();e={verify:ru(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Hr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof La)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw J()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Bw(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:J()}(n,t.precondition)),e}function Hw(n,t){return n&&n.length>0?(Tt(t!==void 0),n.map(e=>function(i,r){let o=i.updateTime?rn(i.updateTime):rn(r);return o.isEqual(Z.min())&&(o=rn(r)),new Iw(o,i.transformResults||[])}(e,t))):[]}function qw(n,t){return{documents:[c_(n,t.path)]}}function Ww(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=c_(n,i);const r=function(l){if(l.length!==0)return d_(We.create(l,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(l){if(l.length!==0)return l.map(d=>function(f){return{field:hi(f.field),direction:Kw(f.dir)}}(d))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=su(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{_t:e,parent:i}}function Gw(n){let t=Uw(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){Tt(s===1);const d=e.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let r=[];e.where&&(r=function(h){const f=u_(h);return f instanceof We&&Bg(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(g){return new zr(fi(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,lc(f)?null:f}(e.limit));let c=null;e.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Oa(m,f)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Oa(m,f)}(e.endAt)),hw(t,i,o,r,a,"F",c,l)}function Yw(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function u_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=fi(e.unaryFilter.field);return Jt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=fi(e.unaryFilter.field);return Jt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fi(e.unaryFilter.field);return Jt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fi(e.unaryFilter.field);return Jt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(n):n.fieldFilter!==void 0?function(e){return Jt.create(fi(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return We.create(e.compositeFilter.filters.map(s=>u_(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(n):J()}function Kw(n){return Lw[n]}function Qw(n){return Vw[n]}function Xw(n){return Fw[n]}function hi(n){return{fieldPath:n.canonicalString()}}function fi(n){return le.fromServerFormat(n.fieldPath)}function d_(n){return n instanceof Jt?function(e){if(e.op==="=="){if(Sf(e.value))return{unaryFilter:{field:hi(e.field),op:"IS_NAN"}};if(kf(e.value))return{unaryFilter:{field:hi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Sf(e.value))return{unaryFilter:{field:hi(e.field),op:"IS_NOT_NAN"}};if(kf(e.value))return{unaryFilter:{field:hi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hi(e.field),op:Qw(e.op),value:e.value}}}(n):n instanceof We?function(e){const s=e.getFilters().map(i=>d_(i));return s.length===1?s[0]:{compositeFilter:{op:Xw(e.op),filters:s}}}(n):J()}function Jw(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function h_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,s,i,r=Z.min(),o=Z.min(),a=de.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new qn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t){this.ct=t}}function tE(n){const t=Gw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ma(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.un=new nE}addToCollectionParentIndex(t,e){return this.un.add(e),$.resolve()}getCollectionParents(t,e){return $.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return $.resolve()}deleteFieldIndex(t,e){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,e){return $.resolve()}getDocumentsMatchingTarget(t,e){return $.resolve(null)}getIndexType(t,e){return $.resolve(0)}getFieldIndexes(t,e){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,e){return $.resolve(ss.min())}getMinOffsetFromCollectionGroup(t,e){return $.resolve(ss.min())}updateCollectionGroup(t,e,s){return $.resolve()}updateIndexEntries(t,e){return $.resolve()}}class nE{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new ue(Pt.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new ue(Pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Si(0)}static kn(){return new Si(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.changes=new Fi(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?$.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iE{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&Cr(s.mutation,i,Ne.empty(),Ft.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,ct()).next(()=>s))}getLocalViewOfDocuments(t,e,s=ct()){const i=Ss();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=_r();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=Ss();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,ct()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=Pn();const o=Sr(),a=function(){return Sr()}();return e.forEach((c,l)=>{const d=s.get(l.key);i.has(l.key)&&(d===void 0||d.mutation instanceof cs)?r=r.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Cr(d.mutation,l,d.mutation.getFieldMask(),Ft.now())):o.set(l.key,Ne.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((l,d)=>o.set(l,d)),e.forEach((l,d)=>{var h;return a.set(l,new iE(d,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Sr();let i=new $t((o,a)=>o-a),r=ct();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let d=s.get(c)||Ne.empty();d=a.applyToLocalView(l,d),s.set(c,d);const h=(i.get(a.batchId)||ct()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=Kg();d.forEach(f=>{if(!r.has(f)){const m=e_(e.get(f),s.get(f));m!==null&&h.set(f,m),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return $.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Hg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):$.resolve(Ss());let a=-1,c=r;return o.next(l=>$.forEach(l,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(d)?$.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{c=c.insert(d,f)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,c,l,ct())).next(d=>({batchId:a,changes:Yg(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new G(e)).next(s=>{let i=_r();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=_r();return this.indexManager.getCollectionParents(t,r).next(a=>$.forEach(a,c=>{const l=function(h,f){return new Vi(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,s,i).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i))).next(o=>{r.forEach((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,xe.newInvalidDocument(d)))});let a=_r();return o.forEach((c,l)=>{const d=r.get(c);d!==void 0&&Cr(d.mutation,l,Ne.empty(),Ft.now()),dc(e,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return $.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}}(e)),$.resolve()}getNamedQuery(t,e){return $.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:tE(i.bundledQuery),readTime:rn(i.readTime)}}(e)),$.resolve()}}/**
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
 */class aE{constructor(){this.overlays=new $t(G.comparator),this.Ir=new Map}getOverlay(t,e){return $.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Ss();return $.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.ht(t,e,r)}),$.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),$.resolve()}getOverlaysForCollection(t,e,s){const i=Ss(),r=e.length+1,o=new G(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new $t((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>s){let d=r.get(l.largestBatchId);d===null&&(d=Ss(),r=r.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=Ss(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,d)=>a.set(l,d)),!(a.size()>=i)););return $.resolve(a)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Rw(e,s));let r=this.Ir.get(e);r===void 0&&(r=ct(),this.Ir.set(e,r)),this.Ir.set(e,r.add(s.key))}}/**
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
 */class cE{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this.Tr=new ue(ie.Er),this.dr=new ue(ie.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new ie(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new ie(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new G(new Pt([])),s=new ie(e,t),i=new ie(e,t+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new G(new Pt([])),s=new ie(e,t),i=new ie(e,t+1);let r=ct();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new ie(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class ie{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return G.comparator(t.key,e.key)||gt(t.wr,e.wr)}static Ar(t,e){return gt(t.wr,e.wr)||G.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ue(ie.Er)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cw(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new ie(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(t,e){return $.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),r=i<0?0:i;return $.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new ie(e,0),i=new ie(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),$.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new ue(gt);return e.forEach(i=>{const r=new ie(i,0),o=new ie(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),$.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;G.isDocumentKey(r)||(r=r.child(""));const o=new ie(new G(r),0);let a=new ue(gt);return this.br.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.wr)),!0)},o),$.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Tt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return $.forEach(e.mutations,i=>{const r=new ie(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new ie(e,0),i=this.br.firstAfterOrEqual(s);return $.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t){this.Mr=t,this.docs=function(){return new $t(G.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return $.resolve(s?s.document.mutableCopy():xe.newInvalidDocument(e))}getEntries(t,e){let s=Pn();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():xe.newInvalidDocument(i))}),$.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=Pn();const o=e.path,a=new G(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||G0(W0(d),s)<=0||(i.has(d.key)||dc(e,d))&&(r=r.insert(d.key,d.mutableCopy()))}return $.resolve(r)}getAllFromCollectionGroup(t,e,s,i){J()}Or(t,e){return $.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new dE(this)}getSize(t){return $.resolve(this.size)}}class dE extends sE{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),$.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(t){this.persistence=t,this.Nr=new Fi(e=>Qu(e),Xu),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new id,this.targetCount=0,this.kr=Si.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),$.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Si(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,$.resolve()}updateTargetData(t,e){return this.Kn(e),$.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),$.waitFor(r).next(()=>i)}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return $.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),$.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),$.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),$.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return $.resolve(s)}containsKey(t,e){return $.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Wu(0),this.Kr=!1,this.Kr=!0,this.$r=new cE,this.referenceDelegate=t(this),this.Ur=new hE(this),this.indexManager=new eE,this.remoteDocumentCache=function(i){return new uE(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new Zw(e),this.Gr=new oE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new aE,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new lE(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){W("MemoryPersistence","Starting transaction:",t);const i=new pE(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(t,e){return $.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class pE extends K0{constructor(t){super(),this.currentSequenceNumber=t}}class rd{constructor(t){this.persistence=t,this.Jr=new id,this.Yr=null}static Zr(t){return new rd(t)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),$.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),$.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,s=>{const i=G.fromPath(s);return this.ei(t,i).next(r=>{r||e.removeEntry(i,Z.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return $.or([()=>$.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=ct(),i=ct();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new od(t,e.fromCache,s,i)}}/**
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
 */class mE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _x()?8:Q0(Ee())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.Yi(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(t,e,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new mE;return this.Xi(t,e,o).next(a=>{if(r.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>r.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(nr()<=dt.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",di(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(nr()<=dt.DEBUG&&W("QueryEngine","Query:",di(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(nr()<=dt.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",di(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,sn(e))):$.resolve())}Yi(t,e){if(Df(e))return $.resolve(null);let s=sn(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ma(e,null,"F"),s=sn(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=ct(...r);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ts(e,a);return this.ns(e,l,o,c.readTime)?this.Yi(t,Ma(e,null,"F")):this.rs(t,l,e,c)}))})))}Zi(t,e,s,i){return Df(e)||i.isEqual(Z.min())?$.resolve(null):this.Ji.getDocuments(t,s).next(r=>{const o=this.ts(e,r);return this.ns(e,o,s,i)?$.resolve(null):(nr()<=dt.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),di(e)),this.rs(t,o,e,q0(i,-1)).next(a=>a))})}ts(t,e){let s=new ue(Wg(t));return e.forEach((i,r)=>{dc(t,r)&&(s=s.add(r))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,s){return nr()<=dt.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",di(e)),this.Ji.getDocumentsMatchingQuery(t,e,ss.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new $t(gt),this._s=new Fi(r=>Qu(r),Xu),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new rE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function yE(n,t,e,s){return new _E(n,t,e,s)}async function f_(n,t){const e=et(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=ct();for(const l of i){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of r){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(s,c).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function vE(n,t){const e=et(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,d){const h=l.batch,f=h.keys();let m=$.resolve();return f.forEach(g=>{m=m.next(()=>d.getEntry(c,g)).next(v=>{const y=l.docVersions.get(g);Tt(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),d.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,s,t,r).next(()=>r.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ct();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function p_(n){const t=et(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function bE(n,t){const e=et(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const a=[];t.targetChanges.forEach((d,h)=>{const f=i.get(h);if(!f)return;a.push(e.Ur.removeMatchingKeys(r,d.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(r,d.addedDocuments,h)));let m=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(de.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,s)),i=i.insert(h,m),function(v,y,T){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,m,d)&&a.push(e.Ur.updateTargetData(r,m))});let c=Pn(),l=ct();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,d))}),a.push(xE(r,o,t.documentUpdates).next(d=>{c=d.Ps,l=d.Is})),!s.isEqual(Z.min())){const d=e.Ur.getLastRemoteSnapshotVersion(r).next(h=>e.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(d)}return $.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(e.os=i,r))}function xE(n,t,e){let s=ct(),i=ct();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=Pn();return e.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function wE(n,t){const e=et(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function EE(n,t){const e=et(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(r=>r?(i=r,$.resolve(i)):e.Ur.allocateTargetId(s).next(o=>(i=new qn(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function au(n,t,e){const s=et(n),i=s.os.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!oo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function zf(n,t,e){const s=et(n);let i=Z.min(),r=ct();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,d){const h=et(c),f=h._s.get(d);return f!==void 0?$.resolve(h.os.get(f)):h.Ur.getTargetData(l,d)}(s,o,sn(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?i:Z.min(),e?r:ct())).next(a=>(TE(s,pw(t),a),{documents:a,Ts:r})))}function TE(n,t,e){let s=n.us.get(t)||Z.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.us.set(t,s)}class Hf{constructor(){this.activeTargetIds=bw()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class IE{constructor(){this.so=new Hf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Hf,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ho=null;function ml(){return Ho===null?Ho=function(){return 268435456+Math.round(2147483648*Math.random())}():Ho++,"0x"+Ho.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="WebChannelConnection";class CE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(e,s,i,r,o){const a=ml(),c=this.xo(e,s.toUriEncodedString());W("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,r,o),this.No(e,c,l,i).then(d=>(W("RestConnection",`Received RPC '${e}' ${a}: `,d),d),d=>{throw Ti("RestConnection",`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",i),d})}Lo(e,s,i,r,o,a){return this.Mo(e,s,i,r,o)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Li}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}xo(e,s){const i=kE[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const r=ml();return new Promise((o,a)=>{const c=new Sg;c.setWithCredentials(!0),c.listenOnce(Cg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ua.NO_ERROR:const d=c.getResponseJson();W(ge,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(d)),o(d);break;case ua.TIMEOUT:W(ge,`RPC '${t}' ${r} timed out`),a(new H(F.DEADLINE_EXCEEDED,"Request time out"));break;case ua.HTTP_ERROR:const h=c.getStatus();if(W(ge,`RPC '${t}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const g=function(y){const T=y.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(T)>=0?T:F.UNKNOWN}(m.status);a(new H(g,m.message))}else a(new H(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(F.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{W(ge,`RPC '${t}' ${r} completed.`)}});const l=JSON.stringify(i);W(ge,`RPC '${t}' ${r} sending request:`,i),c.send(e,"POST",l,s,15)})}Bo(t,e,s){const i=ml(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Dg(),a=Pg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const d=r.join("");W(ge,`Creating RPC '${t}' stream ${i}: ${d}`,c);const h=o.createWebChannel(d,c);let f=!1,m=!1;const g=new SE({Io:y=>{m?W(ge,`Not sending because RPC '${t}' stream ${i} is closed:`,y):(f||(W(ge,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),W(ge,`RPC '${t}' stream ${i} sending:`,y),h.send(y))},To:()=>h.close()}),v=(y,T,A)=>{y.listen(T,C=>{try{A(C)}catch(D){setTimeout(()=>{throw D},0)}})};return v(h,gr.EventType.OPEN,()=>{m||(W(ge,`RPC '${t}' stream ${i} transport opened.`),g.yo())}),v(h,gr.EventType.CLOSE,()=>{m||(m=!0,W(ge,`RPC '${t}' stream ${i} transport closed`),g.So())}),v(h,gr.EventType.ERROR,y=>{m||(m=!0,Ti(ge,`RPC '${t}' stream ${i} transport errored:`,y),g.So(new H(F.UNAVAILABLE,"The operation could not be completed")))}),v(h,gr.EventType.MESSAGE,y=>{var T;if(!m){const A=y.data[0];Tt(!!A);const C=A,D=C.error||((T=C[0])===null||T===void 0?void 0:T.error);if(D){W(ge,`RPC '${t}' stream ${i} received error:`,D);const P=D.status;let O=function(x){const I=Xt[x];if(I!==void 0)return s_(I)}(P),w=D.message;O===void 0&&(O=F.INTERNAL,w="Unknown error status: "+P+" with message "+D.message),m=!0,g.So(new H(O,w)),h.close()}else W(ge,`RPC '${t}' stream ${i} received:`,A),g.bo(A)}}),v(a,Rg.STAT_EVENT,y=>{y.stat===Xl.PROXY?W(ge,`RPC '${t}' stream ${i} detected buffering proxy`):y.stat===Xl.NOPROXY&&W(ge,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(n){return new $w(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t,e,s=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t,e,s,i,r,o,a,c){this.ui=t,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new m_(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===F.RESOURCE_EXHAUSTED?(Rn(e.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new H(F.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return W("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RE extends g_{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=jw(this.serializer,t),s=function(r){if(!("targetChange"in r))return Z.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?rn(o.readTime):Z.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=ou(this.serializer),e.addTarget=function(r,o){let a;const c=o.target;if(a=eu(c)?{documents:qw(r,c)}:{query:Ww(r,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=o_(r,o.resumeToken);const l=su(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Va(r,o.snapshotVersion.toTimestamp());const l=su(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const s=Yw(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=ou(this.serializer),e.removeTarget=t,this.a_(e)}}class PE extends g_{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Tt(!!t.streamToken),this.lastStreamToken=t.streamToken,Tt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Hw(t.writeResults,t.commitTime),s=rn(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=ou(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>zw(this.serializer,s))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(t,iu(e,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(F.UNKNOWN,r.toString())})}Lo(t,e,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,iu(e,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class OE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rn(e),this.D_=!1):W("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{Ys(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=et(c);l.L_.add(4),await lo(l),l.q_.set("Unknown"),l.L_.delete(4),await gc(l)}(this))})}),this.q_=new OE(s,i)}}async function gc(n){if(Ys(n))for(const t of n.B_)await t(!0)}async function lo(n){for(const t of n.B_)await t(!1)}function __(n,t){const e=et(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ud(e)?ld(e):$i(e).r_()&&cd(e,t))}function ad(n,t){const e=et(n),s=$i(e);e.N_.delete(t),s.r_()&&y_(e,t),e.N_.size===0&&(s.r_()?s.o_():Ys(e)&&e.q_.set("Unknown"))}function cd(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}$i(n).A_(t)}function y_(n,t){n.Q_.xe(t),$i(n).R_(t)}function ld(n){n.Q_=new Nw({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),$i(n).start(),n.q_.v_()}function ud(n){return Ys(n)&&!$i(n).n_()&&n.N_.size>0}function Ys(n){return et(n).L_.size===0}function v_(n){n.Q_=void 0}async function NE(n){n.q_.set("Online")}async function LE(n){n.N_.forEach((t,e)=>{cd(n,t)})}async function VE(n,t){v_(n),ud(n)?(n.q_.M_(t),ld(n)):n.q_.set("Unknown")}async function FE(n,t,e){if(n.q_.set("Online"),t instanceof r_&&t.state===2&&t.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,t)}catch(s){W("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Fa(n,s)}else if(t instanceof fa?n.Q_.Ke(t):t instanceof i_?n.Q_.He(t):n.Q_.We(t),!e.isEqual(Z.min()))try{const s=await p_(n.localStore);e.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=r.N_.get(l);d&&r.N_.set(l,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const d=r.N_.get(c);if(!d)return;r.N_.set(c,d.withResumeToken(de.EMPTY_BYTE_STRING,d.snapshotVersion)),y_(r,c);const h=new qn(d.target,c,l,d.sequenceNumber);cd(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){W("RemoteStore","Failed to raise snapshot:",s),await Fa(n,s)}}async function Fa(n,t,e){if(!oo(t))throw t;n.L_.add(1),await lo(n),n.q_.set("Offline"),e||(e=()=>p_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await gc(n)})}function b_(n,t){return t().catch(e=>Fa(n,e,t))}async function _c(n){const t=et(n),e=rs(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;$E(t);)try{const i=await wE(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,BE(t,i)}catch(i){await Fa(t,i)}x_(t)&&w_(t)}function $E(n){return Ys(n)&&n.O_.length<10}function BE(n,t){n.O_.push(t);const e=rs(n);e.r_()&&e.V_&&e.m_(t.mutations)}function x_(n){return Ys(n)&&!rs(n).n_()&&n.O_.length>0}function w_(n){rs(n).start()}async function UE(n){rs(n).p_()}async function jE(n){const t=rs(n);for(const e of n.O_)t.m_(e.mutations)}async function zE(n,t,e){const s=n.O_.shift(),i=ed.from(s,t,e);await b_(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await _c(n)}async function HE(n,t){t&&rs(n).V_&&await async function(s,i){if(function(o){return Dw(o)&&o!==F.ABORTED}(i.code)){const r=s.O_.shift();rs(s).s_(),await b_(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await _c(s)}}(n,t),x_(n)&&w_(n)}async function Wf(n,t){const e=et(n);e.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const s=Ys(e);e.L_.add(3),await lo(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await gc(e)}async function qE(n,t){const e=et(n);t?(e.L_.delete(2),await gc(e)):t||(e.L_.add(2),await lo(e),e.q_.set("Unknown"))}function $i(n){return n.K_||(n.K_=function(e,s,i){const r=et(e);return r.w_(),new RE(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:NE.bind(null,n),Ro:LE.bind(null,n),mo:VE.bind(null,n),d_:FE.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),ud(n)?ld(n):n.q_.set("Unknown")):(await n.K_.stop(),v_(n))})),n.K_}function rs(n){return n.U_||(n.U_=function(e,s,i){const r=et(e);return r.w_(),new PE(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:UE.bind(null,n),mo:HE.bind(null,n),f_:jE.bind(null,n),g_:zE.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await _c(n)):(await n.U_.stop(),n.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new dd(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(F.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hd(n,t){if(Rn("AsyncQueue",`${t}: ${n}`),oo(n))return new H(F.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t){this.comparator=t?(e,s)=>t(e,s)||G.comparator(e.key,s.key):(e,s)=>G.comparator(e.key,s.key),this.keyedMap=_r(),this.sortedSet=new $t(this.comparator)}static emptySet(t){return new vi(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof vi)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new vi;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.W_=new $t(G.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):J():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Ci{constructor(t,e,s,i,r,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Ci(t,e,vi.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&uc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class GE{constructor(){this.queries=Yf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=et(e),r=i.queries;i.queries=Yf(),r.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new H(F.ABORTED,"Firestore shutting down"))}}function Yf(){return new Fi(n=>qg(n),uc)}async function E_(n,t){const e=et(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.H_()&&t.J_()&&(s=2):(r=new WE,s=t.J_()?0:1);try{switch(s){case 0:r.z_=await e.onListen(i,!0);break;case 1:r.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=hd(o,`Initialization of query '${di(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.j_.push(t),t.Z_(e.onlineState),r.z_&&t.X_(r.z_)&&fd(e)}async function T_(n,t){const e=et(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.j_.indexOf(t);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=t.J_()?0:1:!r.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function YE(n,t){const e=et(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&fd(e)}function KE(n,t,e){const s=et(n),i=s.queries.get(t);if(i)for(const r of i.j_)r.onError(e);s.queries.delete(t)}function fd(n){n.Y_.forEach(t=>{t.next()})}var cu,Kf;(Kf=cu||(cu={})).ea="default",Kf.Cache="cache";class I_{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Ci(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ci.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==cu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t){this.key=t}}class k_{constructor(t){this.key=t}}class QE{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ct(),this.mutatedKeys=ct(),this.Aa=Wg(t),this.Ra=new vi(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new Gf,i=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,h)=>{const f=i.get(d),m=dc(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let y=!1;f&&m?f.data.isEqual(m.data)?g!==v&&(s.track({type:3,doc:m}),y=!0):this.ga(f,m)||(s.track({type:2,doc:m}),y=!0,(c&&this.Aa(m,c)>0||l&&this.Aa(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),y=!0):f&&!m&&(s.track({type:1,doc:f}),y=!0,(c||l)&&(a=!0)),y&&(m?(o=o.add(m),r=v?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((d,h)=>function(m,g){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return v(m)-v(g)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(s),i=i!=null&&i;const a=e&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,l=c!==this.Ea;return this.Ea=c,o.length!==0||l?{snapshot:new Ci(this.query,t.Ra,r,o,t.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Gf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=ct(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new k_(s))}),this.da.forEach(s=>{t.has(s)||e.push(new A_(s))}),e}ba(t){this.Ta=t.Ts,this.da=ct();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ci.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class XE{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class JE{constructor(t){this.key=t,this.va=!1}}class ZE{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Fi(a=>qg(a),uc),this.Ma=new Map,this.xa=new Set,this.Oa=new $t(G.comparator),this.Na=new Map,this.La=new id,this.Ba={},this.ka=new Map,this.qa=Si.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function tT(n,t,e=!0){const s=O_(n);let i;const r=s.Fa.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await S_(s,t,e,!0),i}async function eT(n,t){const e=O_(n);await S_(e,t,!0,!1)}async function S_(n,t,e,s){const i=await EE(n.localStore,sn(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await nT(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&__(n.remoteStore,i),a}async function nT(n,t,e,s,i){n.Ka=(h,f,m)=>async function(v,y,T,A){let C=y.view.ma(T);C.ns&&(C=await zf(v.localStore,y.query,!1).then(({documents:w})=>y.view.ma(w,C)));const D=A&&A.targetChanges.get(y.targetId),P=A&&A.targetMismatches.get(y.targetId)!=null,O=y.view.applyChanges(C,v.isPrimaryClient,D,P);return Xf(v,y.targetId,O.wa),O.snapshot}(n,h,f,m);const r=await zf(n.localStore,t,!0),o=new QE(t,r.Ts),a=o.ma(r.documents),c=co.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);Xf(n,e,l.wa);const d=new XE(t,e,o);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),l.snapshot}async function sT(n,t,e){const s=et(n),i=s.Fa.get(t),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!uc(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await au(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&ad(s.remoteStore,i.targetId),lu(s,i.targetId)}).catch(ro)):(lu(s,i.targetId),await au(s.localStore,i.targetId,!0))}async function iT(n,t){const e=et(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),ad(e.remoteStore,s.targetId))}async function rT(n,t,e){const s=hT(n);try{const i=await function(o,a){const c=et(o),l=Ft.now(),d=a.reduce((m,g)=>m.add(g.key),ct());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=Pn(),v=ct();return c.cs.getEntries(m,d).next(y=>{g=y,g.forEach((T,A)=>{A.isValidDocument()||(v=v.add(T))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,g)).next(y=>{h=y;const T=[];for(const A of a){const C=kw(A,h.get(A.key).overlayedDocument);C!=null&&T.push(new cs(A.key,C,Vg(C.value.mapValue),Fe.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,T,a)}).next(y=>{f=y;const T=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,y.batchId,T)})}).then(()=>({batchId:f.batchId,changes:Yg(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.Ba[o.currentUser.toKey()];l||(l=new $t(gt)),l=l.insert(a,c),o.Ba[o.currentUser.toKey()]=l}(s,i.batchId,e),await uo(s,i.changes),await _c(s.remoteStore)}catch(i){const r=hd(i,"Failed to persist write");e.reject(r)}}async function C_(n,t){const e=et(n);try{const s=await bE(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.Na.get(r);o&&(Tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Tt(o.va):i.removedDocuments.size>0&&(Tt(o.va),o.va=!1))}),await uo(e,s,t)}catch(s){await ro(s)}}function Qf(n,t,e){const s=et(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=et(o);c.onlineState=a;let l=!1;c.queries.forEach((d,h)=>{for(const f of h.j_)f.Z_(a)&&(l=!0)}),l&&fd(c)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function oT(n,t,e){const s=et(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),r=i&&i.key;if(r){let o=new $t(G.comparator);o=o.insert(r,xe.newNoDocument(r,Z.min()));const a=ct().add(r),c=new pc(Z.min(),new Map,new $t(gt),o,a);await C_(s,c),s.Oa=s.Oa.remove(r),s.Na.delete(t),pd(s)}else await au(s.localStore,t,!1).then(()=>lu(s,t,e)).catch(ro)}async function aT(n,t){const e=et(n),s=t.batch.batchId;try{const i=await vE(e.localStore,t);P_(e,s,null),R_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await uo(e,i)}catch(i){await ro(i)}}async function cT(n,t,e){const s=et(n);try{const i=await function(o,a){const c=et(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Tt(h!==null),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>c.localDocuments.getDocuments(l,d))})}(s.localStore,t);P_(s,t,e),R_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await uo(s,i)}catch(i){await ro(i)}}function R_(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function P_(n,t,e){const s=et(n);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function lu(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||D_(n,s)})}function D_(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ad(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),pd(n))}function Xf(n,t,e){for(const s of e)s instanceof A_?(n.La.addReference(s.key,t),lT(n,s)):s instanceof k_?(W("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||D_(n,s.key)):J()}function lT(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(W("SyncEngine","New document in limbo: "+e),n.xa.add(s),pd(n))}function pd(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new G(Pt.fromString(t)),s=n.qa.next();n.Na.set(s,new JE(e)),n.Oa=n.Oa.insert(e,s),__(n.remoteStore,new qn(sn(Ju(e.path)),s,"TargetPurposeLimboResolution",Wu.oe))}}async function uo(n,t,e){const s=et(n),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(l=>{var d;if((l||e)&&s.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){i.push(l);const h=od.Wi(c.targetId,l);r.push(h)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(c,l){const d=et(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>$.forEach(l,f=>$.forEach(f.$i,m=>d.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>$.forEach(f.Ui,m=>d.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!oo(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=d.os.get(f),g=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(g);d.os=d.os.insert(f,v)}}}(s.localStore,r))}async function uT(n,t){const e=et(n);if(!e.currentUser.isEqual(t)){W("SyncEngine","User change. New user:",t.toKey());const s=await f_(e.localStore,t);e.currentUser=t,function(r,o){r.ka.forEach(a=>{a.forEach(c=>{c.reject(new H(F.CANCELLED,o))})}),r.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await uo(e,s.hs)}}function dT(n,t){const e=et(n),s=e.Na.get(t);if(s&&s.va)return ct().add(s.key);{let i=ct();const r=e.Ma.get(t);if(!r)return i;for(const o of r){const a=e.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function O_(n){const t=et(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=C_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oT.bind(null,t),t.Ca.d_=YE.bind(null,t.eventManager),t.Ca.$a=KE.bind(null,t.eventManager),t}function hT(n){const t=et(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=aT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cT.bind(null,t),t}class $a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=mc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return yE(this.persistence,new gE,t.initialUser,this.serializer)}Ga(t){return new fE(rd.Zr,this.serializer)}Wa(t){return new IE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$a.provider={build:()=>new $a};class uu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uT.bind(null,this.syncEngine),await qE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new GE}()}createDatastore(t){const e=mc(t.databaseInfo.databaseId),s=function(r){return new CE(r)}(t.databaseInfo);return function(r,o,a,c){return new DE(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,r,o,a){return new ME(s,i,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Qf(this.syncEngine,e,0),function(){return qf.D()?new qf:new AE}())}createSyncEngine(t,e){return function(i,r,o,a,c,l,d){const h=new ZE(i,r,o,a,c,l);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const r=et(i);W("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await lo(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}uu.provider={build:()=>new uu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class M_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Rn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=ve.UNAUTHENTICATED,this.clientId=Mg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=hd(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function _l(n,t){n.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await f_(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Jf(n,t){n.asyncQueue.verifyOperationInProgress();const e=await pT(n);W("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>Wf(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Wf(t.remoteStore,i)),n._onlineComponents=t}async function pT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await _l(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ti("Error using user provided cache. Falling back to memory cache: "+e),await _l(n,new $a)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await _l(n,new $a);return n._offlineComponents}async function N_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Jf(n,n._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Jf(n,new uu))),n._onlineComponents}function mT(n){return N_(n).then(t=>t.syncEngine)}async function L_(n){const t=await N_(n),e=t.eventManager;return e.onListen=tT.bind(null,t.syncEngine),e.onUnlisten=sT.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=eT.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=iT.bind(null,t.syncEngine),e}function gT(n,t,e={}){const s=new kn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const d=new M_({next:f=>{d.Za(),o.enqueueAndForget(()=>T_(r,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new H(F.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new H(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new I_(Ju(a.path),d,{includeMetadataChanges:!0,_a:!0});return E_(r,h)}(await L_(n),n.asyncQueue,t,e,s)),s.promise}function _T(n,t,e={}){const s=new kn;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const d=new M_({next:f=>{d.Za(),o.enqueueAndForget(()=>T_(r,h)),f.fromCache&&c.source==="server"?l.reject(new H(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new I_(a,d,{includeMetadataChanges:!0,_a:!0});return E_(r,h)}(await L_(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function V_(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n,t,e){if(!e)throw new H(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function yT(n,t,e,s){if(t===!0&&s===!0)throw new H(F.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function tp(n){if(!G.isDocumentKey(n))throw new H(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ep(n){if(G.isDocumentKey(n))throw new H(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function yc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":J()}function Ge(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new H(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=yc(n);throw new H(F.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function vT(n,t){if(t<=0)throw new H(F.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new H(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new H(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V_((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vc{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new np({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new H(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new np(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new L0;switch(s.type){case"firstParty":return new B0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new H(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Zf.get(e);s&&(W("ComponentProvider","Removing Datastore"),Zf.delete(e),s.terminate())}(this),Promise.resolve()}}function bT(n,t,e,s={}){var i;const r=(n=Ge(n,vc))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ve.MOCK_USER;else{a=xg(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new H(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ve(l)}n._authCredentials=new V0(new Og(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ls(this.firestore,t,this._query)}}class Se{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Se(this.firestore,t,this._key)}}class Zn extends ls{constructor(t,e,s){super(t,e,Ju(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Se(this.firestore,null,new G(t))}withConverter(t){return new Zn(this.firestore,t,this._path)}}function yt(n,t,...e){if(n=Ht(n),F_("collection","path",t),n instanceof vc){const s=Pt.fromString(t,...e);return ep(s),new Zn(n,null,s)}{if(!(n instanceof Se||n instanceof Zn))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Pt.fromString(t,...e));return ep(s),new Zn(n.firestore,null,s)}}function ne(n,t,...e){if(n=Ht(n),arguments.length===1&&(t=Mg.newId()),F_("doc","path",t),n instanceof vc){const s=Pt.fromString(t,...e);return tp(s),new Se(n,null,new G(s))}{if(!(n instanceof Se||n instanceof Zn))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Pt.fromString(t,...e));return tp(s),new Se(n.firestore,n instanceof Zn?n.converter:null,new G(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new m_(this,"async_queue_retry"),this.Vu=()=>{const s=gl();s&&W("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=gl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=gl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!oo(t))throw t;W("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Rn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=dd.createAndSchedule(this,t,e,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ks extends vc{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new sp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new sp(t),this._firestoreClient=void 0,await t}}}function xT(n,t){const e=typeof n=="object"?n:Hu(),s=typeof n=="string"?n:"(default)",i=cc(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=yg("firestore");r&&bT(i,...r)}return i}function md(n){if(n._terminated)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wT(n),n._firestoreClient}function wT(n){var t,e,s;const i=n._freezeSettings(),r=function(a,c,l,d){return new Z0(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,V_(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new fT(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ri(de.fromBase64String(t))}catch(e){throw new H(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ri(de.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new H(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new H(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new H(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return gt(this._lat,t._lat)||gt(this._long,t._long)}}/**
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
 */class yd{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=/^__.*__$/;class TT{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new cs(t,this.data,this.fieldMask,e,this.fieldTransforms):new ao(t,this.data,e,this.fieldTransforms)}}class $_{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new cs(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function B_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class vd{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new vd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ba(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(B_(this.Cu)&&ET.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class IT{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||mc(t)}Qu(t,e,s,i=!1){return new vd({Cu:t,methodName:e,qu:s,path:le.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xc(n){const t=n._freezeSettings(),e=mc(n._databaseId);return new IT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function U_(n,t,e,s,i,r={}){const o=n.Qu(r.merge||r.mergeFields?2:0,t,e,i);bd("Data must be an object, but it was:",o,s);const a=j_(s,o);let c,l;if(r.merge)c=new Ne(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const h of r.mergeFields){const f=du(t,h,e);if(!o.contains(f))throw new H(F.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);H_(d,f)||d.push(f)}c=new Ne(d),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new TT(new Pe(a),c,l)}class wc extends gd{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof wc}}function AT(n,t,e,s){const i=n.Qu(1,t,e);bd("Data must be an object, but it was:",i,s);const r=[],o=Pe.empty();Gs(s,(c,l)=>{const d=xd(t,c,e);l=Ht(l);const h=i.Nu(d);if(l instanceof wc)r.push(d);else{const f=ho(l,h);f!=null&&(r.push(d),o.set(d,f))}});const a=new Ne(r);return new $_(o,a,i.fieldTransforms)}function kT(n,t,e,s,i,r){const o=n.Qu(1,t,e),a=[du(t,s,e)],c=[i];if(r.length%2!=0)throw new H(F.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(du(t,r[f])),c.push(r[f+1]);const l=[],d=Pe.empty();for(let f=a.length-1;f>=0;--f)if(!H_(l,a[f])){const m=a[f];let g=c[f];g=Ht(g);const v=o.Nu(m);if(g instanceof wc)l.push(m);else{const y=ho(g,v);y!=null&&(l.push(m),d.set(m,y))}}const h=new Ne(l);return new $_(d,h,o.fieldTransforms)}function ST(n,t,e,s=!1){return ho(e,n.Qu(s?4:3,t))}function ho(n,t){if(z_(n=Ht(n)))return bd("Unsupported field value:",t,n),j_(n,t);if(n instanceof gd)return function(s,i){if(!B_(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=ho(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,t)}return function(s,i){if((s=Ht(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return xw(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ft.fromDate(s);return{timestampValue:Va(i.serializer,r)}}if(s instanceof Ft){const r=new Ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Va(i.serializer,r)}}if(s instanceof _d)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ri)return{bytesValue:o_(i.serializer,s._byteString)};if(s instanceof Se){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:sd(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof yd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Zu(a.serializer,c)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${yc(s)}`)}(n,t)}function j_(n,t){const e={};return Ng(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gs(n,(s,i)=>{const r=ho(i,t.Mu(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function z_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ft||n instanceof _d||n instanceof Ri||n instanceof Se||n instanceof gd||n instanceof yd)}function bd(n,t,e){if(!z_(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=yc(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function du(n,t,e){if((t=Ht(t))instanceof bc)return t._internalPath;if(typeof t=="string")return xd(n,t);throw Ba("Field path arguments must be of type string or ",n,!1,void 0,e)}const CT=new RegExp("[~\\*/\\[\\]]");function xd(n,t,e){if(t.search(CT)>=0)throw Ba(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new bc(...t.split("."))._internalPath}catch{throw Ba(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ba(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new H(F.INVALID_ARGUMENT,a+n+c)}function H_(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new RT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ec("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class RT extends q_{data(){return super.data()}}function Ec(n,t){return typeof t=="string"?xd(n,t):t instanceof bc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wd{}class Ed extends wd{}function te(n,t,...e){let s=[];t instanceof wd&&s.push(t),s=s.concat(e),function(r){const o=r.filter(c=>c instanceof Td).length,a=r.filter(c=>c instanceof Tc).length;if(o>1||o>0&&a>0)throw new H(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Tc extends Ed{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Tc(t,e,s)}_apply(t){const e=this._parse(t);return W_(t._query,e),new ls(t.firestore,t.converter,nu(t._query,e))}_parse(t){const e=xc(t.firestore);return function(r,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){rp(h,d);const m=[];for(const g of h)m.push(ip(c,r,g));f={arrayValue:{values:m}}}else f=ip(c,r,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||rp(h,d),f=ST(a,o,h,d==="in"||d==="not-in");return Jt.create(l,d,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Ct(n,t,e){const s=t,i=Ec("where",n);return Tc._create(i,s,e)}class Td extends wd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Td(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:We.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)W_(o,c),o=nu(o,c)}(t._query,e),new ls(t.firestore,t.converter,nu(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Id extends Ed{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Id(t,e)}_apply(t){const e=function(i,r,o){if(i.startAt!==null)throw new H(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zr(r,o)}(t._query,this._field,this._direction);return new ls(t.firestore,t.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new Vi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function hu(n,t="asc"){const e=t,s=Ec("orderBy",n);return Id._create(s,e)}class Ad extends Ed{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new Ad(t,e,s)}_apply(t){return new ls(t.firestore,t.converter,Ma(t._query,this._limit,this._limitType))}}function pa(n){return vT("limit",n),Ad._create("limit",n,"F")}function ip(n,t,e){if(typeof(e=Ht(e))=="string"){if(e==="")throw new H(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hg(t)&&e.indexOf("/")!==-1)throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(Pt.fromString(e));if(!G.isDocumentKey(s))throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Af(n,new G(s))}if(e instanceof Se)return Af(n,e._key);throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yc(e)}.`)}function rp(n,t){if(!Array.isArray(n)||n.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function W_(n,t){const e=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class DT{convertValue(t,e="none"){switch(Us(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Gt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Bs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw J()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return Gs(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertVectorValue(t){var e,s,i;const r=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>Gt(o.doubleValue));return new yd(r)}convertGeoPoint(t){return new _d(Gt(t.latitude),Gt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=Yu(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(Br(t));default:return null}}convertTimestamp(t){const e=is(t);return new Ft(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Pt.fromString(t);Tt(h_(s));const i=new Ur(s.get(1),s.get(3)),r=new G(s.popFirst(5));return i.isEqual(e)||Rn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Y_ extends q_{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Ec("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class ma extends Y_{data(t={}){return super.data(t)}}class OT{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new vr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new ma(this._firestore,this._userDataWriter,s.key,s,new vr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new H(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new ma(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new ma(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:MT(a.type),doc:c,oldIndex:l,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function MT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n){n=Ge(n,Se);const t=Ge(n.firestore,Ks);return gT(md(t),n._key).then(e=>LT(t,n,e))}class K_ extends DT{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ri(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Se(this.firestore,null,e)}}function mt(n){n=Ge(n,ls);const t=Ge(n.firestore,Ks),e=md(t),s=new K_(t);return PT(n._query),_T(e,n._query).then(i=>new OT(t,s,n,i))}function NT(n,t,e){n=Ge(n,Se);const s=Ge(n.firestore,Ks),i=G_(n.converter,t);return Ic(s,[U_(xc(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Fe.none())])}function He(n,t,e,...s){n=Ge(n,Se);const i=Ge(n.firestore,Ks),r=xc(i);let o;return o=typeof(t=Ht(t))=="string"||t instanceof bc?kT(r,"updateDoc",n._key,t,e,s):AT(r,"updateDoc",n._key,t),Ic(i,[o.toMutation(n._key,Fe.exists(!0))])}function Q_(n){return Ic(Ge(n.firestore,Ks),[new td(n._key,Fe.none())])}function Bi(n,t){const e=Ge(n.firestore,Ks),s=ne(n),i=G_(n.converter,t);return Ic(e,[U_(xc(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Fe.exists(!1))]).then(()=>s)}function Ic(n,t){return function(s,i){const r=new kn;return s.asyncQueue.enqueueAndForget(async()=>rT(await mT(s),i,r)),r.promise}(md(n),t)}function LT(n,t,e){const s=e.docs.get(t._key),i=new K_(n);return new Y_(n,i,t._key,s,new vr(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Li=i})(Ws),Fs(new ns("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ks(new F0(s.getProvider("auth-internal")),new j0(s.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new H(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(l.options.projectId,d)}(o,i),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),nn(xf,"4.7.3",t),nn(xf,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="firebasestorage.googleapis.com",J_="storageBucket",VT=2*60*1e3,FT=10*60*1e3,$T=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends dn{constructor(t,e,s=0){super(yl(t),`Firebase Storage: ${e} (${yl(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return yl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ot||(Ot={}));function yl(n){return"storage/"+n}function kd(){const n="An unknown error occurred, please check the error payload for server response.";return new Bt(Ot.UNKNOWN,n)}function BT(n){return new Bt(Ot.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function UT(n){return new Bt(Ot.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function jT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Bt(Ot.UNAUTHENTICATED,n)}function zT(){return new Bt(Ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function HT(n){return new Bt(Ot.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Z_(){return new Bt(Ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ty(){return new Bt(Ot.CANCELED,"User canceled the upload/download.")}function qT(n){return new Bt(Ot.INVALID_URL,"Invalid URL '"+n+"'.")}function WT(n){return new Bt(Ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function GT(){return new Bt(Ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+J_+"' property when initializing the app?")}function ey(){return new Bt(Ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function YT(){return new Bt(Ot.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function KT(){return new Bt(Ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QT(n){return new Bt(Ot.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fu(n){return new Bt(Ot.INVALID_ARGUMENT,n)}function ny(){return new Bt(Ot.APP_DELETED,"The Firebase app was deleted.")}function XT(n){return new Bt(Ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Rr(n,t){return new Bt(Ot.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function sr(n){throw new Bt(Ot.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Le.makeFromUrl(t,e)}catch{return new Le(t,"")}if(s.path==="")return s;throw WT(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${d}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},v=e===X_?"(?:storage.googleapis.com|storage.cloud.google.com)":e,y="([^?#]*)",T=new RegExp(`^https?://${v}/${i}/${y}`,"i"),C=[{regex:a,indices:c,postModify:r},{regex:m,indices:g,postModify:l},{regex:T,indices:{bucket:1,path:2},postModify:l}];for(let D=0;D<C.length;D++){const P=C[D],O=P.regex.exec(t);if(O){const w=O[P.indices.bucket];let b=O[P.indices.path];b||(b=""),s=new Le(w,b),P.postModify(s);break}}if(s==null)throw qT(t);return s}}class JT{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(...y){l||(l=!0,t.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,n(m,c())},y)}function f(){r&&clearTimeout(r)}function m(y,...T){if(l){f();return}if(y){f(),d.call(null,y,...T);return}if(c()||o){f(),d.call(null,y,...T);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,h(C)}let g=!1;function v(y){g||(g=!0,f(),!l&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},e),v}function tI(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n){return n!==void 0}function nI(n){return typeof n=="function"}function sI(n){return typeof n=="object"&&!Array.isArray(n)}function Ac(n){return typeof n=="string"||n instanceof String}function op(n){return Sd()&&n instanceof Blob}function Sd(){return typeof Blob<"u"}function ap(n,t,e,s){if(s<t)throw fu(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw fu(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function sy(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var Ps;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ps||(Ps={}));/**
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
 */function iy(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=t.indexOf(n)!==-1;return e||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(t,e,s,i,r,o,a,c,l,d,h,f=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new qo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ps.NO_ERROR,c=r.getStatus();if(!a||iy(c,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===Ps.ABORT;s(!1,new qo(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new qo(l,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());eI(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=kd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?ny():ty();o(c)}else{const c=Z_();o(c)}};this.canceled_?e(!1,new qo(!1,null,!0)):this.backoffId_=ZT(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&tI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qo{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function rI(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function oI(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function aI(n,t){t&&(n["X-Firebase-GMPID"]=t)}function cI(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function lI(n,t,e,s,i,r,o=!0){const a=sy(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return aI(l,t),rI(l,e),oI(l,r),cI(l,s),new iI(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function dI(...n){const t=uI();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(Sd())return new Blob(n);throw new Bt(Ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hI(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function fI(n){if(typeof atob>"u")throw QT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vl{constructor(t,e){this.data=t,this.contentType=e||null}}function pI(n,t){switch(n){case en.RAW:return new vl(ry(t));case en.BASE64:case en.BASE64URL:return new vl(oy(n,t));case en.DATA_URL:return new vl(gI(t),_I(t))}throw kd()}function ry(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function mI(n){let t;try{t=decodeURIComponent(n)}catch{throw Rr(en.DATA_URL,"Malformed data URL.")}return ry(t)}function oy(n,t){switch(n){case en.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw Rr(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case en.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw Rr(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=fI(t)}catch(i){throw i.message.includes("polyfill")?i:Rr(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class ay{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Rr(en.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=yI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function gI(n){const t=new ay(n);return t.base64?oy(en.BASE64,t.rest):mI(t.rest)}function _I(n){return new ay(n).contentType}function yI(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e){let s=0,i="";op(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(op(this.data_)){const s=this.data_,i=hI(s,t,e);return i===null?null:new Bn(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new Bn(s,!0)}}static getBlob(...t){if(Sd()){const e=t.map(s=>s instanceof Bn?s.data_:s);return new Bn(dI.apply(null,e))}else{const e=t.map(o=>Ac(o)?pI(en.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Bn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n){let t;try{t=JSON.parse(n)}catch{return null}return sI(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function bI(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function ly(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(n,t){return t}class ke{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||xI}}let Wo=null;function wI(n){return!Ac(n)||n.length<2?n:ly(n)}function uy(){if(Wo)return Wo;const n=[];n.push(new ke("bucket")),n.push(new ke("generation")),n.push(new ke("metageneration")),n.push(new ke("name","fullPath",!0));function t(r,o){return wI(o)}const e=new ke("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new ke("size");return i.xform=s,n.push(i),n.push(new ke("timeCreated")),n.push(new ke("updated")),n.push(new ke("md5Hash",null,!0)),n.push(new ke("cacheControl",null,!0)),n.push(new ke("contentDisposition",null,!0)),n.push(new ke("contentEncoding",null,!0)),n.push(new ke("contentLanguage",null,!0)),n.push(new ke("contentType",null,!0)),n.push(new ke("metadata","customMetadata",!0)),Wo=n,Wo}function EI(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new Le(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function TI(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return EI(s,n),s}function dy(n,t,e){const s=cy(t);return s===null?null:TI(n,s,e)}function II(n,t,e,s){const i=cy(t);if(i===null||!Ac(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(l=>{const d=n.bucket,h=n.fullPath,f="/b/"+o(d)+"/o/"+o(h),m=fo(f,e,s),g=sy({alt:"media",token:l});return m+g})[0]}function hy(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class Ui{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n){if(!n)throw kd()}function Cd(n,t){function e(s,i){const r=dy(n,i,t);return Sn(r!==null),r}return e}function AI(n,t){function e(s,i){const r=dy(n,i,t);return Sn(r!==null),II(r,i,n.host,n._protocol)}return e}function po(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=zT():i=jT():e.getStatus()===402?i=UT(n.bucket):e.getStatus()===403?i=HT(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function fy(n){const t=po(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=BT(n.path)),r.serverResponse=i.serverResponse,r}return e}function kI(n,t,e){const s=t.fullServerUrl(),i=fo(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Ui(i,r,Cd(n,e),o);return a.errorHandler=fy(t),a}function SI(n,t,e){const s=t.fullServerUrl(),i=fo(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Ui(i,r,AI(n,e),o);return a.errorHandler=fy(t),a}function CI(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function py(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=CI(null,t)),s}function RI(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let D=0;D<2;D++)C=C+Math.random().toString().slice(2);return C}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=py(t,s,i),d=hy(l,e),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=Bn.getBlob(h,s,f);if(m===null)throw ey();const g={name:l.fullPath},v=fo(r,n.host,n._protocol),y="POST",T=n.maxUploadRetryTime,A=new Ui(v,y,Cd(n,e),T);return A.urlParams=g,A.headers=o,A.body=m.uploadData(),A.errorHandler=po(t),A}class ja{constructor(t,e,s,i){this.current=t,this.total=e,this.finalized=!!s,this.metadata=i||null}}function Rd(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{Sn(!1)}return Sn(!!e&&(t||["active"]).indexOf(e)!==-1),e}function PI(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o=py(t,s,i),a={name:o.fullPath},c=fo(r,n.host,n._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=hy(o,e),f=n.maxUploadRetryTime;function m(v){Rd(v);let y;try{y=v.getResponseHeader("X-Goog-Upload-URL")}catch{Sn(!1)}return Sn(Ac(y)),y}const g=new Ui(c,l,m,f);return g.urlParams=a,g.headers=d,g.body=h,g.errorHandler=po(t),g}function DI(n,t,e,s){const i={"X-Goog-Upload-Command":"query"};function r(l){const d=Rd(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Sn(!1)}h||Sn(!1);const f=Number(h);return Sn(!isNaN(f)),new ja(f,s.size(),d==="final")}const o="POST",a=n.maxUploadRetryTime,c=new Ui(e,o,r,a);return c.headers=i,c.errorHandler=po(t),c}const cp=256*1024;function OI(n,t,e,s,i,r,o,a){const c=new ja(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw YT();const l=c.total-c.current;let d=l;i>0&&(d=Math.min(d,i));const h=c.current,f=h+d;let m="";d===0?m="finalize":l===d?m="upload, finalize":m="upload";const g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,f);if(v===null)throw ey();function y(D,P){const O=Rd(D,["active","final"]),w=c.current+d,b=s.size();let x;return O==="final"?x=Cd(t,r)(D,P):x=null,new ja(w,b,O==="final",x)}const T="POST",A=t.maxUploadRetryTime,C=new Ui(e,T,y,A);return C.headers=g,C.body=v.uploadData(),C.progressCallback=a||null,C.errorHandler=po(n),C}const Re={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function bl(n){switch(n){case"running":case"pausing":case"canceling":return Re.RUNNING;case"paused":return Re.PAUSED;case"success":return Re.SUCCESS;case"canceled":return Re.CANCELED;case"error":return Re.ERROR;default:return Re.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(t,e,s){if(nI(t)||e!=null||s!=null)this.next=t,this.error=e??void 0,this.complete=s??void 0;else{const r=t;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class NI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ps.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ps.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ps.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw sr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class LI extends NI{initXhr(){this.xhr_.responseType="text"}}function pi(){return new LI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=uy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ot.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(iy(i.status,[]))if(r)i=Z_();else{this.sleepTime=Math.max(this.sleepTime*2,$T),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ot.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=PI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,pi,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const i=DI(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,pi,e,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=cp*this._chunkMultiplier,e=new ja(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=OI(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,pi,i,r,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){cp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=kI(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,pi,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=RI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,pi,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=ty(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=bl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,i){const r=new MI(e||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(bl(this._state)){case Re.SUCCESS:ii(this._resolve.bind(null,this.snapshot))();break;case Re.CANCELED:case Re.ERROR:const e=this._reject;ii(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(bl(this._state)){case Re.RUNNING:case Re.PAUSED:t.next&&ii(t.next.bind(t,this.snapshot))();break;case Re.SUCCESS:t.complete&&ii(t.complete.bind(t))();break;case Re.CANCELED:case Re.ERROR:t.error&&ii(t.error.bind(t,this._error))();break;default:t.error&&ii(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e){this._service=t,e instanceof Le?this._location=e:this._location=Le.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new js(t,e)}get root(){const t=new Le(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ly(this._location.path)}get storage(){return this._service}get parent(){const t=vI(this._location.path);if(t===null)return null;const e=new Le(this._location.bucket,t);return new js(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw XT(t)}}function FI(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new VI(n,new Bn(t),e)}function $I(n){n._throwIfRoot("getDownloadURL");const t=SI(n.storage,n._location,uy());return n.storage.makeRequestWithTokens(t,pi).then(e=>{if(e===null)throw KT();return e})}function BI(n,t){const e=bI(n._location.path,t),s=new Le(n._location.bucket,e);return new js(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(n){return/^[A-Za-z]+:\/\//.test(n)}function jI(n,t){return new js(n,t)}function my(n,t){if(n instanceof Pd){const e=n;if(e._bucket==null)throw GT();const s=new js(e,e._bucket);return t!=null?my(s,t):s}else return t!==void 0?BI(n,t):n}function zI(n,t){if(t&&UI(t)){if(n instanceof Pd)return jI(n,t);throw fu("To use ref(service, url), the first argument must be a Storage instance.")}else return my(n,t)}function lp(n,t){const e=t==null?void 0:t[J_];return e==null?null:Le.makeFromBucketSpec(e,n)}function HI(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:xg(i,n.app.options.projectId))}class Pd{constructor(t,e,s,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=X_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VT,this._maxUploadRetryTime=FT,this._requests=new Set,i!=null?this._bucket=Le.makeFromBucketSpec(i,this._host):this._bucket=lp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Le.makeFromBucketSpec(this._url,t):this._bucket=lp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ap("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ap("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new js(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new JT(ny());{const o=lI(t,this._appId,s,i,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const up="@firebase/storage",dp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="storage";function qI(n,t,e){return n=Ht(n),FI(n,t,e)}function WI(n){return n=Ht(n),$I(n)}function GI(n,t){return n=Ht(n),zI(n,t)}function YI(n=Hu(),t){n=Ht(n);const s=cc(n,gy).getImmediate({identifier:t}),i=yg("storage");return i&&KI(s,...i),s}function KI(n,t,e,s={}){HI(n,t,e,s)}function QI(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Pd(e,s,i,t,Ws)}function XI(){Fs(new ns(gy,QI,"PUBLIC").setMultipleInstances(!0)),nn(up,dp,""),nn(up,dp,"esm2017")}XI();function Dd(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(e[s[i]]=n[s[i]]);return e}function _y(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JI=_y,yy=new so("auth","Firebase",_y());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new ju("@firebase/auth");function ZI(n,...t){za.logLevel<=dt.WARN&&za.warn(`Auth (${Ws}): ${n}`,...t)}function ga(n,...t){za.logLevel<=dt.ERROR&&za.error(`Auth (${Ws}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...t){throw Od(n,...t)}function on(n,...t){return Od(n,...t)}function vy(n,t,e){const s=Object.assign(Object.assign({},JI()),{[t]:e});return new so("auth","Firebase",s).create(t,{appName:n.name})}function ts(n){return vy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Od(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return yy.create(n,...t)}function X(n,t,...e){if(!n)throw Od(t,...e)}function xn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ga(t),new Error(t)}function Dn(n,t){n||xn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function tA(){return hp()==="http:"||hp()==="https:"}function hp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tA()||px()||"connection"in navigator)?navigator.onLine:!0}function nA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e){this.shortDelay=t,this.longDelay=e,Dn(e>t,"Short delay should be less than long delay!"),this.isMobile=dx()||mx()}get(){return eA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,t){Dn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=new mo(3e4,6e4);function us(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function On(n,t,e,s,i={}){return xy(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=io(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},r);return fx()||(l.referrerPolicy="no-referrer"),by.fetch()(wy(n,n.config.apiHost,e,a),l)})}async function xy(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},sA),t);try{const i=new oA(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Go(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Go(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Go(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Go(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw vy(n,d,l);Ye(n,d)}}catch(i){if(i instanceof dn)throw i;Ye(n,"network-request-failed",{message:String(i)})}}async function kc(n,t,e,s,i={}){const r=await On(n,t,e,s,i);return"mfaPendingCredential"in r&&Ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}function wy(n,t,e,s){const i=`${t}${e}?${s}`;return n.config.emulator?Md(n.config,i):`${n.config.apiScheme}://${i}`}function rA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oA{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(on(this.auth,"network-request-failed")),iA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Go(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=on(n,t,s);return i.customData._tokenResponse=e,i}function fp(n){return n!==void 0&&n.enterprise!==void 0}class aA{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return rA(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function cA(n,t){return On(n,"GET","/v2/recaptchaConfig",us(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(n,t){return On(n,"POST","/v1/accounts:delete",t)}async function Ey(n,t){return On(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function uA(n,t=!1){const e=Ht(n),s=await e.getIdToken(t),i=Nd(s);X(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Pr(xl(i.auth_time)),issuedAtTime:Pr(xl(i.iat)),expirationTime:Pr(xl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xl(n){return Number(n)*1e3}function Nd(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return ga("JWT malformed, contained fewer than 3 sections"),null;try{const i=gg(e);return i?JSON.parse(i):(ga("Failed to decode base64 JWT payload"),null)}catch(i){return ga("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pp(n){const t=Nd(n);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof dn&&dA(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function dA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(n){var t;const e=n.auth,s=await n.getIdToken(),i=await Wr(n,Ey(e,{idToken:s}));X(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?Ty(r.providerUserInfo):[],a=pA(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new mu(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function fA(n){const t=Ht(n);await Ha(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function pA(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function Ty(n){return n.map(t=>{var{providerId:e}=t,s=Dd(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(n,t){const e=await xy(n,{},async()=>{const s=io({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=wy(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",by.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function gA(n,t){return On(n,"POST","/v2/accounts:revokeToken",us(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):pp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){X(t.length!==0,"internal-error");const e=pp(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await mA(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new bi;return s&&(X(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(X(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(X(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n,t){X(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class wn{constructor(t){var{uid:e,auth:s,stsTokenManager:i}=t,r=Dd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new mu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Wr(this,this.stsTokenManager.getToken(this.auth,t));return X(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return uA(this,t)}reload(){return fA(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new wn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await Ha(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(ts(this.auth));const t=await this.getIdToken();return await Wr(this,lA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,i,r,o,a,c,l,d;const h=(s=e.displayName)!==null&&s!==void 0?s:void 0,f=(i=e.email)!==null&&i!==void 0?i:void 0,m=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=e.photoURL)!==null&&o!==void 0?o:void 0,v=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=e.createdAt)!==null&&l!==void 0?l:void 0,A=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:D,isAnonymous:P,providerData:O,stsTokenManager:w}=e;X(C&&w,t,"internal-error");const b=bi.fromJSON(this.name,w);X(typeof C=="string",t,"internal-error"),Vn(h,t.name),Vn(f,t.name),X(typeof D=="boolean",t,"internal-error"),X(typeof P=="boolean",t,"internal-error"),Vn(m,t.name),Vn(g,t.name),Vn(v,t.name),Vn(y,t.name),Vn(T,t.name),Vn(A,t.name);const x=new wn({uid:C,auth:t,email:f,emailVerified:D,displayName:h,isAnonymous:P,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:b,createdAt:T,lastLoginAt:A});return O&&Array.isArray(O)&&(x.providerData=O.map(I=>Object.assign({},I))),y&&(x._redirectEventId=y),x}static async _fromIdTokenResponse(t,e,s=!1){const i=new bi;i.updateFromServerResponse(e);const r=new wn({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await Ha(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];X(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Ty(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new bi;a.updateFromIdToken(s);const c=new wn({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new mu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new Map;function En(n){Dn(n instanceof Function,"Expected a class definition");let t=mp.get(n);return t?(Dn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,mp.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Iy.type="NONE";const gp=Iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n,t,e){return`firebase:${n}:${t}:${e}`}class xi{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=_a(this.userKey,i.apiKey,r),this.fullPersistenceKey=_a("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?wn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new xi(En(gp),t,s);const i=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||En(gp);const o=_a(s,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){const h=wn._fromJSON(t,d);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new xi(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new xi(r,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Cy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ay(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Py(t))return"Blackberry";if(Dy(t))return"Webos";if(ky(t))return"Safari";if((t.includes("chrome/")||Sy(t))&&!t.includes("edge/"))return"Chrome";if(Ry(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ay(n=Ee()){return/firefox\//i.test(n)}function ky(n=Ee()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Sy(n=Ee()){return/crios\//i.test(n)}function Cy(n=Ee()){return/iemobile/i.test(n)}function Ry(n=Ee()){return/android/i.test(n)}function Py(n=Ee()){return/blackberry/i.test(n)}function Dy(n=Ee()){return/webos/i.test(n)}function Ld(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _A(n=Ee()){var t;return Ld(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function yA(){return gx()&&document.documentMode===10}function Oy(n=Ee()){return Ld(n)||Ry(n)||Dy(n)||Py(n)||/windows phone/i.test(n)||Cy(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n,t=[]){let e;switch(n){case"Browser":e=_p(Ee());break;case"Worker":e=`${_p(Ee())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ws}/${s}`}/**
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
 */class vA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=e,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function bA(n,t={}){return On(n,"GET","/v2/passwordPolicy",us(n,t))}/**
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
 */const xA=6;class wA{constructor(t){var e,s,i,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:xA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new vA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=En(e)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await xi.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ey(this,{idToken:t}),s=await wn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ha(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=nA()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(bn(this.app))return Promise.reject(ts(this));const e=t?Ht(t):null;return e&&X(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(ts(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return bn(this.app)?Promise.reject(ts(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bA(this),e=new wA(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new so("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await gA(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&En(t)||this._popupRedirectResolver;X(e,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[En(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,i);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=My(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&ZI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Qs(n){return Ht(n)}class yp{constructor(t){this.auth=t,this.observer=null,this.addObserver=Tx(e=>this.observer=e)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TA(n){Sc=n}function Ny(n){return Sc.loadJS(n)}function IA(){return Sc.recaptchaEnterpriseScript}function AA(){return Sc.gapiScript}function kA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const SA="recaptcha-enterprise",CA="NO_RECAPTCHA";class RA{constructor(t){this.type=SA,this.auth=Qs(t)}async verify(t="verify",e=!1){async function s(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{cA(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new aA(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;fp(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:t}).then(l=>{o(l)}).catch(()=>{o(CA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!e&&fp(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=IA();c.length!==0&&(c+=a),Ny(c).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function vp(n,t,e,s=!1){const i=new RA(n);let r;try{r=await i.verify(e)}catch{r=await i.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gu(n,t,e,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await vp(n,t,e,e==="getOobCode");return s(n,r)}else return s(n,t).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vp(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(n,t){const e=cc(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(Ra(r,t??{}))return i;Ye(i,"already-initialized")}return e.initialize({options:t})}function DA(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(En);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function OA(n,t,e){const s=Qs(n);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=Ly(t),{host:o,port:a}=MA(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),NA()}function Ly(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function MA(n){const t=Ly(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:bp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:bp(o)}}}function bp(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function NA(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return xn("not implemented")}_getIdTokenResponse(t){return xn("not implemented")}_linkToIdToken(t,e){return xn("not implemented")}_getReauthenticationResolver(t){return xn("not implemented")}}async function LA(n,t){return On(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(n,t){return kc(n,"POST","/v1/accounts:signInWithPassword",us(n,t))}async function FA(n,t){return On(n,"POST","/v1/accounts:sendOobCode",us(n,t))}async function $A(n,t){return FA(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(n,t){return kc(n,"POST","/v1/accounts:signInWithEmailLink",us(n,t))}async function UA(n,t){return kc(n,"POST","/v1/accounts:signInWithEmailLink",us(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Vd{constructor(t,e,s,i=null){super("password",s),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Gr(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new Gr(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(t,e,"signInWithPassword",VA);case"emailLink":return BA(t,{email:this._email,oobCode:this._password});default:Ye(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(t,s,"signUpPassword",LA);case"emailLink":return UA(t,{idToken:e,email:this._email,oobCode:this._password});default:Ye(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(n,t){return kc(n,"POST","/v1/accounts:signInWithIdp",us(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="http://localhost";class zs extends Vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new zs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ye("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=e,r=Dd(e,["providerId","signInMethod"]);if(!s||!i)return null;const o=new zs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return wi(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,wi(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,wi(t,e)}buildRequest(){const t={requestUri:jA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=io(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HA(n){const t=pr(mr(n)).link,e=t?pr(mr(t)).deep_link_id:null,s=pr(mr(n)).deep_link_id;return(s?pr(mr(s)).link:null)||s||e||t||n}class Fd{constructor(t){var e,s,i,r,o,a;const c=pr(mr(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,h=zA((i=c.mode)!==null&&i!==void 0?i:null);X(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=HA(t);try{return new Fd(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.providerId=ji.PROVIDER_ID}static credential(t,e){return Gr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Fd.parseLink(e);return X(s,"argument-error"),Gr._fromEmailAndCode(t,s.code,s.tenantId)}}ji.PROVIDER_ID="password";ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Vy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends go{constructor(){super("facebook.com")}static credential(t){return zs._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Un.credentialFromTaggedObject(t)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Un.credential(t.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends go{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return zs._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return jn.credentialFromTaggedObject(t)}static credentialFromError(t){return jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return jn.credential(e,s)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends go{constructor(){super("github.com")}static credential(t){return zs._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zn.credentialFromTaggedObject(t)}static credentialFromError(t){return zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return zn.credential(t.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends go{constructor(){super("twitter.com")}static credential(t,e){return zs._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Hn.credentialFromTaggedObject(t)}static credentialFromError(t){return Hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return Hn.credential(e,s)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await wn._fromIdTokenResponse(t,s,i),o=xp(s);return new Pi({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=xp(s);return new Pi({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function xp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends dn{constructor(t,e,s,i){var r;super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new qa(t,e,s,i)}}function Fy(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(n,r,t,s):r})}async function qA(n,t,e=!1){const s=await Wr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Pi._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,t,e=!1){const{auth:s}=n;if(bn(s.app))return Promise.reject(ts(s));const i="reauthenticate";try{const r=await Wr(n,Fy(s,i,t,n),e);X(r.idToken,s,"internal-error");const o=Nd(r.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(n.uid===a,s,"user-mismatch"),Pi._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ye(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(n,t,e=!1){if(bn(n.app))return Promise.reject(ts(n));const s="signIn",i=await Fy(n,s,t),r=await Pi._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}async function GA(n,t){return $y(Qs(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(n){const t=Qs(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function KA(n,t,e){const s=Qs(n);await gu(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$A)}function QA(n,t,e){return bn(n.app)?Promise.reject(ts(n)):GA(Ht(n),ji.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&YA(n),s})}function XA(n,t,e,s){return Ht(n).onIdTokenChanged(t,e,s)}function JA(n,t,e){return Ht(n).beforeAuthStateChanged(t,e)}function ZA(n,t,e,s){return Ht(n).onAuthStateChanged(t,e,s)}function tk(n){return Ht(n).signOut()}const Wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Wa,"1"),this.storage.removeItem(Wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=1e3,nk=10;class Uy extends By{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);yA()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,nk):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Uy.type="LOCAL";const sk=Uy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy extends By{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}jy.type="SESSION";const zy=jy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new Cc(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(e.origin,r)),c=await ik(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=$d("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function ok(n){an().location.href=n}/**
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
 */function Hy(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ck(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lk(){return Hy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="firebaseLocalStorageDb",uk=1,Ga="firebaseLocalStorage",Wy="fbase_key";class _o{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Rc(n,t){return n.transaction([Ga],t?"readwrite":"readonly").objectStore(Ga)}function dk(){const n=indexedDB.deleteDatabase(qy);return new _o(n).toPromise()}function _u(){const n=indexedDB.open(qy,uk);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ga,{keyPath:Wy})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ga)?t(s):(s.close(),await dk(),t(await _u()))})})}async function wp(n,t,e){const s=Rc(n,!0).put({[Wy]:t,value:e});return new _o(s).toPromise()}async function hk(n,t){const e=Rc(n,!1).get(t),s=await new _o(e).toPromise();return s===void 0?null:s.value}function Ep(n,t){const e=Rc(n,!0).delete(t);return new _o(e).toPromise()}const fk=800,pk=3;class Gy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>pk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(lk()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await ak(),!this.activeServiceWorker)return;this.sender=new rk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ck()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _u();return await wp(t,Wa,"1"),await Ep(t,Wa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>wp(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>hk(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Ep(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Rc(i,!1).getAll();return new _o(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gy.type="LOCAL";const mk=Gy;new mo(3e4,6e4);/**
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
 */function gk(n,t){return t?En(t):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd extends Vd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return wi(t,this._buildIdpRequest())}_linkToIdToken(t,e){return wi(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return wi(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function _k(n){return $y(n.auth,new Bd(n),n.bypassAuthState)}function yk(n){const{auth:t,user:e}=n;return X(e,t,"internal-error"),WA(e,new Bd(n),n.bypassAuthState)}async function vk(n){const{auth:t,user:e}=n;return X(e,t,"internal-error"),qA(e,new Bd(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _k;case"linkViaPopup":case"linkViaRedirect":return vk;case"reauthViaPopup":case"reauthViaRedirect":return yk;default:Ye(this.auth,"internal-error")}}resolve(t){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new mo(2e3,1e4);class _i extends Yy{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const t=$d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,bk.get())};t()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="pendingRedirect",ya=new Map;class wk extends Yy{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=ya.get(this.auth._key());if(!t){try{const s=await Ek(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}ya.set(this.auth._key(),t)}return this.bypassAuthState||ya.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ek(n,t){const e=Ak(t),s=Ik(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function Tk(n,t){ya.set(n._key(),t)}function Ik(n){return En(n._redirectPersistence)}function Ak(n){return _a(xk,n.config.apiKey,n.name)}async function kk(n,t,e=!1){if(bn(n.app))return Promise.reject(ts(n));const s=Qs(n),i=gk(s,t),o=await new wk(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=10*60*1e3;class Ck{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Rk(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!Ky(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(on(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tp(t))}saveEventToCache(t){this.cachedEventUids.add(Tp(t)),this.lastProcessedEventTime=Date.now()}}function Tp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Ky({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Rk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ky(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pk(n,t={}){return On(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ok=/^https?/;async function Mk(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Pk(n);for(const e of t)try{if(Nk(e))return}catch{}Ye(n,"unauthorized-domain")}function Nk(n){const t=pu(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!Ok.test(e))return!1;if(Dk.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Lk=new mo(3e4,6e4);function Ip(){const n=an().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Vk(n){return new Promise((t,e)=>{var s,i,r;function o(){Ip(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ip(),e(on(n,"network-request-failed"))},timeout:Lk.get()})}if(!((i=(s=an().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=an().gapi)===null||r===void 0)&&r.load)o();else{const a=kA("iframefcb");return an()[a]=()=>{gapi.load?o():e(on(n,"network-request-failed"))},Ny(`${AA()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw va=null,t})}let va=null;function Fk(n){return va=va||Vk(n),va}/**
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
 */const $k=new mo(5e3,15e3),Bk="__/auth/iframe",Uk="emulator/auth/iframe",jk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hk(n){const t=n.config;X(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Md(t,Uk):`https://${n.config.authDomain}/${Bk}`,s={apiKey:t.apiKey,appName:n.name,v:Ws},i=zk.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${io(s).slice(1)}`}async function qk(n){const t=await Fk(n),e=an().gapi;return X(e,n,"internal-error"),t.open({where:document.body,url:Hk(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jk,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=on(n,"network-request-failed"),a=an().setTimeout(()=>{r(o)},$k.get());function c(){an().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const Wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gk=500,Yk=600,Kk="_blank",Qk="http://localhost";class Ap{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xk(n,t,e,s=Gk,i=Yk){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Wk),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Ee().toLowerCase();e&&(a=Sy(l)?Kk:e),Ay(l)&&(t=t||Qk,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(_A(l)&&a!=="_self")return Jk(t||"",a),new Ap(null);const h=window.open(t||"",a,d);X(h,n,"popup-blocked");try{h.focus()}catch{}return new Ap(h)}function Jk(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const Zk="__/auth/handler",tS="emulator/auth/handler",eS=encodeURIComponent("fac");async function kp(n,t,e,s,i,r){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:Ws,eventId:i};if(t instanceof Vy){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Ex(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof go){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${eS}=${encodeURIComponent(c)}`:"";return`${nS(n)}?${io(a).slice(1)}${l}`}function nS({config:n}){return n.emulator?Md(n,tS):`https://${n.authDomain}/${Zk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="webStorageSupport";class sS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zy,this._completeRedirectFn=kk,this._overrideRedirectResult=Tk}async _openPopup(t,e,s,i){var r;Dn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await kp(t,e,s,pu(),i);return Xk(t,o,$d())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await kp(t,e,s,pu(),i);return ok(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(Dn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await qk(t),s=new Ck(t);return e.register("authEvent",i=>(X(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(wl,{type:wl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[wl];o!==void 0&&e(!!o),Ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Mk(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Oy()||ky()||Ld()}}const iS=sS;var Sp="@firebase/auth",Cp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aS(n){Fs(new ns("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:My(n)},l=new EA(s,i,r,c);return DA(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),Fs(new ns("auth-internal",t=>{const e=Qs(t.getProvider("auth").getImmediate());return(s=>new rS(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Sp,Cp,oS(n)),nn(Sp,Cp,"esm2017")}/**
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
 */const cS=5*60,lS=bg("authIdTokenMaxAge")||cS;let Rp=null;const uS=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>lS)return;const i=e==null?void 0:e.token;Rp!==i&&(Rp=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dS(n=Hu()){const t=cc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=PA(n,{popupRedirectResolver:iS,persistence:[mk,sk,zy]}),s=bg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=uS(r.toString());JA(e,o,()=>o(e.currentUser)),XA(e,a=>o(a))}}const i=_g("auth");return i&&OA(e,`http://${i}`),e}function hS(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}TA({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=on("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",hS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aS("Browser");const Qy={},Xy=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,fS={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"},pS=()=>{const n=Xy("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&Qy||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};return Object.values(e).every(Boolean)?e:(console.warn("[Config] Firebase config não encontrada em globals/ENV; usando fallback padrão legado."),fS)},mS=()=>{const n=Xy("__RDO_API_CONFIG");if(n)return n;const t=import.meta&&Qy||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN,s=t.VITE_RDO_API_BASE||"https://rdo.axelindustrial.com.br/api";return e?{TOKEN:e,BASE_URL:s}:{TOKEN:"",BASE_URL:s}},gS=pS(),Pc=Tg(gS),K=xT(Pc),_S=YI(Pc),Yo=dS(Pc),yS=async()=>(console.log("[Firebase] Configuração carregada com sucesso"),Pc),Et={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},Ya={init:()=>new Promise(n=>{ZA(Yo,async t=>{if(t)try{const e=await Ua(ne(K,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};Et.setUser(s)}else Et.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),Et.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else Et.setUser(null);n(Et.state.currentUser)})}),login:async(n,t)=>{try{const s=(await QA(Yo,n,t)).user,i=await Ua(ne(K,"usuarios",s.uid));if(i.exists()){const r={uid:s.uid,email:s.email,...i.data()};return Et.setUser(r),r}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await tk(Yo),Et.setUser(null)},recoverPassword:async n=>{await KA(Yo,n)}},At={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const i=e.split("/").filter(Boolean);if(i.length!==t.length)continue;const r={};let o=!0;for(let a=0;a<i.length;a++){const c=i[a],l=t[a];if(c.startsWith(":"))r[c.slice(1)]=decodeURIComponent(l);else if(c!==l){o=!1;break}}if(o)return{handler:s,params:r}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!Et.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(Et.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},V={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:i="",required:r=!1,className:o=""})=>`
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
        `},Pp={renderLogin:()=>`
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
                            ${V.createInput({id:"email",type:"email",label:"Email",placeholder:"seu@email.com",required:!0,className:"mb-4"})}
                            ${V.createInput({id:"password",type:"password",label:"Senha",placeholder:"••••••••",required:!0})}
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <a href="#/forgot-password" class="font-display uppercase tracking-wide text-primary hover:text-primary-strong">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            ${V.createButton({id:"btn-login",text:"Entrar",type:"submit",className:"w-full justify-center"})}
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
                        ${V.createInput({id:"email-recovery",type:"email",label:"Email",required:!0})}

                        <div class="flex gap-4">
                            ${V.createButton({id:"btn-back",text:"Voltar",variant:"secondary",className:"w-full justify-center",onClick:"window.location.hash = '/login'"})}
                            ${V.createButton({id:"btn-recover",text:"Enviar",type:"submit",className:"w-full justify-center"})}
                        </div>
                    </form>
                </div>
            </div>
        `},Dp={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Pp.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value,r=document.getElementById("btn-login");try{r.disabled=!0,r.innerHTML=V.createLoader(),await Ya.login(s,i),V.createToast("Login realizado com sucesso!"),At.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),V.createToast(a,"error"),r.disabled=!1,r.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Pp.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,i=document.getElementById("btn-recover");try{i.disabled=!0,i.innerHTML=V.createLoader(),await Ya.recoverPassword(s),V.createToast("Email de recuperação enviado!"),setTimeout(()=>At.navigate("/login"),2e3)}catch(r){V.createToast("Erro ao enviar email: "+r.message,"error"),i.disabled=!1,i.innerHTML="<span>Enviar</span>"}})}},vS="modulepreload",bS=function(n){return"/"+n},Op={},Ka=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=bS(c),c in Op)return;Op[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":vS,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},xS=async n=>{if(!n)return null;const t=await mt(te(yt(K,"obras"),Ct("__name__","==",n)));if(t.empty)return null;const e=t.docs[0].data(),s=Number(e.orcamento||e.valor_orcado||0),i=Number(e.tolerancia_percentual||0),r=s+s*i,a=(await mt(te(yt(K,"compras"),Ct("obraId","==",n)))).docs.map(l=>l.data());let c=0;return a.forEach(l=>{const d=(l.status_compra||"").toLowerCase(),h=!l.estouro_orcamento||l.status_aprovacao==="Aprovado";(d==="comprado"||d==="recebido"||d==="entregue")&&h&&(c+=Number(l.valor_total||l.valor_estimado||0))}),{limite_real:r,comprometido:c,orcado:s}},wS=async n=>{var t,e,s;try{const{ObrasService:i}=await Ka(async()=>{const{ObrasService:l}=await Promise.resolve().then(()=>RD);return{ObrasService:l}},void 0),r=await((t=i.getObraById)==null?void 0:t.call(i,n)),o=(r==null?void 0:r.numero_os)||(r==null?void 0:r.numeroOS)||n;if(!o)return null;const{RDOService:a}=await Ka(async()=>{const{RDOService:l}=await Promise.resolve().then(()=>Eb);return{RDOService:l}},void 0),c=await a.getIntegratedDataForObra(o);if((e=c==null?void 0:c.reports)!=null&&e.length){const l=a.processRDOData(c.reports);return{...l,quantidadeRelatorios:c.quantidadeRelatorios||((s=l.reports)==null?void 0:s.length)||0}}return c?{quantidadeRelatorios:c.quantidadeRelatorios||0,totalHoras:Number(c.totalHoras||0)}:null}catch(i){return console.warn("[Dashboard] RDO fetch fail",(i==null?void 0:i.message)||i),null}},pn={getCompradorStats:async()=>{const n=yt(K,"compras"),t=te(n,Ct("status_compra","==","Pendente")),e=await mt(t),s=te(n,Ct("status_compra","==","Em Cotação")),i=await mt(s),r=te(n,hu("data_solicitacao","desc"),pa(5)),o=await mt(r),a=await mt(n);let c=0,l=0,d=0,h=0,f=0,m=0;const g={},v={},y={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},T=await mt(yt(K,"centrosCusto")),A=new Map(T.docs.map(w=>[w.id,w.data().nome||w.data().codigo||w.id])),C=await mt(yt(K,"obras")),D=new Map(C.docs.map(w=>[w.id,w.data().nome_obra||w.data().apelido_obra||w.id]));a.docs.forEach(w=>{const b=w.data(),x=Number(b.valor_estimado||b.valor_total||0);m+=x;const I=b.previsao_entrega?new Date(b.previsao_entrega):null,S=b.data_recebimento?new Date(b.data_recebimento):null;if(I&&b.status_compra!=="Entregue"&&b.status_compra!=="Recebido"&&I<new Date&&c++,S&&I&&(l++,S<=I&&d++),b.data_emissao&&(S||I)){const Q=S||I,rt=Math.max(0,(new Date(Q)-new Date(b.data_emissao))/(1e3*60*60*24));h+=rt,f++}const R=(b.status_compra||"").toLowerCase();R.includes("cot")&&y.cotacao++,!I&&R!=="recebido"&&R!=="entregue"&&y.sem_previsao++,I&&I<new Date&&R!=="recebido"&&R!=="entregue"&&y.atrasados++;const q=(b.status_aprovacao||"").toLowerCase();(b.estouro_orcamento||q==="pendente")&&y.pendente_aprovacao++;const B=(b.natureza_compra||"Outros").trim();g[B]=(g[B]||0)+x;const z=A.get(b.centroCustoId)||b.centroCustoNome||b.centro_custo||b.centroCustoId||"N/D";v[z]=(v[z]||0)+x});const P=l?d/l*100:0,O=f?h/f:0;return{pendentes:e.size,emCotacao:i.size,recentes:o.docs.map(w=>{const b=w.data();return{id:w.id,...b,obraNome:D.get(b.obraId)||b.obra||b.obraId||"N/D"}}),atrasos:c,sla:P,lead:O,totalValor:m,naturezaTotais:g,ccTotais:v,alerts:y}},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=yt(K,"compras"),e=te(t,Ct("obraId","==",n),Ct("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await mt(e),i=te(t,Ct("obraId","==",n),Ct("status_compra","==","Comprado")),r=await mt(i),o=te(t,Ct("obraId","==",n),Ct("status_compra","in",["Entregue","Recebido"])),a=await mt(o),c=te(t,Ct("obraId","==",n),hu("data_solicitacao","desc"),pa(5)),l=await mt(c),d=await mt(te(t,Ct("obraId","==",n)));let h=0,f=0,m=0,g=0,v=0;const y=await xS(n),T=(y==null?void 0:y.comprometido)||0,A=(y==null?void 0:y.limite_real)||(y==null?void 0:y.orcado)||0,C=A>0?T/A*100:0,D=Math.max(0,A-T),P={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0};d.docs.forEach(w=>{const b=w.data(),x=b.previsao_entrega?new Date(b.previsao_entrega):null,I=b.data_recebimento?new Date(b.data_recebimento):null,S=(b.status_compra||"").toLowerCase();if(x&&S!=="entregue"&&S!=="recebido"&&x<new Date&&(h++,P.atrasados++),I&&x&&(f++,I<=x&&m++),b.data_emissao&&(I||x)){const k=I||x,q=Math.max(0,(new Date(k)-new Date(b.data_emissao))/(1e3*60*60*24));g+=q,v++}!x&&S!=="recebido"&&S!=="entregue"&&P.sem_previsao++;const R=(b.status_aprovacao||"").toLowerCase();(b.estouro_orcamento||R==="pendente")&&P.pendente_aprovacao++,S.includes("cot")&&P.cotacao++});const O=await wS(n);return{pendentes:s.size,transito:r.size,entregues:a.size,recentes:l.docs.map(w=>({id:w.id,...w.data()})),atrasos:h,sla:f?m/f*100:0,lead:v?g/v:0,economia:D,curvaPercent:C,comprometido:T,limiteReal:A,rdoData:O,alerts:P}},getObras:async()=>(await mt(yt(K,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=yt(K,"compras"),t=te(n,pa(500)),e=await mt(t);let s=0,i={},r={},o=0,a=0,c=0,l=0,d=0,h=0,f=0;const m={},g={},v={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},y=[];e.forEach(P=>{const O=P.data(),w=Number(O.valor_estimado||O.valor_total||0);y.push({id:P.id,...O}),s+=w,i[O.status_compra]=(i[O.status_compra]||0)+1,O.status_compra!=="Entregue"&&O.status_compra!=="Recebido"&&O.previsao_entrega&&new Date(O.previsao_entrega)<new Date&&(c++,v.atrasados++);const b=O.previsao_entrega?new Date(O.previsao_entrega):null,x=O.data_recebimento?new Date(O.data_recebimento):null;if(x&&b&&(l++,x<=b&&d++),O.data_emissao&&(x||b)){const q=x||b,B=Math.max(0,(new Date(q)-new Date(O.data_emissao))/(1e3*60*60*24));h+=B,f++}if(O.limite_real&&(o+=Number(O.limite_real)),O.comprometido&&(a+=Number(O.comprometido)),O.data_solicitacao){const q=new Date(O.data_solicitacao),B=`${q.getFullYear()}-${String(q.getMonth()+1).padStart(2,"0")}`;r[B]=(r[B]||0)+w}const I=(O.natureza_compra||"Outros").trim();m[I]=(m[I]||0)+w;const S=O.centroCustoNome||O.centro_custo||O.centroCustoId||"N/D";g[S]=(g[S]||0)+w,!O.previsao_entrega&&O.status_compra!=="Recebido"&&O.status_compra!=="Entregue"&&v.sem_previsao++,(O.status_aprovacao||"").toLowerCase()==="pendente"&&v.pendente_aprovacao++,(O.status_compra||"").toLowerCase().includes("cot")&&v.cotacao++});const T=o>0?a/o*100:0,A=l?d/l*100:0,C=f?h/f:0,D=Math.max(0,o-a);return{totalGasto:s,porStatus:i,totalPedidos:e.size,gastosPorMes:r,limiteReal:o,comprometido:a,curvaPercent:T,atrasos:c,sla:A,lead:C,economia:D,naturezaTotais:m,ccTotais:g,alerts:v,_allCompras:y}}},it={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>{if(!n)return"-";const t=new Date(n);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("pt-BR")},formatCurrencyInput:(n,t=!1)=>{let s=(typeof n=="number"?n.toFixed(2):String(n??"")).replace(/\D/g,"");return s=(s/100).toFixed(2)+"",s=s.replace(".",","),s=s.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),t?`R$ ${s}`:s},parseCurrency:n=>{if(typeof n=="number")return n;if(!n)return 0;const t=String(n).replace("R$ ","").replace(/\./g,"").replace(",","."),e=parseFloat(t);return Number.isNaN(e)?0:e},formatCnpjInput:n=>{if(!n)return"";let t=n.replace(/\D/g,"");return t=t.substring(0,14),t=t.replace(/^(\d{2})(\d)/,"$1.$2"),t=t.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"),t=t.replace(/\.(\d{3})(\d)/,".$1/$2"),t=t.replace(/(\d{4})(\d)/,"$1-$2"),t},validateCNPJ:n=>{if(!n)return!0;const t=n.replace(/\D/g,"");if(t.length!==14||/^(\d)\1{13}$/.test(t))return!1;let e=0,s=5;for(let a=0;a<8;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;let i=e%11,r=i<2?0:11-i;if(parseInt(t[8],10)!==r)return!1;e=0,s=6;for(let a=0;a<9;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;i=e%11;let o=i<2?0:11-i;return parseInt(t[9],10)===o},renderStatusBadge:(n,t)=>{const e=new Date;e.setHours(0,0,0,0);let s=null;if(t){const o=new Date(t);Number.isNaN(o.getTime())||(s=o)}const i=(n||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return i!=="recebido"&&s&&s<e?'<span class="px-2 py-1 text-xs font-display rounded bg-alert text-canvas uppercase">Atrasado</span>':i.includes("recebido")||i.includes("entregue")?`<span class="px-2 py-1 text-xs font-display rounded bg-primary text-canvas uppercase">${n}</span>`:i.includes("comprado")?`<span class="px-2 py-1 text-xs font-display rounded bg-indigo-500 text-canvas uppercase">${n}</span>`:i.includes("aprov")?`<span class="px-2 py-1 text-xs font-display rounded bg-emerald-500 text-canvas uppercase">${n}</span>`:i.includes("cot")||i.includes("cota")?`<span class="px-2 py-1 text-xs font-display rounded bg-amber-400 text-gray-900 uppercase">${n}</span>`:`<span class="px-2 py-1 text-xs font-display rounded bg-border text-text uppercase">${n||"N/D"}</span>`},debounce:(n,t)=>{let e;return(...s)=>{clearTimeout(e),e=setTimeout(()=>n(...s),t)}}},Lt={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>',pencil:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.75 19.901l-4.5.75.75-4.5L16.862 4.487z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.6l2.651 2.651" /></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5h10.5M9.75 7.5v-1.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5m-9 0v12a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-12" /></svg>'},El={renderComprador:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Geral - Compras</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                    ${V.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Aguardando ação</p>`,className:"accent-left"})}
                    ${V.createCard({title:"Em Cotação",content:`<p class="text-4xl font-display text-primary uppercase">${n.emCotacao}</p><p class="text-sm heading-muted">Processando</p>`,className:"accent-left"})}
                    ${V.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted">Previsão vencida</p>`,className:"accent-left"})}
                    ${V.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${V.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${V.createCard({title:"Total Estimado",content:`<p class="text-4xl font-display text-primary uppercase">${it.formatCurrency(n.totalValor||0)}</p><p class="text-sm heading-muted mt-1">Amostra 5 recentes</p>`})}
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
                                            <button class="text-text-muted hover:text-text" data-action="view" data-id="${t.id}" title="Ver">${Lt.eye}</button>
                                            <button class="text-primary hover:text-primary-strong" data-action="edit" data-id="${t.id}" title="Editar">${Lt.pencil}</button>
                                            <button class="text-alert hover:text-alert/80" data-action="delete" data-id="${t.id}" title="Excluir">${Lt.trash}</button>
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
                    ${V.createCard({title:"Solicitados",content:`<p class="text-4xl font-display text-text uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`})}
                    ${V.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-display text-primary uppercase">${n.transito}</p><p class="text-sm heading-muted">A caminho</p>`,className:"accent-left"})}
                    ${V.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${n.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,className:"accent-left"})}
                    ${V.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${V.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${V.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${V.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(n.economia||0)<0?"alert":"primary"} uppercase">${it.formatCurrency(n.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(n.curvaPercent||0).toFixed(1)}%</p>`})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    ${V.createCard({title:"RDO - Total Horas",content:`<p class="text-3xl font-display text-primary uppercase">${((s=(e=((t=n.rdoData)==null?void 0:t.totalHoras)||0).toFixed)==null?void 0:s.call(e,1))||0}</p><p class="text-sm heading-muted">Relatórios: ${((i=n.rdoData)==null?void 0:i.quantidadeRelatorios)||0}</p>`})}
                    ${V.createCard({title:"RDO - Horas Extras",content:`<p class="text-3xl font-display text-text uppercase">${((a=(o=((r=n.rdoData)==null?void 0:r.totalExtras)||0).toFixed)==null?void 0:a.call(o,1))||0}</p><p class="text-sm heading-muted">Acima do padrão</p>`})}
                    ${V.createCard({title:"RDO - Média Horas/Dia",content:`<p class="text-3xl font-display text-text uppercase">${((d=(l=((c=n.rdoData)==null?void 0:c.mediaHorasDia)||0).toFixed)==null?void 0:d.call(l,1))||0}</p>`})}
                    ${V.createCard({title:"RDO - Total Funcionários",content:`<p class="text-3xl font-display text-text uppercase">${((h=n.rdoData)==null?void 0:h.totalFuncionarios)||0}</p><p class="text-sm heading-muted">Média/Dia: ${((g=(m=((f=n.rdoData)==null?void 0:f.mediaFuncionariosDia)||0).toFixed)==null?void 0:g.call(m,1))||0}</p>`})}
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
                    ${V.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${it.formatCurrency(n.totalGasto)}</p>`})}
                    ${V.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${V.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${it.formatCurrency(n.limiteReal||0)} • Comprometido: ${it.formatCurrency(n.comprometido||0)}</p>`})}
                    ${V.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${V.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${V.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${V.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${it.formatCurrency(n.economia||0)}</p>`})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    ${V.createCard({title:"Atrasos",content:`<p class="text-3xl font-display text-alert uppercase">${((t=n.alerts)==null?void 0:t.atrasados)||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${V.createCard({title:"Sem Previsão",content:`<p class="text-3xl font-display text-text uppercase">${((e=n.alerts)==null?void 0:e.sem_previsao)||0}</p><p class="text-sm heading-muted mt-1">Pedidos sem data</p>`})}
                    ${V.createCard({title:"Pend. Aprovação",content:`<p class="text-3xl font-display text-text uppercase">${((s=n.alerts)==null?void 0:s.pendente_aprovacao)||0}</p><p class="text-sm heading-muted mt-1">Estouro orç. pendente</p>`})}
                    ${V.createCard({title:"Em Cotação",content:`<p class="text-3xl font-display text-text uppercase">${((i=n.alerts)==null?void 0:i.cotacao)||0}</p><p class="text-sm heading-muted mt-1">Ped. em cotação</p>`})}
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
                                    ${(n.budgetByObra||[]).map(r=>`
                                        <tr>
                                            <td class="px-4 py-2 text-sm text-text">${r.nome}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${it.formatCurrency(r.limite)}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${it.formatCurrency(r.comprometido)}</td>
                                            <td class="px-4 py-2 text-sm text-${r.percent>100?"alert":"text"} text-right">${r.percent.toFixed(1)}%</td>
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
 */function yo(n){return n+.5|0}const Wn=(n,t,e)=>Math.max(Math.min(n,e),t);function br(n){return Wn(yo(n*2.55),0,255)}function es(n){return Wn(yo(n*255),0,255)}function yn(n){return Wn(yo(n/2.55)/100,0,1)}function Mp(n){return Wn(yo(n*100),0,100)}const Ve={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},yu=[..."0123456789ABCDEF"],ES=n=>yu[n&15],TS=n=>yu[(n&240)>>4]+yu[n&15],Ko=n=>(n&240)>>4===(n&15),IS=n=>Ko(n.r)&&Ko(n.g)&&Ko(n.b)&&Ko(n.a);function AS(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Ve[n[1]]*17,g:255&Ve[n[2]]*17,b:255&Ve[n[3]]*17,a:t===5?Ve[n[4]]*17:255}:(t===7||t===9)&&(e={r:Ve[n[1]]<<4|Ve[n[2]],g:Ve[n[3]]<<4|Ve[n[4]],b:Ve[n[5]]<<4|Ve[n[6]],a:t===9?Ve[n[7]]<<4|Ve[n[8]]:255})),e}const kS=(n,t)=>n<255?t(n):"";function SS(n){var t=IS(n)?ES:TS;return n?"#"+t(n.r)+t(n.g)+t(n.b)+kS(n.a,t):void 0}const CS=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Jy(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function RS(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function PS(n,t,e){const s=Jy(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function DS(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function Ud(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let c,l,d;return r!==o&&(d=r-o,l=a>.5?d/(2-r-o):d/(r+o),c=DS(e,s,i,d,r),c=c*60+.5),[c|0,l||0,a]}function jd(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(es)}function zd(n,t,e){return jd(Jy,n,t,e)}function OS(n,t,e){return jd(PS,n,t,e)}function MS(n,t,e){return jd(RS,n,t,e)}function Zy(n){return(n%360+360)%360}function NS(n){const t=CS.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?br(+t[5]):es(+t[5]));const i=Zy(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=OS(i,r,o):t[1]==="hsv"?s=MS(i,r,o):s=zd(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function LS(n,t){var e=Ud(n);e[0]=Zy(e[0]+t),e=zd(e),n.r=e[0],n.g=e[1],n.b=e[2]}function VS(n){if(!n)return;const t=Ud(n),e=t[0],s=Mp(t[1]),i=Mp(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${yn(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const Np={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Lp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function FS(){const n={},t=Object.keys(Lp),e=Object.keys(Np);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,Np[r]);r=parseInt(Lp[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let Qo;function $S(n){Qo||(Qo=FS(),Qo.transparent=[0,0,0,0]);const t=Qo[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const BS=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function US(n){const t=BS.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?br(o):Wn(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?br(s):Wn(s,0,255)),i=255&(t[4]?br(i):Wn(i,0,255)),r=255&(t[6]?br(r):Wn(r,0,255)),{r:s,g:i,b:r,a:e}}}function jS(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${yn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Tl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,ri=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function zS(n,t,e){const s=ri(yn(n.r)),i=ri(yn(n.g)),r=ri(yn(n.b));return{r:es(Tl(s+e*(ri(yn(t.r))-s))),g:es(Tl(i+e*(ri(yn(t.g))-i))),b:es(Tl(r+e*(ri(yn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Xo(n,t,e){if(n){let s=Ud(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=zd(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function tv(n,t){return n&&Object.assign(t||{},n)}function Vp(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=es(n[3]))):(t=tv(n,{r:0,g:0,b:0,a:1}),t.a=es(t.a)),t}function HS(n){return n.charAt(0)==="r"?US(n):NS(n)}class Yr{constructor(t){if(t instanceof Yr)return t;const e=typeof t;let s;e==="object"?s=Vp(t):e==="string"&&(s=AS(t)||$S(t)||HS(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=tv(this._rgb);return t&&(t.a=yn(t.a)),t}set rgb(t){this._rgb=Vp(t)}rgbString(){return this._valid?jS(this._rgb):void 0}hexString(){return this._valid?SS(this._rgb):void 0}hslString(){return this._valid?VS(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,c=s.a-i.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;r=1-l,s.r=255&l*s.r+r*i.r+.5,s.g=255&l*s.g+r*i.g+.5,s.b=255&l*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=zS(this._rgb,t._rgb,e)),this}clone(){return new Yr(this.rgb)}alpha(t){return this._rgb.a=es(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=yo(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Xo(this._rgb,2,t),this}darken(t){return Xo(this._rgb,2,-t),this}saturate(t){return Xo(this._rgb,1,t),this}desaturate(t){return Xo(this._rgb,1,-t),this}rotate(t){return LS(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function mn(){}const qS=(()=>{let n=0;return()=>n++})();function ot(n){return n==null}function Mt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function lt(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function zt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Me(n,t){return zt(n)?n:t}function tt(n,t){return typeof n>"u"?t:n}const WS=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,ev=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function St(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function wt(n,t,e,s){let i,r,o;if(Mt(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(lt(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function Qa(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function Xa(n){if(Mt(n))return n.map(Xa);if(lt(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=Xa(n[e[i]]);return t}return n}function nv(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function GS(n,t,e,s){if(!nv(n))return;const i=t[n],r=e[n];lt(i)&&lt(r)?Kr(i,r,s):t[n]=Xa(r)}function Kr(n,t,e){const s=Mt(t)?t:[t],i=s.length;if(!lt(n))return n;e=e||{};const r=e.merger||GS;let o;for(let a=0;a<i;++a){if(o=s[a],!lt(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)r(c[l],n,o,e)}return n}function Dr(n,t){return Kr(n,t,{merger:YS})}function YS(n,t,e){if(!nv(n))return;const s=t[n],i=e[n];lt(s)&&lt(i)?Dr(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=Xa(i))}const Fp={"":n=>n,x:n=>n.x,y:n=>n.y};function KS(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function QS(n){const t=KS(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function os(n,t){return(Fp[t]||(Fp[t]=QS(t)))(n)}function Hd(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Qr=n=>typeof n<"u",as=n=>typeof n=="function",$p=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function XS(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const _t=Math.PI,Dt=2*_t,JS=Dt+_t,Ja=Number.POSITIVE_INFINITY,ZS=_t/180,Yt=_t/2,_s=_t/4,Bp=_t*2/3,Gn=Math.log10,cn=Math.sign;function Or(n,t,e){return Math.abs(n-t)<e}function Up(n){const t=Math.round(n);n=Or(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Gn(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function tC(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function eC(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Di(n){return!eC(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function nC(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function sv(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function ze(n){return n*(_t/180)}function qd(n){return n*(180/_t)}function jp(n){if(!zt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function iv(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*_t&&(r+=Dt),{angle:r,distance:i}}function vu(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function sC(n,t){return(n-t+JS)%Dt-_t}function be(n){return(n%Dt+Dt)%Dt}function Xr(n,t,e,s){const i=be(n),r=be(t),o=be(e),a=be(r-i),c=be(o-i),l=be(i-r),d=be(i-o);return i===r||i===o||s&&r===o||a>c&&l<d}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function iC(n){return oe(n,-32768,32767)}function Tn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function Wd(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const In=(n,t,e,s)=>Wd(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),rC=(n,t,e)=>Wd(n,e,s=>n[s][t]>=e);function oC(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const rv=["push","pop","shift","splice","unshift"];function aC(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),rv.forEach(e=>{const s="_onData"+Hd(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function zp(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(rv.forEach(r=>{delete n[r]}),delete n._chartjs)}function ov(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const av=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function cv(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,av.call(window,()=>{s=!1,n.apply(t,e)}))}}function cC(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const Gd=n=>n==="start"?"left":n==="end"?"right":"center",ye=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,lC=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function lv(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:m,maxDefined:g}=o.getUserBounds();if(m){if(i=Math.min(In(c,d,h).lo,e?s:In(t,d,o.getPixelForValue(h)).lo),l){const v=c.slice(0,i+1).reverse().findIndex(y=>!ot(y[a.axis]));i-=Math.max(0,v)}i=oe(i,0,s-1)}if(g){let v=Math.max(In(c,o.axis,f,!0).hi+1,e?0:In(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const y=c.slice(v-1).findIndex(T=>!ot(T[a.axis]));v+=Math.max(0,y)}r=oe(v,i,s)-i}else r=s-i}return{start:i,count:r}}function uv(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const Jo=n=>n===0||n===1,Hp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Dt/e)),qp=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Dt/e)+1,Mr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Yt)+1,easeOutSine:n=>Math.sin(n*Yt),easeInOutSine:n=>-.5*(Math.cos(_t*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>Jo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>Jo(n)?n:Hp(n,.075,.3),easeOutElastic:n=>Jo(n)?n:qp(n,.075,.3),easeInOutElastic(n){return Jo(n)?n:n<.5?.5*Hp(n*2,.1125,.45):.5+.5*qp(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Mr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Mr.easeInBounce(n*2)*.5:Mr.easeOutBounce(n*2-1)*.5+.5};function Yd(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Wp(n){return Yd(n)?n:new Yr(n)}function Il(n){return Yd(n)?n:new Yr(n).saturate(.5).darken(.1).hexString()}const uC=["x","y","borderWidth","radius","tension"],dC=["color","borderColor","backgroundColor"];function hC(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:dC},numbers:{type:"number",properties:uC}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function fC(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Gp=new Map;function pC(n,t){t=t||{};const e=n+JSON.stringify(t);let s=Gp.get(e);return s||(s=new Intl.NumberFormat(n,t),Gp.set(e,s)),s}function vo(n,t,e){return pC(t,e).format(n)}const dv={values(n){return Mt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(i="scientific"),r=mC(n,e)}const o=Gn(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),vo(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(Gn(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?dv.numeric.call(this,n,t,e):""}};function mC(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Dc={formatters:dv};function gC(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Dc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Hs=Object.create(null),bu=Object.create(null);function Nr(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function Al(n,t,e){return typeof t=="string"?Kr(Nr(n,t),e):Kr(Nr(n,""),t)}class _C{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>Il(i.backgroundColor),this.hoverBorderColor=(s,i)=>Il(i.borderColor),this.hoverColor=(s,i)=>Il(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Al(this,t,e)}get(t){return Nr(this,t)}describe(t,e){return Al(bu,t,e)}override(t,e){return Al(Hs,t,e)}route(t,e,s,i){const r=Nr(this,t),o=Nr(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[i];return lt(c)?Object.assign({},l,c):tt(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Nt=new _C({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[hC,fC,gC]);function yC(n){return!n||ot(n.size)||ot(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function Za(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function vC(n,t,e,s){s=s||{};let i=s.data=s.data||{},r=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},r=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!Mt(h))o=Za(n,i,r,o,h);else if(Mt(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!Mt(f)&&(o=Za(n,i,r,o,f));n.restore();const m=r.length/2;if(m>e.length){for(c=0;c<m;c++)delete i[r[c]];r.splice(0,m)}return o}function ys(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function Yp(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function xu(n,t,e,s){hv(n,t,e,s,null)}function hv(n,t,e,s,i){let r,o,a,c,l,d,h,f;const m=t.pointStyle,g=t.rotation,v=t.radius;let y=(g||0)*ZS;if(m&&typeof m=="object"&&(r=m.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(y),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(v)||v<=0)){switch(n.beginPath(),m){default:i?n.ellipse(e,s,i/2,v,0,0,Dt):n.arc(e,s,v,0,Dt),n.closePath();break;case"triangle":d=i?i/2:v,n.moveTo(e+Math.sin(y)*d,s-Math.cos(y)*v),y+=Bp,n.lineTo(e+Math.sin(y)*d,s-Math.cos(y)*v),y+=Bp,n.lineTo(e+Math.sin(y)*d,s-Math.cos(y)*v),n.closePath();break;case"rectRounded":l=v*.516,c=v-l,o=Math.cos(y+_s)*c,h=Math.cos(y+_s)*(i?i/2-l:c),a=Math.sin(y+_s)*c,f=Math.sin(y+_s)*(i?i/2-l:c),n.arc(e-h,s-a,l,y-_t,y-Yt),n.arc(e+f,s-o,l,y-Yt,y),n.arc(e+h,s+a,l,y,y+Yt),n.arc(e-f,s+o,l,y+Yt,y+_t),n.closePath();break;case"rect":if(!g){c=Math.SQRT1_2*v,d=i?i/2:c,n.rect(e-d,s-c,2*d,2*c);break}y+=_s;case"rectRot":h=Math.cos(y)*(i?i/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(i?i/2:v),n.moveTo(e-h,s-a),n.lineTo(e+f,s-o),n.lineTo(e+h,s+a),n.lineTo(e-f,s+o),n.closePath();break;case"crossRot":y+=_s;case"cross":h=Math.cos(y)*(i?i/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(i?i/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"star":h=Math.cos(y)*(i?i/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(i?i/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o),y+=_s,h=Math.cos(y)*(i?i/2:v),o=Math.cos(y)*v,a=Math.sin(y)*v,f=Math.sin(y)*(i?i/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"line":o=i?i/2:Math.cos(y)*v,a=Math.sin(y)*v,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(y)*(i?i/2:v),s+Math.sin(y)*v);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function An(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Oc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Mc(n){n.restore()}function bC(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function xC(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function wC(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),ot(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function EC(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,c=e-r.actualBoundingBoxAscent,l=e+r.actualBoundingBoxDescent,d=i.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function TC(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function qs(n,t,e,s,i,r={}){const o=Mt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let c,l;for(n.save(),n.font=i.string,wC(n,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&TC(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),ot(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(l,e,s,r.maxWidth)),n.fillText(l,e,s,r.maxWidth),EC(n,e,s,l,r),s+=Number(i.lineHeight);n.restore()}function Jr(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*_t,_t,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,_t,Yt,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,Yt,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-Yt,!0),n.lineTo(e+o.topLeft,s)}const IC=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,AC=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function kC(n,t){const e=(""+n).match(IC);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const SC=n=>+n||0;function Kd(n,t){const e={},s=lt(t),i=s?Object.keys(t):t,r=lt(n)?s?o=>tt(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=SC(r(o));return e}function fv(n){return Kd(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Ds(n){return Kd(n,["topLeft","topRight","bottomLeft","bottomRight"])}function Te(n){const t=fv(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ee(n,t){n=n||{},t=t||Nt.font;let e=tt(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=tt(n.style,t.style);s&&!(""+s).match(AC)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:tt(n.family,t.family),lineHeight:kC(tt(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:tt(n.weight,t.weight),string:""};return i.string=yC(i),i}function xr(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function CC(n,t,e){const{min:s,max:i}=n,r=ev(t,(i-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function ds(n,t){return Object.assign(Object.create(n),t)}function Qd(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=_v("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>Qd([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return mv(a,c,()=>VC(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return Qp(a).includes(c)},ownKeys(a){return Qp(a)},set(a,c,l){const d=a._storage||(a._storage=i());return a[c]=d[c]=l,delete a._keys,!0}})}function Oi(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:pv(n,s),setContext:r=>Oi(n,r,e,s),override:r=>Oi(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return mv(r,o,()=>PC(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function pv(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:as(e)?e:()=>e,isIndexable:as(s)?s:()=>s}}const RC=(n,t)=>n?n+Hd(t):t,Xd=(n,t)=>lt(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function mv(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function PC(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return as(a)&&o.isScriptable(t)&&(a=DC(t,a,n,e)),Mt(a)&&a.length&&(a=OC(t,a,n,o.isIndexable)),Xd(t,a)&&(a=Oi(a,i,r&&r[t],o)),a}function DC(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(r,o||s);return a.delete(n),Xd(n,c)&&(c=Jd(i._scopes,i,n,c)),c}function OC(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(lt(t[0])){const c=t,l=i._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=Jd(l,i,n,d);t.push(Oi(h,r,o&&o[n],a))}}return t}function gv(n,t,e){return as(n)?n(t,e):n}const MC=(n,t)=>n===!0?t:typeof n=="string"?os(t,n):void 0;function NC(n,t,e,s,i){for(const r of t){const o=MC(e,r);if(o){n.add(o);const a=gv(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function Jd(n,t,e,s){const i=t._rootScopes,r=gv(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let c=Kp(a,o,e,r||e,s);return c===null||typeof r<"u"&&r!==e&&(c=Kp(a,o,r,c,s),c===null)?!1:Qd(Array.from(a),[""],i,r,()=>LC(t,e,s))}function Kp(n,t,e,s,i){for(;e;)e=NC(n,t,e,s,i);return e}function LC(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return Mt(i)&&lt(e)?e:i||{}}function VC(n,t,e,s){let i;for(const r of t)if(i=_v(RC(r,n),e),typeof i<"u")return Xd(n,i)?Jd(e,s,n,i):i}function _v(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function Qp(n){let t=n._keys;return t||(t=n._keys=FC(n._scopes)),t}function FC(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function yv(n,t,e,s){const{iScale:i}=n,{key:r="r"}=this._parsing,o=new Array(s);let a,c,l,d;for(a=0,c=s;a<c;++a)l=a+e,d=t[l],o[a]={r:i.parse(os(d,r),l)};return o}const $C=Number.EPSILON||1e-14,Mi=(n,t)=>t<n.length&&!n[t].skip&&n[t],vv=n=>n==="x"?"y":"x";function BC(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=vu(r,i),c=vu(o,r);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=s*l,f=s*d;return{previous:{x:r.x-h*(o.x-i.x),y:r.y-h*(o.y-i.y)},next:{x:r.x+f*(o.x-i.x),y:r.y+f*(o.y-i.y)}}}function UC(n,t,e){const s=n.length;let i,r,o,a,c,l=Mi(n,0);for(let d=0;d<s-1;++d)if(c=l,l=Mi(n,d+1),!(!c||!l)){if(Or(t[d],0,$C)){e[d]=e[d+1]=0;continue}i=e[d]/t[d],r=e[d+1]/t[d],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=i*o*t[d],e[d+1]=r*o*t[d])}}function jC(n,t,e="x"){const s=vv(e),i=n.length;let r,o,a,c=Mi(n,0);for(let l=0;l<i;++l){if(o=a,a=c,c=Mi(n,l+1),!a)continue;const d=a[e],h=a[s];o&&(r=(d-o[e])/3,a[`cp1${e}`]=d-r,a[`cp1${s}`]=h-r*t[l]),c&&(r=(c[e]-d)/3,a[`cp2${e}`]=d+r,a[`cp2${s}`]=h+r*t[l])}}function zC(n,t="x"){const e=vv(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,c,l=Mi(n,0);for(o=0;o<s;++o)if(a=c,c=l,l=Mi(n,o+1),!!c){if(l){const d=l[t]-c[t];i[o]=d!==0?(l[e]-c[e])/d:0}r[o]=a?l?cn(i[o-1])!==cn(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}UC(n,i,r),jC(n,r,t)}function Zo(n,t,e){return Math.max(Math.min(n,e),t)}function HC(n,t){let e,s,i,r,o,a=An(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&An(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=Zo(i.cp1x,t.left,t.right),i.cp1y=Zo(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=Zo(i.cp2x,t.left,t.right),i.cp2y=Zo(i.cp2y,t.top,t.bottom)))}function qC(n,t,e,s,i){let r,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")zC(n,i);else{let l=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],c=BC(l,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&HC(n,e)}function Zd(){return typeof window<"u"&&typeof document<"u"}function th(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function tc(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const Nc=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function WC(n,t){return Nc(n).getPropertyValue(t)}const GC=["top","right","bottom","left"];function Os(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=GC[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const YC=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function KC(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,c;if(YC(i,r,n.target))a=i,c=r;else{const l=t.getBoundingClientRect();a=s.clientX-l.left,c=s.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Ts(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=Nc(e),r=i.boxSizing==="border-box",o=Os(i,"padding"),a=Os(i,"border","width"),{x:c,y:l,box:d}=KC(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:m,height:g}=t;return r&&(m-=o.width+a.width,g-=o.height+a.height),{x:Math.round((c-h)/m*e.width/s),y:Math.round((l-f)/g*e.height/s)}}function QC(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&th(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Nc(r),c=Os(a,"border","width"),l=Os(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,s=tc(a.maxWidth,r,"clientWidth"),i=tc(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||Ja,maxHeight:i||Ja}}const Yn=n=>Math.round(n*10)/10;function XC(n,t,e,s){const i=Nc(n),r=Os(i,"margin"),o=tc(i.maxWidth,n,"clientWidth")||Ja,a=tc(i.maxHeight,n,"clientHeight")||Ja,c=QC(n,t,e);let{width:l,height:d}=c;if(i.boxSizing==="content-box"){const f=Os(i,"border","width"),m=Os(i,"padding");l-=m.width+f.width,d-=m.height+f.height}return l=Math.max(0,l-r.width),d=Math.max(0,s?l/s:d-r.height),l=Yn(Math.min(l,o,c.maxWidth)),d=Yn(Math.min(d,a,c.maxHeight)),l&&!d&&(d=Yn(l/2)),(t!==void 0||e!==void 0)&&s&&c.height&&d>c.height&&(d=c.height,l=Yn(Math.floor(d*s))),{width:l,height:d}}function Xp(n,t,e){const s=t||1,i=Yn(n.height*s),r=Yn(n.width*s);n.height=Yn(n.height),n.width=Yn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const JC=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Zd()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function Jp(n,t){const e=WC(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Is(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function ZC(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function t1(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=Is(n,i,e),a=Is(i,r,e),c=Is(r,t,e),l=Is(o,a,e),d=Is(a,c,e);return Is(l,d,e)}const e1=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},n1=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Ei(n,t,e){return n?e1(t,e):n1()}function bv(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function xv(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function wv(n){return n==="angle"?{between:Xr,compare:sC,normalize:be}:{between:Tn,compare:(t,e)=>t-e,normalize:t=>t}}function Zp({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function s1(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=wv(s),c=t.length;let{start:l,end:d,loop:h}=n,f,m;if(h){for(l+=c,d+=c,f=0,m=c;f<m&&o(a(t[l%c][s]),i,r);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function Ev(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:c,normalize:l}=wv(s),{start:d,end:h,loop:f,style:m}=s1(n,t,e),g=[];let v=!1,y=null,T,A,C;const D=()=>c(i,C,T)&&a(i,C)!==0,P=()=>a(r,T)===0||c(r,C,T),O=()=>v||D(),w=()=>!v||P();for(let b=d,x=d;b<=h;++b)A=t[b%o],!A.skip&&(T=l(A[s]),T!==C&&(v=c(T,i,r),y===null&&O()&&(y=a(T,i)===0?b:x),y!==null&&w()&&(g.push(Zp({start:y,end:b,loop:f,count:o,style:m})),y=null),x=b,C=T));return y!==null&&g.push(Zp({start:y,end:h,loop:f,count:o,style:m})),g}function Tv(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=Ev(s[i],n.points,t);r.length&&e.push(...r)}return e}function i1(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function r1(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%i];l.skip||l.stop?a.skip||(s=!1,r.push({start:t%i,end:(c-1)%i,loop:s}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function o1(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=i1(e,i,r,s);if(s===!0)return tm(n,[{start:o,end:a,loop:r}],e,t);const c=a<o?a+i:a,l=!!n._fullLoop&&o===0&&a===i-1;return tm(n,r1(e,o,c,l),e,t)}function tm(n,t,e,s){return!s||!s.setContext||!e?t:a1(n,t,e,s)}function a1(n,t,e,s){const i=n._chart.getContext(),r=em(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=r,h=t[0].start,f=h;function m(g,v,y,T){const A=a?-1:1;if(g!==v){for(g+=c;e[g%c].skip;)g-=A;for(;e[v%c].skip;)v+=A;g%c!==v%c&&(l.push({start:g%c,end:v%c,loop:y,style:T}),d=T,h=v%c)}}for(const g of t){h=a?h:g.start;let v=e[h%c],y;for(f=h+1;f<=g.end;f++){const T=e[f%c];y=em(s.setContext(ds(i,{type:"segment",p0:v,p1:T,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),c1(y,d)&&m(h,f-1,g.loop,d),v=T,d=y}h<f-1&&m(h,f-1,g.loop,d)}return l}function em(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function c1(n,t){if(!t)return!1;const e=[],s=function(i,r){return Yd(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function ta(n,t,e){return n.options.clip?n[e]:t[e]}function l1(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:ta(e,t,"left"),right:ta(e,t,"right"),top:ta(s,t,"top"),bottom:ta(s,t,"bottom")}:t}function Iv(n,t){const e=t._clip;if(e.disabled)return!1;const s=l1(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class u1{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=av.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,c;for(;o>=0;--o)c=r[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var gn=new u1;const nm="transparent",d1={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=Wp(n||nm),i=s.valid&&Wp(t||nm);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class h1{constructor(t,e,s,i){const r=e[s];i=xr([t.to,i,r,t.from]);const o=xr([t.from,r,i]);this._active=!0,this._fn=t.fn||d1[t.type||typeof o],this._easing=Mr[t.easing]||Mr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=xr([t.to,e,i,t.from]),this._from=xr([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let c;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(r,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class Av{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!lt(t))return;const e=Object.keys(Nt.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!lt(r))return;const o={};for(const a of e)o[a]=r[a];(Mt(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=p1(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&f1(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){i.push(...this._animateOptions(t,e));continue}const d=e[l];let h=r[l];const f=s.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}r[l]=h=new h1(f,t,l,d),i.push(h)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return gn.add(this._chart,s),!0}}function f1(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function p1(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function sm(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function m1(n,t,e){if(e===!1)return!1;const s=sm(n,e),i=sm(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function g1(n){let t,e,s,i;return lt(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function kv(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function im(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=i.length;o<a;++o){if(c=+i[o],c===e){if(d=!0,s.all)continue;break}l=n.values[c],zt(l)&&(r||t===0||cn(t)===cn(l))&&(t+=l)}return!d&&!s.all?0:t}function _1(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[i]:d,[r]:n[d]};return a}function kl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function y1(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function v1(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function b1(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function rm(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function om(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,c=r.axis,l=o.axis,d=y1(r,o,s),h=t.length;let f;for(let m=0;m<h;++m){const g=t[m],{[c]:v,[l]:y}=g,T=g._stacks||(g._stacks={});f=T[l]=b1(i,d,v),f[a]=y,f._top=rm(f,o,!0,s.type),f._bottom=rm(f,o,!1,s.type);const A=f._visualValues||(f._visualValues={});A[a]=y}}function Sl(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function x1(n,t){return ds(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function w1(n,t,e){return ds(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function ir(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const Cl=n=>n==="reset"||n==="none",am=(n,t)=>t?n:Object.assign({},n),E1=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:kv(e,!0),values:null};class qe{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=kl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ir(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(h,f,m,g)=>h==="x"?f:h==="r"?g:m,r=e.xAxisID=tt(s.xAxisID,Sl(t,"x")),o=e.yAxisID=tt(s.yAxisID,Sl(t,"y")),a=e.rAxisID=tt(s.rAxisID,Sl(t,"r")),c=e.indexAxis,l=e.iAxisID=i(c,r,o,a),d=e.vAxisID=i(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&zp(this._data,this),t._stacked&&ir(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(lt(e)){const i=this._cachedMeta;this._data=_1(e,i)}else if(s!==e){if(s){zp(s,this);const i=this._cachedMeta;ir(i),i._parsed=[]}e&&Object.isExtensible(e)&&aC(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=kl(e.vScale,e),e.stack!==s.stack&&(i=!0,ir(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(om(this,e._parsed),e._stacked=kl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let c=t===0&&e===i.length?!0:s._sorted,l=t>0&&s._parsed[t-1],d,h,f;if(this._parsing===!1)s._parsed=i,s._sorted=!0,f=i;else{Mt(i[t])?f=this.parseArrayData(s,i,t,e):lt(i[t])?f=this.parseObjectData(s,i,t,e):f=this.parsePrimitiveData(s,i,t,e);const m=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)s._parsed[d+t]=h=f[d],c&&(m()&&(c=!1),l=h);s._sorted=c}o&&om(this,f)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,c=o.axis,l=r.getLabels(),d=r===o,h=new Array(i);let f,m,g;for(f=0,m=i;f<m;++f)g=f+s,h[f]={[a]:d||r.parse(l[g],g),[c]:o.parse(e[g],g)};return h}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let c,l,d,h;for(c=0,l=i;c<l;++c)d=c+s,h=e[d],a[c]={x:r.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(i);let d,h,f,m;for(d=0,h=i;d<h;++d)f=d+s,m=e[f],l[d]={x:r.parse(os(m,a),f),y:o.parse(os(m,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:kv(i,!0),values:e._stacks[t.axis]._visualValues};return im(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=im(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),c=E1(e,s,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=v1(a);let f,m;function g(){m=i[f];const v=m[a.axis];return!zt(m[t.axis])||d>v||h<v}for(f=0;f<o&&!(!g()&&(this.updateRangeFromParsed(l,t,m,c),r));++f);if(r){for(f=o-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(l,t,m,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],zt(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=g1(tt(this.options.clip,m1(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||i.length-a,l=this.options.drawActiveElementsOnTop;let d;for(s.dataset&&s.dataset.draw(t,r,a,c),d=a;d<a+c;++d){const h=i[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,r))}for(d=0;d<o.length;++d)o[d].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=w1(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=x1(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&Qr(s);if(a)return am(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=i?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),m=Object.keys(Nt.elements[t]),g=()=>this.getContext(s,i,e),v=l.resolveNamedOptions(f,m,g,h);return v.$shared&&(v.$shared=c,r[o]=Object.freeze(am(v,c))),v}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let c;if(i.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,s,e))}const l=new Av(i,c&&c.animations);return c&&c._cacheable&&(r[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Cl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){Cl(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!Cl(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&ir(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}N(qe,"defaults",{}),N(qe,"datasetElementType",null),N(qe,"dataElementType",null);function T1(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=ov(s.sort((i,r)=>i-r))}return n._cache.$bar}function I1(n){const t=n.iScale,e=T1(t,n.type);let s=t._length,i,r,o,a;const c=()=>{o===32767||o===-32768||(Qr(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),c();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),c();return s}function A1(n,t,e,s){const i=e.barThickness;let r,o;return ot(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function k1(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const c=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const l=r-(r-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:l}}function S1(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:i,end:r,min:o,max:a}}function Sv(n,t,e,s){return Mt(n)?S1(n,t,e,s):t[e.axis]=e.parse(n,s),t}function cm(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,c=[];let l,d,h,f;for(l=e,d=e+s;l<d;++l)f=t[l],h={},h[i.axis]=a||i.parse(o[l],l),c.push(Sv(f,h,r,l));return c}function Rl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function C1(n,t,e){return n!==0?cn(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function R1(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function P1(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=R1(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=l:(e._bottom||0)===s?i=d:(r[lm(d,o,a,c)]=!0,i=l)),r[lm(i,o,a,c)]=!0,n.borderSkipped=r}function lm(n,t,e,s){return s?(n=D1(n,t,e),n=um(n,e,t)):n=um(n,t,e),n}function D1(n,t,e){return n===t?e:n===e?t:n}function um(n,t,e){return n==="start"?t:n==="end"?e:n}function O1(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class ba extends qe{parsePrimitiveData(t,e,s,i){return cm(t,e,s,i)}parseArrayData(t,e,s,i){return cm(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=r.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,m,g,v;for(f=s,m=s+i;f<m;++f)v=e[f],g={},g[r.axis]=r.parse(os(v,l),f),h.push(Sv(os(v,d),g,o,f));return h}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=Rl(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,i);for(let m=e;m<e+s;m++){const g=this.getParsed(m),v=r||ot(g[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),y=this._calculateBarIndexPixels(m,d),T=(g._stacks||{})[a.axis],A={horizontal:l,base:v.base,enableBorderRadius:!T||Rl(g._custom)||o===T._top||o===T._bottom,x:l?v.head:y.center,y:l?y.center:v.head,height:l?y.size:Math.abs(v.size),width:l?Math.abs(v.size):y.size};f&&(A.options=h||this.resolveDataElementOptions(m,t[m].active?"active":i));const C=A.options||t[m].options;P1(A,C,T,o),O1(A,C,d.ratio),this.updateElement(t[m],m,A,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],l=d=>{const h=d._parsed.find(m=>m[s.axis]===c),f=h&&h[d.vScale.axis];if(ot(f)||isNaN(f))return!0};for(const d of i)if(!(e!==void 0&&l(d))&&((r===!1||o.indexOf(d.stack)===-1||r===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[tt(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||I1(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,c=this.getParsed(t),l=c._custom,d=Rl(l);let h=c[e.axis],f=0,m=s?this.applyStack(e,c,s):h,g,v;m!==h&&(f=m-h,m=h),d&&(h=l.barStart,m=l.barEnd-l.barStart,h!==0&&cn(h)!==cn(l.barEnd)&&(f=0),f+=h);const y=!ot(r)&&!d?r:f;let T=e.getPixelForValue(y);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(f+m):g=T,v=g-T,Math.abs(v)<o){v=C1(v,e,a)*o,h===a&&(T-=v/2);const A=e.getPixelForDecimal(0),C=e.getPixelForDecimal(1),D=Math.min(A,C),P=Math.max(A,C);T=Math.max(Math.min(T,P),D),g=T+v,s&&!d&&(c._stacks[e.axis]._visualValues[i]=e.getValueForPixel(g)-e.getValueForPixel(T))}if(T===e.getPixelForValue(a)){const A=cn(v)*e.getLineWidthForValue(a)/2;T+=A,v-=A}return{size:v,base:T,head:g,center:g+v/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=tt(i.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=r?this._getStackCount(t):e.stackCount,h=i.barThickness==="flex"?k1(t,e,i,d*l):A1(t,e,i,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(tt(f,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+m;a=h.start+h.chunk*g+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}N(ba,"id","bar"),N(ba,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),N(ba,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class xa extends qe{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const r=super.parsePrimitiveData(t,e,s,i);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+s).radius;return r}parseArrayData(t,e,s,i){const r=super.parseArrayData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=tt(a[2],this.resolveDataElementOptions(o+s).radius)}return r}parseObjectData(t,e,s,i){const r=super.parseObjectData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=tt(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y),l=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,i),d=o.axis,h=a.axis;for(let f=e;f<e+s;f++){const m=t[f],g=!r&&this.getParsed(f),v={},y=v[d]=r?o.getPixelForDecimal(.5):o.getPixelForValue(g[d]),T=v[h]=r?a.getBasePixel():a.getPixelForValue(g[h]);v.skip=isNaN(y)||isNaN(T),l&&(v.options=c||this.resolveDataElementOptions(f,m.active?"active":i),r&&(v.options.radius=0)),this.updateElement(m,f,v,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return e!=="active"&&(i.radius=0),i.radius+=tt(s&&s._custom,r),i}}N(xa,"id","bubble"),N(xa,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),N(xa,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function M1(n,t,e){let s=1,i=1,r=0,o=0;if(t<Dt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),m=(C,D,P)=>Xr(C,a,c,!0)?1:Math.max(D,D*e,P,P*e),g=(C,D,P)=>Xr(C,a,c,!0)?-1:Math.min(D,D*e,P,P*e),v=m(0,l,h),y=m(Yt,d,f),T=g(_t,l,h),A=g(_t+Yt,d,f);s=(v-T)/2,i=(y-A)/2,r=-(v+T)/2,o=-(y+A)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class Cs extends qe{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=c=>+s[c];if(lt(s[t])){const{key:c="value"}=this._parsing;r=l=>+os(s[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return ze(this.options.rotation-90)}_getCircumference(){return ze(this.options.circumference)}_getRotationExtents(){let t=Dt,e=-Dt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(WS(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:m,offsetX:g,offsetY:v}=M1(h,d,c),y=(s.width-o)/f,T=(s.height-o)/m,A=Math.max(Math.min(y,T)/2,0),C=ev(this.options.radius,A),D=Math.max(C*c,0),P=(C-D)/this._getVisibleDatasetWeightTotal();this.offsetX=g*C,this.offsetY=v*C,i.total=this.calculateTotal(),this.outerRadius=C-P*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-P*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/Dt)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=r&&l.animateScale,m=f?0:this.innerRadius,g=f?0:this.outerRadius,{sharedOptions:v,includeOptions:y}=this._getSharedOptions(e,i);let T=this._getRotation(),A;for(A=0;A<e;++A)T+=this._circumference(A,r);for(A=e;A<e+s;++A){const C=this._circumference(A,r),D=t[A],P={x:d+this.offsetX,y:h+this.offsetY,startAngle:T,endAngle:T+C,circumference:C,outerRadius:g,innerRadius:m};y&&(P.options=v||this.resolveDataElementOptions(A,D.active?"active":i)),T+=C,this.updateElement(D,A,P,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Dt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=vo(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,c;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)c=a.resolveDataElementOptions(i),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(tt(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}N(Cs,"id","doughnut"),N(Cs,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),N(Cs,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),N(Cs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class wa extends qe{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=lv(e,i,o);this._drawStart=a,this._drawCount=c,uv(e)&&(a=0,c=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:l},t),this.updateElements(i,a,c,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,i),f=o.axis,m=a.axis,{spanGaps:g,segment:v}=this.options,y=Di(g)?g:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||r||i==="none",A=e+s,C=t.length;let D=e>0&&this.getParsed(e-1);for(let P=0;P<C;++P){const O=t[P],w=T?O:{};if(P<e||P>=A){w.skip=!0;continue}const b=this.getParsed(P),x=ot(b[m]),I=w[f]=o.getPixelForValue(b[f],P),S=w[m]=r||x?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[m],P);w.skip=isNaN(I)||isNaN(S)||x,w.stop=P>0&&Math.abs(b[f]-D[f])>y,v&&(w.parsed=b,w.raw=l.data[P]),h&&(w.options=d||this.resolveDataElementOptions(P,O.active?"active":i)),T||this.updateElement(O,P,w,i),D=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}N(wa,"id","line"),N(wa,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),N(wa,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Lr extends qe{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=vo(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:r}}parseObjectData(t,e,s,i){return yv.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const r=this.getParsed(i).r;!isNaN(r)&&this.chart.getDataVisibility(i)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(i/2,0),o=Math.max(s.cutoutPercentage?r/100*s.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*_t;let m=f,g;const v=360/this.countVisibleElements();for(g=0;g<e;++g)m+=this._computeAngle(g,i,v);for(g=e;g<e+s;g++){const y=t[g];let T=m,A=m+this._computeAngle(g,i,v),C=o.getDataVisibility(g)?l.getDistanceFromCenterForValue(this.getParsed(g).r):0;m=A,r&&(c.animateScale&&(C=0),c.animateRotate&&(T=A=f));const D={x:d,y:h,innerRadius:0,outerRadius:C,startAngle:T,endAngle:A,options:this.resolveDataElementOptions(g,y.active?"active":i)};this.updateElement(y,g,D,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?ze(this.resolveDataElementOptions(t,e).angle||s):0}}N(Lr,"id","polarArea"),N(Lr,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),N(Lr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:i,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class wu extends Cs{}N(wu,"id","pie"),N(wu,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Ea extends qe{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return yv.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],r=e.iScale.getLabels();if(s.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===i.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const r=this._cachedMeta.rScale,o=i==="reset";for(let a=e;a<e+s;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":i),d=r.getPointPositionForValue(a,this.getParsed(a).r),h=o?r.xCenter:d.x,f=o?r.yCenter:d.y,m={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,m,i)}}}N(Ea,"id","radar"),N(Ea,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),N(Ea,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ta extends qe{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),c=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=lv(e,s,i);if(this._drawStart=r,this._drawCount=o,uv(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,i),h=this.getSharedOptions(d),f=this.includeOptions(i,h),m=o.axis,g=a.axis,{spanGaps:v,segment:y}=this.options,T=Di(v)?v:Number.POSITIVE_INFINITY,A=this.chart._animationsDisabled||r||i==="none";let C=e>0&&this.getParsed(e-1);for(let D=e;D<e+s;++D){const P=t[D],O=this.getParsed(D),w=A?P:{},b=ot(O[g]),x=w[m]=o.getPixelForValue(O[m],D),I=w[g]=r||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,O,c):O[g],D);w.skip=isNaN(x)||isNaN(I)||b,w.stop=D>0&&Math.abs(O[m]-C[m])>T,y&&(w.parsed=O,w.raw=l.data[D]),f&&(w.options=h||this.resolveDataElementOptions(D,P.active?"active":i)),A||this.updateElement(P,D,w,i),C=O}this.updateSharedOptions(h,i,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}N(Ta,"id","scatter"),N(Ta,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),N(Ta,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var N1=Object.freeze({__proto__:null,BarController:ba,BubbleController:xa,DoughnutController:Cs,LineController:wa,PieController:wu,PolarAreaController:Lr,RadarController:Ea,ScatterController:Ta});function vs(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class eh{constructor(t){N(this,"options");this.options=t||{}}static override(t){Object.assign(eh.prototype,t)}init(){}formats(){return vs()}parse(){return vs()}format(){return vs()}add(){return vs()}diff(){return vs()}startOf(){return vs()}endOf(){return vs()}}var Cv={_date:eh};function L1(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?rC:In;if(s){if(i._sharedOptions){const d=r[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(r,t,e-h),m=l(r,t,e+h);return{lo:f.lo,hi:m.hi}}}}else{const d=l(r,t,e);if(c){const{vScale:h}=i._cachedMeta,{_parsed:f}=n,m=f.slice(0,d.lo+1).reverse().findIndex(v=>!ot(v[h.axis]));d.lo-=Math.max(0,m);const g=f.slice(d.hi).findIndex(v=>!ot(v[h.axis]));d.hi+=Math.max(0,g)}return d}}return{lo:0,hi:r.length-1}}function Lc(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=r.length;a<c;++a){const{index:l,data:d}=r[a],{lo:h,hi:f}=L1(r[a],t,o,i);for(let m=h;m<=f;++m){const g=d[m];g.skip||s(g,l,m)}}}function V1(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Pl(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||Lc(n,e,t,function(a,c,l){!i&&!An(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:c,index:l})},!0),r}function F1(n,t,e,s){let i=[];function r(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],s),{angle:h}=iv(o,{x:t.x,y:t.y});Xr(h,l,d)&&i.push({element:o,datasetIndex:a,index:c})}return Lc(n,e,t,r),i}function $1(n,t,e,s,i,r){let o=[];const a=V1(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const m=d.inRange(t.x,t.y,i);if(s&&!m)return;const g=d.getCenterPoint(i);if(!(!!r||n.isPointInArea(g))&&!m)return;const y=a(t,g);y<c?(o=[{element:d,datasetIndex:h,index:f}],c=y):y===c&&o.push({element:d,datasetIndex:h,index:f})}return Lc(n,e,t,l),o}function Dl(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?F1(n,t,e,i):$1(n,t,e,s,i,r)}function dm(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Lc(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],i)&&(r.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,i))}),s&&!a?[]:r}var B1={modes:{index(n,t,e,s){const i=Ts(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Pl(n,i,r,s,o):Dl(n,i,r,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,s){const i=Ts(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Pl(n,i,r,s,o):Dl(n,i,r,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,s){const i=Ts(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Pl(n,i,r,s,o)},nearest(n,t,e,s){const i=Ts(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Dl(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=Ts(t,n);return dm(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=Ts(t,n);return dm(n,i,"y",e.intersect,s)}}};const Rv=["left","top","right","bottom"];function rr(n,t){return n.filter(e=>e.pos===t)}function hm(n,t){return n.filter(e=>Rv.indexOf(e.pos)===-1&&e.box.axis===t)}function or(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function U1(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function j1(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!Rv.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function z1(n,t){const e=j1(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*s:c&&t.availableWidth,a.height=i):(a.width=s,a.height=d?d*i:c&&t.availableHeight)}return e}function H1(n){const t=U1(n),e=or(t.filter(l=>l.box.fullSize),!0),s=or(rr(t,"left"),!0),i=or(rr(t,"right")),r=or(rr(t,"top"),!0),o=or(rr(t,"bottom")),a=hm(t,"x"),c=hm(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(c).concat(o).concat(a),chartArea:rr(t,"chartArea"),vertical:s.concat(i).concat(c),horizontal:r.concat(o).concat(a)}}function fm(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function Pv(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function q1(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!lt(i)){e.size&&(n[i]-=e.size);const h=s[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?r.height:r.width),e.size=h.size/h.count,n[i]+=e.size}r.getPadding&&Pv(o,r.getPadding());const a=Math.max(0,t.outerWidth-fm(o,n,"left","right")),c=Math.max(0,t.outerHeight-fm(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function W1(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function G1(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function wr(n,t,e,s){const i=[];let r,o,a,c,l,d;for(r=0,o=n.length,l=0;r<o;++r){a=n[r],c=a.box,c.update(a.width||t.w,a.height||t.h,G1(a.horizontal,t));const{same:h,other:f}=q1(t,e,a,s);l|=h&&i.length,d=d||f,c.fullSize||i.push(a)}return l&&wr(i,t,e,s)||d}function ea(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function pm(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const c=a.box,l=s[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;Qr(l.start)&&(o=l.start),c.fullSize?ea(c,i.left,o,e.outerWidth-i.right-i.left,f):ea(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;Qr(l.start)&&(r=l.start),c.fullSize?ea(c,r,i.top,f,e.outerHeight-i.bottom-i.top):ea(c,r,t.top+l.placed,f,h),l.start=r,l.placed+=h,r=c.right}}t.x=r,t.y=o}var we={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=Te(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=H1(n.boxes),c=a.vertical,l=a.horizontal;wt(n.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const d=c.reduce((v,y)=>y.box.options&&y.box.options.display===!1?v:v+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},i);Pv(f,Te(s));const m=Object.assign({maxPadding:f,w:r,h:o,x:i.left,y:i.top},i),g=z1(c.concat(l),h);wr(a.fullSize,m,h,g),wr(c,m,h,g),wr(l,m,h,g)&&wr(c,m,h,g),W1(m),pm(a.leftAndTop,m,h,g),m.x+=m.w,m.y+=m.h,pm(a.rightAndBottom,m,h,g),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},wt(a.chartArea,v=>{const y=v.box;Object.assign(y,n.chartArea),y.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class Dv{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class Y1 extends Dv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ia="$chartjs",K1={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},mm=n=>n===null||n==="";function Q1(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[Ia]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",mm(i)){const r=Jp(n,"width");r!==void 0&&(n.width=r)}if(mm(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Jp(n,"height");r!==void 0&&(n.height=r)}return n}const Ov=JC?{passive:!0}:!1;function X1(n,t,e){n&&n.addEventListener(t,e,Ov)}function J1(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Ov)}function Z1(n,t){const e=K1[n.type]||n.type,{x:s,y:i}=Ts(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function ec(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function tR(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ec(a.addedNodes,s),o=o&&!ec(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function eR(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ec(a.removedNodes,s),o=o&&!ec(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const Zr=new Map;let gm=0;function Mv(){const n=window.devicePixelRatio;n!==gm&&(gm=n,Zr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function nR(n,t){Zr.size||window.addEventListener("resize",Mv),Zr.set(n,t)}function sR(n){Zr.delete(n),Zr.size||window.removeEventListener("resize",Mv)}function iR(n,t,e){const s=n.canvas,i=s&&th(s);if(!i)return;const r=cv((a,c)=>{const l=i.clientWidth;e(a,c),l<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||r(l,d)});return o.observe(i),nR(n,r),o}function Ol(n,t,e){e&&e.disconnect(),t==="resize"&&sR(n)}function rR(n,t,e){const s=n.canvas,i=cv(r=>{n.ctx!==null&&e(Z1(r,n))},n);return X1(s,t,i),i}class oR extends Dv{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(Q1(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Ia])return!1;const s=e[Ia].initial;["height","width"].forEach(r=>{const o=s[r];ot(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[Ia],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:tR,detach:eR,resize:iR}[e]||rR;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:Ol,detach:Ol,resize:Ol}[e]||J1)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return XC(t,e,s,i)}isAttached(t){const e=t&&th(t);return!!(e&&e.isConnected)}}function aR(n){return!Zd()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?Y1:oR}class Ke{constructor(){N(this,"x");N(this,"y");N(this,"active",!1);N(this,"options");N(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Di(this.x)&&Di(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}N(Ke,"defaults",{}),N(Ke,"defaultRoutes");function cR(n,t){const e=n.options.ticks,s=lR(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?dR(t):[],o=r.length,a=r[0],c=r[o-1],l=[];if(o>i)return hR(t,l,r,o/i),l;const d=uR(r,t,i);if(o>0){let h,f;const m=o>1?Math.round((c-a)/(o-1)):null;for(na(t,l,d,ot(m)?0:a-m,a),h=0,f=o-1;h<f;h++)na(t,l,d,r[h],r[h+1]);return na(t,l,d,c,ot(m)?t.length:c+m),l}return na(t,l,d),l}function lR(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function uR(n,t,e){const s=fR(n),i=t.length/e;if(!s)return Math.max(i,1);const r=tC(s);for(let o=0,a=r.length-1;o<a;o++){const c=r[o];if(c>i)return c}return Math.max(i,1)}function dR(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function hR(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function na(n,t,e,s,i){const r=tt(s,0),o=Math.min(tt(i,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),i&&(c=i-s,e=c/Math.floor(c/e)),d=r;d<0;)a++,d=Math.round(r+a*e);for(l=Math.max(r,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(r+a*e))}function fR(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const pR=n=>n==="left"?"right":n==="right"?"left":n,_m=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,ym=(n,t)=>Math.min(t||n,n);function vm(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function mR(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(i),l;if(!(e&&(s===1?l=Math.max(c-r,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<r-a||c>o+a)))return c}function gR(n,t){wt(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function ar(n){return n.drawTicks?n.tickLength:0}function bm(n,t){if(!n.display)return 0;const e=ee(n.font,t),s=Te(n.padding);return(Mt(n.text)?n.text.length:1)*e.lineHeight+s.height}function _R(n,t){return ds(n,{scale:t,type:"scale"})}function yR(n,t,e){return ds(n,{tick:e,index:t,type:"tick"})}function vR(n,t,e){let s=Gd(n);return(e&&t!=="right"||!e&&t==="right")&&(s=pR(s)),s}function bR(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,m,g;const v=o-i,y=a-r;if(n.isHorizontal()){if(m=ye(s,r,a),lt(e)){const T=Object.keys(e)[0],A=e[T];g=d[T].getPixelForValue(A)+v-t}else e==="center"?g=(l.bottom+l.top)/2+v-t:g=_m(n,e,t);f=a-r}else{if(lt(e)){const T=Object.keys(e)[0],A=e[T];m=d[T].getPixelForValue(A)-y+t}else e==="center"?m=(l.left+l.right)/2-y+t:m=_m(n,e,t);g=ye(s,o,i),h=e==="left"?-Yt:Yt}return{titleX:m,titleY:g,maxWidth:f,rotation:h}}class Xs extends Ke{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=Me(t,Number.POSITIVE_INFINITY),e=Me(e,Number.NEGATIVE_INFINITY),s=Me(s,Number.POSITIVE_INFINITY),i=Me(i,Number.NEGATIVE_INFINITY),{min:Me(t,s),max:Me(e,i),minDefined:zt(t),maxDefined:zt(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:Me(e,Me(s,e)),max:Me(s,Me(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){St(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=CC(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?vm(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=cR(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){St(this.options.afterUpdate,[this])}beforeSetDimensions(){St(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){St(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),St(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){St(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=St(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){St(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){St(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=ym(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,c,l;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,m=oe(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),h+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-ar(t.grid)-e.padding-bm(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=qd(Math.min(Math.asin(oe((d.highest.height+6)/a,-1,1)),Math.asin(oe(c/l,-1,1))-Math.asin(oe(f/l,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){St(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){St(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=bm(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=ar(r)+c):(t.height=this.maxHeight,t.width=ar(r)+c),s.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),m=s.padding*2,g=ze(this.labelRotation),v=Math.cos(g),y=Math.sin(g);if(a){const T=s.mirror?0:y*h.width+v*f.height;t.height=Math.min(this.maxHeight,t.height+T+m)}else{const T=s.mirror?0:v*h.width+y*f.height;t.width=Math.min(this.maxWidth,t.width+T+m)}this._calculatePadding(l,d,y,v)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,m=0;c?l?(f=i*t.width,m=s*e.height):(f=s*t.height,m=i*e.width):r==="start"?m=e.width:r==="end"?f=t.width:r!=="inner"&&(f=t.width/2,m=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((m-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;r==="start"?(d=0,h=t.height):r==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){St(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)ot(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=vm(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/ym(e,s));let l=0,d=0,h,f,m,g,v,y,T,A,C,D,P;for(h=0;h<e;h+=c){if(g=t[h].label,v=this._resolveTickFontOptions(h),i.font=y=v.string,T=r[y]=r[y]||{data:{},gc:[]},A=v.lineHeight,C=D=0,!ot(g)&&!Mt(g))C=Za(i,T.data,T.gc,C,g),D=A;else if(Mt(g))for(f=0,m=g.length;f<m;++f)P=g[f],!ot(P)&&!Mt(P)&&(C=Za(i,T.data,T.gc,C,P),D+=A);o.push(C),a.push(D),l=Math.max(C,l),d=Math.max(D,d)}gR(r,e);const O=o.indexOf(l),w=a.indexOf(d),b=x=>({width:o[x]||0,height:a[x]||0});return{first:b(0),last:b(e-1),widest:b(O),highest:b(w),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return iC(this._alignToPixels?ys(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=yR(this.getContext(),t,s))}return this.$context||(this.$context=_R(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=ze(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*s>a*i?a/s:c/i:c*i<a*s?c/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,c=r.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=ar(r),m=[],g=a.setContext(this.getContext()),v=g.display?g.width:0,y=v/2,T=function(z){return ys(s,z,v)};let A,C,D,P,O,w,b,x,I,S,R,k;if(o==="top")A=T(this.bottom),w=this.bottom-f,x=A-y,S=T(t.top)+y,k=t.bottom;else if(o==="bottom")A=T(this.top),S=t.top,k=T(t.bottom)-y,w=A+y,x=this.top+f;else if(o==="left")A=T(this.right),O=this.right-f,b=A-y,I=T(t.left)+y,R=t.right;else if(o==="right")A=T(this.left),I=t.left,R=T(t.right)-y,O=A+y,b=this.left+f;else if(e==="x"){if(o==="center")A=T((t.top+t.bottom)/2+.5);else if(lt(o)){const z=Object.keys(o)[0],Q=o[z];A=T(this.chart.scales[z].getPixelForValue(Q))}S=t.top,k=t.bottom,w=A+y,x=w+f}else if(e==="y"){if(o==="center")A=T((t.left+t.right)/2);else if(lt(o)){const z=Object.keys(o)[0],Q=o[z];A=T(this.chart.scales[z].getPixelForValue(Q))}O=A-y,b=O-f,I=t.left,R=t.right}const q=tt(i.ticks.maxTicksLimit,h),B=Math.max(1,Math.ceil(h/q));for(C=0;C<h;C+=B){const z=this.getContext(C),Q=r.setContext(z),rt=a.setContext(z),st=Q.lineWidth,ut=Q.color,Zt=rt.dash||[],kt=rt.dashOffset,Y=Q.tickWidth,bt=Q.tickColor,Ut=Q.tickBorderDash||[],he=Q.tickBorderDashOffset;D=mR(this,C,c),D!==void 0&&(P=ys(s,D,st),l?O=b=I=R=P:w=x=S=k=P,m.push({tx1:O,ty1:w,tx2:b,ty2:x,x1:I,y1:S,x2:R,y2:k,width:st,color:ut,borderDash:Zt,borderDashOffset:kt,tickWidth:Y,tickColor:bt,tickBorderDash:Ut,tickBorderDashOffset:he}))}return this._ticksLength=h,this._borderValue=A,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=r,f=ar(s.grid),m=f+d,g=h?-d:m,v=-ze(this.labelRotation),y=[];let T,A,C,D,P,O,w,b,x,I,S,R,k="middle";if(i==="top")O=this.bottom-g,w=this._getXAxisLabelAlignment();else if(i==="bottom")O=this.top+g,w=this._getXAxisLabelAlignment();else if(i==="left"){const B=this._getYAxisLabelAlignment(f);w=B.textAlign,P=B.x}else if(i==="right"){const B=this._getYAxisLabelAlignment(f);w=B.textAlign,P=B.x}else if(e==="x"){if(i==="center")O=(t.top+t.bottom)/2+m;else if(lt(i)){const B=Object.keys(i)[0],z=i[B];O=this.chart.scales[B].getPixelForValue(z)+m}w=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")P=(t.left+t.right)/2-m;else if(lt(i)){const B=Object.keys(i)[0],z=i[B];P=this.chart.scales[B].getPixelForValue(z)}w=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?k="top":c==="end"&&(k="bottom"));const q=this._getLabelSizes();for(T=0,A=a.length;T<A;++T){C=a[T],D=C.label;const B=r.setContext(this.getContext(T));b=this.getPixelForTick(T)+r.labelOffset,x=this._resolveTickFontOptions(T),I=x.lineHeight,S=Mt(D)?D.length:1;const z=S/2,Q=B.color,rt=B.textStrokeColor,st=B.textStrokeWidth;let ut=w;o?(P=b,w==="inner"&&(T===A-1?ut=this.options.reverse?"left":"right":T===0?ut=this.options.reverse?"right":"left":ut="center"),i==="top"?l==="near"||v!==0?R=-S*I+I/2:l==="center"?R=-q.highest.height/2-z*I+I:R=-q.highest.height+I/2:l==="near"||v!==0?R=I/2:l==="center"?R=q.highest.height/2-z*I:R=q.highest.height-S*I,h&&(R*=-1),v!==0&&!B.showLabelBackdrop&&(P+=I/2*Math.sin(v))):(O=b,R=(1-S)*I/2);let Zt;if(B.showLabelBackdrop){const kt=Te(B.backdropPadding),Y=q.heights[T],bt=q.widths[T];let Ut=R-kt.top,he=0-kt.left;switch(k){case"middle":Ut-=Y/2;break;case"bottom":Ut-=Y;break}switch(w){case"center":he-=bt/2;break;case"right":he-=bt;break;case"inner":T===A-1?he-=bt:T>0&&(he-=bt/2);break}Zt={left:he,top:Ut,width:bt+kt.width,height:Y+kt.height,color:B.backdropColor}}y.push({label:D,font:x,textOffset:R,options:{rotation:v,color:Q,strokeColor:rt,strokeWidth:st,textAlign:ut,textBaseline:k,translation:[P,O],backdrop:Zt}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-ze(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,c=o.widest.width;let l,d;return e==="left"?i?(d=this.right+r,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?i?(d=this.left+r,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(c,l,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(l.x,l.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const c=i[r];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=ys(t,this.left,o)-o/2,d=ys(t,this.right,a)+a/2,h=f=c):(h=ys(t,this.top,o)-o/2,f=ys(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&Oc(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,c=o.font,l=o.label,d=o.textOffset;qs(s,l,0,d,c,a)}i&&Mc(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=ee(s.font),o=Te(s.padding),a=s.align;let c=r.lineHeight/2;e==="bottom"||e==="center"||lt(e)?(c+=o.bottom,Mt(s.text)&&(c+=r.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=bR(this,c,e,a);qs(t,s.text,0,0,r,{color:s.color,maxWidth:h,rotation:f,textAlign:vR(a,e,i),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=tt(t.grid&&t.grid.z,-1),i=tt(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Xs.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return ee(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class sa{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;ER(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,xR(t,o,s),this.override&&Nt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in Nt[i]&&(delete Nt[i][s],this.override&&delete Hs[s])}}function xR(n,t,e){const s=Kr(Object.create(null),[e?Nt.get(e):{},Nt.get(t),n.defaults]);Nt.set(t,s),n.defaultRoutes&&wR(t,n.defaultRoutes),n.descriptors&&Nt.describe(t,n.descriptors)}function wR(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Nt.route(r,i,c,a)})}function ER(n){return"id"in n&&"defaults"in n}class TR{constructor(){this.controllers=new sa(qe,"datasets",!0),this.elements=new sa(Ke,"elements"),this.plugins=new sa(Object,"plugins"),this.scales=new sa(Xs,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):wt(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=Hd(t);St(s["before"+i],[],s),e[t](s),St(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var Je=new TR;class IR{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],c=[e,i,r.options];if(St(a,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){ot(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=tt(s.options&&s.options.plugins,{}),r=AR(s);return i===!1&&!e?[]:SR(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function AR(n){const t={},e=[],s=Object.keys(Je.plugins.items);for(let r=0;r<s.length;r++)e.push(Je.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function kR(n,t){return!t&&n===!1?null:n===!0?{}:n}function SR(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const c=a.id,l=kR(s[c],i);l!==null&&r.push({plugin:a,options:CR(n.config,{plugin:a,local:e[c]},l,o)})}return r}function CR(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Eu(n,t){const e=Nt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function RR(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function PR(n,t){return n===t?"_index_":"_value_"}function xm(n){if(n==="x"||n==="y"||n==="r")return n}function DR(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Tu(n,...t){if(xm(n))return n;for(const e of t){const s=e.axis||DR(e.position)||n.length>1&&xm(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function wm(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function OR(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return wm(n,"x",e[0])||wm(n,"y",e[0])}return{}}function MR(n,t){const e=Hs[n.type]||{scales:{}},s=t.scales||{},i=Eu(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!lt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Tu(o,a,OR(o,n),Nt.scales[a.type]),l=PR(c,i),d=e.scales||{};r[o]=Dr(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||Eu(a,t),d=(Hs[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=RR(h,c),m=o[f+"AxisID"]||f;r[m]=r[m]||Object.create(null),Dr(r[m],[{axis:f},s[m],d[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Dr(a,[Nt.scales[a.type],Nt.scale])}),r}function Nv(n){const t=n.options||(n.options={});t.plugins=tt(t.plugins,{}),t.scales=MR(n,t)}function Lv(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function NR(n){return n=n||{},n.data=Lv(n.data),Nv(n),n}const Em=new Map,Vv=new Set;function ia(n,t){let e=Em.get(n);return e||(e=t(),Em.set(n,e),Vv.add(e)),e}const cr=(n,t,e)=>{const s=os(t,e);s!==void 0&&n.add(s)};class LR{constructor(t){this._config=NR(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Lv(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Nv(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ia(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return ia(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return ia(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return ia(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>cr(c,t,h))),d.forEach(h=>cr(c,i,h)),d.forEach(h=>cr(c,Hs[r]||{},h)),d.forEach(h=>cr(c,Nt,h)),d.forEach(h=>cr(c,bu,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),Vv.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Hs[e]||{},Nt.datasets[e]||{},{type:e},Nt,bu]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Tm(this._resolverCache,t,i);let c=o;if(FR(o,e)){r.$shared=!1,s=as(s)?s():s;const l=this.createResolver(t,s,a);c=Oi(o,s,l)}for(const l of e)r[l]=c[l];return r}createResolver(t,e,s=[""],i){const{resolver:r}=Tm(this._resolverCache,t,s);return lt(e)?Oi(r,e,void 0,i):r}}function Tm(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:Qd(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const VR=n=>lt(n)&&Object.getOwnPropertyNames(n).some(t=>as(n[t]));function FR(n,t){const{isScriptable:e,isIndexable:s}=pv(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&(as(a)||VR(a))||o&&Mt(a))return!0}return!1}var $R="4.5.1";const BR=["top","bottom","left","right","chartArea"];function Im(n,t){return n==="top"||n==="bottom"||BR.indexOf(n)===-1&&t==="x"}function Am(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function km(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),St(e&&e.onComplete,[n],t)}function UR(n){const t=n.chart,e=t.options.animation;St(e&&e.onProgress,[n],t)}function Fv(n){return Zd()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Aa={},Sm=n=>{const t=Fv(n);return Object.values(Aa).filter(e=>e.canvas===t).pop()};function jR(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function zR(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class ft{static register(...t){Je.add(...t),Cm()}static unregister(...t){Je.remove(...t),Cm()}constructor(t,e){const s=this.config=new LR(e),i=Fv(t),r=Sm(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||aR(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=qS(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new IR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=cC(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],Aa[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}gn.listen(this,"complete",km),gn.listen(this,"progress",UR),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return ot(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Je}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Xp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Yp(this.canvas,this.ctx),this}stop(){return gn.stop(this),this}resize(t,e){gn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Xp(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),St(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};wt(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],c=Tu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),wt(r,o=>{const a=o.options,c=a.id,l=Tu(c,a),d=tt(a.type,o.dtype);(a.position===void 0||Im(a.position,l)!==Im(o.dposition))&&(a.position=o.dposition),i[c]=!0;let h=null;if(c in s&&s[c].type===d)h=s[c];else{const f=Je.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),s[h.id]=h}h.init(a,t)}),wt(i,(o,a)=>{o||delete s[a]}),wt(s,o=>{we.configure(this,o,o.options),we.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Am("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||Eu(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=Je.getController(a),{datasetElementType:l,dataElementType:d}=Nt.datasets[a];Object.assign(c,{dataElementType:Je.getElement(d),datasetElementType:l&&Je.getElement(l)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){wt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!i&&r.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||wt(r,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Am("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){wt(this.scales,t=>{we.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!$p(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;jR(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!$p(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;we.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],wt(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,as(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(gn.has(this)?this.attached&&!gn.running(this)&&gn.start(this):(this.draw(),km({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=Iv(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Oc(e,i),t.controller.draw(),i&&Mc(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return An(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=B1.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=ds(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);Qr(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),gn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Yp(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Aa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};wt(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},i=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},r=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){wt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},wt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,c;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!Qa(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),c=XS(t),l=zR(t,this._lastEvent,s,c);s&&(this._lastEvent=null,St(r.onHover,[t,a,this],this),c&&St(r.onClick,[t,a,this],this));const d=!Qa(a,i);return(d||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=l,d}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}N(ft,"defaults",Nt),N(ft,"instances",Aa),N(ft,"overrides",Hs),N(ft,"registry",Je),N(ft,"version",$R),N(ft,"getChart",Sm);function Cm(){return wt(ft.instances,n=>n._plugins.invalidate())}function HR(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,be(s-e));if(n.beginPath(),n.arc(i,r,o-l/2,s+h/2,e-h/2),a>0){const f=Math.min(l/a,be(s-e));n.arc(i,r,a+l/2,e-f/2,s+f/2,!0)}else{const f=Math.min(l/2,o*be(s-e));if(d==="round")n.arc(i,r,f,e-_t/2,s+_t/2,!0);else if(d==="bevel"){const m=2*f*f,g=-m*Math.cos(e+_t/2)+i,v=-m*Math.sin(e+_t/2)+r,y=m*Math.cos(s+_t/2)+i,T=m*Math.sin(s+_t/2)+r;n.lineTo(g,v),n.lineTo(y,T)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function qR(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:c}=t;let l=i/a;n.beginPath(),n.arc(r,o,a,s-l,e+l),c>i?(l=i/c,n.arc(r,o,c,e+l,s-l,!0)):n.arc(r,o,i,e+Yt,s-Yt),n.closePath(),n.clip()}function WR(n){return Kd(n,["outerStart","outerEnd","innerStart","innerEnd"])}function GR(n,t,e,s){const i=WR(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=c=>{const l=(e-Math.min(r,c))*s/2;return oe(c,0,Math.min(r,l))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:oe(i.innerStart,0,o),innerEnd:oe(i.innerEnd,0,o)}}function oi(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function nc(n,t,e,s,i,r){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+s+e-l,0),f=d>0?d+s+e+l:0;let m=0;const g=i-c;if(s){const B=d>0?d-s:0,z=h>0?h-s:0,Q=(B+z)/2,rt=Q!==0?g*Q/(Q+s):g;m=(g-rt)/2}const v=Math.max(.001,g*h-e/_t)/h,y=(g-v)/2,T=c+y+m,A=i-y-m,{outerStart:C,outerEnd:D,innerStart:P,innerEnd:O}=GR(t,f,h,A-T),w=h-C,b=h-D,x=T+C/w,I=A-D/b,S=f+P,R=f+O,k=T+P/S,q=A-O/R;if(n.beginPath(),r){const B=(x+I)/2;if(n.arc(o,a,h,x,B),n.arc(o,a,h,B,I),D>0){const st=oi(b,I,o,a);n.arc(st.x,st.y,D,I,A+Yt)}const z=oi(R,A,o,a);if(n.lineTo(z.x,z.y),O>0){const st=oi(R,q,o,a);n.arc(st.x,st.y,O,A+Yt,q+Math.PI)}const Q=(A-O/f+(T+P/f))/2;if(n.arc(o,a,f,A-O/f,Q,!0),n.arc(o,a,f,Q,T+P/f,!0),P>0){const st=oi(S,k,o,a);n.arc(st.x,st.y,P,k+Math.PI,T-Yt)}const rt=oi(w,T,o,a);if(n.lineTo(rt.x,rt.y),C>0){const st=oi(w,x,o,a);n.arc(st.x,st.y,C,T-Yt,x)}}else{n.moveTo(o,a);const B=Math.cos(x)*h+o,z=Math.sin(x)*h+a;n.lineTo(B,z);const Q=Math.cos(I)*h+o,rt=Math.sin(I)*h+a;n.lineTo(Q,rt)}n.closePath()}function YR(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let c=t.endAngle;if(r){nc(n,t,e,s,c,i);for(let l=0;l<r;++l)n.fill();isNaN(a)||(c=o+(a%Dt||Dt))}return nc(n,t,e,s,c,i),n.fill(),c}function KR(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:m}=c,g=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,g?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let v=t.endAngle;if(r){nc(n,t,e,s,v,i);for(let y=0;y<r;++y)n.stroke();isNaN(a)||(v=o+(a%Dt||Dt))}g&&qR(n,t,v),c.selfJoin&&v-o>=_t&&m===0&&d!=="miter"&&HR(n,t,v),r||(nc(n,t,e,s,v,i),n.stroke())}class Er extends Ke{constructor(e){super();N(this,"circumference");N(this,"endAngle");N(this,"fullCircles");N(this,"innerRadius");N(this,"outerRadius");N(this,"pixelMargin");N(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=iv(r,{x:e,y:s}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,g=tt(f,l-c),v=Xr(o,c,l)&&c!==l,y=g>=Dt||v,T=Tn(a,d+m,h+m);return y&&T}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(r+o)/2,f=(a+c+d+l)/2;return{x:s+Math.cos(h)*f,y:i+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>Dt?Math.floor(i/Dt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*r,Math.sin(c)*r);const l=1-Math.sin(Math.min(_t,i||0)),d=r*l;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,YR(e,this,d,o,a),KR(e,this,d,o,a),e.restore()}}N(Er,"id","arc"),N(Er,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),N(Er,"defaultRoutes",{backgroundColor:"backgroundColor"}),N(Er,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function $v(n,t,e=t){n.lineCap=tt(e.borderCapStyle,t.borderCapStyle),n.setLineDash(tt(e.borderDash,t.borderDash)),n.lineDashOffset=tt(e.borderDashOffset,t.borderDashOffset),n.lineJoin=tt(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=tt(e.borderWidth,t.borderWidth),n.strokeStyle=tt(e.borderColor,t.borderColor)}function QR(n,t,e){n.lineTo(e.x,e.y)}function XR(n){return n.stepped?bC:n.tension||n.cubicInterpolationMode==="monotone"?xC:QR}function Bv(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,c=Math.max(i,o),l=Math.min(r,a),d=i<o&&r<o||i>a&&r>a;return{count:s,start:c,loop:t.loop,ilen:l<c&&!d?s+l-c:l-c}}function JR(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:c,ilen:l}=Bv(i,e,s),d=XR(r);let{move:h=!0,reverse:f}=s||{},m,g,v;for(m=0;m<=l;++m)g=i[(a+(f?l-m:m))%o],!g.skip&&(h?(n.moveTo(g.x,g.y),h=!1):d(n,v,g,f,r.stepped),v=g);return c&&(g=i[(a+(f?l:0))%o],d(n,v,g,f,r.stepped)),!!c}function ZR(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=Bv(i,e,s),{move:c=!0,reverse:l}=s||{};let d=0,h=0,f,m,g,v,y,T;const A=D=>(o+(l?a-D:D))%r,C=()=>{v!==y&&(n.lineTo(d,y),n.lineTo(d,v),n.lineTo(d,T))};for(c&&(m=i[A(0)],n.moveTo(m.x,m.y)),f=0;f<=a;++f){if(m=i[A(f)],m.skip)continue;const D=m.x,P=m.y,O=D|0;O===g?(P<v?v=P:P>y&&(y=P),d=(h*d+D)/++h):(C(),n.lineTo(D,P),g=O,h=0,v=y=P),T=P}C()}function Iu(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?ZR:JR}function tP(n){return n.stepped?ZC:n.tension||n.cubicInterpolationMode==="monotone"?t1:Is}function eP(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),$v(n,t.options),n.stroke(i)}function nP(n,t,e,s){const{segments:i,options:r}=t,o=Iu(t);for(const a of i)$v(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const sP=typeof Path2D=="function";function iP(n,t,e,s){sP&&!t.options.segment?eP(n,t,e,s):nP(n,t,e,s)}class Kn extends Ke{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;qC(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=o1(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=Tv(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],c=tP(s);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],m=r[h],g=r[f];if(m===g){a.push(m);continue}const v=Math.abs((i-m[e])/(g[e]-m[e])),y=c(m,g,v,s.stepped);y[e]=t[e],a.push(y)}return a.length===1?a[0]:a}pathSegment(t,e,s){return Iu(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=Iu(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),iP(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}N(Kn,"id","line"),N(Kn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),N(Kn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),N(Kn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Rm(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class ka extends Ke{constructor(e){super();N(this,"parsed");N(this,"skip");N(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return Rm(this,e,"x",s)}inYRange(e,s){return Rm(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!An(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,xu(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}N(ka,"id","point"),N(ka,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),N(ka,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Uv(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,i),c=Math.max(e,i),l=s-h,d=s+h):(h=r/2,a=e-h,c=e+h,l=Math.min(s,i),d=Math.max(s,i)),{left:a,top:l,right:c,bottom:d}}function Qn(n,t,e,s){return n?0:oe(t,e,s)}function rP(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=fv(s);return{t:Qn(i.top,r.top,0,e),r:Qn(i.right,r.right,0,t),b:Qn(i.bottom,r.bottom,0,e),l:Qn(i.left,r.left,0,t)}}function oP(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=Ds(i),o=Math.min(t,e),a=n.borderSkipped,c=s||lt(i);return{topLeft:Qn(!c||a.top||a.left,r.topLeft,0,o),topRight:Qn(!c||a.top||a.right,r.topRight,0,o),bottomLeft:Qn(!c||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Qn(!c||a.bottom||a.right,r.bottomRight,0,o)}}function aP(n){const t=Uv(n),e=t.right-t.left,s=t.bottom-t.top,i=rP(n,e/2,s/2),r=oP(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function Ml(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&Uv(n,s);return a&&(i||Tn(t,a.left,a.right))&&(r||Tn(e,a.top,a.bottom))}function cP(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function lP(n,t){n.rect(t.x,t.y,t.w,t.h)}function Nl(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class Sa extends Ke{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=aP(this),a=cP(o.radius)?Jr:lP;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Nl(o,e,r)),t.clip(),a(t,Nl(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Nl(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return Ml(this,t,e,s)}inXRange(t,e){return Ml(this,t,null,e)}inYRange(t,e){return Ml(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}N(Sa,"id","bar"),N(Sa,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),N(Sa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var uP=Object.freeze({__proto__:null,ArcElement:Er,BarElement:Sa,LineElement:Kn,PointElement:ka});const Au=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Pm=Au.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function jv(n){return Au[n%Au.length]}function zv(n){return Pm[n%Pm.length]}function dP(n,t){return n.borderColor=jv(t),n.backgroundColor=zv(t),++t}function hP(n,t){return n.backgroundColor=n.data.map(()=>jv(t++)),t}function fP(n,t){return n.backgroundColor=n.data.map(()=>zv(t++)),t}function pP(n){let t=0;return(e,s)=>{const i=n.getDatasetMeta(s).controller;i instanceof Cs?t=hP(e,t):i instanceof Lr?t=fP(e,t):i&&(t=dP(e,t))}}function Dm(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function mP(n){return n&&(n.borderColor||n.backgroundColor)}function gP(){return Nt.borderColor!=="rgba(0,0,0,0.1)"||Nt.backgroundColor!=="rgba(0,0,0,0.1)"}var _P={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=n.config,{elements:r}=i,o=Dm(s)||mP(i)||r&&Dm(r)||gP();if(!e.forceOverride&&o)return;const a=pP(n);s.forEach(a)}};function yP(n,t,e,s,i){const r=i.samples||s;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let c=0;const l=t+e-1;let d=t,h,f,m,g,v;for(o[c++]=n[d],h=0;h<r-2;h++){let y=0,T=0,A;const C=Math.floor((h+1)*a)+1+t,D=Math.min(Math.floor((h+2)*a)+1,e)+t,P=D-C;for(A=C;A<D;A++)y+=n[A].x,T+=n[A].y;y/=P,T/=P;const O=Math.floor(h*a)+1+t,w=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:x}=n[d];for(m=g=-1,A=O;A<w;A++)g=.5*Math.abs((b-y)*(n[A].y-x)-(b-n[A].x)*(T-x)),g>m&&(m=g,f=n[A],v=A);o[c++]=f,d=v}return o[c++]=n[l],o}function vP(n,t,e,s){let i=0,r=0,o,a,c,l,d,h,f,m,g,v;const y=[],T=t+e-1,A=n[t].x,D=n[T].x-A;for(o=t;o<t+e;++o){a=n[o],c=(a.x-A)/D*s,l=a.y;const P=c|0;if(P===d)l<g?(g=l,h=o):l>v&&(v=l,f=o),i=(r*i+a.x)/++r;else{const O=o-1;if(!ot(h)&&!ot(f)){const w=Math.min(h,f),b=Math.max(h,f);w!==m&&w!==O&&y.push({...n[w],x:i}),b!==m&&b!==O&&y.push({...n[b],x:i})}o>0&&O!==m&&y.push(n[O]),y.push(a),d=P,r=0,g=v=l,h=f=m=o}}return y}function Hv(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Om(n){n.data.datasets.forEach(t=>{Hv(t)})}function bP(n,t){const e=t.length;let s=0,i;const{iScale:r}=n,{min:o,max:a,minDefined:c,maxDefined:l}=r.getUserBounds();return c&&(s=oe(In(t,r.axis,o).lo,0,e-1)),l?i=oe(In(t,r.axis,a).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var xP={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Om(n);return}const s=n.width;n.data.datasets.forEach((i,r)=>{const{_data:o,indexAxis:a}=i,c=n.getDatasetMeta(r),l=o||i.data;if(xr([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=bP(c,l);const m=e.threshold||4*s;if(f<=m){Hv(i);return}ot(o)&&(i._data=l,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let g;switch(e.algorithm){case"lttb":g=yP(l,h,f,s,e);break;case"min-max":g=vP(l,h,f,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=g})},destroy(n){Om(n)}};function wP(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:c,end:l}=a;l=Vc(c,l,i);const d=ku(e,i[c],i[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:i[c],end:i[l]});continue}const h=Tv(t,d);for(const f of h){const m=ku(e,r[f.start],r[f.end],f.loop),g=Ev(a,i,m);for(const v of g)o.push({source:v,target:f,start:{[e]:Mm(d,m,"start",Math.max)},end:{[e]:Mm(d,m,"end",Math.min)}})}}return o}function ku(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=be(i),r=be(r)),{property:n,start:i,end:r}}function EP(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Vc(o,a,i);const c=i[o],l=i[a];s!==null?(r.push({x:c.x,y:s}),r.push({x:l.x,y:s})):e!==null&&(r.push({x:e,y:c.y}),r.push({x:e,y:l.y}))}),r}function Vc(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Mm(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function qv(n,t){let e=[],s=!1;return Mt(n)?(s=!0,e=n):e=EP(n,t),e.length?new Kn({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Nm(n){return n&&n.fill!==!1}function TP(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!zt(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function IP(n,t,e){const s=CP(n);if(lt(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return zt(i)&&Math.floor(i)===i?AP(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function AP(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function kP(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:lt(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function SP(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:lt(n)?s=n.value:s=t.getBaseValue(),s}function CP(n){const t=n.options,e=t.fill;let s=tt(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function RP(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=PP(t,e);a.push(qv({x:null,y:t.bottom},s));for(let c=0;c<r.length;c++){const l=r[c];for(let d=l.start;d<=l.end;d++)DP(i,o[d],a)}return new Kn({points:i,options:{}})}function PP(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function DP(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:c}=OP(r,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function OP(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<r.length;l++){const d=r[l],h=o[d.start][e],f=o[d.end][e];if(Tn(i,h,f)){a=i===h,c=i===f;break}}return{first:a,last:c,point:s}}class Wv{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:Dt},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function MP(n){const{chart:t,fill:e,line:s}=n;if(zt(e))return NP(t,e);if(e==="stack")return RP(n);if(e==="shape")return!0;const i=LP(n);return i instanceof Wv?i:qv(i,s)}function NP(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function LP(n){return(n.scale||{}).getPointPositionForValue?FP(n):VP(n)}function VP(n){const{scale:t={},fill:e}=n,s=kP(e,t);if(zt(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function FP(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=SP(e,t,r),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,r);return new Wv({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<i;++c)a.push(t.getPointPositionForValue(c,o));return a}function Ll(n,t,e){const s=MP(t),{chart:i,index:r,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:m=h}=d||{},g=i.getDatasetMeta(r),v=Iv(i,g);s&&o.points.length&&(Oc(n,e),$P(n,{line:o,target:s,above:f,below:m,area:e,scale:a,axis:c,clip:v}),Mc(n))}function $P(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=r;r!==i&&(l==="x"?(Lm(n,s,o.top),Vl(n,{line:e,target:s,color:i,scale:a,property:l,clip:c}),n.restore(),n.save(),Lm(n,s,o.bottom)):l==="y"&&(Vm(n,s,o.left),Vl(n,{line:e,target:s,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),Vm(n,s,o.right),d=i)),Vl(n,{line:e,target:s,color:d,scale:a,property:l,clip:c}),n.restore()}function Lm(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=i[c],h=i[Vc(c,l,i)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Vm(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=i[c],h=i[Vc(c,l,i)];r?(n.moveTo(d.x,d.y),r=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Vl(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,c=wP(e,s,i);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:m=r}={}}=l,g=s!==!0;n.save(),n.fillStyle=m,BP(n,o,a,g&&ku(i,h,f)),n.beginPath();const v=!!e.pathSegment(n,l);let y;if(g){v?n.closePath():Fm(n,s,f,i);const T=!!s.pathSegment(n,d,{move:v,reverse:!0});y=v&&T,y||Fm(n,s,h,i)}n.closePath(),n.fill(y?"evenodd":"nonzero"),n.restore()}}function BP(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let c,l,d,h;r==="x"?(c=o,l=i.top,d=a,h=i.bottom):(c=i.left,l=o,d=i.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Fm(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var UP={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,c;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,c=null,a&&a.options&&a instanceof Kn&&(c={visible:n.isDatasetVisible(o),index:o,fill:IP(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=c,i.push(c);for(o=0;o<s;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=TP(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&Ll(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;Nm(r)&&Ll(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Nm(s)||e.drawTime!=="beforeDatasetDraw"||Ll(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const $m=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},jP=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Bm extends Ke{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=St(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=ee(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=$m(s,r);let l,d;e.font=i.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,r,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,i,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=i+a;let h=t;r.textAlign="left",r.textBaseline="middle";let f=-1,m=-d;return this.legendItems.forEach((g,v)=>{const y=s+e/2+r.measureText(g.text).width;(v===0||l[l.length-1]+y+2*a>o)&&(h+=d,l[l.length-(v>0?0:1)]=0,m+=d,f++),c[v]={left:0,top:m,row:f,width:y,height:i},l[l.length-1]+=y+a}),h}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,m=0,g=0,v=0;return this.legendItems.forEach((y,T)=>{const{itemWidth:A,itemHeight:C}=zP(s,e,r,y,i);T>0&&m+C+2*a>d&&(h+=f+a,l.push({width:f,height:m}),g+=f+a,v++,f=m=0),c[T]={left:g,top:m,col:v,width:A,height:C},f=Math.max(f,A),m+=C+a}),h+=f,l.push({width:f,height:m}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=Ei(r,this.left,this.width);if(this.isHorizontal()){let a=0,c=ye(s,this.left+i,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=ye(s,this.left+i,this.right-this.lineWidths[a])),l.top+=this.top+t+i,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+i}else{let a=0,c=ye(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=ye(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+i,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Oc(t,this),this._draw(),Mc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=Nt.color,c=Ei(t.rtl,this.left,this.width),l=ee(o.font),{padding:d}=o,h=l.size,f=h/2;let m;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=l.string;const{boxWidth:g,boxHeight:v,itemHeight:y}=$m(o,h),T=function(O,w,b){if(isNaN(g)||g<=0||isNaN(v)||v<0)return;i.save();const x=tt(b.lineWidth,1);if(i.fillStyle=tt(b.fillStyle,a),i.lineCap=tt(b.lineCap,"butt"),i.lineDashOffset=tt(b.lineDashOffset,0),i.lineJoin=tt(b.lineJoin,"miter"),i.lineWidth=x,i.strokeStyle=tt(b.strokeStyle,a),i.setLineDash(tt(b.lineDash,[])),o.usePointStyle){const I={radius:v*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:x},S=c.xPlus(O,g/2),R=w+f;hv(i,I,S,R,o.pointStyleWidth&&g)}else{const I=w+Math.max((h-v)/2,0),S=c.leftForLtr(O,g),R=Ds(b.borderRadius);i.beginPath(),Object.values(R).some(k=>k!==0)?Jr(i,{x:S,y:I,w:g,h:v,radius:R}):i.rect(S,I,g,v),i.fill(),x!==0&&i.stroke()}i.restore()},A=function(O,w,b){qs(i,b.text,O,w+y/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},C=this.isHorizontal(),D=this._computeTitleHeight();C?m={x:ye(r,this.left+d,this.right-s[0]),y:this.top+d+D,line:0}:m={x:this.left+d,y:ye(r,this.top+D+d,this.bottom-e[0].height),line:0},bv(this.ctx,t.textDirection);const P=y+d;this.legendItems.forEach((O,w)=>{i.strokeStyle=O.fontColor,i.fillStyle=O.fontColor;const b=i.measureText(O.text).width,x=c.textAlign(O.textAlign||(O.textAlign=o.textAlign)),I=g+f+b;let S=m.x,R=m.y;c.setWidth(this.width),C?w>0&&S+I+d>this.right&&(R=m.y+=P,m.line++,S=m.x=ye(r,this.left+d,this.right-s[m.line])):w>0&&R+P>this.bottom&&(S=m.x=S+e[m.line].width+d,m.line++,R=m.y=ye(r,this.top+D+d,this.bottom-e[m.line].height));const k=c.x(S);if(T(k,R,O),S=lC(x,S+g+f,C?S+I:this.right,t.rtl),A(c.x(S),R,O),C)m.x+=I+d;else if(typeof O.text!="string"){const q=l.lineHeight;m.y+=Gv(O,q)+d}else m.y+=P}),xv(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=ee(e.font),i=Te(e.padding);if(!e.display)return;const r=Ei(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,l=i.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=ye(t.align,h,this.right-f);else{const g=this.columnSizes.reduce((v,y)=>Math.max(v,y.height),0);d=l+ye(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const m=ye(a,h,h+f);o.textAlign=r.textAlign(Gd(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,qs(o,e.text,m,d,s)}_computeTitleHeight(){const t=this.options.title,e=ee(t.font),s=Te(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(Tn(t,this.left,this.right)&&Tn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],Tn(t,i.left,i.left+i.width)&&Tn(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!WP(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=jP(i,s);i&&!r&&St(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&St(e.onHover,[t,s,this],this)}else s&&St(e.onClick,[t,s,this],this)}}function zP(n,t,e,s,i){const r=HP(s,n,t,e),o=qP(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function HP(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function qP(n,t,e){let s=n;return typeof t.text!="string"&&(s=Gv(t,e)),s}function Gv(n,t){const e=n.text?n.text.length:0;return t*e}function WP(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var GP={id:"legend",_element:Bm,start(n,t,e){const s=n.legend=new Bm({ctx:n.ctx,options:e,chart:n});we.configure(n,s,e),we.addBox(n,s)},stop(n){we.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;we.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=Te(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:r,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:i||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class nh extends Ke{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=Mt(s.text)?s.text.length:1;this._padding=Te(s.padding);const r=i*ee(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:r,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=ye(a,s,r),h=e+t,l=r-s):(o.position==="left"?(d=s+t,h=ye(a,i,e),c=_t*-.5):(d=r-t,h=ye(a,e,i),c=_t*.5),l=i-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=ee(e.font),r=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);qs(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:l,textAlign:Gd(e.align),textBaseline:"middle",translation:[o,a]})}}function YP(n,t){const e=new nh({ctx:n.ctx,options:t,chart:n});we.configure(n,e,t),we.addBox(n,e),n.titleBlock=e}var KP={id:"title",_element:nh,start(n,t,e){YP(n,e)},stop(n){const t=n.titleBlock;we.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;we.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ra=new WeakMap;var QP={id:"subtitle",start(n,t,e){const s=new nh({ctx:n.ctx,options:e,chart:n});we.configure(n,s,e),we.addBox(n,s),ra.set(n,s)},stop(n){we.removeBox(n,ra.get(n)),ra.delete(n)},beforeUpdate(n,t,e){const s=ra.get(n);we.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Tr={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),i+=c.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const c=n[r].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=vu(t,l);d<i&&(i=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function Xe(n,t){return t&&(Mt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function _n(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function XP(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Um(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,c=ee(t.bodyFont),l=ee(t.titleFont),d=ee(t.footerFont),h=r.length,f=i.length,m=s.length,g=Te(t.padding);let v=g.height,y=0,T=s.reduce((D,P)=>D+P.before.length+P.lines.length+P.after.length,0);if(T+=n.beforeBody.length+n.afterBody.length,h&&(v+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),T){const D=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;v+=m*D+(T-m)*c.lineHeight+(T-1)*t.bodySpacing}f&&(v+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let A=0;const C=function(D){y=Math.max(y,e.measureText(D).width+A)};return e.save(),e.font=l.string,wt(n.title,C),e.font=c.string,wt(n.beforeBody.concat(n.afterBody),C),A=t.displayColors?o+2+t.boxPadding:0,wt(s,D=>{wt(D.before,C),wt(D.lines,C),wt(D.after,C)}),A=0,e.font=d.string,wt(n.footer,C),e.restore(),y+=g.width,{width:y,height:v}}function JP(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function ZP(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function tD(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return s==="center"?l=i<=(a+c)/2?"left":"right":i<=r/2?l="left":i>=o-r/2&&(l="right"),ZP(l,n,t,e)&&(l="center"),l}function jm(n,t,e){const s=e.yAlign||t.yAlign||JP(n,e);return{xAlign:e.xAlign||t.xAlign||tD(n,t,e,s),yAlign:s}}function eD(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function nD(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function zm(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=i+r,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:m}=Ds(o);let g=eD(t,a);const v=nD(t,c,l);return c==="center"?a==="left"?g+=l:a==="right"&&(g-=l):a==="left"?g-=Math.max(d,f)+i:a==="right"&&(g+=Math.max(h,m)+i),{x:oe(g,0,s.width-t.width),y:oe(v,0,s.height-t.height)}}function oa(n,t,e){const s=Te(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Hm(n){return Xe([],_n(n))}function sD(n,t,e){return ds(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function qm(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const Yv={beforeTitle:mn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:mn,beforeBody:mn,beforeLabel:mn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return ot(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:mn,afterBody:mn,beforeFooter:mn,footer:mn,afterFooter:mn};function Ce(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?Yv[t].call(e,s):i}class Su extends Ke{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new Av(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=sD(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=Ce(s,"beforeTitle",this,t),r=Ce(s,"title",this,t),o=Ce(s,"afterTitle",this,t);let a=[];return a=Xe(a,_n(i)),a=Xe(a,_n(r)),a=Xe(a,_n(o)),a}getBeforeBody(t,e){return Hm(Ce(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return wt(t,r=>{const o={before:[],lines:[],after:[]},a=qm(s,r);Xe(o.before,_n(Ce(a,"beforeLabel",this,r))),Xe(o.lines,Ce(a,"label",this,r)),Xe(o.after,_n(Ce(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return Hm(Ce(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=Ce(s,"beforeFooter",this,t),r=Ce(s,"footer",this,t),o=Ce(s,"afterFooter",this,t);let a=[];return a=Xe(a,_n(i)),a=Xe(a,_n(r)),a=Xe(a,_n(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(XP(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,s))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,s))),wt(a,d=>{const h=qm(t.callbacks,d);i.push(Ce(h,"labelColor",this,d)),r.push(Ce(h,"labelPointStyle",this,d)),o.push(Ce(h,"labelTextColor",this,d))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=Tr[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Um(this,s),l=Object.assign({},a,c),d=jm(this.chart,s,l),h=zm(s,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,r={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Ds(a),{x:f,y:m}=t,{width:g,height:v}=e;let y,T,A,C,D,P;return r==="center"?(D=m+v/2,i==="left"?(y=f,T=y-o,C=D+o,P=D-o):(y=f+g,T=y+o,C=D-o,P=D+o),A=y):(i==="left"?T=f+Math.max(c,d)+o:i==="right"?T=f+g-Math.max(l,h)-o:T=this.caretX,r==="top"?(C=m,D=C-o,y=T-o,A=T+o):(C=m+v,D=C+o,y=T+o,A=T-o),P=C),{x1:y,x2:T,x3:A,y1:C,y2:D,y3:P}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,c;if(r){const l=Ei(s.rtl,this.x,this.width);for(t.x=oa(this,s.titleAlign,s),e.textAlign=l.textAlign(s.titleAlign),e.textBaseline="middle",o=ee(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(i[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:l}=r,d=ee(r.bodyFont),h=oa(this,"left",r),f=i.x(h),m=c<d.lineHeight?(d.lineHeight-c)/2:0,g=e.y+m;if(r.usePointStyle){const v={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},y=i.leftForLtr(f,l)+l/2,T=g+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,xu(t,v,y,T),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,xu(t,v,y,T)}else{t.lineWidth=lt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=i.leftForLtr(f,l),y=i.leftForLtr(i.xPlus(f,1),l-2),T=Ds(o.borderRadius);Object.values(T).some(A=>A!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Jr(t,{x:v,y:g,w:l,h:c,radius:T}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Jr(t,{x:y,y:g+1,w:l-2,h:c-2,radius:T}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(v,g,l,c),t.strokeRect(v,g,l,c),t.fillStyle=o.backgroundColor,t.fillRect(y,g+1,l-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=s,h=ee(s.bodyFont);let f=h.lineHeight,m=0;const g=Ei(s.rtl,this.x,this.width),v=function(b){e.fillText(b,g.x(t.x+m),t.y+f/2),t.y+=f+r},y=g.textAlign(o);let T,A,C,D,P,O,w;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=oa(this,y,s),e.fillStyle=s.bodyColor,wt(this.beforeBody,v),m=a&&y!=="right"?o==="center"?l/2+d:l+2+d:0,D=0,O=i.length;D<O;++D){for(T=i[D],A=this.labelTextColors[D],e.fillStyle=A,wt(T.before,v),C=T.lines,a&&C.length&&(this._drawColorBox(e,t,D,g,s),f=Math.max(h.lineHeight,c)),P=0,w=C.length;P<w;++P)v(C[P]),f=h.lineHeight;wt(T.after,v)}m=0,f=h.lineHeight,wt(this.afterBody,v),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const c=Ei(s.rtl,this.x,this.width);for(t.x=oa(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=ee(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=s,{topLeft:h,topRight:f,bottomLeft:m,bottomRight:g}=Ds(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+l,c+d-g),e.quadraticCurveTo(a+l,c+d,a+l-g,c+d),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+m,c+d),e.quadraticCurveTo(a,c+d,a,c+d-m),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=Tr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Um(this,t),c=Object.assign({},o,this._size),l=jm(e,t,c),d=zm(t,c,l,e);(i._to!==d.x||r._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=Te(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),bv(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),xv(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),r=!Qa(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),c=e||!Qa(o,r)||a;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=Tr[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}N(Su,"positioners",Tr);var iD={id:"tooltip",_element:Su,positioners:Tr,afterInit(n,t,e){e&&(n.tooltip=new Su({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Yv},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},rD=Object.freeze({__proto__:null,Colors:_P,Decimation:xP,Filler:UP,Legend:GP,SubTitle:QP,Title:KP,Tooltip:iD});const oD=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function aD(n,t,e,s){const i=n.indexOf(t);if(i===-1)return oD(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const cD=(n,t)=>n===null?null:oe(Math.round(n),0,t);function Wm(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Cu extends Xs{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(ot(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:aD(s,t,tt(e,t),this._addedLabels),cD(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return Wm.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}N(Cu,"id","category"),N(Cu,"defaults",{ticks:{callback:Wm}});function lD(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,m=r||1,g=d-1,{min:v,max:y}=t,T=!ot(o),A=!ot(a),C=!ot(l),D=(y-v)/(h+1);let P=Up((y-v)/g/m)*m,O,w,b,x;if(P<1e-14&&!T&&!A)return[{value:v},{value:y}];x=Math.ceil(y/P)-Math.floor(v/P),x>g&&(P=Up(x*P/g/m)*m),ot(c)||(O=Math.pow(10,c),P=Math.ceil(P*O)/O),i==="ticks"?(w=Math.floor(v/P)*P,b=Math.ceil(y/P)*P):(w=v,b=y),T&&A&&r&&nC((a-o)/r,P/1e3)?(x=Math.round(Math.min((a-o)/P,d)),P=(a-o)/x,w=o,b=a):C?(w=T?o:w,b=A?a:b,x=l-1,P=(b-w)/x):(x=(b-w)/P,Or(x,Math.round(x),P/1e3)?x=Math.round(x):x=Math.ceil(x));const I=Math.max(jp(P),jp(w));O=Math.pow(10,ot(c)?I:c),w=Math.round(w*O)/O,b=Math.round(b*O)/O;let S=0;for(T&&(f&&w!==o?(e.push({value:o}),w<o&&S++,Or(Math.round((w+S*P)*O)/O,o,Gm(o,D,n))&&S++):w<o&&S++);S<x;++S){const R=Math.round((w+S*P)*O)/O;if(A&&R>a)break;e.push({value:R})}return A&&f&&b!==a?e.length&&Or(e[e.length-1].value,a,Gm(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!A||b===a)&&e.push({value:b}),e}function Gm(n,t,{horizontal:e,minRotation:s}){const i=ze(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class sc extends Xs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return ot(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=c=>i=e?i:c,a=c=>r=s?r:c;if(t){const c=cn(i),l=cn(r);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(i===r){let c=r===0?1:Math.abs(r*.05);a(r+c),t||o(i-c)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=lD(i,r);return t.bounds==="ticks"&&sv(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return vo(t,this.chart.options.locale,this.options.ticks.format)}}class Ru extends sc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=zt(t)?t:0,this.max=zt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=ze(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}N(Ru,"id","linear"),N(Ru,"defaults",{ticks:{callback:Dc.formatters.numeric}});const to=n=>Math.floor(Gn(n)),bs=(n,t)=>Math.pow(10,to(n)+t);function Ym(n){return n/Math.pow(10,to(n))===1}function Km(n,t,e){const s=Math.pow(10,e),i=Math.floor(n/s);return Math.ceil(t/s)-i}function uD(n,t){const e=t-n;let s=to(e);for(;Km(n,t,s)>10;)s++;for(;Km(n,t,s)<10;)s--;return Math.min(s,to(n))}function dD(n,{min:t,max:e}){t=Me(n.min,t);const s=[],i=to(t);let r=uD(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),c=i>r?Math.pow(10,i):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,r)),f=Me(n.min,Math.round((c+d+h*Math.pow(10,r))*o)/o);for(;f<e;)s.push({value:f,major:Ym(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(r++,h=2,o=r>=0?1:o),f=Math.round((c+d+h*Math.pow(10,r))*o)/o;const m=Me(n.max,f);return s.push({value:m,major:Ym(m),significand:h}),s}class Pu extends Xs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=sc.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return zt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=zt(t)?Math.max(0,t):null,this.max=zt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!zt(this._userMin)&&(this.min=t===bs(this.min,0)?bs(this.min,-1):bs(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const r=a=>s=t?s:a,o=a=>i=e?i:a;s===i&&(s<=0?(r(1),o(10)):(r(bs(s,-1)),o(bs(i,1)))),s<=0&&r(bs(i,-1)),i<=0&&o(bs(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=dD(e,this);return t.bounds==="ticks"&&sv(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":vo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Gn(t),this._valueRange=Gn(this.max)-Gn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Gn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}N(Pu,"id","logarithmic"),N(Pu,"defaults",{ticks:{callback:Dc.formatters.logarithmic,major:{enabled:!0}}});function Du(n){const t=n.ticks;if(t.display&&n.display){const e=Te(t.backdropPadding);return tt(t.font&&t.font.size,Nt.font.size)+e.height}return 0}function hD(n,t,e){return e=Mt(e)?e:[e],{w:vC(n,t.string,e),h:e.length*t.lineHeight}}function Qm(n,t,e,s,i){return n===s||n===i?{start:t-e/2,end:t+e/2}:n<s||n>i?{start:t-e,end:t}:{start:t,end:t+e}}function fD(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],i=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?_t/r:0;for(let c=0;c<r;c++){const l=o.setContext(n.getPointLabelContext(c));i[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+i[c],a),h=ee(l.font),f=hD(n.ctx,h,n._pointLabels[c]);s[c]=f;const m=be(n.getIndexAngle(c)+a),g=Math.round(qd(m)),v=Qm(g,d.x,f.w,0,180),y=Qm(g,d.y,f.h,90,270);pD(e,t,m,v,y)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=_D(n,s,i)}function pD(n,t,e,s,i){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/r,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),i.start<t.t?(c=(t.t-i.start)/o,n.t=Math.min(n.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function mD(n,t,e){const s=n.drawingArea,{extra:i,additionalAngle:r,padding:o,size:a}=e,c=n.getPointPosition(t,s+i+o,r),l=Math.round(qd(be(c.angle+Yt))),d=bD(c.y,a.h,l),h=yD(l),f=vD(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function gD(n,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:r}=n;return!(An({x:e,y:s},t)||An({x:e,y:r},t)||An({x:i,y:s},t)||An({x:i,y:r},t))}function _D(n,t,e){const s=[],i=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,c={extra:Du(r)/2,additionalAngle:o?_t/i:0};let l;for(let d=0;d<i;d++){c.padding=e[d],c.size=t[d];const h=mD(n,d,c);s.push(h),a==="auto"&&(h.visible=gD(h,l),h.visible&&(l=h))}return s}function yD(n){return n===0||n===180?"center":n<180?"left":"right"}function vD(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function bD(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function xD(n,t,e){const{left:s,top:i,right:r,bottom:o}=e,{backdropColor:a}=t;if(!ot(a)){const c=Ds(t.borderRadius),l=Te(t.backdropPadding);n.fillStyle=a;const d=s-l.left,h=i-l.top,f=r-s+l.width,m=o-i+l.height;Object.values(c).some(g=>g!==0)?(n.beginPath(),Jr(n,{x:d,y:h,w:f,h:m,radius:c}),n.fill()):n.fillRect(d,h,f,m)}}function wD(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let i=t-1;i>=0;i--){const r=n._pointLabelItems[i];if(!r.visible)continue;const o=s.setContext(n.getPointLabelContext(i));xD(e,o,r);const a=ee(o.font),{x:c,y:l,textAlign:d}=r;qs(e,n._pointLabels[i],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function Kv(n,t,e,s){const{ctx:i}=n;if(e)i.arc(n.xCenter,n.yCenter,t,0,Dt);else{let r=n.getPointPosition(0,t);i.moveTo(r.x,r.y);for(let o=1;o<s;o++)r=n.getPointPosition(o,t),i.lineTo(r.x,r.y)}}function ED(n,t,e,s,i){const r=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=c,r.setLineDash(i.dash||[]),r.lineDashOffset=i.dashOffset,r.beginPath(),Kv(n,e,o,s),r.closePath(),r.stroke(),r.restore())}function TD(n,t,e){return ds(n,{label:e,index:t,type:"pointLabel"})}class Ir extends sc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Te(Du(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=zt(t)&&!isNaN(t)?t:0,this.max=zt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Du(this.options))}generateTickLabels(t){sc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=St(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?fD(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=Dt/(this._pointLabels.length||1),s=this.options.startAngle||0;return be(t*e+ze(s))}getDistanceFromCenterForValue(t){if(ot(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(ot(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return TD(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-Yt+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Kv(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:r}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&wD(this,o),i.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),m=i.setContext(f),g=r.setContext(f);ED(this,m,c,o,g)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const d=s.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=s.setContext(this.getContext(c)),d=ee(l.font);if(r=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=Te(l.backdropPadding);t.fillRect(-o/2-h.left,-r-d.size/2-h.top,o+h.width,d.size+h.height)}qs(t,a.label,0,-r,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}N(Ir,"id","radialLinear"),N(Ir,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Dc.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),N(Ir,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),N(Ir,"descriptors",{angleLines:{_fallback:"grid"}});const Fc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},De=Object.keys(Fc);function Xm(n,t){return n-t}function Jm(n,t){if(ot(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),zt(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(Di(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function Zm(n,t,e,s){const i=De.length;for(let r=De.indexOf(n);r<i-1;++r){const o=Fc[De[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return De[r]}return De[i-1]}function ID(n,t,e,s,i){for(let r=De.length-1;r>=De.indexOf(e);r--){const o=De[r];if(Fc[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return De[e?De.indexOf(e):0]}function AD(n){for(let t=De.indexOf(n)+1,e=De.length;t<e;++t)if(Fc[De[t]].common)return De[t]}function tg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=Wd(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function kD(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=r;a<=o;a=+i.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function eg(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:kD(n,s,i,e)}class eo extends Xs{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new Cv._date(t.adapters.date);i.init(e),Dr(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Jm(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(i=Math.min(i,l.min)),!a&&!isNaN(l.max)&&(r=Math.max(r,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=zt(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=zt(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=oC(i,r,o);return this._unit=e.unit||(s.autoSkip?Zm(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):ID(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:AD(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),eg(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=oe(e,0,o),s=oe(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||Zm(r.minUnit,e,s,this._getLabelCapacity(e)),a=tt(i.ticks.stepSize,1),c=o==="week"?r.isoWeekday:!1,l=Di(c)||c===!0,d={};let h=e,f,m;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const g=i.ticks.source==="data"&&this.getDataTimestamps();for(f=h,m=0;f<s;f=+t.add(f,a,o),m++)tg(d,f,g);return(f===s||i.bounds==="ticks"||m===1)&&tg(d,f,g),Object.keys(d).sort(Xm).map(v=>+v)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return St(o,[t,e,s],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=s[e],m=l&&h&&f&&f.major;return this._adapter.format(t,i||(m?h:d))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=ze(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,eg(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(Jm(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return ov(t.sort(Xm))}}N(eo,"id","time"),N(eo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function aa(n,t,e){let s=0,i=n.length-1,r,o,a,c;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=In(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:c}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=In(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:c}=n[i]);const l=o-r;return l?a+(c-a)*(t-r)/l:a}class Ou extends eo{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=aa(e,this.min),this._tableRange=aa(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=s&&i.push(l);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)d=i[o+1],c=i[o-1],l=i[o],Math.round((d+c)/2)!==l&&r.push({time:l,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(aa(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return aa(this._table,s*this._tableRange+this._minPos,!0)}}N(Ou,"id","timeseries"),N(Ou,"defaults",eo.defaults);var SD=Object.freeze({__proto__:null,CategoryScale:Cu,LinearScale:Ru,LogarithmicScale:Pu,RadialLinearScale:Ir,TimeScale:eo,TimeSeriesScale:Ou});const CD=[N1,uP,rD,SD];ft.register(...CD);const lr="rgba(255,255,255,0.08)",ai="#a1a1aa",Ue={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};ft.defaults.color="#e5e5e5";ft.defaults.font.family=Ue.family;ft.defaults.font.weight=Ue.weight;const ur={renderCurvaS:(n,t=[],e=[],s=[])=>{const i=document.getElementById(n);if(!i)return;i.chart&&i.chart.destroy();const r=s.length?s:t.map((o,a)=>`M${a+1}`);i.chart=new ft(i,{type:"line",data:{labels:r,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Ue,usePointStyle:!0}}},scales:{x:{grid:{color:lr},ticks:{color:ai,font:Ue}},y:{grid:{color:lr},ticks:{color:ai,font:Ue}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new ft(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:lr},ticks:{color:ai,font:Ue}},y:{grid:{color:lr},ticks:{color:ai,font:Ue}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ft(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Ue,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ft(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:ai,font:Ue}},y:{grid:{color:lr},ticks:{color:ai,font:Ue,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ft(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Ue,padding:12,usePointStyle:!0}}}}})}},at={render:n=>{const t=document.getElementById("app"),e=Et.state.currentUser;if(!e){t.innerHTML=n;return}const s=Et.state.sidebarCollapsed,i=Et.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${at.createNavItem("/","Dashboard",Lt.dashboard,s)}
                        ${at.createNavItem("/compras","Compras",Lt.shoppingCart,s)}
                        ${at.createNavItem("/relatorios","Relatórios",Lt.clipboard,s)}
                        ${at.createNavItem("/obras","Obras",Lt.chart,s)}
                        ${at.createNavItem("/cadastros","Cadastros",Lt.settings,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${at.createNavItem("/configuracoes","Configurações",Lt.settings,s)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display">
                            ${Lt.logout}
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
                                ${Lt.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${Lt.search}
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
                                ${i==="dark"?Lt.sun:Lt.moon}
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
        `,at.bindEvents(),window.dispatchEvent(new CustomEvent("layout:rendered"))},createNavItem:(n,t,e,s)=>{var o;const r=At.currentRoute===n||((o=At.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${r}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{Et.toggleSidebar();const s=document.getElementById("sidebar"),i=s.querySelectorAll("span"),r=s.querySelector("[data-logo-text]");Et.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),i.forEach(o=>o.classList.add("hidden")),r&&r.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),i.forEach(o=>o.classList.remove("hidden")),r&&r.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const i=Et.state.currentTheme==="dark"?"light":"dark";Et.setTheme(i);const r=document.getElementById("btn-theme-toggle");r.innerHTML=i==="dark"?Lt.sun:Lt.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await Ya.logout(),At.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var i;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(i=document.getElementById("global-search"))==null||i.focus())})}},je={getObras:async()=>(await mt(yt(K,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await mt(yt(K,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await Bi(yt(K,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await He(ne(K,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await Q_(ne(K,"obras",n))},getObraStats:async(n,t=!1)=>{const e=await je.getObraById(n),s=yt(K,"compras"),i=te(s,Ct("obraId","==",n)),o=(await mt(i)).docs.map(B=>({id:B.id,...B.data()}));let a=0,c=Number((e==null?void 0:e.valor_orcado)||0);const l={},d={},h={},f={},m={};let g=null,v=null,y=0,T=0,A=0,C=0,D=0;const P={},O={},w=(B="")=>{const z=(B||"").toLowerCase();return z.includes("desperd")?"Desperd�cio":z.includes("lista")||z.includes("inicial")?"Lista inicial":"Material adicional"},b=B=>{const z=new Date(B.getTime()),Q=(z.getDay()+6)%7;z.setDate(z.getDate()-Q+3);const rt=z.getTime();z.setMonth(0,1),z.getDay()!==4&&z.setMonth(0,1+(4-z.getDay()+7)%7);const st=1+Math.ceil((rt-z)/6048e5);return`${z.getFullYear()}-W${String(st).padStart(2,"0")}`};o.forEach(B=>{const z=Number(B.valor_total??B.valor_estimado??0);a+=z,l[B.status_compra]=(l[B.status_compra]||0)+1;const Q=B.previsao_entrega?new Date(B.previsao_entrega):null,rt=B.data_recebimento?new Date(B.data_recebimento):null;if(B.status_compra!=="Entregue"&&Q&&Q<new Date&&y++,rt&&Q&&(T++,rt<=Q&&A++),B.data_emissao&&(rt||Q)){const Y=rt||Q,bt=Math.max(0,(new Date(Y)-new Date(B.data_emissao))/(1e3*60*60*24));C+=bt,D++}const st=w(B.natureza_compra||B.categoria||"Outros");d[st]=(d[st]||0)+z;const ut=(B.natureza_compra||"Outros").trim();P[ut]=(P[ut]||0)+z;const Zt=B.centroCustoNome||B.centro_custo||B.centroCustoId||"N/D";O[Zt]=(O[Zt]||0)+z;const kt=B.data_recebimento||B.data_emissao||B.previsao_entrega||B.data_solicitacao;if(kt){const Y=new Date(kt);if(!Number.isNaN(Y.getTime())){(!g||Y<g)&&(g=Y),(!v||Y>v)&&(v=Y);const bt=`${Y.getFullYear()}-${String(Y.getMonth()+1).padStart(2,"0")}`;h[bt]=(h[bt]||0)+z;const Ut=Y.toISOString().split("T")[0];f[Ut]=(f[Ut]||0)+z;const he=b(Y);m[he]=(m[he]||0)+z}}});const x=Number(c||0)||a,I=je.calculateCurvaS(x,m,{start:(e==null?void 0:e.data_prevista_inicio)||(e==null?void 0:e.data_inicio)||g,end:(e==null?void 0:e.data_prevista_fim)||(e==null?void 0:e.data_fim)||v}),S=T?A/T*100:0,R=D?C/D:0,k=[...o].sort((B,z)=>{const Q=B.data_solicitacao||B.data_emissao||"";return(z.data_solicitacao||z.data_emissao||"").localeCompare(Q)}),q={totalCompras:o.length,totalGasto:a,porStatus:l,gastosPorCategoria:d,gastosMensais:h,gastosDiarios:f,curvaS:I,comprasRecentes:k.slice(0,10),comprasCalendar:k,atrasos:y,sla:S,lead:R,naturezaTotais:P,ccTotais:O};if(t)try{const{RDOService:B}=await Ka(async()=>{const{RDOService:z}=await Promise.resolve().then(()=>Eb);return{RDOService:z}},void 0);if(e!=null&&e.numero_os){const z=new Date().toISOString().split("T")[0],Q=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],rt=await B.getByObra(e.numero_os,Q,z);rt&&rt.length>0&&(q.rdoData=B.processRDOData(rt))}}catch(B){console.warn("Erro ao buscar dados RDO:",B)}return q},calculateCurvaS:(n,t,{start:e,end:s}={})=>{const i=[],r=[],o=[];let a=0;const c=24*60*60*1e3,l=[],d=e?new Date(e):null,h=s?new Date(s):null;if(d&&!Number.isNaN(d)&&h&&!Number.isNaN(h)&&d<=h){const m=new Date(d);m.setHours(12,0,0,0);const g=m.getDay(),v=g===0?-6:1-g;for(m.setDate(m.getDate()+v);m<=h;){const y=m.getFullYear(),T=new Date(y,0,1),A=Math.floor((m-T)/c),C=Math.ceil((A+T.getDay()+1)/7);l.push(`${y}-W${String(C).padStart(2,"0")}`),m.setDate(m.getDate()+7)}}else l.push(...Object.keys(t).sort());const f=l.length||1;return l.forEach((m,g)=>{const v=(g+1)/f,y=1/(1+Math.exp(-10*(v-.5)));i.push(n*y),t[m]&&(a+=t[m]),r.push(a),o.push(m)}),{planejado:i,realizado:r,labels:o}}},RD=Object.freeze(Object.defineProperty({__proto__:null,ObrasService:je},Symbol.toStringTag,{value:"Module"})),Qv=6048e5,PD=864e5,bo=6e4,xo=36e5,DD=1e3,ng=Symbol.for("constructDateFrom");function qt(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&ng in n?n[ng](t):n instanceof Date?new n.constructor(t):new Date(t)}function nt(n,t){return qt(t||n,n)}function $c(n,t,e){const s=nt(n,e==null?void 0:e.in);return isNaN(t)?qt((e==null?void 0:e.in)||n,NaN):(t&&s.setDate(s.getDate()+t),s)}function sh(n,t,e){const s=nt(n,e==null?void 0:e.in);if(isNaN(t))return qt(n,NaN);if(!t)return s;const i=s.getDate(),r=qt(n,s.getTime());r.setMonth(s.getMonth()+t+1,0);const o=r.getDate();return i>=o?r:(s.setFullYear(r.getFullYear(),r.getMonth(),i),s)}function ih(n,t,e){return qt(n,+nt(n)+t)}function OD(n,t,e){return ih(n,t*xo)}let MD={};function Js(){return MD}function un(n,t){var a,c,l,d;const e=Js(),s=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,i=nt(n,t==null?void 0:t.in),r=i.getDay(),o=(r<s?7:0)+r-s;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Ni(n,t){return un(n,{...t,weekStartsOn:1})}function Xv(n,t){const e=nt(n,t==null?void 0:t.in),s=e.getFullYear(),i=qt(e,0);i.setFullYear(s+1,0,4),i.setHours(0,0,0,0);const r=Ni(i),o=qt(e,0);o.setFullYear(s,0,4),o.setHours(0,0,0,0);const a=Ni(o);return e.getTime()>=r.getTime()?s+1:e.getTime()>=a.getTime()?s:s-1}function ic(n){const t=nt(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function Zs(n,...t){const e=qt.bind(null,t.find(s=>typeof s=="object"));return t.map(e)}function Mu(n,t){const e=nt(n,t==null?void 0:t.in);return e.setHours(0,0,0,0),e}function Jv(n,t,e){const[s,i]=Zs(e==null?void 0:e.in,n,t),r=Mu(s),o=Mu(i),a=+r-ic(r),c=+o-ic(o);return Math.round((a-c)/PD)}function ND(n,t){const e=Xv(n,t),s=qt(n,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),Ni(s)}function LD(n,t,e){const s=nt(n,e==null?void 0:e.in);return s.setTime(s.getTime()+t*bo),s}function VD(n,t,e){return sh(n,t*3,e)}function FD(n,t,e){return ih(n,t*1e3)}function $D(n,t,e){return $c(n,t*7,e)}function BD(n,t,e){return sh(n,t*12,e)}function Vr(n,t){const e=+nt(n)-+nt(t);return e<0?-1:e>0?1:e}function UD(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Zv(n){return!(!UD(n)&&typeof n!="number"||isNaN(+nt(n)))}function jD(n,t,e){const[s,i]=Zs(e==null?void 0:e.in,n,t),r=s.getFullYear()-i.getFullYear(),o=s.getMonth()-i.getMonth();return r*12+o}function zD(n,t,e){const[s,i]=Zs(e==null?void 0:e.in,n,t);return s.getFullYear()-i.getFullYear()}function tb(n,t,e){const[s,i]=Zs(e==null?void 0:e.in,n,t),r=sg(s,i),o=Math.abs(Jv(s,i));s.setDate(s.getDate()-r*o);const a=+(sg(s,i)===-r),c=r*(o-a);return c===0?0:c}function sg(n,t){const e=n.getFullYear()-t.getFullYear()||n.getMonth()-t.getMonth()||n.getDate()-t.getDate()||n.getHours()-t.getHours()||n.getMinutes()-t.getMinutes()||n.getSeconds()-t.getSeconds()||n.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function wo(n){return t=>{const s=(n?Math[n]:Math.trunc)(t);return s===0?0:s}}function HD(n,t,e){const[s,i]=Zs(e==null?void 0:e.in,n,t),r=(+s-+i)/xo;return wo(e==null?void 0:e.roundingMethod)(r)}function rh(n,t){return+nt(n)-+nt(t)}function qD(n,t,e){const s=rh(n,t)/bo;return wo(e==null?void 0:e.roundingMethod)(s)}function eb(n,t){const e=nt(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function nb(n,t){const e=nt(n,t==null?void 0:t.in),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function WD(n,t){const e=nt(n,t==null?void 0:t.in);return+eb(e,t)==+nb(e,t)}function sb(n,t,e){const[s,i,r]=Zs(e==null?void 0:e.in,n,n,t),o=Vr(i,r),a=Math.abs(jD(i,r));if(a<1)return 0;i.getMonth()===1&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-o*a);let c=Vr(i,r)===-o;WD(s)&&a===1&&Vr(s,r)===1&&(c=!1);const l=o*(a-+c);return l===0?0:l}function GD(n,t,e){const s=sb(n,t,e)/3;return wo(e==null?void 0:e.roundingMethod)(s)}function YD(n,t,e){const s=rh(n,t)/1e3;return wo(e==null?void 0:e.roundingMethod)(s)}function KD(n,t,e){const s=tb(n,t,e)/7;return wo(e==null?void 0:e.roundingMethod)(s)}function QD(n,t,e){const[s,i]=Zs(e==null?void 0:e.in,n,t),r=Vr(s,i),o=Math.abs(zD(s,i));s.setFullYear(1584),i.setFullYear(1584);const a=Vr(s,i)===-r,c=r*(o-+a);return c===0?0:c}function XD(n,t){const e=nt(n,t==null?void 0:t.in),s=e.getMonth(),i=s-s%3;return e.setMonth(i,1),e.setHours(0,0,0,0),e}function JD(n,t){const e=nt(n,t==null?void 0:t.in);return e.setDate(1),e.setHours(0,0,0,0),e}function ZD(n,t){const e=nt(n,t==null?void 0:t.in),s=e.getFullYear();return e.setFullYear(s+1,0,0),e.setHours(23,59,59,999),e}function ib(n,t){const e=nt(n,t==null?void 0:t.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}function t2(n,t){const e=nt(n,t==null?void 0:t.in);return e.setMinutes(59,59,999),e}function e2(n,t){var a,c;const e=Js(),s=e.weekStartsOn??((c=(a=e.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??0,i=nt(n,t==null?void 0:t.in),r=i.getDay(),o=(r<s?-7:0)+6-(r-s);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function n2(n,t){const e=nt(n,t==null?void 0:t.in);return e.setSeconds(59,999),e}function s2(n,t){const e=nt(n,t==null?void 0:t.in),s=e.getMonth(),i=s-s%3+3;return e.setMonth(i,0),e.setHours(23,59,59,999),e}function i2(n,t){const e=nt(n,t==null?void 0:t.in);return e.setMilliseconds(999),e}const r2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},o2=(n,t,e)=>{let s;const i=r2[n];return typeof i=="string"?s=i:t===1?s=i.one:s=i.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+s:s+" ago":s};function Fl(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const a2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},c2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},l2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u2={date:Fl({formats:a2,defaultWidth:"full"}),time:Fl({formats:c2,defaultWidth:"full"}),dateTime:Fl({formats:l2,defaultWidth:"full"})},d2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},h2=(n,t,e,s)=>d2[n];function dr(n){return(t,e)=>{const s=e!=null&&e.context?String(e.context):"standalone";let i;if(s==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,a=e!=null&&e.width?String(e.width):o;i=n.formattingValues[a]||n.formattingValues[o]}else{const o=n.defaultWidth,a=e!=null&&e.width?String(e.width):n.defaultWidth;i=n.values[a]||n.values[o]}const r=n.argumentCallback?n.argumentCallback(t):t;return i[r]}}const f2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},p2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},m2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},g2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},_2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},y2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},v2=(n,t)=>{const e=Number(n),s=e%100;if(s>20||s<10)switch(s%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},b2={ordinalNumber:v2,era:dr({values:f2,defaultWidth:"wide"}),quarter:dr({values:p2,defaultWidth:"wide",argumentCallback:n=>n-1}),month:dr({values:m2,defaultWidth:"wide"}),day:dr({values:g2,defaultWidth:"wide"}),dayPeriod:dr({values:_2,defaultWidth:"wide",formattingValues:y2,defaultFormattingWidth:"wide"})};function hr(n){return(t,e={})=>{const s=e.width,i=s&&n.matchPatterns[s]||n.matchPatterns[n.defaultMatchWidth],r=t.match(i);if(!r)return null;const o=r[0],a=s&&n.parsePatterns[s]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(a)?w2(a,h=>h.test(o)):x2(a,h=>h.test(o));let l;l=n.valueCallback?n.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;const d=t.slice(o.length);return{value:l,rest:d}}}function x2(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function w2(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function E2(n){return(t,e={})=>{const s=t.match(n.matchPattern);if(!s)return null;const i=s[0],r=t.match(n.parsePattern);if(!r)return null;let o=n.valueCallback?n.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;const a=t.slice(i.length);return{value:o,rest:a}}}const T2=/^(\d+)(th|st|nd|rd)?/i,I2=/\d+/i,A2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},k2={any:[/^b/i,/^(a|c)/i]},S2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},C2={any:[/1/i,/2/i,/3/i,/4/i]},R2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},P2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},D2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},O2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},M2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},N2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},L2={ordinalNumber:E2({matchPattern:T2,parsePattern:I2,valueCallback:n=>parseInt(n,10)}),era:hr({matchPatterns:A2,defaultMatchWidth:"wide",parsePatterns:k2,defaultParseWidth:"any"}),quarter:hr({matchPatterns:S2,defaultMatchWidth:"wide",parsePatterns:C2,defaultParseWidth:"any",valueCallback:n=>n+1}),month:hr({matchPatterns:R2,defaultMatchWidth:"wide",parsePatterns:P2,defaultParseWidth:"any"}),day:hr({matchPatterns:D2,defaultMatchWidth:"wide",parsePatterns:O2,defaultParseWidth:"any"}),dayPeriod:hr({matchPatterns:M2,defaultMatchWidth:"any",parsePatterns:N2,defaultParseWidth:"any"})},rb={code:"en-US",formatDistance:o2,formatLong:u2,formatRelative:h2,localize:b2,match:L2,options:{weekStartsOn:0,firstWeekContainsDate:1}};function V2(n,t){const e=nt(n,t==null?void 0:t.in);return Jv(e,ib(e))+1}function ob(n,t){const e=nt(n,t==null?void 0:t.in),s=+Ni(e)-+ND(e);return Math.round(s/Qv)+1}function oh(n,t){var d,h,f,m;const e=nt(n,t==null?void 0:t.in),s=e.getFullYear(),i=Js(),r=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(f=i.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=qt((t==null?void 0:t.in)||n,0);o.setFullYear(s+1,0,r),o.setHours(0,0,0,0);const a=un(o,t),c=qt((t==null?void 0:t.in)||n,0);c.setFullYear(s,0,r),c.setHours(0,0,0,0);const l=un(c,t);return+e>=+a?s+1:+e>=+l?s:s-1}function F2(n,t){var a,c,l,d;const e=Js(),s=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,i=oh(n,t),r=qt((t==null?void 0:t.in)||n,0);return r.setFullYear(i,0,s),r.setHours(0,0,0,0),un(r,t)}function ab(n,t){const e=nt(n,t==null?void 0:t.in),s=+un(e,t)-+F2(e,t);return Math.round(s/Qv)+1}function xt(n,t){const e=n<0?"-":"",s=Math.abs(n).toString().padStart(t,"0");return e+s}const Fn={y(n,t){const e=n.getFullYear(),s=e>0?e:1-e;return xt(t==="yy"?s%100:s,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):xt(e+1,2)},d(n,t){return xt(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return xt(n.getHours()%12||12,t.length)},H(n,t){return xt(n.getHours(),t.length)},m(n,t){return xt(n.getMinutes(),t.length)},s(n,t){return xt(n.getSeconds(),t.length)},S(n,t){const e=t.length,s=n.getMilliseconds(),i=Math.trunc(s*Math.pow(10,e-3));return xt(i,t.length)}},ci={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ig={G:function(n,t,e){const s=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(s,{width:"abbreviated"});case"GGGGG":return e.era(s,{width:"narrow"});case"GGGG":default:return e.era(s,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const s=n.getFullYear(),i=s>0?s:1-s;return e.ordinalNumber(i,{unit:"year"})}return Fn.y(n,t)},Y:function(n,t,e,s){const i=oh(n,s),r=i>0?i:1-i;if(t==="YY"){const o=r%100;return xt(o,2)}return t==="Yo"?e.ordinalNumber(r,{unit:"year"}):xt(r,t.length)},R:function(n,t){const e=Xv(n);return xt(e,t.length)},u:function(n,t){const e=n.getFullYear();return xt(e,t.length)},Q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return xt(s,2);case"Qo":return e.ordinalNumber(s,{unit:"quarter"});case"QQQ":return e.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(s,{width:"wide",context:"formatting"})}},q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return xt(s,2);case"qo":return e.ordinalNumber(s,{unit:"quarter"});case"qqq":return e.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(s,{width:"wide",context:"standalone"})}},M:function(n,t,e){const s=n.getMonth();switch(t){case"M":case"MM":return Fn.M(n,t);case"Mo":return e.ordinalNumber(s+1,{unit:"month"});case"MMM":return e.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(s,{width:"wide",context:"formatting"})}},L:function(n,t,e){const s=n.getMonth();switch(t){case"L":return String(s+1);case"LL":return xt(s+1,2);case"Lo":return e.ordinalNumber(s+1,{unit:"month"});case"LLL":return e.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(s,{width:"wide",context:"standalone"})}},w:function(n,t,e,s){const i=ab(n,s);return t==="wo"?e.ordinalNumber(i,{unit:"week"}):xt(i,t.length)},I:function(n,t,e){const s=ob(n);return t==="Io"?e.ordinalNumber(s,{unit:"week"}):xt(s,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):Fn.d(n,t)},D:function(n,t,e){const s=V2(n);return t==="Do"?e.ordinalNumber(s,{unit:"dayOfYear"}):xt(s,t.length)},E:function(n,t,e){const s=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(s,{width:"short",context:"formatting"});case"EEEE":default:return e.day(s,{width:"wide",context:"formatting"})}},e:function(n,t,e,s){const i=n.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(r);case"ee":return xt(r,2);case"eo":return e.ordinalNumber(r,{unit:"day"});case"eee":return e.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(i,{width:"short",context:"formatting"});case"eeee":default:return e.day(i,{width:"wide",context:"formatting"})}},c:function(n,t,e,s){const i=n.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(r);case"cc":return xt(r,t.length);case"co":return e.ordinalNumber(r,{unit:"day"});case"ccc":return e.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(i,{width:"narrow",context:"standalone"});case"cccccc":return e.day(i,{width:"short",context:"standalone"});case"cccc":default:return e.day(i,{width:"wide",context:"standalone"})}},i:function(n,t,e){const s=n.getDay(),i=s===0?7:s;switch(t){case"i":return String(i);case"ii":return xt(i,t.length);case"io":return e.ordinalNumber(i,{unit:"day"});case"iii":return e.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(s,{width:"short",context:"formatting"});case"iiii":default:return e.day(s,{width:"wide",context:"formatting"})}},a:function(n,t,e){const i=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(n,t,e){const s=n.getHours();let i;switch(s===12?i=ci.noon:s===0?i=ci.midnight:i=s/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(n,t,e){const s=n.getHours();let i;switch(s>=17?i=ci.evening:s>=12?i=ci.afternoon:s>=4?i=ci.morning:i=ci.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let s=n.getHours()%12;return s===0&&(s=12),e.ordinalNumber(s,{unit:"hour"})}return Fn.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):Fn.H(n,t)},K:function(n,t,e){const s=n.getHours()%12;return t==="Ko"?e.ordinalNumber(s,{unit:"hour"}):xt(s,t.length)},k:function(n,t,e){let s=n.getHours();return s===0&&(s=24),t==="ko"?e.ordinalNumber(s,{unit:"hour"}):xt(s,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):Fn.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):Fn.s(n,t)},S:function(n,t){return Fn.S(n,t)},X:function(n,t,e){const s=n.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return og(s);case"XXXX":case"XX":return As(s);case"XXXXX":case"XXX":default:return As(s,":")}},x:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"x":return og(s);case"xxxx":case"xx":return As(s);case"xxxxx":case"xxx":default:return As(s,":")}},O:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+rg(s,":");case"OOOO":default:return"GMT"+As(s,":")}},z:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+rg(s,":");case"zzzz":default:return"GMT"+As(s,":")}},t:function(n,t,e){const s=Math.trunc(+n/1e3);return xt(s,t.length)},T:function(n,t,e){return xt(+n,t.length)}};function rg(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),i=Math.trunc(s/60),r=s%60;return r===0?e+String(i):e+String(i)+t+xt(r,2)}function og(n,t){return n%60===0?(n>0?"-":"+")+xt(Math.abs(n)/60,2):As(n,t)}function As(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),i=xt(Math.trunc(s/60),2),r=xt(s%60,2);return e+i+t+r}const ag=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},cb=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},$2=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],s=e[1],i=e[2];if(!i)return ag(n,t);let r;switch(s){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"});break}return r.replace("{{date}}",ag(s,t)).replace("{{time}}",cb(i,t))},Nu={p:cb,P:$2},B2=/^D+$/,U2=/^Y+$/,j2=["D","DD","YY","YYYY"];function lb(n){return B2.test(n)}function ub(n){return U2.test(n)}function Lu(n,t,e){const s=z2(n,t,e);if(console.warn(s),j2.includes(n))throw new RangeError(s)}function z2(n,t,e){const s=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const H2=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,q2=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,W2=/^'([^]*?)'?$/,G2=/''/g,Y2=/[a-zA-Z]/;function K2(n,t,e){var d,h,f,m,g,v,y,T;const s=Js(),i=(e==null?void 0:e.locale)??s.locale??rb,r=(e==null?void 0:e.firstWeekContainsDate)??((h=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(f=s.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((v=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??s.weekStartsOn??((T=(y=s.locale)==null?void 0:y.options)==null?void 0:T.weekStartsOn)??0,a=nt(n,e==null?void 0:e.in);if(!Zv(a))throw new RangeError("Invalid time value");let c=t.match(q2).map(A=>{const C=A[0];if(C==="p"||C==="P"){const D=Nu[C];return D(A,i.formatLong)}return A}).join("").match(H2).map(A=>{if(A==="''")return{isToken:!1,value:"'"};const C=A[0];if(C==="'")return{isToken:!1,value:Q2(A)};if(ig[C])return{isToken:!0,value:A};if(C.match(Y2))throw new RangeError("Format string contains an unescaped latin alphabet character `"+C+"`");return{isToken:!1,value:A}});i.localize.preprocessor&&(c=i.localize.preprocessor(a,c));const l={firstWeekContainsDate:r,weekStartsOn:o,locale:i};return c.map(A=>{if(!A.isToken)return A.value;const C=A.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&ub(C)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&lb(C))&&Lu(C,t,String(n));const D=ig[C[0]];return D(a,C,i.localize,l)}).join("")}function Q2(n){const t=n.match(W2);return t?t[1].replace(G2,"'"):n}function X2(){return Object.assign({},Js())}function J2(n,t){const e=nt(n,t==null?void 0:t.in).getDay();return e===0?7:e}function Z2(n,t){const e=tO(t)?new t(0):qt(t,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function tO(n){var t;return typeof n=="function"&&((t=n.prototype)==null?void 0:t.constructor)===n}const eO=10;class db{constructor(){N(this,"subPriority",0)}validate(t,e){return!0}}class nO extends db{constructor(t,e,s,i,r){super(),this.value=t,this.validateValue=e,this.setValue=s,this.priority=i,r&&(this.subPriority=r)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,s){return this.setValue(t,e,this.value,s)}}class sO extends db{constructor(e,s){super();N(this,"priority",eO);N(this,"subPriority",-1);this.context=e||(i=>qt(s,i))}set(e,s){return s.timestampIsSet?e:qt(e,Z2(e,this.context))}}class vt{run(t,e,s,i){const r=this.parse(t,e,s,i);return r?{setter:new nO(r.value,this.validate,this.set,this.priority,this.subPriority),rest:r.rest}:null}validate(t,e,s){return!0}}class iO extends vt{constructor(){super(...arguments);N(this,"priority",140);N(this,"incompatibleTokens",["R","u","t","T"])}parse(e,s,i){switch(s){case"G":case"GG":case"GGG":return i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"});case"GGGGG":return i.era(e,{width:"narrow"});case"GGGG":default:return i.era(e,{width:"wide"})||i.era(e,{width:"abbreviated"})||i.era(e,{width:"narrow"})}}set(e,s,i){return s.era=i,e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}const Kt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Ze={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Qt(n,t){return n&&{value:t(n.value),rest:n.rest}}function Vt(n,t){const e=t.match(n);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function tn(n,t){const e=t.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};const s=e[1]==="+"?1:-1,i=e[2]?parseInt(e[2],10):0,r=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:s*(i*xo+r*bo+o*DD),rest:t.slice(e[0].length)}}function hb(n){return Vt(Kt.anyDigitsSigned,n)}function Wt(n,t){switch(n){case 1:return Vt(Kt.singleDigit,t);case 2:return Vt(Kt.twoDigits,t);case 3:return Vt(Kt.threeDigits,t);case 4:return Vt(Kt.fourDigits,t);default:return Vt(new RegExp("^\\d{1,"+n+"}"),t)}}function rc(n,t){switch(n){case 1:return Vt(Kt.singleDigitSigned,t);case 2:return Vt(Kt.twoDigitsSigned,t);case 3:return Vt(Kt.threeDigitsSigned,t);case 4:return Vt(Kt.fourDigitsSigned,t);default:return Vt(new RegExp("^-?\\d{1,"+n+"}"),t)}}function ah(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function fb(n,t){const e=t>0,s=e?t:1-t;let i;if(s<=50)i=n||100;else{const r=s+50,o=Math.trunc(r/100)*100,a=n>=r%100;i=n+o-(a?100:0)}return e?i:1-i}function pb(n){return n%400===0||n%4===0&&n%100!==0}class rO extends vt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,s,i){const r=o=>({year:o,isTwoDigitYear:s==="yy"});switch(s){case"y":return Qt(Wt(4,e),r);case"yo":return Qt(i.ordinalNumber(e,{unit:"year"}),r);default:return Qt(Wt(s.length,e),r)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,i){const r=e.getFullYear();if(i.isTwoDigitYear){const a=fb(i.year,r);return e.setFullYear(a,0,1),e.setHours(0,0,0,0),e}const o=!("era"in s)||s.era===1?i.year:1-i.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class oO extends vt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,s,i){const r=o=>({year:o,isTwoDigitYear:s==="YY"});switch(s){case"Y":return Qt(Wt(4,e),r);case"Yo":return Qt(i.ordinalNumber(e,{unit:"year"}),r);default:return Qt(Wt(s.length,e),r)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,i,r){const o=oh(e,r);if(i.isTwoDigitYear){const c=fb(i.year,o);return e.setFullYear(c,0,r.firstWeekContainsDate),e.setHours(0,0,0,0),un(e,r)}const a=!("era"in s)||s.era===1?i.year:1-i.year;return e.setFullYear(a,0,r.firstWeekContainsDate),e.setHours(0,0,0,0),un(e,r)}}class aO extends vt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,s){return rc(s==="R"?4:s.length,e)}set(e,s,i){const r=qt(e,0);return r.setFullYear(i,0,4),r.setHours(0,0,0,0),Ni(r)}}class cO extends vt{constructor(){super(...arguments);N(this,"priority",130);N(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,s){return rc(s==="u"?4:s.length,e)}set(e,s,i){return e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}class lO extends vt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"Q":case"QQ":return Wt(s.length,e);case"Qo":return i.ordinalNumber(e,{unit:"quarter"});case"QQQ":return i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(e,{width:"wide",context:"formatting"})||i.quarter(e,{width:"abbreviated",context:"formatting"})||i.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=1&&s<=4}set(e,s,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}}class uO extends vt{constructor(){super(...arguments);N(this,"priority",120);N(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"q":case"qq":return Wt(s.length,e);case"qo":return i.ordinalNumber(e,{unit:"quarter"});case"qqq":return i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(e,{width:"wide",context:"standalone"})||i.quarter(e,{width:"abbreviated",context:"standalone"})||i.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=1&&s<=4}set(e,s,i){return e.setMonth((i-1)*3,1),e.setHours(0,0,0,0),e}}class dO extends vt{constructor(){super(...arguments);N(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);N(this,"priority",110)}parse(e,s,i){const r=o=>o-1;switch(s){case"M":return Qt(Vt(Kt.month,e),r);case"MM":return Qt(Wt(2,e),r);case"Mo":return Qt(i.ordinalNumber(e,{unit:"month"}),r);case"MMM":return i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(e,{width:"wide",context:"formatting"})||i.month(e,{width:"abbreviated",context:"formatting"})||i.month(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}class hO extends vt{constructor(){super(...arguments);N(this,"priority",110);N(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,s,i){const r=o=>o-1;switch(s){case"L":return Qt(Vt(Kt.month,e),r);case"LL":return Qt(Wt(2,e),r);case"Lo":return Qt(i.ordinalNumber(e,{unit:"month"}),r);case"LLL":return i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(e,{width:"wide",context:"standalone"})||i.month(e,{width:"abbreviated",context:"standalone"})||i.month(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.setMonth(i,1),e.setHours(0,0,0,0),e}}function fO(n,t,e){const s=nt(n,e==null?void 0:e.in),i=ab(s,e)-t;return s.setDate(s.getDate()-i*7),nt(s,e==null?void 0:e.in)}class pO extends vt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,s,i){switch(s){case"w":return Vt(Kt.week,e);case"wo":return i.ordinalNumber(e,{unit:"week"});default:return Wt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,i,r){return un(fO(e,i,r),r)}}function mO(n,t,e){const s=nt(n,e==null?void 0:e.in),i=ob(s,e)-t;return s.setDate(s.getDate()-i*7),s}class gO extends vt{constructor(){super(...arguments);N(this,"priority",100);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,s,i){switch(s){case"I":return Vt(Kt.week,e);case"Io":return i.ordinalNumber(e,{unit:"week"});default:return Wt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,i){return Ni(mO(e,i))}}const _O=[31,28,31,30,31,30,31,31,30,31,30,31],yO=[31,29,31,30,31,30,31,31,30,31,30,31];class vO extends vt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subPriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"d":return Vt(Kt.date,e);case"do":return i.ordinalNumber(e,{unit:"date"});default:return Wt(s.length,e)}}validate(e,s){const i=e.getFullYear(),r=pb(i),o=e.getMonth();return r?s>=1&&s<=yO[o]:s>=1&&s<=_O[o]}set(e,s,i){return e.setDate(i),e.setHours(0,0,0,0),e}}class bO extends vt{constructor(){super(...arguments);N(this,"priority",90);N(this,"subpriority",1);N(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,s,i){switch(s){case"D":case"DD":return Vt(Kt.dayOfYear,e);case"Do":return i.ordinalNumber(e,{unit:"date"});default:return Wt(s.length,e)}}validate(e,s){const i=e.getFullYear();return pb(i)?s>=1&&s<=366:s>=1&&s<=365}set(e,s,i){return e.setMonth(0,i),e.setHours(0,0,0,0),e}}function ch(n,t,e){var h,f,m,g;const s=Js(),i=(e==null?void 0:e.weekStartsOn)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??s.weekStartsOn??((g=(m=s.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,r=nt(n,e==null?void 0:e.in),o=r.getDay(),c=(t%7+7)%7,l=7-i,d=t<0||t>6?t-(o+l)%7:(c+l)%7-(o+l)%7;return $c(r,d,e)}class xO extends vt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,s,i){switch(s){case"E":case"EE":case"EEE":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=ch(e,i,r),e.setHours(0,0,0,0),e}}class wO extends vt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,s,i,r){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+c};switch(s){case"e":case"ee":return Qt(Wt(s.length,e),o);case"eo":return Qt(i.ordinalNumber(e,{unit:"day"}),o);case"eee":return i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeeee":return i.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=ch(e,i,r),e.setHours(0,0,0,0),e}}class EO extends vt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,s,i,r){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+r.weekStartsOn+6)%7+c};switch(s){case"c":case"cc":return Qt(Wt(s.length,e),o);case"co":return Qt(i.ordinalNumber(e,{unit:"day"}),o);case"ccc":return i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"ccccc":return i.day(e,{width:"narrow",context:"standalone"});case"cccccc":return i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return i.day(e,{width:"wide",context:"standalone"})||i.day(e,{width:"abbreviated",context:"standalone"})||i.day(e,{width:"short",context:"standalone"})||i.day(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=6}set(e,s,i,r){return e=ch(e,i,r),e.setHours(0,0,0,0),e}}function TO(n,t,e){const s=nt(n,e==null?void 0:e.in),i=J2(s,e),r=t-i;return $c(s,r,e)}class IO extends vt{constructor(){super(...arguments);N(this,"priority",90);N(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,s,i){const r=o=>o===0?7:o;switch(s){case"i":case"ii":return Wt(s.length,e);case"io":return i.ordinalNumber(e,{unit:"day"});case"iii":return Qt(i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiii":return Qt(i.day(e,{width:"narrow",context:"formatting"}),r);case"iiiiii":return Qt(i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r);case"iiii":default:return Qt(i.day(e,{width:"wide",context:"formatting"})||i.day(e,{width:"abbreviated",context:"formatting"})||i.day(e,{width:"short",context:"formatting"})||i.day(e,{width:"narrow",context:"formatting"}),r)}}validate(e,s){return s>=1&&s<=7}set(e,s,i){return e=TO(e,i),e.setHours(0,0,0,0),e}}class AO extends vt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,s,i){switch(s){case"a":case"aa":case"aaa":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(ah(i),0,0,0),e}}class kO extends vt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,s,i){switch(s){case"b":case"bb":case"bbb":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(ah(i),0,0,0),e}}class SO extends vt{constructor(){super(...arguments);N(this,"priority",80);N(this,"incompatibleTokens",["a","b","t","T"])}parse(e,s,i){switch(s){case"B":case"BB":case"BBB":return i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(e,{width:"wide",context:"formatting"})||i.dayPeriod(e,{width:"abbreviated",context:"formatting"})||i.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,i){return e.setHours(ah(i),0,0,0),e}}class CO extends vt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,s,i){switch(s){case"h":return Vt(Kt.hour12h,e);case"ho":return i.ordinalNumber(e,{unit:"hour"});default:return Wt(s.length,e)}}validate(e,s){return s>=1&&s<=12}set(e,s,i){const r=e.getHours()>=12;return r&&i<12?e.setHours(i+12,0,0,0):!r&&i===12?e.setHours(0,0,0,0):e.setHours(i,0,0,0),e}}class RO extends vt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,s,i){switch(s){case"H":return Vt(Kt.hour23h,e);case"Ho":return i.ordinalNumber(e,{unit:"hour"});default:return Wt(s.length,e)}}validate(e,s){return s>=0&&s<=23}set(e,s,i){return e.setHours(i,0,0,0),e}}class PO extends vt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,s,i){switch(s){case"K":return Vt(Kt.hour11h,e);case"Ko":return i.ordinalNumber(e,{unit:"hour"});default:return Wt(s.length,e)}}validate(e,s){return s>=0&&s<=11}set(e,s,i){return e.getHours()>=12&&i<12?e.setHours(i+12,0,0,0):e.setHours(i,0,0,0),e}}class DO extends vt{constructor(){super(...arguments);N(this,"priority",70);N(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,s,i){switch(s){case"k":return Vt(Kt.hour24h,e);case"ko":return i.ordinalNumber(e,{unit:"hour"});default:return Wt(s.length,e)}}validate(e,s){return s>=1&&s<=24}set(e,s,i){const r=i<=24?i%24:i;return e.setHours(r,0,0,0),e}}class OO extends vt{constructor(){super(...arguments);N(this,"priority",60);N(this,"incompatibleTokens",["t","T"])}parse(e,s,i){switch(s){case"m":return Vt(Kt.minute,e);case"mo":return i.ordinalNumber(e,{unit:"minute"});default:return Wt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,i){return e.setMinutes(i,0,0),e}}class MO extends vt{constructor(){super(...arguments);N(this,"priority",50);N(this,"incompatibleTokens",["t","T"])}parse(e,s,i){switch(s){case"s":return Vt(Kt.second,e);case"so":return i.ordinalNumber(e,{unit:"second"});default:return Wt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,i){return e.setSeconds(i,0),e}}class NO extends vt{constructor(){super(...arguments);N(this,"priority",30);N(this,"incompatibleTokens",["t","T"])}parse(e,s){const i=r=>Math.trunc(r*Math.pow(10,-s.length+3));return Qt(Wt(s.length,e),i)}set(e,s,i){return e.setMilliseconds(i),e}}class LO extends vt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","x"])}parse(e,s){switch(s){case"X":return tn(Ze.basicOptionalMinutes,e);case"XX":return tn(Ze.basic,e);case"XXXX":return tn(Ze.basicOptionalSeconds,e);case"XXXXX":return tn(Ze.extendedOptionalSeconds,e);case"XXX":default:return tn(Ze.extended,e)}}set(e,s,i){return s.timestampIsSet?e:qt(e,e.getTime()-ic(e)-i)}}class VO extends vt{constructor(){super(...arguments);N(this,"priority",10);N(this,"incompatibleTokens",["t","T","X"])}parse(e,s){switch(s){case"x":return tn(Ze.basicOptionalMinutes,e);case"xx":return tn(Ze.basic,e);case"xxxx":return tn(Ze.basicOptionalSeconds,e);case"xxxxx":return tn(Ze.extendedOptionalSeconds,e);case"xxx":default:return tn(Ze.extended,e)}}set(e,s,i){return s.timestampIsSet?e:qt(e,e.getTime()-ic(e)-i)}}class FO extends vt{constructor(){super(...arguments);N(this,"priority",40);N(this,"incompatibleTokens","*")}parse(e){return hb(e)}set(e,s,i){return[qt(e,i*1e3),{timestampIsSet:!0}]}}class $O extends vt{constructor(){super(...arguments);N(this,"priority",20);N(this,"incompatibleTokens","*")}parse(e){return hb(e)}set(e,s,i){return[qt(e,i),{timestampIsSet:!0}]}}const BO={G:new iO,y:new rO,Y:new oO,R:new aO,u:new cO,Q:new lO,q:new uO,M:new dO,L:new hO,w:new pO,I:new gO,d:new vO,D:new bO,E:new xO,e:new wO,c:new EO,i:new IO,a:new AO,b:new kO,B:new SO,h:new CO,H:new RO,K:new PO,k:new DO,m:new OO,s:new MO,S:new NO,X:new LO,x:new VO,t:new FO,T:new $O},UO=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,jO=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,zO=/^'([^]*?)'?$/,HO=/''/g,qO=/\S/,WO=/[a-zA-Z]/;function GO(n,t,e,s){var y,T,A,C,D,P,O,w;const i=()=>qt((s==null?void 0:s.in)||e,NaN),r=X2(),o=(s==null?void 0:s.locale)??r.locale??rb,a=(s==null?void 0:s.firstWeekContainsDate)??((T=(y=s==null?void 0:s.locale)==null?void 0:y.options)==null?void 0:T.firstWeekContainsDate)??r.firstWeekContainsDate??((C=(A=r.locale)==null?void 0:A.options)==null?void 0:C.firstWeekContainsDate)??1,c=(s==null?void 0:s.weekStartsOn)??((P=(D=s==null?void 0:s.locale)==null?void 0:D.options)==null?void 0:P.weekStartsOn)??r.weekStartsOn??((w=(O=r.locale)==null?void 0:O.options)==null?void 0:w.weekStartsOn)??0;if(!t)return n?i():nt(e,s==null?void 0:s.in);const l={firstWeekContainsDate:a,weekStartsOn:c,locale:o},d=[new sO(s==null?void 0:s.in,e)],h=t.match(jO).map(b=>{const x=b[0];if(x in Nu){const I=Nu[x];return I(b,o.formatLong)}return b}).join("").match(UO),f=[];for(let b of h){!(s!=null&&s.useAdditionalWeekYearTokens)&&ub(b)&&Lu(b,t,n),!(s!=null&&s.useAdditionalDayOfYearTokens)&&lb(b)&&Lu(b,t,n);const x=b[0],I=BO[x];if(I){const{incompatibleTokens:S}=I;if(Array.isArray(S)){const k=f.find(q=>S.includes(q.token)||q.token===x);if(k)throw new RangeError(`The format string mustn't contain \`${k.fullToken}\` and \`${b}\` at the same time`)}else if(I.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${b}\` and any other token at the same time`);f.push({token:x,fullToken:b});const R=I.run(n,b,o.match,l);if(!R)return i();d.push(R.setter),n=R.rest}else{if(x.match(WO))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");if(b==="''"?b="'":x==="'"&&(b=YO(b)),n.indexOf(b)===0)n=n.slice(b.length);else return i()}}if(n.length>0&&qO.test(n))return i();const m=d.map(b=>b.priority).sort((b,x)=>x-b).filter((b,x,I)=>I.indexOf(b)===x).map(b=>d.filter(x=>x.priority===b).sort((x,I)=>I.subPriority-x.subPriority)).map(b=>b[0]);let g=nt(e,s==null?void 0:s.in);if(isNaN(+g))return i();const v={};for(const b of m){if(!b.validate(g,l))return i();const x=b.set(g,v,l);Array.isArray(x)?(g=x[0],Object.assign(v,x[1])):g=x}return g}function YO(n){return n.match(zO)[1].replace(HO,"'")}function KO(n,t){const e=nt(n,t==null?void 0:t.in);return e.setMinutes(0,0,0),e}function QO(n,t){const e=nt(n,t==null?void 0:t.in);return e.setSeconds(0,0),e}function XO(n,t){const e=nt(n,t==null?void 0:t.in);return e.setMilliseconds(0),e}function JO(n,t){const e=()=>qt(t==null?void 0:t.in,NaN),s=(t==null?void 0:t.additionalDigits)??2,i=nM(n);let r;if(i.date){const l=sM(i.date,s);r=iM(l.restDateString,l.year)}if(!r||isNaN(+r))return e();const o=+r;let a=0,c;if(i.time&&(a=rM(i.time),isNaN(a)))return e();if(i.timezone){if(c=oM(i.timezone),isNaN(c))return e()}else{const l=new Date(o+a),d=nt(0,t==null?void 0:t.in);return d.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),d.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),d}return nt(o+a+c,t==null?void 0:t.in)}const ca={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ZO=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,tM=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,eM=/^([+-])(\d{2})(?::?(\d{2}))?$/;function nM(n){const t={},e=n.split(ca.dateTimeDelimiter);let s;if(e.length>2)return t;if(/:/.test(e[0])?s=e[0]:(t.date=e[0],s=e[1],ca.timeZoneDelimiter.test(t.date)&&(t.date=n.split(ca.timeZoneDelimiter)[0],s=n.substr(t.date.length,n.length))),s){const i=ca.timezone.exec(s);i?(t.time=s.replace(i[1],""),t.timezone=i[1]):t.time=s}return t}function sM(n,t){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),s=n.match(e);if(!s)return{year:NaN,restDateString:""};const i=s[1]?parseInt(s[1]):null,r=s[2]?parseInt(s[2]):null;return{year:r===null?i:r*100,restDateString:n.slice((s[1]||s[2]).length)}}function iM(n,t){if(t===null)return new Date(NaN);const e=n.match(ZO);if(!e)return new Date(NaN);const s=!!e[4],i=fr(e[1]),r=fr(e[2])-1,o=fr(e[3]),a=fr(e[4]),c=fr(e[5])-1;if(s)return dM(t,a,c)?aM(t,a,c):new Date(NaN);{const l=new Date(0);return!lM(t,r,o)||!uM(t,i)?new Date(NaN):(l.setUTCFullYear(t,r,Math.max(i,o)),l)}}function fr(n){return n?parseInt(n):1}function rM(n){const t=n.match(tM);if(!t)return NaN;const e=$l(t[1]),s=$l(t[2]),i=$l(t[3]);return hM(e,s,i)?e*xo+s*bo+i*1e3:NaN}function $l(n){return n&&parseFloat(n.replace(",","."))||0}function oM(n){if(n==="Z")return 0;const t=n.match(eM);if(!t)return 0;const e=t[1]==="+"?-1:1,s=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return fM(s,i)?e*(s*xo+i*bo):NaN}function aM(n,t,e){const s=new Date(0);s.setUTCFullYear(n,0,4);const i=s.getUTCDay()||7,r=(t-1)*7+e+1-i;return s.setUTCDate(s.getUTCDate()+r),s}const cM=[31,null,31,30,31,30,31,31,30,31,30,31];function mb(n){return n%400===0||n%4===0&&n%100!==0}function lM(n,t,e){return t>=0&&t<=11&&e>=1&&e<=(cM[t]||(mb(n)?29:28))}function uM(n,t){return t>=1&&t<=(mb(n)?366:365)}function dM(n,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function hM(n,t,e){return n===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25}function fM(n,t){return t>=0&&t<=59}/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */const pM={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};Cv._date.override({_id:"date-fns",formats:function(){return pM},parse:function(n,t){if(n===null||typeof n>"u")return null;const e=typeof n;return e==="number"||n instanceof Date?n=nt(n):e==="string"&&(typeof t=="string"?n=GO(n,t,new Date,this.options):n=JO(n,this.options)),Zv(n)?n.getTime():null},format:function(n,t){return K2(n,t,this.options)},add:function(n,t,e){switch(e){case"millisecond":return ih(n,t);case"second":return FD(n,t);case"minute":return LD(n,t);case"hour":return OD(n,t);case"day":return $c(n,t);case"week":return $D(n,t);case"month":return sh(n,t);case"quarter":return VD(n,t);case"year":return BD(n,t);default:return n}},diff:function(n,t,e){switch(e){case"millisecond":return rh(n,t);case"second":return YD(n,t);case"minute":return qD(n,t);case"hour":return HD(n,t);case"day":return tb(n,t);case"week":return KD(n,t);case"month":return sb(n,t);case"quarter":return GD(n,t);case"year":return QD(n,t);default:return 0}},startOf:function(n,t,e){switch(t){case"second":return XO(n);case"minute":return QO(n);case"hour":return KO(n);case"day":return Mu(n);case"week":return un(n);case"isoWeek":return un(n,{weekStartsOn:+e});case"month":return JD(n);case"quarter":return XD(n);case"year":return ib(n);default:return n}},endOf:function(n,t){switch(t){case"second":return i2(n);case"minute":return n2(n);case"hour":return t2(n);case"day":return eb(n);case"week":return e2(n);case"month":return nb(n);case"quarter":return s2(n);case"year":return ZD(n);default:return n}}});const Bl="rgba(255,255,255,0.08)",la="#a1a1aa",xs={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},re={renderEmpty:n=>{const t=document.getElementById(n);if(!t)return;const e=t.parentElement;if(!e)return;t.style.display="none";let s=e.querySelector(".chart-placeholder");s||(s=document.createElement("div"),s.className="chart-placeholder text-center text-sm text-text-muted py-6",e.appendChild(s)),s.textContent="Sem dados"},renderHorasNormaisExtras:(n,t={},e={})=>{const s=document.getElementById(n);if(!s)return;const i=Array.from(new Set([...Object.keys(t),...Object.keys(e)])).sort(),r=i.map(a=>t[a]||0),o=i.map(a=>e[a]||0);s.chart&&s.chart.destroy(),s.chart=new ft(s,{type:"bar",data:{labels:i.map(a=>{const c=new Date(a);return c.setHours(12,0,0,0),c.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Horas Normais",data:r,backgroundColor:"#22c55e"},{label:"Horas Extras",data:o,backgroundColor:"#ef4444"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:xs}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{color:la,font:xs,maxRotation:45,autoSkip:!0}},y:{stacked:!0,grid:{color:Bl},ticks:{color:la,font:xs},beginAtZero:!0}}}})},renderCurvaHoras:(n,t=[],e=[])=>{const s=document.getElementById(n);if(!s)return;s.chart&&s.chart.destroy();const i=[...t||[]].sort((a,c)=>new Date(a.x)-new Date(c.x)),r=[...e||[]].sort((a,c)=>new Date(a.x)-new Date(c.x)),o={id:"weekendShade",beforeDraw(a){const c=a.scales.x,l=a.ctx,d=c.min,h=c.max;if(!d||!h)return;const f=24*60*60*1e3;let m=d-(new Date(d).getDay()+7)%7*f;for(;m<=h+f*7;){const g=new Date(m),v=g.getDay();if(v===0||v===6){const y=c.getPixelForValue(g),T=c.getPixelForValue(new Date(m+f));l.save(),l.fillStyle="rgba(255,255,255,0.03)",l.fillRect(y,a.chartArea.top,T-y,a.chartArea.bottom-a.chartArea.top),l.restore()}m+=f}}};s.chart=new ft(s,{type:"line",data:{datasets:[{label:"Horas Planejadas",data:i,borderColor:"#22c55e",backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:2,pointRadius:0,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Horas Executadas",data:r,borderColor:"#ef4444",backgroundColor:"rgba(239,68,68,0.1)",fill:!0,tension:.3,borderWidth:3,pointRadius:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:Bl},offset:!1,ticks:{source:"data",color:la,font:xs,callback:a=>{const c=new Date(a),l=c.toLocaleDateString("en-US",{month:"short",day:"numeric"}),d=c.getDay();return d===1?`${l} (Mon)`:d===5?`${l} (Fri)`:l}}},y:{grid:{color:Bl},ticks:{color:la,font:xs},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:xs,usePointStyle:!0}},weekendShade:!0}},plugins:[o]})},renderHorasPorFuncao:(n,t={})=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ft(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#0ea5e9","#f59e0b","#ef4444","#a855f7","#6366f1"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:xs,usePointStyle:!0}}}}})}},no=n=>n instanceof Date&&!isNaN(n),mM=(n,t)=>{const e=new Date(n),s=new Date(t);if(!no(e)||!no(s)||e>s)return[];const i=[];for(let r=new Date(e);r<=s;r.setDate(r.getDate()+1))i.push(new Date(r));return i},gb=n=>no(n)?n.toISOString().split("T")[0]:null,_b=n=>{if(!(n!=null&&n.data_inicio)||!(n!=null&&n.data_prevista_fim))return[];const t=new Date(n.data_inicio),e=new Date(n.data_prevista_fim);if(!no(t)||!no(e)||t>e)return[];const s=mM(t,e),i=s.length?(n.orcamento||0)/s.length:0;let r=0;return s.map(o=>{r+=i;const a=gb(o);return a?{x:a,y:r}:null}).filter(Boolean)},yb=(n=[],t={},e=0,s=0,i={})=>{const r={};n.forEach(c=>{const l=c.data_recebimento||c.data_emissao||c.previsao_entrega||c.data_solicitacao;if(!l)return;const d=gb(new Date(l));if(!d)return;const h=Number(c.valor_total||c.valor_estimado||0);r[d]=(r[d]||0)+h}),Object.entries(t||{}).forEach(([c,l])=>{const d=Number(l)||0,h=Number(i==null?void 0:i[c])||0,m=Math.max(0,d-h)*e+(h*s||e);r[c]=(r[c]||0)+m});const o=Object.keys(r).sort();let a=0;return o.map(c=>(a+=r[c],{x:c,y:a}))},Ms={create:async n=>(await Bi(yt(K,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=te(yt(K,"notificacoes"),Ct("userId","==",n),hu("created_at","desc"),pa(t));return(await mt(e)).docs.map(i=>({id:i.id,...i.data()}))},markAsRead:async n=>{await He(ne(K,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=te(yt(K,"notificacoes"),Ct("userId","==",n),Ct("lida","==",!1)),s=(await mt(t)).docs.map(i=>He(ne(K,"notificacoes",i.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},markByType:async(n,t,e=null)=>{if(!n||!t)return;const s=[Ct("userId","==",n),Ct("tipo","==",t),Ct("lida","==",!1)];e&&s.push(Ct("obraId","==",e));const i=te(yt(K,"notificacoes"),...s),o=(await mt(i)).docs.map(a=>He(ne(K,"notificacoes",a.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(o)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=te(yt(K,"compras"),Ct("status_compra","in",["Comprado","Em Trânsito"]),Ct("data_entrega_prevista","<=",n.toISOString())),e=await mt(t),s=[];for(const i of e.docs){const r=i.data(),o=Math.ceil((new Date(r.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:r.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${r.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${i.id}`,prioridade:o===0?"alta":"normal"})}for(const i of s)await Ms.create(i);return s.length}},mi={getCompras:async(n={})=>{let e=(await mt(yt(K,"compras"))).docs.map(P=>({id:P.id,...P.data()}));const{search:s="",status:i="",obra:r="",prioridade:o="",natureza:a="",cc:c="",dateStart:l="",dateEnd:d="",onlyDelayed:h=!1,fornecedor:f="",comprador:m="",statusAprov:g="",nfConferida:v=!1,nf:y=""}=n,T=s.toLowerCase(),A=l?new Date(l):null,C=d?new Date(d):null,D=new Date;return D.setHours(0,0,0,0),e=e.filter(P=>{if(T&&!(P.descricao_compra||P.descricao||"").toLowerCase().includes(T)||i&&P.status_compra!==i||r&&P.obraId!==r||o&&P.prioridade!==o||a&&(P.natureza_compra||"").trim()!==a||c&&P.centroCustoId!==c||f&&P.fornecedorId!==f||m&&P.compradorId!==m||g&&(P.status_aprovacao||"")!==g||v&&!P.nf_conferida||y&&!(P.numero_nf||"").toLowerCase().includes(y.toLowerCase()))return!1;const O=P.data_solicitacao?new Date(P.data_solicitacao):null;if(A&&O&&O<A||C&&O&&O>C)return!1;if(h){const w=P.previsao_entrega?new Date(P.previsao_entrega):P.data_entrega_prevista?new Date(P.data_entrega_prevista):null;if(!w||w>=D||P.status_compra==="Entregue"||P.status_compra==="Recebido")return!1}return!0}),e.sort((P,O)=>{const w=P.data_solicitacao||P.data_emissao||"";return(O.data_solicitacao||O.data_emissao||"").localeCompare(w)}),e},updateStatus:async(n,t)=>{const e=ne(K,"compras",n);await He(e,{status_compra:t})},updateCompra:async(n,t)=>{const e=ne(K,"compras",n);await He(e,t)},deleteCompra:async n=>{const t=ne(K,"compras",n);await Q_(t)}},Vu=(n="")=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),gM=(n="")=>{const t=Vu(n);return t.includes("receb")||t.includes("entreg")},Ul={getAlertSummary:async({obraId:n=null}={})=>{const t=yt(K,"compras"),e=n?te(t,Ct("obraId","==",n)):t,s=await mt(e),i=new Date;i.setHours(0,0,0,0);const r={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0,estoque:0};return s.docs.forEach(o=>{const a=o.data(),c=Vu(a.status_compra||""),l=gM(c),d=a.previsao_entrega||a.data_entrega_prevista,h=d?new Date(d):null;!l&&h&&h<i&&r.atrasados++,!l&&!h&&r.sem_previsao++,(a.estouro_orcamento||Vu(a.status_aprovacao||"")==="pendente")&&r.pendente_aprovacao++,c.includes("cot")&&r.cotacao++,a.retirada_estoque&&!l&&r.estoque++}),r},notifySummary:async(n={},t,{scope:e="global",obraId:s=null}={})=>{if(!t||!n)return;const i=new Date().toISOString().slice(0,10),r=async(a,c,l,d="normal")=>{const h=`notif_${a}_${e}_${s||"all"}_${i}_${t}`;localStorage.getItem(h)||(await Ms.create({userId:t,tipo:a,titulo:c,mensagem:l,link:s?`#/obras/${s}`:"#/relatorios",prioridade:d,obraId:s}),localStorage.setItem(h,"1"))},o=[{key:"atrasados",title:"Pedidos atrasados",msg:`${n.atrasados} pedido(s) com previsão vencida.`,prio:"alta"},{key:"sem_previsao",title:"Pedidos sem previsão",msg:`${n.sem_previsao} pedido(s) sem data de entrega.`,prio:"normal"},{key:"pendente_aprovacao",title:"Aprovação pendente",msg:`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`,prio:"normal"},{key:"cotacao",title:"Pedidos em cotação",msg:`${n.cotacao} pedido(s) em cotação.`,prio:"normal"},{key:"estoque",title:"Retiradas de estoque",msg:`${n.estoque} pedido(s) aguardando baixa de estoque.`,prio:"normal"}];for(const a of o)(n[a.key]||0)>0?await r(a.key,a.title,a.msg,a.prio):await Ms.markByType(t,a.key,s)}},vb=[];let jl=!1;const bb=()=>{if(jl)return;const n=vb.shift();n&&(jl=!0,V.createToast(n.message,n.type),setTimeout(()=>{jl=!1,bb()},3500))},_M=({title:n="Confirmação",message:t="",confirmText:e="Confirmar",cancelText:s="Cancelar"})=>{const i=document.createElement("div");return i.className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",i.innerHTML=`
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
    `,i},lh={toast:(n,t="success")=>{vb.push({message:n,type:t}),bb()},confirm:({title:n="Confirmação",message:t="Deseja prosseguir?",confirmText:e="Confirmar",cancelText:s="Cancelar"}={})=>new Promise(i=>{var a,c,l;const r=_M({title:n,message:t,confirmText:e,cancelText:s}),o=d=>{r.remove(),i(d)};(a=r.querySelector("#notif-modal-close"))==null||a.addEventListener("click",()=>o(!1)),(c=r.querySelector("#notif-modal-cancel"))==null||c.addEventListener("click",()=>o(!1)),(l=r.querySelector("#notif-modal-confirm"))==null||l.addEventListener("click",()=>o(!0)),document.body.appendChild(r)}),badge:(n=0)=>{const t=document.querySelector("#notifications-container");t&&(t.dataset.badge=n)}},xb={init:async()=>{var t,e,s,i;const n=Et.state.currentUser;if(n){at.render(V.createLoader());try{let r="";if(n.role==="comprador"){const o=await pn.getCompradorStats();r=El.renderComprador(o),at.render(r),xb.bindRecentActions(),o.atrasos>0&&V.createToast(`Existem ${o.atrasos} pedidos em atraso.`,"warning"),await Ul.notifySummary(o.alerts,n.uid,{scope:"comprador"})}else if(n.role==="obra"||n.role==="engenheiro"){let o=n.obraPadrao||null;if(!o){const c=await((t=pn.getObras)==null?void 0:t.call(pn));c&&c.length&&(o=c[0].id)}const a=await pn.getObraStats(o);r=El.renderObra(a),at.render(r),a.atrasos>0&&V.createToast(`Esta obra tem ${a.atrasos} pedido(s) em atraso.`,"warning"),await Ul.notifySummary(a.alerts,n.uid,{scope:"obra",obraId:o}),setTimeout(()=>{a.rdoData?(a.rdoData.horasPorDia?re.renderHorasPorDia("chart-rdo-horas",a.rdoData.horasPorDia):re.renderEmpty("chart-rdo-horas"),a.rdoData.horasPorFuncao?re.renderHorasPorFuncao("chart-rdo-funcao",a.rdoData.horasPorFuncao):re.renderEmpty("chart-rdo-funcao"),a.rdoData.funcionariosPorDia?re.renderFuncionariosPorDia("chart-rdo-funcionarios",a.rdoData.funcionariosPorDia):re.renderEmpty("chart-rdo-funcionarios")):(re.renderEmpty("chart-rdo-horas"),re.renderEmpty("chart-rdo-funcao"),re.renderEmpty("chart-rdo-funcionarios"))},100)}else{const o=await pn.getDiretorStats(),a=await((e=pn.getObras)==null?void 0:e.call(pn))||await je.getObras(),c=o._allCompras||[],l=a.map(A=>{const C=Number(A.orcamento||A.valor_orcado||0),D=Number(A.tolerancia_percentual||0),P=C+C*D,w=c.filter(x=>x.obraId===A.id).reduce((x,I)=>{const S=(I.status_compra||"").toLowerCase(),R=!I.estouro_orcamento||I.status_aprovacao==="Aprovado";return(S.includes("compr")||S.includes("receb")||S.includes("entreg")||S.includes("aprov"))&&R?x+Number(I.valor_total||I.valor_estimado||0):x},0),b=P>0?w/P*100:0;return{id:A.id,nome:A.nome_obra||A.apelido_obra||A.id,limite:P,comprometido:w,percent:b}}).filter(A=>A.limite>0||A.comprometido>0).sort((A,C)=>C.percent-A.percent).slice(0,8),d=[],h=[];a.forEach(A=>{_b({data_inicio:A.data_inicio||A.data_prevista_inicio,data_prevista_fim:A.data_prevista_fim||A.data_fim,orcamento:A.orcamento||A.valor_orcado||0}).forEach(O=>d.push(O));const D=c.filter(O=>O.obraId===A.id);yb(D,{},0,0).forEach(O=>h.push(O))});const f=Array.from(new Set([...d.map(A=>A.x),...h.map(A=>A.x)])).sort();let m=0,g=0;const v=[],y=[],T=[];f.forEach(A=>{const C=d.filter(P=>P.x===A).map(P=>P.y).pop(),D=h.filter(P=>P.x===A).map(P=>P.y).pop();C!==void 0&&(m=C),D!==void 0&&(g=D),T.push(A),v.push(m),y.push(g)}),r=El.renderDiretor({...o,curvaS:{planejado:v,realizado:y,labels:T},obras:a,budgetByObra:l}),at.render(r),setTimeout(()=>{(v.length||y.length)&&ur.renderCurvaS("chart-curva",v,y,T),ur.renderStatusPie("chart-status",o.porStatus),o.naturezaTotais&&ur.renderNatureza("chart-natureza-dir",o.naturezaTotais),o.ccTotais&&ur.renderCentrosCusto("chart-cc-dir",o.ccTotais),o.gastosPorMes&&ur.renderGastosPorMes("chart-gastos-mes",o.gastosPorMes)},100),o.atrasos>0&&V.createToast(`Há ${o.atrasos} compras com previsão vencida.`,"warning"),((s=o.alerts)==null?void 0:s.sem_previsao)>0&&V.createToast(`${o.alerts.sem_previsao} pedidos sem previsão de entrega.`,"warning"),((i=o.alerts)==null?void 0:i.pendente_aprovacao)>0&&V.createToast(`${o.alerts.pendente_aprovacao} pedidos com aprovação pendente.`,"warning"),await Ul.notifySummary(o.alerts,n.uid,{scope:"diretor"})}}catch(r){console.error(r),at.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${r.message}</div>`)}}},bindRecentActions:()=>{document.querySelectorAll('[data-action="view"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}`)})}),document.querySelectorAll('[data-action="edit"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}/editar`)})}),document.querySelectorAll('[data-action="delete"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(!(!t||!await lh.confirm({message:"Confirma exclusão desta compra?"})))try{await mi.deleteCompra(t),V.createToast("Compra excluída.");const s=n.closest("tr");s==null||s.remove()}catch(s){V.createToast("Erro ao excluir: "+s.message,"error")}})})},_maybeNotify:async(n={})=>{const t=Et.state.currentUser;if(!t)return;const e=new Date().toISOString().slice(0,10),s=async(i,r,o)=>{const a=`notif_${i}_${e}_${t.uid}`;localStorage.getItem(a)||(await Ms.create({userId:t.uid,tipo:i,titulo:r,mensagem:o,link:"#/relatorios",prioridade:"normal"}),localStorage.setItem(a,"1"))};(n==null?void 0:n.atrasados)>0&&await s("atrasados","Pedidos atrasados",`${n.atrasados} pedido(s) com previsão vencida.`),(n==null?void 0:n.sem_previsao)>0&&await s("sem_previsao","Pedidos sem previsão",`${n.sem_previsao} pedido(s) sem data de entrega.`),(n==null?void 0:n.pendente_aprovacao)>0&&await s("pendente_aprovacao","Aprovação pendente",`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`)}},yM=async n=>{if(!n)return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const t=await Ua(ne(K,"obras",n));if(!t.exists())return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const e=t.data(),s=Number(e.valor_orcado||e.orcamento||0),i=Number(e.tolerancia_percentual||0);return{limiteReal:s+s*i,toleranciaPercentual:i,orcamento:s}},cg=async(n,t,e)=>{const{limiteReal:s}=await yM(n),i=s>0&&t>s;if(i&&!e){const r=new Error("JUSTIFICATIVA_NECESSARIA");throw r.code="JUSTIFICATIVA_NECESSARIA",r}return{estouro_orcamento:i,status_aprovacao:i?"Pendente":"Aprovado"}},li={checkDuplicidade:async(n,t)=>{const e=te(yt(K,"compras"),Ct("obraId","==",n),Ct("status_compra","in",["Pendente","Em Cotação"])),s=await mt(e),i=t.toLowerCase();return s.docs.some(r=>{const o=r.data(),a=(o.descricao_compra||o.descricao||"").toLowerCase(),c=o.itens||[];return a.includes(i)||c.some(l=>(l.nome||"").toLowerCase().includes(i))})},uploadArquivo:(n,t,e)=>new Promise((s,i)=>{const r=GI(_S,t),o=qI(r,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>i(a),async()=>{const a=await WI(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t=Number(n.valor_total||0),e=n.justificativa_estouro_orcamento||n.justificativa||"",s=await cg(n.obraId,t,e),i={...n,descricao_compra:n.descricao_compra||n.descricao||"",valor_total:t,justificativa_estouro_orcamento:e||null,estouro_orcamento:s.estouro_orcamento,status_aprovacao:n.status_aprovacao||s.status_aprovacao,data_solicitacao:Ft.now().toDate().toISOString(),status_compra:n.status_compra||"Pendente",criado_em:Ft.now(),criado_por:n.criado_por||null};return i.nf_conferida&&(i.nf_conferida_em=i.nf_conferida_em||Ft.now(),i.nf_conferida_por=i.nf_conferida_por||i.criado_por||null),(await Bi(yt(K,"compras"),i)).id},atualizarCompra:async(n,t)=>{const e=Number(t.valor_total||0),s=t.justificativa_estouro_orcamento||t.justificativa||"",i=await cg(t.obraId,e,s),r=ne(K,"compras",n);await He(r,{...t,descricao_compra:t.descricao_compra||t.descricao||"",valor_total:e,justificativa_estouro_orcamento:s||null,estouro_orcamento:i.estouro_orcamento,status_aprovacao:t.status_aprovacao||i.status_aprovacao,nf_conferida_em:t.nf_conferida?t.nf_conferida_em||Ft.now():null,nf_conferida_por:t.nf_conferida&&(t.nf_conferida_por||t.criado_por)||null})},getCompra:async n=>{const t=await Ua(ne(K,"compras",n));return t.exists()?{id:t.id,...t.data()}:null}},lg={renderForm:({obras:n=[],fornecedores:t=[],centros:e=[],compradores:s=[],compra:i=null}={})=>{const r=!!i,o=["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"],a=["Aprovado","Pendente","Reprovado"],c=["Lista de Material inicial","Compra emergencial","Serviço","Transporte","Outros"],l=["Normal","Alta","Crítica"],d=y=>{if(!y)return"";const T=y!=null&&y.toDate?y.toDate():new Date(y);return Number.isNaN(T.getTime())?"":T.toISOString().split("T")[0]},h=y=>String(y??"").replace(/"/g,"&quot;"),f=(y,T)=>T?y.includes(T)?y:[T,...y]:y,m=f(c,i==null?void 0:i.natureza_compra),g=f(a,i==null?void 0:i.status_aprovacao),v=f(o,i==null?void 0:i.status_compra);return`
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
                                    ${v.map(y=>`<option value="${y}" ${(i==null?void 0:i.status_compra)===y?"selected":""}>${y}</option>`).join("")}
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
                                    ${g.map(y=>`<option value="${y}" ${(i==null?void 0:i.status_aprovacao)===y?"selected":""}>${y}</option>`).join("")}
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
                        ${V.createButton({id:"btn-submit",text:r?"Salvar Alterações":"Registrar Solicitação",type:"submit"})}
                        ${V.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.history.back()"})}
                    </div>
                </form>
            </div>
        `}},Ns={list:async()=>(await mt(yt(K,"centrosCusto"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await Bi(yt(K,"centrosCusto"),n)},update:async(n,t)=>{await He(ne(K,"centrosCusto",n),t)}},Ls={list:async()=>(await mt(yt(K,"compradores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await Bi(yt(K,"compradores"),n)},update:async(n,t)=>{await He(ne(K,"compradores",n),t)}},Vs={list:async()=>(await mt(yt(K,"fornecedores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await Bi(yt(K,"fornecedores"),n)},update:async(n,t)=>{await He(ne(K,"fornecedores",n),t)}},oc={init:async()=>{at.render(V.createLoader());try{const[n,t,e,s]=await Promise.all([mt(yt(K,"obras")),Vs.list(),Ns.list(),Ls.list()]),i=n.docs.map(r=>({id:r.id,...r.data()}));at.render(lg.renderForm({obras:i,fornecedores:t,centros:e,compradores:s})),oc.bindEvents()}catch(n){console.error(n),at.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},initEdit:async n=>{at.render(V.createLoader());try{const[t,e,s,i,r]=await Promise.all([mt(yt(K,"obras")),Vs.list(),Ns.list(),Ls.list(),li.getCompra(n)]),o=t.docs.map(a=>({id:a.id,...a.data()}));at.render(lg.renderForm({obras:o,fornecedores:e,centros:s,compradores:i,compra:r})),oc.bindEvents(n,r,e)}catch(t){console.error(t),at.render(`<div class="text-red-500">Erro ao carregar compra: ${t.message}</div>`)}},bindEvents:(n=null,t=null,e=[])=>{const s=document.getElementById("form-compra"),i=document.getElementById("file-upload"),r=document.getElementById("nf-upload"),o=document.getElementById("cte-upload"),a=document.getElementById("rc-upload"),c=document.getElementById("drop-zone"),l=document.getElementById("descricao_compra"),d=document.getElementById("obraId"),h=document.getElementById("status_compra"),f=document.getElementById("previsao_entrega"),m=document.getElementById("data_recebimento"),g=document.getElementById("data_emissao"),v=document.getElementById("retirada_estoque"),y=document.getElementById("fornecedorId");let T=[],A=null;const C=document.getElementById("valor_total");c.addEventListener("click",()=>i.click()),i.addEventListener("change",w=>D(w.target.files));const D=w=>{T=[...T,...Array.from(w)],P()},P=()=>{const w=document.getElementById("file-list");w.innerHTML=T.map((b,x)=>`
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${b.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${x}}))">
                        ${V.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join("")};s.addEventListener("remove-file",w=>{T.splice(w.detail,1),P()}),l==null||l.addEventListener("blur",async()=>{const w=d.value,b=l.value;w&&b.length>3&&await li.checkDuplicidade(w,b)&&V.createToast("Atenção: Já existe um pedido similar para esta obra!","warning")}),C==null||C.addEventListener("input",w=>{let b=w.target.value;b=b.replace(/\D/g,""),b=(parseInt(b||0)/100).toFixed(2),b=b.replace(".",","),b=b.replace(/\B(?=(\d{3})+(?!\d))/g,"."),w.target.value=b}),C==null||C.addEventListener("blur",async()=>{const w=d==null?void 0:d.value,b=C.value,x=it.parseCurrency(b),I=document.getElementById("justificativa-container"),S=document.getElementById("justificativa");if(w&&x>0)try{const R=await mt(te(yt(K,"obras"),Ct("__name__","==",w)));if(!R.empty){const k=R.docs[0].data(),q=Number(k.valor_orcado||k.orcamento||0),B=Number(k.tolerancia_percentual||0),z=q+q*B;z>0&&x>z?(I.classList.remove("hidden"),S.required=!0,V.createToast("Valor ultrapassa o orçamento da obra! Justificativa necessária.","warning")):(I.classList.add("hidden"),S.required=!1)}}catch(R){console.error("Erro ao validar orçamento:",R)}});const O=w=>{const b=new Date().toISOString().split("T")[0];if(w){if(h&&(h.value="Recebido"),g&&(g.value=b,g.readOnly=!0),y){A||(A=y.value);const x=Array.from(y.options).find(I=>{var R;return(((R=I.dataset)==null?void 0:R.name)||I.textContent||"").toLowerCase().includes("estoque axel")});x&&(y.value=x.value),y.disabled=!0}f&&(f.value=f.value||b,f.readOnly=!0),m&&(m.value=m.value||b,m.readOnly=!0),g&&!g.value&&(g.value=b)}else h&&h.value==="Recebido"&&!t&&(h.value="Pendente"),y&&(y.disabled=!1,A&&(y.value=A)),g&&(g.readOnly=!1),f&&(f.readOnly=!1),m&&(m.readOnly=!1)};if(t){if(s.obraId.value=t.obraId||"",s.prioridade&&(s.prioridade.value=t.prioridade||"Normal"),s.descricao_compra.value=t.descricao_compra||t.descricao||"",s.valor_total.value=it.formatCurrencyInput(t.valor_total||0),s.fornecedorId&&(s.fornecedorId.value=t.fornecedorId||""),s.data_emissao.value=(t.data_emissao||"").split("T")[0]||"",s.previsao_entrega.value=(t.previsao_entrega||"").split("T")[0]||"",s.data_recebimento.value=(t.data_recebimento||"").split("T")[0]||"",s.status_compra.value=t.status_compra||"Pendente",s.centroCustoId&&(s.centroCustoId.value=t.centroCustoId||""),s.natureza_compra&&(s.natureza_compra.value=t.natureza_compra||""),s.compradorId&&(s.compradorId.value=t.compradorId||""),s.numero_nf&&(s.numero_nf.value=t.numero_nf||""),s.status_aprovacao&&(s.status_aprovacao.value=t.status_aprovacao||"Aprovado"),s.nf_conferida&&(s.nf_conferida.checked=!!t.nf_conferida),t.justificativa_estouro_orcamento){const w=document.getElementById("justificativa-container"),b=document.getElementById("justificativa");w.classList.remove("hidden"),b.value=t.justificativa_estouro_orcamento}t.solicitante&&s.solicitante&&(s.solicitante.value=t.solicitante),s.retirada_estoque.checked=t.retirada_estoque===!0||t.retirada_estoque==="on"}v&&(O(v.checked),v.addEventListener("change",w=>O(w.target.checked))),C&&!C.value&&(C.value=it.formatCurrencyInput(0)),s.addEventListener("submit",async w=>{var x,I,S,R,k;w.preventDefault();const b=document.getElementById("btn-submit");try{b.disabled=!0,b.innerHTML=V.createLoader();const q=[];let B=(t==null?void 0:t.pdf_nf_path)||null,z=(t==null?void 0:t.pdf_cte_path)||null,Q=(t==null?void 0:t.comprovante_rc_path)||null;const rt=async(bt,Ut)=>{var hs;const he=(hs=bt==null?void 0:bt.files)==null?void 0:hs[0];return he?li.uploadArquivo(he,`${Ut}/${Date.now()}_${he.name}`):null};B=await rt(r,"compras/nf")||B,z=await rt(o,"compras/cte")||z,Q=await rt(a,"compras/rc")||Q;for(const bt of T){const Ut=await li.uploadArquivo(bt,`compras/${Date.now()}_${bt.name}`);q.push({nome:bt.name,url:Ut})}const st=new FormData(s),ut=Object.fromEntries(st.entries()),Zt=it.parseCurrency(ut.valor_total||0),kt=(ut.justificativa||ut.justificativa_estouro_orcamento||"").trim(),Y={...ut,pdf_nf_path:B,pdf_cte_path:z,comprovante_rc_path:Q,descricao_compra:ut.descricao_compra,solicitante:ut.solicitante||((x=Et.state.currentUser)==null?void 0:x.nome)||((I=Et.state.currentUser)==null?void 0:I.email),anexos:q,valor_total:Zt,justificativa_estouro_orcamento:kt||null,criado_por:((S=Et.state.currentUser)==null?void 0:S.email)||null};Y.retirada_estoque=s.retirada_estoque.checked,Y.nf_conferida=((R=s.nf_conferida)==null?void 0:R.checked)||!1,Y.nf_conferida&&(Y.nf_conferida_por=((k=Et.state.currentUser)==null?void 0:k.email)||Y.criado_por||null,Y.nf_conferida_em=Y.nf_conferida_em||new Date().toISOString()),Y.status_compra||(Y.status_compra="Pendente"),Y.status_aprovacao||(Y.status_aprovacao="Aprovado"),["data_emissao","previsao_entrega","data_recebimento"].forEach(bt=>{Y[bt]===""&&delete Y[bt]}),n?(await li.atualizarCompra(n,Y),V.createToast("Compra atualizada com sucesso!")):(await li.salvarCompra(Y),V.createToast("Compra registrada com sucesso!")),At.navigate("/compras")}catch(q){console.error(q);const B=(q==null?void 0:q.code)==="JUSTIFICATIVA_NECESSARIA"?"Justificativa é obrigatória quando ultrapassa o orçamento da obra.":"Erro ao registrar: "+q.message;V.createToast(B,"error"),b.disabled=!1,b.innerHTML="<span>Registrar Solicitação</span>"}})}},zl={renderControls:(n="table",t=[])=>`
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
                                            <button class="text-text-muted hover:text-text inline-flex items-center" data-action="view" data-id="${e.id}" title="Ver">${Lt.eye}</button>
                                            <button class="text-primary hover:text-primary-strong inline-flex items-center" data-action="edit" data-id="${e.id}" title="Editar">${Lt.pencil}</button>
                                            <button class="text-alert hover:text-alert/80 inline-flex items-center" data-action="delete" data-id="${e.id}" title="Excluir">${Lt.trash}</button>
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
        `},U={currentView:"table",compras:[],filters:{},obras:[],fornecedores:[],compradores:[],centros:[],obraMap:new Map,fornecedorMap:new Map,compradorMap:new Map,centroMap:new Map,init:async()=>{await U.load(),await U.render()},decorateCompras:()=>{U.obraMap=new Map(U.obras.map(n=>[n.id,n.nome_obra||n.apelido_obra||n.id])),U.fornecedorMap=new Map(U.fornecedores.map(n=>[n.id,n.nome||n.empresa||n.id])),U.compradorMap=new Map(U.compradores.map(n=>[n.id,n.nome||n.email||n.id])),U.centroMap=new Map(U.centros.map(n=>[n.id,n.nome||n.codigo||n.id])),U.compras=U.compras.map(n=>{const t=Number(n.valor_total??n.valor_estimado??0);return{...n,valor_total:t,obraNome:U.obraMap.get(n.obraId)||n.obraId||"-",fornecedorNome:U.fornecedorMap.get(n.fornecedorId)||n.fornecedor||"",compradorNome:U.compradorMap.get(n.compradorId)||n.comprador||"",centroCustoNome:U.centroMap.get(n.centroCustoId)||n.centro_custo||n.centroCustoId||""}})},load:async()=>{const[n,t,e,s,i]=await Promise.all([mi.getCompras(),je.getObras(),Vs.list(),Ls.list(),Ns.list()]);U.compras=n,U.obras=t,U.fornecedores=e,U.compradores=s,U.centros=i,U.decorateCompras()},render:async()=>{const n=document.createElement("div");n.innerHTML=zl.renderControls(U.currentView,U.obras);const t=document.createElement("div");t.id="reports-content",t.innerHTML=U.currentView==="table"?zl.renderTable(U.compras,U.obraMap):zl.renderKanban(U.compras,U.obraMap),n.appendChild(t),at.render(n.innerHTML),U.bindEvents()},applyFilters:async()=>{var g,v,y,T,A,C,D,P,O,w,b,x,I,S;const n=((g=document.getElementById("filter-search"))==null?void 0:g.value.toLowerCase())||"",t=((v=document.getElementById("filter-status"))==null?void 0:v.value)||"",e=((y=document.getElementById("filter-obra"))==null?void 0:y.value)||"",s=((T=document.getElementById("filter-prioridade"))==null?void 0:T.value)||"",i=((A=document.getElementById("filter-natureza"))==null?void 0:A.value)||"",r=((C=document.getElementById("filter-cc"))==null?void 0:C.value)||"",o=((D=document.getElementById("filter-fornecedor"))==null?void 0:D.value)||"",a=((P=document.getElementById("filter-comprador"))==null?void 0:P.value)||"",c=((O=document.getElementById("filter-status-aprov"))==null?void 0:O.value)||"",l=((w=document.getElementById("filter-nf-conferida"))==null?void 0:w.checked)||!1,d=((b=document.getElementById("filter-nf"))==null?void 0:b.value)||"",h=((x=document.getElementById("filter-date-start"))==null?void 0:x.value)||"",f=((I=document.getElementById("filter-date-end"))==null?void 0:I.value)||"",m=((S=document.getElementById("filter-only-delayed"))==null?void 0:S.checked)||!1;U.filters={search:n,status:t,obra:e,prioridade:s,natureza:i,cc:r,fornecedor:o,comprador:a,statusAprov:c,nfConferida:l,nf:d,dateStart:h,dateEnd:f,onlyDelayed:m},U.compras=await mi.getCompras(U.filters),U.decorateCompras(),U.render()},bindEvents:()=>{var a,c,l,d,h,f,m;const n=(g,v)=>{const y=document.getElementById(g);y&&(y.value=v??"")};n("filter-search",U.filters.search||""),n("filter-status",U.filters.status||""),n("filter-obra",U.filters.obra||""),n("filter-prioridade",U.filters.prioridade||""),n("filter-natureza",U.filters.natureza||""),n("filter-cc",U.filters.cc||""),n("filter-fornecedor",U.filters.fornecedor||""),n("filter-comprador",U.filters.comprador||""),n("filter-status-aprov",U.filters.statusAprov||""),n("filter-nf",U.filters.nf||""),n("filter-date-start",U.filters.dateStart||""),n("filter-date-end",U.filters.dateEnd||"");const t=document.getElementById("filter-only-delayed");t&&(t.checked=!!U.filters.onlyDelayed);const e=document.getElementById("filter-nf-conferida");e&&(e.checked=!!U.filters.nfConferida),(a=document.getElementById("view-table"))==null||a.addEventListener("click",()=>{U.currentView="table",U.render()}),(c=document.getElementById("view-kanban"))==null||c.addEventListener("click",()=>{U.currentView="kanban",U.render()});const s=document.getElementById("filter-natureza"),i=document.getElementById("filter-cc"),r=document.getElementById("filter-fornecedor"),o=document.getElementById("filter-comprador");if(s){const g=Array.from(new Set(U.compras.map(v=>(v.natureza_compra||"Outros").trim())));s.innerHTML='<option value="">Todas Naturezas</option>'+g.map(v=>`<option value="${v}">${v}</option>`).join("")}i&&(i.innerHTML='<option value="">Todos Centros de Custo</option>'+U.centros.map(g=>`<option value="${g.id}">${g.nome||g.codigo||g.id}</option>`).join("")),r&&(r.innerHTML='<option value="">Todos Fornecedores</option>'+U.fornecedores.map(g=>`<option value="${g.id}">${g.nome||g.empresa||g.id}</option>`).join("")),o&&(o.innerHTML='<option value="">Todos Compradores</option>'+U.compradores.map(g=>`<option value="${g.id}">${g.nome||g.id}</option>`).join("")),n("filter-natureza",U.filters.natureza||""),n("filter-cc",U.filters.cc||""),n("filter-fornecedor",U.filters.fornecedor||""),n("filter-comprador",U.filters.comprador||""),n("filter-status-aprov",U.filters.statusAprov||""),(l=document.getElementById("btn-apply-filters"))==null||l.addEventListener("click",()=>{U.applyFilters()}),(d=document.getElementById("btn-clear-filters"))==null||d.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-natureza").value="",document.getElementById("filter-cc").value="";const g=document.getElementById("filter-fornecedor"),v=document.getElementById("filter-comprador"),y=document.getElementById("filter-nf"),T=document.getElementById("filter-status-aprov");g&&(g.value=""),v&&(v.value=""),y&&(y.value=""),T&&(T.value=""),document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1;const A=document.getElementById("filter-nf-conferida");A&&(A.checked=!1),U.applyFilters()}),(h=document.getElementById("btn-export-csv"))==null||h.addEventListener("click",()=>{try{U.exportCsv()}catch(g){V.createToast("Erro ao exportar: "+g.message,"error")}}),(f=document.getElementById("btn-export-obra"))==null||f.addEventListener("click",()=>{try{U.exportGrouped("obra")}catch(g){V.createToast("Erro ao exportar: "+g.message,"error")}}),(m=document.getElementById("btn-export-fornecedor"))==null||m.addEventListener("click",()=>{try{U.exportGrouped("fornecedor")}catch(g){V.createToast("Erro ao exportar: "+g.message,"error")}}),document.querySelectorAll('[data-action="view"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,y=U.compras.find(T=>T.id===v);if(!y)return alert("Compra não encontrada.");U.showModal(y,!1)})}),document.querySelectorAll('[data-action="edit"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,y=U.compras.find(T=>T.id===v);if(!y)return alert("Compra não encontrada.");U.showModal(y,!0)})}),document.querySelectorAll('[data-action="delete"]').forEach(g=>{g.addEventListener("click",async()=>{const v=g.dataset.id;if(await lh.confirm({message:"Confirmar exclusão da compra?"}))try{await mi.deleteCompra(v),V.createToast("Compra excluída."),await U.load(),U.render()}catch(T){V.createToast("Erro ao excluir: "+T.message,"error")}})}),document.addEventListener("kanban-move-next",async g=>{const{id:v,current:y}=g.detail,T=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],A=T.indexOf(y)+1;if(A<T.length){const C=T[A];try{await mi.updateStatus(v,C),V.createToast(`Movido para ${C}`),await U.load(),U.render()}catch(D){V.createToast("Erro ao mover: "+D.message,"error")}}})},showModal:(n,t=!1)=>{var o,a,c;const e=document.createElement("div");e.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4";const s=(l=[],d,h=f=>f.label)=>l.map(f=>{const m=f.value??f.id,g=h(f);return`<option value="${m}" ${d===m?"selected":""}>${g}</option>`}).join(""),i=(l,d)=>`
            <div>
                <label class="text-xs heading-muted uppercase">${l}</label>
                ${d}
            </div>
        `;e.innerHTML=`
            <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-4xl">
                <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                    <h3 class="text-lg font-display text-text">${t?"Editar Compra":"Detalhes da Compra"}</h3>
                    <button id="modal-close" class="text-text-muted hover:text-text">${Lt.close}</button>
                </div>
                <div class="p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${i("Obra",t?`<select id="modal-obra" class="input">
                                    ${s(U.obras,n.obraId,l=>l.nome_obra||l.apelido_obra||l.id)}
                                </select>`:`<p class="text-text">${n.obraNome||n.obraId||"-"}</p>`)}
                        ${i("Status",t?`<select id="modal-status" class="input">${["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"].map(l=>`<option value="${l}" ${n.status_compra===l?"selected":""}>${l}</option>`).join("")}</select>`:`<p class="text-text">${n.status_compra||"-"}</p>`)}
                        ${i("Descrição",t?`<input id="modal-desc" class="input" value="${(n.descricao_compra||n.descricao||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.descricao_compra||n.descricao||"-"}</p>`)}
                        ${i("Valor",t?`<input id="modal-valor" type="number" step="0.01" class="input" value="${n.valor_total??n.valor_estimado??0}">`:`<p class="text-text">${it.formatCurrency(n.valor_total??n.valor_estimado??0)}</p>`)}
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${i("Fornecedor",t?`<select id="modal-fornecedor" class="input"><option value="">Selecione...</option>${s(U.fornecedores,n.fornecedorId,l=>l.nome||l.empresa||l.id)}</select>`:`<p class="text-text">${n.fornecedorNome||n.fornecedor||"-"}</p>`)}
                        ${i("Comprador",t?`<select id="modal-comprador" class="input"><option value="">Selecione...</option>${s(U.compradores,n.compradorId,l=>l.nome||l.email||l.id)}</select>`:`<p class="text-text">${n.compradorNome||n.comprador||"-"}</p>`)}
                        ${i("Centro de Custo",t?`<select id="modal-cc" class="input"><option value="">Selecione...</option>${s(U.centros,n.centroCustoId,l=>l.nome||l.codigo||l.id)}</select>`:`<p class="text-text">${n.centroCustoNome||"-"}</p>`)}
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
        `,document.body.appendChild(e);const r=()=>e.remove();(o=e.querySelector("#modal-close"))==null||o.addEventListener("click",r),(a=e.querySelector("#modal-close-2"))==null||a.addEventListener("click",r),t&&((c=e.querySelector("#modal-save"))==null||c.addEventListener("click",async()=>{var d,h,f,m,g,v,y,T,A,C,D,P,O,w;const l={obraId:((d=e.querySelector("#modal-obra"))==null?void 0:d.value)||n.obraId,status_compra:((h=e.querySelector("#modal-status"))==null?void 0:h.value)||n.status_compra,descricao_compra:((f=e.querySelector("#modal-desc"))==null?void 0:f.value)||"",valor_total:Number(((m=e.querySelector("#modal-valor"))==null?void 0:m.value)||0),fornecedorId:((g=e.querySelector("#modal-fornecedor"))==null?void 0:g.value)||"",compradorId:((v=e.querySelector("#modal-comprador"))==null?void 0:v.value)||"",centroCustoId:((y=e.querySelector("#modal-cc"))==null?void 0:y.value)||"",natureza_compra:((T=e.querySelector("#modal-natureza"))==null?void 0:T.value)||"",numero_nf:((A=e.querySelector("#modal-nf"))==null?void 0:A.value)||"",status_aprovacao:((C=e.querySelector("#modal-aprov"))==null?void 0:C.value)||n.status_aprovacao,data_emissao:((D=e.querySelector("#modal-emissao"))==null?void 0:D.value)||"",previsao_entrega:((P=e.querySelector("#modal-prev"))==null?void 0:P.value)||"",data_recebimento:((O=e.querySelector("#modal-receb"))==null?void 0:O.value)||"",nf_conferida:((w=e.querySelector("#modal-nf-conferida"))==null?void 0:w.checked)||!1};["data_emissao","previsao_entrega","data_recebimento"].forEach(b=>{l[b]===""&&delete l[b]});try{await mi.updateCompra(n.id,l),r(),await U.load(),U.render(),V.createToast("Compra atualizada.")}catch(b){alert("Erro ao salvar: "+b.message)}}))},exportCsv:()=>{if(!U.compras.length){V.createToast("Sem dados para exportar.","warning");return}const n=new Map(U.obras.map(d=>[d.id,d.nome_obra||d.apelido_obra||d.id])),t=new Map(U.fornecedores.map(d=>[d.id,d.nome||d.empresa||d.id])),e=new Map(U.compradores.map(d=>[d.id,d.nome||d.id])),s=new Map(U.centros.map(d=>[d.id,d.nome||d.codigo||d.id])),i=["Obra","NF-e","Valor","Data Emissao","Status","Data Recebimento","Prev. Entrega","Natureza","Centro Custo","Comprador","Fornecedor","Justificativa Estouro","Status Aprovacao"],r=U.compras.map(d=>[`"${n.get(d.obraId)||d.obraId||""}"`,`"${d.numero_nf||""}"`,String(d.valor_total||d.valor_estimado||0).replace(".",","),d.data_emissao||"",d.status_compra||"",d.data_recebimento||"",d.previsao_entrega||d.data_entrega_prevista||"",d.natureza_compra||"",s.get(d.centroCustoId)||d.centroCustoNome||d.centro_custo||d.centroCustoId||"",e.get(d.compradorId)||d.comprador||"",t.get(d.fornecedorId)||d.fornecedor||"",(d.justificativa_estouro_orcamento||"").replace(/"/g,"'"),d.status_aprovacao||""]);let o="\uFEFF"+i.join(";")+`
`;o+=r.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)},exportGrouped:(n="obra")=>{const t=U.compras||[];if(!t.length){V.createToast("Sem dados para exportar.","warning");return}const e=n==="obra",s=e?["Obra","Qtd","Total (R$)"]:["Fornecedor","Qtd","Total (R$)"],i=new Map;t.forEach(d=>{const h=e?U.obraMap.get(d.obraId)||d.obraId||"N/D":U.fornecedorMap.get(d.fornecedorId)||d.fornecedor||"N/D",f=i.get(h)||{qtd:0,total:0};f.qtd+=1,f.total+=Number(d.valor_total??d.valor_estimado??0),i.set(h,f)});const r=Array.from(i.entries()).map(([d,h])=>[`"${d}"`,h.qtd,h.total.toFixed(2).replace(".",",")]);let o="\uFEFF"+s.join(";")+`
`;o+=r.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${n}_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)}},ug={getUsers:async()=>(await mt(yt(K,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await He(ne(K,"usuarios",n),t)},createUserProfile:async(n,t)=>{await NT(ne(K,"usuarios",n),t)}},vM={render:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Configurações</h2>
                
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-display text-text">Usuários do Sistema</h3>
                        ${V.createButton({text:"Novo Usuário",onClick:"alert('Funcionalidade requer Admin SDK ou Cloud Functions')"})}
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
        `},bM=n=>(Array.isArray(n)?n:[n]).filter(Boolean),ks={hasRole:(n,t=Et.state.currentUser)=>{const e=bM(n);return!t||!e.length?!1:t.role==="administrador"?!0:e.includes(t.role)},guard:(n,t)=>{if(!ks.hasRole(n)){const e=new Error("Acesso negado para esta ação.");throw e.code="PERMISSION_DENIED",e}return t()},canEditObra:n=>ks.hasRole(["diretor","comprador","obra"],n),canDeleteObra:n=>ks.hasRole(["diretor"],n),canEditCompra:n=>ks.hasRole(["diretor","comprador"],n),canApproveCompra:n=>ks.hasRole(["diretor","financeiro"],n),canEditCadastros:n=>ks.hasRole(["diretor"],n)},Fu={init:async()=>{at.render(V.createLoader());try{ks.guard(["administrador","diretor"],async()=>{const n=await ug.getUsers();at.render(vM.render(n)),Fu.bindEvents()})}catch(n){at.render(`<div class="text-red-500">Erro: ${n.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&ug.updateUser(t,{role:e}).then(()=>{V.createToast("Usuário atualizado!"),Fu.init()}).catch(s=>V.createToast("Erro: "+s.message,"error"))})}};let Be=new Date().getMonth(),ws=new Date().getFullYear();const yi={setMonth:(n,t)=>{Be=n,ws=t},changeMonth:n=>{Be+=n,Be<0&&(Be=11,ws-=1),Be>11&&(Be=0,ws+=1)},render:(n=[])=>{const t=new Date,e={};n.forEach(l=>{const d=l.previsao_entrega||l.data_entrega_prevista;if(d){const h=new Date(d);if(Number.isNaN(h.getTime()))return;const f=h.toISOString().split("T")[0];e[f]||(e[f]=[]),e[f].push(l)}});const s=new Date(ws,Be,1),r=new Date(ws,Be+1,0).getDate(),o=s.getDay();let c=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <button id="cal-prev" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&larr;</button>
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][Be]} ${ws}</h3>
                    <button id="cal-next" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&rarr;</button>
                </div>
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(l=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${l}</div>`).join("")}
        `;for(let l=0;l<o;l++)c+='<div class="aspect-square"></div>';for(let l=1;l<=r;l++){const d=new Date(ws,Be,l),h=d.toISOString().split("T")[0],f=e[h]||[],m=l===t.getDate()&&Be===t.getMonth(),g=d<t&&!m;c+=`
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
        `}},Hl={renderList:n=>`
            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-display text-text tracking-wide">Gestão de Obras</h2>
                    ${V.createButton({id:"btn-nova-obra",text:"Nova Obra",onClick:"window.location.hash = '/obras/nova'"})}
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
                            ${V.createInput({id:"nome_obra",label:"Nome da Obra *",value:(n==null?void 0:n.nome_obra)||"",required:!0})}
                            ${V.createInput({id:"numero_os",label:"Número da OS",value:(n==null?void 0:n.numero_os)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${V.createInput({id:"empresa",label:"Empresa",value:(n==null?void 0:n.empresa)||""})}
                            ${V.createInput({id:"local_realizacao",label:"Local de Realização",value:(n==null?void 0:n.local_realizacao)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${V.createInput({id:"valor_orcado",label:"Valor Orçado (R$)",type:"number",value:(n==null?void 0:n.valor_orcado)||"",placeholder:"0.00"})}
                            ${V.createInput({id:"tolerancia_percentual",label:"Tolerância (%)",type:"number",value:e,placeholder:"0"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${V.createInput({id:"valor_deslocamento_km",label:"Valor Deslocamento/KM",type:"number",value:(n==null?void 0:n.valor_deslocamento_km)||"",placeholder:"0.00"})}
                            ${V.createInput({id:"descricao_obra",label:"Descrição da Obra",value:(n==null?void 0:n.descricao_obra)||"",placeholder:"Resumo da obra"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${V.createInput({id:"horas_previstas",label:"Horas Previstas",type:"number",value:(n==null?void 0:n.horas_previstas)||""})}
                            ${V.createInput({id:"horas_extras_previstas",label:"Horas Extras Previstas",type:"number",value:(n==null?void 0:n.horas_extras_previstas)||""})}
                            ${V.createInput({id:"status",label:"Status",value:(n==null?void 0:n.status)||"Em Andamento"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${V.createInput({id:"qtd_refeicoes",label:"Qtd Refeições",type:"number",value:(n==null?void 0:n.qtd_refeicoes)||""})}
                            ${V.createInput({id:"qtd_hospedagens",label:"Qtd Hospedagens",type:"number",value:(n==null?void 0:n.qtd_hospedagens)||""})}
                            ${V.createInput({id:"obra_pai_os",label:"OS da Obra Pai",value:(n==null?void 0:n.obra_pai_os)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${V.createInput({id:"data_prevista_inicio",label:"Data Prevista de Início",type:"date",value:(n==null?void 0:n.data_prevista_inicio)||""})}
                            ${V.createInput({id:"data_prevista_fim",label:"Data Prevista de Fim",type:"date",value:(n==null?void 0:n.data_prevista_fim)||""})}
                        </div>

                        <div class="flex items-center gap-2 mt-4">
                            <input type="checkbox" id="is_obra_filha" name="is_obra_filha" class="rounded border-border text-primary" ${n!=null&&n.is_obra_filha?"checked":""}>
                            <label for="is_obra_filha" class="text-sm text-text">Obra filha</label>
                        </div>
                    </div>

                    <div class="flex justify-end gap-3">
                        ${V.createButton({id:"btn-cancel-obra",text:"Cancelar",variant:"secondary",onClick:"window.location.hash = '/obras'"})}
                        ${V.createButton({id:"btn-submit",type:"submit",text:t?"Salvar Alterações":"Criar Obra"})}
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
                    ${V.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${it.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${it.formatCurrency(n.valor_orcado||0)}</p>`})}
                    ${V.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${t.atrasos||0}</p><p class="text-sm heading-muted mt-1">Previsão vencida</p>`})}
                    ${V.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(t.sla||0)<80?"alert":"primary"} uppercase">${(t.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${V.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(t.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${V.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(t.economia||0)<0?"alert":"primary"} uppercase">${it.formatCurrency(t.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(t.curvaPercent||0).toFixed(1)}%</p>`})}
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
                        ${yi.render(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                    <div id="timeline-wrapper">
                        ${yi.renderTimeline(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-xl font-display text-text tracking-wide">Análise de Mão de Obra (RDO)</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-6 gap-6">
                        ${V.createCard({title:"Total de Horas",content:`<p id="kpi-rdo-total" class="text-4xl font-display text-primary uppercase">${(((e=t.rdoData)==null?void 0:e.totalHoras)||0).toFixed(0)}</p>`,className:"accent-left"})}
                        ${V.createCard({title:"Média Horas/Dia",content:`<p id="kpi-rdo-media-dia" class="text-4xl font-display text-text uppercase">${(((s=t.rdoData)==null?void 0:s.mediaHorasDia)||0).toFixed(1)}</p>`})}
                        ${V.createCard({title:"Total Funcionários",content:`<p id="kpi-rdo-func" class="text-4xl font-display text-text uppercase">${((i=t.rdoData)==null?void 0:i.totalFuncionarios)||0}</p>`})}
                        ${V.createCard({title:"Média Func./Dia",content:`<p id="kpi-rdo-media-func-dia" class="text-4xl font-display text-text uppercase">${(((r=t.rdoData)==null?void 0:r.mediaFuncionariosDia)||0).toFixed(1)}</p>`})}
                        ${V.createCard({title:"Horas Orçadas",content:`<p id="kpi-rdo-orcadas" class="text-4xl font-display text-text uppercase">${(Number(n.horas_previstas||0)+1.5*Number(n.horas_extras_previstas||0)).toFixed(1)}</p>`})}
                        ${V.createCard({title:"Horas Extras Gastas",content:`<p id="kpi-rdo-extras" class="text-4xl font-display text-alert uppercase">${(((o=t.rdoData)==null?void 0:o.totalExtras)||0).toFixed(1)}</p>`})}
                        ${V.createCard({title:"Saldo de Horas",content:`<p id="kpi-rdo-saldo" class="text-4xl font-display text-text uppercase">${(Number(n.horas_previstas||0)+1.5*Number(n.horas_extras_previstas||0)-(Number(((a=t.rdoData)==null?void 0:a.totalHoras)||0)+.5*Number(((c=t.rdoData)==null?void 0:c.totalExtras)||0))).toFixed(1)}</p>`})}
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
                                                    <button class="text-text-muted hover:text-text" data-action="view-compra" data-id="${d.id}" title="Ver compra">${Lt.eye}</button>
                                                    <button class="text-primary hover:text-primary-strong" data-action="edit-compra" data-id="${d.id}" title="Editar compra">${Lt.pencil}</button>
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
        `}},$n="rgba(255,255,255,0.08)",Qe="#a1a1aa",_e={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};ft.defaults.color="#e5e5e5";ft.defaults.font.family=_e.family;ft.defaults.font.weight=_e.weight;const xM=n=>{ft.defaults.color=n?"#0b0b0b":"#e5e5e5",ft.defaults.plugins.legend.labels.color=ft.defaults.color,ft.defaults.scales=ft.defaults.scales||{}},wM={id:"percentLabels",afterDraw(n){if(n.config.type!=="doughnut")return;const{ctx:t}=n;n.data.datasets.forEach(e=>{const s=n.getDatasetMeta(0),i=e.data.reduce((r,o)=>r+o,0);s.data.forEach((r,o)=>{const a=e.data[o];if(!a||!i)return;const c=`${(a/i*100).toFixed(1)}%`;t.save(),t.fillStyle="#e5e5e5",t.font="600 11px "+_e.family,t.textAlign="center",t.textBaseline="middle";const l=r.tooltipPosition();t.fillText(c,l.x,l.y),t.restore()})})}};ft.register(wM);const ui={renderCategorias:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ft(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:$n},ticks:{color:Qe,font:_e}},y:{grid:{color:$n},ticks:{color:Qe,font:_e}}}}})},renderStatusObra:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ft(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:10},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:_e,padding:12,usePointStyle:!0}},tooltip:{callbacks:{label:r=>{const o=r.dataset.data.reduce((c,l)=>c+l,0),a=o?(r.parsed/o*100).toFixed(1):0;return`${r.label}: ${a}% (${r.parsed})`}}}},cutout:"65%",pluginsCustom:!0}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new ft(e,{type:"bar",data:{labels:s,datasets:[{data:i,backgroundColor:"#22c55e",borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:$n},ticks:{color:Qe,font:_e,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0},y:{grid:{display:!1},ticks:{color:Qe,font:_e,autoSkip:!1}}},indexAxis:"y"}})},renderFinancePVAV:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new ft(s,{type:"line",data:{datasets:[{label:"Planejado (PV)",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Real (AV)",data:e,borderColor:"#ef4444",backgroundColor:"rgba(239,68,68,0.08)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:$n},ticks:{color:Qe}},y:{grid:{color:$n},ticks:{color:Qe,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:_e,usePointStyle:!0}}}}}))},renderCurvaS:(n,t=[],e=[],s=[])=>{const i=document.getElementById(n);i&&(i.chart&&i.chart.destroy(),i.chart=new ft(i,{type:"line",data:{labels:t.length?t:e.map((r,o)=>`Semana ${o+1}`),datasets:[{label:"Planejado",data:e,borderColor:"#a1a1aa",backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:s,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:_e,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:"#e5e5e5",bodyColor:"#a1a1aa",borderColor:"#333333",borderWidth:1,titleFont:_e,bodyFont:_e}},scales:{x:{grid:{color:$n},ticks:{color:Qe,font:_e}},y:{grid:{color:$n},ticks:{color:Qe,font:_e,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new ft(e,{type:"line",data:{labels:s.map(r=>{const o=new Date(r);return Number.isNaN(o.getTime())?r:o.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Gastos Diários",data:i,borderColor:"#22c55e",backgroundColor:"rgba(34,197,94,0.1)",borderWidth:2,tension:.3,fill:!0,pointRadius:3,pointBackgroundColor:"#22c55e"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{type:"category",grid:{display:!1},ticks:{color:Qe,font:_e,maxRotation:45,autoSkip:!0,maxTicksLimit:10}},y:{grid:{color:$n},ticks:{color:Qe,font:_e,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},wb=mS(),dg=wb.BASE_URL||"https://apiexterna.diariodeobra.app/v1",EM=()=>{const n=wb.TOKEN||(typeof window<"u"?window.__RDO_API_TOKEN:"");if(n)return n;try{const t=localStorage.getItem("axel_rdo_token");if(t)return t}catch{}return""};async function ql(n,t={}){const e=EM();if(!e)return console.warn("[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token"),null;const s={...t.headers,token:e,"Content-Type":"application/json"},i=await fetch(`${dg}${n}`,{...t,headers:s});if(console.info("[RDO] Request:",`${dg}${n}`,"status:",i.status),!i.ok)return console.warn(`Erro na API RDO ao acessar ${n}: ${i.status} ${i.statusText}`),null;const r=await i.json();return console.info("[RDO] Response data size:",Array.isArray(r)?r.length:Object.keys(r||{}).length),r}const vn={getByObra:async(n,t,e)=>{const s=await vn.getObraByOs(n);if(!s)return[];const i=await vn.getRelatoriosByObra(s._id);if(!i||!i.length)return[];const r=a=>{if(!a)return!0;const c=new Date(a);if(c.setHours(12,0,0,0),t){const l=new Date(t);if(l.setHours(12,0,0,0),c<l)return!1}if(e){const l=new Date(e);if(l.setHours(12,0,0,0),c>l)return!1}return!0},o=[];for(const a of i){const c=await vn.getRelatorioDetalhe(s._id,a._id);c&&r(c==null?void 0:c.data)&&o.push(c)}return o},getObraByOs:async n=>{const t=await ql("/obras");if(!Array.isArray(t))return null;const e=String(n||"").trim();if(!e)return null;const s=t.find(o=>String(o._id)===e);if(s)return s;const i=t.find(o=>{const a=(o.nome||"").match(/(\d+)$/);return a&&a[1]===e});if(i)return i;const r=t.find(o=>(o.nome||"").includes(e));return r||null},getRelatoriosByObra:async n=>{const t=await ql(`/obras/${n}/relatorios`);return Array.isArray(t)?t:[]},getRelatorioDetalhe:async(n,t)=>ql(`/obras/${n}/relatorios/${t}`),getIntegratedDataForObra:async n=>{const t=await vn.getObraByOs(n);if(!t)return console.warn("[RDO] Obra não localizada para OS:",n),null;console.info("[RDO] Obra encontrada para OS:",n,"->",t._id,t.nome);const e=await vn.getRelatoriosByObra(t._id);if(!e.length)return console.warn("[RDO] Nenhum relatório retornado para obra",t._id),{quantidadeRelatorios:0,totalHoras:"0.00",totalHorasExtras:"0.00",reports:[]};const s=(await Promise.all(e.map(c=>vn.getRelatorioDetalhe(t._id,c._id)))).filter(Boolean);let i=0,r=0;const o=9,a=c=>{if(!c||typeof c!="string")return 0;const[l,d]=c.split(":").map(Number);return(l||0)+(d||0)/60};return s.forEach(c=>{var h,f;(((h=c==null?void 0:c.maoDeObra)==null?void 0:h.padrao)||[]).forEach(m=>{const g=Number(m.quantidade)||0;i+=g,g>o&&(r+=g-o)}),(((f=c==null?void 0:c.maoDeObra)==null?void 0:f.personalizada)||[]).forEach(m=>{const g=a(m.horasTrabalhadas);i+=g,g>o&&(r+=g-o)})}),{quantidadeRelatorios:s.length,totalHoras:i.toFixed(2),totalHorasExtras:r.toFixed(2),reports:s,relatoriosRaw:s}},processRDOData:(n=[])=>{const t={},e={},s={},i={},r={};let o=0,a=0;const c=new Set,l=9,d={},h=v=>{if(typeof v=="number")return v;if(typeof v=="string"){if(v.includes(":")){const[T,A]=v.split(":").map(Number);return(T||0)+(A||0)/60}const y=Number(v);return Number.isNaN(y)?0:y}return 0},f=v=>{if(!v)return null;let y=null;if(v instanceof Date?y=new Date(v.getTime()):typeof v=="number"&&(y=new Date(v)),typeof v=="string"){let T=v;if(T.includes("T")&&(T=T.split("T")[0]),T.includes("/")&&T.split("/").length===3){const[A,C,D]=T.split("/"),P=D.length===2?`20${D}`:D;y=new Date(`${P}-${C}-${A}`)}if(T.includes("-")){const[A,C,D]=T.split("-");y=new Date(Number(A),Number(C)-1,Number(D))}}return!y||Number.isNaN(y.getTime())?null:(y.setHours(12,0,0,0),y.setDate(y.getDate()+2),y)};n.forEach(v=>{var O,w;const y=v.data||v.data_inicio||v.dataInicio||v.createdAt||v.dataReferencia||v.dataServiço||v.dataServico||v.dataRelatorio||v.dataRel,T=f(y);if(!T||Number.isNaN(T.getTime()))return;const A=b=>String(b).padStart(2,"0"),C=`${T.getFullYear()}-${A(T.getMonth()+1)}-${A(T.getDate())}`;t[C]||(t[C]=0),e[C]||(e[C]=0),s[C]||(s[C]=0);const D=((O=v==null?void 0:v.maoDeObra)==null?void 0:O.padrao)||[],P=((w=v==null?void 0:v.maoDeObra)==null?void 0:w.personalizada)||[];D.forEach(b=>{const x=Number(b.quantidade)||0,I=Math.max(0,x-l),S=x-I;t[C]+=x,e[C]+=I,s[C]+=S;const R=b.funcao||"Outros";i[R]=(i[R]||0)+x,b.funcionario_id&&(r[C]||(r[C]=new Set),r[C].add(b.funcionario_id),c.add(b.funcionario_id));const k=b.nome||b.funcionario||b.descricao||"Técnico";d[k]=(d[k]||0)+x,o+=x,a+=I}),P.forEach(b=>{const x=h(b.horasTrabalhadas),I=Math.max(0,x-l),S=x-I;t[C]+=x,e[C]+=I,s[C]+=S;const R=b.funcao||"Outros";i[R]=(i[R]||0)+x,b.funcionario_id&&(r[C]||(r[C]=new Set),r[C].add(b.funcionario_id),c.add(b.funcionario_id));const k=b.nome||b.funcionario||b.descricao||"Técnico";d[k]=(d[k]||0)+x,o+=x,a+=I})});const m={};Object.keys(r).forEach(v=>{m[v]=r[v].size});const g=Object.keys(t).sort().map(v=>({data:v,horasNormais:s[v]||0,horasExtras:e[v]||0,total:t[v]||0,funcionarios:m[v]||0}));return{horasPorDia:t,horasNormaisPorDia:s,horasExtrasPorDia:e,horasPorFuncao:i,funcionariosPorDia:m,totalHoras:o,totalExtras:a,totalFuncionarios:c.size,mediaHorasDia:o/Math.max(1,Object.keys(t).length),mediaFuncionariosDia:Object.keys(m).length?Object.values(m).reduce((v,y)=>v+y,0)/Object.keys(m).length:0,techHours:d,diarios:g}}},Eb=Object.freeze(Object.defineProperty({__proto__:null,RDOService:vn},Symbol.toStringTag,{value:"Module"})),hg=n=>{if(!n)return null;if(n instanceof Date)return n;if(n.toDate)return n.toDate();if(typeof n=="number")return new Date(n);if(typeof n=="string"){if(n.includes("/")&&n.split("/").length===3){const[e,s,i]=n.split("/"),r=i.length===2?`20${i}`:i,o=new Date(`${r}-${s}-${e}`);return o.setHours(12,0,0,0),o}const t=new Date(n);return t.setHours(12,0,0,0),t}return null},gi={initList:async()=>{at.render(V.createLoader());try{const n=await je.getObras();at.render(Hl.renderList(n))}catch(n){console.error(n),at.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{at.render(V.createLoader());try{let t=null;n&&(t=await je.getObraById(n)),at.render(Hl.renderForm(t)),gi.bindFormEvents(n)}catch(t){console.error(t),at.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{at.render(V.createLoader());try{xM(document.documentElement.classList.contains("theme-light"));const t=await je.getObraById(n);if(!t){at.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const e=await je.getObraStats(n,!1),s=Number(t.valor_orcado||0);s>0?(e.economia=s-e.totalGasto,e.curvaPercent=e.totalGasto/s*100):(e.economia=0,e.curvaPercent=0);const i=[];!t.horas_previstas&&!t.horas_extras_previstas&&i.push("Horas da obra não informadas."),t.data_prevista_inicio||i.push("Data de início prevista não informada."),t.data_prevista_fim||i.push("Data de término prevista não informada."),s||i.push("Orçamento da obra não informado."),t.numero_os||i.push("Número da OS não informado; integração RDO pode falhar."),e.osNumber=t.numero_os||t.id,e.alerts=i;const[r,o,a]=await Promise.all([Ls.list(),Vs.list(),Ns.list()]),c=new Map(r.map(g=>[g.id,g.nome||g.email||g.id])),l=new Map(o.map(g=>[g.id,g.nome||g.empresa||g.id])),d=new Map(a.map(g=>[g.id,g.nome||g.codigo||g.id]));e.comprasRecentes=(e.comprasRecentes||[]).map(g=>({...g,compradorNome:c.get(g.compradorId)||g.comprador||"",fornecedorNome:l.get(g.fornecedorId)||g.fornecedor||"",centroCustoNome:d.get(g.centroCustoId)||g.centroCustoNome||g.centro_custo||g.centroCustoId||""})),e.comprasCalendar=(e.comprasCalendar||[]).map(g=>({...g,compradorNome:c.get(g.compradorId)||g.comprador||"",fornecedorNome:l.get(g.fornecedorId)||g.fornecedor||"",centroCustoNome:d.get(g.centroCustoId)||g.centroCustoNome||g.centro_custo||g.centroCustoId||""}));const h={};Object.entries(e.ccTotais||{}).forEach(([g,v])=>{const y=d.get(g)||g;h[y]=(h[y]||0)+v}),e.ccTotais=h,e.ccTable=Object.entries(h).map(([g,v])=>({nome:g,valor:v})),at.render(Hl.renderDashboard(t,e)),(()=>{const g=v=>{var A;const y=document.createElement("div");y.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",y.innerHTML=`
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
                                        <div class="mt-1">${it.renderStatusBadge(v.status_compra,v.previsao_entrega||v.data_entrega_prevista)}</div>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Descrição</label>
                                        <p class="text-text">${v.descricao_compra||v.descricao||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Valor</label>
                                        <p class="text-text">${it.formatCurrency(v.valor_total??v.valor_estimado??0)}</p>
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
                                        <p class="text-text">${it.formatDate(v.previsao_entrega||v.data_entrega_prevista)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Data Emissão</label>
                                        <p class="text-text">${it.formatDate(v.data_emissao)}</p>
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
                    `,document.body.appendChild(y),(A=y.querySelectorAll("[data-close]"))==null||A.forEach(C=>C.addEventListener("click",()=>y.remove()));const T=y.querySelector("[data-edit-id]");T&&T.addEventListener("click",()=>{At.navigate(`/compras/${v.id}/editar`),y.remove()})};document.querySelectorAll('[data-action="edit-compra"]').forEach(v=>{v.addEventListener("click",()=>{const y=v.dataset.id;y&&At.navigate(`/compras/${y}/editar`)})}),document.querySelectorAll('[data-action="view-compra"]').forEach(v=>{v.addEventListener("click",()=>{const y=v.dataset.id,T=e.comprasRecentes.find(A=>A.id===y);T&&g(T)})})})();const m=()=>{const g=document.getElementById("calendar-wrapper"),v=document.getElementById("timeline-wrapper");g&&(g.innerHTML=yi.render(e.comprasCalendar||e.comprasRecentes)),v&&(v.innerHTML=yi.renderTimeline(e.comprasCalendar||e.comprasRecentes));const y=document.getElementById("cal-prev"),T=document.getElementById("cal-next");y==null||y.addEventListener("click",()=>{yi.changeMonth(-1),m()}),T==null||T.addEventListener("click",()=>{yi.changeMonth(1),m()})};m(),setTimeout(async()=>{var A;ui.renderCategorias("chart-categorias",e.gastosPorCategoria),ui.renderStatusObra("chart-status-obra",e.porStatus),e.curvaS&&ui.renderCurvaS("chart-curva-s",e.curvaS.labels||[],e.curvaS.planejado,e.curvaS.realizado),e.gastosDiarios&&ui.renderGastosMensais("chart-gastos-diarios",e.gastosDiarios),e.ccTotais&&ui.renderCentrosCusto("chart-cc",e.ccTotais);const{COST_PER_HOUR:g,COST_PER_OVERTIME_HOUR:v}=await Ka(async()=>{const{COST_PER_HOUR:C,COST_PER_OVERTIME_HOUR:D}=await import("./costs-CbBns5TW.js");return{COST_PER_HOUR:C,COST_PER_OVERTIME_HOUR:D}},[]),y=_b({data_inicio:t.data_prevista_inicio,data_prevista_fim:t.data_prevista_fim,orcamento:t.valor_orcado}),T=yb(e.comprasCalendar||e.comprasRecentes||[],((A=e.rdoData)==null?void 0:A.horasPorDia)||{},g,v);(y.length||T.length)&&ui.renderFinancePVAV("chart-finance-pvav",y,T);try{const C=t.numero_os||t.numeroOS||t.id;if(C){const D=await vn.getIntegratedDataForObra(C);if(D&&D.reports){const P=vn.processRDOData(D.reports);if(P){e.rdoData=P,e.rdoOk=!0;const O=(k,q)=>{const B=document.getElementById(k);B&&(B.textContent=q)},w=Number(t.horas_previstas||0),b=Number(t.horas_extras_previstas||0),x=w+1.5*b,I=Number(P.totalHoras||0)+.5*Number(P.totalExtras||0),S=x-I;if(O("kpi-rdo-total",P.totalHoras.toFixed(1)),O("kpi-rdo-media-dia",P.mediaHorasDia.toFixed(1)),O("kpi-rdo-func",String(P.totalFuncionarios||0)),O("kpi-rdo-media-func-dia",P.mediaFuncionariosDia.toFixed(1)),O("kpi-rdo-orcadas",x.toFixed(1)),O("kpi-rdo-extras",P.totalExtras.toFixed(1)),O("kpi-rdo-saldo",S.toFixed(1)),P.totalHoras>0){re.renderHorasNormaisExtras("chart-rdo-horas-normais-extras",P.horasNormaisPorDia,P.horasExtrasPorDia);const k=[],q=[],B=hg(t.data_prevista_inicio),z=hg(t.data_prevista_fim);if(B&&z&&!Number.isNaN(B)&&!Number.isNaN(z)&&B<=z&&x>0){const st=[],ut=new Date(B);ut.setHours(12,0,0,0);const Zt=new Date(z);for(Zt.setDate(Zt.getDate()+1);ut<=Zt;){const bt=ut.getDay();bt!==0&&bt!==6&&st.push(new Date(ut)),ut.setDate(ut.getDate()+1)}const kt=st.length?x/st.length:0;let Y=0;st.forEach(bt=>{Y+=kt;const Ut=new Date(bt);Ut.setDate(Ut.getDate()+0),k.push({x:Ut,y:Number(Y.toFixed(2))})})}const Q=Object.keys(P.horasPorDia||{}).sort((st,ut)=>new Date(st)-new Date(ut));let rt=0;if(Q.forEach(st=>{const ut=new Date(st);ut.setHours(12,0,0,0),!Number.isNaN(ut.getTime())&&(rt+=P.horasPorDia[st],q.push({x:ut,y:Number(rt.toFixed(2))}))}),re.renderCurvaHoras("chart-rdo-curva-horas",k,q),P.horasPorFuncao&&re.renderHorasPorFuncao("chart-rdo-funcao",P.horasPorFuncao),P.techHours){const st=Object.entries(P.techHours||{}).sort((Zt,kt)=>kt[1]-Zt[1]).slice(0,10),ut=document.querySelector("#table-rdo-tech tbody");ut&&(ut.innerHTML=st.map(([Zt,kt])=>`
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${Zt}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right font-display">${kt.toFixed(1)}h</td>
                                                </tr>
                                            `).join("")||'<tr><td colspan="2" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>')}}else re.renderEmpty("chart-rdo-horas-normais-extras"),re.renderEmpty("chart-rdo-curva-horas");const R=document.querySelector("#table-rdo tbody");if(R){const k=P.diarios||[];k.length?R.innerHTML=k.map(q=>`
                                            <tr>
                                                <td class="px-4 py-2 text-sm text-text">${new Date(q.data).toLocaleDateString("pt-BR")}</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${q.horasNormais.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${q.horasExtras.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right font-display">${q.total.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${q.funcionarios}</td>
                                            </tr>
                                        `).join(""):R.innerHTML='<tr><td colspan="5" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}}}else e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},re.renderEmpty("chart-rdo-horas-normais-extras"),re.renderEmpty("chart-rdo-curva-horas")}}catch(C){console.warn("Erro ao carregar dados RDO (legacy):",(C==null?void 0:C.message)||C),e.rdoData=e.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},re.renderEmpty("chart-rdo-horas-normais-extras"),re.renderEmpty("chart-rdo-curva-horas")}},100)}catch(t){console.error(t),at.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=V.createLoader();const i=new FormData(t),r=Object.fromEntries(i.entries());r.valor_orcado=r.valor_orcado?Number(r.valor_orcado):0,r.tolerancia_percentual=r.tolerancia_percentual?Number(r.tolerancia_percentual)/100:0,r.valor_deslocamento_km=r.valor_deslocamento_km?Number(r.valor_deslocamento_km):0,r.horas_previstas=r.horas_previstas?Number(r.horas_previstas):0,r.horas_extras_previstas=r.horas_extras_previstas?Number(r.horas_extras_previstas):0,r.qtd_refeicoes=r.qtd_refeicoes?Number(r.qtd_refeicoes):0,r.qtd_hospedagens=r.qtd_hospedagens?Number(r.qtd_hospedagens):0,r.is_obra_filha=t.is_obra_filha.checked,n?(await je.updateObra(n,r),V.createToast("Obra atualizada com sucesso!")):(await je.createObra(r),V.createToast("Obra criada com sucesso!")),At.navigate("/obras")}catch(i){console.error(i),V.createToast("Erro ao salvar obra: "+i.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},TM={renderMenu:()=>`
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
    `},IM={init:async()=>{at.render(TM.renderMenu())}},AM={render:(n=[])=>`
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
    `},$u={init:async()=>{const n=await Vs.list();at.render(AM.render(n)),$u.bind()},bind:()=>{const n=document.getElementById("fornecedor-form"),t=document.getElementById("btn-novo-fornecedor"),e=document.getElementById("btn-salvar-fornecedor"),s=document.getElementById("btn-cancelar-fornecedor"),i=document.querySelector("#fornecedor-table");t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden"));let r=null;i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("forn-nome").value=a.dataset.nome||"",document.getElementById("forn-email").value=a.dataset.email||"",document.getElementById("forn-telefone").value=a.dataset.telefone||"",document.getElementById("forn-cnpj").value=a.dataset.cnpj||"",n==null||n.classList.remove("hidden"))}),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("forn-nome").value,email:document.getElementById("forn-email").value,telefone:document.getElementById("forn-telefone").value,cnpj:document.getElementById("forn-cnpj").value};r?await Vs.update(r,o):await Vs.create(o),$u.init()})}},kM={render:(n=[])=>`
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
    `},Bu={init:async()=>{const n=await Ns.list();at.render(kM.render(n)),Bu.bind()},bind:()=>{const n=document.getElementById("cc-form"),t=document.getElementById("btn-novo-cc"),e=document.getElementById("btn-salvar-cc"),s=document.getElementById("btn-cancelar-cc"),i=document.getElementById("cc-table");let r=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("cc-nome").value,codigo:document.getElementById("cc-codigo").value};r?await Ns.update(r,o):await Ns.create(o),Bu.init()}),i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("cc-nome").value=a.dataset.nome||"",document.getElementById("cc-codigo").value=a.dataset.codigo||"",n==null||n.classList.remove("hidden"))})}},SM={render:(n=[])=>`
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
    `},Uu={init:async()=>{const n=await Ls.list();at.render(SM.render(n)),Uu.bind()},bind:()=>{const n=document.getElementById("comprador-form"),t=document.getElementById("btn-novo-comprador"),e=document.getElementById("btn-salvar-comprador"),s=document.getElementById("btn-cancelar-comprador"),i=document.getElementById("compr-table");let r=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("compr-nome").value,email:document.getElementById("compr-email").value};r?await Ls.update(r,o):await Ls.create(o),Uu.init()}),i==null||i.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(r=a.dataset.id,document.getElementById("compr-nome").value=a.dataset.nome||"",document.getElementById("compr-email").value=a.dataset.email||"",n==null||n.classList.remove("hidden"))})}},fg={renderBell:(n=0)=>`
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${Lt.bell}
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
        `},se={notifications:[],unreadCount:0,eventsBound:!1,init:async()=>{Et.state.currentUser&&(window.addEventListener("layout:rendered",()=>{se.render(),se.bindEvents()}),await se.load(),se.render(),se.bindEvents(),setInterval(()=>se.load(),12e4))},load:async()=>{const n=Et.state.currentUser;se.notifications=await Ms.getByUser(n.uid,20),se.unreadCount=se.notifications.filter(t=>!t.lida).length,se.render(),lh.badge(se.unreadCount)},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=fg.renderBell(se.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=fg.renderDropdown(se.notifications),n.appendChild(t)},bindEvents:()=>{se.eventsBound||(se.eventsBound=!0,document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=Et.state.currentUser;await Ms.markAllAsRead(t.uid),await se.load()}}),document.addEventListener("click",async n=>{var i,r;const t=(r=(i=n.target).closest)==null?void 0:r.call(i,"[data-notification-id]");if(!t)return;const e=t.dataset.notificationId,s=t.dataset.link||"#";try{await Ms.markAsRead(e),await se.load()}finally{window.location.hash=s.startsWith("#")?s.slice(1):s}}))}};console.log("[Main] Inicializando aplicação...");const CM=async()=>{try{await yS(),console.log("[Main] Firebase inicializado."),Et.applyTheme(Et.state.currentTheme||"dark"),await Ya.init(),Et.state.currentUser&&await se.init(),At.init(),At.on("/",xb.init),At.on("/login",Dp.initLogin),At.on("/forgot-password",Dp.initForgotPassword),At.on("/compras",oc.init),At.on("/relatorios",U.init),At.on("/configuracoes",Fu.init),At.on("/compras/:id/editar",({id:t})=>oc.initEdit(t)),At.on("/cadastros",IM.init),At.on("/cadastros/fornecedores",$u.init),At.on("/cadastros/centros-custo",Bu.init),At.on("/cadastros/compradores",Uu.init),At.on("/obras",gi.initList),At.on("/obras/nova",()=>gi.initForm()),At.on("/obras/:id",({id:t})=>gi.initDashboard(t)),At.on("/obras/:id/dashboard",({id:t})=>gi.initDashboard(t)),At.on("/obras/:id/editar",({id:t})=>gi.initForm(t)),At.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};CM();
