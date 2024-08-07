//Forma de iterar sobre array
const a1 = [1,2,3,4,5,6,7,8,9]


// for(let valor of a1)
//     console.log("🚀 ~ valor:", valor)
let total = 0;
a1.forEach((valor)=>{
    total +=valor
    console.log(valor)
})
console.log("🚀 ~ total:", total)
