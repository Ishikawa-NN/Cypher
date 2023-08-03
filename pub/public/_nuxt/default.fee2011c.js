import{G as p,K as R,x as b,L as S,M as $,N as F,S as K,A as H,O as T,T as I,R as N,C as B,y as M,r as m,a as k,l as O,o as c,b as d,f as s,F as v,h as f,e as u,w as g,j as h,t as y,m as P,v as V,p as C,k as L,i as j,J as x}from"./entry.921a7e21.js";import{d as E}from"./defu.72e658dd.js";import{_ as w}from"./nuxt-link.a5aa0474.js";import{_ as U,a as D}from"./logo-text.add835f8.js";const Q=(t,o)=>o.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,a=>{var e;return((e=t.params[a.slice(1)])==null?void 0:e.toString())||""}),Y=(t,o)=>{const a=t.route.matched.find(i=>{var _;return((_=i.components)==null?void 0:_.default)===t.Component.type}),e=o??(a==null?void 0:a.meta.key)??(a&&Q(t.route,a));return typeof e=="function"?e(t.route):e},G=(t,o)=>({default:()=>t?p(R,t===!0?{}:t,o):o}),J=b({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:o}){const a=S();return()=>p(N,{name:t.name,route:t.route,...o},{default:e=>{if(!e.Component)return;const i=Y(e,t.pageKey),_=a.deferHydration(),r=!!(t.transition??e.route.meta.pageTransition??$),n=r&&z([t.transition,e.route.meta.pageTransition,$,{onAfterLeave:()=>{a.callHook("page:transition:finish",e.Component)}}].filter(Boolean));return F(I,r&&n,G(t.keepalive??e.route.meta.keepalive??T,p(K,{onPending:()=>a.callHook("page:start",e.Component),onResolve:()=>{H(()=>a.callHook("page:finish",e.Component).finally(_))}},{default:()=>p(W,{key:i,routeProps:e,pageKey:i,hasTransition:r})}))).default()}})}});function q(t){return Array.isArray(t)?t:t?[t]:[]}function z(t){const o=t.map(a=>({...a,onAfterLeave:q(a.onAfterLeave)}));return E(...o)}const W=b({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(t){const o=t.pageKey,a=t.routeProps.route,e={};for(const i in t.routeProps.route)e[i]=B(()=>o===t.pageKey?t.routeProps.route[i]:a[i]);return M("_route",m(e)),()=>p(t.routeProps.Component)}}),X=""+new URL("hamburger.2fb0aea3.svg",import.meta.url).href;const Z={name:"Header",setup(){const t=O(!1),o=()=>{t.value=!t.value};return{pageList:m([{to:"#",title:"ホーム"},{to:"#",title:"私達について"},{to:"#",title:"選ばれる理由"},{to:"#",title:"ワークフロー"},{to:"#",title:"FAQ"},{to:"#",title:"事例紹介"},{to:"#",title:"会社概要"},{to:"#",title:"お問合せ・お見積"}]),isOpenedMenu:t,isClickMenu:o}}},tt=t=>(C("data-v-24c4345e"),t=t(),L(),t),et={class:"header"},ot={class:"pc-header"},at={class:"nav"},nt={class:"nav-list"},st={class:"sp-header"},it=tt(()=>s("img",{src:X,alt:"",class:"stroke"},null,-1)),rt=[it],ct={class:"display-menu"},dt={class:"nav-list-sp"};function lt(t,o,a,e,i,_){const r=w;return c(),d("header",et,[s("div",ot,[s("nav",at,[s("ul",nt,[(c(!0),d(v,null,f(e.pageList,(n,l)=>(c(),d("li",{key:l},[u(r,{to:n.to},{default:g(()=>[h(y(n.title),1)]),_:2},1032,["to"])]))),128))])])]),s("div",st,[s("button",{onClick:o[0]||(o[0]=(...n)=>e.isClickMenu&&e.isClickMenu(...n)),class:"menu-button"},rt),P(s("div",ct,[s("ul",dt,[(c(!0),d(v,null,f(e.pageList,(n,l)=>(c(),d("li",{key:l},[u(r,{to:n.to},{default:g(()=>[h(y(n.title),1)]),_:2},1032,["to"])]))),128))])],512),[[V,e.isOpenedMenu]])])])}const _t=k(Z,[["render",lt],["__scopeId","data-v-24c4345e"]]),ut=""+new URL("icon-facebook.601b8cb9.svg",import.meta.url).href,pt=""+new URL("icon-instagram.494e4b55.svg",import.meta.url).href,mt=""+new URL("icon-pintarest.4e64ef52.svg",import.meta.url).href;const vt={name:"Footer",setup(){const t=m([{to:"#",title:"ホーム"},{to:"#",title:"私達について"},{to:"#",title:"選ばれる理由"},{to:"#",title:"ワークフロー"},{to:"#",title:"FAQ"},{to:"#",title:"事例紹介"}]),o=m([{to:"#",title:"会社概要"},{to:"#",title:"お問合せ・お見積"},{to:"#",title:"個人情報保護法について"}]);return{pageListFirst:t,pageListSecond:o}}},A=t=>(C("data-v-01d3ea27"),t=t(),L(),t),ft={class:"footer"},gt={class:"c-inner"},ht=A(()=>s("div",{class:"logo"},[s("img",{src:U,alt:"cypher"}),s("img",{src:D,alt:"interior design & Construction"})],-1)),yt={class:"nav"},kt={class:"list"},$t={class:"list"},xt=j('<div class="site-info" data-v-01d3ea27><p data-v-01d3ea27> 建築・建築デザイン・原状回復・内装解体・建物 解体・アスベスト除去工事はウラシコにお任せく ださい！<br data-v-01d3ea27><br data-v-01d3ea27><strong data-v-01d3ea27>株式会社ウラシコ<br class="is-sp" data-v-01d3ea27>CYPHER（サイファー）</strong><br data-v-01d3ea27> 〒454-0982<br data-v-01d3ea27> 愛知県名古屋市中川区西伏屋2丁目617番地<br data-v-01d3ea27> TEL : 052-655-4146 </p><div class="sns" data-v-01d3ea27><a href="" class="icon" data-v-01d3ea27><img src="'+ut+'" alt="facebook" data-v-01d3ea27></a><a href="" class="icon" data-v-01d3ea27><img src="'+pt+'" alt="instagram" data-v-01d3ea27></a><a href="" class="icon" data-v-01d3ea27><img src="'+mt+'" alt="pintarest" data-v-01d3ea27></a></div></div>',1),bt=A(()=>s("div",{class:"copyright"},[s("p",null,"Copyright(c) 店舗設計・デザイン ・施工CYPHER. AllRights Reserved")],-1));function Ct(t,o,a,e,i,_){const r=w;return c(),d("footer",ft,[s("div",gt,[ht,s("div",yt,[s("ul",kt,[(c(!0),d(v,null,f(e.pageListFirst,(n,l)=>(c(),d("li",{key:l},[u(r,{to:n.to},{default:g(()=>[h(y(n.title),1)]),_:2},1032,["to"])]))),128))]),s("ul",$t,[(c(!0),d(v,null,f(e.pageListSecond,(n,l)=>(c(),d("li",{key:l},[u(r,{to:n.to},{default:g(()=>[h(y(n.title),1)]),_:2},1032,["to"])]))),128))])]),xt]),bt])}const Lt=k(vt,[["render",Ct],["__scopeId","data-v-01d3ea27"]]);const wt={components:{Header:_t,Footer:Lt}},At={class:"wrapper"};function Rt(t,o,a,e,i,_){const r=x("Header"),n=J,l=x("Footer");return c(),d("div",At,[u(r),u(n),u(l)])}const Tt=k(wt,[["render",Rt],["__scopeId","data-v-83dc3627"]]);export{Tt as default};