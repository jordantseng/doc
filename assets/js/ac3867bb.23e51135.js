"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l="CORS",i={unversionedId:"\u700f\u89bd\u5668/CORS",id:"\u700f\u89bd\u5668/CORS",title:"CORS",description:"\u5728\u4e86\u89e3\u4ec0\u9ebc\u662f CORS \u524d\uff0c\u6211\u5011\u9700\u8981\u5148\u77e5\u9053\u4ec0\u9ebc\u662f protocol\u3001domain\u3001port\uff0c\u4e26\u5b78\u6703\u5224\u65b7\u5169\u500b url \u662f\u5426\u540c\u6e90\u3002",source:"@site/docs/\u700f\u89bd\u5668/CORS.md",sourceDirName:"\u700f\u89bd\u5668",slug:"/\u700f\u89bd\u5668/CORS",permalink:"/frontendwiz/\u700f\u89bd\u5668/CORS",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u700f\u89bd\u5668/CORS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5be6\u4f5c Throttle",permalink:"/frontendwiz/\u5e38\u898b\u624b\u5beb\u984c/throttle"},next:{title:"XSS",permalink:"/frontendwiz/\u700f\u89bd\u5668/XSS"}},p={},s=[{value:"\u4ec0\u9ebc\u662f\u540c\u6e90",id:"\u4ec0\u9ebc\u662f\u540c\u6e90",level:3},{value:"\u4ec0\u9ebc\u662f protocol \u3001domain \u3001 port",id:"\u4ec0\u9ebc\u662f-protocol-domain--port",level:3},{value:"\u4ec0\u9ebc\u662f<strong>\u540c\u6e90\u653f\u7b56 (same-origin policy)</strong>",id:"\u4ec0\u9ebc\u662f\u540c\u6e90\u653f\u7b56-same-origin-policy",level:3},{value:"CORS (Cross-Origin Resource Sharing)",id:"cors-cross-origin-resource-sharing",level:3},{value:"\u5982\u4f55\u89e3\u6c7a CORS",id:"\u5982\u4f55\u89e3\u6c7a-cors",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cors"},"CORS"),(0,o.kt)("p",null,"\u5728\u4e86\u89e3\u4ec0\u9ebc\u662f CORS \u524d\uff0c\u6211\u5011\u9700\u8981\u5148\u77e5\u9053\u4ec0\u9ebc\u662f protocol\u3001domain\u3001port\uff0c\u4e26\u5b78\u6703\u5224\u65b7\u5169\u500b url \u662f\u5426\u540c\u6e90\u3002"),(0,o.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u540c\u6e90"},"\u4ec0\u9ebc\u662f\u540c\u6e90"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u540c\u6e90\u5fc5\u9808\u7b26\u5408\u4ee5\u4e0b\u4e09\u8005\u689d\u4ef6\uff1a")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u540c\u901a\u8a0a\u5354\u5b9a\uff08protocol\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u540c\u7db2\u57df\uff08domain\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u540c\u901a\u8a0a\u57e0\uff08port\uff09")),(0,o.kt)("h3",{id:"\u4ec0\u9ebc\u662f-protocol-domain--port"},"\u4ec0\u9ebc\u662f protocol \u3001domain \u3001 port"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"https://jordantseng.github.io/frontendwiz/JavaScript"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"protocol \uff08\u5354\u5b9a\uff09: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://")),(0,o.kt)("li",{parentName:"ul"},"domain \uff08\u7db2\u57df\uff09: ",(0,o.kt)("inlineCode",{parentName:"li"},"jordantseng.github.io")),(0,o.kt)("li",{parentName:"ul"},"path\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"frontendwiz/JavaScript"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"protocol\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"http://")),(0,o.kt)("li",{parentName:"ul"},"domain\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost")),(0,o.kt)("li",{parentName:"ul"},"port\uff08\u901a\u8a0a\u57e0\uff09\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"3000"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u4ee5 https://jordantseng.github.io/frontendwiz/JavaScript \u70ba\u4f8b\uff1a\n\nhttps://jordantseng.github.com // \u4e0d\u540c\u7db2\u57df\uff08domain\uff09\uff0c\u975e\u540c\u6e90\nhttp://jordantseng.github.io // \u4e0d\u540c\u901a\u8a0a\u5354\u5b9a\uff08protocol\uff09\uff0c\u975e\u540c\u6e90\nhttps://jordantseng.github.io:5000 // \u4e0d\u540c\u901a\u8a0a\u57e0\uff08port\uff09\uff0c\u975e\u540c\u6e90\nhttps://jordantseng.github.io/frontendwiz // \u540c\u6e90\n")),(0,o.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u540c\u6e90\u653f\u7b56-same-origin-policy"},"\u4ec0\u9ebc\u662f",(0,o.kt)("strong",{parentName:"h3"},"\u540c\u6e90\u653f\u7b56 (same-origin policy)")),(0,o.kt)("p",null,"\u700f\u89bd\u5668\u7684\u540c\u6e90\u653f\u7b56\u662f\u6700\u57fa\u672c\u7684\u4fdd\u8b77\u6a5f\u5236\uff0c\u8b93",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u540c\u6e90\u7684\u7db2\u7ad9\u7121\u6cd5\u5b58\u53d6\u5230\u8cc7\u6e90\u548c\u8cc7\u6599\uff0c"),"\u9019\u500b",(0,o.kt)("strong",{parentName:"p"},"\u963b\u64cb\u6a5f\u5236\u662f\u5728\u700f\u89bd\u5668\u6536\u5230\u4f3a\u670d\u5668\u56de\u61c9\u5f8c\u767c\u751f\u7684"),"\u3002\u56e0\u6b64\u900f\u904e fetch \u6216 XMLHttpRequest \u5b58\u53d6\u8cc7\u6e90\u6642\uff0c\u5fc5\u9808\u9075\u5b88",(0,o.kt)("strong",{parentName:"p"},"\u540c\u6e90\u653f\u7b56"),"\u3002"),(0,o.kt)("h3",{id:"cors-cross-origin-resource-sharing"},"CORS (Cross-Origin Resource Sharing)"),(0,o.kt)("p",null,"\u5be6\u52d9\u4e0a\uff0c\u6211\u5011\u7d93\u5e38\u6703\u9700\u8981\u8acb\u6c42\u975e\u540c\u6e90\u7684\u8cc7\u6e90\uff0c\u9019\u6642\u5019\u5c31\u5fc5\u9808\u900f\u904e CORS \u4f86\u9054\u6210\u3002"),(0,o.kt)("p",null,"\u7576\u8981\u7372\u53d6\u7684\u8cc7\u6e90",(0,o.kt)("strong",{parentName:"p"},"\u975e\u540c\u6e90"),"\u6642\uff0c\u700f\u89bd\u5668\u6703\u81ea\u52d5\u767c\u8d77\u4e00\u500b\u8de8\u57df (CORS) \u8acb\u6c42\uff0c\u900f\u904e\u4f3a\u670d\u5668\u7aef HTTP \u6a19\u982d (Header) \u4f86\u544a\u8a34\u700f\u89bd\u5668\u8a72\u4f86\u6e90\u662f\u5426\u5141\u8a31\u88ab\u8a2a\u554f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2757 \u5982\u679c\u4f3a\u670d\u5668\u6c92\u6709\u505a\u4efb\u4f55\u963b\u64cb\u4e14\u56de\u50b3\u7d50\u679c\uff0c\u700f\u89bd\u5668\u7aef\u5176\u5be6\u662f\u6703\u6536\u5230\u56de\u61c9\u7684\uff0c\u4f46\u56e0\u70ba\u9055\u53cd\u540c\u6e90\u653f\u7b56\uff0c\u700f\u89bd\u5668\u6703\u6514\u622a\u9019\u500b\u56de\u61c9\u4e26\u5831\u932f\u3002\n")),(0,o.kt)("p",null,"CORS \u53c8\u5206\u70ba",(0,o.kt)("strong",{parentName:"p"},"\u7c21\u55ae\u8acb\u6c42"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u9810\u6aa2\u8acb\u6c42"),"\u5169\u7a2e\u985e\u578b\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7c21\u55ae\u8acb\u6c42\uff08Simple requests\uff09")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"GET"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"HEAD"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," \u7684\u65b9\u6cd5\u6642\u6703\u662f",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests"},"\u7c21\u55ae\u8acb\u6c42(Simple requests)"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7c21\u55ae\u8acb\u6c42\u700f\u89bd\u5668\u6703\u76f4\u63a5\u5c0d\u4f3a\u670d\u5668\u7aef\u767c\u9001\u8acb\u6c42\uff0c\u4e26\u81ea\u52d5\u5728 header \u4e2d\u7684 origin \u5e36\u4e0a\u4f86\u6e90\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f3a\u670d\u5668\u7684\u56de\u61c9\u6703\u5728 header \u4e2d\u7684 \xa0",(0,o.kt)("strong",{parentName:"p"},"Access-Control-Allow-Origin")," \u52a0\u4e0a\u5141\u8a31\u7684\u4f86\u6e90\uff0c\u6216\u662f\u4f7f\u7528\u661f\u865f\u4f86\u4ee3\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u5982\u679c\u8981\u5141\u8a31\u6240\u6709\u8de8\u57df\u4f86\u6e90\u7684\u8acb\u6c42\uff0c\u53ef\u4ee5\u7528\u661f\u865f\nAccess-Control-Allow-Origin:\uff0a\n\n// \u5982\u679c\u8981\u5141\u8a31\u7279\u5b9a\u4f86\u6e90\u7684\u8de8\u57df\u8acb\u6c42\uff0c\u53ef\u4ee5\u76f4\u63a5\u653e\u5165\u8a72\u4f86\u6e90\nAccess-Control-Allow-Origin: https://jordantseng.github.io\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u9810\u6aa2\u8acb\u6c42(Preflighted requests)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53ea\u8981\u4e0d\u7b26\u5408\u7c21\u55ae\u8acb\u6c42\u7684\u689d\u4ef6\uff0c\u700f\u89bd\u5668\u90fd\u6703\u5148\u505a\u4e00\u6b21 HTTP \u8acb\u6c42\uff0c\u7a31\u4e4b\u70ba",(0,o.kt)("strong",{parentName:"p"},"\u9810\u6aa2\u8acb\u6c42(preflight)"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9810\u6aa2\u8acb\u6c42\u7684\u65b9\u6cd5\u662f \xa0",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"OPTIONS")),"\uff0c\u4e00\u65e6\u9810\u6aa2\u8acb\u6c42\u6210\u529f\u5b8c\u6210\uff0c\u771f\u6b63\u7684\u8acb\u6c42\u624d\u6703\u88ab\u9001\u51fa\u3002"))),(0,o.kt)("p",null,"\u6709\u4e9b\u4eba\u53ef\u80fd\u6703\u60f3\u70ba\u4ec0\u9ebc\u9700\u8981\u9810\u6aa2\u8acb\u6c42\uff1f \u5728\u6b63\u5f0f\u6c42\u8acb\u524d\u591a\u4e00\u6b21\u8acb\u6c42\uff0c\u9019\u6a23\u4e0d\u662f\u5f88\u6d6a\u8cbb\u8cc7\u6e90\u55ce \ud83e\udd14"),(0,o.kt)("p",null,"\u540c\u6e90\u653f\u7b56\u53ea\u6703\u64cb\u56de\u61c9\uff0c\u4e0d\u6703\u64cb\u8acb\u6c42\uff0c\u6240\u4ee5\u5047\u5982\u67d0\u500b\u60e1\u610f\u653b\u64ca\u8005\u767c\u9001 ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," \u7684\u8acb\u6c42\uff0c\u540c\u6e90\u653f\u7b56\u4e0d\u6703\u64cb\u4e0b\u9019\u500b\u8acb\u6c42 \uff08\u5982\u679c\u8a72\u8acb\u6c42\u5f8c\u6709\u56de\u61c9\uff0c\u56de\u61c9\u7684\u90e8\u5206\u624d\u6703\u64cb\u4e0b\uff09\uff0c\u63db\u53e5\u8a71\u8aaa\u5982\u679c\u6c92\u6709\u591a\u4e00\u5c64\u904e\u6ffe\uff0c\u60e1\u610f\u653b\u64ca\u8005\u4efb\u610f\u767c ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," \u8acb\u6c42\uff0c\u5c31\u53ef\u80fd\u4efb\u610f\u522a\u6389\u4f3a\u670d\u5668\u7aef\u7684\u8cc7\u6e90\u3002"),(0,o.kt)("p",null,"\u6709\u4e86\u9810\u6aa2\u8acb\u6c42\uff0c\u7b49\u65bc\u662f\u591a\u4e00\u5c64\u904e\u6ffe\uff0c\u7576\u9810\u6aa2\u8acb\u6c42\u901a\u904e\u4e86\uff0c\u624d\u6703\u5c0d\u4f3a\u670d\u5668\u767c\u9001\u771f\u6b63\u7684\u8acb\u6c42\u3002"),(0,o.kt)("h3",{id:"\u5982\u4f55\u89e3\u6c7a-cors"},"\u5982\u4f55\u89e3\u6c7a CORS"),(0,o.kt)("p",null,"\u7d50\u8ad6\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u8acb\u5f8c\u7aef\u5de5\u7a0b\u5e2b\u5728\u4f3a\u670d\u5668\u7aef\u505a")," CORS \u6a19\u982d\u7684\u8a2d\u5b9a"),(0,o.kt)("p",null,"\u9047\u5230 CORS \u7684\u554f\u984c\uff0c\u53ef\u4ee5\u6b78\u7d0d\u51fa\u9019\u6a23\u7684 SOP\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5148\u8a8d\u6e05\u695a\u662f\u5426\u70ba\u300c\u7c21\u55ae\u300d\u7684\u8de8\u4f86\u6e90\u8acb\u6c42\uff0c\u5982\u679c\u662f\uff0c\u5728\u5f8c\u7aef GET/POST/HEAD \u65b9\u6cd5\u672c\u8eab\u52a0\u4e0a \xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin"),"\xa0header\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u975e\u300c\u7c21\u55ae\u300d\u8de8\u4f86\u6e90\u8acb\u6c42\uff0c\u5728\u5f8c\u7aef OPTIONS \u52a0\u4e0a \xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Methods"),"\xa0 \u53ca \xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Headers"),"\xa0header\u3002\u53e6\u5916\uff0c\u5728\u5f8c\u7aef\u65b9\u6cd5\u672c\u8eab\u52a0\u4e0a \xa0",(0,o.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin"),"\xa0header\u3002")),(0,o.kt)("p",null,"\u53c3\u8003\u4f86\u6e90\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://shubo.io/what-is-cors/#%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-same-origin-policy"},"https://shubo.io/what-is-cors/#\u540c\u6e90\u653f\u7b56-same-origin-policy")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-cors"},"https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-cors"))))}m.isMDXComponent=!0}}]);