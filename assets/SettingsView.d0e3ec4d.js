import{p as N,I as x,d as Y,m as E,a as j,b as k,u as R,g as A,c as v,e as Z,t as c,f as S,h as o,i as ee,j as le,R as te,r as $,k as H,w as ae,l as oe,V as ne,n as _,o as ue,q as se,s as M,v as G,x as ie,S as D,y as re,F as q,z as de,A as ce,B as ve,C as fe,D as me,E as P,G as be,H as C,J as Ve,K as L,L as s,M as O,N as ye,O as U,P as ge,Q as he}from"./index.99866d26.js";import{V as z,m as Ce,f as _e,a as Se}from"./VInput.fbe2e491.js";const J=Symbol.for("vuetify:selection-control-group"),T=N({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:x,trueIcon:x,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:Y},...E(),...j()},"v-selection-control-group"),Ie=k({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...T()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const l=R(e,"modelValue"),i=A(),u=v(()=>e.id||`v-selection-control-group-${i}`),t=v(()=>e.name||u.value);return ee(J,{modelValue:l}),Z({[e.defaultsTarget]:{color:c(e,"color"),disabled:c(e,"disabled"),density:c(e,"density"),error:c(e,"error"),inline:c(e,"inline"),modelValue:l,multiple:v(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:t,falseIcon:c(e,"falseIcon"),trueIcon:c(e,"trueIcon"),readonly:c(e,"readonly"),ripple:c(e,"ripple"),type:c(e,"type"),valueComparator:c(e,"valueComparator")}}),S(()=>{var r;return o("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],"aria-labelled-by":e.type==="radio"?u.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[(r=a.default)==null?void 0:r.call(a)])}),{}}}),K=N({label:String,trueValue:null,falseValue:null,value:null,...T()},"v-selection-control");function pe(e){const n=se(J,void 0),{densityClasses:a}=M(e),l=R(e,"modelValue"),i=v(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),u=v(()=>e.falseValue!==void 0?e.falseValue:!1),t=v(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),r=v({get(){const d=n?n.modelValue.value:l.value;return t.value?d.some(f=>e.valueComparator(f,i.value)):e.valueComparator(d,i.value)},set(d){if(e.readonly)return;const f=d?i.value:u.value;let m=f;t.value&&(m=d?[...G(l.value),f]:G(l.value).filter(b=>!e.valueComparator(b,i.value))),n?n.modelValue.value=m:l.value=m}}),{textColorClasses:y,textColorStyles:g}=ie(v(()=>r.value&&!e.error&&!e.disabled?e.color:void 0)),I=v(()=>r.value?e.trueIcon:e.falseIcon);return{group:n,densityClasses:a,trueValue:i,falseValue:u,model:r,textColorClasses:y,textColorStyles:g,icon:I}}const Q=le()({name:"VSelectionControl",directives:{Ripple:te},inheritAttrs:!1,props:K(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:a,slots:l}=n;const{densityClasses:i,icon:u,model:t,textColorClasses:r,textColorStyles:y,trueValue:g}=pe(e),I=A(),d=v(()=>e.id||`input-${I}`),f=$(!1),m=$(!1),b=$();function h(V){f.value=!0,(!D||D&&V.target.matches(":focus-visible"))&&(m.value=!0)}function p(){f.value=!1,m.value=!1}function B(V){t.value=V.target.checked}return S(()=>{var V,w;const F=l.label?l.label({label:e.label,props:{for:d.value}}):e.label,[W,X]=H(a);return o("div",_({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},i.value]},W),[o("div",{class:["v-selection-control__wrapper",r.value],style:y.value},[(V=l.default)==null?void 0:V.call(l),ae(o("div",{class:["v-selection-control__input"]},[u.value&&o(ne,{key:"icon",icon:u.value},null),o("input",_({ref:b,checked:t.value,disabled:e.disabled,id:d.value,onBlur:p,onFocus:h,onInput:B,"aria-readonly":e.readonly,type:e.type,value:g.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},X),null),(w=l.input)==null?void 0:w.call(l,{model:t,textColorClasses:r,textColorStyles:y,props:{onFocus:h,onBlur:p,id:d.value}})]),[[oe("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),F&&o(z,{for:d.value,clickable:!0},{default:()=>[F]})])}),{isFocused:f,input:b}}});function xe(e){return ue(e,Object.keys(Q.props))}const ke=k({name:"VRadio",props:{...K({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,n){let{slots:a}=n;return S(()=>o(Q,_(e,{class:"v-radio",type:"radio"}),a)),{}}});const Be=k({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...Ce(),...re(T(),["multiple"]),trueIcon:{type:x,default:"$radioOn"},falseIcon:{type:x,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:a,slots:l}=n;const i=A(),u=v(()=>e.id||`radio-group-${i}`),t=R(e,"modelValue");return S(()=>{const[r,y]=H(a),[g,I]=_e(e),[d,f]=xe({...e,multiple:!1}),m=l.label?l.label({label:e.label,props:{for:u.value}}):e.label;return o(Se,_({class:"v-radio-group"},r,g,{modelValue:t.value,"onUpdate:modelValue":b=>t.value=b,id:u.value}),{...l,default:b=>{let{id:h,isDisabled:p,isReadonly:B}=b;return o(q,null,[m&&o(z,{for:h.value},{default:()=>[m]}),o(Ie,_(d,{id:h.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:p.value,readonly:B.value},y,{modelValue:t.value,"onUpdate:modelValue":V=>t.value=V}),l)])}})}),{}}});const $e=k({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...j(),...de(),...E()},setup(e,n){let{slots:a}=n;const{themeClasses:l}=ce(e),{densityClasses:i}=M(e);return S(()=>{var u,t;return o(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},l.value,i.value]},{default:()=>[(u=a.top)==null?void 0:u.call(a),a.default&&o("div",{class:"v-table__wrapper",style:{height:ve(e.height)}},[o("table",null,[a.default()])]),(t=a.bottom)==null?void 0:t.call(a)]})}),{}}}),Pe=s("h1",{class:"text-center"},"\u8A2D\u5B9A",-1),Re=s("thead",{height:"52px"},[s("tr",null,[s("th",null,[s("span",{class:"firstLine font-weight-bold"},"\u540D\u7A31")]),s("th",null,[s("span",{class:"firstLine font-weight-bold"},"\u8A66\u807D")]),s("th",null,[s("span",{class:"firstLine font-weight-bold"},"\u9078\u64C7")])])],-1),Ae={class:"font-weight-bold"},Te=["src"],Ge={__name:"SettingsView",setup(e){const n=fe(),{alarms:a,selectedAlarms:l}=me(n);return(i,u)=>(P(),be(Ve,{class:"mt-8",id:"settings"},{default:C(()=>[o(L,{cols:"12"},{default:C(()=>[Pe]),_:1}),o(L,{cols:"12"},{default:C(()=>[o($e,{class:"settingsTable",density:"comfortable"},{default:C(()=>[Re,s("tbody",null,[(P(!0),O(q,null,ye(U(a),t=>(P(),O("tr",{class:"alarmLine",key:t.id,height:"100px"},[s("td",null,[s("span",Ae,ge(t.name),1)]),s("td",null,[s("audio",{src:t.file,controls:""},null,8,Te)]),s("td",null,[o(Be,{modelValue:U(l),"onUpdate:modelValue":u[0]||(u[0]=r=>he(l)?l.value=r:null)},{default:C(()=>[o(ke,{value:t.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1}))}};export{Ge as default};
