"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=l,v=d["".concat(u,".").concat(g)]||d[g]||s[g]||r;return n?o.createElement(v,a(a({ref:t},c),{},{components:n})):o.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),l=(n(7294),n(3905));const r={},a=void 0,i={unversionedId:"DOM/\u4e8b\u4ef6\u50b3\u905e",id:"DOM/\u4e8b\u4ef6\u50b3\u905e",title:"\u4e8b\u4ef6\u50b3\u905e",description:"TL;DR",source:"@site/docs/DOM/\u4e8b\u4ef6\u50b3\u905e.md",sourceDirName:"DOM",slug:"/DOM/\u4e8b\u4ef6\u50b3\u905e",permalink:"/frontendwiz/DOM/\u4e8b\u4ef6\u50b3\u905e",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DOM/\u4e8b\u4ef6\u50b3\u905e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/frontendwiz/"},next:{title:"Promise",permalink:"/frontendwiz/JavaScript/promise"}},u={},p=[{value:"TL;DR",id:"tldr",level:3},{value:"\u4e8b\u4ef6\u50b3\u905e\u7684\u4e09\u500b\u968e\u6bb5",id:"\u4e8b\u4ef6\u50b3\u905e\u7684\u4e09\u500b\u968e\u6bb5",level:3},{value:"\u4e8b\u4ef6\u6355\u7372\uff08Capturing\uff09",id:"\u4e8b\u4ef6\u6355\u7372capturing",level:3},{value:"\u4e8b\u4ef6\u5192\u6ce1\uff08Bubbling\uff09",id:"\u4e8b\u4ef6\u5192\u6ce1bubbling",level:3},{value:"\u53d6\u6d88\u4e8b\u4ef6\u50b3\u905e (event.stopPropagation)",id:"\u53d6\u6d88\u4e8b\u4ef6\u50b3\u905e-eventstoppropagation",level:3},{value:"\u53d6\u6d88\u9810\u8a2d\u884c\u70ba \uff08event.preventDefault\uff09",id:"\u53d6\u6d88\u9810\u8a2d\u884c\u70ba-eventpreventdefault",level:3},{value:"event.target vs. event.currentTarget",id:"eventtarget-vs-eventcurrenttarget",level:3},{value:"\u4e8b\u4ef6\u4ee3\u7406 \uff08Event Delegation\uff09",id:"\u4e8b\u4ef6\u4ee3\u7406-event-delegation",level:3}],c={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"tldr"},"TL;DR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u50b3\u905e\u53ef\u4ee5\u4f9d\u5e8f\u5206\u70ba\u4e09\u500b\u968e\u6bb5\uff1a\u6355\u7372\uff08Capturing\uff09\u3001\u76ee\u6a19\uff08Target\uff09\u3001\u5192\u6ce1\uff08Bubbling\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event.stopPropagation")," \u7528\u4f86\u53d6\u6d88\u4e8b\u4ef6\u7684\u50b3\u905e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"event.preventDefault")," \u5247\u7528\u4f86\u53d6\u6d88\u700f\u89bd\u5668\u9810\u8a2d\u7684\u884c\u70ba\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event.target")," \u70ba\u89f8\u767c\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"event.currentTarget")," \u70ba\u4e8b\u4ef6\u50b3\u905e\u6642\u89f8\u767c\u4e8b\u4ef6\u7684\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u4ee3\u7406\uff08event delegation\uff09\u662f\u5c07\u4e8b\u4ef6\u8655\u7406\u5668\u7d81\u5b9a\u5230\u7236\u5c64\u5143\u7d20\uff0c\u900f\u904e\u4e8b\u4ef6\u50b3\u905e\u7d71\u4e00\u8655\u7406\u76f8\u540c\u985e\u578b\u7684\u4e8b\u4ef6\u3002")),(0,l.kt)("h3",{id:"\u4e8b\u4ef6\u50b3\u905e\u7684\u4e09\u500b\u968e\u6bb5"},"\u4e8b\u4ef6\u50b3\u905e\u7684\u4e09\u500b\u968e\u6bb5"),(0,l.kt)("p",null,"\u4e8b\u4ef6\u50b3\u905e\u53ef\u4ee5\u5206\u70ba\u4e09\u500b\u968e\u6bb5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6355\u7372\uff08Capturing\uff09\uff1a\u4e8b\u4ef6\u7531",(0,l.kt)("strong",{parentName:"li"},"\u6839\u5143\u7d20\u5f80\u4e0b\u50b3\u905e"),"\uff0c\u76f4\u5230\u627e\u5230\u89f8\u767c\u4e8b\u4ef6\u7684\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u76ee\u6a19\uff08Target\uff09\uff1a\u4e8b\u4ef6\u627e\u5230\u89f8\u767c\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u4e26\u57f7\u884c\u5176\u4e8b\u4ef6\u8655\u7406\u5668\uff08event handler\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5192\u6ce1\uff08Bubbling\uff09\uff1a\u4e8b\u4ef6\u7531",(0,l.kt)("strong",{parentName:"li"},"\u89f8\u767c\u4e8b\u4ef6\u7684\u5143\u7d20\u5f80\u4e0a\u50b3\u905e"),"\uff0c\u76f4\u5230\u56de\u5230\u6839\u5143\u7d20\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"eventflow.png",src:n(5823).Z,width:"640",height:"690"})),(0,l.kt)("h3",{id:"\u4e8b\u4ef6\u6355\u7372capturing"},"\u4e8b\u4ef6\u6355\u7372\uff08Capturing\uff09"),(0,l.kt)("p",null,"\u7531\u6839\u5143\u7d20\u5f80\u4e0b\u627e\u76ee\u6a19\u5143\u7d20\u7684\u904e\u7a0b\u3002"),(0,l.kt)("p",null,"\u7576\u4f7f\u7528 \xa0",(0,l.kt)("inlineCode",{parentName:"p"},"addEventListener(event, handler)"),"\xa0 \u7684\u6642\u5019\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u9810\u8a2d\u53ea\u6703\u76e3\u807d\u4e8b\u4ef6\u50b3\u905e\u7684\u76ee\u6a19\u548c\u5192\u6ce1\u968e\u6bb5"),"\uff0c\u5982\u679c\u8981\u76e3\u807d\u6355\u7372\u968e\u6bb5\uff0c\u5c31\u5fc5\u9808\u5728 \xa0",(0,l.kt)("inlineCode",{parentName:"p"},"addEventListener()"),"\xa0 \u4e2d\u7b2c\u4e09\u500b\u53c3\u6578\u4ee3\u5165 \xa0",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <button>button</button>\n</body>\n\n<script>\n  const body = document.querySelector('body');\n  const button = document.querySelector('button');\n\n  body.addEventListener(\n    'click',\n    function (e) {\n      console.log('body');\n    },\n    true,\n  );\n\n  button.addEventListener(\n    'click',\n    function (e) {\n      console.log('button');\n    },\n    true,\n  );\n\n  // \u7576 button \u88ab\u9ede\u64ca\u6642\uff0c\u7531\u65bc eventListener \u7b2c\u4e09\u500b\u53c3\u6578\u70ba true\n  // \u56e0\u6b64\u5c07\u6703\u76e3\u807d\u6355\u7372\u4e8b\u4ef6\uff0c\u56e0\u6b64\u4f9d\u5e8f\u5370\u51fa body, button\n<\/script>\n")),(0,l.kt)("h3",{id:"\u4e8b\u4ef6\u5192\u6ce1bubbling"},"\u4e8b\u4ef6\u5192\u6ce1\uff08Bubbling\uff09"),(0,l.kt)("p",null,"\u5728\u76ee\u6a19\u968e\u6bb5\u57f7\u884c\u76ee\u6a19\u5143\u7d20\u7684\u4e8b\u4ef6\u8655\u7406\u5668\u5f8c\uff0c\u7531\u76ee\u6a19\u5143\u7d20\u5f80\u4e0a\u50b3\u905e\u81f3\u6839\u5143\u7d20\u7684\u904e\u7a0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<body onclick=\"console.log('body')\">\n  <div onclick=\"console.log('div')\">\n    <button onclick=\"console.log('button')\">button</button>\n  </div>\n</body>\n\n// \u7576 button \u88ab\u9ede\u64ca\u6642\uff0c\u4f9d\u5e8f\u5370\u51fa button div body\n")),(0,l.kt)("h3",{id:"\u53d6\u6d88\u4e8b\u4ef6\u50b3\u905e-eventstoppropagation"},"\u53d6\u6d88\u4e8b\u4ef6\u50b3\u905e (event.stopPropagation)"),(0,l.kt)("p",null,"\u5728\u5be6\u52d9\u4e0a\uff0c\u6211\u5011\u6709\u6642\u5019\u4e0d\u60f3\u8981\u4e8b\u4ef6\u50b3\u905e\uff0c\u53ea\u60f3\u8981\u76ee\u6a19\u5143\u7d20\u7684\u4e8b\u4ef6\u88ab\u89f8\u767c\uff0c\u4e0d\u60f3\u8981\u5176\u4ed6\u5143\u7d20\u7684\u4e8b\u4ef6\u4e5f\u88ab\u89f8\u767c\u3002"),(0,l.kt)("p",null,"\u9019\u6642\u5019\u6211\u5011\u5c31\u53ef\u4ee5\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"event.stopPropagation()"),"\u4f86\u53d6\u6d88\u4e8b\u4ef6\u7684\u50b3\u905e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <button>button</button>\n</body>\n\n<script>\n  const body = document.querySelector('body');\n  const button = document.querySelector('button');\n\n  body.addEventListener('click', function (e) {\n    console.log('body');\n  });\n\n  button.addEventListener('click', function (e) {\n    e.stopPropagation();\n    console.log('button');\n  });\n\n  // \u7576 button \u88ab\u9ede\u64ca\u6642\uff0c\u7531\u65bc e.stopPropagation\uff0c\u4e8b\u4ef6\u5c07\u4e0d\u6703\u7e7c\u7e8c\u5192\u6ce1\uff0c\u56e0\u6b64\u53ea\u6703\u5370\u51fa button\n<\/script>\n")),(0,l.kt)("p",null,"\u2757\ufe0f \u7576\u5728",(0,l.kt)("strong",{parentName:"p"},"\u6355\u7372\u968e\u6bb5\u53d6\u6d88\u4e8b\u4ef6\u50b3\u905e"),"\u6642\uff0c\u5f8c\u7e8c\u7684\u76ee\u6a19\u3001\u5192\u6ce1\u968e\u6bb5\u7686\u4e0d\u6703\u767c\u751f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <button>button</button>\n</body>\n\n<script>\n  const body = document.querySelector('body');\n  const button = document.querySelector('button');\n\n  body.addEventListener(\n    'click',\n    function (e) {\n      e.stopPropagation();\n      console.log('capturing body');\n    },\n    true,\n  );\n\n  button.addEventListener(\n    'click',\n    function (e) {\n      console.log('capturing button');\n    },\n    true,\n  );\n\n  body.addEventListener('click', function (e) {\n    console.log('body');\n  });\n\n  button.addEventListener('click', function (e) {\n    console.log('button');\n  });\n\n  // \u53ea\u6703\u5370\u51fa capturing body\uff0c\u56e0\u70ba\u5728\u6355\u7372\u968e\u6bb5\u5c31\u53d6\u6d88\u4e8b\u4ef6\u5f80\u4e0b\u7e7c\u7e8c\u50b3\u905e\n<\/script>\n")),(0,l.kt)("h3",{id:"\u53d6\u6d88\u9810\u8a2d\u884c\u70ba-eventpreventdefault"},"\u53d6\u6d88\u9810\u8a2d\u884c\u70ba \uff08event.preventDefault\uff09"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"event.preventDefault()"),"\u7d93\u5e38\u8207 ",(0,l.kt)("inlineCode",{parentName:"p"},"event.stopPropagation()")," \u641e\u6df7\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"event.stopPropagation()"),"\u662f\u7528\u4f86\u53d6\u6d88\u4e8b\u4ef6\u7684\u50b3\u905e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"event.preventDefault()"),"\u4e3b\u8981\u662f\u7528\u4f86\u53d6\u6d88\u9810\u8a2d\u7684\u700f\u89bd\u5668\u884c\u70ba\uff0c\u8207\u4e8b\u4ef6\u50b3\u905e\u4e26\u7121\u95dc\u4fc2\u3002"),(0,l.kt)("p",null,"\u5982\u4e0b\u65b9\u7a0b\u5f0f\u78bc\u6240\u793a\uff0c\u7576\u4f7f\u7528\u8005\u9ede\u64ca a \u6a19\u7c64\u7684\u6642\u5019\uff0c\u700f\u89bd\u5668\u9810\u8a2d\u7684\u884c\u70ba\u662f\u8df3\u8f49\u5230\u4e0d\u540c\u7684\u9801\u9762\uff0c\u7136\u800c\u53ef\u4ee5\u900f\u904e",(0,l.kt)("inlineCode",{parentName:"p"},"event.preventDefault()"),"\u4f86\u53d6\u6d88 a \u6a19\u7c64\u8df3\u8f49\u7684\u9810\u8a2d\u884c\u70ba\uff0c\u4f86\u57f7\u884c\u958b\u767c\u4eba\u54e1\u60f3\u8981\u7684\u884c\u70ba\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const link = document.querySelector('a');\n\nlink.addEventListener('click', function (e) {\n  e.preventDefault(); // \u53d6\u6d88\u9810\u8a2d\u884c\u70ba\n  console.log('clicked'); // \u57f7\u884c\u958b\u767c\u4eba\u54e1\u60f3\u8981\u7684\u884c\u70ba\n});\n")),(0,l.kt)("h3",{id:"eventtarget-vs-eventcurrenttarget"},"event.target vs. event.currentTarget"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"event.target")," \u8207 ",(0,l.kt)("inlineCode",{parentName:"p"},"event.currentTarget")," \u4e5f\u662f\u4e00\u500b\u7d93\u5e38\u641e\u6df7\u7684\u6982\u5ff5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event.target"),"\uff1a\u89f8\u767c\u6b64\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u6b64\u5143\u7d20\u5728\u6574\u500b\u5192\u6ce1\u904e\u7a0b\u4e2d\u4e0d\u6703\u6539\u8b8a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event.currentTarget"),"\uff1a\u7d81\u5b9a\u6b64\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u5143\u7d20\u6703\u96a8\u8457\u4e8b\u4ef6\u50b3\u905e\u6539\u8b8a\uff0c\u901a\u5e38\u548c \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"this"),"\xa0 \u6307\u7684\u662f\u540c\u4e00\u500b\u5143\u7d20\u3002")),(0,l.kt)("h3",{id:"\u4e8b\u4ef6\u4ee3\u7406-event-delegation"},"\u4e8b\u4ef6\u4ee3\u7406 \uff08Event Delegation\uff09"),(0,l.kt)("p",null,"\u6355\u7372\u4e8b\u4ef6\u548c\u5192\u6ce1\u4e8b\u4ef6\u5230\u5e95\u6709\u4ec0\u9ebc\u597d\u8655\uff0c\u6709\u4ec0\u9ebc\u61c9\u7528\u55ce \ud83e\udd14"),(0,l.kt)("p",null,"\u8a66\u60f3\u4e00\u500b\u60c5\u5883\uff0c\u5047\u8a2d\u540c\u6642\u6709\u5f88\u591a\u5143\u7d20\u90fd\u6709\u76f8\u540c\u7684\u4e8b\u4ef6\u8981\u8655\u7406\uff0c\u8207\u5176\u5728\u6bcf\u500b\u5143\u7d20\u4e0a\u90fd\u52a0\u4e0a\u4e8b\u4ef6\u8655\u7406\u5668\uff0c\u4e0d\u5982",(0,l.kt)("strong",{parentName:"p"},"\u5229\u7528\u4e8b\u4ef6\u5192\u6ce1\u7684\u7279\u6027\uff0c\u7d71\u4e00\u5728\u5b83\u5011\u7684\u7236\u5c64\u5143\u7d20\u8655\u7406\uff0c"),"\u9019\u5c31\u662f\u4e8b\u4ef6\u4ee3\u7406",(0,l.kt)("strong",{parentName:"p"},"\u3002")),(0,l.kt)("p",null,"\ud83d\udca9 \u5728\u6bcf\u500b\u5143\u7d20\u4e0a\u52a0\u4e0a\u4e8b\u4ef6\u8655\u7406\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ol id="list">\n  <li data-num="1" onClick="console.log(this.dataset.num)">1</li>\n  <li data-num="2" onClick="console.log(this.dataset.num)">2</li>\n  <li data-num="3" onClick="console.log(this.dataset.num)">3</li>\n  <li data-num="4" onClick="console.log(this.dataset.num)">4</li>\n</ol>\n')),(0,l.kt)("p",null,"\u2705 \u5728\u7236\u5c64\u52a0\u4e0a\u4e00\u500b\u4e8b\u4ef6\u8655\u7406\u5668\uff0c\u7d71\u4e00\u8655\u7406\u76f8\u540c\u7684\u4e8b\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ol id="list">\n  <li data-num="1">1</li>\n  <li data-num="2">2</li>\n  <li data-num="3">3</li>\n  <li data-num="4">4</li>\n</ol>\n\n<script>\n  const list = document.getElementById(\'list\');\n\n  list.addEventListener(\'click\', (e) => {\n    const li = e.target;\n\n    // \u6aa2\u67e5 li \u662f\u5426\u5728 list \u88e1\u9762\n    if (!li || !list.contains(li)) return;\n\n    console.log(li.dataset.num);\n  });\n<\/script>\n')),(0,l.kt)("p",null,"\u53c3\u8003\u4f86\u6e90:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/"},"https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://shubo.io/event-bubbling-event-capturing-event-delegation/"},"https://shubo.io/event-bubbling-event-capturing-event-delegation/")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://pjchender.dev/webapis/note-event-capturing-bubbling/"},"https://pjchender.dev/webapis/note-event-capturing-bubbling/"))))}s.isMDXComponent=!0},5823:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/eventflow-bffcde0414ed0e3ad3044129f5a3e990.png"}}]);