import{r,e as p,j as a,o as i}from"./vendor.87031419.js";var l="/assets/beep.91452ec5.mp3";const d=()=>{const[e,u]=r.exports.useState(""),[n,t]=r.exports.useState(""),s=r.exports.useRef(null),c=o=>{u(o.key),s.current&&(s.current.currentTime=0,s.current.pause(),setTimeout(()=>{s.current.play()},50)),o.preventDefault(),o.stopPropagation()};return r.exports.useEffect(()=>{e===""?t("\u70B9\u51FB\u540E\u8F93\u5165"):e===" "?t("Space"):e.length===1?t(e.toLocaleUpperCase()):t(e)},[e]),p("div",{className:"Test",children:[a(i,{className:"home-input Test__input",onKeyDown:c}),a("div",{className:"Test__desc",children:a("div",{children:n})}),a("audio",{src:l,ref:s,preload:"auto"})]})};export{d as default};