"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4709],{54852:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},33337:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(91528),a=n(2854),o=(n(49231),n(54852)),i=["components"],s={sidebar_position:3},c="actions",p={unversionedId:"apis/runtime/model/actions",id:"apis/runtime/model/actions",title:"actions",description:"actions \u7528\u4e8e\u4fee\u6539 state\uff0c\u76f8\u5f53\u4e8e Redux \u7684 reducers\u3002",source:"@site/docs/apis/runtime/model/actions.md",sourceDirName:"apis/runtime/model",slug:"/apis/runtime/model/actions",permalink:"/docs/apis/runtime/model/actions",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"state",permalink:"/docs/apis/runtime/model/state"},next:{title:"effects",permalink:"/docs/apis/runtime/model/effects"}},u={},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],l={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actions"},"actions"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"actions")," \u7528\u4e8e\u4fee\u6539 ",(0,o.kt)("strong",{parentName:"p"},"state"),"\uff0c\u76f8\u5f53\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"Redux")," \u7684 ",(0,o.kt)("strong",{parentName:"p"},"reducers"),"\u3002"))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define(() => {\n  return {\n    state: {\n      a: 'a',\n      b: 'b'\n    },\n    actions: {\n      setA(state, a: string) {\n        // \u542f\u7528 immer \u63d2\u4ef6\u65f6\n        state.a = a;\n\n        // \u672a\u542f\u7528 immer \u63d2\u4ef6\u65f6\n        return {\n          ...state,\n          a\n        }\n      }\n    }\n  }\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.setA('newA');\n  }, []);\n\n  // \"newA\"\n  return <div>state: {state.a}</div>\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"actions")," \u90e8\u5206\u5b9a\u4e49\u7684\u51fd\u6570\u5e94\u4e3a\u7eaf\u51fd\u6570\uff0c\u6bcf\u6b21\u8ba1\u7b97\u90fd\u5e94\u8fd4\u56de ",(0,o.kt)("strong",{parentName:"p"},"immutable data"),"\uff0c\u5728\u8be5\u51fd\u6570\u4e2d\u540c\u6b65\u4fee\u6539 ",(0,o.kt)("strong",{parentName:"p"},"state"),"\u3002"),(0,o.kt)("p",null,"\u4f46\u4e0a\u8ff0\u4f8b\u5b50\u914d\u5408 ",(0,o.kt)("strong",{parentName:"p"},"@modern-js-reduck/plugin-immer")," \u63d2\u4ef6\uff0c\u53ef\u4ee5\u7b80\u5355\u5730\u7528\u64cd\u4f5c ",(0,o.kt)("strong",{parentName:"p"},"mutable data")," \u7684\u65b9\u5f0f\u6765\u7f16\u5199\uff0c\u7701\u53bb\u4e86\u7e41\u7410\u7684\u7f16\u7801\u3002"))}d.isMDXComponent=!0}}]);