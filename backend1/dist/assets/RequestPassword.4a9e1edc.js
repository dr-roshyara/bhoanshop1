import{d as u,h as d,G as r,S as c,j as p,_ as f,f as x,w as _,g as n,o as b,a as o,l as w,b as a}from"./index.af44d7ce.js";const y=u({setup(){const e=d("");return{email:e,onSbumitFn:async()=>{console.log(e)}}},components:{GuestLayout:r,SubmitButton:c,TextInput:p}}),h={class:"min-w-screen min-h-screen flex flex-col items-baseline md:items-center md:justify-center p-2"},S={class:"bg-slate-50 text-gray-500 rounded-3xl shadow-xl w-full md:w-2/3 overflow-hidden",style:{"max-width":"1000px mx-auto"}},g={class:"flex flex-col md:p-4 text-center mx-auto md: max-w-lg mb-2 md:mb-3"},v=o("h1",{class:"text-gray-700 text-lg font-bold py-2"},"Request to Reset Password",-1);function V(e,t,$,B,F,G){const l=n("text-input"),m=n("submit-button"),i=n("GuestLayout");return b(),x(i,{title:"Request new password"},{default:_(()=>[o("div",h,[o("div",S,[o("div",g,[v,o("form",{class:"flex flex-col my-4 mb-3",onSubmit:t[1]||(t[1]=w((...s)=>e.onSbumitFn&&e.onSbumitFn(...s),["prevent"]))},[a(l,{modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=s=>e.email=s),type:"email",name:"email","label-name":"Email"},null,8,["modelValue"]),a(m,{title:"Submit"})],32)])])])]),_:1})}const q=f(y,[["render",V]]);export{q as default};
