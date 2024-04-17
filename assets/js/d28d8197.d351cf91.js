"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[503],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,j=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(j,a(a({ref:t},l),{},{components:n})):r.createElement(j,a({ref:t},l))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var r=n(7462),s=(n(7294),n(4137));const o={toc:[]};function a(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"First, let's include the Account Admin SDK, add the ",(0,s.kt)("inlineCode",{parentName:"p"},"@aps_sdk/account-admin")," library, and also create an instance of\nSDK client of ",(0,s.kt)("inlineCode",{parentName:"p"},"AdminClient")," at the beginning of ",(0,s.kt)("inlineCode",{parentName:"p"},"services/aps.js")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/aps.js"',title:'"services/aps.js"'},"const { SdkManagerBuilder } = require('@aps_sdk/autodesk-sdkmanager');\nconst { AuthenticationClient, Scopes, ResponseType } = require('@aps_sdk/authentication');\nconst { DataManagementClient } = require('@aps_sdk/data-management');\n// highlight-start\nconst { AdminClient } = require('@aps_sdk/account-admin');\n// highlight-end\nconst { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_CALLBACK_URL } = require('../config.js');\n\nconst service = module.exports = {};\n\nconst sdk = SdkManagerBuilder.create().build();\nconst authenticationClient = new AuthenticationClient(sdk);\nconst dataManagementClient = new DataManagementClient(sdk);\n// highlight-start\nconst adminClient = new AdminClient(sdk);\n// highlight-end\n")),(0,s.kt)("p",null,"Now append the following code to the end of the ",(0,s.kt)("inlineCode",{parentName:"p"},"services/aps.js")," file to support export & import projects and users:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/aps.js"',title:'"services/aps.js"'},'// ACC Admin APIs\nservice.getProjectsACC = async (accountId, token) => {\n    let allProjects = [];\n    let offset = 0;\n    let totalResults = 0;\n    do {\n        const resp = await adminClient.getProjects(token, accountId, {offset:offset});\n        allProjects = allProjects.concat(resp.results);\n        offset += resp.pagination.limit;\n        totalResults = resp.pagination.totalResults;\n    } while (offset < totalResults)\n    return allProjects;\n};\n\nservice.createProjectACC = async (accountId, projectInfo, token) =>{\n    const resp = await adminClient.createProject( token, accountId, projectInfo );\n    return resp;\n}\n\nservice.getProjectACC = async (projectId, token) => {\n    let projectsList = [];\n    const resp = await adminClient.getProject( token, projectId );\n    projectsList.push(resp);\n    return projectsList;\n};\n\nservice.getProjectUsersACC = async (projectId, token) => {\n    let allUsers = [];\n    let offset = 0;\n    let totalResults = 0;\n    do{\n        const resp = await adminClient.getProjectUsers( token, projectId, {offset:offset});\n        allUsers = allUsers.concat(resp.results);\n        offset += resp.pagination.limit;\n        totalResults = resp.pagination.totalResults;\n    }while (offset < totalResults) \n    return allUsers;\n};\n\nservice.addProjectAdminACC = async (projectId, email, token) => {\n    const userBody = {\n        "email": email,\n        "products": [{\n            "key": "projectAdministration",\n            "access": "administrator"\n        }, {\n            "key": "docs",\n            "access": "administrator"\n        }]\n    }\n    const resp = await adminClient.assignProjectUser( token, projectId, userBody );\n    return resp;\n}\n\nservice.importProjectUsersACC = async (projectId, projectUsers, token) => {\n    const resp = await adminClient.importProjectUsers( token, projectId, projectUsers )\n    return resp;\n}\n')))}a.isMDXComponent=!0;const i={toc:[]};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Create a ",(0,s.kt)("inlineCode",{parentName:"p"},"admin.js")," file under the ",(0,s.kt)("inlineCode",{parentName:"p"},"routes")," subfolder with the following content:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/admin.js"',title:'"routes/admin.js"'},"const express = require('express');\nvar bodyParser = require('body-parser');\n\nconst { authRefreshMiddleware, getProjectsACC, getProjectACC, getProjectUsersACC, createProjectACC, importProjectUsersACC, addProjectAdminACC, getUserProfile } = require('../services/aps.js');\n\nlet router = express.Router();\n\nrouter.use(authRefreshMiddleware);\n\nrouter.get('/api/admin/projects', async function(req, res, next){\n    try {\n        const projects = await getProjectsACC( req.query.accountId, req.oAuthToken.access_token);\n        res.json(projects);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.get('/api/admin/project', async function(req, res, next){\n    try {\n        const projectInfo = await getProjectACC( req.query.projectId, req.oAuthToken.access_token);\n        res.json(projectInfo);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.post('/api/admin/projects', bodyParser.json(), async function (req, res, next) {\n    const accountId = req.body.accountId;\n    const projects = req.body.data;\n    let projectsCreated = [];\n    let projectsFailed = [];\n    await Promise.all(\n        projects.map(async (project) => {\n            try{\n                const projectInfo = await createProjectACC(accountId, project, req.oAuthToken.access_token);\n                projectsCreated.push(projectInfo.name);\n                const profile = await getUserProfile(req.oAuthToken);\n                await addProjectAdminACC( projectInfo.id, profile.email, req.oAuthToken.access_token )\n            }catch(err){\n                console.warn(\"Failed to create project for: \"+ project.name + \"due to: \"+ err )\n                projectsFailed.push( project.name )\n            }\n        })\n    )\n    res.json({'Succeed':projectsCreated, 'Failed': projectsFailed });\n});\n\nrouter.get('/api/admin/project/users', async function (req, res, next) {\n    try {\n        const users = await getProjectUsersACC(req.query.projectId, req.oAuthToken.access_token);\n        res.json(users);\n    } catch (err) {\n        next(err);\n    }\n});\n\nrouter.post('/api/admin/project/users', bodyParser.json(), async function (req, res, next) {\n    const projectId = req.body.projectId;\n    const users = { \n        'users': req.body.data \n    };\n    try {\n        const usersRes = await importProjectUsersACC(projectId, users, req.oAuthToken.access_token);\n        res.json(usersRes);\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,s.kt)("p",null,"And mount the router to our server application by modifying ",(0,s.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session');\nconst { PORT, SERVER_SESSION_SECRET } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\napp.use(session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 }));\napp.use(require('./routes/auth.js'));\napp.use(require('./routes/hubs.js'));\n// highlight-start\napp.use(require('./routes/admin.js'));\n// highlight-end\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")))}c.isMDXComponent=!0;const p={},l="Account Admin",u={unversionedId:"tutorials/acc-admin/admin",id:"tutorials/acc-admin/admin",title:"Account Admin",description:"Now, it's time to implement our server to support Account Admin access, in this step, we'll",source:"@site/docs/03-tutorials/05-acc-admin/04-admin.mdx",sourceDirName:"03-tutorials/05-acc-admin",slug:"/tutorials/acc-admin/admin",permalink:"/tutorials/acc-admin/admin",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/03-tutorials/05-acc-admin/04-admin.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project Browsing",permalink:"/tutorials/acc-admin/data"},next:{title:"UI Framework",permalink:"/tutorials/acc-admin/ui"}},d={},m=[{value:"Projects &amp; Users",id:"projects--users",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],j={toc:m};function h(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},j,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"account-admin"},"Account Admin"),(0,s.kt)("p",null,"Now, it's time to implement our server to support Account Admin access, in this step, we'll\ncontinue extend our server based on ",(0,s.kt)("a",{parentName:"p",href:"https://aps.autodesk.com/en/docs/acc/v1/overview/field-guide/admin/"},"Account Admin APIs"),"\nto FETCH and CREATE the data of ACC Projects and Users:"),(0,s.kt)("h2",{id:"projects--users"},"Projects & Users"),(0,s.kt)("p",null,"First, let's add a couple of helper methods for getting and importing projects and users:"),(0,s.kt)(a,{mdxType:"NodeJsVsCodeHubs"}),(0,s.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,s.kt)("p",null,"Next, let's expose the new functionality to the client-side code through another\nset of endpoints."),(0,s.kt)(c,{mdxType:"NodeJsVsCodeEndpoints"}),(0,s.kt)("h2",{id:"try-it-out"},"Try it out"),(0,s.kt)("p",null,"And that's it for the server side. Time to try it out!"),(0,s.kt)("p",null,"Start (or restart) the app from Visual Studio Code as usual, "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use the ID of one ACC hub as you get in previous step in the address: http://localhost:8080/api/admin/projects?accountId={your-hub-id}.\nIn this case the server application should respond with a JSON list of all projects\navailable under the specified hub."),(0,s.kt)("li",{parentName:"ul"},"Use the project ID as you get in previous step, try to call the address:\nhttp://localhost:8080/api/admin/project/users?projectId={your-project-id}, the server application should\nrespond with a JSON list of all the users from this project. ")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"You may get different project list by the 2 differnt endpoints, here are the explain:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"With Data Management API, it will return all the projects that the current user is involved."),(0,s.kt)("li",{parentName:"ul"},"With Account Admin API, it will return all the projects in the account if the current user is Account Admin."))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Account Admin Response",src:n(3132).Z,width:"1921",height:"1054"})))}h.isMDXComponent=!0},3132:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/account-admin-ad482cceb50c48905b5b8d6902ef303c.webp"}}]);