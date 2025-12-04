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
 */const Ig=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},mx=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const r=n[e++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[e++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[e++],o=n[e++],a=n[e++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[e++],o=n[e++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),s.push(e[d],e[h],e[f],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ig(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):mx(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=e[n.charAt(r++)],a=r<n.length?e[n.charAt(r)]:0;++r;const l=r<n.length?e[n.charAt(r)]:64;++r;const h=r<n.length?e[n.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new gx;const f=i<<2|a>>4;if(s.push(f),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _x=function(n){const t=Ig(n);return Ag.encodeByteArray(t,!0)},Ya=function(n){return _x(n).replace(/\./g,"")},Sg=function(n){try{return Ag.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const vx=()=>yx().__FIREBASE_DEFAULTS__,bx=()=>{if(typeof process>"u"||typeof vf>"u")return;const n=vf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Sg(n[1]);return t&&JSON.parse(t)},Ic=()=>{try{return vx()||bx()||xx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kg=n=>{var t,e;return(e=(t=Ic())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Cg=n=>{const t=kg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Rg=()=>{var n;return(n=Ic())===null||n===void 0?void 0:n.config},Pg=n=>{var t;return(t=Ic())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Dg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ya(JSON.stringify(e)),Ya(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ex(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Tx(){var n;const t=(n=Ic())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ix(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ax(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kx(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cx(){return!Tx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rx(){try{return typeof indexedDB=="object"}catch{return!1}}function Px(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="FirebaseError";class xn extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Dx,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Mx(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new xn(r,a,s)}}function Mx(n,t){return n.replace(Ox,(e,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Ox=/\{\$([^}]+)}/g;function Nx(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ka(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const r of e){if(!s.includes(r))return!1;const i=n[r],o=t[r];if(bf(i)&&bf(o)){if(!Ka(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!e.includes(r))return!1;return!0}function bf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Pi(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");t[decodeURIComponent(r)]=decodeURIComponent(i)}}),t}function Di(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Lx(n,t){const e=new Vx(n,t);return e.subscribe.bind(e)}class Vx{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let r;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Fx(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:s},r.next===void 0&&(r.next=Sl),r.error===void 0&&(r.error=Sl),r.complete===void 0&&(r.complete=Sl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fx(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Sl(){}/**
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
 */function Kt(n){return n&&n._delegate?n._delegate:n}class hs{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new wx;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ux(t))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Vs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vs){return this.instances.has(t)}getOptions(t=Vs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,e){var s;const r=this.normalizeInstanceIdentifier(e),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const r of s)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bx(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Vs){return this.component?this.component.multipleInstances?t:Vs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bx(n){return n===Vs?void 0:n}function Ux(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var mt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(mt||(mt={}));const zx={debug:mt.DEBUG,verbose:mt.VERBOSE,info:mt.INFO,warn:mt.WARN,error:mt.ERROR,silent:mt.SILENT},Hx=mt.INFO,qx={[mt.DEBUG]:"log",[mt.VERBOSE]:"log",[mt.INFO]:"info",[mt.WARN]:"warn",[mt.ERROR]:"error"},Wx=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),r=qx[t];if(r)console[r](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rd{constructor(t){this.name=t,this._logLevel=Hx,this._logHandler=Wx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zx[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,mt.DEBUG,...t),this._logHandler(this,mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,mt.VERBOSE,...t),this._logHandler(this,mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,mt.INFO,...t),this._logHandler(this,mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,mt.WARN,...t),this._logHandler(this,mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,mt.ERROR,...t),this._logHandler(this,mt.ERROR,...t)}}const Gx=(n,t)=>t.some(e=>n instanceof e);let xf,wf;function Yx(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kx(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mg=new WeakMap,lu=new WeakMap,Og=new WeakMap,kl=new WeakMap,id=new WeakMap;function Qx(n){const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(cs(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Mg.set(e,n)}).catch(()=>{}),id.set(t,n),t}function Xx(n){if(lu.has(n))return;const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});lu.set(n,t)}let uu={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return lu.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Og.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return cs(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jx(n){uu=n(uu)}function Zx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(Cl(this),t,...e);return Og.set(s,t.sort?t.sort():[t]),cs(s)}:Kx().includes(n)?function(...t){return n.apply(Cl(this),t),cs(Mg.get(this))}:function(...t){return cs(n.apply(Cl(this),t))}}function t0(n){return typeof n=="function"?Zx(n):(n instanceof IDBTransaction&&Xx(n),Gx(n,Yx())?new Proxy(n,uu):n)}function cs(n){if(n instanceof IDBRequest)return Qx(n);if(kl.has(n))return kl.get(n);const t=t0(n);return t!==n&&(kl.set(n,t),id.set(t,n)),t}const Cl=n=>id.get(n);function e0(n,t,{blocked:e,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,t),a=cs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(cs(o.result),c.oldVersion,c.newVersion,cs(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const n0=["get","getKey","getAll","getAllKeys","count"],s0=["put","add","delete","clear"],Rl=new Map;function Ef(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Rl.get(t))return Rl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,r=s0.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(r||n0.includes(e)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),r&&c.done]))[0]};return Rl.set(t,i),i}Jx(n=>({...n,get:(t,e,s)=>Ef(t,e)||n.get(t,e,s),has:(t,e)=>!!Ef(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(i0(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function i0(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const du="@firebase/app",Tf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new rd("@firebase/app"),o0="@firebase/app-compat",a0="@firebase/analytics-compat",c0="@firebase/analytics",l0="@firebase/app-check-compat",u0="@firebase/app-check",d0="@firebase/auth",h0="@firebase/auth-compat",f0="@firebase/database",p0="@firebase/data-connect",m0="@firebase/database-compat",g0="@firebase/functions",_0="@firebase/functions-compat",y0="@firebase/installations",v0="@firebase/installations-compat",b0="@firebase/messaging",x0="@firebase/messaging-compat",w0="@firebase/performance",E0="@firebase/performance-compat",T0="@firebase/remote-config",I0="@firebase/remote-config-compat",A0="@firebase/storage",S0="@firebase/storage-compat",k0="@firebase/firestore",C0="@firebase/vertexai-preview",R0="@firebase/firestore-compat",P0="firebase",D0="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="[DEFAULT]",M0={[du]:"fire-core",[o0]:"fire-core-compat",[c0]:"fire-analytics",[a0]:"fire-analytics-compat",[u0]:"fire-app-check",[l0]:"fire-app-check-compat",[d0]:"fire-auth",[h0]:"fire-auth-compat",[f0]:"fire-rtdb",[p0]:"fire-data-connect",[m0]:"fire-rtdb-compat",[g0]:"fire-fn",[_0]:"fire-fn-compat",[y0]:"fire-iid",[v0]:"fire-iid-compat",[b0]:"fire-fcm",[x0]:"fire-fcm-compat",[w0]:"fire-perf",[E0]:"fire-perf-compat",[T0]:"fire-rc",[I0]:"fire-rc-compat",[A0]:"fire-gcs",[S0]:"fire-gcs-compat",[k0]:"fire-fst",[R0]:"fire-fst-compat",[C0]:"fire-vertex","fire-js":"fire-js",[P0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Map,O0=new Map,fu=new Map;function If(n,t){try{n.container.addComponent(t)}catch(e){$n.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Js(n){const t=n.name;if(fu.has(t))return $n.debug(`There were multiple attempts to register component ${t}.`),!1;fu.set(t,n);for(const e of Qa.values())If(e,n);for(const e of O0.values())If(e,n);return!0}function Ac(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Cn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ls=new wo("app","Firebase",N0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=D0;function Ng(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:hu,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw ls.create("bad-app-name",{appName:String(r)});if(e||(e=Rg()),!e)throw ls.create("no-options");const i=Qa.get(r);if(i){if(Ka(e,i.options)&&Ka(s,i.config))return i;throw ls.create("duplicate-app",{appName:r})}const o=new jx(r);for(const c of fu.values())o.addComponent(c);const a=new L0(e,s,o);return Qa.set(r,a),a}function od(n=hu){const t=Qa.get(n);if(!t&&n===hu&&Rg())return Ng();if(!t)throw ls.create("no-app",{appName:n});return t}function fn(n,t,e){var s;let r=(s=M0[n])!==null&&s!==void 0?s:n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}Js(new hs(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const V0="firebase-heartbeat-database",F0=1,eo="firebase-heartbeat-store";let Pl=null;function Lg(){return Pl||(Pl=e0(V0,F0,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(eo)}catch(e){console.warn(e)}}}}).catch(n=>{throw ls.create("idb-open",{originalErrorMessage:n.message})})),Pl}async function $0(n){try{const e=(await Lg()).transaction(eo),s=await e.objectStore(eo).get(Vg(n));return await e.done,s}catch(t){if(t instanceof xn)$n.warn(t.message);else{const e=ls.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$n.warn(e.message)}}}async function Af(n,t){try{const s=(await Lg()).transaction(eo,"readwrite");await s.objectStore(eo).put(t,Vg(n)),await s.done}catch(e){if(e instanceof xn)$n.warn(e.message);else{const s=ls.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});$n.warn(s.message)}}}function Vg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const B0=1024,U0=30*24*60*60*1e3;class j0{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new H0(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=U0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){$n.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sf(),{heartbeatsToSend:s,unsentEntries:r}=z0(this._heartbeatsCache.heartbeats),i=Ya(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return $n.warn(e),""}}}function Sf(){return new Date().toISOString().substring(0,10)}function z0(n,t=B0){const e=[];let s=n.slice();for(const r of n){const i=e.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),kf(e)>t){i.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),kf(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class H0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rx()?Px().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await $0(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Af(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Af(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function kf(n){return Ya(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(n){Js(new hs("platform-logger",t=>new r0(t),"PRIVATE")),Js(new hs("heartbeat",t=>new j0(t),"PRIVATE")),fn(du,Tf,n),fn(du,Tf,"esm2017"),fn("fire-js","")}q0("");var W0="firebase",G0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(W0,G0,"app");var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hs,Fg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,b){function x(){}x.prototype=b.prototype,E.D=b.prototype,E.prototype=new x,E.prototype.constructor=E,E.C=function(A,C,D){for(var k=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)k[nt-2]=arguments[nt];return b.prototype[C].apply(A,k)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,b,x){x||(x=0);var A=Array(16);if(typeof b=="string")for(var C=0;16>C;++C)A[C]=b.charCodeAt(x++)|b.charCodeAt(x++)<<8|b.charCodeAt(x++)<<16|b.charCodeAt(x++)<<24;else for(C=0;16>C;++C)A[C]=b[x++]|b[x++]<<8|b[x++]<<16|b[x++]<<24;b=E.g[0],x=E.g[1],C=E.g[2];var D=E.g[3],k=b+(D^x&(C^D))+A[0]+3614090360&4294967295;b=x+(k<<7&4294967295|k>>>25),k=D+(C^b&(x^C))+A[1]+3905402710&4294967295,D=b+(k<<12&4294967295|k>>>20),k=C+(x^D&(b^x))+A[2]+606105819&4294967295,C=D+(k<<17&4294967295|k>>>15),k=x+(b^C&(D^b))+A[3]+3250441966&4294967295,x=C+(k<<22&4294967295|k>>>10),k=b+(D^x&(C^D))+A[4]+4118548399&4294967295,b=x+(k<<7&4294967295|k>>>25),k=D+(C^b&(x^C))+A[5]+1200080426&4294967295,D=b+(k<<12&4294967295|k>>>20),k=C+(x^D&(b^x))+A[6]+2821735955&4294967295,C=D+(k<<17&4294967295|k>>>15),k=x+(b^C&(D^b))+A[7]+4249261313&4294967295,x=C+(k<<22&4294967295|k>>>10),k=b+(D^x&(C^D))+A[8]+1770035416&4294967295,b=x+(k<<7&4294967295|k>>>25),k=D+(C^b&(x^C))+A[9]+2336552879&4294967295,D=b+(k<<12&4294967295|k>>>20),k=C+(x^D&(b^x))+A[10]+4294925233&4294967295,C=D+(k<<17&4294967295|k>>>15),k=x+(b^C&(D^b))+A[11]+2304563134&4294967295,x=C+(k<<22&4294967295|k>>>10),k=b+(D^x&(C^D))+A[12]+1804603682&4294967295,b=x+(k<<7&4294967295|k>>>25),k=D+(C^b&(x^C))+A[13]+4254626195&4294967295,D=b+(k<<12&4294967295|k>>>20),k=C+(x^D&(b^x))+A[14]+2792965006&4294967295,C=D+(k<<17&4294967295|k>>>15),k=x+(b^C&(D^b))+A[15]+1236535329&4294967295,x=C+(k<<22&4294967295|k>>>10),k=b+(C^D&(x^C))+A[1]+4129170786&4294967295,b=x+(k<<5&4294967295|k>>>27),k=D+(x^C&(b^x))+A[6]+3225465664&4294967295,D=b+(k<<9&4294967295|k>>>23),k=C+(b^x&(D^b))+A[11]+643717713&4294967295,C=D+(k<<14&4294967295|k>>>18),k=x+(D^b&(C^D))+A[0]+3921069994&4294967295,x=C+(k<<20&4294967295|k>>>12),k=b+(C^D&(x^C))+A[5]+3593408605&4294967295,b=x+(k<<5&4294967295|k>>>27),k=D+(x^C&(b^x))+A[10]+38016083&4294967295,D=b+(k<<9&4294967295|k>>>23),k=C+(b^x&(D^b))+A[15]+3634488961&4294967295,C=D+(k<<14&4294967295|k>>>18),k=x+(D^b&(C^D))+A[4]+3889429448&4294967295,x=C+(k<<20&4294967295|k>>>12),k=b+(C^D&(x^C))+A[9]+568446438&4294967295,b=x+(k<<5&4294967295|k>>>27),k=D+(x^C&(b^x))+A[14]+3275163606&4294967295,D=b+(k<<9&4294967295|k>>>23),k=C+(b^x&(D^b))+A[3]+4107603335&4294967295,C=D+(k<<14&4294967295|k>>>18),k=x+(D^b&(C^D))+A[8]+1163531501&4294967295,x=C+(k<<20&4294967295|k>>>12),k=b+(C^D&(x^C))+A[13]+2850285829&4294967295,b=x+(k<<5&4294967295|k>>>27),k=D+(x^C&(b^x))+A[2]+4243563512&4294967295,D=b+(k<<9&4294967295|k>>>23),k=C+(b^x&(D^b))+A[7]+1735328473&4294967295,C=D+(k<<14&4294967295|k>>>18),k=x+(D^b&(C^D))+A[12]+2368359562&4294967295,x=C+(k<<20&4294967295|k>>>12),k=b+(x^C^D)+A[5]+4294588738&4294967295,b=x+(k<<4&4294967295|k>>>28),k=D+(b^x^C)+A[8]+2272392833&4294967295,D=b+(k<<11&4294967295|k>>>21),k=C+(D^b^x)+A[11]+1839030562&4294967295,C=D+(k<<16&4294967295|k>>>16),k=x+(C^D^b)+A[14]+4259657740&4294967295,x=C+(k<<23&4294967295|k>>>9),k=b+(x^C^D)+A[1]+2763975236&4294967295,b=x+(k<<4&4294967295|k>>>28),k=D+(b^x^C)+A[4]+1272893353&4294967295,D=b+(k<<11&4294967295|k>>>21),k=C+(D^b^x)+A[7]+4139469664&4294967295,C=D+(k<<16&4294967295|k>>>16),k=x+(C^D^b)+A[10]+3200236656&4294967295,x=C+(k<<23&4294967295|k>>>9),k=b+(x^C^D)+A[13]+681279174&4294967295,b=x+(k<<4&4294967295|k>>>28),k=D+(b^x^C)+A[0]+3936430074&4294967295,D=b+(k<<11&4294967295|k>>>21),k=C+(D^b^x)+A[3]+3572445317&4294967295,C=D+(k<<16&4294967295|k>>>16),k=x+(C^D^b)+A[6]+76029189&4294967295,x=C+(k<<23&4294967295|k>>>9),k=b+(x^C^D)+A[9]+3654602809&4294967295,b=x+(k<<4&4294967295|k>>>28),k=D+(b^x^C)+A[12]+3873151461&4294967295,D=b+(k<<11&4294967295|k>>>21),k=C+(D^b^x)+A[15]+530742520&4294967295,C=D+(k<<16&4294967295|k>>>16),k=x+(C^D^b)+A[2]+3299628645&4294967295,x=C+(k<<23&4294967295|k>>>9),k=b+(C^(x|~D))+A[0]+4096336452&4294967295,b=x+(k<<6&4294967295|k>>>26),k=D+(x^(b|~C))+A[7]+1126891415&4294967295,D=b+(k<<10&4294967295|k>>>22),k=C+(b^(D|~x))+A[14]+2878612391&4294967295,C=D+(k<<15&4294967295|k>>>17),k=x+(D^(C|~b))+A[5]+4237533241&4294967295,x=C+(k<<21&4294967295|k>>>11),k=b+(C^(x|~D))+A[12]+1700485571&4294967295,b=x+(k<<6&4294967295|k>>>26),k=D+(x^(b|~C))+A[3]+2399980690&4294967295,D=b+(k<<10&4294967295|k>>>22),k=C+(b^(D|~x))+A[10]+4293915773&4294967295,C=D+(k<<15&4294967295|k>>>17),k=x+(D^(C|~b))+A[1]+2240044497&4294967295,x=C+(k<<21&4294967295|k>>>11),k=b+(C^(x|~D))+A[8]+1873313359&4294967295,b=x+(k<<6&4294967295|k>>>26),k=D+(x^(b|~C))+A[15]+4264355552&4294967295,D=b+(k<<10&4294967295|k>>>22),k=C+(b^(D|~x))+A[6]+2734768916&4294967295,C=D+(k<<15&4294967295|k>>>17),k=x+(D^(C|~b))+A[13]+1309151649&4294967295,x=C+(k<<21&4294967295|k>>>11),k=b+(C^(x|~D))+A[4]+4149444226&4294967295,b=x+(k<<6&4294967295|k>>>26),k=D+(x^(b|~C))+A[11]+3174756917&4294967295,D=b+(k<<10&4294967295|k>>>22),k=C+(b^(D|~x))+A[2]+718787259&4294967295,C=D+(k<<15&4294967295|k>>>17),k=x+(D^(C|~b))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+b&4294967295,E.g[1]=E.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+D&4294967295}s.prototype.u=function(E,b){b===void 0&&(b=E.length);for(var x=b-this.blockSize,A=this.B,C=this.h,D=0;D<b;){if(C==0)for(;D<=x;)r(this,E,D),D+=this.blockSize;if(typeof E=="string"){for(;D<b;)if(A[C++]=E.charCodeAt(D++),C==this.blockSize){r(this,A),C=0;break}}else for(;D<b;)if(A[C++]=E[D++],C==this.blockSize){r(this,A),C=0;break}}this.h=C,this.o+=b},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var b=1;b<E.length-8;++b)E[b]=0;var x=8*this.o;for(b=E.length-8;b<E.length;++b)E[b]=x&255,x/=256;for(this.u(E),E=Array(16),b=x=0;4>b;++b)for(var A=0;32>A;A+=8)E[x++]=this.g[b]>>>A&255;return E};function i(E,b){var x=a;return Object.prototype.hasOwnProperty.call(x,E)?x[E]:x[E]=b(E)}function o(E,b){this.h=b;for(var x=[],A=!0,C=E.length-1;0<=C;C--){var D=E[C]|0;A&&D==b||(x[C]=D,A=!1)}this.g=x}var a={};function c(E){return-128<=E&&128>E?i(E,function(b){return new o([b|0],0>b?-1:0)}):new o([E|0],0>E?-1:0)}function l(E){if(isNaN(E)||!isFinite(E))return h;if(0>E)return _(l(-E));for(var b=[],x=1,A=0;E>=x;A++)b[A]=E/x|0,x*=4294967296;return new o(b,0)}function d(E,b){if(E.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(E.charAt(0)=="-")return _(d(E.substring(1),b));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=l(Math.pow(b,8)),A=h,C=0;C<E.length;C+=8){var D=Math.min(8,E.length-C),k=parseInt(E.substring(C,C+D),b);8>D?(D=l(Math.pow(b,D)),A=A.j(D).add(l(k))):(A=A.j(x),A=A.add(l(k)))}return A}var h=c(0),f=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(v(this))return-_(this).m();for(var E=0,b=1,x=0;x<this.g.length;x++){var A=this.i(x);E+=(0<=A?A:4294967296+A)*b,b*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(g(this))return"0";if(v(this))return"-"+_(this).toString(E);for(var b=l(Math.pow(E,6)),x=this,A="";;){var C=P(x,b).g;x=I(x,C.j(b));var D=((0<x.g.length?x.g[0]:x.h)>>>0).toString(E);if(x=C,g(x))return D+A;for(;6>D.length;)D="0"+D;A=D+A}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function g(E){if(E.h!=0)return!1;for(var b=0;b<E.g.length;b++)if(E.g[b]!=0)return!1;return!0}function v(E){return E.h==-1}n.l=function(E){return E=I(this,E),v(E)?-1:g(E)?0:1};function _(E){for(var b=E.g.length,x=[],A=0;A<b;A++)x[A]=~E.g[A];return new o(x,~E.h).add(f)}n.abs=function(){return v(this)?_(this):this},n.add=function(E){for(var b=Math.max(this.g.length,E.g.length),x=[],A=0,C=0;C<=b;C++){var D=A+(this.i(C)&65535)+(E.i(C)&65535),k=(D>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);A=k>>>16,D&=65535,k&=65535,x[C]=k<<16|D}return new o(x,x[x.length-1]&-2147483648?-1:0)};function I(E,b){return E.add(_(b))}n.j=function(E){if(g(this)||g(E))return h;if(v(this))return v(E)?_(this).j(_(E)):_(_(this).j(E));if(v(E))return _(this.j(_(E)));if(0>this.l(m)&&0>E.l(m))return l(this.m()*E.m());for(var b=this.g.length+E.g.length,x=[],A=0;A<2*b;A++)x[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<E.g.length;C++){var D=this.i(A)>>>16,k=this.i(A)&65535,nt=E.i(C)>>>16,H=E.i(C)&65535;x[2*A+2*C]+=k*H,w(x,2*A+2*C),x[2*A+2*C+1]+=D*H,w(x,2*A+2*C+1),x[2*A+2*C+1]+=k*nt,w(x,2*A+2*C+1),x[2*A+2*C+2]+=D*nt,w(x,2*A+2*C+2)}for(A=0;A<b;A++)x[A]=x[2*A+1]<<16|x[2*A];for(A=b;A<2*b;A++)x[A]=0;return new o(x,0)};function w(E,b){for(;(E[b]&65535)!=E[b];)E[b+1]+=E[b]>>>16,E[b]&=65535,b++}function S(E,b){this.g=E,this.h=b}function P(E,b){if(g(b))throw Error("division by zero");if(g(E))return new S(h,h);if(v(E))return b=P(_(E),b),new S(_(b.g),_(b.h));if(v(b))return b=P(E,_(b)),new S(_(b.g),b.h);if(30<E.g.length){if(v(E)||v(b))throw Error("slowDivide_ only works with positive integers.");for(var x=f,A=b;0>=A.l(E);)x=R(x),A=R(A);var C=M(x,1),D=M(A,1);for(A=M(A,2),x=M(x,2);!g(A);){var k=D.add(A);0>=k.l(E)&&(C=C.add(x),D=k),A=M(A,1),x=M(x,1)}return b=I(E,C.j(b)),new S(C,b)}for(C=h;0<=E.l(b);){for(x=Math.max(1,Math.floor(E.m()/b.m())),A=Math.ceil(Math.log(x)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),D=l(x),k=D.j(b);v(k)||0<k.l(E);)x-=A,D=l(x),k=D.j(b);g(D)&&(D=f),C=C.add(D),E=I(E,k)}return new S(C,E)}n.A=function(E){return P(this,E).h},n.and=function(E){for(var b=Math.max(this.g.length,E.g.length),x=[],A=0;A<b;A++)x[A]=this.i(A)&E.i(A);return new o(x,this.h&E.h)},n.or=function(E){for(var b=Math.max(this.g.length,E.g.length),x=[],A=0;A<b;A++)x[A]=this.i(A)|E.i(A);return new o(x,this.h|E.h)},n.xor=function(E){for(var b=Math.max(this.g.length,E.g.length),x=[],A=0;A<b;A++)x[A]=this.i(A)^E.i(A);return new o(x,this.h^E.h)};function R(E){for(var b=E.g.length+1,x=[],A=0;A<b;A++)x[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(x,E.h)}function M(E,b){var x=b>>5;b%=32;for(var A=E.g.length-x,C=[],D=0;D<A;D++)C[D]=0<b?E.i(D+x)>>>b|E.i(D+x+1)<<32-b:E.i(D+x);return new o(C,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Fg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Hs=o}).apply(typeof Cf<"u"?Cf:typeof self<"u"?self:typeof window<"u"?window:{});var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $g,Mi,Bg,Pa,pu,Ug,jg,zg;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ca=="object"&&ca];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=e(this);function r(u,p){if(p)t:{var y=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var O=u[T];if(!(O in y))break t;y=y[O]}u=u[u.length-1],T=y[u],p=p(T),p!=T&&p!=null&&t(y,u,{configurable:!0,writable:!0,value:p})}}function i(u,p){u instanceof String&&(u+="");var y=0,T=!1,O={next:function(){if(!T&&y<u.length){var V=y++;return{value:p(V,u[V]),done:!1}}return T=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}r("Array.prototype.values",function(u){return u||function(){return i(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function l(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function d(u,p,y){return u.call.apply(u.bind,arguments)}function h(u,p,y){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,T),u.apply(p,O)}}return function(){return u.apply(p,arguments)}}function f(u,p,y){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,f.apply(null,arguments)}function m(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function g(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(T,O,V){for(var q=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)q[Pt-2]=arguments[Pt];return p.prototype[O].apply(T,q)}}function v(u){const p=u.length;if(0<p){const y=Array(p);for(let T=0;T<p;T++)y[T]=u[T];return y}return[]}function _(u,p){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(c(T)){const O=u.length||0,V=T.length||0;u.length=O+V;for(let q=0;q<V;q++)u[O+q]=T[q]}else u.push(T)}}class I{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function w(u){return/^[\s\xa0]*$/.test(u)}function S(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function P(u){return P[" "](u),u}P[" "]=function(){};var R=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function M(u,p,y){for(const T in u)p.call(y,u[T],T,u)}function E(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function b(u){const p={};for(const y in u)p[y]=u[y];return p}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,p){let y,T;for(let O=1;O<arguments.length;O++){T=arguments[O];for(y in T)u[y]=T[y];for(let V=0;V<x.length;V++)y=x[V],Object.prototype.hasOwnProperty.call(T,y)&&(u[y]=T[y])}}function C(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function D(u){a.setTimeout(()=>{throw u},0)}function k(){var u=z;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class nt{constructor(){this.h=this.g=null}add(p,y){const T=H.get();T.set(p,y),this.h?this.h.next=T:this.g=T,this.h=T}}var H=new I(()=>new Y,u=>u.reset());class Y{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let N,B=!1,z=new nt,W=()=>{const u=a.Promise.resolve(void 0);N=()=>{u.then(lt)}};var lt=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(y){D(y)}var p=H;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}B=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var et=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};a.addEventListener("test",y,p),a.removeEventListener("test",y,p)}catch{}return u}();function ct(u,p){if(Q.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(R){t:{try{P(p.nodeName);var O=!0;break t}catch{}O=!1}O||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Tt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ct.aa.h.call(this)}}g(ct,Q);var Tt={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),ws=0;function sn(u,p,y,T,O){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!T,this.ha=O,this.key=++ws,this.da=this.fa=!1}function Ue(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function qn(u){this.src=u,this.g={},this.h=0}qn.prototype.add=function(u,p,y,T,O){var V=u.toString();u=this.g[V],u||(u=this.g[V]=[],this.h++);var q=ri(u,p,T,O);return-1<q?(p=u[q],y||(p.fa=!1)):(p=new sn(p,this.src,V,!!T,O),p.fa=y,u.push(p)),p};function Es(u,p){var y=p.type;if(y in u.g){var T=u.g[y],O=Array.prototype.indexOf.call(T,p,void 0),V;(V=0<=O)&&Array.prototype.splice.call(T,O,1),V&&(Ue(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function ri(u,p,y,T){for(var O=0;O<u.length;++O){var V=u[O];if(!V.da&&V.listener==p&&V.capture==!!y&&V.ha==T)return O}return-1}var Ge="closure_lm_"+(1e6*Math.random()|0),Ts={};function Ho(u,p,y,T,O){if(Array.isArray(p)){for(var V=0;V<p.length;V++)Ho(u,p[V],y,T,O);return null}return y=wh(y),u&&u[ke]?u.K(p,y,l(T)?!!T.capture:!1,O):qt(u,p,y,!1,T,O)}function qt(u,p,y,T,O,V){if(!p)throw Error("Invalid event type");var q=l(O)?!!O.capture:!!O,Pt=ll(u);if(Pt||(u[Ge]=Pt=new qn(u)),y=Pt.add(p,y,T,q,V),y.proxy)return y;if(T=he(),y.proxy=T,T.src=u,T.listener=y,u.addEventListener)et||(O=q),O===void 0&&(O=!1),u.addEventListener(p.toString(),T,O);else if(u.attachEvent)u.attachEvent(Is(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function he(){function u(y){return p.call(u.src,u.listener,y)}const p=qo;return u}function rn(u,p,y,T,O){if(Array.isArray(p))for(var V=0;V<p.length;V++)rn(u,p[V],y,T,O);else T=l(T)?!!T.capture:!!T,y=wh(y),u&&u[ke]?(u=u.i,p=String(p).toString(),p in u.g&&(V=u.g[p],y=ri(V,y,T,O),-1<y&&(Ue(V[y]),Array.prototype.splice.call(V,y,1),V.length==0&&(delete u.g[p],u.h--)))):u&&(u=ll(u))&&(p=u.g[p.toString()],u=-1,p&&(u=ri(p,y,T,O)),(y=-1<u?p[u]:null)&&on(y))}function on(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ke])Es(p.i,u);else{var y=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(y,T,u.capture):p.detachEvent?p.detachEvent(Is(y),T):p.addListener&&p.removeListener&&p.removeListener(T),(y=ll(p))?(Es(y,u),y.h==0&&(y.src=null,p[Ge]=null)):Ue(u)}}}function Is(u){return u in Ts?Ts[u]:Ts[u]="on"+u}function qo(u,p){if(u.da)u=!0;else{p=new ct(p,this);var y=u.listener,T=u.ha||u.src;u.fa&&on(u),u=y.call(T,p)}return u}function ll(u){return u=u[Ge],u instanceof qn?u:null}var ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function wh(u){return typeof u=="function"?u:(u[ul]||(u[ul]=function(p){return u.handleEvent(p)}),u[ul])}function ge(){ut.call(this),this.i=new qn(this),this.M=this,this.F=null}g(ge,ut),ge.prototype[ke]=!0,ge.prototype.removeEventListener=function(u,p,y,T){rn(this,u,p,y,T)};function Ce(u,p){var y,T=u.F;if(T)for(y=[];T;T=T.F)y.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new Q(p,u);else if(p instanceof Q)p.target=p.target||u;else{var O=p;p=new Q(T,u),A(p,O)}if(O=!0,y)for(var V=y.length-1;0<=V;V--){var q=p.g=y[V];O=Wo(q,T,!0,p)&&O}if(q=p.g=u,O=Wo(q,T,!0,p)&&O,O=Wo(q,T,!1,p)&&O,y)for(V=0;V<y.length;V++)q=p.g=y[V],O=Wo(q,T,!1,p)&&O}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],T=0;T<y.length;T++)Ue(y[T]);delete u.g[p],u.h--}}this.F=null},ge.prototype.K=function(u,p,y,T){return this.i.add(String(u),p,!1,y,T)},ge.prototype.L=function(u,p,y,T){return this.i.add(String(u),p,!0,y,T)};function Wo(u,p,y,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var O=!0,V=0;V<p.length;++V){var q=p[V];if(q&&!q.da&&q.capture==y){var Pt=q.listener,fe=q.ha||q.src;q.fa&&Es(u.i,q),O=Pt.call(fe,T)!==!1&&O}}return O&&!T.defaultPrevented}function Eh(u,p,y){if(typeof u=="function")y&&(u=f(u,y));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function Th(u){u.g=Eh(()=>{u.g=null,u.i&&(u.i=!1,Th(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Ub extends ut{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Th(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(u){ut.call(this),this.h=u,this.g={}}g(ii,ut);var Ih=[];function Ah(u){M(u.g,function(p,y){this.g.hasOwnProperty(y)&&on(p)},u),u.g={}}ii.prototype.N=function(){ii.aa.N.call(this),Ah(this)},ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dl=a.JSON.stringify,jb=a.JSON.parse,zb=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function hl(){}hl.prototype.h=null;function Sh(u){return u.h||(u.h=u.i())}function kh(){}var oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fl(){Q.call(this,"d")}g(fl,Q);function pl(){Q.call(this,"c")}g(pl,Q);var As={},Ch=null;function Go(){return Ch=Ch||new ge}As.La="serverreachability";function Rh(u){Q.call(this,As.La,u)}g(Rh,Q);function ai(u){const p=Go();Ce(p,new Rh(p))}As.STAT_EVENT="statevent";function Ph(u,p){Q.call(this,As.STAT_EVENT,u),this.stat=p}g(Ph,Q);function Re(u){const p=Go();Ce(p,new Ph(p,u))}As.Ma="timingevent";function Dh(u,p){Q.call(this,As.Ma,u),this.size=p}g(Dh,Q);function ci(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function li(){this.g=!0}li.prototype.xa=function(){this.g=!1};function Hb(u,p,y,T,O,V){u.info(function(){if(u.g)if(V)for(var q="",Pt=V.split("&"),fe=0;fe<Pt.length;fe++){var vt=Pt[fe].split("=");if(1<vt.length){var _e=vt[0];vt=vt[1];var ye=_e.split("_");q=2<=ye.length&&ye[1]=="type"?q+(_e+"="+vt+"&"):q+(_e+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+T+") [attempt "+O+"]: "+p+`
`+y+`
`+q})}function qb(u,p,y,T,O,V,q){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+O+"]: "+p+`
`+y+`
`+V+" "+q})}function gr(u,p,y,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Gb(u,y)+(T?" "+T:"")})}function Wb(u,p){u.info(function(){return"TIMEOUT: "+p})}li.prototype.info=function(){};function Gb(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var T=y[u];if(!(2>T.length)){var O=T[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<O.length;q++)O[q]=""}}}}return dl(y)}catch{return p}}var Yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ml;function Ko(){}g(Ko,hl),Ko.prototype.g=function(){return new XMLHttpRequest},Ko.prototype.i=function(){return{}},ml=new Ko;function Wn(u,p,y,T){this.j=u,this.i=p,this.l=y,this.R=T||1,this.U=new ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oh}function Oh(){this.i=null,this.g="",this.h=!1}var Nh={},gl={};function _l(u,p,y){u.L=1,u.v=Zo(wn(p)),u.m=y,u.P=!0,Lh(u,null)}function Lh(u,p){u.F=Date.now(),Qo(u),u.A=wn(u.v);var y=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Qh(y.i,"t",T),u.C=0,y=u.j.J,u.h=new Oh,u.g=mf(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Ub(f(u.Y,u,u.g),u.O)),p=u.U,y=u.g,T=u.ca;var O="readystatechange";Array.isArray(O)||(O&&(Ih[0]=O.toString()),O=Ih);for(var V=0;V<O.length;V++){var q=Ho(y,O[V],T||p.handleEvent,!1,p.h||p);if(!q)break;p.g[q.key]=q}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),ai(),Hb(u.i,u.u,u.A,u.l,u.R,u.m)}Wn.prototype.ca=function(u){u=u.target;const p=this.M;p&&En(u)==3?p.j():this.Y(u)},Wn.prototype.Y=function(u){try{if(u==this.g)t:{const ye=En(this.g);var p=this.g.Ba();const vr=this.g.Z();if(!(3>ye)&&(ye!=3||this.g&&(this.h.h||this.g.oa()||sf(this.g)))){this.J||ye!=4||p==7||(p==8||0>=vr?ai(3):ai(2)),yl(this);var y=this.g.Z();this.X=y;e:if(Vh(this)){var T=sf(this.g);u="";var O=T.length,V=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ss(this),ui(this);var q="";break e}this.h.i=new a.TextDecoder}for(p=0;p<O;p++)this.h.h=!0,u+=this.h.i.decode(T[p],{stream:!(V&&p==O-1)});T.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=y==200,qb(this.i,this.u,this.A,this.l,this.R,ye,y),this.o){if(this.T&&!this.K){e:{if(this.g){var Pt,fe=this.g;if((Pt=fe.g?fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Pt)){var vt=Pt;break e}}vt=null}if(y=vt)gr(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vl(this,y);else{this.o=!1,this.s=3,Re(12),Ss(this),ui(this);break t}}if(this.P){y=!0;let Ye;for(;!this.J&&this.C<q.length;)if(Ye=Yb(this,q),Ye==gl){ye==4&&(this.s=4,Re(14),y=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==Nh){this.s=4,Re(15),gr(this.i,this.l,q,"[Invalid Chunk]"),y=!1;break}else gr(this.i,this.l,Ye,null),vl(this,Ye);if(Vh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||q.length!=0||this.h.h||(this.s=1,Re(16),y=!1),this.o=this.o&&y,!y)gr(this.i,this.l,q,"[Invalid Chunked Response]"),Ss(this),ui(this);else if(0<q.length&&!this.W){this.W=!0;var _e=this.j;_e.g==this&&_e.ba&&!_e.M&&(_e.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Il(_e),_e.M=!0,Re(11))}}else gr(this.i,this.l,q,null),vl(this,q);ye==4&&Ss(this),this.o&&!this.J&&(ye==4?df(this.j,this):(this.o=!1,Qo(this)))}else dx(this.g),y==400&&0<q.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),Ss(this),ui(this)}}}catch{}finally{}};function Vh(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Yb(u,p){var y=u.C,T=p.indexOf(`
`,y);return T==-1?gl:(y=Number(p.substring(y,T)),isNaN(y)?Nh:(T+=1,T+y>p.length?gl:(p=p.slice(T,T+y),u.C=T+y,p)))}Wn.prototype.cancel=function(){this.J=!0,Ss(this)};function Qo(u){u.S=Date.now()+u.I,Fh(u,u.I)}function Fh(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ci(f(u.ba,u),p)}function yl(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Wn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Wb(this.i,this.A),this.L!=2&&(ai(),Re(17)),Ss(this),this.s=2,ui(this)):Fh(this,this.S-u)};function ui(u){u.j.G==0||u.J||df(u.j,u)}function Ss(u){yl(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ah(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function vl(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||bl(y.h,u))){if(!u.K&&bl(y.h,u)&&y.G==3){try{var T=y.Da.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var O=T;if(O[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)ia(y),sa(y);else break t;Tl(y),Re(18)}}else y.za=O[1],0<y.za-y.T&&37500>O[2]&&y.F&&y.v==0&&!y.C&&(y.C=ci(f(y.Za,y),6e3));if(1>=Uh(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Cs(y,11)}else if((u.K||y.g==u)&&ia(y),!w(p))for(O=y.Da.g.parse(p),p=0;p<O.length;p++){let vt=O[p];if(y.T=vt[0],vt=vt[1],y.G==2)if(vt[0]=="c"){y.K=vt[1],y.ia=vt[2];const _e=vt[3];_e!=null&&(y.la=_e,y.j.info("VER="+y.la));const ye=vt[4];ye!=null&&(y.Aa=ye,y.j.info("SVER="+y.Aa));const vr=vt[5];vr!=null&&typeof vr=="number"&&0<vr&&(T=1.5*vr,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const Ye=u.g;if(Ye){const aa=Ye.g?Ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(aa){var V=T.h;V.g||aa.indexOf("spdy")==-1&&aa.indexOf("quic")==-1&&aa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(xl(V,V.h),V.h=null))}if(T.D){const Al=Ye.g?Ye.g.getResponseHeader("X-HTTP-Session-Id"):null;Al&&(T.ya=Al,Mt(T.I,T.D,Al))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var q=u;if(T.qa=pf(T,T.J?T.ia:null,T.W),q.K){jh(T.h,q);var Pt=q,fe=T.L;fe&&(Pt.I=fe),Pt.B&&(yl(Pt),Qo(Pt)),T.g=q}else lf(T);0<y.i.length&&ra(y)}else vt[0]!="stop"&&vt[0]!="close"||Cs(y,7);else y.G==3&&(vt[0]=="stop"||vt[0]=="close"?vt[0]=="stop"?Cs(y,7):El(y):vt[0]!="noop"&&y.l&&y.l.ta(vt),y.v=0)}}ai(4)}catch{}}var Kb=class{constructor(u,p){this.g=u,this.map=p}};function $h(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bh(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Uh(u){return u.h?1:u.g?u.g.size:0}function bl(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function xl(u,p){u.g?u.g.add(p):u.h=p}function jh(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}$h.prototype.cancel=function(){if(this.i=zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zh(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return v(u.i)}function Qb(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(c(u)){for(var p=[],y=u.length,T=0;T<y;T++)p.push(u[T]);return p}p=[],y=0;for(T in u)p[y++]=u[T];return p}function Xb(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(c(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const T in u)p[y++]=T;return p}}}function Hh(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(c(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Xb(u),T=Qb(u),O=T.length,V=0;V<O;V++)p.call(void 0,T[V],y&&y[V],u)}var qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jb(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var T=u[y].indexOf("="),O=null;if(0<=T){var V=u[y].substring(0,T);O=u[y].substring(T+1)}else V=u[y];p(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ks(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ks){this.h=u.h,Xo(this,u.j),this.o=u.o,this.g=u.g,Jo(this,u.s),this.l=u.l;var p=u.i,y=new fi;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Wh(this,y),this.m=u.m}else u&&(p=String(u).match(qh))?(this.h=!1,Xo(this,p[1]||"",!0),this.o=di(p[2]||""),this.g=di(p[3]||"",!0),Jo(this,p[4]),this.l=di(p[5]||"",!0),Wh(this,p[6]||"",!0),this.m=di(p[7]||"")):(this.h=!1,this.i=new fi(null,this.h))}ks.prototype.toString=function(){var u=[],p=this.j;p&&u.push(hi(p,Gh,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(hi(p,Gh,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(hi(y,y.charAt(0)=="/"?ex:tx,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",hi(y,sx)),u.join("")};function wn(u){return new ks(u)}function Xo(u,p,y){u.j=y?di(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Jo(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Wh(u,p,y){p instanceof fi?(u.i=p,rx(u.i,u.h)):(y||(p=hi(p,nx)),u.i=new fi(p,u.h))}function Mt(u,p,y){u.i.set(p,y)}function Zo(u){return Mt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function di(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function hi(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Zb),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Zb(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Gh=/[#\/\?@]/g,tx=/[#\?:]/g,ex=/[#\?]/g,nx=/[#\?@]/g,sx=/#/g;function fi(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Gn(u){u.g||(u.g=new Map,u.h=0,u.i&&Jb(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}n=fi.prototype,n.add=function(u,p){Gn(this),this.i=null,u=_r(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Yh(u,p){Gn(u),p=_r(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Kh(u,p){return Gn(u),p=_r(u,p),u.g.has(p)}n.forEach=function(u,p){Gn(this),this.g.forEach(function(y,T){y.forEach(function(O){u.call(p,O,T,this)},this)},this)},n.na=function(){Gn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let T=0;T<p.length;T++){const O=u[T];for(let V=0;V<O.length;V++)y.push(p[T])}return y},n.V=function(u){Gn(this);let p=[];if(typeof u=="string")Kh(this,u)&&(p=p.concat(this.g.get(_r(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},n.set=function(u,p){return Gn(this),this.i=null,u=_r(this,u),Kh(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Qh(u,p,y){Yh(u,p),0<y.length&&(u.i=null,u.g.set(_r(u,p),v(y)),u.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var T=p[y];const V=encodeURIComponent(String(T)),q=this.V(T);for(T=0;T<q.length;T++){var O=V;q[T]!==""&&(O+="="+encodeURIComponent(String(q[T]))),u.push(O)}}return this.i=u.join("&")};function _r(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function rx(u,p){p&&!u.j&&(Gn(u),u.i=null,u.g.forEach(function(y,T){var O=T.toLowerCase();T!=O&&(Yh(this,T),Qh(this,O,y))},u)),u.j=p}function ix(u,p){const y=new li;if(a.Image){const T=new Image;T.onload=m(Yn,y,"TestLoadImage: loaded",!0,p,T),T.onerror=m(Yn,y,"TestLoadImage: error",!1,p,T),T.onabort=m(Yn,y,"TestLoadImage: abort",!1,p,T),T.ontimeout=m(Yn,y,"TestLoadImage: timeout",!1,p,T),a.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function ox(u,p){const y=new li,T=new AbortController,O=setTimeout(()=>{T.abort(),Yn(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then(V=>{clearTimeout(O),V.ok?Yn(y,"TestPingServer: ok",!0,p):Yn(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(O),Yn(y,"TestPingServer: error",!1,p)})}function Yn(u,p,y,T,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),T(y)}catch{}}function ax(){this.g=new zb}function cx(u,p,y){const T=y||"";try{Hh(u,function(O,V){let q=O;l(O)&&(q=dl(O)),p.push(T+V+"="+encodeURIComponent(q))})}catch(O){throw p.push(T+"type="+encodeURIComponent("_badmap")),O}}function ta(u){this.l=u.Ub||null,this.j=u.eb||!1}g(ta,hl),ta.prototype.g=function(){return new ea(this.l,this.j)},ta.prototype.i=function(u){return function(){return u}}({});function ea(u,p){ge.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(ea,ge),n=ea.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,mi(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xh(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xh(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?pi(this):mi(this),this.readyState==3&&Xh(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,pi(this))},n.Qa=function(u){this.g&&(this.response=u,pi(this))},n.ga=function(){this.g&&pi(this)};function pi(u){u.readyState=4,u.l=null,u.j=null,u.v=null,mi(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function mi(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Jh(u){let p="";return M(u,function(y,T){p+=T,p+=":",p+=y,p+=`\r
`}),p}function wl(u,p,y){t:{for(T in y){var T=!1;break t}T=!0}T||(y=Jh(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Mt(u,p,y))}function Wt(u){ge.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Wt,ge);var lx=/^https?$/i,ux=["POST","PUT"];n=Wt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ml.g(),this.v=this.o?Sh(this.o):Sh(ml),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(V){Zh(this,V);return}if(u=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var O in T)y.set(O,T[O]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const V of T.keys())y.set(V,T.get(V));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(V=>V.toLowerCase()=="content-type"),O=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ux,p,void 0))||T||O||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of y)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nf(this),this.u=!0,this.g.send(u),this.u=!1}catch(V){Zh(this,V)}};function Zh(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,tf(u),na(u)}function tf(u){u.A||(u.A=!0,Ce(u,"complete"),Ce(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ce(this,"complete"),Ce(this,"abort"),na(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),na(this,!0)),Wt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ef(this):this.bb())},n.bb=function(){ef(this)};function ef(u){if(u.h&&typeof o<"u"&&(!u.v[1]||En(u)!=4||u.Z()!=2)){if(u.u&&En(u)==4)Eh(u.Ea,0,u);else if(Ce(u,"readystatechange"),En(u)==4){u.h=!1;try{const q=u.Z();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var y;if(!(y=p)){var T;if(T=q===0){var O=String(u.D).match(qh)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),T=!lx.test(O?O.toLowerCase():"")}y=T}if(y)Ce(u,"complete"),Ce(u,"success");else{u.m=6;try{var V=2<En(u)?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.Z()+"]",tf(u)}}finally{na(u)}}}}function na(u,p){if(u.g){nf(u);const y=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||Ce(u,"ready");try{y.onreadystatechange=T}catch{}}}function nf(u){u.I&&(a.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function En(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),jb(p)}};function sf(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function dx(u){const p={};u=(u.g&&2<=En(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(w(u[T]))continue;var y=C(u[T]);const O=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const V=p[O]||[];p[O]=V,V.push(y)}E(p,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function rf(u){this.Aa=0,this.i=[],this.j=new li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gi("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gi("baseRetryDelayMs",5e3,u),this.cb=gi("retryDelaySeedMs",1e4,u),this.Wa=gi("forwardChannelMaxRetries",2,u),this.wa=gi("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new $h(u&&u.concurrentRequestLimit),this.Da=new ax,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rf.prototype,n.la=8,n.G=1,n.connect=function(u,p,y,T){Re(0),this.W=u,this.H=p||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=pf(this,null,this.W),ra(this)};function El(u){if(of(u),u.G==3){var p=u.U++,y=wn(u.I);if(Mt(y,"SID",u.K),Mt(y,"RID",p),Mt(y,"TYPE","terminate"),_i(u,y),p=new Wn(u,u.j,p),p.L=2,p.v=Zo(wn(y)),y=!1,a.navigator&&a.navigator.sendBeacon)try{y=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&a.Image&&(new Image().src=p.v,y=!0),y||(p.g=mf(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Qo(p)}ff(u)}function sa(u){u.g&&(Il(u),u.g.cancel(),u.g=null)}function of(u){sa(u),u.u&&(a.clearTimeout(u.u),u.u=null),ia(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function ra(u){if(!Bh(u.h)&&!u.s){u.s=!0;var p=u.Ga;N||W(),B||(N(),B=!0),z.add(p,u),u.B=0}}function hx(u,p){return Uh(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ci(f(u.Ga,u,p),hf(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new Wn(this,this.j,u);let V=this.o;if(this.S&&(V?(V=b(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)t:{for(var p=0,y=0;y<this.i.length;y++){e:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(p+=T,4096<p){p=y;break t}if(p===4096||y===this.i.length-1){p=y+1;break t}}p=1e3}else p=1e3;p=cf(this,O,p),y=wn(this.I),Mt(y,"RID",u),Mt(y,"CVER",22),this.D&&Mt(y,"X-HTTP-Session-Id",this.D),_i(this,y),V&&(this.O?p="headers="+encodeURIComponent(String(Jh(V)))+"&"+p:this.m&&wl(y,this.m,V)),xl(this.h,O),this.Ua&&Mt(y,"TYPE","init"),this.P?(Mt(y,"$req",p),Mt(y,"SID","null"),O.T=!0,_l(O,y,null)):_l(O,y,p),this.G=2}}else this.G==3&&(u?af(this,u):this.i.length==0||Bh(this.h)||af(this))};function af(u,p){var y;p?y=p.l:y=u.U++;const T=wn(u.I);Mt(T,"SID",u.K),Mt(T,"RID",y),Mt(T,"AID",u.T),_i(u,T),u.m&&u.o&&wl(T,u.m,u.o),y=new Wn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=cf(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),xl(u.h,y),_l(y,T,p)}function _i(u,p){u.H&&M(u.H,function(y,T){Mt(p,T,y)}),u.l&&Hh({},function(y,T){Mt(p,T,y)})}function cf(u,p,y){y=Math.min(u.i.length,y);var T=u.l?f(u.l.Na,u.l,u):null;t:{var O=u.i;let V=-1;for(;;){const q=["count="+y];V==-1?0<y?(V=O[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let Pt=!0;for(let fe=0;fe<y;fe++){let vt=O[fe].g;const _e=O[fe].map;if(vt-=V,0>vt)V=Math.max(0,O[fe].g-100),Pt=!1;else try{cx(_e,q,"req"+vt+"_")}catch{T&&T(_e)}}if(Pt){T=q.join("&");break t}}}return u=u.i.splice(0,y),p.D=u,T}function lf(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;N||W(),B||(N(),B=!0),z.add(p,u),u.v=0}}function Tl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ci(f(u.Fa,u),hf(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,uf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ci(f(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),sa(this),uf(this))};function Il(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function uf(u){u.g=new Wn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=wn(u.qa);Mt(p,"RID","rpc"),Mt(p,"SID",u.K),Mt(p,"AID",u.T),Mt(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Mt(p,"TO",u.ja),Mt(p,"TYPE","xmlhttp"),_i(u,p),u.m&&u.o&&wl(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Zo(wn(p)),y.m=null,y.P=!0,Lh(y,u)}n.Za=function(){this.C!=null&&(this.C=null,sa(this),Tl(this),Re(19))};function ia(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function df(u,p){var y=null;if(u.g==p){ia(u),Il(u),u.g=null;var T=2}else if(bl(u.h,p))y=p.D,jh(u.h,p),T=1;else return;if(u.G!=0){if(p.o)if(T==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var O=u.B;T=Go(),Ce(T,new Dh(T,y)),ra(u)}else lf(u);else if(O=p.s,O==3||O==0&&0<p.X||!(T==1&&hx(u,p)||T==2&&Tl(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),O){case 1:Cs(u,5);break;case 4:Cs(u,10);break;case 3:Cs(u,6);break;default:Cs(u,2)}}}function hf(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Cs(u,p){if(u.j.info("Error code "+p),p==2){var y=f(u.fb,u),T=u.Xa;const O=!T;T=new ks(T||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xo(T,"https"),Zo(T),O?ix(T.toString(),y):ox(T.toString(),y)}else Re(2);u.G=0,u.l&&u.l.sa(p),ff(u),of(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function ff(u){if(u.G=0,u.ka=[],u.l){const p=zh(u.h);(p.length!=0||u.i.length!=0)&&(_(u.ka,p),_(u.ka,u.i),u.h.i.length=0,v(u.i),u.i.length=0),u.l.ra()}}function pf(u,p,y){var T=y instanceof ks?wn(y):new ks(y);if(T.g!="")p&&(T.g=p+"."+T.g),Jo(T,T.s);else{var O=a.location;T=O.protocol,p=p?p+"."+O.hostname:O.hostname,O=+O.port;var V=new ks(null);T&&Xo(V,T),p&&(V.g=p),O&&Jo(V,O),y&&(V.l=y),T=V}return y=u.D,p=u.ya,y&&p&&Mt(T,y,p),Mt(T,"VER",u.la),_i(u,T),T}function mf(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Wt(new ta({eb:y})):new Wt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gf(){}n=gf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oa(){}oa.prototype.g=function(u,p){return new Le(u,p)};function Le(u,p){ge.call(this),this.g=new rf(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!w(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!w(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new yr(this)}g(Le,ge),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){El(this.g)},Le.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=dl(u),u=y);p.i.push(new Kb(p.Ya++,u)),p.G==3&&ra(p)},Le.prototype.N=function(){this.g.l=null,delete this.j,El(this.g),delete this.g,Le.aa.N.call(this)};function _f(u){fl.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){t:{for(const y in p){u=y;break t}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}g(_f,fl);function yf(){pl.call(this),this.status=1}g(yf,pl);function yr(u){this.g=u}g(yr,gf),yr.prototype.ua=function(){Ce(this.g,"a")},yr.prototype.ta=function(u){Ce(this.g,new _f(u))},yr.prototype.sa=function(u){Ce(this.g,new yf)},yr.prototype.ra=function(){Ce(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,zg=function(){return new oa},jg=function(){return Go()},Ug=As,pu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yo.NO_ERROR=0,Yo.TIMEOUT=8,Yo.HTTP_ERROR=6,Pa=Yo,Mh.COMPLETE="complete",Bg=Mh,kh.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Mi=kh,Wt.prototype.listenOnce=Wt.prototype.L,Wt.prototype.getLastError=Wt.prototype.Ka,Wt.prototype.getLastErrorCode=Wt.prototype.Ba,Wt.prototype.getStatus=Wt.prototype.Z,Wt.prototype.getResponseJson=Wt.prototype.Oa,Wt.prototype.getResponseText=Wt.prototype.oa,Wt.prototype.send=Wt.prototype.ea,Wt.prototype.setWithCredentials=Wt.prototype.Ha,$g=Wt}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});const Rf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new rd("@firebase/firestore");function yi(){return Zs.logLevel}function K(n,...t){if(Zs.logLevel<=mt.DEBUG){const e=t.map(ad);Zs.debug(`Firestore (${Jr}): ${n}`,...e)}}function Bn(n,...t){if(Zs.logLevel<=mt.ERROR){const e=t.map(ad);Zs.error(`Firestore (${Jr}): ${n}`,...e)}}function tr(n,...t){if(Zs.logLevel<=mt.WARN){const e=t.map(ad);Zs.warn(`Firestore (${Jr}): ${n}`,...e)}}function ad(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function st(n="Unexpected state"){const t=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+n;throw Bn(t),new Error(t)}function Ct(n,t){n||st()}function ot(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends xn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(xe.UNAUTHENTICATED))}shutdown(){}}class Y0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class K0{constructor(t){this.t=t,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Ct(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,e(c)):Promise.resolve();let i=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ln,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ln)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ct(typeof s.accessToken=="string"),new Hg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ct(t===null||typeof t=="string"),new xe(t)}}class Q0{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class X0{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new Q0(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Ct(this.o===void 0);const s=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Ct(typeof e.token=="string"),this.R=e.token,new J0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=tw(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<e&&(s+=t.charAt(r[i]%t.length))}return s}}function xt(n,t){return n<t?-1:n>t?1:0}function Ur(n,t,e){return n.length===t.length&&n.every((s,r)=>e(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new G($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new G($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new G($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new G($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $t.fromMillis(Date.now())}static fromDate(t){return $t.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new $t(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?xt(this.nanoseconds,t.nanoseconds):xt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new rt(t)}static min(){return new rt(new $t(0,0))}static max(){return new rt(new $t(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e,s){e===void 0?e=0:e>t.length&&st(),s===void 0?s=t.length-e:s>t.length-e&&st(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return no.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof no?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let r=0;r<s;r++){const i=t.get(r),o=e.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Nt extends no{construct(t,e,s){return new Nt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new G($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(r=>r.length>0))}return new Nt(e)}static emptyPath(){return new Nt([])}}const ew=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends no{construct(t,e,s){return new le(t,e,s)}static isValidIdentifier(t){return ew.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new le(["__name__"])}static fromServerFormat(t){const e=[];let s="",r=0;const i=()=>{if(s.length===0)throw new G($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new G($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new G($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new le(e)}static emptyPath(){return new le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.path=t}static fromPath(t){return new J(Nt.fromString(t))}static fromName(t){return new J(Nt.fromString(t).popFirst(5))}static empty(){return new J(Nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new J(new Nt(t.slice()))}}function nw(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=rt.fromTimestamp(s===1e9?new $t(e+1,0):new $t(e,s));return new fs(r,J.empty(),t)}function sw(n){return new fs(n.readTime,n.key,-1)}class fs{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new fs(rt.min(),J.empty(),-1)}static max(){return new fs(rt.max(),J.empty(),-1)}}function rw(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=J.comparator(n.documentKey,t.documentKey),e!==0?e:xt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function To(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==iw)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&st(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new U((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(e,i).next(s,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof U?e:U.resolve(e)}catch(e){return U.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):U.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):U.reject(e)}static resolve(t){return new U((e,s)=>{e(t)})}static reject(t){return new U((e,s)=>{s(t)})}static waitFor(t){return new U((e,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&e()},c=>s(c))}),o=!0,i===r&&e()})}static or(t){let e=U.resolve(!1);for(const s of t)e=e.next(r=>r?U.resolve(r):s());return e}static forEach(t,e){const s=[];return t.forEach((r,i)=>{s.push(e.call(this,r,i))}),this.waitFor(s)}static mapArray(t,e){return new U((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;e(t[l]).next(d=>{o[l]=d,++a,a===i&&s(o)},d=>r(d))}})}static doWhile(t,e){return new U((s,r)=>{const i=()=>{t()===!0?e().next(()=>{i()},r):s()};i()})}}function aw(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Io(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ld{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ld.oe=-1;function Sc(n){return n==null}function Xa(n){return n===0&&1/n==-1/0}function cw(n){return typeof n=="number"&&Number.isInteger(n)&&!Xa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function lr(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Wg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e){this.comparator=t,this.root=e||pe.EMPTY}insert(t,e){return new zt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pe.BLACK,null,null))}remove(t){return new zt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return e+s.left.size;r<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new la(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new la(this.root,t,this.comparator,!1)}getReverseIterator(){return new la(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new la(this.root,t,this.comparator,!0)}}class la{constructor(t,e,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?s(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pe{constructor(t,e,s,r,i){this.key=t,this.value=e,this.color=s??pe.RED,this.left=r??pe.EMPTY,this.right=i??pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,r,i){return new pe(t??this.key,e??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,s),null):i===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return pe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw st();const t=this.left.check();if(t!==this.right.check())throw st();return t+(this.isRed()?0:1)}}pe.EMPTY=null,pe.RED=!0,pe.BLACK=!1;pe.EMPTY=new class{constructor(){this.size=0}get key(){throw st()}get value(){throw st()}get color(){throw st()}get left(){throw st()}get right(){throw st()}copy(t,e,s,r,i){return this}insert(t,e,s){return new pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.comparator=t,this.data=new zt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Df(this.data.getIterator())}getIteratorFrom(t){return new Df(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof me)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new me(this.comparator);return e.data=t,e}}class Df{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.fields=t,t.sort(le.comparator)}static empty(){return new $e([])}unionWith(t){let e=new me(le.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new $e(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ur(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class de{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gg("Invalid base64 string: "+i):i}}(t);return new de(e)}static fromUint8Array(t){const e=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new de(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return xt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}de.EMPTY_BYTE_STRING=new de("");const lw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ps(n){if(Ct(!!n),typeof n=="string"){let t=0;const e=lw.exec(n);if(Ct(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Jt(n.seconds),nanos:Jt(n.nanos)}}function Jt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function er(n){return typeof n=="string"?de.fromBase64String(n):de.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function dd(n){const t=n.mapValue.fields.__previous_value__;return ud(t)?dd(t):t}function so(n){const t=ps(n.mapValue.fields.__local_write_time__.timestampValue);return new $t(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t,e,s,r,i,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class jr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new jr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof jr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua={mapValue:{}};function nr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ud(n)?4:hw(n)?9007199254740991:dw(n)?10:11:st()}function vn(n,t){if(n===t)return!0;const e=nr(n);if(e!==nr(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return so(n).isEqual(so(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=ps(r.timestampValue),a=ps(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(r,i){return er(r.bytesValue).isEqual(er(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(r,i){return Jt(r.geoPointValue.latitude)===Jt(i.geoPointValue.latitude)&&Jt(r.geoPointValue.longitude)===Jt(i.geoPointValue.longitude)}(n,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Jt(r.integerValue)===Jt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Jt(r.doubleValue),a=Jt(i.doubleValue);return o===a?Xa(o)===Xa(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Ur(n.arrayValue.values||[],t.arrayValue.values||[],vn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Pf(o)!==Pf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!vn(o[c],a[c])))return!1;return!0}(n,t);default:return st()}}function ro(n,t){return(n.values||[]).find(e=>vn(e,t))!==void 0}function zr(n,t){if(n===t)return 0;const e=nr(n),s=nr(t);if(e!==s)return xt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return xt(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Jt(i.integerValue||i.doubleValue),c=Jt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return Mf(n.timestampValue,t.timestampValue);case 4:return Mf(so(n),so(t));case 5:return xt(n.stringValue,t.stringValue);case 6:return function(i,o){const a=er(i),c=er(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const d=xt(a[l],c[l]);if(d!==0)return d}return xt(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=xt(Jt(i.latitude),Jt(o.latitude));return a!==0?a:xt(Jt(i.longitude),Jt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Of(n.arrayValue,t.arrayValue);case 10:return function(i,o){var a,c,l,d;const h=i.fields||{},f=o.fields||{},m=(a=h.value)===null||a===void 0?void 0:a.arrayValue,g=(c=f.value)===null||c===void 0?void 0:c.arrayValue,v=xt(((l=m==null?void 0:m.values)===null||l===void 0?void 0:l.length)||0,((d=g==null?void 0:g.values)===null||d===void 0?void 0:d.length)||0);return v!==0?v:Of(m,g)}(n.mapValue,t.mapValue);case 11:return function(i,o){if(i===ua.mapValue&&o===ua.mapValue)return 0;if(i===ua.mapValue)return 1;if(o===ua.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const f=xt(c[h],d[h]);if(f!==0)return f;const m=zr(a[c[h]],l[d[h]]);if(m!==0)return m}return xt(c.length,d.length)}(n.mapValue,t.mapValue);default:throw st()}}function Mf(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return xt(n,t);const e=ps(n),s=ps(t),r=xt(e.seconds,s.seconds);return r!==0?r:xt(e.nanos,s.nanos)}function Of(n,t){const e=n.values||[],s=t.values||[];for(let r=0;r<e.length&&r<s.length;++r){const i=zr(e[r],s[r]);if(i)return i}return xt(e.length,s.length)}function Hr(n){return mu(n)}function mu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=ps(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return er(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return J.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",r=!0;for(const i of e.values||[])r?r=!1:s+=",",s+=mu(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${mu(e.fields[o])}`;return r+"}"}(n.mapValue):st()}function Nf(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function gu(n){return!!n&&"integerValue"in n}function hd(n){return!!n&&"arrayValue"in n}function Lf(n){return!!n&&"nullValue"in n}function Vf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Da(n){return!!n&&"mapValue"in n}function dw(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function ji(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return lr(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=ji(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ji(n.arrayValue.values[e]);return t}return Object.assign({},n)}function hw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.value=t}static empty(){return new Oe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Da(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ji(e)}setAll(t){let e=le.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,s,r),s={},r=[],e=a.popLast()}o?s[a.lastSegment()]=ji(o):r.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,s,r)}delete(t){const e=this.field(t.popLast());Da(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return vn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=e.mapValue.fields[t.get(s)];Da(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,s){lr(e,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Oe(ji(this.value))}}function Yg(n){const t=[];return lr(n.fields,(e,s)=>{const r=new le([e]);if(Da(s)){const i=Yg(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new $e(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e,s,r,i,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ee(t,0,rt.min(),rt.min(),rt.min(),Oe.empty(),0)}static newFoundDocument(t,e,s,r){return new Ee(t,1,e,rt.min(),s,r,0)}static newNoDocument(t,e){return new Ee(t,2,e,rt.min(),rt.min(),Oe.empty(),0)}static newUnknownDocument(t,e){return new Ee(t,3,e,rt.min(),rt.min(),Oe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(rt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ee&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ja{constructor(t,e){this.position=t,this.inclusive=e}}function Ff(n,t,e){let s=0;for(let r=0;r<n.position.length;r++){const i=t[r],o=n.position[r];if(i.field.isKeyField()?s=J.comparator(J.fromName(o.referenceValue),e.key):s=zr(o,e.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function $f(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!vn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class io{constructor(t,e="asc"){this.field=t,this.dir=e}}function fw(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Kg{}class se extends Kg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new mw(t,e,s):e==="array-contains"?new yw(t,s):e==="in"?new vw(t,s):e==="not-in"?new bw(t,s):e==="array-contains-any"?new xw(t,s):new se(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new gw(t,s):new _w(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(zr(e,this.value)):e!==null&&nr(this.value)===nr(e)&&this.matchesComparison(zr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return st()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends Kg{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new tn(t,e)}matches(t){return Qg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Qg(n){return n.op==="and"}function Xg(n){return pw(n)&&Qg(n)}function pw(n){for(const t of n.filters)if(t instanceof tn)return!1;return!0}function _u(n){if(n instanceof se)return n.field.canonicalString()+n.op.toString()+Hr(n.value);if(Xg(n))return n.filters.map(t=>_u(t)).join(",");{const t=n.filters.map(e=>_u(e)).join(",");return`${n.op}(${t})`}}function Jg(n,t){return n instanceof se?function(s,r){return r instanceof se&&s.op===r.op&&s.field.isEqual(r.field)&&vn(s.value,r.value)}(n,t):n instanceof tn?function(s,r){return r instanceof tn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&Jg(o,r.filters[a]),!0):!1}(n,t):void st()}function Zg(n){return n instanceof se?function(e){return`${e.field.canonicalString()} ${e.op} ${Hr(e.value)}`}(n):n instanceof tn?function(e){return e.op.toString()+" {"+e.getFilters().map(Zg).join(" ,")+"}"}(n):"Filter"}class mw extends se{constructor(t,e,s){super(t,e,s),this.key=J.fromName(s.referenceValue)}matches(t){const e=J.comparator(t.key,this.key);return this.matchesComparison(e)}}class gw extends se{constructor(t,e){super(t,"in",e),this.keys=t_("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class _w extends se{constructor(t,e){super(t,"not-in",e),this.keys=t_("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function t_(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>J.fromName(s.referenceValue))}class yw extends se{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hd(e)&&ro(e.arrayValue,this.value)}}class vw extends se{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ro(this.value.arrayValue,e)}}class bw extends se{constructor(t,e){super(t,"not-in",e)}matches(t){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ro(this.value.arrayValue,e)}}class xw extends se{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hd(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>ro(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(t,e=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Bf(n,t=null,e=[],s=[],r=null,i=null,o=null){return new ww(n,t,e,s,r,i,o)}function fd(n){const t=ot(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>_u(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Sc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Hr(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Hr(s)).join(",")),t.ue=e}return t.ue}function pd(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!fw(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Jg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!$f(n.startAt,t.startAt)&&$f(n.endAt,t.endAt)}function yu(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ew(n,t,e,s,r,i,o,a){return new Zr(n,t,e,s,r,i,o,a)}function md(n){return new Zr(n)}function Uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function e_(n){return n.collectionGroup!==null}function zi(n){const t=ot(n);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new me(le.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new io(i,s))}),e.has(le.keyField().canonicalString())||t.ce.push(new io(le.keyField(),s))}return t.ce}function pn(n){const t=ot(n);return t.le||(t.le=Tw(t,zi(n))),t.le}function Tw(n,t){if(n.limitType==="F")return Bf(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new io(r.field,i)});const e=n.endAt?new Ja(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ja(n.startAt.position,n.startAt.inclusive):null;return Bf(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function vu(n,t){const e=n.filters.concat([t]);return new Zr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Za(n,t,e){return new Zr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function kc(n,t){return pd(pn(n),pn(t))&&n.limitType===t.limitType}function n_(n){return`${fd(pn(n))}|lt:${n.limitType}`}function Ar(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(r=>Zg(r)).join(", ")}]`),Sc(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(r=>Hr(r)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(r=>Hr(r)).join(",")),`Target(${s})`}(pn(n))}; limitType=${n.limitType})`}function Cc(n,t){return t.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):J.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,t)&&function(s,r){for(const i of zi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,t)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,t)&&function(s,r){return!(s.startAt&&!function(o,a,c){const l=Ff(o,a,c);return o.inclusive?l<=0:l<0}(s.startAt,zi(s),r)||s.endAt&&!function(o,a,c){const l=Ff(o,a,c);return o.inclusive?l>=0:l>0}(s.endAt,zi(s),r))}(n,t)}function Iw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function s_(n){return(t,e)=>{let s=!1;for(const r of zi(n)){const i=Aw(r,t,e);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Aw(n,t,e){const s=n.field.isKeyField()?J.comparator(t.key,e.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?zr(c,l):st()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return st()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[e]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){lr(this.inner,(e,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Wg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=new zt(J.comparator);function Un(){return Sw}const r_=new zt(J.comparator);function Oi(...n){let t=r_;for(const e of n)t=t.insert(e.key,e);return t}function i_(n){let t=r_;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function js(){return Hi()}function o_(){return Hi()}function Hi(){return new ti(n=>n.toString(),(n,t)=>n.isEqual(t))}const kw=new zt(J.comparator),Cw=new me(J.comparator);function ft(...n){let t=Cw;for(const e of n)t=t.add(e);return t}const Rw=new me(xt);function Pw(){return Rw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xa(t)?"-0":t}}function a_(n){return{integerValue:""+n}}function Dw(n,t){return cw(t)?a_(t):gd(n,t)}/**
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
 */class Rc{constructor(){this._=void 0}}function Mw(n,t,e){return n instanceof tc?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ud(i)&&(i=dd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof oo?l_(n,t):n instanceof ao?u_(n,t):function(r,i){const o=c_(r,i),a=jf(o)+jf(r.Pe);return gu(o)&&gu(r.Pe)?a_(a):gd(r.serializer,a)}(n,t)}function Ow(n,t,e){return n instanceof oo?l_(n,t):n instanceof ao?u_(n,t):e}function c_(n,t){return n instanceof ec?function(s){return gu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(t)?t:{integerValue:0}:null}class tc extends Rc{}class oo extends Rc{constructor(t){super(),this.elements=t}}function l_(n,t){const e=d_(t);for(const s of n.elements)e.some(r=>vn(r,s))||e.push(s);return{arrayValue:{values:e}}}class ao extends Rc{constructor(t){super(),this.elements=t}}function u_(n,t){let e=d_(t);for(const s of n.elements)e=e.filter(r=>!vn(r,s));return{arrayValue:{values:e}}}class ec extends Rc{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function jf(n){return Jt(n.integerValue||n.doubleValue)}function d_(n){return hd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Nw(n,t){return n.field.isEqual(t.field)&&function(s,r){return s instanceof oo&&r instanceof oo||s instanceof ao&&r instanceof ao?Ur(s.elements,r.elements,vn):s instanceof ec&&r instanceof ec?vn(s.Pe,r.Pe):s instanceof tc&&r instanceof tc}(n.transform,t.transform)}class Lw{constructor(t,e){this.version=t,this.transformResults=e}}class He{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new He}static exists(t){return new He(void 0,t)}static updateTime(t){return new He(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ma(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Pc{}function h_(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new _d(n.key,He.none()):new Ao(n.key,n.data,He.none());{const e=n.data,s=Oe.empty();let r=new me(le.comparator);for(let i of t.fields)if(!r.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ys(n.key,s,new $e(r.toArray()),He.none())}}function Vw(n,t,e){n instanceof Ao?function(r,i,o){const a=r.value.clone(),c=Hf(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof ys?function(r,i,o){if(!Ma(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Hf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(f_(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function qi(n,t,e,s){return n instanceof Ao?function(i,o,a,c){if(!Ma(i.precondition,o))return a;const l=i.value.clone(),d=qf(i.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,s):n instanceof ys?function(i,o,a,c){if(!Ma(i.precondition,o))return a;const l=qf(i.fieldTransforms,c,o),d=o.data;return d.setAll(f_(i)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(i,o,a){return Ma(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Fw(n,t){let e=null;for(const s of n.fieldTransforms){const r=t.data.field(s.field),i=c_(s.transform,r||null);i!=null&&(e===null&&(e=Oe.empty()),e.set(s.field,i))}return e||null}function zf(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ur(s,r,(i,o)=>Nw(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ao extends Pc{constructor(t,e,s,r=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ys extends Pc{constructor(t,e,s,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function f_(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Hf(n,t,e){const s=new Map;Ct(n.length===e.length);for(let r=0;r<e.length;r++){const i=n[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Ow(o,a,e[r]))}return s}function qf(n,t,e){const s=new Map;for(const r of n){const i=r.transform,o=e.data.field(r.field);s.set(r.field,Mw(i,o,t))}return s}class _d extends Pc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $w extends Pc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(t,e,s,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Vw(i,t,s[r])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=qi(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=qi(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=o_();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(r.key)?null:a;const c=h_(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(rt.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&Ur(this.mutations,t.mutations,(e,s)=>zf(e,s))&&Ur(this.baseMutations,t.baseMutations,(e,s)=>zf(e,s))}}class yd{constructor(t,e,s,r){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=r}static from(t,e,s){Ct(t.mutations.length===s.length);let r=function(){return kw}();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new yd(t,e,s,r)}}/**
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
 */var ne,gt;function zw(n){switch(n){default:return st();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function p_(n){if(n===void 0)return Bn("GRPC error has no .code"),$.UNKNOWN;switch(n){case ne.OK:return $.OK;case ne.CANCELLED:return $.CANCELLED;case ne.UNKNOWN:return $.UNKNOWN;case ne.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ne.INTERNAL:return $.INTERNAL;case ne.UNAVAILABLE:return $.UNAVAILABLE;case ne.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ne.NOT_FOUND:return $.NOT_FOUND;case ne.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ne.ABORTED:return $.ABORTED;case ne.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ne.DATA_LOSS:return $.DATA_LOSS;default:return st()}}(gt=ne||(ne={}))[gt.OK=0]="OK",gt[gt.CANCELLED=1]="CANCELLED",gt[gt.UNKNOWN=2]="UNKNOWN",gt[gt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",gt[gt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",gt[gt.NOT_FOUND=5]="NOT_FOUND",gt[gt.ALREADY_EXISTS=6]="ALREADY_EXISTS",gt[gt.PERMISSION_DENIED=7]="PERMISSION_DENIED",gt[gt.UNAUTHENTICATED=16]="UNAUTHENTICATED",gt[gt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",gt[gt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",gt[gt.ABORTED=10]="ABORTED",gt[gt.OUT_OF_RANGE=11]="OUT_OF_RANGE",gt[gt.UNIMPLEMENTED=12]="UNIMPLEMENTED",gt[gt.INTERNAL=13]="INTERNAL",gt[gt.UNAVAILABLE=14]="UNAVAILABLE",gt[gt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const qw=new Hs([4294967295,4294967295],0);function Wf(n){const t=Hw().encode(n),e=new Fg;return e.update(t),new Uint8Array(e.digest())}function Gf(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Hs([e,s],0),new Hs([r,i],0)]}class vd{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Ni(`Invalid padding: ${e}`);if(s<0)throw new Ni(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Ni(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Ni(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Hs.fromNumber(this.Ie)}Ee(t,e,s){let r=t.add(e.multiply(Hs.fromNumber(s)));return r.compare(qw)===1&&(r=new Hs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Wf(t),[s,r]=Gf(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(t,e,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new vd(i,r,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Wf(t),[s,r]=Gf(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e,s,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const r=new Map;return r.set(t,So.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Dc(rt.min(),r,new zt(xt),Un(),ft())}}class So{constructor(t,e,s,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new So(s,e,ft(),ft(),ft())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,s,r){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=r}}class m_{constructor(t,e){this.targetId=t,this.me=e}}class g_{constructor(t,e,s=de.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=r}}class Yf{constructor(){this.fe=0,this.ge=Qf(),this.pe=de.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=ft(),e=ft(),s=ft();return this.ge.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:s=s.add(r);break;default:st()}}),new So(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Qf()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Ct(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ww{constructor(t){this.Le=t,this.Be=new Map,this.ke=Un(),this.qe=Kf(),this.Qe=new zt(xt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:st()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,s=t.me.count,r=this.Je(e);if(r){const i=r.target;if(yu(i))if(s===0){const o=new J(i.path);this.Ue(e,o,Ee.newNoDocument(o,rt.min()))}else Ct(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),c=a?this.Xe(a,t,o):1;if(c!==0){this.je(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,l)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=e;let o,a;try{o=er(s).toUint8Array()}catch(c){if(c instanceof Gg)return tr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new vd(o,r,i)}catch(c){return tr(c instanceof Ni?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,i,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&yu(a.target)){const c=new J(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Ee.newNoDocument(c,t))}i.be&&(e.set(o,i.ve()),i.Ce())}});let s=ft();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Je(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(t));const r=new Dc(t,e,this.Qe,this.ke,s);return this.ke=Un(),this.qe=Kf(),this.Qe=new zt(xt),r}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Yf,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new me(xt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||K("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Yf),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Kf(){return new zt(J.comparator)}function Qf(){return new zt(J.comparator)}const Gw={asc:"ASCENDING",desc:"DESCENDING"},Yw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Kw={and:"AND",or:"OR"};class Qw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function bu(n,t){return n.useProto3Json||Sc(t)?t:{value:t}}function nc(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function __(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Xw(n,t){return nc(n,t.toTimestamp())}function mn(n){return Ct(!!n),rt.fromTimestamp(function(e){const s=ps(e);return new $t(s.seconds,s.nanos)}(n))}function bd(n,t){return xu(n,t).canonicalString()}function xu(n,t){const e=function(r){return new Nt(["projects",r.projectId,"databases",r.database])}(n).child("documents");return t===void 0?e:e.child(t)}function y_(n){const t=Nt.fromString(n);return Ct(E_(t)),t}function wu(n,t){return bd(n.databaseId,t.path)}function Dl(n,t){const e=y_(t);if(e.get(1)!==n.databaseId.projectId)throw new G($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new G($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new J(b_(e))}function v_(n,t){return bd(n.databaseId,t)}function Jw(n){const t=y_(n);return t.length===4?Nt.emptyPath():b_(t)}function Eu(n){return new Nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function b_(n){return Ct(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xf(n,t,e){return{name:wu(n,t),fields:e.value.mapValue.fields}}function Zw(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:st()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(l,d){return l.useProto3Json?(Ct(d===void 0||typeof d=="string"),de.fromBase64String(d||"")):(Ct(d===void 0||d instanceof Buffer||d instanceof Uint8Array),de.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const d=l.code===void 0?$.UNKNOWN:p_(l.code);return new G(d,l.message||"")}(o);e=new g_(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Dl(n,s.document.name),i=mn(s.document.updateTime),o=s.document.createTime?mn(s.document.createTime):rt.min(),a=new Oe({mapValue:{fields:s.document.fields}}),c=Ee.newFoundDocument(r,i,o,a),l=s.targetIds||[],d=s.removedTargetIds||[];e=new Oa(l,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Dl(n,s.document),i=s.readTime?mn(s.readTime):rt.min(),o=Ee.newNoDocument(r,i),a=s.removedTargetIds||[];e=new Oa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Dl(n,s.document),i=s.removedTargetIds||[];e=new Oa([],i,r,null)}else{if(!("filter"in t))return st();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new jw(r,i),a=s.targetId;e=new m_(a,o)}}return e}function tE(n,t){let e;if(t instanceof Ao)e={update:Xf(n,t.key,t.value)};else if(t instanceof _d)e={delete:wu(n,t.key)};else if(t instanceof ys)e={update:Xf(n,t.key,t.data),updateMask:lE(t.fieldMask)};else{if(!(t instanceof $w))return st();e={verify:wu(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof tc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ec)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw st()}(0,s))),t.precondition.isNone||(e.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Xw(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:st()}(n,t.precondition)),e}function eE(n,t){return n&&n.length>0?(Ct(t!==void 0),n.map(e=>function(r,i){let o=r.updateTime?mn(r.updateTime):mn(i);return o.isEqual(rt.min())&&(o=mn(i)),new Lw(o,r.transformResults||[])}(e,t))):[]}function nE(n,t){return{documents:[v_(n,t.path)]}}function sE(n,t){const e={structuredQuery:{}},s=t.path;let r;t.collectionGroup!==null?(r=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=v_(n,r);const i=function(l){if(l.length!==0)return w_(tn.create(l,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(d=>function(f){return{field:Sr(f.field),direction:oE(f.dir)}}(d))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=bu(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{_t:e,parent:r}}function rE(n){let t=Jw(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let r=null;if(s>0){Ct(s===1);const d=e.from[0];d.allDescendants?r=d.collectionId:t=t.child(d.collectionId)}let i=[];e.where&&(i=function(h){const f=x_(h);return f instanceof tn&&Xg(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(g){return new io(kr(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Sc(f)?null:f}(e.limit));let c=null;e.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Ja(m,f)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Ja(m,f)}(e.endAt)),Ew(t,r,o,i,a,"F",c,l)}function iE(n,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return st()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function x_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=kr(e.unaryFilter.field);return se.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=kr(e.unaryFilter.field);return se.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(e.unaryFilter.field);return se.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=kr(e.unaryFilter.field);return se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return st()}}(n):n.fieldFilter!==void 0?function(e){return se.create(kr(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return st()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return tn.create(e.compositeFilter.filters.map(s=>x_(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return st()}}(e.compositeFilter.op))}(n):st()}function oE(n){return Gw[n]}function aE(n){return Yw[n]}function cE(n){return Kw[n]}function Sr(n){return{fieldPath:n.canonicalString()}}function kr(n){return le.fromServerFormat(n.fieldPath)}function w_(n){return n instanceof se?function(e){if(e.op==="=="){if(Vf(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NAN"}};if(Lf(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vf(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NOT_NAN"}};if(Lf(e.value))return{unaryFilter:{field:Sr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(e.field),op:aE(e.op),value:e.value}}}(n):n instanceof tn?function(e){const s=e.getFilters().map(r=>w_(r));return s.length===1?s[0]:{compositeFilter:{op:cE(e.op),filters:s}}}(n):st()}function lE(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function E_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,s,r,i=rt.min(),o=rt.min(),a=de.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new ns(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t){this.ct=t}}function dE(n){const t=rE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Za(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.un=new fE}addToCollectionParentIndex(t,e){return this.un.add(e),U.resolve()}getCollectionParents(t,e){return U.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return U.resolve()}deleteFieldIndex(t,e){return U.resolve()}deleteAllFieldIndexes(t){return U.resolve()}createTargetIndexes(t,e){return U.resolve()}getDocumentsMatchingTarget(t,e){return U.resolve(null)}getIndexType(t,e){return U.resolve(0)}getFieldIndexes(t,e){return U.resolve([])}getNextCollectionGroupToUpdate(t){return U.resolve(null)}getMinOffset(t,e){return U.resolve(fs.min())}getMinOffsetFromCollectionGroup(t,e){return U.resolve(fs.min())}updateCollectionGroup(t,e,s){return U.resolve()}updateIndexEntries(t,e){return U.resolve()}}class fE{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e]||new me(Nt.comparator),i=!r.has(s);return this.index[e]=r.add(s),i}has(t){const e=t.lastSegment(),s=t.popLast(),r=this.index[e];return r&&r.has(s)}getEntries(t){return(this.index[t]||new me(Nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new qr(0)}static kn(){return new qr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.changes=new ti(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ee.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?U.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gE{constructor(t,e,s,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(s!==null&&qi(s.mutation,r,$e.empty(),$t.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,ft()).next(()=>s))}getLocalViewOfDocuments(t,e,s=ft()){const r=js();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,s).next(i=>{let o=Oi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=js();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,ft()))}populateOverlays(t,e,s){const r=[];return s.forEach(i=>{e.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,r){let i=Un();const o=Hi(),a=function(){return Hi()}();return e.forEach((c,l)=>{const d=s.get(l.key);r.has(l.key)&&(d===void 0||d.mutation instanceof ys)?i=i.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),qi(d.mutation,l,d.mutation.getFieldMask(),$t.now())):o.set(l.key,$e.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,d)=>o.set(l,d)),e.forEach((l,d)=>{var h;return a.set(l,new mE(d,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Hi();let r=new zt((o,a)=>o-a),i=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let d=s.get(c)||$e.empty();d=a.applyToLocalView(l,d),s.set(c,d);const h=(r.get(a.batchId)||ft()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,d=c.value,h=o_();d.forEach(f=>{if(!i.has(f)){const m=h_(e.get(f),s.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return U.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,r){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):e_(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,r):this.getDocumentsMatchingCollectionQuery(t,e,s,r)}getNextDocuments(t,e,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,r-i.size):U.resolve(js());let a=-1,c=i;return o.next(l=>U.forEach(l,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(t,d).next(f=>{c=c.insert(d,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,ft())).next(d=>({batchId:a,changes:i_(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new J(e)).next(s=>{let r=Oi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,s,r){const i=e.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(t,i).next(a=>U.forEach(a,c=>{const l=function(h,f){return new Zr(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,s,r).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,i,r))).next(o=>{i.forEach((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,Ee.newInvalidDocument(d)))});let a=Oi();return o.forEach((c,l)=>{const d=i.get(c);d!==void 0&&qi(d.mutation,l,$e.empty(),$t.now()),Cc(e,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return U.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:mn(r.createTime)}}(e)),U.resolve()}getNamedQuery(t,e){return U.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(r){return{name:r.name,query:dE(r.bundledQuery),readTime:mn(r.readTime)}}(e)),U.resolve()}}/**
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
 */class yE{constructor(){this.overlays=new zt(J.comparator),this.Ir=new Map}getOverlay(t,e){return U.resolve(this.overlays.get(e))}getOverlays(t,e){const s=js();return U.forEach(e,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((r,i)=>{this.ht(t,e,i)}),U.resolve()}removeOverlaysForBatchId(t,e,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),U.resolve()}getOverlaysForCollection(t,e,s){const r=js(),i=e.length+1,o=new J(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return U.resolve(r)}getOverlaysForCollectionGroup(t,e,s,r){let i=new zt((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>s){let d=i.get(l.largestBatchId);d===null&&(d=js(),i=i.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const a=js(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,d)=>a.set(l,d)),!(a.size()>=r)););return U.resolve(a)}ht(t,e,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Uw(e,s));let i=this.Ir.get(e);i===void 0&&(i=ft(),this.Ir.set(e,i)),this.Ir.set(e,i.add(s.key))}}/**
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
 */class vE{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(t){return U.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.Tr=new me(ce.Er),this.dr=new me(ce.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new ce(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new ce(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new J(new Nt([])),s=new ce(e,t),r=new ce(e,t+1),i=[];return this.dr.forEachInRange([s,r],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new J(new Nt([])),s=new ce(e,t),r=new ce(e,t+1);let i=ft();return this.dr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new ce(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class ce{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return J.comparator(t.key,e.key)||xt(t.wr,e.wr)}static Ar(t,e){return xt(t.wr,e.wr)||J.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new me(ce.Er)}checkEmpty(t){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bw(i,e,s,r);this.mutationQueue.push(o);for(const a of r)this.br=this.br.add(new ce(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(t,e){return U.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,r=this.vr(s),i=r<0?0:r;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new ce(e,0),r=new ce(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],o=>{const a=this.Dr(o.wr);i.push(a)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new me(xt);return e.forEach(r=>{const i=new ce(r,0),o=new ce(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{s=s.add(a.wr)})}),U.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,r=s.length+1;let i=s;J.isDocumentKey(i)||(i=i.child(""));const o=new ce(new J(i),0);let a=new me(xt);return this.br.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const r=this.Dr(s);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){Ct(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return U.forEach(e.mutations,r=>{const i=new ce(r.key,e.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new ce(e,0),r=this.br.firstAfterOrEqual(s);return U.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,U.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(t){this.Mr=t,this.docs=function(){return new zt(J.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return U.resolve(s?s.document.mutableCopy():Ee.newInvalidDocument(e))}getEntries(t,e){let s=Un();return e.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ee.newInvalidDocument(r))}),U.resolve(s)}getDocumentsMatchingQuery(t,e,s,r){let i=Un();const o=e.path,a=new J(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||rw(sw(d),s)<=0||(r.has(d.key)||Cc(e,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(t,e,s,r){st()}Or(t,e){return U.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new wE(this)}getSize(t){return U.resolve(this.size)}}class wE extends pE{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?e.push(this.cr.addEntry(t,r)):this.cr.removeEntry(s)}),U.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(t){this.persistence=t,this.Nr=new ti(e=>fd(e),pd),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xd,this.targetCount=0,this.kr=qr.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,r)=>e(r)),U.resolve()}getLastRemoteSnapshotVersion(t){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return U.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),U.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new qr(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,U.resolve()}updateTargetData(t,e){return this.Kn(e),U.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,U.resolve()}removeTargets(t,e,s){let r=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),U.waitFor(i).next(()=>r)}getTargetCount(t){return U.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return U.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),U.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),U.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return U.resolve(s)}containsKey(t,e){return U.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ld(0),this.Kr=!1,this.Kr=!0,this.$r=new vE,this.referenceDelegate=t(this),this.Ur=new EE(this),this.indexManager=new hE,this.remoteDocumentCache=function(r){return new xE(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new uE(e),this.Gr=new _E(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new yE,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new bE(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){K("MemoryPersistence","Starting transaction:",t);const r=new IE(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(t,e){return U.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class IE extends ow{constructor(t){super(),this.currentSequenceNumber=t}}class wd{constructor(t){this.persistence=t,this.Jr=new xd,this.Yr=null}static Zr(t){return new wd(t)}get Xr(){if(this.Yr)return this.Yr;throw st()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),U.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),U.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),U.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,s=>{const r=J.fromPath(s);return this.ei(t,r).next(i=>{i||e.removeEntry(r,rt.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return U.or([()=>U.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,e,s,r){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=r}static Wi(t,e){let s=ft(),r=ft();for(const i of e.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ed(t,e.fromCache,s,r)}}/**
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
 */class SE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Cx()?8:aw(Ae())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,r){const i={result:null};return this.Yi(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(t,e,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AE;return this.Xi(t,e,o).next(a=>{if(i.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>i.result)}es(t,e,s,r){return s.documentReadCount<this.ji?(yi()<=mt.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Ar(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(yi()<=mt.DEBUG&&K("QueryEngine","Query:",Ar(e),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(yi()<=mt.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Ar(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pn(e))):U.resolve())}Yi(t,e){if(Uf(e))return U.resolve(null);let s=pn(e);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Za(e,null,"F"),s=pn(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=ft(...i);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ts(e,a);return this.ns(e,l,o,c.readTime)?this.Yi(t,Za(e,null,"F")):this.rs(t,l,e,c)}))})))}Zi(t,e,s,r){return Uf(e)||r.isEqual(rt.min())?U.resolve(null):this.Ji.getDocuments(t,s).next(i=>{const o=this.ts(e,i);return this.ns(e,o,s,r)?U.resolve(null):(yi()<=mt.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ar(e)),this.rs(t,o,e,nw(r,-1)).next(a=>a))})}ts(t,e){let s=new me(s_(t));return e.forEach((r,i)=>{Cc(t,i)&&(s=s.add(i))}),s}ns(t,e,s,r){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(t,e,s){return yi()<=mt.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Ar(e)),this.Ji.getDocumentsMatchingQuery(t,e,fs.min(),s)}rs(t,e,s,r){return this.Ji.getDocumentsMatchingQuery(t,s,r).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(t,e,s,r){this.persistence=t,this.ss=e,this.serializer=r,this.os=new zt(xt),this._s=new ti(i=>fd(i),pd),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new gE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function CE(n,t,e,s){return new kE(n,t,e,s)}async function T_(n,t){const e=ot(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let r;return e.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ft();for(const l of r){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of i){a.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return e.localDocuments.getDocuments(s,c).next(l=>({hs:l,removedBatchIds:o,addedBatchIds:a}))})})}function RE(n,t){const e=ot(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,d){const h=l.batch,f=h.keys();let m=U.resolve();return f.forEach(g=>{m=m.next(()=>d.getEntry(c,g)).next(v=>{const _=l.docVersions.get(g);Ct(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),d.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,s,t,i).next(()=>i.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ft();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(s,r))})}function I_(n){const t=ot(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function PE(n,t){const e=ot(n),s=t.snapshotVersion;let r=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});r=e.os;const a=[];t.targetChanges.forEach((d,h)=>{const f=r.get(h);if(!f)return;a.push(e.Ur.removeMatchingKeys(i,d.removedDocuments,h).next(()=>e.Ur.addMatchingKeys(i,d.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(de.EMPTY_BYTE_STRING,rt.min()).withLastLimboFreeSnapshotVersion(rt.min()):d.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(d.resumeToken,s)),r=r.insert(h,m),function(v,_,I){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,m,d)&&a.push(e.Ur.updateTargetData(i,m))});let c=Un(),l=ft();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(DE(i,o,t.documentUpdates).next(d=>{c=d.Ps,l=d.Is})),!s.isEqual(rt.min())){const d=e.Ur.getLastRemoteSnapshotVersion(i).next(h=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(d)}return U.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(e.os=r,i))}function DE(n,t,e){let s=ft(),r=ft();return e.forEach(i=>s=s.add(i)),t.getEntries(n,s).next(i=>{let o=Un();return e.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(rt.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function ME(n,t){const e=ot(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function OE(n,t){const e=ot(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return e.Ur.getTargetData(s,t).next(i=>i?(r=i,U.resolve(r)):e.Ur.allocateTargetId(s).next(o=>(r=new ns(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=e.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function Tu(n,t,e){const s=ot(n),r=s.os.get(t),i=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Io(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(r.target)}function Jf(n,t,e){const s=ot(n);let r=rt.min(),i=ft();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,d){const h=ot(c),f=h._s.get(d);return f!==void 0?U.resolve(h.os.get(f)):h.Ur.getTargetData(l,d)}(s,o,pn(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?r:rt.min(),e?i:ft())).next(a=>(NE(s,Iw(t),a),{documents:a,Ts:i})))}function NE(n,t,e){let s=n.us.get(t)||rt.min();e.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.us.set(t,s)}class Zf{constructor(){this.activeTargetIds=Pw()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class LE{constructor(){this.so=new Zf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Zf,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let da=null;function Ml(){return da===null?da=function(){return 268435456+Math.round(2147483648*Math.random())}():da++,"0x"+da.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ve="WebChannelConnection";class BE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(e,s,r,i,o){const a=Ml(),c=this.xo(e,s.toUriEncodedString());K("RestConnection",`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(l,i,o),this.No(e,c,l,r).then(d=>(K("RestConnection",`Received RPC '${e}' ${a}: `,d),d),d=>{throw tr("RestConnection",`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Lo(e,s,r,i,o,a){return this.Mo(e,s,r,i,o)}Oo(e,s,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}xo(e,s){const r=FE[e];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,r){const i=Ml();return new Promise((o,a)=>{const c=new $g;c.setWithCredentials(!0),c.listenOnce(Bg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Pa.NO_ERROR:const d=c.getResponseJson();K(ve,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),o(d);break;case Pa.TIMEOUT:K(ve,`RPC '${t}' ${i} timed out`),a(new G($.DEADLINE_EXCEEDED,"Request time out"));break;case Pa.HTTP_ERROR:const h=c.getStatus();if(K(ve,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const g=function(_){const I=_.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(I)>=0?I:$.UNKNOWN}(m.status);a(new G(g,m.message))}else a(new G($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new G($.UNAVAILABLE,"Connection failed."));break;default:st()}}finally{K(ve,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(r);K(ve,`RPC '${t}' ${i} sending request:`,r),c.send(e,"POST",l,s,15)})}Bo(t,e,s){const r=Ml(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=zg(),a=jg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,s),c.encodeInitMessageHeaders=!0;const d=i.join("");K(ve,`Creating RPC '${t}' stream ${r}: ${d}`,c);const h=o.createWebChannel(d,c);let f=!1,m=!1;const g=new $E({Io:_=>{m?K(ve,`Not sending because RPC '${t}' stream ${r} is closed:`,_):(f||(K(ve,`Opening RPC '${t}' stream ${r} transport.`),h.open(),f=!0),K(ve,`RPC '${t}' stream ${r} sending:`,_),h.send(_))},To:()=>h.close()}),v=(_,I,w)=>{_.listen(I,S=>{try{w(S)}catch(P){setTimeout(()=>{throw P},0)}})};return v(h,Mi.EventType.OPEN,()=>{m||(K(ve,`RPC '${t}' stream ${r} transport opened.`),g.yo())}),v(h,Mi.EventType.CLOSE,()=>{m||(m=!0,K(ve,`RPC '${t}' stream ${r} transport closed`),g.So())}),v(h,Mi.EventType.ERROR,_=>{m||(m=!0,tr(ve,`RPC '${t}' stream ${r} transport errored:`,_),g.So(new G($.UNAVAILABLE,"The operation could not be completed")))}),v(h,Mi.EventType.MESSAGE,_=>{var I;if(!m){const w=_.data[0];Ct(!!w);const S=w,P=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(P){K(ve,`RPC '${t}' stream ${r} received error:`,P);const R=P.status;let M=function(x){const A=ne[x];if(A!==void 0)return p_(A)}(R),E=P.message;M===void 0&&(M=$.INTERNAL,E="Unknown error status: "+R+" with message "+P.message),m=!0,g.So(new G(M,E)),h.close()}else K(ve,`RPC '${t}' stream ${r} received:`,w),g.bo(w)}}),v(a,Ug.STAT_EVENT,_=>{_.stat===pu.PROXY?K(ve,`RPC '${t}' stream ${r} detected buffering proxy`):_.stat===pu.NOPROXY&&K(ve,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function Ol(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n){return new Qw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(t,e,s=1e3,r=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,e-s);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t,e,s,r,i,o,a,c){this.ui=t,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new A_(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===$.RESOURCE_EXHAUSTED?(Bn(e.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===e&&this.P_(s,r)},s=>{t(()=>{const r=new G($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return K("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UE extends S_{constructor(t,e,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Zw(this.serializer,t),s=function(i){if(!("targetChange"in i))return rt.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?rt.min():o.readTime?mn(o.readTime):rt.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=Eu(this.serializer),e.addTarget=function(i,o){let a;const c=o.target;if(a=yu(c)?{documents:nE(i,c)}:{query:sE(i,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=__(i,o.resumeToken);const l=bu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(rt.min())>0){a.readTime=nc(i,o.snapshotVersion.toTimestamp());const l=bu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const s=iE(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=Eu(this.serializer),e.removeTarget=t,this.a_(e)}}class jE extends S_{constructor(t,e,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Ct(!!t.streamToken),this.lastStreamToken=t.streamToken,Ct(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Ct(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=eE(t.writeResults,t.commitTime),s=mn(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=Eu(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>tE(this.serializer,s))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE extends class{}{constructor(t,e,s,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new G($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(t,xu(e,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G($.UNKNOWN,i.toString())})}Lo(t,e,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,xu(e,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class HE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bn(e),this.D_=!1):K("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(t,e,s,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{s.enqueueAndForget(async()=>{ur(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ot(c);l.L_.add(4),await ko(l),l.q_.set("Unknown"),l.L_.delete(4),await Oc(l)}(this))})}),this.q_=new HE(s,r)}}async function Oc(n){if(ur(n))for(const t of n.B_)await t(!0)}async function ko(n){for(const t of n.B_)await t(!1)}function k_(n,t){const e=ot(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Sd(e)?Ad(e):ei(e).r_()&&Id(e,t))}function Td(n,t){const e=ot(n),s=ei(e);e.N_.delete(t),s.r_()&&C_(e,t),e.N_.size===0&&(s.r_()?s.o_():ur(e)&&e.q_.set("Unknown"))}function Id(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rt.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ei(n).A_(t)}function C_(n,t){n.Q_.xe(t),ei(n).R_(t)}function Ad(n){n.Q_=new Ww({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),ei(n).start(),n.q_.v_()}function Sd(n){return ur(n)&&!ei(n).n_()&&n.N_.size>0}function ur(n){return ot(n).L_.size===0}function R_(n){n.Q_=void 0}async function WE(n){n.q_.set("Online")}async function GE(n){n.N_.forEach((t,e)=>{Id(n,t)})}async function YE(n,t){R_(n),Sd(n)?(n.q_.M_(t),Ad(n)):n.q_.set("Unknown")}async function KE(n,t,e){if(n.q_.set("Online"),t instanceof g_&&t.state===2&&t.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.N_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.N_.delete(a),r.Q_.removeTarget(a))}(n,t)}catch(s){K("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await sc(n,s)}else if(t instanceof Oa?n.Q_.Ke(t):t instanceof m_?n.Q_.He(t):n.Q_.We(t),!e.isEqual(rt.min()))try{const s=await I_(n.localStore);e.compareTo(s)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(l);d&&i.N_.set(l,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(de.EMPTY_BYTE_STRING,d.snapshotVersion)),C_(i,c);const h=new ns(d.target,c,l,d.sequenceNumber);Id(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){K("RemoteStore","Failed to raise snapshot:",s),await sc(n,s)}}async function sc(n,t,e){if(!Io(t))throw t;n.L_.add(1),await ko(n),n.q_.set("Offline"),e||(e=()=>I_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Oc(n)})}function P_(n,t){return t().catch(e=>sc(n,e,t))}async function Nc(n){const t=ot(n),e=ms(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;QE(t);)try{const r=await ME(t.localStore,s);if(r===null){t.O_.length===0&&e.o_();break}s=r.batchId,XE(t,r)}catch(r){await sc(t,r)}D_(t)&&M_(t)}function QE(n){return ur(n)&&n.O_.length<10}function XE(n,t){n.O_.push(t);const e=ms(n);e.r_()&&e.V_&&e.m_(t.mutations)}function D_(n){return ur(n)&&!ms(n).n_()&&n.O_.length>0}function M_(n){ms(n).start()}async function JE(n){ms(n).p_()}async function ZE(n){const t=ms(n);for(const e of n.O_)t.m_(e.mutations)}async function tT(n,t,e){const s=n.O_.shift(),r=yd.from(s,t,e);await P_(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Nc(n)}async function eT(n,t){t&&ms(n).V_&&await async function(s,r){if(function(o){return zw(o)&&o!==$.ABORTED}(r.code)){const i=s.O_.shift();ms(s).s_(),await P_(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Nc(s)}}(n,t),D_(n)&&M_(n)}async function ep(n,t){const e=ot(n);e.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const s=ur(e);e.L_.add(3),await ko(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Oc(e)}async function nT(n,t){const e=ot(n);t?(e.L_.delete(2),await Oc(e)):t||(e.L_.add(2),await ko(e),e.q_.set("Unknown"))}function ei(n){return n.K_||(n.K_=function(e,s,r){const i=ot(e);return i.w_(),new UE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Eo:WE.bind(null,n),Ro:GE.bind(null,n),mo:YE.bind(null,n),d_:KE.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Sd(n)?Ad(n):n.q_.set("Unknown")):(await n.K_.stop(),R_(n))})),n.K_}function ms(n){return n.U_||(n.U_=function(e,s,r){const i=ot(e);return i.w_(),new jE(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:JE.bind(null,n),mo:eT.bind(null,n),f_:ZE.bind(null,n),g_:tT.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Nc(n)):(await n.U_.stop(),n.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,s,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,r,i){const o=Date.now()+s,a=new kd(t,e,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cd(n,t){if(Bn("AsyncQueue",`${t}: ${n}`),Io(n))return new G($.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t){this.comparator=t?(e,s)=>t(e,s)||J.comparator(e.key,s.key):(e,s)=>J.comparator(e.key,s.key),this.keyedMap=Oi(),this.sortedSet=new zt(this.comparator)}static emptySet(t){return new Lr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Lr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new Lr;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.W_=new zt(J.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):st():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Wr{constructor(t,e,s,r,i,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,s,r,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Wr(t,e,Lr.emptySet(e),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==s[r].type||!e[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class rT{constructor(){this.queries=sp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const r=ot(e),i=r.queries;r.queries=sp(),i.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new G($.ABORTED,"Firestore shutting down"))}}function sp(){return new ti(n=>n_(n),kc)}async function O_(n,t){const e=ot(n);let s=3;const r=t.query;let i=e.queries.get(r);i?!i.H_()&&t.J_()&&(s=2):(i=new sT,s=t.J_()?0:1);try{switch(s){case 0:i.z_=await e.onListen(r,!0);break;case 1:i.z_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const a=Cd(o,`Initialization of query '${Ar(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&Rd(e)}async function N_(n,t){const e=ot(n),s=t.query;let r=3;const i=e.queries.get(s);if(i){const o=i.j_.indexOf(t);o>=0&&(i.j_.splice(o,1),i.j_.length===0?r=t.J_()?0:1:!i.H_()&&t.J_()&&(r=2))}switch(r){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function iT(n,t){const e=ot(n);let s=!1;for(const r of t){const i=r.query,o=e.queries.get(i);if(o){for(const a of o.j_)a.X_(r)&&(s=!0);o.z_=r}}s&&Rd(e)}function oT(n,t,e){const s=ot(n),r=s.queries.get(t);if(r)for(const i of r.j_)i.onError(e);s.queries.delete(t)}function Rd(n){n.Y_.forEach(t=>{t.next()})}var Iu,rp;(rp=Iu||(Iu={})).ea="default",rp.Cache="cache";class L_{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Wr(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Wr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Iu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t){this.key=t}}class F_{constructor(t){this.key=t}}class aT{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ft(),this.mutatedKeys=ft(),this.Aa=s_(t),this.Ra=new Lr(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new np,r=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((d,h)=>{const f=r.get(d),m=Cc(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let _=!1;f&&m?f.data.isEqual(m.data)?g!==v&&(s.track({type:3,doc:m}),_=!0):this.ga(f,m)||(s.track({type:2,doc:m}),_=!0,(c&&this.Aa(m,c)>0||l&&this.Aa(m,l)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),_=!0):f&&!m&&(s.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(m?(o=o.add(m),i=v?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:a,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,r){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((d,h)=>function(m,g){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return st()}};return v(m)-v(g)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(s),r=r!=null&&r;const a=e&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,l=c!==this.Ea;return this.Ea=c,o.length!==0||l?{snapshot:new Wr(this.query,t.Ra,i,o,t.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new np,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=ft(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new F_(s))}),this.da.forEach(s=>{t.has(s)||e.push(new V_(s))}),e}ba(t){this.Ta=t.Ts,this.da=ft();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Wr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class cT{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class lT{constructor(t){this.key=t,this.va=!1}}class uT{constructor(t,e,s,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ti(a=>n_(a),kc),this.Ma=new Map,this.xa=new Set,this.Oa=new zt(J.comparator),this.Na=new Map,this.La=new xd,this.Ba={},this.ka=new Map,this.qa=qr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dT(n,t,e=!0){const s=H_(n);let r;const i=s.Fa.get(t);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await $_(s,t,e,!0),r}async function hT(n,t){const e=H_(n);await $_(e,t,!0,!1)}async function $_(n,t,e,s){const r=await OE(n.localStore,pn(t)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,e);let a;return s&&(a=await fT(n,t,i,o==="current",r.resumeToken)),n.isPrimaryClient&&e&&k_(n.remoteStore,r),a}async function fT(n,t,e,s,r){n.Ka=(h,f,m)=>async function(v,_,I,w){let S=_.view.ma(I);S.ns&&(S=await Jf(v.localStore,_.query,!1).then(({documents:E})=>_.view.ma(E,S)));const P=w&&w.targetChanges.get(_.targetId),R=w&&w.targetMismatches.get(_.targetId)!=null,M=_.view.applyChanges(S,v.isPrimaryClient,P,R);return op(v,_.targetId,M.wa),M.snapshot}(n,h,f,m);const i=await Jf(n.localStore,t,!0),o=new aT(t,i.Ts),a=o.ma(i.documents),c=So.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",r),l=o.applyChanges(a,n.isPrimaryClient,c);op(n,e,l.wa);const d=new cT(t,e,o);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),l.snapshot}async function pT(n,t,e){const s=ot(n),r=s.Fa.get(t),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(o=>!kc(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Tu(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),e&&Td(s.remoteStore,r.targetId),Au(s,r.targetId)}).catch(To)):(Au(s,r.targetId),await Tu(s.localStore,r.targetId,!0))}async function mT(n,t){const e=ot(n),s=e.Fa.get(t),r=e.Ma.get(s.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),Td(e.remoteStore,s.targetId))}async function gT(n,t,e){const s=ET(n);try{const r=await function(o,a){const c=ot(o),l=$t.now(),d=a.reduce((m,g)=>m.add(g.key),ft());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=Un(),v=ft();return c.cs.getEntries(m,d).next(_=>{g=_,g.forEach((I,w)=>{w.isValidDocument()||(v=v.add(I))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,g)).next(_=>{h=_;const I=[];for(const w of a){const S=Fw(w,h.get(w.key).overlayedDocument);S!=null&&I.push(new ys(w.key,S,Yg(S.value.mapValue),He.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,I,a)}).next(_=>{f=_;const I=_.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(m,_.batchId,I)})}).then(()=>({batchId:f.batchId,changes:i_(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let l=o.Ba[o.currentUser.toKey()];l||(l=new zt(xt)),l=l.insert(a,c),o.Ba[o.currentUser.toKey()]=l}(s,r.batchId,e),await Co(s,r.changes),await Nc(s.remoteStore)}catch(r){const i=Cd(r,"Failed to persist write");e.reject(i)}}async function B_(n,t){const e=ot(n);try{const s=await PE(e.localStore,t);t.targetChanges.forEach((r,i)=>{const o=e.Na.get(i);o&&(Ct(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?Ct(o.va):r.removedDocuments.size>0&&(Ct(o.va),o.va=!1))}),await Co(e,s,t)}catch(s){await To(s)}}function ip(n,t,e){const s=ot(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const r=[];s.Fa.forEach((i,o)=>{const a=o.view.Z_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=ot(o);c.onlineState=a;let l=!1;c.queries.forEach((d,h)=>{for(const f of h.j_)f.Z_(a)&&(l=!0)}),l&&Rd(c)}(s.eventManager,t),r.length&&s.Ca.d_(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function _T(n,t,e){const s=ot(n);s.sharedClientState.updateQueryState(t,"rejected",e);const r=s.Na.get(t),i=r&&r.key;if(i){let o=new zt(J.comparator);o=o.insert(i,Ee.newNoDocument(i,rt.min()));const a=ft().add(i),c=new Dc(rt.min(),new Map,new zt(xt),o,a);await B_(s,c),s.Oa=s.Oa.remove(i),s.Na.delete(t),Pd(s)}else await Tu(s.localStore,t,!1).then(()=>Au(s,t,e)).catch(To)}async function yT(n,t){const e=ot(n),s=t.batch.batchId;try{const r=await RE(e.localStore,t);j_(e,s,null),U_(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Co(e,r)}catch(r){await To(r)}}async function vT(n,t,e){const s=ot(n);try{const r=await function(o,a){const c=ot(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ct(h!==null),d=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>c.localDocuments.getDocuments(l,d))})}(s.localStore,t);j_(s,t,e),U_(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Co(s,r)}catch(r){await To(r)}}function U_(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function j_(n,t,e){const s=ot(n);let r=s.Ba[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(e?i.reject(e):i.resolve(),r=r.remove(t)),s.Ba[s.currentUser.toKey()]=r}}function Au(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||z_(n,s)})}function z_(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(Td(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Pd(n))}function op(n,t,e){for(const s of e)s instanceof V_?(n.La.addReference(s.key,t),bT(n,s)):s instanceof F_?(K("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||z_(n,s.key)):st()}function bT(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(K("SyncEngine","New document in limbo: "+e),n.xa.add(s),Pd(n))}function Pd(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new J(Nt.fromString(t)),s=n.qa.next();n.Na.set(s,new lT(e)),n.Oa=n.Oa.insert(e,s),k_(n.remoteStore,new ns(pn(md(e.path)),s,"TargetPurposeLimboResolution",ld.oe))}}async function Co(n,t,e){const s=ot(n),r=[],i=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,t,e).then(l=>{var d;if((l||e)&&s.isPrimaryClient){const h=l?!l.fromCache:(d=e==null?void 0:e.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(l){r.push(l);const h=Ed.Wi(c.targetId,l);i.push(h)}}))}),await Promise.all(o),s.Ca.d_(r),await async function(c,l){const d=ot(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>U.forEach(l,f=>U.forEach(f.$i,m=>d.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>U.forEach(f.Ui,m=>d.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Io(h))throw h;K("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=d.os.get(f),g=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(g);d.os=d.os.insert(f,v)}}}(s.localStore,i))}async function xT(n,t){const e=ot(n);if(!e.currentUser.isEqual(t)){K("SyncEngine","User change. New user:",t.toKey());const s=await T_(e.localStore,t);e.currentUser=t,function(i,o){i.ka.forEach(a=>{a.forEach(c=>{c.reject(new G($.CANCELLED,o))})}),i.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Co(e,s.hs)}}function wT(n,t){const e=ot(n),s=e.Na.get(t);if(s&&s.va)return ft().add(s.key);{let r=ft();const i=e.Ma.get(t);if(!i)return r;for(const o of i){const a=e.Fa.get(o);r=r.unionWith(a.view.Va)}return r}}function H_(n){const t=ot(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=B_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=wT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_T.bind(null,t),t.Ca.d_=iT.bind(null,t.eventManager),t.Ca.$a=oT.bind(null,t.eventManager),t}function ET(n){const t=ot(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vT.bind(null,t),t}class rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Mc(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return CE(this.persistence,new SE,t.initialUser,this.serializer)}Ga(t){return new TE(wd.Zr,this.serializer)}Wa(t){return new LE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rc.provider={build:()=>new rc};class Su{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ip(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xT.bind(null,this.syncEngine),await nT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new rT}()}createDatastore(t){const e=Mc(t.databaseInfo.databaseId),s=function(i){return new BE(i)}(t.databaseInfo);return function(i,o,a,c){return new zE(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,r,i,o,a){return new qE(s,r,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>ip(this.syncEngine,e,0),function(){return tp.D()?new tp:new VE}())}createSyncEngine(t,e){return function(r,i,o,a,c,l,d){const h=new uT(r,i,o,a,c,l);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const i=ot(r);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ko(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Su.provider={build:()=>new Su};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class q_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Bn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(t,e,s,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=r,this.user=xe.UNAUTHENTICATED,this.clientId=cd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Cd(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Nl(n,t){n.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await T_(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ap(n,t){n.asyncQueue.verifyOperationInProgress();const e=await IT(n);K("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>ep(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>ep(t.remoteStore,r)),n._onlineComponents=t}async function IT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;tr("Error using user provided cache. Falling back to memory cache: "+e),await Nl(n,new rc)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Nl(n,new rc);return n._offlineComponents}async function W_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await ap(n,n._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await ap(n,new Su))),n._onlineComponents}function AT(n){return W_(n).then(t=>t.syncEngine)}async function G_(n){const t=await W_(n),e=t.eventManager;return e.onListen=dT.bind(null,t.syncEngine),e.onUnlisten=pT.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=hT.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=mT.bind(null,t.syncEngine),e}function ST(n,t,e={}){const s=new Ln;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const d=new q_({next:f=>{d.Za(),o.enqueueAndForget(()=>N_(i,h));const m=f.docs.has(a);!m&&f.fromCache?l.reject(new G($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&c&&c.source==="server"?l.reject(new G($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new L_(md(a.path),d,{includeMetadataChanges:!0,_a:!0});return O_(i,h)}(await G_(n),n.asyncQueue,t,e,s)),s.promise}function kT(n,t,e={}){const s=new Ln;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const d=new q_({next:f=>{d.Za(),o.enqueueAndForget(()=>N_(i,h)),f.fromCache&&c.source==="server"?l.reject(new G($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new L_(a,d,{includeMetadataChanges:!0,_a:!0});return O_(i,h)}(await G_(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function K_(n,t,e){if(!e)throw new G($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Q_(n,t,e,s){if(t===!0&&s===!0)throw new G($.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function lp(n){if(!J.isDocumentKey(n))throw new G($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function up(n){if(J.isDocumentKey(n))throw new G($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Lc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":st()}function We(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new G($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Lc(n);throw new G($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function CT(n,t){if(t<=0)throw new G($.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new G($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new G($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Q_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Y_((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vc{constructor(t,e,s,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new G($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dp(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new qg;switch(s.type){case"firstParty":return new X0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new G($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=cp.get(e);s&&(K("ComponentProvider","Removing Datastore"),cp.delete(e),s.terminate())}(this),Promise.resolve()}}function X_(n,t,e,s={}){var r;const i=(n=We(n,Vc))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=xe.MOCK_USER;else{a=Dg(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new G($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new xe(l)}n._authCredentials=new Y0(new Hg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new zn(this.firestore,t,this._query)}}class Ie{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ie(this.firestore,t,this._key)}}class Vn extends zn{constructor(t,e,s){super(t,e,md(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ie(this.firestore,null,new J(t))}withConverter(t){return new Vn(this.firestore,t,this._path)}}function _t(n,t,...e){if(n=Kt(n),K_("collection","path",t),n instanceof Vc){const s=Nt.fromString(t,...e);return up(s),new Vn(n,null,s)}{if(!(n instanceof Ie||n instanceof Vn))throw new G($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Nt.fromString(t,...e));return up(s),new Vn(n.firestore,null,s)}}function re(n,t,...e){if(n=Kt(n),arguments.length===1&&(t=cd.newId()),K_("doc","path",t),n instanceof Vc){const s=Nt.fromString(t,...e);return lp(s),new Ie(n,null,new J(s))}{if(!(n instanceof Ie||n instanceof Vn))throw new G($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Nt.fromString(t,...e));return lp(s),new Ie(n.firestore,n instanceof Vn?n.converter:null,new J(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new A_(this,"async_queue_retry"),this.Vu=()=>{const s=Ol();s&&K("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=Ol();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Ol();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Ln;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Io(t))throw t;K("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Bn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const r=kd.createAndSchedule(this,t,e,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&st()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class vs extends Vc{constructor(t,e,s,r){super(t,e,s,r),this.type="firestore",this._queue=new hp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hp(t),this._firestoreClient=void 0,await t}}}function J_(n,t){const e=typeof n=="object"?n:od(),s=typeof n=="string"?n:"(default)",r=Ac(e,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Cg("firestore");i&&X_(r,...i)}return r}function Fc(n){if(n._terminated)throw new G($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||RT(n),n._firestoreClient}function RT(n){var t,e,s;const r=n._freezeSettings(),i=function(a,c,l,d){return new uw(a,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Y_(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new TT(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new sr(de.fromBase64String(t))}catch(e){throw new G($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new sr(de.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new G($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new G($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new G($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return xt(this._lat,t._lat)||xt(this._long,t._long)}}/**
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
 */class Uc{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=/^__.*__$/;class DT{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new ys(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ao(t,this.data,e,this.fieldTransforms)}}class Z_{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new ys(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ty(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw st()}}class Dd{constructor(t,e,s,r,i,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Dd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:s,xu:!1});return r.Ou(t),r}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.Fu({path:s,xu:!1});return r.vu(),r}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return ic(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(ty(this.Cu)&&PT.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class MT{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||Mc(t)}Qu(t,e,s,r=!1){return new Dd({Cu:t,methodName:e,qu:s,path:le.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jc(n){const t=n._freezeSettings(),e=Mc(n._databaseId);return new MT(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ey(n,t,e,s,r,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,t,e,r);Md("Data must be an object, but it was:",o,s);const a=ny(s,o);let c,l;if(i.merge)c=new $e(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const h of i.mergeFields){const f=ku(t,h,e);if(!o.contains(f))throw new G($.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ry(d,f)||d.push(f)}c=new $e(d),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new DT(new Oe(a),c,l)}class zc extends $c{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof zc}}function OT(n,t,e,s){const r=n.Qu(1,t,e);Md("Data must be an object, but it was:",r,s);const i=[],o=Oe.empty();lr(s,(c,l)=>{const d=Od(t,c,e);l=Kt(l);const h=r.Nu(d);if(l instanceof zc)i.push(d);else{const f=Po(l,h);f!=null&&(i.push(d),o.set(d,f))}});const a=new $e(i);return new Z_(o,a,r.fieldTransforms)}function NT(n,t,e,s,r,i){const o=n.Qu(1,t,e),a=[ku(t,s,e)],c=[r];if(i.length%2!=0)throw new G($.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(ku(t,i[f])),c.push(i[f+1]);const l=[],d=Oe.empty();for(let f=a.length-1;f>=0;--f)if(!ry(l,a[f])){const m=a[f];let g=c[f];g=Kt(g);const v=o.Nu(m);if(g instanceof zc)l.push(m);else{const _=Po(g,v);_!=null&&(l.push(m),d.set(m,_))}}const h=new $e(l);return new Z_(d,h,o.fieldTransforms)}function LT(n,t,e,s=!1){return Po(e,n.Qu(s?4:3,t))}function Po(n,t){if(sy(n=Kt(n)))return Md("Unsupported field value:",t,n),ny(n,t);if(n instanceof $c)return function(s,r){if(!ty(r.Cu))throw r.Bu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Po(a,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,t)}return function(s,r){if((s=Kt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Dw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=$t.fromDate(s);return{timestampValue:nc(r.serializer,i)}}if(s instanceof $t){const i=new $t(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:nc(r.serializer,i)}}if(s instanceof Bc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof sr)return{bytesValue:__(r.serializer,s._byteString)};if(s instanceof Ie){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Uc)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return gd(a.serializer,c)})}}}}}}(s,r);throw r.Bu(`Unsupported field value: ${Lc(s)}`)}(n,t)}function ny(n,t){const e={};return Wg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):lr(n,(s,r)=>{const i=Po(r,t.Mu(s));i!=null&&(e[s]=i)}),{mapValue:{fields:e}}}function sy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $t||n instanceof Bc||n instanceof sr||n instanceof Ie||n instanceof $c||n instanceof Uc)}function Md(n,t,e){if(!sy(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const s=Lc(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function ku(n,t,e){if((t=Kt(t))instanceof Ro)return t._internalPath;if(typeof t=="string")return Od(n,t);throw ic("Field path arguments must be of type string or ",n,!1,void 0,e)}const VT=new RegExp("[~\\*/\\[\\]]");function Od(n,t,e){if(t.search(VT)>=0)throw ic(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ro(...t.split("."))._internalPath}catch{throw ic(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ic(n,t,e,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new G($.INVALID_ARGUMENT,a+n+c)}function ry(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t,e,s,r,i){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new FT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Hc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class FT extends iy{data(){return super.data()}}function Hc(n,t){return typeof t=="string"?Od(n,t):t instanceof Ro?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nd{}class qc extends Nd{}function Gt(n,t,...e){let s=[];t instanceof Nd&&s.push(t),s=s.concat(e),function(i){const o=i.filter(c=>c instanceof Wc).length,a=i.filter(c=>c instanceof Do).length;if(o>1||o>0&&a>0)throw new G($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Do extends qc{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Do(t,e,s)}_apply(t){const e=this._parse(t);return oy(t._query,e),new zn(t.firestore,t.converter,vu(t._query,e))}_parse(t){const e=jc(t.firestore);return function(i,o,a,c,l,d,h){let f;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){pp(h,d);const m=[];for(const g of h)m.push(fp(c,i,g));f={arrayValue:{values:m}}}else f=fp(c,i,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||pp(h,d),f=LT(a,o,h,d==="in"||d==="not-in");return se.create(l,d,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Rt(n,t,e){const s=t,r=Hc("where",n);return Do._create(r,s,e)}class Wc extends Nd{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Wc(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:tn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)oy(o,c),o=vu(o,c)}(t._query,e),new zn(t.firestore,t.converter,vu(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gc extends qc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Gc(t,e)}_apply(t){const e=function(r,i,o){if(r.startAt!==null)throw new G($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new G($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new io(i,o)}(t._query,this._field,this._direction);return new zn(t.firestore,t.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Zr(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,e))}}function Ld(n,t="asc"){const e=t,s=Hc("orderBy",n);return Gc._create(s,e)}class Yc extends qc{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new Yc(t,e,s)}_apply(t){return new zn(t.firestore,t.converter,Za(t._query,this._limit,this._limitType))}}function oc(n){return CT("limit",n),Yc._create("limit",n,"F")}function fp(n,t,e){if(typeof(e=Kt(e))=="string"){if(e==="")throw new G($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e_(t)&&e.indexOf("/")!==-1)throw new G($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(Nt.fromString(e));if(!J.isDocumentKey(s))throw new G($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Nf(n,new J(s))}if(e instanceof Ie)return Nf(n,e._key);throw new G($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(e)}.`)}function pp(n,t){if(!Array.isArray(n)||n.length===0)throw new G($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function oy(n,t){const e=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new G($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new G($.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ay{convertValue(t,e="none"){switch(nr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Jt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(er(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw st()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return lr(t,(r,i)=>{s[r]=this.convertValue(i,e)}),s}convertVectorValue(t){var e,s,r;const i=(r=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Jt(o.doubleValue));return new Uc(i)}convertGeoPoint(t){return new Bc(Jt(t.latitude),Jt(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=dd(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(so(t));default:return null}}convertTimestamp(t){const e=ps(t);return new $t(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Nt.fromString(t);Ct(E_(s));const r=new jr(s.get(1),s.get(3)),i=new J(s.popFirst(5));return r.isEqual(e)||Bn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vd extends iy{constructor(t,e,s,r,i,o){super(t,e,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Wi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Hc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class Wi extends Vd{data(t={}){return super.data(t)}}class ly{constructor(t,e,s,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Dr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new Wi(this._firestore,this._userDataWriter,s.key,s,new Dr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new G($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new Wi(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Dr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Wi(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Dr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,d=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:BT(a.type),doc:c,oldIndex:l,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function BT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return st()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n){n=We(n,Ie);const t=We(n.firestore,vs);return ST(Fc(t),n._key).then(e=>UT(t,n,e))}class uy extends ay{constructor(t){super(),this.firestore=t}convertBytes(t){return new sr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ie(this.firestore,null,e)}}function bt(n){n=We(n,zn);const t=We(n.firestore,vs),e=Fc(t),s=new uy(t);return $T(n._query),kT(e,n._query).then(r=>new ly(t,s,n,r))}function dy(n,t,e){n=We(n,Ie);const s=We(n.firestore,vs),r=cy(n.converter,t);return Mo(s,[ey(jc(s),"setDoc",n._key,r,n.converter!==null,e).toMutation(n._key,He.none())])}function qe(n,t,e,...s){n=We(n,Ie);const r=We(n.firestore,vs),i=jc(r);let o;return o=typeof(t=Kt(t))=="string"||t instanceof Ro?NT(i,"updateDoc",n._key,t,e,s):OT(i,"updateDoc",n._key,t),Mo(r,[o.toMutation(n._key,He.exists(!0))])}function Fd(n){return Mo(We(n.firestore,vs),[new _d(n._key,He.none())])}function dr(n,t){const e=We(n.firestore,vs),s=re(n),r=cy(n.converter,t);return Mo(e,[ey(jc(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,He.exists(!1))]).then(()=>s)}function Mo(n,t){return function(s,r){const i=new Ln;return s.asyncQueue.enqueueAndForget(async()=>gT(await AT(s),r,i)),i.promise}(Fc(n),t)}function UT(n,t,e){const s=e.docs.get(t._key),r=new uy(n);return new Vd(n,r,t._key,s,new Dr(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(r){Jr=r})(cr),Js(new hs("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new vs(new K0(s.getProvider("auth-internal")),new Z0(s.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new G($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jr(l.options.projectId,d)}(o,r),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),fn(Rf,"4.7.3",t),fn(Rf,"4.7.3","esm2017")})();const jT=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:ay,Bytes:sr,CollectionReference:Vn,DocumentReference:Ie,DocumentSnapshot:Vd,FieldPath:Ro,FieldValue:$c,Firestore:vs,FirestoreError:G,GeoPoint:Bc,Query:zn,QueryCompositeFilterConstraint:Wc,QueryConstraint:qc,QueryDocumentSnapshot:Wi,QueryFieldFilterConstraint:Do,QueryLimitConstraint:Yc,QueryOrderByConstraint:Gc,QuerySnapshot:ly,SnapshotMetadata:Dr,Timestamp:$t,VectorValue:Uc,_AutoId:cd,_ByteString:de,_DatabaseId:jr,_DocumentKey:J,_EmptyAuthCredentialsProvider:qg,_FieldPath:le,_cast:We,_logWarn:tr,_validateIsNotUsedTogether:Q_,addDoc:dr,collection:_t,connectFirestoreEmulator:X_,deleteDoc:Fd,doc:re,ensureFirestoreConfigured:Fc,executeWrite:Mo,getDoc:co,getDocs:bt,getFirestore:J_,limit:oc,orderBy:Ld,query:Gt,setDoc:dy,updateDoc:qe,where:Rt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ht extends xn{constructor(t,e,s=0){super(Ll(t),`Firebase Storage: ${e} (${Ll(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ht.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ll(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vt||(Vt={}));function Ll(n){return"storage/"+n}function $d(){const n="An unknown error occurred, please check the error payload for server response.";return new Ht(Vt.UNKNOWN,n)}function WT(n){return new Ht(Vt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function GT(n){return new Ht(Vt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function YT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ht(Vt.UNAUTHENTICATED,n)}function KT(){return new Ht(Vt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function QT(n){return new Ht(Vt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function py(){return new Ht(Vt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function my(){return new Ht(Vt.CANCELED,"User canceled the upload/download.")}function XT(n){return new Ht(Vt.INVALID_URL,"Invalid URL '"+n+"'.")}function JT(n){return new Ht(Vt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ZT(){return new Ht(Vt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fy+"' property when initializing the app?")}function gy(){return new Ht(Vt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tI(){return new Ht(Vt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function eI(){return new Ht(Vt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nI(n){return new Ht(Vt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cu(n){return new Ht(Vt.INVALID_ARGUMENT,n)}function _y(){return new Ht(Vt.APP_DELETED,"The Firebase app was deleted.")}function sI(n){return new Ht(Vt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gi(n,t){return new Ht(Vt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function vi(n){throw new Ht(Vt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Be.makeFromUrl(t,e)}catch{return new Be(t,"")}if(s.path==="")return s;throw JT(t)}static makeFromUrl(t,e){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(P){P.path_=decodeURIComponent(P.path)}const d="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${d}/b/${r}/o${f}`,"i"),g={bucket:1,path:3},v=e===hy?"(?:storage.googleapis.com|storage.cloud.google.com)":e,_="([^?#]*)",I=new RegExp(`^https?://${v}/${r}/${_}`,"i"),S=[{regex:a,indices:c,postModify:i},{regex:m,indices:g,postModify:l},{regex:I,indices:{bucket:1,path:2},postModify:l}];for(let P=0;P<S.length;P++){const R=S[P],M=R.regex.exec(t);if(M){const E=M[R.indices.bucket];let b=M[R.indices.path];b||(b=""),s=new Be(E,b),R.postModify(s);break}}if(s==null)throw XT(t);return s}}class rI{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(n,t,e){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function d(..._){l||(l=!0,t.apply(null,_))}function h(_){r=setTimeout(()=>{r=null,n(m,c())},_)}function f(){i&&clearTimeout(i)}function m(_,...I){if(l){f();return}if(_){f(),d.call(null,_,...I);return}if(c()||o){f(),d.call(null,_,...I);return}s<64&&(s*=2);let S;a===1?(a=2,S=0):S=(s+Math.random())*1e3,h(S)}let g=!1;function v(_){g||(g=!0,f(),!l&&(r!==null?(_||(a=2),clearTimeout(r),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},e),v}function oI(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n){return n!==void 0}function cI(n){return typeof n=="function"}function lI(n){return typeof n=="object"&&!Array.isArray(n)}function Kc(n){return typeof n=="string"||n instanceof String}function mp(n){return Bd()&&n instanceof Blob}function Bd(){return typeof Blob<"u"}function gp(n,t,e,s){if(s<t)throw Cu(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw Cu(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function yy(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const r=t(s)+"="+t(n[s]);e=e+r+"&"}return e=e.slice(0,-1),e}var qs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(qs||(qs={}));/**
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
 */class uI{constructor(t,e,s,r,i,o,a,c,l,d,h,f=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new ha(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===qs.NO_ERROR,c=i.getStatus();if(!a||vy(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===qs.ABORT;s(!1,new ha(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ha(l,i))})},e=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());aI(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=$d();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?_y():my();o(c)}else{const c=py();o(c)}};this.canceled_?e(!1,new ha(!1,null,!0)):this.backoffId_=iI(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&oI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ha{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function dI(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function hI(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function fI(n,t){t&&(n["X-Firebase-GMPID"]=t)}function pI(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function mI(n,t,e,s,r,i,o=!0){const a=yy(n.urlParams),c=n.url+a,l=Object.assign({},n.headers);return fI(l,t),dI(l,e),hI(l,i),pI(l,s),new uI(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _I(...n){const t=gI();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(Bd())return new Blob(n);throw new Ht(Vt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yI(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */const hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vl{constructor(t,e){this.data=t,this.contentType=e||null}}function bI(n,t){switch(n){case hn.RAW:return new Vl(by(t));case hn.BASE64:case hn.BASE64URL:return new Vl(xy(n,t));case hn.DATA_URL:return new Vl(wI(t),EI(t))}throw $d()}function by(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const i=s,o=n.charCodeAt(++e);s=65536|(i&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function xI(n){let t;try{t=decodeURIComponent(n)}catch{throw Gi(hn.DATA_URL,"Malformed data URL.")}return by(t)}function xy(n,t){switch(n){case hn.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw Gi(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case hn.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw Gi(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=vI(t)}catch(r){throw r.message.includes("polyfill")?r:Gi(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}class wy{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Gi(hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=TI(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function wI(n){const t=new wy(n);return t.base64?xy(hn.BASE64,t.rest):xI(t.rest)}function EI(n){return new wy(n).contentType}function TI(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){let s=0,r="";mp(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(mp(this.data_)){const s=this.data_,r=yI(s,t,e);return r===null?null:new Xn(r)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new Xn(s,!0)}}static getBlob(...t){if(Bd()){const e=t.map(s=>s instanceof Xn?s.data_:s);return new Xn(_I.apply(null,e))}else{const e=t.map(o=>Kc(o)?bI(hn.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Xn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function SI(n,t){return t}class Pe{constructor(t,e,s,r){this.server=t,this.local=e||t,this.writable=!!s,this.xform=r||SI}}let fa=null;function kI(n){return!Kc(n)||n.length<2?n:Ty(n)}function Iy(){if(fa)return fa;const n=[];n.push(new Pe("bucket")),n.push(new Pe("generation")),n.push(new Pe("metageneration")),n.push(new Pe("name","fullPath",!0));function t(i,o){return kI(o)}const e=new Pe("name");e.xform=t,n.push(e);function s(i,o){return o!==void 0?Number(o):o}const r=new Pe("size");return r.xform=s,n.push(r),n.push(new Pe("timeCreated")),n.push(new Pe("updated")),n.push(new Pe("md5Hash",null,!0)),n.push(new Pe("cacheControl",null,!0)),n.push(new Pe("contentDisposition",null,!0)),n.push(new Pe("contentEncoding",null,!0)),n.push(new Pe("contentLanguage",null,!0)),n.push(new Pe("contentType",null,!0)),n.push(new Pe("metadata","customMetadata",!0)),fa=n,fa}function CI(n,t){function e(){const s=n.bucket,r=n.fullPath,i=new Be(s,r);return t._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:e})}function RI(n,t,e){const s={};s.type="file";const r=e.length;for(let i=0;i<r;i++){const o=e[i];s[o.local]=o.xform(s,t[o.server])}return CI(s,n),s}function Ay(n,t,e){const s=Ey(t);return s===null?null:RI(n,s,e)}function PI(n,t,e,s){const r=Ey(t);if(r===null||!Kc(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const d=n.bucket,h=n.fullPath,f="/b/"+o(d)+"/o/"+o(h),m=Oo(f,e,s),g=yy({alt:"media",token:l});return m+g})[0]}function Sy(n,t){const e={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(e[i.server]=n[i.local])}return JSON.stringify(e)}class ni{constructor(t,e,s,r){this.url=t,this.method=e,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n){if(!n)throw $d()}function Ud(n,t){function e(s,r){const i=Ay(n,r,t);return Fn(i!==null),i}return e}function DI(n,t){function e(s,r){const i=Ay(n,r,t);return Fn(i!==null),PI(i,r,n.host,n._protocol)}return e}function No(n){function t(e,s){let r;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?r=KT():r=YT():e.getStatus()===402?r=GT(n.bucket):e.getStatus()===403?r=QT(n.path):r=s,r.status=e.getStatus(),r.serverResponse=s.serverResponse,r}return t}function ky(n){const t=No(n);function e(s,r){let i=t(s,r);return s.getStatus()===404&&(i=WT(n.path)),i.serverResponse=r.serverResponse,i}return e}function MI(n,t,e){const s=t.fullServerUrl(),r=Oo(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new ni(r,i,Ud(n,e),o);return a.errorHandler=ky(t),a}function OI(n,t,e){const s=t.fullServerUrl(),r=Oo(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new ni(r,i,DI(n,e),o);return a.errorHandler=ky(t),a}function NI(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function Cy(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=NI(null,t)),s}function LI(n,t,e,s,r){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let P=0;P<2;P++)S=S+Math.random().toString().slice(2);return S}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Cy(t,s,r),d=Sy(l,e),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=Xn.getBlob(h,s,f);if(m===null)throw gy();const g={name:l.fullPath},v=Oo(i,n.host,n._protocol),_="POST",I=n.maxUploadRetryTime,w=new ni(v,_,Ud(n,e),I);return w.urlParams=g,w.headers=o,w.body=m.uploadData(),w.errorHandler=No(t),w}class ac{constructor(t,e,s,r){this.current=t,this.total=e,this.finalized=!!s,this.metadata=r||null}}function jd(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{Fn(!1)}return Fn(!!e&&(t||["active"]).indexOf(e)!==-1),e}function VI(n,t,e,s,r){const i=t.bucketOnlyServerUrl(),o=Cy(t,s,r),a={name:o.fullPath},c=Oo(i,n.host,n._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Sy(o,e),f=n.maxUploadRetryTime;function m(v){jd(v);let _;try{_=v.getResponseHeader("X-Goog-Upload-URL")}catch{Fn(!1)}return Fn(Kc(_)),_}const g=new ni(c,l,m,f);return g.urlParams=a,g.headers=d,g.body=h,g.errorHandler=No(t),g}function FI(n,t,e,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const d=jd(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Fn(!1)}h||Fn(!1);const f=Number(h);return Fn(!isNaN(f)),new ac(f,s.size(),d==="final")}const o="POST",a=n.maxUploadRetryTime,c=new ni(e,o,i,a);return c.headers=r,c.errorHandler=No(t),c}const _p=256*1024;function $I(n,t,e,s,r,i,o,a){const c=new ac(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw tI();const l=c.total-c.current;let d=l;r>0&&(d=Math.min(d,r));const h=c.current,f=h+d;let m="";d===0?m="finalize":l===d?m="upload, finalize":m="upload";const g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,f);if(v===null)throw gy();function _(P,R){const M=jd(P,["active","final"]),E=c.current+d,b=s.size();let x;return M==="final"?x=Ud(t,i)(P,R):x=null,new ac(E,b,M==="final",x)}const I="POST",w=t.maxUploadRetryTime,S=new ni(e,I,_,w);return S.headers=g,S.body=v.uploadData(),S.progressCallback=a||null,S.errorHandler=No(n),S}const Me={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Fl(n){switch(n){case"running":case"pausing":case"canceling":return Me.RUNNING;case"paused":return Me.PAUSED;case"success":return Me.SUCCESS;case"canceled":return Me.CANCELED;case"error":return Me.ERROR;default:return Me.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function br(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class UI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qs.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qs.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qs.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,r){if(this.sent_)throw vi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class jI extends UI{initXhr(){this.xhr_.responseType="text"}}function Cr(){return new jI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=Iy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(Vt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(vy(r.status,[]))if(i)r=py();else{this.sleepTime=Math.max(this.sleepTime*2,qT),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(Vt.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=VI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Cr,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const r=FI(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,Cr,e,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=_p*this._chunkMultiplier,e=new ac(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=$I(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Cr,r,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){_p*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=MI(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,Cr,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=LI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Cr,t,e);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=my(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Fl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,r){const i=new BI(e||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Fl(this._state)){case Me.SUCCESS:br(this._resolve.bind(null,this.snapshot))();break;case Me.CANCELED:case Me.ERROR:const e=this._reject;br(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Fl(this._state)){case Me.RUNNING:case Me.PAUSED:t.next&&br(t.next.bind(t,this.snapshot))();break;case Me.SUCCESS:t.complete&&br(t.complete.bind(t))();break;case Me.CANCELED:case Me.ERROR:t.error&&br(t.error.bind(t,this._error))();break;default:t.error&&br(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e){this._service=t,e instanceof Be?this._location=e:this._location=Be.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new rr(t,e)}get root(){const t=new Be(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ty(this._location.path)}get storage(){return this._service}get parent(){const t=II(this._location.path);if(t===null)return null;const e=new Be(this._location.bucket,t);return new rr(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw sI(t)}}function HI(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new zI(n,new Xn(t),e)}function qI(n){n._throwIfRoot("getDownloadURL");const t=OI(n.storage,n._location,Iy());return n.storage.makeRequestWithTokens(t,Cr).then(e=>{if(e===null)throw eI();return e})}function WI(n,t){const e=AI(n._location.path,t),s=new Be(n._location.bucket,e);return new rr(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n){return/^[A-Za-z]+:\/\//.test(n)}function YI(n,t){return new rr(n,t)}function Ry(n,t){if(n instanceof zd){const e=n;if(e._bucket==null)throw ZT();const s=new rr(e,e._bucket);return t!=null?Ry(s,t):s}else return t!==void 0?WI(n,t):n}function KI(n,t){if(t&&GI(t)){if(n instanceof zd)return YI(n,t);throw Cu("To use ref(service, url), the first argument must be a Storage instance.")}else return Ry(n,t)}function yp(n,t){const e=t==null?void 0:t[fy];return e==null?null:Be.makeFromBucketSpec(e,n)}function QI(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:Dg(r,n.app.options.projectId))}class zd{constructor(t,e,s,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=hy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zT,this._maxUploadRetryTime=HT,this._requests=new Set,r!=null?this._bucket=Be.makeFromBucketSpec(r,this._host):this._bucket=yp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Be.makeFromBucketSpec(this._url,t):this._bucket=yp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){gp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){gp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new rr(this,t)}_makeRequest(t,e,s,r,i=!0){if(this._deleted)return new rI(_y());{const o=mI(t,this._appId,s,r,e,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,r).getPromise()}}const vp="@firebase/storage",bp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="storage";function XI(n,t,e){return n=Kt(n),HI(n,t,e)}function JI(n){return n=Kt(n),qI(n)}function ZI(n,t){return n=Kt(n),KI(n,t)}function tA(n=od(),t){n=Kt(n);const s=Ac(n,Py).getImmediate({identifier:t}),r=Cg("storage");return r&&eA(s,...r),s}function eA(n,t,e,s={}){QI(n,t,e,s)}function nA(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new zd(e,s,r,t,cr)}function sA(){Js(new hs(Py,nA,"PUBLIC").setMultipleInstances(!0)),fn(vp,bp,""),fn(vp,bp,"esm2017")}sA();function Hd(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(e[s[r]]=n[s[r]]);return e}function Dy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rA=Dy,My=new wo("auth","Firebase",Dy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new rd("@firebase/auth");function iA(n,...t){cc.logLevel<=mt.WARN&&cc.warn(`Auth (${cr}): ${n}`,...t)}function Na(n,...t){cc.logLevel<=mt.ERROR&&cc.error(`Auth (${cr}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n,...t){throw qd(n,...t)}function gn(n,...t){return qd(n,...t)}function Oy(n,t,e){const s=Object.assign(Object.assign({},rA()),{[t]:e});return new wo("auth","Firebase",s).create(t,{appName:n.name})}function us(n){return Oy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return My.create(n,...t)}function tt(n,t,...e){if(!n)throw qd(t,...e)}function Rn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Na(t),new Error(t)}function jn(n,t){n||Rn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function oA(){return xp()==="http:"||xp()==="https:"}function xp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lo{constructor(t,e){this.shortDelay=t,this.longDelay=e,jn(e>t,"Short delay should be less than long delay!"),this.isMobile=Ex()||Sx()}get(){return aA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n,t){jn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const uA=new Lo(3e4,6e4);function bs(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Hn(n,t,e,s,r={}){return Ly(n,r,async()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const a=Eo(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:t,headers:c},i);return Ix()||(l.referrerPolicy="no-referrer"),Ny.fetch()(Vy(n,n.config.apiHost,e,a),l)})}async function Ly(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},lA),t);try{const r=new hA(n),i=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pa(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw pa(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Oy(n,d,l);en(n,d)}}catch(r){if(r instanceof xn)throw r;en(n,"network-request-failed",{message:String(r)})}}async function Qc(n,t,e,s,r={}){const i=await Hn(n,t,e,s,r);return"mfaPendingCredential"in i&&en(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Vy(n,t,e,s){const r=`${t}${e}?${s}`;return n.config.emulator?Wd(n.config,r):`${n.config.apiScheme}://${r}`}function dA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hA{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(gn(this.auth,"network-request-failed")),uA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const r=gn(n,t,s);return r.customData._tokenResponse=e,r}function wp(n){return n!==void 0&&n.enterprise!==void 0}class fA{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return dA(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function pA(n,t){return Hn(n,"GET","/v2/recaptchaConfig",bs(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(n,t){return Hn(n,"POST","/v1/accounts:delete",t)}async function Fy(n,t){return Hn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gA(n,t=!1){const e=Kt(n),s=await e.getIdToken(t),r=Gd(s);tt(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Yi($l(r.auth_time)),issuedAtTime:Yi($l(r.iat)),expirationTime:Yi($l(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $l(n){return Number(n)*1e3}function Gd(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const r=Sg(e);return r?JSON.parse(r):(Na("Failed to decode base64 JWT payload"),null)}catch(r){return Na("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ep(n){const t=Gd(n);return tt(t,"internal-error"),tt(typeof t.exp<"u","internal-error"),tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof xn&&_A(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function _A({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function lc(n){var t;const e=n.auth,s=await n.getIdToken(),r=await lo(n,Fy(e,{idToken:s}));tt(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?$y(i.providerUserInfo):[],a=bA(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function vA(n){const t=Kt(n);await lc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function bA(n,t){return[...n.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function $y(n){return n.map(t=>{var{providerId:e}=t,s=Hd(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(n,t){const e=await Ly(n,{},async()=>{const s=Eo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=Vy(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ny.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function wA(n,t){return Hn(n,"POST","/v2/accounts:revokeToken",bs(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){tt(t.idToken,"internal-error"),tt(typeof t.idToken<"u","internal-error"),tt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ep(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){tt(t.length!==0,"internal-error");const e=Ep(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:r,expiresIn:i}=await xA(t,e);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:r,expirationTime:i}=e,o=new Vr;return s&&(tt(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),r&&(tt(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),i&&(tt(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n,t){tt(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Pn{constructor(t){var{uid:e,auth:s,stsTokenManager:r}=t,i=Hd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await lo(this,this.stsTokenManager.getToken(this.auth,t));return tt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return gA(this,t)}reload(){return vA(this)}_assign(t){this!==t&&(tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Pn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await lc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(us(this.auth));const t=await this.getIdToken();return await lo(this,mA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,r,i,o,a,c,l,d;const h=(s=e.displayName)!==null&&s!==void 0?s:void 0,f=(r=e.email)!==null&&r!==void 0?r:void 0,m=(i=e.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=e.photoURL)!==null&&o!==void 0?o:void 0,v=(a=e.tenantId)!==null&&a!==void 0?a:void 0,_=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,I=(l=e.createdAt)!==null&&l!==void 0?l:void 0,w=(d=e.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:P,isAnonymous:R,providerData:M,stsTokenManager:E}=e;tt(S&&E,t,"internal-error");const b=Vr.fromJSON(this.name,E);tt(typeof S=="string",t,"internal-error"),Kn(h,t.name),Kn(f,t.name),tt(typeof P=="boolean",t,"internal-error"),tt(typeof R=="boolean",t,"internal-error"),Kn(m,t.name),Kn(g,t.name),Kn(v,t.name),Kn(_,t.name),Kn(I,t.name),Kn(w,t.name);const x=new Pn({uid:S,auth:t,email:f,emailVerified:P,displayName:h,isAnonymous:R,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:b,createdAt:I,lastLoginAt:w});return M&&Array.isArray(M)&&(x.providerData=M.map(A=>Object.assign({},A))),_&&(x._redirectEventId=_),x}static async _fromIdTokenResponse(t,e,s=!1){const r=new Vr;r.updateFromServerResponse(e);const i=new Pn({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await lc(i),i}static async _fromGetAccountInfoResponse(t,e,s){const r=e.users[0];tt(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?$y(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Vr;a.updateFromIdToken(s);const c=new Pn({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Pu(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new Map;function Dn(n){jn(n instanceof Function,"Expected a class definition");let t=Tp.get(n);return t?(jn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Tp.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function La(n,t,e){return`firebase:${n}:${t}:${e}`}class Fr{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=La(this.userKey,r.apiKey,i),this.fullPersistenceKey=La("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Pn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new Fr(Dn(Ip),t,s);const r=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Dn(Ip);const o=La(s,t.config.apiKey,t.name);let a=null;for(const l of e)try{const d=await l._get(o);if(d){const h=Pn._fromJSON(t,d);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fr(i,t,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Fr(i,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Hy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wy(t))return"Blackberry";if(Gy(t))return"Webos";if(jy(t))return"Safari";if((t.includes("chrome/")||zy(t))&&!t.includes("edge/"))return"Chrome";if(qy(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Uy(n=Ae()){return/firefox\//i.test(n)}function jy(n=Ae()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zy(n=Ae()){return/crios\//i.test(n)}function Hy(n=Ae()){return/iemobile/i.test(n)}function qy(n=Ae()){return/android/i.test(n)}function Wy(n=Ae()){return/blackberry/i.test(n)}function Gy(n=Ae()){return/webos/i.test(n)}function Yd(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function EA(n=Ae()){var t;return Yd(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function TA(){return kx()&&document.documentMode===10}function Yy(n=Ae()){return Yd(n)||qy(n)||Gy(n)||Wy(n)||/windows phone/i.test(n)||Hy(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n,t=[]){let e;switch(n){case"Browser":e=Ap(Ae());break;case"Worker":e=`${Ap(Ae())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${cr}/${s}`}/**
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
 */async function AA(n,t={}){return Hn(n,"GET","/v2/passwordPolicy",bs(n,t))}/**
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
 */const SA=6;class kA{constructor(t){var e,s,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:SA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(e=c.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let r=0;r<t.length;r++)s=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(t,e,s,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sp(this),this.idTokenSubscription=new Sp(this),this.beforeStateQueue=new IA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=My,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Dn(e)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Fy(this,{idToken:t}),s=await Pn._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await lc(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=cA()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Cn(this.app))return Promise.reject(us(this));const e=t?Kt(t):null;return e&&tt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(us(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Cn(this.app)?Promise.reject(us(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await AA(this),e=new kA(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new wo("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await wA(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Dn(t)||this._popupRedirectResolver;tt(e,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Dn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,r){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(tt(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,s,r);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&iA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function hr(n){return Kt(n)}class Sp{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lx(e=>this.observer=e)}get next(){return tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RA(n){Xc=n}function Qy(n){return Xc.loadJS(n)}function PA(){return Xc.recaptchaEnterpriseScript}function DA(){return Xc.gapiScript}function MA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const OA="recaptcha-enterprise",NA="NO_RECAPTCHA";class LA{constructor(t){this.type=OA,this.auth=hr(t)}async verify(t="verify",e=!1){async function s(i){if(!e){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{pA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new fA(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;wp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(NA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!e&&wp(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=PA();c.length!==0&&(c+=a),Qy(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function kp(n,t,e,s=!1){const r=new LA(n);let i;try{i=await r.verify(e)}catch{i=await r.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Du(n,t,e,s){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await kp(n,t,e,e==="getOobCode");return s(n,i)}else return s(n,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kp(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n,t){const e=Ac(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),i=e.getOptions();if(Ka(i,t??{}))return r;en(r,"already-initialized")}return e.initialize({options:t})}function FA(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(Dn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function $A(n,t,e){const s=hr(n);tt(s._canInitEmulator,s,"emulator-config-failed"),tt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!1,i=Xy(t),{host:o,port:a}=BA(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),UA()}function Xy(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function BA(n){const t=Xy(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Cp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Cp(o)}}}function Cp(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function UA(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Rn("not implemented")}_getIdTokenResponse(t){return Rn("not implemented")}_linkToIdToken(t,e){return Rn("not implemented")}_getReauthenticationResolver(t){return Rn("not implemented")}}async function jA(n,t){return Hn(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(n,t){return Qc(n,"POST","/v1/accounts:signInWithPassword",bs(n,t))}async function HA(n,t){return Hn(n,"POST","/v1/accounts:sendOobCode",bs(n,t))}async function qA(n,t){return HA(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,t){return Qc(n,"POST","/v1/accounts:signInWithEmailLink",bs(n,t))}async function GA(n,t){return Qc(n,"POST","/v1/accounts:signInWithEmailLink",bs(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Kd{constructor(t,e,s,r=null){super("password",s),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new uo(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new uo(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Du(t,e,"signInWithPassword",zA);case"emailLink":return WA(t,{email:this._email,oobCode:this._password});default:en(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Du(t,s,"signUpPassword",jA);case"emailLink":return GA(t,{idToken:e,email:this._email,oobCode:this._password});default:en(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(n,t){return Qc(n,"POST","/v1/accounts:signInWithIdp",bs(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="http://localhost";class ir extends Kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ir(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):en("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r}=e,i=Hd(e,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ir(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return $r(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,$r(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,$r(t,e)}buildRequest(){const t={requestUri:YA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Eo(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QA(n){const t=Pi(Di(n)).link,e=t?Pi(Di(t)).deep_link_id:null,s=Pi(Di(n)).deep_link_id;return(s?Pi(Di(s)).link:null)||s||e||t||n}class Qd{constructor(t){var e,s,r,i,o,a;const c=Pi(Di(t)),l=(e=c.apiKey)!==null&&e!==void 0?e:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,h=KA((r=c.mode)!==null&&r!==void 0?r:null);tt(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=QA(t);try{return new Qd(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(t,e){return uo._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Qd.parseLink(e);return tt(s,"argument-error"),uo._fromEmailAndCode(t,s.code,s.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vo extends Jy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Vo{constructor(){super("facebook.com")}static credential(t){return ir._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jn.credential(t.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ir._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Zn.credentialFromTaggedObject(t)}static credentialFromError(t){return Zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return Zn.credential(e,s)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Vo{constructor(){super("github.com")}static credential(t){return ir._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ts.credentialFromTaggedObject(t)}static credentialFromError(t){return ts.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ts.credential(t.oauthAccessToken)}catch{return null}}}ts.GITHUB_SIGN_IN_METHOD="github.com";ts.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Vo{constructor(){super("twitter.com")}static credential(t,e){return ir._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return es.credentialFromTaggedObject(t)}static credentialFromError(t){return es.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return es.credential(e,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,r=!1){const i=await Pn._fromIdTokenResponse(t,s,r),o=Rp(s);return new Gr({user:i,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const r=Rp(s);return new Gr({user:t,providerId:r,_tokenResponse:s,operationType:e})}}function Rp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends xn{constructor(t,e,s,r){var i;super(e.code,e.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,r){return new uc(t,e,s,r)}}function Zy(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(n,i,t,s):i})}async function XA(n,t,e=!1){const s=await lo(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Gr._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(n,t,e=!1){const{auth:s}=n;if(Cn(s.app))return Promise.reject(us(s));const r="reauthenticate";try{const i=await lo(n,Zy(s,r,t,n),e);tt(i.idToken,s,"internal-error");const o=Gd(i.idToken);tt(o,s,"internal-error");const{sub:a}=o;return tt(n.uid===a,s,"user-mismatch"),Gr._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(n,t,e=!1){if(Cn(n.app))return Promise.reject(us(n));const s="signIn",r=await Zy(n,s,t),i=await Gr._fromIdTokenResponse(n,s,r);return e||await n._updateCurrentUser(i.user),i}async function ZA(n,t){return tv(hr(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(n){const t=hr(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function eS(n,t,e){const s=hr(n);await Du(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",qA)}function nS(n,t,e){return Cn(n.app)?Promise.reject(us(n)):ZA(Kt(n),si.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&tS(n),s})}function sS(n,t,e,s){return Kt(n).onIdTokenChanged(t,e,s)}function rS(n,t,e){return Kt(n).beforeAuthStateChanged(t,e)}function iS(n,t,e,s){return Kt(n).onAuthStateChanged(t,e,s)}function oS(n){return Kt(n).signOut()}const dc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=1e3,cS=10;class nv extends ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),r=this.localCache[e];s!==r&&t(e,r,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);TA()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,cS):r()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},aS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}nv.type="LOCAL";const lS=nv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function uS(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(r=>r.isListeningto(t));if(e)return e;const s=new Jc(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(e.origin,i)),c=await uS(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Xd("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function hS(n){_n().location.href=n}/**
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
 */function iv(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function fS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function mS(){return iv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="firebaseLocalStorageDb",gS=1,hc="firebaseLocalStorage",av="fbase_key";class Fo{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Zc(n,t){return n.transaction([hc],t?"readwrite":"readonly").objectStore(hc)}function _S(){const n=indexedDB.deleteDatabase(ov);return new Fo(n).toPromise()}function Mu(){const n=indexedDB.open(ov,gS);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(hc,{keyPath:av})}catch(r){e(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(hc)?t(s):(s.close(),await _S(),t(await Mu()))})})}async function Pp(n,t,e){const s=Zc(n,!0).put({[av]:t,value:e});return new Fo(s).toPromise()}async function yS(n,t){const e=Zc(n,!1).get(t),s=await new Fo(e).toPromise();return s===void 0?null:s.value}function Dp(n,t){const e=Zc(n,!0).delete(t);return new Fo(e).toPromise()}const vS=800,bS=3;class cv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mu(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>bS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(mS()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await fS(),!this.activeServiceWorker)return;this.sender=new dS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||pS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Mu();return await Pp(t,dc,"1"),await Dp(t,dc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pp(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>yS(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Dp(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const i=Zc(r,!1).getAll();return new Fo(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:r,value:i}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cv.type="LOCAL";const xS=cv;new Lo(3e4,6e4);/**
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
 */function wS(n,t){return t?Dn(t):(tt(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Kd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $r(t,this._buildIdpRequest())}_linkToIdToken(t,e){return $r(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return $r(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function ES(n){return tv(n.auth,new Jd(n),n.bypassAuthState)}function TS(n){const{auth:t,user:e}=n;return tt(e,t,"internal-error"),JA(e,new Jd(n),n.bypassAuthState)}async function IS(n){const{auth:t,user:e}=n;return tt(e,t,"internal-error"),XA(e,new Jd(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(t,e,s,r,i=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ES;case"linkViaPopup":case"linkViaRedirect":return IS;case"reauthViaPopup":case"reauthViaRedirect":return TS;default:en(this.auth,"internal-error")}}resolve(t){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=new Lo(2e3,1e4);class Mr extends lv{constructor(t,e,s,r,i){super(t,e,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return tt(t,this.auth,"internal-error"),t}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const t=Xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,AS.get())};t()}}Mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="pendingRedirect",Va=new Map;class kS extends lv{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Va.get(this.auth._key());if(!t){try{const s=await CS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Va.set(this.auth._key(),t)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CS(n,t){const e=DS(t),s=PS(n);if(!await s._isAvailable())return!1;const r=await s._get(e)==="true";return await s._remove(e),r}function RS(n,t){Va.set(n._key(),t)}function PS(n){return Dn(n._redirectPersistence)}function DS(n){return La(SS,n.config.apiKey,n.name)}async function MS(n,t,e=!1){if(Cn(n.app))return Promise.reject(us(n));const s=hr(n),r=wS(s,t),o=await new kS(s,r,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=10*60*1e3;class NS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!LS(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!uv(t)){const r=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(gn(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=OS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mp(t))}saveEventToCache(t){this.cachedEventUids.add(Mp(t)),this.lastProcessedEventTime=Date.now()}}function Mp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function uv({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function LS(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(n,t={}){return Hn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$S=/^https?/;async function BS(n){if(n.config.emulator)return;const{authorizedDomains:t}=await VS(n);for(const e of t)try{if(US(e))return}catch{}en(n,"unauthorized-domain")}function US(n){const t=Ru(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!$S.test(e))return!1;if(FS.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const jS=new Lo(3e4,6e4);function Op(){const n=_n().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function zS(n){return new Promise((t,e)=>{var s,r,i;function o(){Op(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Op(),e(gn(n,"network-request-failed"))},timeout:jS.get()})}if(!((r=(s=_n().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const a=MA("iframefcb");return _n()[a]=()=>{gapi.load?o():e(gn(n,"network-request-failed"))},Qy(`${DA()}?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw Fa=null,t})}let Fa=null;function HS(n){return Fa=Fa||zS(n),Fa}/**
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
 */const qS=new Lo(5e3,15e3),WS="__/auth/iframe",GS="emulator/auth/iframe",YS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QS(n){const t=n.config;tt(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Wd(t,GS):`https://${n.config.authDomain}/${WS}`,s={apiKey:t.apiKey,appName:n.name,v:cr},r=KS.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${e}?${Eo(s).slice(1)}`}async function XS(n){const t=await HS(n),e=_n().gapi;return tt(e,n,"internal-error"),t.open({where:document.body,url:QS(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YS,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=gn(n,"network-request-failed"),a=_n().setTimeout(()=>{i(o)},qS.get());function c(){_n().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const JS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZS=500,tk=600,ek="_blank",nk="http://localhost";class Np{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sk(n,t,e,s=ZS,r=tk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JS),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ae().toLowerCase();e&&(a=zy(l)?ek:e),Uy(l)&&(t=t||nk,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(EA(l)&&a!=="_self")return rk(t||"",a),new Np(null);const h=window.open(t||"",a,d);tt(h,n,"popup-blocked");try{h.focus()}catch{}return new Np(h)}function rk(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const ik="__/auth/handler",ok="emulator/auth/handler",ak=encodeURIComponent("fac");async function Lp(n,t,e,s,r,i){tt(n.config.authDomain,n,"auth-domain-config-required"),tt(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:cr,eventId:r};if(t instanceof Jy){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Nx(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(t instanceof Vo){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${ak}=${encodeURIComponent(c)}`:"";return`${ck(n)}?${Eo(a).slice(1)}${l}`}function ck({config:n}){return n.emulator?Wd(n,ok):`https://${n.authDomain}/${ik}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="webStorageSupport";class lk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rv,this._completeRedirectFn=MS,this._overrideRedirectResult=RS}async _openPopup(t,e,s,r){var i;jn((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lp(t,e,s,Ru(),r);return sk(t,o,Xd())}async _openRedirect(t,e,s,r){await this._originValidation(t);const i=await Lp(t,e,s,Ru(),r);return hS(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:r,promise:i}=this.eventManagers[e];return r?Promise.resolve(r):(jn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await XS(t),s=new NS(t);return e.register("authEvent",r=>(tt(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Bl,{type:Bl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Bl];o!==void 0&&e(!!o),en(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=BS(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Yy()||jy()||Yd()}}const uk=lk;var Vp="@firebase/auth",Fp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fk(n){Js(new hs("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;tt(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ky(n)},l=new CA(s,r,i,c);return FA(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),Js(new hs("auth-internal",t=>{const e=hr(t.getProvider("auth").getImmediate());return(s=>new dk(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Vp,Fp,hk(n)),fn(Vp,Fp,"esm2017")}/**
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
 */const pk=5*60,mk=Pg("authIdTokenMaxAge")||pk;let $p=null;const gk=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>mk)return;const r=e==null?void 0:e.token;$p!==r&&($p=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _k(n=od()){const t=Ac(n,"auth");if(t.isInitialized())return t.getImmediate();const e=VA(n,{popupRedirectResolver:uk,persistence:[xS,lS,rv]}),s=Pg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=gk(i.toString());rS(e,o,()=>o(e.currentUser)),sS(e,a=>o(a))}}const r=kg("auth");return r&&$A(e,`http://${r}`),e}function yk(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}RA({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=r=>{const i=gn("internal-error");i.customData=r,e(i)},s.type="text/javascript",s.charset="UTF-8",yk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fk("Browser");const dv={VITE_FIREBASE_API_KEY:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",VITE_FIREBASE_APP_ID:"1:438724917414:web:cb9674cdc557bdf2a7dc67",VITE_FIREBASE_AUTH_DOMAIN:"controle-de-obras-axel.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"438724917414",VITE_FIREBASE_PROJECT_ID:"controle-de-obras-axel",VITE_FIREBASE_STORAGE_BUCKET:"controle-de-obras-axel.firebasestorage.app",VITE_RDO_API_TOKEN:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NjMzOTkzMDAsImp0aSI6IjJjZjAxOTY3ZDU4NGMxNTBiNTgzN2I2NzRiMTg0YzYzM2Y5ZjM3NWYzM2Y3YzlkMGZmODc0ZWQ3NjNjODcxYzM2YjMwNGJjOCIsImNvZCI6IjdiMGM5YjJlYzBhN2JmMmYyZjJlMWI1ZjVmYmFiMmViYzY2OTA1NjAiLCJlbXByZXNhSWQiOiI2NGQyNTE2OWQ4YzljMDIyNmYwOWNmNzIiLCJpc3MiOiJhcHAtYXBpIn0.hhw14MZeQ7M13IbOsRG04w_4ZvmHt2JPYctbY3W2OAI",VITE_RDO_HOLIDAYS:"2025-01-01,2025-03-27,2025-04-18,2025-04-21,2025-05-01,2025-06-19,2025-09-07,2025-10-12,2025-11-02,2025-11-15,2025-12-19,2025-12-25"},hv=n=>typeof window<"u"&&window[n]?window[n]:typeof globalThis<"u"&&globalThis[n]?globalThis[n]:null,vk={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"},bk=()=>{const n=hv("__FIREBASE_CONFIG");if(n)return n;const t=import.meta&&dv||{},e={apiKey:t.VITE_FIREBASE_API_KEY,authDomain:t.VITE_FIREBASE_AUTH_DOMAIN,projectId:t.VITE_FIREBASE_PROJECT_ID,storageBucket:t.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:t.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:t.VITE_FIREBASE_APP_ID};return Object.values(e).every(Boolean)?e:(console.warn("[Config] Firebase config nÃ£o encontrada em globals/ENV; usando fallback padrÃ£o legado."),vk)},xk=()=>{const n=hv("__RDO_API_CONFIG");if(n)return{TOKEN:n.TOKEN,BASE_URL:n.BASE_URL,HOLIDAYS:Array.isArray(n.HOLIDAYS)?n.HOLIDAYS:[]};const t=import.meta&&dv||{},e=t.VITE_RDO_API_TOKEN||t.VITE_RDO_TOKEN,s=t.VITE_RDO_API_BASE||"https://rdo.axelindustrial.com.br/api",r=(t.VITE_RDO_HOLIDAYS||"").split(",").map(i=>i.trim()).filter(Boolean);return e?{TOKEN:e,BASE_URL:s,HOLIDAYS:r}:{TOKEN:"",BASE_URL:s,HOLIDAYS:r}},wk=bk(),tl=Ng(wk),Z=J_(tl),Ek=tA(tl),ma=_k(tl),Tk=async()=>(console.log("[Firebase] ConfiguraÃ§Ã£o carregada com sucesso"),tl),It={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},fc={init:()=>new Promise(n=>{iS(ma,async t=>{if(t)try{const e=await co(re(Z,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};It.setUser(s)}else It.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}catch(e){console.warn("Erro ao buscar perfil (usando fallback):",e.message),It.setUser({uid:t.uid,email:t.email,role:"obra",nome:t.email.split("@")[0]})}else It.setUser(null);n(It.state.currentUser)})}),login:async(n,t)=>{try{const s=(await nS(ma,n,t)).user,r=await co(re(Z,"usuarios",s.uid));if(r.exists()){const i={uid:s.uid,email:s.email,...r.data()};return It.setUser(i),i}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await oS(ma),It.setUser(null)},recoverPassword:async n=>{await eS(ma,n)}},At={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const r=e.split("/").filter(Boolean);if(r.length!==t.length)continue;const i={};let o=!0;for(let a=0;a<r.length;a++){const c=r[a],l=t[a];if(c.startsWith(":"))i[c.slice(1)]=decodeURIComponent(l);else if(c!==l){o=!1;break}}if(o)return{handler:s,params:i}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!It.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(It.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},F={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:r="",required:i=!1,className:o=""})=>`
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
        `},Up={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Bp.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,r=document.getElementById("password").value,i=document.getElementById("btn-login");try{i.disabled=!0,i.innerHTML=F.createLoader(),await fc.login(s,r),F.createToast("Login realizado com sucesso!"),At.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),F.createToast(a,"error"),i.disabled=!1,i.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Bp.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,r=document.getElementById("btn-recover");try{r.disabled=!0,r.innerHTML=F.createLoader(),await fc.recoverPassword(s),F.createToast("Email de recuperação enviado!"),setTimeout(()=>At.navigate("/login"),2e3)}catch(i){F.createToast("Erro ao enviar email: "+i.message,"error"),r.disabled=!1,r.innerHTML="<span>Enviar</span>"}})}},Ik="modulepreload",Ak=function(n){return"/"+n},jp={},ho=function(t,e,s){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(e.map(c=>{if(c=Ak(c),c in jp)return;jp[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Ik,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},Sk=async n=>{if(!n)return null;const t=await bt(Gt(_t(Z,"obras"),Rt("__name__","==",n)));if(t.empty)return null;const e=t.docs[0].data(),s=Number(e.orcamento||e.valor_orcado||0),r=Number(e.tolerancia_percentual||0),i=s+s*r,a=(await bt(Gt(_t(Z,"compras"),Rt("obraId","==",n)))).docs.map(l=>l.data());let c=0;return a.forEach(l=>{const d=(l.status_compra||"").toLowerCase(),h=!l.estouro_orcamento||l.status_aprovacao==="Aprovado";(d==="comprado"||d==="recebido"||d==="entregue")&&h&&(c+=Number(l.valor_total||l.valor_estimado||0))}),{limite_real:i,comprometido:c,orcado:s}},kk=async n=>{var t,e,s;try{const{ObrasService:r}=await ho(async()=>{const{ObrasService:l}=await Promise.resolve().then(()=>BD);return{ObrasService:l}},void 0),i=await((t=r.getObraById)==null?void 0:t.call(r,n)),o=(i==null?void 0:i.numero_os)||(i==null?void 0:i.numeroOS)||n;if(!o)return null;const{RDOService:a}=await ho(async()=>{const{RDOService:l}=await Promise.resolve().then(()=>Bb);return{RDOService:l}},void 0),c=await a.getIntegratedDataForObra(o);if((e=c==null?void 0:c.reports)!=null&&e.length){const l=a.processRDOData(c.reports);return{...l,quantidadeRelatorios:c.quantidadeRelatorios||((s=l.reports)==null?void 0:s.length)||0}}return c?{quantidadeRelatorios:c.quantidadeRelatorios||0,totalHoras:Number(c.totalHoras||0)}:null}catch(r){return console.warn("[Dashboard] RDO fetch fail",(r==null?void 0:r.message)||r),null}},Ck=n=>{const t=new Date,e=new Date(t.getTime()-7*24*60*60*1e3),s=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getTime()-14*24*60*60*1e3),i=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=e&&g<=t}),o=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=s&&g<=t}),a=n.filter(m=>{const g=new Date(m.data_emissao||m.data_solicitacao);return g>=r&&g<e}),c=i.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),l=o.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),d=a.reduce((m,g)=>m+Number(g.valor_total||g.valor_estimado||0),0),h=d>0?(c-d)/d*100:0,f=o.length>0?l/o.length:0;return{semana:{quantidade:i.length,valor:c},mes:{quantidade:o.length,valor:l},variacaoSemanal:h,ticketMedio:f}},Rk=n=>{const t=new Date,e=n.previsao_entrega?new Date(n.previsao_entrega):null,s=n.ultima_atualizacao?new Date(n.ultima_atualizacao):n.data_emissao?new Date(n.data_emissao):null;let r=0,i="baixa",o="";const a=(n.status_compra||"").toLowerCase();if(["entregue","recebido","cancelado"].includes(a))return{score:0,criticidade:"baixa",motivo:""};if(e&&e<t){const c=Math.floor((t-e)/864e5);r=100+c,i="alta",o=`Atrasado há ${c} dias`}else if(e){const c=Math.floor((e-t)/864e5);c<=3&&c>=0&&(r=80+(3-c)*5,i="media",o=`Vence em ${c} dias`)}else if(s&&a==="comprado"){const c=Math.floor((t-s)/864e5);c>=5&&(r=60+c,i="media",o=`Sem atualização há ${c} dias`)}else if(a==="pendente"&&n.data_solicitacao){const c=Math.floor((t-new Date(n.data_solicitacao))/864e5);c>=7&&(r=50+c,i="media",o=`Pendente há ${c} dias`)}else!e&&a==="comprado"&&(r=40,i="baixa",o="Sem previsão de entrega");return{score:r,criticidade:i,motivo:o}},je={getCompradorStats:async(n={})=>{const t=_t(Z,"compras");let e=Gt(t);n.obraId&&(e=Gt(t,Rt("obraId","==",n.obraId)));let r=(await bt(e)).docs.map(N=>({id:N.id,...N.data()}));if(n.periodo){const{start:N,end:B}=n.periodo,z=N?new Date(N):null,W=B?new Date(B):null;(z||W)&&(r=r.filter(lt=>{const ut=lt.data_emissao||lt.data_solicitacao;if(!ut)return!1;const Q=new Date(ut);return!(z&&Q<z||W&&Q>W)}))}const i=r.filter(N=>N.status_compra==="Pendente"),o=r.filter(N=>N.status_compra==="Em Cotação"),a=r.sort((N,B)=>new Date(B.data_solicitacao||0)-new Date(N.data_solicitacao||0)).slice(0,5);let c=0,l=0,d=0,h=0,f=0,m=0;const g={},v={},_={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},I=await bt(_t(Z,"centrosCusto")),w=new Map(I.docs.map(N=>[N.id,N.data().nome||N.data().codigo||N.id])),S=await bt(_t(Z,"obras")),P=new Map(S.docs.map(N=>[N.id,N.data().nome_obra||N.data().apelido_obra||N.id])),M=r.map(N=>{const{score:B,criticidade:z,motivo:W}=Rk(N);return{...N,obraNome:P.get(N.obraId)||N.obra||N.obraId||"N/D",score:B,criticidade:z,motivo:W}}).filter(N=>N.score>0).sort((N,B)=>B.score-N.score).slice(0,10);r.forEach(N=>{const B=Number(N.valor_estimado||N.valor_total||0);m+=B;const z=N.previsao_entrega?new Date(N.previsao_entrega):null,W=N.data_recebimento?new Date(N.data_recebimento):null;if(z&&N.status_compra!=="Entregue"&&N.status_compra!=="Recebido"&&z<new Date&&c++,W&&z&&(l++,W<=z&&d++),N.data_emissao&&(W||z)){const Tt=W||z,ke=Math.max(0,(new Date(Tt)-new Date(N.data_emissao))/(1e3*60*60*24));h+=ke,f++}const lt=(N.status_compra||"").toLowerCase();lt.includes("cot")&&_.cotacao++,!z&&lt!=="recebido"&&lt!=="entregue"&&_.sem_previsao++,z&&z<new Date&&lt!=="recebido"&&lt!=="entregue"&&_.atrasados++;const Q=(N.status_aprovacao||"").toLowerCase();(N.estouro_orcamento||Q==="pendente")&&_.pendente_aprovacao++;const et=(N.natureza_compra||"Outros").trim();g[et]=(g[et]||0)+B;const ct=w.get(N.centroCustoId)||N.centroCustoNome||N.centro_custo||N.centroCustoId||"N/D";v[ct]=(v[ct]||0)+B});const E=l?d/l*100:0,b=f?h/f:0,x=Ck(r),A=new Date,C=new Date(A.getTime()+3*24*60*60*1e3);let D=c;r.forEach(N=>{const B=N.previsao_entrega?new Date(N.previsao_entrega):null,z=(N.status_compra||"").toLowerCase();B&&B>=A&&B<=C&&z!=="recebido"&&z!=="entregue"&&D++});const k=i.length+o.length,nt=3;let H=0;r.forEach(N=>{const B=(N.status_compra||"").toLowerCase();if(B==="comprado"||B==="aprovado"){const z=N.ultima_atualizacao||N.data_emissao||N.data_solicitacao;z&&Math.floor((A-new Date(z))/864e5)>=nt&&H++}});const Y=_.sem_previsao;return{pendentes:i.length,emCotacao:o.length,recentes:a,atrasos:c,sla:E,lead:b,totalValor:m,naturezaTotais:g,ccTotais:v,alerts:_,atividade:x,urgentes:D,aguardandoAcao:k,precisamAtualizacao:H,semPrevisao:Y,comprasCriticas:M}},getTimelineData:async(n=null)=>{const t=_t(Z,"compras");let e=Gt(t);n&&(e=Gt(t,Rt("obraId","==",n)));const s=await bt(e),r=new Date;r.setHours(0,0,0,0);const i=new Date(r);i.setDate(r.getDate()+7);const o=[];return s.docs.forEach(a=>{const c=a.data();if(!c.previsao_entrega)return;const l=new Date(c.previsao_entrega);l.setHours(0,0,0,0),l>=r&&l<=i&&o.push({id:a.id,...c,date:l})}),o.sort((a,c)=>a.date-c.date)},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=_t(Z,"compras"),e=Gt(t,Rt("obraId","==",n),Rt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await bt(e),r=Gt(t,Rt("obraId","==",n),Rt("status_compra","==","Comprado")),i=await bt(r),o=Gt(t,Rt("obraId","==",n),Rt("status_compra","in",["Entregue","Recebido"])),a=await bt(o),c=Gt(t,Rt("obraId","==",n),Ld("data_solicitacao","desc"),oc(5)),l=await bt(c),d=await bt(Gt(t,Rt("obraId","==",n)));let h=0,f=0,m=0,g=0,v=0;const _=await Sk(n),I=(_==null?void 0:_.comprometido)||0,w=(_==null?void 0:_.limite_real)||(_==null?void 0:_.orcado)||0,S=w>0?I/w*100:0,P=Math.max(0,w-I),R={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0};d.docs.forEach(E=>{const b=E.data(),x=b.previsao_entrega?new Date(b.previsao_entrega):null,A=b.data_recebimento?new Date(b.data_recebimento):null,C=(b.status_compra||"").toLowerCase();if(x&&C!=="entregue"&&C!=="recebido"&&x<new Date&&(h++,R.atrasados++),A&&x&&(f++,A<=x&&m++),b.data_emissao&&(A||x)){const k=A||x,nt=Math.max(0,(new Date(k)-new Date(b.data_emissao))/(1e3*60*60*24));g+=nt,v++}!x&&C!=="recebido"&&C!=="entregue"&&R.sem_previsao++;const D=(b.status_aprovacao||"").toLowerCase();(b.estouro_orcamento||D==="pendente")&&R.pendente_aprovacao++,C.includes("cot")&&R.cotacao++});const M=await kk(n);return{pendentes:s.size,transito:i.size,entregues:a.size,recentes:l.docs.map(E=>({id:E.id,...E.data()})),atrasos:h,sla:f?m/f*100:0,lead:v?g/v:0,economia:P,curvaPercent:S,comprometido:I,limiteReal:w,rdoData:M,alerts:R}},getObras:async()=>(await bt(_t(Z,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=_t(Z,"compras"),t=Gt(n,oc(500)),e=await bt(t);let s=0,r={},i={},o=0,a=0,c=0,l=0,d=0,h=0,f=0;const m={},g={},v={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0},_=[];e.forEach(R=>{const M=R.data(),E=Number(M.valor_estimado||M.valor_total||0);_.push({id:R.id,...M}),s+=E,r[M.status_compra]=(r[M.status_compra]||0)+1,M.status_compra!=="Entregue"&&M.status_compra!=="Recebido"&&M.previsao_entrega&&new Date(M.previsao_entrega)<new Date&&(c++,v.atrasados++);const b=M.previsao_entrega?new Date(M.previsao_entrega):null,x=M.data_recebimento?new Date(M.data_recebimento):null;if(x&&b&&(l++,x<=b&&d++),M.data_emissao&&(x||b)){const nt=x||b,H=Math.max(0,(new Date(nt)-new Date(M.data_emissao))/(1e3*60*60*24));h+=H,f++}if(M.limite_real&&(o+=Number(M.limite_real)),M.comprometido&&(a+=Number(M.comprometido)),M.data_solicitacao){const nt=new Date(M.data_solicitacao),H=`${nt.getFullYear()}-${String(nt.getMonth()+1).padStart(2,"0")}`;i[H]=(i[H]||0)+E}const A=(M.natureza_compra||"Outros").trim();m[A]=(m[A]||0)+E;const C=M.centroCustoNome||M.centro_custo||M.centroCustoId||"N/D";g[C]=(g[C]||0)+E,!M.previsao_entrega&&M.status_compra!=="Recebido"&&M.status_compra!=="Entregue"&&v.sem_previsao++,(M.status_aprovacao||"").toLowerCase()==="pendente"&&v.pendente_aprovacao++,(M.status_compra||"").toLowerCase().includes("cot")&&v.cotacao++});const I=o>0?a/o*100:0,w=l?d/l*100:0,S=f?h/f:0,P=Math.max(0,o-a);return{totalGasto:s,porStatus:r,totalPedidos:e.size,gastosPorMes:i,limiteReal:o,comprometido:a,curvaPercent:I,atrasos:c,sla:w,lead:S,economia:P,naturezaTotais:m,ccTotais:g,alerts:v,_allCompras:_}},markAsDelivered:async n=>{const{doc:t,updateDoc:e}=await ho(async()=>{const{doc:r,updateDoc:i}=await Promise.resolve().then(()=>jT);return{doc:r,updateDoc:i}},void 0),s=t(Z,"compras",n);await e(s,{status_compra:"Entregue",data_recebimento:new Date().toISOString(),ultima_atualizacao:new Date().toISOString()})}},X={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>{if(!n)return"-";const t=new Date(n);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("pt-BR")},formatCurrencyInput:(n,t=!1)=>{let s=(typeof n=="number"?n.toFixed(2):String(n??"")).replace(/\D/g,"");return s=(s/100).toFixed(2)+"",s=s.replace(".",","),s=s.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),t?`R$ ${s}`:s},parseCurrency:n=>{if(typeof n=="number")return n;if(!n)return 0;const t=String(n).replace("R$ ","").replace(/\./g,"").replace(",","."),e=parseFloat(t);return Number.isNaN(e)?0:e},formatCnpjInput:n=>{if(!n)return"";let t=n.replace(/\D/g,"");return t=t.substring(0,14),t=t.replace(/^(\d{2})(\d)/,"$1.$2"),t=t.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"),t=t.replace(/\.(\d{3})(\d)/,".$1/$2"),t=t.replace(/(\d{4})(\d)/,"$1-$2"),t},validateCNPJ:n=>{if(!n)return!0;const t=n.replace(/\D/g,"");if(t.length!==14||/^(\d)\1{13}$/.test(t))return!1;let e=0,s=5;for(let a=0;a<8;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;let r=e%11,i=r<2?0:11-r;if(parseInt(t[8],10)!==i)return!1;e=0,s=6;for(let a=0;a<9;a++)e+=parseInt(t[a],10)*s,s=s===2?9:s-1;r=e%11;let o=r<2?0:11-r;return parseInt(t[9],10)===o},renderStatusBadge:(n,t)=>{const e=new Date;e.setHours(0,0,0,0);let s=null;if(t){const o=new Date(t);Number.isNaN(o.getTime())||(s=o)}const r=(n||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return r!=="recebido"&&s&&s<e?'<span class="px-2 py-1 text-xs font-display rounded bg-alert text-canvas uppercase">Atrasado</span>':r.includes("recebido")||r.includes("entregue")?`<span class="px-2 py-1 text-xs font-display rounded bg-primary text-canvas uppercase">${n}</span>`:r.includes("comprado")?`<span class="px-2 py-1 text-xs font-display rounded bg-indigo-500 text-canvas uppercase">${n}</span>`:r.includes("aprov")?`<span class="px-2 py-1 text-xs font-display rounded bg-emerald-500 text-canvas uppercase">${n}</span>`:r.includes("cot")||r.includes("cota")?`<span class="px-2 py-1 text-xs font-display rounded bg-amber-400 text-gray-900 uppercase">${n}</span>`:`<span class="px-2 py-1 text-xs font-display rounded bg-border text-text uppercase">${n||"N/D"}</span>`},debounce:(n,t)=>{let e;return(...s)=>{clearTimeout(e),e=setTimeout(()=>n(...s),t)}},getGreeting:()=>{const n=new Date().getHours();return n<12?"Bom dia":n<18?"Boa tarde":"Boa noite"},getContextualMessage:n=>{const t=[];return n.urgentes>0?t.push(`Você tem <strong>${n.urgentes} compras urgentes</strong> que precisam de atenção`):n.aguardandoAcao>0?t.push(`Há <strong>${n.aguardandoAcao} compras aguardando</strong> sua ação`):n.pendentes===0&&n.emCotacao===0?t.push("Tudo em dia! Continue o ótimo trabalho 🎉"):t.push("Aqui está o resumo das suas compras"),n.sla>=90&&t.push(`Seu SLA está excelente: <strong>${n.sla.toFixed(1)}%</strong> ✨`),t.join(" • ")},formatRelativeTime:n=>{if(!n)return"";const t=new Date(n),s=new Date-t,r=Math.floor(s/6e4),i=Math.floor(s/36e5),o=Math.floor(s/864e5);return r<1?"agora mesmo":r<60?`há ${r} minuto${r>1?"s":""}`:i<24?`há ${i} hora${i>1?"s":""}`:o===1?"ontem":o<7?`há ${o} dias`:o<30?`há ${Math.floor(o/7)} semana${Math.floor(o/7)>1?"s":""}`:X.formatDate(n)},daysBetween:(n,t)=>{const e=new Date(n),s=new Date(t),r=Math.abs(s-e);return Math.floor(r/(1e3*60*60*24))}},Ot={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>',pencil:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.75 19.901l-4.5.75.75-4.5L16.862 4.487z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.6l2.651 2.651" /></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5h10.5M9.75 7.5v-1.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v1.5m-9 0v12a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-12" /></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',alert:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>'},Pk=n=>{const t=[];return n.semPrevisao>5&&t.push(`Você tem ${n.semPrevisao} compras sem previsão de entrega. Que tal entrar em contato com os fornecedores?`),n.precisamAtualizacao>10&&t.push(`${n.precisamAtualizacao} compras estão há dias sem atualização. Mantenha o status sempre atualizado!`),n.sla<80&&t.push(`Seu SLA está em ${n.sla.toFixed(1)}%. Foque em acompanhar as previsões de entrega para melhorar!`),n.lead>15&&t.push(`Seu lead time médio é ${n.lead.toFixed(1)} dias. Negocie prazos menores com fornecedores!`),n.urgentes>5&&t.push(`Atenção! ${n.urgentes} compras urgentes precisam de ação imediata.`),t.length===0&&t.push("Excelente trabalho! Seus indicadores estão ótimos. Continue assim! 🎉"),t[Math.floor(Math.random()*t.length)]},ga={renderTimeline:n=>{if(!n||n.length===0)return`
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
                            ${X.getGreeting()}, ${(t==null?void 0:t.nome)||(t==null?void 0:t.email)||"Comprador"}! 👋
                        </h1>
                        <p class="text-text-muted">
                            ${X.getContextualMessage(n)}
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
                        ${Ot.plus} Nova Compra
                    </a>
                    <a href="#/relatorios?status=Pendente" class="btn btn-secondary flex items-center gap-2 whitespace-nowrap">
                        ${Ot.clock} Ver Pendentes
                    </a>
                    <a href="#/relatorios?urgente=true" class="btn btn-secondary text-alert border-alert/30 hover:bg-alert/5 flex items-center gap-2 whitespace-nowrap">
                        ${Ot.alert} Ver Urgentes
                    </a>
                    <a href="#/relatorios" class="btn btn-ghost flex items-center gap-2 whitespace-nowrap">
                        ${Ot.chart} Todos Relatórios
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
                                <p class="text-lg font-display text-text mt-2">${X.formatCurrency(s.semana.valor)}</p>
                            </div>
                            
                            <!-- Este Mês -->
                            <div class="bg-canvas p-4 rounded border border-border">
                                <p class="text-xs text-text-muted uppercase tracking-wide mb-2">Este Mês</p>
                                <p class="text-2xl font-display text-primary">${s.mes.quantidade}</p>
                                <p class="text-sm text-text-muted">compras</p>
                                <p class="text-lg font-display text-text mt-2">${X.formatCurrency(s.mes.valor)}</p>
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
                                <span class="font-display text-text">${X.formatCurrency(s.ticketMedio)}</span>
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
                            <p class="text-sm text-text-muted">${Pk(n)}</p>
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
                                        <span>${X.formatCurrency(r.valor_total||r.valor_estimado)}</span>
                                    </p>
                                </div>

                                <!-- Status e Motivo -->
                                <div class="flex-shrink-0 text-right hidden sm:block">
                                    ${X.renderStatusBadge(r.status_compra,r.previsao_entrega)}
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
                                        ${Ot.pencil}
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
                    ${F.createCard({title:"Economia vs Orçamento",content:`<p class="text-4xl font-display text-${(n.economia||0)<0?"alert":"primary"} uppercase">${X.formatCurrency(n.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(n.curvaPercent||0).toFixed(1)}%</p>`})}
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
                    ${F.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">${X.formatCurrency(n.totalGasto)}</p>`})}
                    ${F.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
                    ${F.createCard({title:"% Curva S (Comprometido vs Limite)",content:`<p class="text-4xl font-display text-${n.curvaPercent>100?"alert":"primary"} uppercase">${(n.curvaPercent||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Limite: ${X.formatCurrency(n.limiteReal||0)} • Comprometido: ${X.formatCurrency(n.comprometido||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${n.atrasos||0}</p><p class="text-sm heading-muted mt-1">Com previsão vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(n.sla||0)<80?"alert":"primary"} uppercase">${(n.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">On-time vs entregues</p>`})}
                    ${F.createCard({title:"Lead Médio",content:`<p class="text-4xl font-display text-text uppercase">${(n.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">Emissão → Entrega/Previsão</p>`})}
                    ${F.createCard({title:"Economia (Limite - Comprometido)",content:`<p class="text-4xl font-display text-primary uppercase">${X.formatCurrency(n.economia||0)}</p>`})}
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
                                            <td class="px-4 py-2 text-sm text-text text-right">${X.formatCurrency(i.limite)}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${X.formatCurrency(i.comprometido)}</td>
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
 */function $o(n){return n+.5|0}const ss=(n,t,e)=>Math.max(Math.min(n,e),t);function Li(n){return ss($o(n*2.55),0,255)}function ds(n){return ss($o(n*255),0,255)}function kn(n){return ss($o(n/2.55)/100,0,1)}function zp(n){return ss($o(n*100),0,100)}const ze={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ou=[..."0123456789ABCDEF"],Dk=n=>Ou[n&15],Mk=n=>Ou[(n&240)>>4]+Ou[n&15],_a=n=>(n&240)>>4===(n&15),Ok=n=>_a(n.r)&&_a(n.g)&&_a(n.b)&&_a(n.a);function Nk(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&ze[n[1]]*17,g:255&ze[n[2]]*17,b:255&ze[n[3]]*17,a:t===5?ze[n[4]]*17:255}:(t===7||t===9)&&(e={r:ze[n[1]]<<4|ze[n[2]],g:ze[n[3]]<<4|ze[n[4]],b:ze[n[5]]<<4|ze[n[6]],a:t===9?ze[n[7]]<<4|ze[n[8]]:255})),e}const Lk=(n,t)=>n<255?t(n):"";function Vk(n){var t=Ok(n)?Dk:Mk;return n?"#"+t(n.r)+t(n.g)+t(n.b)+Lk(n.a,t):void 0}const Fk=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function fv(n,t,e){const s=t*Math.min(e,1-e),r=(i,o=(i+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[r(0),r(8),r(4)]}function $k(n,t,e){const s=(r,i=(r+n/60)%6)=>e-e*t*Math.max(Math.min(i,4-i,1),0);return[s(5),s(3),s(1)]}function Bk(n,t,e){const s=fv(n,1,.5);let r;for(t+e>1&&(r=1/(t+e),t*=r,e*=r),r=0;r<3;r++)s[r]*=1-t-e,s[r]+=t;return s}function Uk(n,t,e,s,r){return n===r?(t-e)/s+(t<e?6:0):t===r?(e-n)/s+2:(n-t)/s+4}function Zd(n){const e=n.r/255,s=n.g/255,r=n.b/255,i=Math.max(e,s,r),o=Math.min(e,s,r),a=(i+o)/2;let c,l,d;return i!==o&&(d=i-o,l=a>.5?d/(2-i-o):d/(i+o),c=Uk(e,s,r,d,i),c=c*60+.5),[c|0,l||0,a]}function th(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(ds)}function eh(n,t,e){return th(fv,n,t,e)}function jk(n,t,e){return th(Bk,n,t,e)}function zk(n,t,e){return th($k,n,t,e)}function pv(n){return(n%360+360)%360}function Hk(n){const t=Fk.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Li(+t[5]):ds(+t[5]));const r=pv(+t[2]),i=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=jk(r,i,o):t[1]==="hsv"?s=zk(r,i,o):s=eh(r,i,o),{r:s[0],g:s[1],b:s[2],a:e}}function qk(n,t){var e=Zd(n);e[0]=pv(e[0]+t),e=eh(e),n.r=e[0],n.g=e[1],n.b=e[2]}function Wk(n){if(!n)return;const t=Zd(n),e=t[0],s=zp(t[1]),r=zp(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${r}%, ${kn(n.a)})`:`hsl(${e}, ${s}%, ${r}%)`}const Hp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},qp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Gk(){const n={},t=Object.keys(qp),e=Object.keys(Hp);let s,r,i,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],r=0;r<e.length;r++)i=e[r],a=a.replace(i,Hp[i]);i=parseInt(qp[o],16),n[a]=[i>>16&255,i>>8&255,i&255]}return n}let ya;function Yk(n){ya||(ya=Gk(),ya.transparent=[0,0,0,0]);const t=ya[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Kk=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Qk(n){const t=Kk.exec(n);let e=255,s,r,i;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?Li(o):ss(o*255,0,255)}return s=+t[1],r=+t[3],i=+t[5],s=255&(t[2]?Li(s):ss(s,0,255)),r=255&(t[4]?Li(r):ss(r,0,255)),i=255&(t[6]?Li(i):ss(i,0,255)),{r:s,g:r,b:i,a:e}}}function Xk(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${kn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Ul=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,xr=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function Jk(n,t,e){const s=xr(kn(n.r)),r=xr(kn(n.g)),i=xr(kn(n.b));return{r:ds(Ul(s+e*(xr(kn(t.r))-s))),g:ds(Ul(r+e*(xr(kn(t.g))-r))),b:ds(Ul(i+e*(xr(kn(t.b))-i))),a:n.a+e*(t.a-n.a)}}function va(n,t,e){if(n){let s=Zd(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=eh(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function mv(n,t){return n&&Object.assign(t||{},n)}function Wp(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=ds(n[3]))):(t=mv(n,{r:0,g:0,b:0,a:1}),t.a=ds(t.a)),t}function Zk(n){return n.charAt(0)==="r"?Qk(n):Hk(n)}class fo{constructor(t){if(t instanceof fo)return t;const e=typeof t;let s;e==="object"?s=Wp(t):e==="string"&&(s=Nk(t)||Yk(t)||Zk(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=mv(this._rgb);return t&&(t.a=kn(t.a)),t}set rgb(t){this._rgb=Wp(t)}rgbString(){return this._valid?Xk(this._rgb):void 0}hexString(){return this._valid?Vk(this._rgb):void 0}hslString(){return this._valid?Wk(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,r=t.rgb;let i;const o=e===i?.5:e,a=2*o-1,c=s.a-r.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;i=1-l,s.r=255&l*s.r+i*r.r+.5,s.g=255&l*s.g+i*r.g+.5,s.b=255&l*s.b+i*r.b+.5,s.a=o*s.a+(1-o)*r.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=Jk(this._rgb,t._rgb,e)),this}clone(){return new fo(this.rgb)}alpha(t){return this._rgb.a=ds(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=$o(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return va(this._rgb,2,t),this}darken(t){return va(this._rgb,2,-t),this}saturate(t){return va(this._rgb,1,t),this}desaturate(t){return va(this._rgb,1,-t),this}rotate(t){return qk(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Tn(){}const t1=(()=>{let n=0;return()=>n++})();function dt(n){return n==null}function Ft(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function pt(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function Yt(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Ve(n,t){return Yt(n)?n:t}function it(n,t){return typeof n>"u"?t:n}const e1=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,gv=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function Dt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function kt(n,t,e,s){let r,i,o;if(Ft(n))for(i=n.length,r=0;r<i;r++)t.call(e,n[r],r);else if(pt(n))for(o=Object.keys(n),i=o.length,r=0;r<i;r++)t.call(e,n[o[r]],o[r])}function pc(n,t){let e,s,r,i;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(r=n[e],i=t[e],r.datasetIndex!==i.datasetIndex||r.index!==i.index)return!1;return!0}function mc(n){if(Ft(n))return n.map(mc);if(pt(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let r=0;for(;r<s;++r)t[e[r]]=mc(n[e[r]]);return t}return n}function _v(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function n1(n,t,e,s){if(!_v(n))return;const r=t[n],i=e[n];pt(r)&&pt(i)?po(r,i,s):t[n]=mc(i)}function po(n,t,e){const s=Ft(t)?t:[t],r=s.length;if(!pt(n))return n;e=e||{};const i=e.merger||n1;let o;for(let a=0;a<r;++a){if(o=s[a],!pt(o))continue;const c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)i(c[l],n,o,e)}return n}function Ki(n,t){return po(n,t,{merger:s1})}function s1(n,t,e){if(!_v(n))return;const s=t[n],r=e[n];pt(s)&&pt(r)?Ki(s,r):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=mc(r))}const Gp={"":n=>n,x:n=>n.x,y:n=>n.y};function r1(n){const t=n.split("."),e=[];let s="";for(const r of t)s+=r,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function i1(n){const t=r1(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function gs(n,t){return(Gp[t]||(Gp[t]=i1(t)))(n)}function nh(n){return n.charAt(0).toUpperCase()+n.slice(1)}const mo=n=>typeof n<"u",_s=n=>typeof n=="function",Yp=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function o1(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const wt=Math.PI,Lt=2*wt,a1=Lt+wt,gc=Number.POSITIVE_INFINITY,c1=wt/180,Zt=wt/2,Rs=wt/4,Kp=wt*2/3,rs=Math.log10,yn=Math.sign;function Qi(n,t,e){return Math.abs(n-t)<e}function Qp(n){const t=Math.round(n);n=Qi(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(rs(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function l1(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((r,i)=>r-i).pop(),t}function u1(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Yr(n){return!u1(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function d1(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function yv(n,t,e){let s,r,i;for(s=0,r=n.length;s<r;s++)i=n[s][e],isNaN(i)||(t.min=Math.min(t.min,i),t.max=Math.max(t.max,i))}function Je(n){return n*(wt/180)}function sh(n){return n*(180/wt)}function Xp(n){if(!Yt(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function vv(n,t){const e=t.x-n.x,s=t.y-n.y,r=Math.sqrt(e*e+s*s);let i=Math.atan2(s,e);return i<-.5*wt&&(i+=Lt),{angle:i,distance:r}}function Nu(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function h1(n,t){return(n-t+a1)%Lt-wt}function we(n){return(n%Lt+Lt)%Lt}function go(n,t,e,s){const r=we(n),i=we(t),o=we(e),a=we(i-r),c=we(o-r),l=we(r-i),d=we(r-o);return r===i||r===o||s&&i===o||a>c&&l<d}function ue(n,t,e){return Math.max(t,Math.min(e,n))}function f1(n){return ue(n,-32768,32767)}function Mn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function rh(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,r=0,i;for(;s-r>1;)i=r+s>>1,e(i)?r=i:s=i;return{lo:r,hi:s}}const On=(n,t,e,s)=>rh(n,e,s?r=>{const i=n[r][t];return i<e||i===e&&n[r+1][t]===e}:r=>n[r][t]<e),p1=(n,t,e)=>rh(n,e,s=>n[s][t]>=e);function m1(n,t,e){let s=0,r=n.length;for(;s<r&&n[s]<t;)s++;for(;r>s&&n[r-1]>e;)r--;return s>0||r<n.length?n.slice(s,r):n}const bv=["push","pop","shift","splice","unshift"];function g1(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),bv.forEach(e=>{const s="_onData"+nh(e),r=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...i){const o=r.apply(this,i);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...i)}),o}})})}function Jp(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,r=s.indexOf(t);r!==-1&&s.splice(r,1),!(s.length>0)&&(bv.forEach(i=>{delete n[i]}),delete n._chartjs)}function xv(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const wv=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function Ev(n,t){let e=[],s=!1;return function(...r){e=r,s||(s=!0,wv.call(window,()=>{s=!1,n.apply(t,e)}))}}function _1(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const ih=n=>n==="start"?"left":n==="end"?"right":"center",be=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,y1=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function Tv(n,t,e){const s=t.length;let r=0,i=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:c}=n,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,d=o.axis,{min:h,max:f,minDefined:m,maxDefined:g}=o.getUserBounds();if(m){if(r=Math.min(On(c,d,h).lo,e?s:On(t,d,o.getPixelForValue(h)).lo),l){const v=c.slice(0,r+1).reverse().findIndex(_=>!dt(_[a.axis]));r-=Math.max(0,v)}r=ue(r,0,s-1)}if(g){let v=Math.max(On(c,o.axis,f,!0).hi+1,e?0:On(t,d,o.getPixelForValue(f),!0).hi+1);if(l){const _=c.slice(v-1).findIndex(I=>!dt(I[a.axis]));v+=Math.max(0,_)}i=ue(v,r,s)-r}else i=s-r}return{start:r,count:i}}function Iv(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,r={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=r,!0;const i=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,r),i}const ba=n=>n===0||n===1,Zp=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Lt/e)),tm=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Lt/e)+1,Xi={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Zt)+1,easeOutSine:n=>Math.sin(n*Zt),easeInOutSine:n=>-.5*(Math.cos(wt*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>ba(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>ba(n)?n:Zp(n,.075,.3),easeOutElastic:n=>ba(n)?n:tm(n,.075,.3),easeInOutElastic(n){return ba(n)?n:n<.5?.5*Zp(n*2,.1125,.45):.5+.5*tm(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Xi.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Xi.easeInBounce(n*2)*.5:Xi.easeOutBounce(n*2-1)*.5+.5};function oh(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function em(n){return oh(n)?n:new fo(n)}function jl(n){return oh(n)?n:new fo(n).saturate(.5).darken(.1).hexString()}const v1=["x","y","borderWidth","radius","tension"],b1=["color","borderColor","backgroundColor"];function x1(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:b1},numbers:{type:"number",properties:v1}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function w1(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const nm=new Map;function E1(n,t){t=t||{};const e=n+JSON.stringify(t);let s=nm.get(e);return s||(s=new Intl.NumberFormat(n,t),nm.set(e,s)),s}function Bo(n,t,e){return E1(t,e).format(n)}const Av={values(n){return Ft(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let r,i=n;if(e.length>1){const l=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(l<1e-4||l>1e15)&&(r="scientific"),i=T1(n,e)}const o=rs(Math.abs(i)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),Bo(n,s,c)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(rs(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?Av.numeric.call(this,n,t,e):""}};function T1(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var el={formatters:Av};function I1(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:el.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const or=Object.create(null),Lu=Object.create(null);function Ji(n,t){if(!t)return n;const e=t.split(".");for(let s=0,r=e.length;s<r;++s){const i=e[s];n=n[i]||(n[i]=Object.create(null))}return n}function zl(n,t,e){return typeof t=="string"?po(Ji(n,t),e):po(Ji(n,""),t)}class A1{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,r)=>jl(r.backgroundColor),this.hoverBorderColor=(s,r)=>jl(r.borderColor),this.hoverColor=(s,r)=>jl(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return zl(this,t,e)}get(t){return Ji(this,t)}describe(t,e){return zl(Lu,t,e)}override(t,e){return zl(or,t,e)}route(t,e,s,r){const i=Ji(this,t),o=Ji(this,s),a="_"+e;Object.defineProperties(i,{[a]:{value:i[e],writable:!0},[e]:{enumerable:!0,get(){const c=this[a],l=o[r];return pt(c)?Object.assign({},l,c):it(c,l)},set(c){this[a]=c}}})}apply(t){t.forEach(e=>e(this))}}var Bt=new A1({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[x1,w1,I1]);function S1(n){return!n||dt(n.size)||dt(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function _c(n,t,e,s,r){let i=t[r];return i||(i=t[r]=n.measureText(r).width,e.push(r)),i>s&&(s=i),s}function k1(n,t,e,s){s=s||{};let r=s.data=s.data||{},i=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(r=s.data={},i=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let c,l,d,h,f;for(c=0;c<a;c++)if(h=e[c],h!=null&&!Ft(h))o=_c(n,r,i,o,h);else if(Ft(h))for(l=0,d=h.length;l<d;l++)f=h[l],f!=null&&!Ft(f)&&(o=_c(n,r,i,o,f));n.restore();const m=i.length/2;if(m>e.length){for(c=0;c<m;c++)delete r[i[c]];i.splice(0,m)}return o}function Ps(n,t,e){const s=n.currentDevicePixelRatio,r=e!==0?Math.max(e/2,.5):0;return Math.round((t-r)*s)/s+r}function sm(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Vu(n,t,e,s){Sv(n,t,e,s,null)}function Sv(n,t,e,s,r){let i,o,a,c,l,d,h,f;const m=t.pointStyle,g=t.rotation,v=t.radius;let _=(g||0)*c1;if(m&&typeof m=="object"&&(i=m.toString(),i==="[object HTMLImageElement]"||i==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(_),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(v)||v<=0)){switch(n.beginPath(),m){default:r?n.ellipse(e,s,r/2,v,0,0,Lt):n.arc(e,s,v,0,Lt),n.closePath();break;case"triangle":d=r?r/2:v,n.moveTo(e+Math.sin(_)*d,s-Math.cos(_)*v),_+=Kp,n.lineTo(e+Math.sin(_)*d,s-Math.cos(_)*v),_+=Kp,n.lineTo(e+Math.sin(_)*d,s-Math.cos(_)*v),n.closePath();break;case"rectRounded":l=v*.516,c=v-l,o=Math.cos(_+Rs)*c,h=Math.cos(_+Rs)*(r?r/2-l:c),a=Math.sin(_+Rs)*c,f=Math.sin(_+Rs)*(r?r/2-l:c),n.arc(e-h,s-a,l,_-wt,_-Zt),n.arc(e+f,s-o,l,_-Zt,_),n.arc(e+h,s+a,l,_,_+Zt),n.arc(e-f,s+o,l,_+Zt,_+wt),n.closePath();break;case"rect":if(!g){c=Math.SQRT1_2*v,d=r?r/2:c,n.rect(e-d,s-c,2*d,2*c);break}_+=Rs;case"rectRot":h=Math.cos(_)*(r?r/2:v),o=Math.cos(_)*v,a=Math.sin(_)*v,f=Math.sin(_)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+f,s-o),n.lineTo(e+h,s+a),n.lineTo(e-f,s+o),n.closePath();break;case"crossRot":_+=Rs;case"cross":h=Math.cos(_)*(r?r/2:v),o=Math.cos(_)*v,a=Math.sin(_)*v,f=Math.sin(_)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"star":h=Math.cos(_)*(r?r/2:v),o=Math.cos(_)*v,a=Math.sin(_)*v,f=Math.sin(_)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o),_+=Rs,h=Math.cos(_)*(r?r/2:v),o=Math.cos(_)*v,a=Math.sin(_)*v,f=Math.sin(_)*(r?r/2:v),n.moveTo(e-h,s-a),n.lineTo(e+h,s+a),n.moveTo(e+f,s-o),n.lineTo(e-f,s+o);break;case"line":o=r?r/2:Math.cos(_)*v,a=Math.sin(_)*v,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(_)*(r?r/2:v),s+Math.sin(_)*v);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Nn(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function nl(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function sl(n){n.restore()}function C1(n,t,e,s,r){if(!t)return n.lineTo(e.x,e.y);if(r==="middle"){const i=(t.x+e.x)/2;n.lineTo(i,t.y),n.lineTo(i,e.y)}else r==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function R1(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function P1(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),dt(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function D1(n,t,e,s,r){if(r.strikethrough||r.underline){const i=n.measureText(s),o=t-i.actualBoundingBoxLeft,a=t+i.actualBoundingBoxRight,c=e-i.actualBoundingBoxAscent,l=e+i.actualBoundingBoxDescent,d=r.strikethrough?(c+l)/2:l;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=r.decorationWidth||2,n.moveTo(o,d),n.lineTo(a,d),n.stroke()}}function M1(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function ar(n,t,e,s,r,i={}){const o=Ft(t)?t:[t],a=i.strokeWidth>0&&i.strokeColor!=="";let c,l;for(n.save(),n.font=r.string,P1(n,i),c=0;c<o.length;++c)l=o[c],i.backdrop&&M1(n,i.backdrop),a&&(i.strokeColor&&(n.strokeStyle=i.strokeColor),dt(i.strokeWidth)||(n.lineWidth=i.strokeWidth),n.strokeText(l,e,s,i.maxWidth)),n.fillText(l,e,s,i.maxWidth),D1(n,e,s,l,i),s+=Number(r.lineHeight);n.restore()}function _o(n,t){const{x:e,y:s,w:r,h:i,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*wt,wt,!0),n.lineTo(e,s+i-o.bottomLeft),n.arc(e+o.bottomLeft,s+i-o.bottomLeft,o.bottomLeft,wt,Zt,!0),n.lineTo(e+r-o.bottomRight,s+i),n.arc(e+r-o.bottomRight,s+i-o.bottomRight,o.bottomRight,Zt,0,!0),n.lineTo(e+r,s+o.topRight),n.arc(e+r-o.topRight,s+o.topRight,o.topRight,0,-Zt,!0),n.lineTo(e+o.topLeft,s)}const O1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,N1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function L1(n,t){const e=(""+n).match(O1);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const V1=n=>+n||0;function ah(n,t){const e={},s=pt(t),r=s?Object.keys(t):t,i=pt(n)?s?o=>it(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of r)e[o]=V1(i(o));return e}function kv(n){return ah(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Ws(n){return ah(n,["topLeft","topRight","bottomLeft","bottomRight"])}function Se(n){const t=kv(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function oe(n,t){n=n||{},t=t||Bt.font;let e=it(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=it(n.style,t.style);s&&!(""+s).match(N1)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const r={family:it(n.family,t.family),lineHeight:L1(it(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:it(n.weight,t.weight),string:""};return r.string=S1(r),r}function Vi(n,t,e,s){let r,i,o;for(r=0,i=n.length;r<i;++r)if(o=n[r],o!==void 0&&o!==void 0)return o}function F1(n,t,e){const{min:s,max:r}=n,i=gv(t,(r-s)/2),o=(a,c)=>e&&a===0?0:a+c;return{min:o(s,-Math.abs(i)),max:o(r,i)}}function xs(n,t){return Object.assign(Object.create(n),t)}function ch(n,t=[""],e,s,r=()=>n[0]){const i=e||n;typeof s>"u"&&(s=Dv("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:i,_fallback:s,_getTarget:r,override:a=>ch([a,...n],t,i,s)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete a._keys,delete n[0][c],!0},get(a,c){return Rv(a,c,()=>W1(c,t,n,a))},getOwnPropertyDescriptor(a,c){return Reflect.getOwnPropertyDescriptor(a._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,c){return im(a).includes(c)},ownKeys(a){return im(a)},set(a,c,l){const d=a._storage||(a._storage=r());return a[c]=d[c]=l,delete a._keys,!0}})}function Kr(n,t,e,s){const r={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:Cv(n,s),setContext:i=>Kr(n,i,e,s),override:i=>Kr(n.override(i),t,e,s)};return new Proxy(r,{deleteProperty(i,o){return delete i[o],delete n[o],!0},get(i,o,a){return Rv(i,o,()=>B1(i,o,a))},getOwnPropertyDescriptor(i,o){return i._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(i,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(i,o,a){return n[o]=a,delete i[o],!0}})}function Cv(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:r=t.allKeys}=n;return{allKeys:r,scriptable:e,indexable:s,isScriptable:_s(e)?e:()=>e,isIndexable:_s(s)?s:()=>s}}const $1=(n,t)=>n?n+nh(t):t,lh=(n,t)=>pt(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Rv(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function B1(n,t,e){const{_proxy:s,_context:r,_subProxy:i,_descriptors:o}=n;let a=s[t];return _s(a)&&o.isScriptable(t)&&(a=U1(t,a,n,e)),Ft(a)&&a.length&&(a=j1(t,a,n,o.isIndexable)),lh(t,a)&&(a=Kr(a,r,i&&i[t],o)),a}function U1(n,t,e,s){const{_proxy:r,_context:i,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let c=t(i,o||s);return a.delete(n),lh(n,c)&&(c=uh(r._scopes,r,n,c)),c}function j1(n,t,e,s){const{_proxy:r,_context:i,_subProxy:o,_descriptors:a}=e;if(typeof i.index<"u"&&s(n))return t[i.index%t.length];if(pt(t[0])){const c=t,l=r._scopes.filter(d=>d!==c);t=[];for(const d of c){const h=uh(l,r,n,d);t.push(Kr(h,i,o&&o[n],a))}}return t}function Pv(n,t,e){return _s(n)?n(t,e):n}const z1=(n,t)=>n===!0?t:typeof n=="string"?gs(t,n):void 0;function H1(n,t,e,s,r){for(const i of t){const o=z1(e,i);if(o){n.add(o);const a=Pv(o._fallback,e,r);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function uh(n,t,e,s){const r=t._rootScopes,i=Pv(t._fallback,e,s),o=[...n,...r],a=new Set;a.add(s);let c=rm(a,o,e,i||e,s);return c===null||typeof i<"u"&&i!==e&&(c=rm(a,o,i,c,s),c===null)?!1:ch(Array.from(a),[""],r,i,()=>q1(t,e,s))}function rm(n,t,e,s,r){for(;e;)e=H1(n,t,e,s,r);return e}function q1(n,t,e){const s=n._getTarget();t in s||(s[t]={});const r=s[t];return Ft(r)&&pt(e)?e:r||{}}function W1(n,t,e,s){let r;for(const i of t)if(r=Dv($1(i,n),e),typeof r<"u")return lh(n,r)?uh(e,s,n,r):r}function Dv(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function im(n){let t=n._keys;return t||(t=n._keys=G1(n._scopes)),t}function G1(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(r=>!r.startsWith("_")))t.add(s);return Array.from(t)}function Mv(n,t,e,s){const{iScale:r}=n,{key:i="r"}=this._parsing,o=new Array(s);let a,c,l,d;for(a=0,c=s;a<c;++a)l=a+e,d=t[l],o[a]={r:r.parse(gs(d,i),l)};return o}const Y1=Number.EPSILON||1e-14,Qr=(n,t)=>t<n.length&&!n[t].skip&&n[t],Ov=n=>n==="x"?"y":"x";function K1(n,t,e,s){const r=n.skip?t:n,i=t,o=e.skip?t:e,a=Nu(i,r),c=Nu(o,i);let l=a/(a+c),d=c/(a+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;const h=s*l,f=s*d;return{previous:{x:i.x-h*(o.x-r.x),y:i.y-h*(o.y-r.y)},next:{x:i.x+f*(o.x-r.x),y:i.y+f*(o.y-r.y)}}}function Q1(n,t,e){const s=n.length;let r,i,o,a,c,l=Qr(n,0);for(let d=0;d<s-1;++d)if(c=l,l=Qr(n,d+1),!(!c||!l)){if(Qi(t[d],0,Y1)){e[d]=e[d+1]=0;continue}r=e[d]/t[d],i=e[d+1]/t[d],a=Math.pow(r,2)+Math.pow(i,2),!(a<=9)&&(o=3/Math.sqrt(a),e[d]=r*o*t[d],e[d+1]=i*o*t[d])}}function X1(n,t,e="x"){const s=Ov(e),r=n.length;let i,o,a,c=Qr(n,0);for(let l=0;l<r;++l){if(o=a,a=c,c=Qr(n,l+1),!a)continue;const d=a[e],h=a[s];o&&(i=(d-o[e])/3,a[`cp1${e}`]=d-i,a[`cp1${s}`]=h-i*t[l]),c&&(i=(c[e]-d)/3,a[`cp2${e}`]=d+i,a[`cp2${s}`]=h+i*t[l])}}function J1(n,t="x"){const e=Ov(t),s=n.length,r=Array(s).fill(0),i=Array(s);let o,a,c,l=Qr(n,0);for(o=0;o<s;++o)if(a=c,c=l,l=Qr(n,o+1),!!c){if(l){const d=l[t]-c[t];r[o]=d!==0?(l[e]-c[e])/d:0}i[o]=a?l?yn(r[o-1])!==yn(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}Q1(n,r,i),X1(n,i,t)}function xa(n,t,e){return Math.max(Math.min(n,e),t)}function Z1(n,t){let e,s,r,i,o,a=Nn(n[0],t);for(e=0,s=n.length;e<s;++e)o=i,i=a,a=e<s-1&&Nn(n[e+1],t),i&&(r=n[e],o&&(r.cp1x=xa(r.cp1x,t.left,t.right),r.cp1y=xa(r.cp1y,t.top,t.bottom)),a&&(r.cp2x=xa(r.cp2x,t.left,t.right),r.cp2y=xa(r.cp2y,t.top,t.bottom)))}function tC(n,t,e,s,r){let i,o,a,c;if(t.spanGaps&&(n=n.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")J1(n,r);else{let l=s?n[n.length-1]:n[0];for(i=0,o=n.length;i<o;++i)a=n[i],c=K1(l,a,n[Math.min(i+1,o-(s?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&Z1(n,e)}function dh(){return typeof window<"u"&&typeof document<"u"}function hh(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function yc(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const rl=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function eC(n,t){return rl(n).getPropertyValue(t)}const nC=["top","right","bottom","left"];function Gs(n,t,e){const s={};e=e?"-"+e:"";for(let r=0;r<4;r++){const i=nC[r];s[i]=parseFloat(n[t+"-"+i+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const sC=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function rC(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:r,offsetY:i}=s;let o=!1,a,c;if(sC(r,i,n.target))a=r,c=i;else{const l=t.getBoundingClientRect();a=s.clientX-l.left,c=s.clientY-l.top,o=!0}return{x:a,y:c,box:o}}function Fs(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,r=rl(e),i=r.boxSizing==="border-box",o=Gs(r,"padding"),a=Gs(r,"border","width"),{x:c,y:l,box:d}=rC(n,e),h=o.left+(d&&a.left),f=o.top+(d&&a.top);let{width:m,height:g}=t;return i&&(m-=o.width+a.width,g-=o.height+a.height),{x:Math.round((c-h)/m*e.width/s),y:Math.round((l-f)/g*e.height/s)}}function iC(n,t,e){let s,r;if(t===void 0||e===void 0){const i=n&&hh(n);if(!i)t=n.clientWidth,e=n.clientHeight;else{const o=i.getBoundingClientRect(),a=rl(i),c=Gs(a,"border","width"),l=Gs(a,"padding");t=o.width-l.width-c.width,e=o.height-l.height-c.height,s=yc(a.maxWidth,i,"clientWidth"),r=yc(a.maxHeight,i,"clientHeight")}}return{width:t,height:e,maxWidth:s||gc,maxHeight:r||gc}}const is=n=>Math.round(n*10)/10;function oC(n,t,e,s){const r=rl(n),i=Gs(r,"margin"),o=yc(r.maxWidth,n,"clientWidth")||gc,a=yc(r.maxHeight,n,"clientHeight")||gc,c=iC(n,t,e);let{width:l,height:d}=c;if(r.boxSizing==="content-box"){const f=Gs(r,"border","width"),m=Gs(r,"padding");l-=m.width+f.width,d-=m.height+f.height}return l=Math.max(0,l-i.width),d=Math.max(0,s?l/s:d-i.height),l=is(Math.min(l,o,c.maxWidth)),d=is(Math.min(d,a,c.maxHeight)),l&&!d&&(d=is(l/2)),(t!==void 0||e!==void 0)&&s&&c.height&&d>c.height&&(d=c.height,l=is(Math.floor(d*s))),{width:l,height:d}}function om(n,t,e){const s=t||1,r=is(n.height*s),i=is(n.width*s);n.height=is(n.height),n.width=is(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==r||o.width!==i?(n.currentDevicePixelRatio=s,o.height=r,o.width=i,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const aC=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};dh()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function am(n,t){const e=eC(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function $s(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function cC(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function lC(n,t,e,s){const r={x:n.cp2x,y:n.cp2y},i={x:t.cp1x,y:t.cp1y},o=$s(n,r,e),a=$s(r,i,e),c=$s(i,t,e),l=$s(o,a,e),d=$s(a,c,e);return $s(l,d,e)}const uC=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},dC=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Br(n,t,e){return n?uC(t,e):dC()}function Nv(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function Lv(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function Vv(n){return n==="angle"?{between:go,compare:h1,normalize:we}:{between:Mn,compare:(t,e)=>t-e,normalize:t=>t}}function cm({start:n,end:t,count:e,loop:s,style:r}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:r}}function hC(n,t,e){const{property:s,start:r,end:i}=e,{between:o,normalize:a}=Vv(s),c=t.length;let{start:l,end:d,loop:h}=n,f,m;if(h){for(l+=c,d+=c,f=0,m=c;f<m&&o(a(t[l%c][s]),r,i);++f)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:n.style}}function Fv(n,t,e){if(!e)return[n];const{property:s,start:r,end:i}=e,o=t.length,{compare:a,between:c,normalize:l}=Vv(s),{start:d,end:h,loop:f,style:m}=hC(n,t,e),g=[];let v=!1,_=null,I,w,S;const P=()=>c(r,S,I)&&a(r,S)!==0,R=()=>a(i,I)===0||c(i,S,I),M=()=>v||P(),E=()=>!v||R();for(let b=d,x=d;b<=h;++b)w=t[b%o],!w.skip&&(I=l(w[s]),I!==S&&(v=c(I,r,i),_===null&&M()&&(_=a(I,r)===0?b:x),_!==null&&E()&&(g.push(cm({start:_,end:b,loop:f,count:o,style:m})),_=null),x=b,S=I));return _!==null&&g.push(cm({start:_,end:h,loop:f,count:o,style:m})),g}function $v(n,t){const e=[],s=n.segments;for(let r=0;r<s.length;r++){const i=Fv(s[r],n.points,t);i.length&&e.push(...i)}return e}function fC(n,t,e,s){let r=0,i=t-1;if(e&&!s)for(;r<t&&!n[r].skip;)r++;for(;r<t&&n[r].skip;)r++;for(r%=t,e&&(i+=r);i>r&&n[i%t].skip;)i--;return i%=t,{start:r,end:i}}function pC(n,t,e,s){const r=n.length,i=[];let o=t,a=n[t],c;for(c=t+1;c<=e;++c){const l=n[c%r];l.skip||l.stop?a.skip||(s=!1,i.push({start:t%r,end:(c-1)%r,loop:s}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&i.push({start:t%r,end:o%r,loop:s}),i}function mC(n,t){const e=n.points,s=n.options.spanGaps,r=e.length;if(!r)return[];const i=!!n._loop,{start:o,end:a}=fC(e,r,i,s);if(s===!0)return lm(n,[{start:o,end:a,loop:i}],e,t);const c=a<o?a+r:a,l=!!n._fullLoop&&o===0&&a===r-1;return lm(n,pC(e,o,c,l),e,t)}function lm(n,t,e,s){return!s||!s.setContext||!e?t:gC(n,t,e,s)}function gC(n,t,e,s){const r=n._chart.getContext(),i=um(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,c=e.length,l=[];let d=i,h=t[0].start,f=h;function m(g,v,_,I){const w=a?-1:1;if(g!==v){for(g+=c;e[g%c].skip;)g-=w;for(;e[v%c].skip;)v+=w;g%c!==v%c&&(l.push({start:g%c,end:v%c,loop:_,style:I}),d=I,h=v%c)}}for(const g of t){h=a?h:g.start;let v=e[h%c],_;for(f=h+1;f<=g.end;f++){const I=e[f%c];_=um(s.setContext(xs(r,{type:"segment",p0:v,p1:I,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),_C(_,d)&&m(h,f-1,g.loop,d),v=I,d=_}h<f-1&&m(h,f-1,g.loop,d)}return l}function um(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function _C(n,t){if(!t)return!1;const e=[],s=function(r,i){return oh(i)?(e.includes(i)||e.push(i),e.indexOf(i)):i};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function wa(n,t,e){return n.options.clip?n[e]:t[e]}function yC(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:wa(e,t,"left"),right:wa(e,t,"right"),top:wa(s,t,"top"),bottom:wa(s,t,"bottom")}:t}function Bv(n,t){const e=t._clip;if(e.disabled)return!1;const s=yC(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class vC{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,r){const i=e.listeners[r],o=e.duration;i.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=wv.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,r)=>{if(!s.running||!s.items.length)return;const i=s.items;let o=i.length-1,a=!1,c;for(;o>=0;--o)c=i[o],c._active?(c._total>s.duration&&(s.duration=c._total),c.tick(t),a=!0):(i[o]=i[i.length-1],i.pop());a&&(r.draw(),this._notify(r,s,t,"progress")),i.length||(s.running=!1,this._notify(r,s,t,"complete"),s.initial=!1),e+=i.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,r)=>Math.max(s,r._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let r=s.length-1;for(;r>=0;--r)s[r].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var In=new vC;const dm="transparent",bC={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=em(n||dm),r=s.valid&&em(t||dm);return r&&r.valid?r.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class xC{constructor(t,e,s,r){const i=e[s];r=Vi([t.to,r,i,t.from]);const o=Vi([t.from,i,r]);this._active=!0,this._fn=t.fn||bC[t.type||typeof o],this._easing=Xi[t.easing]||Xi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const r=this._target[this._prop],i=s-this._start,o=this._duration-i;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=i,this._loop=!!t.loop,this._to=Vi([t.to,e,r,t.from]),this._from=Vi([t.from,r,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,r=this._prop,i=this._from,o=this._loop,a=this._to;let c;if(this._active=i!==a&&(o||e<s),!this._active){this._target[r]=a,this._notify(!0);return}if(e<0){this._target[r]=i;return}c=e/s%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[r]=this._fn(i,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let r=0;r<s.length;r++)s[r][e]()}}class Uv{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!pt(t))return;const e=Object.keys(Bt.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(r=>{const i=t[r];if(!pt(i))return;const o={};for(const a of e)o[a]=i[a];(Ft(i.properties)&&i.properties||[r]).forEach(a=>{(a===r||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,r=EC(t,s);if(!r)return[];const i=this._createAnimations(r,s);return s.$shared&&wC(t.options.$animations,s).then(()=>{t.options=s},()=>{}),i}_createAnimations(t,e){const s=this._properties,r=[],i=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){r.push(...this._animateOptions(t,e));continue}const d=e[l];let h=i[l];const f=s.get(l);if(h)if(f&&h.active()){h.update(f,d,a);continue}else h.cancel();if(!f||!f.duration){t[l]=d;continue}i[l]=h=new xC(f,t,l,d),r.push(h)}return r}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return In.add(this._chart,s),!0}}function wC(n,t){const e=[],s=Object.keys(t);for(let r=0;r<s.length;r++){const i=n[s[r]];i&&i.active()&&e.push(i.wait())}return Promise.all(e)}function EC(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function hm(n,t){const e=n&&n.options||{},s=e.reverse,r=e.min===void 0?t:0,i=e.max===void 0?t:0;return{start:s?i:r,end:s?r:i}}function TC(n,t,e){if(e===!1)return!1;const s=hm(n,e),r=hm(t,e);return{top:r.end,right:s.end,bottom:r.start,left:s.start}}function IC(n){let t,e,s,r;return pt(n)?(t=n.top,e=n.right,s=n.bottom,r=n.left):t=e=s=r=n,{top:t,right:e,bottom:s,left:r,disabled:n===!1}}function jv(n,t){const e=[],s=n._getSortedDatasetMetas(t);let r,i;for(r=0,i=s.length;r<i;++r)e.push(s[r].index);return e}function fm(n,t,e,s={}){const r=n.keys,i=s.mode==="single";let o,a,c,l;if(t===null)return;let d=!1;for(o=0,a=r.length;o<a;++o){if(c=+r[o],c===e){if(d=!0,s.all)continue;break}l=n.values[c],Yt(l)&&(i||t===0||yn(t)===yn(l))&&(t+=l)}return!d&&!s.all?0:t}function AC(n,t){const{iScale:e,vScale:s}=t,r=e.axis==="x"?"x":"y",i=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],a[c]={[r]:d,[i]:n[d]};return a}function Hl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function SC(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function kC(n){const{min:t,max:e,minDefined:s,maxDefined:r}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:r?e:Number.POSITIVE_INFINITY}}function CC(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function pm(n,t,e,s){for(const r of t.getMatchingVisibleMetas(s).reverse()){const i=n[r.index];if(e&&i>0||!e&&i<0)return r.index}return null}function mm(n,t){const{chart:e,_cachedMeta:s}=n,r=e._stacks||(e._stacks={}),{iScale:i,vScale:o,index:a}=s,c=i.axis,l=o.axis,d=SC(i,o,s),h=t.length;let f;for(let m=0;m<h;++m){const g=t[m],{[c]:v,[l]:_}=g,I=g._stacks||(g._stacks={});f=I[l]=CC(r,d,v),f[a]=_,f._top=pm(f,o,!0,s.type),f._bottom=pm(f,o,!1,s.type);const w=f._visualValues||(f._visualValues={});w[a]=_}}function ql(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function RC(n,t){return xs(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function PC(n,t,e){return xs(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function bi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const r of t){const i=r._stacks;if(!i||i[s]===void 0||i[s][e]===void 0)return;delete i[s][e],i[s]._visualValues!==void 0&&i[s]._visualValues[e]!==void 0&&delete i[s]._visualValues[e]}}}const Wl=n=>n==="reset"||n==="none",gm=(n,t)=>t?n:Object.assign({},n),DC=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:jv(e,!0),values:null};class Ze{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Hl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&bi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),r=(h,f,m,g)=>h==="x"?f:h==="r"?g:m,i=e.xAxisID=it(s.xAxisID,ql(t,"x")),o=e.yAxisID=it(s.yAxisID,ql(t,"y")),a=e.rAxisID=it(s.rAxisID,ql(t,"r")),c=e.indexAxis,l=e.iAxisID=r(c,i,o,a),d=e.vAxisID=r(c,o,i,a);e.xScale=this.getScaleForId(i),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Jp(this._data,this),t._stacked&&bi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(pt(e)){const r=this._cachedMeta;this._data=AC(e,r)}else if(s!==e){if(s){Jp(s,this);const r=this._cachedMeta;bi(r),r._parsed=[]}e&&Object.isExtensible(e)&&g1(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let r=!1;this._dataCheck();const i=e._stacked;e._stacked=Hl(e.vScale,e),e.stack!==s.stack&&(r=!0,bi(e),e.stack=s.stack),this._resyncElements(t),(r||i!==e._stacked)&&(mm(this,e._parsed),e._stacked=Hl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:r}=this,{iScale:i,_stacked:o}=s,a=i.axis;let c=t===0&&e===r.length?!0:s._sorted,l=t>0&&s._parsed[t-1],d,h,f;if(this._parsing===!1)s._parsed=r,s._sorted=!0,f=r;else{Ft(r[t])?f=this.parseArrayData(s,r,t,e):pt(r[t])?f=this.parseObjectData(s,r,t,e):f=this.parsePrimitiveData(s,r,t,e);const m=()=>h[a]===null||l&&h[a]<l[a];for(d=0;d<e;++d)s._parsed[d+t]=h=f[d],c&&(m()&&(c=!1),l=h);s._sorted=c}o&&mm(this,f)}parsePrimitiveData(t,e,s,r){const{iScale:i,vScale:o}=t,a=i.axis,c=o.axis,l=i.getLabels(),d=i===o,h=new Array(r);let f,m,g;for(f=0,m=r;f<m;++f)g=f+s,h[f]={[a]:d||i.parse(l[g],g),[c]:o.parse(e[g],g)};return h}parseArrayData(t,e,s,r){const{xScale:i,yScale:o}=t,a=new Array(r);let c,l,d,h;for(c=0,l=r;c<l;++c)d=c+s,h=e[d],a[c]={x:i.parse(h[0],d),y:o.parse(h[1],d)};return a}parseObjectData(t,e,s,r){const{xScale:i,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(r);let d,h,f,m;for(d=0,h=r;d<h;++d)f=d+s,m=e[f],l[d]={x:i.parse(gs(m,a),f),y:o.parse(gs(m,c),f)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const r=this.chart,i=this._cachedMeta,o=e[t.axis],a={keys:jv(r,!0),values:e._stacks[t.axis]._visualValues};return fm(a,o,i.index,{mode:s})}updateRangeFromParsed(t,e,s,r){const i=s[e.axis];let o=i===null?NaN:i;const a=r&&s._stacks[e.axis];r&&a&&(r.values=a,o=fm(r,i,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,r=s._parsed,i=s._sorted&&t===s.iScale,o=r.length,a=this._getOtherScale(t),c=DC(e,s,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=kC(a);let f,m;function g(){m=r[f];const v=m[a.axis];return!Yt(m[t.axis])||d>v||h<v}for(f=0;f<o&&!(!g()&&(this.updateRangeFromParsed(l,t,m,c),i));++f);if(i){for(f=o-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(l,t,m,c);break}}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let r,i,o;for(r=0,i=e.length;r<i;++r)o=e[r][t.axis],Yt(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,r=e.vScale,i=this.getParsed(t);return{label:s?""+s.getLabelForValue(i[s.axis]):"",value:r?""+r.getLabelForValue(i[r.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=IC(it(this.options.clip,TC(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,r=s.data||[],i=e.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||r.length-a,l=this.options.drawActiveElementsOnTop;let d;for(s.dataset&&s.dataset.draw(t,i,a,c),d=a;d<a+c;++d){const h=r[d];h.hidden||(h.active&&l?o.push(h):h.draw(t,i))}for(d=0;d<o.length;++d)o[d].draw(t,i)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const r=this.getDataset();let i;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];i=o.$context||(o.$context=PC(this.getContext(),t,o)),i.parsed=this.getParsed(t),i.raw=r.data[t],i.index=i.dataIndex=t}else i=this.$context||(this.$context=RC(this.chart.getContext(),this.index)),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!e,i.mode=s,i}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const r=e==="active",i=this._cachedDataOpts,o=t+"-"+e,a=i[o],c=this.enableOptionSharing&&mo(s);if(a)return gm(a,c);const l=this.chart.config,d=l.datasetElementScopeKeys(this._type,t),h=r?[`${t}Hover`,"hover",t,""]:[t,""],f=l.getOptionScopes(this.getDataset(),d),m=Object.keys(Bt.elements[t]),g=()=>this.getContext(s,r,e),v=l.resolveNamedOptions(f,m,g,h);return v.$shared&&(v.$shared=c,i[o]=Object.freeze(gm(v,c))),v}_resolveAnimations(t,e,s){const r=this.chart,i=this._cachedDataOpts,o=`animation-${e}`,a=i[o];if(a)return a;let c;if(r.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);c=d.createResolver(f,this.getContext(t,s,e))}const l=new Uv(r,c&&c.animations);return c&&c._cacheable&&(i[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Wl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),r=this._sharedOptions,i=this.getSharedOptions(s),o=this.includeOptions(e,i)||i!==r;return this.updateSharedOptions(i,e,s),{sharedOptions:i,includeOptions:o}}updateElement(t,e,s,r){Wl(r)?Object.assign(t,s):this._resolveAnimations(e,r).update(t,s)}updateSharedOptions(t,e,s){t&&!Wl(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,r){t.active=r;const i=this.getStyle(e,r);this._resolveAnimations(e,s,r).update(t,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const r=s.length,i=e.length,o=Math.min(i,r);o&&this.parse(0,o),i>r?this._insertElements(r,i-r,t):i<r&&this._removeElements(i,r-i)}_insertElements(t,e,s=!0){const r=this._cachedMeta,i=r.data,o=t+e;let a;const c=l=>{for(l.length+=e,a=l.length-1;a>=o;a--)l[a]=l[a-e]};for(c(i),a=t;a<o;++a)i[a]=new this.dataElementType;this._parsing&&c(r._parsed),this.parse(t,e),s&&this.updateElements(i,t,e,"reset")}updateElements(t,e,s,r){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const r=s._parsed.splice(t,e);s._stacked&&bi(s,r)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,r]=t;this[e](s,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}L(Ze,"defaults",{}),L(Ze,"datasetElementType",null),L(Ze,"dataElementType",null);function MC(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let r=0,i=e.length;r<i;r++)s=s.concat(e[r].controller.getAllParsedValues(n));n._cache.$bar=xv(s.sort((r,i)=>r-i))}return n._cache.$bar}function OC(n){const t=n.iScale,e=MC(t,n.type);let s=t._length,r,i,o,a;const c=()=>{o===32767||o===-32768||(mo(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(r=0,i=e.length;r<i;++r)o=t.getPixelForValue(e[r]),c();for(a=void 0,r=0,i=t.ticks.length;r<i;++r)o=t.getPixelForTick(r),c();return s}function NC(n,t,e,s){const r=e.barThickness;let i,o;return dt(r)?(i=t.min*e.categoryPercentage,o=e.barPercentage):(i=r*s,o=1),{chunk:i/s,ratio:o,start:t.pixels[n]-i/2}}function LC(n,t,e,s){const r=t.pixels,i=r[n];let o=n>0?r[n-1]:null,a=n<r.length-1?r[n+1]:null;const c=e.categoryPercentage;o===null&&(o=i-(a===null?t.end-t.start:a-i)),a===null&&(a=i+i-o);const l=i-(i-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/s,ratio:e.barPercentage,start:l}}function VC(n,t,e,s){const r=e.parse(n[0],s),i=e.parse(n[1],s),o=Math.min(r,i),a=Math.max(r,i);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[e.axis]=l,t._custom={barStart:c,barEnd:l,start:r,end:i,min:o,max:a}}function zv(n,t,e,s){return Ft(n)?VC(n,t,e,s):t[e.axis]=e.parse(n,s),t}function _m(n,t,e,s){const r=n.iScale,i=n.vScale,o=r.getLabels(),a=r===i,c=[];let l,d,h,f;for(l=e,d=e+s;l<d;++l)f=t[l],h={},h[r.axis]=a||r.parse(o[l],l),c.push(zv(f,h,i,l));return c}function Gl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function FC(n,t,e){return n!==0?yn(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function $C(n){let t,e,s,r,i;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(r="end",i="start"):(r="start",i="end"),{start:e,end:s,reverse:t,top:r,bottom:i}}function BC(n,t,e,s){let r=t.borderSkipped;const i={};if(!r){n.borderSkipped=i;return}if(r===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:d}=$C(n);r==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?r=l:(e._bottom||0)===s?r=d:(i[ym(d,o,a,c)]=!0,r=l)),i[ym(r,o,a,c)]=!0,n.borderSkipped=i}function ym(n,t,e,s){return s?(n=UC(n,t,e),n=vm(n,e,t)):n=vm(n,t,e),n}function UC(n,t,e){return n===t?e:n===e?t:n}function vm(n,t,e){return n==="start"?t:n==="end"?e:n}function jC(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class $a extends Ze{parsePrimitiveData(t,e,s,r){return _m(t,e,s,r)}parseArrayData(t,e,s,r){return _m(t,e,s,r)}parseObjectData(t,e,s,r){const{iScale:i,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=i.axis==="x"?a:c,d=o.axis==="x"?a:c,h=[];let f,m,g,v;for(f=s,m=s+r;f<m;++f)v=e[f],g={},g[i.axis]=i.parse(gs(v,l),f),h.push(zv(gs(v,d),g,o,f));return h}updateRangeFromParsed(t,e,s,r){super.updateRangeFromParsed(t,e,s,r);const i=s._custom;i&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:r}=e,i=this.getParsed(t),o=i._custom,a=Gl(o)?"["+o.start+", "+o.end+"]":""+r.getLabelForValue(i[r.axis]);return{label:""+s.getLabelForValue(i[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,r){const i=r==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),d=this._getRuler(),{sharedOptions:h,includeOptions:f}=this._getSharedOptions(e,r);for(let m=e;m<e+s;m++){const g=this.getParsed(m),v=i||dt(g[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),_=this._calculateBarIndexPixels(m,d),I=(g._stacks||{})[a.axis],w={horizontal:l,base:v.base,enableBorderRadius:!I||Gl(g._custom)||o===I._top||o===I._bottom,x:l?v.head:_.center,y:l?_.center:v.head,height:l?_.size:Math.abs(v.size),width:l?Math.abs(v.size):_.size};f&&(w.options=h||this.resolveDataElementOptions(m,t[m].active?"active":r));const S=w.options||t[m].options;BC(w,S,I,o),jC(w,S,d.ratio),this.updateElement(t[m],m,w,r)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,r=s.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),i=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),c=a&&a[s.axis],l=d=>{const h=d._parsed.find(m=>m[s.axis]===c),f=h&&h[d.vScale.axis];if(dt(f)||isNaN(f))return!0};for(const d of r)if(!(e!==void 0&&l(d))&&((i===!1||o.indexOf(d.stack)===-1||i===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[it(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const r=this._getStacks(t,s),i=e!==void 0?r.indexOf(e):-1;return i===-1?r.length-1:i}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,r=[];let i,o;for(i=0,o=e.data.length;i<o;++i)r.push(s.getPixelForValue(this.getParsed(i)[s.axis],i));const a=t.barThickness;return{min:a||OC(e),pixels:r,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:r},options:{base:i,minBarLength:o}}=this,a=i||0,c=this.getParsed(t),l=c._custom,d=Gl(l);let h=c[e.axis],f=0,m=s?this.applyStack(e,c,s):h,g,v;m!==h&&(f=m-h,m=h),d&&(h=l.barStart,m=l.barEnd-l.barStart,h!==0&&yn(h)!==yn(l.barEnd)&&(f=0),f+=h);const _=!dt(i)&&!d?i:f;let I=e.getPixelForValue(_);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(f+m):g=I,v=g-I,Math.abs(v)<o){v=FC(v,e,a)*o,h===a&&(I-=v/2);const w=e.getPixelForDecimal(0),S=e.getPixelForDecimal(1),P=Math.min(w,S),R=Math.max(w,S);I=Math.max(Math.min(I,R),P),g=I+v,s&&!d&&(c._stacks[e.axis]._visualValues[r]=e.getValueForPixel(g)-e.getValueForPixel(I))}if(I===e.getPixelForValue(a)){const w=yn(v)*e.getLineWidthForValue(a)/2;I+=w,v-=w}return{size:v,base:I,head:g,center:g+v/2}}_calculateBarIndexPixels(t,e){const s=e.scale,r=this.options,i=r.skipNull,o=it(r.maxBarThickness,1/0);let a,c;const l=this._getAxisCount();if(e.grouped){const d=i?this._getStackCount(t):e.stackCount,h=r.barThickness==="flex"?LC(t,e,r,d*l):NC(t,e,r,d*l),f=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(it(f,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,i?t:void 0)+m;a=h.start+h.chunk*g+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,r=s.length;let i=0;for(;i<r;++i)this.getParsed(i)[e.axis]!==null&&!s[i].hidden&&s[i].draw(this._ctx)}}L($a,"id","bar"),L($a,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),L($a,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Ba extends Ze{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,r){const i=super.parsePrimitiveData(t,e,s,r);for(let o=0;o<i.length;o++)i[o]._custom=this.resolveDataElementOptions(o+s).radius;return i}parseArrayData(t,e,s,r){const i=super.parseArrayData(t,e,s,r);for(let o=0;o<i.length;o++){const a=e[s+o];i[o]._custom=it(a[2],this.resolveDataElementOptions(o+s).radius)}return i}parseObjectData(t,e,s,r){const i=super.parseObjectData(t,e,s,r);for(let o=0;o<i.length;o++){const a=e[s+o];i[o]._custom=it(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return i}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:i}=e,o=this.getParsed(t),a=r.getLabelForValue(o.x),c=i.getLabelForValue(o.y),l=o._custom;return{label:s[t]||"",value:"("+a+", "+c+(l?", "+l:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(e,r),d=o.axis,h=a.axis;for(let f=e;f<e+s;f++){const m=t[f],g=!i&&this.getParsed(f),v={},_=v[d]=i?o.getPixelForDecimal(.5):o.getPixelForValue(g[d]),I=v[h]=i?a.getBasePixel():a.getPixelForValue(g[h]);v.skip=isNaN(_)||isNaN(I),l&&(v.options=c||this.resolveDataElementOptions(f,m.active?"active":r),i&&(v.options.radius=0)),this.updateElement(m,f,v,r)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let r=super.resolveDataElementOptions(t,e);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const i=r.radius;return e!=="active"&&(r.radius=0),r.radius+=it(s&&s._custom,i),r}}L(Ba,"id","bubble"),L(Ba,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),L(Ba,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function zC(n,t,e){let s=1,r=1,i=0,o=0;if(t<Lt){const a=n,c=a+t,l=Math.cos(a),d=Math.sin(a),h=Math.cos(c),f=Math.sin(c),m=(S,P,R)=>go(S,a,c,!0)?1:Math.max(P,P*e,R,R*e),g=(S,P,R)=>go(S,a,c,!0)?-1:Math.min(P,P*e,R,R*e),v=m(0,l,h),_=m(Zt,d,f),I=g(wt,l,h),w=g(wt+Zt,d,f);s=(v-I)/2,r=(_-w)/2,i=-(v+I)/2,o=-(_+w)/2}return{ratioX:s,ratioY:r,offsetX:i,offsetY:o}}class zs extends Ze{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=s;else{let i=c=>+s[c];if(pt(s[t])){const{key:c="value"}=this._parsing;i=l=>+gs(s[l],c)}let o,a;for(o=t,a=t+e;o<a;++o)r._parsed[o]=i(o)}}_getRotation(){return Je(this.options.rotation-90)}_getCircumference(){return Je(this.options.circumference)}_getRotationExtents(){let t=Lt,e=-Lt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const r=this.chart.getDatasetMeta(s).controller,i=r._getRotation(),o=r._getCircumference();t=Math.min(t,i),e=Math.max(e,i+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,r=this._cachedMeta,i=r.data,o=this.getMaxBorderWidth()+this.getMaxOffset(i)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),c=Math.min(e1(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:d,rotation:h}=this._getRotationExtents(),{ratioX:f,ratioY:m,offsetX:g,offsetY:v}=zC(h,d,c),_=(s.width-o)/f,I=(s.height-o)/m,w=Math.max(Math.min(_,I)/2,0),S=gv(this.options.radius,w),P=Math.max(S*c,0),R=(S-P)/this._getVisibleDatasetWeightTotal();this.offsetX=g*S,this.offsetY=v*S,r.total=this.calculateTotal(),this.outerRadius=S-R*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-R*l,0),this.updateElements(i,0,i.length,t)}_circumference(t,e){const s=this.options,r=this._cachedMeta,i=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||r._parsed[t]===null||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*i/Lt)}updateElements(t,e,s,r){const i=r==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,d=(a.left+a.right)/2,h=(a.top+a.bottom)/2,f=i&&l.animateScale,m=f?0:this.innerRadius,g=f?0:this.outerRadius,{sharedOptions:v,includeOptions:_}=this._getSharedOptions(e,r);let I=this._getRotation(),w;for(w=0;w<e;++w)I+=this._circumference(w,i);for(w=e;w<e+s;++w){const S=this._circumference(w,i),P=t[w],R={x:d+this.offsetX,y:h+this.offsetY,startAngle:I,endAngle:I+S,circumference:S,outerRadius:g,innerRadius:m};_&&(R.options=v||this.resolveDataElementOptions(w,P.active?"active":r)),I+=S,this.updateElement(P,w,R,r)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,r;for(r=0;r<e.length;r++){const i=t._parsed[r];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(r)&&!e[r].hidden&&(s+=Math.abs(i))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Lt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,r=s.data.labels||[],i=Bo(e._parsed[t],s.options.locale);return{label:r[t]||"",value:i}}getMaxBorderWidth(t){let e=0;const s=this.chart;let r,i,o,a,c;if(!t){for(r=0,i=s.data.datasets.length;r<i;++r)if(s.isDatasetVisible(r)){o=s.getDatasetMeta(r),t=o.data,a=o.controller;break}}if(!t)return 0;for(r=0,i=t.length;r<i;++r)c=a.resolveDataElementOptions(r),c.borderAlign!=="inner"&&(e=Math.max(e,c.borderWidth||0,c.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,r=t.length;s<r;++s){const i=this.resolveDataElementOptions(s);e=Math.max(e,i.offset||0,i.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(it(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}L(zs,"id","doughnut"),L(zs,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),L(zs,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),L(zs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:r,color:i,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((c,l)=>{const h=t.getDatasetMeta(0).controller.getStyle(l);return{text:c,fillStyle:h.backgroundColor,fontColor:i,hidden:!t.getDataVisibility(l),lineDash:h.borderDash,lineDashOffset:h.borderDashOffset,lineJoin:h.borderJoinStyle,lineWidth:h.borderWidth,strokeStyle:h.borderColor,textAlign:r,pointStyle:s,borderRadius:o&&(a||h.borderRadius),index:l}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Ua extends Ze{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:r=[],_dataset:i}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=Tv(e,r,o);this._drawStart=a,this._drawCount=c,Iv(e)&&(a=0,c=r.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!i._decimated,s.points=r;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:l},t),this.updateElements(r,a,c,t)}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,r),f=o.axis,m=a.axis,{spanGaps:g,segment:v}=this.options,_=Yr(g)?g:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||i||r==="none",w=e+s,S=t.length;let P=e>0&&this.getParsed(e-1);for(let R=0;R<S;++R){const M=t[R],E=I?M:{};if(R<e||R>=w){E.skip=!0;continue}const b=this.getParsed(R),x=dt(b[m]),A=E[f]=o.getPixelForValue(b[f],R),C=E[m]=i||x?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,b,c):b[m],R);E.skip=isNaN(A)||isNaN(C)||x,E.stop=R>0&&Math.abs(b[f]-P[f])>_,v&&(E.parsed=b,E.raw=l.data[R]),h&&(E.options=d||this.resolveDataElementOptions(R,M.active?"active":r)),I||this.updateElement(M,R,E,r),P=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,r=t.data||[];if(!r.length)return s;const i=r[0].size(this.resolveDataElementOptions(0)),o=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(s,i,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}L(Ua,"id","line"),L(Ua,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),L(Ua,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Zi extends Ze{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,r=s.data.labels||[],i=Bo(e._parsed[t].r,s.options.locale);return{label:r[t]||"",value:i}}parseObjectData(t,e,s,r){return Mv.bind(this)(t,e,s,r)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,r)=>{const i=this.getParsed(r).r;!isNaN(i)&&this.chart.getDataVisibility(r)&&(i<e.min&&(e.min=i),i>e.max&&(e.max=i))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,r=Math.min(e.right-e.left,e.bottom-e.top),i=Math.max(r/2,0),o=Math.max(s.cutoutPercentage?i/100*s.cutoutPercentage:1,0),a=(i-o)/t.getVisibleDatasetCount();this.outerRadius=i-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,r){const i=r==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,d=l.xCenter,h=l.yCenter,f=l.getIndexAngle(0)-.5*wt;let m=f,g;const v=360/this.countVisibleElements();for(g=0;g<e;++g)m+=this._computeAngle(g,r,v);for(g=e;g<e+s;g++){const _=t[g];let I=m,w=m+this._computeAngle(g,r,v),S=o.getDataVisibility(g)?l.getDistanceFromCenterForValue(this.getParsed(g).r):0;m=w,i&&(c.animateScale&&(S=0),c.animateRotate&&(I=w=f));const P={x:d,y:h,innerRadius:0,outerRadius:S,startAngle:I,endAngle:w,options:this.resolveDataElementOptions(g,_.active?"active":r)};this.updateElement(_,g,P,r)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?Je(this.resolveDataElementOptions(t,e).angle||s):0}}L(Zi,"id","polarArea"),L(Zi,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),L(Zi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:r}}=t.legend.options;return e.labels.map((i,o)=>{const c=t.getDatasetMeta(0).controller.getStyle(o);return{text:i,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:r,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Fu extends zs{}L(Fu,"id","pie"),L(Fu,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class ja extends Ze{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,r){return Mv.bind(this)(t,e,s,r)}update(t){const e=this._cachedMeta,s=e.dataset,r=e.data||[],i=e.iScale.getLabels();if(s.points=r,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:i.length===r.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(r,0,r.length,t)}updateElements(t,e,s,r){const i=this._cachedMeta.rScale,o=r==="reset";for(let a=e;a<e+s;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":r),d=i.getPointPositionForValue(a,this.getParsed(a).r),h=o?i.xCenter:d.x,f=o?i.yCenter:d.y,m={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:l};this.updateElement(c,a,m,r)}}}L(ja,"id","radar"),L(ja,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),L(ja,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class za extends Ze{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:r,yScale:i}=e,o=this.getParsed(t),a=r.getLabelForValue(o.x),c=i.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+c+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,r=this.chart._animationsDisabled;let{start:i,count:o}=Tv(e,s,r);if(this._drawStart=i,this._drawCount=o,Iv(e)&&(i=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:c}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=s;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!r,options:l},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,i,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,r){const i=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,d=this.resolveDataElementOptions(e,r),h=this.getSharedOptions(d),f=this.includeOptions(r,h),m=o.axis,g=a.axis,{spanGaps:v,segment:_}=this.options,I=Yr(v)?v:Number.POSITIVE_INFINITY,w=this.chart._animationsDisabled||i||r==="none";let S=e>0&&this.getParsed(e-1);for(let P=e;P<e+s;++P){const R=t[P],M=this.getParsed(P),E=w?R:{},b=dt(M[g]),x=E[m]=o.getPixelForValue(M[m],P),A=E[g]=i||b?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,M,c):M[g],P);E.skip=isNaN(x)||isNaN(A)||b,E.stop=P>0&&Math.abs(M[m]-S[m])>I,_&&(E.parsed=M,E.raw=l.data[P]),f&&(E.options=h||this.resolveDataElementOptions(P,R.active?"active":r)),w||this.updateElement(R,P,E,r),S=M}this.updateSharedOptions(h,r,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let c=e.length-1;c>=0;--c)a=Math.max(a,e[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const s=t.dataset,r=s.options&&s.options.borderWidth||0;if(!e.length)return r;const i=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(r,i,o)/2}}L(za,"id","scatter"),L(za,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),L(za,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var HC=Object.freeze({__proto__:null,BarController:$a,BubbleController:Ba,DoughnutController:zs,LineController:Ua,PieController:Fu,PolarAreaController:Zi,RadarController:ja,ScatterController:za});function Ds(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class fh{constructor(t){L(this,"options");this.options=t||{}}static override(t){Object.assign(fh.prototype,t)}init(){}formats(){return Ds()}parse(){return Ds()}format(){return Ds()}add(){return Ds()}diff(){return Ds()}startOf(){return Ds()}endOf(){return Ds()}}var Hv={_date:fh};function qC(n,t,e,s){const{controller:r,data:i,_sorted:o}=n,a=r._cachedMeta.iScale,c=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&i.length){const l=a._reversePixels?p1:On;if(s){if(r._sharedOptions){const d=i[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=l(i,t,e-h),m=l(i,t,e+h);return{lo:f.lo,hi:m.hi}}}}else{const d=l(i,t,e);if(c){const{vScale:h}=r._cachedMeta,{_parsed:f}=n,m=f.slice(0,d.lo+1).reverse().findIndex(v=>!dt(v[h.axis]));d.lo-=Math.max(0,m);const g=f.slice(d.hi).findIndex(v=>!dt(v[h.axis]));d.hi+=Math.max(0,g)}return d}}return{lo:0,hi:i.length-1}}function il(n,t,e,s,r){const i=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,c=i.length;a<c;++a){const{index:l,data:d}=i[a],{lo:h,hi:f}=qC(i[a],t,o,r);for(let m=h;m<=f;++m){const g=d[m];g.skip||s(g,l,m)}}}function WC(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,r){const i=t?Math.abs(s.x-r.x):0,o=e?Math.abs(s.y-r.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))}}function Yl(n,t,e,s,r){const i=[];return!r&&!n.isPointInArea(t)||il(n,e,t,function(a,c,l){!r&&!Nn(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&i.push({element:a,datasetIndex:c,index:l})},!0),i}function GC(n,t,e,s){let r=[];function i(o,a,c){const{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],s),{angle:h}=vv(o,{x:t.x,y:t.y});go(h,l,d)&&r.push({element:o,datasetIndex:a,index:c})}return il(n,e,t,i),r}function YC(n,t,e,s,r,i){let o=[];const a=WC(e);let c=Number.POSITIVE_INFINITY;function l(d,h,f){const m=d.inRange(t.x,t.y,r);if(s&&!m)return;const g=d.getCenterPoint(r);if(!(!!i||n.isPointInArea(g))&&!m)return;const _=a(t,g);_<c?(o=[{element:d,datasetIndex:h,index:f}],c=_):_===c&&o.push({element:d,datasetIndex:h,index:f})}return il(n,e,t,l),o}function Kl(n,t,e,s,r,i){return!i&&!n.isPointInArea(t)?[]:e==="r"&&!s?GC(n,t,e,r):YC(n,t,e,s,r,i)}function bm(n,t,e,s,r){const i=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return il(n,e,t,(c,l,d)=>{c[o]&&c[o](t[e],r)&&(i.push({element:c,datasetIndex:l,index:d}),a=a||c.inRange(t.x,t.y,r))}),s&&!a?[]:i}var KC={modes:{index(n,t,e,s){const r=Fs(t,n),i=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Yl(n,r,i,s,o):Kl(n,r,i,!1,s,o),c=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(l=>{const d=a[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(n,t,e,s){const r=Fs(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Yl(n,r,i,s,o):Kl(n,r,i,!1,s,o);if(a.length>0){const c=a[0].datasetIndex,l=n.getDatasetMeta(c).data;a=[];for(let d=0;d<l.length;++d)a.push({element:l[d],datasetIndex:c,index:d})}return a},point(n,t,e,s){const r=Fs(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;return Yl(n,r,i,s,o)},nearest(n,t,e,s){const r=Fs(t,n),i=e.axis||"xy",o=e.includeInvisible||!1;return Kl(n,r,i,e.intersect,s,o)},x(n,t,e,s){const r=Fs(t,n);return bm(n,r,"x",e.intersect,s)},y(n,t,e,s){const r=Fs(t,n);return bm(n,r,"y",e.intersect,s)}}};const qv=["left","top","right","bottom"];function xi(n,t){return n.filter(e=>e.pos===t)}function xm(n,t){return n.filter(e=>qv.indexOf(e.pos)===-1&&e.box.axis===t)}function wi(n,t){return n.sort((e,s)=>{const r=t?s:e,i=t?e:s;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function QC(n){const t=[];let e,s,r,i,o,a;for(e=0,s=(n||[]).length;e<s;++e)r=n[e],{position:i,options:{stack:o,stackWeight:a=1}}=r,t.push({index:e,box:r,pos:i,horizontal:r.isHorizontal(),weight:r.weight,stack:o&&i+o,stackWeight:a});return t}function XC(n){const t={};for(const e of n){const{stack:s,pos:r,stackWeight:i}=e;if(!s||!qv.includes(r))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=i}return t}function JC(n,t){const e=XC(n),{vBoxMaxWidth:s,hBoxMaxHeight:r}=t;let i,o,a;for(i=0,o=n.length;i<o;++i){a=n[i];const{fullSize:c}=a.box,l=e[a.stack],d=l&&a.stackWeight/l.weight;a.horizontal?(a.width=d?d*s:c&&t.availableWidth,a.height=r):(a.width=s,a.height=d?d*r:c&&t.availableHeight)}return e}function ZC(n){const t=QC(n),e=wi(t.filter(l=>l.box.fullSize),!0),s=wi(xi(t,"left"),!0),r=wi(xi(t,"right")),i=wi(xi(t,"top"),!0),o=wi(xi(t,"bottom")),a=xm(t,"x"),c=xm(t,"y");return{fullSize:e,leftAndTop:s.concat(i),rightAndBottom:r.concat(c).concat(o).concat(a),chartArea:xi(t,"chartArea"),vertical:s.concat(r).concat(c),horizontal:i.concat(o).concat(a)}}function wm(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function Wv(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function tR(n,t,e,s){const{pos:r,box:i}=e,o=n.maxPadding;if(!pt(r)){e.size&&(n[r]-=e.size);const h=s[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?i.height:i.width),e.size=h.size/h.count,n[r]+=e.size}i.getPadding&&Wv(o,i.getPadding());const a=Math.max(0,t.outerWidth-wm(o,n,"left","right")),c=Math.max(0,t.outerHeight-wm(o,n,"top","bottom")),l=a!==n.w,d=c!==n.h;return n.w=a,n.h=c,e.horizontal?{same:l,other:d}:{same:d,other:l}}function eR(n){const t=n.maxPadding;function e(s){const r=Math.max(t[s]-n[s],0);return n[s]+=r,r}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function nR(n,t){const e=t.maxPadding;function s(r){const i={left:0,top:0,right:0,bottom:0};return r.forEach(o=>{i[o]=Math.max(t[o],e[o])}),i}return s(n?["left","right"]:["top","bottom"])}function Fi(n,t,e,s){const r=[];let i,o,a,c,l,d;for(i=0,o=n.length,l=0;i<o;++i){a=n[i],c=a.box,c.update(a.width||t.w,a.height||t.h,nR(a.horizontal,t));const{same:h,other:f}=tR(t,e,a,s);l|=h&&r.length,d=d||f,c.fullSize||r.push(a)}return l&&Fi(r,t,e,s)||d}function Ea(n,t,e,s,r){n.top=e,n.left=t,n.right=t+s,n.bottom=e+r,n.width=s,n.height=r}function Em(n,t,e,s){const r=e.padding;let{x:i,y:o}=t;for(const a of n){const c=a.box,l=s[a.stack]||{placed:0,weight:1},d=a.stackWeight/l.weight||1;if(a.horizontal){const h=t.w*d,f=l.size||c.height;mo(l.start)&&(o=l.start),c.fullSize?Ea(c,r.left,o,e.outerWidth-r.right-r.left,f):Ea(c,t.left+l.placed,o,h,f),l.start=o,l.placed+=h,o=c.bottom}else{const h=t.h*d,f=l.size||c.width;mo(l.start)&&(i=l.start),c.fullSize?Ea(c,i,r.top,f,e.outerHeight-r.bottom-r.top):Ea(c,i,t.top+l.placed,f,h),l.start=i,l.placed+=h,i=c.right}}t.x=i,t.y=o}var Te={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const r=Se(n.options.layout.padding),i=Math.max(t-r.width,0),o=Math.max(e-r.height,0),a=ZC(n.boxes),c=a.vertical,l=a.horizontal;kt(n.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const d=c.reduce((v,_)=>_.box.options&&_.box.options.display===!1?v:v+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:r,availableWidth:i,availableHeight:o,vBoxMaxWidth:i/2/d,hBoxMaxHeight:o/2}),f=Object.assign({},r);Wv(f,Se(s));const m=Object.assign({maxPadding:f,w:i,h:o,x:r.left,y:r.top},r),g=JC(c.concat(l),h);Fi(a.fullSize,m,h,g),Fi(c,m,h,g),Fi(l,m,h,g)&&Fi(c,m,h,g),eR(m),Em(a.leftAndTop,m,h,g),m.x+=m.w,m.y+=m.h,Em(a.rightAndBottom,m,h,g),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},kt(a.chartArea,v=>{const _=v.box;Object.assign(_,n.chartArea),_.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class Gv{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,r){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,r?Math.floor(e/r):s)}}isAttached(t){return!0}updateConfig(t){}}class sR extends Gv{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ha="$chartjs",rR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Tm=n=>n===null||n==="";function iR(n,t){const e=n.style,s=n.getAttribute("height"),r=n.getAttribute("width");if(n[Ha]={initial:{height:s,width:r,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Tm(r)){const i=am(n,"width");i!==void 0&&(n.width=i)}if(Tm(s))if(n.style.height==="")n.height=n.width/(t||2);else{const i=am(n,"height");i!==void 0&&(n.height=i)}return n}const Yv=aC?{passive:!0}:!1;function oR(n,t,e){n&&n.addEventListener(t,e,Yv)}function aR(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,Yv)}function cR(n,t){const e=rR[n.type]||n.type,{x:s,y:r}=Fs(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:r!==void 0?r:null}}function vc(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function lR(n,t,e){const s=n.canvas,r=new MutationObserver(i=>{let o=!1;for(const a of i)o=o||vc(a.addedNodes,s),o=o&&!vc(a.removedNodes,s);o&&e()});return r.observe(document,{childList:!0,subtree:!0}),r}function uR(n,t,e){const s=n.canvas,r=new MutationObserver(i=>{let o=!1;for(const a of i)o=o||vc(a.removedNodes,s),o=o&&!vc(a.addedNodes,s);o&&e()});return r.observe(document,{childList:!0,subtree:!0}),r}const yo=new Map;let Im=0;function Kv(){const n=window.devicePixelRatio;n!==Im&&(Im=n,yo.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function dR(n,t){yo.size||window.addEventListener("resize",Kv),yo.set(n,t)}function hR(n){yo.delete(n),yo.size||window.removeEventListener("resize",Kv)}function fR(n,t,e){const s=n.canvas,r=s&&hh(s);if(!r)return;const i=Ev((a,c)=>{const l=r.clientWidth;e(a,c),l<r.clientWidth&&e()},window),o=new ResizeObserver(a=>{const c=a[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||i(l,d)});return o.observe(r),dR(n,i),o}function Ql(n,t,e){e&&e.disconnect(),t==="resize"&&hR(n)}function pR(n,t,e){const s=n.canvas,r=Ev(i=>{n.ctx!==null&&e(cR(i,n))},n);return oR(s,t,r),r}class mR extends Gv{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(iR(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Ha])return!1;const s=e[Ha].initial;["height","width"].forEach(i=>{const o=s[i];dt(o)?e.removeAttribute(i):e.setAttribute(i,o)});const r=s.style||{};return Object.keys(r).forEach(i=>{e.style[i]=r[i]}),e.width=e.width,delete e[Ha],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const r=t.$proxies||(t.$proxies={}),o={attach:lR,detach:uR,resize:fR}[e]||pR;r[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),r=s[e];if(!r)return;({attach:Ql,detach:Ql,resize:Ql}[e]||aR)(t,e,r),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,r){return oC(t,e,s,r)}isAttached(t){const e=t&&hh(t);return!!(e&&e.isConnected)}}function gR(n){return!dh()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?sR:mR}class nn{constructor(){L(this,"x");L(this,"y");L(this,"active",!1);L(this,"options");L(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Yr(this.x)&&Yr(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const r={};return t.forEach(i=>{r[i]=s[i]&&s[i].active()?s[i]._to:this[i]}),r}}L(nn,"defaults",{}),L(nn,"defaultRoutes");function _R(n,t){const e=n.options.ticks,s=yR(n),r=Math.min(e.maxTicksLimit||s,s),i=e.major.enabled?bR(t):[],o=i.length,a=i[0],c=i[o-1],l=[];if(o>r)return xR(t,l,i,o/r),l;const d=vR(i,t,r);if(o>0){let h,f;const m=o>1?Math.round((c-a)/(o-1)):null;for(Ta(t,l,d,dt(m)?0:a-m,a),h=0,f=o-1;h<f;h++)Ta(t,l,d,i[h],i[h+1]);return Ta(t,l,d,c,dt(m)?t.length:c+m),l}return Ta(t,l,d),l}function yR(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),r=n._maxLength/e;return Math.floor(Math.min(s,r))}function vR(n,t,e){const s=wR(n),r=t.length/e;if(!s)return Math.max(r,1);const i=l1(s);for(let o=0,a=i.length-1;o<a;o++){const c=i[o];if(c>r)return c}return Math.max(r,1)}function bR(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function xR(n,t,e,s){let r=0,i=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===i&&(t.push(n[o]),r++,i=e[r*s])}function Ta(n,t,e,s,r){const i=it(s,0),o=Math.min(it(r,n.length),n.length);let a=0,c,l,d;for(e=Math.ceil(e),r&&(c=r-s,e=c/Math.floor(c/e)),d=i;d<0;)a++,d=Math.round(i+a*e);for(l=Math.max(i,0);l<o;l++)l===d&&(t.push(n[l]),a++,d=Math.round(i+a*e))}function wR(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const ER=n=>n==="left"?"right":n==="right"?"left":n,Am=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,Sm=(n,t)=>Math.min(t||n,n);function km(n,t){const e=[],s=n.length/t,r=n.length;let i=0;for(;i<r;i+=s)e.push(n[Math.floor(i)]);return e}function TR(n,t,e){const s=n.ticks.length,r=Math.min(t,s-1),i=n._startPixel,o=n._endPixel,a=1e-6;let c=n.getPixelForTick(r),l;if(!(e&&(s===1?l=Math.max(c-i,o-c):t===0?l=(n.getPixelForTick(1)-c)/2:l=(c-n.getPixelForTick(r-1))/2,c+=r<t?l:-l,c<i-a||c>o+a)))return c}function IR(n,t){kt(n,e=>{const s=e.gc,r=s.length/2;let i;if(r>t){for(i=0;i<r;++i)delete e.data[s[i]];s.splice(0,r)}})}function Ei(n){return n.drawTicks?n.tickLength:0}function Cm(n,t){if(!n.display)return 0;const e=oe(n.font,t),s=Se(n.padding);return(Ft(n.text)?n.text.length:1)*e.lineHeight+s.height}function AR(n,t){return xs(n,{scale:t,type:"scale"})}function SR(n,t,e){return xs(n,{tick:e,index:t,type:"tick"})}function kR(n,t,e){let s=ih(n);return(e&&t!=="right"||!e&&t==="right")&&(s=ER(s)),s}function CR(n,t,e,s){const{top:r,left:i,bottom:o,right:a,chart:c}=n,{chartArea:l,scales:d}=c;let h=0,f,m,g;const v=o-r,_=a-i;if(n.isHorizontal()){if(m=be(s,i,a),pt(e)){const I=Object.keys(e)[0],w=e[I];g=d[I].getPixelForValue(w)+v-t}else e==="center"?g=(l.bottom+l.top)/2+v-t:g=Am(n,e,t);f=a-i}else{if(pt(e)){const I=Object.keys(e)[0],w=e[I];m=d[I].getPixelForValue(w)-_+t}else e==="center"?m=(l.left+l.right)/2-_+t:m=Am(n,e,t);g=be(s,o,r),h=e==="left"?-Zt:Zt}return{titleX:m,titleY:g,maxWidth:f,rotation:h}}class fr extends nn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:r}=this;return t=Ve(t,Number.POSITIVE_INFINITY),e=Ve(e,Number.NEGATIVE_INFINITY),s=Ve(s,Number.POSITIVE_INFINITY),r=Ve(r,Number.NEGATIVE_INFINITY),{min:Ve(t,s),max:Ve(e,r),minDefined:Yt(t),maxDefined:Yt(e)}}getMinMax(t){let{min:e,max:s,minDefined:r,maxDefined:i}=this.getUserBounds(),o;if(r&&i)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),r||(e=Math.min(e,o.min)),i||(s=Math.max(s,o.max));return e=i&&e>s?s:e,s=r&&e>s?e:s,{min:Ve(e,Ve(s,e)),max:Ve(s,Ve(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Dt(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:r,grace:i,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=F1(this,i,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?km(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=_R(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Dt(this.options.afterUpdate,[this])}beforeSetDimensions(){Dt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Dt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Dt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Dt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,r,i;for(s=0,r=t.length;s<r;s++)i=t[s],i.label=Dt(e.callback,[i.value,s,t],this)}afterTickToLabelConversion(){Dt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Dt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=Sm(this.ticks.length,t.ticks.maxTicksLimit),r=e.minRotation||0,i=e.maxRotation;let o=r,a,c,l;if(!this._isVisible()||!e.display||r>=i||s<=1||!this.isHorizontal()){this.labelRotation=r;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,m=ue(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),h+6>a&&(a=m/(s-(t.offset?.5:1)),c=this.maxHeight-Ei(t.grid)-e.padding-Cm(t.title,this.chart.options.font),l=Math.sqrt(h*h+f*f),o=sh(Math.min(Math.asin(ue((d.highest.height+6)/a,-1,1)),Math.asin(ue(c/l,-1,1))-Math.asin(ue(f/l,-1,1)))),o=Math.max(r,Math.min(i,o))),this.labelRotation=o}afterCalculateLabelRotation(){Dt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Dt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:r,grid:i}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=Cm(r,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ei(i)+c):(t.height=this.maxHeight,t.width=Ei(i)+c),s.display&&this.ticks.length){const{first:l,last:d,widest:h,highest:f}=this._getLabelSizes(),m=s.padding*2,g=Je(this.labelRotation),v=Math.cos(g),_=Math.sin(g);if(a){const I=s.mirror?0:_*h.width+v*f.height;t.height=Math.min(this.maxHeight,t.height+I+m)}else{const I=s.mirror?0:v*h.width+_*f.height;t.width=Math.min(this.maxWidth,t.width+I+m)}this._calculatePadding(l,d,_,v)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,r){const{ticks:{align:i,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,m=0;c?l?(f=r*t.width,m=s*e.height):(f=s*t.height,m=r*e.width):i==="start"?m=e.width:i==="end"?f=t.width:i!=="inner"&&(f=t.width/2,m=e.width/2),this.paddingLeft=Math.max((f-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((m-h+o)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;i==="start"?(d=0,h=t.height):i==="end"&&(d=e.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Dt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)dt(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=km(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:r,_longestTextCache:i}=this,o=[],a=[],c=Math.floor(e/Sm(e,s));let l=0,d=0,h,f,m,g,v,_,I,w,S,P,R;for(h=0;h<e;h+=c){if(g=t[h].label,v=this._resolveTickFontOptions(h),r.font=_=v.string,I=i[_]=i[_]||{data:{},gc:[]},w=v.lineHeight,S=P=0,!dt(g)&&!Ft(g))S=_c(r,I.data,I.gc,S,g),P=w;else if(Ft(g))for(f=0,m=g.length;f<m;++f)R=g[f],!dt(R)&&!Ft(R)&&(S=_c(r,I.data,I.gc,S,R),P+=w);o.push(S),a.push(P),l=Math.max(S,l),d=Math.max(P,d)}IR(i,e);const M=o.indexOf(l),E=a.indexOf(d),b=x=>({width:o[x]||0,height:a[x]||0});return{first:b(0),last:b(e-1),widest:b(M),highest:b(E),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return f1(this._alignToPixels?Ps(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=SR(this.getContext(),t,s))}return this.$context||(this.$context=AR(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Je(this.labelRotation),s=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e)),i=this._getLabelSizes(),o=t.autoSkipPadding||0,a=i?i.widest.width+o:0,c=i?i.highest.height+o:0;return this.isHorizontal()?c*s>a*r?a/s:c/r:c*r<a*s?c/s:a/r}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,r=this.options,{grid:i,position:o,border:a}=r,c=i.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),f=Ei(i),m=[],g=a.setContext(this.getContext()),v=g.display?g.width:0,_=v/2,I=function(Y){return Ps(s,Y,v)};let w,S,P,R,M,E,b,x,A,C,D,k;if(o==="top")w=I(this.bottom),E=this.bottom-f,x=w-_,C=I(t.top)+_,k=t.bottom;else if(o==="bottom")w=I(this.top),C=t.top,k=I(t.bottom)-_,E=w+_,x=this.top+f;else if(o==="left")w=I(this.right),M=this.right-f,b=w-_,A=I(t.left)+_,D=t.right;else if(o==="right")w=I(this.left),A=t.left,D=I(t.right)-_,M=w+_,b=this.left+f;else if(e==="x"){if(o==="center")w=I((t.top+t.bottom)/2+.5);else if(pt(o)){const Y=Object.keys(o)[0],N=o[Y];w=I(this.chart.scales[Y].getPixelForValue(N))}C=t.top,k=t.bottom,E=w+_,x=E+f}else if(e==="y"){if(o==="center")w=I((t.left+t.right)/2);else if(pt(o)){const Y=Object.keys(o)[0],N=o[Y];w=I(this.chart.scales[Y].getPixelForValue(N))}M=w-_,b=M-f,A=t.left,D=t.right}const nt=it(r.ticks.maxTicksLimit,h),H=Math.max(1,Math.ceil(h/nt));for(S=0;S<h;S+=H){const Y=this.getContext(S),N=i.setContext(Y),B=a.setContext(Y),z=N.lineWidth,W=N.color,lt=B.dash||[],ut=B.dashOffset,Q=N.tickWidth,et=N.tickColor,ct=N.tickBorderDash||[],Tt=N.tickBorderDashOffset;P=TR(this,S,c),P!==void 0&&(R=Ps(s,P,z),l?M=b=A=D=R:E=x=C=k=R,m.push({tx1:M,ty1:E,tx2:b,ty2:x,x1:A,y1:C,x2:D,y2:k,width:z,color:W,borderDash:lt,borderDashOffset:ut,tickWidth:Q,tickColor:et,tickBorderDash:ct,tickBorderDashOffset:Tt}))}return this._ticksLength=h,this._borderValue=w,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:r,ticks:i}=s,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=i,f=Ei(s.grid),m=f+d,g=h?-d:m,v=-Je(this.labelRotation),_=[];let I,w,S,P,R,M,E,b,x,A,C,D,k="middle";if(r==="top")M=this.bottom-g,E=this._getXAxisLabelAlignment();else if(r==="bottom")M=this.top+g,E=this._getXAxisLabelAlignment();else if(r==="left"){const H=this._getYAxisLabelAlignment(f);E=H.textAlign,R=H.x}else if(r==="right"){const H=this._getYAxisLabelAlignment(f);E=H.textAlign,R=H.x}else if(e==="x"){if(r==="center")M=(t.top+t.bottom)/2+m;else if(pt(r)){const H=Object.keys(r)[0],Y=r[H];M=this.chart.scales[H].getPixelForValue(Y)+m}E=this._getXAxisLabelAlignment()}else if(e==="y"){if(r==="center")R=(t.left+t.right)/2-m;else if(pt(r)){const H=Object.keys(r)[0],Y=r[H];R=this.chart.scales[H].getPixelForValue(Y)}E=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(c==="start"?k="top":c==="end"&&(k="bottom"));const nt=this._getLabelSizes();for(I=0,w=a.length;I<w;++I){S=a[I],P=S.label;const H=i.setContext(this.getContext(I));b=this.getPixelForTick(I)+i.labelOffset,x=this._resolveTickFontOptions(I),A=x.lineHeight,C=Ft(P)?P.length:1;const Y=C/2,N=H.color,B=H.textStrokeColor,z=H.textStrokeWidth;let W=E;o?(R=b,E==="inner"&&(I===w-1?W=this.options.reverse?"left":"right":I===0?W=this.options.reverse?"right":"left":W="center"),r==="top"?l==="near"||v!==0?D=-C*A+A/2:l==="center"?D=-nt.highest.height/2-Y*A+A:D=-nt.highest.height+A/2:l==="near"||v!==0?D=A/2:l==="center"?D=nt.highest.height/2-Y*A:D=nt.highest.height-C*A,h&&(D*=-1),v!==0&&!H.showLabelBackdrop&&(R+=A/2*Math.sin(v))):(M=b,D=(1-C)*A/2);let lt;if(H.showLabelBackdrop){const ut=Se(H.backdropPadding),Q=nt.heights[I],et=nt.widths[I];let ct=D-ut.top,Tt=0-ut.left;switch(k){case"middle":ct-=Q/2;break;case"bottom":ct-=Q;break}switch(E){case"center":Tt-=et/2;break;case"right":Tt-=et;break;case"inner":I===w-1?Tt-=et:I>0&&(Tt-=et/2);break}lt={left:Tt,top:ct,width:et+ut.width,height:Q+ut.height,color:H.backdropColor}}_.push({label:P,font:x,textOffset:D,options:{rotation:v,color:N,strokeColor:B,strokeWidth:z,textAlign:W,textBaseline:k,translation:[R,M],backdrop:lt}})}return _}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Je(this.labelRotation))return t==="top"?"left":"right";let r="center";return e.align==="start"?r="left":e.align==="end"?r="right":e.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:r,padding:i}}=this.options,o=this._getLabelSizes(),a=t+i,c=o.widest.width;let l,d;return e==="left"?r?(d=this.right+i,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-a,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d=this.left)):e==="right"?r?(d=this.left+i,s==="near"?l="right":s==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+a,s==="near"?l="left":s==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:r,width:i,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,r,i,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const r=this.ticks.findIndex(i=>i.value===t);return r>=0?e.setContext(this.getContext(r)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let i,o;const a=(c,l,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(c.x,c.y),s.lineTo(l.x,l.y),s.stroke(),s.restore())};if(e.display)for(i=0,o=r.length;i<o;++i){const c=r[i];e.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),e.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:r}}=this,i=s.setContext(this.getContext()),o=s.display?i.width:0;if(!o)return;const a=r.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,d,h,f;this.isHorizontal()?(l=Ps(t,this.left,o)-o/2,d=Ps(t,this.right,a)+a/2,h=f=c):(h=Ps(t,this.top,o)-o/2,f=Ps(t,this.bottom,a)+a/2,l=d=c),e.save(),e.lineWidth=i.width,e.strokeStyle=i.color,e.beginPath(),e.moveTo(l,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,r=this._computeLabelArea();r&&nl(s,r);const i=this.getLabelItems(t);for(const o of i){const a=o.options,c=o.font,l=o.label,d=o.textOffset;ar(s,l,0,d,c,a)}r&&sl(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:r}}=this;if(!s.display)return;const i=oe(s.font),o=Se(s.padding),a=s.align;let c=i.lineHeight/2;e==="bottom"||e==="center"||pt(e)?(c+=o.bottom,Ft(s.text)&&(c+=i.lineHeight*(s.text.length-1))):c+=o.top;const{titleX:l,titleY:d,maxWidth:h,rotation:f}=CR(this,c,e,a);ar(t,s.text,0,0,i,{color:s.color,maxWidth:h,rotation:f,textAlign:kR(a,e,r),textBaseline:"middle",translation:[l,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=it(t.grid&&t.grid.z,-1),r=it(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==fr.prototype.draw?[{z:e,draw:i=>{this.draw(i)}}]:[{z:s,draw:i=>{this.drawBackground(),this.drawGrid(i),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:e,draw:i=>{this.drawLabels(i)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",r=[];let i,o;for(i=0,o=e.length;i<o;++i){const a=e[i];a[s]===this.id&&(!t||a.type===t)&&r.push(a)}return r}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return oe(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Ia{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;DR(e)&&(s=this.register(e));const r=this.items,i=t.id,o=this.scope+"."+i;if(!i)throw new Error("class does not have id: "+t);return i in r||(r[i]=t,RR(t,o,s),this.override&&Bt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,r=this.scope;s in e&&delete e[s],r&&s in Bt[r]&&(delete Bt[r][s],this.override&&delete or[s])}}function RR(n,t,e){const s=po(Object.create(null),[e?Bt.get(e):{},Bt.get(t),n.defaults]);Bt.set(t,s),n.defaultRoutes&&PR(t,n.defaultRoutes),n.descriptors&&Bt.describe(t,n.descriptors)}function PR(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),r=s.pop(),i=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),c=o.join(".");Bt.route(i,r,c,a)})}function DR(n){return"id"in n&&"defaults"in n}class MR{constructor(){this.controllers=new Ia(Ze,"datasets",!0),this.elements=new Ia(nn,"elements"),this.plugins=new Ia(Object,"plugins"),this.scales=new Ia(fr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(r=>{const i=s||this._getRegistryForType(r);s||i.isForType(r)||i===this.plugins&&r.id?this._exec(t,i,r):kt(r,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const r=nh(t);Dt(s["before"+r],[],s),e[t](s),Dt(s["after"+r],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const r=e.get(t);if(r===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return r}}var ln=new MR;class OR{constructor(){this._init=void 0}notify(t,e,s,r){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const i=r?this._descriptors(t).filter(r):this._descriptors(t),o=this._notify(i,t,e,s);return e==="afterDestroy"&&(this._notify(i,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,r){r=r||{};for(const i of t){const o=i.plugin,a=o[s],c=[e,r,i.options];if(Dt(a,c,o)===!1&&r.cancelable)return!1}return!0}invalidate(){dt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,r=it(s.options&&s.options.plugins,{}),i=NR(s);return r===!1&&!e?[]:VR(t,i,r,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,r=(i,o)=>i.filter(a=>!o.some(c=>a.plugin.id===c.plugin.id));this._notify(r(e,s),t,"stop"),this._notify(r(s,e),t,"start")}}function NR(n){const t={},e=[],s=Object.keys(ln.plugins.items);for(let i=0;i<s.length;i++)e.push(ln.getPlugin(s[i]));const r=n.plugins||[];for(let i=0;i<r.length;i++){const o=r[i];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function LR(n,t){return!t&&n===!1?null:n===!0?{}:n}function VR(n,{plugins:t,localIds:e},s,r){const i=[],o=n.getContext();for(const a of t){const c=a.id,l=LR(s[c],r);l!==null&&i.push({plugin:a,options:FR(n.config,{plugin:a,local:e[c]},l,o)})}return i}function FR(n,{plugin:t,local:e},s,r){const i=n.pluginScopeKeys(t),o=n.getOptionScopes(s,i);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function $u(n,t){const e=Bt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function $R(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function BR(n,t){return n===t?"_index_":"_value_"}function Rm(n){if(n==="x"||n==="y"||n==="r")return n}function UR(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Bu(n,...t){if(Rm(n))return n;for(const e of t){const s=e.axis||UR(e.position)||n.length>1&&Rm(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function Pm(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function jR(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return Pm(n,"x",e[0])||Pm(n,"y",e[0])}return{}}function zR(n,t){const e=or[n.type]||{scales:{}},s=t.scales||{},r=$u(n.type,t),i=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!pt(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Bu(o,a,jR(o,n),Bt.scales[a.type]),l=BR(c,r),d=e.scales||{};i[o]=Ki(Object.create(null),[{axis:c},a,d[c],d[l]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,c=o.indexAxis||$u(a,t),d=(or[a]||{}).scales||{};Object.keys(d).forEach(h=>{const f=$R(h,c),m=o[f+"AxisID"]||f;i[m]=i[m]||Object.create(null),Ki(i[m],[{axis:f},s[m],d[h]])})}),Object.keys(i).forEach(o=>{const a=i[o];Ki(a,[Bt.scales[a.type],Bt.scale])}),i}function Qv(n){const t=n.options||(n.options={});t.plugins=it(t.plugins,{}),t.scales=zR(n,t)}function Xv(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function HR(n){return n=n||{},n.data=Xv(n.data),Qv(n),n}const Dm=new Map,Jv=new Set;function Aa(n,t){let e=Dm.get(n);return e||(e=t(),Dm.set(n,e),Jv.add(e)),e}const Ti=(n,t,e)=>{const s=gs(t,e);s!==void 0&&n.add(s)};class qR{constructor(t){this._config=HR(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Xv(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Qv(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Aa(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Aa(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Aa(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return Aa(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let r=s.get(t);return(!r||e)&&(r=new Map,s.set(t,r)),r}getOptionScopes(t,e,s){const{options:r,type:i}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const c=new Set;e.forEach(d=>{t&&(c.add(t),d.forEach(h=>Ti(c,t,h))),d.forEach(h=>Ti(c,r,h)),d.forEach(h=>Ti(c,or[i]||{},h)),d.forEach(h=>Ti(c,Bt,h)),d.forEach(h=>Ti(c,Lu,h))});const l=Array.from(c);return l.length===0&&l.push(Object.create(null)),Jv.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,or[e]||{},Bt.datasets[e]||{},{type:e},Bt,Lu]}resolveNamedOptions(t,e,s,r=[""]){const i={$shared:!0},{resolver:o,subPrefixes:a}=Mm(this._resolverCache,t,r);let c=o;if(GR(o,e)){i.$shared=!1,s=_s(s)?s():s;const l=this.createResolver(t,s,a);c=Kr(o,s,l)}for(const l of e)i[l]=c[l];return i}createResolver(t,e,s=[""],r){const{resolver:i}=Mm(this._resolverCache,t,s);return pt(e)?Kr(i,e,void 0,r):i}}function Mm(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const r=e.join();let i=s.get(r);return i||(i={resolver:ch(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(r,i)),i}const WR=n=>pt(n)&&Object.getOwnPropertyNames(n).some(t=>_s(n[t]));function GR(n,t){const{isScriptable:e,isIndexable:s}=Cv(n);for(const r of t){const i=e(r),o=s(r),a=(o||i)&&n[r];if(i&&(_s(a)||WR(a))||o&&Ft(a))return!0}return!1}var YR="4.5.1";const KR=["top","bottom","left","right","chartArea"];function Om(n,t){return n==="top"||n==="bottom"||KR.indexOf(n)===-1&&t==="x"}function Nm(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function Lm(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),Dt(e&&e.onComplete,[n],t)}function QR(n){const t=n.chart,e=t.options.animation;Dt(e&&e.onProgress,[n],t)}function Zv(n){return dh()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const qa={},Vm=n=>{const t=Zv(n);return Object.values(qa).filter(e=>e.canvas===t).pop()};function XR(n,t,e){const s=Object.keys(n);for(const r of s){const i=+r;if(i>=t){const o=n[r];delete n[r],(e>0||i>t)&&(n[i+e]=o)}}}function JR(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class yt{static register(...t){ln.add(...t),Fm()}static unregister(...t){ln.remove(...t),Fm()}constructor(t,e){const s=this.config=new qR(e),r=Zv(t),i=Vm(r);if(i)throw new Error("Canvas is already in use. Chart with ID '"+i.id+"' must be destroyed before the canvas with ID '"+i.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||gR(r)),this.platform.updateConfig(s);const a=this.platform.acquireContext(r,o.aspectRatio),c=a&&a.canvas,l=c&&c.height,d=c&&c.width;if(this.id=t1(),this.ctx=a,this.canvas=c,this.width=d,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new OR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=_1(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],qa[this.id]=this,!a||!c){console.error("Failed to create chart: can't acquire context from the given item");return}In.listen(this,"complete",Lm),In.listen(this,"progress",QR),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:r,_aspectRatio:i}=this;return dt(t)?e&&i?i:r?s/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return ln}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():om(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return sm(this.canvas,this.ctx),this}stop(){return In.stop(this),this}resize(t,e){In.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,r=this.canvas,i=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(r,t,e,i),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,om(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Dt(s.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};kt(e,(s,r)=>{s.id=r})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,r=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let i=[];e&&(i=i.concat(Object.keys(e).map(o=>{const a=e[o],c=Bu(o,a),l=c==="r",d=c==="x";return{options:a,dposition:l?"chartArea":d?"bottom":"left",dtype:l?"radialLinear":d?"category":"linear"}}))),kt(i,o=>{const a=o.options,c=a.id,l=Bu(c,a),d=it(a.type,o.dtype);(a.position===void 0||Om(a.position,l)!==Om(o.dposition))&&(a.position=o.dposition),r[c]=!0;let h=null;if(c in s&&s[c].type===d)h=s[c];else{const f=ln.getScale(d);h=new f({id:c,type:d,ctx:this.ctx,chart:this}),s[h.id]=h}h.init(a,t)}),kt(r,(o,a)=>{o||delete s[a]}),kt(s,o=>{Te.configure(this,o,o.options),Te.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((r,i)=>r.index-i.index),s>e){for(let r=e;r<s;++r)this._destroyDatasetMeta(r);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Nm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,r)=>{e.filter(i=>i===s._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,r;for(this._removeUnreferencedMetasets(),s=0,r=e.length;s<r;s++){const i=e[s];let o=this.getDatasetMeta(s);const a=i.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=i.indexAxis||$u(a,this.options),o.order=i.order||0,o.index=s,o.label=""+i.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const c=ln.getController(a),{datasetElementType:l,dataElementType:d}=Bt.datasets[a];Object.assign(c,{dataElementType:ln.getElement(d),datasetElementType:l&&ln.getElement(l)}),o.controller=new c(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){kt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const i=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,d=this.data.datasets.length;l<d;l++){const{controller:h}=this.getDatasetMeta(l),f=!r&&i.indexOf(h)===-1;h.buildOrUpdateElements(f),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),r||kt(i,l=>{l.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Nm("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){kt(this.scales,t=>{Te.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Yp(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:r,count:i}of e){const o=s==="_removeElements"?-i:i;XR(t,r,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=i=>new Set(t.filter(o=>o[0]===i).map((o,a)=>a+","+o.splice(1).join(","))),r=s(0);for(let i=1;i<e;i++)if(!Yp(r,s(i)))return;return Array.from(r).map(i=>i.split(",")).map(i=>({method:i[1],start:+i[2],count:+i[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Te.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],kt(this.boxes,r=>{s&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,i)=>{r._idx=i}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,_s(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),r={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(s.controller._update(e),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(In.has(this)?this.attached&&!In.running(this)&&In.start(this):(this.draw(),Lm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:r}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,r)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let r,i;for(r=0,i=e.length;r<i;++r){const o=e[r];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},r=Bv(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(r&&nl(e,r),t.controller.draw(),r&&sl(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Nn(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,r){const i=KC.modes[e];return typeof i=="function"?i(this,t,s,r):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let r=s.filter(i=>i&&i._dataset===e).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(r)),r}getContext(){return this.$context||(this.$context=xs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const r=s?"show":"hide",i=this.getDatasetMeta(t),o=i.controller._resolveAnimations(void 0,r);mo(e)?(i.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(i,{visible:s}),this.update(a=>a.datasetIndex===t?r:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),In.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),sm(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete qa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},r=(i,o,a)=>{i.offsetX=o,i.offsetY=a,this._eventHandler(i)};kt(this.options.events,i=>s(i,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(c,l)=>{e.addEventListener(this,c,l),t[c]=l},r=(c,l)=>{t[c]&&(e.removeEventListener(this,c,l),delete t[c])},i=(c,l)=>{this.canvas&&this.resize(c,l)};let o;const a=()=>{r("attach",a),this.attached=!0,this.resize(),s("resize",i),s("detach",o)};o=()=>{this.attached=!1,r("resize",i),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){kt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},kt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const r=s?"set":"remove";let i,o,a,c;for(e==="dataset"&&(i=this.getDatasetMeta(t[0].datasetIndex),i.controller["_"+r+"DatasetHoverStyle"]()),a=0,c=t.length;a<c;++a){o=t[a];const l=o&&this.getDatasetMeta(o.datasetIndex).controller;l&&l[r+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:i,index:o})=>{const a=this.getDatasetMeta(i);if(!a)throw new Error("No dataset found at index "+i);return{datasetIndex:i,element:a.data[o],index:o}});!pc(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const r=this.options.hover,i=(c,l)=>c.filter(d=>!l.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),o=i(e,t),a=s?t:i(t,e);o.length&&this.updateHoverStyle(o,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},r=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,r)===!1)return;const i=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,r),(i||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:r=[],options:i}=this,o=e,a=this._getActiveElements(t,r,s,o),c=o1(t),l=JR(t,this._lastEvent,s,c);s&&(this._lastEvent=null,Dt(i.onHover,[t,a,this],this),c&&Dt(i.onClick,[t,a,this],this));const d=!pc(a,r);return(d||e)&&(this._active=a,this._updateHoverStyles(a,r,e)),this._lastEvent=l,d}_getActiveElements(t,e,s,r){if(t.type==="mouseout")return[];if(!s)return e;const i=this.options.hover;return this.getElementsAtEventForMode(t,i.mode,i,r)}}L(yt,"defaults",Bt),L(yt,"instances",qa),L(yt,"overrides",or),L(yt,"registry",ln),L(yt,"version",YR),L(yt,"getChart",Vm);function Fm(){return kt(yt.instances,n=>n._plugins.invalidate())}function ZR(n,t,e){const{startAngle:s,x:r,y:i,outerRadius:o,innerRadius:a,options:c}=t,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,we(s-e));if(n.beginPath(),n.arc(r,i,o-l/2,s+h/2,e-h/2),a>0){const f=Math.min(l/a,we(s-e));n.arc(r,i,a+l/2,e-f/2,s+f/2,!0)}else{const f=Math.min(l/2,o*we(s-e));if(d==="round")n.arc(r,i,f,e-wt/2,s+wt/2,!0);else if(d==="bevel"){const m=2*f*f,g=-m*Math.cos(e+wt/2)+r,v=-m*Math.sin(e+wt/2)+i,_=m*Math.cos(s+wt/2)+r,I=m*Math.sin(s+wt/2)+i;n.lineTo(g,v),n.lineTo(_,I)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function tP(n,t,e){const{startAngle:s,pixelMargin:r,x:i,y:o,outerRadius:a,innerRadius:c}=t;let l=r/a;n.beginPath(),n.arc(i,o,a,s-l,e+l),c>r?(l=r/c,n.arc(i,o,c,e+l,s-l,!0)):n.arc(i,o,r,e+Zt,s-Zt),n.closePath(),n.clip()}function eP(n){return ah(n,["outerStart","outerEnd","innerStart","innerEnd"])}function nP(n,t,e,s){const r=eP(n.options.borderRadius),i=(e-t)/2,o=Math.min(i,s*t/2),a=c=>{const l=(e-Math.min(i,c))*s/2;return ue(c,0,Math.min(i,l))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:ue(r.innerStart,0,o),innerEnd:ue(r.innerEnd,0,o)}}function wr(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function bc(n,t,e,s,r,i){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:d}=t,h=Math.max(t.outerRadius+s+e-l,0),f=d>0?d+s+e+l:0;let m=0;const g=r-c;if(s){const H=d>0?d-s:0,Y=h>0?h-s:0,N=(H+Y)/2,B=N!==0?g*N/(N+s):g;m=(g-B)/2}const v=Math.max(.001,g*h-e/wt)/h,_=(g-v)/2,I=c+_+m,w=r-_-m,{outerStart:S,outerEnd:P,innerStart:R,innerEnd:M}=nP(t,f,h,w-I),E=h-S,b=h-P,x=I+S/E,A=w-P/b,C=f+R,D=f+M,k=I+R/C,nt=w-M/D;if(n.beginPath(),i){const H=(x+A)/2;if(n.arc(o,a,h,x,H),n.arc(o,a,h,H,A),P>0){const z=wr(b,A,o,a);n.arc(z.x,z.y,P,A,w+Zt)}const Y=wr(D,w,o,a);if(n.lineTo(Y.x,Y.y),M>0){const z=wr(D,nt,o,a);n.arc(z.x,z.y,M,w+Zt,nt+Math.PI)}const N=(w-M/f+(I+R/f))/2;if(n.arc(o,a,f,w-M/f,N,!0),n.arc(o,a,f,N,I+R/f,!0),R>0){const z=wr(C,k,o,a);n.arc(z.x,z.y,R,k+Math.PI,I-Zt)}const B=wr(E,I,o,a);if(n.lineTo(B.x,B.y),S>0){const z=wr(E,x,o,a);n.arc(z.x,z.y,S,I-Zt,x)}}else{n.moveTo(o,a);const H=Math.cos(x)*h+o,Y=Math.sin(x)*h+a;n.lineTo(H,Y);const N=Math.cos(A)*h+o,B=Math.sin(A)*h+a;n.lineTo(N,B)}n.closePath()}function sP(n,t,e,s,r){const{fullCircles:i,startAngle:o,circumference:a}=t;let c=t.endAngle;if(i){bc(n,t,e,s,c,r);for(let l=0;l<i;++l)n.fill();isNaN(a)||(c=o+(a%Lt||Lt))}return bc(n,t,e,s,c,r),n.fill(),c}function rP(n,t,e,s,r){const{fullCircles:i,startAngle:o,circumference:a,options:c}=t,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:f,borderRadius:m}=c,g=c.borderAlign==="inner";if(!l)return;n.setLineDash(h||[]),n.lineDashOffset=f,g?(n.lineWidth=l*2,n.lineJoin=d||"round"):(n.lineWidth=l,n.lineJoin=d||"bevel");let v=t.endAngle;if(i){bc(n,t,e,s,v,r);for(let _=0;_<i;++_)n.stroke();isNaN(a)||(v=o+(a%Lt||Lt))}g&&tP(n,t,v),c.selfJoin&&v-o>=wt&&m===0&&d!=="miter"&&ZR(n,t,v),i||(bc(n,t,e,s,v,r),n.stroke())}class $i extends nn{constructor(e){super();L(this,"circumference");L(this,"endAngle");L(this,"fullCircles");L(this,"innerRadius");L(this,"outerRadius");L(this,"pixelMargin");L(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,r){const i=this.getProps(["x","y"],r),{angle:o,distance:a}=vv(i,{x:e,y:s}),{startAngle:c,endAngle:l,innerRadius:d,outerRadius:h,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),m=(this.options.spacing+this.options.borderWidth)/2,g=it(f,l-c),v=go(o,c,l)&&c!==l,_=g>=Lt||v,I=Mn(a,d+m,h+m);return _&&I}getCenterPoint(e){const{x:s,y:r,startAngle:i,endAngle:o,innerRadius:a,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:l,spacing:d}=this.options,h=(i+o)/2,f=(a+c+d+l)/2;return{x:s+Math.cos(h)*f,y:r+Math.sin(h)*f}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:r}=this,i=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=r>Lt?Math.floor(r/Lt):0,r===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const c=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(c)*i,Math.sin(c)*i);const l=1-Math.sin(Math.min(wt,r||0)),d=i*l;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,sP(e,this,d,o,a),rP(e,this,d,o,a),e.restore()}}L($i,"id","arc"),L($i,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),L($i,"defaultRoutes",{backgroundColor:"backgroundColor"}),L($i,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function tb(n,t,e=t){n.lineCap=it(e.borderCapStyle,t.borderCapStyle),n.setLineDash(it(e.borderDash,t.borderDash)),n.lineDashOffset=it(e.borderDashOffset,t.borderDashOffset),n.lineJoin=it(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=it(e.borderWidth,t.borderWidth),n.strokeStyle=it(e.borderColor,t.borderColor)}function iP(n,t,e){n.lineTo(e.x,e.y)}function oP(n){return n.stepped?C1:n.tension||n.cubicInterpolationMode==="monotone"?R1:iP}function eb(n,t,e={}){const s=n.length,{start:r=0,end:i=s-1}=e,{start:o,end:a}=t,c=Math.max(r,o),l=Math.min(i,a),d=r<o&&i<o||r>a&&i>a;return{count:s,start:c,loop:t.loop,ilen:l<c&&!d?s+l-c:l-c}}function aP(n,t,e,s){const{points:r,options:i}=t,{count:o,start:a,loop:c,ilen:l}=eb(r,e,s),d=oP(i);let{move:h=!0,reverse:f}=s||{},m,g,v;for(m=0;m<=l;++m)g=r[(a+(f?l-m:m))%o],!g.skip&&(h?(n.moveTo(g.x,g.y),h=!1):d(n,v,g,f,i.stepped),v=g);return c&&(g=r[(a+(f?l:0))%o],d(n,v,g,f,i.stepped)),!!c}function cP(n,t,e,s){const r=t.points,{count:i,start:o,ilen:a}=eb(r,e,s),{move:c=!0,reverse:l}=s||{};let d=0,h=0,f,m,g,v,_,I;const w=P=>(o+(l?a-P:P))%i,S=()=>{v!==_&&(n.lineTo(d,_),n.lineTo(d,v),n.lineTo(d,I))};for(c&&(m=r[w(0)],n.moveTo(m.x,m.y)),f=0;f<=a;++f){if(m=r[w(f)],m.skip)continue;const P=m.x,R=m.y,M=P|0;M===g?(R<v?v=R:R>_&&(_=R),d=(h*d+P)/++h):(S(),n.lineTo(P,R),g=M,h=0,v=_=R),I=R}S()}function Uu(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?cP:aP}function lP(n){return n.stepped?cC:n.tension||n.cubicInterpolationMode==="monotone"?lC:$s}function uP(n,t,e,s){let r=t._path;r||(r=t._path=new Path2D,t.path(r,e,s)&&r.closePath()),tb(n,t.options),n.stroke(r)}function dP(n,t,e,s){const{segments:r,options:i}=t,o=Uu(t);for(const a of r)tb(n,i,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const hP=typeof Path2D=="function";function fP(n,t,e,s){hP&&!t.options.segment?uP(n,t,e,s):dP(n,t,e,s)}class os extends nn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const r=s.spanGaps?this._loop:this._fullLoop;tC(this._points,s,t,r,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=mC(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,r=t[e],i=this.points,o=$v(this,{property:e,start:r,end:r});if(!o.length)return;const a=[],c=lP(s);let l,d;for(l=0,d=o.length;l<d;++l){const{start:h,end:f}=o[l],m=i[h],g=i[f];if(m===g){a.push(m);continue}const v=Math.abs((r-m[e])/(g[e]-m[e])),_=c(m,g,v,s.stepped);_[e]=t[e],a.push(_)}return a.length===1?a[0]:a}pathSegment(t,e,s){return Uu(this)(t,this,e,s)}path(t,e,s){const r=this.segments,i=Uu(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of r)o&=i(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,r){const i=this.options||{};(this.points||[]).length&&i.borderWidth&&(t.save(),fP(t,this,s,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}L(os,"id","line"),L(os,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),L(os,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),L(os,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function $m(n,t,e,s){const r=n.options,{[e]:i}=n.getProps([e],s);return Math.abs(t-i)<r.radius+r.hitRadius}class Wa extends nn{constructor(e){super();L(this,"parsed");L(this,"skip");L(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,r){const i=this.options,{x:o,y:a}=this.getProps(["x","y"],r);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(e,s){return $m(this,e,"x",s)}inYRange(e,s){return $m(this,e,"y",s)}getCenterPoint(e){const{x:s,y:r}=this.getProps(["x","y"],e);return{x:s,y:r}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const r=s&&e.borderWidth||0;return(s+r)*2}draw(e,s){const r=this.options;this.skip||r.radius<.1||!Nn(this,s,this.size(r)/2)||(e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.fillStyle=r.backgroundColor,Vu(e,r,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}L(Wa,"id","point"),L(Wa,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),L(Wa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function nb(n,t){const{x:e,y:s,base:r,width:i,height:o}=n.getProps(["x","y","base","width","height"],t);let a,c,l,d,h;return n.horizontal?(h=o/2,a=Math.min(e,r),c=Math.max(e,r),l=s-h,d=s+h):(h=i/2,a=e-h,c=e+h,l=Math.min(s,r),d=Math.max(s,r)),{left:a,top:l,right:c,bottom:d}}function as(n,t,e,s){return n?0:ue(t,e,s)}function pP(n,t,e){const s=n.options.borderWidth,r=n.borderSkipped,i=kv(s);return{t:as(r.top,i.top,0,e),r:as(r.right,i.right,0,t),b:as(r.bottom,i.bottom,0,e),l:as(r.left,i.left,0,t)}}function mP(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),r=n.options.borderRadius,i=Ws(r),o=Math.min(t,e),a=n.borderSkipped,c=s||pt(r);return{topLeft:as(!c||a.top||a.left,i.topLeft,0,o),topRight:as(!c||a.top||a.right,i.topRight,0,o),bottomLeft:as(!c||a.bottom||a.left,i.bottomLeft,0,o),bottomRight:as(!c||a.bottom||a.right,i.bottomRight,0,o)}}function gP(n){const t=nb(n),e=t.right-t.left,s=t.bottom-t.top,r=pP(n,e/2,s/2),i=mP(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:i},inner:{x:t.left+r.l,y:t.top+r.t,w:e-r.l-r.r,h:s-r.t-r.b,radius:{topLeft:Math.max(0,i.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,i.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,i.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,i.bottomRight-Math.max(r.b,r.r))}}}}function Xl(n,t,e,s){const r=t===null,i=e===null,a=n&&!(r&&i)&&nb(n,s);return a&&(r||Mn(t,a.left,a.right))&&(i||Mn(e,a.top,a.bottom))}function _P(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function yP(n,t){n.rect(t.x,t.y,t.w,t.h)}function Jl(n,t,e={}){const s=n.x!==e.x?-t:0,r=n.y!==e.y?-t:0,i=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-r;return{x:n.x+s,y:n.y+r,w:n.w+i,h:n.h+o,radius:n.radius}}class Ga extends nn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:r}}=this,{inner:i,outer:o}=gP(this),a=_P(o.radius)?_o:yP;t.save(),(o.w!==i.w||o.h!==i.h)&&(t.beginPath(),a(t,Jl(o,e,i)),t.clip(),a(t,Jl(i,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Jl(i,e)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,e,s){return Xl(this,t,e,s)}inXRange(t,e){return Xl(this,t,null,e)}inYRange(t,e){return Xl(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:r,horizontal:i}=this.getProps(["x","y","base","horizontal"],t);return{x:i?(e+r)/2:e,y:i?s:(s+r)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}L(Ga,"id","bar"),L(Ga,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),L(Ga,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var vP=Object.freeze({__proto__:null,ArcElement:$i,BarElement:Ga,LineElement:os,PointElement:Wa});const ju=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Bm=ju.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function sb(n){return ju[n%ju.length]}function rb(n){return Bm[n%Bm.length]}function bP(n,t){return n.borderColor=sb(t),n.backgroundColor=rb(t),++t}function xP(n,t){return n.backgroundColor=n.data.map(()=>sb(t++)),t}function wP(n,t){return n.backgroundColor=n.data.map(()=>rb(t++)),t}function EP(n){let t=0;return(e,s)=>{const r=n.getDatasetMeta(s).controller;r instanceof zs?t=xP(e,t):r instanceof Zi?t=wP(e,t):r&&(t=bP(e,t))}}function Um(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function TP(n){return n&&(n.borderColor||n.backgroundColor)}function IP(){return Bt.borderColor!=="rgba(0,0,0,0.1)"||Bt.backgroundColor!=="rgba(0,0,0,0.1)"}var AP={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:r}=n.config,{elements:i}=r,o=Um(s)||TP(r)||i&&Um(i)||IP();if(!e.forceOverride&&o)return;const a=EP(n);s.forEach(a)}};function SP(n,t,e,s,r){const i=r.samples||s;if(i>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(i-2);let c=0;const l=t+e-1;let d=t,h,f,m,g,v;for(o[c++]=n[d],h=0;h<i-2;h++){let _=0,I=0,w;const S=Math.floor((h+1)*a)+1+t,P=Math.min(Math.floor((h+2)*a)+1,e)+t,R=P-S;for(w=S;w<P;w++)_+=n[w].x,I+=n[w].y;_/=R,I/=R;const M=Math.floor(h*a)+1+t,E=Math.min(Math.floor((h+1)*a)+1,e)+t,{x:b,y:x}=n[d];for(m=g=-1,w=M;w<E;w++)g=.5*Math.abs((b-_)*(n[w].y-x)-(b-n[w].x)*(I-x)),g>m&&(m=g,f=n[w],v=w);o[c++]=f,d=v}return o[c++]=n[l],o}function kP(n,t,e,s){let r=0,i=0,o,a,c,l,d,h,f,m,g,v;const _=[],I=t+e-1,w=n[t].x,P=n[I].x-w;for(o=t;o<t+e;++o){a=n[o],c=(a.x-w)/P*s,l=a.y;const R=c|0;if(R===d)l<g?(g=l,h=o):l>v&&(v=l,f=o),r=(i*r+a.x)/++i;else{const M=o-1;if(!dt(h)&&!dt(f)){const E=Math.min(h,f),b=Math.max(h,f);E!==m&&E!==M&&_.push({...n[E],x:r}),b!==m&&b!==M&&_.push({...n[b],x:r})}o>0&&M!==m&&_.push(n[M]),_.push(a),d=R,i=0,g=v=l,h=f=m=o}}return _}function ib(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function jm(n){n.data.datasets.forEach(t=>{ib(t)})}function CP(n,t){const e=t.length;let s=0,r;const{iScale:i}=n,{min:o,max:a,minDefined:c,maxDefined:l}=i.getUserBounds();return c&&(s=ue(On(t,i.axis,o).lo,0,e-1)),l?r=ue(On(t,i.axis,a).hi+1,s,e)-s:r=e-s,{start:s,count:r}}var RP={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){jm(n);return}const s=n.width;n.data.datasets.forEach((r,i)=>{const{_data:o,indexAxis:a}=r,c=n.getDatasetMeta(i),l=o||r.data;if(Vi([a,n.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;const d=n.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||n.options.parsing)return;let{start:h,count:f}=CP(c,l);const m=e.threshold||4*s;if(f<=m){ib(r);return}dt(o)&&(r._data=l,delete r.data,Object.defineProperty(r,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let g;switch(e.algorithm){case"lttb":g=SP(l,h,f,s,e);break;case"min-max":g=kP(l,h,f,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}r._decimated=g})},destroy(n){jm(n)}};function PP(n,t,e){const s=n.segments,r=n.points,i=t.points,o=[];for(const a of s){let{start:c,end:l}=a;l=ol(c,l,r);const d=zu(e,r[c],r[l],a.loop);if(!t.segments){o.push({source:a,target:d,start:r[c],end:r[l]});continue}const h=$v(t,d);for(const f of h){const m=zu(e,i[f.start],i[f.end],f.loop),g=Fv(a,r,m);for(const v of g)o.push({source:v,target:f,start:{[e]:zm(d,m,"start",Math.max)},end:{[e]:zm(d,m,"end",Math.min)}})}}return o}function zu(n,t,e,s){if(s)return;let r=t[n],i=e[n];return n==="angle"&&(r=we(r),i=we(i)),{property:n,start:r,end:i}}function DP(n,t){const{x:e=null,y:s=null}=n||{},r=t.points,i=[];return t.segments.forEach(({start:o,end:a})=>{a=ol(o,a,r);const c=r[o],l=r[a];s!==null?(i.push({x:c.x,y:s}),i.push({x:l.x,y:s})):e!==null&&(i.push({x:e,y:c.y}),i.push({x:e,y:l.y}))}),i}function ol(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function zm(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function ob(n,t){let e=[],s=!1;return Ft(n)?(s=!0,e=n):e=DP(n,t),e.length?new os({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Hm(n){return n&&n.fill!==!1}function MP(n,t,e){let r=n[t].fill;const i=[t];let o;if(!e)return r;for(;r!==!1&&i.indexOf(r)===-1;){if(!Yt(r))return r;if(o=n[r],!o)return!1;if(o.visible)return r;i.push(r),r=o.fill}return!1}function OP(n,t,e){const s=FP(n);if(pt(s))return isNaN(s.value)?!1:s;let r=parseFloat(s);return Yt(r)&&Math.floor(r)===r?NP(s[0],t,r,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function NP(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function LP(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:pt(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function VP(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:pt(n)?s=n.value:s=t.getBaseValue(),s}function FP(n){const t=n.options,e=t.fill;let s=it(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function $P(n){const{scale:t,index:e,line:s}=n,r=[],i=s.segments,o=s.points,a=BP(t,e);a.push(ob({x:null,y:t.bottom},s));for(let c=0;c<i.length;c++){const l=i[c];for(let d=l.start;d<=l.end;d++)UP(r,o[d],a)}return new os({points:r,options:{}})}function BP(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let r=0;r<s.length;r++){const i=s[r];if(i.index===t)break;i.hidden||e.unshift(i.dataset)}return e}function UP(n,t,e){const s=[];for(let r=0;r<e.length;r++){const i=e[r],{first:o,last:a,point:c}=jP(i,t,"x");if(!(!c||o&&a)){if(o)s.unshift(c);else if(n.push(c),!a)break}}n.push(...s)}function jP(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const r=s[e],i=n.segments,o=n.points;let a=!1,c=!1;for(let l=0;l<i.length;l++){const d=i[l],h=o[d.start][e],f=o[d.end][e];if(Mn(r,h,f)){a=r===h,c=r===f;break}}return{first:a,last:c,point:s}}class ab{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:r,y:i,radius:o}=this;return e=e||{start:0,end:Lt},t.arc(r,i,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:r}=this,i=t.angle;return{x:e+Math.cos(i)*r,y:s+Math.sin(i)*r,angle:i}}}function zP(n){const{chart:t,fill:e,line:s}=n;if(Yt(e))return HP(t,e);if(e==="stack")return $P(n);if(e==="shape")return!0;const r=qP(n);return r instanceof ab?r:ob(r,s)}function HP(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function qP(n){return(n.scale||{}).getPointPositionForValue?GP(n):WP(n)}function WP(n){const{scale:t={},fill:e}=n,s=LP(e,t);if(Yt(s)){const r=t.isHorizontal();return{x:r?s:null,y:r?null:s}}return null}function GP(n){const{scale:t,fill:e}=n,s=t.options,r=t.getLabels().length,i=s.reverse?t.max:t.min,o=VP(e,t,i),a=[];if(s.grid.circular){const c=t.getPointPositionForValue(0,i);return new ab({x:c.x,y:c.y,radius:t.getDistanceFromCenterForValue(o)})}for(let c=0;c<r;++c)a.push(t.getPointPositionForValue(c,o));return a}function Zl(n,t,e){const s=zP(t),{chart:r,index:i,line:o,scale:a,axis:c}=t,l=o.options,d=l.fill,h=l.backgroundColor,{above:f=h,below:m=h}=d||{},g=r.getDatasetMeta(i),v=Bv(r,g);s&&o.points.length&&(nl(n,e),YP(n,{line:o,target:s,above:f,below:m,area:e,scale:a,axis:c,clip:v}),sl(n))}function YP(n,t){const{line:e,target:s,above:r,below:i,area:o,scale:a,clip:c}=t,l=e._loop?"angle":t.axis;n.save();let d=i;i!==r&&(l==="x"?(qm(n,s,o.top),tu(n,{line:e,target:s,color:r,scale:a,property:l,clip:c}),n.restore(),n.save(),qm(n,s,o.bottom)):l==="y"&&(Wm(n,s,o.left),tu(n,{line:e,target:s,color:i,scale:a,property:l,clip:c}),n.restore(),n.save(),Wm(n,s,o.right),d=r)),tu(n,{line:e,target:s,color:d,scale:a,property:l,clip:c}),n.restore()}function qm(n,t,e){const{segments:s,points:r}=t;let i=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=r[c],h=r[ol(c,l,r)];i?(n.moveTo(d.x,d.y),i=!1):(n.lineTo(d.x,e),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(h.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Wm(n,t,e){const{segments:s,points:r}=t;let i=!0,o=!1;n.beginPath();for(const a of s){const{start:c,end:l}=a,d=r[c],h=r[ol(c,l,r)];i?(n.moveTo(d.x,d.y),i=!1):(n.lineTo(e,d.y),n.lineTo(d.x,d.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,h.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function tu(n,t){const{line:e,target:s,property:r,color:i,scale:o,clip:a}=t,c=PP(e,s,r);for(const{source:l,target:d,start:h,end:f}of c){const{style:{backgroundColor:m=i}={}}=l,g=s!==!0;n.save(),n.fillStyle=m,KP(n,o,a,g&&zu(r,h,f)),n.beginPath();const v=!!e.pathSegment(n,l);let _;if(g){v?n.closePath():Gm(n,s,f,r);const I=!!s.pathSegment(n,d,{move:v,reverse:!0});_=v&&I,_||Gm(n,s,h,r)}n.closePath(),n.fill(_?"evenodd":"nonzero"),n.restore()}}function KP(n,t,e,s){const r=t.chart.chartArea,{property:i,start:o,end:a}=s||{};if(i==="x"||i==="y"){let c,l,d,h;i==="x"?(c=o,l=r.top,d=a,h=r.bottom):(c=r.left,l=o,d=r.right,h=a),n.beginPath(),e&&(c=Math.max(c,e.left),d=Math.min(d,e.right),l=Math.max(l,e.top),h=Math.min(h,e.bottom)),n.rect(c,l,d-c,h-l),n.clip()}}function Gm(n,t,e,s){const r=t.interpolate(e,s);r&&n.lineTo(r.x,r.y)}var QP={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,r=[];let i,o,a,c;for(o=0;o<s;++o)i=n.getDatasetMeta(o),a=i.dataset,c=null,a&&a.options&&a instanceof os&&(c={visible:n.isDatasetVisible(o),index:o,fill:OP(a,o,s),chart:n,axis:i.controller.options.indexAxis,scale:i.vScale,line:a}),i.$filler=c,r.push(c);for(o=0;o<s;++o)c=r[o],!(!c||c.fill===!1)&&(c.fill=MP(r,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",r=n.getSortedVisibleDatasetMetas(),i=n.chartArea;for(let o=r.length-1;o>=0;--o){const a=r[o].$filler;a&&(a.line.updateControlPoints(i,a.axis),s&&a.fill&&Zl(n.ctx,a,i))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let r=s.length-1;r>=0;--r){const i=s[r].$filler;Hm(i)&&Zl(n.ctx,i,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Hm(s)||e.drawTime!=="beforeDatasetDraw"||Zl(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Ym=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},XP=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Km extends nn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Dt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,r)=>t.sort(s,r,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,r=oe(s.font),i=r.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Ym(s,i);let l,d;e.font=r.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,i,a,c)+10):(d=this.maxHeight,l=this._fitCols(o,r,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,r){const{ctx:i,maxWidth:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=r+a;let h=t;i.textAlign="left",i.textBaseline="middle";let f=-1,m=-d;return this.legendItems.forEach((g,v)=>{const _=s+e/2+i.measureText(g.text).width;(v===0||l[l.length-1]+_+2*a>o)&&(h+=d,l[l.length-(v>0?0:1)]=0,m+=d,f++),c[v]={left:0,top:m,row:f,width:_,height:r},l[l.length-1]+=_+a}),h}_fitCols(t,e,s,r){const{ctx:i,maxHeight:o,options:{labels:{padding:a}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-t;let h=a,f=0,m=0,g=0,v=0;return this.legendItems.forEach((_,I)=>{const{itemWidth:w,itemHeight:S}=JP(s,e,i,_,r);I>0&&m+S+2*a>d&&(h+=f+a,l.push({width:f,height:m}),g+=f+a,v++,f=m=0),c[I]={left:g,top:m,col:v,width:w,height:S},f=Math.max(f,w),m+=S+a}),h+=f,l.push({width:f,height:m}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:r},rtl:i}}=this,o=Br(i,this.left,this.width);if(this.isHorizontal()){let a=0,c=be(s,this.left+r,this.right-this.lineWidths[a]);for(const l of e)a!==l.row&&(a=l.row,c=be(s,this.left+r,this.right-this.lineWidths[a])),l.top+=this.top+t+r,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+r}else{let a=0,c=be(s,this.top+t+r,this.bottom-this.columnSizes[a].height);for(const l of e)l.col!==a&&(a=l.col,c=be(s,this.top+t+r,this.bottom-this.columnSizes[a].height)),l.top=c,l.left+=this.left+r,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;nl(t,this),this._draw(),sl(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:r}=this,{align:i,labels:o}=t,a=Bt.color,c=Br(t.rtl,this.left,this.width),l=oe(o.font),{padding:d}=o,h=l.size,f=h/2;let m;this.drawTitle(),r.textAlign=c.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=l.string;const{boxWidth:g,boxHeight:v,itemHeight:_}=Ym(o,h),I=function(M,E,b){if(isNaN(g)||g<=0||isNaN(v)||v<0)return;r.save();const x=it(b.lineWidth,1);if(r.fillStyle=it(b.fillStyle,a),r.lineCap=it(b.lineCap,"butt"),r.lineDashOffset=it(b.lineDashOffset,0),r.lineJoin=it(b.lineJoin,"miter"),r.lineWidth=x,r.strokeStyle=it(b.strokeStyle,a),r.setLineDash(it(b.lineDash,[])),o.usePointStyle){const A={radius:v*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:x},C=c.xPlus(M,g/2),D=E+f;Sv(r,A,C,D,o.pointStyleWidth&&g)}else{const A=E+Math.max((h-v)/2,0),C=c.leftForLtr(M,g),D=Ws(b.borderRadius);r.beginPath(),Object.values(D).some(k=>k!==0)?_o(r,{x:C,y:A,w:g,h:v,radius:D}):r.rect(C,A,g,v),r.fill(),x!==0&&r.stroke()}r.restore()},w=function(M,E,b){ar(r,b.text,M,E+_/2,l,{strikethrough:b.hidden,textAlign:c.textAlign(b.textAlign)})},S=this.isHorizontal(),P=this._computeTitleHeight();S?m={x:be(i,this.left+d,this.right-s[0]),y:this.top+d+P,line:0}:m={x:this.left+d,y:be(i,this.top+P+d,this.bottom-e[0].height),line:0},Nv(this.ctx,t.textDirection);const R=_+d;this.legendItems.forEach((M,E)=>{r.strokeStyle=M.fontColor,r.fillStyle=M.fontColor;const b=r.measureText(M.text).width,x=c.textAlign(M.textAlign||(M.textAlign=o.textAlign)),A=g+f+b;let C=m.x,D=m.y;c.setWidth(this.width),S?E>0&&C+A+d>this.right&&(D=m.y+=R,m.line++,C=m.x=be(i,this.left+d,this.right-s[m.line])):E>0&&D+R>this.bottom&&(C=m.x=C+e[m.line].width+d,m.line++,D=m.y=be(i,this.top+P+d,this.bottom-e[m.line].height));const k=c.x(C);if(I(k,D,M),C=y1(x,C+g+f,S?C+A:this.right,t.rtl),w(c.x(C),D,M),S)m.x+=A+d;else if(typeof M.text!="string"){const nt=l.lineHeight;m.y+=cb(M,nt)+d}else m.y+=R}),Lv(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=oe(e.font),r=Se(e.padding);if(!e.display)return;const i=Br(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=s.size/2,l=r.top+c;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+l,h=be(t.align,h,this.right-f);else{const g=this.columnSizes.reduce((v,_)=>Math.max(v,_.height),0);d=l+be(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const m=be(a,h,h+f);o.textAlign=i.textAlign(ih(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,ar(o,e.text,m,d,s)}_computeTitleHeight(){const t=this.options.title,e=oe(t.font),s=Se(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,r,i;if(Mn(t,this.left,this.right)&&Mn(e,this.top,this.bottom)){for(i=this.legendHitBoxes,s=0;s<i.length;++s)if(r=i[s],Mn(t,r.left,r.left+r.width)&&Mn(e,r.top,r.top+r.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!eD(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const r=this._hoveredItem,i=XP(r,s);r&&!i&&Dt(e.onLeave,[t,r,this],this),this._hoveredItem=s,s&&!i&&Dt(e.onHover,[t,s,this],this)}else s&&Dt(e.onClick,[t,s,this],this)}}function JP(n,t,e,s,r){const i=ZP(s,n,t,e),o=tD(r,s,t.lineHeight);return{itemWidth:i,itemHeight:o}}function ZP(n,t,e,s){let r=n.text;return r&&typeof r!="string"&&(r=r.reduce((i,o)=>i.length>o.length?i:o)),t+e.size/2+s.measureText(r).width}function tD(n,t,e){let s=n;return typeof t.text!="string"&&(s=cb(t,e)),s}function cb(n,t){const e=n.text?n.text.length:0;return t*e}function eD(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var nD={id:"legend",_element:Km,start(n,t,e){const s=n.legend=new Km({ctx:n.ctx,options:e,chart:n});Te.configure(n,s,e),Te.addBox(n,s)},stop(n){Te.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;Te.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,r=e.chart;r.isDatasetVisible(s)?(r.hide(s),t.hidden=!0):(r.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:r,color:i,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(c=>{const l=c.controller.getStyle(e?0:void 0),d=Se(l.borderWidth);return{text:t[c.index].label,fillStyle:l.backgroundColor,fontColor:i,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:r||l.textAlign,borderRadius:o&&(a||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class ph extends nn{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const r=Ft(s.text)?s.text.length:1;this._padding=Se(s.padding);const i=r*oe(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:r,right:i,options:o}=this,a=o.align;let c=0,l,d,h;return this.isHorizontal()?(d=be(a,s,i),h=e+t,l=i-s):(o.position==="left"?(d=s+t,h=be(a,r,e),c=wt*-.5):(d=i-t,h=be(a,e,r),c=wt*.5),l=r-e),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=oe(e.font),i=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(i);ar(t,e.text,0,0,s,{color:e.color,maxWidth:c,rotation:l,textAlign:ih(e.align),textBaseline:"middle",translation:[o,a]})}}function sD(n,t){const e=new ph({ctx:n.ctx,options:t,chart:n});Te.configure(n,e,t),Te.addBox(n,e),n.titleBlock=e}var rD={id:"title",_element:ph,start(n,t,e){sD(n,e)},stop(n){const t=n.titleBlock;Te.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;Te.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Sa=new WeakMap;var iD={id:"subtitle",start(n,t,e){const s=new ph({ctx:n.ctx,options:e,chart:n});Te.configure(n,s,e),Te.addBox(n,s),Sa.set(n,s)},stop(n){Te.removeBox(n,Sa.get(n)),Sa.delete(n)},beforeUpdate(n,t,e){const s=Sa.get(n);Te.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Bi={average(n){if(!n.length)return!1;let t,e,s=new Set,r=0,i=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const c=a.tooltipPosition();s.add(c.x),r+=c.y,++i}}return i===0||s.size===0?!1:{x:[...s].reduce((a,c)=>a+c)/s.size,y:r/i}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,r=Number.POSITIVE_INFINITY,i,o,a;for(i=0,o=n.length;i<o;++i){const c=n[i].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),d=Nu(t,l);d<r&&(r=d,a=c)}}if(a){const c=a.tooltipPosition();e=c.x,s=c.y}return{x:e,y:s}}};function an(n,t){return t&&(Ft(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function An(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function oD(n,t){const{element:e,datasetIndex:s,index:r}=t,i=n.getDatasetMeta(s).controller,{label:o,value:a}=i.getLabelAndValue(r);return{chart:n,label:o,parsed:i.getParsed(r),raw:n.data.datasets[s].data[r],formattedValue:a,dataset:i.getDataset(),dataIndex:r,datasetIndex:s,element:e}}function Qm(n,t){const e=n.chart.ctx,{body:s,footer:r,title:i}=n,{boxWidth:o,boxHeight:a}=t,c=oe(t.bodyFont),l=oe(t.titleFont),d=oe(t.footerFont),h=i.length,f=r.length,m=s.length,g=Se(t.padding);let v=g.height,_=0,I=s.reduce((P,R)=>P+R.before.length+R.lines.length+R.after.length,0);if(I+=n.beforeBody.length+n.afterBody.length,h&&(v+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),I){const P=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;v+=m*P+(I-m)*c.lineHeight+(I-1)*t.bodySpacing}f&&(v+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let w=0;const S=function(P){_=Math.max(_,e.measureText(P).width+w)};return e.save(),e.font=l.string,kt(n.title,S),e.font=c.string,kt(n.beforeBody.concat(n.afterBody),S),w=t.displayColors?o+2+t.boxPadding:0,kt(s,P=>{kt(P.before,S),kt(P.lines,S),kt(P.after,S)}),w=0,e.font=d.string,kt(n.footer,S),e.restore(),_+=g.width,{width:_,height:v}}function aD(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function cD(n,t,e,s){const{x:r,width:i}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&r+i+o>t.width||n==="right"&&r-i-o<0)return!0}function lD(n,t,e,s){const{x:r,width:i}=e,{width:o,chartArea:{left:a,right:c}}=n;let l="center";return s==="center"?l=r<=(a+c)/2?"left":"right":r<=i/2?l="left":r>=o-i/2&&(l="right"),cD(l,n,t,e)&&(l="center"),l}function Xm(n,t,e){const s=e.yAlign||t.yAlign||aD(n,e);return{xAlign:e.xAlign||t.xAlign||lD(n,t,e,s),yAlign:s}}function uD(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function dD(n,t,e){let{y:s,height:r}=n;return t==="top"?s+=e:t==="bottom"?s-=r+e:s-=r/2,s}function Jm(n,t,e,s){const{caretSize:r,caretPadding:i,cornerRadius:o}=n,{xAlign:a,yAlign:c}=e,l=r+i,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:m}=Ws(o);let g=uD(t,a);const v=dD(t,c,l);return c==="center"?a==="left"?g+=l:a==="right"&&(g-=l):a==="left"?g-=Math.max(d,f)+r:a==="right"&&(g+=Math.max(h,m)+r),{x:ue(g,0,s.width-t.width),y:ue(v,0,s.height-t.height)}}function ka(n,t,e){const s=Se(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Zm(n){return an([],An(n))}function hD(n,t,e){return xs(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function tg(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const lb={beforeTitle:Tn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:Tn,beforeBody:Tn,beforeLabel:Tn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return dt(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Tn,afterBody:Tn,beforeFooter:Tn,footer:Tn,afterFooter:Tn};function De(n,t,e,s){const r=n[t].call(e,s);return typeof r>"u"?lb[t].call(e,s):r}class Hu extends nn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),r=s.enabled&&e.options.animation&&s.animations,i=new Uv(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||(this.$context=hD(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,r=De(s,"beforeTitle",this,t),i=De(s,"title",this,t),o=De(s,"afterTitle",this,t);let a=[];return a=an(a,An(r)),a=an(a,An(i)),a=an(a,An(o)),a}getBeforeBody(t,e){return Zm(De(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,r=[];return kt(t,i=>{const o={before:[],lines:[],after:[]},a=tg(s,i);an(o.before,An(De(a,"beforeLabel",this,i))),an(o.lines,De(a,"label",this,i)),an(o.after,An(De(a,"afterLabel",this,i))),r.push(o)}),r}getAfterBody(t,e){return Zm(De(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,r=De(s,"beforeFooter",this,t),i=De(s,"footer",this,t),o=De(s,"afterFooter",this,t);let a=[];return a=an(a,An(r)),a=an(a,An(i)),a=an(a,An(o)),a}_createItems(t){const e=this._active,s=this.chart.data,r=[],i=[],o=[];let a=[],c,l;for(c=0,l=e.length;c<l;++c)a.push(oD(this.chart,e[c]));return t.filter&&(a=a.filter((d,h,f)=>t.filter(d,h,f,s))),t.itemSort&&(a=a.sort((d,h)=>t.itemSort(d,h,s))),kt(a,d=>{const h=tg(t.callbacks,d);r.push(De(h,"labelColor",this,d)),i.push(De(h,"labelPointStyle",this,d)),o.push(De(h,"labelTextColor",this,d))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),r=this._active;let i,o=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{const a=Bi[s.position].call(this,r,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const c=this._size=Qm(this,s),l=Object.assign({},a,c),d=Xm(this.chart,s,l),h=Jm(s,l,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,i={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,r){const i=this.getCaretPosition(t,s,r);e.lineTo(i.x1,i.y1),e.lineTo(i.x2,i.y2),e.lineTo(i.x3,i.y3)}getCaretPosition(t,e,s){const{xAlign:r,yAlign:i}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:c,topRight:l,bottomLeft:d,bottomRight:h}=Ws(a),{x:f,y:m}=t,{width:g,height:v}=e;let _,I,w,S,P,R;return i==="center"?(P=m+v/2,r==="left"?(_=f,I=_-o,S=P+o,R=P-o):(_=f+g,I=_+o,S=P-o,R=P+o),w=_):(r==="left"?I=f+Math.max(c,d)+o:r==="right"?I=f+g-Math.max(l,h)-o:I=this.caretX,i==="top"?(S=m,P=S-o,_=I-o,w=I+o):(S=m+v,P=S+o,_=I+o,w=I-o),R=S),{x1:_,x2:I,x3:w,y1:S,y2:P,y3:R}}drawTitle(t,e,s){const r=this.title,i=r.length;let o,a,c;if(i){const l=Br(s.rtl,this.x,this.width);for(t.x=ka(this,s.titleAlign,s),e.textAlign=l.textAlign(s.titleAlign),e.textBaseline="middle",o=oe(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,c=0;c<i;++c)e.fillText(r[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===i&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,r,i){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:c,boxWidth:l}=i,d=oe(i.bodyFont),h=ka(this,"left",i),f=r.x(h),m=c<d.lineHeight?(d.lineHeight-c)/2:0,g=e.y+m;if(i.usePointStyle){const v={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},_=r.leftForLtr(f,l)+l/2,I=g+c/2;t.strokeStyle=i.multiKeyBackground,t.fillStyle=i.multiKeyBackground,Vu(t,v,_,I),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Vu(t,v,_,I)}else{t.lineWidth=pt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=r.leftForLtr(f,l),_=r.leftForLtr(r.xPlus(f,1),l-2),I=Ws(o.borderRadius);Object.values(I).some(w=>w!==0)?(t.beginPath(),t.fillStyle=i.multiKeyBackground,_o(t,{x:v,y:g,w:l,h:c,radius:I}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),_o(t,{x:_,y:g+1,w:l-2,h:c-2,radius:I}),t.fill()):(t.fillStyle=i.multiKeyBackground,t.fillRect(v,g,l,c),t.strokeRect(v,g,l,c),t.fillStyle=o.backgroundColor,t.fillRect(_,g+1,l-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:r}=this,{bodySpacing:i,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:d}=s,h=oe(s.bodyFont);let f=h.lineHeight,m=0;const g=Br(s.rtl,this.x,this.width),v=function(b){e.fillText(b,g.x(t.x+m),t.y+f/2),t.y+=f+i},_=g.textAlign(o);let I,w,S,P,R,M,E;for(e.textAlign=o,e.textBaseline="middle",e.font=h.string,t.x=ka(this,_,s),e.fillStyle=s.bodyColor,kt(this.beforeBody,v),m=a&&_!=="right"?o==="center"?l/2+d:l+2+d:0,P=0,M=r.length;P<M;++P){for(I=r[P],w=this.labelTextColors[P],e.fillStyle=w,kt(I.before,v),S=I.lines,a&&S.length&&(this._drawColorBox(e,t,P,g,s),f=Math.max(h.lineHeight,c)),R=0,E=S.length;R<E;++R)v(S[R]),f=h.lineHeight;kt(I.after,v)}m=0,f=h.lineHeight,kt(this.afterBody,v),t.y-=i}drawFooter(t,e,s){const r=this.footer,i=r.length;let o,a;if(i){const c=Br(s.rtl,this.x,this.width);for(t.x=ka(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=c.textAlign(s.footerAlign),e.textBaseline="middle",o=oe(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<i;++a)e.fillText(r[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,r){const{xAlign:i,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:d}=s,{topLeft:h,topRight:f,bottomLeft:m,bottomRight:g}=Ws(r.cornerRadius);e.fillStyle=r.backgroundColor,e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.beginPath(),e.moveTo(a+h,c),o==="top"&&this.drawCaret(t,e,s,r),e.lineTo(a+l-f,c),e.quadraticCurveTo(a+l,c,a+l,c+f),o==="center"&&i==="right"&&this.drawCaret(t,e,s,r),e.lineTo(a+l,c+d-g),e.quadraticCurveTo(a+l,c+d,a+l-g,c+d),o==="bottom"&&this.drawCaret(t,e,s,r),e.lineTo(a+m,c+d),e.quadraticCurveTo(a,c+d,a,c+d-m),o==="center"&&i==="left"&&this.drawCaret(t,e,s,r),e.lineTo(a,c+h),e.quadraticCurveTo(a,c,a+h,c),e.closePath(),e.fill(),r.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,r=s&&s.x,i=s&&s.y;if(r||i){const o=Bi[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Qm(this,t),c=Object.assign({},o,this._size),l=Xm(e,t,c),d=Jm(t,c,l,e);(r._to!==d.x||i._to!==d.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const r={width:this.width,height:this.height},i={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=Se(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(i,t,r,e),Nv(t,e.textDirection),i.y+=o.top,this.drawTitle(i,t,e),this.drawBody(i,t,e),this.drawFooter(i,t,e),Lv(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,r=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),i=!pc(s,r),o=this._positionChanged(r,e);(i||o)&&(this._active=r,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,i=this._active||[],o=this._getActiveElements(t,i,e,s),a=this._positionChanged(o,t),c=e||!pc(o,i)||a;return c&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,s,r){const i=this.options;if(t.type==="mouseout")return[];if(!r)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,i.mode,i,s);return i.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:r,options:i}=this,o=Bi[i.position].call(this,t,e);return o!==!1&&(s!==o.x||r!==o.y)}}L(Hu,"positioners",Bi);var fD={id:"tooltip",_element:Hu,positioners:Bi,afterInit(n,t,e){e&&(n.tooltip=new Hu({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:lb},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},pD=Object.freeze({__proto__:null,Colors:AP,Decimation:RP,Filler:QP,Legend:nD,SubTitle:iD,Title:rD,Tooltip:fD});const mD=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function gD(n,t,e,s){const r=n.indexOf(t);if(r===-1)return mD(n,t,e,s);const i=n.lastIndexOf(t);return r!==i?e:r}const _D=(n,t)=>n===null?null:ue(Math.round(n),0,t);function eg(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class qu extends fr{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:r,label:i}of e)s[r]===i&&s.splice(r,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(dt(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:gD(s,t,it(e,t),this._addedLabels),_D(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(r=this.getLabels().length-1)),this.min=s,this.max=r}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,r=[];let i=this.getLabels();i=t===0&&e===i.length-1?i:i.slice(t,e+1),this._valueRange=Math.max(i.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)r.push({value:o});return r}getLabelForValue(t){return eg.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}L(qu,"id","category"),L(qu,"defaults",{ticks:{callback:eg}});function yD(n,t){const e=[],{bounds:r,step:i,min:o,max:a,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:f}=n,m=i||1,g=d-1,{min:v,max:_}=t,I=!dt(o),w=!dt(a),S=!dt(l),P=(_-v)/(h+1);let R=Qp((_-v)/g/m)*m,M,E,b,x;if(R<1e-14&&!I&&!w)return[{value:v},{value:_}];x=Math.ceil(_/R)-Math.floor(v/R),x>g&&(R=Qp(x*R/g/m)*m),dt(c)||(M=Math.pow(10,c),R=Math.ceil(R*M)/M),r==="ticks"?(E=Math.floor(v/R)*R,b=Math.ceil(_/R)*R):(E=v,b=_),I&&w&&i&&d1((a-o)/i,R/1e3)?(x=Math.round(Math.min((a-o)/R,d)),R=(a-o)/x,E=o,b=a):S?(E=I?o:E,b=w?a:b,x=l-1,R=(b-E)/x):(x=(b-E)/R,Qi(x,Math.round(x),R/1e3)?x=Math.round(x):x=Math.ceil(x));const A=Math.max(Xp(R),Xp(E));M=Math.pow(10,dt(c)?A:c),E=Math.round(E*M)/M,b=Math.round(b*M)/M;let C=0;for(I&&(f&&E!==o?(e.push({value:o}),E<o&&C++,Qi(Math.round((E+C*R)*M)/M,o,ng(o,P,n))&&C++):E<o&&C++);C<x;++C){const D=Math.round((E+C*R)*M)/M;if(w&&D>a)break;e.push({value:D})}return w&&f&&b!==a?e.length&&Qi(e[e.length-1].value,a,ng(a,P,n))?e[e.length-1].value=a:e.push({value:a}):(!w||b===a)&&e.push({value:b}),e}function ng(n,t,{horizontal:e,minRotation:s}){const r=Je(s),i=(e?Math.sin(r):Math.cos(r))||.001,o=.75*t*(""+n).length;return Math.min(t/i,o)}class xc extends fr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return dt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:r,max:i}=this;const o=c=>r=e?r:c,a=c=>i=s?i:c;if(t){const c=yn(r),l=yn(i);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(r===i){let c=i===0?1:Math.abs(i*.05);a(i+c),t||o(r-c)}this.min=r,this.max=i}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,r;return s?(r=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),e=e||11),e&&(r=Math.min(e,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const r={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},i=this._range||this,o=yD(r,i);return t.bounds==="ticks"&&yv(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const r=(s-e)/Math.max(t.length-1,1)/2;e-=r,s+=r}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Bo(t,this.chart.options.locale,this.options.ticks.format)}}class Wu extends xc{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Yt(t)?t:0,this.max=Yt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=Je(this.options.ticks.minRotation),r=(t?Math.sin(s):Math.cos(s))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,i.lineHeight/r))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}L(Wu,"id","linear"),L(Wu,"defaults",{ticks:{callback:el.formatters.numeric}});const vo=n=>Math.floor(rs(n)),Ms=(n,t)=>Math.pow(10,vo(n)+t);function sg(n){return n/Math.pow(10,vo(n))===1}function rg(n,t,e){const s=Math.pow(10,e),r=Math.floor(n/s);return Math.ceil(t/s)-r}function vD(n,t){const e=t-n;let s=vo(e);for(;rg(n,t,s)>10;)s++;for(;rg(n,t,s)<10;)s--;return Math.min(s,vo(n))}function bD(n,{min:t,max:e}){t=Ve(n.min,t);const s=[],r=vo(t);let i=vD(t,e),o=i<0?Math.pow(10,Math.abs(i)):1;const a=Math.pow(10,i),c=r>i?Math.pow(10,r):0,l=Math.round((t-c)*o)/o,d=Math.floor((t-c)/a/10)*a*10;let h=Math.floor((l-d)/Math.pow(10,i)),f=Ve(n.min,Math.round((c+d+h*Math.pow(10,i))*o)/o);for(;f<e;)s.push({value:f,major:sg(f),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(i++,h=2,o=i>=0?1:o),f=Math.round((c+d+h*Math.pow(10,i))*o)/o;const m=Ve(n.max,f);return s.push({value:m,major:sg(m),significand:h}),s}class Gu extends fr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=xc.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return Yt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Yt(t)?Math.max(0,t):null,this.max=Yt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Yt(this._userMin)&&(this.min=t===Ms(this.min,0)?Ms(this.min,-1):Ms(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,r=this.max;const i=a=>s=t?s:a,o=a=>r=e?r:a;s===r&&(s<=0?(i(1),o(10)):(i(Ms(s,-1)),o(Ms(r,1)))),s<=0&&i(Ms(r,-1)),r<=0&&o(Ms(s,1)),this.min=s,this.max=r}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=bD(e,this);return t.bounds==="ticks"&&yv(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Bo(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=rs(t),this._valueRange=rs(this.max)-rs(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(rs(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}L(Gu,"id","logarithmic"),L(Gu,"defaults",{ticks:{callback:el.formatters.logarithmic,major:{enabled:!0}}});function Yu(n){const t=n.ticks;if(t.display&&n.display){const e=Se(t.backdropPadding);return it(t.font&&t.font.size,Bt.font.size)+e.height}return 0}function xD(n,t,e){return e=Ft(e)?e:[e],{w:k1(n,t.string,e),h:e.length*t.lineHeight}}function ig(n,t,e,s,r){return n===s||n===r?{start:t-e/2,end:t+e/2}:n<s||n>r?{start:t-e,end:t}:{start:t,end:t+e}}function wD(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],r=[],i=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?wt/i:0;for(let c=0;c<i;c++){const l=o.setContext(n.getPointLabelContext(c));r[c]=l.padding;const d=n.getPointPosition(c,n.drawingArea+r[c],a),h=oe(l.font),f=xD(n.ctx,h,n._pointLabels[c]);s[c]=f;const m=we(n.getIndexAngle(c)+a),g=Math.round(sh(m)),v=ig(g,d.x,f.w,0,180),_=ig(g,d.y,f.h,90,270);ED(e,t,m,v,_)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=AD(n,s,r)}function ED(n,t,e,s,r){const i=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,c=0;s.start<t.l?(a=(t.l-s.start)/i,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/i,n.r=Math.max(n.r,t.r+a)),r.start<t.t?(c=(t.t-r.start)/o,n.t=Math.min(n.t,t.t-c)):r.end>t.b&&(c=(r.end-t.b)/o,n.b=Math.max(n.b,t.b+c))}function TD(n,t,e){const s=n.drawingArea,{extra:r,additionalAngle:i,padding:o,size:a}=e,c=n.getPointPosition(t,s+r+o,i),l=Math.round(sh(we(c.angle+Zt))),d=CD(c.y,a.h,l),h=SD(l),f=kD(c.x,a.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:f,top:d,right:f+a.w,bottom:d+a.h}}function ID(n,t){if(!t)return!0;const{left:e,top:s,right:r,bottom:i}=n;return!(Nn({x:e,y:s},t)||Nn({x:e,y:i},t)||Nn({x:r,y:s},t)||Nn({x:r,y:i},t))}function AD(n,t,e){const s=[],r=n._pointLabels.length,i=n.options,{centerPointLabels:o,display:a}=i.pointLabels,c={extra:Yu(i)/2,additionalAngle:o?wt/r:0};let l;for(let d=0;d<r;d++){c.padding=e[d],c.size=t[d];const h=TD(n,d,c);s.push(h),a==="auto"&&(h.visible=ID(h,l),h.visible&&(l=h))}return s}function SD(n){return n===0||n===180?"center":n<180?"left":"right"}function kD(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function CD(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function RD(n,t,e){const{left:s,top:r,right:i,bottom:o}=e,{backdropColor:a}=t;if(!dt(a)){const c=Ws(t.borderRadius),l=Se(t.backdropPadding);n.fillStyle=a;const d=s-l.left,h=r-l.top,f=i-s+l.width,m=o-r+l.height;Object.values(c).some(g=>g!==0)?(n.beginPath(),_o(n,{x:d,y:h,w:f,h:m,radius:c}),n.fill()):n.fillRect(d,h,f,m)}}function PD(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let r=t-1;r>=0;r--){const i=n._pointLabelItems[r];if(!i.visible)continue;const o=s.setContext(n.getPointLabelContext(r));RD(e,o,i);const a=oe(o.font),{x:c,y:l,textAlign:d}=i;ar(e,n._pointLabels[r],c,l+a.lineHeight/2,a,{color:o.color,textAlign:d,textBaseline:"middle"})}}function ub(n,t,e,s){const{ctx:r}=n;if(e)r.arc(n.xCenter,n.yCenter,t,0,Lt);else{let i=n.getPointPosition(0,t);r.moveTo(i.x,i.y);for(let o=1;o<s;o++)i=n.getPointPosition(o,t),r.lineTo(i.x,i.y)}}function DD(n,t,e,s,r){const i=n.ctx,o=t.circular,{color:a,lineWidth:c}=t;!o&&!s||!a||!c||e<0||(i.save(),i.strokeStyle=a,i.lineWidth=c,i.setLineDash(r.dash||[]),i.lineDashOffset=r.dashOffset,i.beginPath(),ub(n,e,o,s),i.closePath(),i.stroke(),i.restore())}function MD(n,t,e){return xs(n,{label:e,index:t,type:"pointLabel"})}class Ui extends xc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Se(Yu(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Yt(t)&&!isNaN(t)?t:0,this.max=Yt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Yu(this.options))}generateTickLabels(t){xc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const r=Dt(this.options.pointLabels.callback,[e,s],this);return r||r===0?r:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?wD(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,r){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,r))}getIndexAngle(t){const e=Lt/(this._pointLabels.length||1),s=this.options.startAngle||0;return we(t*e+Je(s))}getDistanceFromCenterForValue(t){if(dt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(dt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return MD(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const r=this.getIndexAngle(t)-Zt+s;return{x:Math.cos(r)*e+this.xCenter,y:Math.sin(r)*e+this.yCenter,angle:r}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:r,bottom:i}=this._pointLabelItems[t];return{left:e,top:s,right:r,bottom:i}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),ub(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:r,border:i}=e,o=this._pointLabels.length;let a,c,l;if(e.pointLabels.display&&PD(this,o),r.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),m=r.setContext(f),g=i.setContext(f);DD(this,m,c,o,g)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const d=s.setContext(this.getPointLabelContext(a)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),l=this.getPointPosition(a,c),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const r=this.getIndexAngle(0);let i,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&this.min>=0&&!e.reverse)return;const l=s.setContext(this.getContext(c)),d=oe(l.font);if(i=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=d.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=Se(l.backdropPadding);t.fillRect(-o/2-h.left,-i-d.size/2-h.top,o+h.width,d.size+h.height)}ar(t,a.label,0,-i,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),t.restore()}drawTitle(){}}L(Ui,"id","radialLinear"),L(Ui,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:el.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),L(Ui,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),L(Ui,"descriptors",{angleLines:{_fallback:"grid"}});const al={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ne=Object.keys(al);function og(n,t){return n-t}function ag(n,t){if(dt(t))return null;const e=n._adapter,{parser:s,round:r,isoWeekday:i}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),Yt(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(r&&(o=r==="week"&&(Yr(i)||i===!0)?e.startOf(o,"isoWeek",i):e.startOf(o,r)),+o)}function cg(n,t,e,s){const r=Ne.length;for(let i=Ne.indexOf(n);i<r-1;++i){const o=al[Ne[i]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return Ne[i]}return Ne[r-1]}function OD(n,t,e,s,r){for(let i=Ne.length-1;i>=Ne.indexOf(e);i--){const o=Ne[i];if(al[o].common&&n._adapter.diff(r,s,o)>=t-1)return o}return Ne[e?Ne.indexOf(e):0]}function ND(n){for(let t=Ne.indexOf(n)+1,e=Ne.length;t<e;++t)if(al[Ne[t]].common)return Ne[t]}function lg(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:r}=rh(e,t),i=e[s]>=t?e[s]:e[r];n[i]=!0}}function LD(n,t,e,s){const r=n._adapter,i=+r.startOf(t[0].value,s),o=t[t.length-1].value;let a,c;for(a=i;a<=o;a=+r.add(a,1,s))c=e[a],c>=0&&(t[c].major=!0);return t}function ug(n,t,e){const s=[],r={},i=t.length;let o,a;for(o=0;o<i;++o)a=t[o],r[a]=o,s.push({value:a,major:!1});return i===0||!e?s:LD(n,s,r,e)}class bo extends fr{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),r=this._adapter=new Hv._date(t.adapters.date);r.init(e),Ki(s.displayFormats,r.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:ag(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:r,max:i,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(r=Math.min(r,l.min)),!a&&!isNaN(l.max)&&(i=Math.max(i,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),r=Yt(r)&&!isNaN(r)?r:+e.startOf(Date.now(),s),i=Yt(i)&&!isNaN(i)?i:+e.endOf(Date.now(),s)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,r=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const i=this.min,o=this.max,a=m1(r,i,o);return this._unit=e.unit||(s.autoSkip?cg(e.minUnit,this.min,this.max,this._getLabelCapacity(i)):OD(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:ND(this._unit),this.initOffsets(r),t.reverse&&a.reverse(),ug(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,r,i;this.options.offset&&t.length&&(r=this.getDecimalForValue(t[0]),t.length===1?e=1-r:e=(this.getDecimalForValue(t[1])-r)/2,i=this.getDecimalForValue(t[t.length-1]),t.length===1?s=i:s=(i-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=ue(e,0,o),s=ue(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,r=this.options,i=r.time,o=i.unit||cg(i.minUnit,e,s,this._getLabelCapacity(e)),a=it(r.ticks.stepSize,1),c=o==="week"?i.isoWeekday:!1,l=Yr(c)||c===!0,d={};let h=e,f,m;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const g=r.ticks.source==="data"&&this.getDataTimestamps();for(f=h,m=0;f<s;f=+t.add(f,a,o),m++)lg(d,f,g);return(f===s||r.bounds==="ticks"||m===1)&&lg(d,f,g),Object.keys(d).sort(og).map(v=>+v)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const r=this.options.time.displayFormats,i=this._unit,o=e||r[i];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,r){const i=this.options,o=i.ticks.callback;if(o)return Dt(o,[t,e,s],this);const a=i.time.displayFormats,c=this._unit,l=this._majorUnit,d=c&&a[c],h=l&&a[l],f=s[e],m=l&&h&&f&&f.major;return this._adapter.format(t,r||(m?h:d))}generateTickLabels(t){let e,s,r;for(e=0,s=t.length;e<s;++e)r=t[e],r.label=this._tickFormatFunction(r.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,r=Je(this.isHorizontal()?e.maxRotation:e.minRotation),i=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:s*i+a*o,h:s*o+a*i}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,r=s[e.unit]||s.millisecond,i=this._tickFormatFunction(t,0,ug(this,[t],this._majorUnit),r),o=this._getLabelSize(i),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(e=0,s=r.length;e<s;++e)t=t.concat(r[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const r=this.getLabels();for(e=0,s=r.length;e<s;++e)t.push(ag(this,r[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return xv(t.sort(og))}}L(bo,"id","time"),L(bo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ca(n,t,e){let s=0,r=n.length-1,i,o,a,c;e?(t>=n[s].pos&&t<=n[r].pos&&({lo:s,hi:r}=On(n,"pos",t)),{pos:i,time:a}=n[s],{pos:o,time:c}=n[r]):(t>=n[s].time&&t<=n[r].time&&({lo:s,hi:r}=On(n,"time",t)),{time:i,pos:a}=n[s],{time:o,pos:c}=n[r]);const l=o-i;return l?a+(c-a)*(t-i)/l:a}class Ku extends bo{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Ca(e,this.min),this._tableRange=Ca(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,r=[],i=[];let o,a,c,l,d;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=s&&r.push(l);if(r.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=r.length;o<a;++o)d=r[o+1],c=r[o-1],l=r[o],Math.round((d+c)/2)!==l&&i.push({time:l,pos:o/(a-1)});return i}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((r,i)=>r-i)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(Ca(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return Ca(this._table,s*this._tableRange+this._minPos,!0)}}L(Ku,"id","timeseries"),L(Ku,"defaults",bo.defaults);var VD=Object.freeze({__proto__:null,CategoryScale:qu,LinearScale:Wu,LogarithmicScale:Gu,RadialLinearScale:Ui,TimeScale:bo,TimeSeriesScale:Ku});const FD=[HC,vP,pD,VD];yt.register(...FD);const Ii="rgba(255,255,255,0.08)",Er="#a1a1aa",Qe={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};yt.defaults.color="#e5e5e5";yt.defaults.font.family=Qe.family;yt.defaults.font.weight=Qe.weight;const Ai={renderCurvaS:(n,t=[],e=[],s=[])=>{const r=document.getElementById(n);if(!r)return;r.chart&&r.chart.destroy();const i=s.length?s:t.map((o,a)=>`M${a+1}`);r.chart=new yt(r,{type:"line",data:{labels:i,datasets:[{label:"Planejado",data:t,borderColor:"#16a34a",backgroundColor:"rgba(34, 197, 94, 0.15)",tension:.35,fill:!0,borderWidth:3},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.05)",tension:.35,fill:!0,borderWidth:3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Qe,usePointStyle:!0}}},scales:{x:{grid:{color:Ii},ticks:{color:Er,font:Qe}},y:{grid:{color:Ii},ticks:{color:Er,font:Qe}}}}})},renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),r=s.map(i=>t[i]);e.chart&&e.chart.destroy(),e.chart=new yt(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:r,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Ii},ticks:{color:Er,font:Qe}},y:{grid:{color:Ii},ticks:{color:Er,font:Qe}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new yt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Qe,padding:12,usePointStyle:!0}}}}})},renderNatureza:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new yt(e,{type:"bar",data:{labels:s,datasets:[{label:"Por Natureza",data:r,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Er,font:Qe}},y:{grid:{color:Ii},ticks:{color:Er,font:Qe,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCentrosCusto:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),r=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new yt(e,{type:"doughnut",data:{labels:s,datasets:[{data:r,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9","#f59e0b"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Qe,padding:12,usePointStyle:!0}}}}})}},ht={render:n=>{const t=document.getElementById("app"),e=It.state.currentUser;if(!e){t.innerHTML=n;return}const s=It.state.sidebarCollapsed,r=It.state.currentTheme;t.innerHTML=`
            <div class="flex h-screen bg-canvas text-text transition-colors duration-200">
                <!-- Sidebar -->
                <aside id="sidebar" class="${s?"w-20":"w-64"} bg-surface border-r border-border flex flex-col transition-all duration-300 z-20 hidden md:flex shadow-heavy">
                    <div class="h-16 flex items-center justify-center border-b border-border">
                        <span class="text-2xl font-display text-primary">AXEL</span>
                        <span data-logo-text class="${s?"hidden":"ml-2 text-text font-display tracking-wide"}">GESTÃO</span>
                    </div>

                    <nav class="flex-1 overflow-y-auto py-4 space-y-1 px-3">
                        ${ht.createNavItem("/","Dashboard",Ot.dashboard,s)}
                        ${ht.createNavItem("/compras","Compras",Ot.shoppingCart,s)}
                        ${ht.createNavItem("/relatorios","Relatórios",Ot.clipboard,s)}
                        ${ht.createNavItem("/obras","Obras",Ot.chart,s)}
                        ${ht.createNavItem("/cadastros","Cadastros",Ot.settings,s)}
                        <div class="pt-4 mt-4 border-t border-border">
                            ${ht.createNavItem("/configuracoes","Configurações",Ot.settings,s)}
                        </div>
                    </nav>

                    <div class="p-4 border-t border-border">
                        <button id="btn-logout" class="flex items-center gap-3 text-text-muted hover:text-alert w-full p-2 rounded transition-colors uppercase tracking-wide font-display">
                            ${Ot.logout}
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
                                ${Ot.menu}
                            </button>
                            
                            <!-- Global Search -->
                            <div class="relative hidden md:block w-96">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                                    ${Ot.search}
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
                                ${r==="dark"?Ot.sun:Ot.moon}
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
        `,ht.bindEvents(),window.dispatchEvent(new CustomEvent("layout:rendered"))},createNavItem:(n,t,e,s)=>{var o;const i=At.currentRoute===n||((o=At.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${i}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{It.toggleSidebar();const s=document.getElementById("sidebar"),r=s.querySelectorAll("span"),i=s.querySelector("[data-logo-text]");It.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),r.forEach(o=>o.classList.add("hidden")),i&&i.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),r.forEach(o=>o.classList.remove("hidden")),i&&i.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const r=It.state.currentTheme==="dark"?"light":"dark";It.setTheme(r);const i=document.getElementById("btn-theme-toggle");i.innerHTML=r==="dark"?Ot.sun:Ot.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await fc.logout(),At.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var r;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(r=document.getElementById("global-search"))==null||r.focus())})}},db=50,hb=75,fb=1.5,$D=Object.freeze(Object.defineProperty({__proto__:null,COST_PER_HOUR:db,COST_PER_OVERTIME_HOUR:hb,EXTRA_FACTOR:fb},Symbol.toStringTag,{value:"Module"})),Fe={getObras:async()=>(await bt(_t(Z,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await bt(_t(Z,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await dr(_t(Z,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await qe(re(Z,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await Fd(re(Z,"obras",n))},getObraStats:async(n,t=!1)=>{const e=await Fe.getObraById(n),s=_t(Z,"compras"),r=Gt(s,Rt("obraId","==",n)),o=(await bt(r)).docs.map(H=>({id:H.id,...H.data()}));let a=0,c=Number((e==null?void 0:e.valor_orcado)||0);const l={},d={},h={},f={},m={};let g=null,v=null,_=0,I=0,w=0,S=0,P=0;const R={},M={},E=(H="")=>{const Y=(H||"").toLowerCase();return Y.includes("desperd")?"Desperdício":Y.includes("lista")||Y.includes("inicial")?"Lista inicial":"Material adicional"},b=H=>{const Y=new Date(H.getTime()),N=(Y.getDay()+6)%7;Y.setDate(Y.getDate()-N+3);const B=Y.getTime();Y.setMonth(0,1),Y.getDay()!==4&&Y.setMonth(0,1+(4-Y.getDay()+7)%7);const z=1+Math.ceil((B-Y)/6048e5);return`${Y.getFullYear()}-W${String(z).padStart(2,"0")}`};o.forEach(H=>{const Y=Number(H.valor_total??H.valor_estimado??0);a+=Y,l[H.status_compra]=(l[H.status_compra]||0)+1;const N=H.previsao_entrega?new Date(H.previsao_entrega):null,B=H.data_recebimento?new Date(H.data_recebimento):null;if(H.status_compra!=="Entregue"&&N&&N<new Date&&_++,B&&N&&(I++,B<=N&&w++),H.data_emissao&&(B||N)){const Q=B||N,et=Math.max(0,(new Date(Q)-new Date(H.data_emissao))/(1e3*60*60*24));S+=et,P++}const z=E(H.natureza_compra||H.categoria||"Outros");d[z]=(d[z]||0)+Y;const W=(H.natureza_compra||"Outros").trim();R[W]=(R[W]||0)+Y;const lt=H.centroCustoNome||H.centro_custo||H.centroCustoId||"N/D";M[lt]=(M[lt]||0)+Y;const ut=H.data_recebimento||H.data_emissao||H.previsao_entrega||H.data_solicitacao;if(ut){const Q=new Date(ut);if(!Number.isNaN(Q.getTime())){(!g||Q<g)&&(g=Q),(!v||Q>v)&&(v=Q);const et=`${Q.getFullYear()}-${String(Q.getMonth()+1).padStart(2,"0")}`;h[et]=(h[et]||0)+Y;const ct=Q.toISOString().split("T")[0];f[ct]=(f[ct]||0)+Y;const Tt=b(Q);m[Tt]=(m[Tt]||0)+Y}}});const x=Number(c||0)||a,A=Fe.calculateCurvaS(x,m,{start:(e==null?void 0:e.data_prevista_inicio)||(e==null?void 0:e.data_inicio)||g,end:(e==null?void 0:e.data_prevista_fim)||(e==null?void 0:e.data_fim)||v}),C=I?w/I*100:0,D=P?S/P:0,k=[...o].sort((H,Y)=>{const N=H.data_solicitacao||H.data_emissao||"";return(Y.data_solicitacao||Y.data_emissao||"").localeCompare(N)}),nt={totalCompras:o.length,totalGasto:a,porStatus:l,gastosPorCategoria:d,gastosMensais:h,gastosDiarios:f,curvaS:A,comprasRecentes:k.slice(0,10),comprasCalendar:k,atrasos:_,sla:C,lead:D,naturezaTotais:R,ccTotais:M};if(t)try{const{RDOService:H}=await ho(async()=>{const{RDOService:Y}=await Promise.resolve().then(()=>Bb);return{RDOService:Y}},void 0);if(e!=null&&e.numero_os){const Y=new Date().toISOString().split("T")[0],N=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],B=await H.getByObra(e.numero_os,N,Y);B&&B.length>0&&(nt.rdoData=H.processRDOData(B))}}catch(H){console.warn("Erro ao buscar dados RDO:",H)}return nt},calculateCurvaS:(n,t,{start:e,end:s}={})=>{const r=[],i=[],o=[];let a=0;const c=24*60*60*1e3,l=[],d=e?new Date(e):null,h=s?new Date(s):null;if(d&&!Number.isNaN(d)&&h&&!Number.isNaN(h)&&d<=h){const m=new Date(d);m.setHours(12,0,0,0);const g=m.getDay(),v=g===0?-6:1-g;for(m.setDate(m.getDate()+v);m<=h;){const _=m.getFullYear(),I=new Date(_,0,1),w=Math.floor((m-I)/c),S=Math.ceil((w+I.getDay()+1)/7);l.push(`${_}-W${String(S).padStart(2,"0")}`),m.setDate(m.getDate()+7)}}else l.push(...Object.keys(t).sort());const f=l.length||1;return l.forEach((m,g)=>{const v=(g+1)/f,_=1/(1+Math.exp(-10*(v-.5)));r.push(n*_),t[m]&&(a+=t[m]),i.push(a),o.push(m)}),{planejado:r,realizado:i,labels:o}},calculateFinancialSummary:async(n,t=[],e=null,s={})=>{const r=await Fe.getObraById(n);if(!r)return null;const i=Number(s.costHour||db),o=Number(s.costOvertime||hb),a=Number(s.extraFactor||fb),c=Number(r.valor_orcado)||0,l=t.reduce((b,x)=>b+(Number(x.valor_total||x.valor_estimado||0)||0),0),d=c-l,h=c>0?l/c*100:0,f=Number(r.horas_previstas)||0,m=Number(r.horas_extras_previstas)||0,g=f*i+m*o*a;let v=0,_=0;if(e){const b=Number(e.totalExtras)||0,x=Number(e.totalHoras)||0;v=b,_=Math.max(0,x-b)}const I=_*i+v*o*a,w=g-I,S=g>0?I/g*100:0,P=c+g,R=l+I,M=P-R,E=P>0?R/P*100:0;return{materials:{planned:c,spent:l,balance:d,percent:h},labor:{planned:g,spent:I,balance:w,percent:S,horasNormaisExec:_,horasExtrasExec:v},total:{planned:P,spent:R,balance:M,percent:E}}}},BD=Object.freeze(Object.defineProperty({__proto__:null,ObrasService:Fe},Symbol.toStringTag,{value:"Module"})),pb=6048e5,UD=864e5,Uo=6e4,jo=36e5,jD=1e3,dg=Symbol.for("constructDateFrom");function Qt(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&dg in n?n[dg](t):n instanceof Date?new n.constructor(t):new Date(t)}function at(n,t){return Qt(t||n,n)}function cl(n,t,e){const s=at(n,e==null?void 0:e.in);return isNaN(t)?Qt((e==null?void 0:e.in)||n,NaN):(t&&s.setDate(s.getDate()+t),s)}function mh(n,t,e){const s=at(n,e==null?void 0:e.in);if(isNaN(t))return Qt(n,NaN);if(!t)return s;const r=s.getDate(),i=Qt(n,s.getTime());i.setMonth(s.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(s.setFullYear(i.getFullYear(),i.getMonth(),r),s)}function gh(n,t,e){return Qt(n,+at(n)+t)}function zD(n,t,e){return gh(n,t*jo)}let HD={};function pr(){return HD}function bn(n,t){var a,c,l,d;const e=pr(),s=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??e.weekStartsOn??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,r=at(n,t==null?void 0:t.in),i=r.getDay(),o=(i<s?7:0)+i-s;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function Xr(n,t){return bn(n,{...t,weekStartsOn:1})}function mb(n,t){const e=at(n,t==null?void 0:t.in),s=e.getFullYear(),r=Qt(e,0);r.setFullYear(s+1,0,4),r.setHours(0,0,0,0);const i=Xr(r),o=Qt(e,0);o.setFullYear(s,0,4),o.setHours(0,0,0,0);const a=Xr(o);return e.getTime()>=i.getTime()?s+1:e.getTime()>=a.getTime()?s:s-1}function wc(n){const t=at(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function mr(n,...t){const e=Qt.bind(null,t.find(s=>typeof s=="object"));return t.map(e)}function Qu(n,t){const e=at(n,t==null?void 0:t.in);return e.setHours(0,0,0,0),e}function gb(n,t,e){const[s,r]=mr(e==null?void 0:e.in,n,t),i=Qu(s),o=Qu(r),a=+i-wc(i),c=+o-wc(o);return Math.round((a-c)/UD)}function qD(n,t){const e=mb(n,t),s=Qt(n,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),Xr(s)}function WD(n,t,e){const s=at(n,e==null?void 0:e.in);return s.setTime(s.getTime()+t*Uo),s}function GD(n,t,e){return mh(n,t*3,e)}function YD(n,t,e){return gh(n,t*1e3)}function KD(n,t,e){return cl(n,t*7,e)}function QD(n,t,e){return mh(n,t*12,e)}function to(n,t){const e=+at(n)-+at(t);return e<0?-1:e>0?1:e}function XD(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function _b(n){return!(!XD(n)&&typeof n!="number"||isNaN(+at(n)))}function JD(n,t,e){const[s,r]=mr(e==null?void 0:e.in,n,t),i=s.getFullYear()-r.getFullYear(),o=s.getMonth()-r.getMonth();return i*12+o}function ZD(n,t,e){const[s,r]=mr(e==null?void 0:e.in,n,t);return s.getFullYear()-r.getFullYear()}function yb(n,t,e){const[s,r]=mr(e==null?void 0:e.in,n,t),i=hg(s,r),o=Math.abs(gb(s,r));s.setDate(s.getDate()-i*o);const a=+(hg(s,r)===-i),c=i*(o-a);return c===0?0:c}function hg(n,t){const e=n.getFullYear()-t.getFullYear()||n.getMonth()-t.getMonth()||n.getDate()-t.getDate()||n.getHours()-t.getHours()||n.getMinutes()-t.getMinutes()||n.getSeconds()-t.getSeconds()||n.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function zo(n){return t=>{const s=(n?Math[n]:Math.trunc)(t);return s===0?0:s}}function t2(n,t,e){const[s,r]=mr(e==null?void 0:e.in,n,t),i=(+s-+r)/jo;return zo(e==null?void 0:e.roundingMethod)(i)}function _h(n,t){return+at(n)-+at(t)}function e2(n,t,e){const s=_h(n,t)/Uo;return zo(e==null?void 0:e.roundingMethod)(s)}function vb(n,t){const e=at(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function bb(n,t){const e=at(n,t==null?void 0:t.in),s=e.getMonth();return e.setFullYear(e.getFullYear(),s+1,0),e.setHours(23,59,59,999),e}function n2(n,t){const e=at(n,t==null?void 0:t.in);return+vb(e,t)==+bb(e,t)}function xb(n,t,e){const[s,r,i]=mr(e==null?void 0:e.in,n,n,t),o=to(r,i),a=Math.abs(JD(r,i));if(a<1)return 0;r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*a);let c=to(r,i)===-o;n2(s)&&a===1&&to(s,i)===1&&(c=!1);const l=o*(a-+c);return l===0?0:l}function s2(n,t,e){const s=xb(n,t,e)/3;return zo(e==null?void 0:e.roundingMethod)(s)}function r2(n,t,e){const s=_h(n,t)/1e3;return zo(e==null?void 0:e.roundingMethod)(s)}function i2(n,t,e){const s=yb(n,t,e)/7;return zo(e==null?void 0:e.roundingMethod)(s)}function o2(n,t,e){const[s,r]=mr(e==null?void 0:e.in,n,t),i=to(s,r),o=Math.abs(ZD(s,r));s.setFullYear(1584),r.setFullYear(1584);const a=to(s,r)===-i,c=i*(o-+a);return c===0?0:c}function a2(n,t){const e=at(n,t==null?void 0:t.in),s=e.getMonth(),r=s-s%3;return e.setMonth(r,1),e.setHours(0,0,0,0),e}function c2(n,t){const e=at(n,t==null?void 0:t.in);return e.setDate(1),e.setHours(0,0,0,0),e}function l2(n,t){const e=at(n,t==null?void 0:t.in),s=e.getFullYear();return e.setFullYear(s+1,0,0),e.setHours(23,59,59,999),e}function wb(n,t){const e=at(n,t==null?void 0:t.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}function u2(n,t){const e=at(n,t==null?void 0:t.in);return e.setMinutes(59,59,999),e}function d2(n,t){var a,c;const e=pr(),s=e.weekStartsOn??((c=(a=e.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??0,r=at(n,t==null?void 0:t.in),i=r.getDay(),o=(i<s?-7:0)+6-(i-s);return r.setDate(r.getDate()+o),r.setHours(23,59,59,999),r}function h2(n,t){const e=at(n,t==null?void 0:t.in);return e.setSeconds(59,999),e}function f2(n,t){const e=at(n,t==null?void 0:t.in),s=e.getMonth(),r=s-s%3+3;return e.setMonth(r,0),e.setHours(23,59,59,999),e}function p2(n,t){const e=at(n,t==null?void 0:t.in);return e.setMilliseconds(999),e}const m2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},g2=(n,t,e)=>{let s;const r=m2[n];return typeof r=="string"?s=r:t===1?s=r.one:s=r.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+s:s+" ago":s};function eu(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const _2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},y2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},v2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},b2={date:eu({formats:_2,defaultWidth:"full"}),time:eu({formats:y2,defaultWidth:"full"}),dateTime:eu({formats:v2,defaultWidth:"full"})},x2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},w2=(n,t,e,s)=>x2[n];function Si(n){return(t,e)=>{const s=e!=null&&e.context?String(e.context):"standalone";let r;if(s==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,a=e!=null&&e.width?String(e.width):o;r=n.formattingValues[a]||n.formattingValues[o]}else{const o=n.defaultWidth,a=e!=null&&e.width?String(e.width):n.defaultWidth;r=n.values[a]||n.values[o]}const i=n.argumentCallback?n.argumentCallback(t):t;return r[i]}}const E2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},T2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},I2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},A2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},S2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},k2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},C2=(n,t)=>{const e=Number(n),s=e%100;if(s>20||s<10)switch(s%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},R2={ordinalNumber:C2,era:Si({values:E2,defaultWidth:"wide"}),quarter:Si({values:T2,defaultWidth:"wide",argumentCallback:n=>n-1}),month:Si({values:I2,defaultWidth:"wide"}),day:Si({values:A2,defaultWidth:"wide"}),dayPeriod:Si({values:S2,defaultWidth:"wide",formattingValues:k2,defaultFormattingWidth:"wide"})};function ki(n){return(t,e={})=>{const s=e.width,r=s&&n.matchPatterns[s]||n.matchPatterns[n.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],a=s&&n.parsePatterns[s]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(a)?D2(a,h=>h.test(o)):P2(a,h=>h.test(o));let l;l=n.valueCallback?n.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;const d=t.slice(o.length);return{value:l,rest:d}}}function P2(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function D2(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function M2(n){return(t,e={})=>{const s=t.match(n.matchPattern);if(!s)return null;const r=s[0],i=t.match(n.parsePattern);if(!i)return null;let o=n.valueCallback?n.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;const a=t.slice(r.length);return{value:o,rest:a}}}const O2=/^(\d+)(th|st|nd|rd)?/i,N2=/\d+/i,L2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},V2={any:[/^b/i,/^(a|c)/i]},F2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},$2={any:[/1/i,/2/i,/3/i,/4/i]},B2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},U2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},j2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},z2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},H2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},q2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},W2={ordinalNumber:M2({matchPattern:O2,parsePattern:N2,valueCallback:n=>parseInt(n,10)}),era:ki({matchPatterns:L2,defaultMatchWidth:"wide",parsePatterns:V2,defaultParseWidth:"any"}),quarter:ki({matchPatterns:F2,defaultMatchWidth:"wide",parsePatterns:$2,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ki({matchPatterns:B2,defaultMatchWidth:"wide",parsePatterns:U2,defaultParseWidth:"any"}),day:ki({matchPatterns:j2,defaultMatchWidth:"wide",parsePatterns:z2,defaultParseWidth:"any"}),dayPeriod:ki({matchPatterns:H2,defaultMatchWidth:"any",parsePatterns:q2,defaultParseWidth:"any"})},Eb={code:"en-US",formatDistance:g2,formatLong:b2,formatRelative:w2,localize:R2,match:W2,options:{weekStartsOn:0,firstWeekContainsDate:1}};function G2(n,t){const e=at(n,t==null?void 0:t.in);return gb(e,wb(e))+1}function Tb(n,t){const e=at(n,t==null?void 0:t.in),s=+Xr(e)-+qD(e);return Math.round(s/pb)+1}function yh(n,t){var d,h,f,m;const e=at(n,t==null?void 0:t.in),s=e.getFullYear(),r=pr(),i=(t==null?void 0:t.firstWeekContainsDate)??((h=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(f=r.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=Qt((t==null?void 0:t.in)||n,0);o.setFullYear(s+1,0,i),o.setHours(0,0,0,0);const a=bn(o,t),c=Qt((t==null?void 0:t.in)||n,0);c.setFullYear(s,0,i),c.setHours(0,0,0,0);const l=bn(c,t);return+e>=+a?s+1:+e>=+l?s:s-1}function Y2(n,t){var a,c,l,d;const e=pr(),s=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??e.firstWeekContainsDate??((d=(l=e.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,r=yh(n,t),i=Qt((t==null?void 0:t.in)||n,0);return i.setFullYear(r,0,s),i.setHours(0,0,0,0),bn(i,t)}function Ib(n,t){const e=at(n,t==null?void 0:t.in),s=+bn(e,t)-+Y2(e,t);return Math.round(s/pb)+1}function St(n,t){const e=n<0?"-":"",s=Math.abs(n).toString().padStart(t,"0");return e+s}const Qn={y(n,t){const e=n.getFullYear(),s=e>0?e:1-e;return St(t==="yy"?s%100:s,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):St(e+1,2)},d(n,t){return St(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return St(n.getHours()%12||12,t.length)},H(n,t){return St(n.getHours(),t.length)},m(n,t){return St(n.getMinutes(),t.length)},s(n,t){return St(n.getSeconds(),t.length)},S(n,t){const e=t.length,s=n.getMilliseconds(),r=Math.trunc(s*Math.pow(10,e-3));return St(r,t.length)}},Tr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fg={G:function(n,t,e){const s=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(s,{width:"abbreviated"});case"GGGGG":return e.era(s,{width:"narrow"});case"GGGG":default:return e.era(s,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const s=n.getFullYear(),r=s>0?s:1-s;return e.ordinalNumber(r,{unit:"year"})}return Qn.y(n,t)},Y:function(n,t,e,s){const r=yh(n,s),i=r>0?r:1-r;if(t==="YY"){const o=i%100;return St(o,2)}return t==="Yo"?e.ordinalNumber(i,{unit:"year"}):St(i,t.length)},R:function(n,t){const e=mb(n);return St(e,t.length)},u:function(n,t){const e=n.getFullYear();return St(e,t.length)},Q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return St(s,2);case"Qo":return e.ordinalNumber(s,{unit:"quarter"});case"QQQ":return e.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(s,{width:"wide",context:"formatting"})}},q:function(n,t,e){const s=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return St(s,2);case"qo":return e.ordinalNumber(s,{unit:"quarter"});case"qqq":return e.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(s,{width:"wide",context:"standalone"})}},M:function(n,t,e){const s=n.getMonth();switch(t){case"M":case"MM":return Qn.M(n,t);case"Mo":return e.ordinalNumber(s+1,{unit:"month"});case"MMM":return e.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(s,{width:"wide",context:"formatting"})}},L:function(n,t,e){const s=n.getMonth();switch(t){case"L":return String(s+1);case"LL":return St(s+1,2);case"Lo":return e.ordinalNumber(s+1,{unit:"month"});case"LLL":return e.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(s,{width:"wide",context:"standalone"})}},w:function(n,t,e,s){const r=Ib(n,s);return t==="wo"?e.ordinalNumber(r,{unit:"week"}):St(r,t.length)},I:function(n,t,e){const s=Tb(n);return t==="Io"?e.ordinalNumber(s,{unit:"week"}):St(s,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):Qn.d(n,t)},D:function(n,t,e){const s=G2(n);return t==="Do"?e.ordinalNumber(s,{unit:"dayOfYear"}):St(s,t.length)},E:function(n,t,e){const s=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(s,{width:"short",context:"formatting"});case"EEEE":default:return e.day(s,{width:"wide",context:"formatting"})}},e:function(n,t,e,s){const r=n.getDay(),i=(r-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return St(i,2);case"eo":return e.ordinalNumber(i,{unit:"day"});case"eee":return e.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(r,{width:"short",context:"formatting"});case"eeee":default:return e.day(r,{width:"wide",context:"formatting"})}},c:function(n,t,e,s){const r=n.getDay(),i=(r-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return St(i,t.length);case"co":return e.ordinalNumber(i,{unit:"day"});case"ccc":return e.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(r,{width:"narrow",context:"standalone"});case"cccccc":return e.day(r,{width:"short",context:"standalone"});case"cccc":default:return e.day(r,{width:"wide",context:"standalone"})}},i:function(n,t,e){const s=n.getDay(),r=s===0?7:s;switch(t){case"i":return String(r);case"ii":return St(r,t.length);case"io":return e.ordinalNumber(r,{unit:"day"});case"iii":return e.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(s,{width:"short",context:"formatting"});case"iiii":default:return e.day(s,{width:"wide",context:"formatting"})}},a:function(n,t,e){const r=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,t,e){const s=n.getHours();let r;switch(s===12?r=Tr.noon:s===0?r=Tr.midnight:r=s/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(n,t,e){const s=n.getHours();let r;switch(s>=17?r=Tr.evening:s>=12?r=Tr.afternoon:s>=4?r=Tr.morning:r=Tr.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let s=n.getHours()%12;return s===0&&(s=12),e.ordinalNumber(s,{unit:"hour"})}return Qn.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):Qn.H(n,t)},K:function(n,t,e){const s=n.getHours()%12;return t==="Ko"?e.ordinalNumber(s,{unit:"hour"}):St(s,t.length)},k:function(n,t,e){let s=n.getHours();return s===0&&(s=24),t==="ko"?e.ordinalNumber(s,{unit:"hour"}):St(s,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):Qn.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):Qn.s(n,t)},S:function(n,t){return Qn.S(n,t)},X:function(n,t,e){const s=n.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return mg(s);case"XXXX":case"XX":return Bs(s);case"XXXXX":case"XXX":default:return Bs(s,":")}},x:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"x":return mg(s);case"xxxx":case"xx":return Bs(s);case"xxxxx":case"xxx":default:return Bs(s,":")}},O:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+pg(s,":");case"OOOO":default:return"GMT"+Bs(s,":")}},z:function(n,t,e){const s=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+pg(s,":");case"zzzz":default:return"GMT"+Bs(s,":")}},t:function(n,t,e){const s=Math.trunc(+n/1e3);return St(s,t.length)},T:function(n,t,e){return St(+n,t.length)}};function pg(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),r=Math.trunc(s/60),i=s%60;return i===0?e+String(r):e+String(r)+t+St(i,2)}function mg(n,t){return n%60===0?(n>0?"-":"+")+St(Math.abs(n)/60,2):Bs(n,t)}function Bs(n,t=""){const e=n>0?"-":"+",s=Math.abs(n),r=St(Math.trunc(s/60),2),i=St(s%60,2);return e+r+t+i}const gg=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Ab=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},K2=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],s=e[1],r=e[2];if(!r)return gg(n,t);let i;switch(s){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",gg(s,t)).replace("{{time}}",Ab(r,t))},Xu={p:Ab,P:K2},Q2=/^D+$/,X2=/^Y+$/,J2=["D","DD","YY","YYYY"];function Sb(n){return Q2.test(n)}function kb(n){return X2.test(n)}function Ju(n,t,e){const s=Z2(n,t,e);if(console.warn(s),J2.includes(n))throw new RangeError(s)}function Z2(n,t,e){const s=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const tM=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,eM=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nM=/^'([^]*?)'?$/,sM=/''/g,rM=/[a-zA-Z]/;function iM(n,t,e){var d,h,f,m,g,v,_,I;const s=pr(),r=(e==null?void 0:e.locale)??s.locale??Eb,i=(e==null?void 0:e.firstWeekContainsDate)??((h=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(f=s.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((v=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:v.weekStartsOn)??s.weekStartsOn??((I=(_=s.locale)==null?void 0:_.options)==null?void 0:I.weekStartsOn)??0,a=at(n,e==null?void 0:e.in);if(!_b(a))throw new RangeError("Invalid time value");let c=t.match(eM).map(w=>{const S=w[0];if(S==="p"||S==="P"){const P=Xu[S];return P(w,r.formatLong)}return w}).join("").match(tM).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const S=w[0];if(S==="'")return{isToken:!1,value:oM(w)};if(fg[S])return{isToken:!0,value:w};if(S.match(rM))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return{isToken:!1,value:w}});r.localize.preprocessor&&(c=r.localize.preprocessor(a,c));const l={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return c.map(w=>{if(!w.isToken)return w.value;const S=w.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&kb(S)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&Sb(S))&&Ju(S,t,String(n));const P=fg[S[0]];return P(a,S,r.localize,l)}).join("")}function oM(n){const t=n.match(nM);return t?t[1].replace(sM,"'"):n}function aM(){return Object.assign({},pr())}function cM(n,t){const e=at(n,t==null?void 0:t.in).getDay();return e===0?7:e}function lM(n,t){const e=uM(t)?new t(0):Qt(t,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function uM(n){var t;return typeof n=="function"&&((t=n.prototype)==null?void 0:t.constructor)===n}const dM=10;class Cb{constructor(){L(this,"subPriority",0)}validate(t,e){return!0}}class hM extends Cb{constructor(t,e,s,r,i){super(),this.value=t,this.validateValue=e,this.setValue=s,this.priority=r,i&&(this.subPriority=i)}validate(t,e){return this.validateValue(t,this.value,e)}set(t,e,s){return this.setValue(t,e,this.value,s)}}class fM extends Cb{constructor(e,s){super();L(this,"priority",dM);L(this,"subPriority",-1);this.context=e||(r=>Qt(s,r))}set(e,s){return s.timestampIsSet?e:Qt(e,lM(e,this.context))}}class Et{run(t,e,s,r){const i=this.parse(t,e,s,r);return i?{setter:new hM(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(t,e,s){return!0}}class pM extends Et{constructor(){super(...arguments);L(this,"priority",140);L(this,"incompatibleTokens",["R","u","t","T"])}parse(e,s,r){switch(s){case"G":case"GG":case"GGG":return r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"});case"GGGGG":return r.era(e,{width:"narrow"});case"GGGG":default:return r.era(e,{width:"wide"})||r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"})}}set(e,s,r){return s.era=r,e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}const te={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},un={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function ee(n,t){return n&&{value:t(n.value),rest:n.rest}}function jt(n,t){const e=t.match(n);return e?{value:parseInt(e[0],10),rest:t.slice(e[0].length)}:null}function dn(n,t){const e=t.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};const s=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,i=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:s*(r*jo+i*Uo+o*jD),rest:t.slice(e[0].length)}}function Rb(n){return jt(te.anyDigitsSigned,n)}function Xt(n,t){switch(n){case 1:return jt(te.singleDigit,t);case 2:return jt(te.twoDigits,t);case 3:return jt(te.threeDigits,t);case 4:return jt(te.fourDigits,t);default:return jt(new RegExp("^\\d{1,"+n+"}"),t)}}function Ec(n,t){switch(n){case 1:return jt(te.singleDigitSigned,t);case 2:return jt(te.twoDigitsSigned,t);case 3:return jt(te.threeDigitsSigned,t);case 4:return jt(te.fourDigitsSigned,t);default:return jt(new RegExp("^-?\\d{1,"+n+"}"),t)}}function vh(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Pb(n,t){const e=t>0,s=e?t:1-t;let r;if(s<=50)r=n||100;else{const i=s+50,o=Math.trunc(i/100)*100,a=n>=i%100;r=n+o-(a?100:0)}return e?r:1-r}function Db(n){return n%400===0||n%4===0&&n%100!==0}class mM extends Et{constructor(){super(...arguments);L(this,"priority",130);L(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,s,r){const i=o=>({year:o,isTwoDigitYear:s==="yy"});switch(s){case"y":return ee(Xt(4,e),i);case"yo":return ee(r.ordinalNumber(e,{unit:"year"}),i);default:return ee(Xt(s.length,e),i)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,r){const i=e.getFullYear();if(r.isTwoDigitYear){const a=Pb(r.year,i);return e.setFullYear(a,0,1),e.setHours(0,0,0,0),e}const o=!("era"in s)||s.era===1?r.year:1-r.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class gM extends Et{constructor(){super(...arguments);L(this,"priority",130);L(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,s,r){const i=o=>({year:o,isTwoDigitYear:s==="YY"});switch(s){case"Y":return ee(Xt(4,e),i);case"Yo":return ee(r.ordinalNumber(e,{unit:"year"}),i);default:return ee(Xt(s.length,e),i)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,r,i){const o=yh(e,i);if(r.isTwoDigitYear){const c=Pb(r.year,o);return e.setFullYear(c,0,i.firstWeekContainsDate),e.setHours(0,0,0,0),bn(e,i)}const a=!("era"in s)||s.era===1?r.year:1-r.year;return e.setFullYear(a,0,i.firstWeekContainsDate),e.setHours(0,0,0,0),bn(e,i)}}class _M extends Et{constructor(){super(...arguments);L(this,"priority",130);L(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,s){return Ec(s==="R"?4:s.length,e)}set(e,s,r){const i=Qt(e,0);return i.setFullYear(r,0,4),i.setHours(0,0,0,0),Xr(i)}}class yM extends Et{constructor(){super(...arguments);L(this,"priority",130);L(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,s){return Ec(s==="u"?4:s.length,e)}set(e,s,r){return e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}}class vM extends Et{constructor(){super(...arguments);L(this,"priority",120);L(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"Q":case"QQ":return Xt(s.length,e);case"Qo":return r.ordinalNumber(e,{unit:"quarter"});case"QQQ":return r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(e,{width:"wide",context:"formatting"})||r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=1&&s<=4}set(e,s,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class bM extends Et{constructor(){super(...arguments);L(this,"priority",120);L(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"q":case"qq":return Xt(s.length,e);case"qo":return r.ordinalNumber(e,{unit:"quarter"});case"qqq":return r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(e,{width:"wide",context:"standalone"})||r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=1&&s<=4}set(e,s,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}}class xM extends Et{constructor(){super(...arguments);L(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);L(this,"priority",110)}parse(e,s,r){const i=o=>o-1;switch(s){case"M":return ee(jt(te.month,e),i);case"MM":return ee(Xt(2,e),i);case"Mo":return ee(r.ordinalNumber(e,{unit:"month"}),i);case"MMM":return r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(e,{width:"wide",context:"formatting"})||r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}class wM extends Et{constructor(){super(...arguments);L(this,"priority",110);L(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,s,r){const i=o=>o-1;switch(s){case"L":return ee(jt(te.month,e),i);case"LL":return ee(Xt(2,e),i);case"Lo":return ee(r.ordinalNumber(e,{unit:"month"}),i);case"LLL":return r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(e,{width:"wide",context:"standalone"})||r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}function EM(n,t,e){const s=at(n,e==null?void 0:e.in),r=Ib(s,e)-t;return s.setDate(s.getDate()-r*7),at(s,e==null?void 0:e.in)}class TM extends Et{constructor(){super(...arguments);L(this,"priority",100);L(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,s,r){switch(s){case"w":return jt(te.week,e);case"wo":return r.ordinalNumber(e,{unit:"week"});default:return Xt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,r,i){return bn(EM(e,r,i),i)}}function IM(n,t,e){const s=at(n,e==null?void 0:e.in),r=Tb(s,e)-t;return s.setDate(s.getDate()-r*7),s}class AM extends Et{constructor(){super(...arguments);L(this,"priority",100);L(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,s,r){switch(s){case"I":return jt(te.week,e);case"Io":return r.ordinalNumber(e,{unit:"week"});default:return Xt(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,r){return Xr(IM(e,r))}}const SM=[31,28,31,30,31,30,31,31,30,31,30,31],kM=[31,29,31,30,31,30,31,31,30,31,30,31];class CM extends Et{constructor(){super(...arguments);L(this,"priority",90);L(this,"subPriority",1);L(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"d":return jt(te.date,e);case"do":return r.ordinalNumber(e,{unit:"date"});default:return Xt(s.length,e)}}validate(e,s){const r=e.getFullYear(),i=Db(r),o=e.getMonth();return i?s>=1&&s<=kM[o]:s>=1&&s<=SM[o]}set(e,s,r){return e.setDate(r),e.setHours(0,0,0,0),e}}class RM extends Et{constructor(){super(...arguments);L(this,"priority",90);L(this,"subpriority",1);L(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,s,r){switch(s){case"D":case"DD":return jt(te.dayOfYear,e);case"Do":return r.ordinalNumber(e,{unit:"date"});default:return Xt(s.length,e)}}validate(e,s){const r=e.getFullYear();return Db(r)?s>=1&&s<=366:s>=1&&s<=365}set(e,s,r){return e.setMonth(0,r),e.setHours(0,0,0,0),e}}function bh(n,t,e){var h,f,m,g;const s=pr(),r=(e==null?void 0:e.weekStartsOn)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??s.weekStartsOn??((g=(m=s.locale)==null?void 0:m.options)==null?void 0:g.weekStartsOn)??0,i=at(n,e==null?void 0:e.in),o=i.getDay(),c=(t%7+7)%7,l=7-r,d=t<0||t>6?t-(o+l)%7:(c+l)%7-(o+l)%7;return cl(i,d,e)}class PM extends Et{constructor(){super(...arguments);L(this,"priority",90);L(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,s,r){switch(s){case"E":case"EE":case"EEE":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=bh(e,r,i),e.setHours(0,0,0,0),e}}class DM extends Et{constructor(){super(...arguments);L(this,"priority",90);L(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,s,r,i){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+c};switch(s){case"e":case"ee":return ee(Xt(s.length,e),o);case"eo":return ee(r.ordinalNumber(e,{unit:"day"}),o);case"eee":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeeee":return r.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=bh(e,r,i),e.setHours(0,0,0,0),e}}class MM extends Et{constructor(){super(...arguments);L(this,"priority",90);L(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,s,r,i){const o=a=>{const c=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+c};switch(s){case"c":case"cc":return ee(Xt(s.length,e),o);case"co":return ee(r.ordinalNumber(e,{unit:"day"}),o);case"ccc":return r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"ccccc":return r.day(e,{width:"narrow",context:"standalone"});case"cccccc":return r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(e,{width:"wide",context:"standalone"})||r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=6}set(e,s,r,i){return e=bh(e,r,i),e.setHours(0,0,0,0),e}}function OM(n,t,e){const s=at(n,e==null?void 0:e.in),r=cM(s,e),i=t-r;return cl(s,i,e)}class NM extends Et{constructor(){super(...arguments);L(this,"priority",90);L(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,s,r){const i=o=>o===0?7:o;switch(s){case"i":case"ii":return Xt(s.length,e);case"io":return r.ordinalNumber(e,{unit:"day"});case"iii":return ee(r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i);case"iiiii":return ee(r.day(e,{width:"narrow",context:"formatting"}),i);case"iiiiii":return ee(r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i);case"iiii":default:return ee(r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),i)}}validate(e,s){return s>=1&&s<=7}set(e,s,r){return e=OM(e,r),e.setHours(0,0,0,0),e}}class LM extends Et{constructor(){super(...arguments);L(this,"priority",80);L(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,s,r){switch(s){case"a":case"aa":case"aaa":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(vh(r),0,0,0),e}}class VM extends Et{constructor(){super(...arguments);L(this,"priority",80);L(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,s,r){switch(s){case"b":case"bb":case"bbb":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(vh(r),0,0,0),e}}class FM extends Et{constructor(){super(...arguments);L(this,"priority",80);L(this,"incompatibleTokens",["a","b","t","T"])}parse(e,s,r){switch(s){case"B":case"BB":case"BBB":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,r){return e.setHours(vh(r),0,0,0),e}}class $M extends Et{constructor(){super(...arguments);L(this,"priority",70);L(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,s,r){switch(s){case"h":return jt(te.hour12h,e);case"ho":return r.ordinalNumber(e,{unit:"hour"});default:return Xt(s.length,e)}}validate(e,s){return s>=1&&s<=12}set(e,s,r){const i=e.getHours()>=12;return i&&r<12?e.setHours(r+12,0,0,0):!i&&r===12?e.setHours(0,0,0,0):e.setHours(r,0,0,0),e}}class BM extends Et{constructor(){super(...arguments);L(this,"priority",70);L(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,s,r){switch(s){case"H":return jt(te.hour23h,e);case"Ho":return r.ordinalNumber(e,{unit:"hour"});default:return Xt(s.length,e)}}validate(e,s){return s>=0&&s<=23}set(e,s,r){return e.setHours(r,0,0,0),e}}class UM extends Et{constructor(){super(...arguments);L(this,"priority",70);L(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,s,r){switch(s){case"K":return jt(te.hour11h,e);case"Ko":return r.ordinalNumber(e,{unit:"hour"});default:return Xt(s.length,e)}}validate(e,s){return s>=0&&s<=11}set(e,s,r){return e.getHours()>=12&&r<12?e.setHours(r+12,0,0,0):e.setHours(r,0,0,0),e}}class jM extends Et{constructor(){super(...arguments);L(this,"priority",70);L(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,s,r){switch(s){case"k":return jt(te.hour24h,e);case"ko":return r.ordinalNumber(e,{unit:"hour"});default:return Xt(s.length,e)}}validate(e,s){return s>=1&&s<=24}set(e,s,r){const i=r<=24?r%24:r;return e.setHours(i,0,0,0),e}}class zM extends Et{constructor(){super(...arguments);L(this,"priority",60);L(this,"incompatibleTokens",["t","T"])}parse(e,s,r){switch(s){case"m":return jt(te.minute,e);case"mo":return r.ordinalNumber(e,{unit:"minute"});default:return Xt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,r){return e.setMinutes(r,0,0),e}}class HM extends Et{constructor(){super(...arguments);L(this,"priority",50);L(this,"incompatibleTokens",["t","T"])}parse(e,s,r){switch(s){case"s":return jt(te.second,e);case"so":return r.ordinalNumber(e,{unit:"second"});default:return Xt(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,r){return e.setSeconds(r,0),e}}class qM extends Et{constructor(){super(...arguments);L(this,"priority",30);L(this,"incompatibleTokens",["t","T"])}parse(e,s){const r=i=>Math.trunc(i*Math.pow(10,-s.length+3));return ee(Xt(s.length,e),r)}set(e,s,r){return e.setMilliseconds(r),e}}class WM extends Et{constructor(){super(...arguments);L(this,"priority",10);L(this,"incompatibleTokens",["t","T","x"])}parse(e,s){switch(s){case"X":return dn(un.basicOptionalMinutes,e);case"XX":return dn(un.basic,e);case"XXXX":return dn(un.basicOptionalSeconds,e);case"XXXXX":return dn(un.extendedOptionalSeconds,e);case"XXX":default:return dn(un.extended,e)}}set(e,s,r){return s.timestampIsSet?e:Qt(e,e.getTime()-wc(e)-r)}}class GM extends Et{constructor(){super(...arguments);L(this,"priority",10);L(this,"incompatibleTokens",["t","T","X"])}parse(e,s){switch(s){case"x":return dn(un.basicOptionalMinutes,e);case"xx":return dn(un.basic,e);case"xxxx":return dn(un.basicOptionalSeconds,e);case"xxxxx":return dn(un.extendedOptionalSeconds,e);case"xxx":default:return dn(un.extended,e)}}set(e,s,r){return s.timestampIsSet?e:Qt(e,e.getTime()-wc(e)-r)}}class YM extends Et{constructor(){super(...arguments);L(this,"priority",40);L(this,"incompatibleTokens","*")}parse(e){return Rb(e)}set(e,s,r){return[Qt(e,r*1e3),{timestampIsSet:!0}]}}class KM extends Et{constructor(){super(...arguments);L(this,"priority",20);L(this,"incompatibleTokens","*")}parse(e){return Rb(e)}set(e,s,r){return[Qt(e,r),{timestampIsSet:!0}]}}const QM={G:new pM,y:new mM,Y:new gM,R:new _M,u:new yM,Q:new vM,q:new bM,M:new xM,L:new wM,w:new TM,I:new AM,d:new CM,D:new RM,E:new PM,e:new DM,c:new MM,i:new NM,a:new LM,b:new VM,B:new FM,h:new $M,H:new BM,K:new UM,k:new jM,m:new zM,s:new HM,S:new qM,X:new WM,x:new GM,t:new YM,T:new KM},XM=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,JM=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ZM=/^'([^]*?)'?$/,tO=/''/g,eO=/\S/,nO=/[a-zA-Z]/;function sO(n,t,e,s){var _,I,w,S,P,R,M,E;const r=()=>Qt((s==null?void 0:s.in)||e,NaN),i=aM(),o=(s==null?void 0:s.locale)??i.locale??Eb,a=(s==null?void 0:s.firstWeekContainsDate)??((I=(_=s==null?void 0:s.locale)==null?void 0:_.options)==null?void 0:I.firstWeekContainsDate)??i.firstWeekContainsDate??((S=(w=i.locale)==null?void 0:w.options)==null?void 0:S.firstWeekContainsDate)??1,c=(s==null?void 0:s.weekStartsOn)??((R=(P=s==null?void 0:s.locale)==null?void 0:P.options)==null?void 0:R.weekStartsOn)??i.weekStartsOn??((E=(M=i.locale)==null?void 0:M.options)==null?void 0:E.weekStartsOn)??0;if(!t)return n?r():at(e,s==null?void 0:s.in);const l={firstWeekContainsDate:a,weekStartsOn:c,locale:o},d=[new fM(s==null?void 0:s.in,e)],h=t.match(JM).map(b=>{const x=b[0];if(x in Xu){const A=Xu[x];return A(b,o.formatLong)}return b}).join("").match(XM),f=[];for(let b of h){!(s!=null&&s.useAdditionalWeekYearTokens)&&kb(b)&&Ju(b,t,n),!(s!=null&&s.useAdditionalDayOfYearTokens)&&Sb(b)&&Ju(b,t,n);const x=b[0],A=QM[x];if(A){const{incompatibleTokens:C}=A;if(Array.isArray(C)){const k=f.find(nt=>C.includes(nt.token)||nt.token===x);if(k)throw new RangeError(`The format string mustn't contain \`${k.fullToken}\` and \`${b}\` at the same time`)}else if(A.incompatibleTokens==="*"&&f.length>0)throw new RangeError(`The format string mustn't contain \`${b}\` and any other token at the same time`);f.push({token:x,fullToken:b});const D=A.run(n,b,o.match,l);if(!D)return r();d.push(D.setter),n=D.rest}else{if(x.match(nO))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");if(b==="''"?b="'":x==="'"&&(b=rO(b)),n.indexOf(b)===0)n=n.slice(b.length);else return r()}}if(n.length>0&&eO.test(n))return r();const m=d.map(b=>b.priority).sort((b,x)=>x-b).filter((b,x,A)=>A.indexOf(b)===x).map(b=>d.filter(x=>x.priority===b).sort((x,A)=>A.subPriority-x.subPriority)).map(b=>b[0]);let g=at(e,s==null?void 0:s.in);if(isNaN(+g))return r();const v={};for(const b of m){if(!b.validate(g,l))return r();const x=b.set(g,v,l);Array.isArray(x)?(g=x[0],Object.assign(v,x[1])):g=x}return g}function rO(n){return n.match(ZM)[1].replace(tO,"'")}function iO(n,t){const e=at(n,t==null?void 0:t.in);return e.setMinutes(0,0,0),e}function oO(n,t){const e=at(n,t==null?void 0:t.in);return e.setSeconds(0,0),e}function aO(n,t){const e=at(n,t==null?void 0:t.in);return e.setMilliseconds(0),e}function cO(n,t){const e=()=>Qt(t==null?void 0:t.in,NaN),s=(t==null?void 0:t.additionalDigits)??2,r=hO(n);let i;if(r.date){const l=fO(r.date,s);i=pO(l.restDateString,l.year)}if(!i||isNaN(+i))return e();const o=+i;let a=0,c;if(r.time&&(a=mO(r.time),isNaN(a)))return e();if(r.timezone){if(c=gO(r.timezone),isNaN(c))return e()}else{const l=new Date(o+a),d=at(0,t==null?void 0:t.in);return d.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),d.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),d}return at(o+a+c,t==null?void 0:t.in)}const Ra={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},lO=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,uO=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,dO=/^([+-])(\d{2})(?::?(\d{2}))?$/;function hO(n){const t={},e=n.split(Ra.dateTimeDelimiter);let s;if(e.length>2)return t;if(/:/.test(e[0])?s=e[0]:(t.date=e[0],s=e[1],Ra.timeZoneDelimiter.test(t.date)&&(t.date=n.split(Ra.timeZoneDelimiter)[0],s=n.substr(t.date.length,n.length))),s){const r=Ra.timezone.exec(s);r?(t.time=s.replace(r[1],""),t.timezone=r[1]):t.time=s}return t}function fO(n,t){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),s=n.match(e);if(!s)return{year:NaN,restDateString:""};const r=s[1]?parseInt(s[1]):null,i=s[2]?parseInt(s[2]):null;return{year:i===null?r:i*100,restDateString:n.slice((s[1]||s[2]).length)}}function pO(n,t){if(t===null)return new Date(NaN);const e=n.match(lO);if(!e)return new Date(NaN);const s=!!e[4],r=Ci(e[1]),i=Ci(e[2])-1,o=Ci(e[3]),a=Ci(e[4]),c=Ci(e[5])-1;if(s)return xO(t,a,c)?_O(t,a,c):new Date(NaN);{const l=new Date(0);return!vO(t,i,o)||!bO(t,r)?new Date(NaN):(l.setUTCFullYear(t,i,Math.max(r,o)),l)}}function Ci(n){return n?parseInt(n):1}function mO(n){const t=n.match(uO);if(!t)return NaN;const e=nu(t[1]),s=nu(t[2]),r=nu(t[3]);return wO(e,s,r)?e*jo+s*Uo+r*1e3:NaN}function nu(n){return n&&parseFloat(n.replace(",","."))||0}function gO(n){if(n==="Z")return 0;const t=n.match(dO);if(!t)return 0;const e=t[1]==="+"?-1:1,s=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return EO(s,r)?e*(s*jo+r*Uo):NaN}function _O(n,t,e){const s=new Date(0);s.setUTCFullYear(n,0,4);const r=s.getUTCDay()||7,i=(t-1)*7+e+1-r;return s.setUTCDate(s.getUTCDate()+i),s}const yO=[31,null,31,30,31,30,31,31,30,31,30,31];function Mb(n){return n%400===0||n%4===0&&n%100!==0}function vO(n,t,e){return t>=0&&t<=11&&e>=1&&e<=(yO[t]||(Mb(n)?29:28))}function bO(n,t){return t>=1&&t<=(Mb(n)?366:365)}function xO(n,t,e){return t>=1&&t<=53&&e>=0&&e<=6}function wO(n,t,e){return n===24?t===0&&e===0:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25}function EO(n,t){return t>=0&&t<=59}/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */const TO={datetime:"MMM d, yyyy, h:mm:ss aaaa",millisecond:"h:mm:ss.SSS aaaa",second:"h:mm:ss aaaa",minute:"h:mm aaaa",hour:"ha",day:"MMM d",week:"PP",month:"MMM yyyy",quarter:"qqq - yyyy",year:"yyyy"};Hv._date.override({_id:"date-fns",formats:function(){return TO},parse:function(n,t){if(n===null||typeof n>"u")return null;const e=typeof n;return e==="number"||n instanceof Date?n=at(n):e==="string"&&(typeof t=="string"?n=sO(n,t,new Date,this.options):n=cO(n,this.options)),_b(n)?n.getTime():null},format:function(n,t){return iM(n,t,this.options)},add:function(n,t,e){switch(e){case"millisecond":return gh(n,t);case"second":return YD(n,t);case"minute":return WD(n,t);case"hour":return zD(n,t);case"day":return cl(n,t);case"week":return KD(n,t);case"month":return mh(n,t);case"quarter":return GD(n,t);case"year":return QD(n,t);default:return n}},diff:function(n,t,e){switch(e){case"millisecond":return _h(n,t);case"second":return r2(n,t);case"minute":return e2(n,t);case"hour":return t2(n,t);case"day":return yb(n,t);case"week":return i2(n,t);case"month":return xb(n,t);case"quarter":return s2(n,t);case"year":return o2(n,t);default:return 0}},startOf:function(n,t,e){switch(t){case"second":return aO(n);case"minute":return oO(n);case"hour":return iO(n);case"day":return Qu(n);case"week":return bn(n);case"isoWeek":return bn(n,{weekStartsOn:+e});case"month":return c2(n);case"quarter":return a2(n);case"year":return wb(n);default:return n}},endOf:function(n,t){switch(t){case"second":return p2(n);case"minute":return h2(n);case"hour":return u2(n);case"day":return vb(n);case"week":return d2(n);case"month":return bb(n);case"quarter":return f2(n);case"year":return l2(n);default:return n}}});const Os={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},su=()=>{var i,o;const n=typeof window<"u"?getComputedStyle(document.documentElement):null,t=(o=(i=document.documentElement)==null?void 0:i.classList)==null?void 0:o.contains("theme-light"),e=(a,c)=>(n?(n.getPropertyValue(a)||"").trim():"")||c,s=t?"#0b0b0b":"#e5e5e5",r=t?"#111827":"#a1a1aa";return{isLight:t,text:e("--color-text",s),muted:e("--color-text-muted",r),primary:e("--color-primary","#22c55e"),danger:e("--color-alert","#ef4444"),grid:t?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",weekendShade:t?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.03)",holidayShade:t?"rgba(255,206,86,0.18)":"rgba(255,206,86,0.08)"}},Ut={renderEmpty:n=>{const t=document.getElementById(n);if(!t)return;const e=t.parentElement;if(!e)return;t.style.display="none";let s=e.querySelector(".chart-placeholder");s||(s=document.createElement("div"),s.className="chart-placeholder text-center text-sm text-text-muted py-6",e.appendChild(s)),s.textContent="Sem dados"},renderHorasNormaisExtras:(n,t={},e={})=>{const s=su(),r=document.getElementById(n);if(!r)return;const i=Array.from(new Set([...Object.keys(t),...Object.keys(e)])).sort(),o=i.map(c=>t[c]||0),a=i.map(c=>e[c]||0);r.chart&&r.chart.destroy(),r.chart=new yt(r,{type:"bar",data:{labels:i.map(c=>{const l=new Date(c);return l.setHours(12,0,0,0),l.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Horas Normais",data:o,backgroundColor:s.primary},{label:"Horas Extras",data:a,backgroundColor:s.danger}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:s.text,font:Os}}},scales:{x:{stacked:!0,grid:{display:!1},ticks:{color:s.muted,font:Os,maxRotation:45,autoSkip:!0}},y:{stacked:!0,grid:{color:s.grid},ticks:{color:s.muted,font:Os},beginAtZero:!0}}}})},renderCurvaHoras:(n,t=[],e=[],s=[])=>{const r=su(),i=document.getElementById(n);if(!i)return;i.chart&&i.chart.destroy();const o=[...t||[]].sort((m,g)=>new Date(m.x)-new Date(g.x)),a=[...e||[]].sort((m,g)=>new Date(m.x)-new Date(g.x)),c=[...o,...a].map(m=>new Date(m.x)).filter(m=>!Number.isNaN(m)),l=c.length?new Date(Math.min(...c)):null,d=c.length?new Date(Math.max(...c)):null,h={id:"weekendShade",beforeDraw(m){const g=m.scales.x,v=m.ctx,_=g.min,I=g.max;if(!_||!I)return;const w=24*60*60*1e3;let S=_-(new Date(_).getDay()+7)%7*w;for(;S<=I+w*7;){const P=new Date(S),R=P.getDay();if(R===0||R===6){const M=g.getPixelForValue(P),E=g.getPixelForValue(new Date(S+w));v.save(),v.fillStyle=r.weekendShade,v.fillRect(M,m.chartArea.top,E-M,m.chartArea.bottom-m.chartArea.top),v.restore()}S+=w}}},f={id:"holidayShade",beforeDraw(m){if(!s||!s.length)return;const g=m.scales.x,v=m.ctx;s.forEach(_=>{const I=new Date(_);if(Number.isNaN(I))return;const w=g.getPixelForValue(I),S=g.getPixelForValue(new Date(I.getTime()+24*60*60*1e3));v.save(),v.fillStyle=r.holidayShade,v.fillRect(w,m.chartArea.top,S-w,m.chartArea.bottom-m.chartArea.top),v.restore()})}};i.chart=new yt(i,{type:"line",data:{datasets:[{label:"Horas Planejadas",data:o,borderColor:r.primary,backgroundColor:r.isLight?"rgba(34,197,94,0.15)":"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:2,pointRadius:0,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Horas Executadas",data:a,borderColor:r.danger,backgroundColor:r.isLight?"rgba(239,68,68,0.12)":"rgba(239,68,68,0.1)",fill:!0,tension:.3,borderWidth:3,pointRadius:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:r.grid},offset:!1,bounds:"ticks",min:l||void 0,max:d||void 0,ticks:{source:"data",color:r.muted,font:Os,autoSkip:!0,maxRotation:0,callback:m=>{const g=new Date(m),v=g.toLocaleDateString("en-US",{month:"short",day:"numeric"}),_=g.getDay();return _===1?`${v} (Mon)`:_===5?`${v} (Fri)`:v}}},y:{grid:{color:r.grid},ticks:{color:r.muted,font:Os},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:r.text,font:Os,usePointStyle:!0}},weekendShade:!0}},plugins:[h,f]})},renderHorasPorFuncao:(n,t={})=>{const e=su(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new yt(s,{type:"doughnut",data:{labels:r,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#0ea5e9","#f59e0b","#ef4444","#a855f7","#6366f1"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:e.text,font:Os,usePointStyle:!0}}}}})}},xo=n=>n instanceof Date&&!isNaN(n),IO=(n,t)=>{const e=new Date(n),s=new Date(t);if(!xo(e)||!xo(s)||e>s)return[];const r=[];for(let i=new Date(e);i<=s;i.setDate(i.getDate()+1))r.push(new Date(i));return r},Ob=n=>xo(n)?n.toISOString().split("T")[0]:null,Nb=n=>{if(!(n!=null&&n.data_inicio)||!(n!=null&&n.data_prevista_fim))return[];const t=new Date(n.data_inicio),e=new Date(n.data_prevista_fim);if(!xo(t)||!xo(e)||t>e)return[];const s=IO(t,e),r=s.length?(n.orcamento||0)/s.length:0;let i=0;return s.map(o=>{i+=r;const a=Ob(o);return a?{x:a,y:i}:null}).filter(Boolean)},Lb=(n=[],t={},e=0,s=0,r={})=>{const i={};n.forEach(c=>{const l=c.data_recebimento||c.data_emissao||c.previsao_entrega||c.data_solicitacao;if(!l)return;const d=Ob(new Date(l));if(!d)return;const h=Number(c.valor_total||c.valor_estimado||0);i[d]=(i[d]||0)+h}),Object.entries(t||{}).forEach(([c,l])=>{const d=Number(l)||0,h=Number(r==null?void 0:r[c])||0,m=Math.max(0,d-h)*e+(h*s||e);i[c]=(i[c]||0)+m});const o=Object.keys(i).sort();let a=0;return o.map(c=>(a+=i[c],{x:c,y:a}))},Ys={create:async n=>(await dr(_t(Z,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=Gt(_t(Z,"notificacoes"),Rt("userId","==",n),Ld("created_at","desc"),oc(t));return(await bt(e)).docs.map(r=>({id:r.id,...r.data()}))},markAsRead:async n=>{await qe(re(Z,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=Gt(_t(Z,"notificacoes"),Rt("userId","==",n),Rt("lida","==",!1)),s=(await bt(t)).docs.map(r=>qe(re(Z,"notificacoes",r.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},markByType:async(n,t,e=null)=>{if(!n||!t)return;const s=[Rt("userId","==",n),Rt("tipo","==",t),Rt("lida","==",!1)];e&&s.push(Rt("obraId","==",e));const r=Gt(_t(Z,"notificacoes"),...s),o=(await bt(r)).docs.map(a=>qe(re(Z,"notificacoes",a.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(o)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=Gt(_t(Z,"compras"),Rt("status_compra","in",["Comprado","Em Trânsito"]),Rt("data_entrega_prevista","<=",n.toISOString())),e=await bt(t),s=[];for(const r of e.docs){const i=r.data(),o=Math.ceil((new Date(i.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:i.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${i.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${r.id}`,prioridade:o===0?"alta":"normal"})}for(const r of s)await Ys.create(r);return s.length}},Rr={getCompras:async(n={})=>{let e=(await bt(_t(Z,"compras"))).docs.map(R=>({id:R.id,...R.data()}));const{search:s="",status:r="",obra:i="",prioridade:o="",natureza:a="",cc:c="",dateStart:l="",dateEnd:d="",onlyDelayed:h=!1,fornecedor:f="",comprador:m="",statusAprov:g="",nfConferida:v=!1,nf:_=""}=n,I=s.toLowerCase(),w=l?new Date(l):null,S=d?new Date(d):null,P=new Date;return P.setHours(0,0,0,0),e=e.filter(R=>{if(I&&!(R.descricao_compra||R.descricao||"").toLowerCase().includes(I)||r&&R.status_compra!==r||i&&R.obraId!==i||o&&R.prioridade!==o||a&&(R.natureza_compra||"").trim()!==a||c&&R.centroCustoId!==c||f&&R.fornecedorId!==f||m&&R.compradorId!==m||g&&(R.status_aprovacao||"")!==g||v&&!R.nf_conferida||_&&!(R.numero_nf||"").toLowerCase().includes(_.toLowerCase()))return!1;const M=R.data_solicitacao?new Date(R.data_solicitacao):null;if(w&&M&&M<w||S&&M&&M>S)return!1;if(h){const E=R.previsao_entrega?new Date(R.previsao_entrega):R.data_entrega_prevista?new Date(R.data_entrega_prevista):null;if(!E||E>=P||R.status_compra==="Entregue"||R.status_compra==="Recebido")return!1}return!0}),e.sort((R,M)=>{const E=R.data_solicitacao||R.data_emissao||"";return(M.data_solicitacao||M.data_emissao||"").localeCompare(E)}),e},updateStatus:async(n,t)=>{const e=re(Z,"compras",n);await qe(e,{status_compra:t})},updateCompra:async(n,t)=>{const e=re(Z,"compras",n);await qe(e,t)},deleteCompra:async n=>{const t=re(Z,"compras",n);await Fd(t)}},Zu=(n="")=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),AO=(n="")=>{const t=Zu(n);return t.includes("receb")||t.includes("entreg")},ru={getAlertSummary:async({obraId:n=null}={})=>{const t=_t(Z,"compras"),e=n?Gt(t,Rt("obraId","==",n)):t,s=await bt(e),r=new Date;r.setHours(0,0,0,0);const i={atrasados:0,sem_previsao:0,pendente_aprovacao:0,cotacao:0,estoque:0};return s.docs.forEach(o=>{const a=o.data(),c=Zu(a.status_compra||""),l=AO(c),d=a.previsao_entrega||a.data_entrega_prevista,h=d?new Date(d):null;!l&&h&&h<r&&i.atrasados++,!l&&!h&&i.sem_previsao++,(a.estouro_orcamento||Zu(a.status_aprovacao||"")==="pendente")&&i.pendente_aprovacao++,c.includes("cot")&&i.cotacao++,a.retirada_estoque&&!l&&i.estoque++}),i},notifySummary:async(n={},t,{scope:e="global",obraId:s=null}={})=>{if(!t||!n)return;const r=new Date().toISOString().slice(0,10),i=async(a,c,l,d="normal")=>{const h=`notif_${a}_${e}_${s||"all"}_${r}_${t}`;localStorage.getItem(h)||(await Ys.create({userId:t,tipo:a,titulo:c,mensagem:l,link:s?`#/obras/${s}`:"#/relatorios",prioridade:d,obraId:s}),localStorage.setItem(h,"1"))},o=[{key:"atrasados",title:"Pedidos atrasados",msg:`${n.atrasados} pedido(s) com previsão vencida.`,prio:"alta"},{key:"sem_previsao",title:"Pedidos sem previsão",msg:`${n.sem_previsao} pedido(s) sem data de entrega.`,prio:"normal"},{key:"pendente_aprovacao",title:"Aprovação pendente",msg:`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`,prio:"normal"},{key:"cotacao",title:"Pedidos em cotação",msg:`${n.cotacao} pedido(s) em cotação.`,prio:"normal"},{key:"estoque",title:"Retiradas de estoque",msg:`${n.estoque} pedido(s) aguardando baixa de estoque.`,prio:"normal"}];for(const a of o)(n[a.key]||0)>0?await i(a.key,a.title,a.msg,a.prio):await Ys.markByType(t,a.key,s)}},Vb=[];let iu=!1;const Fb=()=>{if(iu)return;const n=Vb.shift();n&&(iu=!0,F.createToast(n.message,n.type),setTimeout(()=>{iu=!1,Fb()},3500))},SO=({title:n="Confirmação",message:t="",confirmText:e="Confirmar",cancelText:s="Cancelar"})=>{const r=document.createElement("div");return r.className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",r.innerHTML=`
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
    `,r},Tc={toast:(n,t="success")=>{Vb.push({message:n,type:t}),Fb()},confirm:({title:n="Confirmação",message:t="Deseja prosseguir?",confirmText:e="Confirmar",cancelText:s="Cancelar"}={})=>new Promise(r=>{var a,c,l;const i=SO({title:n,message:t,confirmText:e,cancelText:s}),o=d=>{i.remove(),r(d)};(a=i.querySelector("#notif-modal-close"))==null||a.addEventListener("click",()=>o(!1)),(c=i.querySelector("#notif-modal-cancel"))==null||c.addEventListener("click",()=>o(!1)),(l=i.querySelector("#notif-modal-confirm"))==null||l.addEventListener("click",()=>o(!0)),document.body.appendChild(i)}),badge:(n=0)=>{const t=document.querySelector("#notifications-container");t&&(t.dataset.badge=n)}},kO="bbb1b9bda22e7d16e1ea3ed3f8455530",CO=30*60*1e3,Ri="weather_cache",_g={async getWeather(n,t){const e=this.getFromCache();if(e)return console.log("[Weather] Usando dados em cache"),e;try{const s=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${t}&units=metric&lang=pt_br&appid=${kO}`);if(!s.ok)throw new Error(`API Error: ${s.status}`);const r=await s.json(),i={temp:Math.round(r.main.temp),feelsLike:Math.round(r.main.feels_like),description:r.weather[0].description,icon:this.getWeatherIcon(r.weather[0].id),location:r.name,humidity:r.main.humidity,windSpeed:r.wind.speed,timestamp:Date.now()};return this.saveToCache(i),console.log("[Weather] Dados atualizados:",i.location,i.temp+"°C"),i}catch(s){return console.error("[Weather] Erro ao buscar clima:",s),null}},async getLocation(){return new Promise(n=>{const t=this.getSavedLocation();if(t){console.log("[Weather] Usando localização salva:",t.city),n(t);return}if(!navigator.geolocation){console.warn("[Weather] Geolocalização não disponível, usando padrão"),n(this.getDefaultLocation());return}navigator.geolocation.getCurrentPosition(e=>{const s={lat:e.coords.latitude,lon:e.coords.longitude};console.log("[Weather] Geolocalização obtida:",s),n(s)},e=>{console.warn("[Weather] Geolocalização negada:",e.message),n(this.getDefaultLocation())},{timeout:5e3,maximumAge:6e5})})},getDefaultLocation(){return{lat:-23.5505,lon:-46.6333,city:"São Paulo"}},getSavedLocation(){const n=localStorage.getItem("user_location");return n?JSON.parse(n):null},saveLocation(n,t,e){localStorage.setItem("user_location",JSON.stringify({lat:n,lon:t,city:e}))},getWeatherIcon(n){return n>=200&&n<300?"⛈️":n>=300&&n<400||n>=500&&n<600?"🌧️":n>=600&&n<700?"❄️":n>=700&&n<800?"🌫️":n===800?"☀️":n===801?"🌤️":n===802?"⛅":n>=803?"☁️":"🌤️"},getFromCache(){const n=localStorage.getItem(Ri);if(!n)return null;try{const t=JSON.parse(n);return Date.now()-t.timestamp>CO?(console.log("[Weather] Cache expirado"),localStorage.removeItem(Ri),null):t}catch(t){return console.error("[Weather] Erro ao ler cache:",t),localStorage.removeItem(Ri),null}},saveToCache(n){try{localStorage.setItem(Ri,JSON.stringify(n))}catch(t){console.error("[Weather] Erro ao salvar cache:",t)}},clearCache(){localStorage.removeItem(Ri)}},cn={currentFilters:{obraId:"",periodo:{start:null,end:null}},init:async()=>{var t,e,s,r;const n=It.state.currentUser;if(n){ht.render(F.createLoader());try{let i="";if(n.role==="comprador"){const o=await je.getObras(),a=await je.getCompradorStats(cn.currentFilters);i=ga.renderComprador(a,n,o),ht.render(i),cn.initWeatherWidget(),cn.loadTimeline(),cn.bindRecentActions(),cn.bindFilters(),a.atrasos>0&&F.createToast(`Existem ${a.atrasos} pedidos em atraso.`,"warning"),await ru.notifySummary(a.alerts,n.uid,{scope:"comprador"})}else if(n.role==="obra"||n.role==="engenheiro"){let o=n.obraPadrao||null;if(!o){const c=await((t=je.getObras)==null?void 0:t.call(je));c&&c.length&&(o=c[0].id)}const a=await je.getObraStats(o);i=ga.renderObra(a),ht.render(i),a.atrasos>0&&F.createToast(`Esta obra tem ${a.atrasos} pedido(s) em atraso.`,"warning"),await ru.notifySummary(a.alerts,n.uid,{scope:"obra",obraId:o}),setTimeout(()=>{a.rdoData?(a.rdoData.horasPorDia?Ut.renderHorasPorDia("chart-rdo-horas",a.rdoData.horasPorDia):Ut.renderEmpty("chart-rdo-horas"),a.rdoData.horasPorFuncao?Ut.renderHorasPorFuncao("chart-rdo-funcao",a.rdoData.horasPorFuncao):Ut.renderEmpty("chart-rdo-funcao"),a.rdoData.funcionariosPorDia?Ut.renderFuncionariosPorDia("chart-rdo-funcionarios",a.rdoData.funcionariosPorDia):Ut.renderEmpty("chart-rdo-funcionarios")):(Ut.renderEmpty("chart-rdo-horas"),Ut.renderEmpty("chart-rdo-funcao"),Ut.renderEmpty("chart-rdo-funcionarios"))},100)}else{const o=await je.getDiretorStats(),a=await((e=je.getObras)==null?void 0:e.call(je))||await Fe.getObras(),c=o._allCompras||[],l=a.map(w=>{const S=Number(w.orcamento||w.valor_orcado||0),P=Number(w.tolerancia_percentual||0),R=S+S*P,E=c.filter(x=>x.obraId===w.id).reduce((x,A)=>{const C=(A.status_compra||"").toLowerCase(),D=!A.estouro_orcamento||A.status_aprovacao==="Aprovado";return(C.includes("compr")||C.includes("receb")||C.includes("entreg")||C.includes("aprov"))&&D?x+Number(A.valor_total||A.valor_estimado||0):x},0),b=R>0?E/R*100:0;return{id:w.id,nome:w.nome_obra||w.apelido_obra||w.id,limite:R,comprometido:E,percent:b}}).filter(w=>w.limite>0||w.comprometido>0).sort((w,S)=>S.percent-w.percent).slice(0,8),d=[],h=[];a.forEach(w=>{Nb({data_inicio:w.data_inicio||w.data_prevista_inicio,data_prevista_fim:w.data_prevista_fim||w.data_fim,orcamento:w.orcamento||w.valor_orcado||0}).forEach(M=>d.push(M));const P=c.filter(M=>M.obraId===w.id);Lb(P,{},0,0).forEach(M=>h.push(M))});const f=Array.from(new Set([...d.map(w=>w.x),...h.map(w=>w.x)])).sort();let m=0,g=0;const v=[],_=[],I=[];f.forEach(w=>{const S=d.filter(R=>R.x===w).map(R=>R.y).pop(),P=h.filter(R=>R.x===w).map(R=>R.y).pop();S!==void 0&&(m=S),P!==void 0&&(g=P),I.push(w),v.push(m),_.push(g)}),i=ga.renderDiretor({...o,curvaS:{planejado:v,realizado:_,labels:I},obras:a,budgetByObra:l}),ht.render(i),setTimeout(()=>{(v.length||_.length)&&Ai.renderCurvaS("chart-curva",v,_,I),Ai.renderStatusPie("chart-status",o.porStatus),o.naturezaTotais&&Ai.renderNatureza("chart-natureza-dir",o.naturezaTotais),o.ccTotais&&Ai.renderCentrosCusto("chart-cc-dir",o.ccTotais),o.gastosPorMes&&Ai.renderGastosPorMes("chart-gastos-mes",o.gastosPorMes)},100),o.atrasos>0&&F.createToast(`Há ${o.atrasos} compras com previsão vencida.`,"warning"),((s=o.alerts)==null?void 0:s.sem_previsao)>0&&F.createToast(`${o.alerts.sem_previsao} pedidos sem previsão de entrega.`,"warning"),((r=o.alerts)==null?void 0:r.pendente_aprovacao)>0&&F.createToast(`${o.alerts.pendente_aprovacao} pedidos com aprovação pendente.`,"warning"),await ru.notifySummary(o.alerts,n.uid,{scope:"diretor"})}}catch(i){console.error(i),ht.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${i.message}</div>`)}}},loadTimeline:async()=>{const n=document.getElementById("timeline-container");if(n)try{const t=await je.getTimelineData(cn.currentFilters.obraId);n.innerHTML=ga.renderTimeline(t)}catch(t){console.error("[Dashboard] Erro timeline:",t),n.innerHTML='<p class="text-xs text-alert p-2">Erro ao carregar timeline</p>'}},bindFilters:()=>{const n=document.getElementById("dashboard-filter-obra"),t=document.getElementById("dashboard-filter-periodo"),e=document.getElementById("btn-apply-filters");e&&e.addEventListener("click",async()=>{const s=(n==null?void 0:n.value)||"",r=(t==null?void 0:t.value)||"30";let i=null,o=new Date;r==="7"?(i=new Date,i.setDate(o.getDate()-7)):r==="30"?(i=new Date,i.setDate(o.getDate()-30)):r==="thisMonth"?i=new Date(o.getFullYear(),o.getMonth(),1):r==="lastMonth"&&(i=new Date(o.getFullYear(),o.getMonth()-1,1),o=new Date(o.getFullYear(),o.getMonth(),0)),cn.currentFilters={obraId:s,periodo:i?{start:i,end:o}:null},cn.init()})},bindRecentActions:()=>{document.querySelectorAll('[data-action="view"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}`)})}),document.querySelectorAll('[data-action="edit"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.id;t&&(window.location.hash=`/compras/${t}/editar`)})}),document.querySelectorAll('[data-action="cobrar"]').forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.fornecedor,e=n.dataset.id,s=`Olá ${t}, gostaria de uma posição sobre o pedido #${e.slice(0,6)}.`,r=`https://wa.me/?text=${encodeURIComponent(s)}`;window.open(r,"_blank")})}),document.querySelectorAll('[data-action="receber"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(!t)return;if(await Tc.confirm({message:"Confirmar recebimento deste pedido? O status será alterado para Entregue."}))try{await je.markAsDelivered(t),F.createToast("Pedido marcado como Entregue! 🎉"),cn.init()}catch(s){F.createToast("Erro ao atualizar: "+s.message,"error")}})}),document.querySelectorAll('[data-action="delete"]').forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.id;if(!(!t||!await Tc.confirm({message:"Confirma exclusão desta compra?"})))try{await Rr.deleteCompra(t),F.createToast("Compra excluída.");const s=n.closest("tr");s==null||s.remove()}catch(s){F.createToast("Erro ao excluir: "+s.message,"error")}})})},initWeatherWidget:async()=>{const n=document.getElementById("weather-widget");if(n)try{const t=await _g.getLocation(),e=await _g.getWeather(t.lat,t.lon);if(e){const s=document.getElementById("weather-icon"),r=document.getElementById("weather-temp"),i=document.getElementById("weather-location");s&&(s.textContent=e.icon),r&&(r.textContent=`${e.temp}°C`),i&&(i.textContent=e.location),n.title=e.description.charAt(0).toUpperCase()+e.description.slice(1),n.classList.remove("hidden"),n.classList.add("flex")}}catch(t){console.error("[Dashboard] Erro ao carregar clima:",t),n.style.display="none"}},_maybeNotify:async(n={})=>{const t=It.state.currentUser;if(!t)return;const e=new Date().toISOString().slice(0,10),s=async(r,i,o)=>{const a=`notif_${r}_${e}_${t.uid}`;localStorage.getItem(a)||(await Ys.create({userId:t.uid,tipo:r,titulo:i,mensagem:o,link:"#/relatorios",prioridade:"normal"}),localStorage.setItem(a,"1"))};(n==null?void 0:n.atrasados)>0&&await s("atrasados","Pedidos atrasados",`${n.atrasados} pedido(s) com previsão vencida.`),(n==null?void 0:n.sem_previsao)>0&&await s("sem_previsao","Pedidos sem previsão",`${n.sem_previsao} pedido(s) sem data de entrega.`),(n==null?void 0:n.pendente_aprovacao)>0&&await s("pendente_aprovacao","Aprovação pendente",`${n.pendente_aprovacao} pedido(s) aguardando aprovação.`)}},RO=async n=>{if(!n)return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const t=await co(re(Z,"obras",n));if(!t.exists())return{limiteReal:0,toleranciaPercentual:0,orcamento:0};const e=t.data(),s=Number(e.valor_orcado||e.orcamento||0),r=Number(e.tolerancia_percentual||0);return{limiteReal:s+s*r,toleranciaPercentual:r,orcamento:s}},yg=async(n,t,e)=>{const{limiteReal:s}=await RO(n),r=s>0&&t>s;if(r&&!e){const i=new Error("JUSTIFICATIVA_NECESSARIA");throw i.code="JUSTIFICATIVA_NECESSARIA",i}return{estouro_orcamento:r,status_aprovacao:r?"Pendente":"Aprovado"}},Ir={checkDuplicidade:async(n,t)=>{const e=Gt(_t(Z,"compras"),Rt("obraId","==",n),Rt("status_compra","in",["Pendente","Em Cotação"])),s=await bt(e),r=t.toLowerCase();return s.docs.some(i=>{const o=i.data(),a=(o.descricao_compra||o.descricao||"").toLowerCase(),c=o.itens||[];return a.includes(r)||c.some(l=>(l.nome||"").toLowerCase().includes(r))})},uploadArquivo:(n,t,e)=>new Promise((s,r)=>{const i=ZI(Ek,t),o=XI(i,n);o.on("state_changed",a=>{const c=a.bytesTransferred/a.totalBytes*100;e&&e(c)},a=>r(a),async()=>{const a=await JI(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t=Number(n.valor_total||0),e=n.justificativa_estouro_orcamento||n.justificativa||"",s=await yg(n.obraId,t,e),r={...n,descricao_compra:n.descricao_compra||n.descricao||"",valor_total:t,justificativa_estouro_orcamento:e||null,estouro_orcamento:s.estouro_orcamento,status_aprovacao:n.status_aprovacao||s.status_aprovacao,data_solicitacao:$t.now().toDate().toISOString(),status_compra:n.status_compra||"Pendente",criado_em:$t.now(),criado_por:n.criado_por||null,ultima_atualizacao:new Date().toISOString(),atualizado_por:n.criado_por||null};return r.nf_conferida&&(r.nf_conferida_em=r.nf_conferida_em||$t.now(),r.nf_conferida_por=r.nf_conferida_por||r.criado_por||null),(await dr(_t(Z,"compras"),r)).id},atualizarCompra:async(n,t)=>{const e=Number(t.valor_total||0),s=t.justificativa_estouro_orcamento||t.justificativa||"";let r={estouro_orcamento:!1,status_aprovacao:t.status_aprovacao};(t.valor_total||t.obraId)&&(r=await yg(t.obraId,e,s));const i=re(Z,"compras",n);await qe(i,{...t,descricao_compra:t.descricao_compra||t.descricao||"",valor_total:e,justificativa_estouro_orcamento:s||null,estouro_orcamento:r.estouro_orcamento,status_aprovacao:t.status_aprovacao||r.status_aprovacao,nf_conferida_em:t.nf_conferida?t.nf_conferida_em||$t.now():null,nf_conferida_por:t.nf_conferida&&(t.nf_conferida_por||t.criado_por)||null,ultima_atualizacao:new Date().toISOString(),atualizado_por:t.atualizado_por||t.criado_por||null})},getCompra:async n=>{const t=await co(re(Z,"compras",n));return t.exists()?{id:t.id,...t.data()}:null}},vg={renderForm:({obras:n=[],fornecedores:t=[],centros:e=[],compradores:s=[],compra:r=null}={})=>{const i=!!r,o=["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"],a=["Aprovado","Pendente","Reprovado"],c=["Lista de Material inicial","Compra emergencial","Serviço","Transporte","Outros"],l=["Normal","Alta","Crítica"],d=_=>{if(!_)return"";const I=_!=null&&_.toDate?_.toDate():new Date(_);return Number.isNaN(I.getTime())?"":I.toISOString().split("T")[0]},h=_=>String(_??"").replace(/"/g,"&quot;"),f=(_,I)=>I?_.includes(I)?_:[I,..._]:_,m=f(c,r==null?void 0:r.natureza_compra),g=f(a,r==null?void 0:r.status_aprovacao),v=f(o,r==null?void 0:r.status_compra);return`
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
                                        ${n.map(_=>`
                                            <option value="${_.id}" ${(r==null?void 0:r.obraId)===_.id?"selected":""}>${_.nome_obra||_.apelido_obra||_.id}</option>
                                        `).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status</label>
                                    <select id="status_compra" name="status_compra" class="input">
                                        ${v.map(_=>`<option value="${_}" ${(r==null?void 0:r.status_compra)===_?"selected":""}>${_}</option>`).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Prioridade</label>
                                    <select id="prioridade" name="prioridade" class="input">
                                        ${l.map(_=>`<option value="${_}" ${(r==null?void 0:r.prioridade)===_?"selected":""}>${_}</option>`).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Natureza</label>
                                    <select id="natureza_compra" name="natureza_compra" class="input">
                                        ${m.map(_=>`<option value="${_}" ${(r==null?void 0:r.natureza_compra)===_?"selected":""}>${_}</option>`).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Status de Aprovação</label>
                                    <select id="status_aprovacao" name="status_aprovacao" class="input">
                                        ${g.map(_=>`<option value="${_}" ${(r==null?void 0:r.status_aprovacao)===_?"selected":""}>${_}</option>`).join("")}
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
                                        ${t.map(_=>`
                                            <option value="${_.id}" data-name="${_.nome||_.empresa||""}" ${(r==null?void 0:r.fornecedorId)===_.id?"selected":""}>${_.nome||_.empresa||_.id}</option>
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
                                        ${e.map(_=>`
                                            <option value="${_.id}" ${(r==null?void 0:r.centroCustoId)===_.id?"selected":""}>${_.nome||_.codigo||_.id}</option>
                                        `).join("")}
                                    </select>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <label class="text-xs font-display text-text-muted uppercase tracking-wide">Comprador</label>
                                    <select id="compradorId" name="compradorId" class="input">
                                        <option value="">Selecione...</option>
                                        ${s.map(_=>`
                                            <option value="${_.id}" ${(r==null?void 0:r.compradorId)===_.id?"selected":""}>${_.nome||_.email||_.id}</option>
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
        `}},Ks={list:async()=>(await bt(_t(Z,"centrosCusto"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await dr(_t(Z,"centrosCusto"),n)},update:async(n,t)=>{await qe(re(Z,"centrosCusto",n),t)}},Qs={list:async()=>(await bt(_t(Z,"compradores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await dr(_t(Z,"compradores"),n)},update:async(n,t)=>{await qe(re(Z,"compradores",n),t)}},Xs={list:async()=>(await bt(_t(Z,"fornecedores"))).docs.map(t=>({id:t.id,...t.data()})),create:async n=>{await dr(_t(Z,"fornecedores"),n)},update:async(n,t)=>{await qe(re(Z,"fornecedores",n),t)}},Or={init:async()=>{ht.render(F.createLoader());try{const[n,t,e,s]=await Promise.all([bt(_t(Z,"obras")),Xs.list(),Ks.list(),Qs.list()]),r=n.docs.map(i=>({id:i.id,...i.data()}));ht.render(vg.renderForm({obras:r,fornecedores:t,centros:e,compradores:s})),Or.bindEvents()}catch(n){console.error(n),ht.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},initEdit:async n=>{ht.render(F.createLoader());try{const[t,e,s,r,i]=await Promise.all([bt(_t(Z,"obras")),Xs.list(),Ks.list(),Qs.list(),Ir.getCompra(n)]),o=t.docs.map(a=>({id:a.id,...a.data()}));ht.render(vg.renderForm({obras:o,fornecedores:e,centros:s,compradores:r,compra:i})),Or.bindEvents(n,i,e)}catch(t){console.error(t),ht.render(`<div class="text-red-500">Erro ao carregar compra: ${t.message}</div>`)}},bindEvents:(n=null,t=null,e=[])=>{const s=document.getElementById("form-compra"),r=document.getElementById("file-upload"),i=document.getElementById("nf-upload"),o=document.getElementById("cte-upload"),a=document.getElementById("rc-upload"),c=document.getElementById("drop-zone"),l=document.getElementById("descricao_compra"),d=document.getElementById("obraId"),h=document.getElementById("status_compra"),f=document.getElementById("previsao_entrega"),m=document.getElementById("data_recebimento"),g=document.getElementById("data_emissao"),v=document.getElementById("retirada_estoque"),_=document.getElementById("fornecedorId");let I=[],w=null;const S=document.getElementById("valor_total"),P=document.getElementById("cnpj_fornecedor");let R=1;const M=document.querySelectorAll(".wizard-step"),E=document.querySelectorAll(".step-indicator"),b=document.getElementById("btn-prev"),x=document.getElementById("btn-next"),A=document.getElementById("btn-submit"),C=N=>{R=N,M.forEach(B=>B.classList.toggle("hidden",Number(B.dataset.step)!==N)),E.forEach(B=>{const z=Number(B.dataset.step)===N;B.classList.toggle("text-text",z),B.classList.toggle("text-text-muted",!z),B.classList.toggle("font-semibold",z)}),b&&b.classList.toggle("hidden",N===1),x&&x.classList.toggle("hidden",N===3),A&&A.classList.toggle("hidden",N!==3)};b==null||b.addEventListener("click",()=>C(Math.max(1,R-1))),x==null||x.addEventListener("click",()=>C(Math.min(3,R+1))),C(R),c==null||c.addEventListener("click",()=>r==null?void 0:r.click()),r==null||r.addEventListener("change",N=>D(N.target.files));const D=N=>{I=[...I,...Array.from(N)],k()},k=()=>{var B;const N=document.getElementById("file-list");N&&(N.innerHTML=I.map((z,W)=>`
                <div class="flex items-center justify-between bg-surface border border-border p-2 rounded">
                    <span class="text-sm truncate text-text">${z.name}</span>
                    <button type="button" class="text-alert hover:text-alert/80 px-2 py-1 text-xs font-semibold border border-transparent rounded" data-remove-file="${W}">X</button>
                </div>
            `).join(""),(B=N.querySelectorAll("[data-remove-file]"))==null||B.forEach(z=>{z.addEventListener("click",W=>{const lt=Number(W.currentTarget.dataset.removeFile);Number.isNaN(lt)||(I.splice(lt,1),k())})}))};s.addEventListener("remove-file",N=>{I.splice(N.detail,1),k()}),l==null||l.addEventListener("blur",async()=>{const N=d.value,B=l.value;N&&B.length>3&&await Ir.checkDuplicidade(N,B)&&F.createToast("Atenção: Já existe um pedido similar para esta obra!","warning")}),S==null||S.addEventListener("input",N=>{N.target.value=X.formatCurrencyInput(N.target.value)}),P==null||P.addEventListener("input",N=>{N.target.value=X.formatCnpjInput(N.target.value)}),P==null||P.addEventListener("blur",N=>{const B=N.target.value;B&&!X.validateCNPJ(B)&&F.createToast("CNPJ inválido.","warning")}),S==null||S.addEventListener("blur",async()=>{const N=d==null?void 0:d.value,B=S.value,z=X.parseCurrency(B),W=document.getElementById("justificativa-container"),lt=document.getElementById("justificativa");if(N&&z>0)try{const ut=await bt(Gt(_t(Z,"obras"),Rt("__name__","==",N)));if(!ut.empty){const Q=ut.docs[0].data(),et=Number(Q.valor_orcado||Q.orcamento||0),ct=Number(Q.tolerancia_percentual||0),Tt=et+et*ct;Tt>0&&z>Tt?(W.classList.remove("hidden"),lt.required=!0,F.createToast("Valor ultrapassa o orçamento da obra! Justificativa necessária.","warning")):(W.classList.add("hidden"),lt.required=!1)}}catch(ut){console.error("Erro ao validar orçamento:",ut)}});const nt=()=>{if(!(v!=null&&v.checked))return;const N=g==null?void 0:g.value;N&&(f&&(f.value=N),m&&(m.value=N))},H=N=>{const B=new Date().toISOString().split("T")[0];if(N){if(h&&(h.value="Recebido"),g&&!g.value&&(g.value=B),f&&!f.value&&(f.value=(g==null?void 0:g.value)||B),m&&!m.value&&(m.value=(g==null?void 0:g.value)||B),_){w||(w=_.value);const z=Array.from(_.options).find(W=>{var ut;return(((ut=W.dataset)==null?void 0:ut.name)||W.textContent||"").toLowerCase().includes("estoque axel")});z&&(_.value=z.value),_.disabled=!0}}else h&&h.value==="Recebido"&&!t&&(h.value="Pendente"),_&&(_.disabled=!1,w&&(_.value=w))},Y=(N,B)=>{var W;const z=document.getElementById(B);!z||!((W=N==null?void 0:N.files)!=null&&W.length)||(z.textContent=N.files[0].name)};if(i==null||i.addEventListener("change",()=>Y(i,"nf-upload-label")),o==null||o.addEventListener("change",()=>Y(o,"cte-upload-label")),a==null||a.addEventListener("change",()=>Y(a,"rc-upload-label")),t){s.obraId.value=t.obraId||"",s.prioridade&&(s.prioridade.value=t.prioridade||"Normal"),s.descricao_compra.value=t.descricao_compra||t.descricao||"",s.valor_total.value=X.formatCurrencyInput(t.valor_total||0),s.fornecedorId&&(s.fornecedorId.value=t.fornecedorId||"");const N=B=>{if(!B)return"";if(B.toDate){const z=B.toDate();return Number.isNaN(z)?"":z.toISOString().split("T")[0]}if(typeof B=="string"&&B.includes("/")){const[z,W,lt]=B.split("/");return`${lt&&lt.length===2?`20${lt}`:lt}-${W}-${z}`}try{const z=new Date(B);if(!Number.isNaN(z.getTime()))return z.toISOString().split("T")[0]}catch{}return""};if(s.data_emissao.value=N(t.data_emissao),s.previsao_entrega.value=N(t.previsao_entrega||t.data_entrega_prevista),s.data_recebimento.value=N(t.data_recebimento),s.status_compra.value=t.status_compra||"Pendente",s.centroCustoId&&(s.centroCustoId.value=t.centroCustoId||""),s.natureza_compra&&(s.natureza_compra.value=t.natureza_compra||""),s.compradorId&&(s.compradorId.value=t.compradorId||""),s.numero_nf&&(s.numero_nf.value=t.numero_nf||""),s.status_aprovacao&&(s.status_aprovacao.value=t.status_aprovacao||"Aprovado"),s.nf_conferida&&(s.nf_conferida.checked=!!t.nf_conferida),t.justificativa_estouro_orcamento){const B=document.getElementById("justificativa-container"),z=document.getElementById("justificativa");B.classList.remove("hidden"),z.value=t.justificativa_estouro_orcamento}t.solicitante&&s.solicitante&&(s.solicitante.value=t.solicitante),s.retirada_estoque.checked=t.retirada_estoque===!0||t.retirada_estoque==="on"}v&&(H(v.checked),v.addEventListener("change",N=>H(N.target.checked)),g==null||g.addEventListener("change",nt)),S&&!S.value&&(S.value=X.formatCurrencyInput(0)),s.addEventListener("submit",async N=>{var z,W,lt,ut,Q;N.preventDefault();const B=document.getElementById("btn-submit");try{if(P&&P.value&&!X.validateCNPJ(P.value)){F.createToast("CNPJ inválido.","warning"),P.focus();return}const et=g!=null&&g.value?new Date(g.value):null,ct=f!=null&&f.value?new Date(f.value):null,Tt=m!=null&&m.value?new Date(m.value):null;if(et&&ct&&et>ct){F.createToast("Data de emissão não pode ser após a previsão de entrega.","warning"),f==null||f.focus();return}if(et&&Tt&&et>Tt){F.createToast("Data de emissão não pode ser após o recebimento.","warning"),m==null||m.focus();return}if(Tt&&ct&&Tt<ct){F.createToast("Data de recebimento não pode ser anterior à previsão.","warning"),m==null||m.focus();return}B.disabled=!0,B.innerHTML=F.createLoader();const ke=d==null?void 0:d.value,ws=[];let sn=(t==null?void 0:t.pdf_nf_path)||null,Ue=(t==null?void 0:t.pdf_cte_path)||null,qn=(t==null?void 0:t.comprovante_rc_path)||null;const Es=async(he,rn)=>{var Is;const on=(Is=he==null?void 0:he.files)==null?void 0:Is[0];return on?Ir.uploadArquivo(on,`${rn}/${Date.now()}_${on.name}`):null};sn=await Es(i,"compras/nf")||sn,Ue=await Es(o,"compras/cte")||Ue,qn=await Es(a,"compras/rc")||qn;for(const he of I){const rn=await Ir.uploadArquivo(he,`compras/${Date.now()}_${he.name}`);ws.push({nome:he.name,url:rn})}const ri=new FormData(s),Ge=Object.fromEntries(ri.entries()),Ts=X.parseCurrency(Ge.valor_total||0),Ho=(Ge.justificativa||Ge.justificativa_estouro_orcamento||"").trim(),qt={...Ge,pdf_nf_path:sn,pdf_cte_path:Ue,comprovante_rc_path:qn,descricao_compra:Ge.descricao_compra,solicitante:Ge.solicitante||((z=It.state.currentUser)==null?void 0:z.nome)||((W=It.state.currentUser)==null?void 0:W.email),anexos:ws,valor_total:Ts,justificativa_estouro_orcamento:Ho||null,criado_por:((lt=It.state.currentUser)==null?void 0:lt.email)||null,cnpj_fornecedor:Ge.cnpj_fornecedor||null};if(qt.retirada_estoque=s.retirada_estoque.checked,qt.nf_conferida=((ut=s.nf_conferida)==null?void 0:ut.checked)||!1,qt.nf_conferida&&(qt.nf_conferida_por=((Q=It.state.currentUser)==null?void 0:Q.email)||qt.criado_por||null,qt.nf_conferida_em=qt.nf_conferida_em||new Date().toISOString()),qt.status_compra||(qt.status_compra="Pendente"),qt.status_aprovacao||(qt.status_aprovacao="Aprovado"),["data_emissao","previsao_entrega","data_recebimento"].forEach(he=>{qt[he]===""&&delete qt[he]}),ke&&Ts>0)try{const he=await bt(Gt(_t(Z,"obras"),Rt("__name__","==",ke)));if(!he.empty){const rn=he.docs[0].data(),on=Number(rn.valor_orcado||rn.orcamento||0),Is=Number(rn.tolerancia_percentual||0),qo=on+on*Is;if(qo>0&&Ts>qo&&!qt.justificativa_estouro_orcamento){F.createToast("Justificativa obrigatória: valor excede orçamento da obra.","warning"),B.disabled=!1,B.innerHTML="<span>Registrar Solicitação</span>";return}}}catch(he){console.warn("Erro ao validar orçamento na submissão",he)}((qt.status_compra||"").toLowerCase()==="recebido"||(qt.status_compra||"").toLowerCase()==="entregue")&&(qt.data_recebimento||(qt.data_recebimento=new Date().toISOString().split("T")[0])),n?(await Ir.atualizarCompra(n,qt),F.createToast("Compra atualizada com sucesso!")):(await Ir.salvarCompra(qt),F.createToast("Compra registrada com sucesso!")),At.navigate("/compras")}catch(et){console.error(et);const ct=(et==null?void 0:et.code)==="JUSTIFICATIVA_NECESSARIA"?"Justificativa é obrigatória quando ultrapassa o orçamento da obra.":"Erro ao registrar: "+et.message;F.createToast(ct,"error"),B.disabled=!1,B.innerHTML="<span>Registrar Solicitação</span>"}})}},ou={renderControls:(n="table",t=[])=>`
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${X.formatDate(e.data_solicitacao||e.data_emissao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.get(e.obraId)||e.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${e.descricao_compra||e.descricao||""}">${e.descricao_compra||e.descricao||"-"}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${X.formatCurrency(e.valor_total??e.valor_estimado??0)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${X.renderStatusBadge(e.status_compra,e.previsao_entrega||e.data_entrega_prevista)}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">
                                        ${e.pdf_nf_path?`<a href="${e.pdf_nf_path}" target="_blank" class="text-primary underline text-xs">NF</a>`:"-"}
                                        ${e.pdf_cte_path?`<a href="${e.pdf_cte_path}" target="_blank" class="text-primary underline text-xs ml-2">CTE</a>`:""}
                                        ${e.comprovante_rc_path?`<a href="${e.comprovante_rc_path}" target="_blank" class="text-primary underline text-xs ml-2">RC</a>`:""}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div class="inline-flex items-center justify-end gap-2">
                                            <button class="text-text-muted hover:text-text inline-flex items-center" data-action="view" data-id="${e.id}" title="Ver">${Ot.eye}</button>
                                            <button class="text-primary hover:text-primary-strong inline-flex items-center" data-action="edit" data-id="${e.id}" title="Editar">${Ot.pencil}</button>
                                            <button class="text-alert hover:text-alert/80 inline-flex items-center" data-action="delete" data-id="${e.id}" title="Excluir">${Ot.trash}</button>
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
                                            <span class="text-xs text-text-muted">${X.formatDate(i.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${i.descricao_compra||i.descricao||"-"}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${X.formatCurrency(i.valor_total??i.valor_estimado??0)}</span>
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
        `},j={currentView:"table",compras:[],filters:{},obras:[],fornecedores:[],compradores:[],centros:[],obraMap:new Map,fornecedorMap:new Map,compradorMap:new Map,centroMap:new Map,init:async()=>{await j.load(),await j.render()},decorateCompras:()=>{j.obraMap=new Map(j.obras.map(n=>[n.id,n.nome_obra||n.apelido_obra||n.id])),j.fornecedorMap=new Map(j.fornecedores.map(n=>[n.id,n.nome||n.empresa||n.id])),j.compradorMap=new Map(j.compradores.map(n=>[n.id,n.nome||n.email||n.id])),j.centroMap=new Map(j.centros.map(n=>[n.id,n.nome||n.codigo||n.id])),j.compras=j.compras.map(n=>{const t=X.parseCurrency(n.valor_total??n.valor_estimado??0);return{...n,valor_total:t,obraNome:j.obraMap.get(n.obraId)||n.obraId||"-",fornecedorNome:j.fornecedorMap.get(n.fornecedorId)||n.fornecedor||"",compradorNome:j.compradorMap.get(n.compradorId)||n.comprador||"",centroCustoNome:j.centroMap.get(n.centroCustoId)||n.centro_custo||n.centroCustoId||"",pdf_nf_path:n.pdf_nf_path||null,pdf_cte_path:n.pdf_cte_path||null,comprovante_rc_path:n.comprovante_rc_path||null,anexos:n.anexos||[]}})},load:async()=>{const[n,t,e,s,r]=await Promise.all([Rr.getCompras(),Fe.getObras(),Xs.list(),Qs.list(),Ks.list()]);j.compras=n,j.obras=t,j.fornecedores=e,j.compradores=s,j.centros=r,j.decorateCompras()},render:async()=>{const n=document.createElement("div");n.innerHTML=ou.renderControls(j.currentView,j.obras);const t=document.createElement("div");t.id="reports-content",t.innerHTML=j.currentView==="table"?ou.renderTable(j.compras,j.obraMap):ou.renderKanban(j.compras,j.obraMap),n.appendChild(t),ht.render(n.innerHTML),j.bindEvents()},applyFilters:async()=>{var g,v,_,I,w,S,P,R,M,E,b,x,A,C;const n=((g=document.getElementById("filter-search"))==null?void 0:g.value.toLowerCase())||"",t=((v=document.getElementById("filter-status"))==null?void 0:v.value)||"",e=((_=document.getElementById("filter-obra"))==null?void 0:_.value)||"",s=((I=document.getElementById("filter-prioridade"))==null?void 0:I.value)||"",r=((w=document.getElementById("filter-natureza"))==null?void 0:w.value)||"",i=((S=document.getElementById("filter-cc"))==null?void 0:S.value)||"",o=((P=document.getElementById("filter-fornecedor"))==null?void 0:P.value)||"",a=((R=document.getElementById("filter-comprador"))==null?void 0:R.value)||"",c=((M=document.getElementById("filter-status-aprov"))==null?void 0:M.value)||"",l=((E=document.getElementById("filter-nf-conferida"))==null?void 0:E.checked)||!1,d=((b=document.getElementById("filter-nf"))==null?void 0:b.value)||"",h=((x=document.getElementById("filter-date-start"))==null?void 0:x.value)||"",f=((A=document.getElementById("filter-date-end"))==null?void 0:A.value)||"",m=((C=document.getElementById("filter-only-delayed"))==null?void 0:C.checked)||!1;j.filters={search:n,status:t,obra:e,prioridade:s,natureza:r,cc:i,fornecedor:o,comprador:a,statusAprov:c,nfConferida:l,nf:d,dateStart:h,dateEnd:f,onlyDelayed:m},j.compras=await Rr.getCompras(j.filters),j.decorateCompras(),j.render()},bindEvents:()=>{var a,c,l,d,h,f,m;const n=(g,v)=>{const _=document.getElementById(g);_&&(_.value=v??"")};n("filter-search",j.filters.search||""),n("filter-status",j.filters.status||""),n("filter-obra",j.filters.obra||""),n("filter-prioridade",j.filters.prioridade||""),n("filter-natureza",j.filters.natureza||""),n("filter-cc",j.filters.cc||""),n("filter-fornecedor",j.filters.fornecedor||""),n("filter-comprador",j.filters.comprador||""),n("filter-status-aprov",j.filters.statusAprov||""),n("filter-nf",j.filters.nf||""),n("filter-date-start",j.filters.dateStart||""),n("filter-date-end",j.filters.dateEnd||"");const t=document.getElementById("filter-only-delayed");t&&(t.checked=!!j.filters.onlyDelayed);const e=document.getElementById("filter-nf-conferida");e&&(e.checked=!!j.filters.nfConferida),(a=document.getElementById("view-table"))==null||a.addEventListener("click",()=>{j.currentView="table",j.render()}),(c=document.getElementById("view-kanban"))==null||c.addEventListener("click",()=>{j.currentView="kanban",j.render()});const s=document.getElementById("filter-natureza"),r=document.getElementById("filter-cc"),i=document.getElementById("filter-fornecedor"),o=document.getElementById("filter-comprador");if(s){const g=Array.from(new Set(j.compras.map(v=>(v.natureza_compra||"Outros").trim())));s.innerHTML='<option value="">Todas Naturezas</option>'+g.map(v=>`<option value="${v}">${v}</option>`).join("")}r&&(r.innerHTML='<option value="">Todos Centros de Custo</option>'+j.centros.map(g=>`<option value="${g.id}">${g.nome||g.codigo||g.id}</option>`).join("")),i&&(i.innerHTML='<option value="">Todos Fornecedores</option>'+j.fornecedores.map(g=>`<option value="${g.id}">${g.nome||g.empresa||g.id}</option>`).join("")),o&&(o.innerHTML='<option value="">Todos Compradores</option>'+j.compradores.map(g=>`<option value="${g.id}">${g.nome||g.id}</option>`).join("")),n("filter-natureza",j.filters.natureza||""),n("filter-cc",j.filters.cc||""),n("filter-fornecedor",j.filters.fornecedor||""),n("filter-comprador",j.filters.comprador||""),n("filter-status-aprov",j.filters.statusAprov||""),(l=document.getElementById("btn-apply-filters"))==null||l.addEventListener("click",()=>{j.applyFilters()}),(d=document.getElementById("btn-clear-filters"))==null||d.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-natureza").value="",document.getElementById("filter-cc").value="";const g=document.getElementById("filter-fornecedor"),v=document.getElementById("filter-comprador"),_=document.getElementById("filter-nf"),I=document.getElementById("filter-status-aprov");g&&(g.value=""),v&&(v.value=""),_&&(_.value=""),I&&(I.value=""),document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1;const w=document.getElementById("filter-nf-conferida");w&&(w.checked=!1),j.applyFilters()}),(h=document.getElementById("btn-export-csv"))==null||h.addEventListener("click",()=>{try{j.exportCsv()}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(f=document.getElementById("btn-export-obra"))==null||f.addEventListener("click",()=>{try{j.exportGrouped("obra")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),(m=document.getElementById("btn-export-fornecedor"))==null||m.addEventListener("click",()=>{try{j.exportGrouped("fornecedor")}catch(g){F.createToast("Erro ao exportar: "+g.message,"error")}}),document.querySelectorAll('[data-action="view"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,_=j.compras.find(I=>I.id===v);if(!_)return alert("Compra não encontrada.");j.showModal(_,!1)})}),document.querySelectorAll('[data-action="edit"]').forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.id,_=j.compras.find(I=>I.id===v);if(!_)return alert("Compra não encontrada.");j.showModal(_,!0)})}),document.querySelectorAll('[data-action="delete"]').forEach(g=>{g.addEventListener("click",async()=>{const v=g.dataset.id;if(await Tc.confirm({message:"Confirmar exclusão da compra?"}))try{await Rr.deleteCompra(v),F.createToast("Compra excluída."),await j.load(),j.render()}catch(I){F.createToast("Erro ao excluir: "+I.message,"error")}})}),document.addEventListener("kanban-move-next",async g=>{const{id:v,current:_}=g.detail,I=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],w=I.indexOf(_)+1;if(w<I.length){const S=I[w];try{await Rr.updateStatus(v,S),F.createToast(`Movido para ${S}`),await j.load(),j.render()}catch(P){F.createToast("Erro ao mover: "+P.message,"error")}}})},showModal:(n,t=!1)=>{var o,a,c,l;const e=document.createElement("div");e.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4";const s=(d=[],h,f=m=>m.label)=>d.map(m=>{const g=m.value??m.id,v=f(m);return`<option value="${g}" ${h===g?"selected":""}>${v}</option>`}).join(""),r=(d,h)=>`
            <div>
                <label class="text-xs heading-muted uppercase">${d}</label>
                ${h}
            </div>
        `;e.innerHTML=`
            <div class="bg-surface border border-border rounded shadow-heavy w-full max-w-4xl">
                <div class="flex justify-between items-center px-4 py-3 border-b border-border">
                    <h3 class="text-lg font-display text-text">${t?"Editar Compra":"Detalhes da Compra"}</h3>
                    <button id="modal-close" class="text-text-muted hover:text-text">${Ot.close}</button>
                </div>
                <div class="p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${r("Obra",t?`<select id="modal-obra" class="input">
                                    ${s(j.obras,n.obraId,d=>d.nome_obra||d.apelido_obra||d.id)}
                                </select>`:`<p class="text-text">${n.obraNome||n.obraId||"-"}</p>`)}
                        ${r("Status",t?`<select id="modal-status" class="input">${["Pendente","Em Cotação","Aprovado","Comprado","Entregue","Recebido","Cancelado"].map(d=>`<option value="${d}" ${n.status_compra===d?"selected":""}>${d}</option>`).join("")}</select>`:`<p class="text-text">${n.status_compra||"-"}</p>`)}
                        ${r("Descrição",t?`<input id="modal-desc" class="input" value="${(n.descricao_compra||n.descricao||"").replace(/"/g,"&quot;")}">`:`<p class="text-text">${n.descricao_compra||n.descricao||"-"}</p>`)}
                        ${r("Valor",t?`<input id="modal-valor" type="number" step="0.01" class="input" value="${n.valor_total??n.valor_estimado??0}">`:`<p class="text-text">${X.formatCurrency(n.valor_total??n.valor_estimado??0)}</p>`)}
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
                        ${r("Data Emissão",t?`<input id="modal-emissao" type="date" class="input" value="${(n.data_emissao||"").split("T")[0]}">`:`<p class="text-text">${X.formatDate(n.data_emissao)}</p>`)}
                        ${r("Prev. Entrega",t?`<input id="modal-prev" type="date" class="input" value="${(n.previsao_entrega||n.data_entrega_prevista||"").split("T")[0]}">`:`<p class="text-text">${X.formatDate(n.previsao_entrega||n.data_entrega_prevista)}</p>`)}
                        ${r("Recebimento",t?`<input id="modal-receb" type="date" class="input" value="${(n.data_recebimento||"").split("T")[0]}">`:`<p class="text-text">${X.formatDate(n.data_recebimento)}</p>`)}
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
        `,document.body.appendChild(e);const i=()=>e.remove();(a=e.querySelector("#modal-close"))==null||a.addEventListener("click",i),(c=e.querySelector("#modal-close-2"))==null||c.addEventListener("click",i),t&&((l=e.querySelector("#modal-save"))==null||l.addEventListener("click",async()=>{var h,f,m,g,v,_,I,w,S,P,R,M,E,b,x;const d={obraId:((h=e.querySelector("#modal-obra"))==null?void 0:h.value)||n.obraId,status_compra:((f=e.querySelector("#modal-status"))==null?void 0:f.value)||n.status_compra,descricao_compra:((m=e.querySelector("#modal-desc"))==null?void 0:m.value)||"",valor_total:Number(((g=e.querySelector("#modal-valor"))==null?void 0:g.value)||0),fornecedorId:((v=e.querySelector("#modal-fornecedor"))==null?void 0:v.value)||"",compradorId:((_=e.querySelector("#modal-comprador"))==null?void 0:_.value)||"",centroCustoId:((I=e.querySelector("#modal-cc"))==null?void 0:I.value)||"",natureza_compra:((w=e.querySelector("#modal-natureza"))==null?void 0:w.value)||"",numero_nf:((S=e.querySelector("#modal-nf"))==null?void 0:S.value)||"",cnpj_fornecedor:((P=e.querySelector("#modal-cnpj"))==null?void 0:P.value)||"",status_aprovacao:((R=e.querySelector("#modal-aprov"))==null?void 0:R.value)||n.status_aprovacao,data_emissao:((M=e.querySelector("#modal-emissao"))==null?void 0:M.value)||"",previsao_entrega:((E=e.querySelector("#modal-prev"))==null?void 0:E.value)||"",data_recebimento:((b=e.querySelector("#modal-receb"))==null?void 0:b.value)||"",nf_conferida:((x=e.querySelector("#modal-nf-conferida"))==null?void 0:x.checked)||!1};["data_emissao","previsao_entrega","data_recebimento"].forEach(A=>{d[A]===""&&delete d[A]});try{if(d.cnpj_fornecedor&&!X.validateCNPJ(d.cnpj_fornecedor)){alert("CNPJ inválido.");return}await Rr.updateCompra(n.id,d),i(),await j.load(),j.render(),F.createToast("Compra atualizada.")}catch(A){alert("Erro ao salvar: "+A.message)}}))},exportCsv:()=>{if(!j.compras.length){F.createToast("Sem dados para exportar.","warning");return}const n=new Map(j.obras.map(d=>[d.id,d.nome_obra||d.apelido_obra||d.id])),t=new Map(j.fornecedores.map(d=>[d.id,d.nome||d.empresa||d.id])),e=new Map(j.compradores.map(d=>[d.id,d.nome||d.id])),s=new Map(j.centros.map(d=>[d.id,d.nome||d.codigo||d.id])),r=["Obra","NF-e","Valor","Data Emissao","Status","Data Recebimento","Prev. Entrega","Natureza","Centro Custo","Comprador","Fornecedor","CNPJ Fornecedor","Justificativa Estouro","Status Aprovacao"],i=j.compras.map(d=>[`"${n.get(d.obraId)||d.obraId||""}"`,`"${d.numero_nf||""}"`,String(d.valor_total||d.valor_estimado||0).replace(".",","),d.data_emissao||"",d.status_compra||"",d.data_recebimento||"",d.previsao_entrega||d.data_entrega_prevista||"",d.natureza_compra||"",s.get(d.centroCustoId)||d.centroCustoNome||d.centro_custo||d.centroCustoId||"",e.get(d.compradorId)||d.comprador||"",t.get(d.fornecedorId)||d.fornecedor||"",d.cnpj_fornecedor||"",(d.justificativa_estouro_orcamento||"").replace(/"/g,"'"),d.status_aprovacao||""]);let o="\uFEFF"+r.join(";")+`
`;o+=i.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)},exportGrouped:(n="obra")=>{const t=j.compras||[];if(!t.length){F.createToast("Sem dados para exportar.","warning");return}const e=n==="obra",s=e?["Obra","Qtd","Total (R$)"]:["Fornecedor","Qtd","Total (R$)"],r=new Map;t.forEach(d=>{const h=e?j.obraMap.get(d.obraId)||d.obraId||"N/D":j.fornecedorMap.get(d.fornecedorId)||d.fornecedor||"N/D",f=r.get(h)||{qtd:0,total:0};f.qtd+=1,f.total+=Number(d.valor_total??d.valor_estimado??0),r.set(h,f)});const i=Array.from(r.entries()).map(([d,h])=>[`"${d}"`,h.qtd,h.total.toFixed(2).replace(".",",")]);let o="\uFEFF"+s.join(";")+`
`;o+=i.map(d=>d.join(";")).join(`
`);const a=new Blob([o],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(a),l=document.createElement("a");l.href=c,l.download=`compras_${n}_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c)}},bg={getUsers:async()=>(await bt(_t(Z,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await qe(re(Z,"usuarios",n),t)},createUserProfile:async(n,t)=>{await dy(re(Z,"usuarios",n),t)}},PO={render:n=>`
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
        `},DO=n=>(Array.isArray(n)?n:[n]).filter(Boolean),Us={hasRole:(n,t=It.state.currentUser)=>{const e=DO(n);return!t||!e.length?!1:t.role==="administrador"?!0:e.includes(t.role)},guard:(n,t)=>{if(!Us.hasRole(n)){const e=new Error("Acesso negado para esta aÃ§Ã£o.");throw e.code="PERMISSION_DENIED",e}return t()},canEditObra:n=>Us.hasRole(["diretor","comprador","obra"],n),canDeleteObra:n=>Us.hasRole(["diretor"],n),canEditCompra:n=>Us.hasRole(["diretor","comprador"],n),canApproveCompra:n=>Us.hasRole(["diretor","financeiro"],n),canEditCadastros:n=>Us.hasRole(["diretor"],n)},td={init:async()=>{ht.render(F.createLoader());try{Us.guard(["administrador","diretor"],async()=>{const n=await bg.getUsers();ht.render(PO.render(n)),td.bindEvents()})}catch(n){ht.render(`<div class="text-red-500">Erro: ${n.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&bg.updateUser(t,{role:e}).then(()=>{F.createToast("Usuário atualizado!"),td.init()}).catch(s=>F.createToast("Erro: "+s.message,"error"))})}};let Ke=new Date().getMonth(),Ns=new Date().getFullYear();const Nr={setMonth:(n,t)=>{Ke=n,Ns=t},changeMonth:n=>{Ke+=n,Ke<0&&(Ke=11,Ns-=1),Ke>11&&(Ke=0,Ns+=1)},render:(n=[])=>{const t=new Date,e={};(n||[]).forEach(d=>{const h=d.date||d.previsao_entrega||d.data_entrega_prevista;if(!h)return;const f=new Date(h);if(Number.isNaN(f.getTime()))return;const m=f.toISOString().split("T")[0];e[m]||(e[m]=[]),e[m].push(d)});const s=new Date(Ns,Ke,1),i=new Date(Ns,Ke+1,0).getDate(),o=s.getDay();let l=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <button id="cal-prev" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&larr;</button>
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][Ke]} ${Ns}</h3>
                    <button id="cal-next" class="text-text-muted hover:text-text px-2 py-1 border border-border rounded">&rarr;</button>
                </div>
                
            <div class="flex items-center gap-3 text-xs text-text-muted mb-2">
                <span class="inline-flex items-center gap-1"><span class="w-3 h-3 inline-block bg-primary/30 border border-primary rounded"></span> Compras</span>
                <span class="inline-flex items-center gap-1"><span class="w-3 h-3 inline-block bg-blue-500/30 border border-blue-500 rounded"></span> RDO</span>
            </div>
        
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(d=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${d}</div>`).join("")}
        `;for(let d=0;d<o;d++)l+='<div class="aspect-square"></div>';for(let d=1;d<=i;d++){const h=new Date(Ns,Ke,d),f=h.toISOString().split("T")[0],m=e[f]||[],g=d===t.getDate()&&Ke===t.getMonth(),v=h<t&&!g;l+=`
                <div class="aspect-square border border-border rounded p-1 ${g?"bg-primary/10 border-primary":"bg-surface"} ${v?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${g?"text-primary font-bold":"text-text"}">${d}</div>
                    ${m.length>0?`
                        <div class="mt-1 space-y-1">
                            ${m.slice(0,2).map(_=>{const I=_.type==="rdo";return`
                                <div class="text-[10px] ${I?"bg-blue-500/20 border border-blue-500":"bg-primary/20 border border-primary"} rounded px-1 truncate" title="${_.descricao_compra||_.descricao||_.label||(I?"RDO":"Compra")}">
                                    ${(_.descricao_compra||_.descricao||_.label||(I?"RDO":"Compra")).substring(0,15)}
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
        `}},au={renderList:n=>`
            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-display text-text tracking-wide">GestÃ£o de Obras</h2>
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
                                ${t.valor_orcado?`<p class="heading-muted"><span class="text-text">OrÃ§amento:</span> ${X.formatCurrency(t.valor_orcado)}</p>`:""}
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
                        <h3 class="text-lg font-display mb-4 text-text">InformaÃ§Ãµes BÃ¡sicas</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${F.createInput({id:"nome_obra",label:"Nome da Obra *",value:(n==null?void 0:n.nome_obra)||"",required:!0})}
                            ${F.createInput({id:"numero_os",label:"NÃºmero da OS",value:(n==null?void 0:n.numero_os)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"empresa",label:"Empresa",value:(n==null?void 0:n.empresa)||""})}
                            ${F.createInput({id:"local_realizacao",label:"Local de RealizaÃ§Ã£o",value:(n==null?void 0:n.local_realizacao)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"valor_orcado",label:"Valor OrÃ§ado (R$)",type:"number",value:(n==null?void 0:n.valor_orcado)||"",placeholder:"0.00"})}
                            ${F.createInput({id:"tolerancia_percentual",label:"TolerÃ¢ncia (%)",type:"number",value:e,placeholder:"0"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"valor_deslocamento_km",label:"Valor Deslocamento/KM",type:"number",value:(n==null?void 0:n.valor_deslocamento_km)||"",placeholder:"0.00"})}
                            ${F.createInput({id:"descricao_obra",label:"DescriÃ§Ã£o da Obra",value:(n==null?void 0:n.descricao_obra)||"",placeholder:"Resumo da obra"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${F.createInput({id:"horas_previstas",label:"Horas Previstas",type:"number",value:(n==null?void 0:n.horas_previstas)||""})}
                            ${F.createInput({id:"horas_extras_previstas",label:"Horas Extras Previstas",type:"number",value:(n==null?void 0:n.horas_extras_previstas)||""})}
                            ${F.createInput({id:"status",label:"Status",value:(n==null?void 0:n.status)||"Em Andamento"})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            ${F.createInput({id:"qtd_refeicoes",label:"Qtd RefeiÃ§Ãµes",type:"number",value:(n==null?void 0:n.qtd_refeicoes)||""})}
                            ${F.createInput({id:"qtd_hospedagens",label:"Qtd Hospedagens",type:"number",value:(n==null?void 0:n.qtd_hospedagens)||""})}
                            ${F.createInput({id:"obra_pai_os",label:"OS da Obra Pai",value:(n==null?void 0:n.obra_pai_os)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${F.createInput({id:"data_prevista_inicio",label:"Data Prevista de InÃ­cio",type:"date",value:(n==null?void 0:n.data_prevista_inicio)||""})}
                            ${F.createInput({id:"data_prevista_fim",label:"Data Prevista de Fim",type:"date",value:(n==null?void 0:n.data_prevista_fim)||""})}
                        </div>

                        <div class="flex items-center gap-2 mt-4">
                            <input type="checkbox" id="is_obra_filha" name="is_obra_filha" class="rounded border-border text-primary" ${n!=null&&n.is_obra_filha?"checked":""}>
                            <label for="is_obra_filha" class="text-sm text-text">Obra filha</label>
                        </div>
                    </div>

                    <div class="flex justify-end gap-3">
                        ${F.createButton({id:"btn-cancel-obra",text:"Cancelar",variant:"secondary",onClick:"window.location.hash = '/obras'"})}
                        ${F.createButton({id:"btn-submit",type:"submit",text:t?"Salvar AlteraÃ§Ãµes":"Criar Obra"})}
                    </div>
                </form>
            </div>
        `},renderDashboard:(n,t)=>{var e,s,r,i,o,a,c,l,d,h,f,m,g,v,_,I,w,S,P,R,M,E,b,x,A,C,D,k,nt,H,Y,N,B,z;return`
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-display text-text tracking-wide">${n.nome_obra}</h2>
                        <p class="heading-muted">${n.numero_os?`OS: ${n.numero_os}`:""} ${n.empresa?`â€¢ ${n.empresa}`:""}</p>
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

                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    ${F.createCard({title:"Mat. Orçado",content:`<p id="kpi-mat-orcado" class="text-3xl font-display text-text">${X.formatCurrency(((s=(e=t.financialSummary)==null?void 0:e.materials)==null?void 0:s.planned)||0)}</p><p class="text-xs heading-muted mt-1">% Gasto: <span id="kpi-mat-percent">${(((i=(r=t.financialSummary)==null?void 0:r.materials)==null?void 0:i.percent)||0).toFixed(1)}%</span></p>`})}
                    ${F.createCard({title:"Mat. Executado",content:`<p id="kpi-mat-gasto" class="text-3xl font-display text-text">${X.formatCurrency(((a=(o=t.financialSummary)==null?void 0:o.materials)==null?void 0:a.spent)||0)}</p><p class="text-xs heading-muted mt-1" id="kpi-mat-saldo-label">Saldo: ${X.formatCurrency(((l=(c=t.financialSummary)==null?void 0:c.materials)==null?void 0:l.balance)||0)}</p>`})}
                    ${F.createCard({title:"M.O. Orçada",content:`<p id="kpi-mo-orcado" class="text-3xl font-display text-text">${X.formatCurrency(((h=(d=t.financialSummary)==null?void 0:d.labor)==null?void 0:h.planned)||0)}</p><p class="text-xs heading-muted mt-1">% Gasto: <span id="kpi-mo-percent">${(((m=(f=t.financialSummary)==null?void 0:f.labor)==null?void 0:m.percent)||0).toFixed(1)}%</span></p>`})}
                    ${F.createCard({title:"M.O. Executada",content:`<p id="kpi-mo-gasto" class="text-3xl font-display text-text">${X.formatCurrency(((v=(g=t.financialSummary)==null?void 0:g.labor)==null?void 0:v.spent)||0)}</p><p class="text-xs heading-muted mt-1" id="kpi-mo-saldo-label">Saldo: ${X.formatCurrency(((I=(_=t.financialSummary)==null?void 0:_.labor)==null?void 0:I.balance)||0)}</p>`})}
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${F.createCard({title:"Total Orçado (Mat + M.O.)",content:`<p id="kpi-total-orcado" class="text-3xl font-display text-text">${X.formatCurrency(((S=(w=t.financialSummary)==null?void 0:w.total)==null?void 0:S.planned)||0)}</p>`})}
                    ${F.createCard({title:"Total Executado",content:`<p id="kpi-total-gasto" class="text-3xl font-display text-text">${X.formatCurrency(((R=(P=t.financialSummary)==null?void 0:P.total)==null?void 0:R.spent)||0)}</p><p class="text-xs heading-muted mt-1" id="kpi-total-saldo-label">Saldo: ${X.formatCurrency(((E=(M=t.financialSummary)==null?void 0:M.total)==null?void 0:E.balance)||0)}</p>`})}
                    ${F.createCard({title:"% Gasto Total",content:`<p id="kpi-total-percent" class="text-3xl font-display text-${(((x=(b=t.financialSummary)==null?void 0:b.total)==null?void 0:x.percent)||0)>100?"alert":"primary"}">${(((C=(A=t.financialSummary)==null?void 0:A.total)==null?void 0:C.percent)||0).toFixed(1)}%</p>`})}
                </div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${F.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${X.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">OrÃ§amento: ${X.formatCurrency(n.valor_orcado||0)}</p>`})}
                    ${F.createCard({title:"Pedidos em Atraso",content:`<p class="text-4xl font-display text-alert uppercase">${t.atrasos||0}</p><p class="text-sm heading-muted mt-1">PrevisÃ£o vencida</p>`})}
                    ${F.createCard({title:"SLA Entregas",content:`<p class="text-4xl font-display text-${(t.sla||0)<80?"alert":"primary"} uppercase">${(t.sla||0).toFixed(1)}%</p><p class="text-sm heading-muted mt-1">Entregues no prazo</p>`})}
                    ${F.createCard({title:"Lead MÃ©dio",content:`<p class="text-4xl font-display text-text uppercase">${(t.lead||0).toFixed(1)}d</p><p class="text-sm heading-muted mt-1">EmissÃ£o â†’ Entrega/PrevisÃ£o</p>`})}
                    ${F.createCard({title:"Economia vs OrÃ§amento",content:`<p class="text-4xl font-display text-${(t.economia||0)<0?"alert":"primary"} uppercase">${X.formatCurrency(t.economia||0)}</p><p class="text-sm heading-muted mt-1">% Curva: ${(t.curvaPercent||0).toFixed(1)}%</p>`})}
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
                        <h3 class="text-lg font-display text-text mb-4">EvoluÃ§Ã£o DiÃ¡ria dos Gastos</h3>
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
                                    ${(()=>{const W=(t.ccTable||[]).reduce((Q,et)=>Q+et.valor,0),lt=(t.ccTable||[]).sort((Q,et)=>et.valor-Q.valor).map(Q=>`
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${Q.nome}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${X.formatCurrency(Q.valor)}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right">${W?(Q.valor/W*100).toFixed(1):"0.0"}%</td>
                                                </tr>
                                            `).join(""),ut=`
                                            <tr class="bg-canvas">
                                                <td class="px-4 py-2 text-sm font-display text-text">Total</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">${X.formatCurrency(W)}</td>
                                                <td class="px-4 py-2 text-sm font-display text-text text-right">100%</td>
                                            </tr>`;return!lt||lt.trim().length===0?'<tr><td colspan="3" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>':lt+ut})()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div id="calendar-wrapper" class="lg:col-span-2">
                        ${Nr.render(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                    <div id="timeline-wrapper">
                        ${Nr.renderTimeline(t.comprasCalendar||t.comprasRecentes)}
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-xl font-display text-text tracking-wide">AnÃ¡lise de MÃ£o de Obra (RDO)</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-6 gap-6">
                        ${F.createCard({title:"Total de Horas",content:`<p id="kpi-rdo-total" class="text-4xl font-display text-primary uppercase">${(((D=t.rdoData)==null?void 0:D.totalHoras)||0).toFixed(0)}</p>`,className:"accent-left"})}
                        ${F.createCard({title:"MÃ©dia Horas/Dia",content:`<p id="kpi-rdo-media-dia" class="text-4xl font-display text-text uppercase">${(((k=t.rdoData)==null?void 0:k.mediaHorasDia)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Total FuncionÃ¡rios",content:`<p id="kpi-rdo-func" class="text-4xl font-display text-text uppercase">${((nt=t.rdoData)==null?void 0:nt.totalFuncionarios)||0}</p>`})}
                        ${F.createCard({title:"MÃ©dia Func./Dia",content:`<p id="kpi-rdo-media-func-dia" class="text-4xl font-display text-text uppercase">${(((H=t.rdoData)==null?void 0:H.mediaFuncionariosDia)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Horas OrÃ§adas",content:`<p id="kpi-rdo-orcadas" class="text-4xl font-display text-text uppercase">${(Number(n.horas_previstas||0)+1.5*Number(n.horas_extras_previstas||0)).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Horas Extras Gastas",content:`<p id="kpi-rdo-extras" class="text-4xl font-display text-alert uppercase">${(((Y=t.rdoData)==null?void 0:Y.totalExtras)||0).toFixed(1)}</p>`})}
                        ${F.createCard({title:"Saldo de Horas",content:`<p id="kpi-rdo-saldo" class="text-4xl font-display text-text uppercase">${(Number(n.horas_previstas||0)+1.5*Number(n.horas_extras_previstas||0)-(Number(((N=t.rdoData)==null?void 0:N.totalHoras)||0)+.5*Number(((B=t.rdoData)==null?void 0:B.totalExtras)||0))).toFixed(1)}</p>`})}
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
                            <h3 class="text-lg font-display text-text mb-4">Horas por FunÃ§Ã£o</h3>
                            <div class="h-64 relative">
                                <canvas id="chart-rdo-funcao"></canvas>
                            </div>
                        </div>
                        <div class="card h-80">
                            <h3 class="text-lg font-display text-text mb-4">Top TÃ©cnicos (Horas)</h3>
                            <div class="h-64 overflow-y-auto custom-scrollbar">
                                <table id="table-rdo-tech" class="min-w-full divide-y divide-border">
                                    <thead class="bg-canvas">
                                        <tr>
                                            <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">TÃ©cnico</th>
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
                        <h3 class="text-lg font-display text-text mb-4">RelatÃ³rios RDO</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-border" id="table-rdo">
                                <thead class="bg-canvas">
                                    <tr>
                                        <th class="px-4 py-2 text-left text-xs font-display text-text-muted uppercase">Data</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas Normais</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Horas Extras</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">Total</th>
                                        <th class="px-4 py-2 text-right text-xs font-display text-text-muted uppercase">FuncionÃ¡rios</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-border">
                                    ${(((z=t.rdoData)==null?void 0:z.diarios)||[]).map(W=>`
                                        <tr>
                                            <td class="px-4 py-2 text-sm text-text">${new Date(W.data).toLocaleDateString("pt-BR")}</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${W.horasNormais.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${W.horasExtras.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right font-display">${W.total.toFixed(1)}h</td>
                                            <td class="px-4 py-2 text-sm text-text text-right">${W.funcionarios}</td>
                                        </tr>
                                    `).join("")||'<tr><td colspan="5" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3 class="text-lg font-display text-text mb-4">Ãšltimas Compras</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-border">
                            <thead class="bg-canvas">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Data</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">DescriÃ§Ã£o</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Valor</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">PrevisÃ£o</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Comprador</th>
                                    <th class="px-6 py-3 text-left text-xs font-display text-text-muted uppercase tracking-wide">Status</th>
                                    <th class="px-6 py-3 text-right text-xs font-display text-text-muted uppercase tracking-wide">AÃ§Ãµes</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-border">
                                ${t.comprasRecentes.map(W=>`
                                    <tr class="hover:bg-canvas">
                                        <td class="px-6 py-4 text-sm text-text-muted">${X.formatDate(W.data_solicitacao||W.data_emissao)}</td>
                                        <td class="px-6 py-4 text-sm text-text" title="${W.descricao_compra||W.descricao||"-"}">${W.descricao_compra||W.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${X.formatCurrency(W.valor_total??W.valor_estimado??0)}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${X.formatDate(W.previsao_entrega||W.data_entrega_prevista)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${W.compradorNome||W.comprador||W.compradorId||"-"}</td>
                                        <td class="px-6 py-4 text-sm">
                                            ${X.renderStatusBadge(W.status_compra,W.previsao_entrega||W.data_entrega_prevista)}
                                        </td>
                                        <td class="px-6 py-4 text-sm text-right">
                                            ${W.id?`
                                                <div class="flex items-center justify-end gap-2">
                                                    <button class="text-text-muted hover:text-text" data-action="view-compra" data-id="${W.id}" title="Ver compra">${Ot.eye}</button>
                                                    <button class="text-primary hover:text-primary-strong" data-action="edit-compra" data-id="${W.id}" title="Editar compra">${Ot.pencil}</button>
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
        `}},ie={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},Sn=()=>{var s,r;const n=typeof window<"u"?getComputedStyle(document.documentElement):null,t=(i,o)=>(n?(n.getPropertyValue(i)||"").trim():"")||o,e=(r=(s=document.documentElement)==null?void 0:s.classList)==null?void 0:r.contains("theme-light");return{isLight:e,text:t("--color-text","#e5e5e5"),muted:t("--color-text-muted","#a1a1aa"),primary:t("--color-primary","#22c55e"),primaryStrong:t("--color-primary-strong","#16a34a"),danger:t("--color-alert","#ef4444"),grid:e?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)"}},$b=()=>{const n=Sn();yt.defaults.color=n.text,yt.defaults.font.family=ie.family,yt.defaults.font.weight=ie.weight,yt.defaults.plugins.legend.labels.color=n.text,yt.defaults.scales=yt.defaults.scales||{}};$b();const xg=()=>{$b()},MO={id:"percentLabels",afterDraw(n){if(n.config.type!=="doughnut")return;const t=Sn(),{ctx:e}=n;n.data.datasets.forEach(s=>{const r=n.getDatasetMeta(0),i=s.data.reduce((o,a)=>o+a,0);r.data.forEach((o,a)=>{const c=s.data[a];if(!c||!i)return;const l=`${(c/i*100).toFixed(1)}%`;e.save(),e.fillStyle=t.text,e.font="600 11px "+ie.family,e.textAlign="center",e.textBaseline="middle";const d=o.tooltipPosition();e.fillText(l,d.x,d.y),e.restore()})})}};yt.register(MO);const Ls={renderCategorias:(n,t)=>{const e=Sn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new yt(s,{type:"bar",data:{labels:r,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:e.primary,borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:e.grid},ticks:{color:e.muted,font:ie}},y:{grid:{color:e.grid},ticks:{color:e.muted,font:ie}}}}})},renderStatusObra:(n,t)=>{const e=Sn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new yt(s,{type:"doughnut",data:{labels:r,datasets:[{data:i,backgroundColor:[e.primary,e.primaryStrong,e.muted,e.danger,"#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:10},plugins:{legend:{position:"bottom",labels:{color:e.text,font:ie,padding:12,usePointStyle:!0}},tooltip:{callbacks:{label:o=>{const a=o.dataset.data.reduce((l,d)=>l+d,0),c=a?(o.parsed/a*100).toFixed(1):0;return`${o.label}: ${c}% (${o.parsed})`}}}},cutout:"65%",pluginsCustom:!0}})},renderCentrosCusto:(n,t)=>{const e=Sn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t),i=Object.values(t);s.chart&&s.chart.destroy(),s.chart=new yt(s,{type:"bar",data:{labels:r,datasets:[{data:i,backgroundColor:e.primary,borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:e.grid},ticks:{color:e.muted,font:ie,callback:o=>`R$ ${(o/1e3).toFixed(0)}k`},beginAtZero:!0},y:{grid:{display:!1},ticks:{color:e.muted,font:ie,autoSkip:!1}}},indexAxis:"y"}})},renderFinancePVAV:(n,t=[],e=[])=>{const s=Sn(),r=document.getElementById(n);r&&(r.chart&&r.chart.destroy(),r.chart=new yt(r,{type:"line",data:{datasets:[{label:"Planejado (PV)",data:t,borderColor:s.primaryStrong,backgroundColor:"rgba(34,197,94,0.12)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}},{label:"Real (AV)",data:e,borderColor:s.danger,backgroundColor:"rgba(239,68,68,0.08)",fill:!0,tension:.3,borderWidth:3,parsing:{xAxisKey:"x",yAxisKey:"y"}}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{type:"time",time:{unit:"day"},grid:{color:s.grid},ticks:{color:s.muted}},y:{grid:{color:s.grid},ticks:{color:s.muted,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}},plugins:{legend:{position:"bottom",labels:{color:s.text,font:ie,usePointStyle:!0}}}}}))},renderFinanceComparison:(n,t)=>{var a,c,l,d,h,f;const e=Sn(),s=document.getElementById(n);if(!s||!t)return;s.chart&&s.chart.destroy();const r=["Materiais","Mão de Obra","Total"],i=[((a=t.materials)==null?void 0:a.planned)||0,((c=t.labor)==null?void 0:c.planned)||0,((l=t.total)==null?void 0:l.planned)||0],o=[((d=t.materials)==null?void 0:d.spent)||0,((h=t.labor)==null?void 0:h.spent)||0,((f=t.total)==null?void 0:f.spent)||0];s.chart=new yt(s,{type:"bar",data:{labels:r,datasets:[{label:"Planejado",data:i,backgroundColor:e.muted,borderRadius:6},{label:"Executado",data:o,backgroundColor:e.primary,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:e.text,font:ie,usePointStyle:!0}},tooltip:{callbacks:{label:m=>`${m.dataset.label}: R$ ${Number(m.parsed.y||0).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}`}}},scales:{x:{grid:{display:!1},ticks:{color:e.muted,font:ie}},y:{grid:{color:e.grid},ticks:{color:e.muted,font:ie,callback:m=>`R$ ${(m/1e3).toFixed(0)}k`},beginAtZero:!0}}}})},renderCurvaS:(n,t=[],e=[],s=[])=>{const r=Sn(),i=document.getElementById(n);i&&(i.chart&&i.chart.destroy(),i.chart=new yt(i,{type:"line",data:{labels:t.length?t:e.map((o,a)=>`Semana ${a+1}`),datasets:[{label:"Planejado",data:e,borderColor:r.muted,backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:s,borderColor:r.primary,backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:r.primary,pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:r.text,font:ie,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:r.text,bodyColor:r.muted,borderColor:"#333333",borderWidth:1,titleFont:ie,bodyFont:ie}},scales:{x:{grid:{color:r.grid},ticks:{color:r.muted,font:ie}},y:{grid:{color:r.grid},ticks:{color:r.muted,font:ie,callback:o=>`R$ ${(o/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=Sn(),s=document.getElementById(n);if(!s)return;const r=Object.keys(t).sort(),i=r.map(o=>t[o]);s.chart&&s.chart.destroy(),s.chart=new yt(s,{type:"line",data:{labels:r.map(o=>{const a=new Date(o);return Number.isNaN(a.getTime())?o:a.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}),datasets:[{label:"Gastos Diários",data:i,borderColor:e.primary,backgroundColor:"rgba(34,197,94,0.1)",borderWidth:2,tension:.3,fill:!0,pointRadius:3,pointBackgroundColor:e.primary}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{type:"category",grid:{display:!1},ticks:{color:e.muted,font:ie,maxRotation:45,autoSkip:!0,maxTicksLimit:10}},y:{grid:{color:e.grid},ticks:{color:e.muted,font:ie,callback:o=>`R$ ${(o/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},xh=xk(),wg=xh.BASE_URL||"https://apiexterna.diariodeobra.app/v1",OO=()=>{const n=xh.TOKEN||(typeof window<"u"?window.__RDO_API_TOKEN:"");if(n)return n;try{const t=localStorage.getItem("axel_rdo_token");if(t)return t}catch{}return""};async function cu(n,t={}){const e=OO();if(!e)return console.warn("[RDO] Token não encontrado; defina __RDO_API_CONFIG.TOKEN ou localStorage.axel_rdo_token"),null;const s={...t.headers,token:e,"Content-Type":"application/json"},r=await fetch(`${wg}${n}`,{...t,headers:s});if(console.info("[RDO] Request:",`${wg}${n}`,"status:",r.status),!r.ok)return console.warn(`Erro na API RDO ao acessar ${n}: ${r.status} ${r.statusText}`),null;const i=await r.json();return console.info("[RDO] Response data size:",Array.isArray(i)?i.length:Object.keys(i||{}).length),i}const Xe={getByObra:async(n,t,e)=>{const s=await Xe.getObraByOs(n);if(!s)return[];const r=await Xe.getRelatoriosByObra(s._id);if(!r||!r.length)return[];const i=a=>{if(!a)return!0;const c=new Date(a);if(c.setHours(12,0,0,0),t){const l=new Date(t);if(l.setHours(12,0,0,0),c<l)return!1}if(e){const l=new Date(e);if(l.setHours(12,0,0,0),c>l)return!1}return!0},o=[];for(const a of r){const c=await Xe.getRelatorioDetalhe(s._id,a._id);c&&i(c==null?void 0:c.data)&&o.push(c)}return o},getObraByOs:async n=>{const t=await cu("/obras");if(!Array.isArray(t))return null;const e=String(n||"").trim();if(!e)return null;const s=t.find(o=>String(o._id)===e);if(s)return s;const r=t.find(o=>{const a=(o.nome||"").match(/(\d+)$/);return a&&a[1]===e});if(r)return r;const i=t.find(o=>(o.nome||"").includes(e));return i||null},getRelatoriosByObra:async n=>{const t=await cu(`/obras/${n}/relatorios`);return Array.isArray(t)?t:[]},getRelatorioDetalhe:async(n,t)=>cu(`/obras/${n}/relatorios/${t}`),getIntegratedDataForObra:async n=>{const t=await Xe.getObraByOs(n);if(!t)return console.warn("[RDO] Obra não localizada para OS:",n),null;console.info("[RDO] Obra encontrada para OS:",n,"->",t._id,t.nome);const e=await Xe.getRelatoriosByObra(t._id);if(!e.length)return console.warn("[RDO] Nenhum relatório retornado para obra",t._id),{quantidadeRelatorios:0,totalHoras:"0.00",totalHorasExtras:"0.00",reports:[]};const s=(await Promise.all(e.map(c=>Xe.getRelatorioDetalhe(t._id,c._id)))).filter(Boolean);let r=0,i=0;const o=9,a=c=>{if(!c||typeof c!="string")return 0;const[l,d]=c.split(":").map(Number);return(l||0)+(d||0)/60};return s.forEach(c=>{var h,f;(((h=c==null?void 0:c.maoDeObra)==null?void 0:h.padrao)||[]).forEach(m=>{const g=Number(m.quantidade)||0;r+=g,g>o&&(i+=g-o)}),(((f=c==null?void 0:c.maoDeObra)==null?void 0:f.personalizada)||[]).forEach(m=>{const g=a(m.horasTrabalhadas);r+=g,g>o&&(i+=g-o)})}),{quantidadeRelatorios:s.length,totalHoras:r.toFixed(2),totalHorasExtras:i.toFixed(2),reports:s,relatoriosRaw:s}},processRDOData:(n=[])=>{const t={},e={},s={},r={},i={};let o=0,a=0;const c=new Set,l=9,d={},h=v=>{if(typeof v=="number")return v;if(typeof v=="string"){if(v.includes(":")){const[I,w]=v.split(":").map(Number);return(I||0)+(w||0)/60}const _=Number(v);return Number.isNaN(_)?0:_}return 0},f=v=>{if(!v)return null;let _=null;if(v instanceof Date?_=new Date(v.getTime()):typeof v=="number"&&(_=new Date(v)),typeof v=="string"){let I=v;if(I.includes("T")&&(I=I.split("T")[0]),I.includes("/")&&I.split("/").length===3){const[w,S,P]=I.split("/"),R=P.length===2?`20${P}`:P;_=new Date(`${R}-${S}-${w}`)}if(I.includes("-")){const[w,S,P]=I.split("-");_=new Date(Number(w),Number(S)-1,Number(P))}}return!_||Number.isNaN(_.getTime())?null:(_.setHours(12,0,0,0),_.setDate(_.getDate()+2),_)};n.forEach(v=>{var M,E;const _=v.data||v.data_inicio||v.dataInicio||v.createdAt||v.dataReferencia||v.dataServiço||v.dataServico||v.dataRelatorio||v.dataRel,I=f(_);if(!I||Number.isNaN(I.getTime()))return;const w=b=>String(b).padStart(2,"0"),S=`${I.getFullYear()}-${w(I.getMonth()+1)}-${w(I.getDate())}`;t[S]||(t[S]=0),e[S]||(e[S]=0),s[S]||(s[S]=0);const P=((M=v==null?void 0:v.maoDeObra)==null?void 0:M.padrao)||[],R=((E=v==null?void 0:v.maoDeObra)==null?void 0:E.personalizada)||[];P.forEach(b=>{const x=Number(b.quantidade)||0,A=Math.max(0,x-l),C=x-A;t[S]+=x,e[S]+=A,s[S]+=C;const D=b.funcao||"Outros";r[D]=(r[D]||0)+x,b.funcionario_id&&(i[S]||(i[S]=new Set),i[S].add(b.funcionario_id),c.add(b.funcionario_id));const k=b.nome||b.funcionario||b.descricao||"Técnico";d[k]=(d[k]||0)+x,o+=x,a+=A}),R.forEach(b=>{const x=h(b.horasTrabalhadas),A=Math.max(0,x-l),C=x-A;t[S]+=x,e[S]+=A,s[S]+=C;const D=b.funcao||"Outros";r[D]=(r[D]||0)+x,b.funcionario_id&&(i[S]||(i[S]=new Set),i[S].add(b.funcionario_id),c.add(b.funcionario_id));const k=b.nome||b.funcionario||b.descricao||"Técnico";d[k]=(d[k]||0)+x,o+=x,a+=A})});const m={};Object.keys(i).forEach(v=>{m[v]=i[v].size});const g=Object.keys(t).sort().map(v=>({data:v,horasNormais:s[v]||0,horasExtras:e[v]||0,total:t[v]||0,funcionarios:m[v]||0}));return{horasPorDia:t,horasNormaisPorDia:s,horasExtrasPorDia:e,horasPorFuncao:r,funcionariosPorDia:m,totalHoras:o,totalExtras:a,totalFuncionarios:c.size,mediaHorasDia:o/Math.max(1,Object.keys(t).length),mediaFuncionariosDia:Object.keys(m).length?Object.values(m).reduce((v,_)=>v+_,0)/Object.keys(m).length:0,techHours:d,diarios:g}},getHolidays:()=>xh.HOLIDAYS||[]},Bb=Object.freeze(Object.defineProperty({__proto__:null,RDOService:Xe},Symbol.toStringTag,{value:"Module"})),Eg=n=>{if(!n)return null;if(n instanceof Date)return n;if(n.toDate)return n.toDate();if(typeof n=="number")return new Date(n);if(typeof n=="string"){if(n.includes("/")&&n.split("/").length===3){const[e,s,r]=n.split("/"),i=r.length===2?`20${r}`:r,o=new Date(`${i}-${s}-${e}`);return o.setHours(12,0,0,0),o}const t=new Date(n);return t.setHours(12,0,0,0),t}return null},Pr={initList:async()=>{ht.render(F.createLoader());try{const n=await Fe.getObras();ht.render(au.renderList(n))}catch(n){console.error(n),ht.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{ht.render(F.createLoader());try{let t=null;n&&(t=await Fe.getObraById(n)),ht.render(au.renderForm(t)),Pr.bindFormEvents(n)}catch(t){console.error(t),ht.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{var t;ht.render(F.createLoader());try{xg(document.documentElement.classList.contains("theme-light"));const e=await Fe.getObraById(n);if(!e){ht.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const s=await Fe.getObraStats(n,!1),r=Number(e.valor_orcado||0);r>0?(s.economia=r-s.totalGasto,s.curvaPercent=s.totalGasto/r*100):(s.economia=0,s.curvaPercent=0);const i=[];!e.horas_previstas&&!e.horas_extras_previstas&&i.push("Horas da obra não informadas."),e.data_prevista_inicio||i.push("Data de início prevista não informada."),e.data_prevista_fim||i.push("Data de término prevista não informada."),r||i.push("Orçamento da obra não informado."),e.numero_os||i.push("Número da OS não informado; integração RDO pode falhar."),s.osNumber=e.numero_os||e.id,s.alerts=i;const[o,a,c]=await Promise.all([Qs.list(),Xs.list(),Ks.list()]),l=new Map(o.map(w=>[w.id,w.nome||w.email||w.id])),d=new Map(a.map(w=>[w.id,w.nome||w.empresa||w.id])),h=new Map(c.map(w=>[w.id,w.nome||w.codigo||w.id]));s.comprasRecentes=(s.comprasRecentes||[]).map(w=>({...w,compradorNome:l.get(w.compradorId)||w.comprador||"",fornecedorNome:d.get(w.fornecedorId)||w.fornecedor||"",centroCustoNome:h.get(w.centroCustoId)||w.centroCustoNome||w.centro_custo||w.centroCustoId||""})),s.comprasCalendar=(s.comprasCalendar||[]).map(w=>({...w,compradorNome:l.get(w.compradorId)||w.comprador||"",fornecedorNome:d.get(w.fornecedorId)||w.fornecedor||"",centroCustoNome:h.get(w.centroCustoId)||w.centroCustoNome||w.centro_custo||w.centroCustoId||""}));const f=(((t=s.rdoData)==null?void 0:t.diarios)||[]).map(w=>({date:w.data,descricao_compra:"RDO",fornecedorNome:"Mão de obra",type:"rdo"})),m=[...s.comprasCalendar||[],...f],g={};Object.entries(s.ccTotais||{}).forEach(([w,S])=>{const P=h.get(w)||w;g[P]=(g[P]||0)+S}),s.ccTotais=g,s.ccTable=Object.entries(g).map(([w,S])=>({nome:w,valor:S})),ht.render(au.renderDashboard(e,s)),(()=>{const w=S=>{var M;const P=document.createElement("div");P.className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",P.innerHTML=`
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
                                        <div class="mt-1">${X.renderStatusBadge(S.status_compra,S.previsao_entrega||S.data_entrega_prevista)}</div>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Descrição</label>
                                        <p class="text-text">${S.descricao_compra||S.descricao||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Valor</label>
                                        <p class="text-text">${X.formatCurrency(S.valor_total??S.valor_estimado??0)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Fornecedor</label>
                                        <p class="text-text">${S.fornecedorNome||S.fornecedor||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Comprador</label>
                                        <p class="text-text">${S.compradorNome||S.comprador||S.compradorId||"-"}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Prev. Entrega</label>
                                        <p class="text-text">${X.formatDate(S.previsao_entrega||S.data_entrega_prevista)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Data Emissão</label>
                                        <p class="text-text">${X.formatDate(S.data_emissao)}</p>
                                    </div>
                                    <div>
                                        <label class="text-xs heading-muted uppercase">Número NF</label>
                                        <p class="text-text">${S.numero_nf||"-"}</p>
                                    </div>
                                </div>
                                <div class="flex justify-end gap-2">
                                    <button class="btn-secondary" data-close>Fechar</button>
                                    ${S.id?`<button class="btn" data-edit-id="${S.id}">Editar</button>`:""}
                                </div>
                            </div>
                        </div>
                    `,document.body.appendChild(P),(M=P.querySelectorAll("[data-close]"))==null||M.forEach(E=>E.addEventListener("click",()=>P.remove()));const R=P.querySelector("[data-edit-id]");R&&R.addEventListener("click",()=>{At.navigate(`/compras/${S.id}/editar`),P.remove()})};document.querySelectorAll('[data-action="edit-compra"]').forEach(S=>{S.addEventListener("click",()=>{const P=S.dataset.id;P&&At.navigate(`/compras/${P}/editar`)})}),document.querySelectorAll('[data-action="view-compra"]').forEach(S=>{S.addEventListener("click",()=>{const P=S.dataset.id,R=s.comprasRecentes.find(M=>M.id===P);R&&w(R)})})})();const _=()=>{const w=document.getElementById("calendar-wrapper"),S=document.getElementById("timeline-wrapper");w&&(w.innerHTML=Nr.render(m||s.comprasRecentes)),S&&(S.innerHTML=Nr.renderTimeline(s.comprasCalendar||s.comprasRecentes));const P=document.getElementById("cal-prev"),R=document.getElementById("cal-next");P==null||P.addEventListener("click",()=>{Nr.changeMonth(-1),_()}),R==null||R.addEventListener("click",()=>{Nr.changeMonth(1),_()})};_();const I=()=>{var S;const w=document.documentElement.classList.contains("theme-light");xg(w),Ls.renderCategorias("chart-categorias",s.gastosPorCategoria),Ls.renderStatusObra("chart-status-obra",s.porStatus),s.curvaS&&Ls.renderCurvaS("chart-curva-s",s.curvaS.labels||[],s.curvaS.planejado,s.curvaS.realizado),s.gastosDiarios&&Ls.renderGastosMensais("chart-gastos-diarios",s.gastosDiarios),s.ccTotais&&Ls.renderCentrosCusto("chart-cc",s.ccTotais),(s._pv||s._av)&&Ls.renderFinancePVAV("chart-finance-pvav",s._pv||[],s._av||[]),s.financialSummary&&Ls.renderFinanceComparison("chart-finance-compare",s.financialSummary),((S=s.rdoData)==null?void 0:S.totalHoras)>0?(Ut.renderHorasNormaisExtras("chart-rdo-horas-normais-extras",s.rdoData.horasNormaisPorDia,s.rdoData.horasExtrasPorDia),s._plannedCurve&&s._executedCurve&&Ut.renderCurvaHoras("chart-rdo-curva-horas",s._plannedCurve,s._executedCurve,s._feriados||[]),s.rdoData.horasPorFuncao&&Ut.renderHorasPorFuncao("chart-rdo-funcao",s.rdoData.horasPorFuncao)):(Ut.renderEmpty("chart-rdo-horas-normais-extras"),Ut.renderEmpty("chart-rdo-curva-horas"))};setTimeout(async()=>{var M;const{COST_PER_HOUR:w,COST_PER_OVERTIME_HOUR:S}=await ho(async()=>{const{COST_PER_HOUR:E,COST_PER_OVERTIME_HOUR:b}=await Promise.resolve().then(()=>$D);return{COST_PER_HOUR:E,COST_PER_OVERTIME_HOUR:b}},void 0),P=Nb({data_inicio:e.data_prevista_inicio,data_prevista_fim:e.data_prevista_fim,orcamento:e.valor_orcado}),R=Lb(s.comprasCalendar||s.comprasRecentes||[],((M=s.rdoData)==null?void 0:M.horasPorDia)||{},w,S);s._pv=P,s._av=R;try{const E=e.numero_os||e.numeroOS||e.id;if(E){const b=await Xe.getIntegratedDataForObra(E);if(b&&b.reports){const x=Xe.processRDOData(b.reports);if(x){s.rdoData=x,s.rdoOk=!0;const A=(N,B)=>{const z=document.getElementById(N);z&&(z.textContent=B)},C=Number(e.horas_previstas||0),D=Number(e.horas_extras_previstas||0),k=C+1.5*D,nt=Number(x.totalHoras||0)+.5*Number(x.totalExtras||0),H=k-nt;if(A("kpi-rdo-total",x.totalHoras.toFixed(1)),A("kpi-rdo-media-dia",x.mediaHorasDia.toFixed(1)),A("kpi-rdo-func",String(x.totalFuncionarios||0)),A("kpi-rdo-media-func-dia",x.mediaFuncionariosDia.toFixed(1)),A("kpi-rdo-orcadas",k.toFixed(1)),A("kpi-rdo-extras",x.totalExtras.toFixed(1)),A("kpi-rdo-saldo",H.toFixed(1)),x.totalHoras>0){Ut.renderHorasNormaisExtras("chart-rdo-horas-normais-extras",x.horasNormaisPorDia,x.horasExtrasPorDia);const N=[],B=[],z=Eg(e.data_prevista_inicio),W=Eg(e.data_prevista_fim);if(z&&W&&!Number.isNaN(z)&&!Number.isNaN(W)&&z<=W&&k>0){const et=[],ct=new Date(z);ct.setHours(12,0,0,0);const Tt=new Date(W);for(Tt.setDate(Tt.getDate()+1);ct<=Tt;){const sn=ct.getDay();sn!==0&&sn!==6&&et.push(new Date(ct)),ct.setDate(ct.getDate()+1)}const ke=et.length?k/et.length:0;let ws=0;et.forEach(sn=>{ws+=ke;const Ue=new Date(sn);Ue.setDate(Ue.getDate()+0),N.push({x:Ue,y:Number(ws.toFixed(2))})})}const lt=Object.keys(x.horasPorDia||{}).sort((et,ct)=>new Date(et)-new Date(ct));let ut=0;lt.forEach(et=>{const ct=new Date(et);ct.setHours(12,0,0,0),!Number.isNaN(ct.getTime())&&(ut+=x.horasPorDia[et],B.push({x:ct,y:Number(ut.toFixed(2))}))});const Q=Xe.getHolidays?Xe.getHolidays():[];if(s._plannedCurve=N,s._executedCurve=B,s._feriados=Q,Ut.renderCurvaHoras("chart-rdo-curva-horas",N,B,Q),x.horasPorFuncao&&Ut.renderHorasPorFuncao("chart-rdo-funcao",x.horasPorFuncao),x.techHours){const et=Object.entries(x.techHours||{}).sort((Tt,ke)=>ke[1]-Tt[1]).slice(0,10),ct=document.querySelector("#table-rdo-tech tbody");ct&&(ct.innerHTML=et.map(([Tt,ke])=>`
                                                <tr>
                                                    <td class="px-4 py-2 text-sm text-text">${Tt}</td>
                                                    <td class="px-4 py-2 text-sm text-text text-right font-display">${ke.toFixed(1)}h</td>
                                                </tr>
                                            `).join("")||'<tr><td colspan="2" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>')}}else Ut.renderEmpty("chart-rdo-horas-normais-extras"),Ut.renderEmpty("chart-rdo-curva-horas");const Y=document.querySelector("#table-rdo tbody");if(Y){const N=x.diarios||[];N.length?Y.innerHTML=N.map(B=>`
                                            <tr>
                                                <td class="px-4 py-2 text-sm text-text">${new Date(B.data).toLocaleDateString("pt-BR")}</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${B.horasNormais.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${B.horasExtras.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right font-display">${B.total.toFixed(1)}h</td>
                                                <td class="px-4 py-2 text-sm text-text text-right">${B.funcionarios}</td>
                                            </tr>
                                        `).join(""):Y.innerHTML='<tr><td colspan="5" class="px-4 py-4 text-center heading-muted">Sem dados</td></tr>'}}}else s.rdoData=s.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},Ut.renderEmpty("chart-rdo-horas-normais-extras"),Ut.renderEmpty("chart-rdo-curva-horas")}}catch(E){console.warn("Erro ao carregar dados RDO (legacy):",(E==null?void 0:E.message)||E),s.rdoData=s.rdoData||{totalHoras:0,totalExtras:0,mediaHorasDia:0,mediaFuncionariosDia:0,totalFuncionarios:0},Ut.renderEmpty("chart-rdo-horas-normais-extras"),Ut.renderEmpty("chart-rdo-curva-horas")}try{const E=await Fe.calculateFinancialSummary(e.id,s.comprasCalendar||s.comprasRecentes||[],s.rdoData||null);s.financialSummary=E}catch(E){console.warn("Erro ao calcular resumo financeiro",E)}I()},100),It.subscribe(w=>{w!=null&&w.currentTheme&&requestAnimationFrame(()=>{setTimeout(I,0)})})}catch(e){console.error(e),ht.render(`<div class="text-red-500 p-4">Erro: ${e.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=F.createLoader();const r=new FormData(t),i=Object.fromEntries(r.entries());i.valor_orcado=i.valor_orcado?Number(i.valor_orcado):0,i.tolerancia_percentual=i.tolerancia_percentual?Number(i.tolerancia_percentual)/100:0,i.valor_deslocamento_km=i.valor_deslocamento_km?Number(i.valor_deslocamento_km):0,i.horas_previstas=i.horas_previstas?Number(i.horas_previstas):0,i.horas_extras_previstas=i.horas_extras_previstas?Number(i.horas_extras_previstas):0,i.qtd_refeicoes=i.qtd_refeicoes?Number(i.qtd_refeicoes):0,i.qtd_hospedagens=i.qtd_hospedagens?Number(i.qtd_hospedagens):0,i.is_obra_filha=t.is_obra_filha.checked,n?(await Fe.updateObra(n,i),F.createToast("Obra atualizada com sucesso!")):(await Fe.createObra(i),F.createToast("Obra criada com sucesso!")),At.navigate("/obras")}catch(r){console.error(r),F.createToast("Erro ao salvar obra: "+r.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},NO={renderMenu:()=>`
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
    `},LO={init:async()=>{ht.render(NO.renderMenu())}},VO={render:(n=[])=>`
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
    `},ed={init:async()=>{const n=await Xs.list();ht.render(VO.render(n)),ed.bind()},bind:()=>{const n=document.getElementById("fornecedor-form"),t=document.getElementById("btn-novo-fornecedor"),e=document.getElementById("btn-salvar-fornecedor"),s=document.getElementById("btn-cancelar-fornecedor"),r=document.querySelector("#fornecedor-table");t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden"));let i=null;r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("forn-nome").value=a.dataset.nome||"",document.getElementById("forn-email").value=a.dataset.email||"",document.getElementById("forn-telefone").value=a.dataset.telefone||"",document.getElementById("forn-cnpj").value=a.dataset.cnpj||"",n==null||n.classList.remove("hidden"))}),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("forn-nome").value,email:document.getElementById("forn-email").value,telefone:document.getElementById("forn-telefone").value,cnpj:document.getElementById("forn-cnpj").value};i?await Xs.update(i,o):await Xs.create(o),ed.init()})}},FO={render:(n=[])=>`
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
    `},nd={init:async()=>{const n=await Ks.list();ht.render(FO.render(n)),nd.bind()},bind:()=>{const n=document.getElementById("cc-form"),t=document.getElementById("btn-novo-cc"),e=document.getElementById("btn-salvar-cc"),s=document.getElementById("btn-cancelar-cc"),r=document.getElementById("cc-table");let i=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("cc-nome").value,codigo:document.getElementById("cc-codigo").value};i?await Ks.update(i,o):await Ks.create(o),nd.init()}),r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("cc-nome").value=a.dataset.nome||"",document.getElementById("cc-codigo").value=a.dataset.codigo||"",n==null||n.classList.remove("hidden"))})}},$O={render:(n=[])=>`
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
    `},sd={init:async()=>{const n=await Qs.list();ht.render($O.render(n)),sd.bind()},bind:()=>{const n=document.getElementById("comprador-form"),t=document.getElementById("btn-novo-comprador"),e=document.getElementById("btn-salvar-comprador"),s=document.getElementById("btn-cancelar-comprador"),r=document.getElementById("compr-table");let i=null;t==null||t.addEventListener("click",()=>n==null?void 0:n.classList.remove("hidden")),s==null||s.addEventListener("click",()=>n==null?void 0:n.classList.add("hidden")),e==null||e.addEventListener("click",async()=>{const o={nome:document.getElementById("compr-nome").value,email:document.getElementById("compr-email").value};i?await Qs.update(i,o):await Qs.create(o),sd.init()}),r==null||r.addEventListener("click",o=>{const a=o.target.closest("tr[data-id]");a&&(i=a.dataset.id,document.getElementById("compr-nome").value=a.dataset.nome||"",document.getElementById("compr-email").value=a.dataset.email||"",n==null||n.classList.remove("hidden"))})}},Tg={renderBell:(n=0)=>`
            <button id="notifications-bell" class="relative p-2 rounded-lg hover:bg-surface transition-colors">
                ${Ot.bell}
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
        `},ae={notifications:[],unreadCount:0,eventsBound:!1,init:async()=>{It.state.currentUser&&(window.addEventListener("layout:rendered",()=>{ae.render(),ae.bindEvents()}),await ae.load(),ae.render(),ae.bindEvents(),setInterval(()=>ae.load(),12e4))},load:async()=>{const n=It.state.currentUser;ae.notifications=await Ys.getByUser(n.uid,20),ae.unreadCount=ae.notifications.filter(t=>!t.lida).length,ae.render(),Tc.badge(ae.unreadCount)},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=Tg.renderBell(ae.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=Tg.renderDropdown(ae.notifications),n.appendChild(t)},bindEvents:()=>{ae.eventsBound||(ae.eventsBound=!0,document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=It.state.currentUser;await Ys.markAllAsRead(t.uid),await ae.load()}}),document.addEventListener("click",async n=>{var r,i;const t=(i=(r=n.target).closest)==null?void 0:i.call(r,"[data-notification-id]");if(!t)return;const e=t.dataset.notificationId,s=t.dataset.link||"#";try{await Ys.markAsRead(e),await ae.load()}finally{window.location.hash=s.startsWith("#")?s.slice(1):s}}))}};console.log("[Main] Inicializando aplicaÃ§Ã£o...");const BO=async()=>{try{await Tk(),console.log("[Main] Firebase inicializado."),It.applyTheme(It.state.currentTheme||"dark"),await fc.init(),It.state.currentUser&&await ae.init(),At.init(),At.on("/",cn.init),At.on("/login",Up.initLogin),At.on("/forgot-password",Up.initForgotPassword),At.on("/compras",Or.init),At.on("/compras/nova",Or.init),At.on("/relatorios",j.init),At.on("/configuracoes",td.init),At.on("/compras/:id",({id:t})=>Or.initEdit(t)),At.on("/compras/:id/editar",({id:t})=>Or.initEdit(t)),At.on("/cadastros",LO.init),At.on("/cadastros/fornecedores",ed.init),At.on("/cadastros/centros-custo",nd.init),At.on("/cadastros/compradores",sd.init),At.on("/obras",Pr.initList),At.on("/obras/nova",()=>Pr.initForm()),At.on("/obras/:id",({id:t})=>Pr.initDashboard(t)),At.on("/obras/:id/dashboard",({id:t})=>Pr.initDashboard(t)),At.on("/obras/:id/editar",({id:t})=>Pr.initForm(t)),At.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};BO();
