"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="Throttle",o={unversionedId:"\u9762\u8a66\u624b\u5beb\u984c/throttle",id:"\u9762\u8a66\u624b\u5beb\u984c/throttle",title:"Throttle",description:"TL;DR",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/\u9762\u8a66\u624b\u5beb\u984c/throttle.md",sourceDirName:"\u9762\u8a66\u624b\u5beb\u984c",slug:"/\u9762\u8a66\u624b\u5beb\u984c/throttle",permalink:"/frontendwiz/en/\u9762\u8a66\u624b\u5beb\u984c/throttle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8a66\u624b\u5beb\u984c/throttle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"promise-methods",permalink:"/frontendwiz/en/\u9762\u8a66\u624b\u5beb\u984c/promise-methods"}},c={},u=[{value:"TL;DR",id:"tldr",level:3},{value:"What is throttle",id:"what-is-throttle",level:3},{value:"Practical Applications",id:"practical-applications",level:3},{value:"Implementaion",id:"implementaion",level:3}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"throttle"},"Throttle"),(0,a.kt)("h3",{id:"tldr"},"TL;DR"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Debounce")," and ",(0,a.kt)("strong",{parentName:"li"},"throttle")," both aim to reduce the frequency of repeated function calls, thereby optimizing performance."),(0,a.kt)("li",{parentName:"ul"},"Throttle ensures a function is executed at regular intervals, allowing only one function call within a specified time window.")),(0,a.kt)("h3",{id:"what-is-throttle"},"What is throttle"),(0,a.kt)("p",null,"Debounce is a technique used to control the frequency of function calls or event triggers."),(0,a.kt)("p",null,"Even if a function is continuously called, it will only be executed ",(0,a.kt)("strong",{parentName:"p"},"once")," within a specified time interval."),(0,a.kt)("p",null,"The throttle function takes two parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callback"),": The callback function to be executed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delay"),": The delay in milliseconds.")),(0,a.kt)("h3",{id:"practical-applications"},"Practical Applications"),(0,a.kt)("p",null,"When dealing with scroll events, throttle can be applied to ensure that the associated function is invoked only once within a fixed time interval, avoiding an overwhelming number of function calls."),(0,a.kt)("h3",{id:"implementaion"},"Implementaion"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function throttle(callback, delay) {\n  let lastCallTime = 0;\n  let timerID;\n\n  return function (...args) {\n    let timeDuration = Date.now() - lastCallTime;\n    let remainingTime = delay - timeDuration;\n\n    if (remainingTime <= 0) {\n      callback.apply(this, args);\n      lastCallTime = Date.now();\n    } else {\n      clearTimeout(timerID);\n      timerID = setTimeout(() => {\n        callback.apply(this, args);\n        lastCallTime = Date.now();\n      }, remainingTime);\n    }\n  };\n}\n")))}m.isMDXComponent=!0}}]);