"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),s=a,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},i="Virtual DOM",o={unversionedId:"React/virtual-dom/index",id:"React/virtual-dom/index",title:"Virtual DOM",description:"\u5728\u8aaa\u660e\u5230 Virtual DOM \u4e4b\u524d\uff0c\u6211\u5011\u5148\u4f86\u7406\u89e3\u4e00\u4e0b\u5b83\u8207 DOM \u4e4b\u9593\u7684\u5dee\u7570",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/React/virtual-dom/index.md",sourceDirName:"React/virtual-dom",slug:"/React/virtual-dom/",permalink:"/frontendwiz/en/React/virtual-dom/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/virtual-dom/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React + TypeScript",permalink:"/frontendwiz/en/React/typescript/"},next:{title:"Conditional Types",permalink:"/frontendwiz/en/TypeScript/conditional-types"}},p={},u=[{value:"\u4ec0\u9ebc\u662f DOM",id:"\u4ec0\u9ebc\u662f-dom",level:3},{value:"Web Documents",id:"web-documents",level:4},{value:"\u4ec0\u9ebc\u662f Virtual DOM",id:"\u4ec0\u9ebc\u662f-virtual-dom",level:3},{value:"Diffing \u6f14\u7b97\u6cd5",id:"diffing-\u6f14\u7b97\u6cd5",level:4},{value:"\u4f7f\u7528 Virtual DOM \u7684 framework/library",id:"\u4f7f\u7528-virtual-dom-\u7684-frameworklibrary",level:4}],c={toc:u},m="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"virtual-dom"},"Virtual DOM"),(0,a.kt)("p",null,"\u5728\u8aaa\u660e\u5230 Virtual DOM \u4e4b\u524d\uff0c\u6211\u5011\u5148\u4f86\u7406\u89e3\u4e00\u4e0b\u5b83\u8207 DOM \u4e4b\u9593\u7684\u5dee\u7570"),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u662f-dom"},"\u4ec0\u9ebc\u662f DOM"),(0,a.kt)("p",null,"DOM (Document Object Model / \u6587\u4ef6\u7269\u4ef6\u6a21\u578b)\uff1a\u63cf\u8ff0 ",(0,a.kt)("a",{parentName:"p",href:"#web-documents"},"Web Documents")," \u7684\u7269\u4ef6\u3002",(0,a.kt)("br",null),"\nDOM tree\uff1a\u700f\u89bd\u5668\u89e3\u6790 ",(0,a.kt)("a",{parentName:"p",href:"#web-documents"},"Web Documents")," \u5f8c\u6240\u751f\u6210\u7684\u4e00\u500b\u6a39\u72c0\u7d50\u69cb\uff0c\u5176\u4e2d\u6bcf\u500b\u7bc0\u9ede\u4ee3\u8868\u7db2\u9801\u6587\u6a94\u4e2d\u7684\u4e00\u500b\u5143\u7d20\u3001\u5c6c\u6027\u6216\u6587\u5b57\u3002",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:r(7790).Z,width:"486",height:"266"})),(0,a.kt)("p",null,"Shadow DOM\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u70ba\u700f\u89bd\u5668\u5c01\u88dd\u6a19\u8a18\u3001\u6a23\u5f0f\u8207\u7d50\u69cb\u7684\u6280\u8853"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u96b1\u85cf\u539f\u5148 DOM \u7684\u7d30\u7bc0\uff0c\u4f8b\u5982")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input type="range" />\n\n<input type="date" />\n')),(0,a.kt)("h4",{id:"web-documents"},"Web Documents"),(0,a.kt)("p",null,"\u70ba\u767c\u5e03\u5230 ",(0,a.kt)("strong",{parentName:"p"},"World Wide Web (WWW)")," \u5e95\u4e0b\u4e26\u53ef\u900f\u904e\u700f\u89bd\u5668\u9020\u8a2a\u7684\u6587\u4ef6",(0,a.kt)("br",null),"\n\u901a\u5e38\u4ee5 HTML \u63cf\u8ff0\uff0c\u5305\u542b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTML / CSS"),(0,a.kt)("li",{parentName:"ul"},"JavaScript"),(0,a.kt)("li",{parentName:"ul"},"XML"),(0,a.kt)("li",{parentName:"ul"},"Images"),(0,a.kt)("li",{parentName:"ul"},"Videos")),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u662f-virtual-dom"},"\u4ec0\u9ebc\u662f Virtual DOM"),(0,a.kt)("p",null,"Virtual DOM (VDOM) \u662f\u4e00\u7a2e\u6280\u8853\uff0c\u5b83\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"#diffing-%E6%BC%94%E7%AE%97%E6%B3%95"},"Diffing \u6f14\u7b97\u6cd5")," \u6bd4\u8f03\u865b\u64ec DOM \u7684\u524d\u5f8c\u72c0\u614b\uff0c\u53ea\u5c07\u5dee\u7570\u90e8\u5206\u66f4\u65b0\u5230\u771f\u5be6 DOM\uff0c\u4ee5\u63d0\u9ad8\u7db2\u9801\u6548\u80fd",(0,a.kt)("br",null),"\n\u6b64\u6982\u5ff5\u6700\u65e9\u7531 ",(0,a.kt)("strong",{parentName:"p"},"React")," \u5be6\u73fe",(0,a.kt)("br",null),"\n\u9019\u500b\u900f\u904e ",(0,a.kt)("a",{parentName:"p",href:"#diffing-%E6%BC%94%E7%AE%97%E6%B3%95"},"Diffing \u6f14\u7b97\u6cd5")," \u6bd4\u5c0d\u7684\u904e\u7a0b\u7a31\u70ba ",(0,a.kt)("strong",{parentName:"p"},"reconciliation"),"\uff0c\u5305\u542b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5275\u5efa\u65b0\u7684\u865b\u64ec DOM tree"),(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u8f03\u65b0\u820a\u865b\u64ec DOM tree \u4e26\u627e\u5c0b\u5dee\u7570"),(0,a.kt)("li",{parentName:"ul"},"\u5c07\u5dee\u7570\u7684\u7d50\u679c\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"li"},"react-dom")," \u66f4\u65b0\u81f3\u771f\u5be6 DOM tree \u4e0a")),(0,a.kt)("h4",{id:"diffing-\u6f14\u7b97\u6cd5"},"Diffing \u6f14\u7b97\u6cd5"),(0,a.kt)("p",null,"\u6bd4\u8f03\u5169\u68f5 tree \u7684 root element",(0,a.kt)("br",null),"\n\u82e5 root element \u70ba ",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u985e\u578b\u7684 element")," \u6642\u5247\u76f4\u63a5\u92b7\u6bc0\u4e26\u5efa\u7acb\u65b0\u7684 tree\uff0c\u4f8b\u5982",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<a>")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"<img>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<img>")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"<Button>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Button>")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"li"},"<a>"),(0,a.kt)("br",null))),(0,a.kt)("p",null,"\u5c31\u7b97\u5305\u88f9\u7684\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u540c\u985e\u578b\u7684 element"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"React")," \u4ecd\u6703\u8996\u70ba ",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u985e\u578b\u7684 element")," \u800c\u5efa\u7acb\u65b0\u7684 tree\uff0c\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u5f9e\n<div>\n  <Counter />\n</div>\n\n// \u8b8a\u6210\n<span>\n  <Counter />\n</span>\n")),(0,a.kt)("p",null,"\u82e5\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u540c\u985e\u578b\u7684 element")," \u4e14\u53ea\u6709 attribute \u8b8a\u66f4\uff0c",(0,a.kt)("strong",{parentName:"p"},"React")," \u5247\u6703\u4fdd\u7559 DOM \u7bc0\u9ede\uff0c\u53ea\u7570\u52d5\u8a72 attribute\uff0c\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// \u5f9e\n<div className="before" title="stuff" />\n\n// \u8b8a\u6210\n<div className="after" title="stuff" />\n')),(0,a.kt)("h4",{id:"\u4f7f\u7528-virtual-dom-\u7684-frameworklibrary"},"\u4f7f\u7528 Virtual DOM \u7684 framework/library"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://zh-hant.reactjs.org/"},"React")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://vuejs.org/"},"Vue"))),(0,a.kt)("p",null,"\u53c3\u8003\u4f86\u6e90:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://zh-hant.reactjs.org/docs/faq-internals.html"},"https://zh-hant.reactjs.org/docs/faq-internals.html")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"},"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document"},"https://developer.mozilla.org/en-US/docs/Web/API/Document"))))}d.isMDXComponent=!0},7790:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/gif;base64,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"}}]);