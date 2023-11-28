"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[708],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=i,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={},o="Quick Sort",l={unversionedId:"\u6f14\u7b97\u6cd5/quick-sort",id:"\u6f14\u7b97\u6cd5/quick-sort",title:"Quick Sort",description:"\u6b65\u9a5f",source:"@site/docs/\u6f14\u7b97\u6cd5/quick-sort.md",sourceDirName:"\u6f14\u7b97\u6cd5",slug:"/\u6f14\u7b97\u6cd5/quick-sort",permalink:"/frontendwiz/en/\u6f14\u7b97\u6cd5/quick-sort",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6f14\u7b97\u6cd5/quick-sort.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Merge Sort",permalink:"/frontendwiz/en/\u6f14\u7b97\u6cd5/merge-sort"},next:{title:"Selection Sort",permalink:"/frontendwiz/en/\u6f14\u7b97\u6cd5/selection-sort"}},c={},p=[{value:"\u6b65\u9a5f",id:"\u6b65\u9a5f",level:3},{value:"Big O",id:"big-o",level:3},{value:"\u5be6\u4f5c I",id:"\u5be6\u4f5c-i",level:3},{value:"\u5be6\u4f5c II",id:"\u5be6\u4f5c-ii",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-sort"},"Quick Sort"),(0,i.kt)("h3",{id:"\u6b65\u9a5f"},"\u6b65\u9a5f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9078\u64c7\u6a1e\u7d10: \u5f9e\u6578\u5217\u4e2d\u9078\u64c7\u4e00\u500b\u5143\u7d20\u4f5c\u70ba\u6a1e\u7d10 (pivot)\u3002\u6a1e\u7d10\u7684\u9078\u64c7\u6703\u5f71\u97ff\u6392\u5e8f\u7684\u6548\u7387\uff0c\u56e0\u6b64\u9078\u64c7\u4e00\u500b\u9069\u7576\u7684 pivot \u5c0d\u65bc\u7b97\u6cd5\u7684\u6027\u80fd\u81f3\u95dc\u91cd\u8981\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5206\u5272\u6578\u5217 (partition): \u5c07\u6578\u5217\u6839\u64da pivot \u5206\u6210\u5169\u500b\u5b50\u6578\u5217\u3002\u5c07\u5c0f\u65bc pivot \u503c\u7684\u5143\u7d20\u653e\u5165\u5de6\u5b50\u6578\u5217\uff0c\u5927\u65bc\u7b49\u65bc pivot \u503c\u7684\u5143\u7d20\u653e\u5165\u53f3\u5b50\u6578\u5217\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u905e\u8ff4: \u5c0d\u5206\u5272\u5f8c\u7684\u5de6\u5b50\u6578\u5217\u548c\u53f3\u5b50\u6578\u5217\u9032\u884c\u905e\u8ff4\u6392\u5e8f\u3002\u905e\u8ff4\u6392\u5e8f\u7684\u904e\u7a0b\u6703\u5c0d\u5b50\u6578\u5217\u9032\u884c\u518d\u6b21 pivot \u9078\u64c7\u3001\u5206\u5272\u548c\u905e\u8ff4\u8655\u7406\u3002\u901a\u904e\u4e0d\u65b7\u5730\u905e\u8ff4\u8655\u7406\u5b50\u6578\u5217\uff0c\u6700\u7d42\uff0c\u6bcf\u500b\u5b50\u6578\u5217\u6703\u8b8a\u5f97\u8d8a\u4f86\u8d8a\u5c0f\uff0c\u76f4\u81f3\u53ea\u5269\u4e0b\u4e00\u500b\u5143\u7d20\uff0c\u6b64\u6642\u6574\u500b\u6578\u5217\u5c31\u5b8c\u6210\u4e86\u6392\u5e8f\u3002"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"pivot \u7684\u9078\u64c7\u53ef\u4ee5\u70ba\u4efb\u610f\u7684\u6578\u5b57\uff0c\u4e0d\u904e\u9078\u64c7\u7684 pivot \u70ba\u4e2d\u4f4d\u6578\u6642\u6703\u6709\u6700\u597d\u7684\u6548\u7387\u3002")),(0,i.kt)("h3",{id:"big-o"},"Big O"),(0,i.kt)("p",null,"Time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Average: ",(0,i.kt)("inlineCode",{parentName:"li"},"O(nlog(n))")),(0,i.kt)("li",{parentName:"ul"},"Worst: ",(0,i.kt)("inlineCode",{parentName:"li"},"O(n^2)"))),(0,i.kt)("p",null,"\u7576\u9078\u64c7\u7684\u6a1e\u7d10\u70ba\u8a72\u6578\u5217\u6700\u5c0f\u6216\u8005\u6700\u5927\u7684\u503c\u6642\uff0c\u56e0\u70ba\u7121\u6cd5\u5229\u7528\u5c07\u6578\u7d44\u5206\u5272\u6210\u5169\u500b\u90e8\u5206\uff0c\u56e0\u6b64\u6709\u6700\u5dee\u7684\u6642\u9593\u8907\u96dc\u5ea6\u3002"),(0,i.kt)("p",null,"Space:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Average: ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"Worst: ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))"))),(0,i.kt)("h3",{id:"\u5be6\u4f5c-i"},"\u5be6\u4f5c I"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function quickSort(array) {\n  if (array.length < 2) {\n    return array;\n  }\n\n  const left = [];\n  const pivot = array[array.length - 1];\n  const right = [];\n\n  for (let i = 0; i < array.length - 1; i += 1) {\n    const current = array[i];\n    if (current < pivot) {\n      left.push(current);\n    } else {\n      right.push(current);\n    }\n  }\n\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}\n")),(0,i.kt)("h3",{id:"\u5be6\u4f5c-ii"},"\u5be6\u4f5c II"),(0,i.kt)("p",null,"in-place sorting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function quickSort(arr, start = 0, end = arr.length - 1) {\n  if (start >= end) {\n    return arr;\n  }\n\n  const middle = partition(arr, start, end);\n\n  quickSort(arr, start, middle - 1);\n  quickSort(arr, middle + 1, end);\n\n  return arr;\n}\n\nfunction partition(arr, start, end) {\n  const pivot = arr[end];\n  let j = start;\n\n  for (let i = start; i < end; i += 1) {\n    if (arr[i] < pivot) {\n      swap(arr, i, j);\n      j += 1;\n    }\n  }\n\n  swap(arr, j, end);\n\n  return j;\n}\n\nfunction swap(arr, i, j) {\n  [arr[i], arr[j]] = [arr[j], arr[i]];\n}\n")))}d.isMDXComponent=!0}}]);