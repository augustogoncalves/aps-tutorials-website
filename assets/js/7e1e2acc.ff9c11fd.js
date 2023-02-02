"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[576],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,w=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(w,r(r({ref:t},c),{},{components:n})):o.createElement(w,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),i=n(6010);const a="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,r),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7462),i=n(7294),a=n(6010),r=n(1048),l=n(3609),s=n(1943),d=n(2957);const c="tabList__CuJ",p="tabItem_LNqP";function u(e){const{lazy:t,block:n,defaultValue:r,values:u,groupId:m,className:w}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??h.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,s.U)(),[k,N]=(0,i.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=m){const e=y[m];null!=e&&e!==k&&f.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),o=f[n].value;o!==k&&(E(t),N(o),null!=m&&b(m,String(o)))},S=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},w)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,o.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>T.push(e),onKeyDown:S,onClick:C},r,{className:(0,a.Z)("tabs__item",p,r?.className,{"tabs__item--active":k===t})}),n??t)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,r.Z)();return i.createElement(u,(0,o.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),i=n(4259),a=n(425);function r(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:r}=e;return o.createElement(i.Z,{groupId:"development-environment"},o.createElement(a.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},o.createElement(t,null)),o.createElement(a.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},o.createElement(n,null)),o.createElement(a.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},o.createElement(r,null)))}},6536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>w,toc:()=>f});var o=n(7462),i=(n(7294),n(4137)),a=n(415);const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final folder structure",src:n(4155).Z,width:"1200",height:"930"})))}l.isMDXComponent=!0;const s={toc:[]};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final folder structure",src:n(8625).Z,width:"1200",height:"930"})))}d.isMDXComponent=!0;const c={toc:[]};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final folder structure",src:n(7516).Z,width:"1107",height:"700"})))}p.isMDXComponent=!0;const u={title:"Viewer & UI"},m="Viewer & UI",w={unversionedId:"tutorials/simple-viewer/viewer",id:"tutorials/simple-viewer/viewer",title:"Viewer & UI",description:"Finally, we're ready to build the client-side piece of our application.",source:"@site/docs/tutorials/01-simple-viewer/04-viewer.mdx",sourceDirName:"tutorials/01-simple-viewer",slug:"/tutorials/simple-viewer/viewer",permalink:"/tutorials/simple-viewer/viewer",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/tutorials/01-simple-viewer/04-viewer.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Viewer & UI"},sidebar:"tutorialSidebar",previous:{title:"Data & Derivatives",permalink:"/tutorials/simple-viewer/data"},next:{title:"Hubs Browser",permalink:"/tutorials/hubs-browser/"}},h={},f=[{value:"Viewer logic",id:"viewer-logic",level:2},{value:"Application logic",id:"application-logic",level:2},{value:"User interface",id:"user-interface",level:2},{value:"Try it out",id:"try-it-out",level:2}],v={toc:f};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"viewer--ui"},"Viewer & UI"),(0,i.kt)("p",null,"Finally, we're ready to build the client-side piece of our application."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you're developing with Node.js, you can use TypeScript definitions for the Viewer API.\nRun"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --dev @types/forge-viewer\n")),(0,i.kt)("p",{parentName:"admonition"},"in your terminal to add the TypeScript definition file to your project.")),(0,i.kt)("h2",{id:"viewer-logic"},"Viewer logic"),(0,i.kt)("p",null,"Let's start by implementing the Viewer functionality for our application.\nCreate a ",(0,i.kt)("inlineCode",{parentName:"p"},"viewer.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/viewer.js"',title:'"wwwroot/viewer.js"'},"/// import * as Autodesk from \"@types/forge-viewer\";\n\nasync function getAccessToken(callback) {\n    try {\n        const resp = await fetch('/api/auth/token');\n        if (!resp.ok) {\n            throw new Error(await resp.text());\n        }\n        const { access_token, expires_in } = await resp.json();\n        callback(access_token, expires_in);\n    } catch (err) {\n        alert('Could not obtain access token. See the console for more details.');\n        console.error(err);\n    }\n}\n\nexport function initViewer(container) {\n    return new Promise(function (resolve, reject) {\n        Autodesk.Viewing.Initializer({ getAccessToken }, function () {\n            const config = {\n                extensions: ['Autodesk.DocumentBrowser']\n            };\n            const viewer = new Autodesk.Viewing.GuiViewer3D(container, config);\n            viewer.start();\n            viewer.setTheme('light-theme');\n            resolve(viewer);\n        });\n    });\n}\n\nexport function loadModel(viewer, urn) {\n    return new Promise(function (resolve, reject) {\n        function onDocumentLoadSuccess(doc) {\n            resolve(viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()));\n        }\n        function onDocumentLoadFailure(code, message, errors) {\n            reject({ code, message, errors });\n        }\n        viewer.setLightPreset(0);\n        Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);\n    });\n}\n")),(0,i.kt)("p",null,"The script is an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"ES6 module"),"\nthat exports two functions, ",(0,i.kt)("inlineCode",{parentName:"p"},"initViewer")," that will create a new instance of the Viewer\nin the specified DOM container, and ",(0,i.kt)("inlineCode",{parentName:"p"},"loadModel")," which will load a specific model to the viewer.\nWhen initializing the viewer we include a small helper function (",(0,i.kt)("inlineCode",{parentName:"p"},"getAccessToken"),") that\nretrieves a public token from our server application. The viewer can then use this token\nto start loading assets from the Model Derivative service."),(0,i.kt)("h2",{id:"application-logic"},"Application logic"),(0,i.kt)("p",null,"Next, let's define the logic of the web application itself. We will need to populate\nthe UI with all models available for viewing, as well as add UI for uploading and\ntranslating new models. Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.js")," file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/main.js"',title:'"wwwroot/main.js"'},"import { initViewer, loadModel } from './viewer.js';\n\ninitViewer(document.getElementById('preview')).then(viewer => {\n    const urn = window.location.hash?.substring(1);\n    setupModelSelection(viewer, urn);\n    setupModelUpload(viewer);\n});\n\nasync function setupModelSelection(viewer, selectedUrn) {\n    const dropdown = document.getElementById('models');\n    dropdown.innerHTML = '';\n    try {\n        const resp = await fetch('/api/models');\n        if (!resp.ok) {\n            throw new Error(await resp.text());\n        }\n        const models = await resp.json();\n        dropdown.innerHTML = models.map(model => `<option value=${model.urn} ${model.urn === selectedUrn ? 'selected' : ''}>${model.name}</option>`).join('\\n');\n        dropdown.onchange = () => onModelSelected(viewer, dropdown.value);\n        if (dropdown.value) {\n            onModelSelected(viewer, dropdown.value);\n        }\n    } catch (err) {\n        alert('Could not list models. See the console for more details.');\n        console.error(err);\n    }\n}\n\nasync function setupModelUpload(viewer) {\n    const upload = document.getElementById('upload');\n    const input = document.getElementById('input');\n    const models = document.getElementById('models');\n    upload.onclick = () => input.click();\n    input.onchange = async () => {\n        const file = input.files[0];\n        let data = new FormData();\n        data.append('model-file', file);\n        if (file.name.endsWith('.zip')) { // When uploading a zip file, ask for the main design file in the archive\n            const entrypoint = window.prompt('Please enter the filename of the main design inside the archive.');\n            data.append('model-zip-entrypoint', entrypoint);\n        }\n        upload.setAttribute('disabled', 'true');\n        models.setAttribute('disabled', 'true');\n        showNotification(`Uploading model <em>${file.name}</em>. Do not reload the page.`);\n        try {\n            const resp = await fetch('/api/models', { method: 'POST', body: data });\n            if (!resp.ok) {\n                throw new Error(await resp.text());\n            }\n            const model = await resp.json();\n            setupModelSelection(viewer, model.urn);\n        } catch (err) {\n            alert(`Could not upload model ${file.name}. See the console for more details.`);\n            console.error(err);\n        } finally {\n            clearNotification();\n            upload.removeAttribute('disabled');\n            models.removeAttribute('disabled');\n            input.value = '';\n        }\n    };\n}\n\nasync function onModelSelected(viewer, urn) {\n    if (window.onModelSelectedTimeout) {\n        clearTimeout(window.onModelSelectedTimeout);\n        delete window.onModelSelectedTimeout;\n    }\n    window.location.hash = urn;\n    try {\n        const resp = await fetch(`/api/models/${urn}/status`);\n        if (!resp.ok) {\n            throw new Error(await resp.text());\n        }\n        const status = await resp.json();\n        switch (status.status) {\n            case 'n/a':\n                showNotification(`Model has not been translated.`);\n                break;\n            case 'inprogress':\n                showNotification(`Model is being translated (${status.progress})...`);\n                window.onModelSelectedTimeout = setTimeout(onModelSelected, 5000, viewer, urn);\n                break;\n            case 'failed':\n                showNotification(`Translation failed. <ul>${status.messages.map(msg => `<li>${JSON.stringify(msg)}</li>`).join('')}</ul>`);\n                break;\n            default:\n                clearNotification();\n                loadModel(viewer, urn);\n                break; \n        }\n    } catch (err) {\n        alert('Could not load model. See the console for more details.');\n        console.error(err);\n    }\n}\n\nfunction showNotification(message) {\n    const overlay = document.getElementById('overlay');\n    overlay.innerHTML = `<div class=\"notification\">${message}</div>`;\n    overlay.style.display = 'flex';\n}\n\nfunction clearNotification() {\n    const overlay = document.getElementById('overlay');\n    overlay.innerHTML = '';\n    overlay.style.display = 'none';\n}\n")),(0,i.kt)("p",null,"The scripts will initialize the viewer, populate a dropdown element in the UI with models\nretrieved from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/models")," endpoint, and setup the file upload. And when one of the models\nin the dropdown is selected, the app logic will check the status of the model in APS (for example,\nwhether it's still being translated, or whether the translation failed), and load the model when\nit's available."),(0,i.kt)("h2",{id:"user-interface"},"User interface"),(0,i.kt)("p",null,"Finally, let's define the UI of our application with a simple HTML markup and CSS."),(0,i.kt)("p",null,"Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="wwwroot/index.html"',title:'"wwwroot/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <link rel="icon" type="image/x-icon" href="https://cdn.autodesk.io/favicon.ico">\n    <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css">\n    <link rel="stylesheet" href="/main.css">\n    <title>Autodesk Platform Services: Simple Viewer</title>\n</head>\n\n<body>\n    <div id="header">\n        <img class="logo" src="https://cdn.autodesk.io/logo/black/stacked.png" alt="Autodesk Platform Services">\n        <span class="title">Simple Viewer</span>\n        <select name="models" id="models"></select>\n        <button id="upload" title="Upload New Model">Upload</button>\n        <input style="display: none" type="file" id="input">\n    </div>\n    <div id="preview"></div>\n    <div id="overlay"></div>\n    <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"><\/script>\n    <script src="/main.js" type="module"><\/script>\n</body>\n\n</html>\n')),(0,i.kt)("p",null,"The HTML markup simply uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"<select>")," element as the dropdown for listing the viewable models,\nand an ",(0,i.kt)("inlineCode",{parentName:"p"},'<input type="file">')," element with a ",(0,i.kt)("inlineCode",{parentName:"p"},"<button>")," to handle the uploading of a new model."),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.css")," file, also under the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder, and populate it with these CSS rules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="wwwroot/main.css"',title:'"wwwroot/main.css"'},"body, html {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: ArtifaktElement;\n}\n\n#header, #preview, #overlay {\n    position: absolute;\n    width: 100%;\n}\n\n#header {\n    height: 3em;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#preview, #overlay {\n    top: 3em;\n    bottom: 0;\n}\n\n#overlay {\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 1em;\n    display: none;\n}\n\n#overlay > .notification {\n    margin: auto;\n    padding: 1em;\n    max-width: 50%;\n    background: white;\n}\n\n#header > * {\n    height: 2em;\n    margin: 0 0.5em;\n    font-size: 1em;\n    font-family: ArtifaktElement;\n}\n\n#header .title {\n    flex: 1 0 auto;\n    height: auto;\n}\n\n#models {\n    flex: 0 1 auto;\n    min-width: 2em;\n}\n")),(0,i.kt)("p",null,"The final folder structure of your application's source code should now look something like this:"),(0,i.kt)(a.Z,{NodeJsVsCode:l,DotNetVsCode:d,DotNetVs2022:p,mdxType:"EnvTabs"}),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"And that's it! Your application is now complete. Start (or restart) the app as usual, and navigate\nto ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," in your browser. You should be presented with\na simple UI, with a dropdown in the top-right corner that will eventually get populated with all models\navailable in your application's bucket, and with a button for uploading new models. As soon as you\nselect one of the names from the dropdown, the corresponding model will get loaded in the viewer occupying\nthe rest of the webpage."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you don't have any testing design files readily available, you can try some of these publicly\navailable ones:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://knowledge.autodesk.com/support/revit/getting-started/caas/CloudHelp/cloudhelp/2022/ENU/Revit-GetStarted/files/GUID-61EF2F22-3A1F-4317-B925-1E85F138BE88-htm.html"},"Revit 2022 sample project files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://knowledge.autodesk.com/support/autocad-mechanical/downloads/caas/downloads/content/autocad-mechanical-2022-sample-files.html"},"AutoCAD Mechanical 2022 sample files")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final App",src:n(2786).Z,width:"1500",height:"929"})))}g.isMDXComponent=!0},7516:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/final-folder-structure-ad1d37f07000012ac0516442cf92dc0e.webp"},8625:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/final-folder-structure-56aada673c0426afd6d4f9efcfd10227.webp"},2786:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/final-app-1d74142b78cd80113f3d4f9099aa34b5.webp"},4155:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/final-folder-structure-3c8aa9d92162a05d6aacc305a5b8f912.webp"}}]);