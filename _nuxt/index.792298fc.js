import{q as h,z as w,A as x,v,B as E,C as b,g as D,D as k,E as A,G as q,H as S,I as C,r as P,J as $}from"./entry.719332b1.js";const O=()=>null;function B(...e){const o=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(o);let[t,u,n={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=n.server??!0,n.default=n.default??O,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0;const a=b(),c=()=>a.isHydrating?a.payload.data[t]:a.static.data[t],p=()=>c()!==void 0;a._asyncData[t]||(a._asyncData[t]={data:h(c()??n.default()),pending:h(!p()),error:w(a.payload._errors,t),status:h("idle")});const s={...a._asyncData[t]};s.refresh=s.execute=(l={})=>{if(a._asyncDataPromises[t]){if(l.dedupe===!1)return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if((l._initial||a.isHydrating&&l._initial!==!1)&&p())return c();s.pending.value=!0,s.status.value="pending";const f=new Promise((i,r)=>{try{i(u(a))}catch(G){r(G)}}).then(i=>{if(f.cancelled)return a._asyncDataPromises[t];let r=i;n.transform&&(r=n.transform(i)),n.pick&&(r=j(r,n.pick)),s.data.value=r,s.error.value=null,s.status.value="success"}).catch(i=>{if(f.cancelled)return a._asyncDataPromises[t];s.error.value=i,s.data.value=D(n.default()),s.status.value="error"}).finally(()=>{f.cancelled||(s.pending.value=!1,a.payload.data[t]=s.data.value,s.error.value&&(a.payload._errors[t]=k(s.error.value)),delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=f,a._asyncDataPromises[t]};const y=()=>s.refresh({_initial:!0}),m=n.server!==!1&&a.payload.serverRendered;{const l=A();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const i=l._nuxtOnBeforeMountCbs;l&&(x(()=>{i.forEach(r=>{r()}),i.splice(0,i.length)}),v(()=>i.splice(0,i.length)))}m&&a.isHydrating&&p()?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):l&&(a.payload.serverRendered&&a.isHydrating||n.lazy)&&n.immediate?l._nuxtOnBeforeMountCbs.push(y):n.immediate&&y(),n.watch&&E(n.watch,()=>s.refresh());const f=a.hook("app:data:refresh",i=>{if(!i||i.includes(t))return s.refresh()});l&&v(f)}const d=Promise.resolve(a._asyncDataPromises[t]).then(()=>s);return Object.assign(d,s),d}function j(e,o){const t={};for(const u of o)t[u]=e[u];return t}function z(e){let o=e.text;return e.bold?o=`<strong>${e.text}</strong>`:e.italic&&(o=`<i>${e.text}</i>`),o}function H(e,o){switch(e.type){case"quote":return`<blockquote><p>${o}</p></blockquote>`;case"paragraph":return`<p>${o}</p>`;case"link":return`<a href="${e.href}">${o}</a>`;case"heading":return`<h${e.level}>${o}</h${e.level}>`;case"unordered-list":return`<ul>${o}</ul>`;case"list-item":return`<li>${o}</li>`;default:return o}}function M(e){return e.map(o=>{if(o.children){const t=o,u=M(t.children);return H(t,u)}else return z(o)}).join("")}const R=q`
    query GetAllExperiences {
  experiences {
    endDate
    title
    job
    technos {
      id
      name
      blurhash
      image_40
      image_150
      image_300
    }
    blurhash
    content {
      document
    }
    id
    startDate
    technosCount
    image_40
    image_150
    image_300
    image_600
  }
}
    `,T=q`
    query GetAllTechnos {
  technos {
    id
    name
    experiencesCount
    blurhash
    image_40
    image_150
    image_300
    image_600
    experiences {
      id
      title
      image_150
      image_40
      image_300
      blurhash
    }
    content {
      document
    }
  }
}
    `,I=(e,o,t)=>e();function L(e,o=I){return{GetAllExperiences(t,u){return o(n=>e.request(R,t,{...u,...n}),"GetAllExperiences","query")},GetAllTechnos(t,u){return o(n=>e.request(T,t,{...u,...n}),"GetAllTechnos","query")}}}const Q={default:L},_={default:["GetAllExperiences","GetAllTechnos"]},F=()=>{const e=b();if(!e._gqlState)throw new Error("GQL State is not available.");return e==null?void 0:e._gqlState};function J(){const e=F(),o=K();return(...t)=>{var p;const u=(typeof(t==null?void 0:t[0])!="string"&&"operation"in(t==null?void 0:t[0])?t[0].operation:t[0])??void 0,n=(typeof(t==null?void 0:t[0])!="string"&&"variables"in(t==null?void 0:t[0])?t[0].variables:t[1])??void 0,a=Object.keys(_).find(s=>_[s].includes(u))??"default",{instance:c}=(p=e.value)==null?void 0:p[a];if(!c)throw new Error("Invalid GraphQL Operation");return Q[a](c,async(s,y,m)=>{var d,l,f,i;try{return await s()}catch(r){throw o.value={client:a,operationType:m,operationName:y,statusCode:(d=r==null?void 0:r.response)==null?void 0:d.status,gqlErrors:((l=r==null?void 0:r.response)==null?void 0:l.errors)||((f=r==null?void 0:r.response)==null?void 0:f.message)&&[{message:(i=r==null?void 0:r.response)==null?void 0:i.message}]||[]},e.value.onError&&e.value.onError(o.value),o.value}})[u](n)}}const K=()=>$("_gqlErrors",()=>null);function U(...e){const o=c=>c&&C(c)?c:P(c),t=(typeof(e==null?void 0:e[0])!="string"&&"options"in(e==null?void 0:e[0])?e[0].options:e[2])??{},u=(typeof(e==null?void 0:e[0])!="string"&&"operation"in(e==null?void 0:e[0])?e[0].operation:e[0])??void 0,n=(typeof(e==null?void 0:e[0])!="string"&&"variables"in(e==null?void 0:e[0])?o(e[0].variables):e[1]&&o(e[1]))??void 0;n&&(t.watch=t.watch||[],t.watch.push(n));const a=`gql:data:${S({operation:u,variables:n})}`;return B(a,()=>J()(u,D(n)),t)}export{M as s,U as u};
