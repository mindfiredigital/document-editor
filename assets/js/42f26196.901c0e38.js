"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[563],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,y=p["".concat(u,".").concat(g)]||p[g]||d[g]||i;return n?o.createElement(y,a(a({ref:t},s),{},{components:n})):o.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(8168),r=(n(6540),n(5680));const i={sidebar_position:1},a="How to Contribute",l={unversionedId:"contributors/how-to-contribute",id:"contributors/how-to-contribute",title:"How to Contribute",description:"We genuinely appreciate your interest in contributing to the React Document Editor project. Your invaluable contributions play a pivotal role in enhancing this project. Before you embark on your journey, please take a moment to familiarize yourself with the following guidelines:",source:"@site/docs/contributors/how-to-contribute.md",sourceDirName:"contributors",slug:"/contributors/how-to-contribute",permalink:"/document-editor/docs/contributors/how-to-contribute",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contributors",permalink:"/document-editor/docs/contributors/"},next:{title:"Code of conduct",permalink:"/document-editor/docs/contributors/code-of-conduct"}},u={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Selecting an Issue or Feature",id:"selecting-an-issue-or-feature",level:2},{value:"Making Changes",id:"making-changes",level:2},{value:"Submitting a Pull Request",id:"submitting-a-pull-request",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Licensing",id:"licensing",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"how-to-contribute"},"How to Contribute"),(0,r.yg)("p",null,"We genuinely appreciate your interest in contributing to the React Document Editor project. Your invaluable contributions play a pivotal role in enhancing this project. Before you embark on your journey, please take a moment to familiarize yourself with the following guidelines:"),(0,r.yg)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#selecting-an-issue-or-feature"},"Selecting an Issue or Feature")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#making-changes"},"Making Changes")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#submitting-a-pull-request"},"Submitting a Pull Request")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#code-of-conduct"},"Code of Conduct")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#licensing"},"Licensing"))),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Begin by downloading the installer for the Long-Term Support (LTS) version of Node.js. This step also streamlines the npm installation process."),(0,r.yg)("li",{parentName:"ol"},"Proceed by forking the React Canvas Editor repository."),(0,r.yg)("li",{parentName:"ol"},"Execute ",(0,r.yg)("inlineCode",{parentName:"li"},"npm install")," to install the necessary dependencies for this package."),(0,r.yg)("li",{parentName:"ol"},"Acquire insights into the document editor's functionality by running ",(0,r.yg)("inlineCode",{parentName:"li"},"npm run storybook"),".")),(0,r.yg)("h2",{id:"selecting-an-issue-or-feature"},"Selecting an Issue or Feature"),(0,r.yg)("p",null,"Review the project's issue tracker and GitHub repository to identify open issues or features that align with your interests. If you can't pinpoint a specific task, do not hesitate to reach out to the project maintainers for guidance."),(0,r.yg)("h2",{id:"making-changes"},"Making Changes"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a new branch within your forked repository, providing it with a descriptive name."),(0,r.yg)("li",{parentName:"ol"},"Implement the desired feature or address the identified issue within your branch."),(0,r.yg)("li",{parentName:"ol"},"Adhere to the project's coding style and conventions to ensure consistency."),(0,r.yg)("li",{parentName:"ol"},"If applicable, create tests to comprehensively cover the functionality you're introducing or modifying.")),(0,r.yg)("h2",{id:"submitting-a-pull-request"},"Submitting a Pull Request"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Initiate a pull request (PR) on the primary project repository."),(0,r.yg)("li",{parentName:"ol"},"Provide a clear and concise description of the changes within the PR."),(0,r.yg)("li",{parentName:"ol"},"Elaborate on the issue you are addressing and outline the proposed solution."),(0,r.yg)("li",{parentName:"ol"},"Be prepared to receive constructive feedback and engage in productive discussions."),(0,r.yg)("li",{parentName:"ol"},"Adjust your code as necessary based on the feedback received.")),(0,r.yg)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,r.yg)("p",null,"Kindly be aware that we uphold a code of conduct to maintain a positive and inclusive community. We urge you to thoroughly read and adhere to these guidelines during your participation in the project."),(0,r.yg)("h2",{id:"licensing"},"Licensing"),(0,r.yg)("p",null,"By contributing to this project, you consent to the licensing terms chosen by the project. Ensure you review the project's licensing file for detailed information."),(0,r.yg)("p",null,"We extend our gratitude for your contributions and eagerly anticipate your active involvement in the React Document Editor project!"))}d.isMDXComponent=!0}}]);