var fv=Object.defineProperty;var pv=(n,t,e)=>t in n?fv(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var U=(n,t,e)=>pv(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();var ed={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},gv=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},sg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(p=64)),s.push(e[h],e[d],e[p],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ng(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):gv(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const d=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new mv;const p=r<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),d!==64){const _=u<<6&192|d;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _v=function(n){const t=ng(n);return sg.encodeByteArray(t,!0)},$o=function(n){return _v(n).replace(/\./g,"")},ig=function(n){try{return sg.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const vv=()=>yv().__FIREBASE_DEFAULTS__,bv=()=>{if(typeof process>"u"||typeof ed>"u")return;const n=ed.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ig(n[1]);return t&&JSON.parse(t)},pa=()=>{try{return vv()||bv()||wv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rg=n=>{var t,e;return(e=(t=pa())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},og=n=>{const t=rg(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},ag=()=>{var n;return(n=pa())===null||n===void 0?void 0:n.config},lg=n=>{var t;return(t=pa())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function cg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$o(JSON.stringify(e)),$o(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ev(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Tv(){var n;const t=(n=pa())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Iv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Av(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rv(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kv(){return!Tv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pv(){try{return typeof indexedDB=="object"}catch{return!1}}function Cv(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="FirebaseError";class ze extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Dv,Object.setPrototypeOf(this,ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Mv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ze(i,a,s)}}function Mv(n,t){return n.replace(Ov,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Ov=/\{\$([^}]+)}/g;function Lv(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function zo(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(nd(r)&&nd(o)){if(!zo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function nd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function ki(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function Pi(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Nv(n,t){const e=new Vv(n,t);return e.subscribe.bind(e)}class Vv{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Fv(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=pl),i.error===void 0&&(i.error=pl),i.complete===void 0&&(i.complete=pl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fv(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function pl(){}/**
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
 */function At(n){return n&&n._delegate?n._delegate:n}class On{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new xv;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($v(t))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Jn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jn){return this.instances.has(t)}getOptions(t=Jn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bv(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Jn){return this.component?this.component.multipleInstances?t:Jn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bv(n){return n===Jn?void 0:n}function $v(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Uv(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const jv={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Hv=J.INFO,Wv={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},qv=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Wv[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bc{constructor(t){this.name=t,this._logLevel=Hv,this._logHandler=qv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Gv=(n,t)=>t.some(e=>n instanceof e);let sd,id;function Kv(){return sd||(sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yv(){return id||(id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ug=new WeakMap,Xl=new WeakMap,hg=new WeakMap,gl=new WeakMap,$c=new WeakMap;function Xv(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(kn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&ug.set(e,n)}).catch(()=>{}),$c.set(t,n),t}function Qv(n){if(Xl.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Xl.set(n,t)}let Ql={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Xl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||hg.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return kn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jv(n){Ql=n(Ql)}function Zv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(ml(this),t,...e);return hg.set(s,t.sort?t.sort():[t]),kn(s)}:Yv().includes(n)?function(...t){return n.apply(ml(this),t),kn(ug.get(this))}:function(...t){return kn(n.apply(ml(this),t))}}function tb(n){return typeof n=="function"?Zv(n):(n instanceof IDBTransaction&&Qv(n),Gv(n,Kv())?new Proxy(n,Ql):n)}function kn(n){if(n instanceof IDBRequest)return Xv(n);if(gl.has(n))return gl.get(n);const t=tb(n);return t!==n&&(gl.set(n,t),$c.set(t,n)),t}const ml=n=>$c.get(n);function eb(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=kn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(kn(o.result),l.oldVersion,l.newVersion,kn(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const nb=["get","getKey","getAll","getAllKeys","count"],sb=["put","add","delete","clear"],_l=new Map;function rd(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(_l.get(t))return _l.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=sb.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||nb.includes(e)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&l.done]))[0]};return _l.set(t,r),r}Jv(n=>({...n,get:(t,e,s)=>rd(t,e)||n.get(t,e,s),has:(t,e)=>!!rd(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(rb(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function rb(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jl="@firebase/app",od="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Bc("@firebase/app"),ob="@firebase/app-compat",ab="@firebase/analytics-compat",lb="@firebase/analytics",cb="@firebase/app-check-compat",ub="@firebase/app-check",hb="@firebase/auth",db="@firebase/auth-compat",fb="@firebase/database",pb="@firebase/data-connect",gb="@firebase/database-compat",mb="@firebase/functions",_b="@firebase/functions-compat",yb="@firebase/installations",vb="@firebase/installations-compat",bb="@firebase/messaging",wb="@firebase/messaging-compat",xb="@firebase/performance",Eb="@firebase/performance-compat",Tb="@firebase/remote-config",Ib="@firebase/remote-config-compat",Ab="@firebase/storage",Sb="@firebase/storage-compat",Rb="@firebase/firestore",kb="@firebase/vertexai-preview",Pb="@firebase/firestore-compat",Cb="firebase",Db="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="[DEFAULT]",Mb={[Jl]:"fire-core",[ob]:"fire-core-compat",[lb]:"fire-analytics",[ab]:"fire-analytics-compat",[ub]:"fire-app-check",[cb]:"fire-app-check-compat",[hb]:"fire-auth",[db]:"fire-auth-compat",[fb]:"fire-rtdb",[pb]:"fire-data-connect",[gb]:"fire-rtdb-compat",[mb]:"fire-fn",[_b]:"fire-fn-compat",[yb]:"fire-iid",[vb]:"fire-iid-compat",[bb]:"fire-fcm",[wb]:"fire-fcm-compat",[xb]:"fire-perf",[Eb]:"fire-perf-compat",[Tb]:"fire-rc",[Ib]:"fire-rc-compat",[Ab]:"fire-gcs",[Sb]:"fire-gcs-compat",[Rb]:"fire-fst",[Pb]:"fire-fst-compat",[kb]:"fire-vertex","fire-js":"fire-js",[Cb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Map,Ob=new Map,tc=new Map;function ad(n,t){try{n.container.addComponent(t)}catch(e){cn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ls(n){const t=n.name;if(tc.has(t))return cn.debug(`There were multiple attempts to register component ${t}.`),!1;tc.set(t,n);for(const e of jo.values())ad(e,n);for(const e of Ob.values())ad(e,n);return!0}function ga(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Ze(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new yr("app","Firebase",Lb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=Db;function dg(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Zl,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(e||(e=ag()),!e)throw Pn.create("no-options");const r=jo.get(i);if(r){if(zo(e,r.options)&&zo(s,r.config))return r;throw Pn.create("duplicate-app",{appName:i})}const o=new zv(i);for(const l of tc.values())o.addComponent(l);const a=new Nb(e,s,o);return jo.set(i,a),a}function zc(n=Zl){const t=jo.get(n);if(!t&&n===Zl&&ag())return dg();if(!t)throw Pn.create("no-app",{appName:n});return t}function Le(n,t,e){var s;let i=(s=Mb[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}ls(new On(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Vb="firebase-heartbeat-database",Fb=1,tr="firebase-heartbeat-store";let yl=null;function fg(){return yl||(yl=eb(Vb,Fb,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(tr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Pn.create("idb-open",{originalErrorMessage:n.message})})),yl}async function Ub(n){try{const e=(await fg()).transaction(tr),s=await e.objectStore(tr).get(pg(n));return await e.done,s}catch(t){if(t instanceof ze)cn.warn(t.message);else{const e=Pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});cn.warn(e.message)}}}async function ld(n,t){try{const s=(await fg()).transaction(tr,"readwrite");await s.objectStore(tr).put(t,pg(n)),await s.done}catch(e){if(e instanceof ze)cn.warn(e.message);else{const s=Pn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});cn.warn(s.message)}}}function pg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Bb=1024,$b=30*24*60*60*1e3;class zb{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Hb(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$b}),this._storage.overwrite(this._heartbeatsCache))}catch(s){cn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cd(),{heartbeatsToSend:s,unsentEntries:i}=jb(this._heartbeatsCache.heartbeats),r=$o(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return cn.warn(e),""}}}function cd(){return new Date().toISOString().substring(0,10)}function jb(n,t=Bb){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ud(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ud(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Hb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pv()?Cv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ub(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ld(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return ld(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ud(n){return $o(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(n){ls(new On("platform-logger",t=>new ib(t),"PRIVATE")),ls(new On("heartbeat",t=>new zb(t),"PRIVATE")),Le(Jl,od,n),Le(Jl,od,"esm2017"),Le("fire-js","")}Wb("");var qb="firebase",Gb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(qb,Gb,"app");var hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,gg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,b){function x(){}x.prototype=b.prototype,E.D=b.prototype,E.prototype=new x,E.prototype.constructor=E,E.C=function(I,A,R){for(var T=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)T[vt-2]=arguments[vt];return b.prototype[A].apply(I,T)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,b,x){x||(x=0);var I=Array(16);if(typeof b=="string")for(var A=0;16>A;++A)I[A]=b.charCodeAt(x++)|b.charCodeAt(x++)<<8|b.charCodeAt(x++)<<16|b.charCodeAt(x++)<<24;else for(A=0;16>A;++A)I[A]=b[x++]|b[x++]<<8|b[x++]<<16|b[x++]<<24;b=E.g[0],x=E.g[1],A=E.g[2];var R=E.g[3],T=b+(R^x&(A^R))+I[0]+3614090360&4294967295;b=x+(T<<7&4294967295|T>>>25),T=R+(A^b&(x^A))+I[1]+3905402710&4294967295,R=b+(T<<12&4294967295|T>>>20),T=A+(x^R&(b^x))+I[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=x+(b^A&(R^b))+I[3]+3250441966&4294967295,x=A+(T<<22&4294967295|T>>>10),T=b+(R^x&(A^R))+I[4]+4118548399&4294967295,b=x+(T<<7&4294967295|T>>>25),T=R+(A^b&(x^A))+I[5]+1200080426&4294967295,R=b+(T<<12&4294967295|T>>>20),T=A+(x^R&(b^x))+I[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=x+(b^A&(R^b))+I[7]+4249261313&4294967295,x=A+(T<<22&4294967295|T>>>10),T=b+(R^x&(A^R))+I[8]+1770035416&4294967295,b=x+(T<<7&4294967295|T>>>25),T=R+(A^b&(x^A))+I[9]+2336552879&4294967295,R=b+(T<<12&4294967295|T>>>20),T=A+(x^R&(b^x))+I[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=x+(b^A&(R^b))+I[11]+2304563134&4294967295,x=A+(T<<22&4294967295|T>>>10),T=b+(R^x&(A^R))+I[12]+1804603682&4294967295,b=x+(T<<7&4294967295|T>>>25),T=R+(A^b&(x^A))+I[13]+4254626195&4294967295,R=b+(T<<12&4294967295|T>>>20),T=A+(x^R&(b^x))+I[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=x+(b^A&(R^b))+I[15]+1236535329&4294967295,x=A+(T<<22&4294967295|T>>>10),T=b+(A^R&(x^A))+I[1]+4129170786&4294967295,b=x+(T<<5&4294967295|T>>>27),T=R+(x^A&(b^x))+I[6]+3225465664&4294967295,R=b+(T<<9&4294967295|T>>>23),T=A+(b^x&(R^b))+I[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=x+(R^b&(A^R))+I[0]+3921069994&4294967295,x=A+(T<<20&4294967295|T>>>12),T=b+(A^R&(x^A))+I[5]+3593408605&4294967295,b=x+(T<<5&4294967295|T>>>27),T=R+(x^A&(b^x))+I[10]+38016083&4294967295,R=b+(T<<9&4294967295|T>>>23),T=A+(b^x&(R^b))+I[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=x+(R^b&(A^R))+I[4]+3889429448&4294967295,x=A+(T<<20&4294967295|T>>>12),T=b+(A^R&(x^A))+I[9]+568446438&4294967295,b=x+(T<<5&4294967295|T>>>27),T=R+(x^A&(b^x))+I[14]+3275163606&4294967295,R=b+(T<<9&4294967295|T>>>23),T=A+(b^x&(R^b))+I[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=x+(R^b&(A^R))+I[8]+1163531501&4294967295,x=A+(T<<20&4294967295|T>>>12),T=b+(A^R&(x^A))+I[13]+2850285829&4294967295,b=x+(T<<5&4294967295|T>>>27),T=R+(x^A&(b^x))+I[2]+4243563512&4294967295,R=b+(T<<9&4294967295|T>>>23),T=A+(b^x&(R^b))+I[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=x+(R^b&(A^R))+I[12]+2368359562&4294967295,x=A+(T<<20&4294967295|T>>>12),T=b+(x^A^R)+I[5]+4294588738&4294967295,b=x+(T<<4&4294967295|T>>>28),T=R+(b^x^A)+I[8]+2272392833&4294967295,R=b+(T<<11&4294967295|T>>>21),T=A+(R^b^x)+I[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=x+(A^R^b)+I[14]+4259657740&4294967295,x=A+(T<<23&4294967295|T>>>9),T=b+(x^A^R)+I[1]+2763975236&4294967295,b=x+(T<<4&4294967295|T>>>28),T=R+(b^x^A)+I[4]+1272893353&4294967295,R=b+(T<<11&4294967295|T>>>21),T=A+(R^b^x)+I[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=x+(A^R^b)+I[10]+3200236656&4294967295,x=A+(T<<23&4294967295|T>>>9),T=b+(x^A^R)+I[13]+681279174&4294967295,b=x+(T<<4&4294967295|T>>>28),T=R+(b^x^A)+I[0]+3936430074&4294967295,R=b+(T<<11&4294967295|T>>>21),T=A+(R^b^x)+I[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=x+(A^R^b)+I[6]+76029189&4294967295,x=A+(T<<23&4294967295|T>>>9),T=b+(x^A^R)+I[9]+3654602809&4294967295,b=x+(T<<4&4294967295|T>>>28),T=R+(b^x^A)+I[12]+3873151461&4294967295,R=b+(T<<11&4294967295|T>>>21),T=A+(R^b^x)+I[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=x+(A^R^b)+I[2]+3299628645&4294967295,x=A+(T<<23&4294967295|T>>>9),T=b+(A^(x|~R))+I[0]+4096336452&4294967295,b=x+(T<<6&4294967295|T>>>26),T=R+(x^(b|~A))+I[7]+1126891415&4294967295,R=b+(T<<10&4294967295|T>>>22),T=A+(b^(R|~x))+I[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=x+(R^(A|~b))+I[5]+4237533241&4294967295,x=A+(T<<21&4294967295|T>>>11),T=b+(A^(x|~R))+I[12]+1700485571&4294967295,b=x+(T<<6&4294967295|T>>>26),T=R+(x^(b|~A))+I[3]+2399980690&4294967295,R=b+(T<<10&4294967295|T>>>22),T=A+(b^(R|~x))+I[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=x+(R^(A|~b))+I[1]+2240044497&4294967295,x=A+(T<<21&4294967295|T>>>11),T=b+(A^(x|~R))+I[8]+1873313359&4294967295,b=x+(T<<6&4294967295|T>>>26),T=R+(x^(b|~A))+I[15]+4264355552&4294967295,R=b+(T<<10&4294967295|T>>>22),T=A+(b^(R|~x))+I[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=x+(R^(A|~b))+I[13]+1309151649&4294967295,x=A+(T<<21&4294967295|T>>>11),T=b+(A^(x|~R))+I[4]+4149444226&4294967295,b=x+(T<<6&4294967295|T>>>26),T=R+(x^(b|~A))+I[11]+3174756917&4294967295,R=b+(T<<10&4294967295|T>>>22),T=A+(b^(R|~x))+I[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=x+(R^(A|~b))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+b&4294967295,E.g[1]=E.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+R&4294967295}s.prototype.u=function(E,b){b===void 0&&(b=E.length);for(var x=b-this.blockSize,I=this.B,A=this.h,R=0;R<b;){if(A==0)for(;R<=x;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<b;)if(I[A++]=E.charCodeAt(R++),A==this.blockSize){i(this,I),A=0;break}}else for(;R<b;)if(I[A++]=E[R++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=b},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var b=1;b<E.length-8;++b)E[b]=0;var x=8*this.o;for(b=E.length-8;b<E.length;++b)E[b]=x&255,x/=256;for(this.u(E),E=Array(16),b=x=0;4>b;++b)for(var I=0;32>I;I+=8)E[x++]=this.g[b]>>>I&255;return E};function r(E,b){var x=a;return Object.prototype.hasOwnProperty.call(x,E)?x[E]:x[E]=b(E)}function o(E,b){this.h=b;for(var x=[],I=!0,A=E.length-1;0<=A;A--){var R=E[A]|0;I&&R==b||(x[A]=R,I=!1)}this.g=x}var a={};function l(E){return-128<=E&&128>E?r(E,function(b){return new o([b|0],0>b?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return d;if(0>E)return w(u(-E));for(var b=[],x=1,I=0;E>=x;I++)b[I]=E/x|0,x*=4294967296;return new o(b,0)}function h(E,b){if(E.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(E.charAt(0)=="-")return w(h(E.substring(1),b));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=u(Math.pow(b,8)),I=d,A=0;A<E.length;A+=8){var R=Math.min(8,E.length-A),T=parseInt(E.substring(A,A+R),b);8>R?(R=u(Math.pow(b,R)),I=I.j(R).add(u(T))):(I=I.j(x),I=I.add(u(T)))}return I}var d=l(0),p=l(1),m=l(16777216);n=o.prototype,n.m=function(){if(v(this))return-w(this).m();for(var E=0,b=1,x=0;x<this.g.length;x++){var I=this.i(x);E+=(0<=I?I:4294967296+I)*b,b*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(_(this))return"0";if(v(this))return"-"+w(this).toString(E);for(var b=u(Math.pow(E,6)),x=this,I="";;){var A=D(x,b).g;x=S(x,A.j(b));var R=((0<x.g.length?x.g[0]:x.h)>>>0).toString(E);if(x=A,_(x))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function _(E){if(E.h!=0)return!1;for(var b=0;b<E.g.length;b++)if(E.g[b]!=0)return!1;return!0}function v(E){return E.h==-1}n.l=function(E){return E=S(this,E),v(E)?-1:_(E)?0:1};function w(E){for(var b=E.g.length,x=[],I=0;I<b;I++)x[I]=~E.g[I];return new o(x,~E.h).add(p)}n.abs=function(){return v(this)?w(this):this},n.add=function(E){for(var b=Math.max(this.g.length,E.g.length),x=[],I=0,A=0;A<=b;A++){var R=I+(this.i(A)&65535)+(E.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);I=T>>>16,R&=65535,T&=65535,x[A]=T<<16|R}return new o(x,x[x.length-1]&-2147483648?-1:0)};function S(E,b){return E.add(w(b))}n.j=function(E){if(_(this)||_(E))return d;if(v(this))return v(E)?w(this).j(w(E)):w(w(this).j(E));if(v(E))return w(this.j(w(E)));if(0>this.l(m)&&0>E.l(m))return u(this.m()*E.m());for(var b=this.g.length+E.g.length,x=[],I=0;I<2*b;I++)x[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<E.g.length;A++){var R=this.i(I)>>>16,T=this.i(I)&65535,vt=E.i(A)>>>16,Z=E.i(A)&65535;x[2*I+2*A]+=T*Z,k(x,2*I+2*A),x[2*I+2*A+1]+=R*Z,k(x,2*I+2*A+1),x[2*I+2*A+1]+=T*vt,k(x,2*I+2*A+1),x[2*I+2*A+2]+=R*vt,k(x,2*I+2*A+2)}for(I=0;I<b;I++)x[I]=x[2*I+1]<<16|x[2*I];for(I=b;I<2*b;I++)x[I]=0;return new o(x,0)};function k(E,b){for(;(E[b]&65535)!=E[b];)E[b+1]+=E[b]>>>16,E[b]&=65535,b++}function C(E,b){this.g=E,this.h=b}function D(E,b){if(_(b))throw Error("division by zero");if(_(E))return new C(d,d);if(v(E))return b=D(w(E),b),new C(w(b.g),w(b.h));if(v(b))return b=D(E,w(b)),new C(w(b.g),b.h);if(30<E.g.length){if(v(E)||v(b))throw Error("slowDivide_ only works with positive integers.");for(var x=p,I=b;0>=I.l(E);)x=O(x),I=O(I);var A=N(x,1),R=N(I,1);for(I=N(I,2),x=N(x,2);!_(I);){var T=R.add(I);0>=T.l(E)&&(A=A.add(x),R=T),I=N(I,1),x=N(x,1)}return b=S(E,A.j(b)),new C(A,b)}for(A=d;0<=E.l(b);){for(x=Math.max(1,Math.floor(E.m()/b.m())),I=Math.ceil(Math.log(x)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=u(x),T=R.j(b);v(T)||0<T.l(E);)x-=I,R=u(x),T=R.j(b);_(R)&&(R=p),A=A.add(R),E=S(E,T)}return new C(A,E)}n.A=function(E){return D(this,E).h},n.and=function(E){for(var b=Math.max(this.g.length,E.g.length),x=[],I=0;I<b;I++)x[I]=this.i(I)&E.i(I);return new o(x,this.h&E.h)},n.or=function(E){for(var b=Math.max(this.g.length,E.g.length),x=[],I=0;I<b;I++)x[I]=this.i(I)|E.i(I);return new o(x,this.h|E.h)},n.xor=function(E){for(var b=Math.max(this.g.length,E.g.length),x=[],I=0;I<b;I++)x[I]=this.i(I)^E.i(I);return new o(x,this.h^E.h)};function O(E){for(var b=E.g.length+1,x=[],I=0;I<b;I++)x[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(x,E.h)}function N(E,b){var x=b>>5;b%=32;for(var I=E.g.length-x,A=[],R=0;R<I;R++)A[R]=0<b?E.i(R+x)>>>b|E.i(R+x+1)<<32-b:E.i(R+x);return new o(A,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,gg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,is=o}).apply(typeof hd<"u"?hd:typeof self<"u"?self:typeof window<"u"?window:{});var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mg,Ci,_g,xo,ec,yg,vg,bg;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,g){return c==Array.prototype||c==Object.prototype||(c[f]=g.value),c};function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zr=="object"&&Zr];for(var f=0;f<c.length;++f){var g=c[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=e(this);function i(c,f){if(f)t:{var g=s;c=c.split(".");for(var y=0;y<c.length-1;y++){var P=c[y];if(!(P in g))break t;g=g[P]}c=c[c.length-1],y=g[c],f=f(y),f!=y&&f!=null&&t(g,c,{configurable:!0,writable:!0,value:f})}}function r(c,f){c instanceof String&&(c+="");var g=0,y=!1,P={next:function(){if(!y&&g<c.length){var M=g++;return{value:f(M,c[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(c){return c||function(){return r(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,g){return c.call.apply(c.bind,arguments)}function d(c,f,g){if(!c)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),c.apply(f,P)}}return function(){return c.apply(f,arguments)}}function p(c,f,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function m(c,f){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function _(c,f){function g(){}g.prototype=f.prototype,c.aa=f.prototype,c.prototype=new g,c.prototype.constructor=c,c.Qb=function(y,P,M){for(var F=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)F[ct-2]=arguments[ct];return f.prototype[P].apply(y,F)}}function v(c){const f=c.length;if(0<f){const g=Array(f);for(let y=0;y<f;y++)g[y]=c[y];return g}return[]}function w(c,f){for(let g=1;g<arguments.length;g++){const y=arguments[g];if(l(y)){const P=c.length||0,M=y.length||0;c.length=P+M;for(let F=0;F<M;F++)c[P+F]=y[F]}else c.push(y)}}class S{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function k(c){return/^[\s\xa0]*$/.test(c)}function C(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function D(c){return D[" "](c),c}D[" "]=function(){};var O=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function N(c,f,g){for(const y in c)f.call(g,c[y],y,c)}function E(c,f){for(const g in c)f.call(void 0,c[g],g,c)}function b(c){const f={};for(const g in c)f[g]=c[g];return f}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,f){let g,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(g in y)c[g]=y[g];for(let M=0;M<x.length;M++)g=x[M],Object.prototype.hasOwnProperty.call(y,g)&&(c[g]=y[g])}}function A(c){var f=1;c=c.split(":");const g=[];for(;0<f&&c.length;)g.push(c.shift()),f--;return c.length&&g.push(c.join(":")),g}function R(c){a.setTimeout(()=>{throw c},0)}function T(){var c=Pt;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class vt{constructor(){this.h=this.g=null}add(f,g){const y=Z.get();y.set(f,g),this.h?this.h.next=y:this.g=y,this.h=y}}var Z=new S(()=>new ut,c=>c.reset());class ut{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let lt,$t=!1,Pt=new vt,je=()=>{const c=a.Promise.resolve(void 0);lt=()=>{c.then(xs)}};var xs=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(g){R(g)}var f=Z;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}$t=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Et(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var He=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch{}return c}();function Ee(c,f){if(Et.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var g=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(O){t:{try{D(f.nodeName);var P=!0;break t}catch{}P=!1}P||(f=null)}}else g=="mouseover"?f=c.fromElement:g=="mouseout"&&(f=c.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:We[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ee.aa.h.call(this)}}_(Ee,Et);var We={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Or="closure_listenable_"+(1e6*Math.random()|0),Ny=0;function Vy(c,f,g,y,P){this.listener=c,this.proxy=null,this.src=f,this.type=g,this.capture=!!y,this.ha=P,this.key=++Ny,this.da=this.fa=!1}function Lr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Nr(c){this.src=c,this.g={},this.h=0}Nr.prototype.add=function(c,f,g,y,P){var M=c.toString();c=this.g[M],c||(c=this.g[M]=[],this.h++);var F=qa(c,f,y,P);return-1<F?(f=c[F],g||(f.fa=!1)):(f=new Vy(f,this.src,M,!!y,P),f.fa=g,c.push(f)),f};function Wa(c,f){var g=f.type;if(g in c.g){var y=c.g[g],P=Array.prototype.indexOf.call(y,f,void 0),M;(M=0<=P)&&Array.prototype.splice.call(y,P,1),M&&(Lr(f),c.g[g].length==0&&(delete c.g[g],c.h--))}}function qa(c,f,g,y){for(var P=0;P<c.length;++P){var M=c[P];if(!M.da&&M.listener==f&&M.capture==!!g&&M.ha==y)return P}return-1}var Ga="closure_lm_"+(1e6*Math.random()|0),Ka={};function nh(c,f,g,y,P){if(Array.isArray(f)){for(var M=0;M<f.length;M++)nh(c,f[M],g,y,P);return null}return g=rh(g),c&&c[Or]?c.K(f,g,u(y)?!!y.capture:!1,P):Fy(c,f,g,!1,y,P)}function Fy(c,f,g,y,P,M){if(!f)throw Error("Invalid event type");var F=u(P)?!!P.capture:!!P,ct=Xa(c);if(ct||(c[Ga]=ct=new Nr(c)),g=ct.add(f,g,y,F,M),g.proxy)return g;if(y=Uy(),g.proxy=y,y.src=c,y.listener=g,c.addEventListener)He||(P=F),P===void 0&&(P=!1),c.addEventListener(f.toString(),y,P);else if(c.attachEvent)c.attachEvent(ih(f.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Uy(){function c(g){return f.call(c.src,c.listener,g)}const f=By;return c}function sh(c,f,g,y,P){if(Array.isArray(f))for(var M=0;M<f.length;M++)sh(c,f[M],g,y,P);else y=u(y)?!!y.capture:!!y,g=rh(g),c&&c[Or]?(c=c.i,f=String(f).toString(),f in c.g&&(M=c.g[f],g=qa(M,g,y,P),-1<g&&(Lr(M[g]),Array.prototype.splice.call(M,g,1),M.length==0&&(delete c.g[f],c.h--)))):c&&(c=Xa(c))&&(f=c.g[f.toString()],c=-1,f&&(c=qa(f,g,y,P)),(g=-1<c?f[c]:null)&&Ya(g))}function Ya(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[Or])Wa(f.i,c);else{var g=c.type,y=c.proxy;f.removeEventListener?f.removeEventListener(g,y,c.capture):f.detachEvent?f.detachEvent(ih(g),y):f.addListener&&f.removeListener&&f.removeListener(y),(g=Xa(f))?(Wa(g,c),g.h==0&&(g.src=null,f[Ga]=null)):Lr(c)}}}function ih(c){return c in Ka?Ka[c]:Ka[c]="on"+c}function By(c,f){if(c.da)c=!0;else{f=new Ee(f,this);var g=c.listener,y=c.ha||c.src;c.fa&&Ya(c),c=g.call(y,f)}return c}function Xa(c){return c=c[Ga],c instanceof Nr?c:null}var Qa="__closure_events_fn_"+(1e9*Math.random()>>>0);function rh(c){return typeof c=="function"?c:(c[Qa]||(c[Qa]=function(f){return c.handleEvent(f)}),c[Qa])}function Gt(){ie.call(this),this.i=new Nr(this),this.M=this,this.F=null}_(Gt,ie),Gt.prototype[Or]=!0,Gt.prototype.removeEventListener=function(c,f,g,y){sh(this,c,f,g,y)};function re(c,f){var g,y=c.F;if(y)for(g=[];y;y=y.F)g.push(y);if(c=c.M,y=f.type||f,typeof f=="string")f=new Et(f,c);else if(f instanceof Et)f.target=f.target||c;else{var P=f;f=new Et(y,c),I(f,P)}if(P=!0,g)for(var M=g.length-1;0<=M;M--){var F=f.g=g[M];P=Vr(F,y,!0,f)&&P}if(F=f.g=c,P=Vr(F,y,!0,f)&&P,P=Vr(F,y,!1,f)&&P,g)for(M=0;M<g.length;M++)F=f.g=g[M],P=Vr(F,y,!1,f)&&P}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var g=c.g[f],y=0;y<g.length;y++)Lr(g[y]);delete c.g[f],c.h--}}this.F=null},Gt.prototype.K=function(c,f,g,y){return this.i.add(String(c),f,!1,g,y)},Gt.prototype.L=function(c,f,g,y){return this.i.add(String(c),f,!0,g,y)};function Vr(c,f,g,y){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var P=!0,M=0;M<f.length;++M){var F=f[M];if(F&&!F.da&&F.capture==g){var ct=F.listener,zt=F.ha||F.src;F.fa&&Wa(c.i,F),P=ct.call(zt,y)!==!1&&P}}return P&&!y.defaultPrevented}function oh(c,f,g){if(typeof c=="function")g&&(c=p(c,g));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function ah(c){c.g=oh(()=>{c.g=null,c.i&&(c.i=!1,ah(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class $y extends ie{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ah(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(c){ie.call(this),this.h=c,this.g={}}_(oi,ie);var lh=[];function ch(c){N(c.g,function(f,g){this.g.hasOwnProperty(g)&&Ya(f)},c),c.g={}}oi.prototype.N=function(){oi.aa.N.call(this),ch(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ja=a.JSON.stringify,zy=a.JSON.parse,jy=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Za(){}Za.prototype.h=null;function uh(c){return c.h||(c.h=c.i())}function hh(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tl(){Et.call(this,"d")}_(tl,Et);function el(){Et.call(this,"c")}_(el,Et);var Hn={},dh=null;function Fr(){return dh=dh||new Gt}Hn.La="serverreachability";function fh(c){Et.call(this,Hn.La,c)}_(fh,Et);function li(c){const f=Fr();re(f,new fh(f))}Hn.STAT_EVENT="statevent";function ph(c,f){Et.call(this,Hn.STAT_EVENT,c),this.stat=f}_(ph,Et);function oe(c){const f=Fr();re(f,new ph(f,c))}Hn.Ma="timingevent";function gh(c,f){Et.call(this,Hn.Ma,c),this.size=f}_(gh,Et);function ci(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function ui(){this.g=!0}ui.prototype.xa=function(){this.g=!1};function Hy(c,f,g,y,P,M){c.info(function(){if(c.g)if(M)for(var F="",ct=M.split("&"),zt=0;zt<ct.length;zt++){var et=ct[zt].split("=");if(1<et.length){var Kt=et[0];et=et[1];var Yt=Kt.split("_");F=2<=Yt.length&&Yt[1]=="type"?F+(Kt+"="+et+"&"):F+(Kt+"=redacted&")}}else F=null;else F=M;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+f+`
`+g+`
`+F})}function Wy(c,f,g,y,P,M,F){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+f+`
`+g+`
`+M+" "+F})}function Es(c,f,g,y){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+Gy(c,g)+(y?" "+y:"")})}function qy(c,f){c.info(function(){return"TIMEOUT: "+f})}ui.prototype.info=function(){};function Gy(c,f){if(!c.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(c=0;c<g.length;c++)if(Array.isArray(g[c])){var y=g[c];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var M=P[0];if(M!="noop"&&M!="stop"&&M!="close")for(var F=1;F<P.length;F++)P[F]=""}}}}return Ja(g)}catch{return f}}var Ur={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nl;function Br(){}_(Br,Za),Br.prototype.g=function(){return new XMLHttpRequest},Br.prototype.i=function(){return{}},nl=new Br;function pn(c,f,g,y){this.j=c,this.i=f,this.l=g,this.R=y||1,this.U=new oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _h}function _h(){this.i=null,this.g="",this.h=!1}var yh={},sl={};function il(c,f,g){c.L=1,c.v=Hr(qe(f)),c.m=g,c.P=!0,vh(c,null)}function vh(c,f){c.F=Date.now(),$r(c),c.A=qe(c.v);var g=c.A,y=c.R;Array.isArray(y)||(y=[String(y)]),Mh(g.i,"t",y),c.C=0,g=c.j.J,c.h=new _h,c.g=Qh(c.j,g?f:null,!c.m),0<c.O&&(c.M=new $y(p(c.Y,c,c.g),c.O)),f=c.U,g=c.g,y=c.ca;var P="readystatechange";Array.isArray(P)||(P&&(lh[0]=P.toString()),P=lh);for(var M=0;M<P.length;M++){var F=nh(g,P[M],y||f.handleEvent,!1,f.h||f);if(!F)break;f.g[F.key]=F}f=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),li(),Hy(c.i,c.u,c.A,c.l,c.R,c.m)}pn.prototype.ca=function(c){c=c.target;const f=this.M;f&&Ge(c)==3?f.j():this.Y(c)},pn.prototype.Y=function(c){try{if(c==this.g)t:{const Yt=Ge(this.g);var f=this.g.Ba();const As=this.g.Z();if(!(3>Yt)&&(Yt!=3||this.g&&(this.h.h||this.g.oa()||Bh(this.g)))){this.J||Yt!=4||f==7||(f==8||0>=As?li(3):li(2)),rl(this);var g=this.g.Z();this.X=g;e:if(bh(this)){var y=Bh(this.g);c="";var P=y.length,M=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wn(this),hi(this);var F="";break e}this.h.i=new a.TextDecoder}for(f=0;f<P;f++)this.h.h=!0,c+=this.h.i.decode(y[f],{stream:!(M&&f==P-1)});y.length=0,this.h.g+=c,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=g==200,Wy(this.i,this.u,this.A,this.l,this.R,Yt,g),this.o){if(this.T&&!this.K){e:{if(this.g){var ct,zt=this.g;if((ct=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(ct)){var et=ct;break e}}et=null}if(g=et)Es(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ol(this,g);else{this.o=!1,this.s=3,oe(12),Wn(this),hi(this);break t}}if(this.P){g=!0;let Te;for(;!this.J&&this.C<F.length;)if(Te=Ky(this,F),Te==sl){Yt==4&&(this.s=4,oe(14),g=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==yh){this.s=4,oe(15),Es(this.i,this.l,F,"[Invalid Chunk]"),g=!1;break}else Es(this.i,this.l,Te,null),ol(this,Te);if(bh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Yt!=4||F.length!=0||this.h.h||(this.s=1,oe(16),g=!1),this.o=this.o&&g,!g)Es(this.i,this.l,F,"[Invalid Chunked Response]"),Wn(this),hi(this);else if(0<F.length&&!this.W){this.W=!0;var Kt=this.j;Kt.g==this&&Kt.ba&&!Kt.M&&(Kt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),dl(Kt),Kt.M=!0,oe(11))}}else Es(this.i,this.l,F,null),ol(this,F);Yt==4&&Wn(this),this.o&&!this.J&&(Yt==4?Gh(this.j,this):(this.o=!1,$r(this)))}else hv(this.g),g==400&&0<F.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),Wn(this),hi(this)}}}catch{}finally{}};function bh(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ky(c,f){var g=c.C,y=f.indexOf(`
`,g);return y==-1?sl:(g=Number(f.substring(g,y)),isNaN(g)?yh:(y+=1,y+g>f.length?sl:(f=f.slice(y,y+g),c.C=y+g,f)))}pn.prototype.cancel=function(){this.J=!0,Wn(this)};function $r(c){c.S=Date.now()+c.I,wh(c,c.I)}function wh(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ci(p(c.ba,c),f)}function rl(c){c.B&&(a.clearTimeout(c.B),c.B=null)}pn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(qy(this.i,this.A),this.L!=2&&(li(),oe(17)),Wn(this),this.s=2,hi(this)):wh(this,this.S-c)};function hi(c){c.j.G==0||c.J||Gh(c.j,c)}function Wn(c){rl(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,ch(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function ol(c,f){try{var g=c.j;if(g.G!=0&&(g.g==c||al(g.h,c))){if(!c.K&&al(g.h,c)&&g.G==3){try{var y=g.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<c.F)Xr(g),Kr(g);else break t;hl(g),oe(18)}}else g.za=P[1],0<g.za-g.T&&37500>P[2]&&g.F&&g.v==0&&!g.C&&(g.C=ci(p(g.Za,g),6e3));if(1>=Th(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Gn(g,11)}else if((c.K||g.g==c)&&Xr(g),!k(f))for(P=g.Da.g.parse(f),f=0;f<P.length;f++){let et=P[f];if(g.T=et[0],et=et[1],g.G==2)if(et[0]=="c"){g.K=et[1],g.ia=et[2];const Kt=et[3];Kt!=null&&(g.la=Kt,g.j.info("VER="+g.la));const Yt=et[4];Yt!=null&&(g.Aa=Yt,g.j.info("SVER="+g.Aa));const As=et[5];As!=null&&typeof As=="number"&&0<As&&(y=1.5*As,g.L=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const Te=c.g;if(Te){const Jr=Te.g?Te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jr){var M=y.h;M.g||Jr.indexOf("spdy")==-1&&Jr.indexOf("quic")==-1&&Jr.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ll(M,M.h),M.h=null))}if(y.D){const fl=Te.g?Te.g.getResponseHeader("X-HTTP-Session-Id"):null;fl&&(y.ya=fl,ft(y.I,y.D,fl))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-c.F,g.j.info("Handshake RTT: "+g.R+"ms")),y=g;var F=c;if(y.qa=Xh(y,y.J?y.ia:null,y.W),F.K){Ih(y.h,F);var ct=F,zt=y.L;zt&&(ct.I=zt),ct.B&&(rl(ct),$r(ct)),y.g=F}else Wh(y);0<g.i.length&&Yr(g)}else et[0]!="stop"&&et[0]!="close"||Gn(g,7);else g.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Gn(g,7):ul(g):et[0]!="noop"&&g.l&&g.l.ta(et),g.v=0)}}li(4)}catch{}}var Yy=class{constructor(c,f){this.g=c,this.map=f}};function xh(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Th(c){return c.h?1:c.g?c.g.size:0}function al(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function ll(c,f){c.g?c.g.add(f):c.h=f}function Ih(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}xh.prototype.cancel=function(){if(this.i=Ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ah(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const g of c.g.values())f=f.concat(g.D);return f}return v(c.i)}function Xy(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],g=c.length,y=0;y<g;y++)f.push(c[y]);return f}f=[],g=0;for(y in c)f[g++]=c[y];return f}function Qy(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var g=0;g<c;g++)f.push(g);return f}f=[],g=0;for(const y in c)f[g++]=y;return f}}}function Sh(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var g=Qy(c),y=Xy(c),P=y.length,M=0;M<P;M++)f.call(void 0,y[M],g&&g[M],c)}var Rh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jy(c,f){if(c){c=c.split("&");for(var g=0;g<c.length;g++){var y=c[g].indexOf("="),P=null;if(0<=y){var M=c[g].substring(0,y);P=c[g].substring(y+1)}else M=c[g];f(M,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function qn(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof qn){this.h=c.h,zr(this,c.j),this.o=c.o,this.g=c.g,jr(this,c.s),this.l=c.l;var f=c.i,g=new pi;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),kh(this,g),this.m=c.m}else c&&(f=String(c).match(Rh))?(this.h=!1,zr(this,f[1]||"",!0),this.o=di(f[2]||""),this.g=di(f[3]||"",!0),jr(this,f[4]),this.l=di(f[5]||"",!0),kh(this,f[6]||"",!0),this.m=di(f[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}qn.prototype.toString=function(){var c=[],f=this.j;f&&c.push(fi(f,Ph,!0),":");var g=this.g;return(g||f=="file")&&(c.push("//"),(f=this.o)&&c.push(fi(f,Ph,!0),"@"),c.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&c.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(fi(g,g.charAt(0)=="/"?ev:tv,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",fi(g,sv)),c.join("")};function qe(c){return new qn(c)}function zr(c,f,g){c.j=g?di(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function jr(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function kh(c,f,g){f instanceof pi?(c.i=f,iv(c.i,c.h)):(g||(f=fi(f,nv)),c.i=new pi(f,c.h))}function ft(c,f,g){c.i.set(f,g)}function Hr(c){return ft(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function di(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function fi(c,f,g){return typeof c=="string"?(c=encodeURI(c).replace(f,Zy),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Zy(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ph=/[#\/\?@]/g,tv=/[#\?:]/g,ev=/[#\?]/g,nv=/[#\?@]/g,sv=/#/g;function pi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function gn(c){c.g||(c.g=new Map,c.h=0,c.i&&Jy(c.i,function(f,g){c.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=pi.prototype,n.add=function(c,f){gn(this),this.i=null,c=Ts(this,c);var g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(f),this.h+=1,this};function Ch(c,f){gn(c),f=Ts(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Dh(c,f){return gn(c),f=Ts(c,f),c.g.has(f)}n.forEach=function(c,f){gn(this),this.g.forEach(function(g,y){g.forEach(function(P){c.call(f,P,y,this)},this)},this)},n.na=function(){gn(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let y=0;y<f.length;y++){const P=c[y];for(let M=0;M<P.length;M++)g.push(f[y])}return g},n.V=function(c){gn(this);let f=[];if(typeof c=="string")Dh(this,c)&&(f=f.concat(this.g.get(Ts(this,c))));else{c=Array.from(this.g.values());for(let g=0;g<c.length;g++)f=f.concat(c[g])}return f},n.set=function(c,f){return gn(this),this.i=null,c=Ts(this,c),Dh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},n.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Mh(c,f,g){Ch(c,f),0<g.length&&(c.i=null,c.g.set(Ts(c,f),v(g)),c.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var y=f[g];const M=encodeURIComponent(String(y)),F=this.V(y);for(y=0;y<F.length;y++){var P=M;F[y]!==""&&(P+="="+encodeURIComponent(String(F[y]))),c.push(P)}}return this.i=c.join("&")};function Ts(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function iv(c,f){f&&!c.j&&(gn(c),c.i=null,c.g.forEach(function(g,y){var P=y.toLowerCase();y!=P&&(Ch(this,y),Mh(this,P,g))},c)),c.j=f}function rv(c,f){const g=new ui;if(a.Image){const y=new Image;y.onload=m(mn,g,"TestLoadImage: loaded",!0,f,y),y.onerror=m(mn,g,"TestLoadImage: error",!1,f,y),y.onabort=m(mn,g,"TestLoadImage: abort",!1,f,y),y.ontimeout=m(mn,g,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else f(!1)}function ov(c,f){const g=new ui,y=new AbortController,P=setTimeout(()=>{y.abort(),mn(g,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:y.signal}).then(M=>{clearTimeout(P),M.ok?mn(g,"TestPingServer: ok",!0,f):mn(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(P),mn(g,"TestPingServer: error",!1,f)})}function mn(c,f,g,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(g)}catch{}}function av(){this.g=new jy}function lv(c,f,g){const y=g||"";try{Sh(c,function(P,M){let F=P;u(P)&&(F=Ja(P)),f.push(y+M+"="+encodeURIComponent(F))})}catch(P){throw f.push(y+"type="+encodeURIComponent("_badmap")),P}}function Wr(c){this.l=c.Ub||null,this.j=c.eb||!1}_(Wr,Za),Wr.prototype.g=function(){return new qr(this.l,this.j)},Wr.prototype.i=function(c){return function(){return c}}({});function qr(c,f){Gt.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(qr,Gt),n=qr.prototype,n.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,mi(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oh(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oh(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?gi(this):mi(this),this.readyState==3&&Oh(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,gi(this))},n.Qa=function(c){this.g&&(this.response=c,gi(this))},n.ga=function(){this.g&&gi(this)};function gi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,mi(c)}n.setRequestHeader=function(c,f){this.u.append(c,f)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=f.next();return c.join(`\r
`)};function mi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Lh(c){let f="";return N(c,function(g,y){f+=y,f+=":",f+=g,f+=`\r
`}),f}function cl(c,f,g){t:{for(y in g){var y=!1;break t}y=!0}y||(g=Lh(g),typeof c=="string"?g!=null&&encodeURIComponent(String(g)):ft(c,f,g))}function Tt(c){Gt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Tt,Gt);var cv=/^https?$/i,uv=["POST","PUT"];n=Tt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,f,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nl.g(),this.v=this.o?uh(this.o):uh(nl),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(M){Nh(this,M);return}if(c=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)g.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())g.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(M=>M.toLowerCase()=="content-type"),P=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(uv,f,void 0))||y||P||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,F]of g)this.g.setRequestHeader(M,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uh(this),this.u=!0,this.g.send(c),this.u=!1}catch(M){Nh(this,M)}};function Nh(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Vh(c),Gr(c)}function Vh(c){c.A||(c.A=!0,re(c,"complete"),re(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,re(this,"complete"),re(this,"abort"),Gr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gr(this,!0)),Tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Fh(this):this.bb())},n.bb=function(){Fh(this)};function Fh(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Ge(c)!=4||c.Z()!=2)){if(c.u&&Ge(c)==4)oh(c.Ea,0,c);else if(re(c,"readystatechange"),Ge(c)==4){c.h=!1;try{const F=c.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var g;if(!(g=f)){var y;if(y=F===0){var P=String(c.D).match(Rh)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),y=!cv.test(P?P.toLowerCase():"")}g=y}if(g)re(c,"complete"),re(c,"success");else{c.m=6;try{var M=2<Ge(c)?c.g.statusText:""}catch{M=""}c.l=M+" ["+c.Z()+"]",Vh(c)}}finally{Gr(c)}}}}function Gr(c,f){if(c.g){Uh(c);const g=c.g,y=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||re(c,"ready");try{g.onreadystatechange=y}catch{}}}function Uh(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Ge(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),zy(f)}};function Bh(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function hv(c){const f={};c=(c.g&&2<=Ge(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(k(c[y]))continue;var g=A(c[y]);const P=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const M=f[P]||[];f[P]=M,M.push(g)}E(f,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _i(c,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||f}function $h(c){this.Aa=0,this.i=[],this.j=new ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_i("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_i("baseRetryDelayMs",5e3,c),this.cb=_i("retryDelaySeedMs",1e4,c),this.Wa=_i("forwardChannelMaxRetries",2,c),this.wa=_i("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new xh(c&&c.concurrentRequestLimit),this.Da=new av,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=$h.prototype,n.la=8,n.G=1,n.connect=function(c,f,g,y){oe(0),this.W=c,this.H=f||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.I=Xh(this,null,this.W),Yr(this)};function ul(c){if(zh(c),c.G==3){var f=c.U++,g=qe(c.I);if(ft(g,"SID",c.K),ft(g,"RID",f),ft(g,"TYPE","terminate"),yi(c,g),f=new pn(c,c.j,f),f.L=2,f.v=Hr(qe(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=Qh(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$r(f)}Yh(c)}function Kr(c){c.g&&(dl(c),c.g.cancel(),c.g=null)}function zh(c){Kr(c),c.u&&(a.clearTimeout(c.u),c.u=null),Xr(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Yr(c){if(!Eh(c.h)&&!c.s){c.s=!0;var f=c.Ga;lt||je(),$t||(lt(),$t=!0),Pt.add(f,c),c.B=0}}function dv(c,f){return Th(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ci(p(c.Ga,c,f),Kh(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const P=new pn(this,this.j,c);let M=this.o;if(this.S&&(M?(M=b(M),I(M,this.S)):M=this.S),this.m!==null||this.O||(P.H=M,M=null),this.P)t:{for(var f=0,g=0;g<this.i.length;g++){e:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break e}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=g;break t}if(f===4096||g===this.i.length-1){f=g+1;break t}}f=1e3}else f=1e3;f=Hh(this,P,f),g=qe(this.I),ft(g,"RID",c),ft(g,"CVER",22),this.D&&ft(g,"X-HTTP-Session-Id",this.D),yi(this,g),M&&(this.O?f="headers="+encodeURIComponent(String(Lh(M)))+"&"+f:this.m&&cl(g,this.m,M)),ll(this.h,P),this.Ua&&ft(g,"TYPE","init"),this.P?(ft(g,"$req",f),ft(g,"SID","null"),P.T=!0,il(P,g,null)):il(P,g,f),this.G=2}}else this.G==3&&(c?jh(this,c):this.i.length==0||Eh(this.h)||jh(this))};function jh(c,f){var g;f?g=f.l:g=c.U++;const y=qe(c.I);ft(y,"SID",c.K),ft(y,"RID",g),ft(y,"AID",c.T),yi(c,y),c.m&&c.o&&cl(y,c.m,c.o),g=new pn(c,c.j,g,c.B+1),c.m===null&&(g.H=c.o),f&&(c.i=f.D.concat(c.i)),f=Hh(c,g,1e3),g.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ll(c.h,g),il(g,y,f)}function yi(c,f){c.H&&N(c.H,function(g,y){ft(f,y,g)}),c.l&&Sh({},function(g,y){ft(f,y,g)})}function Hh(c,f,g){g=Math.min(c.i.length,g);var y=c.l?p(c.l.Na,c.l,c):null;t:{var P=c.i;let M=-1;for(;;){const F=["count="+g];M==-1?0<g?(M=P[0].g,F.push("ofs="+M)):M=0:F.push("ofs="+M);let ct=!0;for(let zt=0;zt<g;zt++){let et=P[zt].g;const Kt=P[zt].map;if(et-=M,0>et)M=Math.max(0,P[zt].g-100),ct=!1;else try{lv(Kt,F,"req"+et+"_")}catch{y&&y(Kt)}}if(ct){y=F.join("&");break t}}}return c=c.i.splice(0,g),f.D=c,y}function Wh(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;lt||je(),$t||(lt(),$t=!0),Pt.add(f,c),c.v=0}}function hl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ci(p(c.Fa,c),Kh(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,qh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ci(p(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),Kr(this),qh(this))};function dl(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function qh(c){c.g=new pn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=qe(c.qa);ft(f,"RID","rpc"),ft(f,"SID",c.K),ft(f,"AID",c.T),ft(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&ft(f,"TO",c.ja),ft(f,"TYPE","xmlhttp"),yi(c,f),c.m&&c.o&&cl(f,c.m,c.o),c.L&&(c.g.I=c.L);var g=c.g;c=c.ia,g.L=1,g.v=Hr(qe(f)),g.m=null,g.P=!0,vh(g,c)}n.Za=function(){this.C!=null&&(this.C=null,Kr(this),hl(this),oe(19))};function Xr(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Gh(c,f){var g=null;if(c.g==f){Xr(c),dl(c),c.g=null;var y=2}else if(al(c.h,f))g=f.D,Ih(c.h,f),y=1;else return;if(c.G!=0){if(f.o)if(y==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var P=c.B;y=Fr(),re(y,new gh(y,g)),Yr(c)}else Wh(c);else if(P=f.s,P==3||P==0&&0<f.X||!(y==1&&dv(c,f)||y==2&&hl(c)))switch(g&&0<g.length&&(f=c.h,f.i=f.i.concat(g)),P){case 1:Gn(c,5);break;case 4:Gn(c,10);break;case 3:Gn(c,6);break;default:Gn(c,2)}}}function Kh(c,f){let g=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(g*=2),g*f}function Gn(c,f){if(c.j.info("Error code "+f),f==2){var g=p(c.fb,c),y=c.Xa;const P=!y;y=new qn(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||zr(y,"https"),Hr(y),P?rv(y.toString(),g):ov(y.toString(),g)}else oe(2);c.G=0,c.l&&c.l.sa(f),Yh(c),zh(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function Yh(c){if(c.G=0,c.ka=[],c.l){const f=Ah(c.h);(f.length!=0||c.i.length!=0)&&(w(c.ka,f),w(c.ka,c.i),c.h.i.length=0,v(c.i),c.i.length=0),c.l.ra()}}function Xh(c,f,g){var y=g instanceof qn?qe(g):new qn(g);if(y.g!="")f&&(y.g=f+"."+y.g),jr(y,y.s);else{var P=a.location;y=P.protocol,f=f?f+"."+P.hostname:P.hostname,P=+P.port;var M=new qn(null);y&&zr(M,y),f&&(M.g=f),P&&jr(M,P),g&&(M.l=g),y=M}return g=c.D,f=c.ya,g&&f&&ft(y,g,f),ft(y,"VER",c.la),yi(c,y),y}function Qh(c,f,g){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Tt(new Wr({eb:g})):new Tt(c.pa),f.Ha(c.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jh(){}n=Jh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qr(){}Qr.prototype.g=function(c,f){return new pe(c,f)};function pe(c,f){Gt.call(this),this.g=new $h(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!k(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!k(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Is(this)}_(pe,Gt),pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pe.prototype.close=function(){ul(this.g)},pe.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.u&&(g={},g.__data__=Ja(c),c=g);f.i.push(new Yy(f.Ya++,c)),f.G==3&&Yr(f)},pe.prototype.N=function(){this.g.l=null,delete this.j,ul(this.g),delete this.g,pe.aa.N.call(this)};function Zh(c){tl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){t:{for(const g in f){c=g;break t}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}_(Zh,tl);function td(){el.call(this),this.status=1}_(td,el);function Is(c){this.g=c}_(Is,Jh),Is.prototype.ua=function(){re(this.g,"a")},Is.prototype.ta=function(c){re(this.g,new Zh(c))},Is.prototype.sa=function(c){re(this.g,new td)},Is.prototype.ra=function(){re(this.g,"b")},Qr.prototype.createWebChannel=Qr.prototype.g,pe.prototype.send=pe.prototype.o,pe.prototype.open=pe.prototype.m,pe.prototype.close=pe.prototype.close,bg=function(){return new Qr},vg=function(){return Fr()},yg=Hn,ec={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ur.NO_ERROR=0,Ur.TIMEOUT=8,Ur.HTTP_ERROR=6,xo=Ur,mh.COMPLETE="complete",_g=mh,hh.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,Ci=hh,Tt.prototype.listenOnce=Tt.prototype.L,Tt.prototype.getLastError=Tt.prototype.Ka,Tt.prototype.getLastErrorCode=Tt.prototype.Ba,Tt.prototype.getStatus=Tt.prototype.Z,Tt.prototype.getResponseJson=Tt.prototype.Oa,Tt.prototype.getResponseText=Tt.prototype.oa,Tt.prototype.send=Tt.prototype.ea,Tt.prototype.setWithCredentials=Tt.prototype.Ha,mg=Tt}).apply(typeof Zr<"u"?Zr:typeof self<"u"?self:typeof window<"u"?window:{});const dd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const cs=new Bc("@firebase/firestore");function vi(){return cs.logLevel}function z(n,...t){if(cs.logLevel<=J.DEBUG){const e=t.map(jc);cs.debug(`Firestore (${ti}): ${n}`,...e)}}function un(n,...t){if(cs.logLevel<=J.ERROR){const e=t.map(jc);cs.error(`Firestore (${ti}): ${n}`,...e)}}function zs(n,...t){if(cs.logLevel<=J.WARN){const e=t.map(jc);cs.warn(`Firestore (${ti}): ${n}`,...e)}}function jc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(n="Unexpected state"){const t=`FIRESTORE (${ti}) INTERNAL ASSERTION FAILED: `+n;throw un(t),new Error(t)}function at(n,t){n||W()}function K(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends ze{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Jt.UNAUTHENTICATED))}shutdown(){}}class Yb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Xb{constructor(t){this.t=t,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){at(this.o===void 0);let s=this.i;const i=l=>this.i!==s?(s=this.i,e(l)):Promise.resolve();let r=new an;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new an,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new an)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(at(typeof s.accessToken=="string"),new wg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new Jt(t)}}class Qb{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Jb{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new Qb(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zb{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){at(this.o===void 0);const s=r=>{r.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(at(typeof e.token=="string"),this.R=e.token,new Zb(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=e0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function nt(n,t){return n<t?-1:n>t?1:0}function js(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return kt.fromMillis(Date.now())}static fromDate(t){return kt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new kt(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class er{constructor(t,e,s){e===void 0?e=0:e>t.length&&W(),s===void 0?s=t.length-e:s>t.length-e&&W(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return er.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof er?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pt extends er{construct(t,e,s){return new pt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new pt(e)}static emptyPath(){return new pt([])}}const n0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends er{construct(t,e,s){return new Ht(t,e,s)}static isValidIdentifier(t){return n0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ht(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ht(e)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(pt.fromString(t))}static fromName(t){return new j(pt.fromString(t).popFirst(5))}static empty(){return new j(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return pt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new pt(t.slice()))}}function s0(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new kt(e+1,0):new kt(e,s));return new Ln(i,j.empty(),t)}function i0(n){return new Ln(n.readTime,n.key,-1)}class Ln{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new Ln(q.min(),j.empty(),-1)}static max(){return new Ln(q.max(),j.empty(),-1)}}function r0(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function br(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==o0)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,s)=>{e(t)})}static reject(t){return new V((e,s)=>{s(t)})}static waitFor(t){return new V((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},l=>s(l))}),o=!0,r===i&&e()})}static or(t){let e=V.resolve(!1);for(const s of t)e=e.next(i=>i?V.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new V((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;e(t[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,e){return new V((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}function l0(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function wr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Hc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ie(s),this.se=s=>e.writeSequenceNumber(s))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Hc.oe=-1;function ma(n){return n==null}function Ho(n){return n===0&&1/n==-1/0}function c0(n){return typeof n=="number"&&Number.isInteger(n)&&!Ho(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function _s(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Eg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){this.comparator=t,this.root=e||jt.EMPTY}insert(t,e){return new wt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(t){return new wt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,jt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new to(this.root,t,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new to(this.root,t,this.comparator,!0)}}class to{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class jt{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??jt.RED,this.left=i??jt.EMPTY,this.right=r??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new jt(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return jt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const t=this.left.check();if(t!==this.right.check())throw W();return t+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,s,i,r){return this}insert(t,e,s){return new jt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.comparator=t,this.data=new wt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new pd(this.data.getIterator())}getIteratorFrom(t){return new pd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof Wt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Wt(this.comparator);return e.data=t,e}}class pd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.fields=t,t.sort(Ht.comparator)}static empty(){return new _e([])}unionWith(t){let e=new Wt(Ht.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new _e(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return js(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Tg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Tg("Invalid base64 string: "+r):r}}(t);return new qt(e)}static fromUint8Array(t){const e=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(t);return new qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const u0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(n){if(at(!!n),typeof n=="string"){let t=0;const e=u0.exec(n);if(at(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:St(n.seconds),nanos:St(n.nanos)}}function St(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function us(n){return typeof n=="string"?qt.fromBase64String(n):qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function qc(n){const t=n.mapValue.fields.__previous_value__;return Wc(t)?qc(t):t}function nr(n){const t=Nn(n.mapValue.fields.__local_write_time__.timestampValue);return new kt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(t,e,s,i,r,o,a,l,u){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class sr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new sr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof sr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo={mapValue:{}};function hs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wc(n)?4:f0(n)?9007199254740991:d0(n)?10:11:W()}function $e(n,t){if(n===t)return!0;const e=hs(n);if(e!==hs(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return nr(n).isEqual(nr(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Nn(i.timestampValue),a=Nn(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,r){return us(i.bytesValue).isEqual(us(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,r){return St(i.geoPointValue.latitude)===St(r.geoPointValue.latitude)&&St(i.geoPointValue.longitude)===St(r.geoPointValue.longitude)}(n,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return St(i.integerValue)===St(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=St(i.doubleValue),a=St(r.doubleValue);return o===a?Ho(o)===Ho(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return js(n.arrayValue.values||[],t.arrayValue.values||[],$e);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(fd(o)!==fd(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!$e(o[l],a[l])))return!1;return!0}(n,t);default:return W()}}function ir(n,t){return(n.values||[]).find(e=>$e(e,t))!==void 0}function Hs(n,t){if(n===t)return 0;const e=hs(n),s=hs(t);if(e!==s)return nt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=St(r.integerValue||r.doubleValue),l=St(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return gd(n.timestampValue,t.timestampValue);case 4:return gd(nr(n),nr(t));case 5:return nt(n.stringValue,t.stringValue);case 6:return function(r,o){const a=us(r),l=us(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=nt(a[u],l[u]);if(h!==0)return h}return nt(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=nt(St(r.latitude),St(o.latitude));return a!==0?a:nt(St(r.longitude),St(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return md(n.arrayValue,t.arrayValue);case 10:return function(r,o){var a,l,u,h;const d=r.fields||{},p=o.fields||{},m=(a=d.value)===null||a===void 0?void 0:a.arrayValue,_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,v=nt(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return v!==0?v:md(m,_)}(n.mapValue,t.mapValue);case 11:return function(r,o){if(r===eo.mapValue&&o===eo.mapValue)return 0;if(r===eo.mapValue)return 1;if(o===eo.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=nt(l[d],h[d]);if(p!==0)return p;const m=Hs(a[l[d]],u[h[d]]);if(m!==0)return m}return nt(l.length,h.length)}(n.mapValue,t.mapValue);default:throw W()}}function gd(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=Nn(n),s=Nn(t),i=nt(e.seconds,s.seconds);return i!==0?i:nt(e.nanos,s.nanos)}function md(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=Hs(e[i],s[i]);if(r)return r}return nt(e.length,s.length)}function Ws(n){return nc(n)}function nc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=Nn(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return us(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=nc(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${nc(e.fields[o])}`;return i+"}"}(n.mapValue):W()}function _d(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function sc(n){return!!n&&"integerValue"in n}function Gc(n){return!!n&&"arrayValue"in n}function yd(n){return!!n&&"nullValue"in n}function vd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Eo(n){return!!n&&"mapValue"in n}function d0(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function zi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return _s(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=zi(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=zi(n.arrayValue.values[e]);return t}return Object.assign({},n)}function f0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.value=t}static empty(){return new de({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Eo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zi(e)}setAll(t){let e=Ht.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=zi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());Eo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $e(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];Eo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){_s(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new de(zi(this.value))}}function Ig(n){const t=[];return _s(n.fields,(e,s)=>{const i=new Ht([e]);if(Eo(s)){const r=Ig(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new _e(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wo{constructor(t,e){this.position=t,this.inclusive=e}}function bd(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),e.key):s=Hs(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function wd(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!$e(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class rr{constructor(t,e="asc"){this.field=t,this.dir=e}}function p0(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ag{}class Lt extends Ag{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new m0(t,e,s):e==="array-contains"?new v0(t,s):e==="in"?new b0(t,s):e==="not-in"?new w0(t,s):e==="array-contains-any"?new x0(t,s):new Lt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new _0(t,s):new y0(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Hs(e,this.value)):e!==null&&hs(this.value)===hs(e)&&this.matchesComparison(Hs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Se extends Ag{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Se(t,e)}matches(t){return Sg(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sg(n){return n.op==="and"}function Rg(n){return g0(n)&&Sg(n)}function g0(n){for(const t of n.filters)if(t instanceof Se)return!1;return!0}function ic(n){if(n instanceof Lt)return n.field.canonicalString()+n.op.toString()+Ws(n.value);if(Rg(n))return n.filters.map(t=>ic(t)).join(",");{const t=n.filters.map(e=>ic(e)).join(",");return`${n.op}(${t})`}}function kg(n,t){return n instanceof Lt?function(s,i){return i instanceof Lt&&s.op===i.op&&s.field.isEqual(i.field)&&$e(s.value,i.value)}(n,t):n instanceof Se?function(s,i){return i instanceof Se&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&kg(o,i.filters[a]),!0):!1}(n,t):void W()}function Pg(n){return n instanceof Lt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ws(e.value)}`}(n):n instanceof Se?function(e){return e.op.toString()+" {"+e.getFilters().map(Pg).join(" ,")+"}"}(n):"Filter"}class m0 extends Lt{constructor(t,e,s){super(t,e,s),this.key=j.fromName(s.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class _0 extends Lt{constructor(t,e){super(t,"in",e),this.keys=Cg("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class y0 extends Lt{constructor(t,e){super(t,"not-in",e),this.keys=Cg("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Cg(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>j.fromName(s.referenceValue))}class v0 extends Lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gc(e)&&ir(e.arrayValue,this.value)}}class b0 extends Lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ir(this.value.arrayValue,e)}}class w0 extends Lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ir(this.value.arrayValue,e)}}class x0 extends Lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gc(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>ir(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function xd(n,t=null,e=[],s=[],i=null,r=null,o=null){return new E0(n,t,e,s,i,r,o)}function Kc(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>ic(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ma(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Ws(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Ws(s)).join(",")),t.ue=e}return t.ue}function Yc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!p0(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!kg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!wd(n.startAt,t.startAt)&&wd(n.endAt,t.endAt)}function rc(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function T0(n,t,e,s,i,r,o,a){return new ei(n,t,e,s,i,r,o,a)}function Xc(n){return new ei(n)}function Ed(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dg(n){return n.collectionGroup!==null}function ji(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Wt(Ht.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new rr(r,s))}),e.has(Ht.keyField().canonicalString())||t.ce.push(new rr(Ht.keyField(),s))}return t.ce}function Ne(n){const t=K(n);return t.le||(t.le=I0(t,ji(n))),t.le}function I0(n,t){if(n.limitType==="F")return xd(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new rr(i.field,r)});const e=n.endAt?new Wo(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Wo(n.startAt.position,n.startAt.inclusive):null;return xd(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function oc(n,t){const e=n.filters.concat([t]);return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function qo(n,t,e){return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function _a(n,t){return Yc(Ne(n),Ne(t))&&n.limitType===t.limitType}function Mg(n){return`${Kc(Ne(n))}|lt:${n.limitType}`}function Cs(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>Pg(i)).join(", ")}]`),ma(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>Ws(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>Ws(i)).join(",")),`Target(${s})`}(Ne(n))}; limitType=${n.limitType})`}function ya(n,t){return t.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):j.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,t)&&function(s,i){for(const r of ji(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(o,a,l){const u=bd(o,a,l);return o.inclusive?u<=0:u<0}(s.startAt,ji(s),i)||s.endAt&&!function(o,a,l){const u=bd(o,a,l);return o.inclusive?u>=0:u>0}(s.endAt,ji(s),i))}(n,t)}function A0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Og(n){return(t,e)=>{let s=!1;for(const i of ji(n)){const r=S0(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function S0(n,t,e){const s=n.field.isKeyField()?j.comparator(t.key,e.key):function(r,o,a){const l=o.data.field(r),u=a.data.field(r);return l!==null&&u!==null?Hs(l,u):W()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){_s(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Eg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new wt(j.comparator);function hn(){return R0}const Lg=new wt(j.comparator);function Di(...n){let t=Lg;for(const e of n)t=t.insert(e.key,e);return t}function Ng(n){let t=Lg;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function ns(){return Hi()}function Vg(){return Hi()}function Hi(){return new ni(n=>n.toString(),(n,t)=>n.isEqual(t))}const k0=new wt(j.comparator),P0=new Wt(j.comparator);function X(...n){let t=P0;for(const e of n)t=t.add(e);return t}const C0=new Wt(nt);function D0(){return C0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ho(t)?"-0":t}}function Fg(n){return{integerValue:""+n}}function M0(n,t){return c0(t)?Fg(t):Qc(n,t)}/**
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
 */class va{constructor(){this._=void 0}}function O0(n,t,e){return n instanceof Go?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Wc(r)&&(r=qc(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof or?Bg(n,t):n instanceof ar?$g(n,t):function(i,r){const o=Ug(i,r),a=Td(o)+Td(i.Pe);return sc(o)&&sc(i.Pe)?Fg(a):Qc(i.serializer,a)}(n,t)}function L0(n,t,e){return n instanceof or?Bg(n,t):n instanceof ar?$g(n,t):e}function Ug(n,t){return n instanceof Ko?function(s){return sc(s)||function(r){return!!r&&"doubleValue"in r}(s)}(t)?t:{integerValue:0}:null}class Go extends va{}class or extends va{constructor(t){super(),this.elements=t}}function Bg(n,t){const e=zg(t);for(const s of n.elements)e.some(i=>$e(i,s))||e.push(s);return{arrayValue:{values:e}}}class ar extends va{constructor(t){super(),this.elements=t}}function $g(n,t){let e=zg(t);for(const s of n.elements)e=e.filter(i=>!$e(i,s));return{arrayValue:{values:e}}}class Ko extends va{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Td(n){return St(n.integerValue||n.doubleValue)}function zg(n){return Gc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function N0(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof or&&i instanceof or||s instanceof ar&&i instanceof ar?js(s.elements,i.elements,$e):s instanceof Ko&&i instanceof Ko?$e(s.Pe,i.Pe):s instanceof Go&&i instanceof Go}(n.transform,t.transform)}class V0{constructor(t,e){this.version=t,this.transformResults=e}}class xe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xe}static exists(t){return new xe(void 0,t)}static updateTime(t){return new xe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function To(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ba{}function jg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Jc(n.key,xe.none()):new xr(n.key,n.data,xe.none());{const e=n.data,s=de.empty();let i=new Wt(Ht.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Bn(n.key,s,new _e(i.toArray()),xe.none())}}function F0(n,t,e){n instanceof xr?function(i,r,o){const a=i.value.clone(),l=Ad(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Bn?function(i,r,o){if(!To(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Ad(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Hg(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Wi(n,t,e,s){return n instanceof xr?function(r,o,a,l){if(!To(r.precondition,o))return a;const u=r.value.clone(),h=Sd(r.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,s):n instanceof Bn?function(r,o,a,l){if(!To(r.precondition,o))return a;const u=Sd(r.fieldTransforms,l,o),h=o.data;return h.setAll(Hg(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(d=>d.field))}(n,t,e,s):function(r,o,a){return To(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function U0(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=Ug(s.transform,i||null);r!=null&&(e===null&&(e=de.empty()),e.set(s.field,r))}return e||null}function Id(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&js(s,i,(r,o)=>N0(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class xr extends ba{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bn extends ba{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Hg(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Ad(n,t,e){const s=new Map;at(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,L0(o,a,e[i]))}return s}function Sd(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,O0(r,o,t))}return s}class Jc extends ba{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class B0 extends ba{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&F0(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Wi(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Wi(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=Vg();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const l=jg(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&js(this.mutations,t.mutations,(e,s)=>Id(e,s))&&js(this.baseMutations,t.baseMutations,(e,s)=>Id(e,s))}}class Zc{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){at(t.mutations.length===s.length);let i=function(){return k0}();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Zc(t,e,s,i)}}/**
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
 */var Dt,tt;function H0(n){switch(n){default:return W();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Wg(n){if(n===void 0)return un("GRPC error has no .code"),L.UNKNOWN;switch(n){case Dt.OK:return L.OK;case Dt.CANCELLED:return L.CANCELLED;case Dt.UNKNOWN:return L.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return L.INTERNAL;case Dt.UNAVAILABLE:return L.UNAVAILABLE;case Dt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Dt.NOT_FOUND:return L.NOT_FOUND;case Dt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Dt.ABORTED:return L.ABORTED;case Dt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Dt.DATA_LOSS:return L.DATA_LOSS;default:return W()}}(tt=Dt||(Dt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const q0=new is([4294967295,4294967295],0);function Rd(n){const t=W0().encode(n),e=new gg;return e.update(t),new Uint8Array(e.digest())}function kd(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new is([e,s],0),new is([i,r],0)]}class tu{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Mi(`Invalid padding: ${e}`);if(s<0)throw new Mi(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Mi(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Mi(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=is.fromNumber(this.Ie)}Ee(t,e,s){let i=t.add(e.multiply(is.fromNumber(s)));return i.compare(q0)===1&&(i=new is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Rd(t),[s,i]=kd(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new tu(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Rd(t),[s,i]=kd(e);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,Er.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new wa(q.min(),i,new wt(nt),hn(),X())}}class Er{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new Er(s,e,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e,s,i){this.Re=t,this.removedTargetIds=e,this.key=s,this.Ve=i}}class qg{constructor(t,e){this.targetId=t,this.me=e}}class Gg{constructor(t,e,s=qt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class Pd{constructor(){this.fe=0,this.ge=Dd(),this.pe=qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=X(),e=X(),s=X();return this.ge.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:W()}}),new Er(this.pe,this.ye,t,e,s)}Ce(){this.we=!1,this.ge=Dd()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,at(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class G0{constructor(t){this.Le=t,this.Be=new Map,this.ke=hn(),this.qe=Cd(),this.Qe=new wt(nt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const s=this.Ge(e);switch(t.state){case 0:this.ze(e)&&s.De(t.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(t.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(s.Ne(),s.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),s.De(t.resumeToken));break;default:W()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((s,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,s=t.me.count,i=this.Je(e);if(i){const r=i.target;if(rc(r))if(s===0){const o=new j(r.path);this.Ue(e,o,te.newNoDocument(o,q.min()))}else at(s===1);else{const o=this.Ye(e);if(o!==s){const a=this.Ze(t),l=a?this.Xe(a,t,o):1;if(l!==0){this.je(e);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,u)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=us(s).toUint8Array()}catch(l){if(l instanceof Tg)return zs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new tu(o,i,r)}catch(l){return zs(l instanceof Mi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(t,e,s){return e.me.count===s-this.nt(t,e.targetId)?0:2}nt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,r,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&rc(a.target)){const l=new j(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,te.newNoDocument(l,t))}r.be&&(e.set(o,r.ve()),r.Ce())}});let s=X();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(t));const i=new wa(t,e,this.Qe,this.ke,s);return this.ke=hn(),this.qe=Cd(),this.Qe=new wt(nt),i}$e(t,e){if(!this.ze(t))return;const s=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,s),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,s){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),s&&(this.ke=this.ke.insert(e,s))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Pd,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Wt(nt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||z("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Pd),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Cd(){return new wt(j.comparator)}function Dd(){return new wt(j.comparator)}const K0={asc:"ASCENDING",desc:"DESCENDING"},Y0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},X0={and:"AND",or:"OR"};class Q0{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ac(n,t){return n.useProto3Json||ma(t)?t:{value:t}}function Yo(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Kg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function J0(n,t){return Yo(n,t.toTimestamp())}function Ve(n){return at(!!n),q.fromTimestamp(function(e){const s=Nn(e);return new kt(s.seconds,s.nanos)}(n))}function eu(n,t){return lc(n,t).canonicalString()}function lc(n,t){const e=function(i){return new pt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Yg(n){const t=pt.fromString(n);return at(tm(t)),t}function cc(n,t){return eu(n.databaseId,t.path)}function vl(n,t){const e=Yg(t);if(e.get(1)!==n.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(Qg(e))}function Xg(n,t){return eu(n.databaseId,t)}function Z0(n){const t=Yg(n);return t.length===4?pt.emptyPath():Qg(t)}function uc(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qg(n){return at(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Md(n,t,e){return{name:cc(n,t),fields:e.value.mapValue.fields}}function tw(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:W()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(at(h===void 0||typeof h=="string"),qt.fromBase64String(h||"")):(at(h===void 0||h instanceof Buffer||h instanceof Uint8Array),qt.fromUint8Array(h||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const h=u.code===void 0?L.UNKNOWN:Wg(u.code);return new B(h,u.message||"")}(o);e=new Gg(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=vl(n,s.document.name),r=Ve(s.document.updateTime),o=s.document.createTime?Ve(s.document.createTime):q.min(),a=new de({mapValue:{fields:s.document.fields}}),l=te.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];e=new Io(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=vl(n,s.document),r=s.readTime?Ve(s.readTime):q.min(),o=te.newNoDocument(i,r),a=s.removedTargetIds||[];e=new Io([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=vl(n,s.document),r=s.removedTargetIds||[];e=new Io([],r,i,null)}else{if(!("filter"in t))return W();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new j0(i,r),a=s.targetId;e=new qg(a,o)}}return e}function ew(n,t){let e;if(t instanceof xr)e={update:Md(n,t.key,t.value)};else if(t instanceof Jc)e={delete:cc(n,t.key)};else if(t instanceof Bn)e={update:Md(n,t.key,t.data),updateMask:uw(t.fieldMask)};else{if(!(t instanceof B0))return W();e={verify:cc(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Go)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof or)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ar)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:J0(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(n,t.precondition)),e}function nw(n,t){return n&&n.length>0?(at(t!==void 0),n.map(e=>function(i,r){let o=i.updateTime?Ve(i.updateTime):Ve(r);return o.isEqual(q.min())&&(o=Ve(r)),new V0(o,i.transformResults||[])}(e,t))):[]}function sw(n,t){return{documents:[Xg(n,t.path)]}}function iw(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=Xg(n,i);const r=function(u){if(u.length!==0)return Zg(Se.create(u,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Ds(p.field),direction:aw(p.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=ac(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:e,parent:i}}function rw(n){let t=Z0(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){at(s===1);const h=e.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];e.where&&(r=function(d){const p=Jg(d);return p instanceof Se&&Rg(p)?p.getFilters():[p]}(e.where));let o=[];e.orderBy&&(o=function(d){return d.map(p=>function(_){return new rr(Ms(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(e.orderBy));let a=null;e.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,ma(p)?null:p}(e.limit));let l=null;e.startAt&&(l=function(d){const p=!!d.before,m=d.values||[];return new Wo(m,p)}(e.startAt));let u=null;return e.endAt&&(u=function(d){const p=!d.before,m=d.values||[];return new Wo(m,p)}(e.endAt)),T0(t,i,o,r,a,"F",l,u)}function ow(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Jg(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=Ms(e.unaryFilter.field);return Lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Ms(e.unaryFilter.field);return Lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ms(e.unaryFilter.field);return Lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(e.unaryFilter.field);return Lt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(e){return Lt.create(Ms(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Se.create(e.compositeFilter.filters.map(s=>Jg(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(n):W()}function aw(n){return K0[n]}function lw(n){return Y0[n]}function cw(n){return X0[n]}function Ds(n){return{fieldPath:n.canonicalString()}}function Ms(n){return Ht.fromServerFormat(n.fieldPath)}function Zg(n){return n instanceof Lt?function(e){if(e.op==="=="){if(vd(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NAN"}};if(yd(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vd(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NOT_NAN"}};if(yd(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(e.field),op:lw(e.op),value:e.value}}}(n):n instanceof Se?function(e){const s=e.getFilters().map(i=>Zg(i));return s.length===1?s[0]:{compositeFilter:{op:cw(e.op),filters:s}}}(n):W()}function uw(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function tm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e,s,i,r=q.min(),o=q.min(),a=qt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new En(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t){this.ct=t}}function dw(n){const t=rw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qo(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.un=new pw}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Ln.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Ln.min())}updateCollectionGroup(t,e,s){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class pw{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new Wt(pt.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new Wt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new qs(0)}static kn(){return new qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.changes=new ni(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,te.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?V.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _w{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&Wi(s.mutation,i,_e.empty(),kt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,X()).next(()=>s))}getLocalViewOfDocuments(t,e,s=X()){const i=ns();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=Di();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=ns();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,X()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=hn();const o=Hi(),a=function(){return Hi()}();return e.forEach((l,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Bn)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Wi(h.mutation,u,h.mutation.getFieldMask(),kt.now())):o.set(u.key,_e.empty())}),this.recalculateAndSaveOverlays(t,r).next(l=>(l.forEach((u,h)=>o.set(u,h)),e.forEach((u,h)=>{var d;return a.set(u,new mw(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Hi();let i=new wt((o,a)=>o-a),r=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=e.get(l);if(u===null)return;let h=s.get(l)||_e.empty();h=a.applyToLocalView(u,h),s.set(l,h);const d=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=Vg();h.forEach(p=>{if(!r.has(p)){const m=jg(e.get(p),s.get(p));m!==null&&d.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return V.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Dg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):V.resolve(ns());let a=-1,l=r;return o.next(u=>V.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?V.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(t,u,r)).next(()=>this.computeViews(t,l,u,X())).next(h=>({batchId:a,changes:Ng(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(s=>{let i=Di();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=Di();return this.indexManager.getCollectionParents(t,r).next(a=>V.forEach(a,l=>{const u=function(d,p){return new ei(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(e,l.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i))).next(o=>{r.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,te.newInvalidDocument(h)))});let a=Di();return o.forEach((l,u)=>{const h=r.get(l);h!==void 0&&Wi(h.mutation,u,_e.empty(),kt.now()),ya(e,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ve(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:dw(i.bundledQuery),readTime:Ve(i.readTime)}}(e)),V.resolve()}}/**
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
 */class vw{constructor(){this.overlays=new wt(j.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const s=ns();return V.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.ht(t,e,r)}),V.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),V.resolve()}getOverlaysForCollection(t,e,s){const i=ns(),r=e.length+1,o=new j(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new wt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=ns(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ns(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return V.resolve(a)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new z0(e,s));let r=this.Ir.get(e);r===void 0&&(r=X(),this.Ir.set(e,r)),this.Ir.set(e,r.add(s.key))}}/**
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
 */class nu{constructor(){this.Tr=new Wt(Ft.Er),this.dr=new Wt(Ft.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const s=new Ft(t,e);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Vr(new Ft(t,e))}mr(t,e){t.forEach(s=>this.removeReference(s,e))}gr(t){const e=new j(new pt([])),s=new Ft(e,t),i=new Ft(e,t+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new pt([])),s=new Ft(e,t),i=new Ft(e,t+1);let r=X();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new Ft(t,0),s=this.Tr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Ft{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||nt(t.wr,e.wr)}static Ar(t,e){return nt(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Wt(Ft.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $0(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ft(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.vr(s),r=i<0?0:i;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Ft(e,0),i=new Ft(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new Wt(nt);return e.forEach(i=>{const r=new Ft(i,0),o=new Ft(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),V.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;j.isDocumentKey(r)||(r=r.child(""));const o=new Ft(new j(r),0);let a=new Wt(nt);return this.br.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(s=>{const i=this.Dr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){at(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return V.forEach(e.mutations,i=>{const r=new Ft(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=s})}On(t){}containsKey(t,e){const s=new Ft(e,0),i=this.br.firstAfterOrEqual(s);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(t){this.Mr=t,this.docs=function(){return new wt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return V.resolve(s?s.document.mutableCopy():te.newInvalidDocument(e))}getEntries(t,e){let s=hn();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():te.newInvalidDocument(i))}),V.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=hn();const o=e.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||r0(i0(h),s)<=0||(i.has(h.key)||ya(e,h))&&(r=r.insert(h.key,h.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(t,e,s,i){W()}Or(t,e){return V.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new Ew(this)}getSize(t){return V.resolve(this.size)}}class Ew extends gw{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(s)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(t){this.persistence=t,this.Nr=new ni(e=>Kc(e),Yc),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nu,this.targetCount=0,this.kr=qs.Bn()}forEachTarget(t,e){return this.Nr.forEach((s,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new qs(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),V.waitFor(r).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const s=this.Nr.get(e)||null;return V.resolve(s)}addMatchingKeys(t,e,s){return this.Br.Rr(e,s),V.resolve()}removeMatchingKeys(t,e,s){this.Br.mr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),V.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Br.yr(e);return V.resolve(s)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Hc(0),this.Kr=!1,this.Kr=!0,this.$r=new bw,this.referenceDelegate=t(this),this.Ur=new Tw(this),this.indexManager=new fw,this.remoteDocumentCache=function(i){return new xw(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new hw(e),this.Gr=new yw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vw,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.qr[t.toKey()];return s||(s=new ww(e,this.referenceDelegate),this.qr[t.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,s){z("MemoryPersistence","Starting transaction:",t);const i=new Aw(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(t,e){return V.or(Object.values(this.qr).map(s=>()=>s.containsKey(t,e)))}}class Aw extends a0{constructor(t){super(),this.currentSequenceNumber=t}}class su{constructor(t){this.persistence=t,this.Jr=new nu,this.Yr=null}static Zr(t){return new su(t)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(t,e,s){return this.Jr.addReference(s,e),this.Xr.delete(s.toString()),V.resolve()}removeReference(t,e,s){return this.Jr.removeReference(s,e),this.Xr.add(s.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,s=>{const i=j.fromPath(s);return this.ei(t,i).next(r=>{r||e.removeEntry(i,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(s=>{s?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.$i=s,this.Ui=i}static Wi(t,e){let s=X(),i=X();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new iu(t,e.fromCache,s,i)}}/**
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
 */class Rw{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kv()?8:l0(ne())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.Yi(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(t,e,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new Sw;return this.Xi(t,e,o).next(a=>{if(r.result=a,this.zi)return this.es(t,e,o,a.size)})}).next(()=>r.result)}es(t,e,s,i){return s.documentReadCount<this.ji?(vi()<=J.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Cs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(vi()<=J.DEBUG&&z("QueryEngine","Query:",Cs(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(vi()<=J.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Cs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ne(e))):V.resolve())}Yi(t,e){if(Ed(e))return V.resolve(null);let s=Ne(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=qo(e,null,"F"),s=Ne(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=X(...r);return this.Ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(l=>{const u=this.ts(e,a);return this.ns(e,u,o,l.readTime)?this.Yi(t,qo(e,null,"F")):this.rs(t,u,e,l)}))})))}Zi(t,e,s,i){return Ed(e)||i.isEqual(q.min())?V.resolve(null):this.Ji.getDocuments(t,s).next(r=>{const o=this.ts(e,r);return this.ns(e,o,s,i)?V.resolve(null):(vi()<=J.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cs(e)),this.rs(t,o,e,s0(i,-1)).next(a=>a))})}ts(t,e){let s=new Wt(Og(t));return e.forEach((i,r)=>{ya(t,r)&&(s=s.add(r))}),s}ns(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,s){return vi()<=J.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Cs(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ln.min(),s)}rs(t,e,s,i){return this.Ji.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(t,e,s,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new wt(nt),this._s=new ni(r=>Kc(r),Yc),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(s)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _w(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Pw(n,t,e,s){return new kw(n,t,e,s)}async function em(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e.ls(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=X();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return e.localDocuments.getDocuments(s,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Cw(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=e.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,p=d.keys();let m=V.resolve();return p.forEach(_=>{m=m.next(()=>h.getEntry(l,_)).next(v=>{const w=u.docVersions.get(_);at(w!==null),v.version.compareTo(w)<0&&(d.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),h.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(e,s,t,r).next(()=>r.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=X();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function nm(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Dw(n,t){const e=K(n),s=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const a=[];t.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(e.Ur.removeMatchingKeys(r,h.removedDocuments,d).next(()=>e.Ur.addMatchingKeys(r,h.addedDocuments,d)));let m=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(d)!==null?m=m.withResumeToken(qt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(d,m),function(v,w,S){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,m,h)&&a.push(e.Ur.updateTargetData(r,m))});let l=hn(),u=X();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Mw(r,o,t.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!s.isEqual(q.min())){const h=e.Ur.getLastRemoteSnapshotVersion(r).next(d=>e.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return V.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(e.os=i,r))}function Mw(n,t,e){let s=X(),i=X();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=hn();return e.forEach((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function Ow(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Lw(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Ur.getTargetData(s,t).next(r=>r?(i=r,V.resolve(i)):e.Ur.allocateTargetId(s).next(o=>(i=new En(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(s.targetId,s),e._s.set(t,s.targetId)),s})}async function hc(n,t,e){const s=K(n),i=s.os.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wr(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.os=s.os.remove(t),s._s.delete(i.target)}function Od(n,t,e){const s=K(n);let i=q.min(),r=X();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=K(l),p=d._s.get(h);return p!==void 0?V.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(s,o,Ne(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.ss.getDocumentsMatchingQuery(o,t,e?i:q.min(),e?r:X())).next(a=>(Nw(s,A0(t),a),{documents:a,Ts:r})))}function Nw(n,t,e){let s=n.us.get(t)||q.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.us.set(t,s)}class Ld{constructor(){this.activeTargetIds=D0()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vw{constructor(){this.so=new Ld,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,s){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ld,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let no=null;function bl(){return no===null?no=function(){return 268435456+Math.round(2147483648*Math.random())}():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class $w extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+e.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(e,s,i,r,o){const a=bl(),l=this.xo(e,s.toUriEncodedString());z("RestConnection",`Sending RPC '${e}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,r,o),this.No(e,l,u,i).then(h=>(z("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw zs("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(e,s,i,r,o,a){return this.Mo(e,s,i,r,o)}Oo(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ti}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}xo(e,s){const i=Uw[e];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,s,i){const r=bl();return new Promise((o,a)=>{const l=new mg;l.setWithCredentials(!0),l.listenOnce(_g.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case xo.NO_ERROR:const h=l.getResponseJson();z(Xt,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(h)),o(h);break;case xo.TIMEOUT:z(Xt,`RPC '${t}' ${r} timed out`),a(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case xo.HTTP_ERROR:const d=l.getStatus();if(z(Xt,`RPC '${t}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const _=function(w){const S=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(S)>=0?S:L.UNKNOWN}(m.status);a(new B(_,m.message))}else a(new B(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(L.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{z(Xt,`RPC '${t}' ${r} completed.`)}});const u=JSON.stringify(i);z(Xt,`RPC '${t}' ${r} sending request:`,i),l.send(e,"POST",u,s,15)})}Bo(t,e,s){const i=bl(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=bg(),a=vg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,e,s),l.encodeInitMessageHeaders=!0;const h=r.join("");z(Xt,`Creating RPC '${t}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,m=!1;const _=new Bw({Io:w=>{m?z(Xt,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(p||(z(Xt,`Opening RPC '${t}' stream ${i} transport.`),d.open(),p=!0),z(Xt,`RPC '${t}' stream ${i} sending:`,w),d.send(w))},To:()=>d.close()}),v=(w,S,k)=>{w.listen(S,C=>{try{k(C)}catch(D){setTimeout(()=>{throw D},0)}})};return v(d,Ci.EventType.OPEN,()=>{m||(z(Xt,`RPC '${t}' stream ${i} transport opened.`),_.yo())}),v(d,Ci.EventType.CLOSE,()=>{m||(m=!0,z(Xt,`RPC '${t}' stream ${i} transport closed`),_.So())}),v(d,Ci.EventType.ERROR,w=>{m||(m=!0,zs(Xt,`RPC '${t}' stream ${i} transport errored:`,w),_.So(new B(L.UNAVAILABLE,"The operation could not be completed")))}),v(d,Ci.EventType.MESSAGE,w=>{var S;if(!m){const k=w.data[0];at(!!k);const C=k,D=C.error||((S=C[0])===null||S===void 0?void 0:S.error);if(D){z(Xt,`RPC '${t}' stream ${i} received error:`,D);const O=D.status;let N=function(x){const I=Dt[x];if(I!==void 0)return Wg(I)}(O),E=D.message;N===void 0&&(N=L.INTERNAL,E="Unknown error status: "+O+" with message "+D.message),m=!0,_.So(new B(N,E)),d.close()}else z(Xt,`RPC '${t}' stream ${i} received:`,k),_.bo(k)}}),v(a,yg.STAT_EVENT,w=>{w.stat===ec.PROXY?z(Xt,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===ec.NOPROXY&&z(Xt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function wl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(n){return new Q0(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,e,s=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-s);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t,e,s,i,r,o,a,l){this.ui=t,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new sm(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(un(e.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===e&&this.P_(s,i)},s=>{t(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(t,e){const s=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zw extends im{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=tw(this.serializer,t),s=function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Ve(o.readTime):q.min()}(t);return this.listener.d_(e,s)}A_(t){const e={};e.database=uc(this.serializer),e.addTarget=function(r,o){let a;const l=o.target;if(a=rc(l)?{documents:sw(r,l)}:{query:iw(r,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Kg(r,o.resumeToken);const u=ac(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=Yo(r,o.snapshotVersion.toTimestamp());const u=ac(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const s=ow(this.serializer,t);s&&(e.labels=s),this.a_(e)}R_(t){const e={};e.database=uc(this.serializer),e.removeTarget=t,this.a_(e)}}class jw extends im{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return at(!!t.streamToken),this.lastStreamToken=t.streamToken,at(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=nw(t.writeResults,t.commitTime),s=Ve(t.commitTime);return this.listener.g_(s,e)}p_(){const t={};t.database=uc(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>ew(this.serializer,s))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(t,lc(e,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(L.UNKNOWN,r.toString())})}Lo(t,e,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(t,lc(e,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ww{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(un(e),this.D_=!1):z("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{ys(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=K(l);u.L_.add(4),await Tr(u),u.q_.set("Unknown"),u.L_.delete(4),await Ea(u)}(this))})}),this.q_=new Ww(s,i)}}async function Ea(n){if(ys(n))for(const t of n.B_)await t(!0)}async function Tr(n){for(const t of n.B_)await t(!1)}function rm(n,t){const e=K(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),lu(e)?au(e):si(e).r_()&&ou(e,t))}function ru(n,t){const e=K(n),s=si(e);e.N_.delete(t),s.r_()&&om(e,t),e.N_.size===0&&(s.r_()?s.o_():ys(e)&&e.q_.set("Unknown"))}function ou(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}si(n).A_(t)}function om(n,t){n.Q_.xe(t),si(n).R_(t)}function au(n){n.Q_=new G0({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),si(n).start(),n.q_.v_()}function lu(n){return ys(n)&&!si(n).n_()&&n.N_.size>0}function ys(n){return K(n).L_.size===0}function am(n){n.Q_=void 0}async function Gw(n){n.q_.set("Online")}async function Kw(n){n.N_.forEach((t,e)=>{ou(n,t)})}async function Yw(n,t){am(n),lu(n)?(n.q_.M_(t),au(n)):n.q_.set("Unknown")}async function Xw(n,t,e){if(n.q_.set("Online"),t instanceof Gg&&t.state===2&&t.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(n,t)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Xo(n,s)}else if(t instanceof Io?n.Q_.Ke(t):t instanceof qg?n.Q_.He(t):n.Q_.We(t),!e.isEqual(q.min()))try{const s=await nm(n.localStore);e.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=r.N_.get(u);h&&r.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=r.N_.get(l);if(!h)return;r.N_.set(l,h.withResumeToken(qt.EMPTY_BYTE_STRING,h.snapshotVersion)),om(r,l);const d=new En(h.target,l,u,h.sequenceNumber);ou(r,d)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await Xo(n,s)}}async function Xo(n,t,e){if(!wr(t))throw t;n.L_.add(1),await Tr(n),n.q_.set("Offline"),e||(e=()=>nm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Ea(n)})}function lm(n,t){return t().catch(e=>Xo(n,e,t))}async function Ta(n){const t=K(n),e=Vn(t);let s=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Qw(t);)try{const i=await Ow(t.localStore,s);if(i===null){t.O_.length===0&&e.o_();break}s=i.batchId,Jw(t,i)}catch(i){await Xo(t,i)}cm(t)&&um(t)}function Qw(n){return ys(n)&&n.O_.length<10}function Jw(n,t){n.O_.push(t);const e=Vn(n);e.r_()&&e.V_&&e.m_(t.mutations)}function cm(n){return ys(n)&&!Vn(n).n_()&&n.O_.length>0}function um(n){Vn(n).start()}async function Zw(n){Vn(n).p_()}async function tx(n){const t=Vn(n);for(const e of n.O_)t.m_(e.mutations)}async function ex(n,t,e){const s=n.O_.shift(),i=Zc.from(s,t,e);await lm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ta(n)}async function nx(n,t){t&&Vn(n).V_&&await async function(s,i){if(function(o){return H0(o)&&o!==L.ABORTED}(i.code)){const r=s.O_.shift();Vn(s).s_(),await lm(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Ta(s)}}(n,t),cm(n)&&um(n)}async function Vd(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=ys(e);e.L_.add(3),await Tr(e),s&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Ea(e)}async function sx(n,t){const e=K(n);t?(e.L_.delete(2),await Ea(e)):t||(e.L_.add(2),await Tr(e),e.q_.set("Unknown"))}function si(n){return n.K_||(n.K_=function(e,s,i){const r=K(e);return r.w_(),new zw(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Gw.bind(null,n),Ro:Kw.bind(null,n),mo:Yw.bind(null,n),d_:Xw.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),lu(n)?au(n):n.q_.set("Unknown")):(await n.K_.stop(),am(n))})),n.K_}function Vn(n){return n.U_||(n.U_=function(e,s,i){const r=K(e);return r.w_(),new jw(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zw.bind(null,n),mo:nx.bind(null,n),f_:tx.bind(null,n),g_:ex.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Ta(n)):(await n.U_.stop(),n.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new an,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new cu(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uu(n,t){if(un("AsyncQueue",`${t}: ${n}`),wr(n))return new B(L.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t){this.comparator=t?(e,s)=>t(e,s)||j.comparator(e.key,s.key):(e,s)=>j.comparator(e.key,s.key),this.keyedMap=Di(),this.sortedSet=new wt(this.comparator)}static emptySet(t){return new Vs(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Vs)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new Vs;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.W_=new wt(j.comparator)}track(t){const e=t.doc.key,s=this.W_.get(e);s?t.type!==0&&s.type===3?this.W_=this.W_.insert(e,t):t.type===3&&s.type!==1?this.W_=this.W_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.W_=this.W_.remove(e):t.type===1&&s.type===2?this.W_=this.W_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):W():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,s)=>{t.push(s)}),t}}class Gs{constructor(t,e,s,i,r,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Gs(t,e,Vs.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_a(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class rx{constructor(){this.queries=Ud(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,s){const i=K(e),r=i.queries;i.queries=Ud(),r.forEach((o,a)=>{for(const l of a.j_)l.onError(s)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function Ud(){return new ni(n=>Mg(n),_a)}async function hm(n,t){const e=K(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.H_()&&t.J_()&&(s=2):(r=new ix,s=t.J_()?0:1);try{switch(s){case 0:r.z_=await e.onListen(i,!0);break;case 1:r.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=uu(o,`Initialization of query '${Cs(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.j_.push(t),t.Z_(e.onlineState),r.z_&&t.X_(r.z_)&&hu(e)}async function dm(n,t){const e=K(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.j_.indexOf(t);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=t.J_()?0:1:!r.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function ox(n,t){const e=K(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&hu(e)}function ax(n,t,e){const s=K(n),i=s.queries.get(t);if(i)for(const r of i.j_)r.onError(e);s.queries.delete(t)}function hu(n){n.Y_.forEach(t=>{t.next()})}var dc,Bd;(Bd=dc||(dc={})).ea="default",Bd.Cache="cache";class fm{constructor(t,e,s){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Gs(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const s=e!=="Offline";return(!this.options._a||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Gs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==dc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t){this.key=t}}class gm{constructor(t){this.key=t}}class lx{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=Og(t),this.Ra=new Vs(this.Aa)}get Va(){return this.Ta}ma(t,e){const s=e?e.fa:new Fd,i=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,d)=>{const p=i.get(h),m=ya(this.query,d)?d:null,_=!!p&&this.mutatedKeys.has(p.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let w=!1;p&&m?p.data.isEqual(m.data)?_!==v&&(s.track({type:3,doc:m}),w=!0):this.ga(p,m)||(s.track({type:2,doc:m}),w=!0,(l&&this.Aa(m,l)>0||u&&this.Aa(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),w=!0):p&&!m&&(s.track({type:1,doc:p}),w=!0,(l||u)&&(a=!0)),w&&(m?(o=o.add(m),r=v?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((h,d)=>function(m,_){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return v(m)-v(_)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(s),i=i!=null&&i;const a=e&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Gs(this.query,t.Ra,r,o,t.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=X(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const e=[];return t.forEach(s=>{this.da.has(s)||e.push(new gm(s))}),this.da.forEach(s=>{t.has(s)||e.push(new pm(s))}),e}ba(t){this.Ta=t.Ts,this.da=X();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Gs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class cx{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class ux{constructor(t){this.key=t,this.va=!1}}class hx{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ni(a=>Mg(a),_a),this.Ma=new Map,this.xa=new Set,this.Oa=new wt(j.comparator),this.Na=new Map,this.La=new nu,this.Ba={},this.ka=new Map,this.qa=qs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dx(n,t,e=!0){const s=wm(n);let i;const r=s.Fa.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await mm(s,t,e,!0),i}async function fx(n,t){const e=wm(n);await mm(e,t,!0,!1)}async function mm(n,t,e,s){const i=await Lw(n.localStore,Ne(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await px(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&rm(n.remoteStore,i),a}async function px(n,t,e,s,i){n.Ka=(d,p,m)=>async function(v,w,S,k){let C=w.view.ma(S);C.ns&&(C=await Od(v.localStore,w.query,!1).then(({documents:E})=>w.view.ma(E,C)));const D=k&&k.targetChanges.get(w.targetId),O=k&&k.targetMismatches.get(w.targetId)!=null,N=w.view.applyChanges(C,v.isPrimaryClient,D,O);return zd(v,w.targetId,N.wa),N.snapshot}(n,d,p,m);const r=await Od(n.localStore,t,!0),o=new lx(t,r.Ts),a=o.ma(r.documents),l=Er.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);zd(n,e,u.wa);const h=new cx(t,e,o);return n.Fa.set(t,h),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),u.snapshot}async function gx(n,t,e){const s=K(n),i=s.Fa.get(t),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!_a(o,t))),void s.Fa.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await hc(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),e&&ru(s.remoteStore,i.targetId),fc(s,i.targetId)}).catch(br)):(fc(s,i.targetId),await hc(s.localStore,i.targetId,!0))}async function mx(n,t){const e=K(n),s=e.Fa.get(t),i=e.Ma.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),ru(e.remoteStore,s.targetId))}async function _x(n,t,e){const s=Tx(n);try{const i=await function(o,a){const l=K(o),u=kt.now(),h=a.reduce((m,_)=>m.add(_.key),X());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=hn(),v=X();return l.cs.getEntries(m,h).next(w=>{_=w,_.forEach((S,k)=>{k.isValidDocument()||(v=v.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(w=>{d=w;const S=[];for(const k of a){const C=U0(k,d.get(k.key).overlayedDocument);C!=null&&S.push(new Bn(k.key,C,Ig(C.value.mapValue),xe.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,S,a)}).next(w=>{p=w;const S=w.applyToLocalDocumentSet(d,v);return l.documentOverlayCache.saveOverlays(m,w.batchId,S)})}).then(()=>({batchId:p.batchId,changes:Ng(d)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new wt(nt)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(s,i.batchId,e),await Ir(s,i.changes),await Ta(s.remoteStore)}catch(i){const r=uu(i,"Failed to persist write");e.reject(r)}}async function _m(n,t){const e=K(n);try{const s=await Dw(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.Na.get(r);o&&(at(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?at(o.va):i.removedDocuments.size>0&&(at(o.va),o.va=!1))}),await Ir(e,s,t)}catch(s){await br(s)}}function $d(n,t,e){const s=K(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&hu(l)}(s.eventManager,t),i.length&&s.Ca.d_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function yx(n,t,e){const s=K(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Na.get(t),r=i&&i.key;if(r){let o=new wt(j.comparator);o=o.insert(r,te.newNoDocument(r,q.min()));const a=X().add(r),l=new wa(q.min(),new Map,new wt(nt),o,a);await _m(s,l),s.Oa=s.Oa.remove(r),s.Na.delete(t),du(s)}else await hc(s.localStore,t,!1).then(()=>fc(s,t,e)).catch(br)}async function vx(n,t){const e=K(n),s=t.batch.batchId;try{const i=await Cw(e.localStore,t);vm(e,s,null),ym(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Ir(e,i)}catch(i){await br(i)}}async function bx(n,t,e){const s=K(n);try{const i=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(at(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(s.localStore,t);vm(s,t,e),ym(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Ir(s,i)}catch(i){await br(i)}}function ym(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function vm(n,t,e){const s=K(n);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.Ba[s.currentUser.toKey()]=i}}function fc(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Ma.get(t))n.Fa.delete(s),e&&n.Ca.$a(s,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(s=>{n.La.containsKey(s)||bm(n,s)})}function bm(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ru(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),du(n))}function zd(n,t,e){for(const s of e)s instanceof pm?(n.La.addReference(s.key,t),wx(n,s)):s instanceof gm?(z("SyncEngine","Document no longer in limbo: "+s.key),n.La.removeReference(s.key,t),n.La.containsKey(s.key)||bm(n,s.key)):W()}function wx(n,t){const e=t.key,s=e.path.canonicalString();n.Oa.get(e)||n.xa.has(s)||(z("SyncEngine","New document in limbo: "+e),n.xa.add(s),du(n))}function du(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(pt.fromString(t)),s=n.qa.next();n.Na.set(s,new ux(e)),n.Oa=n.Oa.insert(e,s),rm(n.remoteStore,new En(Ne(Xc(e.path)),s,"TargetPurposeLimboResolution",Hc.oe))}}async function Ir(n,t,e){const s=K(n),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,l)=>{o.push(s.Ka(l,t,e).then(u=>{var h;if((u||e)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=e==null?void 0:e.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){i.push(u);const d=iu.Wi(l.targetId,u);r.push(d)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(l,u){const h=K(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>V.forEach(u,p=>V.forEach(p.$i,m=>h.persistence.referenceDelegate.addReference(d,p.targetId,m)).next(()=>V.forEach(p.Ui,m=>h.persistence.referenceDelegate.removeReference(d,p.targetId,m)))))}catch(d){if(!wr(d))throw d;z("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const m=h.os.get(p),_=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(_);h.os=h.os.insert(p,v)}}}(s.localStore,r))}async function xx(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const s=await em(e.localStore,t);e.currentUser=t,function(r,o){r.ka.forEach(a=>{a.forEach(l=>{l.reject(new B(L.CANCELLED,o))})}),r.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ir(e,s.hs)}}function Ex(n,t){const e=K(n),s=e.Na.get(t);if(s&&s.va)return X().add(s.key);{let i=X();const r=e.Ma.get(t);if(!r)return i;for(const o of r){const a=e.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function wm(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=_m.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ex.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yx.bind(null,t),t.Ca.d_=ox.bind(null,t.eventManager),t.Ca.$a=ax.bind(null,t.eventManager),t}function Tx(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vx.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bx.bind(null,t),t}class Qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xa(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Pw(this.persistence,new Rw,t.initialUser,this.serializer)}Ga(t){return new Iw(su.Zr,this.serializer)}Wa(t){return new Vw}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qo.provider={build:()=>new Qo};class pc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$d(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xx.bind(null,this.syncEngine),await sx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new rx}()}createDatastore(t){const e=xa(t.databaseInfo.databaseId),s=function(r){return new $w(r)}(t.databaseInfo);return function(r,o,a,l){return new Hw(r,o,a,l)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,r,o,a){return new qw(s,i,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>$d(this.syncEngine,e,0),function(){return Nd.D()?new Nd:new Fw}())}createSyncEngine(t,e){return function(i,r,o,a,l,u,h){const d=new hx(i,r,o,a,l,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const r=K(i);z("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await Tr(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}pc.provider={build:()=>new pc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):un("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=Jt.UNAUTHENTICATED,this.clientId=xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new an;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=uu(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function xl(n,t){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await em(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function jd(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ax(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>Vd(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Vd(t.remoteStore,i)),n._onlineComponents=t}async function Ax(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await xl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;zs("Error using user provided cache. Falling back to memory cache: "+e),await xl(n,new Qo)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await xl(n,new Qo);return n._offlineComponents}async function Em(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await jd(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await jd(n,new pc))),n._onlineComponents}function Sx(n){return Em(n).then(t=>t.syncEngine)}async function Tm(n){const t=await Em(n),e=t.eventManager;return e.onListen=dx.bind(null,t.syncEngine),e.onUnlisten=gx.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=fx.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=mx.bind(null,t.syncEngine),e}function Rx(n,t,e={}){const s=new an;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const h=new xm({next:p=>{h.Za(),o.enqueueAndForget(()=>dm(r,d));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new fm(Xc(a.path),h,{includeMetadataChanges:!0,_a:!0});return hm(r,d)}(await Tm(n),n.asyncQueue,t,e,s)),s.promise}function kx(n,t,e={}){const s=new an;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,u){const h=new xm({next:p=>{h.Za(),o.enqueueAndForget(()=>dm(r,d)),p.fromCache&&l.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new fm(a,h,{includeMetadataChanges:!0,_a:!0});return hm(r,d)}(await Tm(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function Im(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(n,t,e){if(!e)throw new B(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Px(n,t,e,s){if(t===!0&&s===!0)throw new B(L.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Wd(n){if(!j.isDocumentKey(n))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qd(n){if(j.isDocumentKey(n))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ia(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":W()}function Re(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ia(n);throw new B(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Cx(n,t){if(t<=0)throw new B(L.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Px("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Im((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Aa{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gd(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Kb;switch(s.type){case"firstParty":return new Jb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=Hd.get(e);s&&(z("ComponentProvider","Removing Datastore"),Hd.delete(e),s.terminate())}(this),Promise.resolve()}}function Dx(n,t,e,s={}){var i;const r=(n=Re(n,Aa))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Jt.MOCK_USER;else{a=cg(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Jt(u)}n._authCredentials=new Yb(new wg(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new $n(this.firestore,t,this._query)}}class le{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new le(this.firestore,t,this._key)}}class Cn extends $n{constructor(t,e,s){super(t,e,Xc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new le(this.firestore,null,new j(t))}withConverter(t){return new Cn(this.firestore,t,this._path)}}function Ut(n,t,...e){if(n=At(n),Am("collection","path",t),n instanceof Aa){const s=pt.fromString(t,...e);return qd(s),new Cn(n,null,s)}{if(!(n instanceof le||n instanceof Cn))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(t,...e));return qd(s),new Cn(n.firestore,null,s)}}function ke(n,t,...e){if(n=At(n),arguments.length===1&&(t=xg.newId()),Am("doc","path",t),n instanceof Aa){const s=pt.fromString(t,...e);return Wd(s),new le(n,null,new j(s))}{if(!(n instanceof le||n instanceof Cn))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(t,...e));return Wd(s),new le(n.firestore,n instanceof Cn?n.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new sm(this,"async_queue_retry"),this.Vu=()=>{const s=wl();s&&z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const e=wl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=wl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new an;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!wr(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw un("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=e,e}enqueueAfterDelay(t,e,s){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=cu.createAndSchedule(this,t,e,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class vs extends Aa{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new Kd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Kd(t),this._firestoreClient=void 0,await t}}}function Mx(n,t){const e=typeof n=="object"?n:zc(),s=typeof n=="string"?n:"(default)",i=ga(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=og("firestore");r&&Dx(i,...r)}return i}function fu(n){if(n._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ox(n),n._firestoreClient}function Ox(n){var t,e,s;const i=n._freezeSettings(),r=function(a,l,u,h){return new h0(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Im(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Ix(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ks(qt.fromBase64String(t))}catch(e){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ks(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
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
 */class mu{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=/^__.*__$/;class Nx{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new Bn(t,this.data,this.fieldMask,e,this.fieldTransforms):new xr(t,this.data,e,this.fieldTransforms)}}class Sm{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new Bn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Rm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class _u{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new _u(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.Ou(t),i}Nu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Jo(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Rm(this.Cu)&&Lx.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Vx{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||xa(t)}Qu(t,e,s,i=!1){return new _u({Cu:t,methodName:e,qu:s,path:Ht.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ra(n){const t=n._freezeSettings(),e=xa(n._databaseId);return new Vx(n._databaseId,!!t.ignoreUndefinedProperties,e)}function km(n,t,e,s,i,r={}){const o=n.Qu(r.merge||r.mergeFields?2:0,t,e,i);yu("Data must be an object, but it was:",o,s);const a=Pm(s,o);let l,u;if(r.merge)l=new _e(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=gc(t,d,e);if(!o.contains(p))throw new B(L.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Dm(h,p)||h.push(p)}l=new _e(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new Nx(new de(a),l,u)}class ka extends pu{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ka}}function Fx(n,t,e,s){const i=n.Qu(1,t,e);yu("Data must be an object, but it was:",i,s);const r=[],o=de.empty();_s(s,(l,u)=>{const h=vu(t,l,e);u=At(u);const d=i.Nu(h);if(u instanceof ka)r.push(h);else{const p=Ar(u,d);p!=null&&(r.push(h),o.set(h,p))}});const a=new _e(r);return new Sm(o,a,i.fieldTransforms)}function Ux(n,t,e,s,i,r){const o=n.Qu(1,t,e),a=[gc(t,s,e)],l=[i];if(r.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<r.length;p+=2)a.push(gc(t,r[p])),l.push(r[p+1]);const u=[],h=de.empty();for(let p=a.length-1;p>=0;--p)if(!Dm(u,a[p])){const m=a[p];let _=l[p];_=At(_);const v=o.Nu(m);if(_ instanceof ka)u.push(m);else{const w=Ar(_,v);w!=null&&(u.push(m),h.set(m,w))}}const d=new _e(u);return new Sm(h,d,o.fieldTransforms)}function Bx(n,t,e,s=!1){return Ar(e,n.Qu(s?4:3,t))}function Ar(n,t){if(Cm(n=At(n)))return yu("Unsupported field value:",t,n),Pm(n,t);if(n instanceof pu)return function(s,i){if(!Rm(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=Ar(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(n,t)}return function(s,i){if((s=At(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return M0(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=kt.fromDate(s);return{timestampValue:Yo(i.serializer,r)}}if(s instanceof kt){const r=new kt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Yo(i.serializer,r)}}if(s instanceof gu)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ks)return{bytesValue:Kg(i.serializer,s._byteString)};if(s instanceof le){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:eu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof mu)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Qc(a.serializer,l)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${Ia(s)}`)}(n,t)}function Pm(n,t){const e={};return Eg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_s(n,(s,i)=>{const r=Ar(i,t.Mu(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function Cm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof kt||n instanceof gu||n instanceof Ks||n instanceof le||n instanceof pu||n instanceof mu)}function yu(n,t,e){if(!Cm(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=Ia(e);throw s==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+s)}}function gc(n,t,e){if((t=At(t))instanceof Sa)return t._internalPath;if(typeof t=="string")return vu(n,t);throw Jo("Field path arguments must be of type string or ",n,!1,void 0,e)}const $x=new RegExp("[~\\*/\\[\\]]");function vu(n,t,e){if(t.search($x)>=0)throw Jo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Sa(...t.split("."))._internalPath}catch{throw Jo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Jo(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new B(L.INVALID_ARGUMENT,a+n+l)}function Dm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new zx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class zx extends Mm{data(){return super.data()}}function Pa(n,t){return typeof t=="string"?vu(n,t):t instanceof Sa?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bu{}class wu extends bu{}function ue(n,t,...e){let s=[];t instanceof bu&&s.push(t),s=s.concat(e),function(r){const o=r.filter(l=>l instanceof xu).length,a=r.filter(l=>l instanceof Ca).length;if(o>1||o>0&&a>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class Ca extends wu{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new Ca(t,e,s)}_apply(t){const e=this._parse(t);return Om(t._query,e),new $n(t.firestore,t.converter,oc(t._query,e))}_parse(t){const e=Ra(t.firestore);return function(r,o,a,l,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Xd(d,h);const m=[];for(const _ of d)m.push(Yd(l,r,_));p={arrayValue:{values:m}}}else p=Yd(l,r,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Xd(d,h),p=Bx(a,o,d,h==="in"||h==="not-in");return Lt.create(u,h,p)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Nt(n,t,e){const s=t,i=Pa("where",n);return Ca._create(i,s,e)}class xu extends bu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new xu(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:Se.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const l of a)Om(o,l),o=oc(o,l)}(t._query,e),new $n(t.firestore,t.converter,oc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Eu extends wu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Eu(t,e)}_apply(t){const e=function(i,r,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rr(r,o)}(t._query,this._field,this._direction);return new $n(t.firestore,t.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new ei(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function mc(n,t="asc"){const e=t,s=Pa("orderBy",n);return Eu._create(s,e)}class Tu extends wu{constructor(t,e,s){super(),this.type=t,this._limit=e,this._limitType=s}static _create(t,e,s){return new Tu(t,e,s)}_apply(t){return new $n(t.firestore,t.converter,qo(t._query,this._limit,this._limitType))}}function Ao(n){return Cx("limit",n),Tu._create("limit",n,"F")}function Yd(n,t,e){if(typeof(e=At(e))=="string"){if(e==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dg(t)&&e.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(pt.fromString(e));if(!j.isDocumentKey(s))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return _d(n,new j(s))}if(e instanceof le)return _d(n,e._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(e)}.`)}function Xd(n,t){if(!Array.isArray(n)||n.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Om(n,t){const e=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Hx{convertValue(t,e="none"){switch(hs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return St(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(us(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw W()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return _s(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertVectorValue(t){var e,s,i;const r=(i=(s=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>St(o.doubleValue));return new mu(r)}convertGeoPoint(t){return new gu(St(t.latitude),St(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=qc(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(nr(t));default:return null}}convertTimestamp(t){const e=Nn(t);return new kt(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=pt.fromString(t);at(tm(s));const i=new sr(s.get(1),s.get(3)),r=new j(s.popFirst(5));return i.isEqual(e)||un(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Nm extends Mm{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Pa("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class So extends Nm{data(t={}){return super.data(t)}}class Wx{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Oi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new So(this._firestore,this._userDataWriter,s.key,s,new Oi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new So(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Oi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new So(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Oi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:qx(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function qx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n){n=Re(n,le);const t=Re(n.firestore,vs);return Rx(fu(t),n._key).then(e=>Yx(t,n,e))}class Vm extends Hx{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ks(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new le(this.firestore,null,e)}}function Ot(n){n=Re(n,$n);const t=Re(n.firestore,vs),e=fu(t),s=new Vm(t);return jx(n._query),kx(e,n._query).then(i=>new Wx(t,s,n,i))}function Gx(n,t,e){n=Re(n,le);const s=Re(n.firestore,vs),i=Lm(n.converter,t);return Da(s,[km(Ra(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,xe.none())])}function Ys(n,t,e,...s){n=Re(n,le);const i=Re(n.firestore,vs),r=Ra(i);let o;return o=typeof(t=At(t))=="string"||t instanceof Sa?Ux(r,"updateDoc",n._key,t,e,s):Fx(r,"updateDoc",n._key,t),Da(i,[o.toMutation(n._key,xe.exists(!0))])}function Kx(n){return Da(Re(n.firestore,vs),[new Jc(n._key,xe.none())])}function Iu(n,t){const e=Re(n.firestore,vs),s=ke(n),i=Lm(n.converter,t);return Da(e,[km(Ra(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,xe.exists(!1))]).then(()=>s)}function Da(n,t){return function(s,i){const r=new an;return s.asyncQueue.enqueueAndForget(async()=>_x(await Sx(s),i,r)),r.promise}(fu(n),t)}function Yx(n,t,e){const s=e.docs.get(t._key),i=new Vm(n);return new Nm(n,i,t._key,s,new Oi(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){ti=i})(ms),ls(new On("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new vs(new Xb(s.getProvider("auth-internal")),new t0(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sr(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Le(dd,"4.7.3",t),Le(dd,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="firebasestorage.googleapis.com",Um="storageBucket",Xx=2*60*1e3,Qx=10*60*1e3,Jx=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ze{constructor(t,e,s=0){super(El(t),`Firebase Storage: ${e} (${El(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return El(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mt||(mt={}));function El(n){return"storage/"+n}function Au(){const n="An unknown error occurred, please check the error payload for server response.";return new xt(mt.UNKNOWN,n)}function Zx(n){return new xt(mt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function tE(n){return new xt(mt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xt(mt.UNAUTHENTICATED,n)}function nE(){return new xt(mt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sE(n){return new xt(mt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Bm(){return new xt(mt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $m(){return new xt(mt.CANCELED,"User canceled the upload/download.")}function iE(n){return new xt(mt.INVALID_URL,"Invalid URL '"+n+"'.")}function rE(n){return new xt(mt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function oE(){return new xt(mt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Um+"' property when initializing the app?")}function zm(){return new xt(mt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aE(){return new xt(mt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function lE(){return new xt(mt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cE(n){return new xt(mt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _c(n){return new xt(mt.INVALID_ARGUMENT,n)}function jm(){return new xt(mt.APP_DELETED,"The Firebase app was deleted.")}function uE(n){return new xt(mt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qi(n,t){return new xt(mt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function bi(n){throw new xt(mt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=ye.makeFromUrl(t,e)}catch{return new ye(t,"")}if(s.path==="")return s;throw rE(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",d=e.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),_={bucket:1,path:3},v=e===Fm?"(?:storage.googleapis.com|storage.cloud.google.com)":e,w="([^?#]*)",S=new RegExp(`^https?://${v}/${i}/${w}`,"i"),C=[{regex:a,indices:l,postModify:r},{regex:m,indices:_,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<C.length;D++){const O=C[D],N=O.regex.exec(t);if(N){const E=N[O.indices.bucket];let b=N[O.indices.path];b||(b=""),s=new ye(E,b),O.postModify(s);break}}if(s==null)throw iE(t);return s}}class hE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...w){u||(u=!0,t.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,n(m,l())},w)}function p(){r&&clearTimeout(r)}function m(w,...S){if(u){p();return}if(w){p(),h.call(null,w,...S);return}if(l()||o){p(),h.call(null,w,...S);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,d(C)}let _=!1;function v(w){_||(_=!0,p(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,v(!0)},e),v}function fE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){return n!==void 0}function gE(n){return typeof n=="function"}function mE(n){return typeof n=="object"&&!Array.isArray(n)}function Ma(n){return typeof n=="string"||n instanceof String}function Jd(n){return Su()&&n instanceof Blob}function Su(){return typeof Blob<"u"}function Zd(n,t,e,s){if(s<t)throw _c(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw _c(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function Hm(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var rs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(rs||(rs={}));/**
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
 */function Wm(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=t.indexOf(n)!==-1;return e||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(t,e,s,i,r,o,a,l,u,h,d,p=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new so(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===rs.NO_ERROR,l=r.getStatus();if(!a||Wm(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===rs.ABORT;s(!1,new so(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new so(u,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());pE(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Au();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?jm():$m();o(l)}else{const l=Bm();o(l)}};this.canceled_?e(!1,new so(!1,null,!0)):this.backoffId_=dE(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&fE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class so{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function yE(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function vE(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function bE(n,t){t&&(n["X-Firebase-GMPID"]=t)}function wE(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function xE(n,t,e,s,i,r,o=!0){const a=Hm(n.urlParams),l=n.url+a,u=Object.assign({},n.headers);return bE(u,t),yE(u,e),vE(u,r),wE(u,s),new _E(l,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TE(...n){const t=EE();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(Su())return new Blob(n);throw new xt(mt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function IE(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */const Oe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Tl{constructor(t,e){this.data=t,this.contentType=e||null}}function SE(n,t){switch(n){case Oe.RAW:return new Tl(qm(t));case Oe.BASE64:case Oe.BASE64URL:return new Tl(Gm(n,t));case Oe.DATA_URL:return new Tl(kE(t),PE(t))}throw Au()}function qm(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function RE(n){let t;try{t=decodeURIComponent(n)}catch{throw qi(Oe.DATA_URL,"Malformed data URL.")}return qm(t)}function Gm(n,t){switch(n){case Oe.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw qi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Oe.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw qi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=AE(t)}catch(i){throw i.message.includes("polyfill")?i:qi(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class Km{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw qi(Oe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=CE(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function kE(n){const t=new Km(n);return t.base64?Gm(Oe.BASE64,t.rest):RE(t.rest)}function PE(n){return new Km(n).contentType}function CE(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e){let s=0,i="";Jd(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Jd(this.data_)){const s=this.data_,i=IE(s,t,e);return i===null?null:new yn(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new yn(s,!0)}}static getBlob(...t){if(Su()){const e=t.map(s=>s instanceof yn?s.data_:s);return new yn(TE.apply(null,e))}else{const e=t.map(o=>Ma(o)?SE(Oe.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new yn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n){let t;try{t=JSON.parse(n)}catch{return null}return mE(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function ME(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function Xm(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(n,t){return t}class ae{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||OE}}let io=null;function LE(n){return!Ma(n)||n.length<2?n:Xm(n)}function Qm(){if(io)return io;const n=[];n.push(new ae("bucket")),n.push(new ae("generation")),n.push(new ae("metageneration")),n.push(new ae("name","fullPath",!0));function t(r,o){return LE(o)}const e=new ae("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new ae("size");return i.xform=s,n.push(i),n.push(new ae("timeCreated")),n.push(new ae("updated")),n.push(new ae("md5Hash",null,!0)),n.push(new ae("cacheControl",null,!0)),n.push(new ae("contentDisposition",null,!0)),n.push(new ae("contentEncoding",null,!0)),n.push(new ae("contentLanguage",null,!0)),n.push(new ae("contentType",null,!0)),n.push(new ae("metadata","customMetadata",!0)),io=n,io}function NE(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new ye(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function VE(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return NE(s,n),s}function Jm(n,t,e){const s=Ym(t);return s===null?null:VE(n,s,e)}function FE(n,t,e,s){const i=Ym(t);if(i===null||!Ma(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const h=n.bucket,d=n.fullPath,p="/b/"+o(h)+"/o/"+o(d),m=Sr(p,e,s),_=Hm({alt:"media",token:u});return m+_})[0]}function Zm(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class ii{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(n){if(!n)throw Au()}function Ru(n,t){function e(s,i){const r=Jm(n,i,t);return ln(r!==null),r}return e}function UE(n,t){function e(s,i){const r=Jm(n,i,t);return ln(r!==null),FE(r,i,n.host,n._protocol)}return e}function Rr(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=nE():i=eE():e.getStatus()===402?i=tE(n.bucket):e.getStatus()===403?i=sE(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function t_(n){const t=Rr(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=Zx(n.path)),r.serverResponse=i.serverResponse,r}return e}function BE(n,t,e){const s=t.fullServerUrl(),i=Sr(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new ii(i,r,Ru(n,e),o);return a.errorHandler=t_(t),a}function $E(n,t,e){const s=t.fullServerUrl(),i=Sr(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new ii(i,r,UE(n,e),o);return a.errorHandler=t_(t),a}function zE(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function e_(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=zE(null,t)),s}function jE(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let D=0;D<2;D++)C=C+Math.random().toString().slice(2);return C}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=e_(t,s,i),h=Zm(u,e),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",m=yn.getBlob(d,s,p);if(m===null)throw zm();const _={name:u.fullPath},v=Sr(r,n.host,n._protocol),w="POST",S=n.maxUploadRetryTime,k=new ii(v,w,Ru(n,e),S);return k.urlParams=_,k.headers=o,k.body=m.uploadData(),k.errorHandler=Rr(t),k}class Zo{constructor(t,e,s,i){this.current=t,this.total=e,this.finalized=!!s,this.metadata=i||null}}function ku(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{ln(!1)}return ln(!!e&&(t||["active"]).indexOf(e)!==-1),e}function HE(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o=e_(t,s,i),a={name:o.fullPath},l=Sr(r,n.host,n._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=Zm(o,e),p=n.maxUploadRetryTime;function m(v){ku(v);let w;try{w=v.getResponseHeader("X-Goog-Upload-URL")}catch{ln(!1)}return ln(Ma(w)),w}const _=new ii(l,u,m,p);return _.urlParams=a,_.headers=h,_.body=d,_.errorHandler=Rr(t),_}function WE(n,t,e,s){const i={"X-Goog-Upload-Command":"query"};function r(u){const h=ku(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ln(!1)}d||ln(!1);const p=Number(d);return ln(!isNaN(p)),new Zo(p,s.size(),h==="final")}const o="POST",a=n.maxUploadRetryTime,l=new ii(e,o,r,a);return l.headers=i,l.errorHandler=Rr(t),l}const tf=256*1024;function qE(n,t,e,s,i,r,o,a){const l=new Zo(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw aE();const u=l.total-l.current;let h=u;i>0&&(h=Math.min(h,i));const d=l.current,p=d+h;let m="";h===0?m="finalize":u===h?m="upload, finalize":m="upload";const _={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},v=s.slice(d,p);if(v===null)throw zm();function w(D,O){const N=ku(D,["active","final"]),E=l.current+h,b=s.size();let x;return N==="final"?x=Ru(t,r)(D,O):x=null,new Zo(E,b,N==="final",x)}const S="POST",k=t.maxUploadRetryTime,C=new ii(e,S,w,k);return C.headers=_,C.body=v.uploadData(),C.progressCallback=a||null,C.errorHandler=Rr(n),C}const he={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Il(n){switch(n){case"running":case"pausing":case"canceling":return he.RUNNING;case"paused":return he.PAUSED;case"success":return he.SUCCESS;case"canceled":return he.CANCELED;case"error":return he.ERROR;default:return he.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ss(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class KE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=rs.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=rs.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=rs.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw bi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class YE extends KE{initXhr(){this.xhr_.responseType="text"}}function Os(){return new YE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=Qm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(mt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(Wm(i.status,[]))if(r)i=Bm();else{this.sleepTime=Math.max(this.sleepTime*2,Jx),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(mt.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const s=HE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Os,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,s)=>{const i=WE(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,Os,e,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=tf*this._chunkMultiplier,e=new Zo(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=qE(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Os,i,r,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){tf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const s=BE(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Os,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const s=jE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Os,t,e);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=$m(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Il(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,i){const r=new GE(e||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Il(this._state)){case he.SUCCESS:Ss(this._resolve.bind(null,this.snapshot))();break;case he.CANCELED:case he.ERROR:const e=this._reject;Ss(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Il(this._state)){case he.RUNNING:case he.PAUSED:t.next&&Ss(t.next.bind(t,this.snapshot))();break;case he.SUCCESS:t.complete&&Ss(t.complete.bind(t))();break;case he.CANCELED:case he.ERROR:t.error&&Ss(t.error.bind(t,this._error))();break;default:t.error&&Ss(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e){this._service=t,e instanceof ye?this._location=e:this._location=ye.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ds(t,e)}get root(){const t=new ye(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xm(this._location.path)}get storage(){return this._service}get parent(){const t=DE(this._location.path);if(t===null)return null;const e=new ye(this._location.bucket,t);return new ds(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw uE(t)}}function QE(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new XE(n,new yn(t),e)}function JE(n){n._throwIfRoot("getDownloadURL");const t=$E(n.storage,n._location,Qm());return n.storage.makeRequestWithTokens(t,Os).then(e=>{if(e===null)throw lE();return e})}function ZE(n,t){const e=ME(n._location.path,t),s=new ye(n._location.bucket,e);return new ds(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(n){return/^[A-Za-z]+:\/\//.test(n)}function eT(n,t){return new ds(n,t)}function n_(n,t){if(n instanceof Pu){const e=n;if(e._bucket==null)throw oE();const s=new ds(e,e._bucket);return t!=null?n_(s,t):s}else return t!==void 0?ZE(n,t):n}function nT(n,t){if(t&&tT(t)){if(n instanceof Pu)return eT(n,t);throw _c("To use ref(service, url), the first argument must be a Storage instance.")}else return n_(n,t)}function ef(n,t){const e=t==null?void 0:t[Um];return e==null?null:ye.makeFromBucketSpec(e,n)}function sT(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:cg(i,n.app.options.projectId))}class Pu{constructor(t,e,s,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Fm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Xx,this._maxUploadRetryTime=Qx,this._requests=new Set,i!=null?this._bucket=ye.makeFromBucketSpec(i,this._host):this._bucket=ef(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ye.makeFromBucketSpec(this._url,t):this._bucket=ef(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Zd("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Zd("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ds(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new hE(jm());{const o=xE(t,this._appId,s,i,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const nf="@firebase/storage",sf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="storage";function iT(n,t,e){return n=At(n),QE(n,t,e)}function rT(n){return n=At(n),JE(n)}function oT(n,t){return n=At(n),nT(n,t)}function aT(n=zc(),t){n=At(n);const s=ga(n,s_).getImmediate({identifier:t}),i=og("storage");return i&&lT(s,...i),s}function lT(n,t,e,s={}){sT(n,t,e,s)}function cT(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Pu(e,s,i,t,ms)}function uT(){ls(new On(s_,cT,"PUBLIC").setMultipleInstances(!0)),Le(nf,sf,""),Le(nf,sf,"esm2017")}uT();function Cu(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(e[s[i]]=n[s[i]]);return e}function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hT=i_,r_=new yr("auth","Firebase",i_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Bc("@firebase/auth");function dT(n,...t){ta.logLevel<=J.WARN&&ta.warn(`Auth (${ms}): ${n}`,...t)}function Ro(n,...t){ta.logLevel<=J.ERROR&&ta.error(`Auth (${ms}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n,...t){throw Du(n,...t)}function Fe(n,...t){return Du(n,...t)}function o_(n,t,e){const s=Object.assign(Object.assign({},hT()),{[t]:e});return new yr("auth","Firebase",s).create(t,{appName:n.name})}function Dn(n){return o_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Du(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return r_.create(n,...t)}function H(n,t,...e){if(!n)throw Du(t,...e)}function tn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Ro(t),new Error(t)}function dn(n,t){n||tn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fT(){return rf()==="http:"||rf()==="https:"}function rf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kr{constructor(t,e){this.shortDelay=t,this.longDelay=e,dn(e>t,"Short delay should be less than long delay!"),this.isMobile=Ev()||Sv()}get(){return pT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n,t){dn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _T=new kr(3e4,6e4);function zn(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function fn(n,t,e,s,i={}){return l_(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=vr(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:t,headers:l},r);return Iv()||(u.referrerPolicy="no-referrer"),a_.fetch()(c_(n,n.config.apiHost,e,a),u)})}async function l_(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},mT),t);try{const i=new vT(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ro(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ro(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ro(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw o_(n,h,u);Pe(n,h)}}catch(i){if(i instanceof ze)throw i;Pe(n,"network-request-failed",{message:String(i)})}}async function Oa(n,t,e,s,i={}){const r=await fn(n,t,e,s,i);return"mfaPendingCredential"in r&&Pe(n,"multi-factor-auth-required",{_serverResponse:r}),r}function c_(n,t,e,s){const i=`${t}${e}?${s}`;return n.config.emulator?Mu(n.config,i):`${n.config.apiScheme}://${i}`}function yT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vT{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(Fe(this.auth,"network-request-failed")),_T.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=Fe(n,t,s);return i.customData._tokenResponse=e,i}function of(n){return n!==void 0&&n.enterprise!==void 0}class bT{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return yT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function wT(n,t){return fn(n,"GET","/v2/recaptchaConfig",zn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(n,t){return fn(n,"POST","/v1/accounts:delete",t)}async function u_(n,t){return fn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ET(n,t=!1){const e=At(n),s=await e.getIdToken(t),i=Ou(s);H(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Gi(Al(i.auth_time)),issuedAtTime:Gi(Al(i.iat)),expirationTime:Gi(Al(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Al(n){return Number(n)*1e3}function Ou(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=ig(e);return i?JSON.parse(i):(Ro("Failed to decode base64 JWT payload"),null)}catch(i){return Ro("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function af(n){const t=Ou(n);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof ze&&TT(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function TT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vc{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(n){var t;const e=n.auth,s=await n.getIdToken(),i=await lr(n,u_(e,{idToken:s}));H(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?h_(r.providerUserInfo):[],a=ST(n.providerData,o),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new vc(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function AT(n){const t=At(n);await ea(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ST(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function h_(n){return n.map(t=>{var{providerId:e}=t,s=Cu(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(n,t){const e=await l_(n,{},async()=>{const s=vr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=c_(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",a_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function kT(n,t){return fn(n,"POST","/v2/accounts:revokeToken",zn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):af(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){H(t.length!==0,"internal-error");const e=af(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await RT(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new Fs;return s&&(H(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,t){H(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class en{constructor(t){var{uid:e,auth:s,stsTokenManager:i}=t,r=Cu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new vc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await lr(this,this.stsTokenManager.getToken(this.auth,t));return H(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return ET(this,t)}reload(){return AT(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new en(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await ea(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(Dn(this.auth));const t=await this.getIdToken();return await lr(this,xT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,i,r,o,a,l,u,h;const d=(s=e.displayName)!==null&&s!==void 0?s:void 0,p=(i=e.email)!==null&&i!==void 0?i:void 0,m=(r=e.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=e.photoURL)!==null&&o!==void 0?o:void 0,v=(a=e.tenantId)!==null&&a!==void 0?a:void 0,w=(l=e._redirectEventId)!==null&&l!==void 0?l:void 0,S=(u=e.createdAt)!==null&&u!==void 0?u:void 0,k=(h=e.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:D,isAnonymous:O,providerData:N,stsTokenManager:E}=e;H(C&&E,t,"internal-error");const b=Fs.fromJSON(this.name,E);H(typeof C=="string",t,"internal-error"),_n(d,t.name),_n(p,t.name),H(typeof D=="boolean",t,"internal-error"),H(typeof O=="boolean",t,"internal-error"),_n(m,t.name),_n(_,t.name),_n(v,t.name),_n(w,t.name),_n(S,t.name),_n(k,t.name);const x=new en({uid:C,auth:t,email:p,emailVerified:D,displayName:d,isAnonymous:O,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:b,createdAt:S,lastLoginAt:k});return N&&Array.isArray(N)&&(x.providerData=N.map(I=>Object.assign({},I))),w&&(x._redirectEventId=w),x}static async _fromIdTokenResponse(t,e,s=!1){const i=new Fs;i.updateFromServerResponse(e);const r=new en({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await ea(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?h_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Fs;a.updateFromIdToken(s);const l=new en({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new vc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=new Map;function nn(n){dn(n instanceof Function,"Expected a class definition");let t=lf.get(n);return t?(dn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,lf.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}d_.type="NONE";const cf=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n,t,e){return`firebase:${n}:${t}:${e}`}class Us{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ko(this.userKey,i.apiKey,r),this.fullPersistenceKey=ko("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?en._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new Us(nn(cf),t,s);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||nn(cf);const o=ko(s,t.config.apiKey,t.name);let a=null;for(const u of e)try{const h=await u._get(o);if(h){const d=en._fromJSON(t,h);u!==r&&(a=d),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Us(r,t,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Us(r,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(m_(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(f_(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(y_(t))return"Blackberry";if(v_(t))return"Webos";if(p_(t))return"Safari";if((t.includes("chrome/")||g_(t))&&!t.includes("edge/"))return"Chrome";if(__(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function f_(n=ne()){return/firefox\//i.test(n)}function p_(n=ne()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function g_(n=ne()){return/crios\//i.test(n)}function m_(n=ne()){return/iemobile/i.test(n)}function __(n=ne()){return/android/i.test(n)}function y_(n=ne()){return/blackberry/i.test(n)}function v_(n=ne()){return/webos/i.test(n)}function Lu(n=ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function PT(n=ne()){var t;return Lu(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function CT(){return Rv()&&document.documentMode===10}function b_(n=ne()){return Lu(n)||__(n)||v_(n)||y_(n)||/windows phone/i.test(n)||m_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n,t=[]){let e;switch(n){case"Browser":e=uf(ne());break;case"Worker":e=`${uf(ne())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${ms}/${s}`}/**
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
 */async function MT(n,t={}){return fn(n,"GET","/v2/passwordPolicy",zn(n,t))}/**
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
 */const OT=6;class LT{constructor(t){var e,s,i,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:OT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(e=l.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hf(this),this.idTokenSubscription=new hf(this),this.beforeStateQueue=new DT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=nn(e)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Us.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await u_(this,{idToken:t}),s=await en._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ea(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=gT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ze(this.app))return Promise.reject(Dn(this));const e=t?At(t):null;return e&&H(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ze(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await MT(this),e=new LT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yr("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await kT(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&nn(t)||this._popupRedirectResolver;H(e,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[nn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,s,i);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&dT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function bs(n){return At(n)}class hf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Nv(e=>this.observer=e)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VT(n){La=n}function x_(n){return La.loadJS(n)}function FT(){return La.recaptchaEnterpriseScript}function UT(){return La.gapiScript}function BT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const $T="recaptcha-enterprise",zT="NO_RECAPTCHA";class jT{constructor(t){this.type=$T,this.auth=bs(t)}async verify(t="verify",e=!1){async function s(r){if(!e){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{wT(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new bT(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;of(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:t}).then(u=>{o(u)}).catch(()=>{o(zT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!e&&of(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FT();l.length!==0&&(l+=a),x_(l).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function df(n,t,e,s=!1){const i=new jT(n);let r;try{r=await i.verify(e)}catch{r=await i.verify(e,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bc(n,t,e,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await df(n,t,e,e==="getOobCode");return s(n,r)}else return s(n,t).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await df(n,t,e,e==="getOobCode");return s(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n,t){const e=ga(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(zo(r,t??{}))return i;Pe(i,"already-initialized")}return e.initialize({options:t})}function WT(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(nn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function qT(n,t,e){const s=bs(n);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=E_(t),{host:o,port:a}=GT(t),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),KT()}function E_(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function GT(n){const t=E_(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ff(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ff(o)}}}function ff(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function KT(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return tn("not implemented")}_getIdTokenResponse(t){return tn("not implemented")}_linkToIdToken(t,e){return tn("not implemented")}_getReauthenticationResolver(t){return tn("not implemented")}}async function YT(n,t){return fn(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(n,t){return Oa(n,"POST","/v1/accounts:signInWithPassword",zn(n,t))}async function QT(n,t){return fn(n,"POST","/v1/accounts:sendOobCode",zn(n,t))}async function JT(n,t){return QT(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(n,t){return Oa(n,"POST","/v1/accounts:signInWithEmailLink",zn(n,t))}async function tI(n,t){return Oa(n,"POST","/v1/accounts:signInWithEmailLink",zn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Nu{constructor(t,e,s,i=null){super("password",s),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new cr(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new cr(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bc(t,e,"signInWithPassword",XT);case"emailLink":return ZT(t,{email:this._email,oobCode:this._password});default:Pe(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bc(t,s,"signUpPassword",YT);case"emailLink":return tI(t,{idToken:e,email:this._email,oobCode:this._password});default:Pe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(n,t){return Oa(n,"POST","/v1/accounts:signInWithIdp",zn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="http://localhost";class fs extends Nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new fs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Pe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=e,r=Cu(e,["providerId","signInMethod"]);if(!s||!i)return null;const o=new fs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Bs(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,Bs(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Bs(t,e)}buildRequest(){const t={requestUri:eI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=vr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sI(n){const t=ki(Pi(n)).link,e=t?ki(Pi(t)).deep_link_id:null,s=ki(Pi(n)).deep_link_id;return(s?ki(Pi(s)).link:null)||s||e||t||n}class Vu{constructor(t){var e,s,i,r,o,a;const l=ki(Pi(t)),u=(e=l.apiKey)!==null&&e!==void 0?e:null,h=(s=l.oobCode)!==null&&s!==void 0?s:null,d=nI((i=l.mode)!==null&&i!==void 0?i:null);H(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=sI(t);try{return new Vu(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(t,e){return cr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=Vu.parseLink(e);return H(s,"argument-error"),cr._fromEmailAndCode(t,s.code,s.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends T_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Pr{constructor(){super("facebook.com")}static credential(t){return fs._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vn.credential(t.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return fs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return bn.credential(e,s)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Pr{constructor(){super("github.com")}static credential(t){return fs._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Pr{constructor(){super("twitter.com")}static credential(t,e){return fs._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return xn.credentialFromTaggedObject(t)}static credentialFromError(t){return xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return xn.credential(e,s)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await en._fromIdTokenResponse(t,s,i),o=pf(s);return new Xs({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=pf(s);return new Xs({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function pf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends ze{constructor(t,e,s,i){var r;super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,na.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new na(t,e,s,i)}}function I_(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(n,r,t,s):r})}async function iI(n,t,e=!1){const s=await lr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Xs._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(n,t,e=!1){const{auth:s}=n;if(Ze(s.app))return Promise.reject(Dn(s));const i="reauthenticate";try{const r=await lr(n,I_(s,i,t,n),e);H(r.idToken,s,"internal-error");const o=Ou(r.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(n.uid===a,s,"user-mismatch"),Xs._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Pe(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(n,t,e=!1){if(Ze(n.app))return Promise.reject(Dn(n));const s="signIn",i=await I_(n,s,t),r=await Xs._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}async function oI(n,t){return A_(bs(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(n){const t=bs(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function lI(n,t,e){const s=bs(n);await bc(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",JT)}function cI(n,t,e){return Ze(n.app)?Promise.reject(Dn(n)):oI(At(n),ri.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&aI(n),s})}function uI(n,t,e,s){return At(n).onIdTokenChanged(t,e,s)}function hI(n,t,e){return At(n).beforeAuthStateChanged(t,e)}function dI(n,t,e,s){return At(n).onAuthStateChanged(t,e,s)}function fI(n){return At(n).signOut()}const sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=1e3,gI=10;class R_ extends S_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b_(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);CT()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,gI):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},pI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}R_.type="LOCAL";const mI=R_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends S_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}k_.type="SESSION";const P_=k_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Na{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new Na(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,r)),l=await _I(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Fu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function vI(n){Ue().location.href=n}/**
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
 */function C_(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function bI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xI(){return C_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="firebaseLocalStorageDb",EI=1,ia="firebaseLocalStorage",M_="fbase_key";class Cr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Va(n,t){return n.transaction([ia],t?"readwrite":"readonly").objectStore(ia)}function TI(){const n=indexedDB.deleteDatabase(D_);return new Cr(n).toPromise()}function wc(){const n=indexedDB.open(D_,EI);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ia,{keyPath:M_})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ia)?t(s):(s.close(),await TI(),t(await wc()))})})}async function gf(n,t,e){const s=Va(n,!0).put({[M_]:t,value:e});return new Cr(s).toPromise()}async function II(n,t){const e=Va(n,!1).get(t),s=await new Cr(e).toPromise();return s===void 0?null:s.value}function mf(n,t){const e=Va(n,!0).delete(t);return new Cr(e).toPromise()}const AI=800,SI=3;class O_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wc(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>SI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(xI()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await bI(),!this.activeServiceWorker)return;this.sender=new yI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||wI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await wc();return await gf(t,sa,"1"),await mf(t,sa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>gf(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>II(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>mf(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Va(i,!1).getAll();return new Cr(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O_.type="LOCAL";const RI=O_;new kr(3e4,6e4);/**
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
 */function kI(n,t){return t?nn(t):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Nu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Bs(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Bs(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Bs(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function PI(n){return A_(n.auth,new Uu(n),n.bypassAuthState)}function CI(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),rI(e,new Uu(n),n.bypassAuthState)}async function DI(n){const{auth:t,user:e}=n;return H(e,t,"internal-error"),iI(e,new Uu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return PI;case"linkViaPopup":case"linkViaRedirect":return DI;case"reauthViaPopup":case"reauthViaRedirect":return CI;default:Pe(this.auth,"internal-error")}}resolve(t){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new kr(2e3,1e4);class Ns extends L_{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const t=Fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,MI.get())};t()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="pendingRedirect",Po=new Map;class LI extends L_{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Po.get(this.auth._key());if(!t){try{const s=await NI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Po.set(this.auth._key(),t)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NI(n,t){const e=UI(t),s=FI(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function VI(n,t){Po.set(n._key(),t)}function FI(n){return nn(n._redirectPersistence)}function UI(n){return ko(OI,n.config.apiKey,n.name)}async function BI(n,t,e=!1){if(Ze(n.app))return Promise.reject(Dn(n));const s=bs(n),i=kI(s,t),o=await new LI(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=10*60*1e3;class zI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!jI(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!N_(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(Fe(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$I&&this.cachedEventUids.clear(),this.cachedEventUids.has(_f(t))}saveEventToCache(t){this.cachedEventUids.add(_f(t)),this.lastProcessedEventTime=Date.now()}}function _f(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function N_({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function jI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(n,t={}){return fn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qI=/^https?/;async function GI(n){if(n.config.emulator)return;const{authorizedDomains:t}=await HI(n);for(const e of t)try{if(KI(e))return}catch{}Pe(n,"unauthorized-domain")}function KI(n){const t=yc(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!qI.test(e))return!1;if(WI.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const YI=new kr(3e4,6e4);function yf(){const n=Ue().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function XI(n){return new Promise((t,e)=>{var s,i,r;function o(){yf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yf(),e(Fe(n,"network-request-failed"))},timeout:YI.get()})}if(!((i=(s=Ue().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=Ue().gapi)===null||r===void 0)&&r.load)o();else{const a=BT("iframefcb");return Ue()[a]=()=>{gapi.load?o():e(Fe(n,"network-request-failed"))},x_(`${UT()}?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw Co=null,t})}let Co=null;function QI(n){return Co=Co||XI(n),Co}/**
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
 */const JI=new kr(5e3,15e3),ZI="__/auth/iframe",tA="emulator/auth/iframe",eA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sA(n){const t=n.config;H(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Mu(t,tA):`https://${n.config.authDomain}/${ZI}`,s={apiKey:t.apiKey,appName:n.name,v:ms},i=nA.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${vr(s).slice(1)}`}async function iA(n){const t=await QI(n),e=Ue().gapi;return H(e,n,"internal-error"),t.open({where:document.body,url:sA(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eA,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Fe(n,"network-request-failed"),a=Ue().setTimeout(()=>{r(o)},JI.get());function l(){Ue().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const rA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oA=500,aA=600,lA="_blank",cA="http://localhost";class vf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uA(n,t,e,s=oA,i=aA){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rA),{width:s.toString(),height:i.toString(),top:r,left:o}),u=ne().toLowerCase();e&&(a=g_(u)?lA:e),f_(u)&&(t=t||cA,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[m,_])=>`${p}${m}=${_},`,"");if(PT(u)&&a!=="_self")return hA(t||"",a),new vf(null);const d=window.open(t||"",a,h);H(d,n,"popup-blocked");try{d.focus()}catch{}return new vf(d)}function hA(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const dA="__/auth/handler",fA="emulator/auth/handler",pA=encodeURIComponent("fac");async function bf(n,t,e,s,i,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:ms,eventId:i};if(t instanceof T_){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Lv(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(t instanceof Pr){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${pA}=${encodeURIComponent(l)}`:"";return`${gA(n)}?${vr(a).slice(1)}${u}`}function gA({config:n}){return n.emulator?Mu(n,fA):`https://${n.authDomain}/${dA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="webStorageSupport";class mA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P_,this._completeRedirectFn=BI,this._overrideRedirectResult=VI}async _openPopup(t,e,s,i){var r;dn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await bf(t,e,s,yc(),i);return uA(t,o,Fu())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await bf(t,e,s,yc(),i);return vI(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(dn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await iA(t),s=new zI(t);return e.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Sl,{type:Sl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Sl];o!==void 0&&e(!!o),Pe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=GI(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return b_()||p_()||Lu()}}const _A=mA;var wf="@firebase/auth",xf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function vA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bA(n){ls(new On("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(n)},u=new NT(s,i,r,l);return WT(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),ls(new On("auth-internal",t=>{const e=bs(t.getProvider("auth").getImmediate());return(s=>new yA(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(wf,xf,vA(n)),Le(wf,xf,"esm2017")}/**
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
 */const wA=5*60,xA=lg("authIdTokenMaxAge")||wA;let Ef=null;const EA=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>xA)return;const i=e==null?void 0:e.token;Ef!==i&&(Ef=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TA(n=zc()){const t=ga(n,"auth");if(t.isInitialized())return t.getImmediate();const e=HT(n,{popupRedirectResolver:_A,persistence:[RI,mI,P_]}),s=lg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=EA(r.toString());hI(e,o,()=>o(e.currentUser)),uI(e,a=>o(a))}}const i=rg("auth");return i&&qT(e,`http://${i}`),e}function IA(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}VT({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=Fe("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",IA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bA("Browser");let wi,ot,V_,Li;const AA=async()=>{const n={apiKey:"AIzaSyAuJIZeL0ipjVAdoSjH5Wq5IIwdjWexoaE",authDomain:"controle-de-obras-axel.firebaseapp.com",projectId:"controle-de-obras-axel",storageBucket:"controle-de-obras-axel.firebasestorage.app",messagingSenderId:"438724917414",appId:"1:438724917414:web:cb9674cdc557bdf2a7dc67"};if(!n.apiKey)throw new Error("Firebase configuration not found. Please check .env file.");return wi=dg(n),ot=Mx(wi),V_=aT(wi),Li=TA(wi),wi},dt={state:{currentUser:null,currentTheme:localStorage.getItem("theme")||"dark",currentObra:null,sidebarCollapsed:localStorage.getItem("sidebarCollapsed")==="true"},listeners:[],subscribe(n){return this.listeners.push(n),()=>{this.listeners=this.listeners.filter(t=>t!==n)}},setState(n){this.state={...this.state,...n},this.notify()},notify(){this.listeners.forEach(n=>n(this.state))},setUser(n){this.setState({currentUser:n})},setTheme(n){localStorage.setItem("theme",n),this.applyTheme(n)},applyTheme(n){this.setState({currentTheme:n});const t=document.documentElement;t.classList.remove("dark","theme-light"),n==="dark"||n==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?(t.classList.add("dark"),t.setAttribute("data-theme","dark")):(t.classList.add("theme-light"),t.setAttribute("data-theme","light"))},toggleSidebar(){const n=!this.state.sidebarCollapsed;localStorage.setItem("sidebarCollapsed",n),this.setState({sidebarCollapsed:n})}},ra={init:()=>new Promise(n=>{dI(Li,async t=>{if(t)try{const e=await Qd(ke(ot,"usuarios",t.uid));if(e.exists()){const s={uid:t.uid,email:t.email,...e.data()};dt.setUser(s)}else dt.setUser({uid:t.uid,email:t.email,role:"obra",nome:"Usuário"})}catch(e){console.error("Erro ao buscar perfil:",e),dt.setUser(null)}else dt.setUser(null);n(dt.state.currentUser)})}),login:async(n,t)=>{try{const s=(await cI(Li,n,t)).user,i=await Qd(ke(ot,"usuarios",s.uid));if(i.exists()){const r={uid:s.uid,email:s.email,...i.data()};return dt.setUser(r),r}else throw new Error("Perfil de usuário não encontrado.")}catch(e){throw e}},logout:async()=>{await fI(Li),dt.setUser(null)},recoverPassword:async n=>{await lI(Li,n)}},Mt={routes:{},currentRoute:null,init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())},on(n,t){this.routes[n]=t},navigate(n){window.location.hash=n},matchRoute(n){if(this.routes[n])return{handler:this.routes[n],params:{}};const t=n.split("/").filter(Boolean);for(const[e,s]of Object.entries(this.routes)){const i=e.split("/").filter(Boolean);if(i.length!==t.length)continue;const r={};let o=!0;for(let a=0;a<i.length;a++){const l=i[a],u=t[a];if(l.startsWith(":"))r[l.slice(1)]=decodeURIComponent(u);else if(l!==u){o=!1;break}}if(o)return{handler:s,params:r}}return null},async handleRoute(){const n=window.location.hash.slice(1)||"/";if(!dt.state.currentUser&&n!=="/login"&&n!=="/forgot-password"){this.navigate("/login");return}if(dt.state.currentUser&&(n==="/login"||n==="/forgot-password")){this.navigate("/");return}const t=this.matchRoute(n),e=(t==null?void 0:t.handler)||this.routes["/404"]||(()=>console.warn("Rota não encontrada:",n)),s=(t==null?void 0:t.params)||{};this.currentRoute=n,await e(s)}},$={createInput:({type:n="text",id:t,label:e,placeholder:s="",value:i="",required:r=!1,className:o=""})=>`
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
        `},Tf={renderLogin:()=>`
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
                            ${$.createInput({id:"email",type:"email",label:"Email",placeholder:"seu@email.com",required:!0,className:"mb-4"})}
                            ${$.createInput({id:"password",type:"password",label:"Senha",placeholder:"••••••••",required:!0})}
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <a href="#/forgot-password" class="font-display uppercase tracking-wide text-primary hover:text-primary-strong">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <div>
                            ${$.createButton({id:"btn-login",text:"Entrar",type:"submit",className:"w-full justify-center"})}
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
                        ${$.createInput({id:"email-recovery",type:"email",label:"Email",required:!0})}

                        <div class="flex gap-4">
                            ${$.createButton({id:"btn-back",text:"Voltar",variant:"secondary",className:"w-full justify-center",onClick:"window.location.hash = '/login'"})}
                            ${$.createButton({id:"btn-recover",text:"Enviar",type:"submit",className:"w-full justify-center"})}
                        </div>
                    </form>
                </div>
            </div>
        `},If={initLogin:()=>{const n=document.getElementById("app");n.innerHTML=Tf.renderLogin(),document.getElementById("login-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,i=document.getElementById("password").value,r=document.getElementById("btn-login");try{r.disabled=!0,r.innerHTML=$.createLoader(),await ra.login(s,i),$.createToast("Login realizado com sucesso!"),Mt.navigate("/")}catch(o){console.error(o);let a="Erro ao realizar login.";o.code==="auth/invalid-credential"&&(a="Email ou senha incorretos."),$.createToast(a,"error"),r.disabled=!1,r.innerHTML="<span>Entrar</span>"}})},initForgotPassword:()=>{const n=document.getElementById("app");n.innerHTML=Tf.renderForgotPassword(),document.getElementById("forgot-form").addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email-recovery").value,i=document.getElementById("btn-recover");try{i.disabled=!0,i.innerHTML=$.createLoader(),await ra.recoverPassword(s),$.createToast("Email de recuperação enviado!"),setTimeout(()=>Mt.navigate("/login"),2e3)}catch(r){$.createToast("Erro ao enviar email: "+r.message,"error"),i.disabled=!1,i.innerHTML="<span>Enviar</span>"}})}},Rl={getCompradorStats:async()=>{const n=Ut(ot,"compras"),t=ue(n,Nt("status_compra","==","Pendente")),e=await Ot(t),s=ue(n,Nt("status_compra","==","Em Cotação")),i=await Ot(s),r=ue(n,mc("data_solicitacao","desc"),Ao(5)),o=await Ot(r);return{pendentes:e.size,emCotacao:i.size,recentes:o.docs.map(a=>({id:a.id,...a.data()}))}},getObraStats:async n=>{if(!n)return{pendentes:0,transito:0,entregues:0,recentes:[]};const t=Ut(ot,"compras"),e=ue(t,Nt("obraId","==",n),Nt("status_compra","in",["Pendente","Em Cotação","Aprovado"])),s=await Ot(e),i=ue(t,Nt("obraId","==",n),Nt("status_compra","==","Comprado")),r=await Ot(i),o=ue(t,Nt("obraId","==",n),Nt("status_compra","==","Entregue")),a=await Ot(o),l=ue(t,Nt("obraId","==",n),mc("data_solicitacao","desc"),Ao(5)),u=await Ot(l);return{pendentes:s.size,transito:r.size,entregues:a.size,recentes:u.docs.map(h=>({id:h.id,...h.data()}))}},getObras:async()=>(await Ot(Ut(ot,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getDiretorStats:async()=>{const n=Ut(ot,"compras"),t=ue(n,Ao(200)),e=await Ot(t);let s=0,i={},r={};return e.forEach(o=>{const a=o.data(),l=Number(a.valor_estimado||a.valor_total||0);if(s+=l,i[a.status_compra]=(i[a.status_compra]||0)+1,a.data_solicitacao){const u=new Date(a.data_solicitacao),h=`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}`;r[h]=(r[h]||0)+l}}),{totalGasto:s,porStatus:i,totalPedidos:e.size,gastosPorMes:r}}},Je={formatCurrency:n=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n),formatDate:n=>n?new Date(n).toLocaleDateString("pt-BR"):"-"},kl={renderComprador:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Geral - Compras</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${$.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Aguardando ação</p>`,className:"accent-left"})}
                    ${$.createCard({title:"Em Cotação",content:`<p class="text-4xl font-display text-primary uppercase">${n.emCotacao}</p><p class="text-sm heading-muted">Processando</p>`,className:"accent-left"})}
                    ${$.createCard({title:"Prioridade Alta",content:'<p class="text-4xl font-display text-alert uppercase">0</p><p class="text-sm heading-muted">SLA Estourado</p>',className:"accent-left"})}
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
                    ${$.createCard({title:"Solicitados",content:`<p class="text-4xl font-display text-text uppercase">${n.pendentes}</p><p class="text-sm heading-muted">Em processamento</p>`})}
                    ${$.createCard({title:"Em Trânsito",content:`<p class="text-4xl font-display text-primary uppercase">${n.transito}</p><p class="text-sm heading-muted">A caminho</p>`,className:"accent-left"})}
                    ${$.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${n.entregues}</p><p class="text-sm heading-muted">Finalizados</p>`,className:"accent-left"})}
                </div>
            </div>
        `,renderDiretor:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Visão Executiva</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${$.createCard({title:"Total Gasto (Amostra)",content:`<p class="text-4xl font-display text-primary uppercase">R$ ${n.totalGasto.toFixed(2)}</p>`})}
                    ${$.createCard({title:"Total de Pedidos",content:`<p class="text-4xl font-display text-primary uppercase">${n.totalPedidos}</p>`})}
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
 */function Dr(n){return n+.5|0}const Tn=(n,t,e)=>Math.max(Math.min(n,e),t);function Ni(n){return Tn(Dr(n*2.55),0,255)}function Mn(n){return Tn(Dr(n*255),0,255)}function Qe(n){return Tn(Dr(n/2.55)/100,0,1)}function Af(n){return Tn(Dr(n*100),0,100)}const ve={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},xc=[..."0123456789ABCDEF"],SA=n=>xc[n&15],RA=n=>xc[(n&240)>>4]+xc[n&15],oo=n=>(n&240)>>4===(n&15),kA=n=>oo(n.r)&&oo(n.g)&&oo(n.b)&&oo(n.a);function PA(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&ve[n[1]]*17,g:255&ve[n[2]]*17,b:255&ve[n[3]]*17,a:t===5?ve[n[4]]*17:255}:(t===7||t===9)&&(e={r:ve[n[1]]<<4|ve[n[2]],g:ve[n[3]]<<4|ve[n[4]],b:ve[n[5]]<<4|ve[n[6]],a:t===9?ve[n[7]]<<4|ve[n[8]]:255})),e}const CA=(n,t)=>n<255?t(n):"";function DA(n){var t=kA(n)?SA:RA;return n?"#"+t(n.r)+t(n.g)+t(n.b)+CA(n.a,t):void 0}const MA=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function F_(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function OA(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function LA(n,t,e){const s=F_(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function NA(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function Bu(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let l,u,h;return r!==o&&(h=r-o,u=a>.5?h/(2-r-o):h/(r+o),l=NA(e,s,i,h,r),l=l*60+.5),[l|0,u||0,a]}function $u(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(Mn)}function zu(n,t,e){return $u(F_,n,t,e)}function VA(n,t,e){return $u(LA,n,t,e)}function FA(n,t,e){return $u(OA,n,t,e)}function U_(n){return(n%360+360)%360}function UA(n){const t=MA.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Ni(+t[5]):Mn(+t[5]));const i=U_(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=VA(i,r,o):t[1]==="hsv"?s=FA(i,r,o):s=zu(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function BA(n,t){var e=Bu(n);e[0]=U_(e[0]+t),e=zu(e),n.r=e[0],n.g=e[1],n.b=e[2]}function $A(n){if(!n)return;const t=Bu(n),e=t[0],s=Af(t[1]),i=Af(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${Qe(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const Sf={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Rf={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function zA(){const n={},t=Object.keys(Rf),e=Object.keys(Sf);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,Sf[r]);r=parseInt(Rf[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let ao;function jA(n){ao||(ao=zA(),ao.transparent=[0,0,0,0]);const t=ao[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const HA=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function WA(n){const t=HA.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?Ni(o):Tn(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?Ni(s):Tn(s,0,255)),i=255&(t[4]?Ni(i):Tn(i,0,255)),r=255&(t[6]?Ni(r):Tn(r,0,255)),{r:s,g:i,b:r,a:e}}}function qA(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${Qe(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Pl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Rs=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function GA(n,t,e){const s=Rs(Qe(n.r)),i=Rs(Qe(n.g)),r=Rs(Qe(n.b));return{r:Mn(Pl(s+e*(Rs(Qe(t.r))-s))),g:Mn(Pl(i+e*(Rs(Qe(t.g))-i))),b:Mn(Pl(r+e*(Rs(Qe(t.b))-r))),a:n.a+e*(t.a-n.a)}}function lo(n,t,e){if(n){let s=Bu(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=zu(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function B_(n,t){return n&&Object.assign(t||{},n)}function kf(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Mn(n[3]))):(t=B_(n,{r:0,g:0,b:0,a:1}),t.a=Mn(t.a)),t}function KA(n){return n.charAt(0)==="r"?WA(n):UA(n)}class ur{constructor(t){if(t instanceof ur)return t;const e=typeof t;let s;e==="object"?s=kf(t):e==="string"&&(s=PA(t)||jA(t)||KA(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=B_(this._rgb);return t&&(t.a=Qe(t.a)),t}set rgb(t){this._rgb=kf(t)}rgbString(){return this._valid?qA(this._rgb):void 0}hexString(){return this._valid?DA(this._rgb):void 0}hslString(){return this._valid?$A(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=s.a-i.a,u=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-u,s.r=255&u*s.r+r*i.r+.5,s.g=255&u*s.g+r*i.g+.5,s.b=255&u*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=GA(this._rgb,t._rgb,e)),this}clone(){return new ur(this.rgb)}alpha(t){return this._rgb.a=Mn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Dr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return lo(this._rgb,2,t),this}darken(t){return lo(this._rgb,2,-t),this}saturate(t){return lo(this._rgb,1,t),this}desaturate(t){return lo(this._rgb,1,-t),this}rotate(t){return BA(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Ke(){}const YA=(()=>{let n=0;return()=>n++})();function Y(n){return n==null}function _t(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Q(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function It(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function me(n,t){return It(n)?n:t}function G(n,t){return typeof n>"u"?t:n}const XA=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,$_=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function ht(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function it(n,t,e,s){let i,r,o;if(_t(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(Q(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function oa(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function aa(n){if(_t(n))return n.map(aa);if(Q(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=aa(n[e[i]]);return t}return n}function z_(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function QA(n,t,e,s){if(!z_(n))return;const i=t[n],r=e[n];Q(i)&&Q(r)?hr(i,r,s):t[n]=aa(r)}function hr(n,t,e){const s=_t(t)?t:[t],i=s.length;if(!Q(n))return n;e=e||{};const r=e.merger||QA;let o;for(let a=0;a<i;++a){if(o=s[a],!Q(o))continue;const l=Object.keys(o);for(let u=0,h=l.length;u<h;++u)r(l[u],n,o,e)}return n}function Ki(n,t){return hr(n,t,{merger:JA})}function JA(n,t,e){if(!z_(n))return;const s=t[n],i=e[n];Q(s)&&Q(i)?Ki(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=aa(i))}const Pf={"":n=>n,x:n=>n.x,y:n=>n.y};function ZA(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function tS(n){const t=ZA(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function Fn(n,t){return(Pf[t]||(Pf[t]=tS(t)))(n)}function ju(n){return n.charAt(0).toUpperCase()+n.slice(1)}const dr=n=>typeof n<"u",Un=n=>typeof n=="function",Cf=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function eS(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const st=Math.PI,gt=2*st,nS=gt+st,la=Number.POSITIVE_INFINITY,sS=st/180,Rt=st/2,Kn=st/4,Df=st*2/3,In=Math.log10,Be=Math.sign;function Yi(n,t,e){return Math.abs(n-t)<e}function Mf(n){const t=Math.round(n);n=Yi(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(In(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function iS(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function rS(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function Qs(n){return!rS(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function oS(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function j_(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Ie(n){return n*(st/180)}function Hu(n){return n*(180/st)}function Of(n){if(!It(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function H_(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*st&&(r+=gt),{angle:r,distance:i}}function Ec(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function aS(n,t){return(n-t+nS)%gt-st}function Zt(n){return(n%gt+gt)%gt}function fr(n,t,e,s){const i=Zt(n),r=Zt(t),o=Zt(e),a=Zt(r-i),l=Zt(o-i),u=Zt(i-r),h=Zt(i-o);return i===r||i===o||s&&r===o||a>l&&u<h}function Bt(n,t,e){return Math.max(t,Math.min(e,n))}function lS(n){return Bt(n,-32768,32767)}function sn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function Wu(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const rn=(n,t,e,s)=>Wu(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),cS=(n,t,e)=>Wu(n,e,s=>n[s][t]>=e);function uS(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const W_=["push","pop","shift","splice","unshift"];function hS(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),W_.forEach(e=>{const s="_onData"+ju(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function Lf(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(W_.forEach(r=>{delete n[r]}),delete n._chartjs)}function q_(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const G_=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function K_(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,G_.call(window,()=>{s=!1,n.apply(t,e)}))}}function dS(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const qu=n=>n==="start"?"left":n==="end"?"right":"center",Qt=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,fS=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function Y_(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:l}=n,u=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:d,max:p,minDefined:m,maxDefined:_}=o.getUserBounds();if(m){if(i=Math.min(rn(l,h,d).lo,e?s:rn(t,h,o.getPixelForValue(d)).lo),u){const v=l.slice(0,i+1).reverse().findIndex(w=>!Y(w[a.axis]));i-=Math.max(0,v)}i=Bt(i,0,s-1)}if(_){let v=Math.max(rn(l,o.axis,p,!0).hi+1,e?0:rn(t,h,o.getPixelForValue(p),!0).hi+1);if(u){const w=l.slice(v-1).findIndex(S=>!Y(S[a.axis]));v+=Math.max(0,w)}r=Bt(v,i,s)-i}else r=s-i}return{start:i,count:r}}function X_(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const co=n=>n===0||n===1,Nf=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*gt/e)),Vf=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*gt/e)+1,Xi={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Rt)+1,easeOutSine:n=>Math.sin(n*Rt),easeInOutSine:n=>-.5*(Math.cos(st*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>co(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>co(n)?n:Nf(n,.075,.3),easeOutElastic:n=>co(n)?n:Vf(n,.075,.3),easeInOutElastic(n){return co(n)?n:n<.5?.5*Nf(n*2,.1125,.45):.5+.5*Vf(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-Xi.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?Xi.easeInBounce(n*2)*.5:Xi.easeOutBounce(n*2-1)*.5+.5};function Gu(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Ff(n){return Gu(n)?n:new ur(n)}function Cl(n){return Gu(n)?n:new ur(n).saturate(.5).darken(.1).hexString()}const pS=["x","y","borderWidth","radius","tension"],gS=["color","borderColor","backgroundColor"];function mS(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:gS},numbers:{type:"number",properties:pS}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function _S(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Uf=new Map;function yS(n,t){t=t||{};const e=n+JSON.stringify(t);let s=Uf.get(e);return s||(s=new Intl.NumberFormat(n,t),Uf.set(e,s)),s}function Mr(n,t,e){return yS(t,e).format(n)}const Q_={values(n){return _t(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const u=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),r=vS(n,e)}const o=In(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Mr(n,s,l)},logarithmic(n,t,e){if(n===0)return"0";const s=e[t].significand||n/Math.pow(10,Math.floor(In(n)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?Q_.numeric.call(this,n,t,e):""}};function vS(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Fa={formatters:Q_};function bS(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Fa.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ps=Object.create(null),Tc=Object.create(null);function Qi(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function Dl(n,t,e){return typeof t=="string"?hr(Qi(n,t),e):hr(Qi(n,""),t)}class wS{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>Cl(i.backgroundColor),this.hoverBorderColor=(s,i)=>Cl(i.borderColor),this.hoverColor=(s,i)=>Cl(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Dl(this,t,e)}get(t){return Qi(this,t)}describe(t,e){return Dl(Tc,t,e)}override(t,e){return Dl(ps,t,e)}route(t,e,s,i){const r=Qi(this,t),o=Qi(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],u=o[i];return Q(l)?Object.assign({},u,l):G(l,u)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var yt=new wS({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[mS,_S,bS]);function xS(n){return!n||Y(n.size)||Y(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function ca(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function ES(n,t,e,s){s=s||{};let i=s.data=s.data||{},r=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},r=s.garbageCollect=[],s.font=t),n.save(),n.font=t;let o=0;const a=e.length;let l,u,h,d,p;for(l=0;l<a;l++)if(d=e[l],d!=null&&!_t(d))o=ca(n,i,r,o,d);else if(_t(d))for(u=0,h=d.length;u<h;u++)p=d[u],p!=null&&!_t(p)&&(o=ca(n,i,r,o,p));n.restore();const m=r.length/2;if(m>e.length){for(l=0;l<m;l++)delete i[r[l]];r.splice(0,m)}return o}function Yn(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function Bf(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Ic(n,t,e,s){J_(n,t,e,s,null)}function J_(n,t,e,s,i){let r,o,a,l,u,h,d,p;const m=t.pointStyle,_=t.rotation,v=t.radius;let w=(_||0)*sS;if(m&&typeof m=="object"&&(r=m.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(w),n.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),n.restore();return}if(!(isNaN(v)||v<=0)){switch(n.beginPath(),m){default:i?n.ellipse(e,s,i/2,v,0,0,gt):n.arc(e,s,v,0,gt),n.closePath();break;case"triangle":h=i?i/2:v,n.moveTo(e+Math.sin(w)*h,s-Math.cos(w)*v),w+=Df,n.lineTo(e+Math.sin(w)*h,s-Math.cos(w)*v),w+=Df,n.lineTo(e+Math.sin(w)*h,s-Math.cos(w)*v),n.closePath();break;case"rectRounded":u=v*.516,l=v-u,o=Math.cos(w+Kn)*l,d=Math.cos(w+Kn)*(i?i/2-u:l),a=Math.sin(w+Kn)*l,p=Math.sin(w+Kn)*(i?i/2-u:l),n.arc(e-d,s-a,u,w-st,w-Rt),n.arc(e+p,s-o,u,w-Rt,w),n.arc(e+d,s+a,u,w,w+Rt),n.arc(e-p,s+o,u,w+Rt,w+st),n.closePath();break;case"rect":if(!_){l=Math.SQRT1_2*v,h=i?i/2:l,n.rect(e-h,s-l,2*h,2*l);break}w+=Kn;case"rectRot":d=Math.cos(w)*(i?i/2:v),o=Math.cos(w)*v,a=Math.sin(w)*v,p=Math.sin(w)*(i?i/2:v),n.moveTo(e-d,s-a),n.lineTo(e+p,s-o),n.lineTo(e+d,s+a),n.lineTo(e-p,s+o),n.closePath();break;case"crossRot":w+=Kn;case"cross":d=Math.cos(w)*(i?i/2:v),o=Math.cos(w)*v,a=Math.sin(w)*v,p=Math.sin(w)*(i?i/2:v),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"star":d=Math.cos(w)*(i?i/2:v),o=Math.cos(w)*v,a=Math.sin(w)*v,p=Math.sin(w)*(i?i/2:v),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o),w+=Kn,d=Math.cos(w)*(i?i/2:v),o=Math.cos(w)*v,a=Math.sin(w)*v,p=Math.sin(w)*(i?i/2:v),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"line":o=i?i/2:Math.cos(w)*v,a=Math.sin(w)*v,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(w)*(i?i/2:v),s+Math.sin(w)*v);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function on(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Ua(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Ba(n){n.restore()}function TS(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function IS(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function AS(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),Y(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function SS(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,u=e+r.actualBoundingBoxDescent,h=i.strikethrough?(l+u)/2:u;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function RS(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function gs(n,t,e,s,i,r={}){const o=_t(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,u;for(n.save(),n.font=i.string,AS(n,r),l=0;l<o.length;++l)u=o[l],r.backdrop&&RS(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),Y(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(u,e,s,r.maxWidth)),n.fillText(u,e,s,r.maxWidth),SS(n,e,s,u,r),s+=Number(i.lineHeight);n.restore()}function pr(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*st,st,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,st,Rt,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,Rt,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-Rt,!0),n.lineTo(e+o.topLeft,s)}const kS=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,PS=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function CS(n,t){const e=(""+n).match(kS);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const DS=n=>+n||0;function Ku(n,t){const e={},s=Q(t),i=s?Object.keys(t):t,r=Q(n)?s?o=>G(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=DS(r(o));return e}function Z_(n){return Ku(n,{top:"y",right:"x",bottom:"y",left:"x"})}function os(n){return Ku(n,["topLeft","topRight","bottomLeft","bottomRight"])}function se(n){const t=Z_(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Vt(n,t){n=n||{},t=t||yt.font;let e=G(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=G(n.style,t.style);s&&!(""+s).match(PS)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:G(n.family,t.family),lineHeight:CS(G(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:G(n.weight,t.weight),string:""};return i.string=xS(i),i}function Vi(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function MS(n,t,e){const{min:s,max:i}=n,r=$_(t,(i-s)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function jn(n,t){return Object.assign(Object.create(n),t)}function Yu(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=sy("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>Yu([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete n[0][l],!0},get(a,l){return ey(a,l,()=>$S(l,t,n,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,l){return zf(a).includes(l)},ownKeys(a){return zf(a)},set(a,l,u){const h=a._storage||(a._storage=i());return a[l]=h[l]=u,delete a._keys,!0}})}function Js(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:ty(n,s),setContext:r=>Js(n,r,e,s),override:r=>Js(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return ey(r,o,()=>LS(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function ty(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:Un(e)?e:()=>e,isIndexable:Un(s)?s:()=>s}}const OS=(n,t)=>n?n+ju(t):t,Xu=(n,t)=>Q(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function ey(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function LS(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return Un(a)&&o.isScriptable(t)&&(a=NS(t,a,n,e)),_t(a)&&a.length&&(a=VS(t,a,n,o.isIndexable)),Xu(t,a)&&(a=Js(a,i,r&&r[t],o)),a}function NS(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let l=t(r,o||s);return a.delete(n),Xu(n,l)&&(l=Qu(i._scopes,i,n,l)),l}function VS(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(Q(t[0])){const l=t,u=i._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=Qu(u,i,n,h);t.push(Js(d,r,o&&o[n],a))}}return t}function ny(n,t,e){return Un(n)?n(t,e):n}const FS=(n,t)=>n===!0?t:typeof n=="string"?Fn(t,n):void 0;function US(n,t,e,s,i){for(const r of t){const o=FS(e,r);if(o){n.add(o);const a=ny(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function Qu(n,t,e,s){const i=t._rootScopes,r=ny(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let l=$f(a,o,e,r||e,s);return l===null||typeof r<"u"&&r!==e&&(l=$f(a,o,r,l,s),l===null)?!1:Yu(Array.from(a),[""],i,r,()=>BS(t,e,s))}function $f(n,t,e,s,i){for(;e;)e=US(n,t,e,s,i);return e}function BS(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return _t(i)&&Q(e)?e:i||{}}function $S(n,t,e,s){let i;for(const r of t)if(i=sy(OS(r,n),e),typeof i<"u")return Xu(n,i)?Qu(e,s,n,i):i}function sy(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function zf(n){let t=n._keys;return t||(t=n._keys=zS(n._scopes)),t}function zS(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function iy(n,t,e,s){const{iScale:i}=n,{key:r="r"}=this._parsing,o=new Array(s);let a,l,u,h;for(a=0,l=s;a<l;++a)u=a+e,h=t[u],o[a]={r:i.parse(Fn(h,r),u)};return o}const jS=Number.EPSILON||1e-14,Zs=(n,t)=>t<n.length&&!n[t].skip&&n[t],ry=n=>n==="x"?"y":"x";function HS(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=Ec(r,i),l=Ec(o,r);let u=a/(a+l),h=l/(a+l);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const d=s*u,p=s*h;return{previous:{x:r.x-d*(o.x-i.x),y:r.y-d*(o.y-i.y)},next:{x:r.x+p*(o.x-i.x),y:r.y+p*(o.y-i.y)}}}function WS(n,t,e){const s=n.length;let i,r,o,a,l,u=Zs(n,0);for(let h=0;h<s-1;++h)if(l=u,u=Zs(n,h+1),!(!l||!u)){if(Yi(t[h],0,jS)){e[h]=e[h+1]=0;continue}i=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=i*o*t[h],e[h+1]=r*o*t[h])}}function qS(n,t,e="x"){const s=ry(e),i=n.length;let r,o,a,l=Zs(n,0);for(let u=0;u<i;++u){if(o=a,a=l,l=Zs(n,u+1),!a)continue;const h=a[e],d=a[s];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${s}`]=d-r*t[u]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${s}`]=d+r*t[u])}}function GS(n,t="x"){const e=ry(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,l,u=Zs(n,0);for(o=0;o<s;++o)if(a=l,l=u,u=Zs(n,o+1),!!l){if(u){const h=u[t]-l[t];i[o]=h!==0?(u[e]-l[e])/h:0}r[o]=a?u?Be(i[o-1])!==Be(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}WS(n,i,r),qS(n,r,t)}function uo(n,t,e){return Math.max(Math.min(n,e),t)}function KS(n,t){let e,s,i,r,o,a=on(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&on(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=uo(i.cp1x,t.left,t.right),i.cp1y=uo(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=uo(i.cp2x,t.left,t.right),i.cp2y=uo(i.cp2y,t.top,t.bottom)))}function YS(n,t,e,s,i){let r,o,a,l;if(t.spanGaps&&(n=n.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")GS(n,i);else{let u=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],l=HS(u,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,u=a}t.capBezierPoints&&KS(n,e)}function Ju(){return typeof window<"u"&&typeof document<"u"}function Zu(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function ua(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const $a=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function XS(n,t){return $a(n).getPropertyValue(t)}const QS=["top","right","bottom","left"];function as(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=QS[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const JS=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function ZS(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,l;if(JS(i,r,n.target))a=i,l=r;else{const u=t.getBoundingClientRect();a=s.clientX-u.left,l=s.clientY-u.top,o=!0}return{x:a,y:l,box:o}}function Zn(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=$a(e),r=i.boxSizing==="border-box",o=as(i,"padding"),a=as(i,"border","width"),{x:l,y:u,box:h}=ZS(n,e),d=o.left+(h&&a.left),p=o.top+(h&&a.top);let{width:m,height:_}=t;return r&&(m-=o.width+a.width,_-=o.height+a.height),{x:Math.round((l-d)/m*e.width/s),y:Math.round((u-p)/_*e.height/s)}}function tR(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&Zu(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=$a(r),l=as(a,"border","width"),u=as(a,"padding");t=o.width-u.width-l.width,e=o.height-u.height-l.height,s=ua(a.maxWidth,r,"clientWidth"),i=ua(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||la,maxHeight:i||la}}const An=n=>Math.round(n*10)/10;function eR(n,t,e,s){const i=$a(n),r=as(i,"margin"),o=ua(i.maxWidth,n,"clientWidth")||la,a=ua(i.maxHeight,n,"clientHeight")||la,l=tR(n,t,e);let{width:u,height:h}=l;if(i.boxSizing==="content-box"){const p=as(i,"border","width"),m=as(i,"padding");u-=m.width+p.width,h-=m.height+p.height}return u=Math.max(0,u-r.width),h=Math.max(0,s?u/s:h-r.height),u=An(Math.min(u,o,l.maxWidth)),h=An(Math.min(h,a,l.maxHeight)),u&&!h&&(h=An(u/2)),(t!==void 0||e!==void 0)&&s&&l.height&&h>l.height&&(h=l.height,u=An(Math.floor(h*s))),{width:u,height:h}}function jf(n,t,e){const s=t||1,i=An(n.height*s),r=An(n.width*s);n.height=An(n.height),n.width=An(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const nR=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Ju()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function Hf(n,t){const e=XS(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function ts(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function sR(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function iR(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=ts(n,i,e),a=ts(i,r,e),l=ts(r,t,e),u=ts(o,a,e),h=ts(a,l,e);return ts(u,h,e)}const rR=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},oR=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function $s(n,t,e){return n?rR(t,e):oR()}function oy(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function ay(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function ly(n){return n==="angle"?{between:fr,compare:aS,normalize:Zt}:{between:sn,compare:(t,e)=>t-e,normalize:t=>t}}function Wf({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function aR(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=ly(s),l=t.length;let{start:u,end:h,loop:d}=n,p,m;if(d){for(u+=l,h+=l,p=0,m=l;p<m&&o(a(t[u%l][s]),i,r);++p)u--,h--;u%=l,h%=l}return h<u&&(h+=l),{start:u,end:h,loop:d,style:n.style}}function cy(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:l,normalize:u}=ly(s),{start:h,end:d,loop:p,style:m}=aR(n,t,e),_=[];let v=!1,w=null,S,k,C;const D=()=>l(i,C,S)&&a(i,C)!==0,O=()=>a(r,S)===0||l(r,C,S),N=()=>v||D(),E=()=>!v||O();for(let b=h,x=h;b<=d;++b)k=t[b%o],!k.skip&&(S=u(k[s]),S!==C&&(v=l(S,i,r),w===null&&N()&&(w=a(S,i)===0?b:x),w!==null&&E()&&(_.push(Wf({start:w,end:b,loop:p,count:o,style:m})),w=null),x=b,C=S));return w!==null&&_.push(Wf({start:w,end:d,loop:p,count:o,style:m})),_}function uy(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=cy(s[i],n.points,t);r.length&&e.push(...r)}return e}function lR(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function cR(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],l;for(l=t+1;l<=e;++l){const u=n[l%i];u.skip||u.stop?a.skip||(s=!1,r.push({start:t%i,end:(l-1)%i,loop:s}),t=o=u.stop?l:null):(o=l,a.skip&&(t=l)),a=u}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function uR(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=lR(e,i,r,s);if(s===!0)return qf(n,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+i:a,u=!!n._fullLoop&&o===0&&a===i-1;return qf(n,cR(e,o,l,u),e,t)}function qf(n,t,e,s){return!s||!s.setContext||!e?t:hR(n,t,e,s)}function hR(n,t,e,s){const i=n._chart.getContext(),r=Gf(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,l=e.length,u=[];let h=r,d=t[0].start,p=d;function m(_,v,w,S){const k=a?-1:1;if(_!==v){for(_+=l;e[_%l].skip;)_-=k;for(;e[v%l].skip;)v+=k;_%l!==v%l&&(u.push({start:_%l,end:v%l,loop:w,style:S}),h=S,d=v%l)}}for(const _ of t){d=a?d:_.start;let v=e[d%l],w;for(p=d+1;p<=_.end;p++){const S=e[p%l];w=Gf(s.setContext(jn(i,{type:"segment",p0:v,p1:S,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:o}))),dR(w,h)&&m(d,p-1,_.loop,h),v=S,h=w}d<p-1&&m(d,p-1,_.loop,h)}return u}function Gf(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function dR(n,t){if(!t)return!1;const e=[],s=function(i,r){return Gu(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function ho(n,t,e){return n.options.clip?n[e]:t[e]}function fR(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:ho(e,t,"left"),right:ho(e,t,"right"),top:ho(s,t,"top"),bottom:ho(s,t,"bottom")}:t}function hy(n,t){const e=t._clip;if(e.disabled)return!1;const s=fR(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class pR{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=G_.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ye=new pR;const Kf="transparent",gR={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=Ff(n||Kf),i=s.valid&&Ff(t||Kf);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class mR{constructor(t,e,s,i){const r=e[s];i=Vi([t.to,i,r,t.from]);const o=Vi([t.from,r,i]);this._active=!0,this._fn=t.fn||gR[t.type||typeof o],this._easing=Xi[t.easing]||Xi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=Vi([t.to,e,i,t.from]),this._from=Vi([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}l=e/s%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class dy{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Q(t))return;const e=Object.keys(yt.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!Q(r))return;const o={};for(const a of e)o[a]=r[a];(_t(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=yR(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&_R(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const u=o[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(t,e));continue}const h=e[u];let d=r[u];const p=s.get(u);if(d)if(p&&d.active()){d.update(p,h,a);continue}else d.cancel();if(!p||!p.duration){t[u]=h;continue}r[u]=d=new mR(p,t,u,h),i.push(d)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return Ye.add(this._chart,s),!0}}function _R(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function yR(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Yf(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function vR(n,t,e){if(e===!1)return!1;const s=Yf(n,e),i=Yf(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function bR(n){let t,e,s,i;return Q(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function fy(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function Xf(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,l,u;if(t===null)return;let h=!1;for(o=0,a=i.length;o<a;++o){if(l=+i[o],l===e){if(h=!0,s.all)continue;break}u=n.values[l],It(u)&&(r||t===0||Be(t)===Be(u))&&(t+=u)}return!h&&!s.all?0:t}function wR(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let l,u,h;for(l=0,u=o.length;l<u;++l)h=o[l],a[l]={[i]:h,[r]:n[h]};return a}function Ml(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function xR(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function ER(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function TR(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function Qf(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function Jf(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,l=r.axis,u=o.axis,h=xR(r,o,s),d=t.length;let p;for(let m=0;m<d;++m){const _=t[m],{[l]:v,[u]:w}=_,S=_._stacks||(_._stacks={});p=S[u]=TR(i,h,v),p[a]=w,p._top=Qf(p,o,!0,s.type),p._bottom=Qf(p,o,!1,s.type);const k=p._visualValues||(p._visualValues={});k[a]=w}}function Ol(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function IR(n,t){return jn(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function AR(n,t,e){return jn(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function xi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const Ll=n=>n==="reset"||n==="none",Zf=(n,t)=>t?n:Object.assign({},n),SR=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:fy(e,!0),values:null};class Ae{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Ml(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&xi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(d,p,m,_)=>d==="x"?p:d==="r"?_:m,r=e.xAxisID=G(s.xAxisID,Ol(t,"x")),o=e.yAxisID=G(s.yAxisID,Ol(t,"y")),a=e.rAxisID=G(s.rAxisID,Ol(t,"r")),l=e.indexAxis,u=e.iAxisID=i(l,r,o,a),h=e.vAxisID=i(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(u),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Lf(this._data,this),t._stacked&&xi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(Q(e)){const i=this._cachedMeta;this._data=wR(e,i)}else if(s!==e){if(s){Lf(s,this);const i=this._cachedMeta;xi(i),i._parsed=[]}e&&Object.isExtensible(e)&&hS(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=Ml(e.vScale,e),e.stack!==s.stack&&(i=!0,xi(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(Jf(this,e._parsed),e._stacked=Ml(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let l=t===0&&e===i.length?!0:s._sorted,u=t>0&&s._parsed[t-1],h,d,p;if(this._parsing===!1)s._parsed=i,s._sorted=!0,p=i;else{_t(i[t])?p=this.parseArrayData(s,i,t,e):Q(i[t])?p=this.parseObjectData(s,i,t,e):p=this.parsePrimitiveData(s,i,t,e);const m=()=>d[a]===null||u&&d[a]<u[a];for(h=0;h<e;++h)s._parsed[h+t]=d=p[h],l&&(m()&&(l=!1),u=d);s._sorted=l}o&&Jf(this,p)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,u=r.getLabels(),h=r===o,d=new Array(i);let p,m,_;for(p=0,m=i;p<m;++p)_=p+s,d[p]={[a]:h||r.parse(u[_],_),[l]:o.parse(e[_],_)};return d}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let l,u,h,d;for(l=0,u=i;l<u;++l)h=l+s,d=e[h],a[l]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let h,d,p,m;for(h=0,d=i;h<d;++h)p=h+s,m=e[p],u[h]={x:r.parse(Fn(m,a),p),y:o.parse(Fn(m,l),p)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:fy(i,!0),values:e._stacks[t.axis]._visualValues};return Xf(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=Xf(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),l=SR(e,s,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=ER(a);let p,m;function _(){m=i[p];const v=m[a.axis];return!It(m[t.axis])||h>v||d<v}for(p=0;p<o&&!(!_()&&(this.updateRangeFromParsed(u,t,m,l),r));++p);if(r){for(p=o-1;p>=0;--p)if(!_()){this.updateRangeFromParsed(u,t,m,l);break}}return u}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],It(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=bR(G(this.options.clip,vR(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||i.length-a,u=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const d=i[h];d.hidden||(d.active&&u?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=AR(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=IR(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&dr(s);if(a)return Zf(a,l);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,t),d=i?[`${t}Hover`,"hover",t,""]:[t,""],p=u.getOptionScopes(this.getDataset(),h),m=Object.keys(yt.elements[t]),_=()=>this.getContext(s,i,e),v=u.resolveNamedOptions(p,m,_,d);return v.$shared&&(v.$shared=l,r[o]=Object.freeze(Zf(v,l))),v}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(i.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),p=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(p,this.getContext(t,s,e))}const u=new dy(i,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ll(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){Ll(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!Ll(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,l,u]of this._syncList)this[a](l,u);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const l=u=>{for(u.length+=e,a=u.length-1;a>=o;a--)u[a]=u[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&xi(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}U(Ae,"defaults",{}),U(Ae,"datasetElementType",null),U(Ae,"dataElementType",null);function RR(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=q_(s.sort((i,r)=>i-r))}return n._cache.$bar}function kR(n){const t=n.iScale,e=RR(t,n.type);let s=t._length,i,r,o,a;const l=()=>{o===32767||o===-32768||(dr(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),l();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),l();return s}function PR(n,t,e,s){const i=e.barThickness;let r,o;return Y(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function CR(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const u=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/s,ratio:e.barPercentage,start:u}}function DR(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let l=o,u=a;Math.abs(o)>Math.abs(a)&&(l=a,u=o),t[e.axis]=u,t._custom={barStart:l,barEnd:u,start:i,end:r,min:o,max:a}}function py(n,t,e,s){return _t(n)?DR(n,t,e,s):t[e.axis]=e.parse(n,s),t}function tp(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,l=[];let u,h,d,p;for(u=e,h=e+s;u<h;++u)p=t[u],d={},d[i.axis]=a||i.parse(o[u],u),l.push(py(p,d,r,u));return l}function Nl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function MR(n,t,e){return n!==0?Be(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function OR(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function LR(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:u,bottom:h}=OR(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=u:(e._bottom||0)===s?i=h:(r[ep(h,o,a,l)]=!0,i=u)),r[ep(i,o,a,l)]=!0,n.borderSkipped=r}function ep(n,t,e,s){return s?(n=NR(n,t,e),n=np(n,e,t)):n=np(n,t,e),n}function NR(n,t,e){return n===t?e:n===e?t:n}function np(n,t,e){return n==="start"?t:n==="end"?e:n}function VR(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Do extends Ae{parsePrimitiveData(t,e,s,i){return tp(t,e,s,i)}parseArrayData(t,e,s,i){return tp(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=r.axis==="x"?a:l,h=o.axis==="x"?a:l,d=[];let p,m,_,v;for(p=s,m=s+i;p<m;++p)v=e[p],_={},_[r.axis]=r.parse(Fn(v,u),p),d.push(py(Fn(v,h),_,o,p));return d}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=Nl(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),u=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:p}=this._getSharedOptions(e,i);for(let m=e;m<e+s;m++){const _=this.getParsed(m),v=r||Y(_[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(m),w=this._calculateBarIndexPixels(m,h),S=(_._stacks||{})[a.axis],k={horizontal:u,base:v.base,enableBorderRadius:!S||Nl(_._custom)||o===S._top||o===S._bottom,x:u?v.head:w.center,y:u?w.center:v.head,height:u?w.size:Math.abs(v.size),width:u?Math.abs(v.size):w.size};p&&(k.options=d||this.resolveDataElementOptions(m,t[m].active?"active":i));const C=k.options||t[m].options;LR(k,C,S,o),VR(k,C,h.ratio),this.updateElement(t[m],m,k,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[s.axis],u=h=>{const d=h._parsed.find(m=>m[s.axis]===l),p=d&&d[h.vScale.axis];if(Y(p)||isNaN(p))return!0};for(const h of i)if(!(e!==void 0&&u(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[G(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||kR(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),u=l._custom,h=Nl(u);let d=l[e.axis],p=0,m=s?this.applyStack(e,l,s):d,_,v;m!==d&&(p=m-d,m=d),h&&(d=u.barStart,m=u.barEnd-u.barStart,d!==0&&Be(d)!==Be(u.barEnd)&&(p=0),p+=d);const w=!Y(r)&&!h?r:p;let S=e.getPixelForValue(w);if(this.chart.getDataVisibility(t)?_=e.getPixelForValue(p+m):_=S,v=_-S,Math.abs(v)<o){v=MR(v,e,a)*o,d===a&&(S-=v/2);const k=e.getPixelForDecimal(0),C=e.getPixelForDecimal(1),D=Math.min(k,C),O=Math.max(k,C);S=Math.max(Math.min(S,O),D),_=S+v,s&&!h&&(l._stacks[e.axis]._visualValues[i]=e.getValueForPixel(_)-e.getValueForPixel(S))}if(S===e.getPixelForValue(a)){const k=Be(v)*e.getLineWidthForValue(a)/2;S+=k,v-=k}return{size:v,base:S,head:_,center:_+v/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=G(i.maxBarThickness,1/0);let a,l;const u=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,d=i.barThickness==="flex"?CR(t,e,i,h*u):PR(t,e,i,h*u),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(G(p,this.getFirstScaleIdForIndexAxis())),_=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+m;a=d.start+d.chunk*_+d.chunk/2,l=Math.min(o,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}U(Do,"id","bar"),U(Do,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),U(Do,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Mo extends Ae{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const r=super.parsePrimitiveData(t,e,s,i);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+s).radius;return r}parseArrayData(t,e,s,i){const r=super.parseArrayData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a[2],this.resolveDataElementOptions(o+s).radius)}return r}parseObjectData(t,e,s,i){const r=super.parseObjectData(t,e,s,i);for(let o=0;o<r.length;o++){const a=e[s+o];r[o]._custom=G(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),l=r.getLabelForValue(o.y),u=o._custom;return{label:s[t]||"",value:"("+a+", "+l+(u?", "+u:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(e,i),h=o.axis,d=a.axis;for(let p=e;p<e+s;p++){const m=t[p],_=!r&&this.getParsed(p),v={},w=v[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(_[h]),S=v[d]=r?a.getBasePixel():a.getPixelForValue(_[d]);v.skip=isNaN(w)||isNaN(S),u&&(v.options=l||this.resolveDataElementOptions(p,m.active?"active":i),r&&(v.options.radius=0)),this.updateElement(m,p,v,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return e!=="active"&&(i.radius=0),i.radius+=G(s&&s._custom,r),i}}U(Mo,"id","bubble"),U(Mo,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),U(Mo,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function FR(n,t,e){let s=1,i=1,r=0,o=0;if(t<gt){const a=n,l=a+t,u=Math.cos(a),h=Math.sin(a),d=Math.cos(l),p=Math.sin(l),m=(C,D,O)=>fr(C,a,l,!0)?1:Math.max(D,D*e,O,O*e),_=(C,D,O)=>fr(C,a,l,!0)?-1:Math.min(D,D*e,O,O*e),v=m(0,u,d),w=m(Rt,h,p),S=_(st,u,d),k=_(st+Rt,h,p);s=(v-S)/2,i=(w-k)/2,r=-(v+S)/2,o=-(w+k)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class ss extends Ae{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=l=>+s[l];if(Q(s[t])){const{key:l="value"}=this._parsing;r=u=>+Fn(s[u],l)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return Ie(this.options.rotation-90)}_getCircumference(){return Ie(this.options.circumference)}_getRotationExtents(){let t=gt,e=-gt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),l=Math.min(XA(this.options.cutout,a),1),u=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:p,ratioY:m,offsetX:_,offsetY:v}=FR(d,h,l),w=(s.width-o)/p,S=(s.height-o)/m,k=Math.max(Math.min(w,S)/2,0),C=$_(this.options.radius,k),D=Math.max(C*l,0),O=(C-D)/this._getVisibleDatasetWeightTotal();this.offsetX=_*C,this.offsetY=v*C,i.total=this.calculateTotal(),this.outerRadius=C-O*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-O*u,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/gt)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,u=o.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,p=r&&u.animateScale,m=p?0:this.innerRadius,_=p?0:this.outerRadius,{sharedOptions:v,includeOptions:w}=this._getSharedOptions(e,i);let S=this._getRotation(),k;for(k=0;k<e;++k)S+=this._circumference(k,r);for(k=e;k<e+s;++k){const C=this._circumference(k,r),D=t[k],O={x:h+this.offsetX,y:d+this.offsetY,startAngle:S,endAngle:S+C,circumference:C,outerRadius:_,innerRadius:m};w&&(O.options=v||this.resolveDataElementOptions(k,D.active?"active":i)),S+=C,this.updateElement(D,k,O,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?gt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=Mr(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,l;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)l=a.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(G(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}U(ss,"id","doughnut"),U(ss,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),U(ss,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),U(ss,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,u)=>{const d=t.getDatasetMeta(0).controller.getStyle(u);return{text:l,fillStyle:d.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(u),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||d.borderRadius),index:u}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Oo extends Ae{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=Y_(e,i,o);this._drawStart=a,this._drawCount=l,X_(e)&&(a=0,l=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:u},t),this.updateElements(i,a,l,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,i),p=o.axis,m=a.axis,{spanGaps:_,segment:v}=this.options,w=Qs(_)?_:Number.POSITIVE_INFINITY,S=this.chart._animationsDisabled||r||i==="none",k=e+s,C=t.length;let D=e>0&&this.getParsed(e-1);for(let O=0;O<C;++O){const N=t[O],E=S?N:{};if(O<e||O>=k){E.skip=!0;continue}const b=this.getParsed(O),x=Y(b[m]),I=E[p]=o.getPixelForValue(b[p],O),A=E[m]=r||x?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,b,l):b[m],O);E.skip=isNaN(I)||isNaN(A)||x,E.stop=O>0&&Math.abs(b[p]-D[p])>w,v&&(E.parsed=b,E.raw=u.data[O]),d&&(E.options=h||this.resolveDataElementOptions(O,N.active?"active":i)),S||this.updateElement(N,O,E,i),D=b}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}U(Oo,"id","line"),U(Oo,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),U(Oo,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Ji extends Ae{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=Mr(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:r}}parseObjectData(t,e,s,i){return iy.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const r=this.getParsed(i).r;!isNaN(r)&&this.chart.getDataVisibility(i)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(i/2,0),o=Math.max(s.cutoutPercentage?r/100*s.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,l=o.options.animation,u=this._cachedMeta.rScale,h=u.xCenter,d=u.yCenter,p=u.getIndexAngle(0)-.5*st;let m=p,_;const v=360/this.countVisibleElements();for(_=0;_<e;++_)m+=this._computeAngle(_,i,v);for(_=e;_<e+s;_++){const w=t[_];let S=m,k=m+this._computeAngle(_,i,v),C=o.getDataVisibility(_)?u.getDistanceFromCenterForValue(this.getParsed(_).r):0;m=k,r&&(l.animateScale&&(C=0),l.animateRotate&&(S=k=p));const D={x:h,y:d,innerRadius:0,outerRadius:C,startAngle:S,endAngle:k,options:this.resolveDataElementOptions(_,w.active?"active":i)};this.updateElement(w,_,D,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?Ie(this.resolveDataElementOptions(t,e).angle||s):0}}U(Ji,"id","polarArea"),U(Ji,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),U(Ji,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((r,o)=>{const l=t.getDatasetMeta(0).controller.getStyle(o);return{text:r,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:i,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Ac extends ss{}U(Ac,"id","pie"),U(Ac,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Lo extends Ae{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return iy.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],r=e.iScale.getLabels();if(s.points=i,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===i.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const r=this._cachedMeta.rScale,o=i==="reset";for(let a=e;a<e+s;a++){const l=t[a],u=this.resolveDataElementOptions(a,l.active?"active":i),h=r.getPointPositionForValue(a,this.getParsed(a).r),d=o?r.xCenter:h.x,p=o?r.yCenter:h.y,m={x:d,y:p,angle:h.angle,skip:isNaN(d)||isNaN(p),options:u};this.updateElement(l,a,m,i)}}}U(Lo,"id","radar"),U(Lo,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),U(Lo,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class No extends Ae{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=Y_(e,s,i);if(this._drawStart=r,this._drawCount=o,X_(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=s;const u=this.resolveDatasetElementOptions(t);u.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:u},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,h=this.resolveDataElementOptions(e,i),d=this.getSharedOptions(h),p=this.includeOptions(i,d),m=o.axis,_=a.axis,{spanGaps:v,segment:w}=this.options,S=Qs(v)?v:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||r||i==="none";let C=e>0&&this.getParsed(e-1);for(let D=e;D<e+s;++D){const O=t[D],N=this.getParsed(D),E=k?O:{},b=Y(N[_]),x=E[m]=o.getPixelForValue(N[m],D),I=E[_]=r||b?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,N,l):N[_],D);E.skip=isNaN(x)||isNaN(I)||b,E.stop=D>0&&Math.abs(N[m]-C[m])>S,w&&(E.parsed=N,E.raw=u.data[D]),p&&(E.options=d||this.resolveDataElementOptions(D,O.active?"active":i)),k||this.updateElement(O,D,E,i),C=N}this.updateSharedOptions(d,i,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}U(No,"id","scatter"),U(No,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),U(No,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var UR=Object.freeze({__proto__:null,BarController:Do,BubbleController:Mo,DoughnutController:ss,LineController:Oo,PieController:Ac,PolarAreaController:Ji,RadarController:Lo,ScatterController:No});function Xn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class th{constructor(t){U(this,"options");this.options=t||{}}static override(t){Object.assign(th.prototype,t)}init(){}formats(){return Xn()}parse(){return Xn()}format(){return Xn()}add(){return Xn()}diff(){return Xn()}startOf(){return Xn()}endOf(){return Xn()}}var BR={_date:th};function $R(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const u=a._reversePixels?cS:rn;if(s){if(i._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const p=u(r,t,e-d),m=u(r,t,e+d);return{lo:p.lo,hi:m.hi}}}}else{const h=u(r,t,e);if(l){const{vScale:d}=i._cachedMeta,{_parsed:p}=n,m=p.slice(0,h.lo+1).reverse().findIndex(v=>!Y(v[d.axis]));h.lo-=Math.max(0,m);const _=p.slice(h.hi).findIndex(v=>!Y(v[d.axis]));h.hi+=Math.max(0,_)}return h}}return{lo:0,hi:r.length-1}}function za(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:u,data:h}=r[a],{lo:d,hi:p}=$R(r[a],t,o,i);for(let m=d;m<=p;++m){const _=h[m];_.skip||s(_,u,m)}}}function zR(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Vl(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||za(n,e,t,function(a,l,u){!i&&!on(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:l,index:u})},!0),r}function jR(n,t,e,s){let i=[];function r(o,a,l){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],s),{angle:d}=H_(o,{x:t.x,y:t.y});fr(d,u,h)&&i.push({element:o,datasetIndex:a,index:l})}return za(n,e,t,r),i}function HR(n,t,e,s,i,r){let o=[];const a=zR(e);let l=Number.POSITIVE_INFINITY;function u(h,d,p){const m=h.inRange(t.x,t.y,i);if(s&&!m)return;const _=h.getCenterPoint(i);if(!(!!r||n.isPointInArea(_))&&!m)return;const w=a(t,_);w<l?(o=[{element:h,datasetIndex:d,index:p}],l=w):w===l&&o.push({element:h,datasetIndex:d,index:p})}return za(n,e,t,u),o}function Fl(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?jR(n,t,e,i):HR(n,t,e,s,i,r)}function sp(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return za(n,e,t,(l,u,h)=>{l[o]&&l[o](t[e],i)&&(r.push({element:l,datasetIndex:u,index:h}),a=a||l.inRange(t.x,t.y,i))}),s&&!a?[]:r}var WR={modes:{index(n,t,e,s){const i=Zn(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Vl(n,i,r,s,o):Fl(n,i,r,!1,s,o),l=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,d=u.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:u.index,index:h})}),l):[]},dataset(n,t,e,s){const i=Zn(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Vl(n,i,r,s,o):Fl(n,i,r,!1,s,o);if(a.length>0){const l=a[0].datasetIndex,u=n.getDatasetMeta(l).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:l,index:h})}return a},point(n,t,e,s){const i=Zn(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Vl(n,i,r,s,o)},nearest(n,t,e,s){const i=Zn(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Fl(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=Zn(t,n);return sp(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=Zn(t,n);return sp(n,i,"y",e.intersect,s)}}};const gy=["left","top","right","bottom"];function Ei(n,t){return n.filter(e=>e.pos===t)}function ip(n,t){return n.filter(e=>gy.indexOf(e.pos)===-1&&e.box.axis===t)}function Ti(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function qR(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function GR(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!gy.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function KR(n,t){const e=GR(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:l}=a.box,u=e[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*s:l&&t.availableWidth,a.height=i):(a.width=s,a.height=h?h*i:l&&t.availableHeight)}return e}function YR(n){const t=qR(n),e=Ti(t.filter(u=>u.box.fullSize),!0),s=Ti(Ei(t,"left"),!0),i=Ti(Ei(t,"right")),r=Ti(Ei(t,"top"),!0),o=Ti(Ei(t,"bottom")),a=ip(t,"x"),l=ip(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(l).concat(o).concat(a),chartArea:Ei(t,"chartArea"),vertical:s.concat(i).concat(l),horizontal:r.concat(o).concat(a)}}function rp(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function my(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function XR(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!Q(i)){e.size&&(n[i]-=e.size);const d=s[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?r.height:r.width),e.size=d.size/d.count,n[i]+=e.size}r.getPadding&&my(o,r.getPadding());const a=Math.max(0,t.outerWidth-rp(o,n,"left","right")),l=Math.max(0,t.outerHeight-rp(o,n,"top","bottom")),u=a!==n.w,h=l!==n.h;return n.w=a,n.h=l,e.horizontal?{same:u,other:h}:{same:h,other:u}}function QR(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function JR(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function Fi(n,t,e,s){const i=[];let r,o,a,l,u,h;for(r=0,o=n.length,u=0;r<o;++r){a=n[r],l=a.box,l.update(a.width||t.w,a.height||t.h,JR(a.horizontal,t));const{same:d,other:p}=XR(t,e,a,s);u|=d&&i.length,h=h||p,l.fullSize||i.push(a)}return u&&Fi(i,t,e,s)||h}function fo(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function op(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const l=a.box,u=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const d=t.w*h,p=u.size||l.height;dr(u.start)&&(o=u.start),l.fullSize?fo(l,i.left,o,e.outerWidth-i.right-i.left,p):fo(l,t.left+u.placed,o,d,p),u.start=o,u.placed+=d,o=l.bottom}else{const d=t.h*h,p=u.size||l.width;dr(u.start)&&(r=u.start),l.fullSize?fo(l,r,i.top,p,e.outerHeight-i.bottom-i.top):fo(l,r,t.top+u.placed,p,d),u.start=r,u.placed+=d,r=l.right}}t.x=r,t.y=o}var ee={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=se(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=YR(n.boxes),l=a.vertical,u=a.horizontal;it(n.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const h=l.reduce((v,w)=>w.box.options&&w.box.options.display===!1?v:v+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),p=Object.assign({},i);my(p,se(s));const m=Object.assign({maxPadding:p,w:r,h:o,x:i.left,y:i.top},i),_=KR(l.concat(u),d);Fi(a.fullSize,m,d,_),Fi(l,m,d,_),Fi(u,m,d,_)&&Fi(l,m,d,_),QR(m),op(a.leftAndTop,m,d,_),m.x+=m.w,m.y+=m.h,op(a.rightAndBottom,m,d,_),n.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},it(a.chartArea,v=>{const w=v.box;Object.assign(w,n.chartArea),w.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class _y{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class ZR extends _y{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Vo="$chartjs",tk={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ap=n=>n===null||n==="";function ek(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[Vo]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",ap(i)){const r=Hf(n,"width");r!==void 0&&(n.width=r)}if(ap(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Hf(n,"height");r!==void 0&&(n.height=r)}return n}const yy=nR?{passive:!0}:!1;function nk(n,t,e){n&&n.addEventListener(t,e,yy)}function sk(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,yy)}function ik(n,t){const e=tk[n.type]||n.type,{x:s,y:i}=Zn(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function ha(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function rk(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ha(a.addedNodes,s),o=o&&!ha(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function ok(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ha(a.removedNodes,s),o=o&&!ha(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const gr=new Map;let lp=0;function vy(){const n=window.devicePixelRatio;n!==lp&&(lp=n,gr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function ak(n,t){gr.size||window.addEventListener("resize",vy),gr.set(n,t)}function lk(n){gr.delete(n),gr.size||window.removeEventListener("resize",vy)}function ck(n,t,e){const s=n.canvas,i=s&&Zu(s);if(!i)return;const r=K_((a,l)=>{const u=i.clientWidth;e(a,l),u<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],u=l.contentRect.width,h=l.contentRect.height;u===0&&h===0||r(u,h)});return o.observe(i),ak(n,r),o}function Ul(n,t,e){e&&e.disconnect(),t==="resize"&&lk(n)}function uk(n,t,e){const s=n.canvas,i=K_(r=>{n.ctx!==null&&e(ik(r,n))},n);return nk(s,t,i),i}class hk extends _y{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(ek(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Vo])return!1;const s=e[Vo].initial;["height","width"].forEach(r=>{const o=s[r];Y(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[Vo],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:rk,detach:ok,resize:ck}[e]||uk;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:Ul,detach:Ul,resize:Ul}[e]||sk)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return eR(t,e,s,i)}isAttached(t){const e=t&&Zu(t);return!!(e&&e.isConnected)}}function dk(n){return!Ju()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?ZR:hk}class Ce{constructor(){U(this,"x");U(this,"y");U(this,"active",!1);U(this,"options");U(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Qs(this.x)&&Qs(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}U(Ce,"defaults",{}),U(Ce,"defaultRoutes");function fk(n,t){const e=n.options.ticks,s=pk(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?mk(t):[],o=r.length,a=r[0],l=r[o-1],u=[];if(o>i)return _k(t,u,r,o/i),u;const h=gk(r,t,i);if(o>0){let d,p;const m=o>1?Math.round((l-a)/(o-1)):null;for(po(t,u,h,Y(m)?0:a-m,a),d=0,p=o-1;d<p;d++)po(t,u,h,r[d],r[d+1]);return po(t,u,h,l,Y(m)?t.length:l+m),u}return po(t,u,h),u}function pk(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function gk(n,t,e){const s=yk(n),i=t.length/e;if(!s)return Math.max(i,1);const r=iS(s);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>i)return l}return Math.max(i,1)}function mk(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function _k(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function po(n,t,e,s,i){const r=G(s,0),o=Math.min(G(i,n.length),n.length);let a=0,l,u,h;for(e=Math.ceil(e),i&&(l=i-s,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(u=Math.max(r,0);u<o;u++)u===h&&(t.push(n[u]),a++,h=Math.round(r+a*e))}function yk(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const vk=n=>n==="left"?"right":n==="right"?"left":n,cp=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,up=(n,t)=>Math.min(t||n,n);function hp(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function bk(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let l=n.getPixelForTick(i),u;if(!(e&&(s===1?u=Math.max(l-r,o-l):t===0?u=(n.getPixelForTick(1)-l)/2:u=(l-n.getPixelForTick(i-1))/2,l+=i<t?u:-u,l<r-a||l>o+a)))return l}function wk(n,t){it(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function Ii(n){return n.drawTicks?n.tickLength:0}function dp(n,t){if(!n.display)return 0;const e=Vt(n.font,t),s=se(n.padding);return(_t(n.text)?n.text.length:1)*e.lineHeight+s.height}function xk(n,t){return jn(n,{scale:t,type:"scale"})}function Ek(n,t,e){return jn(n,{tick:e,index:t,type:"tick"})}function Tk(n,t,e){let s=qu(n);return(e&&t!=="right"||!e&&t==="right")&&(s=vk(s)),s}function Ik(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:l}=n,{chartArea:u,scales:h}=l;let d=0,p,m,_;const v=o-i,w=a-r;if(n.isHorizontal()){if(m=Qt(s,r,a),Q(e)){const S=Object.keys(e)[0],k=e[S];_=h[S].getPixelForValue(k)+v-t}else e==="center"?_=(u.bottom+u.top)/2+v-t:_=cp(n,e,t);p=a-r}else{if(Q(e)){const S=Object.keys(e)[0],k=e[S];m=h[S].getPixelForValue(k)-w+t}else e==="center"?m=(u.left+u.right)/2-w+t:m=cp(n,e,t);_=Qt(s,o,i),d=e==="left"?-Rt:Rt}return{titleX:m,titleY:_,maxWidth:p,rotation:d}}class ws extends Ce{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=me(t,Number.POSITIVE_INFINITY),e=me(e,Number.NEGATIVE_INFINITY),s=me(s,Number.POSITIVE_INFINITY),i=me(i,Number.NEGATIVE_INFINITY),{min:me(t,s),max:me(e,i),minDefined:It(t),maxDefined:It(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let l=0,u=a.length;l<u;++l)o=a[l].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:me(e,me(s,e)),max:me(s,me(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ht(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=MS(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?hp(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=fk(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ht(this.options.afterUpdate,[this])}beforeSetDimensions(){ht(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ht(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ht(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ht(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=ht(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){ht(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ht(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=up(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,l,u;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const h=this._getLabelSizes(),d=h.widest.width,p=h.highest.height,m=Bt(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:m/(s-1),d+6>a&&(a=m/(s-(t.offset?.5:1)),l=this.maxHeight-Ii(t.grid)-e.padding-dp(t.title,this.chart.options.font),u=Math.sqrt(d*d+p*p),o=Hu(Math.min(Math.asin(Bt((h.highest.height+6)/a,-1,1)),Math.asin(Bt(l/u,-1,1))-Math.asin(Bt(p/u,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){ht(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ht(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=dp(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ii(r)+l):(t.height=this.maxHeight,t.width=Ii(r)+l),s.display&&this.ticks.length){const{first:u,last:h,widest:d,highest:p}=this._getLabelSizes(),m=s.padding*2,_=Ie(this.labelRotation),v=Math.cos(_),w=Math.sin(_);if(a){const S=s.mirror?0:w*d.width+v*p.height;t.height=Math.min(this.maxHeight,t.height+S+m)}else{const S=s.mirror?0:v*d.width+w*p.height;t.width=Math.min(this.maxWidth,t.width+S+m)}this._calculatePadding(u,h,w,v)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,m=0;l?u?(p=i*t.width,m=s*e.height):(p=s*t.height,m=i*e.width):r==="start"?m=e.width:r==="end"?p=t.width:r!=="inner"&&(p=t.width/2,m=e.width/2),this.paddingLeft=Math.max((p-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((m-d+o)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=e.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ht(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)Y(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=hp(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/up(e,s));let u=0,h=0,d,p,m,_,v,w,S,k,C,D,O;for(d=0;d<e;d+=l){if(_=t[d].label,v=this._resolveTickFontOptions(d),i.font=w=v.string,S=r[w]=r[w]||{data:{},gc:[]},k=v.lineHeight,C=D=0,!Y(_)&&!_t(_))C=ca(i,S.data,S.gc,C,_),D=k;else if(_t(_))for(p=0,m=_.length;p<m;++p)O=_[p],!Y(O)&&!_t(O)&&(C=ca(i,S.data,S.gc,C,O),D+=k);o.push(C),a.push(D),u=Math.max(C,u),h=Math.max(D,h)}wk(r,e);const N=o.indexOf(u),E=a.indexOf(h),b=x=>({width:o[x]||0,height:a[x]||0});return{first:b(0),last:b(e-1),widest:b(N),highest:b(E),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return lS(this._alignToPixels?Yn(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=Ek(this.getContext(),t,s))}return this.$context||(this.$context=xk(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Ie(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*s>a*i?a/s:l/i:l*i<a*s?l/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,l=r.offset,u=this.isHorizontal(),d=this.ticks.length+(l?1:0),p=Ii(r),m=[],_=a.setContext(this.getContext()),v=_.display?_.width:0,w=v/2,S=function(ut){return Yn(s,ut,v)};let k,C,D,O,N,E,b,x,I,A,R,T;if(o==="top")k=S(this.bottom),E=this.bottom-p,x=k-w,A=S(t.top)+w,T=t.bottom;else if(o==="bottom")k=S(this.top),A=t.top,T=S(t.bottom)-w,E=k+w,x=this.top+p;else if(o==="left")k=S(this.right),N=this.right-p,b=k-w,I=S(t.left)+w,R=t.right;else if(o==="right")k=S(this.left),I=t.left,R=S(t.right)-w,N=k+w,b=this.left+p;else if(e==="x"){if(o==="center")k=S((t.top+t.bottom)/2+.5);else if(Q(o)){const ut=Object.keys(o)[0],lt=o[ut];k=S(this.chart.scales[ut].getPixelForValue(lt))}A=t.top,T=t.bottom,E=k+w,x=E+p}else if(e==="y"){if(o==="center")k=S((t.left+t.right)/2);else if(Q(o)){const ut=Object.keys(o)[0],lt=o[ut];k=S(this.chart.scales[ut].getPixelForValue(lt))}N=k-w,b=N-p,I=t.left,R=t.right}const vt=G(i.ticks.maxTicksLimit,d),Z=Math.max(1,Math.ceil(d/vt));for(C=0;C<d;C+=Z){const ut=this.getContext(C),lt=r.setContext(ut),$t=a.setContext(ut),Pt=lt.lineWidth,je=lt.color,xs=$t.dash||[],ie=$t.dashOffset,Et=lt.tickWidth,He=lt.tickColor,Ee=lt.tickBorderDash||[],We=lt.tickBorderDashOffset;D=bk(this,C,l),D!==void 0&&(O=Yn(s,D,Pt),u?N=b=I=R=O:E=x=A=T=O,m.push({tx1:N,ty1:E,tx2:b,ty2:x,x1:I,y1:A,x2:R,y2:T,width:Pt,color:je,borderDash:xs,borderDashOffset:ie,tickWidth:Et,tickColor:He,tickBorderDash:Ee,tickBorderDashOffset:We}))}return this._ticksLength=d,this._borderValue=k,m}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:u,padding:h,mirror:d}=r,p=Ii(s.grid),m=p+h,_=d?-h:m,v=-Ie(this.labelRotation),w=[];let S,k,C,D,O,N,E,b,x,I,A,R,T="middle";if(i==="top")N=this.bottom-_,E=this._getXAxisLabelAlignment();else if(i==="bottom")N=this.top+_,E=this._getXAxisLabelAlignment();else if(i==="left"){const Z=this._getYAxisLabelAlignment(p);E=Z.textAlign,O=Z.x}else if(i==="right"){const Z=this._getYAxisLabelAlignment(p);E=Z.textAlign,O=Z.x}else if(e==="x"){if(i==="center")N=(t.top+t.bottom)/2+m;else if(Q(i)){const Z=Object.keys(i)[0],ut=i[Z];N=this.chart.scales[Z].getPixelForValue(ut)+m}E=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")O=(t.left+t.right)/2-m;else if(Q(i)){const Z=Object.keys(i)[0],ut=i[Z];O=this.chart.scales[Z].getPixelForValue(ut)}E=this._getYAxisLabelAlignment(p).textAlign}e==="y"&&(l==="start"?T="top":l==="end"&&(T="bottom"));const vt=this._getLabelSizes();for(S=0,k=a.length;S<k;++S){C=a[S],D=C.label;const Z=r.setContext(this.getContext(S));b=this.getPixelForTick(S)+r.labelOffset,x=this._resolveTickFontOptions(S),I=x.lineHeight,A=_t(D)?D.length:1;const ut=A/2,lt=Z.color,$t=Z.textStrokeColor,Pt=Z.textStrokeWidth;let je=E;o?(O=b,E==="inner"&&(S===k-1?je=this.options.reverse?"left":"right":S===0?je=this.options.reverse?"right":"left":je="center"),i==="top"?u==="near"||v!==0?R=-A*I+I/2:u==="center"?R=-vt.highest.height/2-ut*I+I:R=-vt.highest.height+I/2:u==="near"||v!==0?R=I/2:u==="center"?R=vt.highest.height/2-ut*I:R=vt.highest.height-A*I,d&&(R*=-1),v!==0&&!Z.showLabelBackdrop&&(O+=I/2*Math.sin(v))):(N=b,R=(1-A)*I/2);let xs;if(Z.showLabelBackdrop){const ie=se(Z.backdropPadding),Et=vt.heights[S],He=vt.widths[S];let Ee=R-ie.top,We=0-ie.left;switch(T){case"middle":Ee-=Et/2;break;case"bottom":Ee-=Et;break}switch(E){case"center":We-=He/2;break;case"right":We-=He;break;case"inner":S===k-1?We-=He:S>0&&(We-=He/2);break}xs={left:We,top:Ee,width:He+ie.width,height:Et+ie.height,color:Z.backdropColor}}w.push({label:D,font:x,textOffset:R,options:{rotation:v,color:lt,strokeColor:$t,strokeWidth:Pt,textAlign:je,textBaseline:T,translation:[O,N],backdrop:xs}})}return w}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Ie(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let u,h;return e==="left"?i?(h=this.right+r,s==="near"?u="left":s==="center"?(u="center",h+=l/2):(u="right",h+=l)):(h=this.right-a,s==="near"?u="right":s==="center"?(u="center",h-=l/2):(u="left",h=this.left)):e==="right"?i?(h=this.left+r,s==="near"?u="right":s==="center"?(u="center",h-=l/2):(u="left",h-=l)):(h=this.left+a,s==="near"?u="left":s==="center"?(u="center",h+=l/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,u,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(u.x,u.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const l=i[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,h,d,p;this.isHorizontal()?(u=Yn(t,this.left,o)-o/2,h=Yn(t,this.right,a)+a/2,d=p=l):(d=Yn(t,this.top,o)-o/2,p=Yn(t,this.bottom,a)+a/2,u=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(u,d),e.lineTo(h,p),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&Ua(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,u=o.label,h=o.textOffset;gs(s,u,0,h,l,a)}i&&Ba(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=Vt(s.font),o=se(s.padding),a=s.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||Q(e)?(l+=o.bottom,_t(s.text)&&(l+=r.lineHeight*(s.text.length-1))):l+=o.top;const{titleX:u,titleY:h,maxWidth:d,rotation:p}=Ik(this,l,e,a);gs(t,s.text,0,0,r,{color:s.color,maxWidth:d,rotation:p,textAlign:Tk(a,e,i),textBaseline:"middle",translation:[u,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=G(t.grid&&t.grid.z,-1),i=G(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==ws.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Vt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class go{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;Rk(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,Ak(t,o,s),this.override&&yt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in yt[i]&&(delete yt[i][s],this.override&&delete ps[s])}}function Ak(n,t,e){const s=hr(Object.create(null),[e?yt.get(e):{},yt.get(t),n.defaults]);yt.set(t,s),n.defaultRoutes&&Sk(t,n.defaultRoutes),n.descriptors&&yt.describe(t,n.descriptors)}function Sk(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");yt.route(r,i,l,a)})}function Rk(n){return"id"in n&&"defaults"in n}class kk{constructor(){this.controllers=new go(Ae,"datasets",!0),this.elements=new go(Ce,"elements"),this.plugins=new go(Object,"plugins"),this.scales=new go(ws,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):it(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=ju(t);ht(s["before"+i],[],s),e[t](s),ht(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var Me=new kk;class Pk{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],l=[e,i,r.options];if(ht(a,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){Y(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=G(s.options&&s.options.plugins,{}),r=Ck(s);return i===!1&&!e?[]:Mk(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function Ck(n){const t={},e=[],s=Object.keys(Me.plugins.items);for(let r=0;r<s.length;r++)e.push(Me.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function Dk(n,t){return!t&&n===!1?null:n===!0?{}:n}function Mk(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const l=a.id,u=Dk(s[l],i);u!==null&&r.push({plugin:a,options:Ok(n.config,{plugin:a,local:e[l]},u,o)})}return r}function Ok(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Sc(n,t){const e=yt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Lk(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function Nk(n,t){return n===t?"_index_":"_value_"}function fp(n){if(n==="x"||n==="y"||n==="r")return n}function Vk(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Rc(n,...t){if(fp(n))return n;for(const e of t){const s=e.axis||Vk(e.position)||n.length>1&&fp(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function pp(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function Fk(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return pp(n,"x",e[0])||pp(n,"y",e[0])}return{}}function Uk(n,t){const e=ps[n.type]||{scales:{}},s=t.scales||{},i=Sc(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!Q(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Rc(o,a,Fk(o,n),yt.scales[a.type]),u=Nk(l,i),h=e.scales||{};r[o]=Ki(Object.create(null),[{axis:l},a,h[l],h[u]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,l=o.indexAxis||Sc(a,t),h=(ps[a]||{}).scales||{};Object.keys(h).forEach(d=>{const p=Lk(d,l),m=o[p+"AxisID"]||p;r[m]=r[m]||Object.create(null),Ki(r[m],[{axis:p},s[m],h[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];Ki(a,[yt.scales[a.type],yt.scale])}),r}function by(n){const t=n.options||(n.options={});t.plugins=G(t.plugins,{}),t.scales=Uk(n,t)}function wy(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function Bk(n){return n=n||{},n.data=wy(n.data),by(n),n}const gp=new Map,xy=new Set;function mo(n,t){let e=gp.get(n);return e||(e=t(),gp.set(n,e),xy.add(e)),e}const Ai=(n,t,e)=>{const s=Fn(t,e);s!==void 0&&n.add(s)};class $k{constructor(t){this._config=Bk(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=wy(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),by(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return mo(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return mo(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return mo(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return mo(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(d=>Ai(l,t,d))),h.forEach(d=>Ai(l,i,d)),h.forEach(d=>Ai(l,ps[r]||{},d)),h.forEach(d=>Ai(l,yt,d)),h.forEach(d=>Ai(l,Tc,d))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),xy.has(e)&&o.set(e,u),u}chartOptionScopes(){const{options:t,type:e}=this;return[t,ps[e]||{},yt.datasets[e]||{},{type:e},yt,Tc]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=mp(this._resolverCache,t,i);let l=o;if(jk(o,e)){r.$shared=!1,s=Un(s)?s():s;const u=this.createResolver(t,s,a);l=Js(o,s,u)}for(const u of e)r[u]=l[u];return r}createResolver(t,e,s=[""],i){const{resolver:r}=mp(this._resolverCache,t,s);return Q(e)?Js(r,e,void 0,i):r}}function mp(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:Yu(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const zk=n=>Q(n)&&Object.getOwnPropertyNames(n).some(t=>Un(n[t]));function jk(n,t){const{isScriptable:e,isIndexable:s}=ty(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&(Un(a)||zk(a))||o&&_t(a))return!0}return!1}var Hk="4.5.1";const Wk=["top","bottom","left","right","chartArea"];function _p(n,t){return n==="top"||n==="bottom"||Wk.indexOf(n)===-1&&t==="x"}function yp(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function vp(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),ht(e&&e.onComplete,[n],t)}function qk(n){const t=n.chart,e=t.options.animation;ht(e&&e.onProgress,[n],t)}function Ey(n){return Ju()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Fo={},bp=n=>{const t=Ey(n);return Object.values(Fo).filter(e=>e.canvas===t).pop()};function Gk(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function Kk(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class bt{static register(...t){Me.add(...t),wp()}static unregister(...t){Me.remove(...t),wp()}constructor(t,e){const s=this.config=new $k(e),i=Ey(t),r=bp(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||dk(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),l=a&&a.canvas,u=l&&l.height,h=l&&l.width;if(this.id=YA(),this.ctx=a,this.canvas=l,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Pk,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=dS(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],Fo[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ye.listen(this,"complete",vp),Ye.listen(this,"progress",qk),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return Y(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Me}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():jf(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Bf(this.canvas,this.ctx),this}stop(){return Ye.stop(this),this}resize(t,e){Ye.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,jf(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ht(s.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};it(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=Rc(o,a),u=l==="r",h=l==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),it(r,o=>{const a=o.options,l=a.id,u=Rc(l,a),h=G(a.type,o.dtype);(a.position===void 0||_p(a.position,u)!==_p(o.dposition))&&(a.position=o.dposition),i[l]=!0;let d=null;if(l in s&&s[l].type===h)d=s[l];else{const p=Me.getScale(h);d=new p({id:l,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,t)}),it(i,(o,a)=>{o||delete s[a]}),it(s,o=>{ee.configure(this,o,o.options),ee.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(yp("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||Sc(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const l=Me.getController(a),{datasetElementType:u,dataElementType:h}=yt.datasets[a];Object.assign(l,{dataElementType:Me.getElement(h),datasetElementType:u&&Me.getElement(u)}),o.controller=new l(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){it(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:d}=this.getDatasetMeta(u),p=!i&&r.indexOf(d)===-1;d.buildOrUpdateElements(p),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||it(r,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(yp("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){it(this.scales,t=>{ee.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Cf(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;Gk(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!Cf(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ee.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],it(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,Un(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ye.has(this)?this.attached&&!Ye.running(this)&&Ye.start(this):(this.draw(),vp({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=hy(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Ua(e,i),t.controller.draw(),i&&Ba(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return on(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=WR.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=jn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);dr(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Ye.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Bf(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Fo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};it(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(l,u)=>{e.addEventListener(this,l,u),t[l]=u},i=(l,u)=>{t[l]&&(e.removeEventListener(this,l,u),delete t[l])},r=(l,u)=>{this.canvas&&this.resize(l,u)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){it(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},it(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!oa(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(l,u)=>l.filter(h=>!u.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),l=eS(t),u=Kk(t,this._lastEvent,s,l);s&&(this._lastEvent=null,ht(r.onHover,[t,a,this],this),l&&ht(r.onClick,[t,a,this],this));const h=!oa(a,i);return(h||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=u,h}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}U(bt,"defaults",yt),U(bt,"instances",Fo),U(bt,"overrides",ps),U(bt,"registry",Me),U(bt,"version",Hk),U(bt,"getChart",bp);function wp(){return it(bt.instances,n=>n._plugins.invalidate())}function Yk(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:u,borderJoinStyle:h}=l,d=Math.min(u/o,Zt(s-e));if(n.beginPath(),n.arc(i,r,o-u/2,s+d/2,e-d/2),a>0){const p=Math.min(u/a,Zt(s-e));n.arc(i,r,a+u/2,e-p/2,s+p/2,!0)}else{const p=Math.min(u/2,o*Zt(s-e));if(h==="round")n.arc(i,r,p,e-st/2,s+st/2,!0);else if(h==="bevel"){const m=2*p*p,_=-m*Math.cos(e+st/2)+i,v=-m*Math.sin(e+st/2)+r,w=m*Math.cos(s+st/2)+i,S=m*Math.sin(s+st/2)+r;n.lineTo(_,v),n.lineTo(w,S)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function Xk(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:l}=t;let u=i/a;n.beginPath(),n.arc(r,o,a,s-u,e+u),l>i?(u=i/l,n.arc(r,o,l,e+u,s-u,!0)):n.arc(r,o,i,e+Rt,s-Rt),n.closePath(),n.clip()}function Qk(n){return Ku(n,["outerStart","outerEnd","innerStart","innerEnd"])}function Jk(n,t,e,s){const i=Qk(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=l=>{const u=(e-Math.min(r,l))*s/2;return Bt(l,0,Math.min(r,u))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:Bt(i.innerStart,0,o),innerEnd:Bt(i.innerEnd,0,o)}}function ks(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function da(n,t,e,s,i,r){const{x:o,y:a,startAngle:l,pixelMargin:u,innerRadius:h}=t,d=Math.max(t.outerRadius+s+e-u,0),p=h>0?h+s+e+u:0;let m=0;const _=i-l;if(s){const Z=h>0?h-s:0,ut=d>0?d-s:0,lt=(Z+ut)/2,$t=lt!==0?_*lt/(lt+s):_;m=(_-$t)/2}const v=Math.max(.001,_*d-e/st)/d,w=(_-v)/2,S=l+w+m,k=i-w-m,{outerStart:C,outerEnd:D,innerStart:O,innerEnd:N}=Jk(t,p,d,k-S),E=d-C,b=d-D,x=S+C/E,I=k-D/b,A=p+O,R=p+N,T=S+O/A,vt=k-N/R;if(n.beginPath(),r){const Z=(x+I)/2;if(n.arc(o,a,d,x,Z),n.arc(o,a,d,Z,I),D>0){const Pt=ks(b,I,o,a);n.arc(Pt.x,Pt.y,D,I,k+Rt)}const ut=ks(R,k,o,a);if(n.lineTo(ut.x,ut.y),N>0){const Pt=ks(R,vt,o,a);n.arc(Pt.x,Pt.y,N,k+Rt,vt+Math.PI)}const lt=(k-N/p+(S+O/p))/2;if(n.arc(o,a,p,k-N/p,lt,!0),n.arc(o,a,p,lt,S+O/p,!0),O>0){const Pt=ks(A,T,o,a);n.arc(Pt.x,Pt.y,O,T+Math.PI,S-Rt)}const $t=ks(E,S,o,a);if(n.lineTo($t.x,$t.y),C>0){const Pt=ks(E,x,o,a);n.arc(Pt.x,Pt.y,C,S-Rt,x)}}else{n.moveTo(o,a);const Z=Math.cos(x)*d+o,ut=Math.sin(x)*d+a;n.lineTo(Z,ut);const lt=Math.cos(I)*d+o,$t=Math.sin(I)*d+a;n.lineTo(lt,$t)}n.closePath()}function Zk(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){da(n,t,e,s,l,i);for(let u=0;u<r;++u)n.fill();isNaN(a)||(l=o+(a%gt||gt))}return da(n,t,e,s,l,i),n.fill(),l}function tP(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:u,borderJoinStyle:h,borderDash:d,borderDashOffset:p,borderRadius:m}=l,_=l.borderAlign==="inner";if(!u)return;n.setLineDash(d||[]),n.lineDashOffset=p,_?(n.lineWidth=u*2,n.lineJoin=h||"round"):(n.lineWidth=u,n.lineJoin=h||"bevel");let v=t.endAngle;if(r){da(n,t,e,s,v,i);for(let w=0;w<r;++w)n.stroke();isNaN(a)||(v=o+(a%gt||gt))}_&&Xk(n,t,v),l.selfJoin&&v-o>=st&&m===0&&h!=="miter"&&Yk(n,t,v),r||(da(n,t,e,s,v,i),n.stroke())}class Ui extends Ce{constructor(e){super();U(this,"circumference");U(this,"endAngle");U(this,"fullCircles");U(this,"innerRadius");U(this,"outerRadius");U(this,"pixelMargin");U(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=H_(r,{x:e,y:s}),{startAngle:l,endAngle:u,innerRadius:h,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,_=G(p,u-l),v=fr(o,l,u)&&l!==u,w=_>=gt||v,S=sn(a,h+m,d+m);return w&&S}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:u,spacing:h}=this.options,d=(r+o)/2,p=(a+l+h+u)/2;return{x:s+Math.cos(d)*p,y:i+Math.sin(d)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>gt?Math.floor(i/gt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*r,Math.sin(l)*r);const u=1-Math.sin(Math.min(st,i||0)),h=r*u;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,Zk(e,this,h,o,a),tP(e,this,h,o,a),e.restore()}}U(Ui,"id","arc"),U(Ui,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),U(Ui,"defaultRoutes",{backgroundColor:"backgroundColor"}),U(Ui,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Ty(n,t,e=t){n.lineCap=G(e.borderCapStyle,t.borderCapStyle),n.setLineDash(G(e.borderDash,t.borderDash)),n.lineDashOffset=G(e.borderDashOffset,t.borderDashOffset),n.lineJoin=G(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=G(e.borderWidth,t.borderWidth),n.strokeStyle=G(e.borderColor,t.borderColor)}function eP(n,t,e){n.lineTo(e.x,e.y)}function nP(n){return n.stepped?TS:n.tension||n.cubicInterpolationMode==="monotone"?IS:eP}function Iy(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,l=Math.max(i,o),u=Math.min(r,a),h=i<o&&r<o||i>a&&r>a;return{count:s,start:l,loop:t.loop,ilen:u<l&&!h?s+u-l:u-l}}function sP(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:l,ilen:u}=Iy(i,e,s),h=nP(r);let{move:d=!0,reverse:p}=s||{},m,_,v;for(m=0;m<=u;++m)_=i[(a+(p?u-m:m))%o],!_.skip&&(d?(n.moveTo(_.x,_.y),d=!1):h(n,v,_,p,r.stepped),v=_);return l&&(_=i[(a+(p?u:0))%o],h(n,v,_,p,r.stepped)),!!l}function iP(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=Iy(i,e,s),{move:l=!0,reverse:u}=s||{};let h=0,d=0,p,m,_,v,w,S;const k=D=>(o+(u?a-D:D))%r,C=()=>{v!==w&&(n.lineTo(h,w),n.lineTo(h,v),n.lineTo(h,S))};for(l&&(m=i[k(0)],n.moveTo(m.x,m.y)),p=0;p<=a;++p){if(m=i[k(p)],m.skip)continue;const D=m.x,O=m.y,N=D|0;N===_?(O<v?v=O:O>w&&(w=O),h=(d*h+D)/++d):(C(),n.lineTo(D,O),_=N,d=0,v=w=O),S=O}C()}function kc(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?iP:sP}function rP(n){return n.stepped?sR:n.tension||n.cubicInterpolationMode==="monotone"?iR:ts}function oP(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),Ty(n,t.options),n.stroke(i)}function aP(n,t,e,s){const{segments:i,options:r}=t,o=kc(t);for(const a of i)Ty(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const lP=typeof Path2D=="function";function cP(n,t,e,s){lP&&!t.options.segment?oP(n,t,e,s):aP(n,t,e,s)}class Sn extends Ce{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;YS(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=uR(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=uy(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],l=rP(s);let u,h;for(u=0,h=o.length;u<h;++u){const{start:d,end:p}=o[u],m=r[d],_=r[p];if(m===_){a.push(m);continue}const v=Math.abs((i-m[e])/(_[e]-m[e])),w=l(m,_,v,s.stepped);w[e]=t[e],a.push(w)}return a.length===1?a[0]:a}pathSegment(t,e,s){return kc(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=kc(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),cP(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}U(Sn,"id","line"),U(Sn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),U(Sn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),U(Sn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function xp(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class Uo extends Ce{constructor(e){super();U(this,"parsed");U(this,"skip");U(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return xp(this,e,"x",s)}inYRange(e,s){return xp(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!on(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,Ic(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}U(Uo,"id","point"),U(Uo,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),U(Uo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Ay(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,l,u,h,d;return n.horizontal?(d=o/2,a=Math.min(e,i),l=Math.max(e,i),u=s-d,h=s+d):(d=r/2,a=e-d,l=e+d,u=Math.min(s,i),h=Math.max(s,i)),{left:a,top:u,right:l,bottom:h}}function Rn(n,t,e,s){return n?0:Bt(t,e,s)}function uP(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=Z_(s);return{t:Rn(i.top,r.top,0,e),r:Rn(i.right,r.right,0,t),b:Rn(i.bottom,r.bottom,0,e),l:Rn(i.left,r.left,0,t)}}function hP(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=os(i),o=Math.min(t,e),a=n.borderSkipped,l=s||Q(i);return{topLeft:Rn(!l||a.top||a.left,r.topLeft,0,o),topRight:Rn(!l||a.top||a.right,r.topRight,0,o),bottomLeft:Rn(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Rn(!l||a.bottom||a.right,r.bottomRight,0,o)}}function dP(n){const t=Ay(n),e=t.right-t.left,s=t.bottom-t.top,i=uP(n,e/2,s/2),r=hP(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function Bl(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&Ay(n,s);return a&&(i||sn(t,a.left,a.right))&&(r||sn(e,a.top,a.bottom))}function fP(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function pP(n,t){n.rect(t.x,t.y,t.w,t.h)}function $l(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class Bo extends Ce{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=dP(this),a=fP(o.radius)?pr:pP;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,$l(o,e,r)),t.clip(),a(t,$l(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,$l(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return Bl(this,t,e,s)}inXRange(t,e){return Bl(this,t,null,e)}inYRange(t,e){return Bl(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}U(Bo,"id","bar"),U(Bo,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),U(Bo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var gP=Object.freeze({__proto__:null,ArcElement:Ui,BarElement:Bo,LineElement:Sn,PointElement:Uo});const Pc=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Ep=Pc.map(n=>n.replace("rgb(","rgba(").replace(")",", 0.5)"));function Sy(n){return Pc[n%Pc.length]}function Ry(n){return Ep[n%Ep.length]}function mP(n,t){return n.borderColor=Sy(t),n.backgroundColor=Ry(t),++t}function _P(n,t){return n.backgroundColor=n.data.map(()=>Sy(t++)),t}function yP(n,t){return n.backgroundColor=n.data.map(()=>Ry(t++)),t}function vP(n){let t=0;return(e,s)=>{const i=n.getDatasetMeta(s).controller;i instanceof ss?t=_P(e,t):i instanceof Ji?t=yP(e,t):i&&(t=mP(e,t))}}function Tp(n){let t;for(t in n)if(n[t].borderColor||n[t].backgroundColor)return!0;return!1}function bP(n){return n&&(n.borderColor||n.backgroundColor)}function wP(){return yt.borderColor!=="rgba(0,0,0,0.1)"||yt.backgroundColor!=="rgba(0,0,0,0.1)"}var xP={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(n,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=n.config,{elements:r}=i,o=Tp(s)||bP(i)||r&&Tp(r)||wP();if(!e.forceOverride&&o)return;const a=vP(n);s.forEach(a)}};function EP(n,t,e,s,i){const r=i.samples||s;if(r>=e)return n.slice(t,t+e);const o=[],a=(e-2)/(r-2);let l=0;const u=t+e-1;let h=t,d,p,m,_,v;for(o[l++]=n[h],d=0;d<r-2;d++){let w=0,S=0,k;const C=Math.floor((d+1)*a)+1+t,D=Math.min(Math.floor((d+2)*a)+1,e)+t,O=D-C;for(k=C;k<D;k++)w+=n[k].x,S+=n[k].y;w/=O,S/=O;const N=Math.floor(d*a)+1+t,E=Math.min(Math.floor((d+1)*a)+1,e)+t,{x:b,y:x}=n[h];for(m=_=-1,k=N;k<E;k++)_=.5*Math.abs((b-w)*(n[k].y-x)-(b-n[k].x)*(S-x)),_>m&&(m=_,p=n[k],v=k);o[l++]=p,h=v}return o[l++]=n[u],o}function TP(n,t,e,s){let i=0,r=0,o,a,l,u,h,d,p,m,_,v;const w=[],S=t+e-1,k=n[t].x,D=n[S].x-k;for(o=t;o<t+e;++o){a=n[o],l=(a.x-k)/D*s,u=a.y;const O=l|0;if(O===h)u<_?(_=u,d=o):u>v&&(v=u,p=o),i=(r*i+a.x)/++r;else{const N=o-1;if(!Y(d)&&!Y(p)){const E=Math.min(d,p),b=Math.max(d,p);E!==m&&E!==N&&w.push({...n[E],x:i}),b!==m&&b!==N&&w.push({...n[b],x:i})}o>0&&N!==m&&w.push(n[N]),w.push(a),h=O,r=0,_=v=u,d=p=m=o}}return w}function ky(n){if(n._decimated){const t=n._data;delete n._decimated,delete n._data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Ip(n){n.data.datasets.forEach(t=>{ky(t)})}function IP(n,t){const e=t.length;let s=0,i;const{iScale:r}=n,{min:o,max:a,minDefined:l,maxDefined:u}=r.getUserBounds();return l&&(s=Bt(rn(t,r.axis,o).lo,0,e-1)),u?i=Bt(rn(t,r.axis,a).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var AP={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(n,t,e)=>{if(!e.enabled){Ip(n);return}const s=n.width;n.data.datasets.forEach((i,r)=>{const{_data:o,indexAxis:a}=i,l=n.getDatasetMeta(r),u=o||i.data;if(Vi([a,n.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=n.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||n.options.parsing)return;let{start:d,count:p}=IP(l,u);const m=e.threshold||4*s;if(p<=m){ky(i);return}Y(o)&&(i._data=u,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let _;switch(e.algorithm){case"lttb":_=EP(u,d,p,s,e);break;case"min-max":_=TP(u,d,p,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=_})},destroy(n){Ip(n)}};function SP(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:l,end:u}=a;u=ja(l,u,i);const h=Cc(e,i[l],i[u],a.loop);if(!t.segments){o.push({source:a,target:h,start:i[l],end:i[u]});continue}const d=uy(t,h);for(const p of d){const m=Cc(e,r[p.start],r[p.end],p.loop),_=cy(a,i,m);for(const v of _)o.push({source:v,target:p,start:{[e]:Ap(h,m,"start",Math.max)},end:{[e]:Ap(h,m,"end",Math.min)}})}}return o}function Cc(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=Zt(i),r=Zt(r)),{property:n,start:i,end:r}}function RP(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=ja(o,a,i);const l=i[o],u=i[a];s!==null?(r.push({x:l.x,y:s}),r.push({x:u.x,y:s})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:u.y}))}),r}function ja(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Ap(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function Py(n,t){let e=[],s=!1;return _t(n)?(s=!0,e=n):e=RP(n,t),e.length?new Sn({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Sp(n){return n&&n.fill!==!1}function kP(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!It(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function PP(n,t,e){const s=OP(n);if(Q(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return It(i)&&Math.floor(i)===i?CP(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function CP(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function DP(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:Q(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function MP(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:Q(n)?s=n.value:s=t.getBaseValue(),s}function OP(n){const t=n.options,e=t.fill;let s=G(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function LP(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=NP(t,e);a.push(Py({x:null,y:t.bottom},s));for(let l=0;l<r.length;l++){const u=r[l];for(let h=u.start;h<=u.end;h++)VP(i,o[h],a)}return new Sn({points:i,options:{}})}function NP(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function VP(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:l}=FP(r,t,"x");if(!(!l||o&&a)){if(o)s.unshift(l);else if(n.push(l),!a)break}}n.push(...s)}function FP(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,l=!1;for(let u=0;u<r.length;u++){const h=r[u],d=o[h.start][e],p=o[h.end][e];if(sn(i,d,p)){a=i===d,l=i===p;break}}return{first:a,last:l,point:s}}class Cy{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:gt},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function UP(n){const{chart:t,fill:e,line:s}=n;if(It(e))return BP(t,e);if(e==="stack")return LP(n);if(e==="shape")return!0;const i=$P(n);return i instanceof Cy?i:Py(i,s)}function BP(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function $P(n){return(n.scale||{}).getPointPositionForValue?jP(n):zP(n)}function zP(n){const{scale:t={},fill:e}=n,s=DP(e,t);if(It(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function jP(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=MP(e,t,r),a=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,r);return new Cy({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<i;++l)a.push(t.getPointPositionForValue(l,o));return a}function zl(n,t,e){const s=UP(t),{chart:i,index:r,line:o,scale:a,axis:l}=t,u=o.options,h=u.fill,d=u.backgroundColor,{above:p=d,below:m=d}=h||{},_=i.getDatasetMeta(r),v=hy(i,_);s&&o.points.length&&(Ua(n,e),HP(n,{line:o,target:s,above:p,below:m,area:e,scale:a,axis:l,clip:v}),Ba(n))}function HP(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:l}=t,u=e._loop?"angle":t.axis;n.save();let h=r;r!==i&&(u==="x"?(Rp(n,s,o.top),jl(n,{line:e,target:s,color:i,scale:a,property:u,clip:l}),n.restore(),n.save(),Rp(n,s,o.bottom)):u==="y"&&(kp(n,s,o.left),jl(n,{line:e,target:s,color:r,scale:a,property:u,clip:l}),n.restore(),n.save(),kp(n,s,o.right),h=i)),jl(n,{line:e,target:s,color:h,scale:a,property:u,clip:l}),n.restore()}function Rp(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:l,end:u}=a,h=i[l],d=i[ja(l,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(d.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function kp(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:l,end:u}=a,h=i[l],d=i[ja(l,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,d.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function jl(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,l=SP(e,s,i);for(const{source:u,target:h,start:d,end:p}of l){const{style:{backgroundColor:m=r}={}}=u,_=s!==!0;n.save(),n.fillStyle=m,WP(n,o,a,_&&Cc(i,d,p)),n.beginPath();const v=!!e.pathSegment(n,u);let w;if(_){v?n.closePath():Pp(n,s,p,i);const S=!!s.pathSegment(n,h,{move:v,reverse:!0});w=v&&S,w||Pp(n,s,d,i)}n.closePath(),n.fill(w?"evenodd":"nonzero"),n.restore()}}function WP(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let l,u,h,d;r==="x"?(l=o,u=i.top,h=a,d=i.bottom):(l=i.left,u=o,h=i.right,d=a),n.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),u=Math.max(u,e.top),d=Math.min(d,e.bottom)),n.rect(l,u,h-l,d-u),n.clip()}}function Pp(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var qP={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,l;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof Sn&&(l={visible:n.isDatasetVisible(o),index:o,fill:PP(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,i.push(l);for(o=0;o<s;++o)l=i[o],!(!l||l.fill===!1)&&(l.fill=kP(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&zl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;Sp(r)&&zl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Sp(s)||e.drawTime!=="beforeDatasetDraw"||zl(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Cp=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},GP=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Dp extends Ce{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=ht(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=Vt(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Cp(s,r);let u,h;e.font=i.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,u=this._fitCols(o,i,a,l)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],h=i+a;let d=t;r.textAlign="left",r.textBaseline="middle";let p=-1,m=-h;return this.legendItems.forEach((_,v)=>{const w=s+e/2+r.measureText(_.text).width;(v===0||u[u.length-1]+w+2*a>o)&&(d+=h,u[u.length-(v>0?0:1)]=0,m+=h,p++),l[v]={left:0,top:m,row:p,width:w,height:i},u[u.length-1]+=w+a}),d}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-t;let d=a,p=0,m=0,_=0,v=0;return this.legendItems.forEach((w,S)=>{const{itemWidth:k,itemHeight:C}=KP(s,e,r,w,i);S>0&&m+C+2*a>h&&(d+=p+a,u.push({width:p,height:m}),_+=p+a,v++,p=m=0),l[S]={left:_,top:m,col:v,width:k,height:C},p=Math.max(p,k),m+=C+a}),d+=p,u.push({width:p,height:m}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=$s(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Qt(s,this.left+i,this.right-this.lineWidths[a]);for(const u of e)a!==u.row&&(a=u.row,l=Qt(s,this.left+i,this.right-this.lineWidths[a])),u.top+=this.top+t+i,u.left=o.leftForLtr(o.x(l),u.width),l+=u.width+i}else{let a=0,l=Qt(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const u of e)u.col!==a&&(a=u.col,l=Qt(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),u.top=l,u.left+=this.left+i,u.left=o.leftForLtr(o.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Ua(t,this),this._draw(),Ba(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=yt.color,l=$s(t.rtl,this.left,this.width),u=Vt(o.font),{padding:h}=o,d=u.size,p=d/2;let m;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:_,boxHeight:v,itemHeight:w}=Cp(o,d),S=function(N,E,b){if(isNaN(_)||_<=0||isNaN(v)||v<0)return;i.save();const x=G(b.lineWidth,1);if(i.fillStyle=G(b.fillStyle,a),i.lineCap=G(b.lineCap,"butt"),i.lineDashOffset=G(b.lineDashOffset,0),i.lineJoin=G(b.lineJoin,"miter"),i.lineWidth=x,i.strokeStyle=G(b.strokeStyle,a),i.setLineDash(G(b.lineDash,[])),o.usePointStyle){const I={radius:v*Math.SQRT2/2,pointStyle:b.pointStyle,rotation:b.rotation,borderWidth:x},A=l.xPlus(N,_/2),R=E+p;J_(i,I,A,R,o.pointStyleWidth&&_)}else{const I=E+Math.max((d-v)/2,0),A=l.leftForLtr(N,_),R=os(b.borderRadius);i.beginPath(),Object.values(R).some(T=>T!==0)?pr(i,{x:A,y:I,w:_,h:v,radius:R}):i.rect(A,I,_,v),i.fill(),x!==0&&i.stroke()}i.restore()},k=function(N,E,b){gs(i,b.text,N,E+w/2,u,{strikethrough:b.hidden,textAlign:l.textAlign(b.textAlign)})},C=this.isHorizontal(),D=this._computeTitleHeight();C?m={x:Qt(r,this.left+h,this.right-s[0]),y:this.top+h+D,line:0}:m={x:this.left+h,y:Qt(r,this.top+D+h,this.bottom-e[0].height),line:0},oy(this.ctx,t.textDirection);const O=w+h;this.legendItems.forEach((N,E)=>{i.strokeStyle=N.fontColor,i.fillStyle=N.fontColor;const b=i.measureText(N.text).width,x=l.textAlign(N.textAlign||(N.textAlign=o.textAlign)),I=_+p+b;let A=m.x,R=m.y;l.setWidth(this.width),C?E>0&&A+I+h>this.right&&(R=m.y+=O,m.line++,A=m.x=Qt(r,this.left+h,this.right-s[m.line])):E>0&&R+O>this.bottom&&(A=m.x=A+e[m.line].width+h,m.line++,R=m.y=Qt(r,this.top+D+h,this.bottom-e[m.line].height));const T=l.x(A);if(S(T,R,N),A=fS(x,A+_+p,C?A+I:this.right,t.rtl),k(l.x(A),R,N),C)m.x+=I+h;else if(typeof N.text!="string"){const vt=u.lineHeight;m.y+=Dy(N,vt)+h}else m.y+=O}),ay(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=Vt(e.font),i=se(e.padding);if(!e.display)return;const r=$s(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=s.size/2,u=i.top+l;let h,d=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),h=this.top+u,d=Qt(t.align,d,this.right-p);else{const _=this.columnSizes.reduce((v,w)=>Math.max(v,w.height),0);h=u+Qt(t.align,this.top,this.bottom-_-t.labels.padding-this._computeTitleHeight())}const m=Qt(a,d,d+p);o.textAlign=r.textAlign(qu(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,gs(o,e.text,m,h,s)}_computeTitleHeight(){const t=this.options.title,e=Vt(t.font),s=se(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(sn(t,this.left,this.right)&&sn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],sn(t,i.left,i.left+i.width)&&sn(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!QP(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=GP(i,s);i&&!r&&ht(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&ht(e.onHover,[t,s,this],this)}else s&&ht(e.onClick,[t,s,this],this)}}function KP(n,t,e,s,i){const r=YP(s,n,t,e),o=XP(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function YP(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function XP(n,t,e){let s=n;return typeof t.text!="string"&&(s=Dy(t,e)),s}function Dy(n,t){const e=n.text?n.text.length:0;return t*e}function QP(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var JP={id:"legend",_element:Dp,start(n,t,e){const s=n.legend=new Dp({ctx:n.ctx,options:e,chart:n});ee.configure(n,s,e),ee.addBox(n,s)},stop(n){ee.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;ee.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(e?0:void 0),h=se(u.borderWidth);return{text:t[l.index].label,fillStyle:u.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:s||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};class eh extends Ce{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=_t(s.text)?s.text.length:1;this._padding=se(s.padding);const r=i*Vt(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:r,options:o}=this,a=o.align;let l=0,u,h,d;return this.isHorizontal()?(h=Qt(a,s,r),d=e+t,u=r-s):(o.position==="left"?(h=s+t,d=Qt(a,i,e),l=st*-.5):(h=r-t,d=Qt(a,e,i),l=st*.5),u=i-e),{titleX:h,titleY:d,maxWidth:u,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=Vt(e.font),r=s.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:u}=this._drawArgs(r);gs(t,e.text,0,0,s,{color:e.color,maxWidth:l,rotation:u,textAlign:qu(e.align),textBaseline:"middle",translation:[o,a]})}}function ZP(n,t){const e=new eh({ctx:n.ctx,options:t,chart:n});ee.configure(n,e,t),ee.addBox(n,e),n.titleBlock=e}var tC={id:"title",_element:eh,start(n,t,e){ZP(n,e)},stop(n){const t=n.titleBlock;ee.removeBox(n,t),delete n.titleBlock},beforeUpdate(n,t,e){const s=n.titleBlock;ee.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const _o=new WeakMap;var eC={id:"subtitle",start(n,t,e){const s=new eh({ctx:n.ctx,options:e,chart:n});ee.configure(n,s,e),ee.addBox(n,s),_o.set(n,s)},stop(n){ee.removeBox(n,_o.get(n)),_o.delete(n)},beforeUpdate(n,t,e){const s=_o.get(n);ee.configure(n,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Bi={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();s.add(l.x),i+=l.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,l)=>a+l)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const l=n[r].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),h=Ec(t,u);h<i&&(i=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function De(n,t){return t&&(_t(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function Xe(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function nC(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Mp(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,l=Vt(t.bodyFont),u=Vt(t.titleFont),h=Vt(t.footerFont),d=r.length,p=i.length,m=s.length,_=se(t.padding);let v=_.height,w=0,S=s.reduce((D,O)=>D+O.before.length+O.lines.length+O.after.length,0);if(S+=n.beforeBody.length+n.afterBody.length,d&&(v+=d*u.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),S){const D=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;v+=m*D+(S-m)*l.lineHeight+(S-1)*t.bodySpacing}p&&(v+=t.footerMarginTop+p*h.lineHeight+(p-1)*t.footerSpacing);let k=0;const C=function(D){w=Math.max(w,e.measureText(D).width+k)};return e.save(),e.font=u.string,it(n.title,C),e.font=l.string,it(n.beforeBody.concat(n.afterBody),C),k=t.displayColors?o+2+t.boxPadding:0,it(s,D=>{it(D.before,C),it(D.lines,C),it(D.after,C)}),k=0,e.font=h.string,it(n.footer,C),e.restore(),w+=_.width,{width:w,height:v}}function sC(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function iC(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function rC(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:l}}=n;let u="center";return s==="center"?u=i<=(a+l)/2?"left":"right":i<=r/2?u="left":i>=o-r/2&&(u="right"),iC(u,n,t,e)&&(u="center"),u}function Op(n,t,e){const s=e.yAlign||t.yAlign||sC(n,e);return{xAlign:e.xAlign||t.xAlign||rC(n,t,e,s),yAlign:s}}function oC(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function aC(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Lp(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:l}=e,u=i+r,{topLeft:h,topRight:d,bottomLeft:p,bottomRight:m}=os(o);let _=oC(t,a);const v=aC(t,l,u);return l==="center"?a==="left"?_+=u:a==="right"&&(_-=u):a==="left"?_-=Math.max(h,p)+i:a==="right"&&(_+=Math.max(d,m)+i),{x:Bt(_,0,s.width-t.width),y:Bt(v,0,s.height-t.height)}}function yo(n,t,e){const s=se(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Np(n){return De([],Xe(n))}function lC(n,t,e){return jn(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Vp(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const My={beforeTitle:Ke,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:Ke,beforeBody:Ke,beforeLabel:Ke,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return Y(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Ke,afterBody:Ke,beforeFooter:Ke,footer:Ke,afterFooter:Ke};function ce(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?My[t].call(e,s):i}class Dc extends Ce{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new dy(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=lC(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=ce(s,"beforeTitle",this,t),r=ce(s,"title",this,t),o=ce(s,"afterTitle",this,t);let a=[];return a=De(a,Xe(i)),a=De(a,Xe(r)),a=De(a,Xe(o)),a}getBeforeBody(t,e){return Np(ce(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return it(t,r=>{const o={before:[],lines:[],after:[]},a=Vp(s,r);De(o.before,Xe(ce(a,"beforeLabel",this,r))),De(o.lines,ce(a,"label",this,r)),De(o.after,Xe(ce(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return Np(ce(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=ce(s,"beforeFooter",this,t),r=ce(s,"footer",this,t),o=ce(s,"afterFooter",this,t);let a=[];return a=De(a,Xe(i)),a=De(a,Xe(r)),a=De(a,Xe(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],l,u;for(l=0,u=e.length;l<u;++l)a.push(nC(this.chart,e[l]));return t.filter&&(a=a.filter((h,d,p)=>t.filter(h,d,p,s))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,s))),it(a,h=>{const d=Vp(t.callbacks,h);i.push(ce(d,"labelColor",this,h)),r.push(ce(d,"labelPointStyle",this,h)),o.push(ce(d,"labelTextColor",this,h))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=Bi[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const l=this._size=Mp(this,s),u=Object.assign({},a,l),h=Op(this.chart,s,u),d=Lp(s,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:l,topRight:u,bottomLeft:h,bottomRight:d}=os(a),{x:p,y:m}=t,{width:_,height:v}=e;let w,S,k,C,D,O;return r==="center"?(D=m+v/2,i==="left"?(w=p,S=w-o,C=D+o,O=D-o):(w=p+_,S=w+o,C=D-o,O=D+o),k=w):(i==="left"?S=p+Math.max(l,h)+o:i==="right"?S=p+_-Math.max(u,d)-o:S=this.caretX,r==="top"?(C=m,D=C-o,w=S-o,k=S+o):(C=m+v,D=C+o,w=S+o,k=S-o),O=C),{x1:w,x2:S,x3:k,y1:C,y2:D,y3:O}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,l;if(r){const u=$s(s.rtl,this.x,this.width);for(t.x=yo(this,s.titleAlign,s),e.textAlign=u.textAlign(s.titleAlign),e.textBaseline="middle",o=Vt(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(i[l],u.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:l,boxWidth:u}=r,h=Vt(r.bodyFont),d=yo(this,"left",r),p=i.x(d),m=l<h.lineHeight?(h.lineHeight-l)/2:0,_=e.y+m;if(r.usePointStyle){const v={radius:Math.min(u,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},w=i.leftForLtr(p,u)+u/2,S=_+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Ic(t,v,w,S),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Ic(t,v,w,S)}else{t.lineWidth=Q(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=i.leftForLtr(p,u),w=i.leftForLtr(i.xPlus(p,1),u-2),S=os(o.borderRadius);Object.values(S).some(k=>k!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,pr(t,{x:v,y:_,w:u,h:l,radius:S}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),pr(t,{x:w,y:_+1,w:u-2,h:l-2,radius:S}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(v,_,u,l),t.strokeRect(v,_,u,l),t.fillStyle=o.backgroundColor,t.fillRect(w,_+1,u-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:u,boxPadding:h}=s,d=Vt(s.bodyFont);let p=d.lineHeight,m=0;const _=$s(s.rtl,this.x,this.width),v=function(b){e.fillText(b,_.x(t.x+m),t.y+p/2),t.y+=p+r},w=_.textAlign(o);let S,k,C,D,O,N,E;for(e.textAlign=o,e.textBaseline="middle",e.font=d.string,t.x=yo(this,w,s),e.fillStyle=s.bodyColor,it(this.beforeBody,v),m=a&&w!=="right"?o==="center"?u/2+h:u+2+h:0,D=0,N=i.length;D<N;++D){for(S=i[D],k=this.labelTextColors[D],e.fillStyle=k,it(S.before,v),C=S.lines,a&&C.length&&(this._drawColorBox(e,t,D,_,s),p=Math.max(d.lineHeight,l)),O=0,E=C.length;O<E;++O)v(C[O]),p=d.lineHeight;it(S.after,v)}m=0,p=d.lineHeight,it(this.afterBody,v),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const l=$s(s.rtl,this.x,this.width);for(t.x=yo(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",o=Vt(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:u,height:h}=s,{topLeft:d,topRight:p,bottomLeft:m,bottomRight:_}=os(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+d,l),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+u-p,l),e.quadraticCurveTo(a+u,l,a+u,l+p),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+u,l+h-_),e.quadraticCurveTo(a+u,l+h,a+u-_,l+h),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+m,l+h),e.quadraticCurveTo(a,l+h,a,l+h-m),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,l+d),e.quadraticCurveTo(a,l,a+d,l),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=Bi[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Mp(this,t),l=Object.assign({},o,this._size),u=Op(e,t,l),h=Lp(t,l,u,e);(i._to!==h.x||r._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=se(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),oy(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),ay(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:l})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[l],index:l}}),r=!oa(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),l=e||!oa(o,r)||a;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=Bi[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}U(Dc,"positioners",Bi);var cC={id:"tooltip",_element:Dc,positioners:Bi,afterInit(n,t,e){e&&(n.tooltip=new Dc({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:My},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},uC=Object.freeze({__proto__:null,Colors:xP,Decimation:AP,Filler:qP,Legend:JP,SubTitle:eC,Title:tC,Tooltip:cC});const hC=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function dC(n,t,e,s){const i=n.indexOf(t);if(i===-1)return hC(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const fC=(n,t)=>n===null?null:Bt(Math.round(n),0,t);function Fp(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Mc extends ws{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Y(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:dC(s,t,G(e,t),this._addedLabels),fC(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return Fp.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}U(Mc,"id","category"),U(Mc,"defaults",{ticks:{callback:Fp}});function pC(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:l,count:u,maxTicks:h,maxDigits:d,includeBounds:p}=n,m=r||1,_=h-1,{min:v,max:w}=t,S=!Y(o),k=!Y(a),C=!Y(u),D=(w-v)/(d+1);let O=Mf((w-v)/_/m)*m,N,E,b,x;if(O<1e-14&&!S&&!k)return[{value:v},{value:w}];x=Math.ceil(w/O)-Math.floor(v/O),x>_&&(O=Mf(x*O/_/m)*m),Y(l)||(N=Math.pow(10,l),O=Math.ceil(O*N)/N),i==="ticks"?(E=Math.floor(v/O)*O,b=Math.ceil(w/O)*O):(E=v,b=w),S&&k&&r&&oS((a-o)/r,O/1e3)?(x=Math.round(Math.min((a-o)/O,h)),O=(a-o)/x,E=o,b=a):C?(E=S?o:E,b=k?a:b,x=u-1,O=(b-E)/x):(x=(b-E)/O,Yi(x,Math.round(x),O/1e3)?x=Math.round(x):x=Math.ceil(x));const I=Math.max(Of(O),Of(E));N=Math.pow(10,Y(l)?I:l),E=Math.round(E*N)/N,b=Math.round(b*N)/N;let A=0;for(S&&(p&&E!==o?(e.push({value:o}),E<o&&A++,Yi(Math.round((E+A*O)*N)/N,o,Up(o,D,n))&&A++):E<o&&A++);A<x;++A){const R=Math.round((E+A*O)*N)/N;if(k&&R>a)break;e.push({value:R})}return k&&p&&b!==a?e.length&&Yi(e[e.length-1].value,a,Up(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!k||b===a)&&e.push({value:b}),e}function Up(n,t,{horizontal:e,minRotation:s}){const i=Ie(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class fa extends ws{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Y(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=l=>i=e?i:l,a=l=>r=s?r:l;if(t){const l=Be(i),u=Be(r);l<0&&u<0?a(0):l>0&&u>0&&o(0)}if(i===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(i-l)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=pC(i,r);return t.bounds==="ticks"&&j_(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Mr(t,this.chart.options.locale,this.options.ticks.format)}}class Oc extends fa{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=It(t)?t:0,this.max=It(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=Ie(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}U(Oc,"id","linear"),U(Oc,"defaults",{ticks:{callback:Fa.formatters.numeric}});const mr=n=>Math.floor(In(n)),Qn=(n,t)=>Math.pow(10,mr(n)+t);function Bp(n){return n/Math.pow(10,mr(n))===1}function $p(n,t,e){const s=Math.pow(10,e),i=Math.floor(n/s);return Math.ceil(t/s)-i}function gC(n,t){const e=t-n;let s=mr(e);for(;$p(n,t,s)>10;)s++;for(;$p(n,t,s)<10;)s--;return Math.min(s,mr(n))}function mC(n,{min:t,max:e}){t=me(n.min,t);const s=[],i=mr(t);let r=gC(t,e),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=i>r?Math.pow(10,i):0,u=Math.round((t-l)*o)/o,h=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((u-h)/Math.pow(10,r)),p=me(n.min,Math.round((l+h+d*Math.pow(10,r))*o)/o);for(;p<e;)s.push({value:p,major:Bp(p),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(r++,d=2,o=r>=0?1:o),p=Math.round((l+h+d*Math.pow(10,r))*o)/o;const m=me(n.max,p);return s.push({value:m,major:Bp(m),significand:d}),s}class Lc extends ws{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=fa.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return It(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=It(t)?Math.max(0,t):null,this.max=It(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!It(this._userMin)&&(this.min=t===Qn(this.min,0)?Qn(this.min,-1):Qn(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const r=a=>s=t?s:a,o=a=>i=e?i:a;s===i&&(s<=0?(r(1),o(10)):(r(Qn(s,-1)),o(Qn(i,1)))),s<=0&&r(Qn(i,-1)),i<=0&&o(Qn(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=mC(e,this);return t.bounds==="ticks"&&j_(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Mr(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=In(t),this._valueRange=In(this.max)-In(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(In(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}U(Lc,"id","logarithmic"),U(Lc,"defaults",{ticks:{callback:Fa.formatters.logarithmic,major:{enabled:!0}}});function Nc(n){const t=n.ticks;if(t.display&&n.display){const e=se(t.backdropPadding);return G(t.font&&t.font.size,yt.font.size)+e.height}return 0}function _C(n,t,e){return e=_t(e)?e:[e],{w:ES(n,t.string,e),h:e.length*t.lineHeight}}function zp(n,t,e,s,i){return n===s||n===i?{start:t-e/2,end:t+e/2}:n<s||n>i?{start:t-e,end:t}:{start:t,end:t+e}}function yC(n){const t={l:n.left+n._padding.left,r:n.right-n._padding.right,t:n.top+n._padding.top,b:n.bottom-n._padding.bottom},e=Object.assign({},t),s=[],i=[],r=n._pointLabels.length,o=n.options.pointLabels,a=o.centerPointLabels?st/r:0;for(let l=0;l<r;l++){const u=o.setContext(n.getPointLabelContext(l));i[l]=u.padding;const h=n.getPointPosition(l,n.drawingArea+i[l],a),d=Vt(u.font),p=_C(n.ctx,d,n._pointLabels[l]);s[l]=p;const m=Zt(n.getIndexAngle(l)+a),_=Math.round(Hu(m)),v=zp(_,h.x,p.w,0,180),w=zp(_,h.y,p.h,90,270);vC(e,t,m,v,w)}n.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),n._pointLabelItems=xC(n,s,i)}function vC(n,t,e,s,i){const r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let a=0,l=0;s.start<t.l?(a=(t.l-s.start)/r,n.l=Math.min(n.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/r,n.r=Math.max(n.r,t.r+a)),i.start<t.t?(l=(t.t-i.start)/o,n.t=Math.min(n.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/o,n.b=Math.max(n.b,t.b+l))}function bC(n,t,e){const s=n.drawingArea,{extra:i,additionalAngle:r,padding:o,size:a}=e,l=n.getPointPosition(t,s+i+o,r),u=Math.round(Hu(Zt(l.angle+Rt))),h=IC(l.y,a.h,u),d=EC(u),p=TC(l.x,a.w,d);return{visible:!0,x:l.x,y:h,textAlign:d,left:p,top:h,right:p+a.w,bottom:h+a.h}}function wC(n,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:r}=n;return!(on({x:e,y:s},t)||on({x:e,y:r},t)||on({x:i,y:s},t)||on({x:i,y:r},t))}function xC(n,t,e){const s=[],i=n._pointLabels.length,r=n.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:Nc(r)/2,additionalAngle:o?st/i:0};let u;for(let h=0;h<i;h++){l.padding=e[h],l.size=t[h];const d=bC(n,h,l);s.push(d),a==="auto"&&(d.visible=wC(d,u),d.visible&&(u=d))}return s}function EC(n){return n===0||n===180?"center":n<180?"left":"right"}function TC(n,t,e){return e==="right"?n-=t:e==="center"&&(n-=t/2),n}function IC(n,t,e){return e===90||e===270?n-=t/2:(e>270||e<90)&&(n-=t),n}function AC(n,t,e){const{left:s,top:i,right:r,bottom:o}=e,{backdropColor:a}=t;if(!Y(a)){const l=os(t.borderRadius),u=se(t.backdropPadding);n.fillStyle=a;const h=s-u.left,d=i-u.top,p=r-s+u.width,m=o-i+u.height;Object.values(l).some(_=>_!==0)?(n.beginPath(),pr(n,{x:h,y:d,w:p,h:m,radius:l}),n.fill()):n.fillRect(h,d,p,m)}}function SC(n,t){const{ctx:e,options:{pointLabels:s}}=n;for(let i=t-1;i>=0;i--){const r=n._pointLabelItems[i];if(!r.visible)continue;const o=s.setContext(n.getPointLabelContext(i));AC(e,o,r);const a=Vt(o.font),{x:l,y:u,textAlign:h}=r;gs(e,n._pointLabels[i],l,u+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function Oy(n,t,e,s){const{ctx:i}=n;if(e)i.arc(n.xCenter,n.yCenter,t,0,gt);else{let r=n.getPointPosition(0,t);i.moveTo(r.x,r.y);for(let o=1;o<s;o++)r=n.getPointPosition(o,t),i.lineTo(r.x,r.y)}}function RC(n,t,e,s,i){const r=n.ctx,o=t.circular,{color:a,lineWidth:l}=t;!o&&!s||!a||!l||e<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(i.dash||[]),r.lineDashOffset=i.dashOffset,r.beginPath(),Oy(n,e,o,s),r.closePath(),r.stroke(),r.restore())}function kC(n,t,e){return jn(n,{label:e,index:t,type:"pointLabel"})}class $i extends fa{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=se(Nc(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=It(t)&&!isNaN(t)?t:0,this.max=It(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Nc(this.options))}generateTickLabels(t){fa.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=ht(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?yC(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=gt/(this._pointLabels.length||1),s=this.options.startAngle||0;return Zt(t*e+Ie(s))}getDistanceFromCenterForValue(t){if(Y(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Y(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return kC(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-Rt+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Oy(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:r}=e,o=this._pointLabels.length;let a,l,u;if(e.pointLabels.display&&SC(this,o),i.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const p=this.getContext(d),m=i.setContext(p),_=r.setContext(p);RC(this,m,l,o,_)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const h=s.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:p}=h;!p||!d||(t.lineWidth=p,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),u=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(u.x,u.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const u=s.setContext(this.getContext(l)),h=Vt(u.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),u.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=u.backdropColor;const d=se(u.backdropPadding);t.fillRect(-o/2-d.left,-r-h.size/2-d.top,o+d.width,h.size+d.height)}gs(t,a.label,0,-r,h,{color:u.color,strokeColor:u.textStrokeColor,strokeWidth:u.textStrokeWidth})}),t.restore()}drawTitle(){}}U($i,"id","radialLinear"),U($i,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Fa.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),U($i,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),U($i,"descriptors",{angleLines:{_fallback:"grid"}});const Ha={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},fe=Object.keys(Ha);function jp(n,t){return n-t}function Hp(n,t){if(Y(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),It(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(Qs(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function Wp(n,t,e,s){const i=fe.length;for(let r=fe.indexOf(n);r<i-1;++r){const o=Ha[fe[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return fe[r]}return fe[i-1]}function PC(n,t,e,s,i){for(let r=fe.length-1;r>=fe.indexOf(e);r--){const o=fe[r];if(Ha[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return fe[e?fe.indexOf(e):0]}function CC(n){for(let t=fe.indexOf(n)+1,e=fe.length;t<e;++t)if(Ha[fe[t]].common)return fe[t]}function qp(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=Wu(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function DC(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+i.add(a,1,s))l=e[a],l>=0&&(t[l].major=!0);return t}function Gp(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:DC(n,s,i,e)}class _r extends ws{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new BR._date(t.adapters.date);i.init(e),Ki(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Hp(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(u){!o&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!a&&!isNaN(u.max)&&(r=Math.max(r,u.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=It(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=It(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=uS(i,r,o);return this._unit=e.unit||(s.autoSkip?Wp(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):PC(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:CC(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Gp(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=Bt(e,0,o),s=Bt(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||Wp(r.minUnit,e,s,this._getLabelCapacity(e)),a=G(i.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,u=Qs(l)||l===!0,h={};let d=e,p,m;if(u&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,u?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const _=i.ticks.source==="data"&&this.getDataTimestamps();for(p=d,m=0;p<s;p=+t.add(p,a,o),m++)qp(h,p,_);return(p===s||i.bounds==="ticks"||m===1)&&qp(h,p,_),Object.keys(h).sort(jp).map(v=>+v)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return ht(o,[t,e,s],this);const a=r.time.displayFormats,l=this._unit,u=this._majorUnit,h=l&&a[l],d=u&&a[u],p=s[e],m=u&&d&&p&&p.major;return this._adapter.format(t,i||(m?d:h))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=Ie(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,Gp(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(Hp(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return q_(t.sort(jp))}}U(_r,"id","time"),U(_r,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function vo(n,t,e){let s=0,i=n.length-1,r,o,a,l;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=rn(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:l}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=rn(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:l}=n[i]);const u=o-r;return u?a+(l-a)*(t-r)/u:a}class Vc extends _r{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=vo(e,this.min),this._tableRange=vo(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,l,u,h;for(o=0,a=t.length;o<a;++o)u=t[o],u>=e&&u<=s&&i.push(u);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)h=i[o+1],l=i[o-1],u=i[o],Math.round((h+l)/2)!==u&&r.push({time:u,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(vo(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return vo(this._table,s*this._tableRange+this._minPos,!0)}}U(Vc,"id","timeseries"),U(Vc,"defaults",_r.defaults);var MC=Object.freeze({__proto__:null,CategoryScale:Mc,LinearScale:Oc,LogarithmicScale:Lc,RadialLinearScale:$i,TimeScale:_r,TimeSeriesScale:Vc});const OC=[UR,gP,uC,MC];bt.register(...OC);const Kp="rgba(255,255,255,0.08)",Yp="#a1a1aa",Zi={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};bt.defaults.color="#e5e5e5";bt.defaults.font.family=Zi.family;bt.defaults.font.weight=Zi.weight;const Xp={renderGastosPorMes:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new bt(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Kp},ticks:{color:Yp,font:Zi}},y:{grid:{color:Kp},ticks:{color:Yp,font:Zi}}}}})},renderStatusPie:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new bt(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:Zi,padding:12,usePointStyle:!0}}}}})}},ge={dashboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',shoppingCart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>',chart:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',bell:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>',moon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>'},rt={render:n=>{const t=document.getElementById("app"),e=dt.state.currentUser;if(!e){t.innerHTML=n;return}const s=dt.state.sidebarCollapsed,i=dt.state.currentTheme;t.innerHTML=`
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
        `,rt.bindEvents()},createNavItem:(n,t,e,s)=>{var o;const r=Mt.currentRoute===n||((o=Mt.currentRoute)==null?void 0:o.startsWith(`${n}/`))?"text-primary accent-left bg-surface shadow-heavy":"text-text-muted hover:text-text hover:bg-canvas";return`
            <a href="#${n}" class="flex items-center gap-3 px-3 py-2 rounded transition-colors mb-1 border border-transparent ${r}" title="${t}">
                ${e}
                <span class="${s?"hidden":"font-display tracking-wide uppercase"}">${t}</span>
            </a>
        `},bindEvents:()=>{var n,t,e;(n=document.getElementById("btn-toggle-sidebar"))==null||n.addEventListener("click",()=>{dt.toggleSidebar();const s=document.getElementById("sidebar"),i=s.querySelectorAll("span"),r=s.querySelector("[data-logo-text]");dt.state.sidebarCollapsed?(s.classList.remove("w-64"),s.classList.add("w-20"),i.forEach(o=>o.classList.add("hidden")),r&&r.classList.add("hidden")):(s.classList.remove("w-20"),s.classList.add("w-64"),i.forEach(o=>o.classList.remove("hidden")),r&&r.classList.remove("hidden"))}),(t=document.getElementById("btn-theme-toggle"))==null||t.addEventListener("click",()=>{const i=dt.state.currentTheme==="dark"?"light":"dark";dt.setTheme(i);const r=document.getElementById("btn-theme-toggle");r.innerHTML=i==="dark"?ge.sun:ge.moon}),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await ra.logout(),Mt.navigate("/login")}catch(s){console.error(s)}}),document.addEventListener("keydown",s=>{var i;(s.ctrlKey||s.metaKey)&&s.key==="k"&&(s.preventDefault(),(i=document.getElementById("global-search"))==null||i.focus())})}},LC={init:async()=>{const n=dt.state.currentUser;if(n){rt.render($.createLoader());try{let t="";if(n.role==="comprador"){const e=await Rl.getCompradorStats();t=kl.renderComprador(e),rt.render(t)}else if(n.role==="obra"||n.role==="engenheiro"){const e=n.obraPadrao||null,s=await Rl.getObraStats(e);t=kl.renderObra(s),rt.render(t)}else{const e=await Rl.getDiretorStats();t=kl.renderDiretor(e),rt.render(t),setTimeout(()=>{Xp.renderGastosPorMes("chart-gastos",e.gastosPorMes),Xp.renderStatusPie("chart-status",e.porStatus)},100)}}catch(t){console.error(t),rt.render(`<div class="text-red-500 p-4">Erro ao carregar dashboard: ${t.message}</div>`)}}}},Hl={checkDuplicidade:async(n,t)=>{const e=ue(Ut(ot,"compras"),Nt("obraId","==",n),Nt("status_compra","in",["Pendente","Em Cotação"]));return(await Ot(e)).docs.filter(r=>{const o=r.data(),a=(o.descricao||"").toLowerCase(),l=o.itens||[],u=t.toLowerCase();return a.includes(u)||l.some(h=>h.nome.toLowerCase().includes(u))}).length>0},uploadArquivo:(n,t,e)=>new Promise((s,i)=>{const r=oT(V_,t),o=iT(r,n);o.on("state_changed",a=>{const l=a.bytesTransferred/a.totalBytes*100;e&&e(l)},a=>i(a),async()=>{const a=await rT(o.snapshot.ref);s(a)})}),salvarCompra:async n=>{const t={...n,data_solicitacao:kt.now().toDate().toISOString(),status_compra:"Pendente",created_at:kt.now()};return(await Iu(Ut(ot,"compras"),t)).id},atualizarCompra:async(n,t)=>{const e=ke(ot,"compras",n);await Ys(e,t)}},NC={renderForm:(n=[],t=[])=>`
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
                        
                        ${$.createInput({id:"descricao",label:"Descrição Resumida (ex: 50 sacos de cimento)",required:!0,className:"mb-4"})}

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="flex flex-col gap-1">
                                <label class="text-xs font-display tracking-wide text-text-muted uppercase">Fornecedor Sugerido</label>
                                <select name="fornecedorId" class="input">
                                    <option value="">Sem preferência</option>
                                    ${t.map(e=>`<option value="${e.id}">${e.nome}</option>`).join("")}
                                </select>
                            </div>
                            ${$.createInput({id:"valor_estimado",type:"number",label:"Valor Estimado (R$)",placeholder:"0,00"})}
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
                        ${$.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.history.back()"})}
                        ${$.createButton({id:"btn-submit",text:"Registrar Solicitação",type:"submit"})}
                    </div>
                </form>
            </div>
        `},Ly={init:async()=>{rt.render($.createLoader());try{const[n,t]=await Promise.all([Ot(Ut(ot,"obras")),Ot(Ut(ot,"fornecedores"))]),e=n.docs.map(i=>({id:i.id,...i.data()})),s=t.docs.map(i=>({id:i.id,...i.data()}));rt.render(NC.renderForm(e,s)),Ly.bindEvents()}catch(n){console.error(n),rt.render(`<div class="text-red-500">Erro ao carregar formulário: ${n.message}</div>`)}},bindEvents:()=>{const n=document.getElementById("form-compra"),t=document.getElementById("file-upload"),e=document.getElementById("drop-zone"),s=document.getElementById("descricao"),i=document.getElementById("obraId");let r=[];e.addEventListener("click",()=>t.click()),t.addEventListener("change",l=>o(l.target.files));const o=l=>{r=[...r,...Array.from(l)],a()},a=()=>{const l=document.getElementById("file-list");l.innerHTML=r.map((u,h)=>`
                <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <span class="text-sm truncate">${u.name}</span>
                    <button type="button" class="text-red-500 hover:text-red-700" onclick="document.getElementById('form-compra').dispatchEvent(new CustomEvent('remove-file', {detail: ${h}}))">
                        ${$.createButton({text:"X",variant:"secondary",className:"px-2 py-0 text-xs"})}
                    </button>
                </div>
            `).join("")};n.addEventListener("remove-file",l=>{r.splice(l.detail,1),a()}),s.addEventListener("blur",async()=>{const l=i.value,u=s.value;l&&u.length>3&&await Hl.checkDuplicidade(l,u)&&$.createToast("⚠️ Atenção: Já existe um pedido similar para esta obra!","warning")}),document.getElementById("valor_estimado").addEventListener("input",l=>{const u=parseFloat(l.target.value),h=document.getElementById("justificativa-container"),d=document.getElementById("justificativa");u>5e3?(h.classList.remove("hidden"),d.required=!0):(h.classList.add("hidden"),d.required=!1)}),n.addEventListener("submit",async l=>{l.preventDefault();const u=document.getElementById("btn-submit");try{u.disabled=!0,u.innerHTML=$.createLoader();const h=[];for(const _ of r){const v=await Hl.uploadArquivo(_,`compras/${Date.now()}_${_.name}`);h.push({nome:_.name,url:v})}const d=new FormData(n),m={...Object.fromEntries(d.entries()),anexos:h,solicitanteId:dt.state.currentUser.uid,solicitanteNome:dt.state.currentUser.nome};await Hl.salvarCompra(m),$.createToast("Solicitação registrada com sucesso!"),Mt.navigate("/")}catch(h){console.error(h),$.createToast("Erro ao registrar: "+h.message,"error"),u.disabled=!1,u.innerHTML="<span>Registrar Solicitação</span>"}})}},Wl={getCompras:async(n={})=>{let t=Ut(ot,"compras");const e=[];n.obraId&&e.push(Nt("obraId","==",n.obraId)),n.status&&e.push(Nt("status_compra","==",n.status));const s=ue(t,...e);let r=(await Ot(s)).docs.map(o=>({id:o.id,...o.data()}));if(n.search){const o=n.search.toLowerCase();r=r.filter(a=>(a.descricao||"").toLowerCase().includes(o)||(a.fornecedorNome||"").toLowerCase().includes(o)||(a.obraNome||"").toLowerCase().includes(o))}return r},updateStatus:async(n,t)=>{const e=ke(ot,"compras",n);await Ys(e,{status_compra:t})}},ql={renderControls:(n="table")=>`
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
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Je.formatDate(t.data_solicitacao)}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-display text-text">${t.obraId||"-"}</td>
                                    <td class="px-6 py-4 text-sm text-text max-w-xs truncate" title="${t.descricao}">${t.descricao}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-text-muted">${Je.formatCurrency(t.valor_estimado||0)}</td>
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
                                            <span class="text-xs text-text-muted">${Je.formatDate(i.data_solicitacao)}</span>
                                        </div>
                                        <p class="text-sm font-display text-text mb-2 line-clamp-2">${i.descricao}</p>
                                        <div class="flex justify-between items-center mt-3">
                                            <span class="text-sm font-display text-primary uppercase">${Je.formatCurrency(i.valor_estimado||0)}</span>
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
        `},Ct={currentView:"table",compras:[],filters:{},init:async()=>{await Ct.load(),await Ct.render()},load:async()=>{Ct.compras=await Wl.getCompras()},render:async()=>{const n=document.createElement("div");n.innerHTML=ql.renderControls(Ct.currentView);const t=document.createElement("div");t.id="reports-content",t.innerHTML=Ct.currentView==="table"?ql.renderTable(Ct.compras):ql.renderKanban(Ct.compras),n.appendChild(t),rt.render(n.innerHTML),Ct.bindEvents()},applyFilters:async()=>{var u,h,d,p,m,_,v;const n=((u=document.getElementById("filter-search"))==null?void 0:u.value.toLowerCase())||"",t=((h=document.getElementById("filter-status"))==null?void 0:h.value)||"",e=((d=document.getElementById("filter-obra"))==null?void 0:d.value)||"",s=((p=document.getElementById("filter-prioridade"))==null?void 0:p.value)||"",i=((m=document.getElementById("filter-date-start"))==null?void 0:m.value)||"",r=((_=document.getElementById("filter-date-end"))==null?void 0:_.value)||"",o=((v=document.getElementById("filter-only-delayed"))==null?void 0:v.checked)||!1;Ct.filters={search:n,status:t,obra:e,prioridade:s,dateStart:i,dateEnd:r,onlyDelayed:o};const a=await Wl.getCompras(),l=new Date;Ct.compras=a.filter(w=>{var S;if(n&&!((S=w.descricao)!=null&&S.toLowerCase().includes(n))||t&&w.status_compra!==t||e&&w.obraId!==e||s&&w.prioridade!==s||i&&w.data_solicitacao<i||r&&w.data_solicitacao>r)return!1;if(o){const k=w.data_entrega_prevista?new Date(w.data_entrega_prevista):null;if(!k||k>=l||w.status_compra==="Entregue")return!1}return!0}),Ct.render()},bindEvents:()=>{var n,t,e,s;(n=document.getElementById("view-table"))==null||n.addEventListener("click",()=>{Ct.currentView="table",Ct.render()}),(t=document.getElementById("view-kanban"))==null||t.addEventListener("click",()=>{Ct.currentView="kanban",Ct.render()}),(e=document.getElementById("btn-apply-filters"))==null||e.addEventListener("click",()=>{Ct.applyFilters()}),(s=document.getElementById("btn-clear-filters"))==null||s.addEventListener("click",()=>{document.getElementById("filter-search").value="",document.getElementById("filter-status").value="",document.getElementById("filter-obra").value="",document.getElementById("filter-prioridade").value="",document.getElementById("filter-date-start").value="",document.getElementById("filter-date-end").value="",document.getElementById("filter-only-delayed").checked=!1,Ct.applyFilters()}),document.addEventListener("kanban-move-next",async i=>{const{id:r,current:o}=i.detail,a=["Pendente","Em Cotação","Aprovado","Comprado","Entregue"],l=a.indexOf(o)+1;if(l<a.length){const u=a[l];try{await Wl.updateStatus(r,u),$.createToast(`Movido para ${u}`),await Ct.load(),Ct.render()}catch(h){$.createToast("Erro ao mover: "+h.message,"error")}}})}},Qp={getUsers:async()=>(await Ot(Ut(ot,"usuarios"))).docs.map(t=>({id:t.id,...t.data()})),updateUser:async(n,t)=>{await Ys(ke(ot,"usuarios",n),t)},createUserProfile:async(n,t)=>{await Gx(ke(ot,"usuarios",n),t)}},VC={render:n=>`
            <div class="space-y-6">
                <h2 class="text-2xl font-display text-text tracking-wide">Configurações</h2>
                
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-display text-text">Usuários do Sistema</h3>
                        ${$.createButton({text:"Novo Usuário",onClick:"alert('Funcionalidade requer Admin SDK ou Cloud Functions')"})}
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
        `},Fc={init:async()=>{const n=dt.state.currentUser;if(n.role!=="administrador"&&n.role!=="diretor"){rt.render('<div class="p-6 text-red-500">Acesso negado. Apenas administradores.</div>');return}rt.render($.createLoader());try{const t=await Qp.getUsers();rt.render(VC.render(t)),Fc.bindEvents()}catch(t){rt.render(`<div class="text-red-500">Erro: ${t.message}</div>`)}},bindEvents:()=>{document.addEventListener("edit-user",n=>{const t=n.detail,e=prompt("Nova função (comprador, obra, diretor, administrador):");e&&Qp.updateUser(t,{role:e}).then(()=>{$.createToast("Usuário atualizado!"),Fc.init()}).catch(s=>$.createToast("Erro: "+s.message,"error"))})}},es={getObras:async()=>(await Ot(Ut(ot,"obras"))).docs.map(t=>({id:t.id,...t.data()})),getObraById:async n=>{const e=(await Ot(Ut(ot,"obras"))).docs.find(s=>s.id===n);return e?{id:e.id,...e.data()}:null},createObra:async n=>(await Iu(Ut(ot,"obras"),{...n,created_at:new Date().toISOString()})).id,updateObra:async(n,t)=>{await Ys(ke(ot,"obras",n),{...t,updated_at:new Date().toISOString()})},deleteObra:async n=>{await Kx(ke(ot,"obras",n))},getObraStats:async n=>{const t=Ut(ot,"compras"),e=ue(t,Nt("obraId","==",n)),i=(await Ot(e)).docs.map(d=>({id:d.id,...d.data()}));let r=0;const o={},a={},l={};i.forEach(d=>{const p=Number(d.valor_estimado||d.valor_total||0);r+=p,o[d.status_compra]=(o[d.status_compra]||0)+1;const m=d.categoria||"Outros";if(a[m]=(a[m]||0)+p,d.data_solicitacao){const _=new Date(d.data_solicitacao),v=`${_.getFullYear()}-${String(_.getMonth()+1).padStart(2,"0")}`;l[v]=(l[v]||0)+p}});const u=Object.keys(l).length||1,h=es.calculateCurvaS(r,u,l);return{totalCompras:i.length,totalGasto:r,porStatus:o,gastosPorCategoria:a,gastosMensais:l,curvaS:h,comprasRecentes:i.slice(0,10)}},calculateCurvaS:(n,t,e)=>{const s=[],i=[];let r=0;const o=Object.keys(e).sort();for(let a=0;a<t;a++){const l=(a+1)/t,u=1/(1+Math.exp(-10*(l-.5)));s.push(n*u),o[a]&&(r+=e[o[a]]),i.push(r)}return{planejado:s,realizado:i}}},Jp={render:(n=[])=>{const t=new Date,e=t.getMonth(),s=t.getFullYear(),i={};n.forEach(d=>{if(d.data_entrega_prevista){const m=new Date(d.data_entrega_prevista).toISOString().split("T")[0];i[m]||(i[m]=[]),i[m].push(d)}});const r=new Date(s,e,1),a=new Date(s,e+1,0).getDate(),l=r.getDay();let h=`
            <div class="card">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-display text-text">Calendário de Entregas - ${["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e]} ${s}</h3>
                </div>
                
                <div class="grid grid-cols-7 gap-2">
                    ${["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"].map(d=>`<div class="text-center text-xs font-display text-text-muted uppercase tracking-wide py-2">${d}</div>`).join("")}
        `;for(let d=0;d<l;d++)h+='<div class="aspect-square"></div>';for(let d=1;d<=a;d++){const p=new Date(s,e,d),m=p.toISOString().split("T")[0],_=i[m]||[],v=d===t.getDate()&&e===t.getMonth(),w=p<t&&!v;h+=`
                <div class="aspect-square border border-border rounded p-1 ${v?"bg-primary/10 border-primary":"bg-surface"} ${w?"opacity-50":""} hover:bg-canvas transition-colors cursor-pointer">
                    <div class="text-xs font-display ${v?"text-primary font-bold":"text-text"}">${d}</div>
                    ${_.length>0?`
                        <div class="mt-1 space-y-1">
                            ${_.slice(0,2).map(S=>{var k;return`
                                <div class="text-[10px] bg-primary/20 border border-primary rounded px-1 truncate" title="${S.descricao}">
                                    ${((k=S.descricao)==null?void 0:k.substring(0,15))||"Compra"}
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
        `}},Gl={renderList:n=>`
            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-display text-text tracking-wide">Gestão de Obras</h2>
                    ${$.createButton({id:"btn-nova-obra",text:"Nova Obra",onClick:"window.location.hash = '/obras/nova'"})}
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
                                ${t.orcamento?`<p class="heading-muted"><span class="text-text">Orçamento:</span> ${Je.formatCurrency(t.orcamento)}</p>`:""}
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
                            ${$.createInput({id:"nome_obra",label:"Nome da Obra *",value:(n==null?void 0:n.nome_obra)||"",required:!0})}
                            ${$.createInput({id:"apelido_obra",label:"Apelido/Nome Curto",value:(n==null?void 0:n.apelido_obra)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${$.createInput({id:"centro_custo",label:"Centro de Custo *",value:(n==null?void 0:n.centro_custo)||"",required:!0})}
                            ${$.createInput({id:"responsavel",label:"Responsável",value:(n==null?void 0:n.responsavel)||""})}
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            ${$.createInput({id:"orcamento",label:"Orçamento Total (R$)",type:"number",value:(n==null?void 0:n.orcamento)||"",placeholder:"0.00"})}
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
                        
                        ${$.createInput({id:"endereco",label:"Endereço Completo",value:(n==null?void 0:n.endereco)||"",className:"mb-4"})}

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            ${$.createInput({id:"cidade",label:"Cidade",value:(n==null?void 0:n.cidade)||""})}
                            ${$.createInput({id:"estado",label:"Estado",value:(n==null?void 0:n.estado)||"",placeholder:"UF"})}
                            ${$.createInput({id:"cep",label:"CEP",value:(n==null?void 0:n.cep)||"",placeholder:"00000-000"})}
                        </div>
                    </div>

                    <div class="flex justify-end gap-4">
                        ${$.createButton({id:"btn-cancel",text:"Cancelar",variant:"secondary",onClick:"window.location.hash = '/obras'"})}
                        ${$.createButton({id:"btn-submit",text:t?"Salvar Alterações":"Criar Obra",type:"submit"})}
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
                    ${$.createCard({title:"Total de Compras",content:`<p class="text-4xl font-display text-primary uppercase">${t.totalCompras}</p>`,className:"accent-left"})}
                    ${$.createCard({title:"Total Gasto",content:`<p class="text-4xl font-display text-text uppercase">${Je.formatCurrency(t.totalGasto)}</p><p class="text-sm heading-muted mt-1">Orçamento: ${Je.formatCurrency(n.orcamento||0)}</p>`})}
                    ${$.createCard({title:"Pendentes",content:`<p class="text-4xl font-display text-alert uppercase">${t.porStatus.Pendente||0}</p>`,className:"accent-left"})}
                    ${$.createCard({title:"Entregues",content:`<p class="text-4xl font-display text-primary uppercase">${t.porStatus.Entregue||0}</p>`,className:"accent-left"})}
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
                        ${Jp.render(t.comprasRecentes)}
                    </div>
                    <div>
                        ${Jp.renderTimeline(t.comprasRecentes)}
                    </div>
                </div>

                <!-- Análise de RDO (Diário de Obra) -->
                ${t.rdoData?`
                    <div class="space-y-6">
                        <h3 class="text-xl font-display text-text tracking-wide">Análise de Mão de Obra (RDO)</h3>
                        
                        <!-- KPIs RDO -->
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                            ${$.createCard({title:"Total de Horas",content:`<p class="text-4xl font-display text-primary uppercase">${t.rdoData.totalHoras.toFixed(0)}</p>`,className:"accent-left"})}
                            ${$.createCard({title:"Média Horas/Dia",content:`<p class="text-4xl font-display text-text uppercase">${t.rdoData.mediaHorasDia.toFixed(1)}</p>`})}
                            ${$.createCard({title:"Total Funcionários",content:`<p class="text-4xl font-display text-text uppercase">${t.rdoData.totalFuncionarios}</p>`})}
                            ${$.createCard({title:"Média Func./Dia",content:`<p class="text-4xl font-display text-text uppercase">${t.rdoData.mediaFuncionariosDia.toFixed(1)}</p>`})}
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
                                        <td class="px-6 py-4 text-sm text-text-muted">${Je.formatDate(e.data_solicitacao)}</td>
                                        <td class="px-6 py-4 text-sm text-text">${e.descricao||"-"}</td>
                                        <td class="px-6 py-4 text-sm text-text-muted">${Je.formatCurrency(e.valor_estimado||0)}</td>
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
        `},Si="rgba(255,255,255,0.08)",Ps="#a1a1aa",we={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"};bt.defaults.color="#e5e5e5";bt.defaults.font.family=we.family;bt.defaults.font.weight=we.weight;const bo={renderCategorias:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new bt(e,{type:"bar",data:{labels:s,datasets:[{label:"Gastos (R$)",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Si},ticks:{color:Ps,font:we}},y:{grid:{color:Si},ticks:{color:Ps,font:we}}}}})},renderStatusObra:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new bt(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{color:"#e5e5e5",font:we,padding:12,usePointStyle:!0}}}}})},renderCurvaS:(n,t=[],e=[])=>{const s=document.getElementById(n);s&&(s.chart&&s.chart.destroy(),s.chart=new bt(s,{type:"line",data:{labels:t.map((i,r)=>`Mês ${r+1}`),datasets:[{label:"Planejado",data:t,borderColor:"#a1a1aa",backgroundColor:"transparent",borderWidth:2,borderDash:[5,5],tension:.4,pointRadius:0},{label:"Realizado",data:e,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:3,tension:.4,fill:!0,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:"top",labels:{color:"#e5e5e5",font:we,usePointStyle:!0}},tooltip:{backgroundColor:"#1c1c1e",titleColor:"#e5e5e5",bodyColor:"#a1a1aa",borderColor:"#333333",borderWidth:1,titleFont:we,bodyFont:we}},scales:{x:{grid:{color:Si},ticks:{color:Ps,font:we}},y:{grid:{color:Si},ticks:{color:Ps,font:we,callback:i=>`R$ ${(i/1e3).toFixed(0)}k`},beginAtZero:!0}}}}))},renderGastosMensais:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new bt(e,{type:"bar",data:{labels:s.map(r=>{const[o,a]=r.split("-");return`${a}/${o.slice(2)}`}),datasets:[{label:"Gastos Mensais",data:i,backgroundColor:"#22c55e",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:Ps,font:we}},y:{grid:{color:Si},ticks:{color:Ps,font:we,callback:r=>`R$ ${(r/1e3).toFixed(0)}k`},beginAtZero:!0}}}})}},FC="https://rdo.axelindustrial.com.br/api";var eg;const UC=(eg=window.__RDO_API_CONFIG)==null?void 0:eg.token,Zp={getByObra:async(n,t,e)=>{try{const s=await fetch(`${FC}/rdos`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${UC}`},body:JSON.stringify({obra_id:n,data_inicio:t,data_fim:e})});if(!s.ok)throw new Error("Erro ao buscar RDOs");return await s.json()}catch(s){return console.error("RDO API Error:",s),[]}},processRDOData:n=>{const t={},e={},s={};let i=0,r=new Set;n.forEach(a=>{const l=a.data;t[l]||(t[l]=0),t[l]+=Number(a.horas_trabalhadas||0);const u=a.funcao||"Outros";e[u]||(e[u]=0),e[u]+=Number(a.horas_trabalhadas||0),s[l]||(s[l]=new Set),a.funcionario_id&&s[l].add(a.funcionario_id),i+=Number(a.horas_trabalhadas||0),a.funcionario_id&&r.add(a.funcionario_id)});const o={};return Object.keys(s).forEach(a=>{o[a]=s[a].size}),{horasPorDia:t,horasPorFuncao:e,funcionariosPorDia:o,totalHoras:i,totalFuncionarios:r.size,mediaHorasDia:i/Object.keys(t).length||0,mediaFuncionariosDia:r.size/Object.keys(s).length||0}},calculateProductivity:(n,t)=>!t||t===0?0:(n/t).toFixed(2)},Kl="rgba(255,255,255,0.08)",wo="#a1a1aa",Ri={family:"Rajdhani, Inter, system-ui, sans-serif",weight:"600"},Yl={renderHorasPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new bt(e,{type:"line",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Horas Trabalhadas",data:i,borderColor:"#22c55e",backgroundColor:"rgba(34, 197, 94, 0.1)",borderWidth:2,fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#22c55e",pointBorderColor:"#121212",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:Kl},ticks:{color:wo,font:Ri}},y:{grid:{color:Kl},ticks:{color:wo,font:Ri},beginAtZero:!0}}}})},renderHorasPorFuncao:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t),i=Object.values(t);e.chart&&e.chart.destroy(),e.chart=new bt(e,{type:"doughnut",data:{labels:s,datasets:[{data:i,backgroundColor:["#22c55e","#16a34a","#a1a1aa","#ef4444","#1c1c1e","#0ea5e9"]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#e5e5e5",font:Ri,padding:12,usePointStyle:!0}}}}})},renderFuncionariosPorDia:(n,t)=>{const e=document.getElementById(n);if(!e)return;const s=Object.keys(t).sort(),i=s.map(r=>t[r]);e.chart&&e.chart.destroy(),e.chart=new bt(e,{type:"bar",data:{labels:s.map(r=>new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})),datasets:[{label:"Funcionários",data:i,backgroundColor:"#0ea5e9",borderRadius:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1},ticks:{color:wo,font:Ri}},y:{grid:{color:Kl},ticks:{color:wo,font:Ri,stepSize:1},beginAtZero:!0}}}})}},Ls={initList:async()=>{rt.render($.createLoader());try{const n=await es.getObras();rt.render(Gl.renderList(n))}catch(n){console.error(n),rt.render(`<div class="text-red-500 p-4">Erro ao carregar obras: ${n.message}</div>`)}},initForm:async(n=null)=>{rt.render($.createLoader());try{let t=null;n&&(t=await es.getObraById(n)),rt.render(Gl.renderForm(t)),Ls.bindFormEvents(n)}catch(t){console.error(t),rt.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},initDashboard:async n=>{rt.render($.createLoader());try{const t=await es.getObraById(n);if(!t){rt.render('<div class="text-red-500 p-4">Obra não encontrada.</div>');return}const e=await es.getObraStats(n),s=new Date().toISOString().split("T")[0],i=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0],r=await Zp.getByObra(n,i,s);r&&r.length>0&&(e.rdoData=Zp.processRDOData(r)),rt.render(Gl.renderDashboard(t,e)),setTimeout(()=>{bo.renderCategorias("chart-categorias",e.gastosPorCategoria),bo.renderStatusObra("chart-status-obra",e.porStatus),e.curvaS&&bo.renderCurvaS("chart-curva-s",e.curvaS.planejado,e.curvaS.realizado),e.gastosMensais&&bo.renderGastosMensais("chart-gastos-mensais",e.gastosMensais),e.rdoData&&(Yl.renderHorasPorDia("chart-rdo-horas",e.rdoData.horasPorDia),Yl.renderHorasPorFuncao("chart-rdo-funcao",e.rdoData.horasPorFuncao),Yl.renderFuncionariosPorDia("chart-rdo-funcionarios",e.rdoData.funcionariosPorDia))},100)}catch(t){console.error(t),rt.render(`<div class="text-red-500 p-4">Erro: ${t.message}</div>`)}},bindFormEvents:n=>{const t=document.getElementById("form-obra");t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("btn-submit");try{s.disabled=!0,s.innerHTML=$.createLoader();const i=new FormData(t),r=Object.fromEntries(i.entries());r.orcamento&&(r.orcamento=Number(r.orcamento)),n?(await es.updateObra(n,r),$.createToast("Obra atualizada com sucesso!")):(await es.createObra(r),$.createToast("Obra criada com sucesso!")),Mt.navigate("/obras")}catch(i){console.error(i),$.createToast("Erro ao salvar: "+i.message,"error"),s.disabled=!1,s.innerHTML=`<span>${n?"Salvar Alterações":"Criar Obra"}</span>`}})}},Uc={create:async n=>(await Iu(Ut(ot,"notificacoes"),{...n,lida:!1,created_at:new Date().toISOString()})).id,getByUser:async(n,t=10)=>{const e=ue(Ut(ot,"notificacoes"),Nt("userId","==",n),mc("created_at","desc"),Ao(t));return(await Ot(e)).docs.map(i=>({id:i.id,...i.data()}))},markAsRead:async n=>{await Ys(ke(ot,"notificacoes",n),{lida:!0,read_at:new Date().toISOString()})},markAllAsRead:async n=>{const t=ue(Ut(ot,"notificacoes"),Nt("userId","==",n),Nt("lida","==",!1)),s=(await Ot(t)).docs.map(i=>Ys(ke(ot,"notificacoes",i.id),{lida:!0,read_at:new Date().toISOString()}));await Promise.all(s)},checkAndNotify:async()=>{const n=new Date;n.setDate(n.getDate()+3);const t=ue(Ut(ot,"compras"),Nt("status_compra","in",["Comprado","Em Trânsito"]),Nt("data_entrega_prevista","<=",n.toISOString())),e=await Ot(t),s=[];for(const i of e.docs){const r=i.data(),o=Math.ceil((new Date(r.data_entrega_prevista)-new Date)/(1e3*60*60*24));o>=0&&o<=3&&s.push({userId:r.solicitante_id,tipo:"entrega_proxima",titulo:"Entrega Próxima",mensagem:`${r.descricao} - Entrega prevista em ${o} dia(s)`,link:`/compras/${i.id}`,prioridade:o===0?"alta":"normal"})}for(const i of s)await Uc.create(i);return s.length}},tg={renderBell:(n=0)=>`
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
        `},be={notifications:[],unreadCount:0,init:async()=>{dt.state.currentUser&&(await be.load(),be.render(),be.bindEvents(),setInterval(()=>be.load(),12e4))},load:async()=>{const n=dt.state.currentUser;be.notifications=await Uc.getByUser(n.uid,20),be.unreadCount=be.notifications.filter(t=>!t.lida).length,be.render()},render:()=>{const n=document.getElementById("notifications-container");if(!n)return;n.innerHTML=tg.renderBell(be.unreadCount);const t=document.createElement("div");t.className="relative",t.innerHTML=tg.renderDropdown(be.notifications),n.appendChild(t)},bindEvents:()=>{document.addEventListener("click",n=>{const t=document.getElementById("notifications-bell"),e=document.getElementById("notifications-dropdown");t&&t.contains(n.target)?e==null||e.classList.toggle("hidden"):e&&!e.contains(n.target)&&e.classList.add("hidden")}),document.addEventListener("click",async n=>{if(n.target.id==="mark-all-read"){const t=dt.state.currentUser;await Uc.markAllAsRead(t.uid),await be.load()}})}};console.log("[Main] Inicializando aplicação...");const BC=async()=>{try{await AA(),console.log("[Main] Firebase inicializado."),dt.applyTheme(dt.state.currentTheme||"dark"),await ra.init(),dt.state.currentUser&&await be.init(),Mt.init(),Mt.on("/",LC.init),Mt.on("/login",If.initLogin),Mt.on("/forgot-password",If.initForgotPassword),Mt.on("/compras",Ly.init),Mt.on("/relatorios",Ct.init),Mt.on("/configuracoes",Fc.init),Mt.on("/obras",Ls.initList),Mt.on("/obras/nova",()=>Ls.initForm()),Mt.on("/obras/:id",({id:t})=>Ls.initDashboard(t)),Mt.on("/obras/:id/dashboard",({id:t})=>Ls.initDashboard(t)),Mt.on("/obras/:id/editar",({id:t})=>Ls.initForm(t)),Mt.handleRoute();const n=document.getElementById("loader");n&&n.remove()}catch(n){console.error("[Main] Erro fatal:",n),document.body.innerHTML=`<div class="p-10 text-red-600">Erro fatal: ${n.message}</div>`}};BC();
