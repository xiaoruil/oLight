const e=(e,t,l)=>{let a=e,n=r(l);for(let e of t)a=a.replace(new RegExp(e,"g"),`<mark style="${n}">${e}</mark>`);return a},r=e=>{let r={},t="";e.length>1&&(r=JSON.parse(e));for(let e in r){t+=`${e}:${r[e]};`}return t};export{e as default};