// const openClose = document.getElementById('tree')
// openClose.addEventListener("click", (e)=>{
//     const x = e.target.childNodes
//     x.forEach(result => result.hidden = !result.hidden) 


// })
  
// for (let i = 0; i < array.length; i++) {
    // all[i].addEventListener("click", family) 
// 
// }

const nombreVirtual = document.getElementById('tree')
nombreVirtual.addEventListener("click",(p)=>{
    const otroNombreVirtual = p.target.childNodes
    otroNombreVirtual.forEach(name => name.hidden = !name.hidden)
} )