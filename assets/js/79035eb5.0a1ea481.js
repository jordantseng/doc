"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[221],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(u,".").concat(f)]||c[f]||b[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Bubble Sort",l={unversionedId:"\u6f14\u7b97\u6cd5/bubble-sort",id:"\u6f14\u7b97\u6cd5/bubble-sort",title:"Bubble Sort",description:"\u5c07\u8f03\u5927\u7684\u6578\u5b57\u50cf\u5192\u6ce1\u4e00\u6a23\uff0c\u5c07\u5b83\u79fb\u52d5\u5230\u6700\u5f8c\u4e00\u500b index\u3002",source:"@site/docs/\u6f14\u7b97\u6cd5/bubble-sort.md",sourceDirName:"\u6f14\u7b97\u6cd5",slug:"/\u6f14\u7b97\u6cd5/bubble-sort",permalink:"/frontendwiz/\u6f14\u7b97\u6cd5/bubble-sort",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6f14\u7b97\u6cd5/bubble-sort.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git flow",permalink:"/frontendwiz/git/git-flow/"},next:{title:"Insertion Sort",permalink:"/frontendwiz/\u6f14\u7b97\u6cd5/insertion-sort"}},u={},p=[{value:"Bubble Sort \u6b65\u9a5f:",id:"bubble-sort-\u6b65\u9a5f",level:3},{value:"Big O",id:"big-o",level:3},{value:"\u5be6\u4f5c I",id:"\u5be6\u4f5c-i",level:3},{value:"\u5be6\u4f5c II",id:"\u5be6\u4f5c-ii",level:3}],s={toc:p},c="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bubble-sort"},"Bubble Sort"),(0,a.kt)("p",null,"\u5c07\u8f03\u5927\u7684\u6578\u5b57\u50cf\u5192\u6ce1\u4e00\u6a23\uff0c\u5c07\u5b83\u79fb\u52d5\u5230\u6700\u5f8c\u4e00\u500b index\u3002"),(0,a.kt)("h3",{id:"bubble-sort-\u6b65\u9a5f"},"Bubble Sort \u6b65\u9a5f:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f9e\u5217\u8868\u7684\u7b2c\u4e00\u500b\u5143\u7d20\u958b\u59cb\uff0c\u6bd4\u8f03\u5b83\u8207\u4e0b\u4e00\u500b\u5143\u7d20\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u7b2c\u4e00\u500b\u5143\u7d20\u5927\u65bc\u7b2c\u4e8c\u500b\u5143\u7d20\uff0c\u5c31\u4ea4\u63db\u5b83\u5011\u7684\u4f4d\u7f6e\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7e7c\u7e8c\u6bd4\u8f03\u7b2c\u4e8c\u500b\u5143\u7d20\u548c\u7b2c\u4e09\u500b\u5143\u7d20\uff0c\u4ee5\u6b64\u985e\u63a8\uff0c\u76f4\u5230\u5230\u9054\u5217\u8868\u7684\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u6b21\u5b8c\u6574\u7684\u904d\u6b77\u4e4b\u5f8c\uff0c\u5217\u8868\u4e2d\u7684\u6700\u5927\u5143\u7d20\u5df2\u7d93\u88ab\u79fb\u52d5\u5230\u4e86\u5217\u8868\u7684\u672b\u5c3e\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u8907\u4e0a\u8ff0\u6b65\u9a5f\uff0c\u6bcf\u6b21\u904d\u6b77\u90fd\u6703\u5c07\u7576\u524d\u672a\u6392\u5e8f\u90e8\u5206\u4e2d\u7684\u6700\u5927\u5143\u7d20\u79fb\u52d5\u5230\u76f8\u61c9\u4f4d\u7f6e\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u8907\u9019\u500b\u904e\u7a0b\uff0c\u76f4\u5230\u6574\u500b\u5217\u8868\u90fd\u5df2\u7d93\u6392\u597d\u5e8f\u3002"))),(0,a.kt)("h3",{id:"big-o"},"Big O"),(0,a.kt)("p",null,"Time: ",(0,a.kt)("inlineCode",{parentName:"p"},"O(n^2)")),(0,a.kt)("p",null,"Space: ",(0,a.kt)("inlineCode",{parentName:"p"},"O(1)")),(0,a.kt)("h3",{id:"\u5be6\u4f5c-i"},"\u5be6\u4f5c I"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function bubbleSort(nums) {\n  let isSorted = false;\n  for (let i = 0; i < nums.length; i += 1) {\n    isSorted = true;\n\n    for (let j = 0; j < nums.length - 1 - i; j += 1) {\n      if (nums[j] > nums[j + 1]) {\n        swap(nums, j, j + 1);\n        isSorted = false;\n      }\n    }\n\n    if (isSorted) {\n      return nums;\n    }\n  }\n\n  return nums;\n}\n\nfunction swap(array, i, j) {\n  [array[i], array[j]] = [array[j], array[i]];\n}\n")),(0,a.kt)("h3",{id:"\u5be6\u4f5c-ii"},"\u5be6\u4f5c II"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function bubbleSort(array) {\n  let isSorted = false;\n  let count = 0;\n\n  while (!isSorted) {\n    isSorted = true;\n\n    for (let i = 0; i < array.length - 1 - count; i += 1) {\n      if (array[i] > array[i + 1]) {\n        swap(array, i, i + 1);\n        isSorted = false;\n      }\n    }\n\n    count += 1;\n  }\n}\n\nfunction swap(array, i, j) {\n  [array[i], array[j]] = [array[j], array[i]];\n}\n")))}b.isMDXComponent=!0}}]);