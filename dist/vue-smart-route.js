!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSmartRoute=t():e.VueSmartRoute=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r,a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(Array.isArray(t))return t.reduce(function(t,n){var o=n.name,a=n.path,u=n.smart,i=n.tab,c=n.sidebar,f=n.children,l=void 0===f?[]:f;return t.push({name:o,path:a,smart:u,tab:i,sidebar:c,children:l,level:r}),l.length&&(t=t.concat(e(l,r+1))),t},[])}(t.$router.options.routes).filter(function(e){return e.smart}).map(function(e){return{name:e.name,path:e.path,smart:e.smart}}).map(function(r){var n=r.name,a=r.path,u=r.smart;if(!u.matcher)throw new Error("Smart routes must have matchers!");var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:n,path:a};return t.$router.push(e)};return u.handler||(u.handler=i),("function"==typeof u.matcher.search?u.matcher.search(t):u.matcher.search).map(function(t){return e.toString().match(t)}).filter(Boolean).map(function(e){if(e){var r=e.groups?e.groups:e,c={name:n,path:a,query:r};return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}({title:u.matcher.title(r,t).replace(/\*([^*]+)\*/g,"<mark>$1</mark>")},c,{handler:function(){return u.handler(c,i,t)}})}}).filter(Boolean)});return(r=[]).concat.apply(r,n(a))}r.r(t),t.default={install:function(e){e.directive("smart-routes",{bind:function(e,t,r){var n=r.data.directives.filter(function(e){return"model"===e.name});if(!n.length)throw new Error("An input with v-smart-routes directive must have v-model.");r.context.$watch(n[0].expression,function(e){this[t.expression]=a(e,this)})}})}}}])});