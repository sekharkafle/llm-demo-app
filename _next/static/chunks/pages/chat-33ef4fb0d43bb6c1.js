(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[180],{22:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat",function(){return t(3239)}])},3239:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var a=t(5893),n=t(2920);t(1691);var l=t(3503),i=t(7294);function o(e){var s;let t="user"===e.message.role?"bg-sky-600":"bg-slate-50 text-black",n="user"===e.message.role?"ml-auto":"mr-auto",l="user"===e.message.role?"\uD83E\uDDD1":e.aiEmoji,i=e.message.content.replaceAll('"',"").trim().split("\\n");return(0,a.jsxs)("div",{className:"".concat(n," ").concat(t," rounded px-4 py-2 max-w-[80%] mb-8 flex"),children:[(0,a.jsx)("div",{className:"mr-2",children:l}),(0,a.jsxs)("div",{className:"whitespace-pre-line flex flex-col",children:[i.map((e,s)=>(0,a.jsx)("span",{children:e},"aidata:"+s)),e.sources&&e.sources.length?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{className:"mt-4 mr-auto bg-slate-600 px-2 py-1 rounded",children:(0,a.jsx)("h2",{children:"\uD83D\uDD0D Sources:"})}),(0,a.jsx)("code",{className:"mt-1 mr-2 bg-slate-600 px-2 py-1 rounded text-xs",children:null===(s=e.sources)||void 0===s?void 0:s.map((e,s)=>{var t,n,l,i,o,r,d,c;return(0,a.jsxs)("div",{className:"mt-2",children:[s+1,'. "',e.pageContent,'"',(null===(n=e.metadata)||void 0===n?void 0:null===(t=n.loc)||void 0===t?void 0:t.lines)!==void 0?(0,a.jsxs)("div",{children:[(0,a.jsx)("br",{}),"Lines ",null===(o=e.metadata)||void 0===o?void 0:null===(i=o.loc)||void 0===i?void 0:null===(l=i.lines)||void 0===l?void 0:l.from," to ",null===(c=e.metadata)||void 0===c?void 0:null===(d=c.loc)||void 0===d?void 0:null===(r=d.lines)||void 0===r?void 0:r.to]}):""]},"source:"+s)})})]}):""]})]})}var r=t(5207);function d(e){let s=JSON.parse(e.message.content),t=s.action,n=s.observation,[l,o]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:"ml-auto bg-green-600 rounded px-4 py-2 max-w-[80%] mb-8 whitespace-pre-wrap flex flex-col cursor-pointer",children:[(0,a.jsxs)("div",{className:"text-right ".concat(l?"w-full":""),onClick:e=>o(!l),children:[(0,a.jsxs)("code",{className:"mr-2 bg-slate-600 px-2 py-1 rounded hover:text-blue-600",children:["\uD83D\uDEE0️ ",(0,a.jsx)("b",{children:t.tool})]}),(0,a.jsx)("span",{className:l?"hidden":"",children:"\uD83D\uDD3D"}),(0,a.jsx)("span",{className:l?"":"hidden",children:"\uD83D\uDD3C"})]}),(0,a.jsxs)("div",{className:"overflow-hidden max-h-[0px] transition-[max-height] ease-in-out ".concat(l?"max-h-[360px]":""),children:[(0,a.jsx)("div",{className:"bg-slate-600 rounded p-4 mt-1 max-w-0 ".concat(l?"max-w-full":"transition-[max-width] delay-100"),children:(0,a.jsxs)("code",{className:"opacity-0 max-h-[100px] overflow-auto transition ease-in-out delay-150 ".concat(l?"opacity-100":""),children:["Tool Input:",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),JSON.stringify(t.toolInput)]})}),(0,a.jsx)("div",{className:"bg-slate-600 rounded p-4 mt-1 max-w-0 ".concat(l?"max-w-full":"transition-[max-width] delay-100"),children:(0,a.jsx)("code",{className:"opacity-0 max-h-[260px] overflow-auto transition ease-in-out delay-150 ".concat(l?"opacity-100":""),children:n})})]})]})}function c(e){let s=(0,i.useRef)(null),{endpoint:t,emptyStateComponent:c,placeholder:u,titleText:m="An LLM",showIngestForm:h,showIntermediateStepsToggle:x,emoji:p}=e,[f,g]=(0,i.useState)(!1),[v,w]=(0,i.useState)(!1),j=h&&(0,a.jsx)(r.q,{}),N=x&&(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{type:"checkbox",id:"show_intermediate_steps",name:"show_intermediate_steps",checked:f,onChange:e=>g(e.target.checked)}),(0,a.jsx)("label",{htmlFor:"show_intermediate_steps",children:" Show intermediate steps"})]}),[y,b]=(0,i.useState)({}),{messages:C,input:D,setInput:_,handleInputChange:S,handleSubmit:k,isLoading:E,setMessages:L}=(0,l.RJ)({api:t,onResponse(e){let s=e.headers.get("x-sources"),t=s?JSON.parse(atob(s)):[],a=e.headers.get("x-message-index");t.length&&null!==a&&b({...y,[a]:t})},onError:e=>{(0,n.Am)(e.message,{theme:"dark"})}});async function O(e){if(e.preventDefault(),s.current&&s.current.classList.add("grow"),C.length||await new Promise(e=>setTimeout(e,300)),null!=E?!E:!v){if(f){w(!0),_("");let e=C.concat({id:C.length.toString(),content:D,role:"user"});L(e);let s=await fetch(t,{method:"POST",body:JSON.stringify({messages:e,show_intermediate_steps:!0})}),l=await s.json();if(w(!1),200===s.status){var a;let s=(null!==(a=l.intermediate_steps)&&void 0!==a?a:[]).map((s,t)=>({id:(e.length+t).toString(),content:JSON.stringify(s),role:"system"}));for(let t of(console.log(e),s))e.push(t),L([...e]),await new Promise(e=>setTimeout(e,1e3+1e3*Math.random()));L([...e,{id:(e.length+s.length).toString(),content:l.output,role:"assistant"}])}else if(l.error)throw(0,n.Am)(l.error,{theme:"dark"}),Error(l.error)}else k(e)}}return(0,a.jsxs)("div",{className:"flex flex-col items-center p-4 md:p-8 rounded grow overflow-hidden ".concat(C.length>0?"border":""),children:[(0,a.jsxs)("h2",{className:"".concat(C.length>0?"":"hidden"," text-2xl"),children:[p," ",m]}),0===C.length?c:"",(0,a.jsx)("div",{className:"flex flex-col-reverse w-full mb-4 overflow-auto transition-[flex-grow] ease-in-out",ref:s,children:C.length>0?[...C].reverse().map((e,s)=>{let t=(C.length-1-s).toString();return"system"===e.role?(0,a.jsx)(d,{message:e},e.id):(0,a.jsx)(o,{message:e,aiEmoji:p,sources:y[t]},e.id)}):""}),0===C.length&&j,(0,a.jsxs)("form",{onSubmit:O,className:"flex w-full flex-col",children:[(0,a.jsx)("div",{className:"flex",children:N}),(0,a.jsxs)("div",{className:"flex w-full mt-4",children:[(0,a.jsx)("input",{className:"grow mr-8 p-4 rounded",value:D,placeholder:null!=u?u:"What's it like to be a pirate?",onChange:S}),(0,a.jsxs)("button",{type:"submit",className:"shrink-0 px-8 py-4 bg-sky-600 rounded w-28",children:[(0,a.jsxs)("div",{role:"status",className:"".concat(E||v?"":"hidden"," flex justify-center"),children:[(0,a.jsxs)("svg",{"aria-hidden":"true",className:"w-6 h-6 text-white animate-spin dark:text-white fill-sky-800",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,a.jsx)("span",{className:"sr-only",children:"Loading..."})]}),(0,a.jsx)("span",{className:E||v?"hidden":"",children:"Send"})]})]})]}),(0,a.jsx)(n.Ix,{})]})}function u(){let e=(0,a.jsx)("div",{});return(0,a.jsx)(c,{endpoint:"https://f4wo0au9r5.execute-api.us-east-1.amazonaws.com/default/claude-chat",emoji:"",titleText:"Chatty Assistant",placeholder:"I'm a chatty LLM assistant. Ask me anything!",emptyStateComponent:e})}}},function(e){e.O(0,[977,207,774,888,179],function(){return e(e.s=22)}),_N_E=e.O()}]);