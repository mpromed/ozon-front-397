import{_ as i,u as n,o as t,c as a,a as s,n as c,b as l}from"./index-4879573a.js";import{_ as r}from"./answerCheckMark-e06b8852.js";const d={class:"answer-checkbox"},h={class:"answer-checkbox-container"},b={key:0,src:r,alt:"check mark"},k=["innerHTML"],u={__name:"CheckboxAnswer",props:{isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},answerText:{type:String,default:""},isRight:{type:Boolean,default:!1},isRightAlt:{type:Boolean,default:!1},checkboxColor:{type:String,default:"#2ea809"}},setup(e){return n(o=>({"4e6f9f4f":e.checkboxColor})),(o,x)=>(t(),a("li",null,[s("div",d,[s("div",h,[s("div",{class:c([{"white-checkbox":!e.isChecked||e.isDisable&&e.isRight,"cursor-pointer":!e.isDisable,"alt-checkbox":e.isDisable&&e.isRightAlt},"answer-checkbox-rectangle"])},[e.isChecked?(t(),a("img",b)):l("",!0)],2)]),s("div",{innerHTML:e.answerText,class:c([{"cursor-pointer":!e.isDisable},"answer-checkbox-text"])},null,10,k)])]))}},m=i(u,[["__scopeId","data-v-12b26d73"]]);export{m as default};
