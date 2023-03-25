"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[935],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>N});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),k=l,N=c["".concat(p,".").concat(k)]||c[k]||u[k]||r;return t?a.createElement(N,o(o({ref:n},m),{},{components:t})):a.createElement(N,o({ref:n},m))}));function N(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(7462),l=(t(7294),t(3905));const r={},o="this",i={unversionedId:"JavaScript/this",id:"JavaScript/this",title:"this",description:"TL;DR",source:"@site/docs/JavaScript/this.md",sourceDirName:"JavaScript",slug:"/JavaScript/this",permalink:"/doc/en/JavaScript/this",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/this.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Promise",permalink:"/doc/en/JavaScript/promise"},next:{title:"DOM vs. Virtual DOM",permalink:"/doc/en/React/dom-vs-virtual-dom/"}},p={},s=[{value:"TL;DR",id:"tldr",level:3},{value:"\u4ec0\u9ebc\u662f this",id:"\u4ec0\u9ebc\u662f-this",level:3},{value:"\u6307\u5b9a this \u7684\u503c",id:"\u6307\u5b9a-this-\u7684\u503c",level:3},{value:"\u5e38\u898b\u554f\u984c",id:"\u5e38\u898b\u554f\u984c",level:3}],m={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"this"},"this"),(0,l.kt)("h3",{id:"tldr"},"TL;DR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"this")," \u5c31\u662f\u547c\u53eb\u9019\u500b\u51fd\u5f0f\u7684\u7269\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u51fd\u5f0f\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"this")," \u6307\u5411\u5168\u57df\u7269\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u7269\u4ef6\u65b9\u6cd5\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"this")," \u6307\u5411\u7269\u4ef6\u672c\u8eab"),(0,l.kt)("li",{parentName:"ul"},"\u5efa\u69cb\u51fd\u5f0f / \u985e\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"this")," \u6307\u5411\u7269\u4ef6\u5be6\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u76e3\u807d\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"this")," \u6307\u5411\u7d81\u5b9a\u7684 DOM \u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"\u7bad\u982d\u51fd\u5f0f\uff1a\u6c92\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"this")),(0,l.kt)("li",{parentName:"ul"},"call / apply / bind\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"this")," \u6307\u5411\u4efb\u610f\u6307\u5b9a\u7684\u503c")),(0,l.kt)("h3",{id:"\u4ec0\u9ebc\u662f-this"},"\u4ec0\u9ebc\u662f this"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u662f\u76ee\u524d\u7a0b\u5f0f\u78bc\u57f7\u884c\u7684\u74b0\u5883"),(0,l.kt)("p",null,"\u7531\u65bc\u5176\u503c\u662f\u5728\u57f7\u884c\u6642\u6c7a\u5b9a\u7684\uff0c\u610f\u5473\u8457",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u7684\u57f7\u884c\u74b0\u5883"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u7684\u6a21\u5f0f"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u7684\u7a0b\u5f0f\u78bc\u524d\u5f8c\u6587"),"\u6703\u6709\u4e0d\u540c\u7684\u503c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u57f7\u884c\u74b0\u5883 / \u57f7\u884c\u6a21\u5f0f\uff1a")),(0,l.kt)("p",null,"\u5728\u700f\u89bd\u5668\u4e0b\uff0c\u975e\u56b4\u683c\u6a21\u5f0f\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u9810\u8a2d\u503c\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"window")),(0,l.kt)("p",null,"\u5728 node.js \u4e0b\uff0c\u975e\u56b4\u683c\u6a21\u5f0f\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u9810\u8a2d\u503c\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"global")),(0,l.kt)("p",null,"\u5728\u56b4\u683c\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u8ad6\u57f7\u884c\u74b0\u5883 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u9810\u8a2d\u503c\u7686\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"'use strict';\n\nfunction log() {\n  console.log(this);\n}\n\nlog(); // undefined\n")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u700f\u89bd\u5668"),"\u4e0b\u7684",(0,l.kt)("strong",{parentName:"p"},"\u975e\u56b4\u683c\u6a21\u5f0f"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u7684\u7a0b\u5f0f\u78bc\u524d\u5f8c\u6587\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5168\u57df\u74b0\u5883")),(0,l.kt)("p",{parentName:"li"},"\u5728\u5168\u57df\u74b0\u5883\u4e0b\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u6307\u5411\u5168\u57df\u7269\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"window")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log(this); // window\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u4e00\u822c\u51fd\u5f0f")),(0,l.kt)("p",{parentName:"li"},"\u5728\u4e00\u822c\u51fd\u5f0f\u5167\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u6307\u5411\u5168\u57df\u7269\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"window")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function log() {\n  console.log(this);\n}\n\nlog(); // window\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u7269\u4ef6\u7684\u65b9\u6cd5")),(0,l.kt)("p",{parentName:"li"},"\u7576\u51fd\u5f0f\u4f5c\u70ba\u7269\u4ef6\u7684\u65b9\u6cd5\u6642\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u6703\u6307\u5411\u547c\u53eb\u5b83\u7684\u9019\u500b\u7269\u4ef6\u672c\u8eab"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const foo = {\n  value: 123,\n  log() {\n    console.log(this);\n  },\n};\n\nfoo.log(); // { foo: 123, log: [Function: log] }\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5efa\u69cb\u51fd\u5f0f / \u985e")),(0,l.kt)("p",{parentName:"li"},"\u51fd\u5f0f\u4f5c\u70ba\u5efa\u69cb\u51fd\u5f0f\u6216\u985e\u7684\u65b9\u6cd5\u6642\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u6703\u6307\u5411\u7531\u5b83\u5011\u5275\u9020\u51fa\u4f86\u7684\u5be6\u4f8b\uff08instance\uff09"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function Foo(value) {\n  this.value = value;\n  this.log = function () {\n    console.log(this);\n  };\n}\n\nconst foo = new Foo(123);\n\nfoo.log(); // Foo { value: 123, log: [Function (anonymous)] }\n\nclass Boo {\n  constructor(value) {\n    this.value = value;\n  }\n  log = function () {\n    console.log(this);\n  };\n}\n\nconst boo = new Boo(456);\n\nboo.log(); // Boo { value: 456, log: [Function: log] }\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u76e3\u807d")),(0,l.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u76e3\u807d\u51fd\u5f0f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u6703\u6307\u5411\u7d81\u5b9a\u76e3\u807d\u4e8b\u4ef6\u7684 DOM \u5143\u7d20"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const input = document.getElementById('input');\n\ninput.addEventListener('input', function () {\n  console.log(this); // <input id=\"input\" />\n});\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u7bad\u982d\u51fd\u5f0f")),(0,l.kt)("p",{parentName:"li"},"\u4e00\u822c\u4f86\u8aaa\uff0c\u7576\u51fd\u5f0f\u88ab\u57f7\u884c\u6642\u90fd\u6703\u5efa\u7acb\u4e00\u500b\u81ea\u5df1\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \uff0c\u4f46\u7531\u65bc\u7bad\u982d\u51fd\u5f0f\u6c92\u6709\u81ea\u5df1\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \uff0c\u5b83\u6703\u900f\u904e\u4f5c\u7528\u57df\u93c8\uff08scope chain\uff09\u53bb\u7e7c\u627f\u5176\u4ed6\u4f5c\u7528\u57df\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const foo = () => this;\nconsole.log(foo() === window); // true\n")))),(0,l.kt)("p",null,"\u7d9c\u5408\u4ee5\u4e0a\u7684\u6848\u4f8b\uff0c\u53ef\u4ee5\u767c\u73fe ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u901a\u5e38\u90fd\u662f\u5728\u51fd\u5f0f\u5167\u88ab\u4f7f\u7528\uff0c\u56e0\u6b64\u6709\u500b\u5feb\u901f\u7684\u5224\u65b7\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u2705 \u8981\u5224\u65b7this\u7684\u503c\uff0c\u5c31\u770b\u9019\u500b\u51fd\u5f0f\u300c\u600e\u9ebd\u300d\u88ab\u547c\u53eb\u3002\u63db\u53e5\u8a71\u8aaa\uff0cthis\u5c31\u662f\u547c\u53eb\u9019\u500b\u51fd\u5f0f\u7684\u7269\u4ef6\n")),(0,l.kt)("h3",{id:"\u6307\u5b9a-this-\u7684\u503c"},"\u6307\u5b9a this \u7684\u503c"),(0,l.kt)("p",null,"\u7531\u65bc ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u901a\u5e38\u90fd\u662f\u5728\u51fd\u5f0f\u5167\u88ab\u4f7f\u7528\uff0cJavaScript \u63d0\u4f9b\u4e86\u4e09\u500b\u51fd\u5f0f\u7684\u65b9\u6cd5\uff0c\u8b93\u6211\u5011\u4f86\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u7684\u503c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"call")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"function.call(thisArg, x, y, \u2026)\uff1a"),"\u547c\u53eb ",(0,l.kt)("inlineCode",{parentName:"p"},"function(x, y, ...)")," \uff0c\u4e26\u5c07\u51fd\u5f0f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u7d81\u5b9a\u70ba thisArg"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function log(a, b) {\n  console.log(this, a, b);\n}\n\nlog.call(undefined, 'a', 'b'); // undefined 'a' 'b'\nlog.call(null, 'a', 'b'); // null 'a' 'b'\nlog.call('1', 'a', 'b'); // '1' 'a' 'b'\nlog.call(1, 'a', 'b'); // 1 'a' 'b'\nlog.call({}, 'a', 'b'); // {} 'a' 'b'\nlog.call([], 'a', 'b'); // [] 'a' 'b'\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"apply")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"function.apply(thisArg, ","[x, y, \u2026]",")\uff1a"),"\u547c\u53eb ",(0,l.kt)("inlineCode",{parentName:"p"},"function(x, y, ...)")," \uff0c\u4e26\u5c07\u51fd\u5f0f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u7d81\u5b9a\u70ba thisArg"),(0,l.kt)("p",{parentName:"li"},"apply \u548c call \u4f7f\u7528\u65b9\u6cd5\u975e\u5e38\u76f8\u4f3c\uff0c\u552f\u4e00\u7684\u5dee\u5225\u53ea\u662f apply \u4ee3\u5165\u7684\u53c3\u6578\u70ba\u9663\u5217"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function log(a, b) {\n  console.log(this, a, b);\n}\n\nlog.apply(undefined, ['a', 'b']); // undefined 'a' 'b'\nlog.apply(null, ['a', 'b']); // null 'a' 'b'\nlog.apply('1', ['a', 'b']); // '1' 'a' 'b'\nlog.apply(1, ['a', 'b']); // 1 'a' 'b'\nlog.apply({}, ['a', 'b']); // {} 'a' 'b'\nlog.apply([], ['a', 'b']); // [] 'a' 'b'\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"bind")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"function.bind(thisArg)\uff1a"),"\u56de\u50b3\u4e00\u500b\u65b0\u51fd\u5f0f\uff0c\u8a72\u51fd\u5f0f\u88ab\u547c\u53eb\u6642\uff0c\u5c07\u65b0\u51fd\u5f0f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u7d81\u5b9a\u70ba thisArg"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function log() {\n  console.log(this);\n}\n\nconst myLog = log.bind('1');\n\nlog(); // window\nmyLog(); // '1'\n")))),(0,l.kt)("h3",{id:"\u5e38\u898b\u554f\u984c"},"\u5e38\u898b\u554f\u984c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u7d50\u679c\u5224\u8b80")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"var name = 'jordan1';\n\nfunction callName() {\n  console.log(this.name);\n}\n\nconst person = {\n  name: 'jordan2',\n  callName: callName,\n  watch: {\n    name: 'jordan3',\n    callName: callName,\n  },\n};\n\nperson.callName();\nperson.watch.callName();\nconsole.log(this.name);\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Answer:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"person.callName(); // jordan2\n\nperson.watch.callName(); // jordan3\n\n// \u7531\u65bc name \u662f\u900f\u904e var \u5ba3\u544a\uff0cname \u6703\u88ab\u7d81\u5b9a\u5230\u5168\u57df\u7269\u4ef6 (window)\nthis.name; // jordan1\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6539\u5beb\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\uff0c\u4f7f\u5176\u5370\u51fa \u2018jordan\u2019")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const person = {\n  name: 'jordan',\n  print() {\n    setTimeout(function () {\n      console.log(this.name);\n    }, 1000);\n  },\n};\nperson.print();\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Answer:")),(0,l.kt)("p",{parentName:"li"},"\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"setTimeout")," \u7684\u51fd\u5f0f\u4e26\u4e0d\u662f\u7269\u4ef6\u7684\u65b9\u6cd5\uff0c\u53ea\u662f\u55ae\u7d14\u7684\u4e00\u822c\u51fd\u5f0f\uff0c\u51fd\u5f0f\u5728\u57f7\u884c\u6642\u6703\u7522\u751f\u81ea\u5df1\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \uff0c\u4e26\u6307\u5411\u5168\u57df\u7269\u4ef6\uff0c\u56e0\u6b64\u9700\u8981\u7279\u5225\u53bb\u7d81\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u7684\u503c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// 1. that\nconst person = {\n  name: 'jordan',\n  print() {\n    const that = this;\n    setTimeout(function () {\n      console.log(that.name);\n    }, 1000);\n  },\n};\n\n// 2. bind or apply\nconst person = {\n  name: 'jordan',\n  print() {\n    setTimeout(\n      function () {\n        console.log(this.name);\n      }.bind(person),\n      1000,\n    );\n  },\n};\n\n// 3. arrow function\nconst person = {\n  name: 'jordan',\n  print() {\n    setTimeout(() => {\n      console.log(this.name);\n    }, 1000);\n  },\n};\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5c07 ",(0,l.kt)("inlineCode",{parentName:"strong"},"jordan.log")," \u5370\u51fa\u4f86\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"this")," \u66f4\u6539\u70ba ",(0,l.kt)("inlineCode",{parentName:"strong"},"null"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  log() {\n    console.log(this);\n  }\n}\n\nconst jordan = new Person('jordan');\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Answer:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u5c31\u7b97\u539f\u672c\u5df2\u7d93\u6709this, \u4e5f\u4f9d\u7136\u53ef\u4ee5\u88ab\u51fd\u5f0f\u65b9\u6cd5\u8986\u84cb\u6389\njordan.log.apply(null); // null\njordan.log.call(null); // null\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5be6\u4f5c call, apply, bind")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"Function.prototype.myCall = function (thisContext, ...args) {\n  // \u6b64\u57f7\u884c\u74b0\u5883\u7684 this \u6703\u6307\u5411\u547c\u53eb myCall \u7684\u51fd\u5f0f\n\n  // \u4f7f\u7528 symbol \u5efa\u7acb\u552f\u4e00\u7684 key\uff0c\u907f\u514d\u8986\u84cb thisContext \u7684 key\n  const symbol = Symbol();\n\n  // \u5c07 this \u52a0\u5165\u5230 thisContext \u4e0a\n  thisContext[symbol] = this;\n\n  // \u547c\u53eb\u52a0\u5165 thisContext \u4e0a\u7684 this\uff0c\u4e26\u5132\u5b58\u5176\u56de\u50b3\u503c\n  const output = thisContext[symbol](...args);\n\n  // \u56e0\u70ba\u6211\u5011\u6539\u8b8a\u4e86\u50b3\u5165\u7684 thisContext\uff0c\u6211\u5011\u8981\u628a\u5b83\u6062\u5fa9\u6210\u539f\u4f86\u7684\u5f62\u72c0\n  delete thisContext[symbol];\n\n  return output;\n};\n\nFunction.prototype.myApply = function (thisContext, args = []) {\n  return this.myCall(thisContext, ...args);\n};\n\nFunction.prototype.myBind = function (thisContext, ...args) {\n  // \u9019\u88e1\u4f7f\u7528\u7bad\u982d\u51fd\u5f0f\u662f\u56e0\u70ba\u5982\u679c\u7528\u4e00\u822c\u51fd\u5f0f\u6703\u7522\u751f\u4e00\u500b\u65b0\u7684 this \u6307\u5411\u5168\u57df\u7269\u4ef6\n  // \u7531\u65bc\u7bad\u982d\u51fd\u5f0f\u6c92\u6709\u81ea\u5df1\u7684 this\uff0c\u5b83\u6703\u900f\u904e\u4f5c\u7528\u57df\u93c8\uff08scope chain\uff09\u7e7c\u627f this\uff0c\u4e5f\u5c31\u662f\u547c\u53eb myBind \u7684\u51fd\u5f0f\n  return (...newArgs) => this.myApply(thisContext, [...args, ...newArgs]);\n};\n")))),(0,l.kt)("p",null,"\u53c3\u8003\u4f86\u6e90:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/starbugs/%E9%9D%A2%E8%A9%A6-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%83%E7%9A%84-js-%E8%A7%80%E5%BF%B5%E9%A1%8C-%E4%B8%AD%E8%8B%B1%E5%B0%8D%E7%85%A7%E4%B9%8B%E4%B8%8A%E7%AF%87-3b0a3feda14f"},"https://medium.com/starbugs/\u9762\u8a66-\u524d\u7aef\u5de5\u7a0b\u5e2b\u4e00\u5b9a\u8981\u6703\u7684-js-\u89c0\u5ff5\u984c-\u4e2d\u82f1\u5c0d\u7167\u4e4b\u4e0a\u7bc7-3b0a3feda14f")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://blog.techbridge.cc/2019/02/23/javascript-this/"},"https://blog.techbridge.cc/2019/02/23/javascript-this/")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/23804247"},"https://zhuanlan.zhihu.com/p/23804247")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#the_this_problem"},"https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#the_this_problem"))))}u.isMDXComponent=!0}}]);