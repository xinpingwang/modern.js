"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[174],{54852:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=s(n),g=i,m=f["".concat(c,".").concat(g)]||f[g]||l[g]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89575:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var r=n(91528),i=n(2854),o=(n(49231),n(54852)),a=["components"],p={sidebar_position:1},c="isInGitRepo",s={unversionedId:"apis/generator/plugin/git/isInGitRepo",id:"apis/generator/plugin/git/isInGitRepo",title:"isInGitRepo",description:"\u5224\u65ad\u5f53\u524d\u9879\u76ee\u662f\u5426\u4e3a\u4e00\u4e2a Git \u4ed3\u5e93\u3002",source:"@site/docs/apis/generator/plugin/git/isInGitRepo.md",sourceDirName:"apis/generator/plugin/git",slug:"/apis/generator/plugin/git/isInGitRepo",permalink:"/docs/apis/generator/plugin/git/isInGitRepo",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisSidebar",previous:{title:"install",permalink:"/docs/apis/generator/plugin/npm/install"},next:{title:"initGitRepo",permalink:"/docs/apis/generator/plugin/git/initGitRepo"}},u={},l=[],f={toc:l};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"isingitrepo"},"isInGitRepo"),(0,o.kt)("p",null,"\u5224\u65ad\u5f53\u524d\u9879\u76ee\u662f\u5426\u4e3a\u4e00\u4e2a Git \u4ed3\u5e93\u3002"),(0,o.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type AfterForgedAPI = {\n  isInGitRepo: () => Promise<boolean>;\n  ...\n};\n")))}g.isMDXComponent=!0}}]);