const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(t){if(o)return;o=!0,n.style.backgroundColor=c(),r=setInterval((()=>{n.style.backgroundColor=c()}),1e3)})),e.addEventListener("click",(function(t){o=!1,clearInterval(r)}));let o=!1,r=null;function c(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.89b6a3b7.js.map