"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7462),a=n(7294),r=n(6010),i=n(2389),s=n(7392),l=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:h,groupId:g,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=h?h:k.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),w=(0,s.l)(N,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:C}=(0,l.U)(),[E,y]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=g){const e=v[g];null!=e&&e!==E&&N.some((t=>t.value===e))&&y(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),o=N[n].value;o!==E&&(S(t),y(o),null!=g&&C(g,String(o)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var o;const t=T.indexOf(e.currentTarget)+1;n=null!=(o=T[t])?o:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},f)},N.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:R,onFocus:j,onClick:j},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},9381:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(5488),r=n(5162);function i(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:i}=e;return o.createElement(a.Z,{groupId:"development-environment"},o.createElement(r.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},o.createElement(t,null)),o.createElement(r.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},o.createElement(n,null)),o.createElement(r.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},o.createElement(i,null)))}},70:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>D,default:()=>M,frontMatter:()=>_,metadata:()=>x,toc:()=>L});var o=n(7462),a=(n(7294),n(3905)),r=n(9381);const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a new folder for your project, navigate to it in the command line,\nand initialize a new Node.js project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,a.kt)("p",null,"Next, install all the Node.js dependencies we're going to use. In this case it will be\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com"},"Express.js")," framework, an Express.js ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/guide/using-middleware.html"},"middleware"),"\nfor handling cookie-based sessions, and finally the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/forge-apis"},"Forge SDK"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save express cookie-session forge-apis\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},'"dependencies"')," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file should now look something like this\n(potentially with slightly different version numbers):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"dependencies": {\n    "cookie-session": "^1.4.0",\n    "express": "^4.17.1",\n    "forge-apis": "^0.8.6"\n},\n// ...\n')),(0,a.kt)("p",null,"Finally, let's create a couple more subfolders in your project folder that we're going to need later:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wwwroot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"routes")," - this is where we're going to implement all the server endpoints"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"services")," - here we're going to keep all the server-side logic that can be shared by different endpoints")))}s.isMDXComponent=!0;const l={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.js")," file in the root of your project folder, and add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config.js"',title:'"config.js"'},"let { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, SERVER_SESSION_SECRET, PORT } = process.env;\nif (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_CALLBACK_URL || !SERVER_SESSION_SECRET) {\n    console.warn('Missing some of the environment variables.');\n    process.exit(1);\n}\nconst INTERNAL_TOKEN_SCOPES = ['data:read'];\nconst PUBLIC_TOKEN_SCOPES = ['viewables:read'];\nPORT = PORT || 8080;\n\nmodule.exports = {\n    FORGE_CLIENT_ID,\n    FORGE_CLIENT_SECRET,\n    FORGE_CALLBACK_URL,\n    SERVER_SESSION_SECRET,\n    INTERNAL_TOKEN_SCOPES,\n    PUBLIC_TOKEN_SCOPES,\n    PORT\n};\n")),(0,a.kt)("p",null,"We simply read the environment variables from ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env"),", and exit the application\nimmediately if any of the required properties are missing."),(0,a.kt)("p",null,"Now, to pass actual configuration values to our application for debugging purposes, we need to create\na ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launch-configurations"},"launch configuration"),".\nUse ",(0,a.kt)("em",{parentName:"p"},"Run > Add Configuration")," in the menu to create a new configuration, and when prompted\nfor the specific environment, choose ",(0,a.kt)("em",{parentName:"p"},"Node.js"),". This will create a new ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode"),"\nsubfolder in your project with a ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json")," file where you can define different\nlaunch configurations. Replace the content of the file with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/launch.json"',title:'".vscode/launch.json"'},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "node",\n            "request": "launch",\n            "name": "Launch Server",\n            "runtimeExecutable": "npm",\n            "runtimeArgs": [\n                "start"\n            ],\n            "envFile": "${workspaceFolder}/.env",\n            "skipFiles": [\n                "<node_internals>/**/*.js"\n            ]\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"We are defining a single launch configuration called ",(0,a.kt)("em",{parentName:"p"},"Launch Server")," that will start\nour application (using the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," command), and what is more important, it will\nlook for a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the project folder, and provide any ",(0,a.kt)("inlineCode",{parentName:"p"},'<key>="<value>"')," pairs\ndefined in this file as environment variables to our application. Let's create\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the project folder, and populate it with our environment variables\n(using your own values instead of the placeholders of course):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:'language-title=".env"'},'FORGE_CLIENT_ID="your-client-id"\nFORGE_CLIENT_SECRET="your-client-secret"\nFORGE_CALLBACK_URL="http://localhost:8080/api/auth/callback"\nSERVER_SESSION_SECRET="custom-encryption-phrase"\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file contains sensitive information, make sure that it is ",(0,a.kt)("strong",{parentName:"p"},"not")," included in git!\nThis can be ensured by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," line to the ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},".gitignore")," file.")))}p.isMDXComponent=!0;const c={toc:[]};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"server.js")," file in the root of your project folder with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session');\nconst { PORT, SERVER_SESSION_SECRET } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\napp.use(session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 }));\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")),(0,a.kt)("p",null,"For now the server isn't doing much, just serving client side assets from the ",(0,a.kt)("inlineCode",{parentName:"p"},"wwwroot")," subfolder,\nand accessing session data stored in cookies. The cookies will be encrypted using a secret phrase\nthat we will need to pass to the application via the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVER_SESSION_SECRET"),"."),(0,a.kt)("p",null,"Next, let's add a ",(0,a.kt)("inlineCode",{parentName:"p"},'"start": "node server.js"')," script to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file so that we can\neasily run our application later:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"scripts": {\n    "start": "node server.js"\n}\n// ...\n')))}u.isMDXComponent=!0;const d={toc:[]};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Start the application from Visual Studio Code (for example, via the ",(0,a.kt)("em",{parentName:"p"},"Run > Start Debugging"),"\nmenu, or by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F5"),"), and navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"\nin the browser. The server should respond with ",(0,a.kt)("inlineCode",{parentName:"p"},"Cannot GET /")," because we haven't added any\nlogic to it just yet. That's going to be the topic of the next step."))}m.isMDXComponent=!0;const h={toc:[]};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file in the root folder of your project with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var ForgeClientID = Configuration["FORGE_CLIENT_ID"];\n        var ForgeClientSecret = Configuration["FORGE_CLIENT_SECRET"];\n        var ForgeCallbackURL = Configuration["FORGE_CALLBACK_URL"];\n        if (string.IsNullOrEmpty(ForgeClientID) || string.IsNullOrEmpty(ForgeClientSecret) || string.IsNullOrEmpty(ForgeCallbackURL))\n        {\n            throw new ApplicationException("Missing required environment variables FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, or FORGE_CALLBACK_URL.");\n        }\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup"),' class is responsible for configuring our server and its "middleware" (for example,\nserving of static files), and for retrieving the configuration intpus from environment variables\n(or from other ',(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-6.0#configuration-providers"},"configuration providers"),")\nfor later use."),(0,a.kt)("p",null,"Now, to pass actual configuration values to our application for debugging purposes,\nwe will modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," file in our project folder,\nor create one of it does not exist, with the following content (using your own\nvalues instead of the placeholders of course):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft.AspNetCore": "Warning"\n    }\n  },\n  "FORGE_CLIENT_ID": "your-client-id",\n  "FORGE_CLIENT_SECRET": "your-client-secret",\n  "FORGE_CALLBACK_URL": "http://localhost:8080/api/auth/callback"\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," file contains sensitive information, make sure that it is ",(0,a.kt)("strong",{parentName:"p"},"not")," included in git!\nThis can be ensured by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.Development.json")," line to the ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},".gitignore")," file.")))}g.isMDXComponent=!0;const f={toc:[]};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Replace the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(webBuilder =>\n            {\n                webBuilder.UseStartup<Startup>();\n            });\n}\n")),(0,a.kt)("p",null,"This code will make sure that the .NET application creates a web server with our\nnew ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup")," class."),(0,a.kt)("p",null,"And finally, let's update the ",(0,a.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Properties")," folder to make\nsure that our server app is using the default protocol (HTTP) and port (8080) that we\nwill use throughout this tutorial. Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"applicationUrl")," property of the default\nlaunch profile to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "iisSettings": {\n    "windowsAuthentication": false,\n    "anonymousAuthentication": true,\n    "iisExpress": {\n      "applicationUrl": "http://localhost:38524",\n      "sslPort": 44323\n    }\n  },\n  "profiles": {\n    "my_forge_app": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      // highlight-start\n      "applicationUrl": "http://localhost:8080",\n      // highlight-end\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    },\n    "IIS Express": {\n      "commandName": "IISExpress",\n      "launchBrowser": true,\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    }\n  }\n}\n')))}k.isMDXComponent=!0;const N={toc:[]};function w(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Replace the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\npublic class Program\n{\n    public static void Main(string[] args)\n    {\n        CreateHostBuilder(args).Build().Run();\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .ConfigureWebHostDefaults(webBuilder =>\n            {\n                webBuilder.UseStartup<Startup>();\n            });\n}\n")),(0,a.kt)("p",null,"This code will make sure that the .NET application creates a web server with our\nnew ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup")," class."),(0,a.kt)("p",null,"And finally, let's update the ",(0,a.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Properties")," folder to make\nsure that our server app is using the default protocol (HTTP) and port (8080) that we\nwill use throughout this tutorial. Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"applicationUrl")," property of the default\nlaunch profile to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "iisSettings": {\n    "windowsAuthentication": false,\n    "anonymousAuthentication": true,\n    "iisExpress": {\n      "applicationUrl": "http://localhost:38524",\n      "sslPort": 44323\n    }\n  },\n  "profiles": {\n    "MyForgeApp": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      // highlight-start\n      "applicationUrl": "http://localhost:8080",\n      // highlight-end\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    },\n    "IIS Express": {\n      "commandName": "IISExpress",\n      "launchBrowser": true,\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    }\n  }\n}\n')))}w.isMDXComponent=!0;const b={toc:[]};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a new folder for your project, navigate to it in the command line, and initialize a new\nASP.NET Core project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new web\n")),(0,a.kt)("p",null,"Next we will need to install the dependencies. In this case it will just be the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Autodesk.Forge"},"Forge SDK"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Autodesk.Forge\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"*.csproj")," file in your project should now look similar to this (possibly with\nslightly different version numbers, and additional .NET settings):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <PackageReference Include="Autodesk.Forge" Version="1.9.0" />\n  </ItemGroup>\n\n</Project>\n')),(0,a.kt)("p",null,"Finally, let's create a couple more subfolders in your project folder that we're going to need later:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Controllers")," - this is where we're going to implement all the server endpoints"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Models")," - here we're going to keep all the server-side logic that can be shared by different endpoints"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wwwrooot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)")))}v.isMDXComponent=!0;const C={toc:[]};function E(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Start the application from Visual Studio Code (for example, via the ",(0,a.kt)("em",{parentName:"p"},"Run > Start Debugging"),"\nmenu, or by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F5"),"), and navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"\nin the browser. The server should respond with a 404 error because we haven't added any\nlogic to it just yet. That's going to be the topic of the next step."))}E.isMDXComponent=!0;var y=n(1294),T=n(2376);const S={toc:[]};function j(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(y.ZP,{mdxType:"SetupVS2022"}),(0,a.kt)(T.ZP,{mdxType:"AddDependencies"}))}j.isMDXComponent=!0;const R={toc:[]};function O(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Start the application from Visual Studio (for example, via the ",(0,a.kt)("em",{parentName:"p"},"Debug > Start Debugging"),"\nmenu, or by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"F5"),"), and it will automatically open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"\nin your browser. You should get a 404 response because we haven't implemented any server logic yet.\nThat's going to be the goal of the next step."))}O.isMDXComponent=!0;const _={title:"Application Setup"},D="Application Setup",x={unversionedId:"tutorials/hubs-browser/setup",id:"tutorials/hubs-browser/setup",title:"Application Setup",description:"Let's start by creating a new project, installing required dependencies, and setting up",source:"@site/docs/tutorials/02-hubs-browser/01-setup.mdx",sourceDirName:"tutorials/02-hubs-browser",slug:"/tutorials/hubs-browser/setup",permalink:"/forge-tutorials-website/tutorials/hubs-browser/setup",draft:!1,editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/02-hubs-browser/01-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Application Setup"},sidebar:"tutorialSidebar",previous:{title:"Hubs Browser",permalink:"/forge-tutorials-website/tutorials/hubs-browser/"},next:{title:"Authentication",permalink:"/forge-tutorials-website/tutorials/hubs-browser/auth"}},I={},L=[{value:"Create project",id:"create-project",level:2},{value:"Application config",id:"application-config",level:2},{value:"Create basic server",id:"create-basic-server",level:2},{value:"Try it out",id:"try-it-out",level:2}],P={toc:L};function M(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-setup"},"Application Setup"),(0,a.kt)("p",null,"Let's start by creating a new project, installing required dependencies, and setting up\na basic server application."),(0,a.kt)("h2",{id:"create-project"},"Create project"),(0,a.kt)(r.Z,{NodeJsVsCode:s,DotNetVsCode:v,DotNetVs2022:j,mdxType:"EnvTabs"}),(0,a.kt)("h2",{id:"application-config"},"Application config"),(0,a.kt)("p",null,"Our application will need a couple of configuration parameters to run properly, for example,\nthe credentials of our Forge app for communicating with Autodesk Forge services, or the callback URL\nwhere our users will be redirected to during the ",(0,a.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token/"},"3-legged authentication workflow"),".\nWe will pass these parameters to the server app using environment variables."),(0,a.kt)(r.Z,{NodeJsVsCode:p,DotNetVsCode:g,DotNetVs2022:g,mdxType:"EnvTabs"}),(0,a.kt)("h2",{id:"create-basic-server"},"Create basic server"),(0,a.kt)("p",null,"Next we'll setup a basic server application."),(0,a.kt)(r.Z,{NodeJsVsCode:u,DotNetVsCode:k,DotNetVs2022:w,mdxType:"EnvTabs"}),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)(r.Z,{NodeJsVsCode:m,DotNetVsCode:E,DotNetVs2022:O,mdxType:"EnvTabs"}))}M.isMDXComponent=!0},1294:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(7462),a=(n(7294),n(3905));const r={toc:[]};function i(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a new project in Visual Studio:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a new project",src:n(1646).Z,width:"1014",height:"675"})),(0,a.kt)("p",null,"Choose the ",(0,a.kt)("em",{parentName:"p"},"ASP.NET Core Empty")," template:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Choose a template",src:n(8703).Z,width:"1014",height:"675"})),(0,a.kt)("p",null,"Name the project any way you want:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configure project",src:n(5657).Z,width:"1014",height:"675"})),(0,a.kt)("p",null,"Choose the ",(0,a.kt)("em",{parentName:"p"},".NET 6.0 (Long-term support)")," framework, and disable HTTPS as we don't need it for now:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Additional information",src:n(6962).Z,width:"1014",height:"675"})),(0,a.kt)("p",null,"Once the project is ready, create the following subfolders in your project folder:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Controllers")," - this is where we're going to implement all the server endpoints"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Models")," - here we're going to keep all the server-side logic that can be shared by different endpoints"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wwwroot")," - this is where we're going to put all the client side assets (HTML, CSS, JavaScript, images, etc.)")))}i.isMDXComponent=!0},2376:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(7462),a=(n(7294),n(3905));const r={toc:[]};function i(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Next we will need to install the dependencies. In this case it will just be the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Autodesk.Forge"},"Forge SDK"),". In the ",(0,a.kt)("em",{parentName:"p"},"Solution Explorer"),",\nright-click on ",(0,a.kt)("em",{parentName:"p"},"Dependencies"),", and then click on ",(0,a.kt)("em",{parentName:"p"},"Manage NuGet Packages..."),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Manage NuGet dependencies",src:n(5956).Z,width:"1107",height:"700"})),(0,a.kt)("p",null,"In the ",(0,a.kt)("em",{parentName:"p"},"NuGet Package Manager"),", switch to the ",(0,a.kt)("em",{parentName:"p"},"Browse")," tab, and search for and install\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Autodesk.Forge")," package:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install Forge NuGet",src:n(5168).Z,width:"1107",height:"700"})))}i.isMDXComponent=!0},6962:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/additional-info-6e29504487f7fb2a46fbd5641cdc4691.webp"},8703:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/choose-template-0eaf8f177132a1714c44dc3d5409762a.webp"},5657:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/configure-project-b48d3053b5ea342d552d7694d51e47ca.webp"},1646:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-project-3eac278d9a7b3b12327e8ef2caf2136e.webp"},5168:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/install-forge-49a123a40cda48964f67efa730284411.webp"},5956:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/manage-nugets-1eab7cd026f7d73439c9063264b9b7e4.webp"}}]);