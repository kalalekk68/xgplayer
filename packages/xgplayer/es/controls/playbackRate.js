!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.playbackRate=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.playbackRate=t())}(window,(function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){var a=r(1);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(3)(a,n);a.locals&&(e.exports=a.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-playbackrate{-webkit-order:8;-moz-box-ordinal-group:9;order:8;width:60px;height:150px;z-index:18;position:relative;display:inline-block;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-playbackrate ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);text-align:left;white-space:nowrap;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-playbackrate ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);position:relative;padding:4px 0;text-align:center}.xgplayer-skin-default .xgplayer-playbackrate ul li.selected,.xgplayer-skin-default .xgplayer-playbackrate ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-playbackrate ul li:first-child{position:relative;margin-top:12px}.xgplayer-skin-default .xgplayer-playbackrate ul li:last-child{position:relative;margin-bottom:12px}.xgplayer-skin-default .xgplayer-playbackrate .name{width:60px;height:20px;position:absolute;bottom:0;text-align:center;font-family:PingFangSC-Regular;font-size:13px;background:rgba(0,0,0,.38);color:hsla(0,0%,100%,.8);border-radius:10px;line-height:20px}.xgplayer-skin-default .xgplayer-playbackrate span{position:relative;top:19px;font-weight:700;text-shadow:0 0 4px rgba(0,0,0,.6)}.xgplayer-skin-default .xgplayer-playbackrate:hover{opacity:1}.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-playbackrate ul{display:block}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var n=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[r].concat(o).concat([n]).join("\n")}var i;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(a[o]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"==typeof i[0]&&a[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){var a,n,o={},i=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=a.apply(this,arguments)),n}),l=function(e){return document.querySelector(e)},s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=l.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,p=0,f=[],u=r(4);function d(e,t){for(var r=0;r<e.length;r++){var a=e[r],n=o[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(v(a.parts[i],t))}else{var l=[];for(i=0;i<a.parts.length;i++)l.push(v(a.parts[i],t));o[a.id]={id:a.id,refs:1,parts:l}}}}function y(e,t){for(var r=[],a={},n=0;n<e.length;n++){var o=e[n],i=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};a[i]?a[i].parts.push(l):r.push(a[i]={id:i,parts:[l]})}return r}function b(e,t){var r=s(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=f[f.length-1];if("top"===e.insertAt)a?a.nextSibling?r.insertBefore(t,a.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),f.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=s(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,n)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function h(e){var t=document.createElement("style");return e.attrs.type="text/css",m(t,e.attrs),b(e,t),t}function m(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function v(e,t){var r,a,n,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var i=p++;r=c||(c=h(t)),a=w.bind(null,r,i,!1),n=w.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",m(t,e.attrs),b(e,t),t}(t),a=L.bind(null,r,t),n=function(){g(r),r.href&&URL.revokeObjectURL(r.href)}):(r=h(t),a=R.bind(null,r),n=function(){g(r)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=y(e,t);return d(r,t),function(e){for(var a=[],n=0;n<r.length;n++){var i=r[n];(l=o[i.id]).refs--,a.push(l)}e&&d(y(e,t),t);for(n=0;n<a.length;n++){var l;if(0===(l=a[n]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete o[l.id]}}}};var x,k=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function w(e,t,r,a){var n=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=k(t,n);else{var o=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function R(e,t){var r=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function L(e,t,r){var a=r.css,n=r.sourceMap,o=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||o)&&(a=u(a)),n&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([a],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,a=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var n,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(n=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:a+o.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},function(e,t,r){"use strict";r.r(t);function a(e="div",t="",r={},a=""){let n=document.createElement(e);return n.className=a,n.innerHTML=t,Object.keys(r).forEach(t=>{let a=t,o=r[t];"video"===e||"audio"===e?o&&n.setAttribute(a,o):n.setAttribute(a,o)}),n}function n(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,e=>e===t):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function o(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(t=>{t&&e.classList.add(t)}):n(e,t)||(e.className+=" "+t))}function i(e,t){e&&(e.classList?t.split(/\s+/g).forEach(t=>{e.classList.remove(t)}):n(e,t)&&t.split(/\s+/g).forEach(t=>{let r=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(r," ")}))}function l(e,t){e&&t.split(/\s+/g).forEach(t=>{n(e,t)?i(e,t):o(e,t)})}let s={};Object.defineProperty(s,"device",{get:function(){return s.os.isPc?"pc":"mobile"}}),Object.defineProperty(s,"browser",{get:function(){let e=navigator.userAgent.toLowerCase(),t={ie:/rv:([\d.]+)\) like gecko/,firfox:/firefox\/([\d.]+)/,chrome:/chrome\/([\d.]+)/,opera:/opera.([\d.]+)/,safari:/version\/([\d.]+).*safari/};return[].concat(Object.keys(t).filter(r=>t[r].test(e)))[0]||""}}),Object.defineProperty(s,"os",{get:function(){let e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),r=/(?:SymbianOS)/.test(e)||t,a=/(?:Android)/.test(e),n=/(?:Firefox)/.test(e),o=/(?:iPad|PlayBook)/.test(e)||a&&!/(?:Mobile)/.test(e)||n&&/(?:Tablet)/.test(e),i=/(?:iPhone)/.test(e)&&!o;return{isTablet:o,isPhone:i,isAndroid:a,isPc:!(i||a||r||o),isSymbian:r,isWindowsPhone:t,isFireFox:n}}});var c=s;r(0);var p={name:"s_playbackRate",method:function(){let e=this,t=[];if(!e.config.playbackRate)return!1;t=[].concat(e.config.playbackRate),t.sort((e,t)=>t-e);let r=a("xg-playbackrate"," ",{},"xgplayer-playbackrate");"mobile"===c.device&&(e.config.playbackRateActive="click");let s=[];t.forEach(e=>{s.push({name:""+e,rate:e+"x",selected:!1})});let p=1,f=["<ul>"];s.forEach(t=>{e.config.defaultPlaybackRate&&e.config.defaultPlaybackRate.toString()===t.name?(t.selected=!0,p=e.config.defaultPlaybackRate,e.once("playing",()=>{e.video.playbackRate=e.config.defaultPlaybackRate})):"1.0"!==t.name&&"1"!==t.name||e.config.defaultPlaybackRate&&1!==e.config.defaultPlaybackRate||(t.selected=!0),f.push(`<li cname='${t.name}' class='${t.selected?"selected":""}'>${t.rate}</li>`)}),f.push(`</ul><p class='name'>${p}x</p>`);let u=e.root.querySelector(".xgplayer-playbackrate");if(u){u.innerHTML=f.join("");let t=u.querySelector(".name");e.config.playbackRateActive&&"hover"!==e.config.playbackRateActive||t.addEventListener("mouseenter",t=>{t.preventDefault(),t.stopPropagation(),o(e.root,"xgplayer-playbackrate-active"),u.focus()})}else{r.innerHTML=f.join("");let t=r.querySelector(".name");e.config.playbackRateActive&&"hover"!==e.config.playbackRateActive||t.addEventListener("mouseenter",t=>{t.preventDefault(),t.stopPropagation(),o(e.root,"xgplayer-playbackrate-active"),r.focus()}),e.once("ready",()=>{e.controls.appendChild(r)})}["touchend","click"].forEach(t=>{r.addEventListener(t,t=>{t.stopPropagation(),t.preventDefault();let a=t.target;if(a&&"li"===a.tagName.toLocaleLowerCase()){let t,r;s.forEach(r=>{r.selected=!1,a.textContent.replace(/\s+/g,"")===r.rate&&(Array.prototype.forEach.call(a.parentNode.childNodes,e=>{n(e,"selected")&&(t=Number(e.getAttribute("cname")),i(e,"selected"))}),r.selected=!0,e.video.playbackRate=1*r.name,p=1*r.name)}),o(a,"selected"),r=Number(a.getAttribute("cname")),a.parentNode.nextSibling.innerHTML=a.getAttribute("cname")+"x",e.emit("playbackrateChange",{from:t,to:r}),"mobile"===c.device&&i(e.root,"xgplayer-playbackrate-active")}else"click"!==e.config.playbackRateActive||!a||"p"!==a.tagName.toLocaleLowerCase()&&"span"!==a.tagName.toLocaleLowerCase()||("mobile"===c.device?l(e.root,"xgplayer-playbackrate-active"):o(e.root,"xgplayer-playbackrate-active"),r.focus());e.emit("focus")},!1)}),r.addEventListener("mouseleave",t=>{t.preventDefault(),t.stopPropagation(),i(e.root,"xgplayer-playbackrate-active")}),e.on("blur",(function(){i(e.root,"xgplayer-playbackrate-active")})),e.on("play",()=>{e.video.playbackRate.toFixed(1)!==p.toFixed(1)&&(e.video.playbackRate=p)})}};t.default={name:"playbackRate",method:function(){p.method.call(this)}}}])}));