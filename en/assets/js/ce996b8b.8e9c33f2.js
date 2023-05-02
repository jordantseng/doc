"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[757],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?t.createElement(f,s(s({ref:n},p),{},{components:r})):t.createElement(f,s({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9809:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const i={},s="\u5be6\u4f5c Promise \u65b9\u6cd5",a={unversionedId:"\u9762\u8a66\u624b\u5beb\u984c/promise-methods",id:"\u9762\u8a66\u624b\u5beb\u984c/promise-methods",title:"\u5be6\u4f5c Promise \u65b9\u6cd5",description:"Promise.race",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/\u9762\u8a66\u624b\u5beb\u984c/promise-methods.md",sourceDirName:"\u9762\u8a66\u624b\u5beb\u984c",slug:"/\u9762\u8a66\u624b\u5beb\u984c/promise-methods",permalink:"/frontendwiz/en/\u9762\u8a66\u624b\u5beb\u984c/promise-methods",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8a66\u624b\u5beb\u984c/promise-methods.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7de9\u5b58\u6a5f\u5236",permalink:"/frontendwiz/en/\u9762\u8a66\u624b\u5beb\u984c/memoization"},next:{title:"\u5be6\u4f5c Throttle",permalink:"/frontendwiz/en/\u9762\u8a66\u624b\u5beb\u984c/throttle"}},l={},c=[{value:"Promise.race",id:"promiserace",level:3},{value:"Promise.any",id:"promiseany",level:3},{value:"Promise.all",id:"promiseall",level:3},{value:"Promise.allSettled",id:"promiseallsettled",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5be6\u4f5c-promise-\u65b9\u6cd5"},"\u5be6\u4f5c Promise \u65b9\u6cd5"),(0,o.kt)("h3",{id:"promiserace"},"Promise.race"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.myRace = function (promises) {\n  return new Promise((resolve, reject) => {\n    promises.forEach((promise) => {\n      promise\n        .then((val) => {\n          resolve(val);\n        })\n        .catch((error) => {\n          reject(error);\n        });\n    });\n  });\n};\n")),(0,o.kt)("h3",{id:"promiseany"},"Promise.any"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.myAny = function (promises) {\n  return new Promise((resolve, reject) => {\n    let count = 0;\n    promises.forEach((promise) => {\n      promise\n        .then((val) => {\n          resolve(val);\n        })\n        .catch(() => {\n          count += 1;\n        })\n        .finally(() => {\n          if (count === promises.length) reject('all promises rejected');\n        });\n    });\n  });\n};\n")),(0,o.kt)("h3",{id:"promiseall"},"Promise.all"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.myAll = function (promises) {\n  return new Promise((resolve, reject) => {\n    const output = [];\n    let count = 0;\n    promises.forEach((promise, index) => {\n      promise\n        .then((val) => {\n          count += 1;\n          output[index] = val;\n        })\n        .catch((error) => {\n          reject(error);\n        })\n        .finally(() => {\n          if (output.length === count) resolve(output);\n        });\n    });\n  });\n};\n")),(0,o.kt)("h3",{id:"promiseallsettled"},"Promise.allSettled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.myAllSettled = function (promises) {\n  return new Promise((resolve) => {\n    const output = [];\n    let count = 0;\n    promises.forEach((promise, index) => {\n      promise\n        .then((value) => {\n          output[index] = {\n            status: 'fulfilled',\n            value,\n          };\n        })\n        .catch((error) => {\n          output[index] = {\n            status: 'rejected',\n            error,\n          };\n        })\n        .finally(() => {\n          count += 1;\n          if (count === promises.length) {\n            resolve(output);\n          }\n        });\n    });\n  });\n};\n")))}m.isMDXComponent=!0}}]);