"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[139],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?o.createElement(k,s(s({ref:n},c),{},{components:t})):o.createElement(k,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},425:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(7294),a=t(6010);const r="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,s),hidden:t},n)}},3992:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(7462),a=t(7294),r=t(6010),s=t(2957),i=t(6550),l=t(5238),u=t(3609),c=t(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,u]=k({queryString:t,groupId:o}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,c.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),h=(()=>{const e=l??p;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var h=t(1048);const f="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=u[t].value;o!==i&&(p(n),l(o))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,r.Z)("tabs__item",v,s?.className,{"tabs__item--active":i===n})}),t??n)})))}function T(e){let{lazy:n,children:t,selectedValue:o}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function C(e){const n=g(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",f)},a.createElement(b,(0,o.Z)({},e,n)),a.createElement(T,(0,o.Z)({},e,n)))}function A(e){const n=(0,h.Z)();return a.createElement(C,(0,o.Z)({key:String(n)},e))}},415:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(7294),a=t(3992),r=t(425);function s(e){let{NodeJsVsCode:n,DotNetVsCode:t,DotNetVs2022:s}=e;return o.createElement(a.Z,{groupId:"development-environment"},o.createElement(r.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},o.createElement(n,null)),o.createElement(r.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},o.createElement(t,null)),o.createElement(r.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},o.createElement(s,null)))}},2428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>S,contentTitle:()=>C,default:()=>y,frontMatter:()=>T,metadata:()=>A,toc:()=>_});var o=t(7462),a=(t(7294),t(4137)),r=t(415);const s={toc:[]};function i(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Crie um arquivo 'aps.js' na pasta 'services'. \xc9 aqui que vamos implementar\ntoda a l\xf3gica APS que ser\xe1 utilizada em diferentes \xe1reas da nossa aplica\xe7\xe3o de servidor. Vamos come\xe7ar\nadicionando o seguinte c\xf3digo ao arquivo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/aps.js"',title:'"services/aps.js"'},"const { SdkManagerBuilder } = require('@aps_sdk/autodesk-sdkmanager');\nconst { AuthenticationClient, Scopes, ResponseType } = require('@aps_sdk/authentication');\nconst { DataManagementClient } = require('@aps_sdk/data-management');\nconst { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_CALLBACK_URL } = require('../config.js');\nconst sdkManager = SdkManagerBuilder.create().build();\nconst authenticationClient = new AuthenticationClient(sdkManager);\nconst dataManagementClient = new DataManagementClient(sdkManager);\nconst service = module.exports = {};\nservice.getAuthorizationUrl = () => authenticationClient.authorize(APS_CLIENT_ID, ResponseType.Code, APS_CALLBACK_URL, [\n    Scopes.DataRead,\n    Scopes.DataCreate,\n    Scopes.ViewablesRead\n]);\nservice.authCallbackMiddleware = async (req, res, next) => {\n    const internalCredentials = await authenticationClient.getThreeLeggedToken(APS_CLIENT_ID, req.query.code, APS_CALLBACK_URL, {\n        clientSecret: APS_CLIENT_SECRET\n    });\n    const publicCredentials = await authenticationClient.getRefreshToken(APS_CLIENT_ID, internalCredentials.refresh_token, {\n        clientSecret: APS_CLIENT_SECRET,\n        scopes: [Scopes.ViewablesRead]\n    });\n    req.session.public_token = publicCredentials.access_token;\n    req.session.internal_token = internalCredentials.access_token;\n    req.session.refresh_token = publicCredentials.refresh_token;\n    req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    next();\n};\nservice.authRefreshMiddleware = async (req, res, next) => {\n    const { refresh_token, expires_at } = req.session;\n    if (!refresh_token) {\n        res.status(401).end();\n        return;\n    }\n    if (expires_at < Date.now()) {\n        const internalCredentials = await authenticationClient.getRefreshToken(APS_CLIENT_ID, refresh_token, {\n            clientSecret: APS_CLIENT_SECRET,\n            scopes: [Scopes.DataRead, Scopes.DataCreate]\n        });\n        const publicCredentials = await authenticationClient.getRefreshToken(APS_CLIENT_ID, internalCredentials.refresh_token, {\n            clientSecret: APS_CLIENT_SECRET,\n            scopes: [Scopes.ViewablesRead]\n        });\n        req.session.public_token = publicCredentials.access_token;\n        req.session.internal_token = internalCredentials.access_token;\n        req.session.refresh_token = publicCredentials.refresh_token;\n        req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    }\n    req.internalOAuthToken = {\n        access_token: req.session.internal_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000),\n    };\n    req.publicOAuthToken = {\n        access_token: req.session.public_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000),\n    };\n    next();\n};\nservice.getUserProfile = async (accessToken) => {\n    const resp = await authenticationClient.getUserInfo(accessToken);\n    return resp;\n};\n")),(0,a.kt)("p",null,"O c\xf3digo fornece algumas fun\xe7\xf5es auxiliares:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a fun\xe7\xe3o 'getAuthorizationUrl' gera uma URL para nossos usu\xe1rios serem redirecionados para quando\nIniciando o fluxo de trabalho de autentica\xe7\xe3o de 3 pernas"),(0,a.kt)("li",{parentName:"ul"},"a fun\xe7\xe3o 'authCallbackMiddleware' pode ser usada como um middleware Express.js\nquando o usu\xe1rio faz login com \xeaxito e \xe9 redirecionado de volta ao nosso aplicativo"),(0,a.kt)("li",{parentName:"ul"},"a fun\xe7\xe3o 'authRefreshMiddleware' \xe9 ent\xe3o usada como um middleware Express.js para todas as solicita\xe7\xf5es\nque precisar\xe3o fazer uso dos tokens de acesso APS"),(0,a.kt)("li",{parentName:"ul"},"a fun\xe7\xe3o 'getUserProfile' retorna detalhes adicionais sobre o usu\xe1rio autenticado com base em\num token de acesso existente")))}i.isMDXComponent=!0;const l={toc:[]};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Crie um arquivo 'auth.js' na subpasta 'rotas' com o seguinte conte\xfado:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/auth.js"',title:'"routes/auth.js"'},"const express = require('express');\nconst { getAuthorizationUrl, authCallbackMiddleware, authRefreshMiddleware, getUserProfile } = require('../services/aps.js');\nlet router = express.Router();\nrouter.get('/api/auth/login', function (req, res) {\n    res.redirect(getAuthorizationUrl());\n});\nrouter.get('/api/auth/logout', function (req, res) {\n    req.session = null;\n    res.redirect('/');\n});\nrouter.get('/api/auth/callback', authCallbackMiddleware, function (req, res) {\n    res.redirect('/');\n});\nrouter.get('/api/auth/token', authRefreshMiddleware, function (req, res) {\n    res.json(req.publicOAuthToken);\n});\nrouter.get('/api/auth/profile', authRefreshMiddleware, async function (req, res, next) {\n    try {\n        const profile = await getUserProfile(req.internalOAuthToken.access_token);\n        res.json({ name: `${profile.name}` });\n    } catch (err) {\n        next(err);\n    }\n});\nmodule.exports = router;\n")),(0,a.kt)("p",null,"Aqui implementamos um novo Express.js ",(0,a.kt)("a",{parentName:"p",href:"http://expressjs.com/en/4x/api.html#router"},"roteador")," que\nmanipular\xe1 todos os pontos de extremidade relacionados \xe0 autentica\xe7\xe3o. Vamos \"montar\" o roteador em nosso servidor\nmodificando 'server.js':"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session');\nconst { PORT, SERVER_SESSION_SECRET } = require('./config.js');\nlet app = express();\napp.use(express.static('wwwroot'));\napp.use(session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 }));\n// highlight-start\napp.use(require('./routes/auth.js'));\n// highlight-end\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")),(0,a.kt)("p",null,"O roteador agora lidar\xe1 com as seguintes solicita\xe7\xf5es:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/login' redirecionar\xe1 o usu\xe1rio para a p\xe1gina de login da Autodesk"),(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/callback' \xe9 a URL para a qual nosso usu\xe1rio ser\xe1 redirecionado ap\xf3s fazer login com sucesso,\ne \xe9 onde vamos gerar um novo conjunto de tokens para o usu\xe1rio"),(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/logout' remover\xe1 quaisquer dados de sess\xe3o baseados em cookies para o usu\xe1rio em quest\xe3o, efetivamente\nEfetuando logout do usu\xe1rio em nosso aplicativo"),(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/token' gerar\xe1 um token de acesso p\xfablico que posteriormente ser\xe1 usado pelo Viewer\npara carregar nossos projetos"),(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/profile' retornar\xe1 um JSON simples com informa\xe7\xf5es adicionais sobre o usu\xe1rio conectado")))}u.isMDXComponent=!0;const c={toc:[]};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Se o aplicativo ainda estiver em execu\xe7\xe3o, reinicie-o (por exemplo, usando ",(0,a.kt)("em",{parentName:"p"},"Run > Debugging")," Restart ,\nou clicando no \xedcone verde de reinicializa\xe7\xe3o), caso contr\xe1rio, inicie-o novamente (usando ",(0,a.kt)("em",{parentName:"p"},"Run > Debugging")," Iniciar,\nou pressionando 'F5')."),(0,a.kt)("p",null,"Quando voc\xea navega at\xe9 ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/login"},"http://localhost:8080/api/auth/login"),"\nno navegador, voc\xea deve ser redirecionado para a p\xe1gina de login da Autodesk e, depois de fazer login,\nvoc\xea deve ser redirecionado de volta para o seu aplicativo, por enquanto simplesmente mostrando 'N\xe3o \xe9 poss\xedvel GET /'.\nIsso \xe9 esperado, pois ainda n\xe3o implementamos o endpoint 'GET /'. No entanto, se voc\xea usar\nferramentas de desenvolvimento do navegador e explorar os cookies armazenados pelo seu navegador para a origem 'localhost',\nVoc\xea notar\xe1 que o aplicativo j\xe1 est\xe1 armazenando os dados de autentica\xe7\xe3o l\xe1."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Aqui \xe9 onde voc\xea pode encontrar os cookies do seu site em diferentes navegadores:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/storage/sessionstorage/"},"Chrome")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Cookies"},"Firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies"},"Borda")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/safari/tools/"},"Safari")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Empty Response",src:t(8351).Z,width:"1500",height:"929"})))}p.isMDXComponent=!0;const d={toc:[]};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Crie um arquivo 'APS.cs' na subpasta 'Modelos'. \xc9 aqui que vamos implementar\na l\xf3gica espec\xedfica do APS que ser\xe1 usada em diferentes \xe1reas de nossa aplica\xe7\xe3o de servidor. Vamos\nComece adicionando o seguinte c\xf3digo ao arquivo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/APS.cs"',title:'"Models/APS.cs"'},"using System;\nusing Autodesk.SDKManager;\nusing Autodesk.Authentication.Model;\nusing System.Collections.Generic;\npublic class Tokens\n{\n    public string InternalToken;\n    public string PublicToken;\n    public string RefreshToken;\n    public DateTime ExpiresAt;\n}\npublic partial class APS\n{\n    private readonly SDKManager _sdkManager;\n    private readonly string _clientId;\n    private readonly string _clientSecret;\n    private readonly string _callbackUri;\n    private readonly List<Scopes> InternalTokenScopes = new List<Scopes> { Scopes.DataRead, Scopes.ViewablesRead };\n    private readonly List<Scopes> PublicTokenScopes = new List<Scopes> { Scopes.ViewablesRead };\n    public APS(string clientId, string clientSecret, string callbackUri)\n    {\n        _sdkManager = SdkManagerBuilder.Create().Build();\n        _clientId = clientId;\n        _clientSecret = clientSecret;\n        _callbackUri = callbackUri;\n    }\n}\n")),(0,a.kt)("p",null,"Observe que a classe 'APS' \xe9 declarada como 'parcial'. Vamos prorrog\xe1-lo\nem outros arquivos '*.cs' mais tarde. Um singleton 'APS' ser\xe1 ent\xe3o fornecido ao nosso servidor\natrav\xe9s do ASP. NET's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"inje\xe7\xe3o de depend\xeancia"),"."),(0,a.kt)("p",null,"Em seguida, vamos criar um 'APS. Auth.cs' na subpasta 'Modelos' com o seguinte c\xf3digo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/APS.Auth.cs"',title:'"Models/APS.Auth.cs"'},"using System;\nusing System.Threading.Tasks;\nusing Autodesk.Authentication;\nusing Autodesk.Authentication.Model;\npublic partial class APS\n{\n    public string GetAuthorizationURL()\n    {\n        var authenticationClient = new AuthenticationClient(_sdkManager);\n        return authenticationClient.Authorize(_clientId, ResponseType.Code, _callbackUri, InternalTokenScopes);\n    }\n    public async Task<Tokens> GenerateTokens(string code)\n    {\n        var authenticationClient = new AuthenticationClient(_sdkManager);\n        var internalAuth = await authenticationClient.GetThreeLeggedTokenAsync(_clientId, _clientSecret, code, _callbackUri);\n        var publicAuth = await authenticationClient.GetRefreshTokenAsync(_clientId, _clientSecret, internalAuth.RefreshToken, PublicTokenScopes);\n        return new Tokens\n        {\n            PublicToken = publicAuth.AccessToken,\n            InternalToken = internalAuth.AccessToken,\n            RefreshToken = publicAuth._RefreshToken,\n            ExpiresAt = DateTime.Now.ToUniversalTime().AddSeconds((double)internalAuth.ExpiresIn)\n        };\n    }\n    public async Task<Tokens> RefreshTokens(Tokens tokens)\n    {\n        var authenticationClient = new AuthenticationClient(_sdkManager);\n        var internalAuth = await authenticationClient.GetRefreshTokenAsync(_clientId, _clientSecret, tokens.RefreshToken, InternalTokenScopes);\n        var publicAuth = await authenticationClient.GetRefreshTokenAsync(_clientId, _clientSecret, internalAuth._RefreshToken, PublicTokenScopes);\n        return new Tokens\n        {\n            PublicToken = publicAuth.AccessToken,\n            InternalToken = internalAuth.AccessToken,\n            RefreshToken = publicAuth._RefreshToken,\n            ExpiresAt = DateTime.Now.ToUniversalTime().AddSeconds((double)internalAuth.ExpiresIn)\n        };\n    }\n    public async Task<UserInfo> GetUserProfile(Tokens tokens)\n    {\n        var authenticationClient = new AuthenticationClient(_sdkManager);\n        UserInfo userInfo = await authenticationClient.GetUserInfoAsync(tokens.InternalToken);\n        return userInfo;\n    }\n}\n")),(0,a.kt)("p",null,"Esses m\xe9todos auxiliares ser\xe3o usados posteriormente nos controladores do nosso servidor para lidar com\nv\xe1rios tipos de solicita\xe7\xf5es relacionadas \xe0 autentica\xe7\xe3o, por exemplo, redirecionando o usu\xe1rio\npara a p\xe1gina de login da Autodesk, processando o retorno de chamada quando o usu\xe1rio \xe9 redirecionado de volta\npara o nosso aplicativo, ou atualizar tokens que expiraram."),(0,a.kt)("p",null,"Finalmente, vamos atualizar nosso arquivo 'Startup.cs' para fazer uma inst\xe2ncia singleton da classe 'APS'\nDispon\xedvel para o nosso aplicativo de servidor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n    public IConfiguration Configuration { get; }\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var clientID = Configuration["APS_CLIENT_ID"];\n        var clientSecret = Configuration["APS_CLIENT_SECRET"];\n        var callbackURL = Configuration["APS_CALLBACK_URL"];\n        if (string.IsNullOrEmpty(clientID) || string.IsNullOrEmpty(clientSecret) || string.IsNullOrEmpty(callbackURL))\n        {\n            throw new ApplicationException("Missing required environment variables APS_CLIENT_ID, APS_CLIENT_SECRET, or APS_CALLBACK_URL.");\n        }\n        // highlight-start\n        services.AddSingleton<APS>(new APS(clientID, clientSecret, callbackURL));\n        // highlight-end\n    }\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')))}m.isMDXComponent=!0;const k={toc:[]};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Crie um arquivo 'AuthController.cs' na subpasta 'Controladores' com o seguinte conte\xfado:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/AuthController.cs"',title:'"Controllers/AuthController.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Extensions.Logging;\n[ApiController]\n[Route("api/[controller]")]\npublic class AuthController : ControllerBase\n{\n    private readonly ILogger<AuthController> _logger;\n    private readonly APS _aps;\n    public AuthController(ILogger<AuthController> logger, APS aps)\n    {\n        _logger = logger;\n        _aps = aps;\n    }\n    public static async Task<Tokens> PrepareTokens(HttpRequest request, HttpResponse response, APS aps)\n    {\n        if (!request.Cookies.ContainsKey("internal_token"))\n        {\n            return null;\n        }\n        var tokens = new Tokens\n        {\n            PublicToken = request.Cookies["public_token"],\n            InternalToken = request.Cookies["internal_token"],\n            RefreshToken = request.Cookies["refresh_token"],\n            ExpiresAt = DateTime.Parse(request.Cookies["expires_at"])\n        };\n        if (tokens.ExpiresAt < DateTime.Now.ToUniversalTime())\n        {\n            tokens = await aps.RefreshTokens(tokens);\n            response.Cookies.Append("public_token", tokens.PublicToken);\n            response.Cookies.Append("internal_token", tokens.InternalToken);\n            response.Cookies.Append("refresh_token", tokens.RefreshToken);\n            response.Cookies.Append("expires_at", tokens.ExpiresAt.ToString());\n        }\n        return tokens;\n    }\n    [HttpGet("login")]\n    public ActionResult Login()\n    {\n        var redirectUri = _aps.GetAuthorizationURL();\n        return Redirect(redirectUri);\n    }\n    [HttpGet("logout")]\n    public ActionResult Logout()\n    {\n        Response.Cookies.Delete("public_token");\n        Response.Cookies.Delete("internal_token");\n        Response.Cookies.Delete("refresh_token");\n        Response.Cookies.Delete("expires_at");\n        return Redirect("/");\n    }\n    [HttpGet("callback")]\n    public async Task<ActionResult> Callback(string code)\n    {\n        var tokens = await _aps.GenerateTokens(code);\n        Response.Cookies.Append("public_token", tokens.PublicToken);\n        Response.Cookies.Append("internal_token", tokens.InternalToken);\n        Response.Cookies.Append("refresh_token", tokens.RefreshToken);\n        Response.Cookies.Append("expires_at", tokens.ExpiresAt.ToString());\n        return Redirect("/");\n    }\n    [HttpGet("profile")]\n    public async Task<dynamic> GetProfile()\n    {\n        var tokens = await PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        var profile = await _aps.GetUserProfile(tokens);\n        return new\n        {\n            name = profile.Name\n        };\n    }\n    [HttpGet("token")]\n    public async Task<dynamic> GetPublicToken()\n    {\n        var tokens = await PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        return new\n        {\n            access_token = tokens.PublicToken,\n            token_type = "Bearer",\n            expires_in = Math.Floor((tokens.ExpiresAt - DateTime.Now.ToUniversalTime()).TotalSeconds)\n        };\n    }\n}\n')),(0,a.kt)("p",null,"O controlador lida com v\xe1rios pontos de extremidade diferentes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/login' redirecionar\xe1 o usu\xe1rio para a p\xe1gina de login da Autodesk"),(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/callback' \xe9 a URL para a qual nosso usu\xe1rio ser\xe1 redirecionado ap\xf3s fazer login com sucesso,\ne \xe9 onde vamos gerar um novo conjunto de tokens para o usu\xe1rio"),(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/logout' remover\xe1 quaisquer dados de sess\xe3o baseados em cookies para o usu\xe1rio em quest\xe3o, efetivamente\nEfetuando logout do usu\xe1rio em nosso aplicativo"),(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/token' gerar\xe1 um token de acesso p\xfablico que posteriormente ser\xe1 usado pelo Viewer\npara carregar nossos projetos"),(0,a.kt)("li",{parentName:"ul"},"'GET /api/auth/profile' retornar\xe1 um JSON simples com informa\xe7\xf5es adicionais sobre o usu\xe1rio conectado")))}g.isMDXComponent=!0;const h={toc:[]};function f(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Se o aplicativo ainda estiver em execu\xe7\xe3o, reinicie-o (por exemplo, usando ",(0,a.kt)("em",{parentName:"p"},"Run > Debugging")," Restart ,\nou clicando no \xedcone verde de reinicializa\xe7\xe3o), caso contr\xe1rio, inicie-o novamente (usando ",(0,a.kt)("em",{parentName:"p"},"Run > Debugging")," Iniciar,\nou pressionando 'F5')."),(0,a.kt)("p",null,"Quando voc\xea navega at\xe9 ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/login"},"http://localhost:8080/api/auth/login"),"\nno navegador, voc\xea deve ser redirecionado para a p\xe1gina de login da Autodesk e, depois de fazer login, voc\xea deve\nser redirecionado de volta para o seu aplicativo, por enquanto simplesmente retornando 404. Isso \xe9 esperado, pois n\xe3o temos\nimplementou o ponto de extremidade 'GET /' ainda. No entanto, se voc\xea usar ferramentas de desenvolvimento do navegador e explorar os cookies\narmazenado pelo seu navegador para a origem 'localhost', voc\xea notar\xe1 que o aplicativo j\xe1 est\xe1\narmazenando os dados de autentica\xe7\xe3o l\xe1."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Aqui \xe9 onde voc\xea pode encontrar os cookies do seu site em diferentes navegadores:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/storage/sessionstorage/"},"Chrome")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Cookies"},"Firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies"},"Borda")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/safari/tools/"},"Safari")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Empty Response",src:t(8513).Z,width:"1500",height:"929"})))}f.isMDXComponent=!0;const v={toc:[]};function b(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Se o aplicativo ainda estiver em execu\xe7\xe3o, reinicie-o (por exemplo, usando ",(0,a.kt)("em",{parentName:"p"},"Debug > Restart"),",\nou pressionando 'Ctrl'+'Shift'+'F5'), caso contr\xe1rio, inicie-o novamente (usando ",(0,a.kt)("em",{parentName:"p"},"Debug > Debugging")," Iniciar,\nou pressionando 'F5')."),(0,a.kt)("p",null,"Quando voc\xea navega at\xe9 ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/login"},"http://localhost:8080/api/auth/login"),"\nno navegador, voc\xea deve ser redirecionado para a p\xe1gina de login da Autodesk e, depois de fazer login, voc\xea deve\nser redirecionado de volta para o seu aplicativo, por enquanto simplesmente retornando 404. Isso \xe9 esperado, pois n\xe3o temos\nimplementou o ponto de extremidade 'GET /' ainda. No entanto, se voc\xea usar ferramentas de desenvolvimento do navegador e explorar os cookies\narmazenado pelo seu navegador para a origem 'localhost', voc\xea notar\xe1 que o aplicativo j\xe1 est\xe1\narmazenando os dados de autentica\xe7\xe3o l\xe1."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Aqui \xe9 onde voc\xea pode encontrar os cookies do seu site em diferentes navegadores:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/storage/sessionstorage/"},"Chrome")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Cookies"},"Firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies"},"Borda")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/safari/tools/"},"Safari")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Empty Response",src:t(8513).Z,width:"1500",height:"929"})))}b.isMDXComponent=!0;const T={},C="Autentica\xe7\xe3o",A={unversionedId:"tutorials/hubs-browser/auth",id:"tutorials/hubs-browser/auth",title:"Autentica\xe7\xe3o",description:"Nesta etapa, vamos estender a implementa\xe7\xe3o do servidor para que ele possa se autenticar",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/03-tutorials/02-hubs-browser/02-auth.mdx",sourceDirName:"03-tutorials/02-hubs-browser",slug:"/tutorials/hubs-browser/auth",permalink:"/pt/tutorials/hubs-browser/auth",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/03-tutorials/02-hubs-browser/02-auth.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configura\xe7\xe3o do aplicativo",permalink:"/pt/tutorials/hubs-browser/setup"},next:{title:"Navega\xe7\xe3o de Dados",permalink:"/pt/tutorials/hubs-browser/data"}},S={},_=[{value:"Tokens de acesso",id:"tokens-de-acesso",level:2},{value:"Pontos de extremidade do servidor",id:"pontos-de-extremidade-do-servidor",level:2},{value:"Experimente",id:"experimente",level:2}],N={toc:_};function y(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),(0,a.kt)("p",null,"Nesta etapa, vamos estender a implementa\xe7\xe3o do servidor para que ele possa se autenticar\npara a plataforma APS, orientar o usu\xe1rio atrav\xe9s de um ",(0,a.kt)("a",{parentName:"p",href:"https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token"},"fluxo de trabalho OAuth de 3 pernas"),",\ne gerar tokens de acesso para diversas necessidades."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'\xc9 uma boa pr\xe1tica gerar um token "interno" com mais recursos (por exemplo,\npermitindo que o propriet\xe1rio crie ou exclua arquivos no servi\xe7o de Gerenciamento de Dados) que s\xf3 ser\xe3o usados\npelo servidor e um token "p\xfablico" com menos recursos que podem ser compartilhados com seguran\xe7a\na l\xf3gica do lado do cliente.')),(0,a.kt)("h2",{id:"tokens-de-acesso"},"Tokens de acesso"),(0,a.kt)(r.Z,{NodeJsVsCode:i,DotNetVsCode:m,DotNetVs2022:m,mdxType:"EnvTabs"}),(0,a.kt)("h2",{id:"pontos-de-extremidade-do-servidor"},"Pontos de extremidade do servidor"),(0,a.kt)("p",null,"Agora vamos expor essa funcionalidade por meio de uma cole\xe7\xe3o de endpoints em nosso servidor."),(0,a.kt)(r.Z,{NodeJsVsCode:u,DotNetVsCode:g,DotNetVs2022:g,mdxType:"EnvTabs"}),(0,a.kt)("h2",{id:"experimente"},"Experimente"),(0,a.kt)(r.Z,{NodeJsVsCode:p,DotNetVsCode:f,DotNetVs2022:b,mdxType:"EnvTabs"}))}y.isMDXComponent=!0},8513:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/empty-response-450925c17b800559c0109e7793d17786.webp"},8351:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/empty-response-449d92b063a2380003d09b03f156f917.webp"}}]);