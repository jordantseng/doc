"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Function Methods",c={unversionedId:"\u9762\u8a66\u624b\u5beb\u984c/function-methods",id:"\u9762\u8a66\u624b\u5beb\u984c/function-methods",title:"Function Methods",description:"Function.call",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/\u9762\u8a66\u624b\u5beb\u984c/function-methods.md",sourceDirName:"\u9762\u8a66\u624b\u5beb\u984c",slug:"/\u9762\u8a66\u624b\u5beb\u984c/function-methods",permalink:"/frontendwiz/en/\u9762\u8a66\u624b\u5beb\u984c/function-methods",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8a66\u624b\u5beb\u984c/function-methods.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deep Equal",permalink:"/frontendwiz/en/\u9762\u8a66\u624b\u5beb\u984c/deep-equals"},next:{title:"Memoization",permalink:"/frontendwiz/en/\u9762\u8a66\u624b\u5beb\u984c/memoization"}},s={},u=[{value:"Function.call",id:"functioncall",level:3},{value:"Function.apply",id:"functionapply",level:3},{value:"Function.bind",id:"functionbind",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-methods"},"Function Methods"),(0,o.kt)("h3",{id:"functioncall"},"Function.call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'Function.prototype.myCall = function (thisArg, ...args) {\n  // The "this" in this execution context refers to the function that calls myCall\n\n  // Create a unique key using symbol to avoid overriding keys on thisArg\n  const symbol = Symbol();\n\n  // Add "this" to thisArg\n  thisArg[symbol] = this;\n\n  // Invoke the function stored on thisArg and store its return value.\n  const output = thisArg[symbol](...args);\n\n  // Since we modified the passed thisArg, we need to restore it to its original state.\n  delete thisArg[symbol];\n\n  return output;\n};\n')),(0,o.kt)("h3",{id:"functionapply"},"Function.apply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Function.prototype.myApply = function (thisArg, args = []) {\n  return this.myCall(thisArg, ...args);\n};\n")),(0,o.kt)("h3",{id:"functionbind"},"Function.bind"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'Function.prototype.myBind = function (thisArg, ...args) {\n  // An arrow function is used here\n  // because using a regular function would create a new "this" that points to the global object\n  // Arrow functions don\'t have their own "this" binding\n  // instead, they inherit "this" through the scope chain from the function that calls myBind\n  return (...newArgs) => this.myApply(thisArg, [...args, ...newArgs]);\n};\n')))}d.isMDXComponent=!0}}]);