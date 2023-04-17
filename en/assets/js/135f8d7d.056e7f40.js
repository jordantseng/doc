"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[177],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,k=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(k,c(c({ref:n},u),{},{components:t})):r.createElement(k,c({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},c="\u9589\u5305",l={unversionedId:"JavaScript/closure",id:"JavaScript/closure",title:"\u9589\u5305",description:"TL;DR",source:"@site/docs/JavaScript/closure.md",sourceDirName:"JavaScript",slug:"/JavaScript/closure",permalink:"/frontendwiz/en/JavaScript/closure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/closure.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6\u50b3\u905e",permalink:"/frontendwiz/en/DOM/event-propagation/"},next:{title:"Promise",permalink:"/frontendwiz/en/JavaScript/promise"}},i={},s=[{value:"TL;DR",id:"tldr",level:3},{value:"\u4ec0\u9ebc\u662f\u9589\u5305 \uff08closure\uff09",id:"\u4ec0\u9ebc\u662f\u9589\u5305-closure",level:3},{value:"\u5be6\u969b\u61c9\u7528",id:"\u5be6\u969b\u61c9\u7528",level:3},{value:"closure vs. Class",id:"closure-vs-class",level:3}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9589\u5305"},"\u9589\u5305"),(0,a.kt)("h3",{id:"tldr"},"TL;DR"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9589\u5305\uff08closure\uff09\u662f",(0,a.kt)("strong",{parentName:"li"},"\u51fd\u5f0f\u4ee5\u53ca\u8a72\u51fd\u5f0f\u88ab\u5ba3\u544a\u6642\u6240\u5728\u7684\u4f5c\u7528\u57df\u74b0\u5883\uff08lexical environment\uff09\u7684\u7d44\u5408")),(0,a.kt)("li",{parentName:"ul"},"\u8981\u5f62\u6210\u9589\u5305\u9808\u5c07\u51fd\u5f0f\u5ba3\u544a\u5728\u53e6\u4e00\u500b\u51fd\u5f0f\u7576\u4e2d\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u5167\u90e8\u51fd\u5f0f\u80fd\u5920\u53d6\u5f97\u672c\u8eab\u4f5c\u7528\u57df\u4ee5\u5916\u7684\u8b8a\u6578\uff0c\u5c31\u7b97\u5916\u90e8\u51fd\u5f0f\u5df2\u7d93\u88ab\u57f7\u884c")),(0,a.kt)("li",{parentName:"ul"},"\u7d93\u5e38\u88ab\u61c9\u7528\u5728",(0,a.kt)("strong",{parentName:"li"},"\u72c0\u614b\u4fdd\u5b58"),"\u3001",(0,a.kt)("strong",{parentName:"li"},"\u7de9\u5b58\u6a5f\u5236"),"\u3001",(0,a.kt)("strong",{parentName:"li"},"\u6a21\u64ec\u79c1\u6709\u8b8a\u6578"),"\u4ee5\u53ca",(0,a.kt)("strong",{parentName:"li"},"\u67ef\u91cc\u5316")),(0,a.kt)("li",{parentName:"ul"},"closure \u4e3b\u8981\u7528\u4f86",(0,a.kt)("strong",{parentName:"li"},"\u5c01\u88dd\u79c1\u6709\u8b8a\u6578\u548c\u65b9\u6cd5\uff1b"),"Class \u4e3b\u8981\u7528\u4f86",(0,a.kt)("strong",{parentName:"li"},"\u5efa\u7acb\u4e00\u500b\u5efa\u7acb\u7269\u4ef6\u7684\u85cd\u5716"))),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u9589\u5305-closure"},"\u4ec0\u9ebc\u662f\u9589\u5305 \uff08closure\uff09"),(0,a.kt)("p",null,"\u6839\u64da ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Closures"},"MDN")," \u7684\u5b9a\u7fa9\uff0c\u9589\u5305\uff08Closure\uff09\u662f",(0,a.kt)("strong",{parentName:"p"},"\u51fd\u5f0f\u4ee5\u53ca\u8a72\u51fd\u5f0f\u88ab\u5ba3\u544a\u6642\u6240\u5728\u7684\u4f5c\u7528\u57df\u74b0\u5883\uff08lexical environment\uff09\u7684\u7d44\u5408")),(0,a.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa\uff0c\u8981\u5f62\u6210\u9589\u5305\u9808\u5c07\u51fd\u5f0f\u5ba3\u544a\u5728\u53e6\u4e00\u500b\u51fd\u5f0f\u7576\u4e2d\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5167\u90e8\u51fd\u5f0f\u80fd\u5920\u53d6\u5f97\u672c\u8eab\u4f5c\u7528\u57df\u4ee5\u5916\u7684\u8b8a\u6578\uff0c\u5c31\u7b97\u5916\u90e8\u51fd\u5f0f\u5df2\u7d93\u88ab\u57f7\u884c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function outterFn() {\n  const name = 'jordan';\n  function innerFn() {\n    console.log(name);\n  }\n  return innerFn;\n}\n\n// \u9589\u5305 = innerFn + outterFn \u7684\u4f5c\u7528\u57df\u74b0\u5883\nconst innerFn = outterFn();\n\n// \u5c31\u7b97 outterFn \u5df2\u7d93\u88ab\u57f7\u884c\uff0cinnerFn \u4ecd\u80fd\u5920\u53d6\u5f97 name \u53c3\u6578\ninnerFn(); // jordan\n")),(0,a.kt)("h3",{id:"\u5be6\u969b\u61c9\u7528"},"\u5be6\u969b\u61c9\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u72c0\u614b\u4fdd\u5b58")),(0,a.kt)("p",{parentName:"li"},"React \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," \u5c31\u662f\u900f\u904e closure \u7684\u6982\u5ff5\u5be6\u4f5c\uff0c\u4ee5\u4e0b\u70ba\u4e00\u500b\u7c21\u6613\u7248\u7684 \xa0",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),"\xa0\uff0c\u5f9e\u4e0b\u65b9\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u767c\u73fe\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"getState"),"\u8207",(0,a.kt)("inlineCode",{parentName:"p"},"setState"),"\xa0 \u53ef\u4ee5\u900f\u904e closure \u7684\u7279\u6027\uff0c\u8b93",(0,a.kt)("strong",{parentName:"p"},"\u5167\u90e8\u51fd\u5f0f\u8a18\u4f4f\u5916\u90e8\u7684\u8b8a\u6578"),"\uff0c\u56e0\u6b64\u53ef\u4ee5\u900f\u904e\u547c\u53eb ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," \u5f8c\uff0c\u6539\u8b8a state \u7684\u503c\uff0c\u4e5f\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"getState"),"\u53d6\u5f97 state \u6700\u65b0\u7684\u503c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function useState(initialState) {\n  let state = initialState;\n\n  function getState() {\n    return state;\n  }\n\n  function setState(updatedState) {\n    state = updatedState;\n  }\n\n  return [getState, setState];\n}\n\nconst [count, setCount] = useState(0);\n\ncount(); // 0\nsetCount(1);\ncount(); // 1\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7de9\u5b58\u6a5f\u5236 \uff08memoization\uff09")),(0,a.kt)("p",{parentName:"li"},"\u7de9\u5b58\u6a5f\u5236\u4e5f\u662f\u900f\u904e closure \u8b93",(0,a.kt)("strong",{parentName:"p"},"\u5167\u90e8\u51fd\u5f0f\u8a18\u4f4f\u5916\u90e8\u7684\u8b8a\u6578"),"\u7684\u7279\u6027\uff0c\u5c07\u8a08\u7b97\u904e\u7684\u503c\u5132\u5b58\u5728 cache \u7269\u4ef6\u4e2d\uff0c\u7576\u4e0b\u6b21\u4f7f\u7528\u76f8\u540c\u7684\u5f15\u6578 \uff08argument\uff09\u547c\u53eb\u6642\uff0c\u5c31\u53ef\u4ee5\u4e0d\u7528\u91cd\u65b0\u8a08\u7b97\uff0c\u76f4\u63a5\u53d6\u5f97\u5df2\u7d93\u5132\u5b58\u5728 cache \u7269\u4ef6\u7684\u503c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function memoize(cb) {\n  const cache = {};\n  return function (...args) {\n    const key = JSON.stringify(args);\n\n    if (key in cache) return cache[key];\n\n    const result = cb.apply(this, args);\n\n    cache[key] = result;\n\n    return result;\n  };\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6a21\u64ec\u79c1\u6709\u8b8a\u6578")),(0,a.kt)("p",{parentName:"li"},"\u6709\u6642\u5019\u6211\u5011\u5728\u958b\u767c\u7a0b\u5f0f\u78bc\u5167\u90e8\u7d30\u7bc0\uff0c\u4e26\u4e0d\u60f3\u8b93\u5916\u90e8\u53d6\u5f97\u3002JavaScript \u4e26\u4e0d\u652f\u63f4\u79c1\u6709\u8b8a\u6578\uff0c\u4f46\u6211\u5011\u53ef\u4ee5\u900f\u904e\u9589\u5305\u505a\u51fa\u985e\u4f3c\u7684\u529f\u80fd"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const counter = function () {\n  let privateCounter = 0;\n\n  return {\n    increment() {\n      privateCounter += 1;\n    },\n    decrement() {\n      privateCounter -= 1;\n    },\n    value() {\n      return privateCounter;\n    },\n  };\n};\n\n// privateCounter \u7121\u6cd5\u88ab\u5916\u90e8\u4fee\u6539\n// \u56e0\u70ba closure \u7684\u95dc\u4fc2 increment \u8207 decrement \u53ef\u4ee5\u5b58\u53d6\u5230 privateCounter\n// \u56e0\u6b64\u8981\u4fee\u6539 privateCounter \u53ea\u80fd\u5920\u900f\u904e increment \u8207 decrement\n\nconst counter1 = counter();\ncounter1.increment();\ncounter1.value(); // 1\ncounter1.privateCounter; // undefined\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u67ef\u91cc\u5316")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const add = function (x) {\n  return function (y) {\n    return x + y;\n  };\n};\n\n// \u547c\u53eb add \u51fd\u5f0f\u4e26\u50b3\u5165\u5f15\u6578 1\n// \u547c\u53eb increment \u51fd\u5f0f\uff0cincrement \u51fd\u5f0f\u80fd\u5920\u53d6\u5f97\u4e4b\u524d\u50b3\u5165\u7684\u5f15\u6578 1\n\nconst increment = add(1);\n\nincrement(2); // 3\n")))),(0,a.kt)("h3",{id:"closure-vs-class"},"closure vs. Class"),(0,a.kt)("p",null,"\u5728 ES6 \u4ee5\u524d\uff0cJavaScript \u9084\u6c92\u6709 Class\uff0c\u6211\u5011\u5982\u679c\u8981\u6a21\u64ec OOP \u7684\u884c\u70ba\uff0c\u4e00\u822c\u90fd\u662f\u900f\u904e closure \u5be6\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function counter() {\n  let count = 0;\n  return {\n    increment: () => count++,\n  };\n}\n\nconst counter1 = counter();\ncounter1.increment(); // 0\ncounter1.increment(); // 1\n\nclass Counter {\n  constructor() {\n    this.count = 0;\n  }\n  increment() {\n    return this.count++;\n  }\n}\n\nconst counter2 = new Counter();\ncounter2.increment(); // 0\ncounter2.increment(); // 1\n")),(0,a.kt)("p",null,"\u96d6\u7136 closure \u548c Class \u5728\u5c01\u88dd\u908f\u8f2f\u548c\u79c1\u6709\u8b8a\u6578\u6709\u8a31\u591a\u76f8\u4f3c\u4e4b\u8655\uff0c\u4f46\u5b83\u5011\u662f\u4e0d\u540c\u7684\u6982\u5ff5\uff0c\u6709\u8457\u4e0d\u540c\u7684\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"closure\uff1a\u4e3b\u8981\u7528\u4f86",(0,a.kt)("strong",{parentName:"li"},"\u5c01\u88dd\u79c1\u6709\u8b8a\u6578\u548c\u65b9\u6cd5")),(0,a.kt)("li",{parentName:"ul"},"Class\uff1a\u4e3b\u8981\u7528\u4f86",(0,a.kt)("strong",{parentName:"li"},"\u5efa\u7acb\u4e00\u500b\u5efa\u7acb\u7269\u4ef6\u7684\u85cd\u5716"))),(0,a.kt)("p",null,"closure \u548c Class \u9084\u6709\u4e00\u500b\u5f88\u5927\u7684\u4e0d\u540c\uff0cClass \u5275\u9020\u51fa\u4f86\u7684\u5be6\u4f8b\u6bcf\u6b21\u547c\u53eb\u90fd\u662f\u540c\u4e00\u500b Class \u65b9\u6cd5\uff0c\u800c\u900f\u904e closure \u5efa\u7acb\u7684\u5be6\u4f8b\u6bcf\u6b21\u90fd\u662f\u56de\u50b3\u4e00\u500b\u5168\u65b0\u7684\u7269\u4ef6\uff0c\u56e0\u6b64\u6bcf\u6b21\u5be6\u4f8b\u547c\u53eb\u7684\u90fd\u662f\u4e0d\u540c\u7684\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const counter1 = count();\nconst counter2 = count();\n\nconsole.log(counter1.increment === counter2.increment); // false\n\nconst counter3 = new Count();\nconst counter4 = new Count();\nconsole.log(counter3.increment === counter4.increment); // true\n")),(0,a.kt)("p",null,"\u53c3\u8003\u4f86\u6e90:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@sustained_salmon_fly_484/javascript%E7%9A%84%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-closure-new-class-809e0970d566"},"https://medium.com/@sustained_salmon_fly_484/javascript \u7684\u7269\u4ef6\u5c0e\u5411-closure-new-class-809e0970d566")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.explainthis.io/en/interview-guides/javascript/what-is-closure"},"https://www.explainthis.io/en/interview-guides/javascript/what-is-closure")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.explainthis.io/zh-hant/interview-guides/javascript/what-is-closure"},"https://www.explainthis.io/zh-hant/interview-guides/javascript/what-is-closure")))}m.isMDXComponent=!0}}]);