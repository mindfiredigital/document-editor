"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[9336],{5680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>g});var a=o(6540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(o),u=n,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return o?a.createElement(g,l(l({ref:t},p),{},{components:o})):a.createElement(g,l({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7634:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=o(8168),n=(o(6540),o(5680));const r={sidebar_position:2},l="How to customize style",i={unversionedId:"react/tutorial-basics/customized-style",id:"react/tutorial-basics/customized-style",title:"How to customize style",description:"Tailor the editor's user interface to align with the specific requirements of your application.",source:"@site/docs/react/tutorial-basics/customized-style.md",sourceDirName:"react/tutorial-basics",slug:"/react/tutorial-basics/customized-style",permalink:"/document-editor/docs/react/tutorial-basics/customized-style",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to customize toolbar",permalink:"/document-editor/docs/react/tutorial-basics/customized-tool"},next:{title:"How to use DOM events",permalink:"/document-editor/docs/react/tutorial-basics/dom-handle"}},s={},c=[{value:"Customize toolbar style",id:"customize-toolbar-style",level:2},{value:"Customize toolbar components style",id:"customize-toolbar-components-style",level:2},{value:"Customize toolbar selected components color",id:"customize-toolbar-selected-components-color",level:2},{value:"Customize editor page",id:"customize-editor-page",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"how-to-customize-style"},"How to customize style"),(0,n.yg)("p",null,"Tailor the editor's user interface to align with the specific requirements of your application."),(0,n.yg)("h2",{id:"customize-toolbar-style"},"Customize toolbar style"),(0,n.yg)("p",null,"You can adjust the style of the toolbar to meet your design needs. Create a configuration object as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"const toolbarClass = {\n  container: {\n    backgroundColor: 'red',\n  },\n  primaryToolbar: {\n    justifyContent: 'center',\n  },\n};\n")),(0,n.yg)("p",null,"Now, integrate this style configuration into your ",(0,n.yg)("inlineCode",{parentName:"p"},"DocumentEditor")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"DocumentEditorWebComponent"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"React Component")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"return <DocumentEditor toolbar_class={toolbarClass} />;\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Web Component for React")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'DocumentEditorWebComponent({ toolbar_class: toolbarClass });\n\nreturn <div id="document-editor"></div>;\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Web Component for JavaScript")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-html"},'\x3c!-- In you html file add following code in a body tag where you want to use react canvas editor --\x3e\n<body>\n  <div id="document-editor"></div>\n  <script type="module" src="/main.js"><\/script>\n</body>\n')),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"// In main.js file(i.e. used as a script in html file) add the following code\nDocumentEditorWebComponent({ toolbar_class: toolbarClass });\n")))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Customize toolbar style",src:o(5277).A,width:"1440",height:"752"})),(0,n.yg)("h2",{id:"customize-toolbar-components-style"},"Customize toolbar components style"),(0,n.yg)("p",null,"To fine-tune the style of individual toolbar components, define styles for items like undo, redo, and images. Here's an example configuration:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"const toolbarClass = {\n  item: {\n    undo: {\n      border: 'red solid 2px',\n      background: 'yellow',\n    },\n    redo: {\n      border: 'black solid 3px',\n      background: 'blue',\n    },\n    image: {\n      border: 'black solid 3px',\n      background: 'blue',\n    },\n  },\n};\n")),(0,n.yg)("p",null,"Apply these styles to your ",(0,n.yg)("inlineCode",{parentName:"p"},"DocumentEditor")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"DocumentEditorWebComponent"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"React Component")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"return <DocumentEditor toolbar_class={toolbarClass} />;\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Web Component for React")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'DocumentEditorWebComponent({ toolbar_class: toolbarItem });\n\nexport const App = () => <div id="document-editor"></div>;\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Web Component for JavaScript")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-html"},'\x3c!-- In you html file add following code in a body tag where you want to use react canvas editor --\x3e\n<body>\n  <div id="document-editor"></div>\n  <script type="module" src="/main.js"><\/script>\n</body>\n;\n')),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"// In main.js file(i.e. used as a script in html file) add the following code\nDocumentEditorWebComponent({ toolbar_class: toolbarItem });\n")))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Customize toolbar components style",src:o(7644).A,width:"1436",height:"698"})),(0,n.yg)("h2",{id:"customize-toolbar-selected-components-color"},"Customize toolbar selected components color"),(0,n.yg)("p",null,"You can also customize the color of selected toolbar components. Here's an example configuration:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"const toolbarClass = {\n  item: {\n    selectedToolbarItemColor: {\n      color: '#1a73e8',\n    },\n  },\n};\n")),(0,n.yg)("p",null,"Apply these styles to your ",(0,n.yg)("inlineCode",{parentName:"p"},"DocumentEditor")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"DocumentEditorWebComponent"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"React Component")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"return <DocumentEditor toolbar_class={toolbarClass} />;\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Web Component for React")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'DocumentEditorWebComponent({ toolbar_class: toolbarClass });\n\nexport const App = () => <div id="document-editor"></div>;\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Web Component for JavaScript")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-html"},'\x3c!-- In you html file add following code in a body tag where you want to use react canvas editor --\x3e\n<body>\n  <div id="document-editor"></div>\n  <script type="module" src="/main.js"><\/script>\n</body>\n;\n')),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"// In main.js file(i.e. used as a script in html file) add the following code\nDocumentEditorWebComponent({ toolbar_class: toolbarClass });\n")))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Customize toolbar selected components color",src:o(3444).A,width:"2420",height:"1252"})),(0,n.yg)("h2",{id:"customize-editor-page"},"Customize editor page"),(0,n.yg)("p",null,"You can also customize the appearance of the editor page. Define the styles for the editor main and margin areas:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"const canvasClass = {\n  editorMain: {\n    background: 'antiquewhite',\n  },\n  margin: {},\n};\n")),(0,n.yg)("p",null,"Incorporate these styles into your ",(0,n.yg)("inlineCode",{parentName:"p"},"DocumentEditor")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"DocumentEditorWebComponent"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"React Component")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"return <DocumentEditor canvas_class={canvasClass} />;\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Web Component for React")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'DocumentEditorWebComponent({ canvas_class: canvasClass });\n\nexport const App = () => <div id="document-editor"></div>;\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Web Component for JavaScript")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-html"},'\x3c!-- In you html file add following code in a body tag where you want to use react canvas editor --\x3e\n<body>\n  <div id="document-editor"></div>\n  <script type="module" src="/main.js"><\/script>\n</body>\n;\n')),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"// In main.js file(i.e. used as a script in html file) add the following code\nDocumentEditorWebComponent({ canvas_class: canvasClass });\n")))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Customize editor page",src:o(4945).A,width:"1440",height:"752"})),(0,n.yg)("p",null,"By following these steps, you can professionally customize the style of your editor to align with your application's requirements."))}d.isMDXComponent=!0},4945:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/customize-editor-page-79837630a268c20d6b13b288f16deb72.png"},7644:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/customize-toolbar-components-style-2f332e20b3de8d78c8b9ec889ba64216.png"},3444:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/customize-toolbar-selected-components-color-3af064113a81d8a79d960bbbb745195f.png"},5277:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/customize-toolbar-style-9f816dd23b8387537dd1460921e3d71e.png"}}]);