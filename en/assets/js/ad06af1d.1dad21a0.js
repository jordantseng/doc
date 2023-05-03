"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[900],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},l="Promise",s={unversionedId:"JavaScript/promise",id:"JavaScript/promise",title:"Promise",description:"TL;DR",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/JavaScript/promise.md",sourceDirName:"JavaScript",slug:"/JavaScript/promise",permalink:"/frontendwiz/en/JavaScript/promise",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/promise.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hoisting",permalink:"/frontendwiz/en/JavaScript/hoisting"},next:{title:"\u539f\u578b",permalink:"/frontendwiz/en/JavaScript/prototype"}},i={},c=[{value:"TL;DR",id:"tldr",level:3},{value:"What is Promise",id:"what-is-promise",level:3},{value:"How to create a Promise",id:"how-to-create-a-promise",level:4},{value:"Why Promise",id:"why-promise",level:3},{value:"Promise.race(promises)",id:"promiseracepromises",level:3},{value:"Promise.any(promises)",id:"promiseanypromises",level:3},{value:"Promise.all(promises)",id:"promiseallpromises",level:3},{value:"Promise.allSettled(promises)",id:"promiseallsettledpromises",level:3},{value:"Promise.resolve(value)",id:"promiseresolvevalue",level:3},{value:"Promise.reject(reason)",id:"promiserejectreason",level:3},{value:"FAQ",id:"faq",level:3}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promise"},"Promise"),(0,o.kt)("h3",{id:"tldr"},"TL;DR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Promise is an object that waits for an asynchronous operation to complete."),(0,o.kt)("li",{parentName:"ul"},"Promise can only be in one of three states\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"pending"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilled"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"rejected"),"."),(0,o.kt)("li",{parentName:"ul"},"Promise can help reduce callback hell and improve code readability.")),(0,o.kt)("h3",{id:"what-is-promise"},"What is Promise"),(0,o.kt)("p",null,"In JavaScript, Promise is an object that is used to handle asynchronous operations."),(0,o.kt)("p",null,"It provides a way to write asynchronous code that looks more like synchronous code, making it easier to understand and maintain."),(0,o.kt)("p",null,"A Promise can be in one of three states\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pending")," - Initial state, neither fulfilled nor rejected."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Fulfilled")," - The operation completed successfully, and the promise has a resulting value."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Rejected")," - The operation failed, and the promise has a reason for the failure.")),(0,o.kt)("h4",{id:"how-to-create-a-promise"},"How to create a Promise"),(0,o.kt)("p",null,"Promises can be created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," constructor, which takes a function as a parameter, called the ",(0,o.kt)("strong",{parentName:"p"},"executor")," function, that defines the asynchronous operation."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"executor")," function has two callback functions as parameters\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"resolve(value)"),": When called, this function fulfills the Promise with a value."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"reject(error)"),": When called, this function rejects the Promise with an error.")),(0,o.kt)("p",null,"Promises also can be chained using the methods below, which allows developer to define a sequence of asynchronous operations that depend on each other."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"then(fulfilledFn, rejectedFn)"),"\uff1aCalls ",(0,o.kt)("inlineCode",{parentName:"li"},"fulfilledFn")," if the Promise is fulfilled, and ",(0,o.kt)("inlineCode",{parentName:"li"},"rejectedFn")," if the Promise is rejected, and returns a new fulfilled Promise."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"catch(rejectedFn)"),"\uff1aCalls ",(0,o.kt)("inlineCode",{parentName:"li"},"rejectedFn")," if the Promise is rejected and returns a new fulfilled Promise."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"finally(callback)"),"\uff1aCalls the callback function regardless of whether the Promise is fulfilled or rejected, and returns a new fulfilled or rejected Promise.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const promise = new Promise(executor);\n\nfunction executor(resolve, reject) {\n  setTimeout(() => {\n    const randomNum = Math.floor(Math.random() * 100);\n    if (randomNum % 2 === 0) {\n      resolve('isEven');\n    } else {\n      reject('isOdd');\n    }\n  }, 1000);\n}\n\npromise\n  .then((val) => {\n    console.log(val);\n  })\n  .catch((error) => {\n    console.log(error);\n  })\n  .finally(() => {\n    console.log('finally');\n  });\n\n// after 1 sec, if randomNum is even => 'isEven' 'finally'\n// after 1 sec, if randomNum is odd => 'isOdd' 'finally'\n")),(0,o.kt)("h3",{id:"why-promise"},"Why Promise"),(0,o.kt)("p",null,"Prior to ES6, callback functions were the primary way to handle asynchronous operations in JavaScript."),(0,o.kt)("p",null,'However, the use of callbacks can lead to deeply nested and unreadable code, especially when dealing with multiple asynchronous operations, which is commonly referred to as "callback hell."'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const waitOneSecond = (cb) => {\n  setTimeout(() => {\n    cb();\n  }, 1000);\n};\n\n// deeply nested and unreadable code\nwaitOneSecond(() => {\n  console.log('1 sec passed');\n  waitOneSecond(() => {\n    console.log('2 sec passed');\n    waitOneSecond(() => {\n      console.log('3 sec passed');\n    });\n  });\n});\n")),(0,o.kt)("p",null,"If we refactor the code above using Promises, the code becomes cleaner and more readable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const waitOneSecond = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve();\n    }, 1000);\n  });\n};\n\n// maintain a single level of nesting, making it more readable and easier to understand\nwaitOneSecond()\n  .then(() => {\n    console.log('1 sec passed');\n    return waitOneSecond();\n  })\n  .then(() => {\n    console.log('2 sec passed');\n    return waitOneSecond();\n  })\n  .then(() => {\n    console.log('3 sec passed');\n  });\n")),(0,o.kt)("h3",{id:"promiseracepromises"},"Promise.race(promises)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise.race")," takes an array of Promises as argument and returns a new Promise."),(0,o.kt)("p",null,"The new Promise is settled (fulfilled or rejected) as soon as the first Promise in the array is settled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const p1 = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(1), 500);\n});\nconst p2 = new Promise((resolve, reject) => {\n  setTimeout(() => reject(2), 100);\n});\n\nPromise.race([p1, p2])\n  .then((value) => {\n    console.log(value);\n  })\n  .catch((err) => {\n    console.log(err); // p2 settles first and rejects with the value of 2\n  });\n")),(0,o.kt)("h3",{id:"promiseanypromises"},"Promise.any(promises)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise.any")," takes an array of Promises as input and returns a new Promise."),(0,o.kt)("p",null,"The new Promise is fulfilled as soon as one of the input Promises is fulfilled."),(0,o.kt)("p",null,"If all input Promises are rejected, then an ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError"},"AggregateError")," will be returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const p1 = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(1), 500);\n});\nconst p2 = new Promise((resolve, reject) => {\n  setTimeout(() => reject(2), 100);\n});\n\nPromise.any([p1, p2]).then(function (value) {\n  console.log(value);\n  // p1 fulfills with the value of 1\n});\n")),(0,o.kt)("h3",{id:"promiseallpromises"},"Promise.all(promises)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all")," takes an array of Promises as input and returns a new Promise."),(0,o.kt)("p",null,"The new Promise is fulfilled as soon as all of the input Promises are fulfilled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const p1 = Promise.resolve(1);\nconst p2 = 2;\nconst p3 = new Promise((resolve, reject) => {\n  setTimeout(() => resolve(3), 1000);\n});\n\nPromise.all([p1, p2, p3]).then(function (values) {\n  console.log(values); // after 1 second, [1, 2, 3]\n});\n")),(0,o.kt)("p",null,"If any of the input Promises is rejected, the new Promise is rejected with the reason of the first rejected Promise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const p1 = Promise.resolve(1);\nconst p2 = new Promise((resolve, reject) => {\n  setTimeout(() => reject(2), 1000);\n});\n\nPromise.all([p1, p2])\n  .then(function (values) {\n    console.log(values);\n  })\n  .catch((error) => {\n    console.log(error); // after 1 second, 2\n  });\n")),(0,o.kt)("h3",{id:"promiseallsettledpromises"},"Promise.allSettled(promises)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise.allSettled")," takes an array of Promises as input and returns a new Promise."),(0,o.kt)("p",null,"The new Promise is fulfilled when all input Promises are settled, which means that they have either fulfilled or rejected."),(0,o.kt)("p",null,"The resulting Promise resolves to an array of objects representing the state of each Promise."),(0,o.kt)("p",null,"Each object has two properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status"),'\uff1aA string indicating the Promise status, either "fulfilled" or "rejected"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"reason"),"\uff1aThe fulfilled value or rejection reason of the Promise, respectively.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const p1 = Promise.resolve(1);\nconst p2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));\nconst p3 = 3;\nconst p4 = Promise.reject(4);\n\nPromise.allSettled([p1, p2, p3, p4]).then((values) => {\n  console.log(values);\n  // after 1 second\n  // [\n  //   { status: 'fulfilled', value: 1 },\n  //   { status: 'fulfilled', value: 2 },\n  //   { status: 'fulfilled', value: 3 },\n  //   { status: 'rejected', reason: 4 }\n  // ]\n});\n")),(0,o.kt)("h3",{id:"promiseresolvevalue"},"Promise.resolve(value)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise.resolve(value)")," creates and returns a new Promise object that is resolved with a given value."),(0,o.kt)("p",null,"This method is useful for creating a Promise from a non-Promise value or for converting a synchronous operation into an asynchronous one by returning a resolved Promise immediately."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const promise = Promise.resolve('Hello World');\npromise.then((value) => {\n  console.log(value); // Hello World\n});\n")),(0,o.kt)("h3",{id:"promiserejectreason"},"Promise.reject(reason)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise.reject(reason)")," returns a new Promise object that is rejected with the given reason."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const promise = Promise.reject('Hello World');\npromise.catch((reason) => {\n  console.log(reason); // Hello World\n});\n")),(0,o.kt)("h3",{id:"faq"},"FAQ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Determine the result")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const promise = new Promise((resolve, reject) => {\n  console.log(1);\n  resolve();\n  console.log(2);\n});\n\npromise.then(() => {\n  console.log(3);\n});\n\nconsole.log(4);\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Answer:")),(0,o.kt)("p",{parentName:"li"},"This code creates a new Promise and invokes an executor function that immediately logs 1, then calls resolve(), and logs 2."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// 1\n// 2\n// 4\n// 3\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Determine the result")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.resolve()\n  .then(() => {\n    return new Error('error!!!');\n  })\n  .then((res) => {\n    console.log('then: ', res);\n  })\n  .catch((err) => {\n    console.log('catch: ', err);\n  });\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Answer:")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"then")," method returns a new ",(0,o.kt)("inlineCode",{parentName:"p"},"fulfilled")," Promise."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// then:  Error: error!!!\n")),(0,o.kt)("p",{parentName:"li"},"If you want to reject the Promise and go to the catch block, you need to explicitly throw the Error object in the first then callback."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"Promise.resolve()\n  .then(() => {\n    throw new Error('error!!!');\n  })\n  .then((res) => {\n    console.log('then: ', res);\n  })\n  .catch((err) => {\n    console.log('catch: ', err);\n  });\n")))),(0,o.kt)("p",null,"Reference:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.fooish.com/javascript/ES6/Promise.html"},"https://www.fooish.com/javascript/ES6/Promise.html"))))}u.isMDXComponent=!0}}]);