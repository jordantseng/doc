"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[979],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6403:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={},o="\u7de9\u5b58\u6a5f\u5236",l={unversionedId:"\u9762\u8a66\u624b\u5beb\u984c/memoization",id:"\u9762\u8a66\u624b\u5beb\u984c/memoization",title:"\u7de9\u5b58\u6a5f\u5236",description:"\u4ec0\u9ebc\u662f\u7de9\u5b58\uff08Memoization\uff09",source:"@site/docs/\u9762\u8a66\u624b\u5beb\u984c/memoization.md",sourceDirName:"\u9762\u8a66\u624b\u5beb\u984c",slug:"/\u9762\u8a66\u624b\u5beb\u984c/memoization",permalink:"/frontendwiz/\u9762\u8a66\u624b\u5beb\u984c/memoization",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8a66\u624b\u5beb\u984c/memoization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9632\u6296",permalink:"/frontendwiz/\u9762\u8a66\u624b\u5beb\u984c/debounce"},next:{title:"Promise \u65b9\u6cd5",permalink:"/frontendwiz/\u9762\u8a66\u624b\u5beb\u984c/promise-methods"}},c={},u=[{value:"\u4ec0\u9ebc\u662f\u7de9\u5b58\uff08Memoization\uff09",id:"\u4ec0\u9ebc\u662f\u7de9\u5b58memoization",level:3},{value:"\u5be6\u4f5c I",id:"\u5be6\u4f5c-i",level:3},{value:"\u601d\u8def",id:"\u601d\u8def",level:4},{value:"\u5be6\u4f5c II",id:"\u5be6\u4f5c-ii",level:3},{value:"\u601d\u8def",id:"\u601d\u8def-1",level:4}],m={toc:u},p="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7de9\u5b58\u6a5f\u5236"},"\u7de9\u5b58\u6a5f\u5236"),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u7de9\u5b58memoization"},"\u4ec0\u9ebc\u662f\u7de9\u5b58\uff08Memoization\uff09"),(0,a.kt)("p",null,"\u7de9\u5b58\u662f\u4e00\u7a2e\u512a\u5316\u6280\u8853\uff0c\u7528\u4f86\u7de9\u5b58\u51fd\u5f0f\u7684\u8f38\u51fa\u7d50\u679c\uff0c\u4ee5\u4fbf\u5728\u4e0b\u4e00\u6b21\u4f7f\u7528\u76f8\u540c\u7684\u8f38\u5165\u53c3\u6578\u8abf\u7528\u8a72\u51fd\u5f0f\u6642\uff0c\u53ef\u4ee5\u76f4\u63a5\u5f9e\u7de9\u5b58\u4e2d\u8fd4\u56de\u5df2\u7d93\u8a08\u7b97\u904e\u7684\u7d50\u679c\uff0c\u800c\u4e0d\u9700\u8981\u91cd\u65b0\u57f7\u884c\u51fd\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u5be6\u4f5c-i"},"\u5be6\u4f5c I"),(0,a.kt)("p",null,"\u5be6\u4f5c\u4e00\u500b\u7de9\u5b58\u6a5f\u5236\uff0c\u4f7f\u5176\u7b26\u5408\u4e0b\u9762\u7684\u4ee3\u78bc\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"let callCount = 0;\nconst memoizedFn = memoize(function (a, b) {\n  callCount += 1;\n  return a + b;\n});\nmemoizedFn(2, 3); // 5\nmemoizedFn(2, 3); // 5\nconsole.log(callCount); // 1\n")),(0,a.kt)("h4",{id:"\u601d\u8def"},"\u601d\u8def"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u4e00\u500b\u7de9\u5b58\u7269\u4ef6\u4f86\u5b58\u5132\u8a08\u7b97\u904e\u7684\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u8abf\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"memoizedFn"),"\u51fd\u5f0f\u6642\uff0c\u5c07\u50b3\u5165\u7684\u5f15\u6578\u8f49\u63db\u70ba\u5b57\u7b26\u4f5c\u70ba",(0,a.kt)("inlineCode",{parentName:"li"},"key"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6aa2\u67e5\u8a72",(0,a.kt)("inlineCode",{parentName:"li"},"key"),"\u662f\u5426\u5df2\u7d93\u5b58\u5728\u65bc\u7de9\u5b58\u4e2d\u3002\u5982\u679c\u662f\uff0c\u56de\u50b3\u76f8\u95dc\u806f\u7684\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5426\u5247\uff0c\u547c\u53eb\u63d0\u4f9b\u7684\u51fd\u5f0f\uff0c\u5c07\u8f38\u51fa\u7d50\u679c\u5132\u5b58\u5728\u7de9\u5b58\u4e2d\uff0c\u4e26\u56de\u50b3\u8f38\u51fa\u7d50\u679c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function memoize(cb) {\n  // \u521d\u59cb\u5316\u4e00\u500b\u7de9\u5b58\u7269\u4ef6\u4f86\u5b58\u5132\u8a08\u7b97\u904e\u7684\u503c\n  const cache = {};\n\n  // \u5efa\u7acb\u9589\u5305\uff0c\u8b93\u63a5\u4e0b\u4f86\u547c\u53eb\u7684\u51fd\u5f0f\u90fd\u80fd\u53d6\u5f97\u76f8\u540c cache \u7269\u4ef6\n  return function (...args) {\n    // \u5c07\u50b3\u5165\u7684\u5f15\u6578\u8f49\u63db\u70ba\u5b57\u7b26\uff0c\u4e26\u4f5c\u70ba\u7de9\u5b58\u7269\u4ef6\u7684 key\n    const key = JSON.stringify(args);\n\n    // \u6aa2\u67e5\u8a72`key`\u662f\u5426\u5df2\u7d93\u5b58\u5728\u65bc\u7de9\u5b58\u4e2d\n    if (key in cache) {\n      // \u5982\u679c\u662f\uff0c\u56de\u50b3\u76f8\u95dc\u806f\u7684\u503c\n      return cache[key];\n    }\n\n    // \u5426\u5247\uff0c\u547c\u53eb\u63d0\u4f9b\u7684\u51fd\u5f0f\uff0c\u5c07\u8f38\u51fa\u7d50\u679c\u5132\u5b58\u5728\u7de9\u5b58\u4e2d\uff0c\u4e26\u56de\u50b3\u8f38\u51fa\u7d50\u679c\u3002\n    const result = cb.apply(this, args);\n\n    cache[key] = result;\n\n    return result;\n  };\n}\n")),(0,a.kt)("h3",{id:"\u5be6\u4f5c-ii"},"\u5be6\u4f5c II"),(0,a.kt)("p",null,"\u5be6\u4f5c\u4e00\u500b\u7de9\u5b58\u6a5f\u5236\uff0c\u5f15\u6578\u53ef\u4ee5\u63a5\u53d7\u4efb\u4f55\u578b\u5225\uff08Primitive + Reference\uff09\u3002"),(0,a.kt)("h4",{id:"\u601d\u8def-1"},"\u601d\u8def"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"li"},"TrieNode")," \u7bc0\u9ede\uff0c\u6bcf\u500b\u7bc0\u9ede\u5305\u542b\u4e00\u500b\u5b50\u7bc0\u9ede ",(0,a.kt)("inlineCode",{parentName:"li"},"children"),"\uff0c\u4ee5\u53ca\u7528\u4f86\u5132\u5b58\u8a08\u7b97\u904e\u7684\u7d50\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," \u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7531\u65bc ",(0,a.kt)("inlineCode",{parentName:"li"},"Map")," \u7684 key \u53ef\u4ee5\u5132\u5b58\u5b57\u4e32\u4ee5\u5916\u7684\u578b\u5225\uff0c\u56e0\u6b64\u5982\u679c\u50b3\u5165\u7684\u5f15\u6578\u70ba\u7269\u4ef6\u6216\u9663\u5217\uff0c\u53ef\u4ee5\u7528\u4f86\u5224\u65b7\u662f\u5426\u70ba\u540c\u4e00\u500b\u7269\u4ef6\u6216\u9663\u5217\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u51fd\u5f0f\u88ab\u547c\u53eb\u6642\uff0c\u904d\u6b77\u5f15\u6578\uff0c\u4e26\u6aa2\u67e5 ",(0,a.kt)("inlineCode",{parentName:"li"},"children")," \u5167\u662f\u5426\u6709\u8207\u5f15\u6578\u76f8\u540c\u7684 key\uff0c\u5982\u679c\u6c92\u6709\u5247\u5efa\u7acb\u65b0\u7684\u7bc0\u9ede\uff0c\u4e26\u66f4\u65b0\u76ee\u524d\u7684\u7bc0\u9ede\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6aa2\u67e5 ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," \u662f\u5426\u6709\u503c\uff0c\u5982\u6709\u503c\uff0c\u76f4\u63a5\u8fd4\u56de\u8a08\u7b97\u904e\u7684\u503c\uff0c\u5982\u679c\u6c92\u503c\uff0c\u5247\u900f\u904e\u8a72\u5f15\u6578\u8a08\u7b97\u51fa\u7d50\u679c\u4e26\u5132\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"\uff0c\u7136\u5f8c\u56de\u50b3\u7d50\u679c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class TrieNode {\n  constructor() {\n    this.children = new Map();\n    this.value = null;\n  }\n}\n\nfunction memoize(cb) {\n  // \u5efa\u7acb TrieNode \u7528\u4f86\u5132\u5b58\u4e4b\u524d\u8a08\u7b97\u904e\u7684\u7d50\u679c\n  const cache = new TrieNode();\n\n  // \u5efa\u7acb\u9589\u5305\uff0c\u8b93\u63a5\u4e0b\u4f86\u547c\u53eb\u7684\u51fd\u5f0f\u90fd\u80fd\u53d6\u5f97\u76f8\u540c cache \u7269\u4ef6\n  return function (...args) {\n    // \u76ee\u524d\u7684\u7bc0\u9ede\n    let current = cache;\n\n    // \u904d\u6b77\u5f15\u6578\uff0c\u6aa2\u67e5 children \u5167\u662f\u5426\u6709\u8207\u5f15\u6578\u76f8\u540c\u7684 key\n    for (const arg of args) {\n      // \u5982\u679c\u6c92\u6709\u5247\u5efa\u7acb\u65b0\u7684\u7bc0\u9ede\n      if (!current.children.has(arg)) {\n        current.children.set(arg, new TrieNode());\n      }\n\n      // \u66f4\u65b0\u76ee\u524d\u7684\u7bc0\u9ede\n      current = current.children.get(arg);\n    }\n\n    // \u6aa2\u67e5 value \u662f\u5426\u6709\u503c\n    // \u5982\u679c\u6c92\u503c\uff0c\u5247\u900f\u904e\u8a72\u5f15\u6578\u8a08\u7b97\u51fa\u7d50\u679c\u4e26\u5132\u5b58\u5728 value\n    if (current.value == null) {\n      current.value = cb(...args);\n    }\n\n    // \u56de\u50b3\u7d50\u679c\n    return current.value;\n  };\n}\n")))}s.isMDXComponent=!0}}]);