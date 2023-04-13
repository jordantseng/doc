"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=l,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={},o="Throttle \u5be6\u4f5c",i={unversionedId:"\u5e38\u898b\u624b\u5beb\u984c/throttle",id:"\u5e38\u898b\u624b\u5beb\u984c/throttle",title:"Throttle \u5be6\u4f5c",description:"TL;DR",source:"@site/docs/\u5e38\u898b\u624b\u5beb\u984c/throttle.md",sourceDirName:"\u5e38\u898b\u624b\u5beb\u984c",slug:"/\u5e38\u898b\u624b\u5beb\u984c/throttle",permalink:"/frontendwiz/en/\u5e38\u898b\u624b\u5beb\u984c/throttle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5e38\u898b\u624b\u5beb\u984c/throttle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Promise \u65b9\u6cd5\u5be6\u4f5c",permalink:"/frontendwiz/en/\u5e38\u898b\u624b\u5beb\u984c/promise-methods"}},c={},u=[{value:"TL;DR",id:"tldr",level:2},{value:"\u4ec0\u9ebc\u662f\u7bc0\u6d41",id:"\u4ec0\u9ebc\u662f\u7bc0\u6d41",level:3},{value:"\u5be6\u4f5c",id:"\u5be6\u4f5c",level:3}],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"throttle-\u5be6\u4f5c"},"Throttle \u5be6\u4f5c"),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"throttle \u662f\u6307\u51fd\u5f0f\u53ea\u6703\u5728\u4e00\u5b9a\u6642\u9593\u5167\u57f7\u884c\u4e00\u6b21\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8207 debounce\uff08\u9632\u6296\uff09\u90fd\u662f\u70ba\u4e86\u6e1b\u5c11\u77ed\u6642\u9593\u5167\u6703\u91cd\u8907\u89f8\u767c\u7684\u51fd\u793a\u6b21\u6578\uff0c\u85c9\u6b64\u512a\u5316\u6548\u80fd\u3002")),(0,l.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u7bc0\u6d41"},"\u4ec0\u9ebc\u662f\u7bc0\u6d41"),(0,l.kt)("p",null,"throttle \u4e2d\u6587\u53c8\u7a31\u70ba",(0,l.kt)("strong",{parentName:"p"},"\u7bc0\u6d41"),"\uff0c\u9867\u540d\u601d\u7fa9\u5b83\u6703\u7bc0\u7d04\u4e8b\u4ef6\u7684\u767c\u751f\uff0c\u5c31\u7b97\u51fd\u5f0f\u9023\u7e8c\u88ab\u547c\u53eb\uff0c\u5728\u4e00\u5b9a\u6642\u9593\u5167\u53ea\u6703\u57f7\u884c\u4e00\u6b21\u3002"),(0,l.kt)("p",null,"throttle \u51fd\u5f0f\u63a5\u6536\u5169\u500b\u53c3\u6578"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"callback"),"\uff1a\u8981\u57f7\u884c\u7684\u56de\u8abf\u51fd\u5f0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delay"),"\uff1a\u8981\u5ef6\u9072\u7684\u6beb\u79d2\u6578")),(0,l.kt)("p",null,"\u7bc0\u6d41\u7d93\u5e38\u88ab\u61c9\u7528\u5728\u76e3\u807d\u6efe\u52d5\u4e8b\u4ef6\uff0c\u8209\u4f8b\u4f86\u8aaa\uff0c\u8981\u5224\u65b7\u4f7f\u7528\u8005\u662f\u5426\u5df2\u7d93\u6ed1\u52d5\u5230\u9801\u9762\u7684\u67d0\u8655\uff0c\u7576\u5230\u9054\u6642\u6703\u89f8\u767c\u4e00\u4e9b\u52d5\u756b\u6548\u679c\u3002\u56e0\u6b64\uff0c\u6703\u900f\u904e\u76e3\u807d\u6efe\u52d5\u4e8b\u4ef6\u6642\u8a08\u7b97\u662f\u5426\u5df2\u5230\u9054\u8a72\u4f4d\u7f6e\uff0c\u4f46\u5982\u679c\u53ea\u8981\u4e00\u6efe\u52d5\u5c31\u8a08\u7b97\u6703\u975e\u5e38\u6d88\u8017\u6027\u80fd\uff0c\u900f\u904e\u7bc0\u6d41\u53ef\u4ee5\u6709\u6548\u6e1b\u5c11\u547c\u53eb\u56de\u8abf\u51fd\u5f0f\u7684\u6b21\u6578\u3002"),(0,l.kt)("h3",{id:"\u5be6\u4f5c"},"\u5be6\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function throttle(callback, delay) {\n  let lastCallTime = 0;\n  let timerID;\n\n  return function (...args) {\n    let timeDuration = Date.now() - lastCallTime;\n    let remainingTime = delay - timeDuration;\n\n    if (remainingTime <= 0) {\n      callback.apply(this, args);\n      lastCallTime = Date.now();\n    } else {\n      clearTimeout(timerID);\n      timerID = setTimeout(() => {\n        callback.apply(this, args);\n        lastCallTime = Date.now();\n      }, remainingTime);\n    }\n  };\n}\n")))}m.isMDXComponent=!0}}]);