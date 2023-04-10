"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[74],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>k});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},m=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return r?t.createElement(k,a(a({ref:n},m),{},{components:r})):t.createElement(k,a({ref:n},m))}));function k(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3851:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const l={},a="Promise",s={unversionedId:"JavaScript/promise",id:"JavaScript/promise",title:"Promise",description:"TL;DR",source:"@site/docs/JavaScript/promise.md",sourceDirName:"JavaScript",slug:"/JavaScript/promise",permalink:"/frontendwiz/en/JavaScript/promise",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/promise.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6\u50b3\u905e",permalink:"/frontendwiz/en/DOM/\u4e8b\u4ef6\u50b3\u905e"},next:{title:"this",permalink:"/frontendwiz/en/JavaScript/this"}},i={},p=[{value:"TL;DR",id:"tldr",level:3},{value:"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528 Promise",id:"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528-promise",level:3},{value:"\u4ec0\u9ebc\u662f Promise",id:"\u4ec0\u9ebc\u662f-promise",level:3},{value:"Promise.race(promises)",id:"promiseracepromises",level:3},{value:"Promise.any(promises)",id:"promiseanypromises",level:3},{value:"Promise.all(promises)",id:"promiseallpromises",level:3},{value:"Promise.allSettled(promises)",id:"promiseallsettledpromises",level:3},{value:"Promise.resolve(value)",id:"promiseresolvevalue",level:3},{value:"Promise.reject(reason)",id:"promiserejectreason",level:3},{value:"\u5e38\u898b\u554f\u984c",id:"\u5e38\u898b\u554f\u984c",level:3}],m={toc:p},c="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(c,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promise"},"Promise"),(0,o.kt)("h3",{id:"tldr"},"TL;DR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Promise \u53ef\u4ee5\u6e1b\u5c11 callback hell\uff0c\u63d0\u9ad8\u7a0b\u5f0f\u78bc\u53ef\u8b80\u6027\u3002"),(0,o.kt)("li",{parentName:"ul"},"Promise \u662f\u4e00\u500b",(0,o.kt)("strong",{parentName:"li"},"\u7b49\u5f85\u975e\u540c\u6b65\u64cd\u4f5c\u5b8c\u6210\u7684\u7269\u4ef6\uff0c"),"Promise \u53ea\u6703\u8655\u65bc ",(0,o.kt)("inlineCode",{parentName:"li"},"pending")," \u3001 ",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u3001 ",(0,o.kt)("inlineCode",{parentName:"li"},"rejected")," \u5176\u4e2d\u4e00\u7a2e\u72c0\u614b\u3002")),(0,o.kt)("h3",{id:"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528-promise"},"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528 Promise"),(0,o.kt)("p",null,"\u5728\u4e86\u89e3\u4ec0\u9ebc\u662f Promise \u4e4b\u524d\uff0c\u6211\u5011\u9700\u8981\u5148\u77e5\u9053\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528 Promise \ud83e\udd14"),(0,o.kt)("p",null,"\u5728 ES6 \u4ee5\u524d\uff0c\u5728 JavaScript \u8655\u7406\u7570\u6b65\u7684\u65b9\u5f0f\u5927\u591a\u90fd\u662f\u900f\u904e\u56de\u8abf\u51fd\u5f0f\uff08callback\uff09\u7684\u5beb\u6cd5\uff0c\u4f46 callback \u7684\u5beb\u6cd5\u5b58\u5728\u4e00\u500b\u5f88\u5927\u7684\u554f\u984c\uff0c\u7576\u9700\u8981\u8655\u7406\u591a\u500b\u7570\u6b65\u64cd\u4f5c\u6642\uff0c\u7a0b\u5f0f\u78bc\u6703\u4e0d\u65b7\u5f80\u5167\u5d4c\u5957\uff0c\u5c0e\u81f4\u7a0b\u53ef\u8b80\u6027\u975e\u5e38\u5dee\uff0c\u4e5f\u88ab\u7a31\u70ba\u300ccallback \u5730\u7344\u300d\uff08callback hell\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const waitOneSecond = (cb) => {\n  setTimeout(() => {\n    cb();\n  }, 1000);\n};\n\n// \u7a0b\u5f0f\u78bc\u4e0d\u65b7\u5f80\u5167\u5d4c\u5957\uff0c\u53ef\u8b80\u6027\u4e0d\u4f73\nwaitOneSecond(() => {\n  console.log('1 sec passed');\n  waitOneSecond(() => {\n    console.log('2 sec passed');\n    waitOneSecond(() => {\n      console.log('3 sec passed');\n    });\n  });\n});\n")),(0,o.kt)("p",null,"\u96d6\u7136\u9084\u6c92\u4ecb\u7d39\u4ec0\u9ebc\u662f Promise\uff0c\u4f46\u662f\u5982\u679c\u6211\u5011\u5148\u628a\u4e0a\u9762\u9019\u6bb5\u7a0b\u5f0f\u78bc\u6539\u5beb\u6210 Promise \u5beb\u6cd5\u7684\u8a71\uff0c\u53ef\u4ee5\u767c\u73fe\u53ef\u8b80\u6027\u5927\u5927\u7684\u63d0\u5347\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const waitOneSecond = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve();\n    }, 1000);\n  });\n};\n\n// \u7a0b\u5f0f\u78bc\u7dad\u6301\u4e00\u5c64\u5d4c\u5957\uff0c\u8f03\u5bb9\u6613\u95b1\u8b80\nwaitOneSecond()\n  .then(() => {\n    console.log('1 sec passed');\n    return waitOneSecond();\n  })\n  .then(() => {\n    console.log('2 sec passed');\n    return waitOneSecond();\n  })\n  .then(() => {\n    console.log('3 sec passed');\n  });\n")),(0,o.kt)("h3",{id:"\u4ec0\u9ebc\u662f-promise"},"\u4ec0\u9ebc\u662f Promise"),(0,o.kt)("p",null,"Promise \u662f\u4e00\u500b",(0,o.kt)("strong",{parentName:"p"},"\u7b49\u5f85\u975e\u540c\u6b65\u64cd\u4f5c\u5b8c\u6210\u7684\u7269\u4ef6"),"\uff0c\u7576\u4e8b\u4ef6\u5b8c\u6210\u6642\uff0cPromise \u6839\u64da\u64cd\u4f5c\u7d50\u679c\u662f\u6210\u529f\u3001\u6216\u8005\u5931\u6557\uff0c\u505a\u76f8\u5c0d\u61c9\u7684\u8655\u7406\u52d5\u4f5c\u3002"),(0,o.kt)("p",null,"Promise \u53ea\u6703\u8655\u65bc\u4e0b\u9762\u4e09\u7a2e\u72c0\u614b\u4e4b\u4e00\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pending")," - \u521d\u59cb\u72c0\u614b\uff08\u9032\u884c\u4e2d\uff09"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled")," - \u4e8b\u4ef6\u5df2\u5b8c\u6210"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"rejected")," - \u4e8b\u4ef6\u5df2\u5931\u6557")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u600e\u9ebc\u4f7f\u7528 Promise")),(0,o.kt)("p",null,"\u4f7f\u7528 Promise \u7684",(0,o.kt)("strong",{parentName:"p"},"\u5efa\u69cb\u51fd\u5f0f"),"\uff0c\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," \u5efa\u7acb\u4e00\u500b Promise\u3002Promise \u5efa\u69cb\u51fd\u5f0f\u6703\u63a5\u6536\u4e00\u500b\u51fd\u5f0f\u4f5c\u70ba\u53c3\u6578\uff0c\u9019\u500b\u51fd\u5f0f\u53c8\u7a31\u70ba executor\uff0c\u5176\u53c8\u5305\u542b\u4e86\u5169\u500b\u51fd\u5f0f\u53c3\u6578\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"resolve(value)"),"\uff1a\u5982\u4e0b\u65b9\u6240\u793a\uff0c\u7576 randomNum \u662f\u5076\u6578\u6642\uff0c\u6703\u547c\u53eb ",(0,o.kt)("inlineCode",{parentName:"li"},"resolve")," \u4e26\u56de\u50b3 isEven\uff0cPromise \u88ab ",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled")," \uff0c\u4e8b\u4ef6\u5df2\u5b8c\u6210\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"reject(error)"),"\uff1a\u5982\u4e0b\u65b9\u6240\u793a\uff0c\u7576 randomNum \u662f\u5947\u6578\u6642\uff0c\u6703\u547c\u53eb ",(0,o.kt)("inlineCode",{parentName:"li"},"reject")," \u4e26\u56de\u50b3 isOdd\uff0cPromise \u88ab ",(0,o.kt)("inlineCode",{parentName:"li"},"rejected")," \uff0c\u4e8b\u4ef6\u5df2\u5931\u6557\u3002")),(0,o.kt)("p",null,"Promise \u63d0\u4f9b\u4e86\u4e09\u500b\u4e3b\u8981\u7684\u65b9\u6cd5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"then(fulfilledFn, rejectedFn)\uff1a"),"\u7576 Promise \u88ab ",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u5f8c\uff0c\u547c\u53eb fulfilledFn\u3001\u7576 Promise \u88ab ",(0,o.kt)("inlineCode",{parentName:"li"},"rejected")," \u5f8c\uff0c\u547c\u53eb rejectedFn\uff0c\u4e26\u56de\u50b3\u4e00\u500b\u65b0\u7684 ",(0,o.kt)("strong",{parentName:"li"},"fulfilled")," Promise\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"catch(rejectedFn)\uff1a"),"\u7576 Promise \u88ab ",(0,o.kt)("inlineCode",{parentName:"li"},"rejected")," \u5f8c\uff0c\u547c\u53eb rejectedFn\uff0c\u4e26\u56de\u50b3\u4e00\u500b\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled")," Promise\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"finally(callback)\uff1a"),"\u4e0d\u8ad6 Promise \u88ab ",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"rejected")," \uff0c\u90fd\u6703\u547c\u53eb callback\uff0c\u4e26\u56de\u50b3\u4e00\u500b\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"reject")," \u7684 Promise\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Promise((resolve, reject) => {\n  setTimeout(() => {\n    const randomNum = Math.floor(Math.random() * 100);\n    if (randomNum % 2 === 0) {\n      resolve('isEven');\n    } else {\n      reject('isOdd');\n    }\n  }, 1000);\n})\n  .then((val) => {\n    console.log(val);\n  })\n  .catch((error) => {\n    console.log(error);\n  })\n  .finally(() => {\n    console.log('finally');\n  });\n")),(0,o.kt)("h3",{id:"promiseracepromises"},"Promise.race(promises)"),(0,o.kt)("p",null,"\u5c07\u591a\u500b Promise \u5305\u88dd\u6210\u4e00\u500b\u65b0\u7684 Promise\uff0c\u4e26\u56de\u50b3",(0,o.kt)("strong",{parentName:"p"},"\u4e00\u500b\u72c0\u614b\u6700\u5feb\u6539\u8b8a"),"\u7684\u7d50\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const p1 = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(1), 500);\n});\nconst p2 = new Promise((resolve, reject) => {\n  setTimeout(() => reject(2), 100);\n});\n\nPromise.race([p1, p2])\n  .then((value) => {\n    console.log(value);\n  })\n  .catch((err) => {\n    console.log(err);\n    // 0.1\u79d2\u5f8c\uff0cp2 \u6bd4 p1 \u72c0\u614b\u5feb\u6539\u8b8a\uff08 pending -> rejected \uff09\uff0c\u5370\u51fa 2\n  });\n")),(0,o.kt)("h3",{id:"promiseanypromises"},"Promise.any(promises)"),(0,o.kt)("p",null,"\u5c07\u591a\u500b Promise \u5305\u88dd\u6210\u4e00\u500b\u65b0\u7684 Promise\uff0c\u4e26\u56de\u50b3",(0,o.kt)("strong",{parentName:"p"},"\u4e00\u500b\u72c0\u614b\u6700\u5feb\u88ab ",(0,o.kt)("inlineCode",{parentName:"strong"},"fulfilled")," "),"\u7684\u7d50\u679c\uff0c \u5982\u679c\u5168\u90e8 Promise \u90fd\u88ab ",(0,o.kt)("inlineCode",{parentName:"p"},"rejected")," \uff0c\u5247\u56de\u50b3 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError"},"AggregateError"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const p1 = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(1), 500);\n});\nconst p2 = new Promise((resolve, reject) => {\n  setTimeout(() => reject(2), 100);\n});\n\nPromise.any([p1, p2]).then(function (value) {\n  console.log(value);\n  // 0.5\u79d2\u5f8c\uff0cp2 \u72c0\u614b fulfilled\uff0c\u5370\u51fa 1\n});\n")),(0,o.kt)("h3",{id:"promiseallpromises"},"Promise.all(promises)"),(0,o.kt)("p",null,"\u5c07\u591a\u500b Promise \u5305\u88dd\u6210\u4e00\u500b\u65b0\u7684 Promise\uff0c\u7576",(0,o.kt)("strong",{parentName:"p"},"\u6240\u6709"),"\u7684 Promise \u88ab ",(0,o.kt)("inlineCode",{parentName:"p"},"fulfilled")," \u5f8c\uff0c\u56de\u50b3\u4e00\u500b",(0,o.kt)("strong",{parentName:"p"},"\u9663\u5217\u4f9d\u5e8f\u5305\u542b\u5404 Promise ",(0,o.kt)("inlineCode",{parentName:"strong"},"fulfilled")," \u7684\u503c"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const p1 = Promise.resolve(1);\nconst p2 = 2;\nconst p3 = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(3), 1000);\n});\n\nPromise.all([p1, p2, p3]).then(function (values) {\n  console.log(values); // 1\u79d2\u5f8c\u5370\u51fa [1, 2, 3]\n});\n")),(0,o.kt)("p",null,"\u7576\u5176\u4e2d\u4e00\u500b Promise \u88ab ",(0,o.kt)("inlineCode",{parentName:"p"},"rejected")," \u5f8c\uff0c\u5247\u56de\u50b3\u8a72 Promise ",(0,o.kt)("inlineCode",{parentName:"p"},"rejected")," \u7684\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const p1 = Promise.resolve(1);\nconst p2 = new Promise((resolve, reject) => {\n  setTimeout(() => reject(2), 1000);\n});\n\nPromise.all([p1, p2])\n  .then(function (values) {\n    console.log(values);\n  })\n  .catch((error) => {\n    console.log(error); // 1\u79d2\u5f8c\uff0cp2\u72c0\u614b rejected\uff0c\u5370\u51fa 2\n  });\n")),(0,o.kt)("h3",{id:"promiseallsettledpromises"},"Promise.allSettled(promises)"),(0,o.kt)("p",null,"\u5c07\u591a\u500b Promise \u5305\u88dd\u6210\u4e00\u500b\u65b0\u7684 Promise\uff0c\u7576",(0,o.kt)("strong",{parentName:"p"},"\u6240\u6709"),"\u7684 Promise ",(0,o.kt)("strong",{parentName:"p"},"\u72c0\u614b\u6539\u8b8a"),"\u5f8c\uff0c\u56de\u50b3\u4e00\u500b",(0,o.kt)("strong",{parentName:"p"},"\u9663\u5217\u4f9d\u5e8f\u5305\u542b\u5404 Promise \u7684\u72c0\u614b\u548c\u503c"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const p1 = Promise.resolve(1);\nconst p2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));\nconst p3 = 3;\nconst p4 = Promise.reject(4);\n\nPromise.allSettled([p1, p2, p3, p4]).then((values) => {\n  console.log(values);\n  // 1\u79d2\u5f8c\u5370\u51fa\n  // [\n  //   { status: 'fulfilled', value: 1 },\n  //   { status: 'fulfilled', value: 2 },\n  //   { status: 'fulfilled', value: 3 },\n  //   { status: 'rejected', reason: Error: 4 }\n  // ]\n});\n")),(0,o.kt)("h3",{id:"promiseresolvevalue"},"Promise.resolve(value)"),(0,o.kt)("p",null,"\u5c07\u4e00\u500b\u7269\u4ef6\u8f49\u578b\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"fulfilled")," \u7684 Promise\uff08\u5982\u679c\u5b83\u4e0d\u662f\u4e00\u500b Promise\uff09\u3002"),(0,o.kt)("h3",{id:"promiserejectreason"},"Promise.reject(reason)"),(0,o.kt)("p",null,"\u5c07\u4e00\u500b\u7269\u4ef6\u8f49\u578b\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"rejected")," \u7684 Promise\uff08\u5982\u679c\u5b83\u4e0d\u662f\u4e00\u500b Promise\uff09\u3002"),(0,o.kt)("h3",{id:"\u5e38\u898b\u554f\u984c"},"\u5e38\u898b\u554f\u984c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u7d50\u679c\u5224\u8b80")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const promise = new Promise((resolve, reject) => {\n  console.log(1);\n  resolve();\n  console.log(2);\n});\n\npromise.then(() => {\n  console.log(3);\n});\n\nconsole.log(4);\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Answer:")),(0,o.kt)("p",{parentName:"li"},"\u547c\u53eb Promise \u5efa\u69cb\u51fd\u5f0f\uff0cexecutor \u5c07\u6703\u88ab\u7acb\u5373\u57f7\u884c"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// 1\n// 2\n// 4\n// 3\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u7d50\u679c\u5224\u8b80")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.resolve()\n  .then(() => {\n    return new Error('error!!!');\n  })\n  .then((res) => {\n    console.log('then: ', res);\n  })\n  .catch((err) => {\n    console.log('catch: ', err);\n  });\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Answer:"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"then")," \u56de\u50b3\u7684\u7d50\u679c\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"fulfilled")," \u5f8c\u7684\u503c"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// then:  Error: error!!!\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5be6\u4f5c ",(0,o.kt)("inlineCode",{parentName:"strong"},"Promise.race"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.myRace = function (promises) {\n  return new Promise((resolve, reject) => {\n    promises.forEach((promise) => {\n      promise\n        .then((val) => {\n          resolve(val);\n        })\n        .catch((error) => {\n          reject(error);\n        });\n    });\n  });\n};\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5be6\u4f5c ",(0,o.kt)("inlineCode",{parentName:"strong"},"Promise.any"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.myAny = function (promises) {\n  return new Promise((resolve, reject) => {\n    let count = 0;\n    promises.forEach((promise) => {\n      promise\n        .then((val) => {\n          resolve(val);\n        })\n        .catch(() => {\n          count += 1;\n        })\n        .finally(() => {\n          if (count === promises.length) reject('all promises rejected');\n        });\n    });\n  });\n};\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5be6\u4f5c ",(0,o.kt)("inlineCode",{parentName:"strong"},"Promise.all"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.myAll = function (promises) {\n  return new Promise((resolve, reject) => {\n    const output = [];\n    let count = 0;\n    promises.forEach((promise, index) => {\n      promise\n        .then((val) => {\n          count += 1;\n          output[index] = val;\n        })\n        .catch((error) => {\n          reject(error);\n        })\n        .finally(() => {\n          if (output.length === count) resolve(output);\n        });\n    });\n  });\n};\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5be6\u4f5c ",(0,o.kt)("inlineCode",{parentName:"strong"},"Promise.allSettled"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.myAllSettled = function (promises) {\n  return new Promise((resolve) => {\n    const output = [];\n    let count = 0;\n    promises.forEach((promise, index) => {\n      promise\n        .then((value) => {\n          output[index] = {\n            status: 'fulfilled',\n            value,\n          };\n        })\n        .catch((error) => {\n          output[index] = {\n            status: 'rejected',\n            error,\n          };\n        })\n        .finally(() => {\n          count += 1;\n          if (count === promises.length) {\n            resolve(output);\n          }\n        });\n    });\n  });\n};\n")))),(0,o.kt)("p",null,"\u53c3\u8003\u4f86\u6e90:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.fooish.com/javascript/ES6/Promise.html"},"https://www.fooish.com/javascript/ES6/Promise.html"))))}u.isMDXComponent=!0}}]);