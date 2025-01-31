"use strict";(self.webpackChunkavgator_docs=self.webpackChunkavgator_docs||[]).push([[8176],{6743:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"documentation/user-interface/3-2-working-with-project/data-sources/data-sources","title":"Data Sources","description":"Data Sources serve as JSON-format data repositories that can be either local or populated from external sources via REST API requests.","source":"@site/docs/documentation/3-user-interface/3-2-working-with-project/6-data-sources/6-data-sources.md","sourceDirName":"documentation/3-user-interface/3-2-working-with-project/6-data-sources","slug":"/documentation/user-interface/3-2-working-with-project/data-sources/","permalink":"/avstudio-docs/documentation/user-interface/3-2-working-with-project/data-sources/","draft":false,"unlisted":false,"editUrl":"https://github.com/avgator/avstudio-docs/edit/main/docs/documentation/3-user-interface/3-2-working-with-project/6-data-sources/6-data-sources.md","tags":[],"version":"current","lastUpdatedBy":"Vadim Chekirka","lastUpdatedAt":1736977312000,"sidebarPosition":6,"frontMatter":{"title":"Data Sources","sidebar_label":"Data Sources"},"sidebar":"documentationSidebar","previous":{"title":"Variables","permalink":"/avstudio-docs/documentation/user-interface/3-2-working-with-project/variables/"}}');var a=i(4848),s=i(8453);const r={title:"Data Sources",sidebar_label:"Data Sources"},o="Data Sources in AVstudio",l={},c=[{value:"Types of Data Sources",id:"types-of-data-sources",level:2},{value:"1. Local Data Sources",id:"1-local-data-sources",level:3},{value:"2. Remote Data Sources",id:"2-remote-data-sources",level:3},{value:"3. Mixed Data Sources",id:"3-mixed-data-sources",level:3},{value:"Creating a Data Source",id:"creating-a-data-source",level:2},{value:"Required Fields",id:"required-fields",level:3},{value:"Remote Configuration",id:"remote-configuration",level:3},{value:"Local Configuration",id:"local-configuration",level:3},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Data Management",id:"data-management",level:3},{value:"Function Integration",id:"function-integration",level:3},{value:"Remote Source Management",id:"remote-source-management",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"data-sources-in-avstudio",children:"Data Sources in AVstudio"})}),"\n",(0,a.jsx)(n.p,{children:"Data Sources serve as JSON-format data repositories that can be either local or populated from external sources via REST API requests."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Data Sources Overview",src:i(8244).A+"",width:"2514",height:"478"})}),"\n",(0,a.jsx)(n.h2,{id:"types-of-data-sources",children:"Types of Data Sources"}),"\n",(0,a.jsx)(n.h3,{id:"1-local-data-sources",children:"1. Local Data Sources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Stored within the project"}),"\n",(0,a.jsx)(n.li,{children:"Data defined during creation"}),"\n",(0,a.jsx)(n.li,{children:"Static and immutable"}),"\n",(0,a.jsx)(n.li,{children:"Best for constant data"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"2-remote-data-sources",children:"2. Remote Data Sources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Data fetched via HTTP/REST API"}),"\n",(0,a.jsx)(n.li,{children:"Dynamic content updates"}),"\n",(0,a.jsx)(n.li,{children:"Processor feedback-driven updates"}),"\n",(0,a.jsx)(n.li,{children:"Configurable request headers"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"3-mixed-data-sources",children:"3. Mixed Data Sources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Combines remote and local storage"}),"\n",(0,a.jsx)(n.li,{children:"Fallback to local copy if remote fails"}),"\n",(0,a.jsx)(n.li,{children:"Automatic failover mechanism"}),"\n",(0,a.jsx)(n.li,{children:"Enhanced reliability"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Data Immutability",type:"note",children:(0,a.jsx)(n.p,{children:"Data Source content is immutable during runtime. Updates require either a new remote fetch or manual local data modification."})}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-data-source",children:"Creating a Data Source"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"New Data Source Form",src:i(1866).A+"",width:"3418",height:"2434"})}),"\n",(0,a.jsx)(n.h3,{id:"required-fields",children:"Required Fields"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Name"}),": Unique identifier for the data source"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Type"}),": Local, Remote, or Mixed"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"remote-configuration",children:"Remote Configuration"}),"\n",(0,a.jsx)(n.p,{children:"Optional for Local Data Sources:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"URL"}),": Endpoint for data retrieval"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Header Key"}),": Request header name"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Header Value"}),": Request header value"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"local-configuration",children:"Local Configuration"}),"\n",(0,a.jsx)(n.p,{children:"Optional for Remote Data Sources:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"JSON Data"}),": Local data storage"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Fallback Data"}),": Backup for remote sources"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Global Values",type:"tip",children:(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"/avstudio-docs/documentation/user-interface/3-2-working-with-project/project-settings/",children:"project-level global values"})," for header values and base URLs."]})}),"\n",(0,a.jsx)(n.h2,{id:"advanced-features",children:"Advanced Features"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Additional Controls",src:i(7646).A+"",width:"1644",height:"754"})}),"\n",(0,a.jsx)(n.h3,{id:"data-management",children:"Data Management"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Clear"}),": Reset local JSON data"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Function Attachment"}),": Transform data structure"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Remote Fill"}),": Populate local storage from remote"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"function-integration",children:"Function Integration"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Attach custom functions"}),"\n",(0,a.jsx)(n.li,{children:"Transform data representation"}),"\n",(0,a.jsx)(n.li,{children:"Modify data structure"}),"\n",(0,a.jsx)(n.li,{children:"Apply business logic"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"remote-source-management",children:"Remote Source Management"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Test remote connections"}),"\n",(0,a.jsx)(n.li,{children:"Monitor data updates"}),"\n",(0,a.jsx)(n.li,{children:"Configure timeout settings"}),"\n",(0,a.jsx)(n.li,{children:"Handle error scenarios"}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{title:"Mixed Mode Behavior",type:"caution",children:[(0,a.jsx)(n.p,{children:"When using mixed mode:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"System attempts remote fetch first"}),"\n",(0,a.jsx)(n.li,{children:"Falls back to local copy if remote fails"}),"\n",(0,a.jsx)(n.li,{children:"Automatically manages data synchronization"}),"\n"]})]}),"\n",(0,a.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Data Structure"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Use consistent JSON formats"}),"\n",(0,a.jsx)(n.li,{children:"Define clear data schemas"}),"\n",(0,a.jsx)(n.li,{children:"Document data structures"}),"\n",(0,a.jsx)(n.li,{children:"Plan for scalability"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Implement fallback strategies"}),"\n",(0,a.jsx)(n.li,{children:"Monitor remote source availability"}),"\n",(0,a.jsx)(n.li,{children:"Log connection issues"}),"\n",(0,a.jsx)(n.li,{children:"Test failure scenarios"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Performance"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Optimize data payload size"}),"\n",(0,a.jsx)(n.li,{children:"Cache when appropriate"}),"\n",(0,a.jsx)(n.li,{children:"Monitor response times"}),"\n",(0,a.jsx)(n.li,{children:"Plan for throttling"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/avstudio-docs/documentation/user-interface/3-2-working-with-project/project-settings/",children:"Project Settings"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/avstudio-docs/documentation/user-interface/3-2-working-with-project/variables/",children:"Global Variables"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7646:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/avstudio-datasource-additional-controls-e610510743a27d50d2f269f8d65e2b85.png"},1866:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/avstudio-datasource-new-196b994c90597e3f5793cba037bcd097.png"},8244:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/avstudio-datasources-93249b5f433d7dee35259c712f459d0f.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);