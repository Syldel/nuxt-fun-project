import{l as h,y as w,z as x,n as v,A as E,B as b,g as D,C as k,D as A,E as q,G as S,H as C,I as P,J as $}from"./entry.4c251ed6.js";const O=()=>null;function B(...e){const o=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(o);let[t,l,n={}]=e;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=n.server??!0,n.default=n.default??O,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0;const a=b(),c=()=>a.isHydrating?a.payload.data[t]:a.static.data[t],p=()=>c()!==void 0;a._asyncData[t]||(a._asyncData[t]={data:h(c()??n.default()),pending:h(!p()),error:w(a.payload._errors,t),status:h("idle")});const s={...a._asyncData[t]};s.refresh=s.execute=(u={})=>{if(a._asyncDataPromises[t]){if(u.dedupe===!1)return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if((u._initial||a.isHydrating&&u._initial!==!1)&&p())return c();s.pending.value=!0,s.status.value="pending";const f=new Promise((r,i)=>{try{r(l(a))}catch(G){i(G)}}).then(r=>{if(f.cancelled)return a._asyncDataPromises[t];let i=r;n.transform&&(i=n.transform(r)),n.pick&&(i=j(i,n.pick)),s.data.value=i,s.error.value=null,s.status.value="success"}).catch(r=>{if(f.cancelled)return a._asyncDataPromises[t];s.error.value=r,s.data.value=D(n.default()),s.status.value="error"}).finally(()=>{f.cancelled||(s.pending.value=!1,a.payload.data[t]=s.data.value,s.error.value&&(a.payload._errors[t]=k(s.error.value)),delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=f,a._asyncDataPromises[t]};const y=()=>s.refresh({_initial:!0}),m=n.server!==!1&&a.payload.serverRendered;{const u=A();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const r=u._nuxtOnBeforeMountCbs;u&&(x(()=>{r.forEach(i=>{i()}),r.splice(0,r.length)}),v(()=>r.splice(0,r.length)))}m&&a.isHydrating&&p()?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):u&&(a.payload.serverRendered&&a.isHydrating||n.lazy)&&n.immediate?u._nuxtOnBeforeMountCbs.push(y):n.immediate&&y(),n.watch&&E(n.watch,()=>s.refresh());const f=a.hook("app:data:refresh",r=>{if(!r||r.includes(t))return s.refresh()});u&&v(f)}const d=Promise.resolve(a._asyncDataPromises[t]).then(()=>s);return Object.assign(d,s),d}function j(e,o){const t={};for(const l of o)t[l]=e[l];return t}function z(e){let o=e.text;return e.bold?o=`<strong>${e.text}</strong>`:e.italic&&(o=`<i>${e.text}</i>`),o}function H(e,o){switch(e.type){case"quote":return`<blockquote><p>${o}</p></blockquote>`;case"paragraph":return`<p>${o}</p>`;case"link":return`<a href="${e.href}">${o}</a>`;case"heading":return`<h${e.level}>${o}</h${e.level}>`;case"unordered-list":return`<ul>${o}</ul>`;case"list-item":return`<li>${o}</li>`;default:return o}}function M(e){return e.map(o=>{if(o.children){const t=o,l=M(t.children);return H(t,l)}else return z(o)}).join("")}const R=q`
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
    `,I=(e,o,t)=>e();function L(e,o=I){return{GetAllExperiences(t,l){return o(n=>e.request(R,t,{...l,...n}),"GetAllExperiences","query")},GetAllTechnos(t,l){return o(n=>e.request(T,t,{...l,...n}),"GetAllTechnos","query")}}}const Q={default:L},_={default:["GetAllExperiences","GetAllTechnos"]},F=()=>{const e=b();if(!e._gqlState)throw new Error("GQL State is not available.");return e==null?void 0:e._gqlState};function J(){const e=F(),o=K();return(...t)=>{var p;const l=(typeof(t==null?void 0:t[0])!="string"&&"operation"in(t==null?void 0:t[0])?t[0].operation:t[0])??void 0,n=(typeof(t==null?void 0:t[0])!="string"&&"variables"in(t==null?void 0:t[0])?t[0].variables:t[1])??void 0,a=Object.keys(_).find(s=>_[s].includes(l))??"default",{instance:c}=(p=e.value)==null?void 0:p[a];if(!c)throw new Error("Invalid GraphQL Operation");return Q[a](c,async(s,y,m)=>{var d,u,f,r;try{return await s()}catch(i){throw o.value={client:a,operationType:m,operationName:y,statusCode:(d=i==null?void 0:i.response)==null?void 0:d.status,gqlErrors:((u=i==null?void 0:i.response)==null?void 0:u.errors)||((f=i==null?void 0:i.response)==null?void 0:f.message)&&[{message:(r=i==null?void 0:i.response)==null?void 0:r.message}]||[]},e.value.onError&&e.value.onError(o.value),o.value}})[l](n)}}const K=()=>$("_gqlErrors",()=>null);function U(...e){const o=c=>c&&C(c)?c:P(c),t=(typeof(e==null?void 0:e[0])!="string"&&"options"in(e==null?void 0:e[0])?e[0].options:e[2])??{},l=(typeof(e==null?void 0:e[0])!="string"&&"operation"in(e==null?void 0:e[0])?e[0].operation:e[0])??void 0,n=(typeof(e==null?void 0:e[0])!="string"&&"variables"in(e==null?void 0:e[0])?o(e[0].variables):e[1]&&o(e[1]))??void 0;n&&(t.watch=t.watch||[],t.watch.push(n));const a=`gql:data:${S({operation:l,variables:n})}`;return B(a,()=>J()(l,D(n)),t)}export{M as s,U as u};
