!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.jekmobiletmb=t():e.jekmobiletmb=t()}(self,(function(){return(()=>{var e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),o=n(26),i=n(372),s=n(327),a=n(97),c=n(109),l=n(985),u=n(61),d=n(655),p=n(263);e.exports=function(e){return new Promise((function(t,n){var f,h=e.data,m=e.headers,x=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}r.isFormData(h)&&delete m["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+v)}var w=a(e.baseURL,e.url);function E(){if(y){var r="getAllResponseHeaders"in y?c(y.getAllResponseHeaders()):null,i={data:x&&"text"!==x&&"json"!==x?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:r,config:e,request:y};o((function(e){t(e),g()}),(function(e){n(e),g()}),i),y=null}}if(y.open(e.method.toUpperCase(),s(w,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=E:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(E)},y.onabort=function(){y&&(n(u("Request aborted",e,"ECONNABORTED",y)),y=null)},y.onerror=function(){n(u("Network Error",e,null,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||d.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var C=(e.withCredentials||l(w))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;C&&(m[e.xsrfHeaderName]=C)}"setRequestHeader"in y&&r.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:y.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),x&&"json"!==x&&(y.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){y&&(n(!e||e&&e.type?new p("canceled"):e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),h||(h=null),y.send(h)}))}},609:(e,t,n)=>{"use strict";var r=n(867),o=n(849),i=n(321),s=n(185),a=function e(t){var n=new i(t),a=o(i.prototype.request,n);return r.extend(a,i.prototype,n),r.extend(a,n),a.create=function(n){return e(s(t,n))},a}(n(655));a.Axios=i,a.Cancel=n(263),a.CancelToken=n(972),a.isCancel=n(502),a.VERSION=n(288).version,a.all=function(e){return Promise.all(e)},a.spread=n(713),a.isAxiosError=n(268),e.exports=a,e.exports.default=a},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),o=n(327),i=n(782),s=n(572),a=n(185),c=n(875),l=c.validators;function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!r){var u=[s,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(i),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var d=e;n.length;){var p=n.shift(),f=n.shift();try{d=p(d)}catch(e){f(e);break}}try{o=s(d)}catch(e){return Promise.reject(e)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},u.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=u},782:(e,t,n)=>{"use strict";var r=n(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,n)=>{"use strict";var r=n(793),o=n(303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},572:(e,t,n)=>{"use strict";var r=n(867),o=n(527),i=n(502),s=n(655),a=n(263);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||i,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867),o=n(655);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},655:(e,t,n)=>{"use strict";var r=n(867),o=n(16),i=n(481),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,l={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=n(448)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){l.headers[e]=r.merge(s)})),e.exports=l},288:e=>{e.exports={version:"0.23.0"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,n)=>{"use strict";var r=n(288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],c=void 0===a||s(a,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:o}},867:(e,t,n)=>{"use strict";var r=n(849),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return a(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},933:(e,t,n)=>{"use strict";e.exports=n.p+"de279ca8d19ca65416eb.json"},754:(e,t,n)=>{"use strict";e.exports=n.p+"8e796ba4d9f8beaba219.png"},9:(e,t,n)=>{"use strict";e.exports=n.p+"bb6a80170687102d1bfa.png"},298:(e,t,n)=>{"use strict";e.exports=n.p+"9c4331cd5fbc551e3cc6.png"},442:(e,t,n)=>{"use strict";e.exports=n.p+"25fed70b111094dad80c.png"},235:(e,t,n)=>{"use strict";e.exports=n.p+"af4193e0c0245625109d.png"},778:(e,t,n)=>{"use strict";e.exports=n.p+"40e058ea723aff87a3ad.png"},607:(e,t,n)=>{"use strict";e.exports=n.p+"11f8460ace85289679b8.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();var r={};return(()=>{"use strict";n.r(r);const e=document.getElementById("tmb");e.style="\n    position: relative;\n    min-height: 100vh;\n    max-height: 100vh;\n    width: 100%; \n    display: flex;\n    margin:0;\n    border-radius: 10px;\n    overflow: hidden;\n    -moz-box-shadow: 0px 0px 1px #ddd;\n    -webkit-box-shadow: 0px 0px 1px #ddd;\n    box-shadow: 0px 0px 5px #ddd;\n    background: #fefefa;\n    overflowX: auto;\n    ";const t=e,o=document.getElementById("tmb-main");o.style="\n    position: relative;\n    min-height: 470px; \n    display: flex;\n    flex-direction: column;\n    background: white;\n    flex: 1;\n";const i=o;var s=n(442),a=n(235);const c=document.getElementById("tmb-topnav");c.style="\n            width: 100%;\n            background: white;\n            height: auto;\n            position: sticky;\n            display: flex; ",c.appendChild((()=>{const e=document.createElement("nav");e.style="\n        padding: 5px;\n        display: flex;\n        background: whitesmoke;\n        min-height: 5px; \n        align-items: center;\n    ";const t=document.createElement("img");t.src=s,t.width=30,t.setAttribute("id","menu_icon"),t.style="\n        display: inline;\n        padding: 2px;\n        margin-left: 5px;\n        margin-right: 5px;\n        cursor: pointer;\n    ";const n=document.createElement("img");n.src=a,n.width=20,n.style="\n        padding: 2px;\n        margin-left: 5px;\n        margin-right: 5px;\n        cursor: pointer;\n    ";const r=document.createElement("div");r.style="\n        flex: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    ";const o=document.createElement("div");o.style="\n        -moz-box-shadow: inset 0 0 5px #ddd;\n        -webkit-box-shadow: inset 0 0 5px #ddd;\n        box-shadow: inset 0px 1px 1px #ddd;\n        background: white;\n        padding: 5px;\n        overflow: hidden;\n        margin-left: 10px;\n        margin-right: 10px;\n        border-radius: 10px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    ";const i=document.createElement("input");return i.id="faculty_search_input",i.style="\n        border: 0;\n        border-radius: 10px;\n        padding: 5px;\n    ",i.placeholder="search faculty",o.appendChild(i),o.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(o),e})());const l=c;var u=n(754),d=n(298),p=n(778),f=n(9),h=n(607);const m=document.getElementById("tmb-sidenav");m.style="\n    width: 150px;\n    margin-right: 0px;\n    z-index: 3;\n    background: whitesmoke;\n    min-height: 100%;\n    overflow: hidden;\n    transition: margin-left 600ms;\n    padding-right: 0px;\n    box-shadow: -3px 1px 5px 0px #777;\n",m.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","side_logo"),e.style="\n        padding: 10px;\n        border-bottom: 1px solid #eee;\n        background: white;\n        flex: 1;\n    ";const t=document.createElement("h1");t.innerText="Udsm Timetable",t.style="\n        padding: 5px;\n        font-size: 1rem;\n        display: flex;\n        justify-content: center;\n    ";const n=document.createElement("img");return n.src=u,n.style="\n        width: 100%;\n        cursor: pointer;\n    ",e.appendChild(n),e.appendChild(t),e})()),m.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","side_details"),e.style="\n        margin-top: 0px;\n        padding: 3px;\n        flex: 1;\n    ",[{icon:p,text:"a Day",id:"a_day"},{icon:f,text:"3 Days",id:"three_day"},{icon:h,text:"the Week",id:"a_week"}].forEach((t=>{const n=document.createElement("nav");n.setAttribute("id",t.id),n.style="\n            padding: 10px;\n            border-radius:5px;\n            margin-top: 5px;\n            display: flex;\n            flex: 1;\n            justify-content: space-arround;\n            align-items: center;\n            background: inherit;\n            cursor: pointer;\n        ";let r=document.createElement("img");r.src=t.icon,r.width=20;let o=document.createElement("label");o.innerText=t.text,o.style="\n            margin-left: 10px;\n            color: #777;\n        ",n.appendChild(r),n.appendChild(o),e.appendChild(n)})),e})()),m.appendChild((()=>{const e=document.createElement("div");e.setAttribute("id","side_footer"),e.style="\n        position: absolute;\n        bottom: 0;\n        border-top: 1px solid #ddd;\n        flex: 1; \n    ";let t=document.createElement("img");t.src=d,t.width=25;let n=document.createElement("label");n.innerText="Feedback & Help",n.style="\n        padding-left: 10px;\n        font-size: .8rem;\n    ";const r=document.createElement("nav");return r.style="\n        padding: 10px;\n        display: flex;\n        flex: 1;\n        align-items: center;\n        background: inherit;\n        cursor: pointer;\n    ",r.appendChild(t),r.appendChild(n),e.appendChild(r),e})());const x=m,g=()=>{const e=document.createElement("div");return e.style="\n        flex: 1;\n        background: white;\n        display: flex;\n        flex-direction: column;\n    ",e},y=()=>{const e=document.createElement("div");return e.style="\n        flex: 1;\n        background: white;\n        -moz-box-shadow: inset 0 0 1px #777;\n        -webkit-box-shadow: inset 0 0 1px #777;\n        box-shadow: inset 0 0 1px #777;\n        min-height: 80px;\n        max-height: 80px;\n        position: relative;\n    ",e};var b=n(669),v=n.n(b);class w{constructor(e,t,n,r,o,i){this.url=e,this.name=t,this.latitude=r,this.longitude=n,this.capacity=o,this.college=i}}class E{constructor(e,t,n,r,o,i,s,a){this.url=e,this.roomInfo=new w,this.day=t,this.type=n,this.fromTime=r,this.duration=i,this.room=s,this.course=a,this.toTime=o}}class C{constructor(e,t,n){this.url=e,this.name=t,this.shortForm=n}}class S{constructor(e,t,n,r){this.url=e,this.periods=t,this.name=n,this.code=r}}class j{constructor(e,t,n,r,o,i){this.url=e,this.name=t,this.college=n,this.collegeInfo=r,this.coursesInfo=o,this.courses=i}}n(933),new j;var T={},k=(e,t)=>[...function*(e,t){for(let n=e;n<=t;n++)yield n}(e,t)];function _(e,t){let n=new Set;for(let r of t)e.has(r)&&n.add(r);return new Array(n)}function O(e,t,n){var r=T[n],o=[];for(const[n,c]of Object.entries(r)){console.log(`${n}: ${e}`);var i=new Set(c),s=new Set(t);if(null!==_(i,s)|void 0){var a=`${e} collides ${n} at ${_(i,s)}`;o.push(a)}}console.log(o)}var A=document.getElementById("tmb-content");A.style="\n        background: white;\n        flex: 1;\n        margin-bottom: 5px;\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        overflow: auto;\n        position: relative;\n    ";const N=["#d520b7 50%","#a03d1a 50%","#8c2e4f 50%","#771f84","#8462bc","#5688c7","#f97910","#24466b","#16253b"],L=A;t.appendChild(x),t.appendChild(i),i.appendChild(l),i.appendChild(L);const P=document.getElementById("side_details").childNodes;function B(){const e=t.getBoundingClientRect().width;e>=740?(console.log(e),i.style.transitionProperty="all",i.style.transition="1s ease",x.style.width="150px",x.style.position="relative",document.getElementById("menu_icon").addEventListener("click",(e=>{"-150px"==x.style.marginLeft?x.style.marginLeft="0px":x.style.marginLeft="-150px"}))):e<740&&e>540?(i.style.transitionProperty="all",i.style.transition="1s ease",x.style.width="100px",x.style.position="relative",P.forEach((e=>{e.style.fontSize="10px"})),document.getElementById("menu_icon").addEventListener("click",(e=>{"-100px"==x.style.marginLeft?x.style.marginLeft="0px":x.style.marginLeft="-100px"}))):e<540&&(i.style.transitionProperty="all",i.style.transition="1s ease",x.style.width="100px",x.style.position="relative",document.getElementById("menu_icon").addEventListener("click",(e=>{"-100px"==x.style.marginLeft?x.style.marginLeft="0px":x.style.marginLeft="-100px"})))}P.forEach((e=>{e.addEventListener("click",(()=>{console.log("clicked"),P.forEach((e=>{e.style.boxShadow="0px 0px 0px 0px #eee",e.style.background="inherit"})),e.style.boxShadow="0px .5px 3px .1px #ccc",e.style.background="white"}))})),B(),window.onresize=()=>{B()},document.getElementById("faculty_search_input").addEventListener("input",(e=>{(async(e,t=5,n="Seminar")=>{(async e=>{let t=await(await((e,t)=>{var n={name:`${e} f1`,minimal:"False"};return v().post("https://jtu-api.herokuapp.com/api/v1/search_faculty/",n)})(e)).data;if(void 0!==t.message)return null;let n=new j;n.url=t.url,n.college=t.department_info.college_info,n.courses=t.courses_info,n.name=t.name;let r=new C;r.name=t.department_info.college_info.name,r.shortForm=t.department_info.college_info.short_form,r.url=t.department_info.college_info.url;let o=[];for(let e of t.courses_info){let t=new S;t.code=e.code,t.name=e.name,t.url=e.url;let n=[];for(let t of e.periods){let e=new E;e.course=t.course,e.day=t.day,e.duration=t.duration,e.fromTime=t.from_time,e.room=t.room,e.type=t.type,e.toTime=t.to_time;let r=new w;r.capacity=t.room_info.capacity,r.college=t.room_info.college,r.latitude=t.room_info.latitude,r.longitude=t.room_info.longitude,r.name=t.room_info.name,r.url=t.room_info.url,e.roomInfo=r,n.push(e)}t.periods=n,o.push(t)}return n.collegeInfo=r,n.coursesInfo=o,console.log(n),n})(e).then((e=>{if(null!==e|void 0){var r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div");((e,t,n,r)=>{e.style="\n        display: flex;\n        position: sticky;\n        padding: 0;\n        top: 0;\n        z-index: 2;\n        margin-bottom: 15px;\n        box-shadow: 0px 3px 10px 0px #eee ;\n    ",t.style="\n        display: flex;\n        height: 100%;\n        postion: relative;\n    ",r.style="\n        flex :1;\n        background: white;\n        display: flex;\n        positinon: relative;\n    ",n.style="\n        flex :1;\n        background: white;\n        max-width: 50px;\n        display: flex;\n        flex-direction: column;\n    "})(r,o,i,s);const a=[],c=[];let l=0;for(let t of e.coursesInfo){let e={name:t.code,color:N[l]};a.push(e),c.push(t.code),l++}for(let o=0;o<t;o++){let t=g();t.style.position="relative";let i=["Mon","Tue","Wed","Thu","Fri"];const c=y();c.style.minHeight="35px",c.style.width="",c.style.boxShadow="inset 0 0 0 #000",c.innerHTML=`\n                    <label style="\n                        flex: 1;\n                        height: 100%;\n                        display: flex;\n                        z-index: 2;\n                        align-items: center;\n                        justify-content: center;\n                        font-size: 12px;\n                        color: #999;\n                    ">${i[o]}</label>\n                    `,r.appendChild(c);let l=0;T[i[o]]={};for(let r=-1;r<12;r++){let s=y();for(let s of e.coursesInfo)for(let e of s.periods)if(e.day.slice(0,3)===i[o]&&e.type==n){let n=e.toTime.slice(0,5).replace(":","");n="55"===n.slice(2,4)?Number(n.slice(0,2))+1:Number(n.slice(0,2));let c=Number(e.fromTime.slice(0,5).replace(":","").slice(0,2));if(r+8===c||r+8===n){let r=y();const u=(80*(n-c)).toString(),d=(80*(c-7)).toString();T[i[o]][`${s.code}-${e.type}`]=k(c,n),O(`${s.code}-${e.type}`,k(c,n),i[o]);let p="#470024";for(let e of a)s.code===e.name&&(p=e.color);r.innerHTML=`\n                                        <div style="\n                                            flex:1;\n                                            display:flex;\n                                            height: ${u}px;\n                                            width: 100%;\n                                            color: #FFFFFF;\n                                            margin: 5px;\n                                            justify-content: center;\n                                            align-items: flex-top;\n                                        ">\n                                        ${s.code} ${e.type} <br>${c} - ${n}\n                                        </div>\n                                        `,r.style=`\n                                        position: absolute;\n                                        background: ${p};\n                                        flex:1;\n                                        width: 100%;\n                                        z-index: 1;\n                                        border: 1px solid #FFFFFF;\n                                        top: ${d}px;\n                                        min-height: ${u}px;\n                                        max-height: ${u}px;\n                                    `,t.appendChild(r),l++}}t.appendChild(s)}s.appendChild(t)}const u=y();u.style.minHeight="35px",u.style.maxWidth="50px",u.style.boxShadow="inset 0 0 0 #000",u.innerHTML='\n                <label style="\n                    flex: 1;\n                    height: 100%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    font-size: 12px;\n                    color: #999;\n                ">Time</label>\n                ',r.appendChild(u);for(let e=-1;e<13;e++){const t=y(),n=document.createElement("label");n.innerText=`${8+e}:00`,n.style="\n                    margin-left: 10px;\n                    margin-top: -10px;\n                    position: absolute;\n                    font-size: 12px;\n                    color: #999;\n                    ",t.style.boxShadow="inset 0 0 0",t.appendChild(n),i.appendChild(t)}console.log(T),o.appendChild(s),o.appendChild(i),A.innerHTML="",A.appendChild(r),A.appendChild(o)}})).catch((e=>{console.log(e)}))})(e.target.value,4,"Tutorial")}))})(),r})()}));