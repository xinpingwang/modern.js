"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2915],{54852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34824:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(91528),a=n(2854),o=(n(49231),n(54852)),i=["components"],s={sidebar_position:2},l="useStaticModel",p={unversionedId:"apis/runtime/container/use-static-model",id:"apis/runtime/container/use-static-model",title:"useStaticModel",description:"\u5982\u679c\u60f3\u5728\u7ec4\u4ef6\u91cc\u4ee5 React Hook \u7684\u5f62\u5f0f\u6d88\u8d39\u67d0\u4e2a Model\uff0c\u5e76\u80fd\u968f\u65f6\u83b7\u53d6\u5230\u5f53\u524d\u6700\u65b0\u7684\u72b6\u6001\uff0c\u4f46\u53c8\u4e0d\u5e0c\u671b Model \u72b6\u6001\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u5f15\u8d77\u7ec4\u4ef6\u7684 rerender\uff0c\u53ef\u4ee5\u4f7f\u7528 useStaticModel\u3002",source:"@site/docs/apis/runtime/container/use-static-model.md",sourceDirName:"apis/runtime/container",slug:"/apis/runtime/container/use-static-model",permalink:"/docs/apis/runtime/container/use-static-model",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisSidebar",previous:{title:"useModel",permalink:"/docs/apis/runtime/container/use-model"},next:{title:"useLocalModel",permalink:"/docs/apis/runtime/container/use-local-model"}},c={},u=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5728\u6027\u80fd\u654f\u611f\u573a\u666f\u4f7f\u7528",id:"\u5728\u6027\u80fd\u654f\u611f\u573a\u666f\u4f7f\u7528",level:3},{value:"\u95ed\u5305\u51fd\u6570\u6d88\u8d39",id:"\u95ed\u5305\u51fd\u6570\u6d88\u8d39",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usestaticmodel"},"useStaticModel"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u60f3\u5728\u7ec4\u4ef6\u91cc\u4ee5 ",(0,o.kt)("strong",{parentName:"p"},"React Hook")," \u7684\u5f62\u5f0f\u6d88\u8d39\u67d0\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"Model"),"\uff0c\u5e76\u80fd\u968f\u65f6\u83b7\u53d6\u5230\u5f53\u524d\u6700\u65b0\u7684\u72b6\u6001\uff0c\u4f46\u53c8\u4e0d\u5e0c\u671b ",(0,o.kt)("strong",{parentName:"p"},"Model")," \u72b6\u6001\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u5f15\u8d77\u7ec4\u4ef6\u7684 rerender\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useStaticModel"),"\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { useStaticModel } from '@modern-js/runtime/model';\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useStaticModel")," API \u5f62\u5f0f\u4e0a\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"useModel")," \u5b8c\u5168\u4e00\u81f4\u3002\u5177\u4f53\u4f7f\u7528\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/runtime/container/use-model"},(0,o.kt)("inlineCode",{parentName:"a"},"useModel")),"\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u603b\u662f\u80fd\u83b7\u53d6\u5230\u6700\u65b0\u72b6\u6001\uff0c\u6ce8\u610f\u4e0d\u8981\u5bf9\u8fd4\u56de\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u7ed3\u6784\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u4e0a\u6302\u8f7d\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," \u65b9\u6cd5\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u624d\u80fd\u62ff\u5230\u6700\u65b0\u7684\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  // \u274c \u4e0d\u80fd\u89e3\u6784 state\uff0c\u4f46\u53ef\u4ee5\u89e3\u6784 actions\u3002\n  const [{ username }, { logout }] = useStaticModel(userModel);\n\n  // \u2705 \u8fd9\u624d\u662f\u6b63\u786e\u4f7f\u7528\u59ff\u52bf\u3002\n  const [state, { logout }] = useStaticModel(userModel);\n\n  useEffect(() => {\n    state.username\n  }, []);\n}\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u5728\u6027\u80fd\u654f\u611f\u573a\u666f\u4f7f\u7528"},"\u5728\u6027\u80fd\u654f\u611f\u573a\u666f\u4f7f\u7528"),(0,o.kt)("p",null,"\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pmnd.rs/react-three-fiber/advanced/pitfalls#never-bind-fast-state-reactive"},(0,o.kt)("inlineCode",{parentName:"a"},"react-three-fiber"))," \u5efa\u8bae\u4e0d\u8981\u5728\u52a8\u753b\u7ec4\u4ef6 UI \u91cc\u7ed1\u5b9a\u4f1a\u5feb\u901f\u53d8\u5316\u7684\u72b6\u6001\uff0c\u5426\u5219\u4f1a\u5f15\u8d77\u4e25\u91cd\u7684\u6027\u80fd\u95ee\u9898\u3002\u8fd9\u79cd\u60c5\u51b5\u5c31\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useStaticModel"),"\uff0c\u56e0\u4e3a\u5b83\u53ea\u4f1a\u8ba2\u9605\u72b6\u6001\uff0c\u4f46\u7edd\u4e0d\u4f1a\u5f15\u8d77\u89c6\u56fe\u7684 rerender\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function ThreeComponent() {\n  const [state, actions] = useStaticModel(modelA);\n\n  useFrame(() => {\n    state.value // \u5047\u8bbe\u521d\u59cb\u5316\u4e3a 0\n    actions.setValue(1);\n    state.value // \u8fd9\u91cc\u4f1a\u5f97\u52301\n  });\n}\n")),(0,o.kt)("h3",{id:"\u95ed\u5305\u51fd\u6570\u6d88\u8d39"},"\u95ed\u5305\u51fd\u6570\u6d88\u8d39"),(0,o.kt)("p",null,"\u5728\u7f16\u5199\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u6d88\u8d39 ",(0,o.kt)("strong",{parentName:"p"},"Model")," \u83b7\u5f97\u7684\u6570\u636e\u4e3b\u8981\u6709\u4e24\u4e2a\u7528\u9014\uff0c\u4e00\u662f\u76f4\u63a5\u4f9b\u89c6\u56fe\u6d88\u8d39\uff0c\u4e8c\u662f\u4f9b\u7ec4\u4ef6\u5185\u7684\u4e00\u4e9b\u95ed\u5305\u51fd\u6570\u6d88\u8d39\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const [state] = useModel(userModel);\n\n  useEffect(() => {\n    send('pageview', {user: state.user});\n  }, [state])\n\n  return <div>Hello</div>;\n}\n")),(0,o.kt)("p",null,"\u5982\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," \u7ec4\u4ef6\u6d88\u8d39\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"userModel")," \u7684\u72b6\u6001\uff0c\u4f46\u6ca1\u6709\u76f4\u63a5\u5728 View \u91cc\u4f7f\u7528\uff0c\u4f46 ",(0,o.kt)("inlineCode",{parentName:"p"},"userModel")," \u72b6\u6001\u7684\u6539\u53d8\u5374\u4f1a\u5f15\u8d77 View \u7684 rerender\uff0c\u8fd9\u662f\u4e0d\u7b26\u5408\u9884\u671f\u7684\uff0c\u8fd9\u79cd\u60c5\u51b5\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useStaticModel")," \u8fdb\u884c\u4f18\u5316\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const [state] = useStaticModel(userModel);\n\n  useEffect(() => {\n    send('pageview', {user: state.user});\n  }, [state])\n\n  return <div>Hello</div>;\n}\n")))}m.isMDXComponent=!0}}]);