"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[65],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:e},l),{},{components:n})):r.createElement(d,i({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4238:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Factory Pattern",c={unversionedId:"Design Patterns/factory-pattern",id:"Design Patterns/factory-pattern",title:"Factory Pattern",description:"a factory function is a function that create objects and return them.",source:"@site/docs/Design Patterns/factory-pattern.md",sourceDirName:"Design Patterns",slug:"/Design Patterns/factory-pattern",permalink:"/frontendwiz/en/Design Patterns/factory-pattern",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Design Patterns/factory-pattern.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6\u50b3\u905e",permalink:"/frontendwiz/en/DOM/event-propagation/"},next:{title:"\u9589\u5305",permalink:"/frontendwiz/en/JavaScript/closure"}},s={},p=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3}],l={toc:p},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"factory-pattern"},"Factory Pattern"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"a factory function is a function that create objects and return them.")),(0,a.kt)("p",null,"Factory Pattern \u5176\u5be6\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528 factory function \u4f86\u5efa\u7acb\u7269\u4ef6"),"\uff0c\u800c factory function \u70ba",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u500b\u56de\u50b3\u65b0\u7269\u4ef6\u7684 function"),"\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const jordan = {\n  name: 'jordan',\n  age: 18,\n  github: 'https://github.com/jordantseng',\n  talk() {\n    return `Hello, I'm ${this.name}`;\n  },\n};\n\nconst john = {\n  name: 'jordan',\n  age: 18,\n  github: 'https://github.com/OInVein',\n  talk() {\n    return `Hello, I'm ${this.name}`;\n  },\n};\n")),(0,a.kt)("p",null,"jordan \u8207 john \u5206\u5225\u70ba\u5169\u500b\u7269\u4ef6\uff0c\u5305\u542b\u4e86 name, age, github, \u4ee5\u53ca talk\uff0c\n\u6839\u64da Factory Pattern\uff0c\u6211\u5011\u53ef\u4ee5\u5c07\u9019\u4e9b\u8cc7\u8a0a\u8a18\u9304\u5728\u4e00\u500b factory function \u4e2d\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const human = (name, age, github) => ({\n  name,\n  age,\n  github,\n  talk() {\n    return `Hello, I'm ${this.name}`;\n  },\n});\n\nconst jordan = human('jordan', 18, 'https://github.com/jordantseng');\nconst john = human('john', 16, 'https://github.com/OInVein');\n")),(0,a.kt)("h3",{id:"pros"},"Pros"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7576\u6709\u591a\u500b\u76f8\u4f3c\u7684\u5c0f\u7269\u4ef6\u6642\uff0cFactory Pattern \u6703\u975e\u5e38\u597d\u7528"),(0,a.kt)("li",{parentName:"ol"},"\u76f8\u95dc\u8a2d\u5b9a\u96c6\u4e2d\u4e00\u500b function \u7ba1\u7406\uff0c\u9075\u5b88 ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"DRY")," \u539f\u5247")),(0,a.kt)("h3",{id:"cons"},"Cons"),(0,a.kt)("p",null,"\u7531\u65bc factory function \u6bcf\u6b21\u90fd\u662f\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u7269\u4ef6\uff0c\u76f8\u8f03\u65bc\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," \u7684\u65b9\u5f0f\u4f86\u5efa\u7acb\u7269\u4ef6\uff0cfactory function \u65bc\u8a18\u61b6\u9ad4\u4e0a\u6703\u66f4\u52a0\u8017\u80fd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Human {\n  constructor(name, age, github) {\n    this.name = name;\n    this.age = age;\n    this.github = github;\n  }\n\n  talk() {\n    return `Hello, I'm ${this.name}`;\n  }\n}\n\nconst jordan = new Human('jordan', 18, 'https://github.com/jordantseng');\nconst john = new Human('john', 16, 'https://github.com/OInVein');\n")),(0,a.kt)("p",null,"\u53c3\u8003\u4f86\u6e90:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.patterns.dev/posts/factory-pattern"},"https://www.patterns.dev/posts/factory-pattern")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://pjchender.dev/pattern/design-pattern-factory/"},"https://pjchender.dev/pattern/design-pattern-factory/"))))}m.isMDXComponent=!0}}]);