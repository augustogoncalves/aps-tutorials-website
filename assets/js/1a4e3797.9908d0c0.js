"use strict";(self.webpackChunkaps_samples_docs=self.webpackChunkaps_samples_docs||[]).push([[920],{8374:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(7294),c=a(2263),l=a(9861),r=a(5742),s=a(9960),u=a(6775),o=a(412);const m=function(){const e=(0,u.k6)(),t=(0,u.TH)(),{siteConfig:{baseUrl:a}}=(0,c.Z)();return{searchValue:o.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var h=a(22),p=a(8202),i=a(2539),d=a(726),_=a(1073),f=a(311),E=a(1029);function g(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}const I="searchQueryInput_CFBF",S="searchResultItem_U687",y="searchResultItemPath_uIbk",w="searchResultItemSummary_oZHr";var b=a(3926);function k(e){let{searchResult:{document:t,type:a,page:c,tokens:l,metadata:r}}=e;const u=0===a,o=2===a,m=(u?t.b:c.b).slice(),h=o?t.s:t.t;return u||m.push(c.t),n.createElement("article",{className:S},n.createElement("h2",null,n.createElement(s.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,i.C)(h,l):(0,d.o)(h,(0,_.m)(r,"t"),l,100)}})),m.length>0&&n.createElement("p",{className:y},(0,b.e)(m)),o&&n.createElement("p",{className:w,dangerouslySetInnerHTML:{__html:(0,d.o)(t.t,(0,_.m)(r,"t"),l,100)}}))}const v=function(){const{siteConfig:{baseUrl:e}}=(0,c.Z)(),{searchValue:t,updateSearchPath:a}=m(),[s,u]=(0,n.useState)(t),[o,i]=(0,n.useState)(),[d,_]=(0,n.useState)(),S=(0,n.useMemo)((()=>s?g(E.Iz.search_results_for,{keyword:s}):E.Iz.search_the_documentation),[s]);(0,n.useEffect)((()=>{a(s),o&&(s?o(s,(e=>{_(e)})):_(void 0))}),[s,o]);const y=(0,n.useCallback)((e=>{u(e.target.value)}),[]);return(0,n.useEffect)((()=>{t&&t!==s&&u(t)}),[t]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,h.w)(e);i((()=>(0,p.v)(t,a,100)))}()}),[e]),n.createElement(l.Z,null,n.createElement(r.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"}),n.createElement("title",null,S)),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,S),n.createElement("input",{type:"search",name:"q",className:I,"aria-label":"Search",onChange:y,value:s,autoComplete:"off",autoFocus:!0}),!o&&s&&n.createElement("div",null,n.createElement(f.Z,null)),d&&(d.length>0?n.createElement("p",null,g(1===d.length?E.Iz.count_documents_found:E.Iz.count_documents_found_plural,{count:d.length})):n.createElement("p",null,E.Iz.no_documents_were_found)),n.createElement("section",null,d&&d.map((e=>n.createElement(k,{key:e.document.i,searchResult:e}))))))}}}]);