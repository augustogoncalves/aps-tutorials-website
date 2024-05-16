"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[337],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(7462),a=n(7294),s=n(6010),o=n(2957),i=n(6550),l=n(5238),u=n(3609),c=n(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,u]=m({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=l??p;return h({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var g=n(1048);const f="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},o,{className:(0,s.Z)("tabs__item",k,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",f)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function j(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(3992),s=n(425);function o(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:o}=e;return r.createElement(a.Z,{groupId:"development-environment"},r.createElement(s.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},r.createElement(t,null)),r.createElement(s.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},r.createElement(n,null)),r.createElement(s.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},r.createElement(o,null)))}},2646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>y,frontMatter:()=>m,metadata:()=>g,toc:()=>k});var r=n(7462),a=(n(7294),n(4137)),s=n(415);const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's implement the logic for browsing through the individual hubs, projects, folders, items,\nand versions. Add the following code to the end of the ",(0,a.kt)("inlineCode",{parentName:"p"},"services/aps.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/aps.js"',title:'"services/aps.js"'},"service.getHubs = async (accessToken) => {\n    const resp = await dataManagementClient.getHubs(accessToken);\n    return resp.data;\n};\n\nservice.getProjects = async (hubId, accessToken) => {\n    const resp = await dataManagementClient.getHubProjects(accessToken, hubId);\n    return resp.data;\n};\n\nservice.getProjectContents = async (hubId, projectId, folderId, accessToken) => {\n    if (!folderId) {\n        const resp = await dataManagementClient.getProjectTopFolders(accessToken, hubId, projectId);\n        return resp.data;\n    } else {\n        const resp = await dataManagementClient.getFolderContents(accessToken, projectId, folderId);\n        return resp.data;\n    }\n};\n\nservice.getItemVersions = async (projectId, itemId, accessToken) => {\n    const resp = await dataManagementClient.getItemVersions(accessToken, projectId, itemId);\n    return resp.data;\n};\n")))}i.isMDXComponent=!0;const l={toc:[]};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"hubs.js")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," subfolder with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/hubs.js"',title:'"routes/hubs.js"'},"const express = require('express');\nconst { authRefreshMiddleware, getHubs, getProjects, getProjectContents, getItemVersions } = require('../services/aps.js');\n\nlet router = express.Router();\n\nrouter.use('/api/hubs', authRefreshMiddleware);\n\nrouter.get('/api/hubs', async function (req, res, next) {\n    try {\n        const hubs = await getHubs(req.internalOAuthToken.access_token);\n        res.json(hubs);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/api/hubs/:hub_id/projects', async function (req, res, next) {\n    try {\n        const projects = await getProjects(req.params.hub_id, req.internalOAuthToken.access_token);\n        res.json(projects);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/api/hubs/:hub_id/projects/:project_id/contents', async function (req, res, next) {\n    try {\n        const contents = await getProjectContents(req.params.hub_id, req.params.project_id, req.query.folder_id, req.internalOAuthToken.access_token);\n        res.json(contents);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/api/hubs/:hub_id/projects/:project_id/contents/:item_id/versions', async function (req, res, next) {\n    try {\n        const versions = await getItemVersions(req.params.project_id, req.params.item_id, req.internalOAuthToken.access_token);\n        res.json(versions);\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,a.kt)("p",null,"And mount the router to our server application by modifying ",(0,a.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session');\nconst { PORT, SERVER_SESSION_SECRET } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\napp.use(session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 }));\napp.use(require('./routes/auth.js'));\n// highlight-start\napp.use(require('./routes/hubs.js'));\n// highlight-end\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")))}u.isMDXComponent=!0;const c={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"APS.Hubs.cs")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Models")," subfolder with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/APS.Hubs.cs"',title:'"Models/APS.Hubs.cs"'},"using System.Collections.Generic;\nusing System.Threading.Tasks;\nusing Autodesk.DataManagement;\nusing Autodesk.DataManagement.Http;\nusing Autodesk.DataManagement.Model;\n\npublic partial class APS\n{\n    public async Task<IEnumerable<HubsData>> GetHubs(Tokens tokens)\n    {\n        var dataManagementClient = new DataManagementClient(_sdkManager);\n        var hubs = await dataManagementClient.GetHubsAsync(accessToken: tokens.InternalToken);\n        return hubs.Data;\n    }\n\n    public async Task<IEnumerable<ProjectsData>> GetProjects(string hubId, Tokens tokens)\n    {\n        var dataManagementClient = new DataManagementClient(_sdkManager);\n        var projects = await dataManagementClient.GetHubProjectsAsync(hubId, accessToken: tokens.InternalToken);\n        return projects.Data;\n    }\n\n    public async Task<IEnumerable<TopFoldersData>> GetTopFolders(string hubId, string projectId, Tokens tokens)\n    {\n        var dataManagementClient = new DataManagementClient(_sdkManager);\n        var folders = await dataManagementClient.GetProjectTopFoldersAsync(hubId, projectId, accessToken: tokens.InternalToken);\n        return folders.Data;\n    }\n\n    public async Task<IEnumerable<FolderContentsData>> GetFolderContents(string projectId, string folderId, Tokens tokens)\n    {\n        var dataManagementClient = new DataManagementClient(_sdkManager);\n        var contents = await dataManagementClient.GetFolderContentsAsync(projectId, folderId, accessToken: tokens.InternalToken);\n        return contents.Data;\n    }\n\n    public async Task<IEnumerable<VersionsData>> GetVersions(string projectId, string itemId, Tokens tokens)\n    {\n        var dataManagementClient = new DataManagementClient(_sdkManager);\n        var versions = await dataManagementClient.GetItemVersionsAsync(projectId, itemId, accessToken: tokens.InternalToken);\n        return versions.Data;\n    }\n}\n")))}p.isMDXComponent=!0;const d={toc:[]};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"HubsController.cs")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Controllers")," subfolder with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/HubsController.cs"',title:'"Controllers/HubsController.cs"'},'using System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Extensions.Logging;\nusing Newtonsoft.Json;\n\n[ApiController]\n[Route("api/[controller]")]\npublic class HubsController : ControllerBase\n{\n    private readonly ILogger<HubsController> _logger;\n    private readonly APS _aps;\n\n    public HubsController(ILogger<HubsController> logger, APS aps)\n    {\n        _logger = logger;\n        _aps = aps;\n    }\n\n    [HttpGet()]\n    public async Task<ActionResult<string>> ListHubs()\n    {\n        var tokens = await AuthController.PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        var hubs = await _aps.GetHubs(tokens);\n        return JsonConvert.SerializeObject(hubs);\n    }\n\n    [HttpGet("{hub}/projects")]\n    public async Task<ActionResult<string>> ListProjects(string hub)\n    {\n        var tokens = await AuthController.PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        var projects = await _aps.GetProjects(hub, tokens);\n        return JsonConvert.SerializeObject(projects);\n    }\n\n    [HttpGet("{hub}/projects/{project}/contents")]\n    public async Task<ActionResult<string>> ListItems(string hub, string project, [FromQuery] string? folder_id)\n    {\n        var tokens = await AuthController.PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        if (string.IsNullOrEmpty(folder_id))\n        {\n            var folders = await _aps.GetTopFolders(hub, project, tokens);\n            return JsonConvert.SerializeObject(folders);\n        }\n        else\n        {\n            var contents = await _aps.GetFolderContents(project, folder_id, tokens);\n            return JsonConvert.SerializeObject(contents);\n        }\n    }\n\n    [HttpGet("{hub}/projects/{project}/contents/{item}/versions")]\n    public async Task<ActionResult<string>> ListVersions(string hub, string project, string item)\n    {\n        var tokens = await AuthController.PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        var versions = await _aps.GetVersions(project, item, tokens);\n        return JsonConvert.SerializeObject(versions);\n    }\n}\n')),(0,a.kt)("p",null,"The controller handles several endpoints for browsing the content in other APS-based\napplications such as BIM 360 Docs and ACC. We will make use of these endpoints when\nbuilding the UI part of the application."))}h.isMDXComponent=!0;const m={},b="Data Browsing",g={unversionedId:"tutorials/hubs-browser/data",id:"tutorials/hubs-browser/data",title:"Data Browsing",description:"In this step we'll extend our server so that we can browse the content of other APS-based",source:"@site/docs/03-tutorials/02-hubs-browser/03-data.mdx",sourceDirName:"03-tutorials/02-hubs-browser",slug:"/tutorials/hubs-browser/data",permalink:"/tutorials/hubs-browser/data",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/03-tutorials/02-hubs-browser/03-data.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/tutorials/hubs-browser/auth"},next:{title:"Viewer & UI",permalink:"/tutorials/hubs-browser/viewer"}},f={},k=[{value:"Browsing hubs",id:"browsing-hubs",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],v={toc:k};function y(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-browsing"},"Data Browsing"),(0,a.kt)("p",null,"In this step we'll extend our server so that we can browse the content of other APS-based\napplications such as BIM 360 Docs or Autodesk Docs. We will basically follow the Data Management\nservice's hierarchy of hubs, projects, folders, items, and versions:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data Management structure",src:n(5649).Z,width:"1399",height:"864"})),(0,a.kt)("h2",{id:"browsing-hubs"},"Browsing hubs"),(0,a.kt)("p",null,"First, let's add a couple of helper methods for browsing through the hubs, projects,\nfolders, items, and versions:"),(0,a.kt)(s.Z,{NodeJsVsCode:i,DotNetVsCode:p,DotNetVs2022:p,mdxType:"EnvTabs"}),(0,a.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,a.kt)("p",null,"Next, let's expose the new functionality to the client-side code through another\nset of endpoints."),(0,a.kt)(s.Z,{NodeJsVsCode:u,DotNetVsCode:h,DotNetVs2022:h,mdxType:"EnvTabs"}),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("p",null,"And that's it for the server side. Time to try it out!"),(0,a.kt)("p",null,"Start (or restart) the app from Visual Studio Code as usual, and navigate to\n",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/api/hubs"},"http://localhost:8080/api/hubs")," in the browser.\nThe server should respond with a JSON list of all the hubs you have access to.\nTry copying the ID of one of the hubs, and use it in another address: http://localhost:8080/api/hubs/your-hub-id/projects.\nIn this case the server application should respond with a JSON list of all projects\navailable under the specified hub."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you skipped the login procedure in the previous step, or restarted your server application,\nyou may need to go to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/login"},"http://localhost:8080/api/auth/login"),"\nagain to make sure that all the authentication data is available in cookies before testing\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/hubs")," endpoint.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you are using Google Chrome, consider installing ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en"},"JSON Formatter"),"\nor a similar extension to automatically format JSON responses.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hubs Response",src:n(1930).Z,width:"1500",height:"929"})))}y.isMDXComponent=!0},5649:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dm-structure-b5f87fcf63e09968a2997e1df1c9d095.webp"},1930:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hubs-response-6ca89cc77b1e67f6197c74b8561d0115.webp"}}]);