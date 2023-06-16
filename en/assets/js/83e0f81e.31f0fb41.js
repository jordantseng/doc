"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||p;return n?r.createElement(g,o(o({ref:t},i),{},{components:n})):r.createElement(g,o({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const p={},o="React + TypeScript",l={unversionedId:"React/typescript/index",id:"React/typescript/index",title:"React + TypeScript",description:"HTML Props",source:"@site/docs/React/typescript/index.md",sourceDirName:"React/typescript",slug:"/React/typescript/",permalink:"/frontendwiz/en/React/typescript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/typescript/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"This",permalink:"/frontendwiz/en/JavaScript/this"},next:{title:"Virtual DOM",permalink:"/frontendwiz/en/React/virtual-dom/"}},s={},c=[{value:"HTML Props",id:"html-props",level:3},{value:"\u8986\u84cb\u539f\u751f Props",id:"\u8986\u84cb\u539f\u751f-props",level:3},{value:"\u63d0\u53d6\u5143\u4ef6 Props",id:"\u63d0\u53d6\u5143\u4ef6-props",level:3},{value:"\u4f7f\u7528 <code>useState</code> update function \u66f4\u65b0\u72c0\u614b",id:"\u4f7f\u7528-usestate-update-function-\u66f4\u65b0\u72c0\u614b",level:3}],i={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react--typescript"},"React + TypeScript"),(0,a.kt)("h3",{id:"html-props"},"HTML Props"),(0,a.kt)("p",null,"\u60c5\u5883: \u9810\u671f ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," \u6709\u539f\u751f html button props \u7684 autocomplete"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const Parent = () => {\n  return <Button onClick={() => {}} type="button"></Button>;\n};\n')),(0,a.kt)("p",null,"\u2705"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export const Button = ({ className, ...rest }: React.ComponentProps<'button'>) => {\n  return <button {...rest} className={className}></button>;\n};\n")),(0,a.kt)("h3",{id:"\u8986\u84cb\u539f\u751f-props"},"\u8986\u84cb\u539f\u751f Props"),(0,a.kt)("p",null,"\u60c5\u5883: \u9810\u671f ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," props \u53c3\u6578\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export const Input = (props: InputProps) => {\n  return (\n    <input\n      {...props}\n      onChange={(e) => {\n        props.onChange(e.target.value);\n      }}\n    />\n  );\n};\n\nconst Parent = () => {\n  return (\n    <Input\n      onChange={(val) => {\n        // val: string\n        console.log(val);\n      }}\n    />\n  );\n};\n")),(0,a.kt)("p",null,"\u274c val: ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"React.ChangeEvent<HTMLInputElement>"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type InputProps = ComponentProps<'input'> & { onChange: (value: string) => void };\n")),(0,a.kt)("p",null,"\u2705"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type InputProps = Omit<ComponentProps<'input'>, 'onChange'> & { onChange: (value: string) => void };\n")),(0,a.kt)("h3",{id:"\u63d0\u53d6\u5143\u4ef6-props"},"\u63d0\u53d6\u5143\u4ef6 Props"),(0,a.kt)("p",null,"\u60c5\u5883: ",(0,a.kt)("inlineCode",{parentName:"p"},"NavBar")," \u662f\u7b2c\u4e09\u65b9\u7684\u5143\u4ef6\uff0c\u5982\u679c\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"NavBar")," \u7684 props\uff0c\u4f46\u7b2c\u4e09\u65b9\u4e26\u672a\u5c07\u5176 props export \u51fa\u4f86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type NavBarProps = { title: string; links: string[]; children: React.ReactNode };\nexport const NavBar = (props: NavBarProps) => {\n  return <div>Some content</div>;\n};\n")),(0,a.kt)("p",null,"\u2705"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type NavBarProps = React.ComponentProps<typeof NavBar>;\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-usestate-update-function-\u66f4\u65b0\u72c0\u614b"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h3"},"useState")," update function \u66f4\u65b0\u72c0\u614b"),(0,a.kt)("p",null,"\u60c5\u5883: ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," function \u56de\u50b3\u7684\u7269\u4ef6\uff0c\u6709\u984d\u5916\u7684 tagselected \u5c6c\u6027\uff0c\u4f46 typescript \u4e26\u672a\u5831\u932f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type TagState = {\n  tagSelected: number | null;\n  tags: { id: number; value: string }[];\n};\n\nexport const Tags = () => {\n  const [state, setState] = useState<TagState>({\n    tags: [],\n    tagSelected: null,\n  });\n\n  return (\n    <div>\n      {state.tags.map((tag) => {\n        return (\n          <button\n            key={tag.id}\n            onClick={() => {\n              setState((currentState) => ({\n                ...currentState,\n                // @ts-expect-error\n                tagselected: tag.id,\n              }));\n            }}\n          >\n            {tag.value}\n          </button>\n        );\n      })}\n    </div>\n  );\n};\n")),(0,a.kt)("p",null,"\u2705 \u5728 TypeScript \u4e2d\uff0c\u53ef\u4ee5\u5f9e\u51fd\u5f0f\u56de\u50b3\u503c\u4e2d\u50b3\u905e\u984d\u5916\u7684\u5c5e\u6027\u3002\u4e00\u822c\u800c\u8a00\uff0c\u5728\u4f7f\u7528 TypeScript \u6642\uff0c\u61c9\u8a72\u76e1\u91cf\u9032\u884c\u7269\u4ef6\u6bd4\u8f03\uff0c\u56e0\u70ba\u9019\u6a23\u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u932f\u8aa4\u8a0a\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<button\n  key={tag.id}\n  onClick={() => {\n    setState(\n      (currentState): TagState => ({\n        ...currentState,\n        tagselected: tag.id,\n      }),\n    );\n  }}\n>\n  {tag.value}\n</button>\n")),(0,a.kt)("p",null,"\u53c3\u8003\u4f86\u6e90\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.totaltypescript.com/tutorials/react-with-typescript"},"React with TypeScript"))))}d.isMDXComponent=!0}}]);