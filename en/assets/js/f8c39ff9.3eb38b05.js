"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[237],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,d=p["".concat(c,".").concat(f)]||p[f]||y[f]||i;return t?n.createElement(d,l(l({ref:r},s),{},{components:t})):n.createElement(d,l({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1621:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const i={},l="\u9663\u5217\u65b9\u6cd5\u5be6\u4f5c",o={unversionedId:"\u5e38\u898b\u624b\u5beb\u984c/array-methods",id:"\u5e38\u898b\u624b\u5beb\u984c/array-methods",title:"\u9663\u5217\u65b9\u6cd5\u5be6\u4f5c",description:"Array.map",source:"@site/docs/\u5e38\u898b\u624b\u5beb\u984c/array-methods.md",sourceDirName:"\u5e38\u898b\u624b\u5beb\u984c",slug:"/\u5e38\u898b\u624b\u5beb\u984c/array-methods",permalink:"/frontendwiz/en/\u5e38\u898b\u624b\u5beb\u984c/array-methods",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5e38\u898b\u624b\u5beb\u984c/array-methods.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DOM vs. Virtual DOM",permalink:"/frontendwiz/en/React/dom-vs-virtual-dom/"},next:{title:"Debounce \u5be6\u4f5c",permalink:"/frontendwiz/en/\u5e38\u898b\u624b\u5beb\u984c/debounce"}},c={},u=[{value:"Array.map",id:"arraymap",level:3},{value:"Array.filter",id:"arrayfilter",level:3},{value:"Array.reduce",id:"arrayreduce",level:3},{value:"Array.every",id:"arrayevery",level:3}],s={toc:u},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9663\u5217\u65b9\u6cd5\u5be6\u4f5c"},"\u9663\u5217\u65b9\u6cd5\u5be6\u4f5c"),(0,a.kt)("h3",{id:"arraymap"},"Array.map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Array.prototype.myMap = function (callback) {\n  const result = [];\n\n  for (let i = 0; i < this.length; i += 1) {\n    result.push(callback(this[i], i, this));\n  }\n\n  return result;\n};\n")),(0,a.kt)("h3",{id:"arrayfilter"},"Array.filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Array.prototype.myFilter = function (callback) {\n  const result = [];\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (callback(this[i], i, this) === true) {\n      result.push(this[i]);\n    }\n  }\n\n  return result;\n};\n")),(0,a.kt)("h3",{id:"arrayreduce"},"Array.reduce"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Array.prototype.myReduce = function (callback, initialValue) {\n  let result = initialValue;\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (i === 0 && initialValue === undefined) {\n      result = this[i];\n    } else {\n      result = callback(result, this[i], i, this);\n    }\n  }\n\n  return result;\n};\n")),(0,a.kt)("h3",{id:"arrayevery"},"Array.every"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Array.prototype.myEvery = function (callback) {\n  if (this.length === 0) return false;\n\n  for (let i = 0; i < this.length; i += 1) {\n    if (callback(this[i], i, this) === false) return false;\n  }\n\n  return true;\n};\n")))}y.isMDXComponent=!0}}]);