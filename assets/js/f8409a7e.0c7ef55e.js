"use strict";(self.webpackChunkaps_samples_docs=self.webpackChunkaps_samples_docs||[]).push([[206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),o=a(7294),i=a(6010),r=a(2389),s=a(7392),p=a(7094),l=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:a,block:r,defaultValue:u,values:d,groupId:h,className:k}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,p.U)(),[N,A]=(0,o.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:Z}=(0,l.o5)();if(null!=h){const e=v[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&A(e)}const B=e=>{const t=e.currentTarget,a=I.indexOf(t),n=g[a].value;n!==N&&(Z(t),A(n),null!=h&&w(h,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":B(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;a=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;a=I[t]??I[I.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},k)},g.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:C,onClick:B},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,r.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},1297:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>k});var n=a(7462),o=(a(7294),a(3905)),i=a(5488),r=a(5162);const s={toc:[]};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you have ",(0,o.kt)("em",{parentName:"p"},"admin")," access to an Autodesk Construction Cloud (ACC for short) account")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into your ACC account, and navigate to ",(0,o.kt)("em",{parentName:"li"},"Account Administration"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From the overview of projects")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Project list",src:a(8268).Z,width:"1890",height:"972"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From the user interface of a specific project")),(0,o.kt)("img",{src:"data:image/webp;base64,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",alt:"Project detail"}),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("em",{parentName:"li"},"Account Admin")," page, go to ",(0,o.kt)("em",{parentName:"li"},"BIM 360 Admin")," > ",(0,o.kt)("em",{parentName:"li"},"Settings"),", and navigate to the ",(0,o.kt)("em",{parentName:"li"},"Custom Integrations")," tab")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account admin",src:a(6579).Z,width:"1556",height:"1042"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("em",{parentName:"p"},"Add Custom Integration")," button on the left side to start a simple wizard\nthat will guide you through the process")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("em",{parentName:"p"},"Select Access")," page, keep both the ",(0,o.kt)("em",{parentName:"p"},"BIM 360 Account Administration"),"\nand the ",(0,o.kt)("em",{parentName:"p"},"Document Management")," options checked, and hit the ",(0,o.kt)("em",{parentName:"p"},"Next")," button"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select access",src:a(8487).Z,width:"1500",height:"1028"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"On the next page of the wizard, choose the ",(0,o.kt)("em",{parentName:"li"},"I'm the developer")," option, and hit\nthe ",(0,o.kt)("em",{parentName:"li"},"Next")," button")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select role",src:a(1198).Z,width:"1500",height:"1028"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Here we assume that the ",(0,o.kt)("em",{parentName:"p"},"account admin")," is also the owner of the APS application.\nIf that is not the case, the account administrator can use the ",(0,o.kt)("em",{parentName:"p"},"Invite a developer"),"\noption instead, and the invited developer will input the APS application details later.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"On the next and final page, make note of the ",(0,o.kt)("em",{parentName:"li"},"BIM 360 Account ID"),", check the\ncheckbox next to it, and fill out the ",(0,o.kt)("em",{parentName:"li"},"Client ID")," and the ",(0,o.kt)("em",{parentName:"li"},"App Name")," fields\nexactly as they appear in your application's page on ",(0,o.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/myapps"},"https://forge.autodesk.com/myapps"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BIM 360 info",src:a(1049).Z,width:"1500",height:"1097"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Consider storing your client ID somewhere in ",(0,o.kt)("em",{parentName:"p"},"App Description"),". The client ID will ",(0,o.kt)("em",{parentName:"p"},"not"),"\nappear in the custom integration after it has been created, and if the number of integrations\nin your account starts to grow, this will help you quickly identify the APS application\neach custom integration is associated with.")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"When ready, scroll down and hit the ",(0,o.kt)("em",{parentName:"li"},"Save")," button")),(0,o.kt)("p",null,"After completing the process, your application will be able to use different APS services\nsuch as ",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/data/v2/developers_guide/overview"},"Data Management API"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/acc/v1/overview/introduction"},"ACC API"),"\nto access information from all projects under this ACC account."))}p.isMDXComponent=!0;const l={toc:[]};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you have ",(0,o.kt)("em",{parentName:"p"},"admin")," access to a BIM 360 account.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log into your BIM 360 account, and navigate to ",(0,o.kt)("em",{parentName:"p"},"Account Admin"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("em",{parentName:"p"},"Account Admin")," page, go to ",(0,o.kt)("em",{parentName:"p"},"Settings"),", and navigate to the ",(0,o.kt)("em",{parentName:"p"},"Custom Integrations")," tab"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom integrations tab",src:a(5657).Z,width:"1500",height:"1028"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("em",{parentName:"p"},"Add Custom Integration")," button on the left side to start a simple wizard\nthat will guide you through the process")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("em",{parentName:"p"},"Select Access")," page, keep both the ",(0,o.kt)("em",{parentName:"p"},"BIM 360 Account Administration"),"\nand the ",(0,o.kt)("em",{parentName:"p"},"Document Management")," options checked, and hit the ",(0,o.kt)("em",{parentName:"p"},"Next")," button"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select access",src:a(8487).Z,width:"1500",height:"1028"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"On the next page of the wizard, choose the ",(0,o.kt)("em",{parentName:"li"},"I'm the developer")," option, and hit\nthe ",(0,o.kt)("em",{parentName:"li"},"Next")," button")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select role",src:a(1198).Z,width:"1500",height:"1028"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Here we assume that the ",(0,o.kt)("em",{parentName:"p"},"account admin")," is also the owner of the APS application.\nIf that is not the case, the account administrator can use the ",(0,o.kt)("em",{parentName:"p"},"Invite a developer"),"\noption instead, and the invited developer will input the APS application details later.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"On the next and final page, make note of the ",(0,o.kt)("em",{parentName:"li"},"BIM 360 Account ID"),", check the\ncheckbox next to it, and fill out the ",(0,o.kt)("em",{parentName:"li"},"Client ID")," and the ",(0,o.kt)("em",{parentName:"li"},"App Name")," fields\nexactly as they appear in your application's page on ",(0,o.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/myapps"},"https://forge.autodesk.com/myapps"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BIM 360 info",src:a(1049).Z,width:"1500",height:"1097"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Consider storing your client ID somewhere in ",(0,o.kt)("em",{parentName:"p"},"App Description"),". The client ID will ",(0,o.kt)("em",{parentName:"p"},"not"),"\nappear in the custom integration after it has been created, and if the number of integrations\nin your account starts to grow, this will help you quickly identify the APS application\neach custom integration is associated with.")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"When ready, scroll down and hit the ",(0,o.kt)("em",{parentName:"li"},"Save")," button")),(0,o.kt)("p",null,"And that's it. Now your application can use different APS services such as\n",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/data/v2/developers_guide/overview"},"Data Management API"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/bim360/v1/overview/introduction"},"BIM 360 API"),"\nto access information from all projects under this BIM 360 account."))}c.isMDXComponent=!0;const m={slug:"/",sidebar_position:1},u="Getting Started",d={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Here's a couple of things you want to do before building your first",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/aps-tutorials-website/",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Environment Setup",permalink:"/aps-tutorials-website/setup/"}},h={},k=[{value:"Create an account",id:"create-an-account",level:2},{value:"Create app credentials",id:"create-app-credentials",level:2},{value:"Provision access in other products",id:"provision-access-in-other-products",level:2}],f={toc:k};function g(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Here's a couple of things you want to do before building your first\n",(0,o.kt)("a",{parentName:"p",href:"https://aps.autodesk.com"},"Autodesk Platform Services")," application."),(0,o.kt)("h2",{id:"create-an-account"},"Create an account"),(0,o.kt)("p",null,"If you don't have an APS account yet, sign up for one on ",(0,o.kt)("a",{parentName:"p",href:"https://aps.autodesk.com"},"https://aps.autodesk.com"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can take advantage of a trial subscription that is valid for 3 months.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign Up",src:a(4778).Z,width:"1500",height:"951"})),(0,o.kt)("h2",{id:"create-app-credentials"},"Create app credentials"),(0,o.kt)("p",null,"In order to authenticate ourselves to the APS platform, we will need to generate\n",(0,o.kt)("em",{parentName:"p"},"app credentials")," (specifically, a ",(0,o.kt)("em",{parentName:"p"},"client ID")," and ",(0,o.kt)("em",{parentName:"p"},"client secret"),") for our application.\nAfter logging into the developer portal, go to your profile menu in the top-right corner,\nand click on ",(0,o.kt)("em",{parentName:"p"},"Applications"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"My Apps",src:a(676).Z,width:"1500",height:"951"})),(0,o.kt)("p",null,"Next, click on the ",(0,o.kt)("em",{parentName:"p"},"Create application")," button:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create App",src:a(1174).Z,width:"1500",height:"951"})),(0,o.kt)("p",null,"Enter the name of your application, and click the ",(0,o.kt)("em",{parentName:"p"},"Create")," button:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Name",src:a(8564).Z,width:"1500",height:"951"})),(0,o.kt)("p",null,"And your application is now ready. Let's store your ",(0,o.kt)("em",{parentName:"p"},"Client ID")," and ",(0,o.kt)("em",{parentName:"p"},"Client Secret"),"\ncredentials as we will need these soon!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Overview",src:a(9937).Z,width:"1500",height:"896"})),(0,o.kt)("p",null,"Finally, set the ",(0,o.kt)("em",{parentName:"p"},"Callback URL")," under ",(0,o.kt)("em",{parentName:"p"},"General Settings")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/auth/callback"),",\nand enable the APIs you want your application to have access to. Unless you have any specific reason\nfor limiting your application's access to the different services, enable everything."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Update App",src:a(9931).Z,width:"1500",height:"951"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Pay close attention to the ",(0,o.kt)("em",{parentName:"p"},"Callback URL"),". This is the address your application's\nusers will be redirected to after logging in with their Autodesk credentials. It can be\nany arbitrary URL but it has to match exactly the URL your server application expects.\nIn our tutorials we will always use the same address: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/auth/callback"),".")),(0,o.kt)("p",null,"Finally, update the application by clicking on the ",(0,o.kt)("em",{parentName:"p"},"Save changes")," button, and you're all set!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save Changes",src:a(6961).Z,width:"1500",height:"951"})),(0,o.kt)("h2",{id:"provision-access-in-other-products"},"Provision access in other products"),(0,o.kt)("p",null,"In certain cases it is possible for your application to integrate with other APS-based products\nsuch as ",(0,o.kt)("a",{parentName:"p",href:"https://construction.autodesk.com"},"Autodesk Construction Cloud"),",\nor ",(0,o.kt)("a",{parentName:"p",href:"https://www.autodesk.com/bim-360"},"Autodesk BIM 360"),". We leverage this capability in\nthe ",(0,o.kt)("a",{parentName:"p",href:"./tutorials/hubs-browser"},"Hubs Browser")," tutorial where you can learn about accessing designs\nfrom ",(0,o.kt)("a",{parentName:"p",href:"https://www.autodesk.com/products/autodesk-docs/overview"},"Autodesk Docs"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.autodesk.com/bim-360/construction-document-management-software/"},"BIM 360 Docs"),",\nor ",(0,o.kt)("a",{parentName:"p",href:"https://www.autodesk.com/products/fusion-360/overview"},"Fusion Teams"),"."),(0,o.kt)("p",null,"However, some of these products must ",(0,o.kt)("em",{parentName:"p"},"provision access")," for a specific APS application\nbased on its client ID. Follow the steps below for any specific product you would like\nto integrate your application with."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are ",(0,o.kt)("em",{parentName:"p"},"not")," planning to integrate your application with other products for now,\nyou can skip the rest of this page and come back to it later when needed.")),(0,o.kt)(i.Z,{groupId:"access-provisioning",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"acc",label:"Autodesk Construction Cloud",default:!0,mdxType:"TabItem"},(0,o.kt)(p,{mdxType:"AccProvisioningSteps"})),(0,o.kt)(r.Z,{value:"bim360",label:"Autodesk BIM 360",mdxType:"TabItem"},(0,o.kt)(c,{mdxType:"Bim360ProvisioningSteps"})),(0,o.kt)(r.Z,{value:"fusion360",label:"Autodesk Fusion Team",mdxType:"TabItem"},(0,o.kt)("p",null,"No provisioning steps are needed. Your APS application can automatically access\nthe data of your authenticated users in this product."))))}g.isMDXComponent=!0},9931:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apis-7da278b13e1879cfd000f0f9e90c3de0.webp"},9937:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app-overview-2cfb85681afa049111d67e3a6924f76b.webp"},8564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-app-378f33b5c05afae321e064afaa7d66ff.webp"},676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/developer-portal-logged-in-b5fffdc874cc6c9ec13ba6b349b5e8f7.webp"},4778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/developer-portal-logged-out-c635aa2c6119caf60356e23498fdf54e.webp"},1174:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-apps-9ab86b55b038145bec5614a399663cae.webp"},6579:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/account-admin-3ce4766c11e857d08b152068b488b7d0.webp"},8268:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project-list-ef673182542a6c80829d938861e7ef87.webp"},1049:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bim360-info-cf7370a4b18bb3ca0c4bcdb29279b28c.webp"},5657:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom-integrations-c3e2d34681a13788b2311a90401e18b4.webp"},1198:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/i-am-developer-6981fd3d7f46994dd127cc854bec933f.webp"},8487:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-access-ff07d2a706c18f03f3fc6f60a99f7222.webp"},6961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/save-changes-ed8f97b334fa34087960e4239095e7ae.png"}}]);