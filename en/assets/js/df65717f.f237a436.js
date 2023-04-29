"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,N=s["".concat(p,".").concat(d)]||s[d]||k[d]||l;return n?a.createElement(N,i(i({ref:t},c),{},{components:n})):a.createElement(N,i({ref:t},c))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},i="\u63d0\u5347",o={unversionedId:"JavaScript/hoisting",id:"JavaScript/hoisting",title:"\u63d0\u5347",description:"TL;DR",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/JavaScript/hoisting.md",sourceDirName:"JavaScript",slug:"/JavaScript/hoisting",permalink:"/frontendwiz/en/JavaScript/hoisting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/hoisting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Closure",permalink:"/frontendwiz/en/JavaScript/closure"},next:{title:"Promise",permalink:"/frontendwiz/en/JavaScript/promise"}},p={},m=[{value:"TL;DR",id:"tldr",level:3},{value:"<strong>\u4ec0\u9ebc\u662f\u63d0\u5347 \uff08hoisting\uff09</strong>",id:"\u4ec0\u9ebc\u662f\u63d0\u5347-hoisting",level:3},{value:"JavaScript \u7de8\u8b6f\u904e\u7a0b",id:"javascript-\u7de8\u8b6f\u904e\u7a0b",level:3},{value:"\u5e38\u898b\u554f\u984c",id:"\u5e38\u898b\u554f\u984c",level:3}],c={toc:m},s="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63d0\u5347"},"\u63d0\u5347"),(0,r.kt)("h3",{id:"tldr"},"TL;DR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u5347\u5c31\u662f",(0,r.kt)("strong",{parentName:"li"},"\u8b8a\u6578"),"\u548c",(0,r.kt)("strong",{parentName:"li"},"\u51fd\u5f0f\u5ba3\u544a\uff08function declaration\uff09"),"\u88ab\u63d0\u5347\u5230\u4f5c\u7528\u57df\u9802\u7aef\u7684\u884c\u70ba\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u5347\u4e26\u4e0d\u662f\u771f\u7684\u79fb\u52d5\u7a0b\u5f0f\u78bc\uff0c\u800c\u662f\u8207 JavaScript \u5f15\u64ce\u7de8\u8b6f\u7684\u904e\u7a0b\u6709\u95dc\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7de8\u8b6f\u904e\u7a0b\u5206\u70ba\u5275\u9020\u968e\u6bb5\u548c\u57f7\u884c\u968e\u6bb5\uff0c\u5275\u9020\u968e\u6bb5\u6703\u5efa\u7acb\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u7d66\u8b8a\u6578\uff0c\u800c\u57f7\u884c\u968e\u6bb5\u5247\u6703\u9032\u884c\u8ce6\u503c\u3002")),(0,r.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u63d0\u5347-hoisting"},(0,r.kt)("strong",{parentName:"h3"},"\u4ec0\u9ebc\u662f\u63d0\u5347 \uff08hoisting\uff09")),(0,r.kt)("p",null,"\u5c31\u8a9e\u610f\u4f86\u8aaa\uff0c\u63d0\u5347\u5c31\u662f",(0,r.kt)("strong",{parentName:"p"},"\u8b8a\u6578"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u51fd\u5f0f\u5ba3\u544a\uff08function declaration\uff09"),"\u88ab\u63d0\u5347\u5230\u4f5c\u7528\u57df\u9802\u7aef\u7684\u884c\u70ba\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u5be6\u969b\u4e0a\u7684\u7a0b\u5f0f\u78bc\nconsole.log(a);\nvar a = 1;\n\n// \u63d0\u5347\u5f8c\u7684\u7a0b\u5f0f\u78bc\nvar a;\nconsole.log(a);\na = 1;\n")),(0,r.kt)("p",null,"\u4e0d\u8ad6\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"let")," \u9084\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," \u5ba3\u544a\u8b8a\u6578\uff0c\u90fd\u6703\u6709\u63d0\u5347\u7684\u884c\u70ba\u3002\u7136\u800c\u63d0\u5347\u4e00\u8a5e\u53ef\u80fd\u6703\u8b93\u4eba\u8aa4\u4ee5\u70ba\u7a0b\u5f0f\u78bc\u79fb\u52d5\u4e86\uff0c\u5be6\u969b\u4e0a\u7a0b\u5f0f\u78bc\u4e26\u4e0d\u662f\u771f\u7684\u88ab\u79fb\u52d5\uff0c\u800c\u662f\u8207 JavaScript \u5f15\u64ce\u7de8\u8b6f\u7684\u904e\u7a0b\u6709\u95dc\u3002"),(0,r.kt)("h3",{id:"javascript-\u7de8\u8b6f\u904e\u7a0b"},"JavaScript \u7de8\u8b6f\u904e\u7a0b"),(0,r.kt)("p",null,"\u7de8\u8b6f\u904e\u7a0b\u53ef\u4ee5\u5206\u6210\u5169\u500b\u968e\u6bb5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5275\u9020\uff08creation\uff09"),"\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u9010\u884c\u57f7\u884c\u7a0b\u5f0f\u524d"),"\uff0cJavaScript \u5f15\u64ce\u6703\u5148\u5efa\u7acb\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u7d66",(0,r.kt)("strong",{parentName:"li"},"\u8b8a\u6578"),"\u548c",(0,r.kt)("strong",{parentName:"li"},"\u51fd\u5f0f\u5ba3\u544a\uff0c"),"\u9700\u8981\u6ce8\u610f\u7684\u662f\u5efa\u7acb\u8b8a\u6578\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u6642\u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u800c\u5efa\u7acb\u51fd\u5f0f\u5ba3\u544a\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u6642\uff0c\u9810\u8a2d\u503c\u70ba\u51fd\u5f0f\u5ba3\u544a\u672c\u8eab\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u57f7\u884c\uff08execution\uff09"),"\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u9010\u884c\u57f7\u884c\u7a0b\u5f0f\u6642"),"\uff0c\u6839\u64da\u57f7\u884c\u7684\u7a0b\u5f0f\u78bc\u9032\u884c\u7d66\u503c\u3002")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u65b9\u7a0b\u5f0f\u78bc\u70ba\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log(a); // undefined\nvar a = 1;\n\nlogName(); // jordan\nfunction logName() {\n  console.log('jordan');\n}\n")),(0,r.kt)("p",null,"JavaScript \u7de8\u8b6f\u7684\u904e\u7a0b\u70ba\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5275\u9020\u968e\u6bb5\uff1a"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),"\uff0c\u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"logName"),"\uff0c\u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u51fd\u5f0f\u5ba3\u544a\u672c\u8eab\u3002")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u57f7\u884c\u968e\u6bb5\uff1a"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log(a)")," \u5370\u51fa ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u56e0\u7232 ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," \u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"var a = 1")," \u8ce6\u4e88\u8b8a\u6578 ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," \u521d\u59cb\u503c 1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u57f7\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"logName()"),"\u5370\u51fa jordan\uff0c\u56e0\u7232 ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u672c\u8eab\u3002")),(0,r.kt)("h3",{id:"\u5e38\u898b\u554f\u984c"},"\u5e38\u898b\u554f\u984c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7d50\u679c\u5224\u8b80")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"b();\nconsole.log(a);\n\nfunction b() {\n  console.log('b');\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Answer\uff1a")),(0,r.kt)("p",{parentName:"li"},"undefined \u548c not defined \u662f\u4e0d\u4e00\u6a23\u7684\uff0cundefined \u662f\u4e00\u500b\u503c\uff0cnot defined \u5247\u662f\u6c92\u6709\u5b9a\u7fa9\u904e\u9019\u500b\u8b8a\u6578\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// b\n// ReferenceError: a is not defined\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7d50\u679c\u5224\u8b80")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"let a = 1;\n{\n  console.log(a);\n  let a = 2;\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Answer\uff1a")),(0,r.kt)("p",{parentName:"li"},"\u7531\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," \u70ba block scope\uff0c\u5728\u5275\u9020\u968e\u6bb5\u6703\u5efa\u7acb\u4e00\u500b\u5168\u57df\u8b8a\u6578 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u4e5f\u6703\u5efa\u7acb\u4e00\u500b block ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u5728\u57f7\u884c\u968e\u6bb5\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log(a)")," \u6642\uff0c\u7531\u65bc\u66ab\u6642\u6027\u6b7b\u5340\u7684\u95dc\u4fc2\uff0cblock ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u5c1a\u672a\u88ab\u7d66\u4e88\u521d\u59cb\u503c\uff0c\u56e0\u6b64\u6703\u62cb\u51fa Reference Error \u7684\u932f\u8aa4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7d50\u679c\u5224\u8b80")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"var logName = function () {\n  console.log('jordan');\n};\n\nfunction logName() {\n  console.log('john');\n}\n\nlogName();\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Answer\uff1a")),(0,r.kt)("p",{parentName:"li"},"\u5728\u700f\u89bd\u5668\u7684\u60c5\u6cc1\u4e0b"),(0,r.kt)("p",{parentName:"li"},"\u5275\u9020\u968e\u6bb5\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u8b8a\u6578 ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," \u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u51fd\u6578 ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u672c\u8eab\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u51fd\u6578\u5ba3\u544a\u5f0f\u6b0a\u91cd\u6bd4\u8b8a\u6578\u5ba3\u544a\u9ad8\uff0c\u56e0\u6b64\u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u7684\u9810\u8a2d\u503c\u70ba\u51fd\u5f0f\u5ba3\u544a",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u672c\u8eab")),(0,r.kt)("p",{parentName:"li"},"\u57f7\u884c\u968e\u6bb5\uff1a"),(0,r.kt)("ol",{parentName:"li",start:4},(0,r.kt)("li",{parentName:"ol"},"\u7d66\u4e88 ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u521d\u59cb\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"function () { console.log('jordan'); }")),(0,r.kt)("li",{parentName:"ol"},"\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"logName()")," \u4e26\u5370\u51fa ",(0,r.kt)("inlineCode",{parentName:"li"},"jordan"))))),(0,r.kt)("p",null,"\u53c3\u8003\u4f86\u6e90\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pjchender.blogspot.com/2015/12/javascript-hoisting.html"},"https://pjchender.blogspot.com/2015/12/javascript-hoisting.html")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting"},"https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting"))))}k.isMDXComponent=!0}}]);